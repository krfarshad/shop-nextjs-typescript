import type { NextPage } from "next";
import { GetServerSideProps, GetStaticPaths,GetStaticProps } from "next";
import Image from "next/image";
import ProductApi from "../../components/utils/types/productApi";
import Layout from "../../components/layout/Layout";
import CardProduct from "../../components/cardProduct/CardProduct";
const Products: NextPage = (data: any) => {
  let products: any = data.products;
  return (
    <>
      <Layout>
        <div className="container mx-auto p-10 ">
          <div className="products-inner grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product: any) => {
              return <CardProduct productInfo={product} id={product.id} key={product.id} />;
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};



export const getStaticProps:GetStaticProps = async (context) => {
  const res = await fetch(`https://dummyjson.com/products?limit=20`);
  const data = await res.json();
  return {
    props: {
      products: data.products,
    },
  };
};

export default Products;
