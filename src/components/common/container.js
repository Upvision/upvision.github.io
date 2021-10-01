import { styled } from '@stitches/react';

export default styled('div', {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
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