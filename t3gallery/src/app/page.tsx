import Link from "next/link";

const mockUrls = [
  'https://utfs.io/f/e749aeac-40a4-442b-8f00-eca3ee2a3e8f-22dgn.webp',
  'https://utfs.io/f/27a5c5f4-bcdb-48c9-9cca-a21448492a6f-1xtz4.jpg',
  'https://utfs.io/f/c1331ac4-9e3c-46eb-b171-e37578be32fe-dc4ah6.jpg'
]

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url
}));

export default function HomePage() {
  return (
    <main className="flex flex-wrap gap">
      {mockImages.map(image => (
        <div key={image.id} className="w-48 p-4">
          <img src={image.url} alt="image" />
        </div>
      ))}
    </main>
  );
}
