import { ReactNode } from "react";

interface StepCardProps {
  stepNumber: number;
  title: string;
  children: ReactNode;
}

export default function StepCard({
  stepNumber,
  title,
  children,
}: StepCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
          {stepNumber}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-black">{title}</h3>
        </div>
      </div>
      <div className="text-black leading-relaxed">{children}</div>
    </div>
  );
}
