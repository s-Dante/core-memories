import { Hero, Info, GamesShowcase } from '@/components';

export const metadata = {
  title: "Core Memories",
  description: "Empresa de videojuegos independiente",
};


export default function Home() {
  return (
    <main>
      <Hero />
      <Info />
      <GamesShowcase />
    </main>
  );
}
