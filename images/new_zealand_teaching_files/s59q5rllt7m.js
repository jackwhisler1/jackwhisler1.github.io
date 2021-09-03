if (self.CavalryLogger) { CavalryLogger.start_js(["4RWaNl7"]); }

__d("StoriesCardOverlayPositioner_bounds.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StoriesCardOverlayPositioner_bounds",selections:[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"rotation",storageKey:null}],type:"StoryOverlayRectangle",abstractKey:null};e.exports=a}),null);
__d("StoriesActorContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={actorID:null,actorName:null};c=a.createContext(b);g["default"]=c}),98);
__d("StoriesActorProvider.react",["StoriesActorContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo;function a(a){var b=a.actorID,d=a.actorName;a=a.children;var e=i(function(){return{actorID:b,actorName:d}},[b,d]);return h.jsx(c("StoriesActorContext").Provider,{value:e,children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesRatioBox.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.children,c=a.height;a=a.width;c=c/a*100;return h.jsx("div",{className:"k4urcfbm l9j0dhe7 stjgntxs ni8dbmo4 do00u71z l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",style:{paddingTop:c+"%"},children:h.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 i09qtzwb",children:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesConstants",["StoriesGating"],(function(a,b,c,d,e,f,g){"use strict";a={DEFAULT_SUSPENSE_CARD_INDEX:-1};b=9/16;c={BANNER_HEIGHT:42,BOTTOM_MARGIN:25,COUNT_PER_PAGINATION_FETCH:9};e=9;f=2;var h={MAX_RATING:5,PADDING_SPACE_PORTION:.04,STAR_ICON_SIZE:32,STAR_INLINE_PORTION:.55},i={NETWORK_ONLY:"network-only",STORE_OR_NETWORK:"store-or-network"};d=d("StoriesGating").getTileGridRowLength();d={INITIAL_ROW_COUNT:3,ITEMS_PER_ROW:d};var j=3e3,k=300,l={COUNT_PER_PAGINATION_FETCH:10,MAX_REACTIONS_PER_VIEWER:5},m=6,n=5,o=13/22,p=8/19,q=7/6,r={CREATION_END_CARD:"creation_end_card",EMPTY_BUCKET_ERROR:"empty_bucket_error",FRIENDS_STORY_OVERLAY:"friends_story_overlay"};g.CARD=a;g.DEFAULT_ASPECT_RATIO=b;g.NavList=c;g.NAV_PANE_TOTAL_COUNT=e;g.NUMBER_OF_BUCKETS_TO_PREFETCH=f;g.RATING_STICKER=h;g.RELAY_FETCH_POLICY=i;g.TILE_GRID=d;g.TIMEOUT_FOR_SERVER_TO_FINISH_WORK=j;g.TRANSITION_DURATION_MS=k;g.ViewerSheetViewerList=l;g.MAX_TILES_TO_SHOW=m;g.MAX_TILES_TO_SHOW_BIG=n;g.BIG_TILE_ASPECT_RATIO=o;g.SKINNY_TILE_ASPECT_RATIO=p;g.MINI_TILE_ASPECT_RATIO=q;g.VIEWER_V3_NULL_STATE=r}),98);
__d("StoriesEnums",[],(function(a,b,c,d,e,f){"use strict";a={BLACK:"black",DEFAULT:"default"};b={FRIEND_BUCKET:"FRIEND_BUCKET",SELF_BUCKET:"SELF_BUCKET",UNSELECTED:"UNSELECTED"};c={BL_TR:"BL_TR",BOTTOM_TOP:"BOTTOM_TOP",BR_TL:"BR_TL",LEFT_RIGHT:"LEFT_RIGHT",RIGHT_LEFT:"RIGHT_LEFT",TL_BR:"TL_BR",TOP_BOTTOM:"TOP_BOTTOM",TR_BL:"TR_BL"};d={ANGER:"\ud83d\ude21",HAHA:"\ud83d\ude06",LIKE:"\ud83d\udc4d",LOVE:"\u2764\ufe0f",SORRY:"\ud83d\ude22",SUPPORT:"\ud83e\udd17",WOW:"\ud83d\ude2e"};e={NEXT_BUCKET:"next-bucket",NEXT_CARD:"next-card",PREV_BUCKET:"prev-bucket",PREV_CARD:"prev-card",STAY_HERE:"stay_here"};var g={AVAILABLE_WIDTH_RATIO:(240-2*12)/240,BACKGROUND_COLOR_BLUE:"#79A6FF",BACOGROUND_COLOR_SLATE:"#EAEFF2",CHILD_PADDING_RATIO:.05,DEFAULT_OPTION_WIDTH_RATIO:.5,FIVE_OPTION_STAR_RATING:"FIVE_OPTION_STAR_RATING",IG_LEFT_TEXT_COLOR:"#13bda6",IG_RIGHT_TEXT_COLOR:"#F36B7F",IG_TWO_OPTION_COMBINED:"IG_TWO_OPTION_COMBINED",MINIMUM_LABEL_WIDTH_RATIO:.31,OVERFLOW_CHILD_PADDING_RATIO:20/240,TEXT_BIG_HEIGHT_RATIO:40/72,TEXT_BIG_MAX_FONT_SIZE_RATIO:30/240,TEXT_BIG_MIN_FONT_SIZE_RATIO:20/240,TEXT_BIG_RATIO:40/240,TEXT_COLOR_GREY:"#5F6673",TEXT_ONLY_FONT_SIZE_RATIO:20/240,TEXT_SMALL_HEIGHT_RATIO:25/72,TEXT_SMALL_MAX_FONT_SIZE_RATIO:20/240,TEXT_SMALL_MIN_FONT_SIZE_RATIO:12/240,TEXT_SMALL_RATIO:25/240,TEXT_WITH_PERCENT_FONT_SIZE_RATIO:12/240,TWO_OPTION_COMBINED:"TWO_OPTION_COMBINED",VOTE_COUNT_FONT_SIZE_RATIO:32/240,VOTE_OPTION_MAX_WIDTH_RATIO:.75},h={THREE_COLUMN:"THREE_COLUMN",TWO_COLUMN:"TWO_COLUMN"},i={OTHER:"OTHER",OWNED_SELF:"OWNED_SELF"},j={DELETE:"DELETE",DELETE_STORY_AND_BLOCK_MEMBER:"DELETE_STORY_AND_BLOCK_MEMBER",MUTE_CARD_OWNER:"MUTE_CARD_OWNER",REPORT_TO_GROUP_ADMINS:"REPORT_TO_GROUP_ADMINS",UNFOLLOW_PAGE:"UNFOLLOW_PAGE"},k={ADMINED_ADDITIONAL_PROFILE_STORY:"ADMINED_ADDITIONAL_PROFILE_STORY",ARCHIVED_STORY:"ARCHIVED_STORY",BIRTHDAY_STORY:"BIRTHDAY_STORY",CREW_STORY:"CREW_STORY",EVENT_STORY:"EVENT_STORY",GOODWILL_GENERATED_STORY:"GOODWILL_GENERATED_STORY",GOODWILL_STORY:"GOODWILL_STORY",GROUP_STORY:"GROUP_STORY",HIGHLIGHTED_STORY:"HIGHLIGHTED_STORY",LIVE_STORY:"LIVE_STORY",M_GROUP_STORY:"M_GROUP_STORY",NULL_STATE_STORY:"NULL_STATE_STORY",PAGE_STORY:"PAGE_STORY",PROFILE_PLUS_STORY:"PROFILE_PLUS_STORY",PROMOTION_STORY:"PROMOTION_STORY",SHARED_PAGE_STORY:"SHARED_PAGE_STORY",STORY:"STORY",TOPIC_STORY:"TOPIC_STORY",UNKNOWN:"UNKNOWN",WAS_LIVE:"WAS_LIVE"},l={PHOTO:"Photo",VIDEO:"Video"},m={EXTERNAL_SONG:"StoryOverlayExternalSong",INTERACTIVE_STICKER:"StoryOverlayReactionSticker",LINK_STICKER:"StoryOverlayLinkSticker",LIVE_VIDEO:"StoryOverlayLiveVideo",POLL_STICKER:"StoryOverlayPollSticker",PRODUCT_STICKER:"StoryOverlayProductSticker",RESHARED_CONTENT:"StoryOverlayResharedContent",RESHARED_POST:"StoryOverlayResharedPost",TAG_STICKER:"StoryOverlayTagSticker"},n={ANIMATIONS_INTERVAL_THROTTLE:300,HOLD_DELAY:1e3},o={LOCATION:"LOCATION",PAGE:"PAGE",PEOPLE:"PEOPLE",PRODUCT:"PRODUCT"},p={DARK_MODE:"dark_mode",DARK15:"dark_15",DARK30:"dark_30",DEFAULT:"default"},q={DEFAULT:"default",SLIDE_UP:"slide_up"},r={PAGE_TRANSITION:"PAGE_TRANSITION",USER:"USER",USER_TRANSITION:"USER_TRANSITION"},s={JUST_VOTED:"JUST_VOTED",RESULTS:"RESULTS",VOTING:"VOTING"};f.BACKGROUND_STYLE=a;f.EMPTY_BUCKET_TYPES=b;f.GRADIENT_DIRECTION=c;f.LIGHTWEIGHT_REACTION_UNICODES=d;f.NAV_DIRECTIONS=e;f.POLL_STICKER=g;f.RECTANGULAR_TILE_TYPES=h;f.STORIES_BUCKETS_INDEXER_TYPES=i;f.STORIES_OPTION_TYPES=j;f.STORY_CARD_TYPES=k;f.STORY_MEDIA_TYPES=l;f.STORY_OVERLAY_TYPES=m;f.STORY_REACTION_STICKERS_CONSTANTS=n;f.TAG_STICKER_TYPES=o;f.VIEWER_THEME=p;f.VIEWERSHEET_ANIMATION=q;f.VIEWERSHEET_STYLE=r;f.VOTING_PHASES=s}),66);
__d("StoriesCardOverlayPositioner.react",["CometRelay","StoriesCardOverlayPositioner_bounds.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var c=a.bounds,e=a.children,f=a.containerHeight;a=a.containerWidth;c=d("CometRelay").useFragment(h!==void 0?h:h=b("StoriesCardOverlayPositioner_bounds.graphql"),c);if(c!=null){var g=c.height,j=c.rotation,k=c.width,l=c.x;c=c.y;if(typeof g==="number"&&typeof k==="number"&&typeof j==="number"&&typeof l==="number"&&typeof c==="number"){if(c>1||l>1)return null;g=g*f;f=k*a;k=c*100;a=l*100;c={height:g+"px",left:a+"%",position:"absolute",top:k+"%",width:f+"px"};l={height:"100%",transform:"rotate("+j+"deg)",width:"100%"};return i.jsx("div",{className:"storiesCardOverlay/root",style:c,children:i.jsx("div",{className:"storiesCardOverlay/rotation",style:l,children:e})})}}return null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesFeedbackFlowTypes",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum")({STICKER:0,GIF:1,EMOJI:2,NONE:3});f.StickerReplyTypes=a}),66);
__d("StoriesLoggerContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({logger:{clickInteractiveFeedbackReplyButtonLog:function(a){return void 0},closeStoryLog:function(){return void 0},deleteLog:function(){return void 0},getImpressionConfig:function(){return void 0},getImpressionData:function(a){return void 0},getTimespentConfig:function(){return void 0},handleLiveVideoLog:function(a){return void 0},openLinkLog:function(){return void 0},openMediaLog:function(a){return void 0},openStoryLog:function(){return void 0},openViewerSheetLog:function(){return void 0},pauseByKeyboardLog:function(a,b){return void 0},pauseLog:function(a){return void 0},replyAttemptCompletedLog:function(a,b){return void 0},replyLog:function(a){return void 0},replySentWhenSmartReplyShownLog:function(a,b,c,d){return void 0},smartReplyImpressionLog:function(a,b,c){return void 0},storyMediaViewLog:function(a){return void 0},storyNavigationLog:function(a){return void 0},visitPageLog:function(){return void 0}}});g["default"]=b}),98);
__d("StoriesLoggingConstants",[],(function(a,b,c,d,e,f){"use strict";a={ACTION_SOURCE:{ARCHIVE:"archive",FACEBOOK_CHAT_TAB:"facebook_chat_tab",MESSENGER_DOT_COM:"messenger_dot_com",NOTIFICATION:"notification",PAGE_PROFILE:"page_profile",POST_HEADER:"post_header_actor_photo",STORIES_HOME:"stories_home",THINGS_YOU_SHOULD_DO:"things_you_should_do",TODAY_IN:"today_in",TRAY:"story_tray",UNKNOWN:"unknown",VIEWER:"viewer"},ACTION_TYPE:{CLICK_EMOJI_REPLY_BUTTON:"click_emoji_reply_button",CLICK_GIF_REPLY_BUTTON:"click_gif_reply_button",CLICK_STICKER_REPLY_BUTTON:"click_sticker_reply_button",CLOSE_STORY:"close_story",DELETE_MEDIA:"delete_media_attempted",OPEN_LINK:"open_link",OPEN_MEDIA:"open_media",OPEN_SEEN_SUMMARY:"open_seen_summary",OPEN_STORY:"open_story",PAUSE_STORY:"pause_story",REACTION_STICKER_INTERACTED:"reaction_sticker_interacted",REPLY_ATTEMPT_COMPLETED:"reply_attempt_completed",REPLY_SENT_WHEN_SMART_REPLY_SHOWN:"reply_sent_when_smart_reply_shown",SEND_REPLY_ATTEMPT:"attempt_to_send_reply",SEND_STORY_FAILED:"send_story_failed",SEND_STORY_SUCCEEDED:"send_story_succeed",SMART_REPLY_IMPRESSION:"smart_reply_impression",STORY_MEDIA_VIEW:"story_media_view",STORY_NAVIGATION:"story_navigation",TRAY_LOAD:"story_tray_load",UNPAUSE_STORY:"unpause_story",VISIT_PAGE:"fb_stories_visit_page"},CLOSE_STORY_GESTURE:{AUTO_EXIT:"auto_exit",BACK_BUTTON_EXIT:"back_button_exit",BLUR_BACKGROUND:"blur_background",CLOSE_BUTTON_EXIT:"close_button_exit",KEYBOARD_EXIT:"keyboard_exit"},FB_STORIES_IMPRESSION:75,FB_STORIES_TIMESPENT:76,IMPRESSION_DEDUPLICATION_TIME:6e4,LIVE_IN_STORIES_EVENTS:{STORY_LIVE_PAGE_CTA_IMPRESSION:"story_live_page_cta_impression",STORY_LIVE_PAGE_CTA_TAP:"story_live_page_cta_tap",STORY_LIVE_PROFILE_CTA_IMPRESSION:"story_live_profile_cta_impression",STORY_LIVE_PROFILE_CTA_TAP:"story_live_profile_cta_tap",STORY_LIVE_STICKER_IMPRESSION:"story_live_sticker_impression",STORY_LIVE_STICKER_TAP:"story_live_sticker_tap",STORY_LIVE_TRAY_DROPDOWN_CLICK:"story_live_tray_dropdown_click",STORY_LIVE_TRAY_DROPDOWN_IMPRESSION:"story_live_tray_dropdown_impression",STORY_LIVE_VIEWER_DROPDOWN_CLICK:"story_live_viewer_dropdown_click",STORY_LIVE_VIEWER_DROPDOWN_IMPRESSION:"story_live_viewer_dropdown_impression"},NAVIGATION_GESTURE:{AUTO_JUMP:"auto_jump",NAVIGATE_AWAY:"navigate_away",SWIPE_LEFT:"swipe_left",SWIPE_RIGHT:"swipe_right",TAP_BACKWARD:"tap_backward",TAP_FORWARD:"tap_forward",VIEWER_SHEET:"viewer_sheet"},STORY_REPLY_TYPE:{STICKER:"Sticker",TEXT_SUGGESTION:"TextSuggestion"},STORY_TYPE:{EVENT_STORY:"event",FOLLOWEE_STORY:"followee",FRIEND_STORY:"friend",GROUP_STORY:"group",MISSING_STORY_DATA:"missingStoryData",PAGE_STORY:"page",SELF_STORY:"self",STORY_PROMOTION:"promotion"},TIMESPENT_MINIMUM_TIME:500};b=a;f["default"]=b}),66);
__d("StoriesPauseReasons",[],(function(a,b,c,d,e,f){"use strict";a="BUCKET_TRANSITION";b="BUCKET_REFRESH";c="BUG_DIALOG";d="CARD_CHANGE";e="CARD_TRANSITION_INITIATED";var g="CLICK_ADD_STORY",h="CLICK_ARCHIVE_RESHARE_BUTTON",i="CLICK_EMOJI_SELECTOR",j="CLICK_GIF_SELECTOR",k="CLICK_ON_OVERLAY_STICKER",l="CLICK_PAUSE_ICON",m="CLICK_SEE_MORE_LONG_TEXT",n="CLICK_STICKER_SELECTOR",o="CONFIRMATION_DIALOG",p="EXTENDED_VIEWER",q="FOCUSE_ON_INPUT",r="HOVER_ON_ARCHIVE_RESHARE_BUTTON",s="HOVER_ON_OVERLAY_STICKER",t="HOVER_ON_PAUSE_OVERLAY",u="HOVER_ON_RATING_STICKER",v="HOVER_ON_REACTION_ICON",w="HOVER_ON_SHARE_BUTTON",x="HOVER_ON_SONG_STICKER",y="JEWEL",z="KEYBOARD",A="LWR_PLAYBACK",B="MENU",C="MESSAGE_VIEWER",D="MOUSE_CLICK_AND_HOLD",E="MOUSE_ENTER_POLL_STICKER",F="REPORT_DIALOG",G="SETTINGS_DIALOG",H="TILE_GRID_BUTTON",I="VIDEO_PLAYBACK",J="VIEWER_SHEET_OVERLAY",K="VISIBILITY_CHANGE",L="WATCH_BROADCAST_CTA";f.BUCKET_TRANSITION=a;f.BUCKET_REFRESH=b;f.BUG_DIALOG=c;f.CARD_CHANGE=d;f.CARD_TRANSITION_INITIATED=e;f.CLICK_ADD_STORY=g;f.CLICK_ARCHIVE_RESHARE_BUTTON=h;f.CLICK_EMOJI_SELECTOR=i;f.CLICK_GIF_SELECTOR=j;f.CLICK_ON_OVERLAY_STICKER=k;f.CLICK_PAUSE_ICON=l;f.CLICK_SEE_MORE_LONG_TEXT=m;f.CLICK_STICKER_SELECTOR=n;f.CONFIRMATION_DIALOG=o;f.EXTENDED_VIEWER=p;f.FOCUSE_ON_INPUT=q;f.HOVER_ON_ARCHIVE_RESHARE_BUTTON=r;f.HOVER_ON_OVERLAY_STICKER=s;f.HOVER_ON_PAUSE_OVERLAY=t;f.HOVER_ON_RATING_STICKER=u;f.HOVER_ON_REACTION_ICON=v;f.HOVER_ON_SHARE_BUTTON=w;f.HOVER_ON_SONG_STICKER=x;f.JEWEL=y;f.KEYBOARD=z;f.LWR_PLAYBACK=A;f.MENU=B;f.MESSAGE_VIEWER=C;f.MOUSE_CLICK_AND_HOLD=D;f.MOUSE_ENTER_POLL_STICKER=E;f.REPORT_DIALOG=F;f.SETTINGS_DIALOG=G;f.TILE_GRID_BUTTON=H;f.VIDEO_PLAYBACK=I;f.VIEWER_SHEET_OVERLAY=J;f.VISIBILITY_CHANGE=K;f.WATCH_BROADCAST_CTA=L}),66);
__d("StoriesSuspensePauseContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={isPaused:!1,setPause:function(a,b){}};c=a.createContext(b);g["default"]=c}),98);