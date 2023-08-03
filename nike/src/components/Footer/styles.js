import {styled} from 'styled-components';

export const FooterContainer = styled.div`
    width: 100vw;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color:#CEA70A;
`
export const Text = styled.p`
    margin: 20px;
    text-align: center;
    font-weight: 300;
    letter-spacing: 4px;
`
export const TextSpan = styled.span`
    font-weight: 600;
`
export const Link = styled.a`
    text-decoration: none;
    color: #CEA70A;
    margin: 10px;
    transition: 500ms;
    &:hover{
        opacity: 0.5;
    }
`