import React from "react";
import "./Result.css";

function Result({ result }) {
  return (
    <div className="result-wrapper">
      <h2 className="result-title">📊 Eligibility Results</h2>

      <div className="result-grid">
        {result.map((res, index) => {
          const isEligible = res.status === "Eligible";

          return (
            <div
              key={index}
              className={`result-card ${isEligible ? "eligible" : "not-eligible"}`}
            >
              <h3>{res.name}</h3>

              <p className="status">
                {isEligible ? "✅ Eligible" : "❌ Not Eligible"}
              </p>

              {!isEligible && (
                <p className="reason">{res.status.replace("Not Eligible:", "")}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Result;
