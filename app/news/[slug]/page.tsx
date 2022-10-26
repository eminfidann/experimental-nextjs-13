export default function News({ params }: { params: { slug: string } }) {
  return (
    <>
      <h1>Hey, it's News page!</h1>
      <p>slug: {params.slug}</p>
    </>
  );
}
