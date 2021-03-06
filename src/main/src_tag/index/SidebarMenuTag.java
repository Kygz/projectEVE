package index;

import po.MemberPo;

import javax.servlet.http.HttpSession;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;
import java.io.IOException;

/**
 * 首页侧栏六维
 * Created by gavin on 2016/6/30.
 */
public class SidebarMenuTag  extends TagSupport {
    @Override
    public int doStartTag() throws JspException{
        JspWriter out = this.pageContext.getOut();
        HttpSession httpSession = this.pageContext.getSession();
        MemberPo memberPo = (MemberPo)httpSession.getAttribute("member");

        try {
            out.println("<ul class=\"list-unstyled side-menu\">" +
                        "   <li class=\"active\">" +
                        "       <a class=\"sa-side-home\" _href=\"login.do?method=index\">" +
                        "           <span class=\"menu-item\">主页</span>" +
                        "       </a>" +
                        "   </li>" +
                        "   <li>" +
                        "       <a class=\"sa-side-calendar\" href=\"javascript:void(0)\" _href=\"calendar.do?method=index\" target=\"mainIframe\">" +
                        "           <span class=\"menu-item\">招募英雄专用小酒馆</span>" +
                        "       </a>" +
                        "   </li>" +
                        "   <li class=\"dropdown\">" +
                        "       <a class=\"sa-side-table\">" +
                        "           <span class=\"menu-item\" >装配车间</span>" +
                        "       </a>" +
                        "       <ul class=\"list-unstyled menu-item\">" +
                        "           <li><a href=\"javascript:void(0)\" _href=\"shipAssembly.do?method=list\" target=\"mainIframe\">展示大厅</a></li>" +
                        "           <li><a href=\"javascript:void(0)\" _href=\"shipAssembly.do?method=index\" target=\"mainIframe\">配置上传</a></li>" +
                        "       </ul>" +
                        "   </li>" +
                        "   <li>" +
                        "       <a class=\"sa-side-widget\" href=\"404.html\">" +
                        "           <span class=\"menu-item\">米氏军校</span>" +
                        "       </a>" +
                        "   </li>" +
                        "   <li class=\"dropdown\">" +
                        "       <a class=\"sa-side-table\">" +
                        "           <span class=\"menu-item\">事务中心</span>" +
                        "       </a>" +
                        "       <ul class=\"list-unstyled menu-item\">" +
//                        "           <li><a href=\"404.html\">统计表格</a></li>" +
//                        "           <li><a href=\"404.html\">新手船只申领</a></li>" +
                        "           <li><a href=\"javascript:void(0)\" _href=\"planet.do?method=planetInsertPage\" target=\"mainIframe\">行星开发</a></li>" +
                        "           <li><a href=\"javascript:void(0)\" _href=\"itemGroup.do?method=index\" target=\"mainIframe\">市场展板</a></li>" +
                        "           <li><a href=\"javascript:void(0)\" _href=\"itemGroup.do?method=index\" target=\"mainIframe\">蓝图详情</a></li>" +
                        "           <li><a href=\"javascript:void(0)\" _href=\"skillMail.do?method=index\" target=\"mainIframe\">技能提醒</a></li>" +
//                        "           <li><a href=\"form-examples.html\">异常拾荒</a></li>" +
//                        "           <li><a href=\"form-validation.html\">出勤登记</a></li>" +
                        "       </ul>" +
                        "   </li>" +
                        "</ul>");
        } catch (IOException e) {
            e.printStackTrace();
        }
        return SKIP_BODY;
    }

    @Override
    public int doEndTag() throws JspException {
        return EVAL_PAGE;
    }

    @Override
    public void release() {
        super.release();
    }
}

