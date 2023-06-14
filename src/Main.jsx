import React from 'react'
import { AppRouter } from './router/AppRouter'
import { Navbar } from './Navbar'

export const Main = () => {
  return (
    <div>
        <Navbar />
        <AppRouter />
    </div>
  )
}
