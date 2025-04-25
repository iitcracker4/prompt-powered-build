
import { Link } from "react-router-dom";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";
import { Navbar } from "@/components/common/Navbar";

const ForgotPassword = () => {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-grid">
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="relative z-10 w-full max-w-md bg-card border rounded-lg shadow-sm p-8">
          <div className="mb-4">
            <Link to="/login" className="text-sm text-codebase-600 hover:underline">
              ← Back to login
            </Link>
          </div>
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
