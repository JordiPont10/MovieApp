import { Component } from "react";
import "../form/form.css"

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <form className='form'>
                <input type="text" name="title" placeholder='Title' />
                <input type="text" name="year" placeholder='Year' />
                <input type="text" name="url" placeholder='Url' />
                <button className='submit-button' type='submit'>Add</button>
            </form>
        )
    };
}