import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectUser } from '../actions/index';

class UserList extends Component {

    createUserList() {
        const divStyle = {
            color: 'blue',
            textDecoration: 'underline',
            cursor: 'pointer'
        };
        return this.props.users.map((user) => {
            return (
                <h2 style={divStyle} key={user.id} onClick={() => this.props.selectUser(user)}>
                    {user.first} {user.last}
                </h2>
            );
        });
    }

    render() {
        return (
            <div>
                { this.createUserList() }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectUser }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);