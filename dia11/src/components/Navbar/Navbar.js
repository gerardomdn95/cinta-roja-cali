import React from 'react';
import './navbar.scss';

export const Navbar = () => {
    return (
        <div>
            <nav class="nav-wrapper indigo">
                <div className="container">
                    <div class="nav-wrapper">
                        <a href="#!" class="brand-logo">Netflis</a>
                        <ul class="right hide-on-med-and-down">
                            <li><a class="waves-effect waves-light btn">Agregar Película</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
