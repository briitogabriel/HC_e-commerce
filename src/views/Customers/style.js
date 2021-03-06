import styled from "styled-components";

export const Subtitle = styled.h1`
  margin: 30px 0;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width:100%;
  table-layout: fixed;
  th {
    text-align: center;
    padding: 10px 0;
  }
  td, th {
    border: 1px solid rgba(1,1,1,.2);
  }

  td {
    padding: 10px;
  }

  @media screen and (max-width: 600px) {
    border: 0;
    thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  
    tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;

  }
  
    td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 1rem;
    text-align: left;
    padding: 10px;
  }
  
  td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  td:last-child {
    border-bottom: 0;
  }
  }
`;