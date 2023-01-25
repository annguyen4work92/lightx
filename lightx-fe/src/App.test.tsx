import { cleanup, render, renderHook, screen, waitFor } from '@testing-library/react'
import { useUserFetcher } from 'hooks/api-fetch/useUserFetcher'
import ListUserPage from 'pages/list-user'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import App from './App'

afterAll(cleanup);
// beforeEach(() => console.log('Start a test'));

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

test('renders learn react link', () => {
  act(() => {
    render(<App />)
  })
  const linkElement = screen.getByText(/Here is the header/i)
  expect(linkElement).toBeInTheDocument()

  const id = screen.getByTestId('testid'); // data-testid
  expect(id).toBeInTheDocument()
  expect(id).toBeEnabled();
  const disabledInput = screen.getByTestId('disabled-input'); // data-testid
  expect(disabledInput).toBeInTheDocument()
  expect(disabledInput).toBeInTheDocument()
  expect(disabledInput).toBeDisabled(); // Check item is enabled.
})

test('App snapshot', async () => {
  const appRenderer = await act(() => renderer.create(<ListUserPage />));
  const { result } = renderHook(() => useUserFetcher());
  await waitFor(async () => {
    await sleep(3000);
    expect(appRenderer.toJSON()).toMatchSnapshot()
    expect(result.current.dataSource).toMatchSnapshot();
  }, {timeout: 4000})
})

test('renders learn react Button', () => {
  act(() => {
    render(<App />)
  })
  const ButtonElement = screen.getByText(/Hehes/i)
  expect(ButtonElement).toBeInTheDocument()
})

test('renders data', async () => {
  act(() => {
    render(<ListUserPage />)
  })
  await waitFor(() => {
    const ButtonElement = screen.getByText(/"userId":/i)
    expect(ButtonElement).toBeInTheDocument()
  })
})
