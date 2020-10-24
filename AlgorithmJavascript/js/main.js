var readJSON = new Vue({
    el: '#readJSON',
    data: {
        file: '',
        professors: [],
        courses: [],
        rooms: [],
        groups: [],
        pairs: [],

    },
    methods: {
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        },
        readJSON(){
            var contents = schedule_imei;
            if (contents.length > 0){
                var element = contents[0];
                if(element.hasOwnProperty("professors")){
                    this.professors = element.professors
                }
                if(element.hasOwnProperty("courses")){
                    this.courses = element.courses
                }
                if(element.hasOwnProperty("rooms")){
                    this.rooms = element.rooms
                }
                if(element.hasOwnProperty("groups")){
                    this.groups = element.groups
                }
                if(element.hasOwnProperty("pairs")){
                    this.pairs = element.pairs
                }
            }
            var professor1 = new Professor(1,"Rob");
            professor1.addCourseClass([1])
            var professor2 = new Professor(2,"Vin");
            console.log(professor1.compareIdOfProfessors(professor2))
        },
    }
})