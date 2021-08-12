import Head from 'next/head'
import Header from  '../components/Header'
import NewTodo from '../components/NewTodo';

const Todo = ({ setTitle, createTodo, isLoading, error }) => {
  return(
    <>

      <Head>
        <title>My Todos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <NewTodo />
      </main>
      
    </>
  )
}

export default Todo