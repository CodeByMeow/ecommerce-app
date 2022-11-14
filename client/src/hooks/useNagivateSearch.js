import { createSearchParams, useNavigate } from "react-router-dom";

const useNavigateSearch = () => {
    const nagivate = useNavigate();
    return (pathname, params) =>
        nagivate({ pathname, search: `${createSearchParams(params)}` });
};

export default useNavigateSearch;
