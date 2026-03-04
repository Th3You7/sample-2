import { getPermalink, getBlogPermalink, getHomePermalink } from './utils/permalinks';

const whatsappUrl = 'https://wa.me/212780761806';

const home = getHomePermalink();

export const headerData = {
  links: [
    {
      text: 'Home',
      href: home,
    },
    {
      text: 'Services',
      href: `${home}#features`,
    },
    {
      text: 'Pricing',
      href: `${home}#pricing`,
    },
    {
      text: 'FAQ',
      href: `${home}#faqs`,
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Buy now', href: whatsappUrl, variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Service',
      links: [
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Features', href: getPermalink('/') + '#features' },
        { text: 'How to activate', href: getPermalink('/') + '#how-to-activate' },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Contact us', href: getPermalink('/contact') },
        { text: 'FAQs', href: getPermalink('/') + '#faqs' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About us', href: getPermalink('/about') },
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy policy', href: getPermalink('/privacy') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `
    IPTV & Streaming service · All rights reserved.
  `,
};
