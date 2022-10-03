import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

export const Content = styled.div`
  width: fit-content;
  max-width: 1450px;
  min-width: 1450px;
  height: 95vh;
  min-height: 750px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 40px;
  /* padding: 15px 15px 15px 40px; */
  box-shadow: 0 0 50px 25px ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.body};

`;

export const Image = styled.div`
width: 70%;
height: 100%;
border-top-left-radius: 40px;
border-bottom-left-radius: 40px;

  img{
    width: 100%;
height: 100%;
  }
`;
export const Form = styled.div`
width: 30%;
height: 100%;
border-top-right-radius: 40px;
border-bottom-right-radius: 40px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 40px;
background-color: ${({ theme }) => theme.backgroundPainel};
padding: 20px 60px;
 div{
    width: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span{
      color: #047a04;
      font-weight: 400;
      cursor: pointer;
    }

  }
  hr{
    width: 80%;
    border: 0.3px solid #eee;
  }

  button{
    div:first-child{
      flex-direction: row;
      padding: 0 10px;
      div{
        width: fit-content;
      }
    }

  }
`;

export const Input = styled.input`
width: 300px;
height: 45px;
padding-left: 10px;
  list-style: none;
  outline: none;
  border:0.5px solid #d7f0d7;
  background-color: #ffffff;
  border-radius: 10px;

  ::placeholder{
    font-size: 14px;
    font-weight: 600;
    color: #aaa7a7;
  }

  :focus{
    box-shadow: 0 0 5px #95e395;
  }
`;

export const LoginButton = styled.button`
  width: 300px;
  height: 45px;
  border: none;
  border-radius: 10px;
  background-color: #4fcb4f;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
