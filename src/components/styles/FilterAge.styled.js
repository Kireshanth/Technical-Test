import styled from "styled-components";

export const Container = styled.div`
    width: 450px;
    height: 250px;
    max-width: 100%;
    padding: 2em;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-right: 2em;

    input {
        outline: none;
        border: none;
        line-height: 1.2em;
        font-size: 1em;
        width: 70%;
      }
    
    label {
        font-size: 1em;
        color: rgba(100, 100, 111, 0.4);
        margin: 0 1em;
      }
    
    button{
      padding: 1em;
      background: #52a27e;
      color: #fff;
      border-radius: 2em;
      border: none;
      font-size: 1em;
      cursor: pointer;
    }

    .full-input {
        display: flex;
        justify-content: space-between;
        padding: 1em;
        border: 1px solid rgba(100, 100, 111, 0.35);
        border-radius: 5px;
        width: 100%;
        margin-bottom: 1em;
    }
`
