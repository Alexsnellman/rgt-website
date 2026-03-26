export interface Location {
  slug: string
  city: string
  cityInessive: string // "missä?" - Helsingissä, Espoossa, Vantaalla
  region: string
  active: boolean // shown in nav/footer/links
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
    cityInessive: 'Helsingissä',
    region: 'Uusimaa',
    active: true,
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
    cityInessive: 'Espoossa',
    region: 'Uusimaa',
    active: true,
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
    cityInessive: 'Vantaalla',
    region: 'Uusimaa',
    active: true,
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
    cityInessive: 'Tampereella',
    region: 'Pirkanmaa',
    active: false,
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
    cityInessive: 'Turussa',
    region: 'Varsinais-Suomi',
    active: false,
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
    cityInessive: 'Oulussa',
    region: 'Pohjois-Pohjanmaa',
    active: false,
    description: 'Palvelemme myös Oulussa ja Pohjois-Pohjanmaalla. Ota yhteyttä ja selvitetään mahdollisuudet.',
    seo: {
      title: 'Asbestipurku Oulu | Rakennuspalvelut Oulu | RGT',
      description: 'Ammattimaiset rakennuspalvelut ja asbestipurku Oulussa. Luvallinen asbestinpoisto, purku-urakat, remontit. Pyydä tarjous.',
      keywords: ['asbestipurku oulu', 'rakennuspalvelut oulu', 'purku-urakka oulu'],
    },
  },
  {
    slug: 'jyvaskyla',
    city: 'Jyväskylä',
    cityInessive: 'Jyväskylässä',
    region: 'Keski-Suomi',
    active: false,
    description: 'Palvelemme Jyväskylän alueella. Laadukkaat rakennuspalvelut ammattitaitoiselta tiimiltämme.',
    seo: {
      title: 'Asbestipurku Jyväskylä | Rakennuspalvelut Jyväskylä | RGT',
      description: 'Ammattimaiset rakennuspalvelut ja asbestipurku Jyväskylässä. Luvallinen asbestinpoisto, purku-urakat, remontit. Pyydä tarjous.',
      keywords: ['asbestipurku jyväskylä', 'rakennuspalvelut jyväskylä', 'purku-urakka jyväskylä'],
    },
  },
]

export const activeLocations = locations.filter((l) => l.active)

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug)
}
