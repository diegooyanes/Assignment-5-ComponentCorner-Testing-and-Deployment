import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import HomePage from '../HomePage'

describe('HomePage', () => {
    test('renders the main content', () => {
        render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        )

        expect(
            screen.getByRole('heading', { name: 'Make every sip a ritual' })
        ).toBeInTheDocument()

        expect(
            screen.getByRole('heading', { name: 'A ritual meant to be shared' })
        ).toBeInTheDocument()
    })

    test('links to the products page', () => {
        render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        )

        expect(
            screen.getByRole('link', { name: 'Explore the collection' })
        ).toHaveAttribute('href', '/products')
    })
})