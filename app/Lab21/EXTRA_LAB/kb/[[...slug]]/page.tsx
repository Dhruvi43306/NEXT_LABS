

export default async function KBPage({params}:{params:Promise<{slug:string[]}>}) {
  const { slug } = await params;

  return (
    <>
      <h2>Knowledge Base</h2>
      <p>{slug ? slug.join(" / ") : "Home"}</p>
    </>
  );
}
