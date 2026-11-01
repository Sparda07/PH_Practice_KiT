
type tcourse =  {
    course_Id: number;
    Course_name: string;
    course_credit: number;

};




type Tuser = {
    readonly  ID: number;
    Name: string;
    Age: number;
    email?: string;
    Department: string;
    courses: tcourse[];
    readonly Grade: string;
    phone_number: string;
    readonly isActive: boolean;

};


const user1: Tuser = {
    ID: 21,
    Name: "Ismail",
    Age: 26,
    email: "ismailhossain.creates@gmail.com",
    Department: "CSE",
    courses: [{

        course_Id: 1,
        Course_name: "Nodejs",
        course_credit: 3

    },

    {

        course_Id: 101,
        Course_name: "English",
        course_credit: 3

    }
    ],
    Grade: "A+",
    phone_number: "01989771737",
    isActive: true

};

const user2: Tuser = {
    ID: 22,
    Name: "Karim",
    Age: 28,
    Department: "IPE",
    courses: [{
        
        course_Id: 2,
        Course_name: "C#",
        course_credit: 3

    },
],
    Grade: "A+",
    phone_number: "01989771737",
    isActive: false

};

const user3: Tuser = {
    ID: 23,
    Name: "Ronaldo",
    Age: 22,
    email: "ismailhossain.creates@gmail.com",
    Department: "ECON",
    courses: [{
        
        course_Id: 3,
        Course_name: "CPP",
        course_credit: 3,

    },
],
    Grade: "A+",
    phone_number: "01989771737",
    isActive: true

};
const user4: Tuser = {
    ID: 24,
    Name: "Mbappe",
    Age: 21,
    email: "ismailhossain.creates@gmail.com",
    Department: "BBA",
    courses: [{
        
        course_Id: 4,
        Course_name: "java",
        course_credit: 3

    },
],
    Grade: "A+",
    phone_number: "01989771737",
    isActive: true

};

const user5: Tuser = {
    ID: 25,
    Name: "Neymar",
    Age: 36,
    email: "ismailhossain.creates@gmail.com",
    Department: "EEE",
    courses: [{
        
        course_Id: 5,
        Course_name: "reactjs",
        course_credit: 3

    },

    {
        
        course_Id: 502,
        Course_name: "BGS",
        course_credit: 3

    },
],
    Grade: "A+",
    phone_number: "01989771737",
    isActive: false

};

let stu : Tuser[] = [user1,user2,user3,user4,user5];

stu.forEach((student) => {

     console.log(student);

} );



// const availablesTu = stu.filter( (Tuser) => Tuser.isActive );

// console.log(availablesTu);

// const csStu = stu.filter( (student) =>  {

//     return student.Department === "CSE";
// }

// );





const sturmv = (studentId: number): void => {
    stu = stu.filter((student) => student.ID !== studentId )
}
sturmv(22)

console.log(stu.length)
console.log("Removed Successfully")




