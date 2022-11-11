import React from 'react';
import { StyledButton, Container } from './styles/FilterAge.styled'
import 'bootstrap/dist/css/bootstrap.min.css';

interface FilterUsers {
    getUsers: () => Promise<void>;
    setMinAge: (num: number) => void;
    setMaxAge: (num: number) => void;
}

const FilterAge = ( {getUsers, setMinAge, setMaxAge}: FilterUsers ) => {
    
    //Implement a filter for the age based on the min and max values of the inputs
    const updateAge = (e: any) => {
        if(e.target.name == "minAge"){
            if(e.target.value == ""){
                setMinAge(0)
            } else if(parseInt(e.target.value) >= 0){
                setMinAge(e.target.value)
            }
        } 
        else {
            if(e.target.value == ""){
                setMaxAge(100)
            } else {
                setMaxAge(e.target.value)
            }
        }
    }

    return (
        <>
            <Container>
            <div>
                <div className='full-input'>
                    <label htmlFor="minAge">Min</label>
                    <input name="minAge" onChange={updateAge} min={0} step="1" max={100} type="number" />
                </div>
                <div className='full-input'>
                    <label htmlFor="maxAge">Max</label>
                    <input name="maxAge" onChange={updateAge} min={0} step="1" max={120} type="number" />
                </div>
            </div>
            <div>
                <StyledButton type="button" onClick={()=> getUsers()}>Retrieve Users</StyledButton>
            </div>
            </Container>
       </>
     );
}
 
export default FilterAge;