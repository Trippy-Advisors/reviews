var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/reviews", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var schema = mongoose.Schema({
  userId: Number,
  username: String,
  userLocation: String,
  numberOfContributions: Number,
  helpfulVotes: Number,
  profileImage: String,
  postDate: Date,
  reviewScore: Number,
  reviewTitle: Number,
  reviewText: String,
  stayDate: Date
});

var Reviews = mongoose.model("Reviews", schema);

var arrayOfLocations = [
  "Denver",
  "Philadelphia",
  "Sacramento",
  "New York",
  "San Francisco"
];

var getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

var review = new Reviews({
  hotelId: 1,
  reviews: [
    {
      userId: 1,
      username: "user", //to be randomly generater later
      userLocation:
        arrayOfLocations[Math.floor(Math.random() * arrayOfLocations.length)],
      numberOfContributions: Math.floor(Math.random() * Math.floor(40)),
      helpfulVotes: Math.floor(Math.random() * Math.floor(20)),
      profileEmage: "imagelink",
      postDate: "2018-12-12", //to be randomly generated later
      reviewScore: getRandomNumber(1, 5),
      reviewText: "Text", //to be randomly generated later
      stayDate: "2018-12-09" //to be randomly generated later
    }
  ]
});
