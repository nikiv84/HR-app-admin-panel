import React from 'react';

export default class FillReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            interviewDate: "",
            phase: "",
            status: "",
            note: ""
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
        console.log(name, value);
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newReportData = { ...this.state }
        let newDate =  new Date(newReportData.interviewDate) + "";
        newReportData.interviewDate = newDate;
        // console.log(reportData);
        this.props.handleCreateReport(newReportData);
    }

    render() {
        return (
            <div className="row">
                <form id="submit-report" className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col s12 m8 offset-m2 l4 input-field ">
                            <input type="date" className="datepicker" id="datepicker" placeholder="Choose date" name="interviewDate"
                                onChange={this.handleChange} value={this.state.interviewDate} />
                            <label className="active">Interview date</label>
                        </div>
                        <div className="input-field col s12 m8 offset-m2 l4">
                            <select onChange={this.handleChange} name="phase" value={this.state.phase}>
                                <option value="" defaultValue>Choose phase</option>
                                <option value="cv">CV</option>
                                <option value="hr">HR</option>
                                <option value="tech">Tech</option>
                                <option value="final">Final</option>
                            </select>
                            <label>Phase</label>
                        </div>
                        <div className="input-field col s12 m8 offset-m2 l4">
                            <select onChange={this.handleChange} value={this.state.status} name="status">
                                <option value="" defaultValue>Choose status</option>
                                <option value="declined">Declined</option>
                                <option value="passed">Passed</option>
                            </select>
                            <label>Status</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea" className="materialize-textarea" data-length="120"
                                onChange={this.handleChange} value={this.state.note} name="note"></textarea>
                            <label htmlFor="textarea2">Note</label>
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