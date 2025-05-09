import type { FooterProps } from "../../types/footer";

export const Footer = (props: FooterProps) => {
    return (
        <footer>
            <hr />
            <p>&copy; {new Date().getFullYear()} criado com todo amor por {props.name}</p>
            <hr />
        </footer>
    );
};