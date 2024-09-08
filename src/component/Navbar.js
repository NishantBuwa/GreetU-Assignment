import React from 'react'
import Rainbow from '../Assets/Images/rainbow.png'
import GreetU from '../Assets/Images/greetU.svg'
import '../Styles/Navbar.css'

function Navbar() {
    return (
        <div>
            <div className="navbar-component">
                <div className="rainbow-img">
                    <img src={Rainbow} alt="" srcset="" />
                </div>
                <div className="text-content">
                    <div className="top">
                        <div className="Loveto">
                            <p>Loveto</p>
                        </div>
                        <div className="timeline">
                            Create Your love timeline
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="powered-by">
                            Powered by 
                        </div>
                        <div className="greetu-img">
                            <img src={GreetU} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
