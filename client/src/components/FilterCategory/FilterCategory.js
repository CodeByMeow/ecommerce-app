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
        setSelected(slug);
        const { page, ...rest } = params;
        navigate(PRODUCTS_ENDPOINT, { ...rest, category: slug });
    };

    useEffect(() => {
        if (!params.category) setSelected(null);
    }, [params.category]);

    return (
        <div className="py-10 text-center">
            <ul>
                {category &&
                    category.map((item) => (
                        <li
                            key={item._id}
                            className={`px-2 py-1 border boder-solid border-gray-500 rounded-2xl inline-block mx-3 my-1 cursor-pointer ${
                                selected === item.slug
                                    ? "bg-blue-500 text-white border-none"
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
