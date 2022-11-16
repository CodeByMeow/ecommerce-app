const SORT_ASC = "asc";
const SORT_DESC = "desc";
const SORT_BY_PRICE = "price";
const SORT_BY_DATE = "date";
const SORT_BY_SELLING = "selling";

export const SORT_NEWEST = "sortNewest";
export const SORT_PRICE_INCREASE = "sortPriceIncrease";
export const SORT_PRICE_DECREASE = "sortPriceDecrease";
export const SORT_MOST_SELLING = "sortMostSelling";
export default {
    SORT_NEWEST: {
        sort: SORT_DESC,
        sortBy: SORT_BY_DATE,
        title: "Mới nhất",
    },
    SORT_PRICE_INCREASE: {
        sort: SORT_ASC,
        sortBy: SORT_BY_PRICE,
        title: "Giá thấp đến cao",
    },
    SORT_PRICE_DECREASE: {
        sort: SORT_DESC,
        sortBy: SORT_BY_PRICE,
        title: "Giá cao đến thấp",
    },
    SORT_MOST_SELLING: {
        sort: SORT_DESC,
        sortBy: SORT_BY_SELLING,
        title: "Bán chạy",
    },
};
