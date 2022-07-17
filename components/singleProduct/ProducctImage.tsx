import Image from "next/image";
import { useState } from "react";
const ProductImage = ({info}:any) =>{
    // states
   const [thumbnail , setthumbnail] = useState(info.products.thumbnail);


 return(
    <div className="w-full md:w-1/2 p-4">
       <div className="thumbnail text-center mb-4">
         <Image src={thumbnail} width={300} height={300}/>
       </div>
       <div className="gallery grid grid-cols-5 gap-2">
        {info.products.images.map( (item:any) =>{
                return(<div className="cursor-pointer"><Image className="transition-all ease-linear" src={item} width={100} height={100}  onClick={(e:any)=>{setthumbnail(item)}} /></div>)
        })}
       </div>
    </div>
 )
}
export default ProductImage;