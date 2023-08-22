import NextTopLoader from "nextjs-toploader";
import Footer from "../footer";
import MainNav from "../main-nav";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <MainNav />
        <div className="flex-1 container">
          <NextTopLoader showSpinner={false} />
          <div className="max-w-6xl mx-auto">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}
