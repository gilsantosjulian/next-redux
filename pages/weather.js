import Head from 'next/head'
import { connect } from 'react-redux'
import { setInfo } from '../redux/actions/main'

const Weather = () => {
  return(
      <div>
        <Head>
          <title>The Weather</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

      <main>
        <div>  
          <h1>Today is looking Good</h1>
        </div>
      </main>
      </div>
  )
}

const mapStateToProps = state => ({
  userInfo: state.main
})

const mapDispatchToProps = {
  setInfo: setInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)