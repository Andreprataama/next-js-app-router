import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  console.log("req", searchParams.get("id"));
  return NextResponse.json(JSON.stringify({ name: "John Doe" }), {
    status: 200,
  });
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json(
    { payload: body },
    {
      status: 200,
    }
  );
}

// export function PUT() {
//   return new Response(JSON.stringify({ name: "John Doe" }), {
//     status: 200,
//   });
// }

// export function DELETE() {
//   return new Response(JSON.stringify({ name: "John Doe" }), {
//     status: 200,
//   });
// }
