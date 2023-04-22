import Link from "next/link";
import Button from "../UI/Button";
const KinyChat = () => {
    return ( 
        <section className="bg-primary-blue flex h-screen">
        <div className="w-1/2 px-10 py-10">
            <Link className="text-[#Cf1259] font-bold text-4xl  py-5" href="#">App~Name</Link>

            <div className="px-10">
                <h1 className="text-white text-6xl mt-5">Murakaza neza!</h1>
                <p className="text-white leading-[30px] tracking-[1px] mt-10 w-5/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut quibusdam, hic quia temporibus dicta quos quisquam suscipit, perspiciatis dolores omnis recusandae deserunt? Cumque nemo quibusdam, perferendis tempore modi in!</p>

            </div>


        </div>

        <div className="bg-white h-screen w-1/2 py-20 gap-5 flex flex-col items-center ">

        <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/c9e8a0e5-c7bb-4f4e-8467-ee51abe867ff"></iframe>


        </div>

    </section>
     );
}
 
export default KinyChat;