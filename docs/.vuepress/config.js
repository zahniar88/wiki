module.exports = {
  title: 'NikiPedia',
  base: '/',
  dest: 'public',
  // description: 'NikiPedia Indonesia',
  logo: 'https://scontent.fplm3-1.fna.fbcdn.net/v/t1.0-9/70638228_125227068850913_4921359444006141952_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_eui2=AeEqk9m6_NB-yhHrYmsm2Uu7cjCMybOXz5NyMIzJs5fPk3zh9rN3kbM9E54ffwhX867PRU1uRXqv4rUKOZc-SH4q&_nc_ohc=95hUSkmb4s0AX-3z8KO&_nc_ht=scontent.fplm3-1.fna&oh=2856249966e188df55769add3eac74c3&oe=5F4322E4',
  theme: require.resolve('../../'),
  themeConfig: {
  authors: [
      {
      name: 'Zahniar Adirahman',
      avatar: 'https://scontent.fplm3-1.fna.fbcdn.net/v/t1.0-9/70638228_125227068850913_4921359444006141952_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_eui2=AeEqk9m6_NB-yhHrYmsm2Uu7cjCMybOXz5NyMIzJs5fPk3zh9rN3kbM9E54ffwhX867PRU1uRXqv4rUKOZc-SH4q&_nc_ohc=95hUSkmb4s0AX-3z8KO&_nc_ht=scontent.fplm3-1.fna&oh=2856249966e188df55769add3eac74c3&oe=5F4322E4',
      link: 'https://www.instagram.com/ziqo.space/',
      linktext: 'Visit',
      }
    ],
    footer: {
      contact: [
        {
          type: 'codepen',
          link: '#',
        },
        {
          type: 'facebook',
          link: 'https://www.facebook.com/zahniar.adirahman.5/',
        },
        {
          type: 'github',
          link: 'https://github.com/zahniar88',
        },
        {
          type: 'gitlab',
          link: 'https://gitlab.com/zahniar88',
        },
        {
          type: 'instagram',
          link: 'https://www.instagram.com/ziqo.space/',
        },
        {
          type: 'linkedin',
          link: '#',
        },
        {
          type: 'mail',
          link: '#',
        },
        {
          type: 'messenger',
          link: '#',
        },
        {
          type: 'phone',
          link: '#',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/wowthemesnet',
        },
        {
          type: 'web',
          link: '#',
        }
      ],
      copyright: [
        {
          text: 'Licensed MIT.',
          link: '#',
        },
        {
          text: 'Copyright 2020 by Zahniar Adirahman',
          link: '#',
        },
      ],
    },

    sitemap: {
      hostname: 'https://nikipedia.space/rss.xml'
    },
    comment: {
      service: 'disqus',
      shortname: 'nikipedia',
    },
    newsletter: {
      endpoint: 'https://wowthemes.us11.list-manage.com/subscribe/post?u=8aeb20a530e124561927d3bd8&id=8c3d2d214b'
    },
    feed: {
      canonical_base: 'https://nikipedia.space/rss.xml',
    },
    smoothScroll: true
  },
}
