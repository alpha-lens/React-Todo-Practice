import sidebar from './Sidebar.module.css';

export default function Sidebar(props) {
  return (
    <section className={sidebar.sidebar} style={{ float: 'left' }}>
      <h2 className={sidebar.header}>Your Projects</h2>
      <button className={sidebar.btn} onClick={props.clickHandler}>
        + Add Project
      </button>
      {props.children}
    </section>
  );
}
