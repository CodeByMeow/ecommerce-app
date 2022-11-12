import { useEffect, useState } from "react";
import ProductService from "../services/productService";

const useFetchProducts = (query = {}) => {
    const [state, setState] = useState();

    useEffect(() => {
        ProductService.getList(query).then((res) => {
            setState(res.data.data);
        });
    }, []);

    return state;
};

export default useFetchProducts;
