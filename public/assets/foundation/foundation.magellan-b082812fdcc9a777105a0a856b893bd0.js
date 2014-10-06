!function(t,a){"use strict";Foundation.libs["magellan-expedition"]={name:"magellan-expedition",version:"5.4.2",settings:{active_class:"active",threshold:0,destination_threshold:20,throttle_delay:30,fixed_top:0},init:function(t,a,e){Foundation.inherit(this,"throttle"),this.bindings(a,e)},events:function(){var e=this,i=e.S,n=e.settings;e.set_expedition_position(),i(e.scope).off(".magellan").on("click.fndtn.magellan","["+e.add_namespace("data-magellan-arrival")+'] a[href^="#"]',function(a){a.preventDefault();var i=t(this).closest("["+e.attr_name()+"]"),n=i.data("magellan-expedition-init"),o=this.hash.split("#").join(""),s=t("a[name='"+o+"']");0===s.length&&(s=t("#"+o));var l=s.offset().top-n.destination_threshold+1;l-=i.outerHeight(),t("html, body").stop().animate({scrollTop:l},700,"swing",function(){history.pushState?history.pushState(null,null,"#"+o):location.hash="#"+o})}).on("scroll.fndtn.magellan",e.throttle(this.check_for_arrivals.bind(this),n.throttle_delay)),t(a).on("resize.fndtn.magellan",e.throttle(this.set_expedition_position.bind(this),n.throttle_delay))},check_for_arrivals:function(){var t=this;t.update_arrivals(),t.update_expedition_positions()},set_expedition_position:function(){var a=this;t("["+this.attr_name()+"=fixed]",a.scope).each(function(){var e,i,n=t(this),o=n.data("magellan-expedition-init"),s=n.attr("styles");n.attr("style",""),e=n.offset().top+o.threshold,i=parseInt(n.data("magellan-fixed-top")),isNaN(i)||(a.settings.fixed_top=i),n.data(a.data_attr("magellan-top-offset"),e),n.attr("style",s)})},update_expedition_positions:function(){var e=this,i=t(a).scrollTop();t("["+this.attr_name()+"=fixed]",e.scope).each(function(){var a=t(this),n=a.data("magellan-expedition-init"),o=a.attr("style"),s=a.data("magellan-top-offset");if(i+e.settings.fixed_top>=s){var l=a.prev("["+e.add_namespace("data-magellan-expedition-clone")+"]");0===l.length&&(l=a.clone(),l.removeAttr(e.attr_name()),l.attr(e.add_namespace("data-magellan-expedition-clone"),""),a.before(l)),a.css({position:"fixed",top:n.fixed_top}).addClass("fixed")}else a.prev("["+e.add_namespace("data-magellan-expedition-clone")+"]").remove(),a.attr("style",o).css("position","").css("top","").removeClass("fixed")})},update_arrivals:function(){var e=this,i=t(a).scrollTop();t("["+this.attr_name()+"]",e.scope).each(function(){var a=t(this),n=a.data(e.attr_name(!0)+"-init"),o=e.offsets(a,i),s=a.find("["+e.add_namespace("data-magellan-arrival")+"]"),l=!1;o.each(function(t,i){if(i.viewport_offset>=i.top_offset){var o=a.find("["+e.add_namespace("data-magellan-arrival")+"]");return o.not(i.arrival).removeClass(n.active_class),i.arrival.addClass(n.active_class),l=!0,!0}}),l||s.removeClass(n.active_class)})},offsets:function(a,e){var i=this,n=a.data(i.attr_name(!0)+"-init"),o=e;return a.find("["+i.add_namespace("data-magellan-arrival")+"]").map(function(){var e=t(this).data(i.data_attr("magellan-arrival")),s=t("["+i.add_namespace("data-magellan-destination")+"="+e+"]");if(s.length>0){var l=Math.floor(s.offset().top-n.destination_threshold-a.outerHeight());return{destination:s,arrival:t(this),top_offset:l,viewport_offset:o}}}).sort(function(t,a){return t.top_offset<a.top_offset?-1:t.top_offset>a.top_offset?1:0})},data_attr:function(t){return this.namespace.length>0?this.namespace+"-"+t:t},off:function(){this.S(this.scope).off(".magellan"),this.S(a).off(".magellan")},reflow:function(){var a=this;t("["+a.add_namespace("data-magellan-expedition-clone")+"]",a.scope).remove()}}}(jQuery,window,window.document);