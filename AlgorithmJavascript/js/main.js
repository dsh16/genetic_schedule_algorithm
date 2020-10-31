var readJSON = new Vue({
    el: '#readJSON',
    data: {
        file: '',
        professors: [],
        courses: [],
        rooms: [],
        groups: [],
        pairs: []
    },
    methods: {
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        },
        readJSON(){
            var contents = schedule_imei;
            // if (contents.length > 0){
            //     var element = contents[0];
            //     if(element.hasOwnProperty("professors")){
            //         var professors = element.professors;
            //         for(var i in professors){
            //             this.professors.push(new Professor(professors[i].id, professors[i].name));
            //         }
            //     }
            //     console.log(this.professors)
            //     if(element.hasOwnProperty("courses")){
            //         var courses = element.courses;
            //         for(var i in courses){
            //             this.courses.push(new Course(courses[i].id, courses[i].name));
            //         }
            //     }
            //     if(element.hasOwnProperty("rooms")){
            //         var rooms = element.rooms;
            //         for(var i in rooms){
            //             this.rooms.push(new Room(courses[i].name, courses[i].lab, courses[i].size));
            //         }
            //     }
            //     if(element.hasOwnProperty("groups")){
            //         var groups = element.groups;
            //         for(var i in groups){
            //             this.groups.push(new StudentGroup(groups[i].id, groups[i].name, groups[i].size));
            //         }
            //     }
            //     if(element.hasOwnProperty("pairs")){
            //         var pairs = element.pairs;
            //         for(var i in pairs){
            //             this.groups.push(new Course(pairs[i].id, pairs[i].name, pairs[i].size));
            //         }
            //     }
            // }
            var professor1 = new Professor(1,"Rob");
            console.log(professor1.id)
            // professor1.addCourseClass([1])
            // var professor2 = new Professor(2,"Vin");
            // console.log(professor2.compareIdOfProfessors(professor1))
        },
    }
})