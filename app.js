const studentList=[];
const Student_list = document.querySelector("#studentlist");
document.querySelector("#click_button").addEventListener("click",studentsToAdd);
function studentsToAdd(){
    const list_to_add= document.querySelector("#name").value;
    const list_to_add1= document.querySelector("#mailid").value;
    const list_to_add2= document.querySelector("#phnum").value;
    if((list_to_add=="")||(list_to_add1=="")||(list_to_add2=="")){
        return;
    }
    else{
        const studentObject={
            id:studentList.length+1,
            name:list_to_add,
            mail:list_to_add1,
            phno:list_to_add2
        };
        console.log(studentObject)
        studentList.unshift(studentObject);
        console.log(studentList)
        displaystudents();
    }
}
function displaystudents(){
    Student_list.innerHTML="";
    document.querySelector("#name").value="";
    document.querySelector("#mailid").value="";
    document.querySelector("#phnum").value="";
    studentList.forEach((item)=>{
        const student = document.createElement("li");
        student.innerHTML="name: "+item.name+",mailId: "+item.mail+",ph.no: "+item.phno;
        Student_list.appendChild(student);
        console.log(student)
    })
}