import React, { Component } from 'react';
import './movieCard.scss';

export default class MovieCard extends Component {
    render() {
        return (
            <div>
                <div className="col s12 m3">
                    <div class="card">
                        <div class="card-image">
                            <img src={this.props.image} />
                            <span class="card-title">{this.props.title}</span>
                            <a class="btn-floating halfway-fab waves-effect waves-light blue darken-2"><i class="material-icons">edit</i></a>
                        </div>
                        <div class="card-content">
                            <h5>{this.props.year}</h5>
                            <p>{this.props.description}</p>
                            <br/>
                            <p><b>Director:</b> {this.props.director}</p>
                            <p><b>Tema:</b> {this.props.theme}</p>
                        </div>
                        <div class="card-action">
                            <button class="waves-effect waves-light btn red darken-1"><i class="material-icons left">delete_forever</i>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
