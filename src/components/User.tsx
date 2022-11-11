import React from "react";
import Form from 'react-bootstrap/Form';
import { StyledUser } from "./styles/UserList.styled";

interface userDetails{
    firstName: string;
    lastName: string;
    age: number;
}

const User = ( {firstName, lastName, age}: userDetails ) => {
    return ( 
        <StyledUser>
            <td>
                <Form.Check
                    inline
                    label={`${firstName} ${lastName}`}
                />
            </td>
            <td>
                <p>{age}</p>
            </td>
        </StyledUser>
     );
}
 
export default User;