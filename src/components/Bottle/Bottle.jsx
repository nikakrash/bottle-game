import styles from './Bottle.module.css';

function Bottle(props) {
  const classes = styles.bottle + ' ' + `${props.isAnimationStart ? styles[`rotate-to-${props.nextActiveFace}`] : ''}`;

  return (
    <div className={classes} onClick={props.onClick} />
  );
}

export default Bottle;
