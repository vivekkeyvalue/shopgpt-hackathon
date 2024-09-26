import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";

import { AppWrap } from "../../wrapper";

import "./Content.scss";
import ChatScreen from "../Chat/ChatScreen";

const Content = () => {
  const [loading, setLoading] = useState(false);
  const [jsonData, setJsonData] = useState([]);
  const [userId, setUserId] = useState();

  const compositionWidth = Math.floor(((window.innerWidth - 32) * 2) / 3);
  const compositionHeight = Math.floor(window.innerHeight - 96);

  useEffect(() => {
    if (!userId) setUserId(nanoid());
  }, [userId]);

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [0, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info w-1/3 flex gap-4"
      >
        <ChatScreen
          setJsonData={setJsonData}
          setLoading={setLoading}
          userId={userId}
          loading={loading}
          compositionWidth={compositionWidth}
          compositionHeight={compositionHeight}
        />
      </motion.div>
    </div>
  );
};

export default AppWrap(Content, "get started");
