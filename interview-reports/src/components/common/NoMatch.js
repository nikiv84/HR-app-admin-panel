import React from 'react';

const NoMatch = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 err404">
                    <h1 className="right-align">404</h1>
                    <h2 className="left-align">Page Not Found</h2>
                </div>
                {/* <div className="col s5 err404">
                    <h2 className="left">Error Not Found</h2>
                </div> */}
            </div>
        </div>
    )
}

export default NoMatch;