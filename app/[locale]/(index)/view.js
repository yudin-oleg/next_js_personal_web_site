"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import LanguageChanger from "@/components/LanguageChanger";

export function View() {
	const { t } = useTranslation();
	const router = useRouter();

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
						<p>{t("aboutMe")}</p>
					</Link>
					<Link href="/deals">
						<p>{t("myDeals")}</p>
					</Link>
					<Link href="/consultation">
						<p>{t("consultation")}</p>
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
				{/* Language Switcher */}
				<LanguageChanger></LanguageChanger>
			</div>
			<div className={styles.homePart}>
				<div className={styles.photo}>
					<Image src="/photo.png" alt="photo" width="320" height="540" />
				</div>
				<div className={styles.homePartText}>
					<div className={styles.homeText}>
						{t("proposal")}
						<br />
						<div className={clsx(styles.blueText, styles.homePartAccentWord)}>
							{t("expensive")}
						</div>
					</div>
					<div className={styles.adviserInfo}>
						{t("maksim")}
						<br></br>
						{t("adviser")}
					</div>
				</div>
			</div>
		</div>
	);
}
