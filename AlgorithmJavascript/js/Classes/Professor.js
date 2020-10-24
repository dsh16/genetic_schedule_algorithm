class Professor {
    _courseClasses = [];

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    get id() {
        return this._id;
    }

    set id(newId) {
        this._id = newId;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(newName) {
        this._name = newName;
    }

    get courseClasses() {
        return this._courseClasses;
    }

    addCourseClass(courseClass){
        this._courseClasses.push(courseClass);
    }

    compareIdOfProfessors(Professor){
        return this._id == Professor._id;
    }
}