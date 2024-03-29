import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
    return (
        <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20 ">
            <div className="flex flex-row items-center gap=3">
                <h1 className="text-white text-[35px] font-bold">
                    Portfolio
                </h1>
            </div>
            <div className="flex flex-row gap-5 mb-2">
                {Socials.map((social, index) => (
                    <a key={index} href={social.link} target="_blank">
                        <Image
                        src={social.src}
                        alt={social.name}
                        width={28}
                        height={28}
                    />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
