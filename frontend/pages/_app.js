import App from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import React from 'react'
import { wrapper } from '../redux/store'

const MyApp = ({Component, appProps}) => (
  <Component {...appProps} />
)

// export async function getInitialProps (Component, ctx) {
//   const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
//   console.log(appProps);
//   return { appProps: appProps }
// }

// class MyApp extends App {
//   static async getInitialProps (Component, ctx) {
//     const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
//     console.log(appProps);
//     return { appProps: appProps }
//   }

//   render() {
//     const { Component, appProps } = this.props

//     return(
//       <Provider store={store}>
//         <Component {...appProps} />
//       </Provider>
//     )
//   }
// }

export default wrapper.withRedux(MyApp)