import { useEffect, useState } from "react";
import ProductService from "../services/productService";

const useFetchProducts = (query) => {
    const [state, setState] = useState([]);

    const fetchProducts = async () => {
        const res = await ProductService.getList(query).then((res)=> console.log(res));
        setState(res.data.data.itemsList);
    }    

    useEffect(() => {
       fetchProducts();
    }, []);
    return state;
};

export default useFetchProducts;
