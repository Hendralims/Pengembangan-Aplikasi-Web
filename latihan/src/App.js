import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
  NavLink,
} from "react-router-dom";
import "./css/bootstrap.min.css";
import Foto from "./Foto.JPG";

class App extends Component {
  constructor() {
    super();
    this.state = { isAuth: false };
  }

  render() {
    const LoginButton = withRouter(({ history }) => (
      <button
        onClick={() => {
          this.setState({ isAuth: true });
          history.push("/profile");
        }}
      >
        Login
      </button>
    ));

    const LogoutButton = withRouter(({ history }) => (
      <button
        onClick={() => {
          this.setState({ isAuth: false });
          history.push("/login");
        }}
      >
        Logout
      </button>
    ));

    const routes = [
      {
        path: "/",
        exact: true,
        render: () => <div>Ini Halaman Home</div>,
      },
      {
        path: "/login",
        render: () => <LoginButton />,
      },
      {
        path: "/profile",
        render: () =>
          this.state.isAuth ? (
            <div>
              <div className="container text-center">
                <h1>Profile Mahasiswa</h1>
                <table className="table table-borderless text-start">
                  <tbody>
                    <tr>
                      <td>Foto Profil</td>
                      <td>:</td>
                      <td>
                        <img src={Foto} className="w-25 h-5 border border-1" />
                      </td>
                    </tr>
                    <tr>
                      <td>Nama</td>
                      <td>:</td>
                      <td>Hendra</td>
                    </tr>
                    <tr>
                      <td>NIM</td>
                      <td>:</td>
                      <td>192112925</td>
                    </tr>
                    <tr>
                      <td>Jenis Kelamin</td>
                      <td>:</td>
                      <td>Laki-Laki</td>
                    </tr>
                    <tr>
                      <td>Tempat/Tanggal Lahir</td>
                      <td>:</td>
                      <td>Medan, 14 April 2001</td>
                    </tr>
                    <tr>
                      <td>
                        <LogoutButton />
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <br />
              </div>
            </div>
          ) : (
            <Redirect to="/login" />
          ),
      },
    ];

    return (
      <div>
        <Router>
          <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/profile">
                    Profile
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <Switch>
            {routes.map((item, index) => (
              <Route path={item.path} exact={item.exact} render={item.render} />
            ))}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

// Pertemuan 5

// import React, {Component} from 'react';
// import logo from './logo.svg';
// import './css/bootstrap.min.css'; //import bootstrap
// import './App.css';
// import Home from './views/Home/Home';
// import About from './views/About/About';
// import Help from './views/Help/Help';
// import Header from './views/Header/Header';

// class App extends Component{
//   constructor(){
//     super();
//     //inisial state view
//     this.state = {
//       view : 'home'
//     }
//   }
//   render(){
//     //Functional component View untuk mengatur component yang tampil
//     const View = ()=>{
//       if(this.state.view == 'home')
//       return <Home name='Eden Hazard' />
//       else if(this.state.view == 'about')
//       return <About />
//       else if(this.state.view == 'help')
//       return <Help />
//     }

//     return(
//       <div>
//         <Header getValue={(value)=>this.setState({view:value})} />

//         <View />{/*panggil component View*/}
//       </div>
//     );
//   }
// }

// export default App;
