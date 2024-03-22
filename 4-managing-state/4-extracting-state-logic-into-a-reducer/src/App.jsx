
import { useReducer } from 'react';
import TaskList from './components/TaskList'
import { tasksReducer } from './reducers/tasksReducer';

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const handleAddTask = (text) => {
    dispatch({
      type: 'ADD_TASK',
      text: text
    })
  }

  const handleEditTask = (task) => {
    dispatch({
      type: 'EDIT_TASK',
      task: task
    })
  }

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: 'DELETE_TASK',
      taskId:  taskId
    })
  }

  return (
    <main>
      <TaskList 
        tasks={tasks}
      />
    </main>
  )
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];



export default App
