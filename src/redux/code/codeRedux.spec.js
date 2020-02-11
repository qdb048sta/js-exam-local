import codeReducer from './reducer';
import * as action from './actions';

describe('test code redux', () => {
  const initialState = {
    rawCode: '',
    compiledCode: '',
  };

  const testState = {
    rawCode: 'raw code',
    compiledCode: 'compiled code',
  };

  it('should show original state', () => {
    const result = codeReducer(undefined, {});
    expect(result).toEqual(initialState);
  });

  it('should add new code when code change', () => {
    const result = codeReducer(initialState, action.changeCode(testState));
    expect(result).toEqual(testState);
  });

  it('should show previous state when no code data', () => {
    const result = codeReducer(testState, action.changeCode({}));
    expect(result).toEqual(testState);
  });

  it('should show initialState when code reset', () => {
    const result = codeReducer(testState, action.resetCode());
    expect(result).toEqual(initialState);
  });
});
