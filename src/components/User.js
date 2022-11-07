import React from "react";
import { StyledUser } from "./styles/UserList.styled";


const User = ( {firstName, lastName, age} ) => {
    return ( 
        <StyledUser>
            <div>
                <input type="checkbox"></input>
                <p>{firstName} {lastName}</p>
                <p>{age}</p>
            </div>
        </StyledUser>
     );
}
 
export default User;