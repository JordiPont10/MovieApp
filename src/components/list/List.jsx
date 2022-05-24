import { Component } from "react";
import { movieServices } from "../../services/movieServices";
import { Card } from "../card/Card";
import { Form } from "../form/Form";

import "../list/list.css";

export class List extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            formIsActive: false,
            movieToPreview: {},
            isEditMode: false,
        }
    }

    getAllMovies = () => {
        movieServices.getAllMovies().then((res) => {
            this.setState({ movies: res });
        })
    }

    componentDidMount() {
        this.getAllMovies()
    }

    deleteMovie = (id) => {
        let confirmation = window.confirm("Are you sure to delete this film?");
        if (!confirmation) return;
        movieServices.deleteMovie(parseInt(id)).then((res) => {
            if (res) this.getAllMovies();
            alert("Movie deleted");
        })
    }

    postMovie = (movie) => {
        console.log(movie);
        movieServices.postMovie(movie).then((res) => {
            if (res) this.getAllMovies();
            alert(`${res.title} added! Movie id: ${res.id}`);
            this.exitEditMode();
            this.setState({ formIsActive: false });
        })
    }

    toggleForm = () => {
        this.setState({
            formIsActive: !this.state.formIsActive
        })
    }

    exitEditMode = () => {
        this.setState({
            isEditMode: false,
            movieToPreview: {}
        })
    }

    nextMovieToPreview = (movie) => {
        console.log(movie);
        this.setState({
            isEditMode: true,
            nextMovieToPreview: movie
        })
    }

    render() {
        return (
            <div className='container line'>
                <div className='list line'> {this.state.movies.map((movie, key) => (
                    <Card movie={movie} key={key} deleteMovie={this.deleteMovie} toggleForm={this.toggleForm} nextMovieToPreview={this.nextMovieToPreview} />

                ))}
                </div>
                {!this.state.formIsActive ? <button className='form-button' onClick={() => { this.toggleForm(); this.exitEditMode() }}>Add</button> : null}
                {this.state.formIsActive ? <Form postMovie={this.postMovie} toggleForm={this.toggleForm} formIsActive={this.state.formIsActive} isEditMode={this.state.isEditMode} movieToPreview={this.state.movieToPreview} /> : null}

            </div>
        )
    }


}