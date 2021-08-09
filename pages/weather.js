import Head from 'next/head'
import { useState } from 'react'
import { connect } from 'react-redux'
import { setInfo } from '../redux/actions/main'

const Weather = (props) => {
  const { userInfo, setInfo } = props
  const [ name, setName ] = useState('')

  return(
      <div>
        <Head>
          <title>The Weather</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

      <main>
        <div>  
          <h1>Today is looking Good for {userInfo.name}</h1>
          <input 
            name='name' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <button 
            onClick={() => setInfo(name)}
          >
            Submit
          </button>
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