import { useParams } from "react-router-dom";

const Detail = () => {
    // 오브젝트 값으로 받아옴 (id , num  :뒤에있는 키값을 오브젝트 값)
    const {id} = useParams();
    console.log(id)
    return ( 
        <div>
            <h1>디테일 페이지 {id}</h1>
        </div>
    );
}

export default Detail;