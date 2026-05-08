import Link from 'next/link';
export default function Home() {

  return (
    <div>
        <Link href="/">Botón Home</Link>
        <Link href="/uno">Botón Uno</Link>
        <Link href="/dos">Botón Dos</Link>

    </div>
  );
}
