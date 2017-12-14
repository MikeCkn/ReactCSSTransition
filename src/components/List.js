import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class List extends Component {
    render() {
          const teams = this.props.teams.map((team, index) => (
            <ul key={index} onClick={() => this.props.deleteTeam(team.id)}>
                <li>{team.name}</li>
            </ul>
    ));
        return (
                <div>
                     <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                     {teams}
                    </ReactCSSTransitionGroup>
                </div>

        );
    }
}
