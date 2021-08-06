
var Cookie = {
    set:function(obj){
        let cookies = obj.name + '=' + obj.value;
        if(obj.expires){
            let time = new Date();
            time.setTime(time.getTime() + obj.expires * 1000);
            let currentTime = time.toUTCString();
            cookies += '; expires=' + currentTime
        }
        if(obj.path){
            cookies += '; path=' + obj.path
        }
        if(obj.domain){
            cookies += '; domain=' + obj.domain
        }
        // console.log(cookies)
        document.cookie = cookies
    },
    get:function(name){
        let arr = document.cookie.split('; ');
        // console.log(arr);
        let a;
        arr.forEach(item=>{
            let arr1 = item.split('=');
            if(arr1[0] == name) {
                a = arr1[1]
            }
        })
        // console.log(a);
        return a;
    },
    //  获取全部cookie
    getAll:function(){
        let arr = document.cookie.split('; ');
        let obj = {};
        arr.forEach(item=>{
            let arr1 = item.split('=');
            console.log(arr1);
            obj[arr1[0]] = arr1[1];
        })
        return obj;
    },
    delete:function(name){
        // let date = new Date();
        this.set({
            name:name,
            value:'',
            exprires:-1
        })
    }
}
export default Cookie