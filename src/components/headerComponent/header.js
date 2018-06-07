import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                    LOGO
                </div>
                <nav>
                    <ul>
                        <li className="first">
                            <a href="#">HomePage</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li className="last">
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>

                </nav>
            </header>
        );
    }
}

export default Header;
