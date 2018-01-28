import React from 'react';
import { dateFormatter, ucFirst } from '../../assets/js/helpers';
import PropTypes from 'prop-types';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { report: {} };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            report: nextProps.report
        })
    }

    componentDidMount() {
        window.$(document).ready(function () {
            window.$('.modal').modal();
        });
    }

    render() {
        const { candidateName, companyName, interviewDate, phase, status, note } = this.state.report;

        return (
            <div id="report-modal" className="modal">
                <a className="modal-action modal-close right">
                    <i className="material-icons">close</i>
                </a>
                <div className="modal-content">
                    <div className="row">
                        <h4 className="modal-title">{candidateName}</h4>
                    </div>
                    <div className="row">
                        <div className="col s12 m4">
                            <p>Company:</p>
                            <h6>{companyName}</h6>
                            <p>Interview Date:</p>
                            <h6>{dateFormatter(interviewDate)}</h6>
                            <p>Phase:</p>
                            <h6>{phase ? (phase).toUpperCase() : ""}</h6>
                            <p>Status:</p>
                            <h6>{ucFirst(status)}</h6>
                        </div>
                        <div className="col s12 m8 note">
                            <p>Notes:</p>
                            <p>{note}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    report: PropTypes.object
}