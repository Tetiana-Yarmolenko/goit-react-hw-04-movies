import { Component } from "react";
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './SearchBar.module.css';

export default class Searchbar extends Component{
    state = {
        search: '',
    }

    handleSearchChange = event => {
    this.setState({ search: event.currentTarget.value.toLowerCase()});
    };
    
    handleSubmit = event => {
        event.preventDefault();

    if (this.state.search.trim() === '') {
      toast.error('Please, enter something!');
      return;
        }
        
        this.props.onSubmit(this.state.search);
        this.setState({ search: '' });

    }
    
    render() {
        return (
            <form className={s.form} onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.search}
                    className={s.input}
                    onChange={this.handleSearchChange} />
                <button type='submit' className={s.button}>
                    Search
                </button>
            </form>
        );
    }
}