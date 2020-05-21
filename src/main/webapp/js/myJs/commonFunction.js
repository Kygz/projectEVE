/**
 * 公用JS Function
 * Created by gavin on 2016/4/27 0027.
 */

/**
 * 取UUID
 * @returns {string}
 */
function getUUID(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

/**
 * 弹窗对象
 * @type {{alert: $message.alert}}
 */
var $message = {
    /**
     * option.title 标题
     * option.msg 正文内容
     * @param option
     */
    alert : function(option){
        var alertDiv;
        if(typeof indexPageParam != 'undefined' || (typeof loginPage != 'undefined' && loginPage === true)){//首页
            alertDiv = $("#alertDiv");
        }else if(parent.indexPageParam){
            alertDiv = parent.$("#alertDiv");
        }
        if(alertDiv){
            var title = option.title?option.title:"alert";
            var msg = option.msg?option.msg:"";
            alertDiv.find(".modal-title").text(title).end()
                .find(".modal-body").html(msg).end();
            alertDiv.modal('show');
        }
    }
};

/**
 * 存取设置数据 存于 sessionStorage
 */
var $storage = {
    /**
     * 初始化 清空sessionStorage
     */
    storage : window.sessionStorage,
    init : function () {
        this.cleanAll();
    },
    getPropertyByKey : function(key){
        var data = this.storage.getItem(key);
        return data;
    },
    setPropertyByKey : function (key,value) {
        var vivian = "";
        if(value!==null && value!=="" && typeof value!=="undefined"){
            vivian = value;
        }
        if(key){
            this.storage.setItem(key,vivian);
        }
    },
    delPropertyByEntityId : function (key) {
        if(key){
            this.storage.removeItem(key);
        }
    },
    setCurrentMember :function (memberStr) {
        this.setPropertyByKey("currentMember",memberStr);
    },
    getCurrentMember :function () {
        var memberStr = this.getPropertyByKey("currentMember");
        return $.parseJSON(memberStr,true);
    }
};

var $fileSize = {
    /**
     * 取科比
     */
    getKb : function (strLength) {
        return strLength/8/1024;
    },
    /**
     * 取你MB
     */
    getMb : function (strLength) {
        return this.getKb(strLength)/1024;
    },
    /**
     * 好看的皮囊
     */
    getSizeFowShow : function (strLength) {
        var mb = this.getMb(strLength);
        if(mb > 0.1){
            return mb + "Mb";
        }else{
            return this.getKb() + "Kb";
        }
    }
};