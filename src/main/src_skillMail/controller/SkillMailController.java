package controller;

import manager.SkillMailManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import po.MailPo;
import po.MemberPo;
import util.SysUtil;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("skillMail.do")
public class SkillMailController {
	@Autowired
	private SkillMailManager skillMailManager;

	private static Logger log = Logger.getLogger(SkillMailController.class);

	/**
	 * 查询所有提醒
	 * @param session
	 * @return
	 */
	@RequestMapping(params = "method=queryMail", method=RequestMethod.POST,produces = "application/json; charset=utf-8")
	@ResponseBody
	public String queryMonth(HttpSession session){
		MemberPo memberPo = (MemberPo)session.getAttribute("member");
		List<MailPo> mailPos = new ArrayList<MailPo>();
		if(memberPo!=null) {
			mailPos = skillMailManager.querySkillMailsByMemberId(memberPo.getMember_id());
		}
		return SysUtil.createGson().toJson(mailPos);
	}

	/**
	 * 增加邮件提醒
	 * @param session
	 * @return
	 */
	@RequestMapping(params = "method=insertMail", method=RequestMethod.POST, produces="application/json;charset=UTF-8")
	@ResponseBody
	public String insertMail(HttpSession session,HttpServletRequest request,HttpServletResponse response){
		MemberPo memberPo = (MemberPo)session.getAttribute("member");
		Map<String,String> resultMap = new HashMap<String, String>();
		if(memberPo==null) {
			resultMap.put("result","false");
			resultMap.put("msg","妖兽啊~~掉线啦~~~");
		}else{
			try {
				List<MailPo> mailPos = skillMailManager.querySkillMailsByMemberId(memberPo.getMember_id());
				if(mailPos!=null && mailPos.size()>=5){
					resultMap.put("result","false");
					resultMap.put("msg","抠门运维不肯升级CPU,每人最多5条生产线！");
				}else{
					SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
					String day = request.getParameter("day");
					String time = request.getParameter("time");
					String content = request.getParameter("content");
					Date alertDate = sdf.parse(day + " " + time);

					MailPo mailPo = new MailPo();
					mailPo.setIdIfNew();
					mailPo.setMail_user_id(memberPo.getMember_id());
					mailPo.setMail_user_name(memberPo.getMember_nickname());
					mailPo.setMail_address(memberPo.getMember_email());
					mailPo.setMail_content(content);
					mailPo.setMail_time(alertDate);
					mailPo.setMail_createTime(new Date());
					mailPo.setMail_done(0);

					skillMailManager.insertSkillMail(mailPo);
					resultMap.put("result","true");
					resultMap.put("msg","成功！");
				}
			} catch (ParseException e) {
				log.error("时间转换出错", e);
				resultMap.put("result","false");
				resultMap.put("msg","时间转换出错");
			}

		}
		return SysUtil.createGson().toJson(resultMap);
	}

	@RequestMapping(params = "method=delMail", method=RequestMethod.POST, produces="application/json;charset=UTF-8")
	@ResponseBody
	public String delMail(HttpSession session,HttpServletRequest request,HttpServletResponse response){
		MemberPo memberPo = (MemberPo)session.getAttribute("member");
		Map<String,String> resultMap = new HashMap<String, String>();
		if(memberPo==null) {
			resultMap.put("result","false");
			resultMap.put("msg","妖兽啊~~掉线啦~~~");
		}else{
			String mailId = request.getParameter("mailId");
			skillMailManager.deleteSkillMailBy(Long.parseLong(mailId));
			resultMap.put("result","true");
			resultMap.put("msg","删除成功！");

		}
		return SysUtil.createGson().toJson(resultMap);
	}
	@RequestMapping(params = "method=index", method=RequestMethod.GET)
	public ModelAndView mailIndex(HttpSession httpSession){
		MemberPo memberPo = (MemberPo)httpSession.getAttribute("member");
		if(memberPo==null){
			return new ModelAndView("login");
		}else{
			return new ModelAndView("skillMail/form-skillMail");
		}
	}
}
