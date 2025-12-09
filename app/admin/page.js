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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            const { data: allPosts } = await supabase.from('blog_posts').select('id, published')
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
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4" />
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
                            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                            <p className="text-sm text-gray-600 mt-1">Welcome back, {user?.email}</p>
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
                                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalPosts}</p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M9 16h6M7 8h10" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Published Posts Card */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Published</p>
                                <p className="text-3xl font-bold text-green-600 mt-2">{stats.publishedPosts}</p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Draft Posts Card */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Drafts</p>
                                <p className="text-3xl font-bold text-yellow-600 mt-2">{stats.draftPosts}</p>
                            </div>
                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15.232 5.232l3.536 3.536M4 20h4l10-10a4 4 0 00-5.657-5.657L4 14v6z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* User Info Card */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Account Information</h2>
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
                                {user?.created_at ? new Date(user.created_at).toLocaleDateString('en-ZA', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                }) : '-'}
                            </span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <span className="text-sm font-medium text-gray-600">Last Sign In:</span>
                            <span className="text-sm text-gray-900">
                                {user?.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString('en-ZA') : '-'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                            onClick={() => router.push('/test-blog')}
                            className="p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors flex items-start"
                        >
                            <div className="flex items-center mr-3">
                                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                                    </svg>
                                </div>
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-gray-900">View Blog Posts</h3>
                                <p className="text-sm text-gray-600">See your published content</p>
                            </div>
                        </button>

                        <button
                            onClick={() => alert('Feature coming soon!')}
                            className="p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors flex items-start"
                        >
                            <div className="flex items-center mr-3">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-gray-900">Create New Post</h3>
                                <p className="text-sm text-gray-600">Add content to your blog</p>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Protected Route Indicator */}
                <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        <div>
                            <p className="text-sm font-semibold text-green-900">Protected Page</p>
                            <p className="text-sm text-green-700 mt-1">
                                This dashboard is only accessible to authenticated users. If you weren't logged in, you'd be
                                redirected to the login page.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}