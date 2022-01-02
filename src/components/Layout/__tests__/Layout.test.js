/**
 * @jest-environment jsdom
 */

import {getByTestId} from '@testing-library/dom'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import Layout from '..'

describe('Layout', () => {
  it('should render Chat Fab', () => {
    const layout = new Layout()
    expect(getByTestId(layout.render(), 'chat-fab')).toBeTruthy()
  })
})
