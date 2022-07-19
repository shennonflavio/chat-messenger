import styled from 'styled-components';

export const Container = styled.div`
  width:70px;
  height:30px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 50px;

`;

export const WrapperToggleButton = styled.div`
 position: relative;
 width: fit-content;
 transform: ${({ rotate }) => rotate };
 transition: 1s;
 display: flex;
 justify-content: center;
 align-items: center;
 left: ${({ move }) => move };
`;

export const ButtonTheme = styled.button`
width: 25px;
 height: 25px;
 position: relative;
 border: none;
 background-color: ${({ theme }) => theme.backgroundToggleButton};
 cursor: pointer;
 border-radius: ${({ rotate }) => rotate };
 transition: 1s;
 box-shadow: 0px 0px 8px 2px ${({ theme }) => theme.backgroundToggleButton} ;


div{
  position: absolute;
  width: 25px;
 height: 25px;
 transform: rotate(45deg);
 top: 0px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: ${({ theme }) => theme.backgroundToggleButton};
 border-radius: ${({ rotate }) => (rotate ? '70%' : '')};
 transition: 1s;


   div{
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: transparent;
    border: ${({ rotate }) => (rotate ? '' : '1px solid #FFF')} ;
    border-radius:50%;
    top: 0px;
    left:0px;
    overflow: hidden;

    div{
      display:  ${({ rotate }) => (rotate ? '' : 'none')};
      position: absolute;
      width:20px;
      height:20px;
      border-radius:50%;
      left: 0px;
      top: 6px;
      background: ${({ theme }) => theme.background};
      transition: 1s;
      img{
      width: 20px;
      height: 20px;
     }
    }
   }
}


`;
