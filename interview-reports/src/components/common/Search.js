import React from 'react';

export default class Search extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col s10 m6 l6 xl4 search">
                    <div className="input-field">
                        <i className="material-icons prefix valign">search</i>
                        <input id="search" type="text" className="validate" />
                        <label htmlFor="search">Search</label>
                    </div>
                </div>
            </div>
        )
    }
}