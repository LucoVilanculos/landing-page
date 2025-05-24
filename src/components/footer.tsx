import { GithubLogoIcon } from "@phosphor-icons/react";
import { LinkedinLogoIcon } from "@phosphor-icons/react";
import { FacebookLogoIcon } from "@phosphor-icons/react";
import { InstagramLogoIcon } from "@phosphor-icons/react";

import type { FooterProps } from "../types/allprops";

export const Footer = (props: FooterProps) => {
    return (
        <footer className="bg-gradient-to-l from-blue-700 to-blue-900 px-2 h-15 text-sm text-white flex items-center">
            <FacebookLogoIcon size={30} /> <InstagramLogoIcon size={30}/> <LinkedinLogoIcon size={30}/> <GithubLogoIcon size={30}/>
            <p>&copy; {new Date().getFullYear()} criado com todo ❤️ por <strong>{props.name}</strong></p>
        </footer>
    );
};