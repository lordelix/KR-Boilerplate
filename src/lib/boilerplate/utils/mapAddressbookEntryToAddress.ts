import type { AddressProps } from '../components'
import type { XioniCMS } from '../xioni/types'

export default function mapAddressbookEntryToAddress(
	entry: XioniCMS.AddressbookEntry
): AddressProps {
	const { name, address: street, city: town, phone, mobile, fax, email, web } = entry

	return {
		name: name ?? undefined,
		street: street ?? undefined,
		town: town ?? undefined,
		phone: phone ?? undefined,
		mobile: mobile ?? undefined,
		fax: fax ?? undefined,
		email: email ?? undefined,
		web: web ? web.hostname : undefined
	}
}
