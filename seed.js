const { Route, Video, Gym } = require('./server/db');

const seed = async () => {
  const gyms = [
    {
      name: 'the Gravity Vault - Hoboken'
    }
  ];

  await Promise.all(gyms.map(gym => Gym.create(gym)));

  const routes = [
    {
      grade: 'V10',
      holdColor: 'Pink',
      wallLocation: 'slab',
      wallDirection: 'west',
      imageUrl: 'https://images.app.goo.gl/BXbshxESi1VaGm2C7',
      gymId: 1
    },
    {
      grade: 'V15',
      holdColor: 'White',
      wallLocation: 'roof',
      wallDirection: 'east',
      imageUrl: 'https://images.app.goo.gl/eXvxbxixfTdqU2My7',
      gymId: 1
    },
    {
      grade: 'V8',
      holdColor: 'Green',
      wallLocation: 'island',
      wallDirection: 'north',
      imageUrl: 'https://images.app.goo.gl/Nwm4GKVaXyJRGu6V7',
      gymId: 1
    }
  ];

  await Promise.all(routes.map(route => Route.create(route)));

  const videos = [
    {
      videoUrl: 'https://youtu.be/cgBhw0htQuA',
      routeId: 1
    },
    {
      videoUrl: 'https://youtu.be/y0kZQZyWZOY',
      routeId: 2
    }
  ];

  await Promise.all(videos.map(video => Video.create(video)));
};

module.exports = seed;
