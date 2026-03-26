export interface Service {
  slug: string
  name: string
  shortDesc: string
  description: string
  featured?: boolean
  icon: string
  features: string[]
  useCases: { title: string; description: string }[]
  faq: { question: string; answer: string }[]
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export const services: Service[] = [
  {
    slug: 'asbestipurku',
    name: 'Asbestipurku',
    shortDesc: 'Turvallinen ja luvallinen asbestinpoisto ammattilaisilta.',
    featured: true,
    icon: '',
    description:
      'RGT Rakennuspalveluilla on voimassa oleva asbestipurkulupa. Suoritamme asbestipurun turvallisesti, lakien mukaisesti ja siististi - niin pienissä saneerauskohteissa kuin suurissa teollisuuspurkutöissä. Turvallisuus ja lakimääräisten vaatimusten noudattaminen on meille ensisijaista.',
    features: [
      'Voimassa oleva asbestipurkulupa',
      'Koulutettu ja sertifioitu henkilöstö',
      'Asianmukainen suojaus ja alipaineistus',
      'Jätteiden lainmukainen käsittely ja kuljetus',
      'Työmaan siivous ja loppuraportti',
      'Nopea aikataulu - paikalle lyhyellä varoitusajalla',
    ],
    useCases: [
      { title: 'Kylpyhuoneremontti', description: 'Vanhoissa taloissa lattiamassoissa ja tasoitteissa on usein asbestia. Puramme ne turvallisesti ennen pinnoitustöitä.' },
      { title: 'Putkistosaneeraus', description: 'Putkieristeet voivat sisältää asbestia. Hoidamme poiston ennen LVI-töiden aloitusta.' },
      { title: 'Julkisivusaneeraus', description: 'Vanhat julkisivulevyt ja -maalit saattavat sisältää asbestia. Kartoitamme ja puramme tarvittaessa.' },
      { title: 'Teollisuuspurku', description: 'Teollisuusrakennusten eristeet, kattorakenteet ja muut materiaalit puretaan turvallisesti ja tehokkaasti.' },
    ],
    faq: [
      { question: 'Vaaditaanko asbestipurulle lupa?', answer: 'Kyllä. Asbestipurku vaatii aina asbestipurkuluvan, joka RGT:llä on voimassa. Luvaton asbestipurku on lainvastaista ja vaarallista.' },
      { question: 'Miten asbestin tunnistaa?', answer: 'Asbestia ei voi tunnistaa silmämääräisesti. Ennen purkutöitä suosittelemme asbestikartoitusta, jossa näytteet analysoidaan laboratoriossa.' },
      { question: 'Kuinka kauan asbestipurku kestää?', answer: 'Pienet kohteet, kuten yksittäinen kylpyhuone, voidaan hoitaa 1-2 päivässä. Laajemmat kohteet suunnitellaan tapauskohtaisesti.' },
      { question: 'Mitä asbestipurun jälkeen tapahtuu?', answer: 'Jätteet toimitetaan lain mukaisesti asbestijätettä käsitteleville laitoksille. Työmaa siivotaan ja tarvittaessa tehdään lopputarkastus.' },
      { question: 'Onko asbestipurku kallista?', answer: 'Hinta riippuu kohteen koosta ja asbestin määrästä. Pyydä meiltä maksuton tarjous - tulemme tarvittaessa kartoittamaan kohteen paikan päällä.' },
    ],
    seo: {
      title: 'Asbestipurku Helsinki | RGT Rakennuspalvelut - Luvallinen Asbestinpoisto',
      description: 'Ammattimainen asbestipurku Helsingissä ja Uudellamaalla. Voimassa oleva asbestipurkulupa. Nopea aikataulu, siisti työ. Pyydä ilmainen tarjous.',
      keywords: ['asbestipurku', 'asbestipurku helsinki', 'asbestinpoisto', 'asbestipurkulupa', 'asbestikartoitus', 'asbestipurku espoo', 'asbestipurku vantaa'],
    },
  },
  {
    slug: 'purku-urakointi',
    name: 'Purku-urakointi',
    shortDesc: 'Nopeat ja siistit purku-urakat pienistä suuriin kohteisiin.',
    icon: '',
    description:
      'Suoritamme kaikenlaisia purku-urakoita - keittiöiden, kylpyhuoneiden ja muiden tilojen purkamisesta kokonaisten rakenteiden purkuun. Työmme on nopeaa, siistiä ja kustannustehokasta. Hoidamme myös jätteiden kuljetuksen.',
    features: [
      'Keittiöiden ja kylpyhuoneiden purku',
      'Rakenteiden ja väliseinien purku',
      'Piikkaustyöt ja betonin purku',
      'Jätteiden lajittelu ja kuljetus',
      'Siisti ja huolellinen jälki',
      'Nopea aikataulu',
    ],
    useCases: [
      { title: 'Keittiöremontti', description: 'Puramme vanhan keittiön kaapistoineen ja pinnoitteineen valmiiksi uuden asennukselle.' },
      { title: 'Kylpyhuoneremontti', description: 'Purku laattoineen, tasoitteineen ja kalustein - valmis pintaremontille.' },
      { title: 'Toimistosaneeraus', description: 'Liiketilojen väliseinät, katto- ja lattiarakenteet puretaan aikataulun mukaan.' },
      { title: 'Piikkaustyöt', description: 'Betonin piikkaus ja poraus - sekä pienissä että vaativissa kohteissa.' },
    ],
    faq: [
      { question: 'Kuljetetaanko purkujätteet pois?', answer: 'Kyllä, hoidamme purkujätteiden lajittelun ja kuljetuksen. Hinta sisältyy tarjoukseen.' },
      { question: 'Pystyykö purun tekemään nopeasti?', answer: 'Kyllä. Meillä on ammattitaitoinen tiimi ja pystymme aloittamaan työn lyhyellä varoitusajalla.' },
      { question: 'Teettekö myös osittaisia purkuja?', answer: 'Kyllä. Voimme purkaa esimerkiksi vain yksittäisen seinän tai katon, ei tarvitse purkaa koko tilaa.' },
    ],
    seo: {
      title: 'Purku-urakointi Helsinki | RGT Rakennuspalvelut',
      description: 'Ammattimaiset purku-urakat Helsingissä ja Uudellamaalla. Keittiöt, kylpyhuoneet, väliseinät, piikkaus. Jätteet kuljetetaan pois. Pyydä tarjous.',
      keywords: ['purku-urakka', 'purku-urakointi helsinki', 'kylpyhuoneen purku', 'keittiön purku', 'piikkaus', 'väliseinän purku'],
    },
  },
  {
    slug: 'keittioremontti',
    name: 'Keittiöremontti',
    shortDesc: 'Keittiöremontti avaimet käteen - purkamisesta asennukseen.',
    icon: '',
    description:
      'Toteutamme keittiöremontin alusta loppuun. Puramme vanhan keittiön, asennamme uudet kaapistot ja kalusteet, uusimme tarvittaessa lattian ja seinäpinnat. Työn laatu on huippuluokkaa ja aikataulu pitää.',
    features: [
      'Vanhan keittiön purku',
      'Uusien kaapiston asennus',
      'Lattian vaihto tai pinnoitus',
      'Väliseinä- ja pintamuutokset',
      'Kodinkoneiden kytkentä',
      'Siisti lopputulos',
    ],
    useCases: [
      { title: 'Täysremontti', description: 'Kokonaan uusi keittiö - purku, uudet rakenteet, kalusteet ja pinnat.' },
      { title: 'Kaapistouusinta', description: 'Uudet kaapistot vanhan pohjan tilalle ilman suuria rakenteellisia muutoksia.' },
      { title: 'Pintaremontti', description: 'Lattian, seinien tai katon uusiminen keittiössä.' },
    ],
    faq: [
      { question: 'Kuinka kauan keittiöremontti kestää?', answer: 'Peruskeittiöremontti valmistuu yleensä 1-2 viikossa. Vaativammat kohteet suunnitellaan tapauskohtaisesti.' },
      { question: 'Toimitteko Helsingissä?', answer: 'Kyllä, toimimme Helsingissä ja koko Uudenmaan alueella.' },
      { question: 'Voitteko hankkia materiaalit?', answer: 'Voimme auttaa materiaalien hankinnassa tai asiakas voi hankkia ne itse. Sovitaan tapauskohtaisesti.' },
    ],
    seo: {
      title: 'Keittiöremontti Helsinki | RGT Rakennuspalvelut',
      description: 'Laadukas keittiöremontti Helsingissä. Purusta asennukseen - avaimet käteen. Kokenut tiimi, nopea aikataulu. Pyydä tarjous.',
      keywords: ['keittiöremontti', 'keittiöremontti helsinki', 'keittiön purku', 'keittiöasennus', 'keittiöremontti espoo'],
    },
  },
  {
    slug: 'saneeraus',
    name: 'Saneeraus ja pinnoitukset',
    shortDesc: 'Lattiat, seinät ja katot - laadukkaasti uusittuna.',
    icon: '',
    description:
      'Uusimme lattiat, seinäpinnat ja katot asunnoissa, toimistoissa ja liiketiloissa. Työmme on huolellista ja siistiä. Materiaalivalikoima on laaja - laminaatista parketista laattaan.',
    features: [
      'Lattioiden vaihto ja pinnoitus',
      'Seinien tasoitus ja maalaus',
      'Laattatyöt',
      'Väliseinien rakentaminen',
      'Katon uusiminen',
      'Pintamateriaalien asennus',
    ],
    useCases: [
      { title: 'Asuntoremontti', description: 'Lattioiden, seinien ja katon uusiminen asuinhuoneistossa.' },
      { title: 'Toimistosaneeraus', description: 'Toimistotilojen pinnoitukset aikataulun mukaan.' },
      { title: 'Kylpyhuoneremontti', description: 'Laattatyöt, vesieristykset ja pinnoitukset.' },
    ],
    faq: [
      { question: 'Mitä lattiamateriaaleja asennatte?', answer: 'Asennamme laminaattia, parkettia, laattaa, vinyyli- ja muovimattoa sekä muita pintamateriaaleja.' },
      { question: 'Tarvitseeko asunnosta muuttaa pois remontin ajaksi?', answer: 'Pienissä töissä ei välttämättä tarvitse. Laajemmissa saneerauksissa suosittelemme väliaikaista asumista muualla.' },
    ],
    seo: {
      title: 'Saneeraus Helsinki | Lattia- ja seinäremontit | RGT Rakennuspalvelut',
      description: 'Laadukkaat saneeraustyöt Helsingissä - lattiat, seinät, katot. Kokenut tiimi, nopea aikataulu. Pyydä tarjous.',
      keywords: ['saneeraus helsinki', 'lattiasaneeraus', 'seinäremontti', 'pintaremontti helsinki', 'laattatyöt'],
    },
  },
  {
    slug: 'loppusiivous',
    name: 'Loppusiivous',
    shortDesc: 'Remontin jälkeinen siivous - työmaa puhtaaksi nopeasti.',
    icon: '',
    description:
      'Remontin jälkeen työmaa on usein pölyn ja jätteen peitossa. Hoidamme loppusiivouksen ammattimaisesti - lopputulos on puhdas ja valmis käyttöön. Siivouspalvelu on saatavilla myös erillisenä tilauksena.',
    features: [
      'Rakennuspölyn poisto kaikista pinnoista',
      'Lattioiden pesu ja kiillotus',
      'Ikkunoiden puhdistus',
      'Kaluston pyyhintä',
      'Jätepussien vienti',
      'Nopea ja tehokas palvelu',
    ],
    useCases: [
      { title: 'Remontin loppusiivous', description: 'Rakennustöiden jälkeinen perusteellinen siivous.' },
      { title: 'Muuttoon valmistelu', description: 'Tila puhtaaksi ennen muuttoa tai asiakkaan vastaanottoa.' },
      { title: 'Työmaan ylläpitosiivous', description: 'Säännöllinen siivous pitkäkestoisilla rakennustyömailla.' },
    ],
    faq: [
      { question: 'Kuinka nopeasti loppusiivous voidaan tehdä?', answer: 'Yleensä pystymme tulemaan 1-3 päivän sisällä tilauksesta. Kiireellisissä tapauksissa sovitaan erikseen.' },
      { question: 'Sisältyykö loppusiivous purkutöihin?', answer: 'Asiakkaan halutessa voimme sisällyttää loppusiivouksen urakkahintaan.' },
    ],
    seo: {
      title: 'Loppusiivous Helsinki | Rakennussiivous | RGT Rakennuspalvelut',
      description: 'Ammattimainen loppusiivous Helsingissä - remontin jälkeen tila puhtaaksi. Nopea palvelu. Pyydä tarjous.',
      keywords: ['loppusiivous', 'loppusiivous helsinki', 'rakennussiivous', 'siivous remontin jälkeen'],
    },
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
