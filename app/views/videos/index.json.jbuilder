json.array! @results do |result| 
	json.id result["id"]["videoId"]
	json.title result["snippet"]["title"]
	json.published_at result["snippet"]["publishedAt"]
	json.thumbnail result["snippet"]["thumbnails"]["high"]["url"]
end