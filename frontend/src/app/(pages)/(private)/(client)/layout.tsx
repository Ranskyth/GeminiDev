import { Header } from "@/components/header";
import { Siderbar } from "@/components/siderbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Header/>

    <div className="flex">
        <Siderbar/>
  
            {children}
        
    </div>
    </div>
  );
}