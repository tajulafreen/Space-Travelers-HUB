import { render, screen, waitFor } from '@testing-library/react';
import Header from '../components/header/Header.jsx';
import { BrowserRouter } from 'react-router-dom';

const links = [
    {
        id: 3,
        path: '/',
        navigationContent: "Rockets"
    },
    {
        id: 2,
        path: '/missions',
        navigationContent: "Missions"
    },
    {
        id: 1,
        path: '/profile',
        navigationContent: "My Profile",
    },
];

const AppMock = () => {
    return (
        <BrowserRouter>
            <Header links={links} />
        </BrowserRouter>
    )
}

describe("test header", () => {
    it("should render all links", async () => {
        render(<AppMock />)

        await waitFor(() => {
            const element = screen.getByRole("list");
            expect(element.children.length).toBe(links.length);
        });

    })
})
