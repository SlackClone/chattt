import consumer from "./consumer"
import { Subscription } from "@rails/actioncable";

document.addEventListener('turbolinks:load', () => {
  
  const element = document.getElementById("channel_id");
  const channelId = element.getAttribute("data-channel-id");
  // const submitBtn = document.querySelector('#submit');
  // const messageInput = document.querySelector('#message');
  // console.log(element);
  // console.log(channelId);
  consumer.subscriptions.create({channel: "ChatroomChannel", chatroom_id: channelId}, {
    connected() {
      console.log(`Web Socket server connecting! ${channelId}`)
    },
  
    disconnected() {
    },
  
    received(data) {
      const msgBox = document.querySelector("#messagelist")
      const newMsg = document.createElement("li")
      newMsg.innerHTML = data.message
      msgBox.insertAdjacentElement("afterbegin", newMsg)
      document.forms[0].reset()
      console.log(data.message)
    }
  });
})

