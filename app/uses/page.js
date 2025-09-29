import Navbar from "@/components/navbar";
import PaginationArrows from "@/components/arrow"

export default function Uses() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black mb-8">Uses</h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Development */}
          <div className="border border-gray-200 p-4 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            <h2 className="text-lg font-medium text-black mb-3">Development</h2>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-medium text-black">[Code Editor]</span>
                <p className="text-gray-600 text-xs">
                  VScode, most popular and user friendly
                </p>
              </div>
              <div>
                <span className="font-medium text-black">
                  powershell/node/bash
                </span>
                <p className="text-gray-600 text-xs">terminal</p>
              </div>
              <div>
                <span className="font-medium text-black">OperaGX</span>
                <p className="text-gray-600 text-xs">Browser</p>
              </div>
            </div>
          </div>

          {/* Hardware */}
          <div className="border border-gray-200 p-4 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            <h2 className="text-lg font-medium text-black mb-3">Hardware</h2>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-medium text-black">
                  Custom build with 32GB DDR5, RTX 4060 ti, with 2TB of
                  storage{" "}
                </span>
                <p className="text-gray-600 text-xs">Pc specs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaginationArrows  />
    </div>
  );
}
