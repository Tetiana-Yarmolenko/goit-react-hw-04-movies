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
        
        const data = event.currentTarget.value.toLowerCase();
        this.setState({ search: data });

        // window.location.search = `?query=${data}`;
        // window.history.pushState(null, null, `?query=${data}`);
        this.props.location.search = `?query=${data}`;
    }

    componentDidMount() {
        console.log(window.location.search);
        const newUrl = window.location.search;
        const getUrl = (newUrl.split('=')[1]);
       this.props.onSubmit(getUrl);
        // this.setState({search: getUrl })

    }
    

     
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
        console.log(this.props);
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