import React from 'react';
import { dateFormatter, ucFirst } from '../../assets/js/helpers';

export default class ReportSingle extends React.Component {

    handleClick = (e) => {
        const id = e.target.dataset.id;
        this.props.handleReportId(id);
    }

    handleClickDelete = (e) => {
        const id = e.target.dataset.id;
        this.props.handleReportDelete(id);
    }


    render() {
        const { id, companyName, candidateName, interviewDate, status } = this.props.report;
        return (
            <div className="row">
                <div className="report clearfix">
                    <div className="col s12 m6 l3">
                        <h6>{companyName}</h6>
                        <p>Company Name</p>
                    </div>
                    <div className="col s12 m6 l3">
                        <h6>{candidateName}</h6>
                        <p>Candidate</p>
                    </div>
                    <div className="col s12 m6 l2">
                        <h6>{dateFormatter(interviewDate)}</h6>
                        <p>Interview Date</p>
                    </div>
                    <div className="col s12 m6 l2">
                        <h6>{ucFirst(status)}</h6>
                        <p>Status</p>
                    </div>
                    <div className="col s12 m12 l2 see-more valign-wrapper">
                        <i onClick={this.handleClick} data-id={id} data-target="report-modal" className="modal-trigger material-icons">remove_red_eye</i>
                        <i onClick={this.handleClickDelete} data-id={id} className="material-icons">close</i>
                    </div>
                </div>
            </div>
        )
    }
}