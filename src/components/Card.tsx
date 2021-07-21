import React, { ReactNode } from "react";
import styled from "styled-components";
import Calendar from "../assets/svg/Calendar";
import Dots from "../assets/svg/Dots";


const Container = styled.section`
    width: 500px;
    background: white;
    padding: 1.25em;
    box-shadow: 0px 0px 3px rgba(230, 232, 249, 0.25);
    border-radius: .5em;
    img {
        height: 100%;
        width: 100%;
    }
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    background: white;
`;

const Title = styled.p`
    padding-bottom: .5em;
`;

const Label = styled.div`
    width: max-content;
    color: #F0544F;
    background: #F0544F20;
    border-radius: .5em;
    padding: .5em .75em;
    font-size: .75rem;
`;

const Aside = styled.aside`
    min-height: 100%;
    display: flex;
    align-items: center;
`;

const DotsStyled = styled(Dots)`
    margin-left: 1em;
`;

type Props = {
    children: ReactNode;
    title?: string;
    label?: string;
};

export default function Card({ children, title, label }: Props) {
    return (
        <Container>
            <Header>
                <div>
                    <Title>{title}</Title>
                    <Label>{label}</Label>
                </div>
                <Aside>
                    <Calendar/>
                    <DotsStyled />
                </Aside>
            </Header>
            {children}
        </Container>
    )
}
