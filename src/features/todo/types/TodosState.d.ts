import type { StatusType } from "../constants/STATUS";

interface TodosState {
  todos: Todo[];
  status: StatusType; // STATUS.IDLE | STATUS.PENDING | STATUS.FULFILLED | STATUS.REJECTED
  error: string | null; //type union (dos o más tipos de datos pueden almacenarse en el mismo key/variable)
}

//status === "pending" ? showLoader() : hideLoader()
