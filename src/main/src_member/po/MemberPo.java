package po;


import util.SysUtil;

/**
 * 人员实体
 *
 * @author KYGZ
 */
public class MemberPo {
    private Long member_id;
    private String member_nickname;
    private String member_name;
    private String member_password;
    private String member_qq;
    private String member_email;
    private String member_skin = "0";

    public String getMember_nickname() {
        return member_nickname;
    }

    public void setMember_nickname(String member_nickname) {
        this.member_nickname = member_nickname;
    }

    public Long getMember_id() {
        return member_id;
    }

    public void setMember_id(Long member_id) {
        this.member_id = member_id;
    }

    public String getMember_name() {
        return member_name;
    }

    public void setMember_name(String member_name) {
        this.member_name = member_name;
    }

    public String getMember_password() {
        return member_password;
    }

    public void setMember_password(String member_password) {
        this.member_password = member_password;
    }

    public String getMember_qq() {
        return member_qq;
    }

    public void setMember_qq(String member_qq) {
        this.member_qq = member_qq;
    }

    public String getMember_skin() {
        return member_skin;
    }

    public void setMember_skin(String member_skin) {
        this.member_skin = member_skin;
    }

    public String getMember_email() {
        return member_email;
    }

    public void setMember_email(String member_email) {
        this.member_email = member_email;
    }

    public void setIdIfNew() {
        this.setMember_id(SysUtil.longUUID());
    }
}
