import React from 'react';
import { StyledHeader } from "./styles/Header.styled";

const Header = () => {
    return ( 
        <StyledHeader>
                <img src='/logo.svg' alt="Planned Logo"/>
                <h3>Planned test</h3>
        </StyledHeader>
     );
}
 
export default Header;