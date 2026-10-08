import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import CartItem from '../CartItem'

const item = {
    cartId: 'cart-1',
    name: 'Imperial Leather Mate',
    price: 64.99,
    quantity: 2,
}

describe('CartItem', () => {
    test('shows the item name, quantity, and price', () => {
        render(<CartItem item={item} onRemoveFromCart={vi.fn()} />)

        expect(screen.getByText('Imperial Leather Mate')).toBeInTheDocument()
        expect(screen.getByText('Quantity: 2')).toBeInTheDocument()
        expect(screen.getByText('$64.99')).toBeInTheDocument()
    })

    test('shows quantity one when no quantity is provided', () => {
        const itemWithoutQuantity = { ...item, quantity: undefined }

        render(
            <CartItem item={itemWithoutQuantity} onRemoveFromCart={vi.fn()} />
        )

        expect(screen.getByText('Quantity: 1')).toBeInTheDocument()
    })

    test('passes the cart ID when Remove is clicked', () => {
        const onRemoveFromCart = vi.fn()
        render(<CartItem item={item} onRemoveFromCart={onRemoveFromCart} />)

        fireEvent.click(screen.getByRole('button', { name: 'Remove' }))

        expect(onRemoveFromCart).toHaveBeenCalledWith('cart-1')
    })
})