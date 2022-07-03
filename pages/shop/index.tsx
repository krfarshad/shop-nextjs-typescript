import type { NextPage } from 'next';
import {GetServerSideProps } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProductApi from '../../components/utils/types/productApi';
import Layout from '../../components/layout/Layout'
const Shop: NextPage = (data) => {
  console.log(data)

  return (
    <>
      <Layout>
         <div className="container mx-auto p-10 ">
      
         </div>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`https://fakestoreapi.com/products/`)
  const data = await res.json();
  return {
    props:{
       products : data.products
    }
  }
}

export default Shop
