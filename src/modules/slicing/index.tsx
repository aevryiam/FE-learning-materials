import StepCard from "@/components/Element/StepCard";
import CodeBlock from "@/components/Element/CodeBlock";
import ExampleBox from "@/components/Element/ExampleBox";

export default function SlicingPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8 bg-white rounded-lg border">
        <h1 className="text-4xl font-bold text-black mb-4">
          Teknik Slicing dari Figma ke Kode
        </h1>
        <p className="text-xl text-black max-w-3xl mx-auto">
          Slicing adalah proses menerjemahkan desain visual menjadi kode. Mari
          pelajari step-by-step nya!
        </p>
      </div>

      {/* What is Slicing */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-2xl font-bold text-black mb-4">Apa itu Slicing?</h2>
        <p className="text-black leading-relaxed mb-4">
          Slicing adalah proses mengubah desain UI/UX dari tools seperti Figma
          menjadi kode HTML, CSS, dan JavaScript yang dapat dijalankan di
          browser. Ini adalah skill fundamental yang harus dikuasai setiap
          Frontend Developer.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 mb-2">
            Mengapa Slicing Penting?
          </h3>
          <ul className="list-disc list-inside text-blue-700 space-y-1">
            <li>Mengubah desain statis menjadi website yang interaktif</li>
            <li>Memastikan konsistensi antara desain dan implementasi</li>
            <li>Mengoptimalkan performa dan responsivitas website</li>
            <li>Menjadi jembatan antara designer dan developer</li>
          </ul>
        </div>
      </div>

      {/* Step 1: Bedah Layout */}
      <StepCard stepNumber={1} title="Bedah Layout">
        <p className="mb-4">
          Langkah pertama adalah memahami struktur layout dari desain Figma.
          Kita perlu mengidentifikasi:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Container Utama</h4>
            <ul className="text-sm space-y-1">
              <li>• Header/Navigation</li>
              <li>• Main Content Area</li>
              <li>• Sidebar (jika ada)</li>
              <li>• Footer</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Direction Layout</h4>
            <ul className="text-sm space-y-1">
              <li>
                • <code>flex-row</code>: Sejajar horizontal
              </li>
              <li>
                • <code>flex-col</code>: Bertumpuk vertikal
              </li>
              <li>
                • <code>grid</code>: Layout grid kompleks
              </li>
            </ul>
          </div>
        </div>

        <ExampleBox title="Contoh Analisis Layout" type="info">
          <p className="mb-2">
            Misalkan kita punya design Navbar dengan logo di kiri dan menu di
            kanan:
          </p>
          <CodeBlock title="Analisis Layout Navbar">
            {`// Layout Analysis:
// Container utama: navbar (flex-row)
// - Logo (di kiri)
// - Menu items (di kanan, flex-row)

<nav className="flex items-center justify-between">
  <div className="logo">Logo</div>
  <div className="flex space-x-4">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>`}
          </CodeBlock>
        </ExampleBox>
      </StepCard>

      {/* Step 2: Export Aset */}
      <StepCard stepNumber={2} title="Export Aset">
        <p className="mb-4">
          Export semua asset yang diperlukan dari Figma dengan format yang tepat
          untuk optimasi web.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Icons</h4>
            <p className="text-sm text-green-700 mb-2">
              Format: <strong>SVG</strong>
            </p>
            <ul className="text-xs text-green-600 space-y-1">
              <li>• Scalable tanpa blur</li>
              <li>• File size kecil</li>
              <li>• Bisa di-style dengan CSS</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Images</h4>
            <p className="text-sm text-blue-700 mb-2">
              Format: <strong>WebP/JPG</strong>
            </p>
            <ul className="text-xs text-blue-600 space-y-1">
              <li>• WebP untuk modern browser</li>
              <li>• JPG sebagai fallback</li>
              <li>• Kompres untuk optimasi</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-2">Export Tips</h4>
            <ul className="text-xs text-purple-600 space-y-1">
              <li>• Export 2x untuk Retina</li>
              <li>• Gunakan nama file yang jelas</li>
              <li>• Organize dalam folder</li>
            </ul>
          </div>
        </div>

        <ExampleBox title="Struktur Folder Assets" type="info">
          <CodeBlock language="text" title="public/assets/">
            {`public/
├── assets/
│   ├── icons/
│   │   ├── logo.svg
│   │   ├── menu-icon.svg
│   │   └── social-icons/
│   ├── images/
│   │   ├── hero-bg.webp
│   │   ├── hero-bg.jpg (fallback)
│   │   └── team/
│   └── fonts/ (if custom fonts)`}
          </CodeBlock>
        </ExampleBox>
      </StepCard>

      {/* Step 3: Structure First */}
      <StepCard stepNumber={3} title="Structure First">
        <p className="mb-4">
          Tulis HTML structure terlebih dahulu tanpa styling. Focus pada
          semantik dan hierarki yang benar.
        </p>

        <ExampleBox title="HTML Structure Example" type="success">
          <CodeBlock title="components/Navbar.tsx">
            {`export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo bg-red-100">
          <img src="/assets/icons/logo.svg" alt="Logo" />
        </div>
        
        <div className="navbar-menu bg-blue-100">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Services</a>
          <a href="#" className="nav-link">Contact</a>
        </div>
        
        <div className="navbar-actions bg-green-100">
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
}`}
          </CodeBlock>
        </ExampleBox>

        <ExampleBox
          title="Menggunakan Class Dummy untuk Testing"
          type="warning"
        >
          <p className="mb-2">
            Gunakan background color dummy untuk memastikan structure sudah
            benar:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>
              <code>bg-red-100</code> untuk container logo
            </li>
            <li>
              <code>bg-blue-100</code> untuk menu items
            </li>
            <li>
              <code>bg-green-100</code> untuk action buttons
            </li>
          </ul>
        </ExampleBox>
      </StepCard>

      {/* Step 4: Styling */}
      <StepCard stepNumber={4} title="Styling dengan Tailwind">
        <p className="mb-4">
          Setelah structure benar, hapus class dummy dan tambahkan styling
          Tailwind yang sebenarnya.
        </p>

        <ExampleBox title="Final Styled Component" type="success">
          <CodeBlock title="components/Navbar.tsx (Final)">
            {`export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <img 
              src="/assets/icons/logo.svg" 
              alt="Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 
                                 transition-colors duration-200">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 
                                 transition-colors duration-200">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 
                                 transition-colors duration-200">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 
                                 transition-colors duration-200">
              Contact
            </a>
          </div>
          
          {/* Action Button */}
          <div className="flex items-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg
                             hover:bg-blue-700 transition-colors duration-200
                             font-medium">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}`}
          </CodeBlock>
        </ExampleBox>
      </StepCard>

      {/* Tools & Resources */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-2xl font-bold text-black mb-6">
          Tools & Resources
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-black">
          <div className="text-center p-4 border rounded-lg">
            <h3 className="font-semibold mb-1">Figma</h3>
            <p className="text-xs text-gray-600">Design inspection & export</p>
          </div>

          <div className="text-center p-4 border rounded-lg">
            <h3 className="font-semibold mb-1">Figma to Code</h3>
            <p className="text-xs text-gray-600">Plugin auto-generation</p>
          </div>

          <div className="text-center p-4 border rounded-lg">
            <h3 className="font-semibold mb-1">PixelParallel</h3>
            <p className="text-xs text-gray-600">Design comparison</p>
          </div>

          <div className="text-center p-4 border rounded-lg">
            <h3 className="font-semibold mb-1">Perfect Pixel</h3>
            <p className="text-xs text-gray-600">Pixel-perfect slicing</p>
          </div>
        </div>
      </div>

      {/* Practice Exercise */}
      <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-lg p-6 border">
        <h2 className="text-2xl font-bold text-black mb-4">
          Practice Exercise
        </h2>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-2 text-black">
              Exercise 1: Simple Card Component
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Buat component card sederhana dengan gambar, title, description,
              dan button
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                Structure
              </span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                Styling
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                Responsive
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-2 text-black">
              Exercise 2: Landing Page Hero Section
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Slice hero section dengan background image, headline, subtitle,
              dan CTA button
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                Layout
              </span>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                Background
              </span>
              <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                Typography
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
