"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";
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
				<LanguageChanger></LanguageChanger>
			</div>
			<div className={styles.aboutPart}>
				<div className={styles.aboutPartText}>
					<p className={clsx(styles.greeting, styles.blueText)}>
						{t("greeting")}
					</p>
					<p className={styles.greetingMessage}>{t("youWished")}</p>
					<p className={styles.paragraph}>
						{t("myNameIs")}
						<span className={styles.blueText}>{t("iAm")}</span>
					</p>
					<p className={styles.paragraph}>
						{t("whatIDo")}
						<span className={styles.blueText}>{t("myCompany")}</span>
					</p>
					<p className={styles.paragraph}>{t("reading")}</p>
					<p className={styles.paragraph}>
						{t("notWritingBok")}
						<br></br>
						{t("followers")}
						<br></br>
						{t("martialArts")}
					</p>
					<p className={styles.paragraph}>
						{t("whatILove")}
						<br></br>
						<span className={styles.blueText}>{t("perfection")}</span>
					</p>
					<p className={styles.paragraph}>{t("niceToMeet")}</p>
					<p className={styles.paragraph}>М.</p>
				</div>
				<div className={styles.photo}>
					<Image src="/about-photo.png" alt="photo" width="420" height="560" />
				</div>
			</div>
		</div>
	);
}
