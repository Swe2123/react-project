import { supabase } from '@/lib/supabase'

// Server Component - runs on server, fetches data before rendering
export default async function TestBlogPage() {
    // Fetch blog posts from Supabase
    const { data: posts, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })

    // Handle errors
    if (error) {
        console.error('Error fetching posts:', error)
        return (
            <div className="min-h-screen bg-gray-50 p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-red-600 mb-4">Error Loading Posts</h1>
                    <p className="text-gray-700">{error.message}</p>
                </div>
            </div>
        )
    }

    // Render page with posts
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Test Blog</h1>
                    <p className="text-gray-600">
                        Demonstrating Supabase integration with Next.js Server Components
                    </p>
                </div>

                {/* Posts List */}
                {posts && posts.length > 0 ? (
                    <div className="space-y-6">
                        {posts.map((post) => (
                            <article
                                key={post.id}
                                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    {post.author && <span className="mr-4">By {post.author}</span>}
                                    <span>
                                        {new Date(post.created_at).toLocaleDateString('en-ZA', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </span>
                                </div>
                                <p className="text-gray-700 leading-relaxed">{post.content}</p>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                        <p className="text-gray-600">No blog posts found.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
