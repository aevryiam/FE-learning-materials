import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const modules = [
    {
      title: 'Teknik "Slicing" dari Figma ke Kode',
      description:
        "Pelajari cara mengubah desain Figma menjadi kode HTML/CSS yang clean",
      href: "/slicing",
    },
    {
      title: "Tailwind CSS",
      description:
        "Framework CSS utility-first untuk styling yang cepat dan efisien",
      href: "/tailwind",
    },
    {
      title: "Next.js dengan App Router",
      description:
        "Framework React modern untuk pengembangan aplikasi web production-ready",
      href: "/nextjs",
    },
    {
      title: "React Redux",
      description:
        "State management yang powerful untuk aplikasi React kompleks",
      href: "/redux",
    },
    {
      title: "Data Fetching",
      description:
        "Cara yang benar untuk mengambil dan mengelola data dari API",
      href: "/fetching",
    },
    {
      title: "Responsive Design",
      description: "Teknik membuat website yang terlihat bagus di semua device",
      href: "/responsive",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 bg-blue-600 justify-center rounded-xl text-white flex flex-row">
        <Image
          src="/logo.webp"
          alt="logo raceto"
          width={120}
          height={120}
          className="mr-24"
        />
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold mb-4">
            CollabLearn Frontend Engineering
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Pelajari step-by-step pengembangan Frontend modern dari Figma hingga
            production-ready website
          </p>
        </div>
      </div>

      {/* Learning Path */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h2 className="text-2xl font-bold text-black mb-6">Learning Path</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <Link key={module.href} href={module.href}>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer bg-white">
                <h3 className="text-lg font-semibold text-black mb-2">
                  {module.title}
                </h3>

                <p className="text-black text-sm mb-4 leading-relaxed">
                  {module.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs">
                    Bab {index + 1}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Prerequisites */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h2 className="text-2xl font-bold text-black mb-4">Prerequisites</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-black mb-3">
              Yang Harus Dikuasai:
            </h3>
            <ul className="space-y-2 text-black">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                HTML & CSS Dasar
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                JavaScript ES6+
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                React Fundamentals
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Git & GitHub
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-black mb-3">
              Tools yang Dibutuhkan:
            </h3>
            <ul className="space-y-2 text-black">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                VS Code
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                Node.js (LTS)
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                Figma Account
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                Browser DevTools
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Learning Tips */}
      <div className="bg-gray-50 rounded-lg p-6 border">
        <h2 className="text-2xl font-bold text-black mb-4">Tips Belajar</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="font-semibold mb-2 text-black">Practice by Doing</h3>
            <p className="text-sm text-black">
              Langsung praktek setiap materi yang dipelajari
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="font-semibold mb-2 text-black">
              Iterative Learning
            </h3>
            <p className="text-sm text-black">
              Ulangi materi dan bangun project bertahap
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="font-semibold mb-2 text-black">Community</h3>
            <p className="text-sm text-black">
              Bergabung dengan komunitas untuk sharing dan bertanya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
