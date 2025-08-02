import { useEffect } from "react";

const BlogRedirect = () => {
  useEffect(() => {
    window.location.href = "https://salescentri.com";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to Blog...</h1>
        <p className="text-muted-foreground">
          You're being redirected to our main blog at salescentri.com
        </p>
      </div>
    </div>
  );
};

export default BlogRedirect;