'use client';

import { useState } from 'react';
import { plansData, Feature } from '@/data/plans';

export default function ComparisonPage() {
  const [highlightDifferences, setHighlightDifferences] = useState(false);
  const [activeMobilePlan, setActiveMobilePlan] = useState<'basic' | 'pro' | 'enterprise'>('pro');

  const isRowIdentical = (feature: Feature) => {
    return feature.basic === feature.pro && feature.pro === feature.enterprise;
  };

  const displayedFeatures = plansData.filter((feature) => {
    if (!highlightDifferences) return true;
    return !isRowIdentical(feature);
  });

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 text-slate-900">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Compare Plans</h1>
            <p className="text-slate-600 mt-1">Find the right plan for your team.</p>
          </div>

          <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-200">
            <input
              type="checkbox"
              id="highlight-toggle"
              checked={highlightDifferences}
              onChange={(e) => setHighlightDifferences(e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
            <label 
              htmlFor="highlight-toggle" 
              className="text-sm font-medium text-slate-700 cursor-pointer select-none"
            >
              Highlight differences only
            </label>
          </div>
        </div>

        <div className="hidden md:block bg-white shadow-sm rounded-xl border border-slate-200 overflow-hidden">
          <table className="w-full border-collapse text-left">
            <caption>Feature comparison table across Basic, Pro, and Enterprise plans</caption>
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/70 text-slate-700 text-sm uppercase tracking-wider">
                <th scope="col" className="py-4 px-6 font-semibold">Features</th>
                <th scope="col" className="py-4 px-6 font-semibold w-1/4">Basic</th>
                <th scope="col" className="py-4 px-6 font-semibold w-1/4">Pro</th>
                <th scope="col" className="py-4 px-6 font-semibold w-1/4">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm">
              {displayedFeatures.map((feature) => {
                const identical = isRowIdentical(feature);
                return (
                  <tr 
                    key={feature.id}
                    className={`transition-colors ${
                      highlightDifferences && identical 
                        ? 'opacity-40 bg-slate-50' 
                        : 'hover:bg-slate-50/50'
                    }`}
                  >
                    <th scope="row" className="py-4 px-6 font-medium text-slate-900">
                      {feature.name}
                      {identical && highlightDifferences && (
                        <span className="ml-2 text-xs text-slate-400 font-normal">(Identical)</span>
                      )}
                    </th>
                    <td className="py-4 px-6 text-slate-600">
                      {renderValue(feature.basic)}
                    </td>
                    <td className="py-4 px-6 text-slate-600 font-medium">
                      {renderValue(feature.pro)}
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      {renderValue(feature.enterprise)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="md:hidden">
          <div className="flex rounded-lg bg-slate-200 p-1 mb-6">
            {(['basic', 'pro', 'enterprise'] as const).map((planKey) => (
              <button
                key={planKey}
                onClick={() => setActiveMobilePlan(planKey)}
                className={`flex-1 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all ${
                  activeMobilePlan === planKey
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {planKey}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 divide-y divide-slate-100">
            <div className="p-4 bg-slate-50 rounded-t-xl font-bold uppercase text-xs tracking-wider text-slate-500">
              Showing features for: <span className="text-blue-600">{activeMobilePlan}</span>
            </div>
            {displayedFeatures.map((feature) => {
              const identical = isRowIdentical(feature);
              return (
                <div 
                  key={feature.id} 
                  className={`p-4 flex items-center justify-between ${
                    highlightDifferences && identical ? 'opacity-40 bg-slate-50/50' : ''
                  }`}
                >
                  <span className="text-sm font-medium text-slate-800 pr-2">
                    {feature.name}
                  </span>
                  <span className="text-sm font-semibold text-slate-900 text-right">
                    {renderValue(feature[activeMobilePlan])}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </main>
  );
}

function renderValue(val: string | boolean) {
  if (typeof val === 'boolean') {
    return val ? (
      <span className="text-emerald-600 font-bold" aria-label="Included">✓</span>
    ) : (
      <span className="text-slate-300" aria-label="Not included">—</span>
    );
  }
  return val;
}