import getTweetsFromDB from '../db/tweets';

class TweetController {
    async getAllTweets() {
        const allTweets = await getTweetsFromDB();
        const evenTweets = allTweets.filter((num: number) => num % 2 === 0);
        return evenTweets;
    }
}

export default TweetController;