import { Hero, Info, GamesShowcase } from '@/components';

export const metadata = {
  title: "Core Memories",
  description: "Empresa de videojuegos independiente",
};

const mainClasses = `
  pt-header
`;

export default function Home() {
  return (
    <main className={mainClasses}>
      <Hero />
      <Info />
      <GamesShowcase />
    </main>
  );
}
