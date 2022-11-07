import React from 'react';
import { StyledHeader } from "./styles/Header.styled";

const Header = () => {
    return ( 
        <StyledHeader>
                <img src='/logo.svg' alt="Planned Logo"/>
                <h1>Planned test</h1>
        </StyledHeader>
     );
}
 
export default Header;