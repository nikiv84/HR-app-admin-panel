export default class CandidateDTO {
    constructor(id, name, birthday, email, education, avatar) {
        this._id = id;
        this._name = name;
        this._birthday = birthday;
        this._email = email;
        this._education = education;
        this._avatar = avatar;
    }

    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get birthday() {
        return this._birthday;
    }
    get email() {
        return this._email;
    }
    get education() {
        return this._education;
    }
    get avatar() {
        return this._avatar;
    }
}