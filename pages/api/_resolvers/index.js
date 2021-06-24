import axios from "axios";

export const resolvers = {
  Query: {
    getWeather: async (_, args) => {
      const { coords } = args;
      try {
        const weather = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=bc544267d9b2df2bfbfcc2bdce3a1272`
        );
        return weather.data;
      } catch (error) {
        throw error;
      }
    },
  },
};
