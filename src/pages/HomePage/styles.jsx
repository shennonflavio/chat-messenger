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
  gap: 20px;
  border-radius: 40px;
  padding: 15px 15px 15px 40px;
  box-shadow: 0 0 50px 25px ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.body};

`;

export const ContactContent = styled.div`
  width: 353px;
  min-width: 353px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 12px;


  .imageLogo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: ${({ theme }) => `1px solid ${theme.border}`};
  }

  .wrapperContactCard {
    overflow-x: auto;
  }
`;

export const MyCardChat = styled.div`
  width: 327px;
  height: 75px;
  margin: 30px 0;
  display: flex;
  gap: 20px;
  flex-direction: row;
  justify-content: flex-start;
`;

export const MyProfilePhoto = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .ProfilePhoto {
    width: 64px;
    height: 64px;
    position: relative;
    border-radius: 100%;
    background-image: url('https://thispersondoesnotexist.com/image');
    background-size: cover;

    .onlineDot {
      position: absolute;
      bottom: 0;
      left: 50px;
      width: 20px;
      height: 20px;
      border-radius: 10px;
      border: 4px solid white;
      background-color: yellowgreen;
    }
  }
`;
export const MycontactDetails = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2px;

  h3 {
    color: ${({ theme }) => theme.textMajor};
    font-weight: 500;
    font-size: 18px;
    opacity: 1;
  }
  h5 {
    font-size: 12px;
    color: ${({ theme }) => theme.textMinor};
    font-weight: 400;
  }
`;

export const Status = styled.div`
  width: 68px;
  height: 16px;
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;

  span {
    color: yellowgreen;
  }

  img {
    width: 10px;
  }
`;

export const Settings = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 7px;
`;

export const TitleActiveChats = styled.div`
  width: 325px;
  height: 21px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: ${({ theme }) => theme.textMajor};
    opacity: 1;
    font-size: 16px;
  }
`;

export const Search = styled.div`
  width: 327px;
  height: 40px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 21px 0 15px;
  border-radius: 8px;
  background: ${({ theme }) => theme.backgroundPainel};
  border: ${({ theme }) => `1px solid ${theme.border}`};

  :focus {
    border: none;
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.textMajor};
    opacity: 1;
  }
`;

export const AddButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const PainelMessages = styled.div`
  width: 950px;
  height: 100%;
  border-radius: 10px;
  padding: 12px;
  border: ${({ theme }) => `1px solid ${theme.border}`};
  background: ${({ theme }) => theme.backgroundPainel};
  position: relative;
  opacity: 1;
  padding: 0 20px;
`;

export const TitleChat = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  top: 0;
  left: 0;
  position: absolute;
  padding: 12px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: ${({ theme }) => `1px solid ${theme.border}`};
  background: ${({ theme }) => theme.backgroundPainelHeader};
  span {
    color: ${({ theme }) => theme.textMajor};
    font-weight: lighter;
  }
`;

export const PainelChat = styled.div`
  width: 100%;
  height: calc(100% - 170px);
  position: absolute;
  top: 80px;
  left: 0;
  padding: 12px;

`;

export const WrapperInputMessage = styled.div`
  width: 100%;
  height: 60px;
  margin: 20px 0;
  padding: 0 20px;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  `;

export const EmojiList = styled.div`
  width: 100%;
  height: ${({ height }) => height};
  position: absolute;
  bottom: 65px;
  left: 0;
  border-radius: 10px;
  background-color: ${({theme})=> theme.body};
  transition: 0.5s;
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;


  .emoji{
    width: 30px;
    height: 30px;
    border-radius: 5px;
    margin: 3px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme})=> theme.backgroundCard};
  }
`;

export const CategorieHeader = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  color: ${({theme})=> theme.textMajor};
  border: 1px solid yellowgreen;
`;
export const EmojiContent = styled.div`
  border: 1px solid yellow;
`;

export const WrapperEmojiCategory = styled.div`
  width: fit-content;
  height:fit-content;
  display: flex;
  flex-direction: row;

  span{
    width: fit-content;
    height: fit-content;
    border: 1px solid red;
  }
  div{
    border: 1px solid red;
  }
`;

export const InputMessage = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  display: flex;
  padding: 0 7px 0 20px;
  align-items: center;
  background: ${({ theme }) => theme.inputText};
  justify-content: space-between;
  border: ${({ theme }) => `1px solid ${theme.border}`};
  border-radius: 30px;
  opacity: 1;
  position: relative;
  span {
    color: ${({ theme }) => theme.textMajor};
    opacity: 1;
  }

  #inputMessage{
    border: none;
    width: 80%;
    height: 50px;
    max-height: 55px;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;

    align-items: center;
    justify-content: flex-start;

    :focus{
      border: none;
      list-style: none;
      outline: none;
    }
  }


  .inputMessageOptions {
    width: fit-content;
    height: 100%;
    padding: 0 8px;
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    right: 0;
    width: 20%;

  }
  .emoji {
    cursor: pointer;
  }

`;

export const ChatDetails = styled.div`
  width: ${({ width }) => width};
  height: 100%;
  transition: 0.3s;
