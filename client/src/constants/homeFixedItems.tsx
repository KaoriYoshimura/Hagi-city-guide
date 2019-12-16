import { VARIANTS } from './category';
import imgAccessMap from '../assets/images/homeFixed/accessMap.png';
import imgWorldHeritage from '../assets/images/homeFixed/worldHeritage.jpg';
import imgGourmet from '../assets/images/homeFixed/fugu.jpg';
import imgSpa from '../assets/images/homeFixed/onsen.jpg';
import imgLocal from '../assets/images/homeFixed/hagiyaki.jpg';

export const accessMap = {
    link: 'http://www.hagishi.com/en/access/',
    title: 'How to access to Hagi',
    image: imgAccessMap,
    category: VARIANTS.ACCESS,
    isDefault: false,
};

export const worldHeritage = {
    link: 'http://www.hagishi.com/en/sightseeing/',
    title: 'Site of Japan’s Meiji Industrial Revolution',
    image: imgWorldHeritage,
    category: VARIANTS.WORLDHERITAGE,
    isDefault: false,
};

export const gourmet = {
    link: 'http://www.hagishi.com/en/gourmet/',
    title: 'Enjoy local food',
    image: imgGourmet,
    category: VARIANTS.GOURMET,
    isDefault: false,
};

export const guide = {
    link: 'http://www.hagishi.com/en/bb_onsen/',
    title: 'Enjoy our spa - onsen -',
    image: imgSpa,
    category: VARIANTS.GUIDE,
    isDefault: false,
};

export const local = {
    link: 'http://www.hagishi.com/en/products/',
    title: 'Our local specialities',
    image: imgLocal,
    category: VARIANTS.LOCAL,
    isDefault: false,
};
