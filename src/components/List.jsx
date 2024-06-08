import style from './List.module.css';

export default function (props) {
  return (
    <>
      <h2 className={style.h2} onClick={() => props.projectView(props.index)}>
        {props.title}
      </h2>
    </>
  );
}
