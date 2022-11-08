import styled from "styled-components";


export const StyledUserList = styled.div`
    width: 100%;
    max-width: 900px;
    padding: 1.5em 0;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    .search input {
        outline: none;
        border: none;
        line-height: 1.2em;
        font-size: 1.1em;
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
        margin: 0 2em;
        margin-bottom: 1.5em;
    }

    .user-table{
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        margin: 1em 0;
        border-top: 2px solid #f4f6f8;
    }

    .user-table thead {
        font-size: 1.5em;
        font-weight: 500;
    }

    .user-table thead tr div{
        display: inline;
    }

    .user-table thead th{
        width: 50%;
        padding: 1em;
    }

    .user-table thead tr {
        text-align: left;
    }

    .user-table thead tr img{
        padding-left: 0.5em;
        cursor: pointer;
    }

    .user-table tbody{
        font-size: 1.3em;
    }
`

export const StyledUser = styled.tr`
    border-bottom: 2px solid #f4f6f8;
    &:last-child {
        border: none;
    }

    .checkbox {
        display: inline-flex;
        align-items: center;
    }
    input { 
        margin-right: 1em;
    }
    td {
        padding: 1em;
    }
`