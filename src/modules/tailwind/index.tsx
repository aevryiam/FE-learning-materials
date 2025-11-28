import StepCard from "@/components/Element/StepCard";
import CodeBlock from "@/components/Element/CodeBlock";
import ExampleBox from "@/components/Element/ExampleBox";

export default function TailwindPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8 bg-white rounded-lg border">
        <h1 className="text-4xl font-bold text-black mb-4">Tailwind CSS</h1>
        <p className="text-xl text-black max-w-3xl mx-auto">
          Framework CSS utility-first yang mempercepat proses styling dan
          development
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-2xl font-bold text-black mb-4">
          Apa itu Tailwind CSS?
        </h2>
        <p className="text-black leading-relaxed mb-4">
          Tailwind CSS adalah framework CSS utility-first yang memberikan
          low-level utility classes untuk membangun custom design tanpa harus
          menulis CSS dari scratch.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">
              Keuntungan Tailwind
            </h3>
            <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
              <li>Development lebih cepat</li>
              <li>CSS bundle lebih kecil (purged)</li>
              <li>Konsistensi design system</li>
              <li>Responsive design yang mudah</li>
              <li>Tidak perlu naming CSS class</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">
              Dokumentasi Wajib
            </h3>
            <div className="space-y-2 text-sm">
              <a
                href="https://tailwindcss.com/docs"
                className="block text-blue-600 hover:text-blue-800 underline"
              >
                tailwindcss.com/docs
              </a>
              <p className="text-blue-700">
                Bookmark dan sering-sering baca dokumentasi resmi Tailwind
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Utility Concepts */}
      <StepCard stepNumber={1} title="Konsep Utility Classes">
        <p className="mb-4">
          Tailwind menggunakan pendekatan utility-first dimana setiap class
          memiliki fungsi spesifik dan atomic.
        </p>

        <div className="space-y-6">
          {/* Spacing */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2"></span>
              Spacing (Padding & Margin)
            </h4>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <h5 className="font-medium mb-2">Padding All Sides</h5>
                <CodeBlock>
                  {`p-0   = padding: 0px
p-1   = padding: 4px
p-2   = padding: 8px
p-4   = padding: 16px
p-8   = padding: 32px`}
                </CodeBlock>
              </div>

              <div>
                <h5 className="font-medium mb-2">Padding X & Y Axis</h5>
                <CodeBlock>
                  {`px-4  = padding-left & right: 16px
py-2  = padding-top & bottom: 8px
pt-4  = padding-top: 16px
pb-2  = padding-bottom: 8px
pl-3  = padding-left: 12px
pr-6  = padding-right: 24px`}
                </CodeBlock>
              </div>

              <div>
                <h5 className="font-medium mb-2">
                  Margin (sama seperti padding)
                </h5>
                <CodeBlock>
                  {`m-4   = margin: 16px
mx-auto = margin-left & right: auto
my-8  = margin-top & bottom: 32px
-mt-4 = margin-top: -16px (negative)`}
                </CodeBlock>
              </div>
            </div>

            <ExampleBox title="Contoh Penggunaan Spacing" type="info">
              <CodeBlock>
                {`<div className="p-6 mx-4 my-2">
  <h1 className="mb-4 mt-0">Title</h1>
  <p className="px-2 py-1">Content dengan padding</p>
</div>`}
              </CodeBlock>
            </ExampleBox>
          </div>

          {/* Flexbox */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center">
              <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2"></span>
              Flexbox (Sangat Sering Digunakan!)
            </h4>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-medium mb-2">Basic Flex</h5>
                <CodeBlock>
                  {`flex            = display: flex
flex-col        = flex-direction: column
flex-row        = flex-direction: row
flex-wrap       = flex-wrap: wrap`}
                </CodeBlock>
              </div>

              <div>
                <h5 className="font-medium mb-2">Alignment</h5>
                <CodeBlock>
                  {`items-center    = align-items: center
items-start     = align-items: flex-start
justify-center  = justify-content: center
justify-between = justify-content: space-between
justify-end     = justify-content: flex-end`}
                </CodeBlock>
              </div>
            </div>

            <ExampleBox
              title="Pattern Navbar yang Sering Dipakai"
              type="success"
            >
              <CodeBlock>
                {`<!-- Logo di kiri, Menu di kanan -->
<nav className="flex items-center justify-between">
  <div className="logo">Logo</div>
  <div className="menu">Menu Items</div>
</nav>

<!-- Center semua content -->
<div className="flex items-center justify-center min-h-screen">
  <div>Centered Content</div>
</div>`}
              </CodeBlock>
            </ExampleBox>
          </div>
        </div>
      </StepCard>

      {/* Responsive Design */}
      <StepCard stepNumber={2} title="Responsive Design">
        <p className="mb-4">
          Tailwind menggunakan mobile-first approach dengan breakpoint prefixes
          yang mudah dipahami.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold mb-3">Breakpoints</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <CodeBlock>
                {`sm:   >= 640px  (Small devices)
md:   >= 768px  (Medium devices)
lg:   >= 1024px (Large devices)
xl:   >= 1280px (Extra large)
2xl:  >= 1536px (2x Extra large)`}
              </CodeBlock>
            </div>
            <div>
              <h5 className="font-medium mb-2">Mobile-First Logic</h5>
              <p className="text-sm text-gray-600">
                Class tanpa prefix = berlaku untuk semua ukuran
                <br />
                Class dengan prefix = berlaku mulai dari ukuran tersebut ke atas
              </p>
            </div>
          </div>
        </div>

        <ExampleBox title="Contoh Responsive Grid" type="success">
          <CodeBlock>
            {`<!-- Grid responsif: 1 kolom di HP, 3 kolom di Desktop -->
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="bg-blue-100 p-4">Card 1</div>
  <div className="bg-blue-100 p-4">Card 2</div>
  <div className="bg-blue-100 p-4">Card 3</div>
</div>

<!-- Typography responsif -->
<h1 className="text-2xl md:text-4xl lg:text-6xl">
  Responsive Heading
</h1>

<!-- Spacing responsif -->
<div className="p-4 md:p-8 lg:p-12">
  Responsive padding
</div>`}
          </CodeBlock>
        </ExampleBox>
      </StepCard>

      {/* Common Utilities */}
      <StepCard stepNumber={3} title="Utilities yang Sering Dipakai">
        <div className="space-y-6">
          {/* Colors */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Colors</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h5 className="font-medium mb-2">Background</h5>
                <div className="space-y-2">
                  <div className="bg-red-100 p-2 rounded text-sm">
                    bg-red-100
                  </div>
                  <div className="bg-blue-500 p-2 rounded text-white text-sm">
                    bg-blue-500
                  </div>
                  <div className="bg-gray-800 p-2 rounded text-white text-sm">
                    bg-gray-800
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Text Color</h5>
                <div className="space-y-2">
                  <div className="text-red-600 text-sm">text-red-600</div>
                  <div className="text-blue-500 text-sm">text-blue-500</div>
                  <div className="text-gray-700 text-sm">text-gray-700</div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Border</h5>
                <div className="space-y-2">
                  <div className="border border-red-300 p-1 text-sm">
                    border-red-300
                  </div>
                  <div className="border-2 border-blue-500 p-1 text-sm">
                    border-blue-500
                  </div>
                  <div className="border-l-4 border-green-500 pl-2 text-sm">
                    border-l-4
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Typography</h4>
            <div className="space-y-3">
              <div className="text-xs">text-xs - Very small text</div>
              <div className="text-sm">text-sm - Small text</div>
              <div className="text-base">text-base - Normal text (16px)</div>
              <div className="text-lg">text-lg - Large text</div>
              <div className="text-xl">text-xl - Extra large</div>
              <div className="text-2xl font-bold">
                text-2xl font-bold - Heading
              </div>
              <div className="text-center">text-center - Centered</div>
              <div className="text-gray-500">text-gray-500 - Muted text</div>
            </div>
          </div>

          {/* Size & Display */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Size & Display</h4>
            <CodeBlock>
              {`/* Width & Height */
w-full      = width: 100%
w-1/2       = width: 50%
w-64        = width: 16rem (256px)
h-screen    = height: 100vh
min-h-screen = min-height: 100vh

/* Display */
block       = display: block
hidden      = display: none
inline-block = display: inline-block

/* Position */
relative    = position: relative
absolute    = position: absolute
fixed       = position: fixed
sticky      = position: sticky`}
            </CodeBlock>
          </div>
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
                <li>Gunakan Tailwind IntelliSense extension</li>
                <li>Buat component untuk pattern yang berulang</li>
                <li>
                  Gunakan arbitrary values jika perlu: <code>w-[350px]</code>
                </li>
                <li>Manfaatkan @apply untuk complex components</li>
                <li>Setup Prettier plugin untuk auto-sort classes</li>
              </ul>
            </div>

            <ExampleBox title="Component Pattern yang Baik" type="success">
              <CodeBlock>
                {`// Buat reusable button component
function Button({ variant, children, ...props }) {
  const baseClasses = "px-4 py-2 rounded font-medium transition-colors";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };
  
  return (
    <button 
      className={\`\${baseClasses} \${variants[variant]}\`}
      {...props}
    >
      {children}
    </button>
  );
}`}
              </CodeBlock>
            </ExampleBox>
          </div>

          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 mb-2">Don&apos;t</h3>
              <ul className="list-disc list-inside text-red-700 space-y-1 text-sm">
                <li>Jangan hardcode magic numbers</li>
                <li>Hindari !important dalam CSS custom</li>
                <li>Jangan mix dengan CSS framework lain</li>
                <li>Jangan copy-paste class tanpa memahami</li>
                <li>Avoid over-nesting dengan @apply</li>
              </ul>
            </div>

            <ExampleBox title="Anti-pattern yang Dihindari" type="error">
              <CodeBlock>
                {`// Jangan begini
<div className="ml-[37px] mt-[23px] w-[127px]">
  Magic numbers everywhere
</div>

// Lebih baik begini
<div className="ml-8 mt-6 w-32">
  Using design system values
</div>`}
              </CodeBlock>
            </ExampleBox>
          </div>
        </div>
      </div>

      {/* Cheat Sheet */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Cheat Sheet</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-3">
              Most Used Flexbox
            </h3>
            <CodeBlock>
              {`flex items-center justify-center
flex items-center justify-between  
flex flex-col items-center
flex-wrap gap-4`}
            </CodeBlock>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">
              Common Spacing
            </h3>
            <CodeBlock>
              {`p-4 m-4        (16px)
px-6 py-3      (24px, 12px)
space-y-4      (gap vertical)
gap-4          (grid/flex gap)`}
            </CodeBlock>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-3">
              Quick Responsive
            </h3>
            <CodeBlock>
              {`grid-cols-1 md:grid-cols-3
text-sm md:text-lg
hidden md:block
p-2 md:p-6`}
            </CodeBlock>
          </div>
        </div>
      </div>
    </div>
  );
}
