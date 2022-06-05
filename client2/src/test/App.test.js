import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../App';
import React from 'react';

test('renders main page', () => {
    const element = render (<App/>);
    const linkElement = element.getByText(/WildFire/i);
    expect(linkElement).toBeInTheDocument;
});
