import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { removeProduct } from "./cartSlice";

function DeleteItem({ id }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(removeProduct(id))}>
      {" "}
      Delete
    </Button>
  );
}

export default DeleteItem;
