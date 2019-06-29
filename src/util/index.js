export const time =  (timestamp) => {
    if(!timestamp){
        return ''
    }
    return timestamp.replace(/T/g,'  ').replace(/Z/g,'')
  }
