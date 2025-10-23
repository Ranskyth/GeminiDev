import { Header } from "@/components/header";
import { SiderbarAdmin } from "@/components/siderbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="flex">
        <SiderbarAdmin />
        {children}
      </div>
    </div>
  );
}
