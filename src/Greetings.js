import React, { Component } from 'react';

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    switch(isLoggedIn) {
        case true:
            return <UserGreeting />;
        default:
            return <GuestGreeting />;
    }
}

const Users = [
    {
        name: 'ALex',
        text: 'Blah'
    },
    {
        name: 'Nike',
        text: 'Blah blah'
    },
    {
        name: 'Nastya',
        text: 'Blah blah blah'
    }
]

const userList = Users.map((user, index) =>
    <li key={index}>
        <p>Name: {user.name}</p>
        <p>Text: {user.text}</p>
    </li>
);

class Greetings extends Component {
    render() {
        return (
            <div>
                <Greeting isLoggedIn={false} />
                <ul>{userList}</ul>
            </div>
        );
    }
}

export default Greetings;
