import React from 'react';
import './Input.css';

export default class Input extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div className="input">
                <input type="text" name="your_name" placeholder="Enter Your Name" onChange={(ev)=> this.props.getValues(ev.target.name, ev.target.value )} />
                <input type="text" name="status" placeholder="Enter Your Status" onChange={(ev)=> this.props.getValues(ev.target.name, ev.target.value)} />

            </div>
        )
    }
}