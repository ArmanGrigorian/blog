import Link from "next/link";

const Nav = () => {
	return (
		<nav className="bg-neutral-800 dark:bg-neutral-100 h-10 leading-10">
			<ul className="flex justify-center items-center gap-5">
				<li className="list-none">
					<Link
               className="text-neutral-100 dark:text-neutral-800 no-underline font-semibold hover:opacity-80"
                href="/">Home</Link>
				</li>
				<li className="list-none">
					<Link
               className="text-neutral-100 dark:text-neutral-800 no-underline font-semibold hover:opacity-80"
                href="/blog">Blog</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
