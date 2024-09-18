"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./consultation.module.css";
import { useRef, useState } from "react";

export default function Consultation() {
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
					to: "yudin_123@mail.ru", // Replace with recipient's email
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
								<div>Спасибо! Данные успешно отправлены</div>
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
								<div>Пожалуйста введите имя и телефон</div>
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
							<Image
								src="/vk-consultation.svg"
								alt="vk"
								width="35"
								height="35"
							/>
						</Link>
						<Link href="https://t.me/advisingbot">
							<Image
								src="/tg-consultation.svg"
								alt="telegram"
								width="35"
								height="35"
							/>
						</Link>
						<Link href="https://tenchat.ru/tmaks">
							<Image src="/t-consultation.svg" alt="t" width="35" height="35" />
						</Link>
					</div>
					<div className={styles.languages}>
						<a href="./about-ru.html">RU</a>
						<a href="./about-en.html">EN</a>
						<a href="./about-id.html">ID</a>
					</div>
				</div>
				<div className={styles.consultationPart}>
					<div className={styles.consultationMessage}>
						Стоимость консультации в 2024 году 5000$
					</div>
					<div className={styles.consultationForm}>
						<input type="text" placeholder="Имя" ref={name} />
						<input type="text" placeholder="Телефон" ref={phone} />
						<input type="text" placeholder="Комментарий" ref={comment} />
						<button ref={popUpButton} onClick={processClick}>
							Записаться
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
