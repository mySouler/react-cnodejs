/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef,useMemo } from "react";
import { Tabs } from "antd";
import "./tab.css";
import List from "@/components/views/List";
import { getTopics } from "@/http/api";

const { TabPane } = Tabs;
let initData = [
  {
    title: "全部",
    key: "all",
  },
  {
    title: "精华",
    key: "good",
  },
  {
    title: "分享",
    key: "share",
  },
  {
    title: "问答",
    key: "ask",
  },
  {
    title: "工作",
    key: "job",
  },
];
export default () => {
  const currentRef = useRef();
  const [tab, setTab] = useState("all");
  const [limit, setLimit] = useState(40);

  
  // const params = useMemo(() =>{return  {tab,limit}}, [tab,limit]);
  const [response, setResponse] = useState([]);
  useEffect(() => {
    currentRef.current = tab;
    async function getList(params) {
      try {
        const data = await getTopics(params);
        if (data.success) {
          setResponse(data.data);
        } else {
          setResponse([]);
        }
      } catch (err) {}
    }
    getList({tab,limit});
  }, [tab,limit]);

  const isScrollToBottom = (fn) => {
    //变量scrollTop是滚动条滚动时，距离顶部的距离
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop; //变量windowHeight是可视区的高度
    var windowHeight =
      document.documentElement.clientHeight || document.body.clientHeight; //变量scrollHeight是滚动条的总高度
    var scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight; //滚动条到底部的条件
    if (scrollHeight - (scrollTop + windowHeight) <= 20) {
      fn();
    }
  };

  const debounce = (fn) => {
    let timer = null;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        // eslint-disable-next-line no-undef
        isScrollToBottom(fn);
      }, 500);
    };
  };

  const dong = () => {
    setLimit((res)=>res+40)
    console.log("====================================");
    console.log("dong");
    console.log("====================================");
  };

  useEffect(() => {
    const handleScroll = () => {
      return debounce(dong);
    };
    window.addEventListener("scroll", debounce(dong));
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tabCalBback = (key) => {
    if (currentRef.current === key) {
      return;
    }
    setTab(key);
    setLimit(40);
  };

  console.log(tab, "params");
  console.log(response, "response");

  return (
    <div className="container tabBox">
      <Tabs onTabClick={tabCalBback} activeKey={tab} tabPosition={"right"}>
        {initData.map((item, index) => {
          return (
            <TabPane tab={item.title} key={item.key}>
              <List listData={response} />
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};
