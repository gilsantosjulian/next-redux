import Head from 'next/head'
import { connect } from 'react-redux';
import Header from '../components/Header'
import NewTodo from '../components/NewTodo';

import { getTodos, createTodo, updateTodo, deleteTodo } from '../redux/actions/todo'

const Todo = ({ setTitle, createTodo, isLoading, error }) => {
  return (
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

const mapStateToProps = state => ({
  userInfo: state.main
})

const mapDispatchToProps = state => ({
  getTodos, createTodo, updateTodo, deleteTodo
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)