import { useEffect, useState, useRef } from "react";
import SORT_TYPE from "./SORT_TYPE";
import { BiCaretDown, BiCheck } from "react-icons/bi";
import useNavigateSearch from "../../hooks/useNagivateSearch";
import useSearch from "../../hooks/useSearch";
import { PRODUCTS_ENDPOINT } from "../../config/domain";

const SortProduct = () => {
    const [currentSort, setCurrentSort] = useState(SORT_TYPE.SORT_NEWEST);
    const [dropdown, setDropdown] = useState(false);
    const navigate = useNavigateSearch();
    const params = useSearch();
    const initialLoad = useRef(true);

    const toggleDropdown = () => setDropdown(!dropdown);
    const sortHandler = (item) => {
        setCurrentSort(item);
        toggleDropdown(false);
    };

    useEffect(() => {
        if (initialLoad.current) {
            initialLoad.current = false;
            return;
        }
        const { page, ...rest } = params;
        navigate(PRODUCTS_ENDPOINT, {
            ...rest,
            sort: currentSort.sort,
            sortBy: currentSort.sortBy,
        });
    }, [currentSort]);

    return (
        <div className="px-8 text-right text-sm">
            <div className="border border-solid border-gray-500 w-40 min-w-max px-2 inline-block rounded-md text-center relative">
                <p
                    className="cursor-pointer whitespace-nowrap flex justify-around items-center gap-1"
                    onClick={toggleDropdown}
                >
                    <span>Sắp xếp: {currentSort.title}</span>
                    <BiCaretDown
                        className={`${
                            dropdown ? "rotate-180" : null
                        } transition-transform duration-700`}
                    />
                </p>
                <ul
                    className={`w-200 ${
                        !dropdown && "hidden"
                    } absolute left-0 top-full text-left w-full z-10 bg-white mt-2`}
                >
                    {Object.values(SORT_TYPE).map((item, idx) => (
                        <li
                            className="p-2 border border-b-gray-100 cursor-pointer flex items-center gap-1"
                            onClick={() => sortHandler(item)}
                            key={item.title + idx}
                        >
                            {currentSort.sort === item.sort &&
                                currentSort.sortBy === item.sortBy && (
                                    <BiCheck />
                                )}
                            <span>{item.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SortProduct;
