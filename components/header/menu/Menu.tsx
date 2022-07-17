import Link from "next/link";
function Menu(){
 return(
      <nav>
        <ul>
            <li className="mx-4 inline-block">
                <Link className="mx-4 dark:text-white" href="/">Home</Link> 
            </li>
            <li className="mx-4 inline-block">
                <Link className="mx-4 dark:text-white" href="/Products">Products</Link>
            </li>
        </ul>
     </nav>
 )
}
export default Menu;