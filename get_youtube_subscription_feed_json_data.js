
// run this on https://www.youtube.com/feed/subscriptions?flow=2 (list view)
// this list view gives you a (shortened) description too

const
getTitle		= (div) => div.querySelector("#video-title yt-formatted-string").textContent,
getHref			= (div) => div.querySelector("a").href,
getDescription	= (div) => div.querySelector("#description-text").textContent,
getRuntime		= (div) => div.querySelector("#overlays ytd-thumbnail-overlay-time-status-renderer").textContent.trim(),
getChannel		= (div) => div.querySelector("#text-container.ytd-channel-name a").textContent,
getViews		= (div) => div.querySelectorAll("#metadata-line span.ytd-video-meta-block")[0].textContent,
getUploaded		= (div) => div.querySelectorAll("#metadata-line span.ytd-video-meta-block")[1].textContent;

divs = $$("#contents ytd-expanded-shelf-contents-renderer #dismissible").filter((div) => getRuntime(div) !== "UPCOMING");
result = divs.map((div) => ({
	title: 			getTitle(div),
	href: 			getHref(div),
	description: 	getDescription(div),
	runtime: 		getRuntime(div),
	channel: 		getChannel(div),
	views: 			getViews(div),
	uploaded: 		getUploaded(div),
}));
json = JSON.stringify(result, null, 2)  // third parameter is for pretty printing with 2 spaces

console.log(json)
copy(json)


// or run this in the console (chrome) on https://www.youtube.com/feed/subscriptions?flow=1 (grid view)
// this grid view is missing the description

const
getTitle	= (div) => div.querySelector("#video-title").textContent,
getHref		= (div) => div.querySelector("a").href,
getRuntime	= (div) => div.querySelector("#overlays ytd-thumbnail-overlay-time-status-renderer").textContent.trim(),
getChannel	= (div) => div.querySelector("#text-container.ytd-channel-name a").textContent,
getViews	= (div) => div.querySelectorAll("#metadata-line span.ytd-video-meta-block")[0].textContent,
getUploaded	= (div) => div.querySelectorAll("#metadata-line span.ytd-video-meta-block")[1].textContent;

divs = $$("#contents ytd-rich-grid-row #dismissible").filter((div) => getRuntime(div) !== "UPCOMING");
result = divs.map((div) => ({
	title: 			getTitle(div),
	href: 			getHref(div),
	runtime: 		getRuntime(div),
	channel: 		getChannel(div),
	views: 			getViews(div),
	uploaded: 		getUploaded(div),
}));
json = JSON.stringify(result, null, 2)  // third parameter is for pretty printing with 2 spaces

console.log(json)
copy(json)


