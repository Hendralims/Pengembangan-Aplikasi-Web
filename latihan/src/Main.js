import React, {Component} from 'react';
import Card from './components/Card/Card';
import Input from './components/Input/Input';

export default class Main extends Component {
    constructor(){
        super();
        this.state = {
            your_name : '',
            status : ''
        }
    }

   render(){
       return(
           <React.Fragment>
               <h2 style={{width :'550px', margin: 'auto', textAlign : 'center', color: '#4d90fe'}}>
                   Sistem Informasi E-Biz
               </h2>
               <Input getValues={(name, value)=> this.setState({[name] : value})} />
               
               <Card.Container>
                   <Card.Header> {this.state.your_name}</Card.Header>
                   <Card.Body>
                       <p>{this.state.status}</p>
                   </Card.Body>
               </Card.Container>


               {/* <Card>
                    <div className='card-header'>{this.state.your_name}</div>
                    <div className='card-body'>
                        <p>{this.state.status}</p>
                    </div>    
               </Card> */}

           </React.Fragment>
       )
   }
}