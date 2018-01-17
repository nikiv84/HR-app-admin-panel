import React from 'react';
import { ErrorMessage } from '../common/ErrorMessage';
import Candidate from './Candidate';

export default class SelectCandidate extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = (selectedCandidate) => {
        this.props.handleSelectCandidate(selectedCandidate);
    }

    render() {
        const candidates = this.props.candidates;
        console.log("candidates", candidates);
        if (!candidates.length) {
            return <ErrorMessage />
        }
        return (
            <div className="row">
                <div className="col s12">
                    <ul className="collection candidates">
                        <div className="row">
                            {candidates.map((candidate, i) => {
                                return <Candidate candidate={candidate} key={i} handleClick={this.handleClick} />;
                            })}
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}