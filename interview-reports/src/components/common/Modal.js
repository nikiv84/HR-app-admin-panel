import React from 'react';
import { dateFormatter, ucFirst } from '../../assets/js/helpers';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false, report: {} };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.report) {
            this.setState({
                report: nextProps.report,
                showModal: nextProps.showModal
            })
        }
        console.log("here", nextProps.report);
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    componentDidMount() {
        window.$(document).ready(function () {
            window.$('.modal').modal();
        });
    }


    render() {

        const report = this.state.report;
        return (
            <div id="report-modal" className="modal">
                <a onClick={this.closeModal} className="modal-action modal-close right">
                    <i className="material-icons">close</i>
                </a>
                <div className="modal-content">
                    <div className="row">
                        <h4 className="modal-title">{report.candidateName}</h4>
                    </div>
                    <div className="row">
                        <div className="col s12 m4">
                            <p>Company:</p>
                            <h6>{report.companyName}</h6>
                            <p>Interview Date:</p>
                            <h6>{dateFormatter(report.interviewDate)}</h6>
                            <p>Phase:</p>
                            <h6>{report.phase}</h6>
                            <p>Status:</p>
                            <h6>{ucFirst(report.status)}</h6>
                        </div>
                        <div className="col s12 m8 note">
                            <p>Notes:</p>
                            <p>{report.note}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}