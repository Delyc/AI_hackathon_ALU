import Button from "../UI/Button";
import Link from "next/link";
import { languageChange } from "@/utils/languages";
import uk from '../../public/assets/uk.png'
import Image from "next/image";
const Navbar = () => {
    return (
        <header className="flex items-center justify-between">
            <h1 className="text-[#Cf1259] font-bold text-4xl  py-5">App~Name</h1>

            <nav className="flex gap-10">
                <div className="langWrap flex gap-2 items-center">
                    <button className="" onClick={languageChange}>
                        <a href="#" lang="english" className="active">

                            <svg width="50px" height="40px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#20603D" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></path><path fill="#FAD201" d="M0 19h36v7H0z"></path><path fill="#00A1DE" d="M32 5H4a4 4 0 0 0-4 4v12h36V9a4 4 0 0 0-4-4z"></path><path fill="#FAD201" d="M26 5l.522 4.034l1.548-3.762l-.539 4.032L30 6.072l-1.565 3.755l3.221-2.484l-2.483 3.222L32.929 9l-3.234 2.469l4.033-.54l-3.762 1.548L34 13l-4.034.523l3.762 1.547l-4.033-.539L32.929 17l-3.756-1.565l2.483 3.222l-3.221-2.484L30 19.929l-2.469-3.234l.539 4.033l-1.548-3.762L26 21l-.522-4.034l-1.549 3.762l.54-4.033L22 19.929l1.565-3.756l-3.221 2.484l2.482-3.222L19.071 17l3.233-2.469l-4.032.539l3.761-1.547L18 13l4.033-.523l-3.761-1.548l4.032.54L19.071 9l3.755 1.565l-2.482-3.222l3.221 2.484L22 6.072l2.469 3.232l-.54-4.032l1.549 3.762z"></path><circle fill="#00A1DE" cx="26" cy="13" r="4"></circle><circle fill="#FAD201" cx="26" cy="13" r="3"></circle></svg>
                        </a>

                    </button>
                    <div className="h-8 bg-white w-[1px]"></div>
                    <button className="" onClick={languageChange}>
                        <a href="#" lang="kiny">
                            <Image src={uk} alt="UK" width={50} height={100} />
                        </a>

                    </button>


                </div>

                <Link href="/register">
                    <Button text={"Register"} className="hover:scale-110 hover:bg-white" />
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;