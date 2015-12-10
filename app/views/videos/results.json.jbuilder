json.prevPageToken @result.prev_page
json.nextPageToken @result.next_page

json.items do	
	json.array! @result.response["items"] do |item|
		json.id item["id"]["videoId"]
		json.title item["snippet"]["title"]
		json.published_at item["snippet"]["publishedAt"]
		json.thumbnail item["snippet"]["thumbnails"]["high"]["url"]
		json.description item["snippet"]["description"]
	end
end
