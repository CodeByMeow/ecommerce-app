import { useMemo } from "react";

const range = (start, end) => {
    let length = end - start + 1;

    return Array.from({ length }, (_, idx) => idx + start);
};
export const usePagination = ({
    pageCount,
    perPage,
    siblingCount = 1,
    currentPage,
}) => {
    const paginationRange = useMemo(() => {
        // firstPage + lastPage + currentPage + 2 DOTS
        const pageNumbers = siblingCount + 5;
        if (pageCount >= pageNumbers) {
            return range(1, pageCount);
        }

        const leftSide = Math.max(currentPage - siblingCount, 1);
        const rightSide = Math.min(currentPage + siblingCount, totalPages);

        const shouldShowLeftDot = leftSide > 2;
        const shouldShowRightDot = rightSide < pageCount - 2;
    }, [pageCount, perPage, siblingCount, currentPage]);

    return paginationRange;
};
