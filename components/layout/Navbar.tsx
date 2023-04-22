import Button from "../UI/Button";
import Link from "next/link";

const Navbar = () => {
    return (
        <header className="flex items-center justify-between">
            <h1 className="text-[#Cf1259] font-bold text-4xl  py-5">App~Name</h1>

            <nav>
                <Link href="/register">
                <Button text={"Register"} className="hover:scale-110 hover:bg-white" />
                </Link>
            </nav>
        </header>
      );
}
 
export default Navbar;