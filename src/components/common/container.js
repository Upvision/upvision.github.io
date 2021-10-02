import { styled } from '@stitches/react';

export default styled('div', {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  height: '100%',
  marginTop: '4em',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  color: 'white',
  '@media (min-width: 768px)': {
    width: '750px'
  },
  '@media (min-width: 992px)': {
    width: '970px'
  },
  '@media (min-width: 1200px)': {
    width: '1170px'
  }
})