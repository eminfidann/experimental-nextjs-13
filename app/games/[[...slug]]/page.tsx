export default function Games({ params }: { params: { slug: string } }) {
  return (
    <>
      <h1>Hey, it's Games page!</h1>
      <p>slug: {params.slug}</p>
    </>
  );
}
