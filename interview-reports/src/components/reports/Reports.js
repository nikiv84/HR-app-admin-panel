import React from 'react';
import { dataService } from '../../service/DataService';
import ReportSingle from './ReportSingle';
import Search from '../common/Search';

class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    loadReports = () => {
        dataService.getReports((reports) => {
            this.setState({
                reports
            })
        })
    }

    componentWillMount() {
        this.loadReports();
    }

    render() {

        const reports = this.state.reports;

        if(!reports) {
            return <h1>Loading data...</h1>
        }

        return (
            <div className="container">
                <Search />
                {reports.map((report, index) => {
                    return <ReportSingle key={index} report={report} />
                })}
            </div>
        )
    }
}

export default Reports;