import React from 'react';
import './App.css';
import { Button } from 'antd'
import { Router, Link } from '@reach/router'
import ApprovalPage from './ApprovalPage'
import PortalSignUpPage from './PortalSignUpPage'


function App() {
  return (
    <div className="App">
      <Router>
        <ApprovalPage path="/approval" />
        <PortalSignUpPage path="/portal" />
      </Router>
    </div>
  );
}

export default App;
