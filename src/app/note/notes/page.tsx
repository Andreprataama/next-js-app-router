/* eslint-disable @typescript-eslint/no-explicit-any */
// type Datas = {
//   id: number;
//   title: string;
//   description: string;
//   created_at: string;
//   updated_at: string;
// };

export default async function Notes() {
  const res = await fetch("https://api.rfqm.xyz");
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <h1>coba</h1>
      <div>
        <h1>{data.data.name}</h1>
        <p>{data.status}</p>
        {data.data.routes.map((s: any, index: number) => {
          return <p key={index}>{s.path}</p>;
        })}
      </div>

      {/* {data.data.map((note: Datas) => {
        const createdAt = new Date(note.created_at);

        return (
          <div key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            <p>{createdAt.toString()}</p>
          </div>
        );
      })} */}
    </div>
  );
}
