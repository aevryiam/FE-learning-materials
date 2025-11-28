import StepCard from "@/components/Element/StepCard";
import CodeBlock from "@/components/Element/CodeBlock";
import ExampleBox from "@/components/Element/ExampleBox";

export default function NextJSPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8 bg-white rounded-lg border">
        <h1 className="text-4xl font-bold text-black mb-4">
          Next.js dengan App Router
        </h1>
        <p className="text-xl text-black max-w-3xl mx-auto">
          Framework React untuk produksi dengan App Router yang powerful dan
          modern
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-2xl font-bold text-black mb-4">Kenapa Next.js?</h2>
        <p className="text-black leading-relaxed mb-4">
          Next.js adalah framework React yang memberikan fitur production-ready
          seperti Server-Side Rendering (SSR), Static Site Generation (SSG), API
          Routes, dan masih banyak lagi.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Fitur Utama</h3>
            <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
              <li>Server-Side Rendering (SSR)</li>
              <li>Static Site Generation (SSG)</li>
              <li>File-based routing</li>
              <li>API Routes built-in</li>
              <li>Image optimization</li>
              <li>TypeScript support</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">
              App Router vs Pages Router
            </h3>
            <div className="space-y-2 text-sm">
              <div className="font-medium text-blue-800">
                App Router (Recommended)
              </div>
              <ul className="list-disc list-inside text-blue-700 space-y-1">
                <li>Server Components by default</li>
                <li>Layout nesting yang lebih baik</li>
                <li>Loading states & error handling</li>
                <li>Streaming & Suspense</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Server vs Client Components */}
      <StepCard stepNumber={1} title="Server vs Client Components">
        <p className="mb-4">
          Perbedaan fundamental dalam App Router adalah pemisahan antara Server
          Components dan Client Components.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-3">
              Server Components (Default)
            </h4>
            <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm mb-4">
              <li>Dirender di server</li>
              <li>Tidak bisa gunakan hooks (useState, useEffect)</li>
              <li>Tidak bisa gunakan event handlers</li>
              <li>Bisa akses database/backend langsung</li>
              <li>SEO friendly</li>
              <li>Bundle size lebih kecil</li>
            </ul>

            <ExampleBox title="Contoh Server Component" type="info">
              <CodeBlock>
                {`// app/posts/page.tsx
async function PostsPage() {
  // Fetch data langsung di server
  const posts = await fetch('https://api.example.com/posts');
  const postsData = await posts.json();

  return (
    <div>
      <h1>All Posts</h1>
      {postsData.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}`}
              </CodeBlock>
            </ExampleBox>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-800 mb-3">
              Client Components
            </h4>
            <ul className="list-disc list-inside text-purple-700 space-y-1 text-sm mb-4">
              <li>Dirender di browser</li>
              <li>Bisa gunakan hooks & state</li>
              <li>Bisa handle user interactions</li>
              <li>Perlu tambah &apos;use client&apos; directive</li>
              <li>Interactive components</li>
            </ul>

            <ExampleBox title="Contoh Client Component" type="info">
              <CodeBlock>
                {`// components/Counter.tsx
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
              </CodeBlock>
            </ExampleBox>
          </div>
        </div>

        <ExampleBox title="Best Practice: Hybrid Approach" type="success">
          <CodeBlock>
            {`// app/dashboard/page.tsx (Server Component)
import Counter from '@/components/Counter'; // Client Component
import UserProfile from '@/components/UserProfile'; // Server Component

export default async function Dashboard() {
  // Fetch data di server
  const userData = await fetchUserData();

  return (
    <div>
      <h1>Dashboard</h1>
      
      {/* Server Component untuk data yang static */}
      <UserProfile user={userData} />
      
      {/* Client Component untuk interactivity */}
      <Counter />
    </div>
  );
}`}
          </CodeBlock>
        </ExampleBox>
      </StepCard>

      {/* File-based Routing */}
      <StepCard stepNumber={2} title="File-based Routing">
        <p className="mb-4">
          Next.js menggunakan file-based routing dimana struktur folder di app/
          otomatis menjadi URL routes.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold mb-3">Struktur Routing App Router</h4>
          <CodeBlock language="text">
            {`app/
├── page.tsx                    // → /
├── about/
│   └── page.tsx               // → /about
├── blog/
│   ├── page.tsx               // → /blog
│   └── [slug]/
│       └── page.tsx           // → /blog/[slug]
├── products/
│   ├── page.tsx               // → /products
│   ├── [id]/
│   │   └── page.tsx           // → /products/[id]
│   └── [...categories]/
│       └── page.tsx           // → /products/[...categories]
├── layout.tsx                  // Root layout
├── loading.tsx                 // Global loading UI
├── error.tsx                   // Global error UI
└── not-found.tsx              // 404 page`}
          </CodeBlock>
        </div>

        <div className="space-y-4">
          <ExampleBox title="Dynamic Routes" type="info">
            <CodeBlock>
              {`// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
    </div>
  );
}

// app/products/[id]/page.tsx  
export default function Product({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Product ID: {params.id}</h1>
    </div>
  );
}`}
            </CodeBlock>
          </ExampleBox>

          <ExampleBox title="Catch-all Routes" type="info">
            <CodeBlock>
              {`// app/docs/[...segments]/page.tsx
export default function Docs({ params }: { params: { segments: string[] } }) {
  return (
    <div>
      <h1>Documentation</h1>
      <p>Path: {params.segments.join('/')}</p>
    </div>
  );
}

// URL examples:
// /docs/getting-started → segments: ['getting-started']
// /docs/api/users/create → segments: ['api', 'users', 'create']`}
            </CodeBlock>
          </ExampleBox>
        </div>
      </StepCard>

      {/* Layouts */}
      <StepCard stepNumber={3} title="Layouts & Navigation">
        <p className="mb-4">
          Layouts memungkinkan kita membuat UI yang shared across multiple pages
          dengan nested layouts.
        </p>

        <div className="space-y-6">
          <ExampleBox title="Root Layout (Required)" type="info">
            <CodeBlock>
              {`// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          {/* Navigation yang tampil di semua halaman */}
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        
        <main>{children}</main>
        
        <footer>
          {/* Footer yang tampil di semua halaman */}
          <p>&copy; 2024 My Website</p>
        </footer>
      </body>
    </html>
  );
}`}
            </CodeBlock>
          </ExampleBox>

          <ExampleBox title="Nested Layout" type="info">
            <CodeBlock>
              {`// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      {/* Sidebar hanya untuk dashboard pages */}
      <aside className="w-64 bg-gray-100">
        <nav>
          <Link href="/dashboard">Overview</Link>
          <Link href="/dashboard/analytics">Analytics</Link>
          <Link href="/dashboard/settings">Settings</Link>
        </nav>
      </aside>
      
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}

// Struktur:
// app/dashboard/layout.tsx
// app/dashboard/page.tsx         → /dashboard
// app/dashboard/analytics/page.tsx → /dashboard/analytics
// app/dashboard/settings/page.tsx  → /dashboard/settings`}
            </CodeBlock>
          </ExampleBox>
        </div>
      </StepCard>

      {/* Data Fetching */}
      <StepCard stepNumber={4} title="Data Fetching Patterns">
        <p className="mb-4">
          Next.js App Router menyediakan beberapa cara untuk fetch data yang
          dioptimasi untuk performa.
        </p>

        <div className="space-y-6">
          <ExampleBox title="Server Component Data Fetching" type="success">
            <CodeBlock>
              {`// app/posts/page.tsx
async function PostsPage() {
  // Static generation (build time)
  const posts = await fetch('https://api.example.com/posts', {
    cache: 'force-cache' // Default behavior
  });
  
  // Revalidate every 60 seconds
  const recentPosts = await fetch('https://api.example.com/recent', {
    next: { revalidate: 60 }
  });
  
  // Always fresh (no cache)
  const liveData = await fetch('https://api.example.com/live', {
    cache: 'no-store'
  });

  return (
    <div>
      {/* Render data */}
    </div>
  );
}`}
            </CodeBlock>
          </ExampleBox>

          <ExampleBox title="Client Component Data Fetching" type="info">
            <CodeBlock>
              {`// components/UserPosts.tsx
'use client';

import { useState, useEffect } from 'react';
import { useFetch } from '@/utils/hooks';

export default function UserPosts({ userId }: { userId: string }) {
  const { data: posts, loading, error } = useFetch(\`/api/users/\${userId}/posts\`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {posts?.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}`}
            </CodeBlock>
          </ExampleBox>

          <ExampleBox title="Loading & Error States" type="info">
            <CodeBlock>
              {`// app/posts/loading.tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <span className="ml-2">Loading posts...</span>
    </div>
  );
}

// app/posts/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="text-center p-8">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Something went wrong!
      </h2>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <button 
        onClick={reset}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Try again
      </button>
    </div>
  );
}`}
            </CodeBlock>
          </ExampleBox>
        </div>
      </StepCard>

      {/* Best Practices */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Best Practices
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">Do</h3>
              <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
                <li>Gunakan Server Components untuk data fetching</li>
                <li>Client Components hanya untuk interactivity</li>
                <li>Manfaatkan loading.tsx dan error.tsx</li>
                <li>Optimize images dengan next/image</li>
                <li>Gunakan TypeScript untuk type safety</li>
                <li>Implement proper SEO dengan metadata</li>
              </ul>
            </div>

            <ExampleBox title="Metadata untuk SEO" type="success">
              <CodeBlock>
                {`// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const post = await fetchPost(params.slug);
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}`}
              </CodeBlock>
            </ExampleBox>
          </div>

          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 mb-2">Don&apos;t</h3>
              <ul className="list-disc list-inside text-red-700 space-y-1 text-sm">
                <li>Jangan gunakan useEffect untuk data fetching di SSR</li>
                <li>Jangan overuse Client Components</li>
                <li>Hindari fetch di useEffect tanpa cleanup</li>
                <li>Jangan hardcode URLs, gunakan environment variables</li>
                <li>Avoid deep nesting layouts tanpa alasan</li>
              </ul>
            </div>

            <ExampleBox title="Environment Variables" type="info">
              <CodeBlock>
                {`// .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://...

// utils/config.ts
export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  dbUrl: process.env.DATABASE_URL, // Server only
};`}
              </CodeBlock>
            </ExampleBox>
          </div>
        </div>
      </div>

      {/* Performance Tips */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Performance Tips
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-3">
              Image Optimization
            </h3>
            <CodeBlock>
              {`import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero"
  width={800}
  height={400}
  priority // For above-the-fold
  placeholder="blur"
/>`}
            </CodeBlock>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">
              Dynamic Imports
            </h3>
            <CodeBlock>
              {`import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('./Chart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false // Disable SSR for this component
});`}
            </CodeBlock>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-3">Streaming</h3>
            <CodeBlock>
              {`import { Suspense } from 'react';

<Suspense fallback={<Loading />}>
  <SlowComponent />
</Suspense>`}
            </CodeBlock>
          </div>
        </div>
      </div>
    </div>
  );
}
