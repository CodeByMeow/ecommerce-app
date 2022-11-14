import ReactPaginate from "react-paginate";

const Pagination = ({ handlePageClick, pageCount }) => {
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName="flex gap-2 justify-center py-2"
            breakClassName="w-7 h-7 flex items-center justify-center"
            breakLinkClassName="px-2 border rounded-full border-gray-500 border-solid"
            pageClassName="border rounded-full border-gray-500 border-solid text-sm flex items-center justify-center w-7 h-7"
            pageLinkClassName="px-2"
            activeClassName="bg-blue-500 text-white border-none"
            nextClassName="border rounded-full border-gray-500 border-solid text-sm w-7 h-7 flex items-center justify-center"
            previousClassName="border rounded-full border-gray-500 border-solid text-sm w-7 h-7 flex items-center justify-center"
        />
    );
};

export default Pagination;
