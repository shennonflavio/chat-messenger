import React, { useEffect, useState } from 'react';

import axios from 'axios';
import {
  addMember,
  arrowButton,
  arrowDown,
  arrowLeft,
  chevron,
  closeIcon,
  editButton,
  file,
  fileText,
  film,
  image,
  logo,
  micIcon,
  paperclip,
  phoneIcon,
  plusButton,
  search,
  sendButton,
  settings,
  smile,
  videoIcon,
} from '../../assets';
import ContactCard from '../../components/ContactCard';
import Toggle from '../../components/Toggle';

import {
  ChatDetails,
  ContactContent,
  Container,
  Content,
  DetailsArrow,
  MyCardChat,
  MycontactDetails,
  MyProfilePhoto,
  PainelMessages,
  Settings,
  TitleChat,
  Status,
  TitleActiveChats,
  AddButton,
  Search,
  PainelChat,
  WrapperInputMessage,
  InputMessage,
  TitleChatGroup,
  WrapperInfoGroup,
  WrapperPhoneVideoButtons,
  PhoneButton,
  VideoButton,
  WrapperPeopleAvailable,
  Title,
  WrapperPeopleAvailableCard,
  MemberCard,
  MemberPhoto,
  Name,
  Actions,
  WrapperChatFiles,
  File,
  WrapperFiles,
  SizeAndAction,
  EmojiList,
} from './styles';

