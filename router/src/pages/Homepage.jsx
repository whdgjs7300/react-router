import { Link, useNavigate } from "react-router-dom";


const Homepage = () => {
    const navigate = useNavigate();

    const goProductPage = () => {
        navigate('/product?q=pants')
    }

    return ( 
        <div>
            <h1>홈페이지입니다</h1>
            <Link to='/about'>about</Link>
            <button onClick={goProductPage}>go to product</button>
        </div>
    );
}

export default Homepage;