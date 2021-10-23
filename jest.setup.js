/* eslint-disable no-undef */
import '@testing-library/jest-native/extend-expect'
import mockedAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'

jest.mock('@react-native-async-storage/async-storage', () => mockedAsyncStorage)

jest.mock('redux-persist', () => ({
  ...jest.requireActual('redux-persist'),
  persistReducer: (_, reducers) => reducers
}))
