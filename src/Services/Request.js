const Request = {
    getStudents() {
        return fetch("http://localhost:8080/student/all").then(res => res.json());
    },
    getJournal() {
        return fetch("http://localhost:8080/journal/all").then(res => res.json());
    },
    getGroup() {
        return fetch("http://localhost:8080/group/all").then(res => res.json());
    },
    getStudentOrder() {
        return fetch("http://localhost:8080/student/all/order").then(res => res.json());
    },
    getJournalOrder() {
        return fetch("http://localhost:8080/journal/all/order").then(res => res.json());
    }

};
export default Request