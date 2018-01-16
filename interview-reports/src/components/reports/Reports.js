import React from 'react';
import { dataService } from '../../service/DataService';
import ReportSingle from './ReportSingle';
import Search from '../common/Search';
import Modal from '../common/Modal';

class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {reports: []};
    }

    loadReports = () => {
        dataService.getReports((reports) => {
            this.setState({
                reports
            })
        })
    }

    handleReportId = (id) => {
        const allReports = this.state.reports;
        let report;
        allReports.forEach(reportItem => {
            if (reportItem.id === parseFloat(id)) {
                return report = reportItem;
            };
        })
        this.setState({
            report,
            showModal: true
        })
    }

    componentWillMount() {
        this.loadReports();
    }


    render() {

        const reports = this.state.reports;

        return (
            <div className="container">
                <Search />
                {reports.map((report, index) => {
                    return <ReportSingle key={index} report={report} handleReportId={this.handleReportId} />
                })}

                <Modal report={this.state.report} showModal={this.state.showModal} />
            </div>
        )
    }
}

export default Reports;