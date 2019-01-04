function FindProxyForURL(url,host)
{
    if(shExpMatch(host,"*google*") || shExpMatch(host,"*quora*") || shExpMatch(host,"*chrome*")
 || shExpMatch(host,"*redd*") || shExpMatch(host,"*twi*") || shExpMatch(host,"t\.co")  || shExpMatch(host,"*pixiv*")
       || shExpMatch(host,"*community*")  || shExpMatch(host,"*cloudfront*")  || shExpMatch(host,"*gstatic*")
       || shExpMatch(host,"*youtube*")  || shExpMatch(host,"*ytimg*")  || shExpMatch(host,"*ggpht*")
        || shExpMatch(host,"*medium*") || shExpMatch(host,"*gist*") || shExpMatch(host,"*githubassets*")
      || shExpMatch(host,"*nytime*") || shExpMatch(host,"*appledaily*"))
    {
        return "HTTPS tun.diaoqiang.top:443";
    }
    return "DIRECT";
}
