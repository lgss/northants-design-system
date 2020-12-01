import styled from "styled-components";

export const H1 = styled.h1`
    color: ${props => props.theme.colours.black};
    margin-left: 0;
    font-weight: 700;
    font-family: ${props => props.theme.fontstack};
    margin-bottom: 25px;

    font-size: 32px;
    font-size: 2rem;
    line-height: 1.09375;

    @media screen and (min-width: ${props => props.theme.breakpoints.m}){
        font-size: 48px;
        font-size: 3rem;
        line-height: 1.04167;
    }
`
export const H2 = styled.h2`
    color: ${props => props.theme.colours.black};
    font-weight: 700;
    line-height: 1;
    font-family: ${props => props.theme.fontstack};

    font-size: 24px;
    font-size: 1.5rem;
    line-height: 1.04167;

    @media screen and (min-width: ${props => props.theme.breakpoints.m}){
        font-size: 36px;
        font-size: 2.25rem;
        line-height: 1.11111;
    }
`
export const H3 = styled.h3`
    color: ${props => props.theme.colours.black};
    font-weight: 400;
    line-height: 1;
    font-family: ${props => props.theme.fontstack};

    font-size: 24px;
    font-size: 1.5rem;
    line-height: 1.04167;

    @media screen and (min-width: ${props => props.theme.breakpoints.m}){
        font-size: 36px;
        font-size: 2.25rem;
        line-height: 1.11111;
    }
`
export const H4 = styled.h4`
    color: ${props => props.theme.colours.black};
    font-weight: 700;
    line-height: 1;
    font-family: ${props => props.theme.fontstack};

    font-weight: 400;
    line-height: 1;
    font-family: ${props => props.theme.fontstack};

    font-size: 24px;
    font-size: 1.5rem;
    line-height: 1.04167;

    @media screen and (min-width: ${props => props.theme.breakpoints.m}){
        font-size: 36px;
        font-size: 2.25rem;
        line-height: 1.11111;
    }
`