import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

import Link from 'next/link'
import Head from 'next/head'

import SignIn from './Login';

const Header = () => {
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
        </Navbar.Collapse>

      </Navbar>

      <SignIn />
    </>
  )
}

export default Header
