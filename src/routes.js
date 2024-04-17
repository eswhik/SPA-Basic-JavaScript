import { homePage, posts, aboutUs, contact } from './functions.js';

const appRouter = {
    '/spa/home': homePage,
    '/spa/posts': posts,
    '/spa/about-us': aboutUs,
    '/spa/contact': contact
};

export { appRouter };