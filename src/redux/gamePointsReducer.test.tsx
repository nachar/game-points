import reducer, { addItem, resetGame } from './gamePointsReducer'

test('Adding item', () => {
  const currentItem = 'C'
  const result = reducer(undefined, addItem(currentItem))

  const selectedItem = result.scoreboard.find(item => item.name === currentItem)

  expect(selectedItem?.total).toBe(selectedItem?.unitPoints)
})

test('adding items with bonuses', () => {
  const currentItem = 'A'
  let result = reducer(undefined, addItem(currentItem))
  result = reducer(result, addItem(currentItem))
  result = reducer(result, addItem(currentItem))
  const selectedItem = result.scoreboard.find(item => item.name === currentItem)

  expect(selectedItem?.total).toBe(0)
  expect(selectedItem?.bonus?.total).toBe(selectedItem?.bonus?.points)
})

test('reset application', () => {
  const currentItem = 'B'
  let result = reducer(undefined, addItem(currentItem))
  let selectedItem = result.scoreboard.find(item => item.name === currentItem)

  expect(selectedItem?.total).toBe(selectedItem?.unitPoints)

  result = reducer(result, resetGame())
  selectedItem = result.scoreboard.find(item => item.name === currentItem)
  expect(selectedItem?.total).toBe(0)
})
