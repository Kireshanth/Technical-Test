import React, { useState } from 'react';
import FilterAge from './components/FilterAge';
import Header from './components/Header';
import { StyledContainer, StyledContainer1, StyledContainer2 } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global'
import UserList from './components/UserList';

const API_URL = 'http://localhost:8099'

function App() {

  interface User {
    age: number,
    country: string,
    email: string,
    name: {
      firstName: string,
      lastName: string,
    }
  }

  const [users, setUsers] = useState<User[]>([]);
  const [minAge, setMinAge] = useState<number>(0);
  const [maxAge, setMaxAge] = useState<number>(100);

  //Retrieve users from the 3 endpoints when clicking the "Retrieve Users" button
  async function getUsers(): Promise<void>{
    let userList = [];
    const response1 = await fetch(`${API_URL}/users/kids`)
    const kids = await response1.json();
    const response2 = await fetch(`${API_URL}/users/adults`)
    const adults = await response2.json();
    const response3 = await fetch(`${API_URL}/users/seniors`)
    const seniors = await response3.json();
    userList.push(...kids.data, ...adults.data, ...seniors)
    userList = sortUsers(userList);
    setUsers(userList);
  }

  //Order the users from the 3 collections by name ascending followed by the age descending
  function sortUsers(arr: User[]): User[]{
    return arr.sort((a, b) => {
      const firstNameCheck = a.name.firstName.localeCompare(b.name.firstName);
      if(firstNameCheck == 0){
        const lastNameCheck = a.name.lastName.localeCompare(b.name.lastName);
          if(lastNameCheck == 0){
            return b.age - a.age;
          } 
          else {
            return lastNameCheck;
          }
      }
      else{
        return firstNameCheck;
      }
    })
  }

  return (
    <>
      <GlobalStyles />
        <Header />
        <StyledContainer>
          <StyledContainer1>
            <h1>Users</h1>
          </StyledContainer1>
          <StyledContainer2>
            <FilterAge getUsers={getUsers} setMinAge={setMinAge} setMaxAge={setMaxAge}/>
            <UserList users={users} minAge={minAge} maxAge={maxAge}/>
          </StyledContainer2>
        </StyledContainer>
    </>
  );
}

export default App;
