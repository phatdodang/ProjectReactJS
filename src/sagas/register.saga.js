import { call, put } from 'redux-saga/effects';
import * as action from '../actions/index';
import { registerSuccess,registerError } from '../actions/index';



export function* registerUsersRequest(action) {
    try {
        const response = yield call("......link", action.payload)
        yield put(registerSuccess(response));
        return;
    } catch (errors) {
        const result = {
            status: 400,
            message: "email or password have been used"

        }
        yield put(registerError(result));
    }
}