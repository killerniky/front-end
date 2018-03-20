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
                name: `${gemeente} ${this.state.locatie.gemeente}`,
            }
        });
    }
    updateHuisNummer(huisnr) {
        this.setState({
            ...this.state,
            locatie: {
                ...this.state.locatie,
                huisnr,
                huisnr: `${huisnr}`,
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
        if (this.state.locatie) {
            studentService.update(this.props.match.params.id, this.state.locatie).then(() => this.props.history.push('/locaties'));
        }
        else{
              console.log('locatie is empty');
        }
    }

    removeLocatie() {
        studentService.del(this.props.match.params.id).then(() => this.props.history.push('/locaties'));
    }
    render(){
        return(
          <div className="container">
            <article className="todo_form">
            <br/>
            <a onClick={() => this.removeLocatie()}>Locatie verwijderen</a>
            <br/>
            <br/>
                <form action="" onSubmit={(e) => this.onSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="locatie">Locatie</label>
                        <input
                          type="text"
                          className="form-control"
                          id="text"
                          placeholder="locatie"
                          name="locatie"
                          value={this.state.locatie.locatie}
                          onChange={(e) => this.updateLocatie(e.target.value)}
                          require
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="straat">Straat</label>
                        <input
                          type="text"
                          className="form-control"
                          id="text"
                          placeholder="straat"
                          name="straat"
                          value={this.state.locatie.straat}
                          onChange={(e) => this.updateStraat(e.target.value)}
                          require
                        />
                    </div>
                    <div className="form-group ">
                      <label htmlFor="huis_nummer">Huis-nummer</label>
                      <input
                        type="number"
                        name="huis_nummer"
                        id="huis_nummer"
                        className="form-control"
                        value={this.state.locatie.huisnr}
                        onChange={(e) => this.updateHuisNummer(e.target.value)}
                        require
                      />
                    </div>
                    <br/>
                    <fieldset>
                        <label htmlFor="gemeente">Gemeente</label>
                        <select
                          type="text"
                          className="form-control"
                          id="text"
                          placeholder="gemeente"
                          name="straat"
                          value={this.state.locatie.gemeente}
                          onChange={(e) => this.updateGemeente(e.target.value)}
                          require
                        >
                          <option value="antwerpen">Antwerpen</option>
                          <option value="deurne">Deurne</option>
                          <option value="berchem">Berchem</option>
                          <option value="ekeren">Ekeren</option>
                          <option value="merksem">Merksem</option>
                          <option value="berendrecht">Berendrecht</option>
                          <option value="wilrijk">Wilrijk</option>
                          <option value="hoboken">Hoboken</option>
                          <option value="borgerhout">Borgerhout</option>
                        </select>
                      </fieldset>
                      <br/>



                    <button type="submit" className="btn btn-default btn-lg">
                        <span className="glyphicon glyphicon-save" aria-hidden="true"></span> Save
                    </button>
                </form>
            </article>
            </div>

        );
    }
}
