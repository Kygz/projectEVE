$(document).ready(function(){
    /* --------------------------------------------------------
	alert 弹窗
    -----------------------------------------------------------*/
    var messageBox = '' +
        '<div class="modal fade" id="alertDiv" tabindex="-1" role="dialog" aria-hidden="true">' +
            '<div class="modal-dialog">' +
                '<div class="modal-content">' +
                    '<div class="modal-header">' +
                        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                        '<h4 class="modal-title"></h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '</div>' +
                    '<div class="modal-footer">' +
                        '<button type="button" class="btn btn-sm" data-dismiss="modal">确定</button>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
    $('#main').prepend(messageBox);
    /* --------------------------------------------------------
	Template Settings 首页换背景
    -----------------------------------------------------------*/
    var settings =  '<a id="settings" href="#changeSkin" data-toggle="modal">' +
			'<i class="fa fa-gear"></i> Change Skin' +
		    '</a>' +   
		    '<div class="modal fade" id="changeSkin" tabindex="-1" role="dialog" aria-hidden="true">' +
			'<div class="modal-dialog modal-lg">' +
			    '<div class="modal-content">' +
				'<div class="modal-header">' +
				    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
				    '<h4 class="modal-title">Change Template Skin</h4>' +
				'</div>' +
				'<div class="modal-body">' +
				    '<div class="row template-skins">' +
					'<a data-skin="skin-blur-violate" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="img/skin-violate.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-blur-lights" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="img/skin-lights.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-blur-city" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="img/skin-city.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-blur-greenish" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="img/skin-greenish.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-blur-night" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="img/skin-night.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-blur-blue" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="img/skin-blue.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-blur-sunny" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="img/skin-sunny.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-cloth" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="img/skin-cloth.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-tectile" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="img/skin-tectile.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-blur-chrome" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="img/skin-chrome.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-blur-ocean" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="img/skin-ocean.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-blur-sunset" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="img/skin-sunset.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-blur-yellow" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="img/skin-yellow.jpg" alt="">' +
					'</a>' +
					'<a  data-skin="skin-blur-kiwi" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="img/skin-kiwi.jpg" alt="">' +
					'</a>' +
					'<a  data-skin="skin-blur-eve1" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="img/skin-eve1.jpg" alt="">' +
					'</a>' +
				    '</div>' +
				'</div>' +
			    '</div>' +
			'</div>' +
		    '</div>';
    $('#main').prepend(settings);
            
    $('body').on('click', '.template-skins > a', function(e){
	e.preventDefault();
	var skin = $(this).data('skin');
	$('body').attr('id', skin);
	$('#changeSkin').modal('hide');
	//TODO 保存设置到帐号上
        $.ajax({
            url : "login.do?method=saveSkin",
            data : {
				skin : skin
            },
            async : false,
            type : "POST",
            dataType : "json",
            success : function(data) {
                $('#planet1').data('easyPieChart').update(
                    parseInt(data.planet_star1 / 354000 * 100));
                $('#planet2').data('easyPieChart').update(
                    parseInt(data.planet_star2 / 354000 * 100));
                $('#planet3').data('easyPieChart').update(
                    parseInt(data.planet_star3 / 354000 * 100));
                $('#planet4').data('easyPieChart').update(
                    parseInt(data.planet_star4 / 354000 * 100));
                $('#planet5').data('easyPieChart').update(
                    parseInt(data.planet_star5 / 354000 * 100));
                $('#planet6').data('easyPieChart').update(
                    parseInt(data.planet_star6 / 354000 * 100));
                $('#planet7').data('easyPieChart').update(
                    parseInt(data.planet_star7 / 354000 * 100));
            }
        });
    });

    /* --------------------------------------------------------
	Components
    -----------------------------------------------------------*/
    (function(){
        /* Textarea */
	if($('.auto-size')[0]) {
	    $('.auto-size').autosize();
	}

        //Select
	if($('.select')[0]) {
	    $('.select').selectpicker();
	}
        
        //Sortable
        if($('.sortable')[0]) {
	    $('.sortable').sortable();
	}
	
        //Tag Select
	if($('.tag-select')[0]) {
	    $('.tag-select').chosen();
	}
        
        /* Tab */
	if($('.tab')[0]) {
	    $('.tab a').click(function(e) {
		e.preventDefault();
		$(this).tab('show');
	    });
	}
        
        /* Collapse */
	if($('.collapse')[0]) {
	    $('.collapse').collapse();
	}
        
        /* Accordion */
        $('.panel-collapse').on('shown.bs.collapse', function () {
            $(this).prev().find('.panel-title a').removeClass('active');
        });

        $('.panel-collapse').on('hidden.bs.collapse', function () {
            $(this).prev().find('.panel-title a').addClass('active');
        });

        //Popover
    	if($('.pover')[0]) {
    	    $('.pover').popover();
    	} 
    })();

    /* --------------------------------------------------------
	Sidebar + Menu
    -----------------------------------------------------------*/
    (function(){
        /* Menu Toggle */
        $('body').on('click touchstart', '#menu-toggle', function(e){
            e.preventDefault();
            $('html').toggleClass('menu-active');
            $('#sidebar').toggleClass('toggled');
            //$('#content').toggleClass('m-0');
        });
         
        /* Active Menu */
        $('#sidebar .menu-item').hover(function(){
            $(this).closest('.dropdown').addClass('hovered');
        }, function(){
            $(this).closest('.dropdown').removeClass('hovered');
        });

        /* Prevent */
        $('.side-menu .dropdown > a').click(function(e){
            e.preventDefault();
        });
	

    })();

    /* --------------------------------------------------------
	Chart Info
    -----------------------------------------------------------*/
    (function(){
        $('body').on('click touchstart', '.tile .tile-info-toggle', function(e){
            e.preventDefault();
            $(this).closest('.tile').find('.chart-info').toggle();
        });
    })();

    /* --------------------------------------------------------
	Todo List
    -----------------------------------------------------------*/
    (function(){
        setTimeout(function(){
            //Add line-through for alreadt checked items
            $('.todo-list .media .checked').each(function(){
                $(this).closest('.media').find('.checkbox label').css('text-decoration', 'line-through')
            });

            //Add line-through when checking
            $('.todo-list .media input').on('ifChecked', function(){
                $(this).closest('.media').find('.checkbox label').css('text-decoration', 'line-through');
            });

            $('.todo-list .media input').on('ifUnchecked', function(){
                $(this).closest('.media').find('.checkbox label').removeAttr('style');
            });    
        })
    })();

    /* --------------------------------------------------------
	Custom Scrollbar
    -----------------------------------------------------------*/
    (function() {
	if($('.overflow')[0]) {
	    var overflowRegular, overflowInvisible = false;
	    overflowRegular = $('.overflow').niceScroll();
	}
    })();

    /* --------------------------------------------------------
	Messages + Notifications
    -----------------------------------------------------------*/
    (function(){
        $('body').on('click touchstart', '.drawer-toggle', function(e){
            e.preventDefault();
            var drawer = $(this).attr('data-drawer');

            $('.drawer:not("#'+drawer+'")').removeClass('toggled');

            if ($('#'+drawer).hasClass('toggled')) {
                $('#'+drawer).removeClass('toggled');
            }
            else{
                $('#'+drawer).addClass('toggled');
            }
        });

        //Close when click outside
        $(document).on('mouseup touchstart', function (e) {
            var container = $('.drawer, .tm-icon');
            if (container.has(e.target).length === 0) {
                $('.drawer').removeClass('toggled');
                $('.drawer-toggle').removeClass('open');
            }
        });

        //Close
        $('body').on('click touchstart', '.drawer-close', function(){
            $(this).closest('.drawer').removeClass('toggled');
            $('.drawer-toggle').removeClass('open');
        });
    })();


    /* --------------------------------------------------------
	Calendar
    -----------------------------------------------------------*/
    (function(){
	
        //Sidebar
        if ($('#sidebar-calendar')[0]) {
            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();
            $('#sidebar-calendar').fullCalendar({
                editable: false,
                events: [],
                header: {
                    left: 'title'
                }
            });
        }

        //Content widget
        if ($('#calendar-widget')[0]) {
            $('#calendar-widget').fullCalendar({
                header: {
                    left: 'title',
                    right: 'prev, next',
                    //right: 'month,basicWeek,basicDay'
                },
                editable: true,
                events: [
                    {
                        title: 'All Day Event',
                        start: new Date(y, m, 1)
                    },
                    {
                        title: 'Long Event',
                        start: new Date(y, m, d-5),
                        end: new Date(y, m, d-2)
                    },
                    {
                        title: 'Repeat Event',
                        start: new Date(y, m, 3),
                        allDay: false
                    },
                    {
                        title: 'Repeat Event',
                        start: new Date(y, m, 4),
                        allDay: false
                    }
                ]
            });
        }

    })();

    /* --------------------------------------------------------
	RSS Feed widget
    -----------------------------------------------------------*/
    (function(){
	if($('#news-feed')[0]){
	    $('#news-feed').FeedEk({
		FeedUrl: 'http://rss.cnn.com/rss/edition.rss',
		MaxCount: 5,
		ShowDesc: false,
		ShowPubDate: true,
		DescCharacterLimit: 0
	    });
	}
    })();

    /* --------------------------------------------------------
	Chat
    -----------------------------------------------------------*/
    $(function() {
        $('body').on('click touchstart', '.chat-list-toggle', function(){
            $(this).closest('.chat').find('.chat-list').toggleClass('toggled');
        });

        $('body').on('click touchstart', '.chat .chat-header .btn', function(e){
            e.preventDefault();
            $('.chat .chat-list').removeClass('toggled');
            $(this).closest('.chat').toggleClass('toggled');
        });

        $(document).on('mouseup touchstart', function (e) {
            var container = $('.chat, .chat .chat-list');
            if (container.has(e.target).length === 0) {
                container.removeClass('toggled');
            }
        });
    });

    /* --------------------------------------------------------
	Form Validation
    -----------------------------------------------------------*/
    (function(){
	if($("[class*='form-validation']")[0]) {
	    $("[class*='form-validation']").validationEngine();

	    //Clear Prompt
	    $('body').on('click', '.validation-clear', function(e){
		e.preventDefault();
		$(this).closest('form').validationEngine('hide');
	    });
	}
    })();

    /* --------------------------------------------------------
     `Color Picker
    -----------------------------------------------------------*/
    (function(){
        //Default - hex
	if($('.color-picker')[0]) {
	    $('.color-picker').colorpicker();
	}
        
        //RGB
	if($('.color-picker-rgb')[0]) {
	    $('.color-picker-rgb').colorpicker({
		format: 'rgb'
	    });
	}
        
        //RGBA
	if($('.color-picker-rgba')[0]) {
	    $('.color-picker-rgba').colorpicker({
		format: 'rgba'
	    });
	}
	
	//Output Color
	if($('[class*="color-picker"]')[0]) {
	    $('[class*="color-picker"]').colorpicker().on('changeColor', function(e){
		var colorThis = $(this).val();
		$(this).closest('.color-pick').find('.color-preview').css('background',e.color.toHex());
	    });
	}
    })();

    /* --------------------------------------------------------
     Date Time Picker
     -----------------------------------------------------------*/
    (function(){
        //Date Only
	if($('.date-only')[0]) {
	    $('.date-only').datetimepicker({
		pickTime: false
	    });
	}

        //Time only
	if($('.time-only')[0]) {
	    $('.time-only').datetimepicker({
		pickDate: false
	    });
	}

        //12 Hour Time
	if($('.time-only-12')[0]) {
	    $('.time-only-12').datetimepicker({
		pickDate: false,
		pick12HourFormat: true
	    });
	}
        
        $('.datetime-pick input:text').on('click', function(){
            $(this).closest('.datetime-pick').find('.add-on i').click();
        });
    })();

    /* --------------------------------------------------------
     Input Slider
     -----------------------------------------------------------*/
    (function(){
	if($('.input-slider')[0]) {
	    $('.input-slider').slider().on('slide', function(ev){
		$(this).closest('.slider-container').find('.slider-value').val(ev.value);
	    });
	}
    })();

    /* --------------------------------------------------------
     WYSIWYE Editor + Markedown
     -----------------------------------------------------------*/
    (function(){
        //Markedown
	if($('.markdown-editor')[0]) {
	    $('.markdown-editor').markdown({
		autofocus:false,
		savable:false
	    });
	}
        
        //WYSIWYE Editor
	if($('.wysiwye-editor')[0]) {
	    $('.wysiwye-editor').summernote({
		    height: 240,
            toolbar: [
                ["font", ["bold", "italic", "underline", "clear"]],
                ["fontsize", ["fontsize"]],
                ["color", ["color"]],
                ["para", ["ul", "ol", "paragraph"]],
                ["height", ["height"]],
                ["table", ["table"]]
            ]
	    });
	}
        
    })();

    /* --------------------------------------------------------
     Media Player
     -----------------------------------------------------------*/
    (function(){
	if($('audio, video')[0]) {
	    $('audio,video').mediaelementplayer({
		success: function(player, node) {
		    $('#' + node.id + '-mode').html('mode: ' + player.pluginType);
		}
	    });
	}
    })();

    /* ---------------------------
	Image Popup [Pirobox]
    --------------------------- */
    (function() {
	if($('.pirobox_gall')[0]) {
	    //Fix IE
	    jQuery.browser = {};
	    (function () {
		jQuery.browser.msie = false;
		jQuery.browser.version = 0;
		if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
		    jQuery.browser.msie = true;
		    jQuery.browser.version = RegExp.$1;
		}
	    })();
	    
	    //Lightbox
	    $().piroBox_ext({
		piro_speed : 700,
		bg_alpha : 0.5,
		piro_scroll : true // pirobox always positioned at the center of the page
	    });
	}
    })();

    /* ---------------------------
     Vertical tab
     --------------------------- */
    (function(){
        $('.tab-vertical').each(function(){
            var tabHeight = $(this).outerHeight();
            var tabContentHeight = $(this).closest('.tab-container').find('.tab-content').outerHeight();

            if ((tabContentHeight) > (tabHeight)) {
                $(this).height(tabContentHeight);
            }
        })

        $('body').on('click touchstart', '.tab-vertical li', function(){
            var tabVertical = $(this).closest('.tab-vertical');
            tabVertical.height('auto');

            var tabHeight = tabVertical.outerHeight();
            var tabContentHeight = $(this).closest('.tab-container').find('.tab-content').outerHeight();

            if ((tabContentHeight) > (tabHeight)) {
                tabVertical.height(tabContentHeight);
            }
        });


    })();
    
    /* --------------------------------------------------------
     Login + Sign up
    -----------------------------------------------------------*/
    (function(){
	$('body').on('click touchstart', '.box-switcher', function(e){
	    e.preventDefault();
	    var box = $(this).attr('data-switch');
	    $(this).closest('.box').toggleClass('active');
	    $('#'+box).closest('.box').addClass('active'); 
	});
    })();
    
   
    
    /* --------------------------------------------------------
     Checkbox + Radio
     -----------------------------------------------------------*/
    if($('input:checkbox, input:radio')[0]) {
    	
	//Checkbox + Radio skin
	$('input:checkbox:not([data-toggle="buttons"] input, .make-switch input), input:radio:not([data-toggle="buttons"] input)').iCheck({
		    checkboxClass: 'icheckbox_minimal',
		    radioClass: 'iradio_minimal',
		    increaseArea: '20%' // optional
	});
    
	//Checkbox listing
	var parentCheck = $('.list-parent-check');
	var listCheck = $('.list-check');
    
	parentCheck.on('ifChecked', function(){
		$(this).closest('.list-container').find('.list-check').iCheck('check');
	});
    
	parentCheck.on('ifClicked', function(){
		$(this).closest('.list-container').find('.list-check').iCheck('uncheck');
	});
    
	listCheck.on('ifChecked', function(){
		    var parent = $(this).closest('.list-container').find('.list-parent-check');
		    var thisCheck = $(this).closest('.list-container').find('.list-check');
		    var thisChecked = $(this).closest('.list-container').find('.list-check:checked');
	    
		    if(thisCheck.length == thisChecked.length) {
			parent.iCheck('check');
		    }
	});
    
	listCheck.on('ifUnchecked', function(){
		    var parent = $(this).closest('.list-container').find('.list-parent-check');
		    parent.iCheck('uncheck');
	});
    
	listCheck.on('ifChanged', function(){
		    var thisChecked = $(this).closest('.list-container').find('.list-check:checked');
		    var showon = $(this).closest('.list-container').find('.show-on');
		    if(thisChecked.length > 0 ) {
			showon.show();
		    }
		    else {
			showon.hide();
		    }
	});
	   
    }
    
    /* --------------------------------------------------------
        MAC Hack 
    -----------------------------------------------------------*/
    (function(){
	//Mac only
        if(navigator.userAgent.indexOf('Mac') > 0) {
            $('body').addClass('mac-os');
        }
    })();
    
});

