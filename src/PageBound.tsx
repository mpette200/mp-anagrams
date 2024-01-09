import { JSX } from "react";
import styled from "styled-components";

interface Children {
    children: JSX.Element|JSX.Element[];
}

const Wrapper = styled.div`
    width: 100%;
    min-width: 180px;
    display: flex;
    justify-content: center;
`;

const FlexWidth = styled.div`
    flex: 0 1 960px;
    min-width: 180px;
    margin: 0;
`;

export default function PageBound({children}: Readonly<Children>) {
    return (
        <Wrapper>
            <FlexWidth>{children}</FlexWidth>
        </Wrapper>
    );
}
