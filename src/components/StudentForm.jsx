import React, { useState } from "react";
import "./StudentForm.css";

function StudentForm({ onSubmit }) {
  const [student, setStudent] = useState({
    name: "",
    department: "",
    cgpa: "",
    backlogs: "",
    skills: ""
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...student,
      skills: student.skills.split(",").map(skill => skill.trim())
    });
  };

  return (
    <div className="form-wrapper">
      <form className="student-form-advanced" onSubmit={handleSubmit}>
        <h2>🎓 Placement Eligibility Checker</h2>

        <div className="form-grid">

          <div className="form-field">
            <input name="name" required onChange={handleChange} />
            <label>Student Name</label>
          </div>

          <div className="form-field">
            <select name="department" required onChange={handleChange}>
              <option value=""></option>
              <option>CSE</option>
              <option>IT</option>
              <option>ECE</option>
              <option>EEE</option>
            </select>
            <label>Department</label>
          </div>

          <div className="form-field">
            <input type="number" step="0.1" name="cgpa" required onChange={handleChange} />
            <label>CGPA</label>
          </div>

          <div className="form-field">
            <input type="number" name="backlogs" required onChange={handleChange} />
            <label>Backlogs</label>
          </div>

          <div className="form-field full-width">
            <input name="skills" placeholder="Java, SQL, React" required onChange={handleChange} />
            <label>Technical Skills</label>
          </div>

        </div>

        <button className="submit-btn">Check Eligibility</button>
      </form>
    </div>
  );
}

export default StudentForm;
