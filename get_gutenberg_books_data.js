
function getBook(book) {
	return {
		authors: book.authors.map((author) => `${author.name} (${author.birth_year} - ${author.death_year})`).join(", "),
		title: book.title,
		image: book.formats["image/jpeg"],
		link: book.formats["text/plain"] ?? book.formats["text/plain; charset=utf-8"],
	}
};


let results = '';
fetch("https://gutendex.com/books")
	.then((response) => response.json())
	.then((json) => json.results)
	.then((books) => {
		console.log(books);
		results = Array.from(books).map(getBook);
		console.log(results)
	});

await new Promise(r => setTimeout(r, 2000));  // sleep to wait until promises are fulfilled, then continue to fetch the texts

results.forEach((book) => {
	fetch(book.link)
		.then((response) => response.text())
		.then((text) => book.text = text.substring(0, 50000))
});

await new Promise(r => setTimeout(r, 5000));  // sleep to wait until promises are fulfilled, then continue to print the results

json = JSON.stringify(results, null, 2);
console.log(json);

