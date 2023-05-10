const getGrades = () => {
    const gradesField = document.getElementById('grades');
    const gradesValue = gradesField.value;
    const gradesArray = gradesValue.split(',');
    const cleanGrades = gradesArray.map(grade => grade.trim().toUpperCase());
    return cleanGrades;
};

const lookupGrade = grade => {
    let gradePoints = -1;
    switch (grade) {
        case 'A':
            gradePoints = 4;
            break;
        case 'B':
            gradePoints = 3;
            break;
        case 'C':
            gradePoints = 2;
            break;
        case 'D':
            gradePoints = 1;
            break;
        case 'F':
            gradePoints = 0;
            break;
    }
    return gradePoints;
};

const calculateGpa = grades => {
    const gradePoints = grades.map(grade => lookupGrade(grade));
    const gpa = gradePoints.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    ) / gradePoints.length;
    console.log(gpa);
    return gpa.toFixed(2);
};

const outputGpa = (gpa, selector) => {
    const outputElement = document.querySelector(selector);
    outputElement.textContent = `Your GPA is: ${gpa}`;
}

const clickHandler = () => {
    const gradesList = getGrades();
    const gpa = calculateGpa(gradesList);
    outputGpa(gpa, '#output');
};

document.getElementById('submitButton').addEventListener('click', clickHandler);