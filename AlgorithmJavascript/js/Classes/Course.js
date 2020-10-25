class Course {

    constructor(id, name) {
        this.id = id;
        this.name = name;
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