$(window).load(function(){
    /* --------------------------------------------------------
     Tooltips
     -----------------------------------------------------------*/
    (function(){
        if($('.tooltips')[0]) {
            $('.tooltips').tooltip();
        }
    })();

    /* --------------------------------------------------------
     Animate numbers
     -----------------------------------------------------------*/
    $('.quick-stats').each(function(){
        var target = $(this).find('h2');
        var toAnimate = $(this).find('h2').attr('data-value');
        // Animate the element's value from x to y:
        $({someValue: 0}).animate({someValue: toAnimate}, {
            duration: 1000,
            easing:'swing', // can be anything
            step: function() { // called on every step
                // Update the element's text with rounded-up value:
                target.text(commaSeparateNumber(Math.round(this.someValue)));
            }
        });

        function commaSeparateNumber(val){
            while (/(\d+)(\d{3})/.test(val.toString())){
                val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            }
            return val;
        }
    });
    
});

/* --------------------------------------------------------
Date Time Widget
-----------------------------------------------------------*/
(function(){
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    // Create a newDate() object
    var newDate = new Date();

    // Extract the current date from Date object
    newDate.setDate(newDate.getDate());

    // Output the day, date, month and year
    $('#date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

    setInterval( function() {

        // Create a newDate() object and extract the seconds of the current time on the visitor's
        var seconds = new Date().getSeconds();

        // Add a leading zero to seconds value
        $("#sec").html(( seconds < 10 ? "0":"" ) + seconds);
    },1000);

    setInterval( function() {

        // Create a newDate() object and extract the minutes of the current time on the visitor's
        var minutes = new Date().getMinutes();

        // Add a leading zero to the minutes value
        $("#min").html(( minutes < 10 ? "0":"" ) + minutes);
    },1000);

    setInterval( function() {

        // Create a newDate() object and extract the hours of the current time on the visitor's
        var hours = new Date().getHours();

        // Add a leading zero to the hours value
        $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);
})();


(function dateExtend() {
    /**
     * 对Date的扩展，将 Date 转化为指定格式的String
     * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
     * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
     * 例子：
     * (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
     * (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
     * @param fmt
     * @returns {*}
     * @constructor
     */
    Date.prototype.Format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "H+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
})();