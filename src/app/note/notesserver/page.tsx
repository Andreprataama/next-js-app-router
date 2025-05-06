import CreateForm from "./create";

export default async function Notes() {
  const res = await fetch("https://service.pace11.my.id/api/notes");
  const data = await res.json();
  console.log(data);

  return (
    <>
      <CreateForm />
      <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto ">
        {data.data.map(
          (el: { id: string; title: string; description: string }) => {
            return (
              <div key={el.id} className="p-4 bg-white shadow-sm rounded-1g">
                <h1>{el.title}</h1>
                <p>{el.description}</p>
              </div>
            );
          }
        )}
      </div>
    </>
  );
}
