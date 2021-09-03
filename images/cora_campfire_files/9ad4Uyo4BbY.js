if (self.CavalryLogger) { CavalryLogger.start_js(["xhinegO"]); }

__d("StoriesCometSuspenseSingleBucketRootWrapper.react",["CometErrorBoundary.react","CometPlaceholder.react","CometRouteRenderType","StoriesCometPlaceholder.react","StoriesResizeToView.react","StoriesRootError.react","StoriesUtils","react","stylex","useCometWindowSize","useToggleChatTabsOnMountUnmount"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.bucketID;a=a.children;c("useToggleChatTabsOnMountUnmount")();var e=d("CometRouteRenderType").useIsHosted(),f=d("CometRouteRenderType").useIsPushView();b=b==="";var g=c("useCometWindowSize")();return d("StoriesUtils").shouldResizeToViewStories(g.innerHeight)?h.jsx(c("StoriesResizeToView.react"),{}):h.jsx("div",{className:c("stylex").dedupe(e?{"display-1":"j83agx80","flex-basis-1":"rj1gh0hx","flex-grow-1":"buofh1pr","flex-shrink-1":"g5gj957u","position-1":"l9j0dhe7","width-1":"k4urcfbm"}:{},f?{"top-1":"kr520xx4"}:null,e?null:{"bottom-1":"i09qtzwb","end-1":"n7fi1qx3","position-1":"pmk7jnqg","start-1":"j9ispegn","top-1":"kr520xx4"}),children:h.jsx(c("CometPlaceholder.react"),{fallback:h.jsx(c("StoriesCometPlaceholder.react"),{isNullState:b,leftRail:!1}),children:h.jsx(c("CometErrorBoundary.react"),{fallback:function(a){return h.jsx(c("StoriesRootError.react"),{error:a})},children:a})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useStoriesSingleBucketProcessRoute",["CometRouteParams","uuid"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b,e=d("CometRouteParams").useRouteParams();a=typeof e.bucket_id==="string"?e.bucket_id:a;a=(b=a)!=null?b:"";b=typeof e.card_id==="string"?e.card_id:"";var f=typeof e.source==="string"?e.source:"";e=typeof e.tray_session_id==="string"?e.tray_session_id:"";var g=c("uuid")();return{bucketID:a,cardID:b,source:f,traySessionID:e,viewerSessionID:g}}g["default"]=a}),98);
__d("StoriesCometSuspenseSingleBucketRootWithEntryPoint.react",["StoriesCometSuspenseSingleBucketRootWrapper.react","deferredLoadComponent","react","requireDeferredForDisplay","useStoriesSingleBucketProcessRoute"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("deferredLoadComponent")(c("requireDeferredForDisplay")("StoriesViewerSingleBucketWithEntryPoint.react").__setRef("StoriesCometSuspenseSingleBucketRootWithEntryPoint.react"));function a(a){var b=a.props;a=a.queries;b=c("useStoriesSingleBucketProcessRoute")(b.routeProps.bucket_id_from_card_id);var d=b.bucketID,e=b.cardID,f=b.source,g=b.traySessionID;b=b.viewerSessionID;return h.jsx(c("StoriesCometSuspenseSingleBucketRootWrapper.react"),{bucketID:d,children:h.jsx(i,{bucketID:d,cardID:e,openSource:f,queries:a,traySessionID:g,viewerSessionID:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesViewerSingleBucketWrapper.react",["fbt","CometErrorBoundary.react","CometPlaceholder.react","CometStyleXSheet","StoriesEnums","StoriesLoggerSession","StoriesQueryArgumentsContext","StoriesRootError.react","StoriesSetBucketHelper","StoriesSuspenseBucketDataContext","StoriesSuspenseContentPanePlaceholder.react","StoriesSuspenseViewerKeyboardListener.react","emptyFunction","gkx","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useEffect,k=b.useMemo;d("CometStyleXSheet").rootStyleSheet.injectTheme();function a(a){var b=a.bucketID,e=a.children,f=a.openSource,g=a.traySessionID,l=a.viewerSessionID;j(function(){d("StoriesLoggerSession").initialize(g,l,f)},[f,g,l]);a=k(function(){return{bucketData:d("StoriesSetBucketHelper").defaultBucketData(b),bucketNavDirection:d("StoriesEnums").NAV_DIRECTIONS.NEXT_BUCKET,setBucketData:c("emptyFunction"),setNavigationDirection:c("emptyFunction")}},[b]);var m=k(function(){return{hideSelfBucket:!1,initialBucketID:b,initialBucketsCount:9,pageBucketsCount:9}},[b]),n=b;n=n==="";return i.jsx(c("CometErrorBoundary.react"),{fallback:function(a){return i.jsx(c("StoriesRootError.react"),{error:a})},children:i.jsx(c("StoriesQueryArgumentsContext").Provider,{value:m,children:i.jsx(c("StoriesSuspenseBucketDataContext").Provider,{value:a,children:i.jsx("div",{className:"k4urcfbm j83agx80","data-testid":void 0,children:i.jsxs(c("StoriesSuspenseViewerKeyboardListener.react"),{children:[i.jsx(c("CometPlaceholder.react"),{fallback:i.jsx(c("StoriesSuspenseContentPanePlaceholder.react"),{isNullState:n}),children:e}),c("gkx")("678680")&&i.jsx("div",{className:"fwizqjfa j9ispegn pmk7jnqg cyypbtt7 g7xisrfe ljqsnud1 i09qtzwb g6srhlxm",children:h._("SVS")})]})})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesViewerSingleBucketWithEntryPoint.react",["CometStyleXSheet","StoriesSuspenseContentPaneRootWithEntryPoint.react","StoriesViewerSingleBucketWrapper.react","emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");d("CometStyleXSheet").rootStyleSheet.injectTheme();function a(a){var b=a.bucketID,d=a.cardID,e=a.openSource,f=a.queries,g=a.traySessionID;a=a.viewerSessionID;var i=b;return h.jsx(c("StoriesViewerSingleBucketWrapper.react"),{bucketID:i,openSource:e,traySessionID:g,viewerSessionID:a,children:h.jsx(c("StoriesSuspenseContentPaneRootWithEntryPoint.react"),{bucketID:i,initialBucketID:b,initialCardID:d,queryReference:f.storiesSuspenseContentPaneRootReference,updateFetchPolicy:c("emptyFunction"),viewSingle:!0,viewerSessionID:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);