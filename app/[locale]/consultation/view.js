"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./consultation.module.css";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import LanguageChangerConsultation from "@/components/LanguageChangerConsultation";

export function View() {
	const { t } = useTranslation();
	const router = useRouter();

	const popUpButton = useRef(null);
	const popUp = useRef(null);
	const name = useRef(null);
	const phone = useRef(null);
	const comment = useRef(null);
	const [visibility, setVisibility] = useState(false);
	const [visibilityError, setVisibilityError] = useState(false);

	const checkNameEntered = () => {
		if (name.current.value !== "") return true;
		else return false;
	};

	const checkPhoneEntered = () => {
		if (phone.current.value !== "") return true;
		else return false;
	};

	const handleSendEmail = async () => {
		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					to: "advisor@silverwind.pro", // Replace with recipient's email
					subject: "Запрос на консультацию",
					text:
						"Имя: " +
						name.current.value +
						" Телефон: " +
						phone.current.value +
						" Комментарий: " +
						comment.current.value,
				}),
			});

			const data = await response.json();

			if (response.ok) {
				console.log("Email sent successfully!");
				name.current.value = "";
				phone.current.value = "";
				comment.current.value = "";
				setVisibility(true);
				setTimeout(() => {
					setVisibility(false);
				}, 1000);
			} else {
				console.log(`Failed to send email: ${data.message}`);
			}
		} catch (error) {
			console.error(error);
			console.log("An error occurred while sending the email.");
		}
	};

	const processClick = async () => {
		if (!popUpButton.current) return;
		if (checkNameEntered() && checkPhoneEntered()) {
			handleSendEmail();
		} else {
			console.log("not full data");
			setVisibilityError(true);
			setTimeout(() => {
				setVisibilityError(false);
			}, 1000);
		}
	};

	return (
		<div className={styles.consultationPage}>
			{visibility && (
				<div className={styles.popUp} ref={popUp}>
					<div className={styles.popUpContainer}>
						<div className={styles.popUpBody}>
							<div className={styles.message}>
								<Image src="/pop-up.svg" alt="pop-up" width="64" height="64" />
								<div>{t("okay")}</div>
							</div>
						</div>
					</div>
				</div>
			)}
			{visibilityError && (
				<div className={styles.popUp} ref={popUp}>
					<div className={styles.popUpContainer}>
						<div className={styles.popUpBody}>
							<div className={styles.message}>
								{/* <Image src="/pop-up.svg" alt="pop-up" width="64" height="64" /> */}
								<div>{t("mistake")}</div>
							</div>
						</div>
					</div>
				</div>
			)}
			<div className={styles.mainContainer}>
				<div className={styles.header}>
					<div className={styles.logo}>
						<Link href="/">
							<Image
								src="/logo-consultation.svg"
								alt="logo"
								width="44"
								height="57"
							/>
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
					<LanguageChangerConsultation></LanguageChangerConsultation>
				</div>
				<div className={styles.consultationPart}>
					<div className={styles.consultationMessage}>{t("price")}</div>
					<div className={styles.consultationForm}>
						<input type="text" placeholder={t("name")} ref={name} />
						<input type="text" placeholder={t("phone")} ref={phone} />
						<input type="text" placeholder={t("comment")} ref={comment} />
						<button ref={popUpButton} onClick={processClick}>
							{t("register")}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
