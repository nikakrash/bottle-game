import styles from './KissCounter.module.css';

function KissCounter(props) {
  return (
    <div className={styles.counter_wrapper}>
      <div className={styles.kiss_counter}>
        {props.kissCount}
      </div>
    </div>
  );
}

export default KissCounter;
