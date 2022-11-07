import React from "react";
import { StyledUserList } from "./styles/UserList.styled";
import User from "./User";
import { AiOutlineSearch } from 'react-icons/ai';


const UserList = ( {users} ) => {
    return ( 
        <StyledUserList>
            <form>
                <div className="search">
                    <AiOutlineSearch size={20}/>
                    <input name="searchUsers" type="text" placeholder="Search Users"/>
                </div>
            </form>
            <ul>
                {users.map((user, index)=>(
                    <User key={index} firstName={user.name.firstName} lastName={user.name.lastName} age={user.age}/>
                ))}
            </ul>
        </StyledUserList>
     );
}
 
export default UserList;