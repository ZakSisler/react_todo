import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'

//children is being passed as a prop - this refers to components nested inside of this mechanism
export default function ProtectedRoute({children}) {
    const {currentUser} = useAuth()

    //below we check to see if the user is authenticated. If they are, we render the components desired. If not, we redirect to the login screen
  return currentUser ? children : <Navigate to="/login"/>
}