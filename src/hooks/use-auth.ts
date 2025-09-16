"use client";

import { useState, useEffect } from 'react';

// Mock user data. In a real app, this would come from an API/context after login.
const mockUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: 'https://picsum.photos/seed/user-avatar/100/100',
    fallback: 'JD',
};

// This is a mock authentication hook.
// Set isAuthenticated to true to simulate a logged-in user.
// In a real Firebase app, you would use `onAuthStateChanged` to get the real user.
const isAuthenticated = false;

export function useAuth() {
    const [user, setUser] = useState<typeof mockUser | null>(null);

    useEffect(() => {
        if (isAuthenticated) {
            setUser(mockUser);
        } else {
            setUser(null);
        }
    }, []);

    return { user };
}
