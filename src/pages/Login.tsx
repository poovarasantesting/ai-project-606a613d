import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: "Welcome back to Instagram!",
      });
      // In a real app, you would handle authentication and redirection here
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-6">
        <Card className="w-full border border-gray-200 shadow-sm">
          <CardHeader className="space-y-1 items-center text-center">
            <div className="flex justify-center mb-4">
              <Instagram size={48} className="text-pink-600" />
            </div>
            <CardTitle className="text-xl font-semibold text-center">Instagram</CardTitle>
            <CardDescription>Sign in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="border-t p-4">
            <div className="w-full text-center text-sm">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </CardFooter>
        </Card>
        <div className="text-center text-sm text-gray-500">
          <p>Get the app.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="block">
              <img 
                src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png" 
                alt="App Store" 
                className="h-10"
              />
            </a>
            <a href="#" className="block">
              <img 
                src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" 
                alt="Google Play" 
                className="h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}