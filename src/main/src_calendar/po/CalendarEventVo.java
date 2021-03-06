package po;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CalendarEventVo {
    final String joinColor = "#73ff1e";//green
    final String joinPassColor = "#82fa9b";//灰绿
    final String normalColor = "#00b4ff";//blue
    final String normalPassColor = "#000";//灰
    private Long id;
    private Long userId;
    private String userName;
    private Date start;
    private Date end;
    private boolean allDay;
    private String color;
    private String title;
    private String content;
    private boolean editable;
    /*
    向下为参与信息..... 预埋坑
     */
    private boolean isJoin = false;
    private boolean isPass = false;
    private List<Map<String,String>> idList = new ArrayList<Map<String, String>>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Date getStart() {
        return start;
    }

    public void setStart(Date start) {
        this.start = start;
    }

    public Date getEnd() {
        return end;
    }

    public void setEnd(Date end) {
        this.end = end;
    }

    public boolean isAllDay() {
        return allDay;
    }

    public void setAllDay(boolean allDay) {
        this.allDay = allDay;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public boolean isEditable() {
        return editable;
    }

    public void setEditable(boolean editable) {
        this.editable = editable;
    }

    public boolean isJoin() {
        return isJoin;
    }

    public void setJoin(boolean join) {
        isJoin = join;
    }

    public boolean isPass() {
        return isPass;
    }

    public void setPass(boolean pass) {
        isPass = pass;
    }

    public List<Map<String, String>> getIdList() {
        return idList;
    }

    public void setIdList(List<Map<String, String>> idList) {
        this.idList = idList;
    }

    public CalendarEventVo(CalendarEventPo po, List<CalendarJoinPo> joinList, MemberPo currentMember) {
        this.id = po.getCalendar_id();
        this.userId = po.getCalendar_create_id();
        this.userName = currentMember.getMember_nickname();
        this.start = po.getCalendar_startTime();
        this.end = po.getCalendar_endTime();
        this.allDay = po.getCalendar_allDay() == 1;
        this.title = po.getCalendar_title();
        this.content = po.getCalendar_content();
//        this.editable = editable;
        if(joinList!=null && joinList.size()>0) {
            for (CalendarJoinPo  tempPo : joinList){
                Map<String,String> tempMap = new HashMap<String,String>();
                tempMap.put("id",tempPo.getCalendar_member_id().toString());
                tempMap.put("name",tempPo.getCalendar_member_name());
                idList.add(tempMap);
                if(tempPo.getCalendar_member_id().equals(userId)){
                    isJoin  = true;
                }
            }
        }
        if(end == null && allDay && new Date().getTime()>(start.getTime()+ 3600 *1000 *24)){
            this.isPass = true;
        }else if(end != null && new Date().getTime()>end.getTime()){
            this.isPass = true;
        }

        if(isPass){
            if(isJoin){
                color = joinPassColor;
            }else {
                color = normalPassColor;
            }
        }else{
            if(isJoin){
                color = joinColor;
            }else {
                color = normalColor;
            }
        }
    }

}
