'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const router = useRouter()
    // Form state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)

    // Handle form submission
    async function handleLogin(e) {
        e.preventDefault()
        // Reset messages
        setError(null)
        setMessage(null)
        setLoading(true)
        try {
        // Attempt to sign in (avoid shadowing `error` state)
        const { error: signInError } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        if (signInError) throw signInError
        // Success! Redirect to admin dashboard
        setMessage('Login successful! Redirecting...')
        setTimeout(() => {
            router.push('/admin')
        }, 1000)
        } catch (err) {
        setError(err?.message || String(err))
        } finally {
        setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
            {/* Login Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 11a3 3 0 100-6 3 3 0 000 6z" />
                    <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 21v-2a7 7 0 0114 0v2" />
                </svg>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h1>
                <p className="text-gray-600">Sign in to access your dashboard</p>
            </div>

            {/* Alert Messages */}
            {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-800">{error}</p>
                </div>
            )}
            {message && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800">{message}</p>
                </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
                {/* Email Input */}
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="admin@test.com"
                    disabled={loading}
                />
                </div>

                {/* Password Input */}
                <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="Enter your password"
                    disabled={loading}
                />
                </div>

                {/* Submit Button */}
                <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 disabled:opacity-70"
                >
                {loading ? (
                    <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    Signing in...
                    </span>
                ) : (
                    'Sign In'
                )}
                </button>
            </form>

            {/* Test Credentials Helper */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs font-semibold text-blue-900 mb-1">Test Credentials:</p>
                <p className="text-xs text-blue-700">Email: admin@test.com</p>
                <p className="text-xs text-blue-700">Password: TestAdmin123!</p>
            </div>
            </div>

            {/* Back to Home Link */}
            <div className="text-center mt-6">
            <a href="/" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">
                ← Back to Home
            </a>
            </div>
        </div>
        </div>
    )
    }