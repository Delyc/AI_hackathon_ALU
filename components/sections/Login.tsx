import { useState } from "react";
import Button from "../UI/Button";
import Link from "next/link";
import axios from "axios";

const Login = () => {

    const [email, setEmail] = useState<string>("");
    const onChangeEmail = (e: any) => {
        setEmail(e.target.value);
    };
    const [password, setPassword] = useState<string>("");
    const onChangePassword = (e: any) => {
        setPassword(e.target.value);
    };

    const loginUser = async (data: any) => {
        try {
            const res = axios.post("https://itsinzi.onrender.com/login", data).then((resp) => {
                const token = resp.data.token
                localStorage.setItem("token", token);
                window.location.href = "/chat";
              })
        } catch (error) {
            console.error(error);
        }
    };

    const onSubmit = async (e: any) => {
        e.preventDefault()
        const loginData = {
            email: email,
            password: password,
        };
        loginUser(loginData)

        setEmail("");
        setPassword("");

    };

    return (
        <section className="bg-primary-blue flex h-screen">
            <div className="w-1/2 px-10 py-10">
                <h1 className="text-[#Cf1259] font-bold text-4xl  py-5">Itsinzi</h1>            <Link className="text-[#Cf1259] font-bold text-4xl  py-5" href="/">Itsinzi</Link>

                <div className="px-10">
                    <h1 className="text-white text-6xl mt-5">Welcome page</h1>
                    <p className="text-white leading-[30px] tracking-[1px] mt-10 w-5/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut quibusdam, hic quia temporibus dicta quos quisquam suscipit, perspiciatis dolores omnis recusandae deserunt? Cumque nemo quibusdam, perferendis tempore modi in!</p>

                </div>


            </div>

            <div className="bg-white h-screen w-1/2 py-20 gap-5 flex flex-col items-center ">

                <h1 className="text-primary-pink text-center text-3xl text-bold">Sign In</h1>
                <form className="flex flex-col gap-4 w-3/5">
                    <input className="border outline-none py-3 px-5" value={email} onChange={onChangeEmail} placeholder="Email" />
                    <input className="border outline-none py-3 px-5" value={password} onChange={onChangePassword} placeholder="Password" />
                    {/* <div className="flex justify-center"> */}
                    <Button text={"Sign in"} onClick={onSubmit} className="w-[10rem]" />

                    {/* </div> */}
                </form>

                <p>Or</p>

                <button className="flex gap-2 items-center bg-gray-100 py-2 px-5 shadow rounded">
                    <svg width="50px" height="50px" viewBox="-0.5 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

                        <title>Google-color</title>
                        <desc>Created with Sketch.</desc>
                        <defs>

                        </defs>
                        <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Color-" transform="translate(-401.000000, -860.000000)">
                                <g id="Google" transform="translate(401.000000, 860.000000)">
                                    <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05">

                                    </path>
                                    <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335">

                                    </path>
                                    <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853">

                                    </path>
                                    <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4">

                                    </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <p className="text-primary-blue font-medium">Sign in with Google</p>


                </button>



            </div>

        </section>
    );
}

export default Login;