function HomePage() {
  const [openChatDetails, setOpenChatDetails] = useState(false);
  const [openEmojiList, setOpenEmojiList] = useState(false);
  const [emojiList, setEmojiList] = useState({});

  function handlerEmojiList() {
    setOpenEmojiList(!openEmojiList)
  }

//   useEffect(()=>{
//     async function getEmoji() {
//        await fetch("../../../public/emojiList.json", {
//       headers : {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }

//     }).then((res)=>
//         res.json()
//        ).then((data)=> setEmojiList(data))

//   }
//   return getEmoji;

// },[openEmojiList])
useEffect(()=>{

  axios.get("/emojiList.json").then(res => res).then(res => setEmojiList(res.data))
},[openEmojiList])

// console.log(listEmoji)

  return (
    <Container>
      <Content>
        <ContactContent>
          <div className="imageLogo">
            <img src={logo} alt="" />
            <Toggle />
          </div>

          <MyCardChat>
            <MyProfilePhoto>
              <div className="ProfilePhoto">
                <span className="onlineDot" />
              </div>
            </MyProfilePhoto>
            <MycontactDetails>
              <h3>George Tarielashvili</h3>
              <h5>Senior UI/UX Designer</h5>
              <Status>
                <span>Online</span>
                <img src={chevron} alt="" />
              </Status>
            </MycontactDetails>
            <Settings>
              <div>
                <img src={settings} alt="" />
              </div>
            </Settings>
          </MyCardChat>

          <TitleActiveChats>
            <span>Active Chats</span>
            <AddButton>
              <img src={plusButton} alt="" />
            </AddButton>
          </TitleActiveChats>
          <Search>
            <span>Search people</span>
            <img src={search} alt="" />
          </Search>
          <div className="wrapperContactCard">
            <ContactCard active />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
          </div>
        </ContactContent>

        <PainelMessages>
          <TitleChat>
            <span>Family Chat</span>
          </TitleChat>
          <PainelChat>1</PainelChat>
          <WrapperInputMessage>

                <EmojiList

                height={openEmojiList ? '250px' : '0px'}>
                  {Object.entries(emojiList).map(([key, value]) =>
                  <div className='emoji' key={key}>{value.symbol}</div>
                   )}
                </EmojiList>
            <InputMessage>
              <div>
                <span>Enter your message here</span>
              </div>
              <div className="inputMessageOptions">
                <div onClick={()=>handlerEmojiList()} className='emoji' aria-hidden="true">
                <img src={smile} alt="" />
                </div>
                <div>
                <img src={paperclip} alt="" />
                </div>
                <img src={sendButton} alt="" />
              </div>
            </InputMessage>
          </WrapperInputMessage>
        </PainelMessages>

        <ChatDetails width={openChatDetails ? '381px' : '41px'}>
          <DetailsArrow
            onClick={() => setOpenChatDetails(!openChatDetails)}
            align={!openChatDetails ? 'flex-end' : 'flex-start'}
            rotate={!openChatDetails ? '' : 'rotate(180deg)'}
          >
            <img src={arrowButton} alt="" />
            <span>Chat details</span>
          </DetailsArrow>

          <TitleChatGroup>
            <div className="groupPhoto">
              <img
                width={openChatDetails ? '64px' : '40px'}
                height={openChatDetails ? '64px' : '40px'}
                src="https://thispersondoesnotexist.com/image"
                alt=""
              />
            </div>
            <WrapperInfoGroup>
              <div className="infoGroup">
                <h3>Family chat</h3>
                <h5>3 members</h5>
                <span>Last message: Today, 09:56</span>
              </div>
              <div className="editButton">
                <img src={editButton} alt="" />
              </div>
            </WrapperInfoGroup>
          </TitleChatGroup>

          <WrapperPhoneVideoButtons
            height={openChatDetails ? 'fit-content' : '90px'}
            align={openChatDetails ? 'row' : 'column'}
          >
            <PhoneButton
              width={openChatDetails ? '130px' : '40px'}
              padding={openChatDetails ? '0' : '10px'}
            >
              <img src={phoneIcon} alt="" />
              <span>Voice chat</span>
            </PhoneButton>
            <VideoButton
              width={openChatDetails ? '130px' : '40px'}
              padding={openChatDetails ? '0' : '12px'}
            >
              <img src={videoIcon} alt="" />
              <span>Video Call</span>
            </VideoButton>
          </WrapperPhoneVideoButtons>

          <WrapperPeopleAvailable>
            <Title>
              <h3>People</h3>
              <div className="buttons" gap={openChatDetails ? '0' : '50px'}>
                <div>
                  <img src={addMember} alt="" />
                </div>
                <div>
                  <img src={arrowDown} alt="" />
                </div>
              </div>
            </Title>
            <WrapperPeopleAvailableCard>
              <MemberCard
                isActive
                radius={openChatDetails ? '10px' : '20px'}
                width={openChatDetails ? '100%' : '40px'}
                height={openChatDetails ? '60px' : '40px'}
              >
                <MemberPhoto margin={openChatDetails ? '0 10px 0 8px' : '-1px'}>
                  <div className="photo" />
                  <span className="onlineDot" />
                </MemberPhoto>

                <div className="divider">
                  <Name display={openChatDetails ? 'flex' : 'none'}>
                    <h3>Franky Schmidt</h3>
                    <h5>Online</h5>
                  </Name>
                  <Actions display={openChatDetails ? 'flex' : 'none'}>
                    <div>
                      <img src={micIcon} alt="" />
                    </div>
                    <div>
                      <img src={closeIcon} alt="" />
                    </div>
                  </Actions>
                </div>
              </MemberCard>
              <MemberCard
                height={openChatDetails ? '60px' : '40px'}
                border={openChatDetails ? '1px solid #dbe5ed' : 'none'}
              >
                <MemberPhoto margin={openChatDetails ? '0 10px 0 8px' : '0'}>
                  <div className="photo" />
                  <span className="onlineDot" />
                </MemberPhoto>

                <div className="divider">
                  <Name display={openChatDetails ? 'flex' : 'none'}>
                    <h3>Franky Schmidt</h3>
                    <h5>Online</h5>
                  </Name>
                  <Actions display={openChatDetails ? 'flex' : 'none'}>
                    <div>
                      <img src={micIcon} alt="" />
                    </div>
                    <div>
                      <img src={closeIcon} alt="" />
                    </div>
                  </Actions>
                </div>
              </MemberCard>
              <MemberCard
                height={openChatDetails ? '60px' : '40px'}
                border={openChatDetails ? '1px solid #dbe5ed' : 'none'}
                bg={openChatDetails ? '#f9fafc' : 'transparent'}
              >
                <MemberPhoto margin={openChatDetails ? '0 10px 0 8px' : '0'}>
                  <div className="photo" />
                  <span className="onlineDot" />
                </MemberPhoto>

                <div className="divider">
                  <Name display={openChatDetails ? 'flex' : 'none'}>
                    <h3>Franky Schmidt</h3>
                    <h5>Online</h5>
                  </Name>
                  <Actions display={openChatDetails ? 'flex' : 'none'}>
                    <div>
                      <img src={micIcon} alt="" />
                    </div>
                    <div>
                      <img src={closeIcon} alt="" />
                    </div>
                  </Actions>
                </div>
              </MemberCard>
            </WrapperPeopleAvailableCard>
          </WrapperPeopleAvailable>

          <WrapperChatFiles margin={openChatDetails ? '0px' : '-50px'}>
            <Title>
              <h3>{openChatDetails ? 'Chat files' : 'Files'}</h3>
              <div className="buttons" gap={openChatDetails ? '0' : '50px'}>
                <img src={arrowDown} alt="" />
              </div>
            </Title>

            <WrapperFiles>
              <File
                width={openChatDetails ? '50px' : '40px'}
                height={openChatDetails ? '50px' : '40px'}
              >
                <div className="file">
                  <img src={fileText} alt="" />
                </div>
              </File>
              <SizeAndAction>
                <div className="fileInfo">
                  <h5>Documents</h5>
                  <h3>8 files</h3>
                </div>
                <h3>2.45 MB</h3>
                <div className="buttonFoward">
                  <img src={arrowLeft} alt="" />
                </div>
              </SizeAndAction>
            </WrapperFiles>

            <WrapperFiles>
              <File
                width={openChatDetails ? '50px' : '40px'}
                height={openChatDetails ? '50px' : '40px'}
              >
                <div className="file">
                  <img src={image} alt="" />
                </div>
              </File>
              <SizeAndAction>
                <div className="fileInfo">
                  <h5>Images</h5>
                  <h3>8 files</h3>
                </div>
                <h3>2.45 MB</h3>
                <div className="buttonFoward">
                  <img src={arrowLeft} alt="" />
                </div>
              </SizeAndAction>
            </WrapperFiles>

            <WrapperFiles>
              <File
                width={openChatDetails ? '50px' : '40px'}
                height={openChatDetails ? '50px' : '40px'}
              >
                <div className="file">
                  <img src={film} alt="" />
                </div>
              </File>
              <SizeAndAction>
                <div className="fileInfo">
                  <h5>Videos</h5>
                  <h3>8 files</h3>
                </div>
                <h3>2.45 MB</h3>
                <div className="buttonFoward">
                  <img src={arrowLeft} alt="" />
                </div>
              </SizeAndAction>
            </WrapperFiles>

            <WrapperFiles>
              <File
                width={openChatDetails ? '50px' : '40px'}
                height={openChatDetails ? '50px' : '40px'}
              >
                <div className="file">
                  <img src={file} alt="" />
                </div>
              </File>
              <SizeAndAction>
                <div className="fileInfo">
                  <h5>Attachments</h5>
                  <h3>8 files</h3>
                </div>
                <h3>2.45 MB</h3>
                <div className="buttonFoward">
                  <img src={arrowLeft} alt="" />
                </div>
              </SizeAndAction>
            </WrapperFiles>
          </WrapperChatFiles>
        </ChatDetails>
      </Content>
    </Container>
  );
}

export default HomePage;
