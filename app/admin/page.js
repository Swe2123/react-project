'use client'
import { useEffect, useState } from 'react'
import { supabase, getCurrentUser } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [stats, setStats] = useState({
        totalPosts: 0,
        publishedPosts: 0,
        draftPosts: 0
    })

    // Check authentication and load data
    useEffect(() => {
        checkUserAndLoadData()
    }, [])

    async function checkUserAndLoadData() {
        try {
            // Check if user is logged in
            const currentUser = await getCurrentUser()
            if (!currentUser) {
                // Not logged in - redirect to login
                router.push('/login')
                return
            }
            // User is authenticated - load their data
            setUser(currentUser)
            await loadDashboardStats()
        } catch (error) {
            console.error('Error:', error)
            router.push('/login')
        } finally {
            setLoading(false)
        }
    }

    async function loadDashboardStats() {
        try {
            // Get all posts
            const { data: allPosts } = await supabase
                .from('certifications')
                .select('id, published')
            if (allPosts) {
                const published = allPosts.filter(post => post.published).length
                const drafts = allPosts.filter(post => !post.published).length
                setStats({
                    totalPosts: allPosts.length,
                    publishedPosts: published,
                    draftPosts: drafts
                })
            }
        } catch (error) {
            console.error('Error loading stats:', error)
        }
    }

    async function handleLogout() {
        try {
            await supabase.auth.signOut()
            router.push('/login')
        } catch (error) {
            console.error('Error logging out:', error)
        }
    }

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading dashboard...</p>
                </div>
            </div>
        )
    }

    // Main dashboard
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                Admin Dashboard
                            </h1>
                            <p className="text-sm text-gray-600 mt-1">
                                Welcome back, {user?.email}
                            </p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Total Posts Card */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Posts</p>
                                <p className="text-3xl font-bold text-gray-900 mt-2">
                                    {stats.totalPosts}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1H7v-1z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Published Posts Card */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Published</p>
                                <p className="text-3xl font-bold text-green-600 mt-2">
                                    {stats.publishedPosts}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0 1 18 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Draft Posts Card */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Drafts</p>
                                <p className="text-3xl font-bold text-yellow-600 mt-2">
                                    {stats.draftPosts}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-2.036a2.5 2.5 0 1 1-3.536 3.536m9.896-9.896a2.5 2.5 0 0 1 0 3.536M9 11a4 4 0 018 0m-7 6h6m2 5H7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* User Info Card */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                        Account Information
                    </h2>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                            <span className="text-sm font-medium text-gray-600">User ID:</span>
                            <span className="text-sm text-gray-900 font-mono">{user?.id}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                            <span className="text-sm font-medium text-gray-600">Email:</span>
                            <span className="text-sm text-gray-900">{user?.email}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                            <span className="text-sm font-medium text-gray-600">Account Created:</span>
                            <span className="text-sm text-gray-900">
                                {new Date(user?.created_at).toLocaleDateString('en-ZA', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <span className="text-sm font-medium text-gray-600">Last Sign In:</span>
                            <span className="text-sm text-gray-900">
                                {new Date(user?.last_sign_in_at).toLocaleString('en-ZA')}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                                        Quick Actions
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <button
                                            onClick={() => router.push('/admin/certifications')}
                                            className="p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
                                        >
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                                                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 3.5 12 3.5c4.478 0 8.268 4.443 9.542 10.5" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">View certifications</h3>
                                                    <p className="text-sm text-gray-600">See your published content</p>
                                                </div>
                                            </div>
                                        </button>
                                        <button
                                            onClick={() => router.push('/admin/certifications/new')}
                                            className="p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
                                        >
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">Add certification</h3>
                                                    <p className="text-sm text-gray-600">Add links for certifications</p>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                {/* Protected Route Indicator */}
                <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.25a11.955 11.955 0 0 1-8.618 3.898m7.228 7.228a11.955 11.955 0 0 0 7.228 3.898M12 2.25c2.236 0 4.332.635 6.118 1.745m0 6.119c.835 2.236 1.295 4.665 1.295 7.227" />
                        </svg>
                        <div>
                            <p className="text-sm font-semibold text-green-900">Protected Page</p>
                            <p className="text-sm text-green-700 mt-1">
                                This dashboard is only accessible to authenticated users. If you weren't logged in, you'd be redirected to the login page.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}