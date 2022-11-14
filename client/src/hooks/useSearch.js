import { useSearchParams } from "react-router-dom";

const useSearch = () => {
    const [searchParams] = useSearchParams();
    const params = {};
    for (const [key, value] of searchParams.entries()) {
        params[key] = value;
        // console.log("Search value: ", value);
    }

    return params;
};

export default useSearch;
