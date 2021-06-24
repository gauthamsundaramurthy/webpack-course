import React from 'react';
import avatar from './images/avatar.jpeg';

export default class extends React.Component {
    state = {
        counter: 0
    }

    onCounterUpdate = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }))
    }

    render() {
        return <div class="profile">
            <h1> {this.state.counter} </h1>
            <button onClick={this.onCounterUpdate}> Update </button>
            <img src={avatar} alt="avatar" />
        </div>
    }
}