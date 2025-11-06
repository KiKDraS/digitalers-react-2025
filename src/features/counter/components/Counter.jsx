import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../components/Button/Button";
import { decrement, increment, incrementAsync } from "../slice";

export const Counter = () => {
  const counterState = useSelector((store) => store.counter);
  const { value, status } = counterState;
  const isLoading = status === "loading";
  const dispatch = useDispatch();

  return (
    <>
      <div className="d-flex align-items-center justify-content-between gap-2 my-3 p-4">
        <div className="w-50 d-flex align-items-center gap-2">
          <span className="fs-4 me-3">Contador: {value}</span>
          <span
            className={`badge ${
              isLoading ? "bg-warning text-dark" : "bg-info text-dark"
            }`}
          >
            {status}
          </span>
        </div>
        <div className="w-50 d-flex align-items-center gap-2">
          <Button
            color="success"
            text="+1"
            onClick={() => dispatch(increment())}
          />
          <Button
            color="secondary"
            text="-1"
            onClick={() => dispatch(decrement(1))}
          />
        </div>
      </div>
      <div className="mt-3 p-4">
        <Button
          color="primary"
          text="Añadir asíncrono (+1)"
          onClick={() => dispatch(incrementAsync(1))}
          disabled={isLoading}
        />
      </div>
    </>
  );
};
