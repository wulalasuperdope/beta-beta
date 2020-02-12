const { Route, Video } = require('./server/db');

const seed = async () => {
  const routes = [
    {
      grade: 'V10',
      holdColor: 'Pink',
      gymName: 'GV',
      location: 'slab',
      imageUrl: 'https://images.app.goo.gl/BXbshxESi1VaGm2C7'
    },
    {
      grade: 'V15',
      holdColor: 'White',
      gymName: 'BKB QB',
      location: 'roof',
      imageUrl: 'https://images.app.goo.gl/eXvxbxixfTdqU2My7'
    },
    {
      grade: 'V8',
      holdColor: 'Green',
      gymName: 'Central Rock',
      location: 'island',
      imageUrl: 'https://images.app.goo.gl/Nwm4GKVaXyJRGu6V7'
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
