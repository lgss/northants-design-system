import styled from "styled-components";
import Heading from "../../components/Heading/Heading";

export const Container = styled.div`
  display: block;
`

export const SectionTitle = styled(Heading)`
  background: ${props => props.theme.theme_vars.colours.grey_light};
  padding: 5px 15px;
`

export const LinksList = styled.div`
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Pagelink = styled.a`
  color: ${props => props.theme.theme_vars.colours.black};
  text-decoration: none;
  display: block;
  padding: 15px;
  border-radius: ${props => props.theme.theme_vars.borderRadius};
  width: 100%;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    width: calc(50% - 46px);
    margin-bottom: 31px;
  }
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    width: calc(33.333% - 61px);
  }

  &:hover, &:focus {
    background: ${props => props.theme.theme_vars.colours.grey_light};

    p:first-of-type {
      color: ${props => props.theme.theme_vars.colours.action_dark};
    }
  }
  &:focus {
    outline: none;
    box-shadow: ${props => props.theme.theme_vars.colours.focus} 0 0 0 3px;
    transition: box-shadow 0.3s ease 0s;
  }
`

export const Title = styled.p`
  ${props => props.theme.linkStyles}
  margin-top: 0;
  margin-bottom: 15px;

  &:hover {
    ${props => props.theme.linkStylesHover}
  }
`

export const Summary = styled.p`
  margin: 0;
`