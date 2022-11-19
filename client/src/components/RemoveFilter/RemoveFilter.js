import useSearch from "../../hooks/useSearch";
import { RiFilterOffLine } from "react-icons/ri";
import useNavigateSearch from "../../hooks/useNagivateSearch";
import { PRODUCTS_ENDPOINT } from "../../config/domain";

const RemoveFilter = () => {
    const params = useSearch();
    const { page, ...rest } = params;
    const navigate = useNavigateSearch();
    if (Object.values(rest).length === 0) return null;

    const resetQuery = () => {
        navigate(PRODUCTS_ENDPOINT, {});
    };

    return (
        <div className="md:text-left my-2 text-right px-6">
            <p
                className="inline-flex justify-between items-center w-max mx-2 gap-2 border border-gray-500 border-solid rounded-md p-1 my-1 cursor-pointer font-thin text-sm hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                onClick={resetQuery}
            >
                <RiFilterOffLine />
                <span>Bỏ chọn bộ lọc</span>
            </p>
        </div>
    );
};

export default RemoveFilter;
