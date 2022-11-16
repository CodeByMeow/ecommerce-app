import { useState } from "react";
import SORT_TYPE from "./SORT_TYPE";
import { BiCaretDown, BiCheck } from "react-icons/bi";

const SortProduct = () => {
    const [sort, setSort] = useState(SORT_TYPE.SORT_NEWEST);
    const [dropdown, setDropdown] = useState(false);

    const toggleDropdown = () => setDropdown(!dropdown);
    const sortHandler = (item) => {
        setSort(item);
        toggleDropdown(false);
    };

    return (
        <div className="px-8 text-right text-sm">
            <div className="border border-solid border-gray-500 w-40 min-w-max px-2 inline-block rounded-md text-center relative">
                <p
                    className="cursor-pointer whitespace-nowrap flex justify-around items-center w-max gap-1"
                    onClick={toggleDropdown}
                >
                    <span>Sắp xếp: {sort.title}</span>
                    <BiCaretDown />
                </p>
                <ul
                    className={`w-200 ${
                        !dropdown && "hidden"
                    } absolute left-0 top-full text-left w-full z-10 bg-white mt-2`}
                >
                    {Object.values(SORT_TYPE).map((item) => (
                        <li
                            className="p-2 border border-b-gray-100 cursor-pointer flex items-center gap-1"
                            onClick={() => sortHandler(item)}
                        >
                            {sort.sort === item.sort &&
                                sort.sortBy === item.sortBy && <BiCheck />}
                            <span>{item.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SortProduct;
