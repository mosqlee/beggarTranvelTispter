import React, { Component } from 'react';
import Button from 'material-ui/Button';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }

    render() {
        return (
            <div>
                this is home~<br />
                记一下数：{this.state.count}<br />
                <Button onClick={() => this._handleClick()}>增</Button>
            </div>
        )
    }
}