function displayMoreProduct(flag) {
    if (flag == true) {
        document.getElementById("more_product").style.display = "block";
    } else {
        document.getElementById('more_product').style.display = 'none';
    }
}
function displaySetting(flag) {
    if (flag == true) {
        document.getElementById("user_setting").style.display = "block";
    } else {
        document.getElementById('user_setting').style.display = 'none';
    }
}
function searchfoucs(flag){
   if(flag){
       document.getElementById("search_key").style.border = "1px solid #3385ff"
       document.getElementById("search_key").style.borderRight = "none"
   } else {
       document.getElementById("search_key").style.border = "1px solid #b6b6b6"
       document.getElementById("search_key").style.borderRight = "none"
   }
}