import type { HeaderProps } from "../../types/header";

export const Header = (props: HeaderProps) => {
    return (
        <header>
            <h2><strong>{props.name}</strong></h2>
            <p>{props.email}</p>
            <hr />
        </header>
    );
};