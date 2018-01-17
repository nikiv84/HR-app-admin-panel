import React from 'react';

export const ErrorMessage = () => {
    return (
        <div className="row">
            <div className="col s8 offset-s2 l6 offset-l3">
                <div className="card-panel info">
                    <h5 className="center-align">
                        <a className="btn-floating pulse"><i className="material-icons">info</i></a>
                        Sorry! No matches.
                    </h5>
                </div>
            </div>
        </div>
    )
}