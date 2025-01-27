export default function GameInput({ input, setInput }) {
  return (
    <>
      <input
        type="text"
        placeholder="Écrivez des lettres/mots séparés par des virgules"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
    </>
  );
}
