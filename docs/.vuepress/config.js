const path = require('path')

module.exports = {
  title: 'developer-forge',

  description: 'Personal blogging website for Kealan Parr',

  locales: {
    '/': {
      lang: 'en-US',
    },
  },

  evergreen: true,

  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-132770851-2',
    }],
  ],

  chainWebpack: (config, isServer) => {
    if (isServer === false) {
      config.optimization.splitChunks({
        maxInitialRequests: 5,
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router|vssue)[\\/]/,
            name: 'vendor.vue',
            chunks: 'all',
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendor.commons',
            chunks: 'all',
          },
        },
      })
    }
  },

  theme: path.resolve(__dirname, '../../lib'),

  themeConfig: {
    lang: 'en-US',

    personalInfo: {
      nickname: 'developer-forge',
      description: 'Writing to learn',
      email: '',
      location: 'United Kingdom',
      organization: '',

      avatar: '/assets/img/avatar.jpg',

      sns: {
        github: {
          account: 'kealanparr',
          link: 'https://github.com/kealanparr',
        },
        // facebook: {
        //   account: 'meteorlxy.cn',
        //   link: 'https://www.facebook.com/meteorlxy.cn',
        // },
        linkedin: {
          account: 'meteorlxy',
          link: 'http://www.linkedin.com/in/meteorlxy',
        },
        twitter: {
          account: 'meteorlxy_cn',
          link: 'https://twitter.com/meteorlxy_cn',
        },
        // weibo: {
        //   account: '@焦炭君_Meteor',
        //   link: 'https://weibo.com/u/2039655434',
        // },
        // zhihu: {
        //   account: 'meteorlxy.cn',
        //   link: 'https://www.zhihu.com/people/meteorlxy.cn',
        // },
        // douban: {
        //   account: '159342708',
        //   link: 'https://www.douban.com/people/159342708',
        // },
        // reddit: {
        //   account: 'meteorlxy',
        //   link: 'https://www.reddit.com/user/meteorlxy',
        // },
        // medium: {
        //   account: 'meteorlxy.cn',
        //   link: 'https://medium.com/@meteorlxy.cn',
        // },
        // instagram: {
        //   account: 'meteorlxy.cn',
        //   link: 'https://www.instagram.com/meteorlxy.cn',
        // },
        // gitlab: {
        //   account: 'meteorlxy',
        //   link: 'https://gitlab.com/meteorlxy',
        // },
        // bitbucket: {
        //   account: 'meteorlxy',
        //   link: 'https://bitbucket.org/meteorlxy',
        // },
        // docker: {
        //   account: 'meteorlxy',
        //   link: 'https://hub.docker.com/u/meteorlxy',
        // },
        // csdn: {
        //   account: '',
        //   link: 'https://www.csdn.net/',
        // },
        // juejin: {
        //   account: 'meteorlxy',
        //   link: 'https://juejin.im/user/5c6fa9dde51d453fcb7baf09',
        // },
      },
    },

    header: {
      background: {
        // url: '/assets/img/header-image-01.jpg',
        useGeo: true,
      },
      showTitle: true,
    },

    footer: {
      poweredBy: false,
      poweredByTheme: false,
      custom: 'Copyright 2023-present <a href="https://github.com/kealanparr" target="_blank">kealanparr</a> | MIT License',
    },

    infoCard: {
      headerBackground: {
        // url: '/assets/img/header-image-01.jpg',
        useGeo: true,
      },
    },

    lastUpdated: true,

    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'About', link: '/about/', exact: false },
      { text: 'Posts', link: '/posts/', exact: false },
      // { text: 'Custom Pages', link: '/custom-pages/', exact: false },
      // { text: 'Changelog', link: 'https://github.com/meteorlxy/vuepress-theme-meteorlxy/blob/master/CHANGELOG.md' },
      { text: '30-projects', link: 'https://30-projects.com/' },
      // { text: 'Github', link: 'https://github.com/meteorlxy/vuepress-theme-meteorlxy' },
    ],

    // Enable smooth scrolling or not
    smoothScroll: false,

    // Configs for vuepress-plugin-zooming
    zooming: {
      // @see https://vuepress.github.io/en/plugins/zooming
    },

    comments: {
      owner: 'kealanparr',
      repo: 'developer-forge2',
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      autoCreateIssue: true,
    },

    pagination: {
      perPage: 20,
    },
  },
}
