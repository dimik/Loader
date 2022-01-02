/**
 * @jest-environment jsdom
 */

import {
  getByTestId,
  waitFor,
} from '@testing-library/dom'
// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom'
import App from '..'
const app = new App()

describe('App root', () => {
  it('should match snapshot', () => {
    const container = app.render()
    expect(container.innerHTML).toBe('blah')
  })
})
