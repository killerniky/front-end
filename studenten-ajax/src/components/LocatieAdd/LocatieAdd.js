import * as React from 'react';
import * as studentService from '../../services/students.service';

export default class LocatieAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locatie: {
                locatie_naam: '',
                straat: '',
                huisnr: '',
                gemeente: '',
            }
        };
    }

    updateLocatie(locatie_naam) {
        this.setState({
            ...this.state,
            locatie: {
                ...this.state.locatie,
                locatie_naam,
                locatie_naam: `${locatie_naam}`,
            }
        });
    }

    updateGemeente(gemeente) {
        this.setState({
            ...this.state,
            locatie: {
                ...this.state.locatie,
                gemeente,
                gemeente: `${gemeente}`,
            }
        });
    }

    updateStraatNaam(straat) {
        this.setState({
            ...this.state,
            locatie: {
                ...this.state.locatie,
                straat,
                straat: `${straat}`,
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
    updateGender(gender) {
        this.setState({
            ...this.state,
            student: {
                ...this.state.student,
                gender,
            }
        });
    }

    updateGroup(group) {
        this.setState({
            ...this.state,
            student: {
                ...this.state.student,
                group,
            }
        });
    }

    updateCourse(course) {
        let courses = [...this.state.student.courses]; // copy

        if(courses.includes(course)) {
            courses = courses.filter(c => c !== course); // remove course
        } else {
            courses.push(course); // add course
        }

        this.setState({
            ...this.state,
            student: {
                ...this.state.student,
                courses,
            }
        });
    }

    onSubmit(e) {
        e.preventDefault(); // stop default form submit

        studentService.add(this.state.locatie).then(() => this.props.history.push('/locaties'));
    }

    render() {
        return (
            <section className="main">
                <div className="container">


                    <main>
                        <div className="wrapper">
                            <h2>Locatie open wifi toevoegen</h2>
                            <aside>
                                <div className="statistics">
                                    <p>Gelieve alle velden in te vullen.<br />Van zodra je klaar bent klik je op "Aanpassingen bewaren".</p>
                                </div>
                            </aside>
                            <br/>
                            <form action="" onSubmit={(e) => this.onSubmit(e)}>
                                <div className="form-group">
                                    <label htmlFor="naam">Locatie naam</label>
                                    <input
                                      type="text"
                                      name="locatie-naam"
                                      id="locatie-naam"
                                      className="form-control"
                                      value={this.state.locatie.locatie_naam}
                                      onChange={(e) => this.updateLocatie(e.target.value)}
                                      required
                                    />                                    
                                </div>
                                <div className="form-group ">
                                  <label htmlFor="locatie_straat">Straatnaam</label>
                                  <input
                                    type="text"
                                    name="locatie-straat"
                                    id="locatie-straat"
                                    className="form-control"
                                    value={this.state.locatie.straat}
                                    onChange={(e) => this.updateStraatNaam(e.target.value)}
                                    required
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
                                    required
                                  />
                                </div>

                                <br/>
                                <label htmlFor="gemeente">Gemeente</label>
                                <select
                                  className="form-control"
                                  value={this.state.locatie.gemeente}
                                  onChange={(e) => this.updateGemeente(e.target.value)}
                                  required
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
                                <br/>
                                <div>
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Aanpassingen bewaren
                                </button>
                                </div>
                            </form>



                        </div>
                    </main>
                </div>
            </section>);
    };
}
