import style from './NoProject.module.css';
import noProject from '../assets/no-projects.png';

export default function NoProjet(props) {
  return (
    <main className={style['no-project']}>
      <section>
        <img src={noProject} alt="no projects" />
        <h1>No Project Selected</h1>
        <p>Select a project or get started with a new one</p>
        <button onClick={props.clickHandler}>Create New Project</button>
      </section>
    </main>
  );
}
