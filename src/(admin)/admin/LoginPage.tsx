import React from "react";
import { LoginForm } from "../../components/auth/loginForm";
// import { seedDefaultAdmin } from "@/lib/firebase/seed";
// import { toast } from "sonner";

interface LoginPageProps {
  onSignUpClick: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onSignUpClick }) => {
  // const handleSeed = async () => {
  //   const result = await seedDefaultAdmin();
  //   if (result.success) {
  //     toast.success(result.message);
  //   } else {
  //     toast.error(result.message);
  //   }
  // };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#F15A29]/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#172E70]/20 blur-[120px]" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-md mx-auto p-6">
        {/* Branding */}
        <div className="text-center mb-8">
          {/* <h1 className="text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Zute
          </h1> */}
          {/* <p className="text-slate-400 text-lg leading-relaxed font-light">
            Admin Dashboard
          </p> */}
        </div>

        {/* Login Form */}
        <LoginForm onSignUpClick={onSignUpClick} />

        <div className="text-center mt-6">
          <p className="text-xs text-slate-500">
            By signing in, you agree to our{" "}
            <a href="#" className="underline hover:text-slate-400">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-slate-400">
              Privacy Policy
            </a>.
          </p>
          {/* Temporary Seed Button */}
          {/* <button 
            onClick={handleSeed}
            className="mt-4 text-[10px] text-slate-500 hover:text-slate-400 transition-colors"
          >
            (Dev: Seed Admin)
          </button> */}
        </div>
      </div>
    </div>
  );
};


