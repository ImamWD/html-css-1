window.onscroll = function ()
{
    scroll_f()
};
function scroll_f()
{
    var x = vh(10);
    if(document.body.scrollTop < x || document.documentElement.scrollTop<x)
    {
        document.getElementById("navv").style.background="transparent";
    }
    if(document.body.scrollTop > x || document.documentElement.scrollTop > x)
    {
        document.getElementById("navv").style.background="black";
        document.getElementById("navv").style.opacity=".5";
    }


}
function vh(y)
{
    var h = Math.max(document.documentElement.clientHeight , window.innerHeight || 0);
    return (y*h)/100;
}