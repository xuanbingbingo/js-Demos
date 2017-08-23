<%@ Language="C#" %>
<script runat="server">
    protected void Page_Load(object sender, EventArgs e)
    {
		string jsoncall = Request.QueryString["callback"]; 
		string kw = Request.QueryString["kw"]; 
		Response.Write(jsoncall + "({keyword:'"+kw+"',time:'"+DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")+"'})");
		Response.End();
		
    }
</script>
