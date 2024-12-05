import { HumanBody } from "../components/HumanBody";

export function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Explorez le Corps Humain
      </h1>
      <HumanBody />
    </div>
  );
}