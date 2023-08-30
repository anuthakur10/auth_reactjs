import React  from "react";
import { LazyLoadImage ,trackWindowScroll} from "react-lazy-load-image-component";

 const Image =(props)=>{
   return <LazyLoadImage {...props}/>
 }

export default trackWindowScroll(Image)