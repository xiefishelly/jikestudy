// 使用了单例设计模式：保证一个类仅有一个实例，并提供一个访问它的全局访问点。
// 使用了对象的形式来创建单例设计模式，这种创建方式的优点，是简单，方便快捷的实现单例模式。缺点是封装性不足。
// 使用单例模式的好处：单例模式会阻止其他对象实例化其自己的单例对象的副本，从而确保所有对象都访问唯一实例。因为类控制了实例化过程，所以类可以灵活更改实例化过程。
var bdObj = {
    // 初始化方法
    init: function() {
        this.render();
        this.bind();
    },
    // 获取所需要的dom对象
    render: function() {
        var _this = this;
        _this.link_mp = document.getElementById("link_mp");
        _this.more_product = document.getElementById("more_product");
        _this.user_setting = document.getElementById("user_setting");
        _this.search_key = document.getElementById("search_key");
        _this.link_set = document.getElementById("link_set");
        _this.key_word = document.getElementById("key_word");
    },
    // 为相应对象绑定事件
    bind: function() {
        var _this = this;
        _this.link_mp.onmouseover = function() {
            _this.displayMoreProduct(true);
        };
        _this.more_product.onmouseout = function() {
            _this.displayMoreProduct(false);
        };
        _this.more_product.onmouseover = function() {
            _this.displayMoreProduct(true);
        };
        _this.user_setting.onmouseout = function() {
            _this.displaySetting(false);
        };
        _this.user_setting.onmouseover = function() {
            _this.displaySetting(true);
        };
        _this.link_set.onmouseout = function() {
            _this.displaySetting(false);
        };
        _this.link_set.onmouseover = function() {
            _this.displaySetting(true);
        };
        _this.key_word.onfocus = function() {
            _this.searchfoucs(true);
        };
        _this.key_word.onblur = function() {
            _this.searchfoucs(false);
        };
    },
    // 显示更多产品
    displayMoreProduct: function(flag) {
        var _this = this;
        if (flag == true) {
            _this.more_product.style.display = "block";
        } else {
            _this.more_product.style.display = 'none';
        }
    },
    // 显示用户设置
    displaySetting: function(flag) {
        var _this = this;
        if (flag == true) {
            _this.user_setting.style.display = "block";
        } else {
            _this.user_setting.style.display = 'none';
        }
    },
    // 搜索框焦点样式。
    searchfoucs: function(flag) {
        var _this = this;
        if (flag) {
            _this.search_key.style.border = "1px solid #3385ff"
            _this.search_key.style.borderRight = "none"
        } else {
            _this.search_key.style.border = "1px solid #b6b6b6"
            _this.search_key.style.borderRight = "none"
        }
    }
}

window.onload = function() {
    bdObj.init();
};
