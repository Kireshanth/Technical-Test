import React from 'react';
import { StyledButton, Container } from './styles/FilterAge.styled'
import 'bootstrap/dist/css/bootstrap.min.css';

const FilterAge = ( {getUsers, setMinAge, setMaxAge} ) => {
    
    const updateAge = e => {
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
                    <label for="minAge">Min</label>
                    <input name="minAge" onChange={updateAge} min={0} step="1" max={100} type="number" />
                </div>
                <div className='full-input'>
                    <label for="maxAge">Max</label>
                    <input name="maxAge" onChange={updateAge} min={0} step="1" max={120} type="number" />
                </div>
            </div>
            <div>
                <StyledButton type="button" onClick={()=> getUsers()} >Retrieve Users</StyledButton>
            </div>
            </Container>
       </>
     );
}
 
export default FilterAge;