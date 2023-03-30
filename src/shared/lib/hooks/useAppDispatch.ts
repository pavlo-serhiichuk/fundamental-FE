import {AppDispatch} from 'app/providers/StoreProvider'
import {useDispatch} from 'react-redux'

// типизація диспатчу дозволить в майбутньому отримувати потрібні типи
export const useAppDispatch = () => useDispatch<AppDispatch>()
