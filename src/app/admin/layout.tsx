import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          background: "#111",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h2>Admin</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link href="/admin">Dashboard</Link></li>
          <li><Link href="/admin/users">Users</Link></li>
          <li><Link href="/admin/services">Services</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "30px" }}>
        {children}
      </main>

    </div>
  );
}
