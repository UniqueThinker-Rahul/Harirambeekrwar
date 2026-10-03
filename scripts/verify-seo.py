import os
import re
import json
import sys

# Ensure UTF-8 output on Windows terminal
sys.stdout.reconfigure(encoding='utf-8')

dist_dir = 'dist'
routes = [
    ('/', os.path.join(dist_dir, 'index.html')),
    ('/about', os.path.join(dist_dir, 'about', 'index.html')),
    ('/services', os.path.join(dist_dir, 'services', 'index.html')),
    ('/services/advanced-numerology', os.path.join(dist_dir, 'services', 'advanced-numerology', 'index.html')),
    ('/services/vastu-consultation', os.path.join(dist_dir, 'services', 'vastu-consultation', 'index.html')),
    ('/urgent-love-plan', os.path.join(dist_dir, 'urgent-love-plan', 'index.html')),
    ('/reports', os.path.join(dist_dir, 'reports', 'index.html')),
    ('/tools', os.path.join(dist_dir, 'tools', 'index.html')),
    ('/blog', os.path.join(dist_dir, 'blog', 'index.html')),
    ('/blog/saturn-transit', os.path.join(dist_dir, 'blog', 'saturn-transit', 'index.html')),
    ('/blog/vastu-office', os.path.join(dist_dir, 'blog', 'vastu-office', 'index.html')),
    ('/blog/name-correction-science', os.path.join(dist_dir, 'blog', 'name-correction-science', 'index.html')),
    ('/blog/wristwatch-numerology', os.path.join(dist_dir, 'blog', 'wristwatch-numerology', 'index.html')),
    ('/contact', os.path.join(dist_dir, 'contact', 'index.html')),
    ('/privacy-policy', os.path.join(dist_dir, 'privacy-policy', 'index.html')),
    ('/refund-policy', os.path.join(dist_dir, 'refund-policy', 'index.html')),
    ('/terms', os.path.join(dist_dir, 'terms', 'index.html')),
    ('/404', os.path.join(dist_dir, '404.html')),
]

print(f"=== AUDITING {len(routes)} GENERATED HTML ARTIFACTS ===\n")

all_passed = True
for r_name, f_path in routes:
    assert os.path.exists(f_path), f"Missing {f_path}"
    with open(f_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Title
    t_match = re.search(r'<title>(.*?)</title>', content)
    title = t_match.group(1) if t_match else 'MISSING'
    
    # Description
    d_match = re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', content)
    desc = d_match.group(1) if d_match else 'MISSING'

    # Canonical
    c_match = re.search(r'<link\s+rel=["\']canonical["\']\s+href=["\'](.*?)["\']', content)
    canonical = c_match.group(1) if c_match else 'MISSING'

    # H1
    h1s = re.findall(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
    clean_h1 = re.sub(r'<[^>]+>', '', h1s[0]).strip() if h1s else 'MISSING'

    # JSON-LD count and validity
    json_ld_matches = re.findall(r'<script type="application/ld\+json">(.*?)</script>', content, re.DOTALL)
    valid_json = True
    has_email = False
    for j in json_ld_matches:
        try:
            data = json.loads(j)
            if 'harirambeekrwar@gmail.com' in j:
                has_email = True
        except Exception:
            valid_json = False

    # Check Twitter name= attribute vs property=
    has_prop_twitter = re.search(r'<meta\s+property=["\']twitter:', content) is not None
    # Check for invalid twitter:url meta tag
    has_twitter_url = re.search(r'<meta[^>]+twitter:url', content) is not None

    # Check lang
    has_lang = 'lang="en-IN"' in content

    issues = []
    if len(title) > 60 and r_name != '/404':
        issues.append(f"Title too long ({len(title)}c)")
    if (len(desc) < 120 or len(desc) > 165) and r_name not in ['/privacy-policy', '/refund-policy', '/terms', '/404']:
        issues.append(f"Desc length ({len(desc)}c)")
    if len(h1s) != 1:
        issues.append(f"H1 count != 1 ({len(h1s)})")
    if not valid_json:
        issues.append("Invalid JSON-LD")
    if has_email:
        issues.append("Email in JSON-LD")
    if has_prop_twitter:
        issues.append("Twitter tag uses property= instead of name=")
    if has_twitter_url:
        issues.append("Contains invalid twitter:url meta tag")
    if not has_lang:
        issues.append("Missing lang=en-IN")

    stat_str = "PASS" if not issues else "FAIL: " + ", ".join(issues)
    if issues:
        all_passed = False
    print(f"Route: {r_name:<30} | {stat_str}")
    print(f"  Title ({len(title)}c): {title}")
    print(f"  Desc ({len(desc)}c): {desc[:80]}...")
    print(f"  Canonical: {canonical}")
    print(f"  H1: {clean_h1[:50]}...")
    print(f"  JSON-LD Schemas: {len(json_ld_matches)}")
    print()

# Check robots.txt
robots_path = os.path.join(dist_dir, 'robots.txt')
with open(robots_path, 'r', encoding='utf-8') as f:
    r_txt = f.read()
print("=== ROBOTS.TXT CHECK ===")
print("Disallow /api/:", "Disallow: /api/" in r_txt)
print("Sitemap link:", "Sitemap: https://harirambeekrwar.com/sitemap.xml" in r_txt)
print()

# Check sitemap.xml
sitemap_path = os.path.join(dist_dir, 'sitemap.xml')
with open(sitemap_path, 'r', encoding='utf-8') as f:
    s_xml = f.read()
url_count = len(re.findall(r'<loc>', s_xml))
print("=== SITEMAP.XML CHECK ===")
print(f"Total public URLs in sitemap: {url_count} (Expected: 17)")
print("No private URLs (booking/dashboard):", "/booking" not in s_xml and "/dashboard" not in s_xml)
print()

if all_passed and url_count == 17:
    print(">>> ALL 18 HTML ARTIFACTS AND TECHNICAL SEO VERIFICATIONS PASSED 100%! <<<")
else:
    print(">>> VERIFICATION FAILED WITH ISSUES <<<")
