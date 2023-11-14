(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"gap":10,"definitions": [{"overlays":["this.overlay_C321E031_CCBF_6AC8_41E5_8F81D63FED2C","this.overlay_DCA21EF5_CCBF_F748_41E2_487958A79B44"],"vfov":180,"class":"Panorama","pitch":0,"id":"panorama_C616BC33_CC9B_5AC8_41CF_7475C396002B","hfovMin":"150%","label":trans('panorama_C616BC33_CC9B_5AC8_41CF_7475C396002B.label'),"adjacentPanoramas":[{"distance":3.57,"yaw":-85.84,"select":"this.overlay_C321E031_CCBF_6AC8_41E5_8F81D63FED2C.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C321E031_CCBF_6AC8_41E5_8F81D63FED2C"},"class":"AdjacentPanorama","panorama":"this.panorama_C022184C_CC9B_5B58_41E7_A2A1CF7033CB","backwardYaw":-87.07},{"distance":12.55,"yaw":6.28,"select":"this.overlay_DCA21EF5_CCBF_F748_41E2_487958A79B44.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_DCA21EF5_CCBF_F748_41E2_487958A79B44"},"class":"AdjacentPanorama","panorama":"this.panorama_C61490AA_CC9B_6BDB_41B8_5B5115222012","backwardYaw":-126.86}],"partial":false,"hfov":360,"data":{"label":"corridor2"},"hfovMax":130,"thumbnailUrl":"media/panorama_C616BC33_CC9B_5AC8_41CF_7475C396002B_t.jpg","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C616BC33_CC9B_5AC8_41CF_7475C396002B_t.jpg","cube":{"class":"ImageResource","levels":[{"height":1536,"width":9216,"rowCount":3,"url":"media/panorama_C616BC33_CC9B_5AC8_41CF_7475C396002B_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":18},{"height":1024,"width":6144,"rowCount":2,"url":"media/panorama_C616BC33_CC9B_5AC8_41CF_7475C396002B_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":12},{"height":512,"width":3072,"rowCount":1,"url":"media/panorama_C616BC33_CC9B_5AC8_41CF_7475C396002B_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6}]}}]},{"overlays":["this.overlay_DCF961DC_CCB9_2D7F_41E3_B2922A680684"],"vfov":180,"class":"Panorama","pitch":0,"id":"panorama_C61490AA_CC9B_6BDB_41B8_5B5115222012","hfovMin":"150%","label":trans('panorama_C61490AA_CC9B_6BDB_41B8_5B5115222012.label'),"adjacentPanoramas":[{"distance":6.21,"yaw":-126.86,"select":"this.overlay_DCF961DC_CCB9_2D7F_41E3_B2922A680684.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_DCF961DC_CCB9_2D7F_41E3_B2922A680684"},"class":"AdjacentPanorama","panorama":"this.panorama_C616BC33_CC9B_5AC8_41CF_7475C396002B","backwardYaw":6.28}],"partial":false,"hfov":360,"data":{"label":"master bed"},"hfovMax":130,"thumbnailUrl":"media/panorama_C61490AA_CC9B_6BDB_41B8_5B5115222012_t.jpg","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C61490AA_CC9B_6BDB_41B8_5B5115222012_t.jpg","cube":{"class":"ImageResource","levels":[{"height":1536,"width":9216,"rowCount":3,"url":"media/panorama_C61490AA_CC9B_6BDB_41B8_5B5115222012_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":18},{"height":1024,"width":6144,"rowCount":2,"url":"media/panorama_C61490AA_CC9B_6BDB_41B8_5B5115222012_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":12},{"height":512,"width":3072,"rowCount":1,"url":"media/panorama_C61490AA_CC9B_6BDB_41B8_5B5115222012_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6}]}}]},{"overlays":["this.overlay_C6F9EC9A_CBB9_0DE2_41CD_0775150327A4"],"vfov":180,"class":"Panorama","pitch":0,"id":"panorama_C244F1B2_CBAB_1723_41E2_CD887E8A1E48","hfovMin":"150%","label":trans('panorama_C244F1B2_CBAB_1723_41E2_CD887E8A1E48.label'),"adjacentPanoramas":[{"distance":5.1,"yaw":-155.01,"select":"this.overlay_C6F9EC9A_CBB9_0DE2_41CD_0775150327A4.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C6F9EC9A_CBB9_0DE2_41CD_0775150327A4"},"class":"AdjacentPanorama","panorama":"this.panorama_C002821B_CBAB_14E1_41C0_C93A00DE5A9C","backwardYaw":-60.21}],"partial":false,"hfov":360,"data":{"label":"o1"},"hfovMax":130,"thumbnailUrl":"media/panorama_C244F1B2_CBAB_1723_41E2_CD887E8A1E48_t.jpg","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C244F1B2_CBAB_1723_41E2_CD887E8A1E48_t.jpg","cube":{"class":"ImageResource","levels":[{"height":1536,"width":9216,"rowCount":3,"url":"media/panorama_C244F1B2_CBAB_1723_41E2_CD887E8A1E48_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":18},{"height":1024,"width":6144,"rowCount":2,"url":"media/panorama_C244F1B2_CBAB_1723_41E2_CD887E8A1E48_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":12},{"height":512,"width":3072,"rowCount":1,"url":"media/panorama_C244F1B2_CBAB_1723_41E2_CD887E8A1E48_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6}]}}]},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_C2500885_CBAB_35E1_41E0_18CD1D96BA0F","class":"PanoramaCamera","automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_C244F2A3_CBAB_F522_41C6_309C267EE1D1_camera"},{"overlays":["this.overlay_C10A4627_CCB9_36C8_419B_91BB1F25DA0C","this.overlay_C3C170C2_CCB9_6B48_41E4_7E4A4CE5368A","this.overlay_C3C73462_CCBE_EB48_41E7_5CB1306A06EF"],"vfov":180,"class":"Panorama","pitch":0,"id":"panorama_C022184C_CC9B_5B58_41E7_A2A1CF7033CB","hfovMin":"150%","label":trans('panorama_C022184C_CC9B_5B58_41E7_A2A1CF7033CB.label'),"adjacentPanoramas":[{"distance":5.06,"yaw":0.69,"select":"this.overlay_C10A4627_CCB9_36C8_419B_91BB1F25DA0C.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C10A4627_CCB9_36C8_419B_91BB1F25DA0C"},"class":"AdjacentPanorama","panorama":"this.panorama_C002821B_CBAB_14E1_41C0_C93A00DE5A9C","backwardYaw":-178.32},{"distance":3.41,"yaw":-161.29,"select":"this.overlay_C3C170C2_CCB9_6B48_41E4_7E4A4CE5368A.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C3C170C2_CCB9_6B48_41E4_7E4A4CE5368A"},"class":"AdjacentPanorama","panorama":"this.panorama_C244F2A3_CBAB_F522_41C6_309C267EE1D1"},{"distance":3.7,"yaw":-87.07,"select":"this.overlay_C3C73462_CCBE_EB48_41E7_5CB1306A06EF.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C3C73462_CCBE_EB48_41E7_5CB1306A06EF"},"class":"AdjacentPanorama","panorama":"this.panorama_C616BC33_CC9B_5AC8_41CF_7475C396002B","backwardYaw":-85.84}],"partial":false,"hfov":360,"data":{"label":"corridor 01"},"hfovMax":130,"thumbnailUrl":"media/panorama_C022184C_CC9B_5B58_41E7_A2A1CF7033CB_t.jpg","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C022184C_CC9B_5B58_41E7_A2A1CF7033CB_t.jpg","cube":{"class":"ImageResource","levels":[{"height":1536,"width":9216,"rowCount":3,"url":"media/panorama_C022184C_CC9B_5B58_41E7_A2A1CF7033CB_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":18},{"height":1024,"width":6144,"rowCount":2,"url":"media/panorama_C022184C_CC9B_5B58_41E7_A2A1CF7033CB_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":12},{"height":512,"width":3072,"rowCount":1,"url":"media/panorama_C022184C_CC9B_5B58_41E7_A2A1CF7033CB_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6}]}}]},{"class":"PlayList","items":[{"camera":"this.panorama_C244F1B2_CBAB_1723_41E2_CD887E8A1E48_camera","media":"this.panorama_C244F1B2_CBAB_1723_41E2_CD887E8A1E48","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_C002821B_CBAB_14E1_41C0_C93A00DE5A9C_camera","media":"this.panorama_C002821B_CBAB_14E1_41C0_C93A00DE5A9C","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_C244F2A3_CBAB_F522_41C6_309C267EE1D1_camera","media":"this.panorama_C244F2A3_CBAB_F522_41C6_309C267EE1D1","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_C022184C_CC9B_5B58_41E7_A2A1CF7033CB_camera","media":"this.panorama_C022184C_CC9B_5B58_41E7_A2A1CF7033CB","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_C616BC33_CC9B_5AC8_41CF_7475C396002B_camera","media":"this.panorama_C616BC33_CC9B_5AC8_41CF_7475C396002B","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 5)","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_C61490AA_CC9B_6BDB_41B8_5B5115222012_camera","media":"this.panorama_C61490AA_CC9B_6BDB_41B8_5B5115222012","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 5, 0)","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_C638751F_CC9B_6AF8_41E3_DA263FF32199","class":"PanoramaCamera","automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_C022184C_CC9B_5B58_41E7_A2A1CF7033CB_camera"},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_C2507886_CBAB_35E2_41E5_8D2CDCCB690E","class":"PanoramaCamera","automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_C244F1B2_CBAB_1723_41E2_CD887E8A1E48_camera"},{"viewerArea":"this.MainViewer","aaEnabled":true,"surfaceSelectionEnabled":false,"mouseControlMode":"drag_rotation","displayPlaybackBar":true,"touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","zoomEnabled":true,"arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer"},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_C63C3520_CC9B_6AC8_41AB_1CCA88E53AAC","class":"PanoramaCamera","automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_C61490AA_CC9B_6BDB_41B8_5B5115222012_camera"},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_C63CD520_CC9B_6AC8_41B3_C64BB9005337","class":"PanoramaCamera","automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_C616BC33_CC9B_5AC8_41CF_7475C396002B_camera"},{"overlays":["this.overlay_C5DEC7B4_CBBF_1B26_41E3_9E1D87231BE8","this.overlay_C5CAB113_CBBF_F4E2_41D7_7CE3176EC416","this.overlay_C4DB360C_CBB7_3CE7_41A0_A64A560B780A"],"vfov":180,"class":"Panorama","pitch":0,"id":"panorama_C002821B_CBAB_14E1_41C0_C93A00DE5A9C","hfovMin":"150%","label":trans('panorama_C002821B_CBAB_14E1_41C0_C93A00DE5A9C.label'),"adjacentPanoramas":[{"distance":5.19,"yaw":-178.32,"select":"this.overlay_C4DB360C_CBB7_3CE7_41A0_A64A560B780A.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C4DB360C_CBB7_3CE7_41A0_A64A560B780A"},"class":"AdjacentPanorama","panorama":"this.panorama_C022184C_CC9B_5B58_41E7_A2A1CF7033CB","backwardYaw":0.69},{"distance":4.89,"yaw":-60.21,"select":"this.overlay_C5DEC7B4_CBBF_1B26_41E3_9E1D87231BE8.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C5DEC7B4_CBBF_1B26_41E3_9E1D87231BE8"},"class":"AdjacentPanorama","panorama":"this.panorama_C244F1B2_CBAB_1723_41E2_CD887E8A1E48","backwardYaw":-155.01},{"distance":25.65,"yaw":-176.55,"select":"this.overlay_C5CAB113_CBBF_F4E2_41D7_7CE3176EC416.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C5CAB113_CBBF_F4E2_41D7_7CE3176EC416"},"class":"AdjacentPanorama","panorama":"this.panorama_C244F2A3_CBAB_F522_41C6_309C267EE1D1"}],"partial":false,"hfov":360,"data":{"label":"02"},"hfovMax":130,"thumbnailUrl":"media/panorama_C002821B_CBAB_14E1_41C0_C93A00DE5A9C_t.jpg","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C002821B_CBAB_14E1_41C0_C93A00DE5A9C_t.jpg","cube":{"class":"ImageResource","levels":[{"height":1536,"width":9216,"rowCount":3,"url":"media/panorama_C002821B_CBAB_14E1_41C0_C93A00DE5A9C_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":18},{"height":1024,"width":6144,"rowCount":2,"url":"media/panorama_C002821B_CBAB_14E1_41C0_C93A00DE5A9C_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":12},{"height":512,"width":3072,"rowCount":1,"url":"media/panorama_C002821B_CBAB_14E1_41C0_C93A00DE5A9C_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6}]}}]},{"toolTipTextShadowBlurRadius":3,"playbackBarHeadShadowHorizontalLength":0,"playbackBarBorderRadius":0,"subtitlesFontWeight":"normal","subtitlesBackgroundColor":"#000000","playbackBarBackgroundColorDirection":"vertical","width":"100%","playbackBarProgressBorderColor":"#000000","vrPointerColor":"#FFFFFF","id":"MainViewer","subtitlesFontColor":"#FFFFFF","toolTipBorderRadius":3,"shadow":false,"playbackBarHeadShadowBlurRadius":3,"toolTipShadowOpacity":1,"toolTipFontFamily":"Arial","playbackBarLeft":0,"subtitlesOpacity":1,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBackgroundColorRatios":[0],"subtitlesTextShadowVerticalLength":1,"toolTipTextShadowColor":"#000000","toolTipFontSize":"1.11vmin","paddingLeft":0,"progressOpacity":1,"subtitlesTextShadowOpacity":1,"subtitlesBorderColor":"#FFFFFF","toolTipShadowBlurRadius":3,"paddingRight":0,"playbackBarOpacity":1,"transitionMode":"blending","playbackBarHeadShadowOpacity":0.7,"playbackBarProgressOpacity":1,"progressBarBorderColor":"#000000","progressRight":0,"progressBarBackgroundColorRatios":[0],"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderSize":0,"progressBackgroundColorDirection":"vertical","playbackBarBottom":5,"progressBarBackgroundColorDirection":"vertical","subtitlesTop":0,"playbackBarRight":0,"subtitlesTextShadowColor":"#000000","subtitlesTextDecoration":"none","subtitlesHorizontalAlign":"center","borderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"displayTooltipInSurfaceSelection":true,"displayTooltipInTouchScreens":true,"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"translationTransitionDuration":1000,"playbackBarBorderSize":0,"subtitlesShadow":false,"subtitlesBackgroundOpacity":0.2,"borderSize":0,"progressBackgroundColor":["#FFFFFF"],"progressBackgroundOpacity":1,"subtitlesFontSize":"3vmin","progressBarOpacity":1,"subtitlesPaddingBottom":5,"subtitlesBorderSize":0,"progressBottom":0,"doubleClickAction":"toggle_fullscreen","subtitlesPaddingLeft":5,"playbackBarBackgroundOpacity":1,"playbackBarHeadShadow":true,"toolTipFontStyle":"normal","height":"100%","toolTipShadowSpread":0,"toolTipBackgroundColor":"#F6F6F6","minWidth":100,"subtitlesVerticalAlign":"bottom","minHeight":50,"paddingTop":0,"class":"ViewerArea","toolTipPaddingRight":6,"playbackBarHeadOpacity":1,"progressBarBorderRadius":0,"paddingBottom":0,"subtitlesTextShadowHorizontalLength":1,"toolTipTextShadowOpacity":0,"progressBarBorderSize":0,"transitionDuration":500,"toolTipBorderColor":"#767676","toolTipHorizontalAlign":"center","firstTransitionDuration":0,"playbackBarProgressBorderRadius":0,"propagateClick":false,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"playbackBarHeadHeight":15,"surfaceReticleColor":"#FFFFFF","subtitlesPaddingTop":5,"toolTipFontColor":"#606060","toolTipPaddingBottom":4,"progressBorderRadius":0,"surfaceReticleOpacity":0.6,"toolTipFontWeight":"normal","subtitlesFontFamily":"Arial","subtitlesTextShadowBlurRadius":0,"toolTipShadowHorizontalLength":0,"playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeadBorderColor":"#000000","progressHeight":10,"subtitlesGap":0,"progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","progressLeft":0,"vrPointerSelectionColor":"#FF6600","surfaceReticleSelectionOpacity":1,"playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"vrPointerSelectionTime":2000,"toolTipShadowVerticalLength":0,"playbackBarHeadWidth":6,"playbackBarHeadShadowVerticalLength":0,"toolTipShadowColor":"#333333","toolTipBorderSize":1,"toolTipDisplayTime":600,"playbackBarProgressBorderSize":0,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipPaddingLeft":6,"toolTipPaddingTop":4,"toolTipOpacity":1,"subtitlesEnabled":true,"subtitlesPaddingRight":5,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesBottom":50,"data":{"name":"Main Viewer"},"playbackBarBorderColor":"#FFFFFF"},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_C255E883_CBAB_35E1_41C7_A9C338A492BA","class":"PanoramaCamera","automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_C002821B_CBAB_14E1_41C0_C93A00DE5A9C_camera"},{"hfovMin":"150%","label":trans('panorama_C244F2A3_CBAB_F522_41C6_309C267EE1D1.label'),"data":{"label":"bed room"},"hfov":360,"vfov":180,"class":"Panorama","hfovMax":130,"thumbnailUrl":"media/panorama_C244F2A3_CBAB_F522_41C6_309C267EE1D1_t.jpg","partial":false,"pitch":0,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C244F2A3_CBAB_F522_41C6_309C267EE1D1_t.jpg","cube":{"class":"ImageResource","levels":[{"height":1536,"width":9216,"rowCount":3,"url":"media/panorama_C244F2A3_CBAB_F522_41C6_309C267EE1D1_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":18},{"height":1024,"width":6144,"rowCount":2,"url":"media/panorama_C244F2A3_CBAB_F522_41C6_309C267EE1D1_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","colCount":12},{"height":512,"width":3072,"rowCount":1,"url":"media/panorama_C244F2A3_CBAB_F522_41C6_309C267EE1D1_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6}]}}],"id":"panorama_C244F2A3_CBAB_F522_41C6_309C267EE1D1"},{"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_C3338042_CCBF_6B48_41E0_5538995A629B"],"data":{"hasPanoramaAction":true,"label":"Circle 03b"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":100,"yaw":-85.84,"horizontalAlign":"center","hfov":7.09,"vfov":3.48,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","image":"this.AnimatedImageResource_DF9600B5_CCAB_6BC8_41CB_BE2A5F2E1BD0","data":{"label":"Circle 03b"},"pitch":-25.43,"scaleMode":"fit_inside"}],"maps":[],"id":"overlay_C321E031_CCBF_6AC8_41E5_8F81D63FED2C"},{"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_C3829F65_CCBF_F548_41E9_69F88C10278E"],"data":{"hasPanoramaAction":true,"label":"Image"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"yaw":6.28,"horizontalAlign":"center","hfov":5.21,"vfov":4.25,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","image":"this.res_DDC2F94D_CCB9_7D58_41E7_5C98572CCFB3","pitch":-7.71,"data":{"label":"Image"},"scaleMode":"fit_inside"}],"maps":[],"id":"overlay_DCA21EF5_CCBF_F748_41E2_487958A79B44"},{"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_C3BEF247_CCB9_2F48_41E4_0AC21E8C7D1B"],"data":{"hasPanoramaAction":true,"label":"Image"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"yaw":-126.86,"horizontalAlign":"center","hfov":4.8,"vfov":4.03,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","image":"this.res_DDC2F94D_CCB9_7D58_41E7_5C98572CCFB3","pitch":-15.31,"data":{"label":"Image"},"scaleMode":"fit_inside"}],"maps":[],"id":"overlay_DCF961DC_CCB9_2D7F_41E3_B2922A680684"},{"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_C6144CEF_CBB9_0D21_41C2_0E6B46E21889"],"data":{"hasPanoramaAction":true,"label":"Circle 03c"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":100,"yaw":-155.01,"horizontalAlign":"center","hfov":6.62,"vfov":2.19,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","image":"this.AnimatedImageResource_DF97D0B4_CCAB_6BC8_41BE_1803DF19A4CC","data":{"label":"Circle 03c"},"pitch":-18.44,"scaleMode":"fit_inside"}],"maps":[],"id":"overlay_C6F9EC9A_CBB9_0DE2_41CD_0775150327A4"},{"restartMovementOnUserInteraction":false,"movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"easing":"linear","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_C2500885_CBAB_35E1_41E0_18CD1D96BA0F"},{"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_C172B63B_CCB9_3739_41E3_0126F0B1739A"],"data":{"hasPanoramaAction":true,"label":"Circle 03b"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":100,"yaw":0.69,"horizontalAlign":"center","hfov":7.51,"vfov":2.03,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","image":"this.AnimatedImageResource_DF96F0B4_CCAB_6BC8_41CA_B30F925AE15E","data":{"label":"Circle 03b"},"pitch":-18.55,"scaleMode":"fit_inside"}],"maps":[],"id":"overlay_C10A4627_CCB9_36C8_419B_91BB1F25DA0C"},{"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_C2C91128_CCB9_6AD8_41B9_20830DDC4ADC"],"data":{"hasPanoramaAction":true,"label":"Image"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"yaw":-161.29,"horizontalAlign":"center","hfov":10.5,"vfov":10.5,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","image":"this.res_DDC2F94D_CCB9_7D58_41E7_5C98572CCFB3","pitch":-26.52,"data":{"label":"Image"},"scaleMode":"fit_inside"}],"maps":[],"id":"overlay_C3C170C2_CCB9_6B48_41E4_7E4A4CE5368A"},{"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_C32B2492_CCBE_EBC8_41E6_C330DFB171ED"],"data":{"hasPanoramaAction":true,"label":"Circle 03b"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":100,"yaw":-87.07,"horizontalAlign":"center","hfov":8.38,"vfov":3.31,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","image":"this.AnimatedImageResource_DF9630B5_CCAB_6BC8_41E3_9AD8E44517BC","data":{"label":"Circle 03b"},"pitch":-24.64,"scaleMode":"fit_inside"}],"maps":[],"id":"overlay_C3C73462_CCBE_EB48_41E7_5CB1306A06EF"},{"restartMovementOnUserInteraction":false,"movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"easing":"linear","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_C638751F_CC9B_6AF8_41E3_DA263FF32199"},{"restartMovementOnUserInteraction":false,"movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"easing":"linear","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_C2507886_CBAB_35E2_41E5_8D2CDCCB690E"},{"restartMovementOnUserInteraction":false,"movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"easing":"linear","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_C63C3520_CC9B_6AC8_41AB_1CCA88E53AAC"},{"restartMovementOnUserInteraction":false,"movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"easing":"linear","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_C63CD520_CC9B_6AC8_41B3_C64BB9005337"},{"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_C5CD97B8_CBBF_1B2E_41E3_9486717A825E"],"data":{"hasPanoramaAction":true,"label":"Circle 03b"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":100,"yaw":-60.21,"horizontalAlign":"center","hfov":5.81,"vfov":2.21,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","image":"this.AnimatedImageResource_DF9710B4_CCAB_6BC8_41B4_7402575C0B8B","data":{"label":"Circle 03b"},"pitch":-19.16,"scaleMode":"fit_inside"}],"maps":[],"id":"overlay_C5DEC7B4_CBBF_1B26_41E3_9E1D87231BE8"},{"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_C5E3818F_CBBF_F7E2_41C2_0B9BA462B172"],"data":{"hasPanoramaAction":true,"label":"Image"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"yaw":-176.55,"horizontalAlign":"center","hfov":3.61,"vfov":3.96,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","image":"this.res_DDC2F94D_CCB9_7D58_41E7_5C98572CCFB3","pitch":-3.78,"data":{"label":"Image"},"scaleMode":"fit_inside"}],"maps":[],"id":"overlay_C5CAB113_CBBF_F4E2_41D7_7CE3176EC416"},{"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_C41AB632_CBB7_3D22_41CF_1547E2FC6325"],"data":{"hasPanoramaAction":true,"label":"Circle 03b"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":100,"yaw":-178.32,"horizontalAlign":"center","hfov":6.83,"vfov":2.81,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","image":"this.AnimatedImageResource_DF9750B4_CCAB_6BC8_41B8_AC5E2BB256C2","data":{"label":"Circle 03b"},"pitch":-18.14,"scaleMode":"fit_inside"}],"maps":[],"id":"overlay_C4DB360C_CBB7_3CE7_41A0_A64A560B780A"},{"restartMovementOnUserInteraction":false,"movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"easing":"linear","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_C255E883_CBAB_35E1_41C7_A9C338A492BA"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 3)","id":"HotspotPanoramaOverlayArea_C3338042_CCBF_6B48_41E0_5538995A629B"},{"rowCount":6,"id":"AnimatedImageResource_DF9600B5_CCAB_6BC8_41CB_BE2A5F2E1BD0","class":"AnimatedImageResource","frameDuration":41,"levels":[{"class":"ImageResourceLevel","width":508,"height":312,"url":"media/res_DDC2E94D_CCB9_7D58_41E5_D63953E7C7E9_0.png"}],"colCount":4,"frameCount":24},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 5)","id":"HotspotPanoramaOverlayArea_C3829F65_CCBF_F548_41E9_69F88C10278E"},{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","width":151,"height":151,"url":"media/res_DDC2F94D_CCB9_7D58_41E7_5C98572CCFB3_0.png"}],"id":"res_DDC2F94D_CCB9_7D58_41E7_5C98572CCFB3"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 4)","id":"HotspotPanoramaOverlayArea_C3BEF247_CCB9_2F48_41E4_0AC21E8C7D1B"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_C6144CEF_CBB9_0D21_41C2_0E6B46E21889"},{"rowCount":6,"id":"AnimatedImageResource_DF97D0B4_CCAB_6BC8_41BE_1803DF19A4CC","class":"AnimatedImageResource","frameDuration":41,"levels":[{"class":"ImageResourceLevel","width":416,"height":162,"url":"media/res_DDC0494C_CCB9_7D58_41DF_9068862D432F_0.png"}],"colCount":4,"frameCount":24},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_C172B63B_CCB9_3739_41E3_0126F0B1739A"},{"rowCount":6,"id":"AnimatedImageResource_DF96F0B4_CCAB_6BC8_41CA_B30F925AE15E","class":"AnimatedImageResource","frameDuration":41,"levels":[{"class":"ImageResourceLevel","width":508,"height":312,"url":"media/res_DDC2E94D_CCB9_7D58_41E5_D63953E7C7E9_0.png"}],"colCount":4,"frameCount":24},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_C2C91128_CCB9_6AD8_41B9_20830DDC4ADC"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 4)","id":"HotspotPanoramaOverlayArea_C32B2492_CCBE_EBC8_41E6_C330DFB171ED"},{"rowCount":6,"id":"AnimatedImageResource_DF9630B5_CCAB_6BC8_41E3_9AD8E44517BC","class":"AnimatedImageResource","frameDuration":41,"levels":[{"class":"ImageResourceLevel","width":508,"height":312,"url":"media/res_DDC2E94D_CCB9_7D58_41E5_D63953E7C7E9_0.png"}],"colCount":4,"frameCount":24},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_C5CD97B8_CBBF_1B2E_41E3_9486717A825E"},{"rowCount":6,"id":"AnimatedImageResource_DF9710B4_CCAB_6BC8_41B4_7402575C0B8B","class":"AnimatedImageResource","frameDuration":41,"levels":[{"class":"ImageResourceLevel","width":508,"height":312,"url":"media/res_DDC2E94D_CCB9_7D58_41E5_D63953E7C7E9_0.png"}],"colCount":4,"frameCount":24},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_C5E3818F_CBBF_F7E2_41C2_0B9BA462B172"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 3)","id":"HotspotPanoramaOverlayArea_C41AB632_CBB7_3D22_41CF_1547E2FC6325"},{"rowCount":6,"id":"AnimatedImageResource_DF9750B4_CCAB_6BC8_41B8_AC5E2BB256C2","class":"AnimatedImageResource","frameDuration":41,"levels":[{"class":"ImageResourceLevel","width":508,"height":312,"url":"media/res_DDC2E94D_CCB9_7D58_41E5_D63953E7C7E9_0.png"}],"colCount":4,"frameCount":24}],"width":"100%","backgroundColorDirection":"vertical","backgroundColorRatios":[0],"minWidth":20,"minHeight":20,"paddingTop":0,"id":"rootPlayer","class":"Player","shadow":false,"paddingBottom":0,"mouseWheelEnabled":true,"backgroundOpacity":1,"scrollBarMargin":2,"toolTipHorizontalAlign":"center","desktopMipmappingEnabled":false,"propagateClick":false,"horizontalAlign":"left","overflow":"hidden","vrPolyfillScale":0.75,"scripts":{"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"translate":TDV.Tour.Script.translate,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setMapLocation":TDV.Tour.Script.setMapLocation,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizStart":TDV.Tour.Script.quizStart,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"registerKey":TDV.Tour.Script.registerKey,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getKey":TDV.Tour.Script.getKey,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"openLink":TDV.Tour.Script.openLink,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"isPanorama":TDV.Tour.Script.isPanorama,"init":TDV.Tour.Script.init,"clone":TDV.Tour.Script.clone,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"textToSpeech":TDV.Tour.Script.textToSpeech,"historyGoBack":TDV.Tour.Script.historyGoBack,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"resumePlayers":TDV.Tour.Script.resumePlayers,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"quizFinish":TDV.Tour.Script.quizFinish,"getMediaByName":TDV.Tour.Script.getMediaByName,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"unregisterKey":TDV.Tour.Script.unregisterKey,"shareSocial":TDV.Tour.Script.shareSocial,"downloadFile":TDV.Tour.Script.downloadFile,"getMainViewer":TDV.Tour.Script.getMainViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"initQuiz":TDV.Tour.Script.initQuiz,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getOverlays":TDV.Tour.Script.getOverlays,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"playAudioList":TDV.Tour.Script.playAudioList,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"initAnalytics":TDV.Tour.Script.initAnalytics,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setLocale":TDV.Tour.Script.setLocale,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPixels":TDV.Tour.Script.getPixels,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"existsKey":TDV.Tour.Script.existsKey,"showWindow":TDV.Tour.Script.showWindow,"cloneCamera":TDV.Tour.Script.cloneCamera,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getComponentByName":TDV.Tour.Script.getComponentByName,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setValue":TDV.Tour.Script.setValue,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"mixObject":TDV.Tour.Script.mixObject,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizShowScore":TDV.Tour.Script.quizShowScore},"paddingLeft":0,"verticalAlign":"top","backgroundPreloadEnabled":true,"defaultVRPointer":"laser","paddingRight":0,"backgroundColor":["#FFFFFF"],"height":"100%","scrollBarOpacity":0.5,"scrollBarWidth":10,"children":["this.MainViewer"],"downloadEnabled":false,"scrollBarColor":"#000000","mobileMipmappingEnabled":false,"borderRadius":0,"scrollBarVisible":"rollOver","start":"this.init()","layout":"absolute","data":{"name":"Player555","textToSpeechConfig":{"volume":1,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"pitch":1,"rate":1},"defaultLocale":"en","locales":{"en":"locale/en.txt"}},"contentOpaque":false,"mediaActivationMode":"window","borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Tue Nov 14 2023