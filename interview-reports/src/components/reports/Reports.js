import React from 'react';
import { dataService } from '../../service/DataService';
import ReportSingle from './ReportSingle';
import Search from '../common/Search';
import Modal from '../common/Modal';
import { ErrorMessage } from '../common/ErrorMessage';

class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state = { reports: [], report: {}, filteredReports: [] };
    }

    loadReports = () => {
        dataService.getReports((reports) => {
            this.setState({
                reports,
                filteredReports: reports
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
            report
        })
    }

    confirmMe = (deleteMehandler) => {
        return window.$.confirm({
            theme: 'supervan',
            title: 'Are you sure?',
            content: 'Are you sure you want to delete the report?',
            buttons: {
                yes: function () {
                    deleteMehandler(true);
                },
                no: function () {
                    deleteMehandler(false);
                }
            }
        });
    }

    deleteReport = (id) => {
        this.confirmMe((yesno) => {
            if (yesno) {
                dataService.deleteReport(id, (response) => {
                    this.loadReports();
                })

            }
        })
    }

    onSearchRequested = (searchString) => {
        const currentReports = this.state.reports;

        if (searchString === "") {
            this.setState({ filteredReports: currentReports });
        }

        const filteredList = currentReports.filter((report) => {
            const candName = report.candidateName.toLowerCase();
            const compName = report.companyName.toLowerCase();
            const searchStringLower = searchString.toLowerCase();
            return candName.includes(searchStringLower) || compName.includes(searchStringLower);
        });

        this.setState({ filteredReports: filteredList });
    }

    componentWillMount() {
        this.loadReports();
    }


    render() {

        const reports = this.state.filteredReports;

        return (
            <div className="container">
                <Search searchHandler={this.onSearchRequested} />
                {!reports.length ? <ErrorMessage /> : reports.map((report, index) => {
                    return <ReportSingle key={index} report={report} handleReportId={this.handleReportId} handleReportDelete={this.deleteReport} />
                })}

                <Modal report={this.state.report} />
            </div>
        )
    }
}

export default Reports;