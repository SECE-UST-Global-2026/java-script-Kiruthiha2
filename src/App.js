import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import CompanyList from "./components/CompanyList";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [student, setStudent] = useState(null);
  const [result, setResult] = useState([]);

  return (
    <div className="container">
      <h1>Placement Eligibility Checker</h1>

      <StudentForm onSubmit={setStudent} />

      {student && <CompanyList student={student} setResult={setResult} />}

      {result.length > 0 && <Result result={result} />}
    </div>
  );
}

export default App;
