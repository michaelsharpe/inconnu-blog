const base = {
  name: 'The Unknown Philosopher',
  url: 'https://www.unknownphilosopher.com'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} - Facta, non Verba`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } is a blog dedicated to the exploration of Truth through the Light of Traditional Martinism.`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'Facta, non Verba.',

  /* url */
  siteUrl: base.url
  // pathPrefix: '',
};

module.exports = config;
