import { Routes as ReactRoutes, Route } from 'react-router-dom';
import MainPage from '../pages/landing';
import TermAndConditions from '../pages/termandconditions/TermAndConditions';
import PrivacyPolicy from '../pages/privacyPolicy/PrivacyPolicy';
import Layout from '../components/layouts/Layout';
const Routes = (): JSX.Element => {
    return (
        <>
            <ReactRoutes>
                <Route element={<Layout />}>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/termandcondition' element={<TermAndConditions />}></Route>
                    <Route path='/privacypolicy' element={<PrivacyPolicy />}></Route>
                </Route>
            </ReactRoutes>
        </>
    )
}
export default Routes;