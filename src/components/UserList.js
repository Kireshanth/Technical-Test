import React, { useState } from "react";
import { StyledUserList } from "./styles/UserList.styled";
import User from "./User";
import { AiOutlineSearch } from 'react-icons/ai';


const UserList = ( {users, minAge, maxAge} ) => {

    const [search, setSearch] = useState("");
    console.log(minAge, maxAge)

    const fmHandleSubmit = event => {
        event.preventDefault();
    }

    return ( 
        <StyledUserList>
            <form onSubmit={fmHandleSubmit}>
                <div className="search">
                    <AiOutlineSearch size={25}/>
                    <input 
                        type="text" 
                        onChange={ e=>{
                            setSearch(e.target.value)}
                        }
                        placeholder="Search Users"
                    />
                </div>
            </form>
            <table class="user-table">
                <thead>
                    <tr>
                        <th>
                            Name
                            <img src='/sort-arrows.svg' alt="Planned Logo"/>
                        </th>
                        <th>
                            Age
                            <img src='/sort-arrows.svg' alt="Planned Logo"/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    users && users.filter((val)=>{
                        let name = `${val.name.firstName} ${val.name.lastName}`.toLowerCase()
                        if(search == "" && val.age >= minAge && val.age <= maxAge){
                            return val
                        } else if(name.includes(search.toLowerCase()) && val.age >= minAge && val.age <= maxAge){
                            return val
                        }
                    }).map((user, index)=>(
                        <User key={index} firstName={user.name.firstName} lastName={user.name.lastName} age={user.age}/>
                    ))
                }
                </tbody>
            </table>
        </StyledUserList>
     );
}

export default UserList;