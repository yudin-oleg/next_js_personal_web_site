import Image from "next/image";
import Link from "next/link";
import styles from "./deals.module.css";

export default function Deals() {
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
			<div className={styles.dealsPart}>
				<div className={styles.dealsPartText}>
					<p className={styles.paragraph}>
						<span className={styles.blueText}>
							Я занимаюсь тем, что даю советы или, говоря современным языком,
							консультирую людей.
						</span>
					</p>
					<p className={styles.paragraph}>
						Область моих знаний — это человеческое сознание, так что направления
						работы обширны и размыты, ибо человек проявляется везде.
					</p>
					<p className={styles.paragraph}>
						<span className={styles.blueText}>
							Основные направления:<br></br>
						</span>
						— Предпринимательство<br></br>
						— Управление и руководство<br></br>
						— Продвижение товаров/услуг/предприятий<br></br>
						— Самосовершенствование<br></br>
						— Отладка взаимодействий внутри предприятия<br></br>
					</p>
					<p className={styles.paragraph}>
						И так далее, везде, где есть люди — есть с чем работать.
					</p>
					<p className={styles.paragraph}>
						<span className={styles.blueText}>
							Если вы решите со мной работать, приготовьтесь к вопросам,
							некоторые из которых, а может даже большинство, будут неприятны,
							болезненны, на них не будет хотеться отвечать правду и т. д.,
							а отвечать придется — такова жизнь.<br></br>
						</span>
					</p>
					<p className={styles.paragraph}>
						Еще Данте семьсот лет назад писал, что путь к раю пролегает сквозь
						страдания и боль.
					</p>
				</div>
				<div className={styles.dealsLogo}>
					<Image src="/deals-logo.svg" alt="logo" width="301" height="414" />
				</div>
			</div>
		</div>
	);
}
