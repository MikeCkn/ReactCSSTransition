import React, { Component } from 'react';

export default class Input extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.addTeam}>
                    <input 
                        type="text" 
                        placeholder="Add a team"
                        value={this.props.inputValue}
                        onChange={this.props.inputChange}
                    />
                </form>
            </div>
        );
    }
}
