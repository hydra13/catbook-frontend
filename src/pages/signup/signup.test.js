import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import { render } from '@testing-library/react';
import {SignUp} from './signup';

describe('SignUp:', () => {
    describe('render:', () => {
        test('should has Name field title', () => {
            const { getByText } = render(<SignUp/>, {wrapper: MemoryRouter});
            const title = getByText('Name');
    
            expect(title).toBeInTheDocument();
        });
    
        test('should has Name field input', () => {
            const { getByPlaceholderText } = render(<SignUp/>, {wrapper: MemoryRouter});
            const input = getByPlaceholderText('Cat\'s name');
    
            expect(input).toBeInTheDocument();
        })
        
        test('should has Login field title', () => {
            const { getByText } = render(<SignUp/>, {wrapper: MemoryRouter});
            const title = getByText('Username');
    
            expect(title).toBeInTheDocument();
        });
    
        test('should has Login field input', () => {
            const { getByPlaceholderText } = render(<SignUp/>, {wrapper: MemoryRouter});
            const input = getByPlaceholderText('Login');
    
            expect(input).toBeInTheDocument();
        })

        test('should has Email field title', () => {
            const { getByText } = render(<SignUp/>, {wrapper: MemoryRouter});
            const title = getByText('Email');
    
            expect(title).toBeInTheDocument();
        });
    
        test('should has Email field input', () => {
            const { getByPlaceholderText } = render(<SignUp/>, {wrapper: MemoryRouter});
            const input = getByPlaceholderText('Email');
    
            expect(input).toBeInTheDocument();
        })

        test('should has Password field title', () => {
            const { getByText } = render(<SignUp/>, {wrapper: MemoryRouter});
            const title = getByText('Password');
    
            expect(title).toBeInTheDocument();
        });
    
        test('should has Password field input', () => {
            const { getByPlaceholderText } = render(<SignUp/>, {wrapper: MemoryRouter});
            const input = getByPlaceholderText('Password');
    
            expect(input).toBeInTheDocument();
        })
    })
    

});
