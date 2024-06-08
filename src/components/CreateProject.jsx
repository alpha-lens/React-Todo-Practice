import style from './CreateProject.module.css';

export default function CreateProject(props) {
  return (
    <section className={style.section}>
      <form
        className={style.form}
        onSubmit={(e) => {
          e.preventDefault();
          props.submitHandler(e);
        }}
      >
        <menu className={style.menu}>
          <li>
            <button type="button" onClick={props.clickHandler}>
              Cancel
            </button>
          </li>
          <li>
            <button className={style.save} type="submit">
              Save
            </button>
          </li>
        </menu>
        <label htmlFor="title">title</label>
        <input id="title" type="text" />
        <br />

        <label htmlFor="description">description</label>
        <textarea id="description" type="text" className={style.description} />
        <br />

        <label htmlFor="due-date">due-date</label>
        <input id="due-date" type="date" />
      </form>
    </section>
  );
}
