const Request = {
    getStudents() {
        return fetch("http://localhost:8080/student/all").then(res => res.json());
    }
};
export default Request