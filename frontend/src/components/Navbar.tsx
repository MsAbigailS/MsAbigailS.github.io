import { Briefcase, Moon, SquareTerminal, User } from "lucide-react";
import { Monogram } from "@/components/Monogram.tsx";
import { useMe } from "@/hooks/useMe.tsx";

const upcomingSections = ["Experience", "Projects", "Awards"];
const utilities = [
	{ label: "Terminal", icon: SquareTerminal },
	{ label: "Work", icon: Briefcase },
	{ label: "Theme", icon: Moon },
];

export const Navbar = () => {
	const { name } = useMe();
	const initial = name.charAt(0);
	const [, ...surname] = name.split(" ");
	const displayName = surname.length
		? [`${initial}.`, ...surname].join(" ")
		: name;

	return (
		<header className="relative z-30 grid grid-cols-[1fr_auto] items-center gap-y-3 bg-background-primary px-4 py-4 md:flex md:justify-between md:pl-8">
			<a
				aria-label={name}
				className="title flex w-fit items-center gap-2 rounded-lg text-xl"
				href="#about"
			>
				<Monogram
					className="size-9 border-0 bg-text-primary/5 p-0 text-base"
					monogram={initial}
				/>
				{displayName}
			</a>

			<nav
				aria-label="Main navigation"
				className="col-span-full row-start-2 flex items-center justify-center gap-x-5 text-sm text-text-primary/75 sm:gap-x-7 md:text-base"
			>
				<a
					aria-current="location"
					className="rounded-sm font-bold text-text-primary"
					href="#about"
				>
					About
				</a>
				{upcomingSections.map((section) => (
					<span key={section}>{section}</span>
				))}
			</nav>

			<div className="col-start-2 row-start-1 flex items-center gap-1 text-text-primary/75 sm:gap-2">
				{utilities.map(({ label, icon: Icon }) => (
					<button
						aria-label={label}
						className="grid size-8 place-items-center sm:size-9"
						disabled={true}
						key={label}
						type="button"
					>
						<Icon aria-hidden="true" className="size-5" />
					</button>
				))}
				<button
					aria-label="Profile"
					className="grid size-9 place-items-center rounded-full bg-accent text-background-primary"
					disabled={true}
					type="button"
				>
					<User aria-hidden="true" className="size-4" />
				</button>
			</div>
		</header>
	);
};
