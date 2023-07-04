module.exports = ({ env }) => ({
  url: env("https://southerntiereats-1b58ec965d6b.herokuapp.com/"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});
