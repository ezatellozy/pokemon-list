import { useSearchParams } from "react-router-dom";

interface Props {
  count: number;
  limit: number;
  tips: string;
}

const Pagination = ({ count, limit, tips }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageParam = searchParams.get("page");
  const currentPage = Math.max(1, parseInt(pageParam || "1", 10));

  const totalPages = Math.ceil(count / limit);

  const pages = [];
  const maxShown = Math.min(5, totalPages);
  for (let i = 1; i <= maxShown; i++) {
    pages.push(i);
  }

  const onPageChange = (page: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", page.toString());
    setSearchParams(newParams);
  };

  return (
    <div className="text-center mt-6">
      <div className="flex justify-center items-center gap-1 flex-wrap">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 text-sm rounded border bg-white disabled:opacity-50"
        >
          &lt; Previous
        </button>

        {pages.map((pag) => (
          <button
            key={pag}
            onClick={() => onPageChange(pag)}
            className={`px-3 py-1 text-sm rounded border ${
              currentPage === pag
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            {pag}
          </button>
        ))}

        {totalPages > 5 && <span className="px-2">...</span>}

        {totalPages > 5 && (
          <button
            onClick={() => onPageChange(totalPages)}
            className={`px-3 py-1 text-sm rounded border ${
              currentPage === totalPages
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            {totalPages}
          </button>
        )}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 text-sm rounded border bg-white disabled:opacity-50"
        >
          Next &gt;
        </button>
      </div>

      <p className="mt-2 text-sm text-gray-600">
        Page {currentPage} of {totalPages} {tips}
      </p>
    </div>
  );
};

export default Pagination;
