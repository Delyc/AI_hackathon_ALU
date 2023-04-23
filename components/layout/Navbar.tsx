import Button from "../UI/Button";
import Link from "next/link";
import { languageChange } from "@/utils/languages";
import uk from '../../public/assets/uk.png'
import Image from "next/image";
const Navbar = () => {
    return (
        <header className="flex items-center justify-between fixed bg-primary-blue px-20 z-50 w-full">

            {/* <div className=" mx-auto bg-red-500 max-w-[75rem]"> */}
            <h1 className="text-[#Cf1259] font-bold text-4xl  py-5">Itsinzi</h1>

            <nav className="flex gap-10">
               
                <a href="tel:+18332725779" className="flex items-center gap-2">
                    <svg fill="#Cf1259" width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.261 24.113c-0.489-0.344-5.846-3.905-6.502-4.306-0.286-0.175-0.635-0.261-1.015-0.261-0.489 0-1.032 0.142-1.561 0.421-0.515 0.271-2.077 1.16-2.841 1.596-0.673-0.473-2.254-1.683-4.745-4.177-2.476-2.474-3.697-4.068-4.173-4.745 0.435-0.764 1.323-2.325 1.593-2.839 0.511-0.969 0.57-1.937 0.155-2.589-0.389-0.615-3.937-5.994-4.303-6.5-0.345-0.477-0.963-0.736-1.634-0.736-0.529 0-1.091 0.16-1.578 0.499-0.047 0.033-4.753 3.446-4.691 5.386 0.173 5.451 5.471 11.857 9.883 16.271s10.819 9.713 16.292 9.887h0.045c1.916 0 5.284-4.646 5.316-4.692 0.884-1.262 0.562-2.653-0.243-3.217zM29.879 26.165c-1.268 1.757-3.070 3.592-3.774 3.855-3.751-0.176-9.014-3.473-14.84-9.299s-9.121-11.085-9.295-14.823c0.253-0.707 2.088-2.519 3.829-3.779 0.129-0.089 0.288-0.141 0.436-0.141 0.033 0 0.061 0.003 0.082 0.007 0.563 0.817 3.582 5.389 4.13 6.243 0.002 0.090-0.028 0.318-0.2 0.644-0.182 0.348-0.751 1.361-1.559 2.777l-0.629 1.103 0.729 1.039c0.544 0.772 1.838 2.452 4.395 5.009 2.567 2.569 4.241 3.859 5.011 4.399l1.039 0.73 1.102-0.63c1.069-0.611 2.36-1.342 2.779-1.563 0.337-0.177 0.567-0.192 0.63-0.192 0.010 0 0.019 0 0.026 0.001 0.765 0.48 5.436 3.581 6.26 4.146 0.014 0.080 0.001 0.254-0.151 0.471zM21.372 11.946l8.601-8.549-0.027 4.845c-0.009 0.405 0.311 0.756 0.716 0.747l0.513-0.001c0.405-0.010 0.739-0.25 0.748-0.654l0.020-7.219c0-0.007-0.027-0.012-0.027-0.019l0.040-0.366c0.004-0.203-0.043-0.384-0.175-0.513-0.129-0.131-0.311-0.21-0.512-0.204l-0.366 0.009c-0.007 0-0.012 0.003-0.020 0.004l-7.171-0.032c-0.404 0.009-0.738 0.343-0.747 0.748l-0.001 0.513c0.061 0.476 0.436 0.755 0.84 0.746l4.727 0.013-8.572 8.52c-0.39 0.39-0.39 1.024 0 1.415s1.023 0.39 1.414 0z"></path>
                    </svg>
                    <p className="text-white/60">+18332725779</p>
                </a>

                <Link href="/chat" className="flex items-center gap-2">
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Communication / Chat_Conversation">
                            <path id="Vector" d="M16 8H20C20.5523 8 21 8.44772 21 9V20L17.667 17.231C17.4875 17.0818 17.2608 17 17.0273 17H9C8.44771 17 8 16.5523 8 16V13M16 8V5C16 4.44772 15.5523 4 15 4H4C3.44772 4 3 4.44772 3 5V16.0003L6.33301 13.2308C6.51255 13.0817 6.73924 13 6.97266 13H8M16 8V12C16 12.5523 15.5523 13 15 13H8" stroke="#Cf1259" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                    <p className="text-white/60">Chat</p>
                </Link>
                <div className="langWrap flex gap-2 items-center">
                    <button className="" onClick={languageChange}>
                        <a href="#" lang="kiny" className="active">

                            <svg width="50px" height="40px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#20603D" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></path><path fill="#FAD201" d="M0 19h36v7H0z"></path><path fill="#00A1DE" d="M32 5H4a4 4 0 0 0-4 4v12h36V9a4 4 0 0 0-4-4z"></path><path fill="#FAD201" d="M26 5l.522 4.034l1.548-3.762l-.539 4.032L30 6.072l-1.565 3.755l3.221-2.484l-2.483 3.222L32.929 9l-3.234 2.469l4.033-.54l-3.762 1.548L34 13l-4.034.523l3.762 1.547l-4.033-.539L32.929 17l-3.756-1.565l2.483 3.222l-3.221-2.484L30 19.929l-2.469-3.234l.539 4.033l-1.548-3.762L26 21l-.522-4.034l-1.549 3.762l.54-4.033L22 19.929l1.565-3.756l-3.221 2.484l2.482-3.222L19.071 17l3.233-2.469l-4.032.539l3.761-1.547L18 13l4.033-.523l-3.761-1.548l4.032.54L19.071 9l3.755 1.565l-2.482-3.222l3.221 2.484L22 6.072l2.469 3.232l-.54-4.032l1.549 3.762z"></path><circle fill="#00A1DE" cx="26" cy="13" r="4"></circle><circle fill="#FAD201" cx="26" cy="13" r="3"></circle></svg>
                        </a>

                    </button>
                    <div className="h-8 bg-white w-[1px]"></div>
                    <button className="" onClick={languageChange}>
                        <a href="#" lang="english">
                            <Image src={uk} alt="UK" width={50} height={100} />
                        </a>
                    </button>
                </div>
                <Link href="/register">
                    <Button text={"Register"} className="hover:scale-110 hover:bg-white" />
                </Link>
            </nav>
            {/* </div> */}
        </header>
    );
}

export default Navbar;