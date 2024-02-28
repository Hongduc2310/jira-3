import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "../../redux/store/store";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../../redux/store/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
