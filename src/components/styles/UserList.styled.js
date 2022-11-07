import styled from "styled-components";


export const StyledUserList = styled.div`
    width: 100%;
    max-width: 900px;
    padding: 1.5em 2em;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    .search input {
        outline: none;
        border: none;
        line-height: 1.2em;
        font-size: 1em;
        padding: 0.5em;
        width: 100%;
      }
    
    .search{
        display: flex;
        align-items: center;
        justify-content: start;
        border: 1px rgba(100, 100, 111, 0.35) solid;
        border-radius: 8px;
        padding: 0.5em;
        margin-bottom: 1.5em;
    }
`

export const StyledUser = styled.li`
    list-style-type: none;

    div{
        display: flex;
        justify-content: start;
    }
`