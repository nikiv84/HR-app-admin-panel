import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { validationService } from '../../service/ValidationService';
import PropTypes from 'prop-types';

export default class FillReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            interviewDate: moment(),
            newReportData: {
                interviewDate: moment(),
                phase: "",
                status: "",
                note: ""
            },
            errors: {}
        };
    }

    componentDidMount() {
        window.$(document).ready(function () {
            window.$('#textarea').characterCounter();
            window.$('select').select();
        });
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newReportData = { ...this.state.newReportData };
        newReportData[name] = value;
        this.setState({ newReportData });
    }

    handleDateChange = (date) => {
        const newReportData = { ...this.state.newReportData };
        newReportData.interviewDate = date;
        this.setState({
            newReportData
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newReportData = { ...this.state.newReportData };
        const errors = validationService.isFormVaild(newReportData);
        this.setState({
            errors
        })
        if (errors.formValid) {
            const format = 'LLL';
            const momentDate = newReportData.interviewDate.format(format);
            newReportData.interviewDate = (new Date(momentDate)).toString();
            console.log(newReportData);
            this.props.handleCreateReport(newReportData);
        }
    }

    render() {
        return (
            <div className="row">
                <form id="submit-report" className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col s12 l8 offset-l2 xl6 offset-xl3 input-field">
                            <DatePicker
                                selected={this.state.newReportData.interviewDate}
                                onChange={this.handleDateChange}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                dateFormat="LLL"
                                minDate={moment().subtract(1, "years")}
                                maxDate={moment()}
                            />
                            <label className="active">Interview date</label>
                            <p id="error">{this.state.errors.allFields ? `${this.state.errors.allFields.interviewDate}` : ""}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 l6">
                            <select onChange={this.handleChange} name="phase" value={this.state.newReportData.phase} >
                                <option value="" defaultValue>Choose phase</option>
                                <option value="cv">CV</option>
                                <option value="hr">HR</option>
                                <option value="tech">Tech</option>
                                <option value="final">Final</option>
                            </select>
                            <label>Phase</label>
                            <p id="error">{this.state.errors.allFields ? `${this.state.errors.allFields.phase}` : ""}</p>
                        </div>
                        <div className="input-field col s12 l6">
                            <select onChange={this.handleChange} value={this.state.newReportData.status} name="status" >
                                <option value="" defaultValue>Choose status</option>
                                <option value="declined">Declined</option>
                                <option value="passed">Passed</option>
                            </select>
                            <label>Status</label>
                            <p id="error">{this.state.errors.allFields ? `${this.state.errors.allFields.status}` : ""}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea" className="materialize-textarea" data-length="120" name="note"
                                onChange={this.handleChange} value={this.state.newReportData.note} ></textarea>
                            <label htmlFor="textarea2">Note</label>
                            <p id="error">{this.state.errors.allFields ? `${this.state.errors.allFields.note}` : ""}</p>
                        </div>
                    </div>
                    <div className="row">
                        <button type="submit" className="waves-effect waves-light btn indigo darken-4 submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

FillReport.propTypes = {
    handleCreateReport: PropTypes.func
}