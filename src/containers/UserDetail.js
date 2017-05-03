import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {

    render() {
        if (!this.props.user) {
            return (
                <h4>Please select a user ...</h4>
            )
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} width="115px" height="115px" alt="User"/>
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h4>Age: {this.props.user.age}</h4>
                <h4>Description: {this.props.user.description}</h4>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);