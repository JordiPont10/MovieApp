import { Component } from "react";
import { movieServices } from "../../services/movieServices";
import "../form/form.css"

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditMode: this.props.isEditMode,
            movie: this.props.movieToPreview
        }
    }

    handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value.toLowerCase();
        this.setState({
            movie: { ...this.state.movie, [name]: value }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let submitter = e.nativeEvent.submitter.value;
        if (submitter === 'add') {
            this.addMovie(this.state.movie);
            return;
        }
        else {
            this.updateMovie(this.state.movie);
            return;
        }
    }

    sanitize = (obj) => {
        for (let key in obj) {
            if (obj[key] === '' || obj[key] === undefined || obj[key] === null) return;
            if (typeof obj[key] !== 'string') return;
        }
    }

    addMovie = (state) => {
        this.sanitize(state);
        this.props.postMovie(state);
    }

    updateMovie = (state) => {
        this.sanitize(state);
        console.log(state);
    }

    resetInputsForm = ()=> {
        this.setState({movie: {id:'', title:'', year:'', url:''}})
    }

    render() {
        console.log(this.state)
        let val = this.state.isEditMode === false ? 'add' : 'edit';

        return (
            <form className='form' onSubmit={this.handleSubmit}>
                {this.state.isEditMode === false ?
                    <p className='closeButton' onClick={() => this.props.toggleForm()}><i className="fa-solid fa-x"></i></p> : null}
                <div className={`input-container ${this.state.movie && this.state.isEditMode === true ? 'preview-active' : ''}`}>
                    <input type="text" name="title" placeholder='Title' onChange={this.handleInputChange} />
                    <input type="text" name="year" placeholder='Year' onChange={this.handleInputChange} />
                    <input type="text" name="url" placeholder='Url' onChange={this.handleInputChange} />
                </div>
                <div className={`button-container ${this.state.movieToPreview && this.state.isEditMode ? 'preview-active' : ''}`}>
                    <button type="submit" className="add-button" value={val}>{val.toLocaleUpperCase()}</button>
                </div>

            </form>
        )
    };
}