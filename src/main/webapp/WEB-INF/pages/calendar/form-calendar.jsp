<%@taglib prefix="planet" uri="/planetTaglib" %>
<%@taglib prefix="eve" uri="/indexTaglib" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page isELIgnored="false"%>
<!DOCTYPE html>
<!--[if IE 9 ]><html class="ie9"><![endif]-->
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="format-detection" content="telephone=no">
        <meta charset="UTF-8">

        <meta name="description" content="Violate Responsive Admin Template">
        <meta name="keywords" content="Super Admin, Admin, Template, Bootstrap">

        <title>米氏非正常人类集散地</title>
            
        <!-- CSS -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/animate.min.css" rel="stylesheet">
        <link href="css/font-awesome.min.css" rel="stylesheet">
        <link href="css/form.css" rel="stylesheet">
        <link href="css/calendar.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet">
        <link href="css/icons.css" rel="stylesheet">
        <link href="css/generics.css" rel="stylesheet"> 
    </head>
    <body id="${sessionScope.member.member_skin}">
        <header id="header" class="media">
            <a href="" id="menu-toggle"></a>
            <a class="logo pull-left" href="/login.do?method=index">米氏非正常人类研究院</a>
            
            <div class="media-body">
                <div class="media" id="top-menu">
                    <div class="pull-left tm-icon">
                        <a data-drawer="messages" class="drawer-toggle" href="">
                            <i class="sa-top-message"></i>
                            <i class="n-count animated">5</i>
                            <span>Messages</span>
                        </a>
                    </div>
                    <div class="pull-left tm-icon">
                        <a data-drawer="notifications" class="drawer-toggle" href="">
                            <i class="sa-top-updates"></i>
                            <i class="n-count animated">9</i>
                            <span>Updates</span>
                        </a>
                    </div>
                    <!-- 时间栏 -->
                    <div id="time" class="pull-right">
                        <span id="hours"></span>:<span id="min"></span>:<span id="sec"></span>
                    </div>
                    <!-- 搜索栏 -->
                    <div class="media-body">
                        <input type="text" class="main-search">
                    </div>
                </div>
            </div>
        </header>
        
        <div class="clearfix"></div>
        
        <section id="main" class="p-relative" role="main">
            
            <!-- Sidebar -->
            <aside id="sidebar">
                <!-- Sidbar Widgets -->
                <div class="side-widgets overflow">
                    <!-- Profile Menu -->
                    <eve:showProfileMenu userName="${sessionScope.member.member_nickname}" qqNum="${sessionScope.member.member_qq}"/>
                    <!-- Calendar -->
                    <div class="s-widget m-b-25">
                        <div id="sidebar-calendar"></div>
                    </div>
                    <%--舰长六维--%>
                    <eve:showTheSix para1="7" para2="4" para3="6" para4="8" para5="2" para6="3"/>
                </div>
                <!-- Side Menu -->
                <eve:showSideMenu/>
            </aside>
        
            <!-- Content -->
            <section id="content" class="container">
            
                <!-- Messages Drawer -->
                <div id="messages" class="tile drawer animated">
                    <div class="listview narrow">
                        <div class="media">
                            <a href="">Send a New Message</a>
                            <span class="drawer-close">&times;</span>
                            
                        </div>
                        <div class="overflow" style="height: 254px">
                            <div class="media">
                                <div class="pull-left">
                                    <img width="40" src="img/profile-pics/1.jpg" alt="">
                                </div>
                                <div class="media-body">
                                    <small class="text-muted">Nadin Jackson - 2 Hours ago</small><br>
                                    <a class="t-overflow" href="">Mauris consectetur urna nec tempor adipiscing. Proin sit amet nisi ligula. Sed eu adipiscing lectus</a>
                                </div>
                            </div>
                            <div class="media">
                                <div class="pull-left">
                                    <img width="40" src="img/profile-pics/2.jpg" alt="">
                                </div>
                                <div class="media-body">
                                    <small class="text-muted">David Villa - 5 Hours ago</small><br>
                                    <a class="t-overflow" href="">Suspendisse in purus ut nibh placerat Cras pulvinar euismod nunc quis gravida. Suspendisse pharetra</a>
                                </div>
                            </div>
                            <div class="media">
                                <div class="pull-left">
                                    <img width="40" src="img/profile-pics/3.jpg" alt="">
                                </div>
                                <div class="media-body">
                                    <small class="text-muted">Harris worgon - On 15/12/2013</small><br>
                                    <a class="t-overflow" href="">Maecenas venenatis enim condimentum ultrices fringilla. Nulla eget libero rhoncus, bibendum diam eleifend, vulputate mi. Fusce non nibh pulvinar, ornare turpis id</a>
                                </div>
                            </div>
                            <div class="media">
                                <div class="pull-left">
                                    <img width="40" src="img/profile-pics/4.jpg" alt="">
                                </div>
                                <div class="media-body">
                                    <small class="text-muted">Mitch Bradberry - On 14/12/2013</small><br>
                                    <a class="t-overflow" href="">Phasellus interdum felis enim, eu bibendum ipsum tristique vitae. Phasellus feugiat massa orci, sed viverra felis aliquet quis. Curabitur vel blandit odio. Vestibulum sagittis quis sem sit amet tristique.</a>
                                </div>
                            </div>
                            <div class="media">
                                <div class="pull-left">
                                    <img width="40" src="img/profile-pics/1.jpg" alt="">
                                </div>
                                <div class="media-body">
                                    <small class="text-muted">Nadin Jackson - On 15/12/2013</small><br>
                                    <a class="t-overflow" href="">Ipsum wintoo consectetur urna nec tempor adipiscing. Proin sit amet nisi ligula. Sed eu adipiscing lectus</a>
                                </div>
                            </div>
                            <div class="media">
                                <div class="pull-left">
                                    <img width="40" src="img/profile-pics/2.jpg" alt="">
                                </div>
                                <div class="media-body">
                                    <small class="text-muted">David Villa - On 16/12/2013</small><br>
                                    <a class="t-overflow" href="">Suspendisse in purus ut nibh placerat Cras pulvinar euismod nunc quis gravida. Suspendisse pharetra</a>
                                </div>
                            </div>
                            <div class="media">
                                <div class="pull-left">
                                    <img width="40" src="img/profile-pics/3.jpg" alt="">
                                </div>
                                <div class="media-body">
                                    <small class="text-muted">Harris worgon - On 17/12/2013</small><br>
                                    <a class="t-overflow" href="">Maecenas venenatis enim condimentum ultrices fringilla. Nulla eget libero rhoncus, bibendum diam eleifend, vulputate mi. Fusce non nibh pulvinar, ornare turpis id</a>
                                </div>
                            </div>
                            <div class="media">
                                <div class="pull-left">
                                    <img width="40" src="img/profile-pics/4.jpg" alt="">
                                </div>
                                <div class="media-body">
                                    <small class="text-muted">Mitch Bradberry - On 18/12/2013</small><br>
                                    <a class="t-overflow" href="">Phasellus interdum felis enim, eu bibendum ipsum tristique vitae. Phasellus feugiat massa orci, sed viverra felis aliquet quis. Curabitur vel blandit odio. Vestibulum sagittis quis sem sit amet tristique.</a>
                                </div>
                            </div>
                            <div class="media">
                                <div class="pull-left">
                                    <img width="40" src="img/profile-pics/5.jpg" alt="">
                                </div>
                                <div class="media-body">
                                    <small class="text-muted">Wendy Mitchell - On 19/12/2013</small><br>
                                    <a class="t-overflow" href="">Integer a eros dapibus, vehicula quam accumsan, tincidunt purus</a>
                                </div>
                            </div>
                        </div>
                        <div class="media text-center whiter l-100">
                            <a href=""><small>VIEW ALL</small></a>
                        </div>
                    </div>
                </div>
                
                <!-- Notification Drawer -->
                <div id="notifications" class="tile drawer animated">
                    <div class="listview narrow">
                        <div class="media">
                            <a href="">Notification Settings</a>
                            <span class="drawer-close">&times;</span>
                        </div>
                        <div class="overflow" style="height: 254px">
                            <div class="media">
                                <div class="pull-left">
                                    <img width="40" src="img/profile-pics/1.jpg" alt="">
                                </div>
                                <div class="media-body">
                                    <small class="text-muted">Nadin Jackson - 2 Hours ago</small><br>
                                    <a class="t-overflow" href="">Mauris consectetur urna nec tempor adipiscing. Proin sit amet nisi ligula. Sed eu adipiscing lectus</a>
                                </div>
                            </div>
                            <div class="media">
                                <div class="pull-left">
                                    <img width="40" src="img/profile-pics/2.jpg" alt="">
                                </div>
                                <div class="media-body">
                                    <small class="text-muted">David Villa - 5 Hours ago</small><br>
                                    <a class="t-overflow" href="">Suspendisse in purus ut nibh placerat Cras pulvinar euismod nunc quis gravida. Suspendisse pharetra</a>
                                </div>
                            </div>
                            <div class="media">
                                <div class="pull-left">
                                    <img width="40" src="img/profile-pics/3.jpg" alt="">
                                </div>
                                <div class="media-body">
                                    <small class="text-muted">Harris worgon - On 15/12/2013</small><br>
                                    <a class="t-overflow" href="">Maecenas venenatis enim condimentum ultrices fringilla. Nulla eget libero rhoncus, bibendum diam eleifend, vulputate mi. Fusce non nibh pulvinar, ornare turpis id</a>
                                </div>
                            </div>
                            <div class="media">
                                <div class="pull-left">
                                    <img width="40" src="img/profile-pics/4.jpg" alt="">
                                </div>
                                <div class="media-body">
                                    <small class="text-muted">Mitch Bradberry - On 14/12/2013</small><br>
                                    <a class="t-overflow" href="">Phasellus interdum felis enim, eu bibendum ipsum tristique vitae. Phasellus feugiat massa orci, sed viverra felis aliquet quis. Curabitur vel blandit odio. Vestibulum sagittis quis sem sit amet tristique.</a>
                                </div>
                            </div>
                            <div class="media">
                                <div class="pull-left">
                                    <img width="40" src="img/profile-pics/1.jpg" alt="">
                                </div>
                                <div class="media-body">
                                    <small class="text-muted">Nadin Jackson - On 15/12/2013</small><br>
                                    <a class="t-overflow" href="">Ipsum wintoo consectetur urna nec tempor adipiscing. Proin sit amet nisi ligula. Sed eu adipiscing lectus</a>
                                </div>
                            </div>
                            <div class="media">
                                <div class="pull-left">
                                    <img width="40" src="img/profile-pics/2.jpg" alt="">
                                </div>
                                <div class="media-body">
                                    <small class="text-muted">David Villa - On 16/12/2013</small><br>
                                    <a class="t-overflow" href="">Suspendisse in purus ut nibh placerat Cras pulvinar euismod nunc quis gravida. Suspendisse pharetra</a>
                                </div>
                            </div>
                        </div>
                        <div class="media text-center whiter l-100">
                            <a href=""><small>VIEW ALL</small></a>
                        </div>
                    </div>
                </div>
                
                <!-- Breadcrumb -->
                <ol class="breadcrumb hidden-xs">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Library</a></li>
                    <li class="active">Data</li>
                </ol>
                
                <h4 class="page-title">日程活动</h4>
                <input id="monthEvent" type="hidden" value="${monthEvent}">
                <div class="block-area">
                    <div class="alert alert-info alert-dismissable fade in">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        点击添加团队事件
                    </div>
                </div>
                
                <div class="col-md-8 clearfix">
                    
                    <div id="calendar" class="p-relative p-10 m-b-20">
                        <!-- Calendar Views -->
                        <ul class="calendar-actions list-inline clearfix">
                            <li class="p-r-0">
                                <a data-view="month" href="#" class="tooltips" title="Month">
                                    <i class="sa-list-month"></i>
                                </a>
                            </li>
                            <li class="p-r-0">
                                <a data-view="agendaWeek" href="#" class="tooltips" title="Week">
                                    <i class="sa-list-week"></i>
                                </a>
                            </li>
                            <li class="p-r-0">
                                <a data-view="agendaDay" href="#" class="tooltips" title="Day">
                                    <i class="sa-list-day"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="col-md-4">
                    <h4 class="m-l-5">Upcoming Events</h4>
                    <div class="listview narrow">
                        <div class="media p-l-5">
                            <div class="pull-left">
                                <img width="40" src="img/profile-pics/1.jpg" alt="">
                            </div>
                            <div class="media-body">
                                <small class="text-muted">Today at 5:30 PM</small><br>
                                <a class="t-overflow" href="">搞基</a>
                            </div>
                        </div>
                        <div class="media p-l-5">
                            <div class="media-body">
                                <small class="text-muted">Tomorrow at 8:56 PM</small><br>
                                <a class="t-overflow" href="">再搞基</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Add event -->
                <div class="modal fade" id="addNew-event">
                     <div class="modal-dialog">
                          <div class="modal-content">
                               <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 class="modal-title">发布新事件</h4>
                               </div>
                               <div class="modal-body">
                                    <form class="form-validation" role="form">
                                         <div class="form-group">
                                             <label for="eventName">TITLE</label>
                                             <input type="text" class="input-sm form-control validate[required]" id="eventName" placeholder="标题请勿以‘震惊’为开头">
                                         </div>
                                         <div class="form-group">
                                              <label for="eventCreateMember">发布人</label>
                                              <input type="text" class="input-sm form-control validate[required]" id="eventCreateMember" readonly value="${sessionScope.member.member_nickname}">
                                         </div>
                                        <div class="form-group">
                                            <label for="eventName">CONTENT</label>
                                            <textarea class="form-control auto-size m-b-10" id="eventContent" placeholder="事件描述(文体不限 诗歌除外)"></textarea>
                                        </div>
                                         <input type="hidden" id="getStart" />
                                         <input type="hidden" id="getEnd" />
                                    </form>
                               </div>
                               
                               <div class="modal-footer">
                                    <input type="submit" class="btn btn-info btn-sm" id="addEvent" value="发布">
                                    <button type="button" class="btn btn-info btn-sm" data-dismiss="modal">关闭</button>
                               </div>
                          </div>
                     </div>
                </div>
                
                <!-- Modal Resize alert -->
                <div class="modal fade" id="editEvent">
                     <div class="modal-dialog">
                          <div class="modal-content">
                               <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 class="modal-title">修改事件</h4>
                               </div>
                               <div class="modal-body">
                                    <div id="eventInfo"></div>
                               </div>
                               
                               <div class="modal-footer">
                                    <button type="button" class="btn btn-info btn-sm" data-dismiss="modal">发布</button>
                                    <button type="button" class="btn btn-info btn-sm" id="editCancel" data-dismiss="modal">取消</button>
                               </div>
                          </div>
                     </div>
                </div>
                
                <br/><br/>
            </section>
        </section>
        
        <!-- Javascript Libraries -->
        <!-- jQuery -->
        <script src="js/jquery.min.js"></script> <!-- jQuery Library -->
        <script src="js/jquery-ui.min.js"></script> <!-- jQuery UI -->

        <!-- Bootstrap -->
        <script src="js/bootstrap.min.js"></script>
        
        <!-- UX -->
        <script src="js/scroll.min.js"></script> <!-- Custom Scrollbar -->
        
        <!--  Form Related -->
        <script src="js/validation/validate.min.js"></script> <!-- jQuery Form Validation Library -->
        <script src="js/validation/validationEngine.min.js"></script> <!-- jQuery Form Validation Library - requirred with above js -->
        
        <!-- Other -->
        <script src="js/calendar.min.js"></script> <!-- Calendar -->
        <script src="js/feeds.min.js"></script> <!-- News Feeds -->
        <script src="js/autosize.min.js"></script><!-- Textare autosize -->


        <!-- All JS functions -->
        <script src="js/functions.js"></script>
        
        <script type="text/javascript">
            $(document).ready(function() {
                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();

                var monthEvent = $.parseJSON($("#monthEvent").val());

                $('#calendar').fullCalendar({
                    header: {
                         center: 'title',
                         left: 'prev, next',
                         right: ''
                    },
                    events: [],
                    selectable: true,
                    selectHelper: true,
                    editable: true,
                    //设置为true时，如果数据过多超过日历格子显示的高度时，多出去的数据不会将格子挤开，而是显示为 +...more ，点击后才会完整显示所有的数据
                    eventLimit: true,

                    //On Day Select
                    select: function(start, end, allDay) {
                        $("#addNew-event").find('.formError').remove();
                        $('#addNew-event').modal('show');
                        $('#addNew-event input:text').val('');
                        $("#eventCreateMember").val($("#eventCreateMember").attr("value"));
                        $('#getStart').val(start);
                        $('#getEnd').val(end);
                    },
                    eventClick : function(event){

                        console.log('eventClick中选中Event的id属性值为：', event.id);
                        console.log('eventClick中选中Event的title属性值为：', event.title);
                        console.log('eventClick中选中Event的start属性值为：', event.start.Format('yyyy-MM-dd HH:mm'));
                        console.log('eventClick中选中Event的end属性值为：', event.end.Format('yyyy-MM-dd HH:mm'));
                        console.log('eventClick中选中Event的color属性值为：', event.color);
                        console.log('eventClick中选中Event的className属性值为：', event.className);
                        console.log('eventClick中选中Event的className属性值为：', event.editable);
                        // ...
                    },
                    eventResize: function(event,dayDelta,minuteDelta,revertFunc) {
                        revertFunc();
//暂不支持拖动改时间
//                        $('#editEvent').modal('show');
//
//                        var info =
//                            "The end date of " + event.title + "has been moved " +
//                            dayDelta + " days and " +
//                            minuteDelta + " minutes."
//                        ;
//
//                        $('#eventInfo').html(info);
//
//
//                        $('#editEvent #editCancel').click(function(){
//                             revertFunc();
//                        })
                    }
                });
                //新建确定按钮
                $('body').on('click', '#addEvent', function () {
                    var eventForm = $(this).closest('.modal').find('.form-validation');
                    eventForm.validationEngine('validate');

                    if (!(eventForm).find('.formErrorContent')[0]) {
                        //Event Name 事件名称
                        var eventName = $('#eventName').val();
                        var eventData = {
                            title: eventName,
                            start: $('#getStart').val(),
                            end: $('#getEnd').val(),
                            allDay: true
                        };
                        $.ajax({
                            url: "calendar.do?method=addCalendarEvent",
                            async: false,
                            type: "POST",
                            dataType: "json",
                            data: {
                                eventName: eventName
                            },
                            success: function (data) {
                                $message.alert({
                                    title: "Delete result",
                                    msg: "<p>" + data.msg + "</p>"
                                });
                                if (data.result === "true") {
                                    //Render Event
                                    $('#calendar').fullCalendar('renderEvent', eventData, true); //Stick the event                                }
                                }
                            }
                        });
                        $('#addNew-event form')[0].reset();
                        $('#addNew-event').modal('hide');
                    }
                });   
            });    
            
            //Calendar views 视图改变 切换 月/周/日
            $('body').on('click', '.calendar-actions > li > a', function(e){
                e.preventDefault();
                var dataView = $(this).attr('data-view');
                $('#calendar').fullCalendar('changeView', dataView);
                
                //Custom scrollbar
                var overflowRegular, overflowInvisible = false;
                overflowRegular = $('.overflow').niceScroll();     
            });                    


       </script>
    </body>
</html>
