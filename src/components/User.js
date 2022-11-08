import React from "react";
import { StyledUser } from "./styles/UserList.styled";


const User = ( {firstName, lastName, age} ) => {
    return ( 
        <StyledUser>
            <td>
                <div class="checkbox">
                    <input type="checkbox"></input>
                    <p>{firstName} {lastName}</p>
                </div>
            </td>
            <td>
                <p>{age}</p>
            </td>
        </StyledUser>
     );
}
 
export default User;