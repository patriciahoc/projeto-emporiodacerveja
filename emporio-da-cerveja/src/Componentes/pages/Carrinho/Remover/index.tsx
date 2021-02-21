import { useDispatch } from "react-redux";

const Remover = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: "REMOVER" })}>Remover</button>
    </div>
  );
};
export default Remover;