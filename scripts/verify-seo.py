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
    ('/vastu-consultation', os.path.join(dist_dir, 'vastu-consultation', 'index.html')),
    ('/blog', os.path.join(dist_dir, 'blog', 'index.html')),
    ('/blog/saturn-transit', os.path.join(dist_dir, 'blog', 'saturn-transit', 'index.html')),
    ('/blog/business-numerology-growth', os.path.join(dist_dir, 'blog', 'business-numerology-growth', 'index.html')),
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
    for j in json_ld_matches:
        try:
            parsed = json.loads(j)
        except Exception:
            valid_json = False

    t_pass = '✓' if (title != 'MISSING' and len(title) > 10) else '✗'
    d_pass = '✓' if (desc != 'MISSING' and len(desc) > 30) else '✗'
    c_pass = '✓' if canonical != 'MISSING' else '✗'
    h_pass = '✓' if clean_h1 != 'MISSING' else '✗'
    j_pass = '✓' if (len(json_ld_matches) > 0 and valid_json) or r_name == '/404' else '✗'

    if any(x == '✗' for x in [t_pass, d_pass, c_pass, h_pass, j_pass]):
        all_passed = False
        print(f"FAIL: {r_name}")
        print(f"  Title: {t_pass} [{title}]")
        print(f"  Desc:  {d_pass} [{desc[:60]}...]")
        print(f"  Canon: {c_pass} [{canonical}]")
        print(f"  H1:    {h_pass} [{clean_h1[:40]}]")
        print(f"  JSON:  {j_pass} ({len(json_ld_matches)} schemas)")
    else:
        print(f"PASS: {r_name:<30} Title: {len(title):<2}c | Desc: {len(desc):<3}c | Schemas: {len(json_ld_matches)}")

print("\n-------------------------------------------------------------")
if all_passed:
    print("ALL ROUTE AUDITS PASSED! Pre-rendered metadata and schemas 100% sound.")
else:
    print("SOME AUDITS FAILED.")
