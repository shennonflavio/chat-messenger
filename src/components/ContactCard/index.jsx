import { bool } from 'prop-types';
import React from 'react';

import { ContactPhoto, Container, MessageUnread, Name } from './styles';

function ContactCard({active}) {

  return (
  <Container active={active}>
    <ContactPhoto>
      <div className='photo' />
      <div  className='photo1' />
      <span className="onlineDot" />
    </ContactPhoto>
    <Name>
      <h3>Franky Schmidt</h3>
      <h5>Me: What does this dummy</h5>
    </Name>
    <MessageUnread>
      <div className='unreadMessage'>
        <span>3</span>
      </div>
    </MessageUnread>
  </Container>
  )
}

export default ContactCard;

ContactCard.propTypes = {
  active:bool
}

ContactCard.defaultProps = {
  active:false
}
