import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ImageDetail() {
  const [image, setImage] = useState({});
  const { id } = useParams();
const [isLoading,setIsLoading] = useState(true)
  async function download() {
    const response = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/photos/${id}`
    );
    console.log(response.data);
    setIsLoading(false)
    // console.log("called")
    setImage({
      photo: response.data.photo.url,
      des: response.data.photo.description,
      title: response.data.photo.title,
    });
  }
  useEffect(() => {
    download();
  }, []);
  return (
    <div className="flex items-center justify-center mt-[200px]">
        { (isLoading) ? "Loading..... " :
    <div className="w-[1300px] h-1/2 bg-[#003060] flex"  >
   
      <div className="leftSection"><img src={image.photo} alt="" className="w-[500px] m-[30px] rounded-2xl" /></div>
      <div className="rightSection text-white  m-[30px] ml-[70px] flex font-sans  justify-center flex-col"><h1 className=" font-bold text-[40px]">{image.title}</h1>
      <h2 className="mt-[20px]">{image.des}</h2>
      </div>
    </div>
}
    </div>
  );
}

export default ImageDetail;
