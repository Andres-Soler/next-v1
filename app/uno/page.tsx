import Link from 'next/link';
import Props from './props';
export default function Home() {

  return (
    <div>
        <Link href="/">Botón Home</Link>
        <Link href="/uno">Botón Uno</Link>
        <Link href="/dos">Botón Dos</Link>

        <Props nombre='soy el gatomeowmiaugod + god de los gatos gods puro god' />

    </div>
  );
}
