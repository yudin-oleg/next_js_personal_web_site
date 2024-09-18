import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";
import clsx from "clsx";

export default function About() {
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
			<div className={styles.aboutPart}>
				<div className={styles.aboutPartText}>
					<p className={clsx(styles.greeting, styles.blueText)}>Здравствуй!</p>
					<p className={styles.greetingMessage}>Ты пожелал узнать обо мне.</p>
					<p className={styles.paragraph}>
						Меня зовут Максим, мне 30 с копейками лет.
						<span className={styles.blueText}>
							 Я аналитик, психолог, философ и предприниматель.
						</span>
					</p>
					<p className={styles.paragraph}>
						Более десяти лет изучаю как работают человеческие разум и мышление,
						<br></br> на себе и на окружающих. Достиг в этом некоторых успехов.
						Иногда даю людям советы.
						<span className={styles.blueText}>
							 Совладелец пока небольшого предприятия с оборотом 15-20 млн.
							рублей в месяц.
						</span>
					</p>
					<p className={styles.paragraph}>
						Много читаю, немного слежу за тем, что происходит в России и Мире,
						по возможности участвую.
					</p>
					<p className={styles.paragraph}>
						Не пишу книгу, не веду курсов, тренингов и марафонов.<br></br>
						Не собираю подписчиков.<br></br>Владею некоторыми боевыми
						искусствами на некотором уровне =)
					</p>
					<p className={styles.paragraph}>
						Люблю, когда всё планируется заранее — встречи, отдых, дела и т.п.
						<br></br>
						<span className={styles.blueText}>
							Стремлюсь к совершенству. Всегда. Везде. Во всём
						</span>
					</p>
					<p className={styles.paragraph}>
						Надеюсь было приятно познакомиться.
					</p>
					<p className={styles.paragraph}>М.</p>
				</div>
				<div className={styles.photo}>
					<Image src="/about-photo.png" alt="photo" width="420" height="560" />
				</div>
			</div>
		</div>
	);
}
