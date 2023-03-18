import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    const goToHomepage = () => {
        navigate('/')
    }
    
    return (  
        <div>
            <h1>about페이지</h1>
            <button onClick={goToHomepage}>go to Homepage</button>
        </div>
    );
}

export default About;