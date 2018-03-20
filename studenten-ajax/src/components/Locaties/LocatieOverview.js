import * as React from 'react';
import Locatie from './Locatie';
import * as studentService from '../../services/students.service';
import { Link } from 'react-router-dom';


export default class LocatieOverview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locaties: []
        };
    }

    // React lifecycle event
    // https://reactjs.org/docs/react-component.html#the-component-lifecycle
    componentWillMount() {
        studentService.getAll().then(response => this.setState({ locaties: response.message }));
        console.log('this state:',  this.state.locaties);
    }

    renderStudents() {
        return this.state.locaties.map((locatie, i) => (<ul key={i} className="list-group"><Locatie straat={locatie.straat} huis_nummer={locatie.huisnr} huidige_dekking={locatie.huidige_dekking} id={locatie.id} /></ul>));
        console.log('mapped wifi');
    }

    render() {
        return (

            <div className="container">
                <h2>Openbare wifi-plekken</h2>
                <br/>
                <button type="button" className="btn btn-default btn-lg">
                    <Link to={`/locaties/add/`}>
                      <span
                        className="glyphicon glyphicon-plus"
                        aria-hidden="true"
                      >
                      </span>
                        Toevoegen
                    </Link>
                </button>
                <br/>
                <br/>
                {this.state.locaties.length ? this.renderStudents() : (<img className="waitingAnim" src={require('./Loading-Anim.svg')}/>)}
              </div>
        );
    }
};
