function FindProxyForURL(url,host)
{
    if(shExpMatch(host,"*google*") || shExpMatch(host,"*quora*") || shExpMatch(host,"*chrome*")
 || shExpMatch(host,"*reddit*") || shExpMatch(host,"*twi*") || shExpMatch(host,"t\.co")  || shExpMatch(host,"*pixiv*")
       || shExpMatch(host,"*community*")  || shExpMatch(host,"*cloudfront*"))
    {
        return "HTTPS tun.diaoqiang.top:443";
    }
    return "DIRECT";
}
