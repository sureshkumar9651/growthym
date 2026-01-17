"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main style={{ padding: 40 }}>
      <h1>Corporate IT Website</h1>

      {session ? (
        <p>Welcome, {session.user?.email}</p>
      ) : (
        <p>Please login to continue</p>
      )}
    </main>
  );
}
