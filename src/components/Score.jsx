export default function Score({ score }) {
  return (
    <>
      {score.userEntry && (
        <h2 style={{ fontSize: "200px", color: "purple" }}>
          {score.userEntry}
        </h2>
      )}
      <h1>
        Pointage: {score.numberOfSuccess}/{score.numberOfTry}(
        {score.numberOfTry == 0
          ? 0
          : ((score.numberOfSuccess / score.numberOfTry) * 100).toFixed(0)}
        %)
      </h1>
    </>
  );
}
