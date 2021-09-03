if (self.CavalryLogger) { CavalryLogger.start_js(["Ay0a9yD"]); }

__d("useOnInitialMount",["react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useRef;function a(a){var b=i(!1);h(function(){b.current||(b.current=!0,a())})}g["default"]=a}),98);
__d("CometOnInitialMount.react",["useOnInitialMount"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a=a.onInitialMount;c("useOnInitialMount")(a);return null}g["default"]=a}),98);
__d("CometFeedUnitLoggingContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({position:null,renderLocation:null});g["default"]=b}),98);
__d("CometFeedUnitOnFeedUnitErrorContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(null);g["default"]=b}),98);
__d("CometFeedUnitShouldPropagateErrorContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(!0);g["default"]=b}),98);
__d("useCommitCountRef",["react","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useRef;function a(){var a=h(0);c("useLayoutEffect_SAFE_FOR_SSR")(function(){a.current+=1});return a}g["default"]=a}),98);
__d("CometFeedMatchRenderer.react",["CometErrorBoundary.react","CometFeedUnitLoggingContext","CometFeedUnitOnFeedUnitErrorContext","CometFeedUnitShouldPropagateErrorContext","CometOnInitialMount.react","CometRelay","FBLogger","ODS","react","recoverableViolation","requireDeferred","useCommitCountRef"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useContext,k=b.useEffect,l=b.useRef,m=c("requireDeferred")("CometFeedStoriesStrategyErrorsTypedLoggerLite").__setRef("CometFeedMatchRenderer.react");function a(a){var b=a.match,e=a.matchRequired,f=e===void 0?!1:e,g=a.onUnsupported;e=a.preventErrorsFromFailingTheFeedUnit_USE_WITH_CAUTION;var n=a.props,o=a.section,p=a.trackingData,q=c("useCommitCountRef")(),r=j(c("CometFeedUnitOnFeedUnitErrorContext"));a=j(c("CometFeedUnitShouldPropagateErrorContext"));var s=j(c("CometFeedUnitLoggingContext")),t=s.position,u=s.renderLocation,v=b!=null?d("CometRelay").ModuleResource.getModuleId(b):null,w=l(!1);k(function(){!w.current&&v!=null&&(d("ODS").bumpFraction(3478,"comet_feed_strategy_errors",v,0,1),w.current=!0)},[v]);s=function(){g!=null&&g(),f&&c("recoverableViolation")("match required for Comet Feed section "+o+" and none was found","comet_feed")};var x=e!=null?!e:a;e=i(function(a){v!=null&&d("ODS").bumpFraction(3478,"comet_feed_strategy_errors",v,1,0);m.onReady(function(b){b.log({error_name:a.message,error_propagated_to_feed_unit:r!=null&&x,is_within_feed_unit:r!=null,num_commits_before_error:q.current,position:t,render_location:u!=="%future added value"?u:null,section:o,strategy:v,tracking_data:p})});if(r==null){var b;c("FBLogger")("CometFeedSectionErrorOutsideFeedUnit").info(((b=v)!=null?b:"Unknown Strategy/Attachment Renderer")+" threw a js error outside of CometFeedUnit.");throw a}else x&&r(a)},[r,x,q,v,t,u,o,p]);return b==null?h.jsx(c("CometOnInitialMount.react"),{onInitialMount:s}):h.jsx(c("CometErrorBoundary.react"),{context:{project:"CometFeedSectionErrorBoundary"},onError:e,children:h.jsx(c("CometFeedUnitShouldPropagateErrorContext").Provider,{value:x,children:h.jsx(d("CometRelay").MatchContainer,{fallback:h.jsx(c("CometOnInitialMount.react"),{onInitialMount:s}),match:b,props:n})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedStoryAttachmentCommandWidget",["createKeyCommandWidget"],(function(a,b,c,d,e,f,g){"use strict";a=c("createKeyCommandWidget")();b=a;var h=a.useKeyCommands;a.useKeyCommands=function(a){h(a,!0)};g["default"]=b}),98);
__d("GHLAriaLabelTracker",["ODS","ghlTestUBT"],(function(a,b,c,d,e,f,g){"use strict";var h=!1,i=[],j=!1,k=!1;function l(){if(j)return;j=!0;c("ghlTestUBT")(function(a){return k=a});d("ODS").bumpEntityKey(4294,"feed_ads","comet.label_tracker.session")}function m(){d("ODS").bumpEntityKey(4294,"feed_ads","comet.label_tracker.labeled."+(k?"positive":"negative"))}function a(a){if(h){a();return{dispose:function(){}}}i.push(a);l();return{dispose:function(){i.splice(i.indexOf(a),1)}}}function b(){if(h)return;h=!0;i.forEach(function(a){return a()});m()}e={onAdd:a,set:b};g["default"]=e}),98);
__d("usePageletMetadata",["CometHeroInteractionContext","react","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(a,b){var d=h(c("CometHeroInteractionContext").Context);c("useLayoutEffect_SAFE_FOR_SSR")(function(){d.logMetadata(a,b,d.pageletStack);return function(){d.logMetadata(a,null,d.pageletStack)}},[d,a,b])}g["default"]=a}),98);
__d("usePageletMatchMetadata",["RelayFBModuleResource","usePageletMetadata"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){b=b!=null?d("RelayFBModuleResource").getModuleId(b):null;c("usePageletMetadata")("ddd_"+a,b)}g["default"]=a}),98);