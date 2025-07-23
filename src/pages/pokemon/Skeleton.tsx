const PokemonDetailSkeleton = () => {
  return (
    <div className=" max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center py-6 rounded-t-lg">
        <div className="flex justify-center items-center gap-2 text-4xl font-bold">
          <div className="w-6 h-6 bg-yellow-400 rounded-full" />
          <div className="w-32 h-6 bg-white/50 rounded-md" />
        </div>
        <div className="mt-2 w-16 h-4 bg-white/40 rounded mx-auto" />
      </div>

      <div className="  p-4 border border-edge rounded-b-xl">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="flex flex-col items-center my-6">
              <div className="w-48 h-48 bg-gray-100 rounded-full" />
              <div className="mt-3 w-20 h-6 bg-red-200 rounded-full" />
            </div>

            <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4 mb-6">
              <div className="text-center space-y-2">
                <div className="w-16 h-4 bg-gray-300 mx-auto rounded" />
                <div className="w-10 h-4 bg-gray-200 mx-auto rounded" />
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-4 bg-gray-300 mx-auto rounded" />
                <div className="w-10 h-4 bg-gray-200 mx-auto rounded" />
              </div>
            </div>
          </div>
          <div className=" space-y-5">
            <div className="space-y-4 mb-6">
              <div className="h-4 w-32 bg-gray-200 rounded" />
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <div className="w-20 h-3 bg-gray-200 rounded" />
                    <div className="w-6 h-3 bg-gray-200 rounded" />
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded">
                    <div className="h-2 bg-purple-300 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-6 space-y-2">
              <div className="w-24 h-4 bg-gray-200 rounded" />
              <div className="flex gap-2">
                <div className="w-16 h-6 bg-purple-100 rounded-full" />
                <div className="w-20 h-6 bg-gray-200 rounded-full" />
              </div>
            </div>

            <div className=" space-y-1">
              <div className="w-32 h-3 bg-gray-300  rounded" />
              <div className="w-16 h-5 bg-purple-300  rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailSkeleton;
