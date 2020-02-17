const { Route, Video, Gym } = require('./server/db');

const seed = async () => {
  const gyms = [
    {
      name: 'The Gravity Vault - Hoboken, NJ',
      imageUrl: '/img_GV.jpeg',
      mapUrl: '/HBKN_Route_Setting_Map_Completed_For_Website.png'
    },
    {
      name: 'The Gravity Vault - Upper Saddle River, NJ',
      imageUrl: '/img_USR.jpeg',
      mapUrl: '/UPSR-Route_Setting.jpg'
    },
    {
      name: 'Brooklyn Boulders - Queensbridge, NY',
      imageUrl: '/img_BKBQB.jpg',
      mapUrl: '/qb-map.png'
    }
    // {
    //   name: 'Brooklyn Boulders - Gowanus, NY',
    //   imageUrl: '/gowanus.jpg',
    //   mapUrl: '/gowanus-map.png'
    // }
  ];

  await Promise.all(gyms.map(gym => Gym.create(gym)));

  const routes = [
    {
      id: 1,
      grade: 'V4',
      holdColor: 'Pink',
      wallLocation: 'Area D',
      imageUrl: '/IMG_pinkV4.JPG',
      gymId: 1
    },
    {
      id: 2,
      grade: 'V4',
      holdColor: 'White',
      wallLocation: 'Area E',
      imageUrl: '/IMG_whiteV4.JPG',
      gymId: 1
    }
  ];

  await Promise.all(routes.map(route => Route.create(route)));

  const videos = [
    {
      videoUrl: 'https://youtu.be/QfBoFX_XZwI',
      routeId: 1
    },
    {
      videoUrl: 'https://youtu.be/IMyeYNT-Oh4',
      routeId: 1
    },
    {
      videoUrl: 'https://youtu.be/GMAXPmIkeoU',
      routeId: 2
    }
  ];

  await Promise.all(videos.map(video => Video.create(video)));
};

module.exports = seed;
