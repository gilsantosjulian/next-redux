import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

import Link from 'next/link'
import Head from 'next/head'


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
        <Navbar.Brand>Next-Redux App</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />

        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Link href='/weather'><a className='text-white mr-2 mt-1'>Weather</a></Link>
            <Link href='/todo'><a className='text-white mr-2 mt-1'>Todo</a></Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </>
  )
}

export default Header
