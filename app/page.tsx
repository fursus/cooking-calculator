import UnitConverter from '@/components/unit-converter';
import Header from '@/components/header';

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Header />
      <div className="container mx-auto py-8 px-4">
        <UnitConverter />
      </div>
    </main>
  );
}
