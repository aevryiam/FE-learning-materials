import { ReactNode } from "react";

interface ExampleBoxProps {
  title: string;
  children: ReactNode;
  type?: "info" | "warning" | "success" | "error";
}

export default function ExampleBox({
  title,
  children,
  type = "info",
}: ExampleBoxProps) {
  const typeStyles = {
    info: "border-blue-200 bg-blue-50 text-blue-800",
    warning: "border-yellow-200 bg-yellow-50 text-yellow-800",
    success: "border-green-200 bg-green-50 text-green-800",
    error: "border-red-200 bg-red-50 text-red-800",
  };

  return (
    <div className={`border rounded-lg p-4 my-4 ${typeStyles[type]}`}>
      <div className="flex items-center mb-2">
        <h4 className="font-semibold">{title}</h4>
      </div>
      <div className="ml-2">{children}</div>
    </div>
  );
}
