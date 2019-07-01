export const time =  (timestamp) => {
    let oldTime = new Date(timestamp).getTime();
    let nowTime = new Date().getTime();


    if(!timestamp){
        return ''
    }
    return timestamp.replace(/T/g,'  ').replace(/Z/g,'')
  }
