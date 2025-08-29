import { ProgressCircle } from "./ProgressCircle";

export function ScoreCircle({ score, maxScore, size = 150 }) {
  const progress = (score / maxScore) * 100;

  return (
    <ProgressCircle
      progress={progress}
      size={size}
      backgroundColor="rgba(16, 185, 129, 0.2)"
      progressColor="#16a34a"
      className="bg-green-100 rounded-full"
    >
      <div className="text-center">
        <div className="text-2xl font-bold text-green-700">{score}</div>
      </div>
    </ProgressCircle>
  );
}
