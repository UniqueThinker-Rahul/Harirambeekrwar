import React, { useState } from 'react';

const Tools = () => {
    const [name, setName] = useState('');
    const [result, setResult] = useState<number | null>(null);

    const calculateNumerology = (e: React.FormEvent) => {
        e.preventDefault();
        let sum = 0;
        for (let i = 0; i < name.length; i++) {
            const charCode = name.toLowerCase().charCodeAt(i);
            if (charCode >= 97 && charCode <= 122) {
                sum += (charCode - 96) % 9 || 9;
            }
        }
        while (sum > 9) {
            sum = String(sum).split('').reduce((a, b) => Number(a) + Number(b), 0);
        }
        setResult(sum);
    };

    return (
        <div className="min-h-screen py-16 px-4 bg-white">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4 text-dark-grey">Free Cosmic Tools</h1>
                <p className="text-medium-grey mb-12">Use our calculators to find basic insights instantly.</p>
                
                <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl">
                    <h2 className="text-2xl font-bold text-dark-grey mb-6">Numerology Calculator</h2>
                    <form onSubmit={calculateNumerology} className="space-y-4 max-w-sm mx-auto">
                        <input required type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter full name" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary" />
                        <button type="submit" className="w-full bg-secondary text-white py-3 rounded-xl hover:bg-red-800 transition">Calculate Destiny Number</button>
                    </form>
                    {result !== null && (
                        <div className="mt-6 p-4 bg-yellow-50 text-dark-grey rounded-xl font-medium">
                            Your Destiny Number is: <span className="text-2xl font-bold text-secondary">{result}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Tools;
