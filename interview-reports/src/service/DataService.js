import { commService } from './CommService';
import ReportDTO from '../dto/ReportDTO';

class DataService {
    getReports(reportsHandler) {
        const reports = [];
        commService.getRequest("reports", (responseData) => {
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
}

export const dataService = new DataService();