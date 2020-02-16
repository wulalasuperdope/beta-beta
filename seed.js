const { Route, Video, Gym } = require('./server/db');

const seed = async () => {
  const gyms = [
    {
      name: 'the Gravity Vault - Hoboken',
      image: '/img_GV.jpeg',
      map: '/HBKN_Route_Setting_Map_Completed_For_Website.png'
    }
  ];

  await Promise.all(gyms.map(gym => Gym.create(gym)));

  const routes = [
    {
      grade: 'V4',
      holdColor: 'Pink',
      wallLocation: 'Area D',
      image: '/IMG_pinkV4.JPG',
      gymId: 1
    },
    {
      grade: 'V4',
      holdColor: 'White',
      wallLocation: 'Area E',
      image: '/IMG_whiteV4.JPG',
      gymId: 1
    }
  ];

  await Promise.all(routes.map(route => Route.create(route)));

  const videos = [
    {
      name: 'beta #1',
      // videoUrl: 'https://youtu.be/cgBhw0htQuA',
      routeId: 1
    },
    {
      name: 'beta #1',
      // videoUrl: 'https://youtu.be/y0kZQZyWZOY',
      routeId: 2
    }
  ];

  await Promise.all(videos.map(video => Video.create(video)));
};

module.exports = seed;
