import Layout from "../../components/layout/Layout";
import Link from 'next/link'
const NotFound = () =>{
    return(
        <>
        <Layout>
          <div className="container mx-auto p-10 ">
           <h1 className="text-center font-bold my-6"> We could find anything</h1>
           <Link href="/Products" ><span className="py-3 px-8 rounded-md text-dark mx-auto table pointer bg-fuchsia-200"> Go to Shop</span></Link>
          </div>
        </Layout>
      </>
    )
}
export default NotFound;