get '/list' do
	@list = Post.all
	erb :list
end

get '/new' do
	erb :cms
end

post'/add' do
	Post.create(title: params["title"], content: params.to_s)
	content_type :json
  Post.last.content.to_json
end

