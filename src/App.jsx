import { useState, useRef } from 'react';
import Sidebar from './components/Sidebar';
import CreateProject from './components/CreateProject';
import NoProjet from './components/NoProject';
import List from './components/List';
import ProjectTodo from './components/ProjectTodo';

function App() {
  const [newProject, setNewProject] = useState(false);
  const [projectsList, setProjectsList] = useState([]);
  const [viewProject, setViewProject] = useState(false);
  const projectIndex = useRef(0);

  function createProjectHandler() {
    setNewProject((prev) => !prev);
  }

  function addProjectHandler(props) {
    setProjectsList((prev) => [
      ...prev,
      {
        id: projectIndex.current++,
        title: props.target[2].value,
        description: props.target[3].value,
        due: props.target[4].value,
      },
    ]);
    createProjectHandler();
  }

  function deleteProjectHandler(id) {
    setProjectsList(prev => prev.filter(project => project.id !== id));
    setViewProject(null);
  }

  function projectView(idx) {
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
          id={viewProject.id}
          title={viewProject.title}
          date={viewProject.due}
          description={viewProject.description}
          deleteProjectHandler={deleteProjectHandler}
        />
      )}
    </>
  );
}

export default App;
