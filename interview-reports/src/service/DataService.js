import { commService } from './CommService';
import ReportDTO from '../dto/ReportDTO';
import CandidateDTO from '../dto/CandidateDTO';
import CompanyDTO from '../dto/CompanyDTO';

class DataService {
    getReports(reportsHandler) {
        const reports = [];
        commService.getRequest("reports", responseData => {
            const reportsData = responseData.data;
            reportsData.forEach(singleReport => {
                const { id, candidateId, candidateName, companyId, companyName, interviewDate, phase, status, note } = singleReport;
                const report = new ReportDTO(id, candidateId, candidateName, companyId, companyName, interviewDate, phase, status, note);
                reports.push(report);
            });
            reportsHandler(reports);
        }, (error) => {
            console.log(error);
        })
    }

    getCandidates(candidatesHandler) {
        const candidates = [];
        commService.getRequest("candidates", responseData => {
            const candidatesData = responseData.data;
            candidatesData.forEach(singleCandidate => {
                const { id, name, birthday, email, education, avatar } = singleCandidate;
                const candidate = new CandidateDTO(id, name, birthday, email, education, avatar);
                candidates.push(candidate);
            });
            candidatesHandler(candidates);
        }, (error) => {
            console.log(error);
        })
    }

    getCompanies(companiesHandler) {
        const companies = [];
        commService.getRequest("companies", responseData => {
            const companiesData = responseData.data;
            companiesData.forEach(singleCompany => {
                const { id, name, email } = singleCompany;
                const company = new CompanyDTO(id, name, email);
                companies.push(company);
            });
            companiesHandler(companies);
        }, (error) => {
            console.log(error);
        })
    }

    deleteReport(id, responseHandler) {
        commService.deleteRequest("reports", id, response => {
            responseHandler(response);
        }, (error) => {
            console.log(error);
        });
    }
    
    createReport(data, responseHandler) {
        commService.postRequest("reports", data, response => {
            responseHandler(response);
        }, error => {
            console.log(error);
        })
    }
}

export const dataService = new DataService();