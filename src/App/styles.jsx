import styled from 'styled-components';
import  {moon, sun } from '../assets/index';

export const Container = styled.div`
  width: 100%;
  height:100vh;
  position:absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
   background:${({theme})=>theme.background};
`;

export const WrapperTitleLight = styled.div`
width: fit-content;
height: 200px;
display: flex;
align-items: center;
justify-content: center;

 span{
  font-size: 8rem;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  transition: 1s;
  background: url( ${sun} );
  background-size: contain;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
 }
`;
export const WrapperTitleDark = styled.div`
width: fit-content;
height: 200px;
display: flex;
align-items: center;
justify-content: center;

 span{
  font-size: 8rem;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  transition: 1s;
  background: url( ${moon});
  background-size: contain;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
 }
`;

export const WrapperToggle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  margin: 50px 0px;
  align-items: center;
  justify-content: center;
`;
