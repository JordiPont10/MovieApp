import { Component } from "react";
import { Card } from "../card/Card";
import { Form } from "../form/Form";

import "../list/list.css";

export class List extends Component {
    constructor() {
        super();
        this.state = {
            movies: [
                {
                    id: 1,
                    title: 'The Wolf of Wall Street',
                    year: 2013,
                    url: 'https://pics.filmaffinity.com/El_lobo_de_Wall_Street-675195906-large.jpg'
                },
                {
                    id: 2,
                    title: 'Nobody',
                    year: 2021,
                    url: 'https://pics.filmaffinity.com/Nadie-793040499-large.jpg'
                },
                {
                    id: 3,
                    title: 'La Lista de Schindler',
                    year: 1993,
                    url: 'https://images-na.ssl-images-amazon.com/images/I/91H6ueCBD1L.jpg'
                },
                {
                    id: 4,
                    title: 'Interstellar',
                    year: 2014,
                    url: 'https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg'
                }
            ]
        };
    }

    render() {
        return (
            <div className='container line'>
                <div className='list line'> {this.state.movies.map((movie, key) => (
                    <Card movie={movie} key={key} />

                ))}
                </div>
                <Form/>
            </div>
        )
    }
}