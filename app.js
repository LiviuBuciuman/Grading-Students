const grades = [4, 73, 67, 38, 33];
console.log(gradingStudents(grades));

function gradingStudents(grades) {
    return grades.map(function (grade) {
        if (grade >= 38 && grade % 5 >= 3) {
            return grade + 5 - (grade % 5);
        } else {
            return grade;
        }
    });
}