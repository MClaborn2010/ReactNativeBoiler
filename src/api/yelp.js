import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer jgTnyMUyKqN4rh8SmfY5_s_JCwj5mSuAfBE2A50nwyNRJkViRuJlz-4CbiiQDo29cvYGBJAttEw-pbJojY3oDwqG7N4agv7HM02lhQMSadf-jo5jmKghWtf3s9NjZXYx",
  },
});
