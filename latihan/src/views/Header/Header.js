//Header.js
import React, {Component} from 'react';
import '../../css/bootstrap.min.css'; //import bootstrap


class Header extends Component {
    render(){
        return(
            <div>
              <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a onClick={()=> this.props.getValue('home')} className="nav-link" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a onClick={()=> this.props.getValue('about')} className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a onClick={()=> this.props.getValue('help')} className="nav-link" href="#">Help</a>
                  </li>
                </ul>
              </nav>
      
            </div>
        );
    }
}

export default Header;


// export default class Header extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {name : this.props.name}
//     }
//     render(){
//         return(
//             <div>
//                 <header>
//                     <span>Component Header </span>
//                     <Main />
//                 </header>
//             </div>
//         )
//     }
// }