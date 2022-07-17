import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import ProducctImage from '../../components/singleProduct/ProducctImage';
import ProductInfo from '../../components/singleProduct/ProductInfo';
import Layout from '../../components/layout/Layout';
const Product = (product: any) => {
  const router = useRouter()
  const { id } = router.query;
  // return <p>Post: {pid}</p>
  return (
    <Layout>
      <div className=' container mx-auto flex flex-wrap py-8'>
        <ProducctImage info={product} />
        <ProductInfo info={product} />
      </div>
    </Layout>
  )
}

export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
  // Call an external API endpoint to get posts
  const res = await fetch(`https://dummyjson.com/products?limit=20`)
  const products = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = products.products.map((product: any) => ({
    params: { id: (product.id).toString() },
  }))

  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }

}

export const getStaticProps: GetStaticProps = async (context: any) => {
  console.log(context)
  const res = await fetch(`https://dummyjson.com/products/${context.params.id}`);
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};