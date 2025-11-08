import { useSelector, type TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../types/RootState";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
