import { Toaster } from "@/components/ui/toaster";
import { LoginForm } from "@/components/LoginForm";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <LoginForm />
      <Toaster />
    </div>
  );
}

export default App;