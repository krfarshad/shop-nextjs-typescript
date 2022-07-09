import { useRouter } from 'next/router'
import { GetStaticPaths } from 'next'
const Product = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
    // Call an external API endpoint to get posts
    const res = await fetch(`https://dummyjson.com/products?limit=20`)
    const products = await res.json()
    // Get the paths we want to pre-render based on posts
    const paths = products.products.map((product:any) => ({
      params: { id: product.id },
    }))
  console.log("path:"+paths)
 
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
 
 }