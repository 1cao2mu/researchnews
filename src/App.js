import React, { Component } from 'react';
import './App.css';
import { Carousel, Flex, Icon, ListView } from 'antd-mobile';

class App extends Component {
  state = {
    slideIndex: 0,
    carouselData: [{ imgurl: "http://piccache.cnki.net/kdn/index/nvsm/nimages/temp/lb01.jpg" }, { imgurl: "http://piccache.cnki.net/kdn/index/nvsm/nimages/temp/lb06.jpg" }, { imgurl: "http://piccache.cnki.net/kdn/index/nvsm/nimages/temp/lb11.jpg" }, { imgurl: "http://piccache.cnki.net/kdn/index/nvsm/nimages/temp/lb04.jpg" }],
    linkData: [{ name: "中国知网" }, { name: "维普网" }, { name: "万方" }, { name: "中国论文库" }, { name: "读秀" }, { name: "龙源" },],
    NewsData: [{ title: "科研新闻标题" }, { title: "科研新闻标题科研新闻标题" }, { title: "科研新闻标题科研新闻标题科研新闻标题" }, { title: "科研新闻标题科研新闻标题科研新闻标题科研新闻标题" }, { title: "科研新闻标题科研新闻标题科研新闻标题科研新闻标题" }, { title: "科研新闻标题科研新闻标题科研新闻标题科研新闻标题" }],
    projectData: [{ title: "最新项目标题" }, { title: "最新项目标题最新项目标题" }, { title: "最新项目标题最新项目标题最新项目标题" }, { title: "最新项目标题最新项目标题最新项目标题最新项目标题" }, { title: "最新项目标题最新项目标题最新项目标题最新项目标题" }],
    personData: [{ title: "专家介绍标题" }, { title: "专家介绍标题专家介绍标题" }, { title: "专家介绍标题专家介绍标题专家介绍标题" }, { title: "专家介绍标题专家介绍标题专家介绍标题专家介绍标题" }],
  }
  componentWillMount() {
    this.headerHeight = 35;
    this.clientHeight = document.body.clientHeight - 230 - 90;
    this.clientWidth = document.body.clientWidth * 0.8 - 2;
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
  }
  componentDidMount() {

  }
  render() {
    let clientHeight = this.clientHeight;
    return (
      <div className="bg" style={{ height: "100%", width: "80%", paddingRight: "10%", paddingLeft: "10%" }} >
        <div>
          <Carousel
            className="space-carousel"
            frameOverflow="visible"
            cellSpacing={10}
            slideWidth={0.8}
            autoplayInterval={3000}
            autoplay={true}
            infinite={true}
            selectedIndex={this.state.slideIndex}
            beforeChange={(from, to) => { }}
            afterChange={index => this.setState({ slideIndex: index })}
            dotStyle={{ width: 10, height: 10 }}
            dotActiveStyle={{ width: 10, height: 10, backgroundColor: "#53CFED" }}
          >
            {this.state.carouselData.map((val, index) => (
              <a
                key={val}
                href="http://www.baidu.com"
                style={{
                  display: 'block',
                  position: 'relative',
                  top: this.state.slideIndex === index ? -10 : 0,
                  height: this.state.imgHeight,
                  boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                }}
              >
                <img
                  key={index}
                  alt="lunbotu"
                  style={{ width: '100%', verticalAlign: 'top', height: 200 }}
                  src={val.imgurl}
                />
              </a>
            ))}
          </Carousel>
          <Flex className="iconc" justify="center" align="center" onClick={() => { this.setState({ slideIndex: this.state.slideIndex - 1 }) }} style={{ position: "absolute", top: 90, left: "15%", width: 50, height: 50, borderRadius: 25 }} >
            <Icon type={"left"} size={"lg"} color="#53CFED" />
          </Flex>

          <Flex className="iconc" justify="center" align="center" onClick={() => { this.setState({ slideIndex: this.state.slideIndex + 1, backgroundColor: "red" }) }} style={{ position: "absolute", top: 90, right: "15%", width: 50, height: 50, borderRadius: 25 }}>
            <Icon type={"right"} size={"lg"} color="#53CFED" />
          </Flex>
        </div>

        <Flex direction={"row"} style={{ backgroundColor: "#ddd", width: "100%" }}>
          <div style={{ height: clientHeight, width: "40%", backgroundColor: "#fff" }}>
            {this.renderHeader("科研新闻", "news")}
            <ListView
              dataSource={this.ds.cloneWithRows(this.state.NewsData)}
              renderRow={(rowData) => this.renderRow(rowData, 0.4, "news")}
              style={{ height: clientHeight - this.headerHeight }}
            />
          </div>
          <div style={{ height: clientHeight, marginRight: 1, marginLeft: 1, width: "40%", backgroundColor: "#fff" }}>
            {this.renderHeader("最新项目", "project")}
            <ListView
              dataSource={this.ds.cloneWithRows(this.state.projectData)}
              renderRow={(rowData) => this.renderRow(rowData, 0.4, "project")}
              style={{ height: clientHeight - this.headerHeight }}
            />
          </div>
          <div style={{ height: clientHeight, width: "20%", backgroundColor: "#fff" }}>
            {this.renderHeader("专家介绍", "person")}
            <ListView
              dataSource={this.ds.cloneWithRows(this.state.personData)}
              renderRow={(rowData) => this.renderRow(rowData, 0.2, "person")}
              style={{ height: clientHeight - this.headerHeight }}
            />
          </div>
        </Flex>

        <Flex justify="center" align='start' wrap="wrap" style={{ height: 90, backgroundColor: "#53CFED", margin: 0, padding: 0 }} >
          {this.state.linkData.map((val, index) => (
            <div className="linkc" key={index} style={{ padding: 10 }}  >{val.name}</div>
          ))}
        </Flex>
      </div>
    );
  }
  renderHeader(title, tag) {
    return (
      <Flex direction="row" align="center" style={{ height: this.headerHeight }}>
        <img src={require("./img/1" + tag + ".png")} alt={tag} style={{ height: 20, width: 20, marginLeft: 10 }} />
        <p style={{ paddingLeft: 5 }} >
          {title}
        </p>
      </Flex>
    );
  }
  renderRow(rowData, num, tag) {
    return (
      <Flex justify="start" align="center" direction="row" style={{ height: 35, backgroundColor: '#fff', overflow: "hidden", width: this.clientWidth * num }} >
        <img src={require("./img/2" + tag + ".png")} alt={tag} style={{ height: 20, width: 20, marginLeft: 10 }} />
        <div className="titlec" style={{ marginLeft: 5, display: "block", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }} >
          {rowData.title}
        </div>
      </Flex>)
  }
  renderFooter() {
    return (<div >
      {"更多"}
    </div>);
  }
}


export default App;
