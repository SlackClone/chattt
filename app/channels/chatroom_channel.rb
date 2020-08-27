class ChatroomChannel < ApplicationCable::Channel

  # connected後訂閱者行為
  def subscribed
    stream_from "chatroom_channel_#{params[:chatroom_id]}"
    # puts "--------------------"
    # puts params
    # puts "--------------------"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
