import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  decProductQuantity,
  getQuantityById,
  incProductQuantity,
} from "./cartSlice";

function UpdateItemQuantity({ id }) {
  const dispatch = useDispatch();
  const itemQuantity = useSelector(getQuantityById(id));

  return (
    <div className="space-x-4">
      <Button type="round" onClick={() => dispatch(decProductQuantity(id))}>
        -
      </Button>
      <span className="text-sm font-semibold">{itemQuantity}</span>
      <Button type="round" onClick={() => dispatch(incProductQuantity(id))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
