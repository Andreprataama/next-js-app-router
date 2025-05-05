import Link from "next/link";

type ListNote = {
  id: number;
  title: string;
  description: string;
};

type Notes = {
  data: ListNote[];
  status: string;
  message: string;
};

export const revalidate = 60;

export default async function NoteListPage() {
  const res = await fetch("https://service.pace11.my.id/api/notes");
  const notes: Notes = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">List Notes</h1>
      <ul className="space-y-3">
        {notes.data.map((note) => (
          <li key={note.id} className="border rounded-lg p-4 hover:bg-gray-50">
            <Link href={`/note/isr/${note.id}`}>
              <div>
                <h2 className="text-xl font-semibold">{note.title}</h2>
                <p className="text-gray-600">{note.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
