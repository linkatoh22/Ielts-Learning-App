import { ProgressCircle } from "./ProgressCircle";
import { Check } from "lucide-react";

export function QuizResultBadge({ correctAnswers, totalQuestions, size = 150 }) {
  const progress = (correctAnswers / totalQuestions) * 100;

  return (
    <ProgressCircle
      progress={progress}
      size={size}
      backgroundColor="#e5e7eb"
      progressColor="#16a34a"
      style={{
        backgroundColor: "white",
        borderRadius: "9999px",
        boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
        border: "1px solid #e5e7eb",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "0.25rem", // mb-1
          }}
        >
          <Check style={{ width: "1rem", height: "1rem", color: "#16a34a" }} /> {/* text-green-600 */}
        </div>
        <div style={{ fontSize: "0.75rem", color: "#4b5563", fontWeight: 500 }}>
          Đáp án đúng
        </div>
        <div style={{ fontSize: "0.875rem", fontWeight: "bold", color: "#1f2937" }}>
          {correctAnswers}/{totalQuestions}
        </div>
      </div>
    </ProgressCircle>
  );
}
