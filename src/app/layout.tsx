import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import ReduxProvider from "@/components/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
	title: "Todo",
	description: "created by Arman Grigorian",
};

const RootLayout = ({ children }: T_layout) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ReduxProvider>
					<Header>
						<Nav />
					</Header>
					{children}
					<Footer />
				</ReduxProvider>
			</body>
		</html>
	);
};

export { metadata };
export default RootLayout;
