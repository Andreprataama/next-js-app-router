// cara server dibawah ini
// export default async function BlogDetail({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;
//   return <h1 className="min-h-sc">blog {id}</h1>;
// }

//cara client

"use client";

import { useParams, useSearchParams } from "next/navigation";

export default function BlogDetail() {
  const params = useParams();
  const search = useSearchParams();
  const user = search.get("user");
  const query = Object.fromEntries(search.entries());

  console.log(`query`, query);

  return (
    <h1 className="min-h-screen">
      blog {`dynamic:${params.id}, user: ${user} age: ${query.age} `}
    </h1>
  );
}
