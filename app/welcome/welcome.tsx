import { API_CONFIG } from "~/config";


export function Welcome({ message }: { message: string }) {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
        Welcome to Photo AI 
        {API_CONFIG.backend_url}
    </main>
  );
}