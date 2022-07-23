import Link from "next/link";
function Menu(){
 return(
      <nav>
        <ul>
            <li className="mx-4 inline-block">
                <Link className="mx-4 dark:text-white" href="/">Home</Link> 
            </li>
            <li className="mx-4 inline-block">
                <Link className="mx-4 dark:text-white" href="/products">Products</Link>
            </li>
            <li className="mx-4 inline-block">
                <Link className="mx-4 dark:text-white" href="/login">Login</Link>
            </li>
            <li className="mx-4 inline-block">
                <Link className="mx-4 dark:text-white" href="/dashboard">dashboard</Link>
            </li>
        </ul>
     </nav>
 )
}
export default Menu;