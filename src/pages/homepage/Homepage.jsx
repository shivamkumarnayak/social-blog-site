import { useLocation } from "react-router";
// import React, {useState, useEffect} from 'react';
import Post from "../../components/post/Post";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
// import axios from "axios";
// import NotFound from '../../components/not found/NotFound';

const Homepage =() => {
  const location = useLocation();
  console.log(location);

  // const [data, setData] = useState([]);

  // useEffect(() =>{
  //   loadBlogData();
  // },[]);

  // const loadBlogData = async ()=>{
  //   const response = await axios.get("http://localhost:3000/posts") 
  //   if(response.status === 200){
  //     setData(response.data)
  //   }
  // }
  // console.log("data: " + data);

  return (
    <>
     <div className="home">
        {/* {data.length === 0 &&(
          <NotFound/>
        )} */}

        {/* {data && data.map(( index) =>{
          <Post key={index}/>
        })} */}
        <Post/>
        <Sidebar />
      </div>
    </>
  );
}

export default Homepage;