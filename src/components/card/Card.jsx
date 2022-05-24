import { Component } from "react";
import "../card/card.css";

export class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log(this.props.movie)
        return (
            <div className="card">
                <div className="img-container">
                    <img className="image" src={this.props.movie.url} alt="" />
                    <button className='deleteButton'><i className="fa-solid fa-trash-can"></i></button>
                    <button className='editButton'><i className="fa-solid fa-pen-to-square"></i></button>
                    <button className='infoButton' ><i className="fa-solid fa-info"></i></button>

                </div>
                <div className="info-container">
                    <p className="info-item">{this.props.movie.title}</p>
                    <p className="info-item">{this.props.movie.year}</p>
                </div>
            </div>
        )
    }
}