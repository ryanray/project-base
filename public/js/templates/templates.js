this["JST"] = this["JST"] || {};

this["JST"]["views/demo"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),title = locals_.title;buf.push("<legend>Static text with " + (jade.escape((jade.interp = title) == null ? '' : jade.interp)) + "</legend>");;return buf.join("");
};

this["JST"]["views/index"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),title = locals_.title;buf.push("<!DOCTYPE html><html><head><title>" + (jade.escape(null == (jade.interp = title) ? "" : jade.interp)) + "</title><link rel=\"stylesheet\" href=\"/css/bootstrap.2.3.2.min.css\"></head><body><div class=\"navbar\"><div class=\"navbar-inner\"><div class=\"container\"><a href=\"/\" class=\"brand\">" + (jade.escape((jade.interp = title) == null ? '' : jade.interp)) + "</a></div></div></div><div class=\"container\"><div class=\"row\"><div class=\"span12\"><div ng-view></div></div></div></div></body><!--TODO: combine all these into one file--><script src=\"/js/vendor/jquery.1.10.2.min.js\"></script><script src=\"/js/vendor/bootstrap.2.3.2.min.js\"></script><script src=\"/js/vendor/jade.runtime.0.35.js\"></script><script src=\"/js/templates/templates.js\"></script><script src=\"/js/lib/init.js\"></script></html>");;return buf.join("");
};

this["JST"]["views/layout"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),title = locals_.title;buf.push("<!DOCTYPE html><html><head><title>" + (jade.escape(null == (jade.interp = title) ? "" : jade.interp)) + "</title><link rel=\"stylesheet\" href=\"/css/bootstrap.2.3.2.min.css\"></head><body></body><!--TODO: combine all these into one file--><script src=\"/js/vendor/jquery.1.10.2.min.js\"></script><script src=\"/js/vendor/bootstrap.2.3.2.min.js\"></script><script src=\"/js/vendor/jade.runtime.0.35.js\"></script><script src=\"/js/templates/templates.js\"></script><script src=\"/js/lib/init.js\"></script></html>");;return buf.join("");
};