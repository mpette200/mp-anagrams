import { JSX } from "react";
import styled from "styled-components";

interface Children {
    children: JSX.Element|JSX.Element[];
}

const Banner = styled.div`
    line-height: 4em;
    background-color: lightcoral;
    text-align: center;
`;

export default function TopBanner({children}: Readonly<Children>) {
    return (
        <Banner>{children}</Banner>
    );
}
