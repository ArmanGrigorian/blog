const Header = ({ children }: T_layout) => {
	return (
		<header>
			<h1 className="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100">Next.JS</h1>
			{children}
		</header>
	);
};

export default Header;
