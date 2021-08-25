import React, { useEffect, useState } from 'react'
import { Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap'
import { connect } from "react-redux"

import Link from 'next/link'
import Head from 'next/head'

import SignIn from './Login';
import Register from './Register';

import { userSignUp, userSignIn, signOut, restore } from "../redux/actions/main"

const Header = (props) => {
  const [ showRegister, handleCloseRegister ] = useState(false)
  const [ showSignIn, handleCloseSignIn ] = useState(false)
  const [ form, setFormValue ] = useState({})
  const { userInfo, restore } = props

  const register = () => props.userSignUp(form);
  const signIn = () => props.userSignIn(form);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user_info"))
    if(userData){
      restore(userData)
    }
  }, [])

  return (
    <>
      <Head>
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' />
      </Head>

      <Navbar 
        bg='dark' 
        collapseOnSelect 
        expand='lg' 
        variant='dark'
        style={{ width: '100%' }}
      >
        <Link href="/">
          <a className="text-white pr-5">
          Next-Redux App
          </a>
        </Link>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />

        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Link href='/weather'><a className='text-white mr-2 mt-1'>Weather</a></Link>
            <Link href='/todo'><a className='text-white mr-2 mt-1'>Todo</a></Link>
          </Nav>

          {
            userInfo.token &&
            <Nav>
              <NavDropdown
                id='basic-nav-dropdown'
                title={`welcome ${userInfo.name}`}
              >
                <NavDropdown.Item
                  onClick={() => props.signOut()}
                >
                  Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          }

          {
            !userInfo.token &&
            <Nav>
              <NavLink
                onClick={() => handleCloseSignIn(true)}
              >
                Sign In
              </NavLink>
              <NavLink
                onClick={() => handleCloseRegister(true)}
              >
                Register
              </NavLink>
            </Nav>
          }

        </Navbar.Collapse>

      </Navbar>

      <Register
        show={showRegister && !userInfo.token}
        setShow={handleCloseRegister}
        form={form}
        setFormValue={setFormValue}
        register={register}
        error={userInfo.error}
        isLoading={props.userInfo.loading}
      />

      <SignIn
        show={showSignIn && !userInfo.token} 
        setShow={handleCloseSignIn}
        form={form}
        setFormValue={setFormValue}
        error={userInfo.error}
        signIn={signIn}
        isLoading={props.userInfo.loading}
      />
    </>
  )
}

const mapStateToProps = state => ({
  userInfo: state.main
})

const mapDispatchToProps = {
  userSignUp, userSignIn, signOut, restore
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
