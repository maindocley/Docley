import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Initialize session and listen for auth changes
    useEffect(() => {
        // Get current session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
            setLoading(false);
        });

        // Subscribe to auth state changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    // Sign up
    const signUp = async (email, password, metadata = {}) => {
        return supabase.auth.signUp({
            email,
            password,
            options: { data: metadata },
        });
    };

    // Sign in
    const signIn = async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            console.error("Supabase Login Error:", error);
        }
        return { data, error };
    };

    // Sign out
    const signOut = async () => {
        return supabase.auth.signOut();
    };

    // Forgot password – send reset email
    const resetPasswordForEmail = async (email) => {
        return supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/reset-password`,
        });
    };

    // Update password (after user clicks reset link and is authenticated)
    const updatePassword = async (newPassword) => {
        return supabase.auth.updateUser({ password: newPassword });
    };

    const value = {
        user,
        signUp,
        signIn,
        signOut,
        resetPasswordForEmail,
        updatePassword,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
