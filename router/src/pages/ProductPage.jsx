import { useSearchParams } from "react-router-dom";


const ProductPage = () => {
    let [query, setQuery] = useSearchParams()
    console.log(query.get("q"))

    return (  
        <div>
            <h1>Show All Product</h1>
        </div>
    );
}

export default ProductPage;