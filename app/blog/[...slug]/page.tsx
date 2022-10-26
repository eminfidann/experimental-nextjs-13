export default function Blog({ params }: { params: { slug: string } }) {
  return (
    <>
      <h1>Hey, it's Blog page!</h1>
      <p>slug: {params.slug}</p>
    </>
  );
}
