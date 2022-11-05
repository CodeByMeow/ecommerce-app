const customLabels = {
    totalDocs: "itemCount",
    docs: "itemsList",
    limit: "perPage",
    page: "currentPage",
    nextPage: "next",
    prevPage: "prev",
    totalPages: "pageCount",
    pagingCounter: "slNo",
    meta: "paginator",
};

const paginateOptions = {
    page: 1,
    limit: 10,
    customLabels,
};

module.exports = {
    paginateOptions,
};