`;

export const DetailsArrow = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  flex-direction: row;
  transition: 0.8s;
  justify-content: ${({ align }) => align};
  cursor: pointer;
  position: relative;

  img {
    /* margin-left: 14px; */
    transform: ${({ rotate }) => rotate};
    transition: 0.5s;
    position: absolute;
    left: 0px;
  }
  span {
    width: 100%;
    margin-left: 54px;
    overflow: hidden;
    flex-wrap: nowrap;
    white-space: nowrap;
    color: ${({ theme }) => theme.textMajor};
    opacity: 1;
    font-size: 18;
  }
`;

export const WrapperInfoGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  flex-wrap: nowrap;
  white-space: nowrap;
`;

export const TitleChatGroup = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;

  .groupPhoto {
    width: 64px;
    height: 64px;
  }
  img {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: 100%;
    background-size: cover;
    transition: 0.5s;
  }
  .infoGroup {
    width: fit-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    padding: 3px 0;

    h3 {
      color: ${({ theme }) => theme.textMajor};
      opacity: 1;
      font-size: 18px;
      font-weight: normal;
    }
    h5 {
      color: ${({ theme }) => theme.textMinor};
      opacity: 1;
      font-size: 14px;
      font-weight: normal;
    }
    span {
      margin-top: 3px;
      color: ${({ theme }) => theme.textMinor};
      opacity: 1;
      font-size: 12px;
    }
  }
  .editButton {
    width: 11%;
    height: 100%;
    display: flex;
    align-items: flex-start;
  }
`;

export const WrapperPhoneVideoButtons = styled.div`
  width: 100%;
  height: ${({ height }) => height};
  display: flex;
  flex-direction: ${({ align }) => align};
  gap: 10px;
  margin: 28px 0 25px;
  transition: 0.5s;
  overflow: hidden;
`;

export const PhoneButton = styled.div`
  width: ${({ width }) => width};
  height: 40px;
  border-radius: 20px;
  background-color: #76c00d;
  display: flex;
  gap: 11px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  transition: 0.3s;
  padding-left: ${({ padding }) => padding};

  span {
    overflow: hidden;
    flex-wrap: nowrap;
    white-space: nowrap;
    color: #ffffff;
    font-weight: normal;
    font-size: 14px;
  }
`;
export const VideoButton = styled.div`
  width: ${({ width }) => width};
  height: 40px;
  border-radius: 20px;
  gap: 11px;
  transition: 0.3s;
  background-color: #d03e13;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-left: ${({ padding }) => padding};

  span {
    overflow: hidden;
    flex-wrap: nowrap;
    white-space: nowrap;
    color: #ffffff;
    font-weight: normal;
    font-size: 14px;
  }
`;

export const WrapperPeopleAvailable = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 30px;
`;

export const Title = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10px;

  .buttons {
    margin-left: ${({ gap }) => gap};
    width: 80px;
    gap: 10px;
    display: flex;
    justify-content: flex-end;
    overflow: hidden;
    flex-wrap: nowrap;
    white-space: nowrap;
  }

  h3 {
    width: 100%;
    color: ${({ theme }) => theme.textMajor};
    opacity: 1;
    font-size: 14px;
    font-weight: normal;
    margin-right: 20px;
  }
`;
export const WrapperPeopleAvailableCard = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const MemberCard = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: ${({ isActive, theme }) =>
    isActive && theme ? `${theme.backgroundCard}` : 'transparent'};
  border: ${({ isActive, theme }) =>
    isActive && theme ? `1px solid ${theme.border}` : ''};
  border-radius: ${({ radius }) => radius};
  opacity: 1;
  transition: 0.3s;

  .divider {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    flex-wrap: nowrap;
    white-space: nowrap;
  }
`;

export const MemberPhoto = styled.div`
  margin: ${({ margin }) => margin};
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .photo {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0px;
    border-radius: 100%;
    background-image: url('https://thispersondoesnotexist.com/image');
    background-size: cover;
    border: 2px solid white;
    z-index: 1;
  }

  .onlineDot {
    position: absolute;
    top: 33px ;
    bottom: 10px;
    left: 27px;
    z-index: 2;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    border: 2px solid white;
    background-color: yellowgreen;
  }
`;

export const Name = styled.div`
  width: 70%;
  display: ${({ display }) => display};
  gap: 1px;
  padding-left: 8px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  h3 {
    font-weight: normal;
    color: ${({ theme }) => theme.textMajor};
    opacity: 1;
    font-size: 14px;
  }

  h5 {
    font-weight: normal;

    color: yellowgreen;
    opacity: 1;
    font-size: 12px;
  }
`;

export const Actions = styled.div`
  width: 30%;
  display: ${({ display }) => display};
  gap: 12px;
  padding-right: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const WrapperChatFiles = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: ${({ margin }) => margin};
  transition: 0.5s;
`;

export const WrapperFiles = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  flex-direction: row;
  margin-bottom: 5px;
`;

export const File = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  flex-direction: row;

  .file {
    width: 50px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eaeef0;
  }
`;

export const SizeAndAction = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  flex-wrap: nowrap;
  white-space: nowrap;

  h3 {
    color: ${({ theme }) => theme.textMajor};
    opacity: 1;
    font-size: 10px;
    font-weight: normal;
  }
  .fileInfo {
    width: 60%;
    height: 100%;
    display: flex;
    margin-left: 17px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 3px;

    h5 {
      color: ${({ theme }) => theme.textMinor};
      opacity: 1;
      font-size: 10px;
      font-weight: normal;
    }
    h3 {
      color: ${({ theme }) => theme.textMajor};
      opacity: 1;
      font-size: 14px;
      font-weight: normal;
    }
  }
`;
