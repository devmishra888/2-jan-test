let studentTableBody = document.getElementById("studentTableBody");
let addStudentButton = document.getElementById("addstudents");
let searchInput = document.getElementById("search");

let students = [], currentId = 1;

addStudentButton.onclick = () => {
 let name = document.getElementById("name").value.trim();
 let age = document.getElementById("age").value.trim();
 let email = document.getElementById("email").value.trim();
 let grade = document.getElementById("grade").value.trim();
 let degree = document.getElementById("degree").value.trim();

  if ([name, age, email, grade, degree].includes("")) return alert("All fields are required!");

  students.push({ id: currentId++, name, age, email, grade, degree });
  document.querySelectorAll(".form input").forEach(input => input.value = "");
  render();
};

let render = (filter = "") => {
  studentTableBody.innerHTML = students
    .filter(({ name, email, degree }) => `${name} ${email} ${degree}`.toLowerCase().includes(filter.toLowerCase()))
    .map(({ id, name, email, age, grade, degree }) => `
      <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${age}</td>
        <td>${grade}</td>
        <td>${degree}</td>
        <td>
          <button onclick="edit(${id})">Edit</button>
          <button onclick="remove(${id})">Delete</button>
        </td>
      </tr>`).join("");
};