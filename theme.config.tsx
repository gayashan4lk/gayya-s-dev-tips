import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './components/logo'

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://github.com/gayashan4lk',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/gayashan4lk/gayya-s-dev-tips',
  footer: {
    text: 'Build with ❤️ by Gayya @ 2024',
  },
}

export default config
