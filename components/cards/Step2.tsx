import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from "next/link";

const Step = ({ index, image , step, description}: any) => {

    const [screenSize, setScreenSize] = useState<any>(typeof window !== "undefined" && window.innerWidth);
    const boxVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
        hidden: { opacity: 0, x: screenSize > 640 ? (index % 2 == 0 ? 150 : -150) : 0 },
    };

    useEffect(() => {
        const setter = () => setScreenSize(window.innerWidth);
        (() => {
            if (window) {
                setter()
                window.addEventListener('resize', setter)
            }
        })();
        return () => window?.removeEventListener('resize', setter)
    }, []);

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        inView ? control.start("visible") : control.start("hidden");
    }, [control, inView]);

    return (
        <section>

<div className='flex flex-col-reverse gap-10 h-auto md:flex md:flex-row justify-between  mt-20  overflow-x-hidden'>
            <div className={`md:w-1/2 lg:w-2/5 space-y-4 order-2 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                
                <h1 className="font-bold text-primary-pink text-3xl">{step}</h1>
                <p className="text-white/60">{description}</p>

            </div>
            <motion.div
                ref={ref}
                variants={boxVariants}
                initial="hidden"
                animate={control}
                className="relative  flex order-1 h-[30vh] md:h-[50vh] md:w-1/2">

                <div className="w-5/6 h-full relative">
                    <Image layout="fill" className={`  rounded   ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`} src={image} alt="image" />

                </div>

    


            </motion.div>
        </div>

           
        </section>
    );
}

export default Step;