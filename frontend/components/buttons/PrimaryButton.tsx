"use client";

import { ReactNode } from "react";

export const PrimaryButton = ({ children, onClick, size = 'small' }: {
    children: ReactNode,
    onClick?: () => void,
    size?: 'big' | 'small'
}) => {
    return <div className={`${size === 'small' ? 'text-sm px-12 py-2' : 'text-xl px-16 py-4'} hover:shadow-md cursor-pointer bg-amber-700 text-white rounded-full text-center`} onClick={onClick} >
        {children}
    </div>
}