export interface Location {
  slug: string
  city: string
  region: string
  description: string
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export const locations: Location[] = [
  {
    slug: 'helsinki',
    city: 'Helsinki',
    region: 'Uusimaa',
    description: 'Palvelemme Helsingissä ja koko pääkaupunkiseudulla. Toimistomme sijaitsee Helsingissä ja pystymme aloittamaan työn nopealla aikataululla.',
    seo: {
      title: 'Asbestipurku Helsinki | Rakennuspalvelut Helsinki | RGT',
      description: 'Ammattimaiset rakennuspalvelut ja asbestipurku Helsingissä. Luvallinen asbestinpoisto, purku-urakat, keittiöremontit. Pyydä tarjous.',
      keywords: ['asbestipurku helsinki', 'rakennuspalvelut helsinki', 'purku-urakka helsinki', 'keittiöremontti helsinki', 'saneeraus helsinki'],
    },
  },
  {
    slug: 'espoo',
    city: 'Espoo',
    region: 'Uusimaa',
    description: 'Palvelemme Espoossa ja lähialueilla. Nopea siirtyminen kohteeseen - pääkaupunkiseudun kohteet hoidamme tehokkaasti.',
    seo: {
      title: 'Asbestipurku Espoo | Rakennuspalvelut Espoo | RGT',
      description: 'Ammattimaiset rakennuspalvelut ja asbestipurku Espoossa. Luvallinen asbestinpoisto, purku-urakat, remontit. Pyydä tarjous.',
      keywords: ['asbestipurku espoo', 'rakennuspalvelut espoo', 'purku-urakka espoo', 'keittiöremontti espoo'],
    },
  },
  {
    slug: 'vantaa',
    city: 'Vantaa',
    region: 'Uusimaa',
    description: 'Palvelemme Vantaalla ja lähialueilla. Ammattitaitoiset rakennuspalvelut nopealla aikataululla.',
    seo: {
      title: 'Asbestipurku Vantaa | Rakennuspalvelut Vantaa | RGT',
      description: 'Ammattimaiset rakennuspalvelut ja asbestipurku Vantaalla. Luvallinen asbestinpoisto, purku-urakat, remontit. Pyydä tarjous.',
      keywords: ['asbestipurku vantaa', 'rakennuspalvelut vantaa', 'purku-urakka vantaa', 'keittiöremontti vantaa'],
    },
  },
  {
    slug: 'tampere',
    city: 'Tampere',
    region: 'Pirkanmaa',
    description: 'Palvelemme myös Tampereella ja Pirkanmaalla. Ota yhteyttä ja sovitaan kohteesta.',
    seo: {
      title: 'Asbestipurku Tampere | Rakennuspalvelut Tampere | RGT',
      description: 'Ammattimaiset rakennuspalvelut ja asbestipurku Tampereella. Luvallinen asbestinpoisto, purku-urakat, remontit. Pyydä tarjous.',
      keywords: ['asbestipurku tampere', 'rakennuspalvelut tampere', 'purku-urakka tampere'],
    },
  },
  {
    slug: 'turku',
    city: 'Turku',
    region: 'Varsinais-Suomi',
    description: 'Palvelemme Turussa ja Varsinais-Suomessa. Laadukkaat rakennuspalvelut ja asbestipurku.',
    seo: {
      title: 'Asbestipurku Turku | Rakennuspalvelut Turku | RGT',
      description: 'Ammattimaiset rakennuspalvelut ja asbestipurku Turussa. Luvallinen asbestinpoisto, purku-urakat, remontit. Pyydä tarjous.',
      keywords: ['asbestipurku turku', 'rakennuspalvelut turku', 'purku-urakka turku'],
    },
  },
  {
    slug: 'oulu',
    city: 'Oulu',
    region: 'Pohjois-Pohjanmaa',
    description: 'Palvelemme myös Oulussa ja Pohjois-Pohjanmaalla. Ota yhteyttä ja selvitetään mahdollisuudet.',
    seo: {
      title: 'Asbestipurku Oulu | Rakennuspalvelut Oulu | RGT',
      description: 'Ammattimaiset rakennuspalvelut ja asbestipurku Oulussa. Luvallinen asbestinpoisto, purku-urakat, remontit. Pyydä tarjous.',
      keywords: ['asbestipurku oulu', 'rakennuspalvelut oulu', 'purku-urakka oulu'],
    },
  },
  {
    slug: 'jyvaskyla',
    city: 'Jyvaskyla',
    region: 'Keski-Suomi',
    description: 'Palvelemme Jyvaskylan alueella. Laadukkaat rakennuspalvelut ammattitaitoiselta tiimiltamme.',
    seo: {
      title: 'Asbestipurku Jyvaskyla | Rakennuspalvelut Jyvaskyla | RGT',
      description: 'Ammattimaiset rakennuspalvelut ja asbestipurku Jyvaskylass. Luvallinen asbestinpoisto, purku-urakat, remontit. Pyydä tarjous.',
      keywords: ['asbestipurku jyvaskyla', 'rakennuspalvelut jyvaskyla', 'purku-urakka jyvaskyla'],
    },
  },
]

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug)
}
