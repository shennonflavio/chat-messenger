import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


  *{
    margin:0;
    left:0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  body{
     background:${({ theme }) => theme.background};
     transition: 1s;
  }

  ::-webkit-scrollbar {
      width: 8px;
      border-radius: 10px;
      background: #f9fafc;
    }
    ::-webkit-scrollbar-thumb {
      background: #dbe5ed;
      width: 5px;
      border-radius: 10px;
    }

`;
