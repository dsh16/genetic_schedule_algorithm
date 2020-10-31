class CourseClass {

    constructor(professor: Professor, course, groups, requiresLab, duration) {
        this.professor = professor;
        this._course = course;
        this._groups = groups;
        this._requiresLab = requiresLab;
        this._duration = duration;
        professor.addCourseClass()
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
}