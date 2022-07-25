import Image from "next/image";
import Link from "next/link";
import { Product } from "../../utils/types/productApi";

const CardProduct = (product: {productInfo:Product}) => {
  const { productInfo } = product;

  return (
    <div className="card-item border border-slate-100 rounded-sm mb-2 hover:shadow-lg hover:shadow-slate-200 transition-all ease-linear">
      <div className="card-img">
        <figure className="text-center pt-1">
          <Link href={`products/${productInfo.id}`}>
            <a>
              <Image
                src={productInfo.image}
                alt={productInfo.title}
                width={"220px"}
                height={"230px"}
                className="w-full cursor-pointer"
              />
            </a>
          </Link>
        </figure>
      </div>
      {/* title */}
      <div className="card-title p-2 text-center  ">
        <h3 className="cursor-pointer font-semibold text-state-800 text-sm">
          <Link href={`Products/${productInfo.id}`}><a >{productInfo.title}</a></Link>
        </h3>
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
