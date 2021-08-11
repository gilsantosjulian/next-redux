import NewTodo from '../components/NewTodo';

const Todo = ({ setTitle, createTodo, isLoading, error }) => {
  return(
    <div className='container'>

      <main>
        <NewTodo />
      </main>
      
    </div>
  )
}

export default Todo