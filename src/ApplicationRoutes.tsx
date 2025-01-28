import { FC, JSX } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layouts/Layout';

import Home from './pages/home/Home';
import SimpleForm from './pages/forms/SimpleForm';


const ApplicationRouter: FC = (): JSX.Element => {

    return (
        <Router>
            <Layout>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/simple-form/new' element={<SimpleForm />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default ApplicationRouter;