'use client'

import { signOut } from "next-auth/react";
import { LogOut } from 'lucide-react';

export default function AdminLogoutButton() {
    const handleLogout = () => {
        signOut({ callbackUrl: '/admin/login' });
    };

    return (
        <button
            type="button"
            onClick={handleLogout}
            className="absolute top-2 right-2 flex items-center gap-2 bg-red-500 text-white px-2 py-2 rounded-md shadow hover:bg-red-700 transition-colors cursor-pointer"
            aria-label="Logout"
            title="Logout"
        >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
        </button>
    );
}
