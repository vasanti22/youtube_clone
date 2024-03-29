
const apikey = process.env.REACT_APP_API_KEY;


export const YOUTUBE_VIDEO_API = 
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+apikey;

export const 
FETCH_POPULAR_VIDEOS_BY_CATEGORY_ID = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=25&regionCode=in&key="+apikey+"&videoCategoryId=";

export const 
FETCH_VIDEOS_BY_KEYWORD = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&regionCode=in&key="+apikey+"&q=";

export const YOUTUBE_COMMENTS_API = 
"https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&maxResults=50&key="+apikey;


export const YOUTUBE_SEARCH_API = 
"https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const FETCH_VIDEOS_DETAILS = 
"https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&type=video&key="+apikey
+"&id=";

