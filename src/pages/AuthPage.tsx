import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, EyeOff, Mail } from "lucide-react";

const authSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type AuthFormData = z.infer<typeof authSchema>;

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showMagicLinkSent, setShowMagicLinkSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (data: AuthFormData) => {
    // Visual only - no backend
    console.log("Auth submitted:", { ...data, mode: isLogin ? "login" : "signup" });
  };

  const handleMagicLink = () => {
    setShowMagicLinkSent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-light/30 to-warmth/20 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-block">
            <h1 className="font-serif text-3xl text-calm-text tracking-tight">
              Tenderly
            </h1>
          </Link>
          <div className="w-12 h-px bg-sage/40 mx-auto mt-4" />
        </div>

        {/* Auth Card */}
        <Card className="border-0 shadow-lg shadow-sage/10 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8">
            {showMagicLinkSent ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-sage-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-7 h-7 text-sage" />
                </div>
                <h2 className="font-serif text-xl text-calm-text mb-3">
                  Check your inbox
                </h2>
                <p className="text-calm-text/70 text-base leading-relaxed">
                  We sent a magic link to your email. Click it to sign in securely.
                </p>
                <Button
                  variant="ghost"
                  className="mt-6 text-sage hover:text-sage/80 hover:bg-sage-light/50"
                  onClick={() => setShowMagicLinkSent(false)}
                >
                  Back to sign in
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-calm-text font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-12 text-base border-sage/30 focus:border-sage focus:ring-sage/20 bg-white"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500/80">{errors.email.message}</p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-calm-text font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="h-12 text-base border-sage/30 focus:border-sage focus:ring-sage/20 bg-white pr-12"
                      {...register("password")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-calm-text/50 hover:text-calm-text/70 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-sm text-red-500/80">{errors.password.message}</p>
                  )}
                </div>

                {/* Continue Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-sage hover:bg-sage/90 text-white text-base font-medium"
                >
                  {isSubmitting ? "Please wait..." : "Continue"}
                </Button>

                {/* Divider */}
                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-sage/20" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-sm text-calm-text/50">or</span>
                  </div>
                </div>

                {/* Magic Link */}
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleMagicLink}
                  className="w-full h-12 border-sage/30 text-calm-text/80 hover:bg-sage-light/30 hover:border-sage/50 text-base"
                >
                  Send me a magic link instead
                </Button>

                {/* Mode Toggle */}
                <p className="text-center text-calm-text/60 text-base pt-2">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-sage hover:text-sage/80 font-medium transition-colors"
                  >
                    {isLogin ? "Sign up" : "Sign in"}
                  </button>
                </p>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 space-y-3">
          <p className="text-calm-text/50 text-sm">
            Your information stays private.
          </p>
          <Link
            to="/"
            className="text-sage/70 hover:text-sage text-sm transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
