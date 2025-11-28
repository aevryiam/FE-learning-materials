"use client";

import { useAppSelector, useAppDispatch } from "@/utils/hooks";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "@/components/Contexts/slices/counterSlice";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-white p-6 rounded-lg border shadow-sm">
      <h3 className="text-xl font-bold mb-4 text-center text-black">
        Redux Counter Demo
      </h3>

      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-blue-600 mb-2">{count}</div>
        <p className="text-gray-600 text-sm">
          Current counter value from Redux store
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors text-sm"
        >
          +1
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm"
        >
          -1
        </button>

        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
        >
          +5
        </button>

        <button
          onClick={() => dispatch(reset())}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors text-sm"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
