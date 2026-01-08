import React from "react";
import companies from "../data/companies";

function CompanyList({ student, setResult }) {
  const checkEligibility = (company) => {
    if (student.cgpa < company.minCGPA)
      return "Not Eligible: Low CGPA";

    if (student.backlogs > company.maxBacklogs)
      return "Not Eligible: Too many backlogs";

    if (!company.departments.includes(student.department))
      return "Not Eligible: Department not allowed";

    const hasSkills = company.skills.some(skill =>
      student.skills.includes(skill)
    );

    if (!hasSkills)
      return "Not Eligible: Required skills missing";

    return "Eligible";
  };

  const handleCheck = () => {
    const results = companies.map(company => ({
      name: company.name,
      status: checkEligibility(company)
    }));
    setResult(results);
  };

  return (
    <button onClick={handleCheck}>
      Check Companies
    </button>
  );
}

export default CompanyList;
