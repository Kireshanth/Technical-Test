import React from "react";
import Form from 'react-bootstrap/Form';
import { StyledUser } from "./styles/UserList.styled";


const User = ( {firstName, lastName, age} ) => {
    return ( 
        <StyledUser>
            <td>
{/*                 <div class="checkbox"> */}
                    <Form.Check
                        inline
                        label={`${firstName} ${lastName}`}
                    />
                    {/* <input type="checkbox"></input> */}
                    {/* <p>{firstName} {lastName}</p> */}
{/*                 </div> */}
            </td>
            <td>
                <p>{age}</p>
            </td>
        </StyledUser>
     );
}
 
export default User;