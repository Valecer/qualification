import {render} from '@testing-library/react';
import App from '../App';
import React from 'react';

test('renders main page', () => {
    const element = render (<App/>);
    const linkElement = element.getByText(/WildFire/i);
    expect(linkElement).toBeInTheDocument;
});
