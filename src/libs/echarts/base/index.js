export default {
    color: [
        "#006EFF",
        "#29CC85",
        "#ffbb00",
        "#ff584c",
        "#9741d9",
        "#1fc0cc",
        "#7ff936",
        "#ff9c19",
        "#e63984",
        "#655ce6",
        "#47cc50",
        "#006EFF",
        "#29CC85",
        "#ffbb00",
        "#ff584c",
        "#9741d9",
        "#1fc0cc",
        "#7ff936",
        "#ff9c19",
        "#e63984",
        "#655ce6",
        "#47cc50"
    ],
    title: {
        left: "2%",
        textStyle: {
            fontSize: 14
        }
    },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {
        show:true,
        excludeComponents :['toolbox'],
        pixelRatio: 2
      }
    }
  }
//写在option中，这样会在图形右上角产生一个保存为图片的标识，点击即可下载图片，这种方法试用于网站点击保存的需求
}
