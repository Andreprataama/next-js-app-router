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

type NoteDetail = {
  success: boolean;
  message: string;
  data: ListNote;
};

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const res = await fetch("https://service.pace11.my.id/api/notes");
  const notes: Notes = await res.json();

  return notes.data.map((note: ListNote) => ({
    id: String(note.id),
  }));
}
export default async function NotesPageDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const res = await fetch(`https://service.pace11.my.id/api/note/${id}`);
  const notes1: NoteDetail = await res.json();
  console.log(notes1);

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-semibold text-gray-800">
        {notes1.data.title}
      </h1>
      <p className="mt-4 text-gray-600">{notes1.data.description}</p>
    </main>
  );
}
