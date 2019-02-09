import { put, call, takeLatest } from 'redux-saga/effects';

import { GET_JASONPLACEHOLDER_REQUEST } from '../actions/types';
import { getJasonPlaceHolderSuccess, getJasonPlaceHolderFailed } from '../actions/jasonPlaceHolder';
import { getJasonPlaceHolderService } from '../services/jasonPlaceHolderService';


//// NOTES: Using the spread function
export function* getJasonPlaceHolderSaga(action) {
    try {
        // NOTES: Example of passing variables
        // const response = yield call(getJasonPlaceHolder, action.parm1, action.parm2);
        const response = yield call(getJasonPlaceHolderService);
        const data = yield response.json();
        yield put(getJasonPlaceHolderSuccess(data));
    } catch (error) {
        yield put(getJasonPlaceHolderFailed(error));
    }
}


// export function* addPlaceSaga(action) {
//     try {
//         const response = yield call(addPlace, action.place);
//         const newPlace = yield response.json();
//         if (response.status !== 200) {
//             yield put(addPlaceFailed(newPlace.message));
//         }
//         else {
//             action.cb();
//             yield put(addPlaceSuccess(newPlace));
//         }
//     } catch (error) {
//         yield put(addPlaceFailed(error));

//     }
// }

// export function* deletePlaceSaga(action) {
//     try {
//         const response = yield call(deletePlace, action.name);
//         const deletedPlace = yield response.json();
//         yield put(deletePlaceSuccess(deletedPlace.place));
//     } catch (error) {
//         yield put(deletePlaceFailed(error));
//     }
// }


export function jasonPlaceHolderSaga() {
    return [
        takeLatest(GET_JASONPLACEHOLDER_REQUEST, getJasonPlaceHolderSaga),
    ];
}
