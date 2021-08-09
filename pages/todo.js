import Head from 'next/head'
import { connect } from 'react-redux'
import { setInfo } from '../redux/actions/main'

const Todo = () => {
  return(
      <div>
        <Head>
          <title>The Todo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

      <main>
        <div>  
          <h1>This is a todo</h1>
        </div>
      </main>
      </div>
  )
}

export async function getInitialProps() {
    return { hola: 'mundo' }
}

export default Todo