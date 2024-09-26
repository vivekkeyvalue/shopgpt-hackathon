import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";

import { AppWrap } from "../../wrapper";

import "./Content.scss";
import ChatScreen from "../Chat/ChatScreen";
import Card from "../../components/card/Card";
import { List } from "../../components/list/List";

const Content = () => {
  const [loading, setLoading] = useState(false);
  const [jsonData, setJsonData] = useState([]);
  const [userId, setUserId] = useState();

  const compositionWidth = Math.floor(((window.innerWidth - 32) * 2) / 3);
  const compositionHeight = Math.floor(window.innerHeight - 96);

  useEffect(() => {
    if (!userId) setUserId(nanoid());
  }, [userId]);

  const cardsArray = [
    {
      key: "1",
      name: "Product 1",
      price: "29.99",
      siteName: "Nyka",
      productImg:
        "https://photographylife.com/cdn-cgi/imagedelivery/GrQZt6ZFhE4jsKqjDEtqRA/photographylife.com/2019/08/iPhone-X.jpg/w=650,h=488",
      siteImg:
        "https://i.pinimg.com/564x/bd/b6/3d/bdb63d19a254526cb7f4b0a665296f81.jpg",
      link: "https://www.amazon.com",
    },
    {
      key: "2",
      name: "Product 1",
      price: "29.99",
      siteName: "Amazon",
      productImg:
        "https://photographylife.com/cdn-cgi/imagedelivery/GrQZt6ZFhE4jsKqjDEtqRA/photographylife.com/2019/08/iPhone-X.jpg/w=650,h=488",
      siteImg:
        "https://i.pinimg.com/564x/bd/b6/3d/bdb63d19a254526cb7f4b0a665296f81.jpg",
      link: "https://www.amazon.com",
    },
    {
      key: "3",
      name: "Producdfsfdsfdsf dsfdsfds fdsfsdfsfdsfsfdsfdst 1",
      price: "29.99",
      siteName: "Flipkart",
      productImg:
        "https://photographylife.com/cdn-cgi/imagedelivery/GrQZt6ZFhE4jsKqjDEtqRA/photographylife.com/2019/08/iPhone-X.jpg/w=650,h=488",
      siteImg:
        "https://i.pinimg.com/564x/bd/b6/3d/bdb63d19a254526cb7f4b0a665296f81.jpg",
      link: "https://www.amazon.com",
    },
    {
      key: "4",
      name: "Product 1",
      price: "29.99",
      siteName: "Amazon",
      productImg:
        "https://photographylife.com/cdn-cgi/imagedelivery/GrQZt6ZFhE4jsKqjDEtqRA/photographylife.com/2019/08/iPhone-X.jpg/w=650,h=488",
      siteImg:
        "https://i.pinimg.com/564x/bd/b6/3d/bdb63d19a254526cb7f4b0a665296f81.jpg",
      link: "https://www.amazon.com",
    },
  ];

  return (
    <div className="app__header app__flex">
      <List cards={cardsArray} />
      {/* <motion.div
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
      </motion.div> */}
    </div>
  );
};

export default AppWrap(Content, "get started");
