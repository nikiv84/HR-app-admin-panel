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
        });
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
        });
    }

    confirmDeletion = (deleteMehandler) => {
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
        this.confirmDeletion((yes) => {
            if (yes) {
                dataService.deleteReport(id, (response) => {
                    console.log(response);
                    this.loadReports();
                })
            }
        });
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
        if (!this.state.reports.length) {
            return <h4 className="center-align">Loading...</h4>
        }

        const reports = this.state.filteredReports;

        return (
            <div className="container">
                <div className="row">
                    <div className="col s10 m6 l6 xl4 search">
                        <Search searchHandler={this.onSearchRequested} />
                    </div>
                </div>
                {!reports.length ? <ErrorMessage /> : reports.map((report, index) => {
                    return <ReportSingle key={index} report={report} handleReportId={this.handleReportId} handleReportDelete={this.deleteReport} />
                })}

                <Modal report={this.state.report} />
            </div>
        )
    }
}

export default Reports;