import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/rootReducer/rootReducer';

export const useAppDispatch = () => useDispatch<AppDispatch>();
