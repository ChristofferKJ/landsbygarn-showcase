import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            message: '',
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleLogin = () => {
        const { username, password } = this.state;
       
        let endpoint = ''; 

        if (process.env.NODE_ENV === "production") {
            endpoint = "api/login.php"
        } else if (process.env.NODE_ENV === "development") {
            endpoint = "https://landsbygarn.dk/api/login.php"
          }

        // Send a POST request to login.php
        fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            console.log(response); 
            response.json();
        })
        .then((data) => {
            if (data.success) {
                // Login successful, perform desired actions
                this.setState({ message: 'Login successful' });
            } else {
                // Login failed, handle error
                this.setState({ message: 'Login failed. Please check your credentials.' });
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            this.setState({ message: 'An error occurred. Please try again later.' });
        });
    };

    render() {
        return (
            <div className="flex justify-center items-center">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
                    <h2 className="text-2xl mb-4 text-center">Login</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={this.handleLogin}
                        >
                            Login
                        </button>
                    </div>
                    <div className="text-red-500 text-center">{this.state.message}</div>
                </div>
            </div>
        );
    }
}

export default Login;
