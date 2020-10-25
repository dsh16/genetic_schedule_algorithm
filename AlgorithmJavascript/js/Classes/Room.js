class StudentGroup {
    _nextRoomId = 0;

    constructor(name, lab, numberOfSeats) {
        this._nextRoomId++;
        this._id = this._nextRoomId;
        this._name = name;
        this._lab = lab;
        this._numberOfSeats = numberOfSeats;
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

    get numberOfSeats() {
        return this._numberOfSeats;
    }

    set numberOfSeats(newNumber) {
        this._numberOfSeats = newNumber;
    }

    get isLab() {
        return this._lab;
    }

    addClass(courseClass){
        this._courseClasses.push(courseClass);
    }

    restartIDs(){
        this._nextRoomId = 0;
    }
}