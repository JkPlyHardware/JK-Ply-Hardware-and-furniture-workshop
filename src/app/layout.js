
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import ClientWrapper from "@/components/ClientWrapper";
import SecurityBlock from "@/components/SecurityBlock";

export const metadata = {
  title: {
    default: "JK Ply Hardware",
    template: "%s | JK Ply",
  },
  description: "Best furniture and plywood shop",
  keywords: ["Furniture", "Plywood", "Patna"],
};

export default function RootLayout({ children }) {
 

  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <ClientWrapper>
          {process.env.NODE_ENV === "production" && <SecurityBlock />}
        {children}
        <ScrollToTop />

        </ClientWrapper>
      </body>
    </html>
  );
}