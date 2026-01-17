"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav style={{ padding: 20, borderBottom: "1px solid #ccc" }}>
      <Link href="/">Home</Link> |{" "}
      <Link href="/about">About</Link> |{" "}
      <Link href="/services">Services</Link> |{" "}
      <Link href="/contact">Contact</Link>
      <span style={{ float: "right" }}>
        {session ? (
          <>
            👋 {session.user?.email}
            <button
              onClick={() => signOut()}
              style={{ marginLeft: 10 }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link> |{" "}
            <Link href="/register">Register</Link>
          </>
        )}
      </span>
    </nav>
  );
}
