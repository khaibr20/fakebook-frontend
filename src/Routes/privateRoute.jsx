import React from "react"
import { Redirect, Route } from "react-router-dom"
import { getEmail } from "../Utils/Common"

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return getEmail() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }}
    />
  )
}

export default PrivateRoute
