import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Layout from '../components/layout/Layout'
const Home: NextPage = () => {
  return (
    <>
      <Layout>
         <div className="container mx-auto p-10 text-center min-h-[50vh] flex items-center justify-center">
            <h1 className='dark:text-white'>Welcome Shop Nextjs-typescript</h1>
         </div>
      </Layout>
    </>
  )
}

export default Home
