get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/hello' do
hello
end
