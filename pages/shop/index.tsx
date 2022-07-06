import type { NextPage } from 'next';
import {GetServerSideProps, GetStaticProps } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProductApi from '../../components/utils/types/productApi';
import Layout from '../../components/layout/Layout';
import CardProduct from '../../components/cardProduct/CardProduct';
const Shop : NextPage = (data) => {
console.log(data.products)
  return (
    <>
      <Layout>
         <div className="container mx-auto p-10 ">
            <div className="products-inner grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
           {
            // data.products.map(item=>{
            //      return(<CardProduct productInfo={item} />);
            //    })
            } 
           
            </div>
         </div>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`https://dummyjson.com/products?limit=18`)
  const data = await res.json();
  return {
    props:{
      products :data.products
    }
  }
}

export default Shop;
