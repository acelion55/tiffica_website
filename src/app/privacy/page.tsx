'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Loader2 } from 'lucide-react';

interface LegalPageData {
  _id: string;
  pageType: 'privacy' | 'terms';
  title: string;
  content: string;
  lastUpdated: string;
}

export default function PrivacyPage() {
  const [content, setContent] = useState<LegalPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        setLoading(true);
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';
        const response = await fetch(`${apiUrl.replace('/api', '')}/api/legalpages/privacy`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch privacy policy');
        }
        
        const data = await response.json();
        setContent(data.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching privacy policy:', err);
        setError('Failed to load privacy policy. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPrivacyPolicy();
  }, []);

  return (
    <main className="min-h-screen bg-white pt-20 pb-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-orange-600 transition-colors mb-8 font-semibold"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-3">
            Privacy Policy
          </h1>
          <p className="text-gray-600 font-medium">
            Last updated on {content?.lastUpdated ? new Date(content.lastUpdated).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="animate-spin text-primary mb-4" size={32} />
            <p className="text-gray-600">Loading privacy policy...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-800 font-semibold">{error}</p>
          </div>
        ) : content ? (
          <article className="prose prose-lg max-w-4xl">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed font-medium text-base">
                {content.content}
              </div>
            </div>
            
            {/* Contact Section */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions about Privacy?</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about our privacy policy or how we handle your data, please get in touch:
              </p>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:supporttiffica@gmail.com" className="text-primary hover:text-orange-600">supporttiffica@gmail.com</a>
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> <a href="tel:+919983745802" className="text-primary hover:text-orange-600">+91 9983745802</a>
                </p>
              </div>
            </div>
          </article>
        ) : null}
      </div>

      {/* Footer Link to Terms */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-gray-200">
        <p className="text-gray-600 font-medium mb-4">
          Also see our <Link href="/terms" className="text-primary hover:text-orange-600 font-semibold">Terms & Conditions</Link>
        </p>
      </div>
    </main>
  );
}
