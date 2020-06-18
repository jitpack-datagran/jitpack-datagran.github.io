(function (w,d,e,o) {
    var l = d.createElement("script");
    _dgQ = [];
    l.type = "text/javascript";
    l.async = 1;
    l.src = e;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(l, s);
    w[o] = window[o] || [];
    w[o].aid = "5eeb933661cb08ec8827724b";
    w[o].wid = "5e885978b2908868021602eb";
    w[o].domain = "https://jitpack-datagran.github.io";
    w[o].internal_name = "Karthik_Test";
})(
  window, document,
  "https://cdn2.datagran.io/datagran.js",
  "datagran"
);
_dgTrack = function (n, p) {
  if (window.dg_tracker && typeof window.dg_tracker === 'object') {
      window.dg_tracker.trackEvent(n, p)
  }
  else {
      _dgQ.push([n, p]);
  }
}