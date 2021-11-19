import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link, 
  Switch,
  Redirect,
  withRouter,
  NavLink

} from "react-router-dom";


class App extends Component{


  constructor(){
    super()
    this.myRef = React.createRef();
    
    }
    


  componentDidMount(){
    this.myRef.current.style.height = '100vh';
    this.myRef.current.style.width = '100%';
  }

  setBackground(bgColor, txtColor){
    this.myRef.current.style.background = bgColor;
    this.myRef.current.style.color = txtColor;
  }

  render(){
    const LoginButton = withRouter(({history})=>(
      <button onClick={()=>{this.setState({isAuth: true}) 
      history.push('/profile')}}>Login</button>
    ))

    const LogoutButton = withRouter(({history})=>(
      <button onClick={()=>{this.setState({isAuth: false}) 
      history.push('/login')}}>Logout</button>
    ))
    
    const routes = [{
      path : '/',
      exact : true,
      render : () => <div>Ini Halaman Home</div>
    },{
      path : '/news',
      render : () => <div>Ini Halmaan News</div>
    },{
      path : '/login',
      render : () => <LoginButton />
    },{
        path : '/profile',
        render : () => this.state.isAuth ? <div>Ini Halaman Profile <br/><LogoutButton /></div> :<Redirect to='/login' />
    }]

    return(
      <div>
          
      <Router>
        <div>
          <ul style={{listStyle: 'none'}}>
            <li><NavLink exact activeStyle={{fontWeight: 'bold', color:'red'}} to='/'>Home</NavLink></li>
            <li><NavLink activeclassName='active-link' to='/news'>News</NavLink></li>
            <li><NavLink activeclassName='active-link' to='/profile'>Profile</NavLink></li>
          </ul>
        

          <Switch>
            {
              routes.map((item, index)=>(
                <Route path={item.path} exact={item.exact} render={item.render}/>
              ))
            }
          </Switch>
        </div>
      </Router>

      <div ref={this.myRef}>
            <p>Belajar Pengembangan Aplikasi Web dengan ReactJS dengan Topik Router dan Refs</p>
            <button onClick={this.setBackground.bind(this, 'white', 'black')}>WHITE</button>
            <button onClick={this.setBackground.bind(this, 'red', 'white')}>RED</button>
            <button onClick={this.setBackground.bind(this, 'green', 'white')}>GREEN</button>
            <button onClick={this.setBackground.bind(this, 'blue', 'white')}>BLUE</button>
      
      </div>
      
      </div>


    )
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
