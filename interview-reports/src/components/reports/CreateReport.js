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
        if (this.state.isSelected) {
            this.setState({
                step: ++this.state.step
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
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col s3 steps-container">
                        <CreateReportSteps step={this.state.step} />
                    </div>
                    <div className="col s9 search-container">
                        <Search searchHandler={this.onSearchRequested} />
                        {currStep}
                        <button type="button" value="Next" onClick={this.nextStep}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}