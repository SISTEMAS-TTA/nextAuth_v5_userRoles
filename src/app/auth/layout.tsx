import React from 'react'

const AuthLayout = ({children }:any) => {
  return (
    <div>
        <nav className='bg-red-400'>
            This is a navbar
        </nav>
        {children}
    </div>
  )
}

export default AuthLayout