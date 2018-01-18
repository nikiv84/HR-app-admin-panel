import React from 'react';
import PropTypes from 'prop-types';

export const CreateReportSteps = (props) => {
    const allClasses = "col s12";
    const report = props.report;

    return (
        <div>
            <div className="row steps">
                <div className={props.step === 1 ? `${allClasses} active-step` : allClasses}>
                    <span className="step-num">1</span>
                    <h5>Select Candidate</h5>
                </div>
                <div className={props.step === 2 ? `${allClasses} active-step` : allClasses}>
                    <span className="step-num">2</span>
                    <h5>Select Company</h5>
                </div>
                <div className={props.step === 3 ? `${allClasses} active-step` : allClasses}>
                    <span className="step-num">3</span>
                    <h5>Fill Report Details</h5>
                </div>
            </div>
            <div className="row">
                {!report.candidateName ? "" :
                    <div className="col s12">
                        <small>Candidate name:</small>
                        <h6>{report.candidateName}</h6>
                    </div>
                }
                {!report.companyName ? "" :
                    <div className="col s12">
                        <small>Company name:</small>
                        <h6>{report.companyName}</h6>
                    </div>
                }
            </div>
        </div>
    )
}

CreateReportSteps.propTypes = {
    report: PropTypes.object,
    step: PropTypes.number
}