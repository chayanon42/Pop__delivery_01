import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { AuthProvider } from './pages/Auth'
import Mainpage from './pages/mainpage'
import GlobalStyles from'./components/GlobalStyles'

function App() {
  return (
    // <AuthProvider>
      <Router>
      <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Mainpage}/>
        </Switch>
      </Router>
    // </AuthProvider>
  );
}

export default App;
