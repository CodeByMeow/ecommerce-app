import ReactPaginate from "react-paginate";

const Pagination = ({ handlePageClick, pageCount, currentPage }) => {
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
            }
            renderOnZeroPageCount={null}
            containerClassName="flex gap-2 justify-center py-2"
            breakClassName="w-7 h-7 flex items-center justify-center"
            breakLinkClassName="px-2 border rounded-full border-gray-500 border-solid"
            pageClassName="border rounded-full border-gray-500 border-solid text-sm flex items-center justify-center w-7 h-7"
            pageLinkClassName="px-2"
            activeClassName="bg-blue-500 text-white border-none"
            nextClassName="text-sm w-7 h-7 flex items-center justify-center hover:text-blue-500"
            previousClassName="rounded-full text-sm w-7 h-7 flex items-center justify-center hover:text-blue-500"
            initialPage={currentPage}
        />
    );
};

export default Pagination;
