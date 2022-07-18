import styled from 'styled-components';

export const Container = styled.div`
  width: 327px;
  height: 71px;
  display: flex;
  flex-direction: row;
  background: ${({ active,theme }) => (active && theme ? `${theme.backgroundCard}` : 'transparent')};
  border: ${({ active,theme}) => (active && theme ? `1px solid ${theme.border}` : 'transparent')};
  border-radius: 10px;
  margin-bottom: 3px;
`;

export const ContactPhoto = styled.div`
  margin-left: 8px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .photo {
    width: 50px;
    position: absolute;
    left: 0px;
    height: 50px;
    border-radius: 100%;
    background-image: url('https://thispersondoesnotexist.com/image');
    background-size: cover;
    border: 4px solid white;
    z-index: 1;
  }
  .photo1 {
    display: ${({ active }) => (!active ? 'flex' : 'none')};
    position: absolute;
    left: 15px;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-image: url('https://thispersondoesnotexist.com/image');
    background-size: cover;
    border: 4px solid white;
  }
  .onlineDot {
    position: absolute;
    bottom: 5px;
    left: 37px;
    z-index: 2;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 4px solid white;
    background-color: yellowgreen;
  }
`;

export const Name = styled.div`
  width: 100%;
  display: flex;
  gap: 1px;
  padding-left: 13px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  h3 {
    font-weight: normal;
    color: ${({theme})=> theme.textMajor};
    opacity: 1;
    font-size: 16;
  }

  h5 {
    font-weight: normal;

    color: ${({theme})=> theme.textMinor};
    opacity: 1;
    font-size: 12px;
  }
`;

export const MessageUnread = styled.div`
  width: 60px;
  padding-right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  .unreadMessage {
    width: 20px;
    height: 20px;
    background-color: yellowgreen;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }
  span {
    color: white;
    font-size: 12px;
  }
`;
