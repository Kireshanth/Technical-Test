import React from 'react';
import { useState } from 'react';
import { Container } from './styles/FilterAge.styled'

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
                <button type="button" onClick={()=> getUsers()} >Retrieve Users</button>
            </div>
            </Container>
       </>
     );
}
 
export default FilterAge;