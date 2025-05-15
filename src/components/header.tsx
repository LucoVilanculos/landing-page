import type { HeaderProps } from "../types/header";

export const Header = (props: HeaderProps) => {
    return (
        <header className="px-1.5 py-1.5 h-15 flex items-center bg-gradient-to-l from-blue-900 to-blue-700 text-white  justify-between">
            <h2 className="text-2xl"><strong>{props.name}</strong></h2>
            <p className="text-sm">{props.email}</p>
            
        </header>
    );
};