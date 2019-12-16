import { VARIANTS } from './category';
import imgAccessMap from '../assets/images/homePosts/accessMap.png';
import imgWorldHeritage from '../assets/images/homePosts/worldHeritage.jpg';
import imgGourmet from '../assets/images/homePosts/fugu.jpg';
import imgSpa from '../assets/images/homePosts/onsen.jpg';
import imgLocal from '../assets/images/homePosts/hagiyaki.jpg';

export const accessMap = {
    link: 'http://www.hagishi.com/en/access/',
    title: 'How to access to Hagi',
    image: imgAccessMap,
    category: VARIANTS.ACCESS,
};

export const worldHeritage = {
    link: 'http://www.hagishi.com/en/sightseeing/',
    title: 'Site of Japan’s Meiji Industrial Revolution',
    image: imgWorldHeritage,
    category: VARIANTS.WORLDHERITAGE,
};

export const gourmet = {
    link: 'http://www.hagishi.com/en/gourmet/',
    title: 'Enjoy local food',
    image: imgGourmet,
    category: VARIANTS.GOURMET,
};

export const guide = {
    link: 'http://www.hagishi.com/en/bb_onsen/',
    title: 'Enjoy our spa - onsen -',
    image: imgSpa,
    category: VARIANTS.GUIDE,
};

export const local = {
    link: 'http://www.hagishi.com/en/products/',
    title: 'Our local specialities',
    image: imgLocal,
    category: VARIANTS.LOCAL,
};
