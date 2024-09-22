"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import styles from "./LanguageChangerConsultation.module.css";
import { ChangeEvent } from "react";

export default function LanguageChangerConsultation() {
	const { i18n } = useTranslation();
	const currentLocale = i18n.language;
	const router = useRouter();
	const { locale } = router; // Get the current locale
	const currentPathname = usePathname();

	const handleChange = (newLocale) => {
		// set cookie for next-i18n-router
		const days = 30;
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

		// redirect to the new locale path
		if (
			currentLocale === i18nConfig.defaultLocale &&
			!i18nConfig.prefixDefault
		) {
			router.push("/" + newLocale + currentPathname);
		} else {
			router.push(
				currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
			);
		}

		router.refresh();
	};

	return (
		<div className={styles.languages}>
			<a
				href="#"
				onClick={() => handleChange("ru")}
				className={locale === "ru" ? styles.active : ""}
			>
				RU
			</a>
			<a
				href="#"
				onClick={() => handleChange("en")}
				className={locale === "en" ? styles.active : ""}
			>
				EN
			</a>
			<a
				href="#"
				onClick={() => handleChange("id")}
				className={locale === "id" ? styles.active : ""}
			>
				ID
			</a>
		</div>
	);
}
