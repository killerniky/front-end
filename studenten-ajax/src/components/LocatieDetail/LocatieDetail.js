import React from 'react';
import * as studentService from '../../services/students.service';

export default class LocatieDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locatie: {
                locatie: '',
                gemeente: '',
                straat: '',
            }
        };
    }

    componentWillMount() {
        studentService.get(this.props.match.params.id).then(response => this.setState({ locatie: response.message }));
    }

    updateGemeente(gemeente) {
        this.setState({
            ...this.state,
            locatie: {
                ...this.state.locatie,
                gemeente,

            }
        });
    }

    updateLocatie(locatie) {
        this.setState({
            ...this.state,
            locatie: {
                ...this.state.locatie,
                locatie,
                locatie: `${locatie}`,
            }
        });
    }
    updateStraat(straat) {
        this.setState({
            ...this.state,
            locatie: {
                ...this.state.locatie,
                straat,
                straat: `${straat}`,
            }
        });
    }
    onSubmit(e) {
        e.preventDefault(); // stop default form submit

        studentService.update(this.props.match.params.id, this.state.locatie).then(() => this.props.history.push('/'));
    }

    removestudent() {
        studentService.del(this.props.match.params.id).then(() => this.props.history.push('/'));
    }
    render(){
        return(
          <div className="container">
            <article className="todo_form">
            <br/>
            <h1>{this.state.locatie.locatie}</h1>
            <hr/>
            <h2>Straat</h2>
            <h4>{this.state.locatie.straat} {this.state.locatie.huisnr}</h4>
            <h2>Gemeente</h2>
            <h4>{this.state.locatie.gemeente}</h4>

            </article>
            </div>

        );
    }
}
