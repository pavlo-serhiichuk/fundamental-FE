import {classNames} from './classNames'

describe('classNames with', () => {
  test('first arg', () => {
    expect(classNames('className')).toBe("className")
  })

  test('first and second args', () => {
    expect(classNames('className', {selected: true})).toBe("className selected")
  })

  test('all args', () => {
    expect(classNames('className', {selected: true}, ['class1', 'class2']))
      .toBe("className class1 class2 selected")
  })
})