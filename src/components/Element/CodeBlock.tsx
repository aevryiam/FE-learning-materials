import { ReactNode } from "react";

interface CodeBlockProps {
  children: ReactNode;
  title?: string;
  language?: string;
}

export default function CodeBlock({
  children,
  title,
  language = "tsx",
}: CodeBlockProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden my-4">
      {title && (
        <div className="bg-gray-800 px-4 py-2 text-sm text-gray-300 border-b border-gray-700">
          {title}
          {language && <span className="ml-2 text-blue-400">({language})</span>}
        </div>
      )}
      <pre className="p-4 text-sm text-gray-100 overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  );
}
