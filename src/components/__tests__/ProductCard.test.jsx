import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'
import ProductCard from '../ProductCard'

const product = {
    id: 1,
    name: 'Imperial Leather Mate',
    price: 64.99,
    image: '/products/mate.jpg',
    description: 'A handcrafted mate cup',
}

function renderProductCard(onAddToCart = vi.fn()) {
    render(
        <MemoryRouter>
            <ProductCard
                product={product}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
                onAddToCart={onAddToCart}
            />
        </MemoryRouter>
    )
}

describe('ProductCard', () => {
    test('shows product information and the add button', () => {
        renderProductCard()

        expect(screen.getByText(product.name)).toBeInTheDocument()
        expect(screen.getByText('$64.99')).toBeInTheDocument()
        expect(screen.getByText(product.description)).toBeInTheDocument()
        expect(screen.getByRole('img', { name: product.name })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: 'Add to cart' })).toBeInTheDocument()
    })

    test('passes the product when the add button is clicked', async () => {
        const onAddToCart = vi.fn()
        renderProductCard(onAddToCart)

        await userEvent.click(screen.getByRole('button', { name: 'Add to cart' }))

        expect(onAddToCart).toHaveBeenCalledWith(product)
    })
})