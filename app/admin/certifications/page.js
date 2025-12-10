"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function CertificationsPage() {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("certifications")
        .select("*")
        .order("id", { ascending: false });
      if (!error) setCertifications(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!certifications.length) return <p>No certifications found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Certifications</h1>
      <ul className="space-y-2">
        {certifications.map(cert => (
          <li key={cert.id} className="p-3 border rounded">
            Badge ID: {cert.badge_id}
          </li>
        ))}
      </ul>
    </div>
  );
}
