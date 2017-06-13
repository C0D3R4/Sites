import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "input": {
        "outline": "none !important"
    },
    "html": {
        "width": "100%"
    },
    "a[href^=\"tel:\"]": {
        "color": "inherit",
        "textDecoration": "none"
    },
    "*": {
        "WebkitTextSizeAdjust": "none"
    },
    "body": {
        "font": "13px/19px  Arial, Helvetica, sans-serif",
        "color": "#666565",
        "position": "relative",
        "minWidth": 960,
        "background": "url(../images/bg_body.jpg) center 0 no-repeat #d6bba0"
    },
    "ic": {
        "border": 0,
        "float": "right",
        "background": "#fff",
        "color": "#f00",
        "width": "50%",
        "lineHeight": 10,
        "fontSize": 10,
        "marginTop": "-220%",
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ic a": {
        "border": 0,
        "float": "right",
        "background": "#fff",
        "color": "#f00",
        "width": "50%",
        "lineHeight": 10,
        "fontSize": 10,
        "marginTop": "-220%",
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "h1": {
        "fontWeight": "normal",
        "fontFamily": "'Pathway Gothic One', sans-serif",
        "color": "#263555"
    },
    "h2": {
        "fontWeight": "normal",
        "fontFamily": "'Pathway Gothic One', sans-serif",
        "color": "#263555"
    },
    "h3": {
        "fontWeight": "normal",
        "fontFamily": "'Pathway Gothic One', sans-serif",
        "color": "#263555",
        "fontSize": 38,
        "lineHeight": 44,
        "textTransform": "uppercase",
        "marginBottom": 50
    },
    "h4": {
        "fontWeight": "300",
        "fontFamily": "'Open Sans Condensed', sans-serif",
        "color": "#fff",
        "fontSize": 20,
        "lineHeight": 20,
        "textTransform": "uppercase",
        "paddingTop": 33,
        "marginBottom": 8
    },
    "h5": {
        "fontWeight": "normal",
        "fontFamily": "'Pathway Gothic One', sans-serif",
        "color": "#263555"
    },
    "h6": {
        "fontWeight": "normal",
        "fontFamily": "'Pathway Gothic One', sans-serif",
        "color": "#263555"
    },
    "page1 h3": {
        "paddingTop": 62,
        "marginBottom": 54
    },
    "p": {
        "marginBottom": 19
    },
    "img": {
        "maxWidth": "100%"
    },
    "address": {
        "fontStyle": "normal"
    },
    "ul": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "listStyle": "none"
    },
    "ullist li": {
        "paddingLeft": 35,
        "background": "url(../images/marker.png) 0 3px no-repeat",
        "color": "#263555",
        "fontSize": 16,
        "lineHeight": 22.8
    },
    "ullist li+li": {
        "marginTop": 17.2
    },
    "ullist1 li+li": {
        "marginTop": 35
    },
    "ullist1 li+li+li": {
        "marginTop": 34
    },
    "ullist1 count": {
        "textAlign": "center",
        "marginTop": 3,
        "marginRight": 25,
        "float": "left",
        "borderRadius": 500,
        "width": 31,
        "lineHeight": 30,
        "height": 31,
        "color": "#fff",
        "border": "1px solid #4f93b2",
        "backgroundColor": "#38afe5"
    },
    "ullist1 text1": {
        "marginBottom": 9
    },
    "ullist2": {
        "paddingTop": 2,
        "width": "34.5%",
        "float": "left"
    },
    "ullist2 li+li": {
        "marginTop": 21
    },
    "ullist2 li": {
        "background": "url(../images/marker1.png) 0 5px no-repeat",
        "fontSize": 16,
        "lineHeight": 19,
        "color": "#263555",
        "paddingLeft": 23
    },
    "hor_sep": {
        "borderBottom": "1px solid #dedbdb",
        "paddingTop": 54
    },
    "h3head1": {
        "paddingTop": 49,
        "paddingBottom": 1
    },
    "a": {
        "textDecoration": "none",
        "color": "inherit",
        "outline": "none",
        "transition": "0.5s ease",
        "OTransition": "0.5s ease",
        "WebkitTransition": "0.5s ease"
    },
    "a:hover": {
        "color": "#38afe5"
    },
    "boxes abtn": {
        "paddingTop": 4,
        "paddingRight": 16,
        "paddingBottom": 4,
        "paddingLeft": 16,
        "boxShadow": "none"
    },
    "abtn": {
        "color": "#000",
        "display": "inline-block",
        "backgroundColor": "#fbf6f8",
        "borderRadius": 5,
        "boxShadow": "0 1px 1px #dedbdb",
        "fontSize": 15,
        "border": "1px solid #b1aaaa",
        "lineHeight": 15,
        "paddingTop": 5,
        "paddingRight": 16,
        "paddingBottom": 4,
        "paddingLeft": 16
    },
    "abtn:hover": {
        "borderColor": "#476788",
        "color": "#fff",
        "backgroundColor": "#38AFE5"
    },
    "alink-1": {
        "color": "#fa7e7e"
    },
    "alink-1:hover": {
        "color": "#38AFE5"
    },
    "mb0": {
        "marginBottom": "0px !important"
    },
    "m0": {
        "marginTop": 0,
        "marginRight": "!important",
        "marginBottom": 0,
        "marginLeft": "!important"
    },
    "ind1": {
        "marginTop": 11
    },
    "pad0": {
        "paddingTop": 0,
        "paddingRight": "!important",
        "paddingBottom": 0,
        "paddingLeft": "!important"
    },
    "pt0": {
        "paddingTop": 0
    },
    "img_inner": {
        "maxWidth": "100%",
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "OBoxSizing": "border-box",
        "boxSizing": "border-box",
        "marginBottom": 25,
        "marginTop": 3,
        "position": "relative"
    },
    "fleft": {
        "float": "left",
        "marginRight": 25,
        "marginBottom": 0
    },
    "fright": {
        "float": "right !important"
    },
    "upp": {
        "textTransform": "uppercase"
    },
    "alright": {
        "textAlign": "right"
    },
    "center": {
        "textAlign": "center"
    },
    "wrapper": {
        "overflow": "hidden",
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3
    },
    "extra_wrapper": {
        "overflow": "hidden",
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3
    },
    "clear": {
        "float": "none !important",
        "clear": "both"
    },
    "header": {
        "display": "block",
        "position": "relative",
        "zIndex": 999,
        "paddingBottom": 25
    },
    "header a:hover": {
        "color": "#38afe5"
    },
    "header h1": {
        "position": "absolute",
        "float": "none",
        "width": 167,
        "top": 31,
        "left": "50%",
        "marginLeft": -84,
        "height": 168,
        "zIndex": 999
    },
    "header h1 a": {
        "display": "block",
        "overflow": "hidden",
        "textIndent": -999,
        "transition": "0s ease",
        "OTransition": "0s ease",
        "WebkitTransition": "0s ease"
    },
    "header h1 a img": {
        "display": "block"
    },
    "main": {
        "background": "#fff",
        "width": 1270,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "boxes": {
        "marginBottom": 70
    },
    "boxes>div": {
        "position": "relative"
    },
    "boxes figure figcaption": {
        "backgroundColor": "#193149",
        "position": "absolute",
        "top": 0,
        "fontSize": 13,
        "lineHeight": 19,
        "color": "#cbc6c6",
        "textAlign": "left",
        "left": 0,
        "height": "100%",
        "width": 183,
        "paddingTop": 0,
        "paddingRight": 11,
        "paddingBottom": 0,
        "paddingLeft": 11,
        "opacity": 0,
        "WebkitBackfaceVisibility": "hidden",
        "MozBackfaceVisibility": "hidden",
        "OBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "WebkitTransformOrigin": "0 0",
        "MozTransformOrigin": "0 0",
        "OTransformOrigin": "0 0",
        "transformOrigin": "0 0",
        "WebkitTransform": "rotateY(-90deg)",
        "MozTransform": "rotateY(-90deg)",
        "OTransform": "rotateY(-90deg)",
        "transform": "rotateY(-90deg)",
        "WebkitTransition": "-webkit-transform 0.4s, opacity 0.1s 0.3s",
        "MozTransition": "-moz-transform 0.4s, opacity 0.1s 0.3s",
        "OTransition": "-moz-transform 0.4s, opacity 0.1s 0.3s",
        "transition": "transform 0.4s, opacity 0.1s 0.3s",
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "OBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "figcaption h3": {
        "color": "#ffffff",
        "textAlign": "center",
        "paddingTop": "18px !important",
        "fontSize": 38,
        "marginBottom": "18px !important",
        "fontFamily": "'Open Sans Condensed', sans-serif"
    },
    "figcaption abtn": {
        "display": "block",
        "float": "right",
        "marginTop": 36,
        "marginRight": 4
    },
    "boxes figure div": {
        "overflow": "hidden"
    },
    "boxes figure": {
        "WebkitPerspective": 1700,
        "MozPerspective": 1700,
        "MsPerspective": 1700,
        "OPerspective": 1700,
        "perspective": 1700,
        "WebkitPerspectiveOrigin": "0 50%",
        "MozPerspectiveOrigin": "0 50%",
        "MsPerspectiveOrigin": "0 50%",
        "OPerspectiveOrigin": "0 50%",
        "perspectiveOrigin": "0 50%",
        "backgroundColor": "#193149"
    },
    "boxes figure img": {
        "position": "relative",
        "transition": "0.5s ease",
        "OTransition": "0.5s ease",
        "WebkitTransition": "0.5s ease"
    },
    "boxes figure:hover img": {
        "WebkitTransform": "translateX(25%)",
        "MozTransform": "translateX(25%)",
        "MsTransform": "translateX(25%)",
        "transform": "translateX(25%)"
    },
    "boxes figure:hover figcaption": {
        "opacity": 1,
        "WebkitTransform": "rotateY(0deg)",
        "MozTransform": "rotateY(0deg)",
        "OTransform": "rotateY(0deg)",
        "transform": "rotateY(0deg)",
        "WebkitTransition": "-webkit-transform 0.4s, opacity 0.1s",
        "MozTransition": "-moz-transform 0.4s, opacity 0.1s",
        "OTransition": "-moz-transform 0.4s, opacity 0.1s",
        "transition": "transform 0.4s, opacity 0.1s"
    },
    "agal": {
        "display": "block",
        "marginBottom": 23,
        "background": "url(../images/magnify.png)  center center no-repeat #373737"
    },
    "agal img": {
        "transition": "0.5s ease",
        "OTransition": "0.5s ease",
        "WebkitTransition": "0.5s ease"
    },
    "agal:hover img": {
        "opacity": 0.5
    },
    "gallery img_inner": {
        "marginBottom": 0
    },
    "gallery clear": {
        "height": 46
    },
    "content": {
        "paddingTop": 123,
        "paddingBottom": 128
    },
    "page1 content": {
        "paddingTop": 0,
        "paddingBottom": 70
    },
    "tab_cont": {
        "border": "1px solid #dedbdb",
        "paddingTop": 53,
        "paddingRight": 16,
        "paddingBottom": 52,
        "paddingLeft": 16
    },
    "tab_cont abtn": {
        "display": "block",
        "float": "right",
        "marginTop": 21,
        "marginRight": 15,
        "marginBottom": 2
    },
    "tab_cont abtnbt1": {
        "marginTop": 16
    },
    "tab_cont img": {
        "float": "left",
        "marginRight": 24
    },
    "tab_cont text1": {
        "position": "relative",
        "top": -5,
        "marginBottom": 17
    },
    "style1": {
        "color": "#000",
        "lineHeight": 19
    },
    "style1 a": {
        "color": "#fa7e7e"
    },
    "style1 a:hover": {
        "color": "#000"
    },
    "tabs ul li": {
        "borderRadius": "3px 3px 0 0",
        "float": "left",
        "position": "relative",
        "backgroundColor": "#fcfafa",
        "minWidth": 181,
        "textAlign": "center",
        "borderTop": "1px solid #dedbdb",
        "borderRight": "1px solid #dedbdb"
    },
    "tabs ul liui-state-active": {
        "backgroundColor": "#fff"
    },
    "tabs ul liui-state-active:after": {
        "content": "''",
        "left": 0,
        "right": 0,
        "bottom": -1,
        "position": "absolute",
        "display": "block",
        "height": 1,
        "backgroundColor": "#fff"
    },
    "tabs ul liui-state-active a": {
        "color": "#38afe5"
    },
    "tabs ul li:first-child": {
        "borderLeft": "1px solid #dedbdb"
    },
    "tabs ul li a": {
        "display": "block",
        "paddingTop": 6,
        "paddingRight": 0,
        "paddingBottom": 4,
        "paddingLeft": 0,
        "font": "24px/28px 'Pathway Gothic One', sans-serif",
        "textTransform": "uppercase"
    },
    "text1": {
        "fontSize": 16,
        "lineHeight": 19,
        "color": "#263555"
    },
    "page1 text1": {
        "fontSize": 16.8,
        "lineHeight": 22.8,
        "color": "#263555"
    },
    "ptext1": {
        "marginBottom": 18
    },
    "ptext1tx2": {
        "marginBottom": 20
    },
    "tab_cont text1tx1": {
        "top": -6,
        "marginBottom": 22
    },
    "clearcl1": {
        "height": 20,
        "marginBottom": 2
    },
    "newsletter_title": {
        "border": "1px solid #dedbdb",
        "font": "300 24px/27px 'Open Sans Condensed', sans-serif",
        "color": "#263555",
        "borderRadius": "3px 3px 0 0",
        "paddingTop": 7,
        "paddingRight": 0,
        "paddingBottom": 3,
        "paddingLeft": 0,
        "backgroundColor": "#fcfafa",
        "textTransform": "uppercase",
        "textAlign": "center"
    },
    "newsletter": {
        "position": "relative",
        "overflow": "hidden",
        "paddingBottom": 20,
        "marginBottom": 32
    },
    "newsletter span": {
        "display": "block",
        "paddingTop": 8,
        "marginBottom": 14
    },
    "n_container": {
        "paddingTop": 0,
        "paddingRight": 19,
        "paddingBottom": 19,
        "paddingLeft": 19,
        "border": "1px solid #dedbdb",
        "borderTop": 0
    },
    "newsletter text1": {
        "textAlign": "center",
        "paddingTop": 49,
        "marginBottom": 26
    },
    "none": {
        "display": "none"
    },
    "newsletter input": {
        "float": "left",
        "border": "2px solid #e6e4e4",
        "borderRadius": 6,
        "color": "#868f8f",
        "width": "100%",
        "height": 34,
        "font": "15.6px/22.8px  Arial, Helvetica, sans-serif",
        "paddingTop": 4,
        "paddingRight": 32,
        "paddingBottom": 5,
        "paddingLeft": 32,
        "boxShadow": "none !important",
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "OBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "newsletter a": {
        "display": "block",
        "position": "absolute",
        "background": "url(../images/envel.png) 6px 9px no-repeat",
        "width": 34,
        "height": 34,
        "top": 99,
        "right": 0
    },
    "newsletter a:hover": {
        "opacity": 0.5
    },
    "newsletter error": {
        "height": 0,
        "bottom": -35,
        "width": "100%",
        "left": 0,
        "fontSize": 10,
        "lineHeight": 13,
        "display": "block",
        "overflow": "hidden",
        "zIndex": 999,
        "color": "#ff0000",
        "WebkitTransition": "0.3s ease-out",
        "OTransition": "all 0.3s ease-out",
        "transition": "all 0.3s ease-out",
        "position": "absolute"
    },
    "form1 empty": {
        "height": 0,
        "bottom": -35,
        "width": "100%",
        "left": 0,
        "fontSize": 10,
        "lineHeight": 13,
        "display": "block",
        "overflow": "hidden",
        "zIndex": 999,
        "color": "#ff0000",
        "WebkitTransition": "0.3s ease-out",
        "OTransition": "all 0.3s ease-out",
        "transition": "all 0.3s ease-out",
        "position": "absolute"
    },
    "newsletter labelinvalid error": {
        "height": 40
    },
    "newsletter success": {
        "width": "100%",
        "zIndex": 999,
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "OBoxSizing": "border-box",
        "boxSizing": "border-box",
        "display": "none",
        "top": 98,
        "textAlign": "center",
        "background": "#fff",
        "border": "2px solid #e6e4e4",
        "borderRadius": 6,
        "color": "#868f8f",
        "left": 0,
        "fontSize": 15.6,
        "overflow": "hidden",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "WebkitTransition": "0.3s ease-out",
        "OTransition": "all 0.3s ease-out",
        "transition": "all 0.3s ease-out",
        "position": "absolute"
    },
    "bottom_block": {
        "backgroundColor": "#30455b",
        "color": "#ffffff",
        "fontSize": 12,
        "paddingBottom": 34
    },
    "bottom_block ul li": {
        "font": "18px/18px 'Open Sans Condensed', sans-serif",
        "textTransform": "uppercase"
    },
    "bottom_block ul li+li": {
        "marginTop": 10
    },
    "bottom_block ul": {
        "paddingTop": 42
    },
    "blockquote": {
        "marginTop": -37
    },
    "blockquote p": {
        "backgroundColor": "#fcfafa",
        "paddingTop": 24,
        "paddingRight": 22,
        "paddingBottom": 26,
        "paddingLeft": 22,
        "marginBottom": "0 !important",
        "border": "1px solid #dedbdb"
    },
    "bq_bot": {
        "marginTop": -1,
        "paddingTop": 65,
        "position": "relative",
        "paddingLeft": 34,
        "background": "url(../images/bq_bot_bg.png) 113px 0 no-repeat"
    },
    "bq_bot text1": {
        "marginBottom": 20,
        "paddingLeft": 14
    },
    "tour text1": {
        "marginBottom": 13
    },
    "tour": {
        "overflow": "hidden"
    },
    "price span": {
        "paddingTop": 4,
        "display": "block",
        "textTransform": "uppercase",
        "color": "#38afe5",
        "fontSize": 16
    },
    "price": {
        "marginBottom": 14
    },
    "price +price": {
        "marginBottom": 40
    },
    "tours clear": {
        "height": 47
    },
    "form1": {
        "marginRight": 2
    },
    "jqTransformHidden": {
        "display": "none"
    },
    "jqTransformSelectWrapper": {
        "position": "relative",
        "height": 25,
        "width": "100% !important",
        "float": "left",
        "border": "1px solid #dedbdb"
    },
    "jqTransformSelectWrapper div span": {
        "fontSize": 13,
        "float": "none",
        "position": "absolute",
        "whiteSpace": "nowrap",
        "height": 25,
        "lineHeight": 16,
        "overflow": "hidden",
        "cursor": "pointer",
        "border": 3,
        "paddingTop": 4,
        "paddingRight": 9,
        "paddingBottom": 3,
        "paddingLeft": 9,
        "background": "#fcfafa",
        "width": "100% !important",
        "color": "#868f8f !important",
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "OBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "jqTransformSelectWrapper  a:after": {
        "display": "none"
    },
    "jqTransformSelectWrapper  ajqTransformSelectOpen": {
        "display": "block",
        "position": "absolute",
        "right": -1,
        "top": -1,
        "width": "28px !important",
        "height": "25px !important",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": "1px solid #e0dddd",
        "background": "url(../images/select.png) no-repeat center center"
    },
    "jqTransformSelectWrapper:hover  ajqTransformSelectOpen": {
        "backgroundColor": "#38AFE5",
        "borderColor": "#38AFE5"
    },
    "jqTransformSelectWrapper ul": {
        "position": "absolute",
        "top": 28,
        "left": -1,
        "height": "auto !important",
        "listStyle": "none",
        "backgroundColor": "#e3e2e2",
        "display": "none",
        "border": "1px solid #d1cccc",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "100% !important",
        "paddingTop": 3,
        "paddingRight": 0,
        "paddingBottom": 7,
        "paddingLeft": 0,
        "overflow": "auto",
        "overflowY": "auto",
        "zIndex": 10,
        "color": "#fff"
    },
    "jqTransformSelectWrapper ul a": {
        "display": "block",
        "paddingTop": 0,
        "paddingRight": 9,
        "paddingBottom": 0,
        "paddingLeft": 9,
        "lineHeight": 19
    },
    "form2 jqTransformSelectWrapper": {
        "marginBottom": 27
    },
    "form2 abtn": {
        "marginTop": "47px !important"
    },
    "form2  span": {
        "marginBottom": 8
    },
    "form1 spancol1": {
        "display": "inline-block",
        "marginBottom": "2px !important"
    },
    "form1 span": {
        "marginBottom": 9,
        "display": "block"
    },
    "form1 abtn": {
        "marginTop": 74,
        "marginBottom": 13
    },
    "blog": {
        "overflow": "hidden"
    },
    "blog links": {
        "overflow": "hidden",
        "marginBottom": 15,
        "paddingTop": 1
    },
    "blog abtn": {
        "marginTop": 23
    },
    "acomment": {
        "marginTop": 2,
        "display": "inline-block",
        "float": "right",
        "marginRight": 85
    },
    "blog+blog": {
        "borderTop": "1px solid #dedbdb",
        "marginTop": 60,
        "paddingTop": 58
    },
    "blog time": {
        "textAlign": "center",
        "display": "block",
        "backgroundColor": "#38afe5",
        "borderRadius": 500,
        "color": "#fff",
        "width": 39,
        "height": 30,
        "paddingTop": 9,
        "fontSize": 11,
        "lineHeight": 11,
        "float": "left",
        "marginRight": 13,
        "marginTop": 3
    },
    "ullist2l1": {
        "width": "auto",
        "float": "none",
        "paddingTop": 0,
        "marginBottom": 43
    },
    "map": {
        "paddingTop": 0,
        "marginTop": -2
    },
    "map figure": {
        "width": 550,
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "OBoxSizing": "border-box",
        "boxSizing": "border-box",
        "display": "block",
        "marginRight": 26,
        "paddingTop": 2
    },
    "map figure iframe": {
        "width": 550,
        "height": 414,
        "maxWidth": "100%"
    },
    "map address": {
        "overflow": "hidden"
    },
    "map address+address": {
        "marginTop": 43
    },
    "map address+address dt": {
        "marginBottom": 5
    },
    "map text2": {
        "marginBottom": 21,
        "font": "bold 24px/24px 'Marvel', sans-serif",
        "color": "#000",
        "paddingTop": 1
    },
    "address dt": {
        "marginBottom": 19
    },
    "address dd span": {
        "minWidth": 95,
        "display": "inline-block",
        "textAlign": "left"
    },
    "footer": {
        "display": "block",
        "paddingTop": 25,
        "paddingRight": 0,
        "paddingBottom": 25,
        "paddingLeft": 0,
        "color": "#6b6868"
    },
    "socials": {
        "textAlign": "center",
        "marginBottom": 21
    },
    "socials a": {
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 5,
        "display": "inline-block",
        "width": 46,
        "height": 46,
        "background": "url(../images/socials.png) 0 0 no-repeat"
    },
    "socials a+a": {
        "backgroundPosition": "-60px 0"
    },
    "socials a+a+a": {
        "backgroundPosition": "-122px 0"
    },
    "socials a+a+a+a": {
        "backgroundPosition": "right 0"
    },
    "socials a:hover": {
        "opacity": 0.5
    },
    "copy": {
        "textAlign": "center",
        "color": "#fff",
        "fontSize": 12
    },
    "f_bot": {
        "paddingTop": 26,
        "paddingBottom": 40,
        "color": "#797979"
    },
    "toTop": {
        "display": "none",
        "textDecoration": "none",
        "position": "fixed",
        "bottom": 30,
        "marginRight": "-620px !important",
        "overflow": "hidden",
        "width": 36,
        "height": 37,
        "border": "none",
        "textIndent": -999,
        "zIndex": 999,
        "background": "url(../images/totop.png) no-repeat left top",
        "transition": "0s ease",
        "WebkitTransition": "0s ease",
        "OTransition": "0s ease"
    },
    "toTop:hover": {
        "backgroundPosition": "right 0"
    }
});