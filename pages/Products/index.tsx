import type { NextPage } from "next";
import {GetStaticProps } from "next";
import Layout from "../../components/layout/Layout";
import CardProduct from "../../components/cardProduct/CardProduct";
import {ProductApi , Product} from '../../utils/types/productApi';
import { arrayBuffer } from "stream/consumers";
const Products = (productsitems:ProductApi) => {

    const {products} = productsitems;
  return (
    <>
      <Layout>
        <div className="container mx-auto p-10 ">
          <div className="products-inner grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product: Product) => {
              return  <CardProduct productInfo={product}  key={product.id} />;
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps:GetStaticProps = async (context) => {
  const res = await fetch(`https://fakestoreapi.com/products?limit=20`);
  const data = await res.json();
  
  return {
    props: {
      products: data,
    },
  };
};

export default Products;
