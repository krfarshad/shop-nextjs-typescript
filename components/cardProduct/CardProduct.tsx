import Image from "next/image";
import Link from "next/link";
const CardProduct = ({ productInfo }: any) => {
  return (
    <div className="card-item border border-slate-100 rounded-sm mb-2 hover:shadow-lg hover:shadow-slate-200 transition-all ease-linear">
  

          <div className="card-img">
            <figure className="text-center pt-1">
            <Link href={`products/${productInfo.id}`}>
              <Image
                className="w-full"
                src={productInfo.thumbnail}
                alt={productInfo.title}
                width={"220px"}
                height={"200px"}
              />
                </Link>
            </figure>
          </div>
          {/* title */}
          <div className="card-title p-2 text-center font-bold">
            <h2><Link href={`Products/${productInfo.id}`}>{productInfo.title}</Link></h2>
          </div>
          {/* card description */}
          <div className="card-desc p-2">
            <p className="text-[#8a8a8a] text-sm">{productInfo.description}</p>
          </div>
          {/* price */}
          <div className="price">
            <span className="text-green-700  text-right p-4 float-right font-bold text-lg ">
              ${productInfo.price}
            </span>
          </div>
       
    
    </div>
  );
};
export default CardProduct;
