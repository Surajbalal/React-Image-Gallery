import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageRend from "./imageRend";
import { Link } from "react-router-dom";


function ImageList() {
  const [imageList, setImageList] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  const [path,setPath] = useState( "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20")
  async function downloadData() {
    const response = await axios.get(path);
    console.log(response.data)
    setImageList(response.data.photos)
    setIsLoading(false)
  }
  useEffect(() => {
    downloadData();
  }, []);


  return <div className=" flex items-center justify-center flex-wrap">  
  {(isLoading) ? "Loading....." :
        imageList.map((photo) => (
<div className="Card flex items-center justify-center basis-1/4 bg-[#fff] w-1/4" >
<Link to={`/photo/${photo.id}`}>
   
     
      <img src={photo.url} alt={photo.title} className=" m-5 w-[340px] self-center rounded-2xl"  />

    </Link>
    </div>
  ))
  
}
 
  </div>;
}

export default ImageList;
