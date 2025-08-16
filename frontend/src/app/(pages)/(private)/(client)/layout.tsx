import { Header } from "@/components/header";
import { SiderbarClient } from "@/components/siderbar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<Header />
			<div className="flex">
				<SiderbarClient />
				{children}
			</div>
		</div>
	);
}
