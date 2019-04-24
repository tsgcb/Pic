function FindProxyForURL(url,host)
{
    if(shExpMatch(host,"*google*") || shExpMatch(host,"*quora*") || shExpMatch(host,"*chrome*")
 || shExpMatch(host,"*redd*") || shExpMatch(host,"*twi*") || shExpMatch(host,"t\.co")  || shExpMatch(host,"*pixiv*")
       || shExpMatch(host,"*community*")  || shExpMatch(host,"*cloudfront*")  || shExpMatch(host,"*gstatic*")
       || shExpMatch(host,"*youtube*")  || shExpMatch(host,"*ytimg*")  || shExpMatch(host,"*ggpht*")
        || shExpMatch(host,"*medium*") || shExpMatch(host,"*gist*") || shExpMatch(host,"*githubassets*")
      || shExpMatch(host,"*nytime*") || shExpMatch(host,"*appledaily*")|| shExpMatch(host,"*theinitium*")
      || shExpMatch(host,"*komica*")|| shExpMatch(host,"*sourceforge*")|| shExpMatch(host,"*chromium*")
      || shExpMatch(host,"forums\.e-hentai\.org") || shExpMatch(host,"*rfi*") || shExpMatch(host,"zh\.wikipedia\.org")
       || shExpMatch(host,"*\.pin*") || shExpMatch(host,"*facebook*") || shExpMatch(host,"*appspot*")
       || shExpMatch(host,"*fbcdn*") || shExpMatch(host,"*rawgit*"))
    {
        return "HTTPS tun.diaoqiang.top:443";
    }
    return "DIRECT";
}
