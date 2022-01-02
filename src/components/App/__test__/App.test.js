/**
 * @jest-environment jsdom
 */
import {
  getByTestId,
  waitFor,
} from '@testing-library/dom'
import '@testing-library/jest-dom'
import App from '..'

async function mockFetch(url, config) {
  return {
    ok: true,
    status: 200,
    json: async () => ([]),
  }
}

describe('App root', () => {
  beforeAll(() => jest.spyOn(globalThis, 'fetch'))
  beforeEach(() => globalThis.fetch.mockImplementation(mockFetch))
  it('should call fetch with netology url', () => {
    const app = new App()
    app.render()
    expect(globalThis.fetch).toBeCalledWith(process.env.NETOLOGY_URL)
  })
  it('should render layout', () => {
    const app = new App()
    expect(getByTestId(app.render(), 'layout')).toBeTruthy()
  })
})
