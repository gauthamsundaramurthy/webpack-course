import React from 'react';
import avatar from './images/avatar.jpeg';
import profileStyles from './main.css';
import {css} from '@emotion/css';
import styled from '@emotion/styled';

const red = '#f00';

const className = css`
    color: ${red};
    text-align: center;
`

const Button = styled.button`
  padding: 12px;
  background-color: #aaa;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

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
        return <div>
            <h1 className={className}> {this.state.counter} </h1>
            <Button onClick={this.onCounterUpdate}> Update </Button>
            <img className={profileStyles.imgStyle} src={avatar} alt="avatar" />
        </div>
    }
}