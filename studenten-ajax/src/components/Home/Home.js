import * as React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="text-center">
    <br/>
    <main>
        <div className="container">
          <div className="jumbotron">
            <h1>Open Wifi Antwerpen</h1>
              <span>Deze website bevat alle locaties met gratis publieke toegang tot het WIFI-netwerk van de Stad Antwerpen. <br/>
              Ken jij nog andere locaties met publieke WIFI die niet op de site staan? Voeg ze toe!</span>
              <br/>
              <br/>
              <div>
                <button className="btn btn-default"><Link className="nav-link" to="/locaties">Ontdek!</Link></button>  <button className="btn btn-default"><Link className="nav-link" to="/locaties/add">Voeg toe!</Link></button>
              </div>
          </div>
        </div>
    </main>
    </div>


);

export default Home;
