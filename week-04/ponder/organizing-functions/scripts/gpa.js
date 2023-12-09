const convertGrades = (grades) => {
  const gradePoints = [];
  for (let grade of grades) {
    grade.trim().toUpperCase() === "A"
      ? gradePoints.push(4.0)
      : grade.trim().toUpperCase() === "B"
      ? gradePoints.push(3.0)
      : grade.trim().toUpperCase() === "C"
      ? gradePoints.push(2.0)
      : gradePoints.push(1.0);
  }
  return gradePoints;
};

const calculateGpa = (gradePoints) => {
  const gpa =
    gradePoints.reduce((previous, current) => previous + current) /
    gradePoints.length;
  return gpa.toFixed(2);
};

const getGradeList = (grades) => {
  return grades.split(",");
};

const clickHandler = () => {
  const gradeList = document.getElementById("grades").value;
  const grades = getGradeList(gradeList);
  const gradePoints = convertGrades(grades);
  const gpa = calculateGpa(gradePoints);
  const outputContainer = document.getElementById("output");
  outputContainer.textContent = gpa;
};

const submitBtn = document.getElementById("submitButton");
submitBtn.addEventListener("click", clickHandler);
