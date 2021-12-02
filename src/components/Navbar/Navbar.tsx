import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper navbar blue">
                    <div className="container">
                        <a href="/" className="brand-logo">TypeScript</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="/">Home</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar