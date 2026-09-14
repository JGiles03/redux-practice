import { Routes, Route } from 'react-router-dom';
import React from 'react';
import * as Pages from './pages';
import  { Header } from './components';

function App(){
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Pages.HomePage />} />
                <Route path="/points" element={<Pages.PointsPage />} />
                <Route path="/letter" element={<Pages.LetterPage />} />
                <Route path="/sortingHat" element={<Pages.SortingHatPage />} />
            </Route>
        </Routes>
    )
};

export default App;