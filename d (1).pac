function FindProxyForURL(url,host)
{
    if(shExpMatch(host,"*google*") || shExpMatch(host,"*quora*") || shExpMatch(host,"*chrome*")
 || shExpMatch(host,"*redd*") || shExpMatch(host,"*twi*") || shExpMatch(host,"t\.co")  || shExpMatch(host,"*pixiv*")
       || shExpMatch(host,"*community*")  || shExpMatch(host,"*cloudfront*")  || shExpMatch(host,"*gstatic*")
       || shExpMatch(host,"*youtube*")  || shExpMatch(host,"*ytimg*")  || shExpMatch(host,"*ggpht*")
        || shExpMatch(host,"*medium*") || shExpMatch(host,"*gist*") || shExpMatch(host,"*githubassets*")
      || shExpMatch(host,"*nytime*") || shExpMatch(host,"*appledaily*")|| shExpMatch(host,"*theinitium*")
      || shExpMatch(host,"*komica*")|| shExpMatch(host,"*sourceforge*")|| shExpMatch(host,"*chromium*")
      || shExpMatch(host,"forums\.e-hentai\.org") || shExpMatch(host,"*rfi*") || shExpMatch(host,"*wikipedia\.org")
       || shExpMatch(host,"*\.pin*") || shExpMatch(host,"*facebook*") || shExpMatch(host,"*appspot*")
       || shExpMatch(host,"*fbcdn*")  || shExpMatch(host,"acg\.rip")   || shExpMatch(host,"*9gag*")
        || shExpMatch(host,"*lantern*") || shExpMatch(host,"*bbc*") || shExpMatch(host,"*amazonaws*")
       || shExpMatch(host,"*scmp*") || shExpMatch(host,"*github\.io") || shExpMatch(host,"*theguardian*"))
    {
        return "HTTPS tun.diaoqiang.top:443";
    }
    return "DIRECT";
}
