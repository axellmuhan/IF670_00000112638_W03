import { useDispatch } from 'react-redux';
import type { AppDispatch } from './store';

// useAppDispatch is a custom hook that wraps the useDispatch hook from react-redux.
// It provides the correct type for the dispatch function, which is AppDispatch.
export const useAppDispatch = () => useDispatch<AppDispatch>();