import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-neutral-100 dark:bg-neutral-800">
			<p className="text-center text-neutral-800 dark:text-neutral-100 font-semibold">
				Powered by&nbsp;
				<Link
					className="font-bold underline underline-offset-2 hover:opacity-80"
					target="_blank"
					href="/">
					ME
				</Link>
			</p>
		</footer>
	);
};

export default Footer;
