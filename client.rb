require 'rubygems'
require 'socket.io-client-simple'

socket = SocketIO::Client::Simple.connect 'http://localhost:8080'

socket.on :connect do
  puts 'Connected'
end

socket.on :start do |data|
 puts data
end

socket.on :paint do |data|
  puts data
end

loop do
end
