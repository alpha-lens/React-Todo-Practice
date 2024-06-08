import { useState, useRef } from 'react';
import style from './ProjectTodo.module.css';

export default (props) => {
  const [tasks, setTasks] = useState([]);
  const inputTask = useRef();
  const taskId = useRef(0); // Ref for generating unique task IDs

  function tasksAddHanlder(taskText) {
    const newTask = {
      id: taskId.current++,
      text: taskText,
    };
    setTasks([...tasks, newTask]);
  }

  function clearTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className={style.div}>
      <section>
        <button onClick={() => deleteProjectHandler(props.id)}>Delete</button>
        <h2>{props.title}</h2>
        <p>{props.date}</p>
        <p>{props.description}</p>
        <hr />
        <h2>Tasks</h2>
        <div>
          <input type="text" ref={inputTask} />
          <button
            onClick={() => {
              tasksAddHanlder(inputTask.current.value);
              inputTask.current.value = '';
            }}
          >
            Add Task
          </button>
        </div>
        {tasks.map((task) => (
          <p key={task.id}>
            {task.text}
            <button onClick={() => clearTask(task.id)}>clear</button>
          </p>
        ))}
      </section>
    </div>
  );
};
