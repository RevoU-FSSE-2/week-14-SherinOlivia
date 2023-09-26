import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '../../../matchMedia';
import Login from '.';


describe('Test Login Form', () => {
    const mockProps = jest.fn();
    it('Login Title Renders Correctly',async () => {
        render(<BrowserRouter>
                <Login onSubmit={mockProps} />
                </BrowserRouter>)
        const title = screen.getByText('Login')
        expect(title).toBeDefined()       
    })
})