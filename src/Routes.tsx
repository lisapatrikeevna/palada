import React, { Suspense } from 'react';
import LinearProgress from "@mui/material/LinearProgress";
import { Route, Routes } from 'react-router-dom';
import Home from "./1ui/pages/home/Home";
import Page404 from "./1ui/pages/404/Page404";
import About from "./1ui/pages/about/About";
import Faq from "./1ui/pages/faq/Faq";
import Contacts from "./1ui/pages/contacts/Contacts";
import СitiesList from "./1ui/pages/сitiesList/SityList";
import Price from './1ui/pages/price/Price';


export const PATH={
    HOME:"/",
    ABOUT:"about",
    CITIES:"citiesList",
    CONTACTS:"contacts",
    FAQ:"faq",
    PRICE:"price",
}
const RoutesApp = () => {
    return (
        <Suspense fallback={<LinearProgress />}>
            <Routes>
                <Route path="/" element={<Home/>}>
                {/*<Route path="/" element={<DefaultLayout />}>*/}
                </Route>
                <Route path={PATH.FAQ} element={<Faq/>}/>
                <Route path={PATH.CONTACTS} element={<Contacts/>}/>
                <Route path={PATH.ABOUT} element={<About/>}/>
                <Route path={PATH.CITIES} element={<СitiesList/>}/>
                <Route path={PATH.PRICE} element={<Price/>}/>
                {/*<Route path="/dashboard" element={<AuthLayout />}>*/}
                {/*    <Route index element={<HowItWorks />} />*/}
                {/*    <Route path="contact" element={<Contact />} />*/}
                {/*    <Route path="employers" element={<Employers />} />*/}
                {/*    <Route path="employers/:employersId" element={<Employer />}/>*/}
                {/*    <Route path="profile" element={<ProfileLayout />}>*/}
                {/*        /!*{isEmployer ? (*!/*/}
                {/*        /!*    <Route index element={<EmployerProfile />} />*!/*/}
                {/*        /!*) : (*!/*/}
                {/*        /!*    <Route index element={<PersonalDetails />} />*!/*/}
                {/*        /!*)}*!/*/}
                {/*        <Route path="contact" element={<ContactDetails />} />*/}
                {/*        /!*<Route path="employment" element={<EmploymentDetails />}/>*!/*/}
                {/*        /!*<Route path="emergency" element={<EmergencyContacts />}/>*!/*/}
                {/*        /!*<Route path="financial" element={<FinancialDetails />}/>*!/*/}
                {/*    </Route>*/}
                {/*</Route>*/}
                <Route path="*" element={<Page404 />} />
            </Routes>
        </Suspense>
    );
};

export default RoutesApp;