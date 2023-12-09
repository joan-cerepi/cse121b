// Course object.
const aCourse = {
  code: "CSE121b",
  name: "JavaScript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 28,
      days: "TTh",
      instructor: "Sis A",
    },
  ],
  changeEnrollment(sectionNum, add = true) {
    const index = this.sections.findIndex(
      (section) => section.sectionNum === sectionNum
    );
    if (sectionNum >= 0) {
      if (add) {
        this.sections[index].enrolled++;
        renderSections(this.sections);
      } else {
        this.sections[index].enrolled--;
        renderSections(this.sections);
      }
    }
  },
};

const setCourseInfo = (course) => {
  const courseNameContainer = document.getElementById("courseName");
  const courseCodeContainer = document.getElementById("courseCode");
  courseNameContainer.textContent = course.name;
  courseCodeContainer.textContent = course.code;
};

const renderSections = (sections) => {
  const html = sections.map(
    (section) =>
      `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td>
    </tr>`
  );
  const sectionContainer = document.getElementById("sections");
  sectionContainer.innerHTML = html.join("");
};

// Cache DOM objects.
const enrollStudentBtn = document.getElementById("enrollStudent");
const dropStudentBtn = document.getElementById("dropStudent");
const sectionInput = document.getElementById("sectionNumber");

// Event Listeners.
enrollStudentBtn.addEventListener("click", () => {
  aCourse.changeEnrollment(parseInt(sectionInput.value));
});

dropStudentBtn.addEventListener("click", () => {
  aCourse.changeEnrollment(parseInt(sectionInput.value), false);
});

// Functions calls.
setCourseInfo(aCourse);
renderSections(aCourse.sections);
