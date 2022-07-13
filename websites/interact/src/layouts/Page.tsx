import Footer from "../components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
}
