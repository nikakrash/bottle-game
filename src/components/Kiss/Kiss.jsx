import styles from './Kiss.module.css';

function Kiss(props) {
  return (
    <div className={`${props.isAnimationStart ? styles.kiss : ''}`} />
  );
}

export default Kiss;
