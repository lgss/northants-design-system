import styled from "styled-components";
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

export const Container = styled.header`
    font-family: ${props => props.theme.theme_vars.fontstack};
    color: ${props => props.isHomepage === "true" ? props.theme.theme_vars.colours.black : props.theme.theme_vars.colours.white};
    background-color: ${props => props.isHomepage === "true" ? props.theme.theme_vars.colours.white
                        : props.theme.name === "GDS theme" ? props.theme.theme_vars.colours.black : props.theme.theme_vars.colours.action};
    border-bottom: ${props => props.isHomepage === "true" ? "5px solid "+(props.theme.name === "GDS theme" ? props.theme.theme_vars.colours.black 
                        : props.theme.theme_vars.colours.action) : "none"};
    padding: 3px 0;
`

export const StyledMaxWidthContainer = styled(MaxWidthContainer)`
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const LogoStyles = `
    svg {
        width: 200px;
        height: auto;
        vertical-align: middle;
    }
`
export const LogoColoured = styled.div`
    ${LogoStyles}
`
export const LogoWhite = styled.div`
    ${LogoStyles}
`

export const HomeLink = styled.a`
    &:hover {
        opacity: 0.8;

        svg {
            opacity 0.8;
        }
    }
    &:focus {
        outline: none;
        box-shadow: ${props => props.theme.theme_vars.colours.focus} 0 0 0 3px;
        transition: box-shadow 0.3s ease 0s;
    }
`

export const AllServicesLink = styled.a`
    ${props => props.theme.linkStyles};
    color: ${props => props.isHomepage === "true" ? props.theme.theme_vars.colours.action : props.theme.theme_vars.colours.white};

    &:hover {
        ${props => props.theme.linkStylesHover};
        color: ${props => props.isHomepage === "true" ? props.theme.theme_vars.colours.action_dark : props.theme.theme_vars.colours.white};
        opacity: ${props => props.isHomepage === "true" ? "1" : "0.8"};
    }
    &:focus {
        ${props => props.theme.linkStylesFocus};
    }
    &:active{
        ${props => props.theme.linkStylesActive}
    }
`