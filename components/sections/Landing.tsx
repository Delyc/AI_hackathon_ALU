import Navbar from "../layout/Navbar";
import hero from '../../public/assets/hero2.png'
import Image from "next/image";
import HowItWorks from "./HowItWorks";
import {languageChange} from '../../utils/languages'
const Landing = () => {
    return ( 
        <section>
            <Navbar />

            <section className="flex justify-between items-center py-20 pt-44 px-20">
                <div className="w-1/2">
                <h1 id="description" className="description text-white text-5xl leading-[60px] tracking-[1px]">We Are Your Financial Partner When You’ve Outgrown The Rest</h1>
                </div>

           

                <div className="relative w-[30rem] h-[50vh]">
                    <Image src={hero} layout="fill" className="absolute" alt="Illu"/>
                </div>
            </section>

        </section>
     );
}
 
export default Landing;