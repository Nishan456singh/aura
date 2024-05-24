import instagram from '@/public/assets/icons/instagram.png';
import tiktok from '@/public/assets/icons/tiktok.png';
import facebook from '@/public/assets/icons/facebook.png';



export const headerLinks = [
    {
        label: 'Home',
        route: '/',
    },
    {
        label: 'Add Clothing',
        route: '/events/create',
    },
    {
        label: 'My Account',
        route: '/profile',
    },
    {
        label: 'Men',
        route: '/men',
    },
    {
        label: 'Women',
        route: '/women',
    },
    {
        label: 'Kids',
        route: '/kids',
    },
]

export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: 'https://',
}

export const socialLinks = [
    {
      name: 'TikTok',
      iconUrl: tiktok,
      link: 'https://www.tiktok.com',
    },
    {
      name: 'Facebook',
      iconUrl: facebook,
      link: 'https://www.facebook.com',
    },
    {
        name: 'Instagram',
        iconUrl: instagram,
        link: 'https://www.instagram.com',
    },
    
];