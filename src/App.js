import TodoList from './component/TodoList/TodoList';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './page/Login';
import Error from './page/Error';
function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<TodoList />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
