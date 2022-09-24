import { put, call, takeLatest, select } from "redux-saga/effects";
import { all } from "redux-saga/effects";
import * as BrandActions from "./BrandReducer";

function* getSettings({ payload }) {
  try {
    const response = yield call(getBrandSetting, payload);
    console.log({ response });
    if (response?.success === 1) {
      yield put(BrandActions.getBrandSettingsSuccess(response.data));
    } else {
      yield put(BrandActions.getBrandSettingsFailure(response.error));
    }
  } catch (error) {
    yield put(BrandActions.getBrandSettingsFailure(error));
  }
}
const baseUrl = process.env.REACT_APP_BASE_API_URL;

const getBrandSetting = (payload) => {
  console.log({ payload });
  const data = fetch(baseUrl + "branding/getBrandSettings", {
    method: "POST",
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return data;
};
function* brandSaga() {
  yield takeLatest(BrandActions.getBrandSettings.type, getSettings);
}

function* rootSaga() {
  yield all([brandSaga()]);
}
export default rootSaga;
