import { put, call } from 'redux-saga/effects'

import { category, dish } from '../../api/methods/menu'
import { setCategory, setDish } from '../action/menu'
import { error } from '../action/error'

export default function* fetchMenu(action) {
  let cat = yield call(category)
  let dishData = yield call(dish)

  console.log('network response ', cat, dishData)

  if (cat?.status) {
    yield put(
      error({
        error: cat,
        errorMsg: 'Something went wrong while fetching the menu...',
      }),
    )
  } else {
    console.log('setting')
    yield put(setCategory(cat))
  }
  if (dishData?.status) {
    yield put(
      error({
        error: dishData,
        errorMsg: 'Something went wrong while fetching the menu...',
      }),
    )
  } else {
    yield put(setDish(dishData))
  }
}
