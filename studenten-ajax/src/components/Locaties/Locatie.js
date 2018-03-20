import * as React from 'react';
import { Link } from 'react-router-dom';

const Locatie = (props) => (

    <div>
    <ul class="list-group">
    <li className="list-group-item">
        <h4 className="list-group-item-heading">
          <Link to={`/locaties/detail/${props.id}`}>
            <div>{props.straat}</div>
          </Link>
        </h4>
        <p className="list-group-item-text">{props.huidige_dekking}</p>
        <br/>
        <div className="btn-group actions" role="group">
        <Link to={`/locaties/edit/${props.id}`} >
            <button
              type="button"
              className="btn btn-default"
              title="Edit"
            >
              <span
                className="glyphicon glyphicon-edit"
                aria-hidden="true"
              >
              </span>
            </button>
        </Link>
        </div>
    </li>
    </ul>
    </div>

);

export default Locatie;
