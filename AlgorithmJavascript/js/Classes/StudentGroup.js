class StudentGroup {
    _courseClasses = [];

    constructor(id, name, numberOfStudents) {
        this.id = id;
        this.name = name;
        this.numberOfStudents = numberOfStudents;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get numberOfStudents() {
        return this._name;
    }

    set numberOfStudents(newNumber) {
        this._courseClasses = newNumber;
    }

    get courseClasses() {
        return this._courseClasses;
    }

    addClass(courseClass){
        this._courseClasses.push(courseClass);
    }

    compareIdOfStudentsGroup(StudentGroup){
        return this._id === StudentGroup._id;
    }
}