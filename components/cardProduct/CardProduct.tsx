import Image from "next/image";

const CardProduct = (product) =>{
    let data = product.productInfo;
    console.log(data)
    return(
         <div className="card-item">
             <div className="card-img">
                 <figure>d
                     {/* <Image src={product.image} alt={product.title} width={'100%'} height={'120px'}  /> */}
                 </figure>
             </div>
             <div className="card-title">
                 <h2>{data}</h2>
             </div>
         </div>
    );
}
export default CardProduct;