get '/list' do
	@list = Post.all
	erb :list
end

get '/new' do
	erb :cms
end

post'/add' do
	puts params.to_json
	Post.create(title: params["title"], content: params.to_json)
	content_type :json
  Post.last.content
end

post '/article' do
	content_type :json
	Post.find(params['id']).content.to_json
end


