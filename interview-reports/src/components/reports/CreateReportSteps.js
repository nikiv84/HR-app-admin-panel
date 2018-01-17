import React from 'react';

export const CreateReportSteps = (props) => {
    const allClasses = "col s12";

    return (
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
    )
}