import React,{Component } from 'react';

class Header extends Component {
        state = {
            isOpen: false
        }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#">Test</a>
                    </div>
                </nav>
            </header>
        )
    }
};

export default Header;