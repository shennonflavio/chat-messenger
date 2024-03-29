import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stars } from '../../assets';
import { appOptionsToggleTheme } from '../../store/slices/appOptionsSlice';

import { Container, ButtonTheme, WrapperToggleButton } from './styles';

function Toggle() {
  const { theme: currentTheme } = useSelector(({ appOptions }) => appOptions);
  const [buttonEffect, setButtonEffect] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setButtonEffect((buttonEffect) => !buttonEffect);
  }, [currentTheme]);

  return (
    <Container>
      <WrapperToggleButton
      move={buttonEffect ? '20px' : '-20px'}
      rotate={buttonEffect ? 'rotate(360deg)' : '' }
      >
        <ButtonTheme
          rotate={buttonEffect ? '70%' : ''}
          onClick={() => {
            dispatch(appOptionsToggleTheme());
          }}
        >
          <div>
            <div>
              <div>
                <img src={stars} alt="" />
              </div>
            </div>
          </div>
        </ButtonTheme>
      </WrapperToggleButton>
    </Container>
  );
}

export default Toggle;
