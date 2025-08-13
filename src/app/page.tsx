import Header from './components/Header';
import TaskList from './components/TaskList';
import { v4 as uuid } from 'uuid';

const ToDoPage = () => {
    return(
        <section className="my-12 max-w-3xl mx-auto bg-white rounded-2xl text-gray-700">
           <Header />
          <TaskList />
        </section>
    )
}
export default ToDoPage;