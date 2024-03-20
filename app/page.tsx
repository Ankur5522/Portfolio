"use client"

import Image from "next/image";
import Link from "next/link";
import { RxDownload } from "react-icons/rx";
import {motion} from "framer-motion";

export default function Home() {
    return (
        <main className="w-screen h-screen relative">
            <div
                className="flex items-center w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url(/main-bg.webp)" }}
            >
                <div className="pl-5 md:pl-40 md:pb-10 flex flex-col gap-5 z-[20] max-w-[900px]">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1 , x: 0}}
                        transition={{ delay: 0.5, duration: 1}}
                    >
                    <h1 className="text-[40px] sm:text-[80px] text-white font-bold -mb-8">
                        {" "}
                        Ankur Chaudhary
                    </h1>
                    <h1 className="text-[25px] sm:text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                        {" "}
                        Full Stack Developer
                    </h1>
                    <p className="text-gray-200 block z-[20]">
                        Always looking out to learn new and creative things.
                    </p>
                    <div className="pt-4 flex-row flex gap-5">
                        <Link
                            href="/resume.pdf"
                            download={true}
                            target="_blank"
                            className="rounded-[20px] flex items-center group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
                            >
                            Resume
                            <RxDownload className="w-5 h-5 ml-2" />
                        </Link>
                        <Link
                            href="/contact-me"
                            className="rounded-[20px] group relative bg-transparent border border-white hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
                            >
                            <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
                            Contact me
                        </Link>
                    </div>
                    </motion.div>
                </div>
            </div>

            {/* <div className="absolute flex bottom-40 z-[20] right md:hidden gap-5">
                <Link
                    href="/resume.pdf"
                    download={true}
                    target="_blank"
                    className="rounded-[20px] flex items-center group relative bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
                >
                    Resume
                    <RxDownload className="w-5 h-5 ml-2" />
                </Link>
                <Link
                    href="/contact-me"
                    className="rounded-[20px] group bg-transparent border border-white  px-5 py-3 text-lg text-white max-w-[200px]"
                >
                    Contact me
                </Link>
            </div> */}

            <div className="absolute bottom-0 right-0 z-[10] ">
                <Image
                    src="/horse.png"
                    alt="horse"
                    width={300}
                    height={300}
                    className="absolute right-55 top-40"
                />
                <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
            </div>

            <div className="absolute bottom-0 z-[5] w-full h-auto">
                <Image
                    src="/trees.webp"
                    alt="trees"
                    width={2000}
                    height={2000}
                    className="w-full h-full"
                />
            </div>
            <Image
                src="/stars.png"
                alt="stars"
                width={300}
                height={300}
                className="absolute top-10 left-0 z-[10]"
            />
        </main>
    );
}
