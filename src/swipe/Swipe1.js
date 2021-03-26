import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  slide: {
    padding: 15,
    minHeight: 700,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#1f1d2b',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

function DemoSimple() {
  return (
    <div>
    <SwipeableViews enableMouseEvents>
      <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
      <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
 
    </SwipeableViews>
    </div>
  );
}

export default DemoSimple;
