import { all } from 'redux-saga/effects';
import { jasonPlaceHolderSaga} from './jasonPlaceHolderSaga';

export default function* rootSaga() {
    yield all([
        ...jasonPlaceHolderSaga(),
    ]);
}
