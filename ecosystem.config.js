module.exports = {
  apps: [
    {
      name: "giathanhtravel.satek.vn",
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      watch: true,
      env: {
        NODE_ENV: "production",
        PORT: 3011,
      },
    },  
  ],
};
