import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import App from '../App'

const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
}

vi.stubGlobal('localStorage', localStorageMock)
vi.stubGlobal('crypto', { randomUUID: vi.fn(() => 'cart-2') })

describe('App', () => {
    beforeEach(() => {
        localStorageMock.getItem.mockReset()
        localStorageMock.setItem.mockReset()
        localStorageMock.getItem.mockReturnValue(null)
        window.history.pushState({}, '', '/')
    })

    test('renders the home page', () => {
        render(<App />)

        expect(
            screen.getByRole('heading', { name: 'Make every sip a ritual' })
        ).toBeInTheDocument()
    })

    test('loads saved cart items from localStorage', () => {
        const savedItem = {
            id: 1,
            cartId: 'cart-1',
            name: 'Imperial Leather Mate',
            price: 64.99,
        }

        localStorageMock.getItem.mockReturnValue(JSON.stringify([savedItem]))
        window.history.pushState({}, '', '/cart')

        render(<App />)

        expect(localStorageMock.getItem).toHaveBeenCalledWith(
            'tomate-un-mate-cart'
        )
        expect(screen.getByText('Imperial Leather Mate')).toBeInTheDocument()
    })
    test('saves the cart after removing an item', async () => {
        const savedItem = {
            id: 1,
            cartId: 'cart-1',
            name: 'Imperial Leather Mate',
            price: 64.99,
        }

        localStorageMock.getItem.mockReturnValue(JSON.stringify([savedItem]))
        window.history.pushState({}, '', '/cart')

        render(<App />)

        fireEvent.click(screen.getByRole('button', { name: 'Remove' }))

        expect(screen.getByText('Your cart is empty.')).toBeInTheDocument()

        await waitFor(() => {
            expect(localStorageMock.setItem).toHaveBeenLastCalledWith(
                'tomate-un-mate-cart',
                '[]'
            )
        })
    })
    test('adds a product to the cart and saves it', async () => {
        window.history.pushState({}, '', '/products')

        render(<App />)

        fireEvent.click(
            screen.getAllByRole('button', { name: 'Add to cart' })[0]
        )

        const cartLink = screen.getByRole('link', { name: 'Cart, 1 item' })
        expect(cartLink).toBeInTheDocument()

        fireEvent.click(cartLink)
        expect(screen.getByText('Imperial Leather Mate')).toBeInTheDocument()

        await waitFor(() => {
            expect(localStorageMock.setItem).toHaveBeenLastCalledWith(
                'tomate-un-mate-cart',
                expect.stringContaining('"cartId":"cart-2"')
            )
        })
    })
    test('shows an empty cart when saved data is invalid', () => {
        localStorageMock.getItem.mockReturnValue('invalid JSON')
        window.history.pushState({}, '', '/cart')

        render(<App />)

        expect(screen.getByText('Your cart is empty.')).toBeInTheDocument()
    })
    test('restores the cart after the app is opened again', async () => {
        let savedCart = null

        localStorageMock.getItem.mockImplementation(() => savedCart)
        localStorageMock.setItem.mockImplementation((key, value) => {
            savedCart = value
        })

        window.history.pushState({}, '', '/products')
        const { unmount } = render(<App />)

        fireEvent.click(
            screen.getAllByRole('button', { name: 'Add to cart' })[0]
        )

        await waitFor(() => {
            expect(savedCart).toContain('"cartId":"cart-2"')
        })

        unmount()
        window.history.pushState({}, '', '/cart')
        render(<App />)

        expect(screen.getByText('Imperial Leather Mate')).toBeInTheDocument()
    })
})