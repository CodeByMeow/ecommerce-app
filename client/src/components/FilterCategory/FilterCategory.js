import { useEffect, useState } from "react";
import { PRODUCTS_ENDPOINT } from "../../config/domain";
import { useStoreContext } from "../../contexts/StoreContext";
import useNavigateSearch from "../../hooks/useNagivateSearch";
import useSearch from "../../hooks/useSearch";

const FilterCategory = () => {
    const { category } = useStoreContext();
    const params = useSearch();
    const [selected, setSelected] = useState(params?.category);
    const navigate = useNavigateSearch();

    const onSelectHandler = (slug) => {
        const { page, category, ...rest } = params;
        const newSlug = selected !== slug;
        setSelected(() => {
            return newSlug ? slug : null;
        });

        const query = newSlug ? { ...rest, category: slug } : rest;
        navigate(PRODUCTS_ENDPOINT, query);
    };

    useEffect(() => {
        if (!params.category) setSelected(null);
    }, [params.category]);

    return (
        <div className="py-5 md:py-10 text-center">
            <ul className="text-sm md:text-base md:flex md:flex-wrap md:justify-center gap-2">
                {category &&
                    category.map((item) => (
                        <li
                            key={item._id}
                            className={`px-2 py-1 border boder-solid border-gray-500 rounded-2xl inline-block mx-3 my-1 cursor-pointer ${
                                selected === item.slug
                                    ? "bg-indigo-600 text-white border-none"
                                    : null
                            }`}
                            onClick={() => onSelectHandler(item.slug)}
                        >
                            {item.title}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default FilterCategory;
