import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  console.log("ADMIN SESSION >>>", session);

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Debug Page</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
