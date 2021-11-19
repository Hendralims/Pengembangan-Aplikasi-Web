//Home.js
import React from 'react';
import Main from '../../Main';

export default class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {name : this.props.name}
    }
    render(){
        return(
            <div>
                <header>
                    <Main />
                </header>
            </div>
        )
    }
}