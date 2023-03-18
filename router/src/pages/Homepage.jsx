import { Link } from "react-router-dom";


const Homepage = () => {
    return ( 
        <div>
            <h1>홈페이지입니다</h1>
            <Link to='/about'>about</Link>
        </div>
    );
}

export default Homepage;