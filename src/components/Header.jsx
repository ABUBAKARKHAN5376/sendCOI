'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa"; // for dropdown arrow

export default function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [sidebarDropdown, setSidebarDropdown] = useState(null);

    const menuItems = [
        { label: 'Coverage', id: 'coverage', links: ['Plans', 'Regions'] },
        { label: 'Resources', id: 'resources', links: ['Blog', 'Guides'] },
        { label: 'Partner with us', id: 'partner', links: ['Affiliates', 'Agencies'] },
        { label: 'About us', id: null },
        { label: 'Support', id: 'support', links: ['Contact', 'FAQ'] },
    ];

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('[data-dropdown-button]') && !e.target.closest('.dropdown-menu')) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isSidebarOpen]);

    const toggleDropdown = (menu) => {
        setOpenDropdown((prev) => (prev === menu ? null : menu));
    };

    const toggleSidebarDropdown = (id) => {
        setSidebarDropdown((prev) => (prev === id ? null : id));
    };

    return (
        <header>
            <nav className="container mx-auto px-10 max-[475px]:px-4 max-[475px]:py-4 py-6 flex items-center justify-between relative">
                {/* Logo */}
                <div>
                    <img className='h-10 max-2xl:h-9 max-lg:h-7'  loading="lazy" src="/images/logo.svg" alt="Logo" />
                </div>

                {/* Desktop Menu */}
                <ul className="flex gap-12 max-2xl:gap-9 max-xl:gap-5 text-lg max-2xl:text-base max-lg:hidden text-[#1a1a1a] font-medium relative z-10">
                    {menuItems.map((item) =>
                        item.id ? (
                            <li key={item.id} className="relative cursor-pointer">
                                <button
                                    onClick={() => toggleDropdown(item.id)}
                                    data-dropdown-button
                                    className="flex items-center gap-1 cursor-pointer"
                                >
                                    {item.label} <img loading="lazy" className='h-6 max-2xl:h-5' src='/images/dd_arrow.svg' alt="" />
                                </button>
                                {openDropdown === item.id && (
                                    <div className="dropdown-menu absolute mt-2 w-48 bg-white border rounded shadow">
                                        {item.links.map((link) => (
                                            <a key={link} href="#" className="block px-4 py-2 hover:bg-gray-100">
                                                {link}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ) : (
                            <li key={item.label} className="cursor-pointer">{item.label}</li>
                        )
                    )}
                </ul>

                {/* Sign In + Mobile Menu Toggle */}
                <div className='flex items-center gap-2'>
                    <Link href="/" className="text-base leading-none px-7 py-4.5 font-bold text-white bg-[#00B0F0] max-2xl:py-4 max-2xl:px-5.5 max-lg:text-[15px] max-lg:py-3 max-lg:px-4.5 rounded-full hover:bg-[#009ed8] transition">
                        Sign In
                    </Link>
                    <div className='text-xl hidden max-lg:block cursor-pointer' onClick={() => setIsSidebarOpen(true)}>
                        <FaBars />
                    </div>
                </div>
            </nav>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-[#0000002f] z-40" onClick={() => setIsSidebarOpen(false)}></div>
            )}

            {/* Sidebar */}
            <div className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-5">
                    <button className="text-gray-600 mb-5" onClick={() => setIsSidebarOpen(false)}>Close ✖</button>
                    <ul className="flex flex-col gap-4 text-lg text-[#1a1a1a] font-medium">
                        {menuItems.map((item) =>
                            item.id ? (
                                <li key={item.id}>
                                    <button
                                        className="flex justify-between w-full items-center"
                                        onClick={() => toggleSidebarDropdown(item.id)}
                                    >
                                        {item.label}
                                        <FaChevronDown className={`transition-transform duration-200 ${sidebarDropdown === item.id ? 'rotate-180' : ''}`} />
                                    </button>
                                    {sidebarDropdown === item.id && (
                                        <ul className="pl-4 mt-2 space-y-2">
                                            {item.links.map((link) => (
                                                <li key={link}>
                                                    <a href="#" className="block text-sm text-gray-700 hover:text-black">
                                                        {link}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ) : (
                                <li key={item.label}>
                                    <a href="#" className="block">
                                        {item.label}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </header>
    );
}
