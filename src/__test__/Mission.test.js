import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Mission from '../components/missions/mission';
import store from '../redux/store'

const MockComponent = () => {
    return (
        <Provider store={store} >
            <Mission />
        </Provider>
    )
}
describe("missions", () => {
    it("mission table shiuld not be empty", async () => {
        render(<MockComponent />)
        await waitFor(() => {
            const table = screen.getByRole("table");
            const tableColumn = table.getElementsByTagName("td");

            expect(tableColumn).toBeTruthy
        })

    })

})
