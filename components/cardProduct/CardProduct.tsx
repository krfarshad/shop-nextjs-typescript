import Image from "next/image";
import Link from "next/link";
const CardProduct = ({ productInfo }: any) => {
  console.log(productInfo);
  return (
    <div className="card-item border border-slate-100 rounded-sm mb-2 hover:shadow-md hover:shadow-slate-400 transition-all ease-linear">
      {/* <Link href={`products/${productInfo.id}`}> */}
        <div className="card-img">
          <figure className="text-center pt-1">
            <Image
              className="w-full"
              src={productInfo.images[0]}
              alt={productInfo.title}
              width={"100%"}
              height={"220px"}
            />
          </figure>
        </div>
        {/* title */}
        <div className="card-title p-2">
          <h2>{productInfo.title}</h2>
        </div>
        {/* card description */}
        <div className="card-desc p-2">
          <p className="text-[#8a8a8a] text-sm">{productInfo.description}</p>
        </div>
        {/* price */}
        <div className="price">
            <span className="text-green-700  text-right p-4 float-right font-bold text-lg ">${productInfo.price}</span>
        </div>
      {/* </Link> */}
    </div>
  );
};
export default CardProduct;
