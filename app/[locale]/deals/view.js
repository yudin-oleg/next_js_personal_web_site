"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./deals.module.css";
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
					<Link href={t("firstLink")}>
						<Image src={t("firstImage")} alt="vk" width="35" height="35" />
					</Link>
					<Link href={t("secondLink")}>
						<Image
							src={t("secondImage")}
							alt="telegram"
							width="35"
							height="35"
						/>
					</Link>
					<Link href={t("thirdLink")}>
						<Image src={t("thirdImage")} alt="t" width="35" height="35" />
					</Link>
				</div>
				<LanguageChanger></LanguageChanger>
			</div>
			<div className={styles.dealsPart}>
				<div className={styles.dealsPartText}>
					<p className={styles.paragraph}>
						<span className={styles.blueText}>{t("dealsIntro")}</span>
					</p>
					<p className={styles.paragraph}>{t("myField")}</p>
					<p className={styles.paragraph}>
						<span className={styles.blueText}>
							{t("mainSpheres")}
							<br></br>
						</span>
						{t("buisness")}
						<br></br>
						{t("management")}
						<br></br>
						{t("services")}
						<br></br>
						{t("selfImprovement")}
						<br></br>
						{t("teamBuilding")}
						<br></br>
					</p>
					<p className={styles.paragraph}>{t("soOn")}</p>
					<p className={styles.paragraph}>
						<span className={styles.blueText}>
							{t("prepare")}
							<br></br>
						</span>
					</p>
					<p className={styles.paragraph}>{t("dante")}</p>
				</div>
				<div className={styles.dealsLogo}>
					<Image src="/deals-logo.svg" alt="logo" width="301" height="414" />
				</div>
			</div>
		</div>
	);
}
