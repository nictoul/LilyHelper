import { Button } from "react-bootstrap";

export default function GameControls({ handleChange, score }) {
  return (
    <>
      <Button
        variant="primary"
        onClick={() => handleChange({ numberOfTry: 0, numberOfSuccess: 0 })}
      >
        Démarrage
      </Button>
      <br />
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ display: "inline", marginRight: "10px" }}>
          <Button
            variant="outline-danger"
            onClick={() =>
              handleChange({
                numberOfTry: score.numberOfTry + 1,
                numberOfSuccess: score.numberOfSuccess,
              })
            }
          >
            Échec
          </Button>
        </li>
        <li style={{ display: "inline" }}>
          <Button
            variant="outline-success"
            onClick={() =>
              handleChange({
                numberOfTry: score.numberOfTry + 1,
                numberOfSuccess: score.numberOfSuccess + 1,
              })
            }
          >
            Succès
          </Button>
        </li>
      </ul>
    </>
  );
}
