/**
 * Created by FiShelly on 2016/5/15.
 */
function uaredirect(){
    try {
        if(document.getElementById("bdmark") != null){
            return;
        }
        var urlhash = window.location.hash;
        if (!urlhash.match("fromapp")){
            if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {
                location.replace("index_mobile.html");
            }
        }
    } catch(err){}
}