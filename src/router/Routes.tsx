import { Routes as ReactRoutes, Route } from 'react-router-dom';
import MainPage from '../pages/landing';
const Routes = (): JSX.Element => {
    return (
        <>
            <ReactRoutes>
                <Route path='/' element={<MainPage />} />
            </ReactRoutes>
        </>
    )
}
export default Routes;