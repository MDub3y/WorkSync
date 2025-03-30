"use client";

import { useRouter } from "next/navigation";
import { LinkButton } from "./buttons/LinkButton";
import { PrimaryButton } from "./buttons/PrimaryButton";

export const Appbar = () => {
    const router = useRouter();

    return <div className="flex border-b-[1px] border-slate-200 justify-between p-4">
        <div className="flex items-center text-2xl font-extrabold">
            <span className="w-4 h-1 mr-[0.1rem] mt-4 bg-amber-700" />Zapier
        </div>
        <div className="flex">
            <div className="pr-4">
                <LinkButton onClick={() => {}}>Contact Sales</LinkButton>
            </div>
            <div className="pr-4">
                <LinkButton onClick={() => {
                    router.push("/login");
                }}>Login</LinkButton>
            </div>
            <PrimaryButton onClick={() => {
                router.push("/signup");
            }}>Signup</PrimaryButton>
        </div>
    </div>
}