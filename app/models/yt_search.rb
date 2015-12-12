class YtSearch
  def initialize(order, page_token = "")
    @response = HTTParty.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=#{order}&pageToken=#{page_token}&q=cats%7Clolcat%7Cfunnycats&type=video&videoEmbeddable=true&key=#{ENV["YT_API_KEY"]}")
    @next_page = @response["nextPageToken"] 
    @prev_page = @response["prevPageToken"]
  end

  attr_reader :response, :next_page, :prev_page

  def [](key)
    self.response["items"][key]
  end
end