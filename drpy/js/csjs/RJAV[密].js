var rule = {
  title: 'RJAV',
  host: 'https://rjav.tv/zh',
  url: '/zh/videotype/fyclass-fypage.html',
  searchUrl: '/zh/vod/search/page/fypage/wd/**.html',
  searchable: 2,
  headers: {'User-Agent': 'PC_UA'},
  hikerListCol: "movie_2",
  hikerClassListCol: "movie_2",
  timeout: 5000,
  class_name: 'FC2-PPV&日本無碼&馬賽克破壞&國產&日本有碼&MGS動画&中文字幕&動畫&歐美成人&Korean BJ Dance&寫真',
  class_url: 'FC2-PPV&JAV_Uncensored&Mosaic_Removed&Asian_Amateur&JAV_Censored&MGS&JAV+CHN.SUBs&Anime&Western_Porn&Korean_BJ_Dance&Adult_IDOL',
  play_parse: true,
  lazy: $js.toString(() => {
        let html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        let link = html.url;
        input = {parse: 0, url: link, header: rule.headers};
    }),
  tab_rename: {'道长在线': '在线浏览'},
  double: true,
  推荐: '.row-space7;.mb15;h2.rows-2&&Text;img&&src;.ico-right&&Text;a&&href;.ico-left&&Text',
  一级: '.row-space7 .mb15;h2.rows-2&&Text;img&&src;.ico-right&&Text;a&&href;.ico-left&&Text',
  二级:'*',
  搜索: '.row-space7 .mb15;h2.rows-2&&Text;img&&src;.ico-right&&Text;a&&href;.ico-left&&Text',
}