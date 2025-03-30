"use client";

import { ReactNode } from "react";

export const SecondaryButton = ({ children, onClick, size = 'small' }: {
    children: ReactNode,
    onClick?: () => void,
    size?: 'big' | 'small'
}) => {
    return <div className={`${size === 'small' ? 'text-sm px-12 py-2' : 'text-xl px-16 py-4'} hover:shadow-md cursor-pointer border rounded-full`} onClick={onClick} >
        {children}
    </div>
}