export const time =  (str) => {
    if(!str)return;
var now = new Date().getTime(),
past = Date.parse(str.replace(/-/gi,"/")),
diffValue = now - past,
result='',
minute = 1000 * 60,
hour = minute * 60,
day = hour * 24,
month = day * 30,
year = month * 12,
_year = diffValue/year,
_month =diffValue/month,
_week =diffValue/(7*day),
_day =diffValue/day,
_hour =diffValue/hour,
_min =diffValue/minute;

if(_year>=1) result=parseInt(_year) + "年前";
else if(_month>=1) result=parseInt(_month) + "个月前";
else if(_week>=1) result=parseInt(_week) + "周前";
else if(_day>=1) result=parseInt(_day) +"天前";
else if(_hour>=1) result=parseInt(_hour) +"个小时前";
else if(_min>=1) result=parseInt(_min) +"分钟前";
else result="刚刚";
return result;

    
        // var date = new Date(timestamp);
        // var time = new Date().getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
        // if (time < 0) {
        //   return '';
        // } else if (time / 1000 < 60) {
        //   return '刚刚';
        // } else if ((time / 60000) < 60) {
        //   return Math.round((time / 60000)) + ' 分钟前';
        // } else if ((time / 3600000) < 24) {
        //   return parseInt(time / 3600000) + ' 小时前';
        // } else if ((time / 86400000) < 31) {
        //   return parseInt(time / 86400000) + ' 天前';
        // } else if ((time / 2592000000) < 12) {
        //   return parseInt(time / 2592000000) + ' 月前';
        // } else {
        //   return parseInt(time / 31536000000) + ' 年前';
        // }
      


    // if(!timestamp){
    //     return ''
    // }
    // return timestamp.replace(/T/g,'  ').replace(/Z/g,'')
  }
