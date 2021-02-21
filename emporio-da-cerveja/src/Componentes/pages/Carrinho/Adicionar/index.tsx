import { useDispatch } from "react-redux";

const Adicionar = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: "ADICIONAR" })}>Adicionar</button>
    </div>
  );
};
export default Adicionar;