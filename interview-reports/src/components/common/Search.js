import React from 'react';
import PropTypes from 'prop-types';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchString: "" };
    }

    onInputChange = (e) => {
        const searchString = e.target.value;
        this.setState({ searchString });
        this.props.searchHandler(searchString);
    }

    render() {
        return (
            <div className="col s12 search">
                <div className="input-field">
                    <i className="material-icons prefix valign">search</i>
                    <input id="search" type="text" className="validate" value={this.state.searchString} onChange={this.onInputChange} />
                    <label htmlFor="search">Search</label>
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    searchHandler: PropTypes.func
}