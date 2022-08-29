import styles from './Timer.module.css';

function Timer(props) {
  return (
    <div className={`${props.isAnimationStart ? styles.timer : styles.timer_display_none}`}>
      <div>3</div>
      <div>2</div>
      <div>1</div>
    </div>
  );
}

export default Timer;
