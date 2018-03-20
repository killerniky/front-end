import * as React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => (

<footer className="page-footer font-small blue pt-4 mt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6">
                <h5 className="text-uppercase">Open Wifi Antwepren</h5>
                <p>Zoek waar zich bij jou in de buurt een open Wifi hotspot bevind.</p>
            </div>
            <div className="col-md-6">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li>
                        <Link to="http://opendata.antwerpen.be/">
                          Open data Antwerpen.
                        </Link>
                    </li>
                </ul>
                <br/>
                <br/>


            </div>
        </div>
    </div>
    <div className="footer-copyright py-3 text-center">
        <p>© 2018 Copyright: Niky Dieben</p>
    </div>
</footer>

);

export default Footer;
