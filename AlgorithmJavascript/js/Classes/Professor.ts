class Professor {

    _id: number;
    _name: string;
    _courseClasses: Array<CourseClass> = [];

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
    };

    get id(): number {
        return this._id;
    };

    // set id(newId: number) {
    //     this.id = newId;
    // };
    //
    // get name(): string {
    //     return this.name.toUpperCase();
    // };
    //
    // set name(newName: string) {
    //     this.name = newName;
    // };
    //
    // get courseClasses(): Array<CourseClass> {
    //     return this.courseClasses;
    // };
    //
    // addCourseClass(courseClass: CourseClass){
    //     this.courseClasses.push(courseClass);
    // };
    //
    // compareIdOfProfessors(professor: Professor){
    //     return this.id === professor.id;
    // };
    getInfo(): string {
        return "id:" + this.id + " name:" + this.name;
    }
}