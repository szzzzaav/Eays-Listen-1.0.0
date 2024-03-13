import { useEffect, useState } from "react";

function useChannel(role = "consumer", initial) {
  const [channel, setChannel] = useState();
  const [data, setData] = useState([initial]);
  const createId = function () {
    let id = +localStorage.getItem("music");
    if (!id) {
      id = 0;
    }
    id++;
    localStorage.setItem("music", id);
    return id;
  };
  const sendMsg = function (msg, channel) {
    channel.postMessage({ id: channel.id, ...msg });
  };

  useEffect(
    function () {
      const createChannel = function () {
        const channel = new BroadcastChannel("music");
        if (!channel.id) channel.id = createId();
        if (!channel.listeners) channel.listeners = new Set();
        sendMsg({ type: "create", role }, channel);
        window.addEventListener("unload", function () {
          sendMsg({ type: "delete" }, channel);
        });
        channel.addEventListener("message", function (e) {
          const { type, role: reciveRole, id, data: reciveData } = e.data;
          if (type === "create" && reciveRole === "listener") {
            console.log("listener create");
            sendMsg({ type: "confirm", role }, channel);
            channel.listeners.add(id);
          } else if (type === "create") {
            console.log("consumer create");
            sendMsg({ type: "confirm", role }, channel);
          } else if (type === "confirm" && reciveRole === "listener") {
            console.log("consumer recive listener");
            channel.listeners.add(id);
          } else if (type === "delete") {
            channel.listeners.delete(id);
          }
          if (reciveData) {
            setData?.((d) => [...d, { music: reciveData }]);
          }
        });
        return channel;
      };
      setChannel(createChannel());
    },
    [role]
  );

  return { channel, sendMsg, data, setData };
}

export default useChannel;
