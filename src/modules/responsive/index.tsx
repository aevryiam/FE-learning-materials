import StepCard from "@/components/Element/StepCard";
import CodeBlock from "@/components/Element/CodeBlock";
import ExampleBox from "@/components/Element/ExampleBox";

export default function ResponsivePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8 bg-white rounded-lg border">
        <h1 className="text-4xl font-bold text-black mb-4">
          Responsive Design
        </h1>
        <p className="text-xl text-black max-w-3xl mx-auto">
          Teknik membuat website yang terlihat bagus dan functional di semua
          device
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-2xl font-bold text-black mb-4">
          Kenapa Responsive Design Penting?
        </h2>
        <p className="text-black leading-relaxed mb-4">
          Dengan variety device yang ada (mobile, tablet, desktop, smartwatch),
          responsive design memastikan website dapat diakses dengan baik di
          semua platform.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <h3 className="font-semibold text-blue-800 mb-1">Mobile First</h3>
            <p className="text-sm text-blue-700">
              Start dengan mobile, scale up ke desktop
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <h3 className="font-semibold text-green-800 mb-1">Performance</h3>
            <p className="text-sm text-green-700">
              Optimized loading untuk setiap device
            </p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
            <h3 className="font-semibold text-purple-800 mb-1">UX</h3>
            <p className="text-sm text-purple-700">
              User experience yang konsisten
            </p>
          </div>
        </div>
      </div>

      {/* Breakpoints */}
      <StepCard stepNumber={1} title="Memahami Breakpoints">
        <p className="mb-4">
          Breakpoints adalah titik dimana layout website berubah untuk
          mengakomodasi ukuran screen yang berbeda.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold mb-3">Tailwind CSS Breakpoints</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <CodeBlock>
                {`Default (mobile): < 640px
sm: >= 640px  (Small devices)
md: >= 768px  (Medium devices) 
lg: >= 1024px (Large devices)
xl: >= 1280px (Extra large)
2xl: >= 1536px (2x Extra large)`}
              </CodeBlock>
            </div>
            <div className="space-y-2">
              <div className="bg-red-100 p-2 rounded text-sm">
                Default: Phone portrait
              </div>
              <div className="bg-orange-100 p-2 rounded text-sm">
                sm: Phone landscape
              </div>
              <div className="bg-yellow-100 p-2 rounded text-sm">
                md: Tablet portrait
              </div>
              <div className="bg-green-100 p-2 rounded text-sm">
                lg: Tablet landscape
              </div>
              <div className="bg-blue-100 p-2 rounded text-sm">xl: Desktop</div>
              <div className="bg-purple-100 p-2 rounded text-sm">
                2xl: Large desktop
              </div>
            </div>
          </div>
        </div>

        <ExampleBox title="Mobile-First Logic" type="info">
          <CodeBlock>
            {`<!-- Mobile-first approach -->
<div className="
  w-full           /* Mobile: full width */
  sm:w-1/2         /* Small+: half width */
  md:w-1/3         /* Medium+: 1/3 width */
  lg:w-1/4         /* Large+: 1/4 width */
">
  Responsive width
</div>

<!-- Class berlaku dari breakpoint ke atas -->
<!-- sm:w-1/2 berarti width 50% mulai dari 640px ke atas -->`}
          </CodeBlock>
        </ExampleBox>
      </StepCard>

      {/* Grid & Layout */}
      <StepCard stepNumber={2} title="Responsive Grid & Layout">
        <p className="mb-4">
          Grid dan flexbox adalah foundation untuk responsive layout yang
          flexible.
        </p>

        <div className="space-y-6">
          <ExampleBox title="Responsive Grid Cards" type="success">
            <CodeBlock>
              {`<!-- Card grid yang responsive -->
<div className="
  grid 
  grid-cols-1      /* Mobile: 1 kolom */
  sm:grid-cols-2   /* Small+: 2 kolom */
  lg:grid-cols-3   /* Large+: 3 kolom */ 
  xl:grid-cols-4   /* XL+: 4 kolom */
  gap-4            /* Gap konsisten */
  p-4
">
  <div className="bg-white rounded-lg shadow p-4">
    <h3>Card 1</h3>
    <p>Content goes here</p>
  </div>
  <div className="bg-white rounded-lg shadow p-4">
    <h3>Card 2</h3>
    <p>Content goes here</p>
  </div>
  <!-- More cards... -->
</div>`}
            </CodeBlock>
          </ExampleBox>

          <ExampleBox title="Responsive Navbar" type="success">
            <CodeBlock title="components/ResponsiveNavbar.tsx">
              {`'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              Logo
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link 
                href="/" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}`}
            </CodeBlock>
          </ExampleBox>
        </div>
      </StepCard>

      {/* Typography & Spacing */}
      <StepCard stepNumber={3} title="Responsive Typography & Spacing">
        <p className="mb-4">
          Typography dan spacing yang responsive membuat content lebih readable
          di semua device.
        </p>

        <div className="space-y-6">
          <ExampleBox title="Responsive Typography" type="success">
            <CodeBlock>
              {`<!-- Heading yang scale dengan device -->
<h1 className="
  text-2xl         /* Mobile: 24px */
  sm:text-3xl      /* Small+: 30px */
  md:text-4xl      /* Medium+: 36px */
  lg:text-5xl      /* Large+: 48px */
  font-bold 
  text-center
  mb-4
">
  Responsive Heading
</h1>

<!-- Body text -->
<p className="
  text-sm          /* Mobile: 14px */
  md:text-base     /* Medium+: 16px */
  lg:text-lg       /* Large+: 18px */
  leading-relaxed  /* Line height untuk readability */
  text-gray-600
  max-w-3xl       /* Limit width untuk readability */
  mx-auto         /* Center text block */
">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Responsive text yang readable di semua device.
</p>`}
            </CodeBlock>
          </ExampleBox>

          <ExampleBox title="Responsive Spacing" type="success">
            <CodeBlock>
              {`<!-- Container dengan responsive padding -->
<div className="
  p-4              /* Mobile: 16px padding */
  sm:p-6           /* Small+: 24px padding */
  lg:p-8           /* Large+: 32px padding */
  max-w-7xl       
  mx-auto
">
  
  <!-- Section dengan responsive margin -->
  <section className="
    mb-8             /* Mobile: 32px bottom margin */
    md:mb-12         /* Medium+: 48px bottom margin */
    lg:mb-16         /* Large+: 64px bottom margin */
  ">
    <h2 className="
      text-xl
      md:text-2xl
      lg:text-3xl
      mb-4
      md:mb-6
    ">
      Section Title
    </h2>
    
    <!-- Content grid dengan responsive gap -->
    <div className="
      grid 
      grid-cols-1 
      md:grid-cols-2 
      gap-4 
      md:gap-6 
      lg:gap-8
    ">
      <!-- Grid items -->
    </div>
  </section>
</div>`}
            </CodeBlock>
          </ExampleBox>
        </div>
      </StepCard>

      {/* Images & Media */}
      <StepCard stepNumber={4} title="Responsive Images & Media">
        <p className="mb-4">
          Images dan media memerlukan handling khusus untuk performa dan visual
          yang optimal di berbagai device.
        </p>

        <div className="space-y-6">
          <ExampleBox title="Next.js Image Optimization" type="success">
            <CodeBlock title="components/ResponsiveImage.tsx">
              {`import Image from 'next/image';

export default function ResponsiveImage() {
  return (
    <div className="relative">
      {/* Hero image dengan responsive sizing */}
      <div className="
        relative 
        h-64           /* Mobile: 256px height */
        sm:h-80        /* Small+: 320px height */
        lg:h-96        /* Large+: 384px height */
        w-full 
        overflow-hidden 
        rounded-lg
      ">
        <Image
          src="/hero-image.jpg"
          alt="Hero"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
          priority
        />
      </div>
      
      {/* Gallery dengan responsive columns */}
      <div className="
        mt-8
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        lg:grid-cols-4 
        gap-2 
        sm:gap-4
      ">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="relative aspect-square">
            <Image
              src={\`/gallery/image-\${i}.jpg\`}
              alt={\`Gallery \${i}\`}
              fill
              className="object-cover rounded"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}`}
            </CodeBlock>
          </ExampleBox>

          <ExampleBox title="Responsive Video" type="info">
            <CodeBlock>
              {`<!-- Video container yang responsive -->
<div className="
  relative 
  w-full 
  aspect-video     /* Aspect ratio 16:9 */
  bg-gray-100 
  rounded-lg 
  overflow-hidden
">
  <iframe
    src="https://www.youtube.com/embed/video-id"
    className="absolute inset-0 w-full h-full"
    frameBorder="0"
    allowFullScreen
  />
</div>

<!-- Alternative dengan different aspect ratios -->
<div className="
  aspect-video     /* 16:9 for desktop */
  sm:aspect-square /* 1:1 for mobile */
  lg:aspect-video  /* Back to 16:9 for large screens */
">
  <!-- Video content -->
</div>`}
            </CodeBlock>
          </ExampleBox>
        </div>
      </StepCard>

      {/* Advanced Techniques */}
      <StepCard stepNumber={5} title="Advanced Responsive Techniques">
        <p className="mb-4">
          Teknik advanced untuk handling edge cases dan optimasi performa di
          berbagai device.
        </p>

        <div className="space-y-6">
          <ExampleBox title="Container Queries (Future)" type="info">
            <CodeBlock>
              {`/* CSS Container Queries - Coming soon to Tailwind */
.card-container {
  container-type: inline-size;
}

@container (min-width: 300px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}

@container (min-width: 500px) {
  .card {
    grid-template-columns: 1fr 1fr 1fr;
  }
}`}
            </CodeBlock>
            <p className="text-sm text-gray-600 mt-2">
              Container queries akan memungkinkan responsive design berdasarkan
              ukuran parent container, bukan viewport.
            </p>
          </ExampleBox>

          <ExampleBox
            title="Conditional Rendering berdasarkan Screen Size"
            type="success"
          >
            <CodeBlock title="utils/hooks/useMediaQuery.ts">
              {`import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

// Usage in component:
export default function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div>
      {isMobile && <MobileOnlyComponent />}
      {isDesktop && <DesktopOnlyComponent />}
      
      {/* Alternative dengan CSS classes */}
      <div className="block md:hidden">
        Mobile content
      </div>
      <div className="hidden md:block">
        Desktop content
      </div>
    </div>
  );
}`}
            </CodeBlock>
          </ExampleBox>

          <ExampleBox title="Responsive Tables" type="success">
            <CodeBlock>
              {`<!-- Mobile-friendly table -->
<div className="overflow-x-auto">
  <table className="min-w-full bg-white border">
    <thead className="bg-gray-50">
      <tr>
        <th className="
          px-2 py-3 
          sm:px-6 sm:py-3 
          text-left text-xs 
          font-medium text-gray-500 
          uppercase tracking-wider
        ">
          Name
        </th>
        <th className="
          hidden sm:table-cell 
          px-6 py-3 text-left text-xs 
          font-medium text-gray-500 
          uppercase tracking-wider
        ">
          Email
        </th>
        <th className="
          px-2 py-3 
          sm:px-6 sm:py-3 
          text-left text-xs 
          font-medium text-gray-500 
          uppercase tracking-wider
        ">
          Status
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-2 py-4 sm:px-6 sm:py-4 whitespace-nowrap">
          <div className="text-sm font-medium text-gray-900">John Doe</div>
          {/* Show email on mobile under name */}
          <div className="text-sm text-gray-500 sm:hidden">john@example.com</div>
        </td>
        <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          john@example.com
        </td>
        <td className="px-2 py-4 sm:px-6 sm:py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Active
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>`}
            </CodeBlock>
          </ExampleBox>
        </div>
      </StepCard>

      {/* Testing & Tools */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Testing & Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">
                Testing Tools
              </h3>
              <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                <li>Chrome DevTools Device Simulation</li>
                <li>Firefox Responsive Design Mode</li>
                <li>Safari Web Inspector</li>
                <li>BrowserStack untuk real device testing</li>
                <li>Responsively App</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">
                Testing Checklist
              </h3>
              <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
                <li>Test di semua major breakpoints</li>
                <li>Verify touch targets (min 44px)</li>
                <li>Check horizontal scrolling</li>
                <li>Test form usability di mobile</li>
                <li>Verify image loading & quality</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-2">
                Performance Tips
              </h3>
              <ul className="list-disc list-inside text-purple-700 space-y-1 text-sm">
                <li>Use Next.js Image untuk lazy loading</li>
                <li>Implement critical CSS untuk above-the-fold</li>
                <li>Minimize layout shifts (CLS)</li>
                <li>Use proper viewport meta tag</li>
                <li>Test loading speed di slow connections</li>
              </ul>
            </div>

            <ExampleBox title="Viewport Meta Tag" type="info">
              <CodeBlock language="html">
                {`<!-- Essential untuk responsive design -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Prevent zoom pada form inputs (iOS) -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">`}
              </CodeBlock>
            </ExampleBox>
          </div>
        </div>
      </div>

      {/* Common Patterns */}
      <div className="bg-linear-to-r from-green-50 to-blue-50 rounded-lg p-6 border">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Common Responsive Patterns
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Sidebar Layout</h3>
            <CodeBlock language="text">
              {`Mobile: Stack vertically
Desktop: Sidebar + main content`}
            </CodeBlock>
            <p className="text-xs text-gray-600 mt-1">
              <code>lg:flex lg:space-x-6</code>
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Card Grid</h3>
            <CodeBlock language="text">
              {`Mobile: 1 column
Tablet: 2 columns  
Desktop: 3-4 columns`}
            </CodeBlock>
            <p className="text-xs text-gray-600 mt-1">
              <code>grid-cols-1 md:grid-cols-2 lg:grid-cols-3</code>
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Mobile Navigation</h3>
            <CodeBlock language="text">
              {`Mobile: Hamburger menu
Desktop: Horizontal nav`}
            </CodeBlock>
            <p className="text-xs text-gray-600 mt-1">
              <code>hidden md:flex</code> + mobile toggle
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
