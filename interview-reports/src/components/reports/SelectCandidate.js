import React from 'react';
import { ErrorMessage } from '../common/ErrorMessage';
import Candidate from './Candidate';
import PropTypes from 'prop-types';

export default class SelectCandidate extends React.Component {

    handleClick = (selectedCandidate) => {
        const id = selectedCandidate.candidateId;
        window.$(`.collection-item`).each((i, item) => {
            let $item = window.$(item);
            $item.removeClass("selected");
            if (parseFloat($item.attr("data-id")) === id) {
                $item.addClass("selected");
            }
        });
        this.props.handleSelectCandidate(selectedCandidate);
    }

    render() {
        const candidates = this.props.candidates;
        if (!candidates.length) {
            return <ErrorMessage />
        }
        return (
            <div className="row">
                <div className="col s12">
                    <ul className="collection report-collection">
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

SelectCandidate.propTypes = {
    candidates: PropTypes.array,
    handleSelectCandidate: PropTypes.func
}