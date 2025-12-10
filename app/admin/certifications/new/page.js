    "use client";

    import { useState } from "react";
    import { useRouter } from "next/navigation";
    import { createClient } from "@supabase/supabase-js";

    const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    export default function AddCertificationPage() {
    const router = useRouter();
    const [badgeId, setBadgeId] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase
        .from("certifications")
        .insert([{ badge_id: badgeId }]);

        setLoading(false);
        if (!error) router.push("/admin/certifications");
        else alert("Error adding certification");
    };

    return (
        <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Add Certification</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
            type="text"
            placeholder="Badge ID"
            value={badgeId}
            onChange={(e) => setBadgeId(e.target.value)}
            className="p-2 border rounded w-full"
            required
            />
            <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            disabled={loading}
            >
            {loading ? "Adding..." : "Add Certification"}
            </button>
        </form>
        </div>
    );
    }
