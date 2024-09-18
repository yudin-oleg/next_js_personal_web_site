import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import clsx from "clsx";

export default function Home() {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>
				<div className={styles.logo}>
					<Link href="/">
						<Image src="/logo.svg" alt="logo" width="44" height="57" />
					</Link>
				</div>
				<div className={styles.navigation}>
					<Link href="/about">
						<p>Обо мне</p>
					</Link>
					<Link href="/deals">
						<p>Деятельность</p>
					</Link>
					<Link href="/consultation">
						<p>Консультация</p>
					</Link>
				</div>
				<div className={styles.socialMedia}>
					<Link href="https://vk.com/maksim.tiaglov">
						<Image src="/vk.svg" alt="vk" width="35" height="35" />
					</Link>
					<Link href="https://t.me/advisingbot">
						<Image src="/tg.svg" alt="telegram" width="35" height="35" />
					</Link>
					<Link href="https://tenchat.ru/tmaks">
						<Image src="/t.svg" alt="t" width="35" height="35" />
					</Link>
				</div>
				<div className={styles.languages}>
					<a href="./about-ru.html">RU</a>
					<a href="./about-en.html">EN</a>
					<a href="./about-id.html">ID</a>
				</div>
			</div>
			<div className={styles.homePart}>
				<div className={styles.photo}>
					<Image src="/photo.png" alt="photo" width="320" height="540" />
				</div>
				<div className={styles.homePartText}>
					<div className={styles.homeText}>
						Даю о#@енные советы по Делу.
						<br />
						<div className={clsx(styles.blueText, styles.homePartAccentWord)}>
							Дорого.
						</div>
					</div>
					<div className={styles.adviserInfo}>
						Максим Тяглов<br></br>Советник
					</div>
				</div>
			</div>
		</div>
	);
}
