export default function Clients() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-4">Clients</h1>
      <div className="flex flex-col gap-4">
        <div className="text-lg font-semibold">Partners</div>
        <div className="text-gray-600 dark:text-gray-300">Partner list goes here.</div>
        <div className="text-lg font-semibold mt-6">Artists</div>
        <div className="text-gray-600 dark:text-gray-300">Artist list goes here.</div>
      </div>
    </div>
  );
} 