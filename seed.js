const { Route, Video, Gym } = require('./server/db');

const seed = async () => {
  const gyms = [
    {
      name: 'The Gravity Vault - Hoboken, NJ',
      imageUrl: '/img_GV.jpeg',
      mapUrl: '/HBKN_Route_Setting_Map_Completed_For_Website.png'
    },
    {
      name: 'Brooklyn Boulders - Queensbridge, NY',
      imageUrl: '/img_BKBQB.jpg',
      mapUrl: '/qb-map.png'
    }
  ];

  await Promise.all(gyms.map(gym => Gym.create(gym)));

  const routes = [
    {
      grade: 'V4',
      holdColor: 'Pink',
      wallLocation: 'Area D',
      imageUrl: '/IMG_pinkV4.JPG',
      gymId: 1
    },
    {
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
      name: 'beta #1',
      videoUrl: 'https://youtu.be/QfBoFX_XZwI',
      routeId: 1
    },
    {
      name: 'beta #2',
      videoUrl: 'https://youtu.be/IMyeYNT-Oh4',
      routeId: 1
    },
    {
      name: 'beta #1',
      videoUrl: 'https://youtu.be/GMAXPmIkeoU',
      routeId: 2
    }
  ];

  await Promise.all(videos.map(video => Video.create(video)));
};

module.exports = seed;
