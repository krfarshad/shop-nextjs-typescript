const ProductInfo = ({info}:any) =>{
    console.log(info)
    return(
        <div className="w-full md:w-1/2 p-4">
            {/* title */}
            <div className="title my-8">
                <h1 className="font-bold text-xl">{info.products.title}</h1>
            </div>
            {/* brand */}
            <div className="brand mb-4">
                brand : {info.products.brand}
            </div>
            {/* category */}
            <div className="category mb-4">
                category: {info.products.category}
            </div>
            {/* desc */}
            <div className="desc mb-4">
               { info.products.description}
            </div>
            {/* price */}
            <div className="price">
                <span className="text-lg font-bold text-green-600">${info.products.price}</span>
            </div>
        </div>
    )

}
export default ProductInfo;

