import React from 'react';
import FaceWrapper from '../../containers/FaceWrapper/FaceWrapper';
import Bottle from '../Bottle/Bottle';
import Timer from '../Timer/Timer';
import Kiss from '../Kiss/Kiss';
import KissCounter from '../KissCounter/KissCounter';
import styles from './App.module.css';

export const state = {
  facesCount: 10,
  activeFaces: {
    current: 1,
    next: 5
  },
  isTimerStart: true,
  isKissDisplay: true,
  kissCount: 0,
  isAnimationStart: false
}

function App() {
  const [activeFaces, setActiveFaces] = React.useState(state.activeFaces);
  const [kissCount, setKissCount] = React.useState(state.kissCount);
  const [isTimerStart, setIsTimerStart] = React.useState(state.isTimerStart);
  const [isKissDisplay, setIsKissDisplay] = React.useState(state.isKissDisplay);
  const [isAnimationStart, setIsAnimationStart] = React.useState(state.isAnimationStart);

  setTimeout(() => {
    setIsTimerStart(false);
  }, 10000);

  const handleRotateBottle = () => {
    setActiveFaces({
      current: activeFaces.next,
      next: getNewActiveFace()
    })

    setIsTimerStart(true);
    setIsKissDisplay(true);
    setIsAnimationStart(true);

    setTimeout(() => {
      setIsTimerStart(false);
    }, 5000);

    setTimeout(() => {
      setIsKissDisplay(false);
    }, 16000);

    setTimeout(() => {
      setKissCount(kissCount + 1);
    }, 14500);
  }

  const getNewActiveFace = () => {
    const randomNumber = Math.ceil(Math.random() * 10);

    if (randomNumber !== undefined && randomNumber !== activeFaces.current) {
      return randomNumber;
    }

    getNewActiveFace();
  }

  const getFacesArray = () => {
    let arr = new Array(state.facesCount).fill();

    return arr.map((element, index) => {
      return { id: index + 1 }
    })
  }

  const facesArray = getFacesArray();

  getFacesArray();

  return (
    <div className={styles.background}>
      <FaceWrapper
        faceArray={facesArray}
        activeFace={activeFaces.current}
        nextActiveFace={activeFaces.next}
        isAnimationStart={isAnimationStart}
      />
      <Bottle
        onClick={handleRotateBottle}
        nextActiveFace={activeFaces.next}
        isAnimationStart={isAnimationStart}
      />
      {isTimerStart &&
        <Timer
          isTimerStart={isTimerStart}
          isAnimationStart={isAnimationStart}
        />
      }
      {isKissDisplay &&
        <Kiss isAnimationStart={isAnimationStart} />
      }
      <KissCounter kissCount={kissCount} />
    </div>
  );
}

export default App;
