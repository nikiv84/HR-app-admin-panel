import React from 'react';
import { dataService } from '../../service/DataService';
import Search from '../common/Search';
import { ErrorMessage } from '../common/ErrorMessage';
import { CreateReportSteps } from './CreateReportSteps';
import { SelectCandidate } from './SelectCandidate';
import { SelectCompany } from './SelectCompany';
import { FillReport } from './FillReport';

class CreateReports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1
        };
    }

    onSearchRequested = (searchString) => {
        console.log(searchString);
    }
    componentDidMount() {
        let thisstep = ++this.state.step;
        this.setState({
            step: thisstep
        })
    }


    render() {

        let currStep;
        switch (this.state.step) {
            case 1:
                currStep = <SelectCandidate />;
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
                    <div className="col s4 steps-container">
                        <CreateReportSteps />
                    </div>
                    <div className="col s8 search-container">
                        <Search onSearchRequested={this.onSearchRequested} />
                        {currStep}
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateReports;