import React from 'react';

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
            <div className="row">
                <div className="col s10 m6 l6 xl4 search">
                    <div className="input-field">
                        <i className="material-icons prefix valign">search</i>
                        <input id="search" type="text" className="validate" value={this.state.searchString} onChange={this.onInputChange} />
                        <label htmlFor="search">Search</label>
                    </div>
                </div>
            </div>
        )
    }
}