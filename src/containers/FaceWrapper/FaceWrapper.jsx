import Face from '../../components/Face/Face';
import styles from './FaceWrapper.module.scss';

function FaceWrapper(props) {
  return (
    <div className={styles.circle_container}>
      {props.faceArray.map(face => {
        return <Face id={face.id}
                    isActive={props.activeFace === face.id}
                    isNextActive={props.nextActiveFace === face.id}
                    key={face.id}
                    isAnimationStart={props.isAnimationStart}
                />
      })}
    </div>
  );
}

export default FaceWrapper;
