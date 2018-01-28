function hasAllRequiredFields(data, callback, callback2) {
    for (let key in data) {
        if (data[key] === "") {
            callback(key);
            continue;
        }
        callback2(key);
    }
}
class ValidationService {

    isFormVaild(data) {
        const errors = {};
        errors.allFields = {};

        errors.formValid = true;
        hasAllRequiredFields(data, (key) => {
            errors.formValid = false;
            let errMsg = "";
            switch (key) {
                case "interviewDate":
                    errMsg = "Interview date must be selected";
                    break;
                case "phase":
                    errMsg = "Phase must be selected";
                    break;
                case "status":
                    errMsg = "Status must be selected";
                    break;
                case "note":
                    errMsg = "Note must be filled out";
                    break;
                default:
                    errMsg = "All fields must be valid!"
                    break;
            }
            errors.allFields[key] = errMsg;
        }, (key2) => {
            errors.allFields[key2] = "";
        })
        return errors;

    }
}


export const validationService = new ValidationService();