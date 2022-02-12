import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Theme, Content} from '@carbon/react';


import RegisterRoutes from './components/register/routes'
import CalendarMainPage from "./components/calendar/main";

const Home = () => <span>Home Home Home Home Home Home Home </span>;
const About = () => <span>About AboutAboutAboutAboutAboutAbout</span>;
const Users = () => <span>Users Users Users Users Users Users Users </span>;

// https://codesandbox.io/s/github/react-bootstrap/code-sandbox-examples/tree/master/basic-react-router-v5?file=/src/App.js:0-302
// https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-react
// Route Configuration
// https://github.com/yamill/React-Boilerplate/blob/master/node_modules/react-router/docs/guides/RouteConfiguration.md#adding-an-index
// https://plotly.com/javascript/react/

function App() {
  return (
    <Theme theme="g10">
      <Content>
          <BrowserRouter>
            <div className="App" id={'app-window'}>
              <Routes>
                <Route path={'/about'} element={<About />} />
                <Route path={'/dashboard'} element={<Home />} />
                <Route path={'/register/*'} element={<RegisterRoutes />} />
                <Route path={'/calendar'} element={<CalendarMainPage />}/>
              </Routes>
            </div>

            <nav className="main-menu">
              <ul>
                <li>
                  <a href="/register" className={'sidenav-link'}><i className="fad fa-comments fa-2x"></i>
                    <span className="nav-text">Register</span></a>
                </li>
                <li className="has-subnav">
                  <a href="/calendar" className={'sidenav-link'}><i className="fad fa-calendar-alt fa-2x"></i>
                    <span className="nav-text">Event Calendar</span></a>
                </li>
                {/*<li className="has-subnav">*/}
                {/*  <a href="#" className={'sidenav-link'}><i className="fad fa-list fa-2x"></i>*/}
                {/*    <span className="nav-text">Forms</span></a>*/}
                {/*</li>*/}
                {/*<li className="has-subnav">*/}
                {/*  <a href="#" className={'sidenav-link'}><i className="fad fa-folder-open fa-2x"></i>*/}
                {/*    <span className="nav-text">Pages</span></a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*  <a href="/analytics" className={'sidenav-link'}><i className="fad fa-analytics fa-2x"></i>*/}
                {/*    <span className="nav-text">Graphs and Statistics</span>*/}
                {/*  </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*  <a href="#" className={'sidenav-link'}><i className="fad fa-font fa-2x"></i>*/}
                {/*    <span className="nav-text">Quotes</span></a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*  <a href="#" className={'sidenav-link'}><i className="fad fa-table fa-2x"></i>*/}
                {/*    <span className="nav-text">Tables</span></a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*  <a href="#" className={'sidenav-link'}><i className="fad fa-map-marker fa-2x"></i>*/}
                {/*    <span className="nav-text">Maps</span></a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*  <a href="/about" className={'sidenav-link'}><i className="fad fa-info fa-2x"></i>*/}
                {/*    <span className="nav-text">Documentation</span></a>*/}
                {/*</li>*/}
              </ul>

              <ul className="logout">
                <li>
                  <a href="#" className={'sidenav-link'}><i className="fad fa-power-off fa-2x"></i>
                    <span className="nav-text">Logout</span></a>
                </li>
              </ul>
            </nav>
          </BrowserRouter>
        </Content>
      </Theme>
  );
}

export default App;
