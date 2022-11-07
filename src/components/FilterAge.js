import React from 'react';
import { useState } from 'react';
import { Container } from './styles/FilterAge.styled'

const FilterAge = () => {

    const [minAge, setMinAge] = useState(0);
    const [maxAge, setMaxAge] = useState(100);

    const updateAge = e => {
        if(e.target.name == "minAge"){
            if(e.target.value >= 0 && e.target.value < maxAge){
                setMinAge(e.target.value)
            }
        } else {
            if(e.target.value <= 120){
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
                    <input name="minAge" value={minAge} onChange={updateAge} min="0" max="100" type="number" />
                </div>
                <div className='full-input'>
                    <label for="maxAge">Max</label>
                    <input name="maxAge" value={maxAge} onChange={updateAge} min="0" max="120" type="number" />
                </div>
            </div>
            <div>
                <button type="button">Retrieve Users</button>
            </div>
            </Container>
       </>
     );
}
 
export default FilterAge;