const SkeltonCard = () => {
  return (
    <div className="w-full border border-edge bg-white flex flex-col gap-2 rounded-lg p-2 sm:p-3 md:p-4 animate-pulse">
      <div className="h-40 rounded-t-lg bg-gray-100" />
      <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto" />
    </div>
  );
};

export default SkeltonCard;
