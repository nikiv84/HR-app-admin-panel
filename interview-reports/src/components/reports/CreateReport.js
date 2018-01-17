import React from 'react';
import Search from '../common/Search';
import { dataService } from '../../service/DataService';
import { CreateReportSteps } from './CreateReportSteps';
import SelectCandidate from './SelectCandidate';
import { SelectCompany } from './SelectCompany';
import { FillReport } from './FillReport';

export default class CreateReports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            candidates: [],
            filteredCandidates: [],
            newReport: {},
            isSelected: false
        };
    }

    onSearchRequested = (searchString) => {
        const currentCandidates = this.state.candidates;

        if (searchString === "") {
            this.setState({ filteredCandidates: currentCandidates });
        }

        const filteredList = currentCandidates.filter((candidate) => {
            const candName = candidate.name.toLowerCase();
            const searchStringLower = searchString.toLowerCase();
            return candName.includes(searchStringLower);
        });

        this.setState({ filteredCandidates: filteredList });
    }

    handleSelectCandidate = (selectedCandidate) => {
        const newReport = selectedCandidate;
        this.setState({
            newReport,
            isSelected: true
        })
    }

    loadCandidates = () => {
        dataService.getCandidates(candidates => {
            this.setState({
                candidates,
                filteredCandidates: candidates
            })
        })
    }

    nextStep = () => {
        let step = this.state.step;
        if (this.state.isSelected) {
            ++step;
            this.setState({
                step
            })
        }
    }

    componentDidMount() {
        this.loadCandidates();
    }

    render() {
        let currStep;
        switch (this.state.step) {
            case 1:
                currStep = <SelectCandidate candidates={this.state.filteredCandidates} handleSelectCandidate={this.handleSelectCandidate} />;
                break;
            case 2:
                currStep = <SelectCompany />;
                break;
            case 3:
                currStep = <FillReport />;
                break;
            case 4:
                currStep = <SelectCandidate />;
                break;
            default:
                break;
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col s3 steps-container">
                        <CreateReportSteps step={this.state.step} />
                    </div>
                    <div className="col s9">
                        <div className="row btn-srch-cont">
                            <div className="col s9 search">
                                <Search searchHandler={this.onSearchRequested} />
                            </div>
                            <div className="col s3">
                                <button type="button" className="waves-effect waves-light btn" onClick={this.nextStep}>Next</button>
                            </div>
                        </div>
                        {currStep}
                    </div>
                </div>
            </div>
        )
    }
}