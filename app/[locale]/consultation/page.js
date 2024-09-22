import { View } from "./view";
import TranslationsProvider from "@/components/TranslationProvider";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["translation"];

async function Consultation({ params: { locale } }) {
	const { t, resources } = await initTranslations(locale, i18nNamespaces);

	return (
		<TranslationsProvider
			namespaces={i18nNamespaces}
			locale={locale}
			resources={resources}
		>
			<View></View>
		</TranslationsProvider>
	);
}

export default Consultation;
