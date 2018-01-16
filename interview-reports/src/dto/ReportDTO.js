export default class ReportDTO {
    constructor(id, candidateId, candidateName, companyId, companyName, interviewDate, phase, status, note) {
        this._id = id;
        this._candidateId = candidateId;
        this._candidateName = candidateName;
        this._companyId = companyId;
        this._companyName = companyName;
        this._interviewDate = interviewDate;
        this._phase = phase;
        this._status = status;
        this._note = note;
    }

    get id() {
        return this._id;
    }
    get candidateId() {
        return this._candidateId;
    }
    get candidateName() {
        return this._candidateName;
    }
    get companyId() {
        return this._companyId;
    }
    get companyName() {
        return this._companyName;
    }
    get interviewDate() {
        return this._interviewDate;
    }
    get phase() {
        return this._phase;
    }
    get status() {
        return this._status;
    }
    get note() {
        return this._note;
    }
}