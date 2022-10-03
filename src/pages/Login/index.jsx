import React from 'react';
import { useNavigate } from "react-router-dom";
import {FacebookLoginButton,GoogleLoginButton } from "react-social-login-buttons";
import { ImageChat, logo } from '../../assets';
import { Container, Content, Form, Image, Input, LoginButton } from './styles';


function Login() {

  const navigate = useNavigate()
  return (
    <Container>
      <Content>
        <Image>
          <img src={ImageChat} alt="" />
        </Image>
        <Form>
          <div><img src={logo} alt="" /></div>
          <div>
            <Input placeholder='E-mail' />
            <Input placeholder='Senha' />
          </div>
          <div>
            <LoginButton onClick={()=>navigate('/home')} >LOGIN</LoginButton>
          </div>
          <div>
            <span>Esqueci minha senha</span>
            <span>Cadastre-se</span>
          </div>
          <hr />
          <div>
            <FacebookLoginButton/>
            <GoogleLoginButton/>
          </div>


        </Form>
      </Content>
    </Container>
    );
}

export default Login;
