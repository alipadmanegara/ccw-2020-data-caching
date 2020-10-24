const Redis = require("ioredis");
const redis = new Redis({
  port: 6379, // Redis port
  host: "127.0.0.1", // Redis host
  db: 0,
});

redis.on('connect', function() {
  console.log('connected to redis.');
  });

redis.on("error", function(error) {
  console.error(error);
});

module.exports = {
  redisClient: redis
};