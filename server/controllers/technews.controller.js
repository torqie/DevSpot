const axios = require('axios');

// Get Tech News
exports.all = async (req, res) => {
  axios
      .get("https://api.cognitive.microsoft.com/bing/v7.0/news", {
        headers: {
          "Ocp-Apim-Subscription-Key": process.env.TECH_NEWS_API_KEY
        }
      }).then(response => {
        return res.json(response.data);
        // return res.json(response);
      }).catch(error => {
        console.log("Error getting news article: ", error)
      });
};

