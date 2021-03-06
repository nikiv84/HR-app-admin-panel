import React from 'react';
import Search from '../common/Search';
import { dataService } from '../../service/DataService';
import { redirectService } from '../../service/RedirectService';
import { CreateReportSteps } from './CreateReportSteps';
import SelectCandidate from './SelectCandidate';
import SelectCompany from './SelectCompany';
import FillReport from './FillReport';

export default class CreateReports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            candidates: [],
            filteredCandidates: [],
            companies: [],
            filteredCompanies: [],
            newReport: {},
            isSelected: false
        };
    }

    componentDidMount() {
        this.loadCandidates();
        this.loadCompanies();
    }

    onSearchRequested = (searchString) => {
        const currentCandidates = this.state.candidates;
        const currentCompanies = this.state.companies;

        if (searchString === "") {
            this.setState({ filteredCandidates: currentCandidates });
            this.setState({ filteredCompanies: currentCompanies });
        }
        if (this.state.step === 1) {
            const filteredList = currentCandidates.filter((candidate) => {
                const candName = candidate.name.toLowerCase();
                const searchStringLower = searchString.toLowerCase();
                return candName.includes(searchStringLower);
            });

            this.setState({ filteredCandidates: filteredList });
        } else if (this.state.step === 2) {
            const filteredList = currentCompanies.filter((company) => {
                const compName = company.name.toLowerCase();
                const searchStringLower = searchString.toLowerCase();
                return compName.includes(searchStringLower);
            });

            this.setState({ filteredCompanies: filteredList });
        }
    }

    handleSelectCandidate = (selectedCandidate) => {
        const newReport = { ...selectedCandidate };
        this.setState({
            newReport,
            isSelected: true
        })
    }

    handleSelectCompany = (selectCompany) => {
        const newReport = { ...this.state.newReport, ...selectCompany };
        this.setState({
            newReport,
            isSelected: true
        })
    }

    handleCreateReport = (newReportData) => {
        const newReport = { ...this.state.newReport, ...newReportData }
        dataService.createReport(newReport, (response) => {
            let responseData = { ...response.data };
            if (response.statusText === "Created") {
                this.alertMe(responseData, (ok) => {
                    if (ok) {
                        redirectService.redirectTo("/reports");
                    }
                });
            }
        })
    }

    alertMe = (responseData, confirMeHandler) => {
        const { candidateName, companyName, interviewDate, note, phase, status } = responseData;
        return window.$.alert({
            theme: 'supervan',
            title: 'Success!',
            content: `Report created successfully!<br><br>Name: ${candidateName},<br>Company Name: ${companyName},
                    <br>Interview Date: ${(new Date(interviewDate)).toLocaleDateString()},<br>Phase: ${phase.toUpperCase()},<br>Status: ${status}<br>Note: ${note}`,
            buttons: {
                ok: function () {
                    confirMeHandler(true);
                }
            }
        });
    }

    loadCandidates = () => {
        dataService.getCandidates(candidates => {
            this.setState({
                candidates,
                filteredCandidates: candidates
            })
        })
    }

    loadCompanies = () => {
        dataService.getCompanies(companies => {
            this.setState({
                companies,
                filteredCompanies: companies
            })
        })
    }

    nextStep = () => {
        let step = this.state.step;

        if (this.state.isSelected) {
            ++step;
            this.setState({
                step,
                isSelected: false
            })
        }
    }

    prevStep = () => {
        let step = this.state.step;
        let newReport = this.state.newReport;

        --step;
        switch (step) {
            case 1:
                newReport = {};
                break;
            case 2:
                newReport.companyId = null;
                newReport.companyName = null;
                break;
            default:
                break;
        }
        this.setState({
            step,
            newReport,
            isSelected: false
        })
    }


    render() {
        let currStep;
        let nextbtnClasses = "waves-effect waves-light btn";

        switch (this.state.step) {
            case 1:
                currStep = <SelectCandidate candidates={this.state.filteredCandidates} handleSelectCandidate={this.handleSelectCandidate} />;
                break;
            case 2:
                nextbtnClasses += " next-btn"
                currStep = <SelectCompany companies={this.state.filteredCompanies} handleSelectCompany={this.handleSelectCompany} />;
                break;
            case 3:
                currStep = <FillReport handleCreateReport={this.handleCreateReport} />;
                break;
            default:
                break;
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col s4 m3 steps-container">
                        <CreateReportSteps step={this.state.step} report={this.state.newReport} />
                    </div>
                    <div className="col s8 m9">
                        <div className="row btn-srch-cont">
                            <Search searchHandler={this.onSearchRequested} step={this.state.step} />
                            <div className="col s12 report-btns input-field">
                                {this.state.step !== 3 ? <button type="button" className={nextbtnClasses} onClick={this.nextStep}>Next</button> : ""}

                                {this.state.step !== 1 ? <button type="button" className="waves-effect waves-light btn indigo darken-4 prev-btn"
                                    onClick={this.prevStep}>Previous</button> : ""}
                            </div>
                        </div>
                        {currStep}
                    </div>
                </div>
            </div>
        )
    }
}

