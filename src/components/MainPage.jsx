import React, { useState } from 'react'
import Header from './Header'
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'
import Reading from './pages/Reading';
import Writing from './pages/Writing';
import Grammar from './pages/Grammar';

export default function MainPage() {
    const navigate = useNavigate();
  return (
    <>
        <Header navigate={navigate}></Header>
        <Outlet></Outlet>
    </>
  )
}
