import Navbar from "@/components/navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black mb-12">About</h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="border border-gray-200 p-6 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            <p className="text-gray-700">
              [Write a simple paragraph about yourself - who you are, what you
              do]
            </p>
          </div>

          <div className="border border-gray-200 p-6 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            <p className="text-gray-700">
              [Another paragraph about your background or interests]
            </p>
          </div>

          <div className="border border-gray-200 p-6 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            <p className="text-gray-700">
              [Final paragraph about what you're working on or looking for]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
