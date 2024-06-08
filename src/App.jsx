import { useState } from 'react';
import Sidebar from './components/Sidebar';
import CreateProject from './components/CreateProject';
import NoProjet from './components/NoProject';
import List from './components/List';
import ProjectTodo from './components/ProjectTodo';

function App() {
  const [newProject, setNewProject] = useState(false);
  const [projectsList, setProjectsList] = useState([]);
  const [viewProject, setViewProject] = useState(false);

  function createProjectHandler() {
    setNewProject((prev) => !prev);
  }

  function addProjectHandler(props) {
    setProjectsList((prev) => [
      ...prev,
      {
        title: props.target[2].value,
        description: props.target[3].value,
        due: props.target[4].value,
      },
    ]);
    createProjectHandler();
  }

  function projectView(idx) {
    console.log(idx);
    setViewProject(projectsList[idx]);
  }

  return (
    <>
      <Sidebar clickHandler={createProjectHandler} lists={projectsList}>
        {projectsList.map((el, idx) => (
          <List
            key={idx}
            title={el.title}
            index={idx}
            projectView={projectView}
          ></List>
        ))}
      </Sidebar>
      {projectsList.length === 0 && !newProject ? (
        <NoProjet clickHandler={createProjectHandler} />
      ) : null}
      {newProject ? (
        <CreateProject
          clickHandler={createProjectHandler}
          submitHandler={addProjectHandler}
        />
      ) : null}
      {viewProject && (
        <ProjectTodo
          title={viewProject.title}
          date={viewProject.due}
          description={viewProject.description}
        />
      )}
    </>
  );
}

export default App;
