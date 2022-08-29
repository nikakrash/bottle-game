import styles from './Face.module.css';

function Face(props) {
  let classes = styles.face + ' ' + styles[`face_id_${props.id}`] + ' ' + styles.face_center + ' ' + styles.face_round;

  if (props.isAnimationStart && (props.isActive || props.isNextActive)) {
    const borderClass = props.isActive ? styles.border_current_face : styles.border_new_face;
    const animationKissClass = props.isActive ? styles.kiss_right : styles.kiss_left;

    classes = classes + ' ' + borderClass + ' ' + animationKissClass;
  }

  return (
    <div className={classes} />
  );
}

export default Face;
