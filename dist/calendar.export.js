/*! Calendar.js v2.12.6 | (c) Bunoon 2025 | MIT License */
export function calendarJs(I, ua, V) {
    function F(a, c, d) {
        v = xc(a) ? a : new Date();
        c = p(c) ? c : !1;
        d = p(d) ? d : !1;
        a = c;
        if (b.isWidget)
            (mg = dc(v)),
                lb || (Yd(!0), null !== z && (Yi(), Zi(), $i(), aj(), bj(), Oe || (Kh(), (Oe = !0)), cj(), Xd(), Ne())),
                ql();
        else {
            v.setDate(1);
            v.setHours(0, 0, 0, 0);
            mg = ng(v);
            c = new Date(v.getFullYear(), v.getMonth(), 1);
            var e = Pe(0 === c.getDay() ? 7 : c.getDay());
            c = !Zd;
            Qe() && Hb();
            Ga();
            if (!lb && (Yd(), null !== z)) {
                r ||
                    (null === $d &&
                        (($d = h("div", "side-menu-disabled-background")), ($d.onclick = Hb), z.appendChild($d)),
                    rl());
                sl();
                tl();
                null === Ib && ((Ib = h("div", "full-month-view")), (Ib.id = ec()), z.appendChild(Ib));
                ul();
                if (!r) {
                    var f = null !== mb;
                    if (b.views.fullMonth.isPinUpViewEnabled) {
                        f || ((mb = h("div", "pin-up")), Ib.appendChild(mb));
                        f = b.views.fullMonth.pinUpViewImageUrls.length;
                        if (0 < f)
                            for (var k = 0; k < f; k++) new Image().src = b.views.fullMonth.pinUpViewImageUrls[k];
                        Zd || rb();
                    } else f && (Ib.removeChild(mb), (mb = null));
                }
                f = null !== yc;
                b.views.fullMonth.showDayNamesHeaders
                    ? (f && (yc.innerHTML = n.empty),
                      f || ((yc = h("div", "row-cells header-days")), Ib.appendChild(yc)),
                      r && (yc.onclick = C),
                      Lh(yc))
                    : f && (Ib.removeChild(yc), (yc = null));
                dj();
                vl();
                wl();
                xl();
                Oe || (Kh(), (Oe = !0));
                Xd();
                Ne();
            }
            if (1 < e) {
                f = new Date(v);
                f.setMonth(f.getMonth() - 1);
                k = ad(f.getFullYear(), f.getMonth());
                for (var m = 1, A = k - e + 1; A < k; A++) {
                    var sb = A === k - 1;
                    Mh(A + 1, m, f.getMonth(), f.getFullYear(), !0, sb, Re.previousMonthDay);
                    m++;
                }
            }
            f = 0;
            k = ad(v.getFullYear(), v.getMonth());
            for (m = 0; m < k; m++) (f = e + m), Mh(m + 1, f, v.getMonth(), v.getFullYear(), !1, Re.day);
            k = f;
            if (42 > k) {
                f = 1;
                e = new Date(v);
                e.setMonth(e.getMonth() + 1);
                for (k += 1; 43 > k; k++)
                    (m = 1 === f), Mh(f, k, e.getMonth(), e.getFullYear(), !0, m, Re.nextMonthDay), f++;
                f = ad(e.getFullYear(), e.getMonth());
                f = la.round(f / 2);
                Nh = new Date(e.getFullYear(), e.getMonth(), f);
            } else Nh = null;
            Ha();
            a &&
                (Yi(),
                Zi(),
                $i(),
                aj(),
                bj(),
                yl(),
                zl(),
                Al(),
                Bl(),
                cj(),
                r || (Cl(), Dl(), El(), Fl()),
                null !== fc || r || ((fc = h("div", "calendar-notification")), ya.push(fc), E.body.appendChild(fc)));
            d && La(!0, !1);
            null !== z &&
                ((Oh.innerText = Ph(b.views.fullMonth.titleBarDateFormat, v)),
                c &&
                    R(b.viewToOpenOnFirstLoad) &&
                    (b.viewToOpenOnFirstLoad.toLowerCase() === tb.fullDay && b.views.fullDay.enabled
                        ? Ua()
                        : b.viewToOpenOnFirstLoad.toLowerCase() === tb.fullWeek && b.views.fullWeek.enabled
                          ? zc()
                          : b.viewToOpenOnFirstLoad.toLowerCase() === tb.fullYear && b.views.fullYear.enabled
                            ? Ac()
                            : b.viewToOpenOnFirstLoad.toLowerCase() === tb.timeline && b.views.timeline.enabled
                              ? Jb()
                              : b.viewToOpenOnFirstLoad.toLowerCase() === tb.allEvents &&
                                b.views.allEvents.enabled &&
                                Qh()));
        }
    }
    function Xd() {
        pa(b.data) && q.addEvents(b.data, !1, !1, !1);
        if (b.useLocalStorageForEvents && Z.localStorage)
            for (var a = Z.localStorage.length, c = 0; c < a; c++) {
                var d = Z.localStorage.getItem(Z.localStorage.key(c));
                d = Se(d);
                p(d) && q.addEvent(d, !1, !1, !1);
            }
        ej();
    }
    function Ne() {
        lb = !0;
        Zd || (x(b.events.onRender, za), (Zd = !0));
    }
    function Yd(a) {
        a = p(a) ? a : !1;
        if (null === z) {
            if (fj(za)) {
                var b = za;
                za = b.id;
                R(za) || (za = ec());
            } else b = Aa(za);
            null !== b &&
                ("input" !== b.tagName.toLowerCase() || ("text" !== b.type && "date" !== b.type)
                    ? ((z = b),
                      (z.className = a ? "calendar-widget" : "calendar"),
                      (z.innerHTML = n.empty),
                      (z.oncontextmenu = function (a) {
                          a.preventDefault();
                      }),
                      100 <= bd(z, "height")
                          ? (z.className += n.space + "fixed-height")
                          : z.style.removeProperty("height"))
                    : Gl(b));
        }
    }
    function rl() {
        Zd ||
            ((ub = h("div", "side-menu custom-scroll-bars dark-thumb-scroll")),
            (ub.onclick = C),
            z.appendChild(ub),
            (Kb = h("div", "main-header")),
            ub.appendChild(Kb));
        Kb.innerHTML = n.empty;
        qa(Kb, b.sideMenuHeaderText);
        t(Kb, "ib-close", b.closeTooltipText, Hb);
        (b.configurationDialogEnabled || b.exportEventsEnabled || (b.importEventsEnabled && b.manualEditingEnabled)) &&
            Kb.appendChild(h("div", "right-divider-line"));
        b.configurationDialogEnabled &&
            t(Kb, "ib-octagon-hollow", b.configurationTooltipText, function () {
                Hb();
                gj();
            });
        ((b.configurationDialogEnabled && b.exportEventsEnabled) ||
            (b.importEventsEnabled && b.manualEditingEnabled)) &&
            Kb.appendChild(h("div", "right-divider-line"));
        b.exportEventsEnabled &&
            (cd = t(Kb, "ib-arrow-down-full-line", b.exportEventsTooltipText, function () {
                var a = Ma();
                null === a ? dd(ed) : a === W ? dd(gc) : a === da ? dd(hc) : a === ia ? dd(Bc) : a === ra && dd(Lb);
            }));
        b.importEventsEnabled &&
            b.manualEditingEnabled &&
            t(Kb, "ib-arrow-up-full-line", b.importEventsTooltipText, Hl);
        Zd || ((Cc = h("div", "content")), ub.appendChild(Cc));
    }
    function hj(a) {
        var c = Te(Dc) || !0 === a,
            d = Te(fd, !0),
            e = Te(gd, !0),
            f = Te(Ec, !0);
        a = Te(Fc, !0);
        Cc.innerHTML = n.empty;
        Fc = hd = Ec = id = gd = Gc = fd = Hc = Dc = jd = null;
        kd();
        var k = Ma();
        null === k
            ? Va(cd, 0 < ed.length)
            : k === W
              ? Va(cd, 0 < gc.length)
              : k === ra
                ? Va(cd, 0 < Lb.length)
                : k === da
                  ? Va(cd, 0 < hc.length)
                  : k === ia
                    ? Va(cd, 0 < Bc.length)
                    : Va(cd, !1);
        if (b.sideMenu.showDays) {
            var m = c;
            m = p(m) ? m : !0;
            jd = h("div", "content-section content-section-opened");
            Dc = h("div", "checkbox-container");
            Cc.appendChild(jd);
            c = 0;
            k = 7;
            var A = !1,
                sb = [];
            Ue(jd, Dc, b.sideMenuDaysText, m, sb);
            jd.appendChild(Dc);
            if (b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday) (c = b.startOfWeekDay), (A = !0);
            for (; c < k; c++)
                (m = b.visibleDays.indexOf(c) > B.notFound),
                    sb.push(K(Dc, b.dayNames[c], Ic, c.toString(), m, null, Jc)[0]);
            if (A)
                for (k = b.startOfWeekDay, c = 0; c < k; c++)
                    (A = b.visibleDays.indexOf(c) > B.notFound),
                        sb.push(K(Dc, b.dayNames[c], Ic, c.toString(), A, null, Jc)[0]);
            b.reverseOrderDaysOfWeek && ld(Dc);
        }
        if (b.sideMenu.showEventTypes) {
            d = p(d) ? d : !0;
            fd = Hc = null;
            c = !1;
            k = [];
            for (var g in N)
                N.hasOwnProperty(g) &&
                    (c ||
                        ((Hc = h("div", "content-section content-section-opened")),
                        Cc.appendChild(Hc),
                        (fd = h("div", "checkbox-container")),
                        Ue(Hc, fd, b.eventTypesText, d, k),
                        Hc.appendChild(fd),
                        (c = !0)),
                    (sb = !0),
                    p(O.visibleEventTypes) && (sb = O.visibleEventTypes.indexOf(parseInt(g)) > B.notFound),
                    k.push(K(fd, N[g].text, Ic, g, sb, null, Jc)[0]));
        }
        if (
            b.sideMenu.showGroups &&
            ((c = e), (c = p(c) ? c : !0), (gd = Gc = null), (g = ij()), (e = g.length), 0 < e)
        )
            for (
                d = [],
                    Gc = h("div", "content-section content-section-opened"),
                    gd = h("div", "checkbox-container"),
                    Cc.appendChild(Gc),
                    Ue(Gc, gd, b.groupsText, c, d),
                    Gc.appendChild(gd),
                    c = 0;
                c < e;
                c++
            )
                (k = g[c]),
                    (sb = k.toLowerCase()),
                    (A = !0),
                    p(O.visibleGroups) && (A = O.visibleGroups.indexOf(sb) > B.notFound),
                    d.push(K(gd, k, Ic, sb, A, null, Jc)[0]);
        if (b.sideMenu.showWorkingDays) {
            c = f;
            c = p(c) ? c : !0;
            id = h("div", "content-section content-section-opened");
            Ec = h("div", "checkbox-container");
            Cc.appendChild(id);
            f = 0;
            g = 7;
            d = !1;
            e = [];
            Ue(id, Ec, b.workingDaysText, c, e);
            id.appendChild(Ec);
            if (b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday) (f = b.startOfWeekDay), (d = !0);
            for (; f < g; f++)
                (c = b.workingDays.indexOf(f) > B.notFound),
                    e.push(K(Ec, b.dayNames[f], Ic, f.toString(), c, null, Jc)[0]);
            if (d)
                for (g = b.startOfWeekDay, f = 0; f < g; f++)
                    (d = b.workingDays.indexOf(f) > B.notFound),
                        e.push(K(Ec, b.dayNames[f], Ic, f.toString(), d, null, Jc)[0]);
            b.reverseOrderDaysOfWeek && ld(Ec);
        }
        if (b.sideMenu.showWeekendDays) {
            d = a;
            d = p(d) ? d : !0;
            hd = h("div", "content-section content-section-opened");
            Fc = h("div", "checkbox-container");
            Cc.appendChild(hd);
            a = 1;
            f = 8;
            e = !1;
            g = [];
            Ue(hd, Fc, b.weekendDaysText, d, g);
            hd.appendChild(Fc);
            if (b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday)
                (a = b.startOfWeekDay + 1), (e = !0);
            for (; a < f; a++)
                (d = 6 < a ? 0 : a),
                    (c = b.weekendDays.indexOf(d) > B.notFound),
                    g.push(K(Fc, b.dayNames[a - 1], Ic, d.toString(), c, null, Jc)[0]);
            if (e)
                for (f = b.startOfWeekDay + 1, a = 1; a < f; a++)
                    (e = 6 < a ? 0 : a),
                        (d = b.weekendDays.indexOf(e) > B.notFound),
                        g.push(K(Fc, b.dayNames[a - 1], Ic, e.toString(), d, null, Jc)[0]);
            b.reverseOrderDaysOfWeek && ld(Fc);
        }
    }
    function md() {
        return (
            b.sideMenu.showDays ||
            b.sideMenu.showEventTypes ||
            b.sideMenu.showGroups ||
            b.sideMenu.showWorkingDays ||
            b.sideMenu.showWeekendDays
        );
    }
    function Mb() {
        Qe() && hj();
    }
    function Kc(a) {
        hj(p(a) ? a : !1);
        pg = !1;
        ub.className += " side-menu-open";
        $d.style.display = "block";
        nd(
            Na.sideMenuEvents,
            function () {
                E.body.addEventListener("click", Hb);
            },
            500,
            !1
        );
    }
    function Hb() {
        if (null !== ub) {
            ub.className = "side-menu custom-scroll-bars";
            $d.style.display = "none";
            if (pg) {
                var a = !1,
                    c = !1;
                if (null !== Gc) {
                    var d = Ve(Gc);
                    ae(O.visibleGroups, d) ||
                        ((O.visibleGroups = [].slice.call(d)),
                        (c = !0),
                        x(b.events.onVisibleGroupsChanged, O.visibleGroups));
                }
                null !== Hc &&
                    ((d = Ve(Hc, !0)),
                    ae(O.visibleEventTypes, d) ||
                        ((O.visibleEventTypes = [].slice.call(d)),
                        (c = !0),
                        x(b.events.onVisibleEventTypesChanged, O.visibleEventTypes)));
                null !== jd &&
                    ((d = Ve(jd, !0)),
                    1 <= d.length &&
                        !ae(b.visibleDays, d) &&
                        ((b.visibleDays = [].slice.call(d)), (od = []), (c = a = !0)));
                null !== id &&
                    ((d = Ve(id, !0)), ae(b.workingDays, d) || ((b.workingDays = [].slice.call(d)), (c = a = !0)));
                null !== hd && ((d = Ve(hd, !0)), ae(b.weekendDays, d) || ((b.weekendDays = d), (c = a = !0)));
                c && (a && x(b.events.onOptionsUpdated, b), (lb = !1), F(v, !0, !0));
            }
            ic();
            E.body.removeEventListener("click", Hb);
        }
    }
    function Qe() {
        return null !== ub && ub.className.indexOf("side-menu-open") > B.notFound;
    }
    function Ve(a, b) {
        b = p(b) ? b : !1;
        a = a.getElementsByTagName("input");
        var c = a.length,
            e = [];
        if (0 < c)
            for (var f = 0; f < c; f++) {
                var k = a[f];
                k.checked && (b ? e.push(parseInt(k.name)) : e.push(k.name));
            }
        return e;
    }
    function Ue(a, c, d, e, f) {
        var k = h("div", "text-header");
        a.appendChild(k);
        w(k, d + ":");
        var m = h("div", "ib-arrow-up-full");
        k.appendChild(m);
        if (b.sideMenu.showSelectAllNoneButtons) {
            var A = h("div", "right-divider-line");
            k.appendChild(A);
            var g = t(k, "ib-square", b.selectAllText, function (a) {
                    jj(a, f, !0);
                }),
                n = t(k, "ib-square-hollow", b.selectNoneText, function (a) {
                    jj(a, f, !1);
                });
        }
        k.onclick = function () {
            var d = "none" === c.style.display;
            k.className = d ? "text-header" : "text-header-closed";
            c.style.display = d ? "block" : "none";
            m.className = d ? "ib-arrow-up-full" : "ib-arrow-down-full";
            a.className = d ? "content-section content-section-opened" : "content-section";
            b.sideMenu.showSelectAllNoneButtons &&
                ((A.style.display = d ? "block" : "none"),
                (g.style.display = d ? "block" : "none"),
                (n.style.display = d ? "block" : "none"));
        };
        e ||
            ((c.style.display = "none"),
            (k.className = "text-header-closed"),
            (m.className = "ib-arrow-down-full"),
            (a.className = "content-section"),
            b.sideMenu.showSelectAllNoneButtons &&
                ((A.style.display = "none"), (g.style.display = "none"), (n.style.display = "none")));
    }
    function jj(a, b, d) {
        C(a);
        a = b.length;
        for (var c = !1, f = 0; f < a; f++) b[f].checked !== d && ((b[f].checked = d), (c = !0));
        pg = c;
    }
    function Te(a, b) {
        return b && null === a ? !1 : null === a || "none" !== a.style.display;
    }
    function Ic() {
        pg = !0;
    }
    function ql() {
        Rh();
        z.innerHTML = n.empty;
        var a = X(v),
            c = h("div", "day-name");
        w(c, b.dayNames[a]);
        z.appendChild(c);
        t(c, "ib-arrow-right-full", b.nextDayTooltipText, Il);
        t(c, "ib-arrow-left-full", b.previousDayTooltipText, Jl);
        c.appendChild(h("div", "right-divider-line"));
        b.manualEditingEnabled &&
            t(c, "ib-plus", b.addEventTooltipText, function () {
                P(null, new Date(v));
            });
        t(c, "ib-pin", b.todayTooltipText, Kl);
        a = h("div", "day-date");
        jc(a, v, !1, !0, !1);
        z.appendChild(a);
        Ll();
        Sh();
    }
    function Ll() {
        var a = h("div", "events custom-scroll-bars"),
            c = [];
        z.appendChild(a);
        Th(v, c);
        c = vb(c);
        var d = c.length;
        if (0 < d)
            for (var e = 0; e < d; e++) {
                var f = a,
                    k = c[e],
                    m = h("div", "event");
                f.appendChild(m);
                be(m, k, We(k, v));
                ce(m, k);
                m.id = "widget-day-" + k.id;
                m.setAttribute("event-type", H(k.type));
                m.setAttribute("event-id", k.id);
                m.setAttribute("event-is-all-day", k.isAllDay);
                if (!x(b.events.onWidgetEventRender, m, k)) {
                    var A = h("div", "title");
                    if (H(k.repeatEvery) > y.never && b.showReoccurringEventIcons) {
                        var g = h("div", "ib-refresh-medium ib-no-hover ib-no-active");
                        g.style.borderColor = m.style.color;
                        A.appendChild(g);
                    }
                    A.innerHTML += kc(k.title);
                    m.appendChild(A);
                    A = h("div", "date");
                    m.appendChild(A);
                    g = h("div", "duration");
                    m.appendChild(g);
                    k.from.getDate() === k.to.getDate()
                        ? k.isAllDay
                            ? Nb(A, k.from, null, " - " + b.allDayText)
                            : (Nb(A, k.from, null, " - " + de(k.from, k.to)), w(g, Ob(k.from, k.to)))
                        : (Xe(A, k.from, k.to), w(g, Ob(k.from, k.to)));
                    g.innerHTML === n.empty && m.removeChild(g);
                    Ba(k.repeatEvery) &&
                        k.repeatEvery > y.never &&
                        ((A = h("div", "repeats")),
                        w(A, b.repeatsText.replace(":", n.empty) + n.space + pd(k.repeatEvery)),
                        m.appendChild(A));
                    Ca(k.location) && ((A = h("div", "location")), w(A, k.location), m.appendChild(A));
                    Ca(k.description) && ((A = h("div", "description")), w(A, k.description), m.appendChild(A));
                }
                f.scrollHeight > f.clientHeight &&
                    f.className.indexOf(" scroll-margin") === B.notFound &&
                    (f.className += " scroll-margin");
            }
        else qa(a, b.noEventsAvailableFullText);
    }
    function Kl(a) {
        C(a);
        F();
    }
    function Il(a) {
        C(a);
        a = new Date(v);
        a.setDate(a.getDate() + 1);
        a.getFullYear() <= b.maximumYear && F(a);
    }
    function Jl(a) {
        C(a);
        a = new Date(v);
        a.setDate(a.getDate() - 1);
        a.getFullYear() >= b.minimumYear && F(a);
    }
    function Gl(a) {
        Ye = a;
        lc(Ye, "hidden");
        Lc = h("input", "calendar-date-picker-input");
        Lc.readOnly = !0;
        Lc.placeholder = b.selectDatePlaceholderText;
        r = !0;
        var c = h("div", "calendar-date-picker");
        a.insertAdjacentElement("afterend", c);
        a.remove(a);
        c.appendChild(Ye);
        c.appendChild(Lc);
        z = h("div", "calendar calendar-hidden");
        z.id = za;
        c.appendChild(z);
        Lc.onclick = Ml;
        E.addEventListener("click", qd);
        kj();
        c = Ye.value.split("/");
        a = null;
        3 === c.length &&
            ((c = new Date(parseInt(c[2]), parseInt(c[1]) - 1, parseInt(c[0]))),
            c instanceof Date && !isNaN(c) && (a = c));
        null === a ? (a = new Date()) : Uh(a);
        a.setHours(0, 0, 0, 0);
        Mc = a;
    }
    function kj() {
        r &&
            ((b.exportEventsEnabled = !1),
            (b.manualEditingEnabled = !1),
            (b.fullScreenModeEnabled = !1),
            (b.eventNotificationsEnabled = !1),
            (b.views.fullMonth.showPreviousNextMonthNames = !1),
            (b.views.fullMonth.showPreviousNextYears = !1),
            (b.views.fullMonth.showExtraTitleBarButtons = !1),
            (b.holidays = []));
    }
    function Ml(a) {
        C(a);
        qg("calendar calendar-shown", "calendar calendar-hidden");
        if (db) (z.className = "calendar calendar-hidden"), Ga(), x(b.events.onDatePickerClosed, za);
        else {
            z.className = "calendar calendar-shown";
            F(new Date(Mc), !lb);
            x(b.events.onDatePickerOpened, za);
            a = lj;
            null === a && (a = lj = z.offsetTop);
            z.style.top = a + "px";
            var c = Ze(z),
                d = mj();
            c.top - d.top + z.offsetHeight > Z.innerHeight
                ? ((c = bd(z, "border-width")),
                  (d = bd(Lc, "border-width")),
                  (a -= z.offsetHeight + Lc.clientHeight + 4 * c + 2 * d),
                  (z.className += " calendar-shadow-top"),
                  (z.style.top = a + "px"))
                : (z.className += " calendar-shadow-bottom");
        }
        db = !db;
    }
    function qd() {
        db && ((z.className = "calendar calendar-hidden"), (db = !1), Ga(), x(b.events.onDatePickerClosed, za));
    }
    function Uh(a) {
        Lc.value = Ph(b.views.datePicker.selectedDateFormat, a);
        Ye.value = a.getFullYear() + "-" + J(a.getMonth() + 1) + "-" + J(a.getDate());
    }
    function nj(a) {
        var c = !0;
        null !== b.views.datePicker.minimumDate && (c = $e(b.views.datePicker.minimumDate, a));
        c && null !== b.views.datePicker.maximumDate && (c = $e(a, b.views.datePicker.maximumDate));
        return c;
    }
    function Kh(a) {
        var c = (a = p(a) ? a : !0) ? E.body.addEventListener : E.body.removeEventListener,
            d = a ? E.addEventListener : E.removeEventListener;
        a = a ? Z.addEventListener : Z.removeEventListener;
        c("click", Nl);
        c("contextmenu", Vh);
        c("mousemove", Ol);
        c("mouseup", Wh);
        c("mouseleave", Pl);
        d("scroll", Vh);
        a("resize", Vh);
        a("resize", Xh);
        a("resize", Ql);
        a("blur", Rl);
        b.shortcutKeysEnabled && d("keydown", Sl);
    }
    function Nl(a) {
        Ga();
        fa(a) || mc();
    }
    function Rl() {
        Ga();
        ic();
        r && qd();
    }
    function Ql() {
        rd(Na.windowResize);
        nd(
            Na.windowResize,
            function () {
                La(!0, !1);
            },
            50,
            !1
        );
    }
    function Vh() {
        Ga();
    }
    function Ga(a) {
        var b = !1;
        a = p(a) ? a : !0;
        rg(Ia) && (b = !0);
        rg(Y) && (b = !0);
        rg(Oa) && (b = !0);
        rg(nb) && (b = !0);
        sg() && (b = !0);
        ic();
        qg("calendar-context-menu");
        qg("years-drop-down");
        qg("years-drop-down-no-months");
        a && af();
        return b;
    }
    function Sl(a) {
        if (r)
            db &&
                (a.keyCode === Q.escape
                    ? (a.preventDefault(), qd())
                    : fa(a) && a.keyCode === Q.left
                      ? (a.preventDefault(), tg())
                      : fa(a) && a.keyCode === Q.right
                        ? (a.preventDefault(), ug())
                        : a.keyCode === Q.left
                          ? (a.preventDefault(), bf())
                          : a.keyCode === Q.right
                            ? (a.preventDefault(), cf())
                            : a.keyCode === Q.down && (a.preventDefault(), wg()));
        else if (Qe()) a.keyCode === Q.escape && Qe() && (a.preventDefault(), Hb());
        else {
            if (sd) {
                var c = oj();
                fa(a) && a.keyCode === Q.left && c
                    ? (a.preventDefault(), tg())
                    : fa(a) && a.keyCode === Q.right && c
                      ? (a.preventDefault(), ug())
                      : a.keyCode === Q.escape
                        ? !pj() && c && b.useEscapeKeyToExitFullScreenMode && Wa()
                        : a.keyCode === Q.left && c
                          ? qj(a)
                          : a.keyCode === Q.right && c
                            ? rj(a)
                            : a.keyCode === Q.down && c
                              ? sj(a)
                              : a.keyCode === Q.f5 && c && La(!1, !0);
            } else a.keyCode === Q.escape && pj();
            if (fa(a) && a.shiftKey && a.keyCode === Q.a)
                a.preventDefault(), b.manualEditingEnabled && P(null, new Date());
            else if (fa(a) && a.shiftKey && a.keyCode === Q.c) a.preventDefault(), tj();
            else if (fa(a) && a.shiftKey && a.keyCode === Q.e)
                a.preventDefault(),
                    b.exportEventsEnabled &&
                        ((a = []),
                        (c = Ma()),
                        null === c
                            ? (a = ed)
                            : c === W
                              ? (a = gc)
                              : c === da
                                ? (a = hc)
                                : c === ia
                                  ? (a = Bc)
                                  : c === ra && (a = Lb),
                        0 < a.length && dd(a));
            else if (fa(a) && a.shiftKey && a.keyCode === Q.g) a.preventDefault(), b.configurationDialogEnabled && gj();
            else if (fa(a) && a.shiftKey && a.keyCode === Q.j) a.preventDefault(), ee();
            else if (fa(a) && a.shiftKey && a.keyCode === Q.f)
                a.preventDefault(),
                    (a = !1),
                    (c = Ma()),
                    null === c
                        ? (a = 0 < ed.length)
                        : c === W
                          ? (a = 0 < gc.length)
                          : c === da
                            ? (a = 0 < Lb.length)
                            : c === Da
                              ? (a = 0 < hc.length)
                              : c === ia && (a = 0 < Bc.length),
                    a && fe();
            else if (fa(a) && a.shiftKey && a.keyCode === Q.m) {
                if ((a.preventDefault(), Xa(ra))) for (a = vg.length, c = 0; c < a; c++) vg[c]();
            } else
                fa(a) && a.shiftKey && a.keyCode === Q.o
                    ? (a.preventDefault(), md() && Kc())
                    : fa(a) && a.shiftKey && a.keyCode === Q.v
                      ? (a.preventDefault(), (a = ja.length), Xa(W) && 0 < a && Yh(L, Pb))
                      : fa(a) && a.shiftKey && a.keyCode === Q.x
                        ? (a.preventDefault(), tj(!0))
                        : fa(a) && a.shiftKey && a.keyCode === Q.f11 && (a.preventDefault(), Wa());
        }
    }
    function qj(a) {
        p(a) && a.preventDefault();
        a = Ma();
        null === a ? bf() : a === W ? uj() : a === da ? vj() : a === Da ? wj() : a === ia && xj();
    }
    function rj(a) {
        p(a) && a.preventDefault();
        a = Ma();
        null === a ? cf() : a === W ? yj() : a === da ? zj() : a === Da ? Aj() : a === ia && Bj();
    }
    function sj(a) {
        p(a) && a.preventDefault();
        a = Ma();
        null === a ? wg() : a === W ? Cj() : a === da ? Dj() : a === Da ? Ej() : a === ia && Fj();
    }
    function fa(a) {
        return a.ctrlKey || a.metaKey;
    }
    function pj() {
        var a = Ga(!1);
        a || (a = af());
        !a && 0 < eb.length && ((a = eb[eb.length - 1]), Zh(a) && (eb.pop(), a(!1)), (a = !0));
        a || (a = kd());
        a || (a = mc());
        !a && 0 < ja.length && (ge(), (ja = []), (Pb = !1), (a = !0));
        !a && 0 < ob.length && (Gj(), (a = !0));
        return a;
    }
    function sl() {
        if (!r && b.views.fullDay.enabled) {
            var a = null !== W;
            a && (W.innerHTML = n.empty);
            a || ((W = h("div", "full-day-view")), (W.id = ec()), z.appendChild(W));
            a = h("div", "title-bar");
            W.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Wa);
            df = h("div", "title");
            a.appendChild(df);
            t(a, "ib-close", b.closeTooltipText, Tl);
            a.appendChild(h("div", "right-divider-line"));
            b.views.fullDay.showExtraTitleBarButtons &&
                b.fullScreenModeEnabled &&
                (($h = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Wa)),
                a.appendChild(h("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextDayTooltipText, yj);
            b.manualEditingEnabled &&
                b.views.fullDay.showExtraTitleBarButtons &&
                t(a, "ib-plus", b.addEventTooltipText, function () {
                    if (b.useTemplateWhenAddingNewEvent) {
                        var a = td(L, L);
                        P(a);
                        ud();
                    } else P(null, L);
                });
            b.views.timeline.enabled &&
                (a.appendChild(h("div", "right-divider-line-views")),
                t(a, "ib-bar-graph", b.viewTimelineTooltipText, function () {
                    Jb(L, !0);
                }));
            !r &&
                md() &&
                (t(a, "ib-hamburger", b.showMenuTooltipText, Kc), a.appendChild(h("div", "left-divider-line")));
            t(a, "ib-arrow-left-full", b.previousDayTooltipText, uj);
            b.views.fullDay.showExtraTitleBarButtons &&
                ((Hj = t(a, "ib-pin", b.todayTooltipText, Cj)),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        ee();
                    }),
                a.appendChild(h("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    La(!0, !0);
                }),
                u.enabled && (Ij = t(a, "ib-search", b.searchTooltipText, fe)));
            wb = h("div", "contents custom-scroll-bars");
            W.appendChild(wb);
            wb.oncontextmenu = function (a) {
                var b = xg(a, wa);
                ef = J(b[0]) + ":" + J(b[1]);
                Jj(a, L, gc);
            };
            Nc = h("div", "content-events-all-day");
            wb.appendChild(Nc);
            a = h("div", "all-day-text");
            w(a, b.allDayText);
            Nc.appendChild(a);
            wa = h("div", "contents-events");
            wa.ondblclick = Ul;
            wb.appendChild(wa);
            he = h("div", "working-hours");
            wb.appendChild(he);
            b.manualEditingEnabled &&
                b.dragAndDropForEventsEnabled &&
                ((wa.ondragover = C),
                (wa.ondragenter = C),
                (wa.ondragleave = C),
                (wa.ondrop = function (a) {
                    Kj(a, L, wa);
                }));
            Lj(wa, b.views.fullDay.minutesBetweenSections);
            ff = h("div", "time-arrow");
            wa.appendChild(ff);
            ff.appendChild(h("div", "arrow-left"));
            ff.appendChild(h("div", "line"));
        }
    }
    function nc(a, b, d, e, f) {
        for (var c = new Date(a.from), m = Oc(a.repeatEveryExcludeDays); c < d; ) {
            e(c, f);
            var h = !(!p(a.repeatEnds) || $e(c, a.repeatEnds));
            if (m.indexOf(c.getDay()) === B.notFound && !h && U(c, d)) {
                b.push(a);
                break;
            }
        }
    }
    function Vl(a, c) {
        var d = 0,
            e = Oc(a.seriesIgnoreDates),
            f = vd(c),
            k = new Date(c);
        if (ie(a) && e.indexOf(f) === B.notFound) {
            var m = h("div", "event");
            m.ondblclick = C;
            m.setAttribute("event-type", H(a.type));
            m.setAttribute("event-id", a.id);
            m.setAttribute("event-is-all-day", a.isAllDay);
            m.onclick = function (a) {
                Mj(a, m);
            };
            a.isAllDay
                ? Nc.appendChild(m)
                : (b.manualEditingEnabled &&
                      b.dragAndDropForEventsEnabled &&
                      (U(a.from, a.to) && (m.className += " resizable"),
                      (m.ondragstart = function (b) {
                          var d = Ze(m);
                          yg = m;
                          zg = m.offsetTop;
                          Qb = a;
                          Ag = d.top - b.pageY;
                          Bg = c;
                      }),
                      (m.ondragEnd = Wh),
                      m.setAttribute("draggable", !0)),
                  wa.appendChild(m));
            m.oncontextmenu = function (b) {
                gf(b, a, f);
            };
            hf(m, a);
            be(m, a, We(a, c));
            ce(m, a, k);
            U(a.from, c) && (m.id = "full-day-" + a.id);
            x(b.events.onFullDayEventRender, m, a) ||
                ((e = h("div", "title")),
                H(a.repeatEvery) > y.never &&
                    b.showReoccurringEventIcons &&
                    ((k = h("div", "ib-refresh-medium ib-no-hover ib-no-active")),
                    (k.style.borderColor = m.style.color),
                    e.appendChild(k)),
                (e.innerHTML += kc(a.title)),
                m.appendChild(e),
                a.isAllDay && !b.views.fullDay.showAllDayEventDetails) ||
                ((e = h("div", "date")),
                m.appendChild(e),
                (k = h("div", "duration")),
                m.appendChild(k),
                a.from.getDate() === a.to.getDate()
                    ? a.isAllDay
                        ? w(e, b.allDayText)
                        : (w(e, de(a.from, a.to)), w(k, Ob(a.from, a.to)))
                    : (Xe(e, a.from, a.to), w(k, Ob(a.from, a.to))),
                k.innerHTML === n.empty && m.removeChild(k),
                b.views.fullDay.showEventUrls &&
                    Ca(a.url) &&
                    ((e = h("div", "url-text")),
                    w(e, Cg(a.url)),
                    m.appendChild(e),
                    (e.onclick = function (b) {
                        C(b);
                        je(a.url);
                    })),
                Ba(a.repeatEvery) &&
                    a.repeatEvery > y.never &&
                    ((e = h("div", "repeats")),
                    w(e, b.repeatsText.replace(":", n.empty) + n.space + pd(a.repeatEvery)),
                    m.appendChild(e)),
                Ca(a.location) && ((e = h("div", "location")), w(e, a.location), m.appendChild(e)),
                Ca(a.description) && ((e = h("div", "description")), w(e, a.description), m.appendChild(e)));
            m.addEventListener("click", function (b) {
                jf(b, a);
            });
            a.isAllDay || (d = Nj(wb, wa, c, m, a));
            gc.push(a);
            a.isAllDay || Dg.push({ eventDetails: a, eventElement: m, height: m.offsetHeight });
        }
        return d;
    }
    function Ua(a, c) {
        a = p(a) ? new Date(a) : new Date();
        c = p(c) ? c : !1;
        var d = new Date(),
            e = X(d);
        e = b.visibleDays.indexOf(e) > B.notFound;
        df.innerHTML = n.empty;
        L = new Date(a);
        gc = [];
        Dg = [];
        Nc.style.display = "block";
        he.style.display = "none";
        U(a, d) && !e && Oj();
        Va(Hj, e);
        ai(wb, "event");
        kd();
        x(b.events.onFullDayTitleRender, L) || jc(df, L, !1, !0, !0);
        kf(W, c);
        if (0 <= b.workingDays.indexOf(X(a)) && null !== b.workingHoursStart && null !== b.workingHoursEnd) {
            var f = null;
            d = null;
            Pa(b.workingHoursStart)
                ? ((e = X(L)),
                  b.workingHoursStart.hasOwnProperty(e.toString()) && (f = b.workingHoursStart[e.toString()]))
                : (f = b.workingHoursStart);
            Pa(b.workingHoursEnd)
                ? ((e = X(L)), b.workingHoursEnd.hasOwnProperty(e.toString()) && (d = b.workingHoursEnd[e.toString()]))
                : (d = b.workingHoursEnd);
            null !== f &&
                null !== d &&
                f !== d &&
                ((e = wa.offsetHeight / 1440),
                (f = f.split(":")),
                (d = d.split(":")),
                (f = (60 * parseInt(f[0]) + parseInt(f[1])) * e),
                (d = (60 * parseInt(d[0]) + parseInt(d[1])) * e - f),
                (he.style.display = "block"),
                (he.style.top = f + "px"),
                (he.style.height = d + "px"));
        }
        d = a;
        e = null;
        if (b.showHolidays) {
            f = [];
            for (var k = [], m = b.holidays.length, h = 0; h < m; h++) {
                var g = b.holidays[h],
                    og = G(g.title, n.empty);
                Pj(g, d) && og !== n.empty && k.indexOf(og.toLowerCase()) && (f.push(og), k.push(og.toLowerCase()));
            }
            0 < f.length && (e = f.join(", "));
        }
        d = e;
        f = [];
        null !== d && aa(df, " (" + d + ")", "light-title-bar-text");
        Th(a, f);
        f = vb(f);
        k = f.length;
        e = null;
        d = Qj(L, W, ff, wa, b.views.fullDay.showTimelineArrow);
        for (m = 0; m < k; m++) (h = Vl(f[m], a)), null === e && (e = h);
        c &&
            ((a = W),
            (c = b.views.fullDay.showTimelineArrow),
            dc(L) && Xa(a) && c
                ? ((a = Nc.offsetHeight), (a = 1 >= a ? 4 * b.spacing : a), (wb.scrollTop = d - a))
                : (wb.scrollTop = e - wb.offsetHeight / 2));
        1 >= Nc.offsetHeight && (Nc.style.display = "none");
        Va(Ij, 0 < gc.length);
        Rj(wa);
    }
    function Th(a, b) {
        xb(function (c) {
            for (var d = Pc(c.from, c.to) + 1, f = new Date(c.from), k = 0; k < d; k++) {
                if (U(f, a)) {
                    b.push(c);
                    break;
                }
                Ya(f);
            }
            d = H(c.repeatEvery);
            d > y.never &&
                (d === y.everyDay
                    ? nc(c, b, a, Ya, 1)
                    : d === y.everyWeek
                      ? nc(c, b, a, Rb, 1)
                      : d === y.every2Weeks
                        ? nc(c, b, a, Rb, 2)
                        : d === y.everyMonth
                          ? nc(c, b, a, ke, 1)
                          : d === y.everyYear
                            ? nc(c, b, a, wd, 1)
                            : d === y.custom &&
                              ((d = H(c.repeatEveryCustomType)),
                              (f = H(c.repeatEveryCustomValue)),
                              0 < f &&
                                  (d === M.daily
                                      ? nc(c, b, a, Ya, f)
                                      : d === M.weekly
                                        ? nc(c, b, a, Rb, f)
                                        : d === M.monthly
                                          ? nc(c, b, a, ke, f)
                                          : d === M.yearly && nc(c, b, a, wd, f))));
        });
    }
    function Tl() {
        xd(W);
        L = null;
        gc = [];
        Dg = [];
    }
    function Ul(a) {
        b.manualEditingEnabled &&
            ((a = xg(a, wa)),
            b.useTemplateWhenAddingNewEvent
                ? ((a = J(a[0]) + ":" + J(a[1])), (a = td(L, L, a, a)), P(a), ud())
                : P(null, L, a));
    }
    function uj() {
        Eg(L);
        if (7 > b.visibleDays.length) for (var a = X(L); b.visibleDays.indexOf(a) === B.notFound; ) Eg(L), (a = X(L));
        Ua(L, !0);
    }
    function yj() {
        Oj(!0);
    }
    function Cj() {
        L = new Date();
        Ua(L, !0);
    }
    function Oj(a) {
        a = p(a) ? a : !1;
        Ya(L);
        if (7 > b.visibleDays.length) for (var c = X(L); b.visibleDays.indexOf(c) === B.notFound; ) Ya(L), (c = X(L));
        a && Ua(L, !0);
    }
    function tl() {
        if (!r && b.views.fullWeek.enabled) {
            var a = null !== da;
            a && ((da.innerHTML = n.empty), (yd = null));
            a || ((da = h("div", "full-week-view")), (da.id = ec()), z.appendChild(da));
            a = h("div", "title-bar");
            da.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Wa);
            Qa = h("div", "title");
            a.appendChild(Qa);
            t(a, "ib-close", b.closeTooltipText, function () {
                hc = [];
                xd(da);
            });
            a.appendChild(h("div", "right-divider-line"));
            b.views.fullWeek.showExtraTitleBarButtons &&
                b.fullScreenModeEnabled &&
                ((bi = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Wa)),
                a.appendChild(h("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextWeekTooltipText, zj);
            b.manualEditingEnabled &&
                b.views.fullWeek.showExtraTitleBarButtons &&
                t(a, "ib-plus", b.addEventTooltipText, function () {
                    P(null, new Date(Sj));
                });
            !r &&
                md() &&
                (t(a, "ib-hamburger", b.showMenuTooltipText, Kc), a.appendChild(h("div", "left-divider-line")));
            t(a, "ib-arrow-left-full", b.previousWeekTooltipText, vj);
            b.views.fullWeek.showExtraTitleBarButtons &&
                (t(a, "ib-pin", b.thisWeekTooltipText, Dj),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        ee();
                    }),
                a.appendChild(h("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    La(!0, !0);
                }),
                u.enabled && (Tj = t(a, "ib-search", b.searchTooltipText, fe)));
            zd = h("div", "contents custom-scroll-bars");
            da.appendChild(zd);
            Wl();
        }
    }
    function Wl() {
        var a = h("div", "header-days-container");
        zd.appendChild(a);
        b.views.fullWeek.showDayNamesHeaders && ((yd = h("div", "row-cells header-days")), a.appendChild(yd));
        Ad = h("div", "content-events-all-day");
        zd.appendChild(Ad);
        le = h("div", "row-cells days");
        Ad.appendChild(le);
        a = h("div", "all-day-text");
        w(a, b.allDayText);
        Ad.appendChild(a);
        me = h("div", "hours");
        zd.appendChild(me);
        Lj(me, b.views.fullWeek.minutesBetweenSections);
        lf = h("div", "row-cells days");
        me.appendChild(lf);
    }
    function ci(a, c, d) {
        for (; a < c; a++) b.visibleDays.indexOf(a) > B.notFound && Xl(d, a);
    }
    function Xl(a, c) {
        var d = h("div", Fg()),
            e = h("div", Fg()),
            f = new Date(a[c]);
        d.id = "calendar-week-day-" + c;
        e.id = "calendar-week-all-day-" + c;
        lf.appendChild(d);
        le.appendChild(e);
        d.ondblclick = function (a) {
            b.manualEditingEnabled &&
                ((a = xg(a, d)),
                b.useTemplateWhenAddingNewEvent
                    ? ((a = J(a[0]) + ":" + J(a[1])), (a = td(f, f, a, a)), P(a), ud())
                    : P(null, f, a));
        };
        Gg(e, f.getFullYear(), f.getMonth(), f.getDate());
        Yl(d, c);
        dc(f) && Zl(d, f);
        b.manualEditingEnabled &&
            b.dragAndDropForEventsEnabled &&
            ((d.ondragover = C),
            (d.ondragenter = C),
            (d.ondragleave = C),
            (d.ondrop = function (a) {
                Kj(a, f, me);
            }));
        d.oncontextmenu = function (a) {
            var b = xg(a, d);
            ef = J(b[0]) + ":" + J(b[1]);
            Jj(a, f, mf[c]);
        };
    }
    function Zl(a, c) {
        ne = h("div", "time-arrow");
        a.appendChild(ne);
        ne.appendChild(h("div", "arrow-left"));
        ne.appendChild(h("div", "line"));
        Hg = Qj(c, da, ne, a, b.views.fullWeek.showTimelineArrow);
    }
    function Yl(a, c) {
        if (null !== b.workingHoursStart && null !== b.workingHoursEnd && 0 <= b.workingDays.indexOf(c)) {
            var d =
                Pa(b.workingHoursStart) && b.workingHoursStart.hasOwnProperty(c.toString())
                    ? b.workingHoursStart[c.toString()]
                    : b.workingHoursStart;
            var e =
                Pa(b.workingHoursEnd) && b.workingHoursEnd.hasOwnProperty(c.toString())
                    ? b.workingHoursEnd[c.toString()]
                    : b.workingHoursEnd;
            null !== d &&
                null !== e &&
                d !== e &&
                ((c = a.offsetHeight / 1440),
                (d = d.split(":")),
                (e = e.split(":")),
                (d = (60 * parseInt(d[0]) + parseInt(d[1])) * c),
                (c = (60 * parseInt(e[0]) + parseInt(e[1])) * c - d),
                (e = h("div", "working-hours")),
                a.appendChild(e),
                (e.style.display = "block"),
                (e.style.top = d + "px"),
                (e.style.height = c + "px"));
        }
    }
    function Uj(a, c) {
        a.getFullYear() === c.getFullYear()
            ? (a.getMonth() === c.getMonth()
                  ? (Nb(Qa, a), aa(Qa, " - "), Nb(Qa, c, null, n.space), aa(Qa, b.monthNames[a.getMonth()]))
                  : (jc(Qa, a, !1, !1), aa(Qa, " - "), jc(Qa, c, !1, !1)),
              aa(Qa, ", " + a.getFullYear()))
            : (jc(Qa, a, !1, !0), aa(Qa, " - "), jc(Qa, c, !1, !0));
    }
    function oc(a, b, d, e, f) {
        for (var c = new Date(a.from), m = Oc(a.repeatEveryExcludeDays), h = !1; c < d; ) {
            e(c, f);
            var g = !(!p(a.repeatEnds) || $e(c, a.repeatEnds));
            if (m.indexOf(c.getDay()) === B.notFound && !g && c >= b && c <= d) {
                g = Aa("calendar-week-day-" + X(c));
                var n = Aa("calendar-week-all-day-" + X(c));
                null !== g && (Vj(g, n, a, c), (h = !0));
            }
        }
        return h;
    }
    function Vj(a, c, d, e) {
        var f = !1,
            k = Oc(d.seriesIgnoreDates),
            m = new Date(e),
            A = vd(m);
        e = new Date(e);
        if (ie(d) && k.indexOf(A) === B.notFound) {
            var g = h("div", "event");
            f = X(m);
            g.setAttribute("event-type", H(d.type));
            g.setAttribute("event-id", d.id);
            g.setAttribute("event-is-all-day", d.isAllDay);
            a.appendChild(g);
            g.onclick = function (a) {
                Mj(a, g);
            };
            g.oncontextmenu = function (a) {
                gf(a, d, A);
            };
            d.isAllDay
                ? (c.appendChild(g), di(g, d, m, c), (ei = !0))
                : b.manualEditingEnabled &&
                  b.dragAndDropForEventsEnabled &&
                  !nf(d) &&
                  (U(d.from, d.to) && !d.isAllDay && (g.className += " resizable"),
                  (g.ondragstart = function (a) {
                      var b = Ze(g);
                      yg = g;
                      zg = g.offsetTop;
                      Qb = d;
                      Ag = b.top - a.pageY;
                      Bg = m;
                  }),
                  (g.ondragEnd = Wh),
                  g.setAttribute("draggable", !0));
            hf(g, d);
            be(g, d, We(d, m));
            ce(g, d, e);
            U(d.from, m) && (g.id = "week-day-" + d.id);
            x(b.events.onFullWeekEventRender, g, d) ||
                ((c = h("div", "title")),
                H(d.repeatEvery) > y.never &&
                    b.showReoccurringEventIcons &&
                    ((k = h("div", "ib-refresh-medium ib-no-hover ib-no-active")),
                    (k.style.borderColor = g.style.color),
                    c.appendChild(k)),
                (c.innerHTML += kc(d.title)),
                g.appendChild(c),
                d.isAllDay && !b.views.fullWeek.showAllDayEventDetails) ||
                ((c = h("div", "date")),
                g.appendChild(c),
                (k = h("div", "duration")),
                g.appendChild(k),
                d.from.getDate() === d.to.getDate()
                    ? d.isAllDay
                        ? w(c, b.allDayText)
                        : (w(c, de(d.from, d.to)), w(k, Ob(d.from, d.to)))
                    : (Xe(c, d.from, d.to), w(k, Ob(d.from, d.to))),
                k.innerHTML === n.empty && g.removeChild(k),
                b.views.fullWeek.showEventUrls &&
                    Ca(d.url) &&
                    ((c = h("div", "url-text")),
                    w(c, Cg(d.url)),
                    g.appendChild(c),
                    (c.onclick = function (a) {
                        C(a);
                        je(d.url);
                    })),
                Ba(d.repeatEvery) &&
                    d.repeatEvery > y.never &&
                    ((c = h("div", "repeats")),
                    w(c, b.repeatsText.replace(":", n.empty) + n.space + pd(d.repeatEvery)),
                    g.appendChild(c)),
                Ca(d.location) && ((c = h("div", "location")), w(c, d.location), g.appendChild(c)),
                Ca(d.description) && ((c = h("div", "description")), w(c, d.description), g.appendChild(c)));
            g.addEventListener("click", function (a) {
                jf(a, d);
            });
            d.isAllDay || Nj(a, a, m, g, d, !0);
            d.isAllDay || fi.push({ eventDetails: d, eventElement: g, height: g.offsetHeight });
            mf.hasOwnProperty(f) || (mf[f] = []);
            of = 0 === of ? g.offsetTop : la.min(of, g.offsetTop);
            mf[f].push(d);
            f = !0;
        }
        return f;
    }
    function zc(a, c) {
        c = p(c) ? c : !1;
        var d = p(a) ? new Date(a) : new Date();
        var e = d;
        e = p(e) ? new Date(e) : new Date();
        0 < e.getDay()
            ? e.setDate(e.getDate() - e.getDay())
            : b.startOfWeekDay === va.monday && e.setDate(e.getDate() - 7);
        b.startOfWeekDay === va.monday
            ? e.setDate(e.getDate() + 1)
            : b.startOfWeekDay === va.saturday && e.setDate(e.getDate() - 1);
        a = new Date(e);
        e = new Date(e);
        a.setHours(0, 0, 0, 0);
        e.setDate(e.getDate() + 6);
        e.setHours(23, 59, 59, 99);
        e = [a, e];
        a = e[0];
        e = e[1];
        Sb = d;
        ne = null;
        hc = [];
        mf = {};
        ei = !1;
        Hg = null;
        of = 0;
        Ad.style.display = "none";
        fi = [];
        Sj = a;
        kf(da, c);
        kd();
        Qa.innerHTML = n.empty;
        if (!x(b.events.onFullWeekTitleRender, a, e)) {
            if (b.views.fullWeek.showWeekNumbersInTitles) {
                d = Qa;
                var f = b.weekText + n.space,
                    k = new Date(a.getFullYear(), 0, 1),
                    m = la.ceil(((a - k) / 864e5 + k.getDay() + 1) / 7);
                4 < k.getDay() && m--;
                aa(d, f + m + ": ");
            }
            b.reverseOrderDaysOfWeek ? Uj(e, a) : Uj(a, e);
        }
        Lh(yd, !1);
        d = b.dayHeaderNames.length;
        f = {};
        for (k = new Date(a); k < e; ) (f[X(k)] = new Date(k)), k.setDate(k.getDate() + 1);
        lf.innerHTML = n.empty;
        le.innerHTML = n.empty;
        b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday
            ? (ci(b.startOfWeekDay, d, f), ci(0, b.startOfWeekDay, f))
            : ci(0, d, f);
        b.reverseOrderDaysOfWeek && ld(lf);
        if (null !== yd && b.views.fullWeek.showDatesInDayHeaders) {
            d = new Date(a);
            f = 0;
            for (k = yd.children; d < e; )
                (m = X(d)),
                    b.visibleDays.indexOf(m) > B.notFound &&
                        ((k[f].innerHTML = b.views.fullWeek.padDayMonthNumbers
                            ? k[f].innerHTML + (n.space + J(d.getDate()) + "/" + J(d.getMonth() + 1))
                            : k[f].innerHTML + (n.space + d.getDate() + "/" + (d.getMonth() + 1))),
                        f++),
                    d.setDate(d.getDate() + 1);
            b.reverseOrderDaysOfWeek && ld(yd);
        }
        d = vb(Bd());
        f = d.length;
        for (k = 0; k < f; k++) {
            m = d[k];
            for (var h = Pc(m.from, m.to) + 1, g = new Date(m.from), q = !1, l = 0; l < h; l++) {
                if (g >= a && g <= e) {
                    var r = Aa("calendar-week-day-" + X(g)),
                        t = Aa("calendar-week-all-day-" + X(g));
                    null !== r && Vj(r, t, m, g) && (q = !0);
                }
                Ya(g);
            }
            q && hc.push(m);
            g = H(m.repeatEvery);
            h = !1;
            g > y.never &&
                (g === y.everyDay
                    ? (h = oc(m, a, e, Ya, 1))
                    : g === y.everyWeek
                      ? (h = oc(m, a, e, Rb, 1))
                      : g === y.every2Weeks
                        ? (h = oc(m, a, e, Rb, 2))
                        : g === y.everyMonth
                          ? (h = oc(m, a, e, ke, 1))
                          : g === y.everyYear
                            ? (h = oc(m, a, e, wd, 1))
                            : g === y.custom &&
                              ((g = H(m.repeatEveryCustomType)),
                              (l = H(m.repeatEveryCustomValue)),
                              0 < l &&
                                  (g === M.daily
                                      ? (h = oc(m, a, e, Ya, l))
                                      : g === M.weekly
                                        ? (h = oc(m, a, e, Rb, l))
                                        : g === M.monthly
                                          ? (h = oc(m, a, e, ke, l))
                                          : g === M.yearly && (h = oc(m, a, e, wd, l)))));
            h && !q && hc.push(m);
        }
        a = b.dayHeaderNames.length;
        for (e = 0; e < a; e++) (d = Aa("calendar-week-day-" + e)), null !== d && Rj(d);
        a = 0;
        if (ei) {
            Ad.style.display = "block";
            e = le.children.length;
            for (d = 0; d < e; d++) {
                f = le.children[d].children;
                k = f.length;
                for (q = m = 0; q < k; q++) m += f[q].offsetHeight + b.spacing;
                a = la.max(a, m);
            }
            Ad.style.height = a + b.spacing + "px";
        }
        c && (null !== Hg ? ((a = 0 >= a ? 4 * b.spacing : a), (zd.scrollTop = Hg - a)) : (zd.scrollTop = of));
        Va(Tj, 0 < hc.length);
    }
    function vj() {
        Sb.setDate(Sb.getDate() - 7);
        zc(Sb, !0);
    }
    function zj() {
        Rb(Sb);
        zc(Sb, !0);
    }
    function Dj() {
        Sb = new Date();
        zc(Sb, !0);
    }
    function ul() {
        Ig = Jg = null;
        var a = null !== S;
        a && (S.innerHTML = n.empty);
        a || ((S = h("div", "title-bar")), Ib.appendChild(S));
        b.fullScreenModeEnabled && (S.ondblclick = Wa);
        r &&
            (S.onclick = function (a) {
                C(a);
                Ga();
            });
        !r && md() && (t(S, "ib-hamburger", b.showMenuTooltipText, Kc), S.appendChild(h("div", "left-divider-line")));
        t(S, "ib-arrow-left-full", b.previousMonthTooltipText, bf);
        b.views.fullMonth.addYearButtons && t(S, "ib-rewind", b.previousYearTooltipText, tg);
        (r || b.views.fullMonth.showExtraTitleBarButtons) && t(S, "ib-pin", b.currentMonthTooltipText, wg);
        b.views.fullMonth.showExtraTitleBarButtons &&
            (b.jumpToDateEnabled &&
                t(S, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                    ee();
                }),
            S.appendChild(h("div", "left-divider-line-events")),
            t(S, "ib-refresh", b.refreshTooltipText, function () {
                La(!0, !0);
            }),
            u.enabled && (Ig = t(S, "ib-search", b.searchTooltipText, fe)));
        r && (t(S, "ib-close", b.closeTooltipText, qd), S.appendChild(h("div", "right-divider-line")));
        b.views.fullMonth.showExtraTitleBarButtons &&
            b.fullScreenModeEnabled &&
            ((Jg = t(S, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Wa)),
            S.appendChild(h("div", "right-divider-line-full-screen-mode")));
        t(S, "ib-arrow-right-full", b.nextMonthTooltipText, cf);
        b.views.fullMonth.addYearButtons && t(S, "ib-forward", b.nextYearTooltipText, ug);
        b.views.fullMonth.showExtraTitleBarButtons &&
            b.manualEditingEnabled &&
            t(S, "ib-plus", b.addEventTooltipText, function () {
                Wj(v, new Date()) ? P(null) : P(null, new Date(v.getFullYear(), v.getMonth(), 1));
            });
        r ||
            ((b.views.timeline.enabled ||
                b.views.allEvents.enabled ||
                b.views.fullYear.enabled ||
                b.views.fullWeek.enabled ||
                b.views.fullDay.enabled) &&
                S.appendChild(h("div", "right-divider-line-views")),
            b.views.timeline.enabled &&
                t(S, "ib-bar-graph", b.viewTimelineTooltipText, function () {
                    var a = ng(v) ? null : v;
                    Jb(a, !0);
                }),
            b.views.allEvents.enabled &&
                t(S, "ib-eye", b.viewAllEventsTooltipText, function () {
                    Qh(!0);
                }),
            b.views.fullYear.enabled &&
                t(S, "ib-expand", b.viewFullYearTooltipText, function () {
                    Ac(v.getFullYear(), !0);
                }),
            b.views.fullWeek.enabled &&
                t(S, "ib-hamburger-side", b.viewFullWeekTooltipText, function () {
                    var a = ng(v) ? null : v;
                    zc(a, !0);
                }),
            b.views.fullDay.enabled &&
                t(S, "ib-hourglass", b.viewFullDayTooltipText, function () {
                    var a = ng(v) ? null : v;
                    Ua(a, !0);
                }));
        a = h("div", "title-container");
        S.appendChild(a);
        $l(a);
        am(a);
    }
    function rb() {
        r ||
            null === mb ||
            (0 < b.views.fullMonth.pinUpViewImageUrls.length
                ? ((mb.style.backgroundImage = "url('" + b.views.fullMonth.pinUpViewImageUrls[Qc] + "')"),
                  Qc++,
                  Qc === b.views.fullMonth.pinUpViewImageUrls.length && (Qc = 0))
                : 0 < b.views.fullMonth.pinUpViewImageCssClasses.length &&
                  ((mb.className = "pin-up" + n.space + b.views.fullMonth.pinUpViewImageCssClasses[Qc]),
                  Qc++,
                  Qc === b.views.fullMonth.pinUpViewImageCssClasses.length && (Qc = 0)),
            Xj());
    }
    function Xj() {
        if (!r && null !== mb && !x(b.events.onFullMonthPinUpRender, mb, v)) {
            var a = new Date();
            if (null === gi || !U(gi, a)) {
                mb.innerHTML = n.empty;
                gi = a;
                var c = h("div", "pin-up-text"),
                    d = h("div", "day"),
                    e = h("div", "month"),
                    f = h("div", "year");
                c.onclick = function () {
                    P(null, a);
                };
                Ra(c, b.addEventTooltipText);
                mb.appendChild(c);
                c.appendChild(d);
                c.appendChild(e);
                c.appendChild(f);
                aa(d, a.getDate());
                if (b.showDayNumberOrdinals && ((c = Kg(a.getDate())), p(c))) {
                    var k = h("sup");
                    k.innerText = c;
                    d.appendChild(k);
                }
                w(e, b.monthNames[a.getMonth()]);
                w(f, a.getFullYear());
            }
        }
    }
    function dj(a, c) {
        var d = p(a);
        a = d ? a : Ib;
        c = p(c) ? c : "calendar-day-";
        if (!d && 0 < pf.length) {
            for (var e = pf.length, f = 0; f < e; f++) a.removeChild(pf[f]);
            pf = [];
        }
        for (e = 0; 6 > e; e++) {
            f = h("div", "row-cells days");
            a.appendChild(f);
            d || pf.push(f);
            for (var k = 0; 7 > k; k++) {
                var m = k;
                if (b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday)
                    (m = b.startOfWeekDay + k), 7 <= m && (m -= 7);
                if (b.visibleDays.indexOf(m) > B.notFound) {
                    m = 7 * e + (k + 1);
                    var g = h("div", Fg(b.views.fullMonth.allowEventScrolling));
                    g.id = c + m;
                    f.appendChild(g);
                    b.views.fullMonth.allowEventScrolling && (g.className += " scrollY");
                    0 < b.views.fullMonth.minimumDayHeight &&
                        (g.style.height = b.views.fullMonth.minimumDayHeight + "px");
                }
            }
            b.reverseOrderDaysOfWeek && ld(f);
        }
    }
    function Fg(a) {
        a = p(a) ? a : !1;
        var c = "cell cell-" + b.visibleDays.length;
        a && (c += " custom-scroll-bars");
        return c;
    }
    function $l(a) {
        oe = h("span", "year-dropdown-button");
        oe.ondblclick = C;
        oe.onclick = bm;
        a.appendChild(oe);
        Oh = h("span");
        oe.appendChild(Oh);
        b.views.fullMonth.showYearDropDownButtonIcon &&
            ((Lg = h("span", "ib-arrow-down-full-medium")), oe.appendChild(Lg));
    }
    function am(a) {
        var c = new Date(b.minimumYear, 1, 1),
            d = null;
        Tb = h(
            "div",
            b.views.fullMonth.showMonthButtonsInYearDropDownMenu ? "years-drop-down" : "years-drop-down-no-months"
        );
        a.appendChild(Tb);
        if (b.views.fullMonth.showMonthButtonsInYearDropDownMenu)
            for (a = 0; 12 > a; a++) 0 === a % 3 && ((d = h("div", "months")), Tb.appendChild(d)), cm(d, a);
        qf = h("div", "contents custom-scroll-bars");
        for (Tb.appendChild(qf); !(dm(c.getFullYear()), wd(c), c.getFullYear() > b.maximumYear); );
    }
    function cm(a, c) {
        var d = h("div", "month-name"),
            e = b.monthNamesAbbreviated[c];
        d.onclick = function (a) {
            C(a);
            v.getMonth() !== c && (v.setMonth(c), x(b.events.onSetDate, v), F(v), sg(), rb());
        };
        w(d, e);
        a.appendChild(d);
        Rc[c.toString()] = d;
    }
    function dm(a) {
        var c = h("div");
        c.className = "year";
        c.innerText = a.toString();
        c.id = "year-selected-" + a.toString();
        qf.appendChild(c);
        c.ondblclick = C;
        c.onclick = function (c) {
            C(c);
            v.getFullYear() !== a && (v.setFullYear(a), x(b.events.onSetDate, v), F(v), sg(), rb());
        };
    }
    function em() {
        var a = Tb.getElementsByClassName("year"),
            b = a.length;
        if (1 <= b) for (var d = 0; d < b; d++) "year" !== a[d].className && (a[d].className = "year");
        a = Aa("year-selected-" + v.getFullYear());
        null !== a && (a.className += " year-selected");
        if (!r) {
            var e = [];
            xb(function (a) {
                a = a.from.getFullYear();
                if (e.indexOf(a) === B.notFound) {
                    var b = Aa("year-selected-" + a);
                    null !== b &&
                        b.className.indexOf(" year-selected") === B.notFound &&
                        (b.className += " year-has-events");
                    e.push(a);
                }
            });
        }
        return a;
    }
    function bm(a) {
        C(a);
        if ("block" !== Tb.style.display) {
            Ga();
            Tb.style.display = "block";
            b.views.fullMonth.showYearDropDownButtonIcon && (Lg.className = "ib-arrow-up-full-medium");
            for (var c in Rc) Rc.hasOwnProperty(c.toString()) && (Rc[c.toString()].className = "month-name");
            a = v.getMonth().toString();
            c = new Date();
            v.getFullYear() === c.getFullYear() &&
                ((c = c.getMonth().toString()), Rc.hasOwnProperty(c) && (Rc[c].className = "month-name-current-month"));
            Rc.hasOwnProperty(a) && (Rc[a].className = "month-name-selected");
            a = em();
            qf.scrollTop = null !== a ? a.offsetTop - qf.offsetTop - b.spacing : 0;
        } else sg();
    }
    function sg() {
        var a = !1;
        Mg() &&
            (b.views.fullMonth.showYearDropDownButtonIcon && (Lg.className = "ib-arrow-down-full-medium"),
            (Tb.style.display = "none"),
            (a = !0));
        return a;
    }
    function Mg() {
        return null !== Tb && "block" === Tb.style.display;
    }
    function Mh(a, c, d, e, f, k, m) {
        c = Aa("calendar-day-" + c);
        if (null !== c) {
            var g = new Date(),
                q = a === g.getDate() && e === g.getFullYear() && d === g.getMonth(),
                l = h("span"),
                t = new Date(e, d, a);
            f = f ? " day-muted" : n.empty;
            g = !0;
            k = p(k) ? k : !1;
            c.innerHTML = n.empty;
            c.className = c.className
                .replace(" cell-today", n.empty)
                .replace(" cell-selected", n.empty)
                .replace(" cell-no-click", n.empty);
            r && q && (c.className += " cell-today");
            r && !q && null !== Mc && U(t, Mc) && (c.className += " cell-selected");
            r
                ? ((g = nj(t)), g || ((c.className += " cell-no-click"), (l.className = "no-click")))
                : (l.className = n.empty);
            l.className += f;
            l.className += q && !r ? " today" : n.empty;
            l.innerText = b.views.fullMonth.padDayNumbers ? J(a) : a;
            1 !== a || r || (l.className += " first-day");
            0 <= b.weekendDays.indexOf(t.getDay()) &&
                c.className.indexOf("weekend-day") === B.notFound &&
                (c.className += " weekend-day");
            0 <= b.workingDays.indexOf(X(t)) &&
                c.className.indexOf("working-day") === B.notFound &&
                (c.className += " working-day");
            c.oncontextmenu = function (a) {
                Ng(a, t);
            };
            if (b.showDayNumberOrdinals && ((q = Kg(a)), p(q))) {
                var u = h("sup");
                u.innerText = q;
                l.appendChild(u);
            }
            c.appendChild(l);
            c.appendChild(h("span", "blank"));
            b.views.fullDay.enabled &&
                ((l = h("div", "ib-arrow-expand-left-right-icon")),
                c.appendChild(l),
                Ra(l, b.expandDayTooltipText),
                (l.onclick = function () {
                    Ua(t, !0);
                }));
            k &&
                b.views.fullMonth.showPreviousNextMonthNames &&
                ((k = b.monthNames[d]),
                b.views.fullMonth.showPreviousNextYears &&
                    ((m === Re.previousMonthDay && 11 === d) || (m === Re.nextMonthDay && 0 === d)) &&
                    (k += n.space + e.toString()),
                aa(
                    c,
                    k,
                    "month-name" + f,
                    function () {
                        1 === a ? cf() : bf();
                    },
                    !0,
                    !0
                ));
            fm(t, f, c);
            b.manualEditingEnabled &&
                ((c.ondblclick = function () {
                    if (b.useTemplateWhenAddingNewEvent) {
                        var a = td(t, t);
                        P(a);
                        ud();
                    } else P(null, t);
                }),
                Gg(c, e, d, a));
            r &&
                (c.onclick = g
                    ? function (a) {
                          C(a);
                          Mg()
                              ? Ga()
                              : ((a = new Date(t)),
                                a.setHours(0, 0, 0, 0),
                                qd(),
                                Uh(t),
                                x(b.events.onDatePickerDateChanged, a),
                                (Mc = a));
                      }
                    : C);
            b.views.fullMonth.useOnlyDotEvents && c.appendChild(h("div", "dots-separator"));
        }
    }
    function Ha() {
        for (var a = 0; 6 > a; a++)
            for (var c = 0; 7 > c; c++) {
                var d = Aa("calendar-day-" + (7 * a + (c + 1)));
                null !== d && (ai(d, "event"), ai(d, "plus-x-events"));
            }
        Rh();
        pe = !1;
        ed = [];
        Cd = {};
        a = vb(Bd());
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d],
                f = e;
            hi(f.from, f);
            if (
                f.from.getDate() !== f.to.getDate() ||
                f.from.getMonth() !== f.to.getMonth() ||
                f.from.getFullYear() !== f.to.getFullYear()
            ) {
                var k = Pc(f.from, f.to);
                if (0 < k)
                    for (var m = new Date(f.from), h = 0; h < k; h++)
                        Ya(m), ii(vd(m), f.id), null !== ji(m) && hi(m, f);
            }
            ie(e) && ed.push(e);
            f = H(e.repeatEvery);
            f > y.never &&
                (f === y.everyDay
                    ? pc(e, Ya, 1)
                    : f === y.everyWeek
                      ? pc(e, Rb, 1)
                      : f === y.every2Weeks
                        ? pc(e, Rb, 2)
                        : f === y.everyMonth
                          ? pc(e, ke, 1)
                          : f === y.everyYear
                            ? pc(e, wd, 1)
                            : f === y.custom &&
                              ((f = H(e.repeatEveryCustomType)),
                              (k = H(e.repeatEveryCustomValue)),
                              0 < k &&
                                  (f === M.daily
                                      ? pc(e, Ya, k)
                                      : f === M.weekly
                                        ? pc(e, Rb, k)
                                        : f === M.monthly
                                          ? pc(e, ke, k)
                                          : f === M.yearly && pc(e, wd, k))));
        }
        Yj !== pe && ((Yj = pe), x(b.events.onBusyStateChange, pe));
        null !== Ig && Va(Ig, 0 < ed.length);
        Sh();
    }
    function pc(a, c, d) {
        for (var e = new Date(a.from), f = Oc(a.repeatEveryExcludeDays), k = new Date(b.maximumYear, 11, 31); e < k; ) {
            c(e, d);
            var m = !(!p(a.repeatEnds) || $e(e, a.repeatEnds));
            f.indexOf(e.getDay()) !== B.notFound || m || (ii(vd(e), a.id), e < Nh && null !== ji(e) && hi(e, a));
        }
    }
    function hi(a, c) {
        var d = ji(a),
            e = Oc(c.seriesIgnoreDates),
            f = vd(a),
            k = new Date(a);
        if (ie(c) && e.indexOf(f) === B.notFound && (ii(f, c.id), null !== d && (gm(a, c), !r)))
            if (
                d.getElementsByClassName("event").length < b.views.fullMonth.maximumEventsPerDayDisplay ||
                0 >= b.views.fullMonth.maximumEventsPerDayDisplay ||
                b.views.fullMonth.useOnlyDotEvents
            ) {
                e = h("div", "event");
                e.setAttribute("event-type", H(c.type));
                e.setAttribute("event-id", c.id);
                e.setAttribute("event-is-all-day", c.isAllDay);
                if (b.views.fullMonth.useOnlyDotEvents) e.className += " event-circle";
                else if (!x(b.events.onFullMonthEventRender, e, c)) {
                    var m = c.title,
                        g = H(c.repeatEvery);
                    b.views.fullMonth.showTimesInEvents &&
                        !c.isAllDay &&
                        c.from.getDate() === c.to.getDate() &&
                        (m = de(c.from, c.to) + ": " + m);
                    g > y.never &&
                        b.showReoccurringEventIcons &&
                        ((g = h("div", "ib-refresh-small ib-no-hover ib-no-active")),
                        (g.style.borderColor = e.style.color),
                        e.appendChild(g));
                    e.innerHTML += kc(m);
                }
                d.appendChild(e);
                di(e, c, a, d);
                hf(e, c);
                be(e, c, We(c, a), b.views.fullMonth.applyCssToEventsNotInCurrentMonth);
                ce(e, c, k);
                U(c.from, a) && (e.id = "day-" + c.id);
                e.onmousemove = function (a) {
                    null !== Dd && Dd.id === c.id ? C(a) : ki(a, c);
                };
                e.oncontextmenu = function (a) {
                    gf(a, c, f);
                };
                e.addEventListener("click", function (a) {
                    jf(a, c);
                });
            } else hm(d, a);
    }
    function hm(a, c) {
        var d = a.getElementsByClassName("plus-x-events");
        d = 0 < d.length ? d[0] : null;
        if (null === d) {
            var e = new Date(c);
            d = h("div", "plus-x-events");
            d.setAttribute("events", "1");
            d.ondblclick = C;
            a.appendChild(d);
            if (
                (b.views.fullMonth.applyCssToEventsNotInCurrentMonth && c.getMonth() !== v.getMonth()) ||
                c.getFullYear() !== v.getFullYear()
            )
                d.className += " day-muted";
            w(d, "+1 " + b.moreText);
            b.views.fullDay.enabled
                ? (d.onclick = function () {
                      Ua(e, !0);
                  })
                : (d.className += n.space + "prevent-pointer-events");
        } else
            (a = parseInt(d.getAttribute("events")) + 1),
                d.setAttribute("events", a.toString()),
                w(d, "+" + a + n.space + b.moreText);
    }
    function ji(a) {
        var b = new Date(v.getFullYear(), v.getMonth(), 1);
        var d = new Date(v);
        var e = new Date(v),
            f = null,
            k = 0;
        b = X(b);
        d.setMonth(d.getMonth() + 1);
        e.setMonth(e.getMonth() - 1);
        a.getMonth() === d.getMonth() && a.getFullYear() === d.getFullYear()
            ? ((d = b + ad(v.getFullYear(), v.getMonth())), (k = Pe(a.getDate() + d)))
            : a.getMonth() === e.getMonth() && a.getFullYear() === e.getFullYear()
              ? (k = Pe(b - Pc(a, v) + 1))
              : a.getMonth() === v.getMonth() &&
                a.getFullYear() === v.getFullYear() &&
                ((d = b), (k = Pe(a.getDate() + d)));
        0 < k && (f = Aa("calendar-day-" + k));
        return f;
    }
    function ii(a, b) {
        Cd.hasOwnProperty(a) || (Cd[a] = []);
        Cd[a].indexOf(b) === B.notFound && Cd[a].push(b);
    }
    function vl() {
        if (!r && b.views.fullYear.enabled) {
            var a = null !== Da;
            a && (Da.innerHTML = n.empty);
            a || ((Da = h("div", "full-year-view")), (Da.id = ec()), z.appendChild(Da));
            a = h("div", "title-bar");
            Da.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Wa);
            li = h("div", "title");
            a.appendChild(li);
            !r &&
                md() &&
                (t(a, "ib-hamburger", b.showMenuTooltipText, Kc), a.appendChild(h("div", "left-divider-line")));
            t(a, "ib-arrow-left-full", b.previousYearTooltipText, wj);
            b.views.fullYear.showExtraTitleBarButtons &&
                (t(a, "ib-pin", b.currentYearTooltipText, Ej),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        ee();
                    }),
                a.appendChild(h("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    La(!0, !0);
                }));
            t(a, "ib-close", b.closeTooltipText, function () {
                xd(Da);
            });
            a.appendChild(h("div", "right-divider-line"));
            b.views.fullYear.showExtraTitleBarButtons &&
                b.fullScreenModeEnabled &&
                ((mi = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Wa)),
                a.appendChild(h("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextYearTooltipText, Aj);
            b.views.fullYear.showExtraTitleBarButtons &&
                b.manualEditingEnabled &&
                t(a, "ib-plus", b.addEventTooltipText, function () {
                    P(null, new Date(sa, 0, 1));
                });
            qe = h("div", "contents custom-scroll-bars");
            Da.appendChild(qe);
        }
    }
    function im(a) {
        var c = new Date(sa, a, 1),
            d = function () {
                U(v, c) || (F(c), rb());
                for (; 0 < ob.length; ) Gj(!1);
                rf();
            },
            e = h("div", "year-month");
        qe.appendChild(e);
        var f = h("div", "title-bar-container");
        e.appendChild(f);
        var k = h("div", "title-bar");
        k.ondblclick = d;
        w(k, b.monthNames[a]);
        f.appendChild(k);
        t(k, "ib-arrow-expand-left-right", b.expandMonthTooltipText, d);
        b.manualEditingEnabled &&
            (k.appendChild(h("div", "right-divider-line")),
            t(k, "ib-plus", b.addEventTooltipText, function () {
                P(null, c);
            }));
        d = h("div", "row-cells header-days");
        e.appendChild(d);
        Lh(d);
        d = a + 1 + "-month-";
        f = new Date(sa, a, 1);
        f = Pe(0 === f.getDay() ? 7 : f.getDay());
        dj(e, d);
        1 < f && jm(f, d, a);
        f = km(f, d, a);
        k = f[0];
        lm(f[1], d, a);
        k && (Og = e.offsetTop);
    }
    function jm(a, b, d) {
        d = new Date(sa, d, 1);
        d.setMonth(d.getMonth() - 1);
        var c = ad(d.getFullYear(), d.getMonth());
        for (--a; 0 < a; ) mm(b, a, d, c), a--, c--;
    }
    function mm(a, c, d, e) {
        a = Aa(a + c);
        if (null !== a) {
            var f = new Date(d.getFullYear(), d.getMonth(), e);
            a.className += " cell-muted";
            b.views.fullDay.enabled &&
                (a.onclick = function () {
                    Ua(f, !0);
                });
            a.oncontextmenu = function (a) {
                Ng(a, f);
            };
            ni(a, f);
            Nb(a, f, null, null, b.views.fullYear.padDayNumbers);
        }
    }
    function km(a, b, d) {
        for (var c = 0, f = ad(sa, d), k = !1, m = 0; m < f; m++) (c = a + m), nm(b, d, m, c) && (k = !0);
        return [k, c];
    }
    function nm(a, c, d, e) {
        a = Aa(a + e);
        e = !1;
        if (null !== a) {
            var f = new Date(sa, c, d + 1);
            b.views.fullDay.enabled &&
                (a.onclick = function () {
                    Ua(f, !0);
                });
            a.oncontextmenu = function (a) {
                Ng(a, f);
            };
            e = ni(a, f, !0);
            Nb(a, f, null, null, b.views.fullYear.padDayNumbers);
        }
        return e;
    }
    function lm(a, b, d) {
        if (42 > a) {
            d = new Date(sa, d, 1);
            var c = 1;
            d.setMonth(d.getMonth() + 1);
            for (a += 1; 43 > a; a++) om(b, d, a, c), c++;
        }
    }
    function om(a, c, d, e) {
        a = Aa(a + d);
        if (null !== a) {
            var f = new Date(c.getFullYear(), c.getMonth(), e);
            a.className += " cell-muted";
            b.views.fullDay.enabled &&
                (a.onclick = function () {
                    Ua(f, !0);
                });
            a.oncontextmenu = function (a) {
                Ng(a, f);
            };
            ni(a, f);
            Nb(a, f, null, null, b.views.fullYear.padDayNumbers);
        }
    }
    function ni(a, c, d) {
        var e = vd(c),
            f = !1;
        d = p(d) ? d : !1;
        0 <= b.weekendDays.indexOf(c.getDay()) && (a.className += " weekend-day");
        0 <= b.workingDays.indexOf(X(c)) && (a.className += " working-day");
        if (Cd.hasOwnProperty(e)) {
            a.className += " has-events";
            e = Cd[e].length;
            var k = h("div", "events-count");
            k.innerText = e.toString();
            a.appendChild(k);
        }
        d && dc(c) && ((a.className += " cell-today"), (f = !0));
        return f;
    }
    function Ac(a, c) {
        c = p(c) ? c : !1;
        sa = p(a) ? a : v.getFullYear();
        Og = 0;
        li.innerText = sa;
        var d = (a = c) ? 0 : qe.scrollTop;
        qe.innerHTML = n.empty;
        for (var e = 0; 12 > e; e++) im(e);
        qe.scrollTop = a ? (0 < Og ? Og - 4 * b.spacing : 0) : d;
        kf(Da, c);
    }
    function wj() {
        sa > b.minimumYear && (--sa, Ac(sa, !0));
    }
    function Aj() {
        sa < b.maximumYear && ((sa += 1), Ac(sa, !0));
    }
    function Ej() {
        sa = new Date().getFullYear();
        Ac(sa, !0);
    }
    function wl() {
        if (!r && b.views.allEvents.enabled) {
            var a = null !== ra;
            a && (ra.innerHTML = n.empty);
            a || ((ra = h("div", "all-events-view")), (ra.id = ec()), z.appendChild(ra));
            a = h("div", "title-bar");
            ra.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Wa);
            var c = h("div", "title");
            w(c, b.allEventsText);
            a.appendChild(c);
            t(a, "ib-close", b.closeTooltipText, function () {
                Lb = [];
                xd(ra);
            });
            b.views.allEvents.showExtraTitleBarButtons &&
                (a.appendChild(h("div", "right-divider-line")),
                b.fullScreenModeEnabled &&
                    ((oi = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Wa)),
                    a.appendChild(h("div", "right-divider-line-full-screen-mode"))),
                b.manualEditingEnabled &&
                    t(a, "ib-plus", b.addEventTooltipText, function () {
                        P(null);
                    }));
            !r && md() && t(a, "ib-hamburger", b.showMenuTooltipText, Kc);
            b.views.allEvents.showExtraTitleBarButtons &&
                (a.appendChild(h("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    La(!0, !0);
                }),
                u.enabled && (Zj = t(a, "ib-search", b.searchTooltipText, fe)));
            Ed = h("div", "contents custom-scroll-bars");
            ra.appendChild(Ed);
        }
    }
    function pm(a) {
        if (ie(a)) {
            var c = qm(a.from),
                d = h("div", "event");
            c.appendChild(d);
            d.oncontextmenu = function (b) {
                gf(b, a);
            };
            di(d, a, a.from, c);
            hf(d, a);
            be(d, a);
            ce(d, a);
            d.id = "month-" + a.id;
            d.setAttribute("event-type", H(a.type));
            d.setAttribute("event-id", a.id);
            d.setAttribute("event-is-all-day", a.isAllDay);
            if (!x(b.events.onAllEventsEventRender, d, a)) {
                c = h("div", "title");
                if (H(a.repeatEvery) > y.never && b.showReoccurringEventIcons) {
                    var e = h("div", "ib-refresh-medium ib-no-hover ib-no-active");
                    e.style.borderColor = d.style.color;
                    c.appendChild(e);
                }
                c.innerHTML += kc(a.title);
                d.appendChild(c);
                c = h("div", "date");
                d.appendChild(c);
                e = h("div", "duration");
                d.appendChild(e);
                a.from.getDate() === a.to.getDate()
                    ? a.isAllDay
                        ? Nb(c, a.from, null, " - " + b.allDayText)
                        : (Nb(c, a.from, null, " - " + de(a.from, a.to)), w(e, Ob(a.from, a.to)))
                    : (Xe(c, a.from, a.to), w(e, Ob(a.from, a.to)));
                e.innerHTML === n.empty && d.removeChild(e);
                b.views.allEvents.showEventUrls &&
                    Ca(a.url) &&
                    ((c = h("div", "url-text")),
                    w(c, Cg(a.url)),
                    d.appendChild(c),
                    (c.onclick = function (b) {
                        C(b);
                        je(a.url);
                    }));
                Ba(a.repeatEvery) &&
                    a.repeatEvery > y.never &&
                    ((c = h("div", "repeats")),
                    w(c, b.repeatsText.replace(":", n.empty) + n.space + pd(a.repeatEvery)),
                    d.appendChild(c));
                Ca(a.location) && ((c = h("div", "location")), w(c, a.location), d.appendChild(c));
                Ca(a.description) && ((c = h("div", "description")), w(c, a.description), d.appendChild(c));
            }
            d.addEventListener("click", function (b) {
                jf(b, a);
            });
            Lb.push(a);
        }
    }
    function qm(a) {
        var c = "month-" + a.getMonth() + "-" + a.getFullYear(),
            d = Aa(c);
        if (null === d) {
            var e = new Date(a),
                f = function () {
                    Lb = [];
                    xd(ra);
                    F(e);
                    rb();
                },
                k = rm(a);
            null !== k && Ed.appendChild(k);
            k = h("div", "month");
            Ed.appendChild(k);
            var m = h("div", "header");
            w(m, b.monthNames[a.getMonth()] + n.space + a.getFullYear());
            m.ondblclick = f;
            k.appendChild(m);
            t(m, "ib-arrow-expand-left-right", b.expandMonthTooltipText, f);
            m.appendChild(h("div", "right-divider-line"));
            if (b.manualEditingEnabled) {
                var g = new Date(a.getFullYear(), a.getMonth(), 1);
                t(m, "ib-plus", b.addEventTooltipText, function () {
                    if (b.useTemplateWhenAddingNewEvent) {
                        var a = td(g, g);
                        P(a);
                        ud();
                    } else P(null, g);
                });
            }
            b.manualEditingEnabled &&
                t(m, "ib-close", b.removeEventsTooltipText, function () {
                    ak(e, Wj);
                });
            f = function () {
                var a = p,
                    e = d;
                "none" !== e.style.display
                    ? ((e.style.display = "none"),
                      (a.className = "ib-square-hollow"),
                      (O.visibleAllEventsMonths[c] = !1),
                      Ra(a, b.restoreTooltipText))
                    : ((e.style.display = "block"),
                      (a.className = "ib-minus"),
                      (O.visibleAllEventsMonths[c] = !0),
                      Ra(a, b.minimizedTooltipText));
            };
            var p = t(m, "ib-minus", b.minimizedTooltipText, f);
            vg.push(f);
            d = h("div", "events");
            d.id = c;
            k.appendChild(d);
            O.visibleAllEventsMonths.hasOwnProperty(c) &&
                !O.visibleAllEventsMonths[c] &&
                ((d.style.display = "none"), (p.className = "ib-square-hollow"), Ra(p, b.restoreTooltipText));
            Gg(d, a.getFullYear(), a.getMonth(), a.getDate());
        }
        return d;
    }
    function rm(a) {
        var c = null;
        if (pi.indexOf(a.getFullYear()) === B.notFound) {
            pi.push(a.getFullYear());
            c = h("div", "year-header");
            var d = h("span", "header-text");
            w(d, a.getFullYear() + ":");
            c.appendChild(d);
            b.views.fullYear.enabled
                ? (d.onclick = function () {
                      Ac(a.getFullYear(), !0);
                  })
                : (d.className += n.space + "prevent-pointer-events");
            c.appendChild(h("div", "line"));
        }
        return c;
    }
    function Qh(a) {
        a = p(a) ? a : !1;
        kf(ra, a);
        Ed.innerHTML = n.empty;
        Lb = [];
        vg = [];
        pi = [];
        a && (Ed.scrollTop = 0);
        a = vb(Bd());
        for (var b = a.length, d = 0; d < b; d++) pm(a[d]);
        Va(Zj, 0 < Lb.length);
        0 === Lb.length &&
            sm(Ed, function () {
                P(null);
            });
    }
    function xl() {
        if (!r && b.views.timeline.enabled) {
            var a = null !== ia;
            a && (ia.innerHTML = n.empty);
            null === Za && (Za = b.views.timeline.defaultAxis);
            a || ((ia = h("div", "timeline-view")), (ia.id = ec()), z.appendChild(ia));
            a = h("div", "title-bar");
            ia.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Wa);
            Pg = h("div", "title");
            a.appendChild(Pg);
            t(a, "ib-close", b.closeTooltipText, function () {
                Bc = [];
                xd(ia);
            });
            a.appendChild(h("div", "right-divider-line"));
            b.views.timeline.showExtraTitleBarButtons &&
                b.fullScreenModeEnabled &&
                ((qi = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Wa)),
                a.appendChild(h("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextYearTooltipText, Bj);
            b.views.timeline.showExtraTitleBarButtons &&
                b.manualEditingEnabled &&
                t(a, "ib-plus", b.addEventTooltipText, function () {
                    P(null, new Date(ba));
                });
            b.views.fullDay.enabled &&
                (a.appendChild(h("div", "right-divider-line-views")),
                t(a, "ib-hourglass", b.viewFullDayTooltipText, function () {
                    Ua(ba, !0);
                }));
            !r &&
                md() &&
                (t(a, "ib-hamburger", b.showMenuTooltipText, Kc), a.appendChild(h("div", "left-divider-line")));
            t(a, "ib-arrow-left-full", b.previousYearTooltipText, xj);
            b.views.timeline.showExtraTitleBarButtons &&
                ((bk = t(a, "ib-pin", b.currentYearTooltipText, Fj)),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        ee();
                    }),
                a.appendChild(h("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    La(!0, !0);
                }),
                u.enabled && (ck = t(a, "ib-search", b.searchTooltipText, fe)));
            Ja = h("div", "contents custom-scroll-bars");
            Ja.addEventListener("scroll", ic);
            ia.appendChild(Ja);
        }
    }
    function tm(a, c) {
        var d = h("div", "event"),
            e = vd(ba),
            f = new Date(ba);
        d.id = "timeline-day-" + c.id;
        d.setAttribute("event-type", H(c.type));
        d.setAttribute("event-id", c.id);
        d.setAttribute("event-is-all-day", c.isAllDay);
        a.appendChild(d);
        if (!x(b.events.onTimelineEventRender, d, c)) {
            if (H(c.repeatEvery) > y.never && b.showReoccurringEventIcons) {
                var k = h("div", "ib-refresh-medium ib-no-hover ib-no-active");
                k.style.borderColor = d.style.color;
                d.appendChild(k);
            }
            d.innerHTML += kc(c.title);
        }
        d.oncontextmenu = function (a) {
            gf(a, c, e);
        };
        d.addEventListener("click", function (a) {
            jf(a, c);
        });
        d.onmousemove = function (a) {
            null !== Dd && Dd.id === c.id ? C(a) : ki(a, c);
        };
        ce(d, c, f);
        hf(d, c);
        be(d, c, We(c, ba));
        d = um(a, ba, d, c);
        sf = null === sf ? d : la.min(sf, d);
        tf = null === tf ? a.offsetTop : la.min(tf, a.offsetTop);
    }
    function Jb(a, c) {
        a = p(a) ? new Date(a) : new Date();
        c = p(c) ? c : !1;
        var d = new Date(),
            e = X(d),
            f = b.visibleDays.indexOf(e) > B.notFound,
            k = [];
        e = Ja.scrollLeft;
        var m = Ja.scrollTop;
        Pg.innerHTML = n.empty;
        Ja.innerHTML = n.empty;
        Bc = [];
        ba = a;
        Qg = {};
        tf = sf = null;
        uf = [];
        U(a, d) && !f && dk();
        Th(ba, k);
        Va(bk, f);
        Fd = h("div", "timeline-header");
        Ja.appendChild(Fd);
        a = h("div", "timeline-header-item");
        d = n.empty;
        "group" === Za
            ? (d = b.groupText)
            : "organizerName" === Za
              ? (d = b.organizerNameText)
              : "location" === Za
                ? (d = b.locationText)
                : "organizerEmailAddress" === Za
                  ? (d = b.organizerEmailAddressText)
                  : "url" === Za
                    ? (d = b.urlText)
                    : "title" === Za
                      ? (d = b.titleText)
                      : "description" === Za && (d = b.descriptionText);
        a.innerHTML = d;
        Fd.appendChild(a);
        t(a, "ib-arrow-left-full", b.previousPropertyTooltipText, vm);
        t(a, "ib-arrow-right-full", b.nextPropertyTooltipText, wm);
        a = b.views.timeline.minutesBetweenSections;
        d = new Date();
        f = new Date();
        var g = 0,
            q = 0;
        f.setHours(0, 0, 0, 0);
        for (0 !== 60 % a && (a = 30); U(f, d); ) {
            var l = h("div", "timeline-header-item");
            l.innerText = yb(new Date(f));
            Fd.appendChild(l);
            f = fb(f, a);
            l = h("div", "timeline-header-item");
            l.innerText = yb(new Date(f));
            Fd.appendChild(l);
            f = fb(f, a);
            l = h("div", "timeline-column");
            l.style.left = g + "px";
            Ja.appendChild(l);
            0 === q && ((q = bd(l, "border-right-width")), (q = l.clientWidth + q));
            g += q;
            var r = h("div", "timeline-column");
            r.style.left = g + "px";
            Ja.appendChild(r);
            g += q;
            uf.push(l);
            uf.push(r);
        }
        kf(ia, c);
        k = vb(k);
        a = k.length;
        d = 0;
        if (0 < a)
            for (f = 0; f < a; f++) {
                g = k[f];
                l = G(g[Za], b.noneText);
                q = l.toLowerCase();
                g.isAllDay && ((l = b.allDayText + ": " + l), (q = q + "-" + g.id));
                if (Qg.hasOwnProperty(q)) l = Qg[q];
                else {
                    r = h("div", "timeline-row");
                    Ja.appendChild(r);
                    var u = h("div", "timeline-row-item" + (0 !== d % 2 ? " timeline-row-item-odd" : n.empty));
                    w(u, l);
                    r.appendChild(u);
                    l = h("div", "timeline-row-items");
                    r.appendChild(l);
                    r = b.views.timeline.minutesBetweenSections;
                    u = new Date();
                    var v = new Date();
                    v.setHours(0, 0, 0, 0);
                    for (0 !== 60 % r && (r = 30); U(v, u); ) {
                        var y = h("div", "timeline-row-item-spacing");
                        l.appendChild(y);
                        v = fb(v, r);
                        y = h("div", "timeline-row-item-spacing");
                        l.appendChild(y);
                        v = fb(v, r);
                    }
                    Qg[q] = l;
                    d++;
                }
                tm(l, g);
                Bc.push(g);
            }
        k = uf.length;
        a = Ja.getElementsByClassName("timeline-row");
        d = a.length;
        f = 0;
        0 < d &&
            ((f = bd(a[0], "border-bottom-width")),
            (g = bd(Fd, "border-bottom-width")),
            (f = d * (a[0].offsetHeight - f) + (Fd.offsetHeight - g)));
        for (a = 0; a < k; a++)
            (d = uf[a]), 0 === f && (f = Ja.scrollHeight - d.offsetTop), (d.style.height = f + "px");
        x(b.events.onTimelineTitleRender, L) || jc(Pg, ba, !1, !0, !0);
        c ? ((Ja.scrollLeft = sf), (Ja.scrollTop = tf)) : ((Ja.scrollLeft = e), (Ja.scrollTop = m));
        Va(ck, 0 < Bc.length);
    }
    function xj() {
        Eg(ba);
        if (7 > b.visibleDays.length)
            for (var a = X(ba); b.visibleDays.indexOf(a) === B.notFound; ) Eg(ba), (a = X(ba));
        Jb(ba, !0);
    }
    function Bj() {
        dk(!0);
    }
    function Fj() {
        ba = new Date();
        Jb(ba, !0);
    }
    function vm() {
        var a = re.indexOf(Za);
        a--;
        0 > a && (a = re.length - 1);
        Za = re[a];
        Jb(ba);
    }
    function wm() {
        var a = re.indexOf(Za);
        a++;
        a > re.length - 1 && (a = 0);
        Za = re[a];
        Jb(ba);
    }
    function dk(a) {
        a = p(a) ? a : !1;
        Ya(ba);
        if (7 > b.visibleDays.length)
            for (var c = X(ba); b.visibleDays.indexOf(c) === B.notFound; ) Ya(ba), (c = X(ba));
        a && Jb(ba, !0);
    }
    function xa(a, b, d, e, f) {
        f = p(f) ? f : !1;
        var c = h("div", "item");
        a.appendChild(c);
        c.appendChild(h("div", b));
        a = h("div", "menu-text");
        w(a, d);
        c.appendChild(a);
        f && (a.className += " bold");
        c.onclick = function () {
            e();
        };
        return c;
    }
    function $a(a) {
        var b = h("div", "separator");
        a.appendChild(b);
        return b;
    }
    function rg(a) {
        var b = !1;
        se(a) && ((a.style.display = "none"), (b = !0));
        return b;
    }
    function se(a) {
        return null !== a && "block" === a.style.display;
    }
    function ek() {
        return se(Ia) || se(Y) || se(Oa) || se(nb) || se(zb);
    }
    function Cl() {
        null !== Ia && (gb(E.body, Ia), (Rg = ri = null));
        Ia = h("div", "calendar-context-menu");
        ya.push(Ia);
        E.body.appendChild(Ia);
        b.manualEditingEnabled &&
            xa(
                Ia,
                "ib-plus-icon",
                b.addEventTitle + "...",
                function () {
                    if (b.useTemplateWhenAddingNewEvent) {
                        var a = td(Gd, Gd);
                        P(a);
                        ud();
                    } else P(null, Gd);
                },
                !0
            );
        b.views.fullDay.enabled &&
            ($a(Ia),
            xa(Ia, "ib-arrow-expand-left-right-icon", b.expandDayTooltipText, function () {
                Ua(Gd, !0);
            }));
        b.views.fullWeek.enabled &&
            ($a(Ia),
            xa(Ia, "ib-hamburger-side-icon", b.viewFullWeekText, function () {
                zc(Gd, !0);
            }));
        b.manualEditingEnabled &&
            ((ri = $a(Ia)),
            (Rg = xa(Ia, "ib-circle-icon", b.pasteText, function () {
                Yh(Gd, Pb);
            })));
    }
    function Ng(a, b) {
        r ||
            null === Ia ||
            (fa(a) || mc(),
            (Gd = new Date(b)),
            null !== Rg && ((b = 0 < ja.length ? "block" : "none"), (ri.style.display = b), (Rg.style.display = b)),
            Ga(),
            C(a),
            vf(a, Ia));
    }
    function Dl() {
        null !== Y && (gb(E.body, Y), (Sg = Tg = wf = xf = yf = zf = Af = Bf = Cf = Df = Ef = Ff = Y = null));
        Y = h("div", "calendar-context-menu");
        ya.push(Y);
        E.body.appendChild(Y);
        b.manualEditingEnabled &&
            ((yf = xa(
                Y,
                "ib-edit-icon",
                b.editEventTitle + "...",
                function () {
                    P(ab, null, null, fk);
                },
                !0
            )),
            (Cf = $a(Y)),
            (Bf = xa(Y, "ib-pipe-icon", b.cutText, function () {
                ge();
                Pb = !0;
                gk(ab);
                ge(!1);
            })),
            (Af = $a(Y)),
            (zf = xa(Y, "ib-circle-hollow-icon", b.copyText, function () {
                ge();
                Pb = !1;
                gk(ab);
                ge(!1);
            })),
            (Ef = $a(Y)),
            (Df = xa(Y, "ib-equals-icon", b.duplicateText + "...", function () {
                P(ab);
                w(Sc, b.addEventTitle);
                Gf.value = b.addText;
                Ug.style.display = "none";
                ea = te(ea);
                t(Sc, "ib-close", b.closeTooltipText, Tc, !0);
            })),
            (xf = $a(Y)),
            (wf = xa(Y, "ib-close-icon", b.removeEventText, function () {
                Ub(E.body, Ka);
                var a = function () {
                        gb(E.body, Ka);
                    },
                    c = H(ab.repeatEvery) > y.never && null !== Hf;
                If(
                    b.confirmEventRemoveTitle,
                    b.confirmEventRemoveMessage,
                    function () {
                        a();
                        p(ab.id) &&
                            (Vg.checked || null === Hf
                                ? (q.removeEvent(ab.id, !0), Sa(b.eventRemovedText.replace("{0}", ab.title)))
                                : (pa(ab.seriesIgnoreDates)
                                      ? ab.seriesIgnoreDates.push(Hf)
                                      : (ab.seriesIgnoreDates = [Hf]),
                                  Ha()),
                            ma());
                    },
                    a,
                    c
                );
            })),
            (Ff = $a(Y)));
        si = xa(Y, "ib-arrow-top-right-icon", b.openUrlText, function () {
            je(ab.url);
        });
        b.exportEventsEnabled &&
            ((Tg = $a(Y)),
            (Sg = xa(Y, "ib-arrow-down-full-line-icon", b.exportEventsTooltipText + "...", function () {
                dd(Ea);
            })));
        b.shareEventsEnabled &&
            Jf.share &&
            ($a(Y),
            xa(Y, "ib-arrow-up-full-line-share-icon", b.shareText + "...", function () {
                var a = hk(0 < Ea.length ? Ea : [ab]),
                    c = { type: "text/plain" };
                a = new Blob([a], c);
                c = { files: [new File([a], ik("txt", b.shareStartFilename), c)] };
                Jf.canShare(c) && Jf.share(c);
            }));
    }
    function gf(a, c, d) {
        if (null !== Y) {
            var e = G(c.url),
                f = nf(c);
            fa(a) || mc();
            ab = c;
            fk = new Date(d);
            Hf = p(d) ? d : null;
            1 < Ea.length
                ? (b.manualEditingEnabled &&
                      ((yf.style.display = "none"),
                      (Cf.style.display = "none"),
                      (Bf.style.display = "block"),
                      (Af.style.display = "block"),
                      (zf.style.display = "block"),
                      (Ef.style.display = "none"),
                      (Df.style.display = "none"),
                      (xf.style.display = "none"),
                      (wf.style.display = "none")),
                  (Ff.style.display = "none"),
                  (si.style.display = "none"),
                  b.exportEventsEnabled && ((Tg.style.display = "block"), (Sg.style.display = "block")))
                : (f
                      ? b.manualEditingEnabled &&
                        ((yf.style.display = "block"),
                        (Cf.style.display = "none"),
                        (Bf.style.display = "none"),
                        (Af.style.display = "none"),
                        (zf.style.display = "none"),
                        (Ef.style.display = "none"),
                        (Df.style.display = "none"),
                        (xf.style.display = "block"),
                        (wf.style.display = "block"),
                        (Ff.style.display = e !== n.empty ? "block" : "none"))
                      : b.manualEditingEnabled &&
                        ((yf.style.display = "block"),
                        (Cf.style.display = "block"),
                        (Bf.style.display = "block"),
                        (Af.style.display = "block"),
                        (zf.style.display = "block"),
                        (Ef.style.display = "block"),
                        (Df.style.display = "block"),
                        (xf.style.display = "block"),
                        (wf.style.display = "block"),
                        (Ff.style.display = e !== n.empty ? "block" : "none")),
                  (si.style.display = e !== n.empty ? "block" : "none"),
                  b.exportEventsEnabled && ((Tg.style.display = "none"), (Sg.style.display = "none")));
            if (e !== n.empty || 1 < Y.childElementCount) Ga(), C(a), vf(a, Y);
        }
    }
    function El() {
        null !== Oa && (gb(E.body, Oa), (Wg = ti = ui = vi = Oa = null));
        b.manualEditingEnabled &&
            ((Oa = h("div", "calendar-context-menu")),
            ya.push(Oa),
            E.body.appendChild(Oa),
            xa(
                Oa,
                "ib-plus-icon",
                b.addEventTitle + "...",
                function () {
                    if (b.useTemplateWhenAddingNewEvent) {
                        var a = td(ue, ue, ef, ef);
                        P(a);
                        ud();
                    } else P(null, ue, ef);
                },
                !0
            ),
            (vi = $a(Oa)),
            (ui = xa(Oa, "ib-close-icon", b.removeEventsTooltipText, function () {
                ak(ue, U);
            })),
            (ti = $a(Oa)),
            (Wg = xa(Oa, "ib-circle-icon", b.pasteText, function () {
                Yh(ue, Pb);
            })));
    }
    function Jj(a, b, d) {
        null !== Oa &&
            (fa(a) || mc(),
            (ue = b),
            null !== Wg && ((b = 0 < ja.length ? "block" : "none"), (ti.style.display = b), (Wg.style.display = b)),
            (d = pa(d) && 0 < d.length ? "block" : "none"),
            (vi.style.display = d),
            (ui.style.display = d),
            Ga(),
            C(a),
            vf(a, Oa));
    }
    function Fl() {
        null === nb &&
            ((nb = h("div", "calendar-context-menu")),
            ya.push(nb),
            E.body.appendChild(nb),
            (jk = xa(
                nb,
                "ib-close-icon",
                b.hideDayText,
                function () {
                    b.visibleDays.splice(b.visibleDays.indexOf(kk), 1);
                    lb = !1;
                    x(b.events.onOptionsUpdated, b);
                    F(v, !0, !0);
                },
                !0
            )),
            (lk = $a(nb)),
            (mk = xa(nb, "ib-rhombus-hollow-icon", b.showOnlyWorkingDaysText, function () {
                1 <= b.workingDays.length &&
                    ((b.visibleDays = [].slice.call(b.workingDays)),
                    (lb = !1),
                    x(b.events.onOptionsUpdated, b),
                    F(v, !0, !0));
            })),
            (nk = $a(nb)),
            xa(nb, "ib-octagon-hollow-icon", b.visibleDaysText + "...", function () {
                Kc(!0);
            }));
    }
    function Yi() {
        null !== Ka || r || (Ka = h("div", "disabled-background"));
    }
    function Zi() {
        if (!r) {
            null === bb && ((bb = h("div", "calendar-dialog event-editor")), ya.push(bb), E.body.appendChild(bb));
            bb.innerHTML = n.empty;
            var a = h("div", "view");
            bb.appendChild(a);
            Xg = h("div", "disabled-area");
            a.appendChild(Xg);
            Sc = h("div", "title-bar");
            a.appendChild(Sc);
            Hd(Sc, bb, null);
            var c = h("div", "contents");
            a.appendChild(c);
            a = ok(c);
            ve(
                a,
                b.eventText,
                function (a) {
                    we(a, Vb, bb);
                },
                !0
            );
            ve(a, b.typeText.replace(":", n.empty), function (a) {
                we(a, Yg, bb);
            });
            ve(a, b.repeatsText.replace(":", n.empty), function (a) {
                we(a, Zg, bb);
            });
            ve(a, b.optionalText, function (a) {
                we(a, Uc, bb);
            });
            Vb = xe(c, !0, !1);
            Yg = xe(c, !1, !1);
            Zg = xe(c, !1, !1);
            Uc = xe(c, !1, !1);
            xm();
            ym();
            zm();
            a = h("div", "buttons-container");
            c.appendChild(a);
            Ug = Fa(a, b.removeEventText, "remove", Am);
            Gf = Fa(a, b.addText, "add-update", pk);
            Fa(a, b.cancelText, "cancel", Tc);
        }
    }
    function xm() {
        qa(Vb, b.titleText);
        var a = h("div", "input-title-container");
        Vb.appendChild(a);
        Ab = h("input", null, "text");
        a.appendChild(Ab);
        Ab.onkeydown = function (a) {
            a.keyCode === Q.enter && pk();
        };
        0 < b.maximumEventTitleLength && (Ab.maxLength = b.maximumEventTitleLength);
        var c = function () {
            qk(null);
        };
        b.eventColorsEditingEnabled && (wi = Fa(a, "...", "select-colors", Bm, b.selectColorsText));
        qa(Vb, b.fromText.replace(":", n.empty) + "/" + b.toText);
        a = h("div", "split");
        Vb.appendChild(a);
        Wb = h("input");
        Wb.onchange = c;
        a.appendChild(Wb);
        lc(Wb, "date");
        Xb = h("input");
        a.appendChild(Xb);
        lc(Xb, "time");
        a = h("div", "split");
        Vb.appendChild(a);
        hb = h("input");
        hb.onchange = c;
        a.appendChild(hb);
        lc(hb, "date");
        Yb = h("input");
        a.appendChild(Yb);
        lc(Yb, "time");
        ye = K(Vb, b.isAllDayText, c)[0];
        Kf = K(Vb, b.showAlertsText)[0];
        Lf = K(Vb, b.showAsBusyText)[0];
    }
    function ym() {
        var a = h("div", "radio-buttons-container");
        Zg.appendChild(a);
        qc = ha(a, b.repeatsNever, "RepeatType", Vc);
        Mf = ha(a, b.repeatsEveryDayText, "RepeatType", Vc);
        Nf = ha(a, b.repeatsEveryWeekText, "RepeatType", Vc);
        Of = ha(a, b.repeatsEvery2WeeksText, "RepeatType", Vc);
        Pf = ha(a, b.repeatsEveryMonthText, "RepeatType", Vc);
        Qf = ha(a, b.repeatsEveryYearText, "RepeatType", Vc);
        Zb = ha(a, b.repeatsCustomText, "RepeatType", Vc);
        $g = Fa(a, "...", "repeat-options", Cm, b.repeatOptionsTitle);
        a = h("div", "split split-margin");
        Zg.appendChild(a);
        Wc = h("input", null, "number");
        Wc.setAttribute("min", "1");
        a.appendChild(Wc);
        var c = h("div", "radio-buttons-container split-contents");
        a.appendChild(c);
        Id = ha(c, b.dailyText, "RepeatCustomType");
        Rf = ha(c, b.weeklyText, "RepeatCustomType");
        Sf = ha(c, b.monthlyText, "RepeatCustomType");
        Tf = ha(c, b.yearlyText, "RepeatCustomType");
    }
    function zm() {
        var a = h("div", "split");
        Uc.appendChild(a);
        qa(a, b.alertOffsetText);
        qa(a, b.groupText);
        a = h("div", "split");
        Uc.appendChild(a);
        Jd = h("input", null, "number");
        Jd.setAttribute("min", "0");
        a.appendChild(Jd);
        Kd = h("input", null, "text");
        a.appendChild(Kd);
        0 < b.maximumEventGroupLength && (Kd.maxLength = b.maximumEventGroupLength);
        qa(Uc, b.descriptionText);
        Ld = h("textarea", "custom-scroll-bars");
        Uc.appendChild(Ld);
        0 < b.maximumEventDescriptionLength && (Ld.maxLength = b.maximumEventDescriptionLength);
        a = h("div", "split");
        Uc.appendChild(a);
        qa(a, b.urlText);
        qa(a, b.locationText);
        a = h("div", "split");
        Uc.appendChild(a);
        ze = h("input", null, "url");
        a.appendChild(ze);
        Md = h("input", null, "text");
        a.appendChild(Md);
        0 < b.maximumEventLocationLength && (Md.maxLength = b.maximumEventLocationLength);
    }
    function Vc() {
        $g.disabled = qc.checked;
        Tf.disabled = !Zb.checked;
        Id.disabled = !Zb.checked;
        Rf.disabled = !Zb.checked;
        Sf.disabled = !Zb.checked;
        Wc.disabled = !Zb.checked;
    }
    function qk(a) {
        a = p(a) ? a : ea;
        var b = !1;
        (a = p(a) && ib(a.locked) ? a.locked : !1)
            ? (b = !0)
            : ye.checked && ((hb.value = Wb.value), (Xb.value = "00:00"), (Yb.value = "23:59"), (b = !0));
        hb.disabled = b;
        Xb.disabled = b;
        Yb.disabled = b;
        var d = Ae(Wb),
            e = Ae(hb);
        rk(hb, d);
        rk(Nd, e);
        d > e && Bb(d, hb);
        a || (e > d || e < d ? ((b = !0), (qc.checked = !0)) : (b = !1));
        qc.disabled = b;
        Mf.disabled = b;
        Nf.disabled = b;
        Of.disabled = b;
        Pf.disabled = b;
        Qf.disabled = b;
        Zb.disabled = b;
        $g.disabled = b;
        Wc.disabled = b;
        Id.disabled = b;
        Rf.disabled = b;
        Sf.disabled = b;
        Tf.disabled = b;
        a || Vc();
    }
    function P(a, c, d, e) {
        if (Zh(b.events.onBeforeEventAddEdit)) x(b.events.onBeforeEventAddEdit, a);
        else {
            Ub(E.body, Ka);
            var f = bb,
                k = void 0;
            k = p(k) ? k : 0;
            f = f.getElementsByClassName("tab");
            0 < f.length && f[k].click();
            Yg.innerHTML = n.empty;
            k = h("div", "radio-buttons-container");
            Yg.appendChild(k);
            for (var m in N) N.hasOwnProperty(m) && (N[m].eventEditorInput = ha(k, N[m].text, "Type"));
            p(a)
                ? (w(Sc, b.editEventTitle),
                  sk(a.type),
                  (Gf.value = b.updateText),
                  (Ug.style.display = "inline-block"),
                  (ea = a),
                  (Xb.value = yb(a.from, !1)),
                  (Yb.value = yb(a.to, !1)),
                  (ye.checked = xi(a.isAllDay)),
                  (Kf.checked = xi(a.showAlerts, !0)),
                  (Lf.checked = xi(a.showAsBusy, !0)),
                  (Ab.value = G(a.title)),
                  (Ld.value = G(a.description)),
                  (Md.value = G(a.location)),
                  (Kd.value = G(a.group)),
                  (ze.value = G(a.url)),
                  (Be.value = G(a.color, b.defaultEventBackgroundColor)),
                  (Ce.value = G(a.colorText, b.defaultEventTextColor)),
                  (De.value = G(a.colorBorder, b.defaultEventBorderColor)),
                  (Wc.value = H(a.repeatEveryCustomValue, 1)),
                  (Jd.value = H(a.alertOffset, 0)),
                  Bb(a.from, Wb),
                  Bb(a.to, hb),
                  (d = H(a.repeatEvery)),
                  d === y.never
                      ? (qc.checked = !0)
                      : d === y.everyDay
                        ? (Mf.checked = !0)
                        : d === y.everyWeek
                          ? (Nf.checked = !0)
                          : d === y.every2Weeks
                            ? (Of.checked = !0)
                            : d === y.everyMonth
                              ? (Pf.checked = !0)
                              : d === y.everyYear
                                ? (Qf.checked = !0)
                                : d === y.custom && (Zb.checked = !0),
                  (c = H(a.repeatEveryCustomType)),
                  c === M.daily
                      ? (Id.checked = !0)
                      : c === M.weekly
                        ? (Rf.checked = !0)
                        : c === M.monthly
                          ? (Sf.checked = !0)
                          : c === M.yearly && (Tf.checked = !0),
                  (c = Oc(a.repeatEveryExcludeDays)),
                  (ah.checked = c.indexOf(1) > B.notFound),
                  (bh.checked = c.indexOf(2) > B.notFound),
                  (ch.checked = c.indexOf(3) > B.notFound),
                  (dh.checked = c.indexOf(4) > B.notFound),
                  (eh.checked = c.indexOf(5) > B.notFound),
                  (fh.checked = c.indexOf(6) > B.notFound),
                  (gh.checked = c.indexOf(0) > B.notFound),
                  Bb(a.repeatEnds, Nd),
                  (yi = d > y.never && p(e) && !U(a.from, e)),
                  (Uf = e))
                : ((e = new Date()),
                  (c = p(c) ? c : e),
                  dc(c) && (c.setHours(e.getHours()), c.setMinutes(e.getMinutes())),
                  (e = fb(c, b.defaultEventDuration)),
                  w(Sc, b.addEventTitle),
                  sk(),
                  (Gf.value = b.addText),
                  (Ug.style.display = "none"),
                  (ea = {}),
                  (ye.checked = !1),
                  (Kf.checked = !0),
                  (Lf.checked = !0),
                  (Ab.value = n.empty),
                  (Ld.value = n.empty),
                  (Md.value = n.empty),
                  (Kd.value = n.empty),
                  (ze.value = n.empty),
                  (Be.value = b.defaultEventBackgroundColor),
                  (Ce.value = b.defaultEventTextColor),
                  (De.value = b.defaultEventBorderColor),
                  (qc.checked = !0),
                  (ah.checked = !1),
                  (bh.checked = !1),
                  (ch.checked = !1),
                  (dh.checked = !1),
                  (eh.checked = !1),
                  (fh.checked = !1),
                  (gh.checked = !1),
                  (Nd.value = null),
                  (Wc.value = "1"),
                  (Id.checked = !0),
                  (Jd.value = 0),
                  pa(d) &&
                      (c.setHours(d[0]),
                      c.setMinutes(d[1]),
                      e.setHours(d[0]),
                      e.setMinutes(d[1]),
                      (e = fb(e, b.defaultEventDuration))),
                  (Xb.value = yb(c, !1)),
                  (Yb.value = yb(e, !1)),
                  Bb(c, Wb),
                  Bb(e, hb),
                  (yi = !1),
                  (Uf = null));
            t(Sc, "ib-close", b.closeTooltipText, Tc, !0);
            a = nf(a);
            for (var g in N) N.hasOwnProperty(g) && p(N[g].eventEditorInput) && (N[g].eventEditorInput.disabled = a);
            Gf.disabled = a;
            Wb.disabled = a;
            hb.disabled = a;
            Xb.disabled = a;
            Yb.disabled = a;
            ye.disabled = a;
            Kf.disabled = a;
            Lf.disabled = a;
            Ab.disabled = a;
            Ld.disabled = a;
            Md.disabled = a;
            Kd.disabled = a;
            ze.disabled = a;
            qc.disabled = a;
            Mf.disabled = a;
            Nf.disabled = a;
            Of.disabled = a;
            Pf.disabled = a;
            Qf.disabled = a;
            Zb.disabled = a;
            $g.disabled = a;
            Jd.disabled = a;
            null !== wi && (wi.disabled = a);
            qk();
            eb.push(Tc);
            bb.style.display = "block";
            Ab.focus();
        }
    }
    function ud() {
        Ab.focus();
        Ab.select();
    }
    function pk() {
        var a = Xb.value.split(":"),
            c = Yb.value.split(":"),
            d = Od(Ab.value),
            e = Od(ze.value);
        if (2 > a.length) Vf(b.fromTimeErrorMessage);
        else if (2 > c.length) Vf(b.toTimeErrorMessage);
        else if (d === n.empty) Vf(b.titleErrorMessage);
        else if (0 < e.length && !tk(e)) Vf(b.urlErrorMessage);
        else {
            var f = Ae(Wb),
                k = Ae(hb),
                m = Od(Ld.value),
                h = Od(Md.value),
                g = Od(Kd.value),
                l = Ae(Nd, null),
                r = parseInt(Wc.value),
                t = Dm(),
                u = parseInt(Jd.value);
            isNaN(r) && ((r = 0), (qc.checked = !0), (Id.checked = !0));
            isNaN(u) && (u = 0);
            if (k < f) Vf(b.toSmallerThanFromErrorMessage);
            else {
                var x = function (a, c, f, k, A) {
                    A = p(A) ? A : !1;
                    hh(c, Xb.value);
                    hh(f, Yb.value);
                    A
                        ? ((ea.from = c), (ea.to = f), (ea.repeatEnds = k))
                        : ((A = p(a)),
                          (c = {
                              from: c,
                              to: f,
                              title: d,
                              description: m,
                              location: h,
                              group: g,
                              isAllDay: ye.checked,
                              showAlerts: Kf.checked,
                              showAsBusy: Lf.checked,
                              color: ea.color,
                              colorText: ea.colorText,
                              colorBorder: ea.colorBorder,
                              repeatEveryExcludeDays: ea.repeatEveryExcludeDays,
                              repeatEnds: k,
                              url: e,
                              repeatEveryCustomValue: r,
                              type: t,
                              customTags: ea.customTags,
                              alertOffset: u,
                          }),
                          qc.checked
                              ? (c.repeatEvery = y.never)
                              : Mf.checked
                                ? (c.repeatEvery = y.everyDay)
                                : Nf.checked
                                  ? (c.repeatEvery = y.everyWeek)
                                  : Of.checked
                                    ? (c.repeatEvery = y.every2Weeks)
                                    : Pf.checked
                                      ? (c.repeatEvery = y.everyMonth)
                                      : Qf.checked
                                        ? (c.repeatEvery = y.everyYear)
                                        : Zb.checked && (c.repeatEvery = y.custom),
                          Id.checked
                              ? (c.repeatEveryCustomType = M.daily)
                              : Rf.checked
                                ? (c.repeatEveryCustomType = M.weekly)
                                : Sf.checked
                                  ? (c.repeatEveryCustomType = M.monthly)
                                  : Tf.checked && (c.repeatEveryCustomType = M.yearly),
                          A
                              ? (c.id = a)
                              : ((c.organizerName = b.organizerName),
                                (c.organizerEmailAddress = b.organizerEmailAddress)),
                          A
                              ? (q.updateEvent(a, c, !1), Sa(b.eventUpdatedText.replace("{0}", ea.title)))
                              : (q.addEvent(c, !1), Sa(b.eventAddedText.replace("{0}", c.title))),
                          b.isWidget ? F(v) : (Ha(), ma()));
                };
                yi
                    ? (Wf(),
                      If(
                          b.confirmEventUpdateTitle,
                          b.confirmEventUpdateMessage,
                          function () {
                              var a = new Date(Uf),
                                  b = new Date(Uf),
                                  c = new Date(Uf);
                              Pd();
                              Ya(c, -1);
                              x(ea.id, f, k, c, !0);
                              x(null, a, b, l);
                              Tc();
                          },
                          function () {
                              Pd();
                              x(ea.id, f, k, l);
                              Tc();
                          },
                          !1,
                          !0,
                          b.forwardText,
                          b.seriesText
                      ))
                    : (x(ea.id, f, k, l), Tc());
            }
        }
    }
    function Tc(a) {
        Ee(a);
        gb(E.body, Ka);
        bb.style.display = "none";
    }
    function Am() {
        Wf();
        If(
            b.confirmEventRemoveTitle,
            b.confirmEventRemoveMessage,
            function () {
                Pd();
                Tc();
                p(ea.id) &&
                    (q.removeEvent(ea.id, !0),
                    b.isWidget ? F(v) : ma(),
                    Sa(b.eventRemovedText.replace("{0}", ea.title)));
            },
            function () {
                Pd();
            }
        );
    }
    function ma() {
        Xa(W) && Ua(L);
        Xa(da) && zc(Sb);
        Xa(Da) && Ac(sa);
        Xa(ra) && Qh();
        Xa(ia) && Jb(ba);
    }
    function td(a, c, d, e) {
        d = p(d) ? d : "09:00";
        e = p(e) ? d : "09:00";
        hh(a, d);
        hh(c, e);
        c = fb(c, b.defaultEventDuration);
        a = {
            from: a,
            to: c,
            title: b.newEventDefaultTitle,
            description: n.empty,
            location: n.empty,
            group: n.empty,
            isAllDay: !1,
            showAlerts: !0,
            showAsBusy: !0,
            color: b.defaultEventBackgroundColor,
            colorText: b.defaultEventTextColor,
            colorBorder: b.defaultEventBorderColor,
            repeatEveryExcludeDays: [],
            repeatEnds: null,
            url: n.empty,
            repeatEveryCustomValue: n.empty,
            repeatEvery: y.never,
            repeatEveryCustomType: M.daily,
            organizerName: n.empty,
            organizerEmailAddress: n.empty,
            type: 0,
            locked: !1,
            customTags: null,
            alertOffset: 0,
        };
        q.addEvent(a, !1);
        Sa(b.eventAddedText.replace("{0}", a.title));
        Ha();
        ma();
        jb();
        return a;
    }
    function nf(a) {
        return p(a) && ib(a.locked) ? a.locked : !1;
    }
    function Vf(a) {
        If(b.errorText, a, Pd, null, !1, !1);
        Wf();
    }
    function Wf() {
        Xg.style.display = "block";
    }
    function Pd() {
        Xg.style.display = "none";
    }
    function $i() {
        if (!r && null === rc) {
            rc = h("div", "calendar-dialog event-editor-colors");
            ya.push(rc);
            E.body.appendChild(rc);
            var a = h("div", "title-bar");
            w(a, b.selectColorsText);
            rc.appendChild(a);
            Hd(a, rc, null);
            t(a, "ib-close", b.closeTooltipText, ih, !0);
            a = h("div", "contents");
            rc.appendChild(a);
            var c = h("div", "section");
            a.appendChild(c);
            qa(c, b.backgroundColorText, "text-header");
            Be = h("input");
            c.appendChild(Be);
            lc(Be, "color");
            c = h("div", "section");
            a.appendChild(c);
            qa(c, b.textColorText, "text-header");
            Ce = h("input");
            c.appendChild(Ce);
            lc(Ce, "color");
            c = h("div", "section");
            a.appendChild(c);
            qa(c, b.borderColorText, "text-header");
            De = h("input");
            c.appendChild(De);
            lc(De, "color");
            c = h("div", "buttons-container");
            a.appendChild(c);
            Fa(c, b.updateText, "update", Em);
            Fa(c, b.cancelText, "cancel", ih);
        }
    }
    function Em() {
        ih();
        ea.color = Be.value;
        ea.colorText = Ce.value;
        ea.colorBorder = De.value;
    }
    function ih(a) {
        Ee(a);
        Pd();
        rc.style.display = "none";
    }
    function Bm() {
        eb.push(ih);
        rc.style.display = "block";
        Wf();
    }
    function aj() {
        if (!r && null === sc) {
            sc = h("div", "calendar-dialog event-editor-repeat-options");
            ya.push(sc);
            E.body.appendChild(sc);
            var a = h("div", "title-bar");
            w(a, b.repeatOptionsTitle);
            sc.appendChild(a);
            Hd(a, sc, null);
            t(a, "ib-close", b.closeTooltipText, jh, !0);
            a = h("div", "contents");
            sc.appendChild(a);
            var c = h("div", "section");
            a.appendChild(c);
            qa(c, b.daysToExcludeText, "text-header");
            ah = K(c, b.dayNames[0])[0];
            bh = K(c, b.dayNames[1])[0];
            ch = K(c, b.dayNames[2])[0];
            dh = K(c, b.dayNames[3])[0];
            eh = K(c, b.dayNames[4])[0];
            fh = K(c, b.dayNames[5])[0];
            gh = K(c, b.dayNames[6])[0];
            c = h("div", "section");
            a.appendChild(c);
            qa(c, b.repeatEndsText, "text-header");
            Nd = h("input");
            c.appendChild(Nd);
            lc(Nd, "date");
            c = h("div", "buttons-container");
            a.appendChild(c);
            Fa(c, b.updateText, "update", Fm);
            Fa(c, b.cancelText, "cancel", jh);
        }
    }
    function Fm() {
        jh();
        var a = [];
        ah.checked && a.push(1);
        bh.checked && a.push(2);
        ch.checked && a.push(3);
        dh.checked && a.push(4);
        eh.checked && a.push(5);
        fh.checked && a.push(6);
        gh.checked && a.push(0);
        ea.repeatEveryExcludeDays = a;
    }
    function jh(a) {
        Ee(a);
        Pd();
        sc.style.display = "none";
    }
    function Cm() {
        eb.push(jh);
        sc.style.display = "block";
        Wf();
    }
    function bj() {
        if (!r && null === Xc) {
            Xc = h("div", "calendar-dialog message");
            ya.push(Xc);
            E.body.appendChild(Xc);
            zi = h("div", "title-bar");
            Xc.appendChild(zi);
            var a = h("div", "contents");
            Xc.appendChild(a);
            Ai = h("div", "text");
            a.appendChild(Ai);
            var c = K(a, b.removeAllEventsInSeriesText);
            Vg = c[0];
            Bi = c[1];
            Xf = h("div", "buttons-container");
            a.appendChild(Xf);
        }
    }
    function If(a, c, d, e, f, k, m, g) {
        f = p(f) ? f : !1;
        k = p(k) ? k : !0;
        var A = p(m) ? m : b.yesText,
            l = p(g) ? g : b.noText;
        Xf.innerHTML = n.empty;
        var q = h("input", "yes-ok", "button");
        q.value = A;
        Xf.appendChild(q);
        A = h("input", "no", "button");
        A.value = l;
        Xf.appendChild(A);
        eb.push(!1);
        Xc.style.display = "block";
        w(zi, a);
        w(Ai, c);
        q.onclick = uk;
        q.addEventListener("click", d);
        A.onclick = uk;
        Yc(e) && A.addEventListener("click", e);
        p(m) ||
            p(g) ||
            (k
                ? ((A.style.display = "inline-block"), (q.value = b.yesText))
                : ((A.style.display = "none"), (q.value = b.okText)));
        f ? ((Bi.style.display = "block"), (Vg.checked = !1)) : ((Bi.style.display = "none"), (Vg.checked = !0));
    }
    function uk() {
        eb.pop();
        Xc.style.display = "none";
    }
    function yl() {
        if (!r && null === tc) {
            tc = h("div", "calendar-dialog export-events");
            ya.push(tc);
            E.body.appendChild(tc);
            var a = h("div", "title-bar");
            w(a, b.exportEventsTitle);
            tc.appendChild(a);
            Hd(a, tc, null);
            t(a, "ib-close", b.closeTooltipText, kh, !0);
            a = h("div", "contents");
            tc.appendChild(a);
            Ta = h("input", null, "text");
            Ta.placeholder = b.exportFilenamePlaceholderText;
            a.appendChild(Ta);
            Ta.onkeydown = function (a) {
                a.keyCode === Q.enter && vk();
            };
            Cb = K(a, b.copyToClipboardOnlyText, wk)[0];
            lh = h("div", "split options");
            a.appendChild(lh);
            var c = h("div", "radio-buttons-container split-contents");
            lh.appendChild(c);
            var d = h("div", "radio-buttons-container split-contents");
            lh.appendChild(d);
            Ci = ha(c, "CSV", "ExportType");
            xk = ha(c, "XML", "ExportType");
            yk = ha(c, "JSON", "ExportType");
            zk = ha(c, "TXT", "ExportType");
            Ak = ha(d, "iCAL", "ExportType");
            Bk = ha(d, "MD", "ExportType");
            Ck = ha(d, "HTML", "ExportType");
            Dk = ha(d, "TSV", "ExportType");
            c = h("div", "buttons-container");
            a.appendChild(c);
            Fa(c, b.exportText, "export", vk);
            Fa(c, b.cancelText, "cancel", kh);
        }
    }
    function wk() {
        Ta.disabled = Cb.checked;
    }
    function dd(a) {
        Ub(E.body, Ka);
        Hb();
        eb.push(kh);
        tc.style.display = "block";
        uc = a;
        Ci.checked = !0;
        Ta.value = n.empty;
        Cb.checked = !1;
        wk();
        Ta.focus();
    }
    function kh(a) {
        Ee(a);
        gb(E.body, Ka);
        tc.style.display = "none";
    }
    function vk() {
        kh();
        Ci.checked
            ? vc(uc, "csv", Ta.value, Cb.checked)
            : xk.checked
              ? vc(uc, "xml", Ta.value, Cb.checked)
              : yk.checked
                ? vc(uc, "json", Ta.value, Cb.checked)
                : zk.checked
                  ? vc(uc, "text", Ta.value, Cb.checked)
                  : Ak.checked
                    ? vc(uc, "ical", Ta.value, Cb.checked)
                    : Bk.checked
                      ? vc(uc, "md", Ta.value, Cb.checked)
                      : Ck.checked
                        ? vc(uc, "html", Ta.value, Cb.checked)
                        : Dk.checked && vc(uc, "tsv", Ta.value, Cb.checked);
    }
    function zl() {
        if (!r && null === ka) {
            ka = h("div", "calendar-dialog search");
            ya.push(ka);
            E.body.appendChild(ka);
            var a = h("div", "title-bar");
            w(a, b.searchEventsTitle);
            ka.appendChild(a);
            Hd(a, ka, function () {
                Di = !0;
                Yf();
            });
            a.ondblclick = Ei;
            var c = t(a, "ib-close", b.closeTooltipText, kd);
            c.onmousedown = C;
            c.onmouseup = C;
            Qd = t(a, "ib-minus", b.minimizedTooltipText, Ei);
            Qd.onmousedown = C;
            Qd.onmouseup = C;
            $b = h("div", "contents");
            ka.appendChild($b);
            a = h("div", "history-container");
            $b.appendChild(a);
            na = h("input", null, "text");
            na.placeholder = b.searchTextBoxPlaceholder;
            na.oninput = Fe;
            na.onpropertychange = Fe;
            na.onkeypress = Gm;
            a.appendChild(na);
            pb = h("div", "ib-arrow-down-full");
            pb.style.display = "none";
            pb.onclick = Hm;
            a.appendChild(pb);
            zb = h("div", "history-dropdown custom-scroll-bars");
            a.appendChild(zb);
            a = h("div", "checkbox-container");
            $b.appendChild(a);
            mh = K(a, b.notSearchText, ac)[0];
            nh = K(a, b.matchCaseText, ac)[0];
            Ge = K(a, b.advancedText + ":", Im)[0];
            Ge.checked = !0;
            Zf = h("div", "advanced");
            $b.appendChild(Zf);
            var d = h("div", "split");
            Zf.appendChild(d);
            c = h("div", "split-contents");
            d.appendChild(c);
            a = h("div", "split-contents");
            d.appendChild(a);
            qa(c, b.includeText, "text-header");
            d = h("div", "checkbox-container");
            c.appendChild(d);
            $f = K(d, b.titleText.replace(":", n.empty), ac)[0];
            oh = K(d, b.locationText.replace(":", n.empty), ac)[0];
            ph = K(d, b.descriptionText.replace(":", n.empty), ac)[0];
            qh = K(d, b.groupText.replace(":", n.empty), ac)[0];
            rh = K(d, b.urlText.replace(":", n.empty), ac)[0];
            $f.checked = !0;
            qa(a, b.optionsText, "text-header");
            c = h("div", "radio-buttons-container");
            a.appendChild(c);
            sh = ha(c, b.startsWithText, "SearchOptionType", ac);
            th = ha(c, b.endsWithText, "SearchOptionType", ac);
            uh = ha(c, b.containsText, "SearchOptionType", ac);
            uh.checked = !0;
            a = h("div", "buttons-container");
            $b.appendChild(a);
            vh = Fa(a, b.previousText, "previous", Ek);
            wh = Fa(a, b.nextText, "next", Fk);
        }
    }
    function Im() {
        Zf.style.display = Ge.checked ? "block" : "none";
        Xh();
        Yf();
    }
    function ac() {
        Yf();
        Fe(!1);
    }
    function Fe(a) {
        a = p(a) ? a : !0;
        0 < Db.length && Gk(z, " focused-event");
        vh.disabled = !0;
        wh.disabled = na.value === n.empty;
        Db = [];
        Zc = 0;
        Fi = null;
        a && Hk();
        Yf();
    }
    function fe() {
        "block" !== ka.style.display &&
            ((Db = []),
            (ka.style.display = "block"),
            Fe(!1),
            (na.value = u.lastSearchText),
            (mh.checked = u.not),
            (nh.checked = u.matchCase),
            (Ge.checked = u.showAdvanced),
            ($f.checked = u.searchTitle),
            (oh.checked = u.searchLocation),
            (ph.checked = u.searchDescription),
            (qh.checked = u.searchGroup),
            (rh.checked = u.searchUrl),
            (sh.checked = u.startsWith),
            (th.checked = u.endsWith),
            (uh.checked = u.contains),
            (Zf.style.display = Ge.checked ? "block" : "none"),
            Xh());
        "block" !== $b.style.display && Ei();
        na.focus();
        na.select();
        0 < u.history.length && (pb.style.display = "block");
    }
    function Xh() {
        null === ka ||
            Di ||
            r ||
            (Ba(u.left)
                ? (ka.style.left = u.left + "px")
                : (ka.style.left = Z.innerWidth / 2 - ka.offsetWidth / 2 + "px"),
            Ba(u.top)
                ? (ka.style.top = u.top + "px")
                : (ka.style.top = Z.innerHeight / 2 - ka.offsetHeight / 2 + "px"));
    }
    function kd() {
        var a = !1;
        null !== ka && "block" === ka.style.display && ((ka.style.display = "none"), Fe(), (a = !0));
        return a;
    }
    function Ei() {
        "block" === $b.style.display
            ? (($b.style.display = "none"), (Qd.className = "ib-square-hollow"), Ra(Qd, b.restoreTooltipText))
            : (($b.style.display = "block"), (Qd.className = "ib-minus"), Ra(Qd, b.minimizedTooltipText));
    }
    function Ek() {
        if (0 < Zc) {
            Zc--;
            var a = Db[Zc];
            Ik();
            F(a.from);
            Jk(a);
        }
    }
    function Gm(a) {
        a.keyCode === Q.enter && fa(a) && !vh.disabled ? Ek() : a.keyCode !== Q.enter || wh.disabled ? Hk() : Fk();
    }
    function Fk() {
        if (0 === Db.length) {
            var a = "day-",
                b = mh.checked,
                d = nh.checked,
                e = d ? na.value : na.value.toLowerCase(),
                f = {},
                k = vb(Bd()),
                h = k.length,
                g = Ma(),
                n = g === W,
                p = g === ra,
                l = g === da;
            g = g === ia;
            n ? (a = "full-day-") : p ? (a = "month-") : l ? (a = "week-day-") : g && (a = "timeline-day-");
            Yf(!0);
            for (var q = 0; q < h; q++) {
                var r = k[q];
                if (ie(r)) {
                    var t = G(r.title),
                        u = G(r.location),
                        v = G(r.description),
                        y = G(r.group),
                        x = G(r.url),
                        w = !1;
                    d ||
                        ((t = t.toLowerCase()),
                        (v = v.toLowerCase()),
                        (u = u.toLowerCase()),
                        (y = y.toLowerCase()),
                        (x = x.toLowerCase()));
                    $f.checked && ag(t, e)
                        ? (w = !0)
                        : oh.checked && ag(u, e)
                          ? (w = !0)
                          : ph.checked && ag(v, e)
                            ? (w = !0)
                            : qh.checked && ag(y, e)
                              ? (w = !0)
                              : rh.checked && ag(x, e) && (w = !0);
                    b && (w = !w);
                    !w ||
                        (null === Aa(a + r.id) && (n || p || l || g)) ||
                        (n || p || l || g
                            ? Db.push(te(r, !1))
                            : ((t = r.from.getMonth() + "-" + r.from.getFullYear()),
                              f.hasOwnProperty(t) || (Db.push(te(r, !1)), (f[t] = !0))));
                }
            }
        } else Zc++;
        Ik();
        0 < Db.length && ((a = Db[Zc]), F(new Date(a.from)), Jk(a));
    }
    function Jk(a) {
        var b = "day-",
            d = Ma(),
            e = d === W,
            f = d === ra,
            k = d === da;
        d = d === ia;
        Gk(z, " focused-event");
        e ? (b = "full-day-") : f ? (b = "month-") : k ? (b = "week-day-") : d && (b = "timeline-day-");
        b = Aa(b + a.id);
        if (null !== b && ((b.className += " focused-event"), (Fi = a.id), e || f || k || d))
            for (a = b.parentNode; ; ) {
                if (0 < a.scrollHeight && a.scrollHeight > a.offsetHeight) {
                    a.scrollTop = b.offsetTop;
                    break;
                }
                a = a.parentNode;
            }
    }
    function Ik() {
        vh.disabled = 0 === Zc;
        wh.disabled = Zc === Db.length - 1 || 0 === Db.length;
    }
    function ag(a, b) {
        return sh.checked
            ? oa(a, b)
            : th.checked
              ? a.substring(a.length - b.length, a.length) === b
              : a.indexOf(b) > B.notFound;
    }
    function Yf(a) {
        a = p(a) ? a : !1;
        rd(Na.searchOptionsChanged);
        var c = Od(na.value);
        a && (pb.style.display = "block");
        nd(
            Na.searchOptionsChanged,
            function () {
                var d = !0,
                    e = u.history.length;
                if (a) {
                    d = !1;
                    for (var f = 0; f < e; f++)
                        if (u.history[f] === c) {
                            d = !0;
                            break;
                        }
                    d || u.history.push(c);
                }
                if (!a || d)
                    (u.lastSearchText = c),
                        (u.not = mh.checked),
                        (u.matchCase = nh.checked),
                        (u.showAdvanced = Ge.checked),
                        (u.searchTitle = $f.checked),
                        (u.searchLocation = oh.checked),
                        (u.searchDescription = ph.checked),
                        (u.searchGroup = qh.checked),
                        (u.searchUrl = rh.checked),
                        (u.startsWith = sh.checked),
                        (u.endsWith = th.checked),
                        (u.contains = uh.checked),
                        Di && ((u.left = ka.offsetLeft), (u.top = ka.offsetTop)),
                        x(b.events.onSearchOptionsUpdated, u);
            },
            2e3,
            !1
        );
    }
    function Hk() {
        var a = u.history.length;
        0 < a
            ? ((pb.style.display = "block"),
              rd(Na.searchEventsHistoryDropDown),
              nd(
                  Na.searchEventsHistoryDropDown,
                  function () {
                      var b = na.value,
                          d = !1;
                      if (Od(b) !== n.empty) {
                          Kk();
                          zb.innerHTML = n.empty;
                          for (var e = 0; e < a; e++) {
                              var f = u.history[e],
                                  k = b;
                              f.substring(0, k.length).toLowerCase() === k.toLowerCase() &&
                                  f.toLowerCase() !== b.toLowerCase() &&
                                  (Lk(u.history[e], b.length), (d = !0));
                          }
                      }
                      d ? Mk() : af();
                  },
                  150,
                  !1
              ))
            : (pb.style.display = "none");
    }
    function Kk() {
        u.history.sort(function (a, b) {
            var c = 0;
            a = a.toLowerCase();
            b = b.toLowerCase();
            a < b ? (c = -1) : a > b && (c = 1);
            return c;
        });
    }
    function Hm(a) {
        C(a);
        if ("block" !== zb.style.display) {
            Kk();
            a = u.history.length;
            zb.innerHTML = n.empty;
            na.focus();
            for (var b = 0; b < a; b++) Lk(u.history[b], 0);
            Mk();
        } else af();
    }
    function Lk(a, b) {
        var c = h("div", "history-dropdown-item");
        zb.appendChild(c);
        var e = h("span", "search-search");
        w(e, a.substring(0, b));
        c.appendChild(e);
        e = h("span");
        w(e, a.substring(b));
        c.appendChild(e);
        c.onclick = function (b) {
            C(b);
            af();
            na.value = a;
            na.selectionStart = na.selectionEnd = na.value.length;
            na.focus();
            Fe(!1);
        };
    }
    function af() {
        var a = !1;
        null !== zb &&
            "ib-arrow-up-full" === pb.className &&
            ((zb.style.display = "none"), (pb.className = "ib-arrow-down-full"), (a = !0));
        return a;
    }
    function Mk() {
        null !== zb &&
            "ib-arrow-down-full" === pb.className &&
            ((zb.style.display = "block"), (pb.className = "ib-arrow-up-full"));
    }
    function Al() {
        if (!r && null === Eb) {
            Eb = h("div", "calendar-dialog configuration");
            ya.push(Eb);
            E.body.appendChild(Eb);
            var a = h("div", "title-bar");
            w(a, b.configurationTitleText);
            Eb.appendChild(a);
            Hd(a, Eb, null);
            t(a, "ib-close", b.closeTooltipText, Nk, !0);
            a = h("div", "contents");
            Eb.appendChild(a);
            var c = ok(a);
            ve(
                c,
                b.displayTabText,
                function (a) {
                    we(a, Rd, Eb);
                },
                !0
            );
            ve(c, b.organizerTabText, function (a) {
                we(a, He, Eb);
            });
            Rd = xe(a, !0, !1);
            He = xe(a, !1, !1);
            Gi = K(Rd, b.enableAutoRefreshForEventsText)[0];
            Hi = K(Rd, b.enableBrowserNotificationsText, null, null, null, "checkbox-tabbed-in")[0];
            Ii = K(Rd, b.enableTooltipsText, null, null, null, "checkbox-tabbed-down")[0];
            Ji = K(Rd, b.enableDragAndDropForEventText)[0];
            Ki = K(Rd, b.showHolidaysInTheDisplaysText)[0];
            qa(He, b.organizerNameText);
            xh = h("input", null, "text");
            He.appendChild(xh);
            qa(He, b.organizerEmailAddressText);
            yh = h("input", null, "email");
            He.appendChild(yh);
            c = h("div", "buttons-container");
            a.appendChild(c);
            Fa(c, b.updateText, "update", Jm);
            Fa(c, b.cancelText, "cancel", Nk);
        }
    }
    function Jm() {
        Gi.checked ? q.startTheAutoRefreshTimer() : q.stopTheAutoRefreshTimer();
        b.eventNotificationsEnabled = Hi.checked;
        b.tooltipsEnabled = Ii.checked;
        b.dragAndDropForEventsEnabled = Ji.checked;
        b.showHolidays = Ki.checked;
        b.organizerName = xh.value;
        b.organizerEmailAddress = yh.value;
        lb = !1;
        x(b.events.onOptionsUpdated, b);
        Li();
        Mi();
        F(v, !0, !0);
        Sa(b.configurationUpdatedText);
    }
    function Nk() {
        Mi();
    }
    function gj() {
        Ub(E.body, Ka);
        Gi.checked = bg;
        Hi.checked = b.eventNotificationsEnabled;
        Ii.checked = b.tooltipsEnabled;
        Ji.checked = b.dragAndDropForEventsEnabled;
        Ki.checked = b.showHolidays;
        xh.value = b.organizerName;
        yh.value = b.organizerEmailAddress;
        eb.push(Mi);
        Eb.style.display = "block";
    }
    function Mi(a) {
        Ee(a);
        gb(E.body, Ka);
        Eb.style.display = "none";
    }
    function ie(a) {
        var c = G(a.group),
            d = c.toLowerCase();
        a = H(a.type);
        var e = !0;
        c !== n.empty
            ? p(O.visibleGroups) && (e = O.visibleGroups.indexOf(d) > B.notFound)
            : (e = !b.hideEventsWithoutGroupAssigned);
        e && p(O.visibleEventTypes) && N.hasOwnProperty(a) && (e = O.visibleEventTypes.indexOf(a) > B.notFound);
        return e;
    }
    function Bl() {
        if (!r && null === wc && b.jumpToDateEnabled) {
            wc = h("div", "calendar-dialog jump-to-date");
            ya.push(wc);
            E.body.appendChild(wc);
            var a = h("div", "title-bar");
            w(a, b.jumpToDateTitle);
            wc.appendChild(a);
            Hd(a, wc, null);
            t(a, "ib-close", b.closeTooltipText, zh, !0);
            var c = h("div", "contents");
            wc.appendChild(c);
            bc = h("input", null, "date");
            c.appendChild(bc);
            a = h("div", "buttons-container");
            c.appendChild(a);
            c = Fa(a, b.goText, "go", Ok);
            Fa(a, b.cancelText, "cancel", zh);
            c.onkeydown = function (a) {
                a.keyCode === Q.enter && Ok();
            };
        }
    }
    function ee() {
        if (Ma() !== ra && b.jumpToDateEnabled) {
            Ub(E.body, Ka);
            Hb();
            var a = Ma();
            null === a
                ? (x(b.events.onSetDate, bc), Bb(v, bc))
                : a === W
                  ? Bb(L, bc)
                  : a === da
                    ? Bb(Sb, bc)
                    : a === Da
                      ? Bb(new Date(sa, 0, 1), bc)
                      : a === ia && Bb(ba, bc);
            eb.push(zh);
            wc.style.display = "block";
            bc.focus();
        }
    }
    function zh(a) {
        Ee(a);
        gb(E.body, Ka);
        wc.style.display = "none";
    }
    function Ok() {
        var a = Ma(),
            c = Ae(bc);
        c.getFullYear() >= b.minimumYear &&
            c.getFullYear() <= b.maximumYear &&
            (null === a
                ? (F(c), rb())
                : a === W
                  ? Ua(c)
                  : a === da
                    ? zc(c)
                    : a === Da
                      ? Ac(c.getFullYear())
                      : a === ia && Jb(c),
            zh());
    }
    function cj() {
        null === T &&
            ((T = h("div", "calendar-tooltip")),
            ya.push(T),
            E.body.appendChild(T),
            (Ni = h("div", "ib-close")),
            (Ah = h("div", "ib-edit")),
            (Bh = h("div", "title-buttons")),
            Bh.appendChild(Ni),
            Bh.appendChild(Ah),
            (Sd = h("div", "title")),
            (cg = h("div", "date")),
            (Td = h("div", "duration")),
            (dg = h("div", "repeats")),
            (eg = h("div", "description")),
            (fg = h("div", "location")),
            (Ud = h("div", "url")),
            (Ni.onclick = ic),
            (Ah.onclick = function () {
                P(Dd);
            }),
            document.body.addEventListener("mousemove", ic));
    }
    function ki(a, c, d, e) {
        C(a);
        rd(Na.showToolTip);
        ic();
        e = p(e) ? e : !1;
        if ("block" !== T.style.display && b.tooltipsEnabled) {
            var f = R(d) ? b.tooltipDelay : b.eventTooltipDelay;
            nd(
                Na.showToolTip,
                function () {
                    if (e || (!E.body.contains(Ka) && !Mg() && !ek() && null === ca)) {
                        d = p(d) ? d : n.empty;
                        T.className = d === n.empty ? "calendar-tooltip-event" : "calendar-tooltip";
                        if (R(d)) w(T, d);
                        else if (
                            ((Dd = c),
                            (T.innerHTML = n.empty),
                            (Sd.innerHTML = n.empty),
                            (Td.innerHTML = n.empty),
                            (Ud.innerHTML = n.empty),
                            !x(b.events.onToolTipEventRender, T, c))
                        ) {
                            T.onmousemove = C;
                            T.appendChild(Bh);
                            T.appendChild(Sd);
                            T.appendChild(cg);
                            T.appendChild(Td);
                            Va(Ah, b.manualEditingEnabled);
                            if (Ca(c.url)) {
                                var f = aa(Ud, Cg(c.url), "url-text");
                                Ub(T, Ud);
                                f.onclick = function (a) {
                                    C(a);
                                    je(c.url);
                                    ic();
                                };
                            } else (Ud.innerHTML = n.empty), (Ud.onclick = null), gb(T, Ud);
                            H(c.repeatEvery) > y.never &&
                                b.showReoccurringEventIcons &&
                                ((f = h("div", "ib-refresh-medium ib-no-hover ib-no-active")),
                                (f.style.borderColor = Sd.style.color),
                                Sd.appendChild(f));
                            Sd.innerHTML += kc(c.title);
                            Ba(c.repeatEvery) && c.repeatEvery > y.never
                                ? (w(dg, b.repeatsText.replace(":", n.empty) + n.space + pd(c.repeatEvery)), Ub(T, dg))
                                : ((dg.innerHTML = n.empty), gb(T, dg));
                            Ca(c.location) ? (w(fg, c.location), Ub(T, fg)) : ((fg.innerHTML = n.empty), gb(T, fg));
                            Ca(c.description)
                                ? (w(eg, c.description), Ub(T, eg))
                                : ((eg.innerHTML = n.empty), gb(T, eg));
                            c.from.getDate() === c.to.getDate()
                                ? c.isAllDay
                                    ? w(cg, b.allDayText)
                                    : (w(cg, de(c.from, c.to)), w(Td, Ob(c.from, c.to)))
                                : (Xe(cg, c.from, c.to), w(Td, Ob(c.from, c.to)));
                            Td.innerHTML === n.empty && T.removeChild(Td);
                        }
                        vf(a, T);
                    }
                },
                f,
                !1
            );
        }
    }
    function ic() {
        rd(Na.showToolTip);
        Pk() && ((T.style.display = "none"), (Dd = null), (T.onmousemove = null));
    }
    function Pk() {
        return Oi(Na.showToolTip) || (null !== T && "block" === T.style.display);
    }
    function Ra(a, b, d) {
        null !== a &&
            (a.onmousemove = function (a) {
                ki(a, null, b, d);
            });
    }
    function Sa(a, c) {
        null !== fc &&
            b.popUpNotificationsEnabled &&
            ((c = p(c) ? c : !0),
            rd(Na.hideNotification),
            (fc.innerHTML = n.empty),
            (c = h("div", c ? "success" : "error")),
            fc.appendChild(c),
            (fc.style.display = "block"),
            w(c, a),
            t(c, "ib-close-icon", b.closeTooltipText, Qk),
            nd(
                Na.hideNotification,
                function () {
                    Qk();
                },
                5e3,
                !1
            ));
    }
    function Qk() {
        fc.style.display = "none";
    }
    function Lh(a, c) {
        if (null !== a) {
            c = p(c) ? c : !0;
            var d = b.dayHeaderNames.length;
            a.innerHTML = n.empty;
            b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday
                ? (Pi(a, b.startOfWeekDay, d), Pi(a, 0, b.startOfWeekDay))
                : Pi(a, 0, d);
            b.reverseOrderDaysOfWeek && c && ld(a);
        }
    }
    function Pi(a, c, d) {
        for (; c < d; c++) b.visibleDays.indexOf(c) > B.notFound && Km(a, c);
    }
    function Km(a, c) {
        var d = b.dayHeaderNames[c],
            e = h("div", Fg());
        w(e, d);
        a.appendChild(e);
        e.oncontextmenu = function (a) {
            if (!r && (fa(a) || mc(), Ga(), b.sideMenu.showDays)) {
                kk = c;
                var d = 1 < b.visibleDays.length ? "block" : "none",
                    e = 1 <= b.workingDays.length && !ae(b.workingDays, b.visibleDays) ? "block" : "none";
                jk.style.display = d;
                lk.style.display = d;
                mk.style.display = e;
                nk.style.display = e;
                C(a);
                vf(a, nb);
            }
        };
        e.ondblclick = function (a) {
            if (!r) {
                var d = !1;
                if (0 === od.length) {
                    if (((a = b.visibleDays.length), 1 < a)) {
                        for (d = 0; d < a; d++) od.push(b.visibleDays[d]);
                        b.visibleDays = [];
                        b.visibleDays.push(c);
                        d = !0;
                    }
                } else {
                    b.visibleDays = [];
                    a = od.length;
                    for (d = 0; d < a; d++) b.visibleDays.push(od[d]);
                    od = [];
                    d = !0;
                }
                d && ((lb = !1), x(b.events.onOptionsUpdated, b), F(v, !0, !0));
            }
        };
    }
    function kf(a, b) {
        Xa(a) && b
            ? (Qi(a, !1), ob.push(a), Ie++, (a.style.zIndex = Ie))
            : Ma() === a ||
              Xa(a) ||
              (Qi(a, !1), ob.push(a), Ie++, (a.className += " view-shown"), (a.style.zIndex = Ie), kd(), rf());
    }
    function xd(a, b) {
        Xa(a) && ((a.className = a.className.replace(" view-shown", n.empty)), Qi(a, b), 0 === ob.length && (Ie = 0));
    }
    function Qi(a, b) {
        b = p(b) ? b : !0;
        for (var c = [], e = ob.length, f = 0; f < e; f++) {
            var k = ob[f];
            p(k) && k.id !== a.id && c.push(k);
        }
        ob = [].slice.call(c);
        b && rf();
    }
    function Xa(a) {
        return p(a) && a.className && a.className.indexOf("view-shown") > B.notFound;
    }
    function Gj(a) {
        a = p(a) ? a : !0;
        var b = Ma();
        xd(b, !a);
        0 === ob.length && (Ie = 0);
        a && rf();
    }
    function Ma() {
        return 0 < ob.length ? ob[ob.length - 1] : null;
    }
    function rf(a) {
        a = p(a) ? a : !0;
        var c = Ma(),
            d = null;
        null === c
            ? (d = tb.fullMonth)
            : c === W
              ? (d = tb.fullDay)
              : c === da
                ? (d = tb.fullWeek)
                : c === Da
                  ? (d = tb.fullYear)
                  : c === ia
                    ? (d = tb.timeline)
                    : c === ra && (d = tb.allEvents);
        a && R(d) && x(b.events.onViewChange, d);
        return d;
    }
    function Lj(a, b) {
        var c = new Date(),
            e = new Date();
        e.setHours(0, 0, 0, 0);
        for (0 !== 60 % b && (b = 30); U(e, c); ) {
            var f = h("div", "hour");
            a.appendChild(f);
            var k = h("div", "hour-text");
            k.innerText = yb(new Date(e));
            f.appendChild(k);
            e = fb(e, b);
            k = h("div", "hour-text");
            k.innerText = yb(new Date(e));
            f.appendChild(k);
            e = fb(e, b);
        }
    }
    function xg(a, b) {
        var c = Ze(b);
        b = la.floor((a.pageY - c.top) / (b.offsetHeight / 1440)) / 60;
        a = la.floor(b);
        b = la.round(60 * (b - a));
        return [a, b];
    }
    function Nj(a, c, d, e, f) {
        var k = c.offsetHeight,
            h = c.offsetHeight / 1440;
        c = 0;
        var g = null;
        if (!f.isAllDay) {
            g = H(f.repeatEvery);
            if (U(f.from, d) || g > y.never) c = h * gg(f.from);
            g = U(f.to, d) || g > y.never ? h * gg(f.to) - c : k;
            g -= 2 * b.spacing;
        }
        c <= b.spacing && ((c += b.spacing), (g -= b.spacing));
        e.style.top = c + "px";
        null !== g && (e.style.height = g + "px");
        e.offsetTop + e.offsetHeight > k - b.spacing
            ? ((d = k - e.offsetTop - 3 * b.spacing + "px"), (e.style.height = d), (e.style.maxHeight = d))
            : (e.style.maxHeight = k - (e.offsetTop + 2 * b.spacing) - h + "px");
        e = c + a.offsetHeight / 2;
        e <= a.offsetHeight && (e = 0);
        return e;
    }
    function um(a, c, d, e) {
        var f = a.scrollWidth;
        var k = a.offsetWidth / 1440;
        a = 0;
        var h = H(e.repeatEvery);
        if (U(e.from, c) || h > y.never) a = k * gg(e.from);
        c = U(e.to, c) || h > y.never ? k * gg(e.to) - a : f;
        c -= 2 * b.spacing;
        a <= b.spacing && ((a += b.spacing), (c -= b.spacing));
        d.style.left = a + "px";
        null !== c && (d.style.width = c + "px");
        d.offsetLeft + d.offsetWidth > f - b.spacing
            ? ((f = f - d.offsetLeft - 4 * b.spacing + "px"), (d.style.width = f), (d.style.maxWidth = f))
            : (d.style.maxWidth = f - (d.offsetLeft + 2 * b.spacing) - k + "px");
        return a - b.spacing;
    }
    function Qj(a, b, d, e, f) {
        var c = 0;
        null !== d &&
            (dc(a) && Xa(b) && f
                ? ((a = (e.offsetHeight / 1440) * gg(new Date())),
                  (d.style.display = "block"),
                  (d.style.top = a - d.offsetHeight / 2 + "px"),
                  (c = a))
                : (d.style.display = "none"));
        return c;
    }
    function Mj(a, b) {
        C(a);
        a = bd(b, "z-index", !1);
        a = null === a || "auto" === a ? 1 : parseInt(a) + 1;
        b.style.zIndex = a.toString();
    }
    function Rj(a) {
        a = a.getElementsByClassName("event");
        a = [].slice.call(a);
        var c = a.length;
        if (1 < c) {
            a.sort(Lm);
            for (var d = 0; d < c; d++)
                for (var e = a[d], f = 0; f < c; f++)
                    if (f !== d) {
                        var k = a[f],
                            h = !0,
                            g = e.offsetLeft,
                            p = e.offsetTop,
                            l = e.offsetWidth,
                            q = k.offsetLeft,
                            r = k.offsetTop,
                            t = k.offsetHeight,
                            u = k.offsetWidth;
                        if (p + e.offsetHeight < r || p > r + t || g + l < q || g > q + u) h = !1;
                        h &&
                            ((h = G(e.getAttribute("event-position"))),
                            (g = G(k.getAttribute("event-position"))),
                            h === n.empty && g === n.empty
                                ? (Ch(e),
                                  Ch(k),
                                  (k.style.left = e.offsetLeft + e.offsetWidth + b.spacing + "px"),
                                  e.setAttribute("event-position", "left"),
                                  k.setAttribute("event-position", "right"))
                                : h === n.empty && "right" === g
                                  ? (Ch(e),
                                    e.setAttribute("event-position", "left"),
                                    k.setAttribute("event-position", "right"))
                                  : h === n.empty &&
                                    "left" === g &&
                                    ((e.style.left = k.offsetLeft + k.offsetWidth + b.spacing + "px"),
                                    Ch(e),
                                    e.setAttribute("event-position", "right"),
                                    k.setAttribute("event-position", "left")));
                    }
        }
    }
    function Ch(a) {
        a.style.width = a.offsetWidth / 2 - (3 * b.spacing + b.spacing / 4) + "px";
    }
    function Lm(a, b) {
        var c = 0;
        a.offsetTop < b.offsetTop ? (c = -1) : a.offsetTop > b.offsetTop && (c = 1);
        return c;
    }
    function Kj(a, c, d) {
        C(a);
        null === yg
            ? 0 === a.dataTransfer.files.length
                ? Rk(a, c.getFullYear(), c.getMonth(), c.getDate())
                : Sk(a)
            : (U(Bg, c) || ((ca = Qb), (Vd = Bg), Tk(a, c.getFullYear(), c.getMonth(), c.getDate())),
              (c = d.offsetHeight / 1440),
              (d = Ze(d)),
              (a = (la.abs(a.pageY) - d.top + Ag - zg) / c),
              (Qb.from = fb(Qb.from, a)),
              (Qb.to = fb(Qb.to, a)),
              jb(),
              x(b.events.onEventUpdated, Qb),
              Sa(b.eventUpdatedText.replace("{0}", Qb.title)),
              ma(),
              (Qb = yg = null),
              (zg = Ag = 0));
    }
    function Wh(a) {
        C(a);
        if (b.manualEditingEnabled) {
            var c = null;
            a = null;
            var d = 0;
            Xa(W) ? ((c = wa), (a = Dg), (d = a.length)) : Xa(da) && ((c = me), (a = fi), (d = a.length));
            if (null !== c && 0 < d) {
                c = c.offsetHeight / 1440;
                for (var e = !1, f = 0; f < d; f++) {
                    var k = a[f];
                    k.height !== k.eventElement.offsetHeight &&
                        ((e = (k.eventElement.offsetHeight - k.height) / c),
                        (k.height = k.eventElement.offsetHeight),
                        (k.eventDetails.to = fb(k.eventDetails.to, e)),
                        (e = !0),
                        x(b.events.onEventUpdated, k.eventDetails),
                        Sa(b.eventUpdatedText.replace("{0}", k.eventDetails.title)));
                }
                e && (jb(), ma());
            }
        }
    }
    function Wa() {
        sd ? Uk() : Vk();
    }
    function Vk() {
        !sd && b.fullScreenModeEnabled && (Wk(), x(b.events.onFullScreenModeChanged, !0));
    }
    function Uk() {
        sd &&
            b.fullScreenModeEnabled &&
            ((sd = !1),
            (z.className = z.className.replace(" full-screen-view", n.empty)),
            (z.style.cssText = Xk),
            Yk("ib-arrow-expand-left-right", b.enableFullScreenTooltipText),
            ma(),
            x(b.events.onFullScreenModeChanged, !1));
    }
    function Wk() {
        Xk = z.style.cssText;
        sd = !0;
        z.className += " full-screen-view";
        z.removeAttribute("style");
        Yk("ib-arrow-contract-left-right", b.disableFullScreenTooltipText);
        ma();
    }
    function Yk(a, b) {
        Je(Jg, a);
        Je($h, a);
        Je(oi, a);
        Je(bi, a);
        Je(mi, a);
        Je(qi, a);
        Ra(Jg, b);
        Ra($h, b);
        Ra(oi, b);
        Ra(bi, b);
        Ra(mi, b);
        Ra(qi, b);
    }
    function fm(a, c, d) {
        if (b.showHolidays)
            for (var e = [], f = b.holidays.length, k = 0; k < f; k++) {
                var h = b.holidays[k],
                    g = G(h.title, n.empty),
                    p = G(h.backgroundColor, n.empty),
                    l = G(h.textColor, n.empty);
                Pj(h, a) && g !== n.empty && e.indexOf(g.toLowerCase())
                    ? (Mm(h, d, g, c),
                      p !== n.empty && d.style.setProperty("background-color", p, "important"),
                      l !== n.empty && d.style.setProperty("color", l, "important"),
                      e.push(g.toLowerCase()))
                    : (d.style.removeProperty("background-color"), d.style.removeProperty("color"));
            }
    }
    function Mm(a, c, d, e) {
        var f = Yc(a.onClick) || R(a.onClickUrl) ? "holiday-link" : "holiday",
            k = a.onClick;
        R(a.onClickUrl) &&
            (k = function () {
                Z.open(a.onClickUrl, b.urlWindowTarget);
            });
        aa(c, d, f + e, k, !0, !0);
    }
    function Pj(a, b) {
        var c = H(a.day),
            e = H(a.month);
        a = H(a.year);
        var f = !1;
        0 === a && c === b.getDate() && e === b.getMonth() + 1
            ? (f = !0)
            : 0 < a && c === b.getDate() && e === b.getMonth() + 1 && a === b.getFullYear() && (f = !0);
        return f;
    }
    function Bd() {
        var a = [];
        xb(function (b) {
            a.push(b);
        });
        return a;
    }
    function xb(a) {
        for (var b in qb)
            if (qb.hasOwnProperty(b))
                for (var d in qb[b])
                    if (qb[b].hasOwnProperty(d)) {
                        var e = Zk(qb[b][d]);
                        if (a(e, b, d)) return;
                    }
    }
    function vb(a, b) {
        b = p(b) ? b : !0;
        a = a.sort(function (a, b) {
            return a.from - b.from;
        });
        b &&
            (a = a.sort(function (a, b) {
                return $k(b.isAllDay) - $k(a.isAllDay);
            }));
        return a;
    }
    function ak(a, c) {
        Ub(E.body, Ka);
        var d = function () {
            gb(E.body, Ka);
        };
        If(
            b.confirmEventsRemoveTitle,
            b.confirmEventsRemoveMessage,
            function () {
                var e = 0;
                d();
                xb(function (b) {
                    H(b.repeatEvery) === y.never && c(b.from, a) && (q.removeEvent(b.id, !1), e++);
                });
                jb();
                Sa(b.eventsRemovedText.replace("{0}", e));
                La();
            },
            d
        );
    }
    function Zk(a) {
        a.isAllDay &&
            ((a.from = new Date(a.from.getFullYear(), a.from.getMonth(), a.from.getDate(), 0, 0)),
            (a.to = new Date(a.from.getFullYear(), a.from.getMonth(), a.from.getDate(), 23, 59)));
        return a;
    }
    function sk(a) {
        a = p(a) && N.hasOwnProperty(a) ? a : 0;
        for (var b in N) N.hasOwnProperty(b) && p(N[b].eventEditorInput) && (N[b].eventEditorInput.checked = !1);
        p(N[a].eventEditorInput) && (N[a].eventEditorInput.checked = !0);
    }
    function Dm() {
        var a = 0,
            b;
        for (b in N)
            if (N.hasOwnProperty(b) && p(N[b].eventEditorInput) && N[b].eventEditorInput.checked) {
                a = parseInt(b);
                break;
            }
        return a;
    }
    function U(a, b) {
        return a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
    }
    function Wj(a, b) {
        return a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
    }
    function $e(a, b) {
        a = new Date(a.getFullYear(), a.getMonth(), a.getDate());
        a.setHours(0, 0, 0, 0);
        b = new Date(b.getFullYear(), b.getMonth(), b.getDate());
        b.setHours(0, 0, 0, 0);
        return a <= b;
    }
    function dc(a) {
        var b = new Date();
        return (
            null !== a &&
            a.getDate() === b.getDate() &&
            a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth()
        );
    }
    function ng(a) {
        var b = new Date();
        return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
    }
    function vd(a) {
        var b = ("0" + a.getDate()).slice(-2),
            d = ("0" + a.getMonth()).slice(-2);
        return b + "/" + d + "/" + a.getFullYear();
    }
    function X(a) {
        return 0 > a.getDay() - 1 ? 6 : a.getDay() - 1;
    }
    function ad(a, b) {
        return new Date(a, b + 1, 0).getDate();
    }
    function Kg(a) {
        var c = b.thText;
        if (31 === a || 21 === a || 1 === a) c = b.stText;
        else if (22 === a || 2 === a) c = b.ndText;
        else if (23 === a || 3 === a) c = b.rdText;
        return c;
    }
    function gg(a) {
        var b = a.getHours();
        a = a.getMinutes();
        return 60 * b + a;
    }
    function Pc(a, b) {
        a = new Date(a.getFullYear(), a.getMonth(), a.getDate());
        b = new Date(b.getFullYear(), b.getMonth(), b.getDate());
        b = la.abs(b - a);
        return la.ceil(b / 864e5);
    }
    function Eg(a) {
        a.setDate(a.getDate() - 1);
    }
    function Ya(a, b) {
        b = Ba(b) ? b : 1;
        a.setDate(a.getDate() + b);
    }
    function Rb(a, b) {
        b = Ba(b) ? b : 1;
        a.setDate(a.getDate() + 7 * b);
    }
    function ke(a, b) {
        b = Ba(b) ? b : 1;
        a.setMonth(a.getMonth() + b);
    }
    function wd(a, b) {
        b = Ba(b) ? b : 1;
        a.setFullYear(a.getFullYear() + b);
    }
    function Ob(a, c) {
        var d = [];
        a = la.abs(c - a) / 1e3;
        c = la.floor(a / 86400);
        a -= 86400 * c;
        0 < c && d.push(c.toString() + n.space + (1 === c ? b.dayText : b.daysText));
        c = la.floor(a / 3600) % 24;
        a -= 3600 * c;
        0 < c && d.push(c.toString() + n.space + (1 === c ? b.hourText : b.hoursText));
        a = la.floor(a / 60) % 60;
        0 < a && d.push(a.toString() + n.space + (1 === a ? b.minuteText : b.minutesText));
        return d.join(", ");
    }
    function Bb(a, b) {
        if (p(a)) {
            var c = ("0" + a.getDate()).slice(-2),
                e = ("0" + (a.getMonth() + 1)).slice(-2);
            b.value = "date" === b.type ? a.getFullYear() + "-" + e + "-" + c : c + "/" + e + "/" + a.getFullYear();
        }
    }
    function Ae(a, b) {
        b = void 0 !== b ? b : new Date();
        if (a.value !== n.empty)
            if ("date" === a.type) b = new Date(a.value + "T00:00:00Z");
            else if ((a = a.value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)))
                (a = new Date(a[3], a[2] - 1, a[1], 0, 0, 0, 0)), a instanceof Date && !isNaN(a) && (b = a);
        p(b) && (b = new Date(b.getTime() + la.abs(6e4 * b.getTimezoneOffset())));
        return b;
    }
    function rk(a, b) {
        if ("date" === a.type) {
            var c = ("0" + b.getDate()).slice(-2),
                e = ("0" + (b.getMonth() + 1)).slice(-2);
            a.setAttribute("min", b.getFullYear() + "-" + e + "-" + c);
        }
    }
    function hh(a, b) {
        var c = 0,
            e = 0,
            f = b.split(":");
        2 === f.length &&
            ((b = parseInt(f[0])),
            (f = parseInt(f[1])),
            !isNaN(b) && 2 >= b.toString().length && (c = b),
            !isNaN(f) && 2 >= f.toString().length && (e = f));
        a.setHours(c);
        a.setMinutes(e);
    }
    function fb(a, b) {
        return new Date(a.getTime() + 6e4 * b);
    }
    function Ph(a, c) {
        var d = X(c);
        a = a.replace("{dddd}", b.dayNames[d]);
        a = a.replace("{ddd}", b.dayNamesAbbreviated[d]);
        a = a.replace("{dd}", J(c.getDate()));
        a = a.replace("{d}", c.getDate());
        a = a.replace("{o}", Kg(c.getDate()));
        a = a.replace("{mmmm}", b.monthNames[c.getMonth()]);
        a = a.replace("{mmm}", b.monthNamesAbbreviated[c.getMonth()]);
        a = a.replace("{mm}", J(c.getMonth() + 1));
        a = a.replace("{m}", c.getMonth() + 1);
        a = a.replace("{yyyy}", c.getFullYear());
        a = a.replace("{yyy}", c.getFullYear().toString().substring(1));
        a = a.replace("{yy}", c.getFullYear().toString().substring(2));
        return (a = a.replace("{y}", parseInt(c.getFullYear().toString().substring(2)).toString()));
    }
    function Pe(a) {
        if (b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday) a += 7 - b.startOfWeekDay;
        return a;
    }
    function We(a, b) {
        var c = H(a.repeatEvery);
        a = new Date(a.to);
        c > y.never && ((b = new Date(b)), b.setHours(a.getHours(), a.getMinutes()), (a = b));
        return a;
    }
    function de(a, c) {
        return yb(a) + n.space + b.toTimeText + n.space + yb(c);
    }
    function yb(a, c) {
        c = p(c) ? c : b.useAmPmForTimeDisplays;
        if (b.useAmPmForTimeDisplays && c) {
            var d = a.getHours();
            c = a.getMinutes();
            var e = "am";
            12 < d ? ((d -= 12), (e = "pm")) : 12 === d ? (e = "pm") : 0 === d && (d = 12);
            0 < c && (d += ":" + J(a.getMinutes()));
            d += e;
        } else d = J(a.getHours()) + ":" + J(a.getMinutes());
        return d;
    }
    function Xe(a, c, d) {
        a.innerHTML = n.empty;
        jc(a, c);
        aa(a, n.space + b.toTimeText + n.space);
        jc(a, d);
    }
    function jc(a, c, d, e, f) {
        d = p(d) ? d : !0;
        e = p(e) ? e : !0;
        (f = p(f) ? f : !1) && aa(a, b.dayNames[X(c)] + ", ");
        Nb(a, c);
        aa(a, n.space + b.monthNames[c.getMonth()]);
        e && aa(a, n.space + c.getFullYear());
        d && aa(a, n.space + yb(c));
    }
    function Nb(a, c, d, e, f) {
        f = p(f) ? f : !1;
        p(d) && aa(a, d);
        f ? aa(a, J(c.getDate())) : aa(a, c.getDate());
        b.showDayNumberOrdinals &&
            ((c = Kg(c.getDate())), p(c) && ((d = h("sup")), (d.innerText = c), a.appendChild(d)));
        p(e) && aa(a, e);
    }
    function di(a, c, d, e) {
        if (!nf(c) && b.dragAndDropForEventsEnabled && b.manualEditingEnabled) {
            var f = new Date(d),
                k = 0 <= b.weekendDays.indexOf(f.getDay()) ? " drag-not-allowed-weekend-day" : " drag-not-allowed";
            a.setAttribute("draggable", !0);
            a.ondragstart = function (d) {
                x(b.events.onEventDragStart, c);
                d.dataTransfer.setData("event_details", cc.stringify(c));
                Vd = f;
                ca = c;
                p(e) && ((e.className += k), Nm(e));
                Dh(
                    "cell",
                    function (a) {
                        a.className += " prevent-pointer-events";
                    },
                    a
                );
                Dh(
                    "events",
                    function (a) {
                        a.className += " prevent-pointer-events";
                    },
                    a
                );
            };
            a.ondragend = function () {
                x(b.events.onEventDragStop, ca);
                ca = Vd = null;
                p(e) &&
                    ((e.className = e.className.replace(k, n.empty)),
                    Gg(e, f.getFullYear(), f.getMonth(), f.getDate()));
                Dh(
                    "cell",
                    function (a) {
                        a.className = a.className.replace(" prevent-pointer-events", n.empty);
                    },
                    a
                );
                Dh(
                    "events",
                    function (a) {
                        a.className = a.className.replace(" prevent-pointer-events", n.empty);
                    },
                    a
                );
            };
        }
    }
    function Gg(a, c, d, e) {
        if (b.dragAndDropForEventsEnabled && b.manualEditingEnabled) {
            var f = new Date(c, d, e);
            a.ondragover = function (b) {
                al(b, a, f);
            };
            a.ondragenter = function (b) {
                al(b, a, f);
            };
            a.ondragleave = function (b) {
                bl(b, a, f);
            };
            a.ondrop = function (b) {
                C(b);
                bl(b, a, f);
                0 === b.dataTransfer.files.length ? Tk(b, c, d, e) : Sk(b);
            };
        }
    }
    function Nm(a) {
        b.dragAndDropForEventsEnabled &&
            b.manualEditingEnabled &&
            ((a.ondragover = null), (a.ondragenter = null), (a.ondragleave = null), (a.ondrop = null));
    }
    function al(a, b, d) {
        C(a);
        null === ca || b.className.indexOf(" drag-over") !== B.notFound || U(Vd, d) || (b.className += " drag-over");
    }
    function bl(a, b, d) {
        C(a);
        null !== ca &&
            b.className.indexOf(" drag-over") > B.notFound &&
            !U(Vd, d) &&
            (b.className = b.className.replace(" drag-over", n.empty));
    }
    function Tk(a, c, d, e) {
        var f = new Date(c, d, e);
        if (null === ca || U(Vd, f)) null === ca && Rk(a, c, d, e);
        else {
            x(b.events.onEventDragDrop, ca, f);
            p(e) || ((a = ad(c, d)), (e = ca.from.getDate()), e > a && (e = a));
            var k = Pc(ca.from, Vd);
            a = Pc(ca.from, ca.to);
            f = new Date(c, d, e, ca.from.getHours(), ca.from.getMinutes());
            c = new Date(c, d, e, ca.to.getHours(), ca.to.getMinutes());
            d = ca.repeatEnds;
            0 < k && (f.setDate(f.getDate() - k), c.setDate(c.getDate() - k));
            p(d) && ((e = Pc(f, ca.from)), f > ca.from ? d.setDate(d.getDate() + e) : d.setDate(d.getDate() - e));
            0 < a && c.setDate(c.getDate() + a);
            q.updateEventDateTimes(ca.id, f, c, d);
            Sa(b.eventUpdatedText.replace("{0}", ca.title));
            La();
        }
    }
    function Rk(a, c, d, e) {
        a = Se(a.dataTransfer.getData("event_details"));
        if (p(a) && null === ca) {
            var f = new Date(a.from),
                k = new Date(a.to);
            a.from = new Date(c, d, e, f.getHours(), f.getMinutes(), 0, 0);
            a.to = new Date(c, d, e, k.getHours(), k.getMinutes(), 0, 0);
            q.addEvent(a);
            Sa(b.eventAddedText.replace("{0}", a.title));
        }
    }
    function Sk(a) {
        p(Z.FileReader) && b.importEventsEnabled && Ri(a.dataTransfer.files);
    }
    function Se(a) {
        try {
            var b = cc.parse(a);
        } catch (d) {
            try {
                b = eval("(" + a + ")");
            } catch (e) {
                console.error("Errors in object: " + d.message + ", " + e.message), (b = null);
            }
        }
        return b;
    }
    function Hd(a, c, d) {
        b.dialogMovingEnabled &&
            ((a.onmousedown = function (a) {
                Wd ||
                    (Ga(),
                    (Fb = c),
                    (Wd = !0),
                    (cl = a.pageX - Fb.offsetLeft),
                    (dl = a.pageY - Fb.offsetTop),
                    (Eh = Fb.offsetLeft),
                    (Fh = Fb.offsetTop));
            }),
            (a.onmouseup = function () {
                el(d);
            }),
            (a.oncontextmenu = function () {
                el(null);
            }));
    }
    function el(a) {
        Wd && ((Wd = !1), (Fb = null), (Fh = Eh = 0), null !== a && a());
    }
    function Ol(a) {
        Wd && ((Fb.style.left = a.pageX - cl + "px"), (Fb.style.top = a.pageY - dl + "px"));
    }
    function Pl() {
        Wd && ((Fb.style.left = Eh + "px"), (Fb.style.top = Fh + "px"), (Wd = !1), (Fb = null), (Fh = Eh = 0));
    }
    function ok(a) {
        var b = h("div");
        a.appendChild(b);
        return b;
    }
    function ve(a, b, d, e) {
        e = p(e) ? e : !1;
        var c = h("div", "tab tab-control" + (e ? "-selected" : n.empty));
        w(c, b);
        a.appendChild(c);
        c.onclick = function () {
            d(c);
        };
    }
    function xe(a, b, d) {
        b = p(b) ? b : !1;
        d = p(d) ? d : !0;
        var c = h("div", "checkbox-container tab-content custom-scroll-bars");
        a.appendChild(c);
        d && (c.className += " custom-scroll-bars");
        b || (c.style.display = "none");
        return c;
    }
    function we(a, b, d) {
        var c = d.getElementsByClassName("tab-control-selected"),
            f = c.length;
        d = d.getElementsByClassName("tab-content");
        for (var k = d.length, h = 0; h < f; h++) c[h].className = "tab tab-control";
        for (c = 0; c < k; c++) d[c].style.display = "none";
        a.className = "tab tab-control-selected";
        b.style.display = "block";
    }
    function be(a, b, d, e) {
        e = p(e) ? e : !1;
        p(d) && d < new Date() && (a.className += " expired");
        e &&
            p(d) &&
            d < v &&
            (d.getFullYear() !== v.getFullYear() || d.getMonth() !== v.getMonth()) &&
            (a.className += " not-in-current-month");
        Ca(b.color)
            ? ((a.style.backgroundColor = b.color),
              Ca(b.colorText) && (a.style.color = b.colorText),
              Ca(b.colorBorder) && (a.style.borderColor = b.colorBorder))
            : b.isAllDay && (a.className += " all-day");
    }
    function hf(a, b) {
        Fi === b.id && (a.className += " focused-event");
        fl(b.id) && (a.className += " selected-event");
        for (var c = !1, e = ja.length, f = 0; f < e; f++)
            if (ja[f].id === b.id) {
                c = !0;
                break;
            }
        c && (a.className = Pb ? a.className + " cut-event" : a.className + " copy-event");
    }
    function hg(a, b, d) {
        d = p(d) ? d : !1;
        var c = E.getElementsByClassName("event");
        c = [].slice.call(c);
        for (var f = c.length, k = 0; k < f; k++) {
            var h = c[k],
                g = h.getAttribute("event-id");
            null !== g &&
                g === a.toString() &&
                (h.className = d ? h.className.replace(n.space + b, n.empty) : h.className + (n.space + b));
        }
    }
    function gm(a, b) {
        if (dc(a) && !r) {
            a = new Date();
            var c = new Date(),
                e = new Date(),
                f = H(b.repeatEvery);
            a.setHours(b.from.getHours(), b.from.getMinutes(), 0, 0);
            c.setHours(b.to.getHours(), b.to.getMinutes(), 0, 0);
            f !== y.never || dc(b.from) || a.setHours(0, 0, 0, 0);
            f !== y.never || dc(b.to) || c.setHours(23, 59, 59, 99);
            Ba(b.alertOffset) && 0 < b.alertOffset && (a = fb(a, -b.alertOffset));
            if (e >= a && e <= c) {
                if (!ib(b.showAsBusy) || b.showAsBusy) pe = !0;
                ((!gl.hasOwnProperty(b.id) && !ib(b.showAlerts)) || b.showAlerts) &&
                    hl(
                        function () {
                            Om(b);
                        },
                        !1,
                        b
                    );
            }
        }
    }
    function Om(a) {
        gl[a.id] = !0;
        new Notification(b.eventNotificationTitle, { body: b.eventNotificationBody.replace("{0}", a.title) }).onclick =
            function () {
                var c = G(a.url);
                c === n.empty ? P(a) : je(c);
                x(b.events.onNotificationClicked, a);
            };
    }
    function Li() {
        hl(function () {
            "granted" !== Notification.permission && Notification.requestPermission();
        });
    }
    function hl(a, c, d) {
        b.eventNotificationsEnabled &&
            !r &&
            ((c = p(c) ? c : !0),
            Notification ? a() : c && console.error("Browser notifications API unavailable."),
            p(d) && x(b.events.onNotification, d));
    }
    function je(a) {
        Z.open(a, b.urlWindowTarget);
        x(b.events.onEventUrlClicked, a);
    }
    function ge(a) {
        a = p(a) ? a : !0;
        for (var b = ja.length, d = 0; d < b; d++) {
            var e = ja[d];
            Pb ? hg(e.id, "cut-event", a) : hg(e.id, "copy-event", a);
        }
    }
    function gk(a) {
        ja = [];
        var b = Ea.length;
        if (0 < b) for (a = 0; a < b; a++) ja.push(Ea[a]);
        else ja.push(a);
    }
    function fl(a) {
        for (var b = !1, d = Ea.length, e = 0; e < d; e++)
            if (Ea[e].id === a) {
                b = !0;
                break;
            }
        return b;
    }
    function Yh(a, c) {
        for (var d = ja.length, e = 0; e < d; e++) {
            var f = ja[e],
                k = Pc(f.from, f.to);
            f = c ? f : te(f);
            f.from.setDate(a.getDate());
            f.from.setMonth(a.getMonth());
            f.from.setFullYear(a.getFullYear());
            f.to.setDate(a.getDate());
            f.to.setMonth(a.getMonth());
            f.to.setFullYear(a.getFullYear());
            f.to.setDate(f.to.getDate() + k);
            c ? x(b.events.onEventUpdated, f) : ((f.id = null), q.addEvent(f, !1, !0));
        }
        Sa(b.eventsPastedText.replace("{0}", d));
        c && (mc(), (ja = []), (Pb = !1));
        Ha();
        ma();
    }
    function jf(a, b) {
        C(a);
        Ga();
        if (nf(b)) fa(a) || mc();
        else if (fa(a))
            if (fl(b.id)) {
                a = Ea.length;
                for (var c = 0; c < a; c++)
                    if (Ea[c].id === b.id) {
                        Ea.splice(c, 1);
                        break;
                    }
                hg(b.id, "selected-event", !0);
            } else Ea.push(b), hg(b.id, "selected-event", !1);
        else mc();
    }
    function mc() {
        var a = !1,
            b = Ea.length;
        if (0 < b) {
            for (a = 0; a < b; a++) hg(Ea[a].id, "selected-event", !0);
            a = !0;
            Ea = [];
        }
        return a;
    }
    function tj(a) {
        ja = [];
        Pb = p(a) ? a : !1;
        a = Ea.length;
        if (0 < a) {
            for (var b = 0; b < a; b++) ja.push(Ea[b]);
            ge(!1);
        }
    }
    function Sh() {
        0 < b.autoRefreshTimerDelay &&
            !r &&
            bg &&
            nd(
                Na.autoRefresh,
                function () {
                    ej();
                    La();
                },
                b.autoRefreshTimerDelay
            );
    }
    function ej() {
        var a = x(b.events.onEventsFetch);
        if (pa(a))
            for (var c = a.length, d = 0; d < c; d++) {
                var e = a[d];
                q.removeEvent(e.id, !1, !1);
                q.addEvent(e, !1, !1);
            }
    }
    function Rh() {
        0 < b.autoRefreshTimerDelay && !r && bg && rd(Na.autoRefresh);
    }
    function La(a, c) {
        if (b.isWidget) mg ? F() : F(v);
        else if (((a = p(a) ? a : !1), (c = p(c) ? c : !1), oj() || a))
            ma(), mg ? (F(), Xj()) : Ha(), c && x(b.events.onRefresh);
    }
    function oj() {
        return !Pk() && !E.body.contains(Ka) && !Mg() && !ek() && !Qe() && null === ca;
    }
    function nd(a, b, d, e) {
        e = p(e) ? e : !0;
        Oi(a) ||
            (Gb[a] = e
                ? setInterval(b, d)
                : setTimeout(function () {
                      b();
                      delete Gb[a];
                  }, d));
    }
    function rd(a) {
        Oi(a) && (clearTimeout(Gb[a]), delete Gb[a]);
    }
    function Oi(a) {
        return Gb.hasOwnProperty(a) && null !== Gb[a];
    }
    function ij() {
        var a = [],
            b = [];
        xb(function (c) {
            c = G(c.group);
            c !== n.empty && b.indexOf(c.toLowerCase()) === B.notFound && (a.push(c), b.push(c.toLowerCase()));
        });
        a.sort();
        return a;
    }
    function h(a, b, d, e) {
        var c = a.toLowerCase();
        var k = "text" === c;
        Si.hasOwnProperty(c) || (Si[c] = k ? E.createTextNode(n.empty) : E.createElement(c));
        c = Si[c].cloneNode(!1);
        if (("input" === a && "button" !== d) || "textarea" === a) p(e) ? (c.id = e) : (c.id = ec());
        p(b) && (c.className = b);
        p(d) && (c.type = d);
        return c;
    }
    function qa(a, b, d) {
        var c = h("p");
        w(c, b);
        a.appendChild(c);
        p(d) && (c.className = d);
        return c;
    }
    function aa(a, b, d, e, f, k) {
        f = p(f) ? f : !1;
        (k = p(k) ? k : !1) && a.appendChild(h("div", "separator"));
        d = h("span", d);
        k = Yc(e);
        w(d, b);
        a.appendChild(d);
        k && (d.onclick = e);
        f && k && (d.ondblclick = C);
        return d;
    }
    function Fa(a, b, d, e, f) {
        d = h("input", d, "button");
        d.value = b;
        d.onclick = e;
        a.appendChild(d);
        p(f) && Ra(d, f, !0);
        return d;
    }
    function Aa(a) {
        (Ke.hasOwnProperty(a) && null !== Ke[a]) || (Ke[a] = il(a));
        E.body.contains(Ke[a]) || (Ke[a] = il(a));
        return Ke[a];
    }
    function il(a) {
        var b = null;
        if (null === z) b = E.getElementById(a);
        else
            for (var d = z.getElementsByTagName("*"), e = d.length, f = 0; f < e; f++)
                if (d[f].id === a) {
                    b = d[f];
                    break;
                }
        return b;
    }
    function Ub(a, b) {
        try {
            a.contains(b) || a.appendChild(b);
        } catch (d) {
            console.warn(d.message);
        }
    }
    function gb(a, b) {
        try {
            a.contains(b) && a.removeChild(b);
        } catch (d) {
            console.warn(d.message);
        }
    }
    function C(a) {
        a.preventDefault();
        a.cancelBubble = !0;
    }
    function Jc(a) {
        a.cancelBubble = !0;
    }
    function vf(a, b) {
        var c = a.pageX,
            e = a.pageY,
            f = mj();
        b.style.display = "block";
        c + b.offsetWidth > Z.innerWidth ? (c -= b.offsetWidth) : c++;
        e + b.offsetHeight > Z.innerHeight ? (e -= b.offsetHeight) : e++;
        c < f.left && (c = a.pageX + 1);
        e < f.top && (e = a.pageY + 1);
        b.style.left = c + "px";
        b.style.top = e + "px";
    }
    function lc(a, b) {
        try {
            a.type = b;
        } catch (d) {
            console.error(d.message), (a.type = "text");
        }
    }
    function Ze(a) {
        for (var b = 0, d = 0; a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop); )
            (b += a.offsetLeft - a.scrollLeft), (d += a.offsetTop - a.scrollTop), (a = a.offsetParent);
        return { left: b, top: d };
    }
    function mj() {
        var a = E.documentElement;
        return {
            left: (Z.pageXOffset || a.scrollLeft) - (a.clientLeft || 0),
            top: (Z.pageYOffset || a.scrollTop) - (a.clientTop || 0),
        };
    }
    function Ee(a) {
        (a = p(a) ? a : !0) && eb.pop();
    }
    function te(a, b) {
        b = p(b) ? b : !0;
        a = cc.parse(cc.stringify(a));
        a.from = new Date(a.from);
        a.to = new Date(a.to);
        p(a.repeatEnds) && (a.repeatEnds = new Date(a.repeatEnds));
        delete a.created;
        delete a.lastUpdated;
        b && delete a.id;
        return a;
    }
    function Je(a, b) {
        null !== a && (a.className = b);
    }
    function kc(a) {
        var c = a;
        b.allowHtmlInDisplay || ((c = h("div")), (c.innerHTML = a), (c = c.innerText));
        return c;
    }
    function bd(a, b, d) {
        d = p(d) ? d : !0;
        var c = null;
        Z.getComputedStyle
            ? (c = E.defaultView.getComputedStyle(a, null).getPropertyValue(b))
            : a.currentStyle && (c = a.currentStyle[b]);
        d && (c = parseFloat(c, 10));
        return c;
    }
    function w(a, c) {
        b.allowHtmlInDisplay ? (a.innerHTML = c) : (a.innerText = kc(c));
    }
    function Va(a, b) {
        null !== a && (a.style.display = b ? "inline-block" : "none");
    }
    function Dh(a, b, d) {
        a = z.getElementsByClassName(a);
        for (var c = a.length, f = 0; f < c; f++)
            for (var k = a[f].children, h = k.length, g = 0; g < h; g++) k[g] !== d && b(k[g]);
    }
    function ld(a) {
        for (var b = a.children, d = b.length - 1; d--; ) a.appendChild(b[d]);
    }
    function qg(a, b) {
        a = E.getElementsByClassName(a);
        a = [].slice.call(a);
        for (var c = a.length, e = 0; e < c; e++) {
            var f = a[e];
            f.id !== za && (p(b) ? (f.className = b) : (f.style.display = "none"));
        }
    }
    function ai(a, b) {
        for (a = a.getElementsByClassName(b); a[0]; ) a[0].parentNode.removeChild(a[0]);
    }
    function Gk(a, b) {
        for (a = a.getElementsByClassName(b); a[0]; ) a[0].className = a[0].className.replace(b, n.empty);
    }
    function ha(a, b, d, e) {
        var c = h("div", "radio-button-container");
        a.appendChild(c);
        a = h("label", "radio-button");
        c.appendChild(a);
        c = h("input", null, "radio");
        c.name = d;
        a.appendChild(c);
        p(e) && (c.onchange = e);
        a.appendChild(h("span", "check-mark"));
        aa(a, b, "text");
        return c;
    }
    function K(a, b, d, e, f, k, g) {
        k = p(k) ? n.space + k : n.empty;
        var c = h("div");
        a.appendChild(c);
        a = h("label", "checkbox" + k);
        c.appendChild(a);
        p(g) && (a.onclick = g);
        g = h("input", null, "checkbox");
        a.appendChild(g);
        p(e) && (g.name = e);
        p(d) && (g.onchange = d);
        p(f) && (g.checked = f);
        a.appendChild(h("span", "check-mark"));
        aa(a, b, "text");
        return [g, a];
    }
    function t(a, b, d, e, f) {
        b = h("div", b);
        b.ondblclick = C;
        b.onclick = e;
        a.appendChild(b);
        Ra(b, d, f);
        return b;
    }
    function sm(a, c) {
        a.innerHTML = n.empty;
        var d = h("div", "no-events-available-text");
        a.appendChild(d);
        qa(d, b.noEventsAvailableFullText);
        b.manualEditingEnabled &&
            (d.appendChild(h("div")),
            aa(d, b.clickText + n.space),
            aa(d, b.hereText, "link", c),
            aa(d, n.space + b.toAddANewEventText));
    }
    function J(a) {
        a = a.toString();
        return 1 === a.length ? "0" + a : a;
    }
    function Od(a) {
        return a.replace(/^\s+|\s+$/g, n.empty);
    }
    function ec() {
        for (var a = [], b = 0; 32 > b; b++) {
            (8 !== b && 12 !== b && 16 !== b && 20 !== b) || a.push("-");
            var d = la.floor(16 * la.random()).toString(16);
            a.push(d);
        }
        return a.join(n.empty);
    }
    function oa(a, b) {
        return a.substring(0, b.length) === b;
    }
    function Cg(a, b) {
        var c = a;
        b = p(b) ? b : 30;
        a.length > b &&
            ((b = 0 === b % 2 ? b / 2 : (b - 1) / 2), (c = a.substring(0, b) + "..." + a.substring(a.length - b)));
        return c;
    }
    function p(a) {
        return void 0 !== a && null !== a && a !== n.empty;
    }
    function Zh(a) {
        return "function" === typeof a;
    }
    function Yc(a) {
        return p(a) && Zh(a);
    }
    function R(a) {
        return p(a) && "string" === typeof a;
    }
    function Ba(a) {
        return p(a) && "number" === typeof a;
    }
    function ib(a) {
        return p(a) && "boolean" === typeof a;
    }
    function Pa(a) {
        return p(a) && "object" === typeof a;
    }
    function pa(a) {
        return Pa(a) && a instanceof Array;
    }
    function Ca(a) {
        return R(a) && a !== n.empty;
    }
    function xc(a) {
        return Pa(a) && a instanceof Date;
    }
    function fj(a) {
        return Pa(a) && void 0 !== a.tagName;
    }
    function tk(a) {
        return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
            a
        );
    }
    function ae(a, b) {
        var c = pa(a) && pa(b);
        c && (a.sort(), b.sort(), (c = cc.stringify(a) === cc.stringify(b)));
        return c;
    }
    function g(a, b) {
        return "string" === typeof a ? a : b;
    }
    function cb(a, b) {
        return R(a) ? a : b;
    }
    function l(a, b) {
        return ib(a) ? a : b;
    }
    function ta(a, b) {
        return Ba(a) ? a : b;
    }
    function ig(a, b) {
        return pa(a) ? a : b;
    }
    function Ti(a, b) {
        return xc(a) ? a : b;
    }
    function D(a, b) {
        return Yc(a) ? a : b;
    }
    function jb() {
        if (b.useLocalStorageForEvents && Z.localStorage) {
            if (b.useLocalStorageForEvents && Z.localStorage) {
                for (var a = Z.localStorage.length, c = [], d = 0; d < a; d++)
                    oa(Z.localStorage.key(d), "CJS_") && c.push(Z.localStorage.key(d));
                a = c.length;
                for (d = 0; d < a; d++) Z.localStorage.removeItem(c[d]);
            }
            c = vb(Bd());
            a = c.length;
            for (d = 0; d < a; d++) {
                var e = cc.stringify(c[d]);
                Z.localStorage.setItem("CJS_" + d.toString(), e);
            }
        }
    }
    function Ri(a) {
        for (
            var b = a.length,
                d = [],
                e = [],
                f = function (a, c) {
                    d.push(a);
                    e = e.concat(c);
                    d.length === b && jl(e);
                },
                k = 0;
            k < b;
            k++
        ) {
            var h = a[k],
                g = h.name.split(".").pop().toLowerCase();
            "json" === g ? Pm(h, f) : ("ics" === g || "ical" === g) && Qm(h, f);
        }
    }
    function Pm(a, b) {
        var c = new FileReader(),
            e = [];
        c.readAsText(a);
        c.onloadend = function () {
            b(a.name, e);
        };
        c.onload = function (a) {
            a = Se(a.target.result);
            Pa(a) && a.hasOwnProperty("events") && (a = a.events);
            for (var b = a.length, c = 0; c < b; c++) {
                var d = a[c];
                q.removeEvent(d.id, !1, !1);
                q.addEvent(d, !1, !1) && e.push(d);
            }
        };
    }
    function Qm(a, b) {
        var c = new FileReader(),
            e = [];
        c.readAsText(a);
        c.onloadend = function () {
            b(a.name, e);
        };
        c.onload = function (a) {
            kl(a.target.result, e);
        };
    }
    function kl(a, b) {
        a = a.split(n.newLineCharacterReturn);
        var c = a.length;
        if (a[0].indexOf("BEGIN:VCALENDAR") > B.notFound && a[c - 1].indexOf("END:VCALENDAR") > B.notFound)
            for (var e = !1, f = {}, h = 0; h < c; h++) {
                var g = a[h];
                if (g.indexOf("BEGIN:VEVENT") > B.notFound) e = !0;
                else if (g.indexOf("END:VEVENT") > B.notFound) {
                    var l = cc.parse(cc.stringify(f));
                    e = !1;
                    f = {};
                    q.removeEvent(l.id, !1, !1);
                    q.addEvent(l, !1, !1) && pa(b) && b.push(l);
                }
                if (e)
                    if (oa(g, "UID:")) f.id = g.split(":").pop();
                    else if (oa(g, "SUMMARY:")) f.title = g.split(":").pop();
                    else if (oa(g, "DESCRIPTION:")) f.description = g.split(":").pop();
                    else if (oa(g, "DTSTART:") || oa(g, "DTSTART;"))
                        (f.from = Gh(g.split(":").pop())), (f.isAllDay = 8 === g.split(":").pop().length);
                    else if (oa(g, "DTEND:") || oa(g, "DTEND;")) f.to = Gh(g.split(":").pop(), !0);
                    else if (oa(g, "CREATED:")) f.created = Gh(g.split(":").pop());
                    else if (oa(g, "LOCATION:")) f.location = g.split(":").pop();
                    else if (oa(g, "URL:")) f.url = g.split(":").pop();
                    else if (oa(g, "TRANSP:")) f.showAsBusy = "OPAQUE" === g.split(":").pop();
                    else if (oa(g, "BEGIN:VALARM")) f.showAlerts = !0;
                    else if (oa(g, "CATEGORIES:")) f.group = g.split(":").pop();
                    else if (oa(g, "ORGANIZER;"))
                        (l = f),
                            (g = g.split(";").pop().split(":")),
                            (l.organizerName = g[0].replace("CN=", n.empty)),
                            (l.organizerEmailAddress = g[2]);
                    else if (oa(g, "RRULE:")) {
                        l = f;
                        g = g.split(":").pop().split(";");
                        for (var r = g.length, t = null, u = null, v = null, x = 0; x < r; x++) {
                            var w = g[x];
                            oa(w, "FREQ=")
                                ? (t = w.split("=")[1])
                                : oa(w, "INTERVAL=")
                                  ? (u = w.split("=")[1])
                                  : oa(w, "UNTIL=") && (v = w.split("=")[1]);
                        }
                        p(t) &&
                            (p(u) && ((u = parseInt(u)), 2 <= u && "WEEKLY" !== t && (l.repeatEveryCustomValue = u)),
                            p(l.repeatEveryCustomValue)
                                ? "DAILY" === t
                                    ? (l.repeatEveryCustomType = M.daily)
                                    : "WEEKLY" === t
                                      ? (l.repeatEveryCustomType = M.weekly)
                                      : "MONTHLY" === t
                                        ? (l.repeatEveryCustomType = M.monthly)
                                        : "YEARLY" === t && (l.repeatEveryCustomType = M.yearly)
                                : "DAILY" === t
                                  ? (l.repeatEvery = y.everyDay)
                                  : "WEEKLY" === t
                                    ? (l.repeatEvery = y.everyWeek)
                                    : "MONTHLY" === t
                                      ? (l.repeatEvery = y.everyMonth)
                                      : "MONTHLY" === t && 2 === u
                                        ? (l.repeatEvery = y.every2Weeks)
                                        : "YEARLY" === t && (l.repeatEvery = y.everyYear),
                            p(v) && ((g = Gh(v)), g.setDate(g.getDate() - 1), (l.repeatEnds = g)));
                    }
            }
    }
    function Gh(a, b) {
        var c = n.empty,
            e = 8 === a.length;
        c += a.substring(0, 4);
        a = a.slice(4);
        c += "-" + a.substring(0, 2);
        a = a.slice(2);
        c += "-" + a.substring(0, 2);
        a = a.slice(2);
        c += "T";
        e
            ? ((b = p(b) ? b : !1), (c += b ? "23:59:00" : "00:00:00"))
            : ((a = a.slice(1)),
              (c += a.substring(0, 2)),
              (a = a.slice(2)),
              (c += ":" + a.substring(0, 2)),
              (a = a.slice(2)),
              (c += ":" + a.substring(0, 2)),
              a.slice(2));
        return new Date(c + "Z");
    }
    function Hl() {
        var a = h("input", null, "file");
        a.accept = ".ical, .ics, .json";
        a.multiple = "multiple";
        a.onchange = function () {
            Ri(a.files);
        };
        Hb();
        a.click();
    }
    function jl(a) {
        0 < a.length &&
            (jb(),
            Mb(),
            Ha(),
            ma(),
            Sa(b.eventsImportedText.replace("{0}", a.length)),
            x(b.events.onEventsImported, a));
    }
    function vc(a, c, d, e) {
        c = p(c) ? c.toLowerCase() : "csv";
        e = p(e) ? e : !1;
        var f = n.empty,
            g = vb,
            m = [];
        m = p(a) ? m.concat(a) : Bd();
        m = vb(m);
        a = g(m, !1);
        if ("csv" === c) {
            f = a.length;
            g = Ui();
            m = g[0];
            var l = g[1],
                r = [];
            g = [];
            for (var t = 0; t < l; t++) r.push(ll(m[t]));
            g.push(r.join(","));
            for (m = 0; m < f; m++) {
                l = g;
                r = Vi(a[m]);
                t = r.length;
                for (var u = 0; u < t; u++) r[u] = ll(r[u]);
                l.push(r.join(","));
            }
            f = g.join(n.newLine);
        } else if ("xml" === c) {
            m = d;
            f = [];
            g = a.length;
            f.push('<?xml version="1.0" ?>');
            f.push("<Calendar>");
            p(m) && f.push("<Filename>" + m + "</Filename>");
            f.push("<LastModified>" + Wi() + "</LastModified>");
            f.push("</Calendar>");
            f.push("<Events>");
            for (m = 0; m < g; m++) {
                l = a[m];
                r = Hh(l);
                t = r.length;
                f.push("<Event>");
                for (u = 0; u < t; u++) {
                    var v = r[u];
                    if ("customTags" !== v && l.hasOwnProperty(v) && null !== l[v]) {
                        var w = Xi(v);
                        f.push("<" + w + ">" + Ih(v, l[v]) + "</" + w + ">");
                    }
                }
                f.push("</Event>");
            }
            f.push("</Events>");
            f = f.join(n.newLine);
        } else if ("json" === c) f = hk(a);
        else if ("text" === c) {
            m = d;
            f = [];
            g = a.length;
            p(m) && f.push("Filename: " + m);
            f.push("Last Modified: " + Wi());
            f.push(n.empty);
            for (m = 0; m < g; m++) {
                l = a[m];
                r = Hh(l);
                t = r.length;
                for (u = 0; u < t; u++)
                    (v = r[u]),
                        "customTags" !== v &&
                            l.hasOwnProperty(v) &&
                            null !== l[v] &&
                            f.push(Xi(v) + ": " + Ih(v, l[v]));
                f.push(n.empty);
            }
            f.pop();
            f = f.join(n.newLine);
        } else if ("ical" === c) {
            f = [];
            g = a.length;
            f.push("BEGIN:VCALENDAR");
            f.push("VERSION:2.0");
            f.push("PRODID:-//Bunoon//Calendar.js v" + q.getVersion() + "//EN");
            f.push("CALSCALE:GREGORIAN");
            for (m = 0; m < g; m++) {
                l = a[m];
                r = G(l.organizerName);
                t = G(l.organizerEmailAddress);
                u = H(l.repeatEvery);
                R(r) || (r = b.organizerName);
                R(t) || (t = b.organizerEmailAddress);
                f.push("BEGIN:VEVENT");
                f.push("UID:" + G(l.id));
                f.push("STATUS:CONFIRMED");
                f.push("SEQUENCE:0");
                !ib(l.showAsBusy) || l.showAsBusy ? f.push("TRANSP:OPAQUE") : f.push("TRANSP:TRANSPARENT");
                l.isAllDay
                    ? (f.push("DTSTART:" + ml(l.from)), f.push("DTEND:" + ml(l.to)))
                    : (f.push("DTSTART:" + Le(l.from)), f.push("DTEND:" + Le(l.to)));
                xc(l.created) && ((v = Le(l.created)), f.push("DTSTAMP:" + v), f.push("CREATED:" + v));
                xc(l.lastUpdated) && f.push("LAST-MODIFIED:" + Le(l.lastUpdated));
                R(r) && R(t) && f.push("ORGANIZER;CN=" + r + ":MAILTO:" + t);
                u !== y.never && f.push("RRULE:" + Rm(l, u));
                R(l.title) && f.push("SUMMARY:" + jg(l.title));
                R(l.description) && f.push("DESCRIPTION:" + jg(l.description));
                R(l.location) && f.push("LOCATION:" + jg(l.location));
                R(l.url) && f.push("URL:" + jg(l.url));
                R(l.group) && f.push("CATEGORIES:" + jg(l.group));
                if (!ib(l.showAlerts) || l.showAlerts)
                    f.push("BEGIN:VALARM"),
                        f.push("TRIGGER;VALUE=DATE-TIME:" + Le(l.from)),
                        f.push("ACTION:DISPLAY"),
                        f.push("END:VALARM");
                f.push("END:VEVENT");
            }
            f.push("END:VCALENDAR");
            f = f.join(n.newLineCharacterReturn);
        } else if ("md" === c) {
            f = a.length;
            g = Ui();
            m = g[1];
            g = ["| " + g[0].join(" | ") + " |"];
            l = [];
            for (r = 0; r < m; r++) l.push("---");
            g.push("| " + l.join(" | ") + " |");
            for (m = 0; m < f; m++) (l = Vi(a[m])), g.push("| " + l.join(" | ") + " |");
            f = g.join(n.newLine);
        } else if ("html" === c) {
            m = d;
            f = [];
            g = a.length;
            f.push("<!DOCTYPE html>");
            f.push("<html>");
            f.push("<head>");
            f.push('<meta charset="utf-8" />');
            f.push('<meta http-equiv="Last-Modified" content="' + Wi() + ' GMT" />');
            p(m) && f.push("<title>" + m + "</title>");
            f.push("</head>");
            f.push("<body>");
            for (m = 0; m < g; m++) {
                l = a[m];
                r = Hh(l);
                t = r.length;
                f.push("<h3><b>" + l.id + ":</b></h3>");
                f.push("<ul>");
                for (u = 0; u < t; u++)
                    (v = r[u]),
                        "customTags" !== v &&
                            l.hasOwnProperty(v) &&
                            null !== l[v] &&
                            f.push("<li><b>" + Xi(v) + "</b>: " + Ih(v, l[v]) + "</li>");
                f.push("</ul>");
            }
            f.push("</body>");
            f.push("</html>");
            f = f.join(n.newLine);
        } else if ("tsv" === c) {
            f = a.length;
            g = Ui();
            m = g[0];
            l = g[1];
            r = [];
            g = [];
            for (t = 0; t < l; t++) r.push(nl(m[t]));
            g.push(r.join("\t"));
            for (m = 0; m < f; m++) {
                l = g;
                r = Vi(a[m]);
                t = r.length;
                for (u = 0; u < t; u++) r[u] = nl(r[u]);
                l.push(r.join("\t"));
            }
            f = g.join(n.newLine);
        }
        f !== n.empty &&
            (e
                ? (Jf.clipboard.writeText(f), Sa(b.eventsExportedText))
                : ((e = h("a")),
                  (g = "text"),
                  (l = m = c),
                  "text" === c
                      ? ((m = "plain"), (l = "txt"))
                      : "ical" === c
                        ? ((m = "calendar"), (l = "ics"))
                        : "json" === c
                          ? (g = "application")
                          : "md" === c
                            ? (m = "x-markdown")
                            : "html" === c
                              ? (m = "html")
                              : "tsv" === c && (m = "tab-separated-values"),
                  (m = [g, m, l]),
                  (c = m[0]),
                  (g = m[1]),
                  (m = m[2]),
                  (d = p(d) ? d : ik(m)),
                  (e.style.display = "none"),
                  e.setAttribute("target", "_blank"),
                  e.setAttribute("href", "data:" + c + "/" + g + ";charset=utf-8," + encodeURIComponent(f)),
                  e.setAttribute("download", d),
                  E.body.appendChild(e),
                  e.click(),
                  E.body.removeChild(e),
                  Sa(b.eventsExportedToText.replace("{0}", d))),
            x(b.events.onEventsExported, a));
    }
    function ik(a, c) {
        c = p(c) ? c : b.exportStartFilename;
        var d = new Date(),
            e = J(d.getDate()) + "-" + J(d.getMonth() + 1) + "-" + d.getFullYear();
        d = J(d.getHours()) + "-" + J(d.getMinutes());
        return c + e + "_" + d + "." + a;
    }
    function kg(a) {
        return a ? b.yesText : b.noText;
    }
    function Me(a) {
        var c = b.repeatsNever;
        p(a) &&
            ((c = J(a.getDate()) + "/" + J(a.getMonth() + 1) + "/" + a.getFullYear()),
            (a = J(a.getHours()) + ":" + J(a.getMinutes())),
            (c = c + n.space + a));
        return c;
    }
    function G(a, b) {
        b = p(b) ? b : n.empty;
        return R(a) ? a : b;
    }
    function H(a, b) {
        b = p(b) ? b : 0;
        return Ba(a) ? a : b;
    }
    function $k(a, b) {
        b = p(b) ? b : 0;
        return ib(a) ? (a ? 1 : 0) : b;
    }
    function xi(a, b) {
        b = p(b) ? b : !1;
        return ib(a) ? a : b;
    }
    function Oc(a, b) {
        b = p(b) ? b : [];
        return pa(a) ? a : b;
    }
    function pd(a) {
        var c = b.dailyText;
        a = H(a);
        a === y.everyDay
            ? (c = b.repeatsEveryDayText)
            : a === y.everyWeek
              ? (c = b.repeatsEveryWeekText)
              : a === y.every2Weeks
                ? (c = b.repeatsEvery2WeeksText)
                : a === y.everyMonth
                  ? (c = b.repeatsEveryMonthText)
                  : a === y.everyYear
                    ? (c = b.repeatsEveryYearText)
                    : a === y.custom && (c = b.repeatsByCustomSettingsText);
        return c;
    }
    function Jh(a, b) {
        b = p(b) ? b : !1;
        a = Oc(a);
        for (var c = a.length, e = 0; e < c; e++) a[e] = b ? '"' + a[e] + '"' : a[e];
        return a.join(",");
    }
    function Xi(a) {
        return a.charAt(0).toUpperCase() + a.slice(1);
    }
    function Ih(a, c, d) {
        var e = (d = p(d) ? d : !1) ? '"' + G(c) + '"' : G(c);
        "boolean" === typeof c
            ? (e = d ? c.toString() : kg(c))
            : "object" === typeof c && c instanceof Date
              ? (e = d ? '"' + c.toISOString() + '"' : Me(c))
              : "object" === typeof c && c instanceof Array
                ? (e = "repeatEveryExcludeDays" !== a || d ? (d ? "[" + Jh(c) + "]" : Jh(c)) : ol(c))
                : "number" === typeof c &&
                  ("repeatEvery" !== a || d
                      ? "repeatEveryCustomType" !== a || d
                          ? (e = "type" !== a || d ? c.toString() : N[parseInt(c)].text)
                          : ((a = b.dailyText),
                            (c = H(c)),
                            c === M.daily
                                ? (a = b.dailyText)
                                : c === M.weekly
                                  ? (a = b.weeklyText)
                                  : c === M.monthly
                                    ? (a = b.monthlyText)
                                    : c === M.yearly && (a = b.yearlyText),
                            (e = a))
                      : (e = pd(c)));
        return e;
    }
    function ol(a) {
        var c = [];
        if (pa(a))
            for (var d = a.length, e = 0; e < d; e++) {
                var f = a[e] - 1;
                -1 === f && (f = 6);
                c.push(b.dayNames[f]);
            }
        return Jh(c);
    }
    function Ui() {
        var a = [
            b.idText,
            b.typeText,
            b.fromText,
            b.toText,
            b.isAllDayText,
            b.titleText,
            b.descriptionText,
            b.locationText,
            b.backgroundColorText,
            b.textColorText,
            b.borderColorText,
            b.repeatsText,
            b.repeatEndsText,
            b.repeatDaysToExcludeText,
            b.seriesIgnoreDatesText,
            b.createdText,
            b.lastUpdatedText,
            b.organizerNameText,
            b.organizerEmailAddressText,
            b.urlText,
            b.lockedText,
            b.showAlertsText,
            b.showAsBusyText,
            b.alertOffsetText,
        ];
        return [a, a.length];
    }
    function Vi(a) {
        var b = [];
        b.push(G(a.id));
        b.push(N[H(a.type)].text);
        b.push(Me(a.from));
        b.push(Me(a.to));
        b.push(kg(a.isAllDay));
        b.push(G(a.title));
        b.push(G(a.description));
        b.push(G(a.location));
        b.push(G(a.color));
        b.push(G(a.colorText));
        b.push(G(a.colorBorder));
        b.push(pd(a.repeatEvery));
        b.push(Me(a.repeatEnds));
        b.push(ol(a.repeatEveryExcludeDays));
        b.push(Jh(a.seriesIgnoreDates));
        b.push(Me(a.created));
        b.push(Me(a.lastUpdated));
        b.push(G(a.organizerName));
        b.push(G(a.organizerEmailAddress));
        b.push(G(a.url));
        b.push(kg(a.locked));
        b.push(kg(!ib(a.showAlerts) || a.showAlerts));
        b.push(kg(!ib(a.showAsBusy) || a.showAsBusy));
        b.push(H(a.alertOffset));
        return b;
    }
    function Hh(a) {
        var b = [],
            d;
        for (d in a) a.hasOwnProperty(d) && b.push(d);
        b.sort();
        return b;
    }
    function Wi() {
        var a = new Date(),
            b = Ph("{ddd}, {dd} {mmm} {yyyy}", a);
        return (b += " " + J(a.getHours()) + ":" + J(a.getMinutes()) + ":" + J(a.getSeconds()));
    }
    function ll(a) {
        a = a
            .toString()
            .replace(/(\r\n|\n|\r)/gm, n.empty)
            .replace(/(\s\s)/gm, n.space);
        a = a.replace(/"/g, '""');
        return '"' + a + '"';
    }
    function hk(a) {
        var b = [],
            d = a.length;
        b.push("{");
        b.push('"events": [');
        for (var e = 0; e < d; e++) {
            var f = a[e],
                g = Hh(f),
                h = g.length;
            b.push("{");
            for (var l = 0; l < h; l++) {
                var p = g[l];
                "customTags" !== p &&
                    f.hasOwnProperty(p) &&
                    null !== f[p] &&
                    b.push('"' + p + '":' + Ih(p, f[p], !0) + ",");
            }
            f = b[b.length - 1];
            b[b.length - 1] = f.substring(0, f.length - 1);
            b.push("},");
        }
        b[b.length - 1] = "}";
        b.push("]");
        b.push("}");
        return b.join(n.newLine);
    }
    function jg(a) {
        return kc(G(a)).replace(/\n|\r/g, n.empty);
    }
    function Le(a) {
        var b = [];
        p(a) &&
            (b.push(a.getFullYear()),
            b.push(J(a.getMonth() + 1)),
            b.push(J(a.getDate())),
            b.push("T"),
            b.push(J(a.getHours())),
            b.push(J(a.getMinutes())),
            b.push("00Z"));
        return b.join(n.empty);
    }
    function ml(a) {
        var b = [];
        p(a) && (b.push(a.getFullYear()), b.push(J(a.getMonth() + 1)), b.push(J(a.getDate())));
        return b.join(n.empty);
    }
    function Rm(a, b) {
        var c = [];
        if (b === y.custom) {
            b = H(a.repeatEveryCustomType);
            var e = H(a.repeatEveryCustomValue);
            b === M.daily
                ? c.push("FREQ=DAILY")
                : b === M.weekly
                  ? c.push("FREQ=WEEKLY")
                  : b === M.monthly
                    ? c.push("FREQ=MONTHLY")
                    : b === M.yearly && c.push("FREQ=YEARLY");
            c.push("INTERVAL=" + e.toString());
        } else
            b === y.everyDay
                ? c.push("FREQ=DAILY")
                : b === y.everyWeek || b === y.every2Weeks
                  ? c.push("FREQ=WEEKLY")
                  : b === y.everyMonth
                    ? c.push("FREQ=MONTHLY")
                    : b === y.everyYear && c.push("FREQ=YEARLY"),
                b === y.every2Weeks ? c.push("INTERVAL=2") : c.push("INTERVAL=1");
        xc(a.repeatEnds) && ((a = new Date(a.repeatEnds)), a.setDate(a.getDate() + 1), c.push("UNTIL=" + Le(a)));
        return c.join(";");
    }
    function nl(a) {
        return (a = a.replace(/\\/g, "\\\\"));
    }
    function x(a) {
        var b = null,
            d = [].slice.call(arguments, 1);
        0 < d.length && (b = !1);
        Yc(a) && (b = a.apply(null, d));
        return b;
    }
    function ce(a, c, d) {
        Yc(b.events.onEventClick) &&
            a.addEventListener("click", function () {
                x(b.events.onEventClick, c);
            });
        b.manualEditingEnabled
            ? (a.ondblclick = function (a) {
                  C(a);
                  p(d) ? P(c, null, null, d) : P(c);
              })
            : Yc(b.events.onEventDoubleClick) &&
              (a.ondblclick = function () {
                  x(b.events.onEventDoubleClick, c);
              });
    }
    function bf(a) {
        p(a) && C(a);
        if (!r || db)
            (a = new Date(v)),
                a.setMonth(a.getMonth() - 1),
                a.getFullYear() >= b.minimumYear && (F(a), x(b.events.onPreviousMonth, a), rb());
    }
    function cf(a) {
        p(a) && C(a);
        if (!r || db)
            (a = new Date(v)),
                a.setMonth(a.getMonth() + 1),
                a.getFullYear() <= b.maximumYear && (F(a), x(b.events.onNextMonth, a), rb());
    }
    function tg() {
        if (!r || db) {
            var a = new Date(v);
            a.setFullYear(a.getFullYear() - 1);
            a.getFullYear() >= b.minimumYear && (F(a), x(b.events.onPreviousYear, a), rb());
        }
    }
    function ug() {
        if (!r || db) {
            var a = new Date(v);
            a.setFullYear(a.getFullYear() + 1);
            a.getFullYear() <= b.maximumYear && (F(a), x(b.events.onNextYear, a), rb());
        }
    }
    function wg() {
        if (!r || db) {
            var a = new Date();
            if (v.getMonth() !== a.getMonth() || v.getFullYear() !== a.getFullYear()) F(), x(b.events.onToday), rb();
        }
    }
    function pl(a) {
        b = kb(a);
        b.views = kb(b.views);
        b.showDayNumberOrdinals = l(b.showDayNumberOrdinals, !0);
        b.dragAndDropForEventsEnabled = l(b.dragAndDropForEventsEnabled, !0);
        b.exportEventsEnabled = l(b.exportEventsEnabled, !0);
        b.manualEditingEnabled = l(b.manualEditingEnabled, !0);
        b.autoRefreshTimerDelay = ta(b.autoRefreshTimerDelay, 3e4);
        b.fullScreenModeEnabled = l(b.fullScreenModeEnabled, !0);
        b.tooltipDelay = ta(b.tooltipDelay, 1e3);
        b.holidays = ig(b.holidays, [
            { day: 1, month: 1, title: "New Year's Day", onClickUrl: "https://en.wikipedia.org/wiki/New_Year%27s_Day" },
            {
                day: 14,
                month: 2,
                title: "Valentine's Day",
                onClickUrl: "https://en.wikipedia.org/wiki/Valentine%27s_Day",
            },
            {
                day: 1,
                month: 4,
                title: "April Fools' Day",
                onClickUrl: "https://en.wikipedia.org/wiki/April_Fools%27_Day",
            },
            { day: 22, month: 4, title: "Earth Day", onClickUrl: "https://en.wikipedia.org/wiki/Earth_Day" },
            { day: 31, month: 10, title: "Halloween", onClickUrl: "https://en.wikipedia.org/wiki/Halloween" },
            {
                day: 11,
                month: 11,
                title: "Remembrance Day",
                onClickUrl: "https://en.wikipedia.org/wiki/Remembrance_Day",
            },
            { day: 24, month: 12, title: "Christmas Eve", onClickUrl: "https://en.wikipedia.org/wiki/Christmas_Eve" },
            { day: 25, month: 12, title: "Christmas Day", onClickUrl: "https://en.wikipedia.org/wiki/Christmas" },
            { day: 26, month: 12, title: "Boxing Day", onClickUrl: "https://en.wikipedia.org/wiki/Boxing_Day" },
            {
                day: 31,
                month: 12,
                title: "New Year's Eve",
                onClickUrl: "https://en.wikipedia.org/wiki/New_Year%27s_Eve",
            },
        ]);
        b.organizerName = cb(b.organizerName, n.empty);
        b.organizerEmailAddress = cb(b.organizerEmailAddress, n.empty);
        b.spacing = ta(b.spacing, 10);
        b.maximumEventTitleLength = ta(b.maximumEventTitleLength, 0);
        b.maximumEventDescriptionLength = ta(b.maximumEventDescriptionLength, 0);
        b.maximumEventLocationLength = ta(b.maximumEventLocationLength, 0);
        b.maximumEventGroupLength = ta(b.maximumEventGroupLength, 0);
        b.eventNotificationsEnabled = l(b.eventNotificationsEnabled, !1);
        b.tooltipsEnabled = l(b.tooltipsEnabled, !0);
        b.urlWindowTarget = cb(b.urlWindowTarget, "_blank");
        b.defaultEventBackgroundColor = cb(b.defaultEventBackgroundColor, "#484848");
        b.defaultEventTextColor = cb(b.defaultEventTextColor, "#F5F5F5");
        b.defaultEventBorderColor = cb(b.defaultEventBorderColor, "#282828");
        b.hideEventsWithoutGroupAssigned = l(b.hideEventsWithoutGroupAssigned, !1);
        b.showHolidays = l(b.showHolidays, !0);
        b.useTemplateWhenAddingNewEvent = l(b.useTemplateWhenAddingNewEvent, !0);
        b.useEscapeKeyToExitFullScreenMode = l(b.useEscapeKeyToExitFullScreenMode, !0);
        b.allowHtmlInDisplay = l(b.allowHtmlInDisplay, !1);
        b.initialDateTime = Ti(b.initialDateTime, null);
        b.data = ig(b.data, null);
        b.weekendDays = $c(b.weekendDays, 0) ? [0, 6] : b.weekendDays;
        b.workingDays = $c(b.workingDays, 0) ? [] : b.workingDays;
        b.minimumYear = ta(b.minimumYear, 1900);
        b.maximumYear = ta(b.maximumYear, 2099);
        b.defaultEventDuration = ta(b.defaultEventDuration, 30);
        b.configurationDialogEnabled = l(b.configurationDialogEnabled, !0);
        b.popUpNotificationsEnabled = l(b.popUpNotificationsEnabled, !0);
        b.startOfWeekDay = ta(b.startOfWeekDay, va.monday);
        b.useLocalStorageForEvents = l(b.useLocalStorageForEvents, !1);
        b.shortcutKeysEnabled = l(b.shortcutKeysEnabled, !0);
        b.reverseOrderDaysOfWeek = l(b.reverseOrderDaysOfWeek, !1);
        b.importEventsEnabled = l(b.importEventsEnabled, !0);
        b.useAmPmForTimeDisplays = l(b.useAmPmForTimeDisplays, !1);
        b.isWidget = l(b.isWidget, !1);
        b.viewToOpenOnFirstLoad = cb(b.viewToOpenOnFirstLoad, null);
        b.eventColorsEditingEnabled = l(b.eventColorsEditingEnabled, !0);
        b.eventTooltipDelay = ta(b.eventTooltipDelay, 1e3);
        b.jumpToDateEnabled = l(b.jumpToDateEnabled, !0);
        b.shareEventsEnabled = l(b.shareEventsEnabled, !0);
        b.showReoccurringEventIcons = l(b.showReoccurringEventIcons, !0);
        b.dialogMovingEnabled = l(b.dialogMovingEnabled, !0);
        $c(b.visibleDays) && ((b.visibleDays = [0, 1, 2, 3, 4, 5, 6]), (od = []));
        a = cb(b.workingHoursStart, null);
        var c = cb(b.workingHoursEnd, null);
        p(a) || ((a = b.workingHoursStart), (a = Pa(a) ? a : null));
        p(c) || ((c = b.workingHoursEnd), (c = Pa(c) ? c : null));
        b.workingHoursStart = a;
        b.workingHoursEnd = c;
        b.sideMenu = kb(b.sideMenu);
        b.sideMenu.showDays = l(b.sideMenu.showDays, !0);
        b.sideMenu.showGroups = l(b.sideMenu.showGroups, !0);
        b.sideMenu.showEventTypes = l(b.sideMenu.showEventTypes, !0);
        b.sideMenu.showWorkingDays = l(b.sideMenu.showWorkingDays, !0);
        b.sideMenu.showWeekendDays = l(b.sideMenu.showWeekendDays, !0);
        b.sideMenu.showSelectAllNoneButtons = l(b.sideMenu.showSelectAllNoneButtons, !0);
        b.views.fullDay = kb(b.views.fullDay);
        b.views.fullDay.enabled = l(b.views.fullDay.enabled, !0);
        b.views.fullDay.showAllDayEventDetails = l(b.views.fullDay.showAllDayEventDetails, !1);
        b.views.fullDay.minutesBetweenSections = ta(b.views.fullDay.minutesBetweenSections, 30);
        b.views.fullDay.showTimelineArrow = l(b.views.fullDay.showTimelineArrow, !0);
        b.views.fullDay.showExtraTitleBarButtons = l(b.views.fullDay.showExtraTitleBarButtons, !0);
        b.views.fullDay.showEventUrls = l(b.views.fullDay.showEventUrls, !1);
        b.views.fullWeek = kb(b.views.fullWeek);
        b.views.fullWeek.enabled = l(b.views.fullWeek.enabled, !0);
        b.views.fullWeek.showAllDayEventDetails = l(b.views.fullWeek.showAllDayEventDetails, !1);
        b.views.fullWeek.showDayNamesHeaders = l(b.views.fullWeek.showDayNamesHeaders, !0);
        b.views.fullWeek.minutesBetweenSections = ta(b.views.fullWeek.minutesBetweenSections, 30);
        b.views.fullWeek.showTimelineArrow = l(b.views.fullWeek.showTimelineArrow, !0);
        b.views.fullWeek.showWeekNumbersInTitles = l(b.views.fullWeek.showWeekNumbersInTitles, !1);
        b.views.fullWeek.showExtraTitleBarButtons = l(b.views.fullWeek.showExtraTitleBarButtons, !0);
        b.views.fullWeek.showDatesInDayHeaders = l(b.views.fullWeek.showDatesInDayHeaders, !0);
        b.views.fullWeek.padDayMonthNumbers = l(b.views.fullWeek.padDayMonthNumbers, !1);
        b.views.fullWeek.showEventUrls = l(b.views.fullWeek.showEventUrls, !1);
        b.views.fullMonth = kb(b.views.fullMonth);
        b.views.fullMonth.maximumEventsPerDayDisplay = ta(b.views.fullMonth.maximumEventsPerDayDisplay, 3);
        b.views.fullMonth.showTimesInEvents = l(b.views.fullMonth.showTimesInEvents, !1);
        b.views.fullMonth.minimumDayHeight = ta(b.views.fullMonth.minimumDayHeight, 0);
        b.views.fullMonth.showPreviousNextMonthNames = l(b.views.fullMonth.showPreviousNextMonthNames, !0);
        b.views.fullMonth.useOnlyDotEvents = l(b.views.fullMonth.useOnlyDotEvents, !1);
        b.views.fullMonth.applyCssToEventsNotInCurrentMonth = l(
            b.views.fullMonth.applyCssToEventsNotInCurrentMonth,
            !0
        );
        b.views.fullMonth.addYearButtons = l(b.views.fullMonth.addYearButtons, !1);
        b.views.fullMonth.titleBarDateFormat = cb(b.views.fullMonth.titleBarDateFormat, "{mmmm} {yyyy}");
        b.views.fullMonth.showDayNamesHeaders = l(b.views.fullMonth.showDayNamesHeaders, !0);
        b.views.fullMonth.isPinUpViewEnabled = l(b.views.fullMonth.isPinUpViewEnabled, !1);
        b.views.fullMonth.pinUpViewImageUrls = ig(b.views.fullMonth.pinUpViewImageUrls, []);
        b.views.fullMonth.showMonthButtonsInYearDropDownMenu = l(
            b.views.fullMonth.showMonthButtonsInYearDropDownMenu,
            !0
        );
        b.views.fullMonth.showExtraTitleBarButtons = l(b.views.fullMonth.showExtraTitleBarButtons, !0);
        b.views.fullMonth.pinUpViewImageCssClasses = ig(b.views.fullMonth.pinUpViewImageCssClasses, []);
        b.views.fullMonth.showYearDropDownButtonIcon = l(b.views.fullMonth.showYearDropDownButtonIcon, !0);
        b.views.fullMonth.padDayNumbers = l(b.views.fullMonth.padDayNumbers, !1);
        b.views.fullMonth.showPreviousNextYears = l(b.views.fullMonth.showPreviousNextYears, !0);
        ib(b.views.fullMonth.allowEventScrolling) ||
            ((b.views.fullMonth.allowEventScrolling = !1),
            b.views.fullMonth.allowEventScrolling && (b.views.fullMonth.maximumEventsPerDayDisplay = 0));
        b.views.fullYear = kb(b.views.fullYear);
        b.views.fullYear.enabled = l(b.views.fullYear.enabled, !0);
        b.views.fullYear.showExtraTitleBarButtons = l(b.views.fullYear.showExtraTitleBarButtons, !0);
        b.views.fullYear.padDayNumbers = l(b.views.fullYear.padDayNumbers, !1);
        b.views.timeline = kb(b.views.timeline);
        b.views.timeline.enabled = l(b.views.timeline.enabled, !0);
        b.views.timeline.defaultAxis = cb(b.views.timeline.defaultAxis, "group");
        b.views.timeline.minutesBetweenSections = ta(b.views.timeline.minutesBetweenSections, 30);
        b.views.timeline.showExtraTitleBarButtons = l(b.views.timeline.showExtraTitleBarButtons, !0);
        b.views.allEvents = kb(b.views.allEvents);
        b.views.allEvents.enabled = l(b.views.allEvents.enabled, !0);
        b.views.allEvents.showExtraTitleBarButtons = l(b.views.allEvents.showExtraTitleBarButtons, !0);
        b.views.allEvents.showEventUrls = l(b.views.allEvents.showEventUrls, !1);
        b.views.datePicker = kb(b.views.datePicker);
        b.views.datePicker.selectedDateFormat = cb(b.views.datePicker.selectedDateFormat, "{d}{o} {mmmm} {yyyy}");
        b.views.datePicker.minimumDate = Ti(b.views.datePicker.minimumDate, null);
        b.views.datePicker.maximumDate = Ti(b.views.datePicker.maximumDate, null);
        b.events = kb(b.events);
        b.events.onPreviousMonth = D(b.events.onPreviousMonth, null);
        b.events.onNextMonth = D(b.events.onNextMonth, null);
        b.events.onPreviousYear = D(b.events.onPreviousYear, null);
        b.events.onNextYear = D(b.events.onNextYear, null);
        b.events.onToday = D(b.events.onToday, null);
        b.events.onEventAdded = D(b.events.onEventAdded, null);
        b.events.onEventUpdated = D(b.events.onEventUpdated, null);
        b.events.onEventRemoved = D(b.events.onEventRemoved, null);
        b.events.onEventsAdded = D(b.events.onEventsAdded, null);
        b.events.onEventsCleared = D(b.events.onEventsCleared, null);
        b.events.onEventsExported = D(b.events.onEventsExported, null);
        b.events.onSetDate = D(b.events.onSetDate, null);
        b.events.onEventsSet = D(b.events.onEventsSet, null);
        b.events.onGroupsCleared = D(b.events.onGroupsCleared, null);
        b.events.onEventsUpdated = D(b.events.onEventsUpdated, null);
        b.events.onOptionsUpdated = D(b.events.onOptionsUpdated, null);
        b.events.onNotificationClicked = D(b.events.onNotificationClicked, null);
        b.events.onSearchOptionsUpdated = D(b.events.onSearchOptionsUpdated, null);
        b.events.onFullScreenModeChanged = D(b.events.onFullScreenModeChanged, null);
        b.events.onEventsSetFromJSON = D(b.events.onEventsSetFromJSON, null);
        b.events.onEventsAddedFromJSON = D(b.events.onEventsAddedFromJSON, null);
        b.events.onDatePickerDateChanged = D(b.events.onDatePickerDateChanged, null);
        b.events.onGroupRemoved = D(b.events.onGroupRemoved, null);
        b.events.onEventUrlClicked = D(b.events.onEventUrlClicked, null);
        b.events.onDestroy = D(b.events.onDestroy, null);
        b.events.onRefresh = D(b.events.onRefresh, null);
        b.events.onDatePickerOpened = D(b.events.onDatePickerOpened, null);
        b.events.onDatePickerClosed = D(b.events.onDatePickerClosed, null);
        b.events.onRender = D(b.events.onRender, null);
        b.events.onEventDragStart = D(b.events.onEventDragStart, null);
        b.events.onEventDragStop = D(b.events.onEventDragStop, null);
        b.events.onEventDragDrop = D(b.events.onEventDragDrop, null);
        b.events.onEventClick = D(b.events.onEventClick, null);
        b.events.onEventDoubleClick = D(b.events.onEventDoubleClick, null);
        b.events.onVisibleGroupsChanged = D(b.events.onVisibleGroupsChanged, null);
        b.events.onVisibleEventTypesChanged = D(b.events.onVisibleEventTypesChanged, null);
        b.events.onNotification = D(b.events.onNotification, null);
        b.events.onBeforeEventAddEdit = D(b.events.onBeforeEventAddEdit, null);
        b.events.onBusyStateChange = D(b.events.onBusyStateChange, null);
        b.events.onEventsFetch = D(b.events.onEventsFetch, null);
        b.events.onEventsImported = D(b.events.onEventsImported, null);
        b.events.onFullDayEventRender = D(b.events.onFullDayEventRender, null);
        b.events.onFullWeekEventRender = D(b.events.onFullWeekEventRender, null);
        b.events.onFullMonthEventRender = D(b.events.onFullMonthEventRender, null);
        b.events.onAllEventsEventRender = D(b.events.onAllEventsEventRender, null);
        b.events.onTimelineEventRender = D(b.events.onTimelineEventRender, null);
        b.events.onWidgetEventRender = D(b.events.onWidgetEventRender, null);
        b.events.onToolTipEventRender = D(b.events.onToolTipEventRender, null);
        b.events.onFullDayTitleRender = D(b.events.onFullDayTitleRender, null);
        b.events.onFullWeekTitleRender = D(b.events.onFullWeekTitleRender, null);
        b.events.onTimelineTitleRender = D(b.events.onTimelineTitleRender, null);
        b.events.onFullMonthPinUpRender = D(b.events.onFullMonthPinUpRender, null);
        b.events.onViewChange = D(b.events.onViewChange, null);
        $c(b.dayHeaderNames, 7) && (b.dayHeaderNames = "Mon Tue Wed Thu Fri Sat Sun".split(" "));
        $c(b.dayNames, 7) && (b.dayNames = "Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "));
        $c(b.dayNamesAbbreviated, 7) && (b.dayNamesAbbreviated = "Mon Tue Wed Thu Fri Sat Sun".split(" "));
        $c(b.monthNames, 12) &&
            (b.monthNames =
                "January February March April May June July August September October November December".split(" "));
        $c(b.monthNamesAbbreviated, 12) &&
            (b.monthNamesAbbreviated = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "));
        b.previousMonthTooltipText = g(b.previousMonthTooltipText, "Previous Month");
        b.nextMonthTooltipText = g(b.nextMonthTooltipText, "Next Month");
        b.previousDayTooltipText = g(b.previousDayTooltipText, "Previous Day");
        b.nextDayTooltipText = g(b.nextDayTooltipText, "Next Day");
        b.previousWeekTooltipText = g(b.previousWeekTooltipText, "Previous Week");
        b.nextWeekTooltipText = g(b.nextWeekTooltipText, "Next Week");
        b.addEventTooltipText = g(b.addEventTooltipText, "Add Event");
        b.closeTooltipText = g(b.closeTooltipText, "Close");
        b.exportEventsTooltipText = g(b.exportEventsTooltipText, "Export Events");
        b.todayTooltipText = g(b.todayTooltipText, "Today");
        b.refreshTooltipText = g(b.refreshTooltipText, "Refresh");
        b.searchTooltipText = g(b.searchTooltipText, "Search");
        b.expandDayTooltipText = g(b.expandDayTooltipText, "Expand Day");
        b.viewAllEventsTooltipText = g(b.viewAllEventsTooltipText, "View All Events");
        b.viewFullWeekTooltipText = g(b.viewFullWeekTooltipText, "View Full Week");
        b.fromText = g(b.fromText, "From:");
        b.toText = g(b.toText, "To:");
        b.isAllDayText = g(b.isAllDayText, "Is All-Day");
        b.titleText = g(b.titleText, "Title:");
        b.descriptionText = g(b.descriptionText, "Description:");
        b.locationText = g(b.locationText, "Location:");
        b.addText = g(b.addText, "Add");
        b.updateText = g(b.updateText, "Update");
        b.cancelText = g(b.cancelText, "Cancel");
        b.removeEventText = g(b.removeEventText, "Remove");
        b.addEventTitle = g(b.addEventTitle, "Add Event");
        b.editEventTitle = g(b.editEventTitle, "Edit Event");
        b.exportStartFilename = g(b.exportStartFilename, "exported_events_");
        b.fromTimeErrorMessage = g(b.fromTimeErrorMessage, "Please select a valid 'From' time.");
        b.toTimeErrorMessage = g(b.toTimeErrorMessage, "Please select a valid 'To' time.");
        b.toSmallerThanFromErrorMessage = g(
            b.toSmallerThanFromErrorMessage,
            "Please select a 'To' date that is larger than the 'From' date."
        );
        b.titleErrorMessage = g(b.titleErrorMessage, "Please enter a value in the 'Title' field (no empty space).");
        b.stText = g(b.stText, "st");
        b.ndText = g(b.ndText, "nd");
        b.rdText = g(b.rdText, "rd");
        b.thText = g(b.thText, "th");
        b.yesText = g(b.yesText, "Yes");
        b.noText = g(b.noText, "No");
        b.allDayText = g(b.allDayText, "All-Day");
        b.allEventsText = g(b.allEventsText, "All Events");
        b.toTimeText = g(b.toTimeText, "to");
        b.confirmEventRemoveTitle = g(b.confirmEventRemoveTitle, "Confirm Event Removal");
        b.confirmEventRemoveMessage = g(
            b.confirmEventRemoveMessage,
            "Removing this event cannot be undone.  Do you want to continue?"
        );
        b.okText = g(b.okText, "OK");
        b.exportEventsTitle = g(b.exportEventsTitle, "Export Events");
        b.selectColorsText = g(b.selectColorsText, "Select Colors");
        b.backgroundColorText = g(b.backgroundColorText, "Background Color:");
        b.textColorText = g(b.textColorText, "Text Color:");
        b.borderColorText = g(b.borderColorText, "Border Color:");
        b.searchEventsTitle = g(b.searchEventsTitle, "Search Events");
        b.previousText = g(b.previousText, "Previous");
        b.nextText = g(b.nextText, "Next");
        b.matchCaseText = g(b.matchCaseText, "Match Case");
        b.repeatsText = g(b.repeatsText, "Repeats:");
        b.repeatDaysToExcludeText = g(b.repeatDaysToExcludeText, "Repeat Days To Exclude:");
        b.daysToExcludeText = g(b.daysToExcludeText, "Days To Exclude:");
        b.seriesIgnoreDatesText = g(b.seriesIgnoreDatesText, "Series Ignore Dates:");
        b.repeatsNever = g(b.repeatsNever, "Never");
        b.repeatsEveryDayText = g(b.repeatsEveryDayText, "Every Day");
        b.repeatsEveryWeekText = g(b.repeatsEveryWeekText, "Every Week");
        b.repeatsEvery2WeeksText = g(b.repeatsEvery2WeeksText, "Every 2 Weeks");
        b.repeatsEveryMonthText = g(b.repeatsEveryMonthText, "Every Month");
        b.repeatsEveryYearText = g(b.repeatsEveryYearText, "Every Year");
        b.repeatsCustomText = g(b.repeatsCustomText, "Custom:");
        b.repeatOptionsTitle = g(b.repeatOptionsTitle, "Repeat Options");
        b.moreText = g(b.moreText, "More");
        b.includeText = g(b.includeText, "Include:");
        b.minimizedTooltipText = g(b.minimizedTooltipText, "Minimize");
        b.restoreTooltipText = g(b.restoreTooltipText, "Restore");
        b.removeAllEventsInSeriesText = g(b.removeAllEventsInSeriesText, "Remove All Events In Series");
        b.createdText = g(b.createdText, "Created:");
        b.organizerNameText = g(b.organizerNameText, "Organizer:");
        b.organizerEmailAddressText = g(b.organizerEmailAddressText, "Organizer Email:");
        b.enableFullScreenTooltipText = g(b.enableFullScreenTooltipText, "Turn On Full-Screen Mode");
        b.disableFullScreenTooltipText = g(b.disableFullScreenTooltipText, "Turn Off Full-Screen Mode");
        b.idText = g(b.idText, "ID:");
        b.expandMonthTooltipText = g(b.expandMonthTooltipText, "Expand Month");
        b.repeatEndsText = g(b.repeatEndsText, "Repeat Ends:");
        b.noEventsAvailableText = g(b.noEventsAvailableText, "No events available.");
        b.viewFullWeekText = g(b.viewFullWeekText, "View Full Week");
        b.noEventsAvailableFullText = g(b.noEventsAvailableFullText, "There are no events available to view.");
        b.clickText = g(b.clickText, "Click");
        b.hereText = g(b.hereText, "here");
        b.toAddANewEventText = g(b.toAddANewEventText, "to add a new event.");
        b.weekText = g(b.weekText, "Week");
        b.groupText = g(b.groupText, "Group:");
        b.configurationTooltipText = g(b.configurationTooltipText, "Configuration");
        b.configurationTitleText = g(b.configurationTitleText, "Configuration");
        b.groupsText = g(b.groupsText, "Groups");
        b.eventNotificationTitle = g(b.eventNotificationTitle, "Calendar.js");
        b.eventNotificationBody = g(b.eventNotificationBody, "The event '{0}' has started.");
        b.optionsText = g(b.optionsText, "Options:");
        b.startsWithText = g(b.startsWithText, "Starts With");
        b.endsWithText = g(b.endsWithText, "Ends With");
        b.containsText = g(b.containsText, "Contains");
        b.displayTabText = g(b.displayTabText, "Display");
        b.enableAutoRefreshForEventsText = g(b.enableAutoRefreshForEventsText, "Enable auto-refresh for events");
        b.enableBrowserNotificationsText = g(b.enableBrowserNotificationsText, "Enable browser notifications");
        b.enableTooltipsText = g(b.enableTooltipsText, "Enable tooltips");
        b.dayText = g(b.dayText, "day");
        b.daysText = g(b.daysText, "days");
        b.hourText = g(b.hourText, "hour");
        b.hoursText = g(b.hoursText, "hours");
        b.minuteText = g(b.minuteText, "minute");
        b.minutesText = g(b.minutesText, "minutes");
        b.enableDragAndDropForEventText = g(b.enableDragAndDropForEventText, "Enable drag & drop for events");
        b.organizerTabText = g(b.organizerTabText, "Organizer");
        b.removeEventsTooltipText = g(b.removeEventsTooltipText, "Remove Events");
        b.confirmEventsRemoveTitle = g(b.confirmEventsRemoveTitle, "Confirm Events Removal");
        b.confirmEventsRemoveMessage = g(
            b.confirmEventsRemoveMessage,
            "Removing these non-repeating events cannot be undone.  Do you want to continue?"
        );
        b.eventText = g(b.eventText, "Event");
        b.optionalText = g(b.optionalText, "Optional");
        b.urlText = g(b.urlText, "Url:");
        b.openUrlText = g(b.openUrlText, "Open Url");
        b.thisWeekTooltipText = g(b.thisWeekTooltipText, "This Week");
        b.dailyText = g(b.dailyText, "Daily");
        b.weeklyText = g(b.weeklyText, "Weekly");
        b.monthlyText = g(b.monthlyText, "Monthly");
        b.yearlyText = g(b.yearlyText, "Yearly");
        b.repeatsByCustomSettingsText = g(b.repeatsByCustomSettingsText, "By Custom Settings");
        b.lastUpdatedText = g(b.lastUpdatedText, "Last Updated:");
        b.advancedText = g(b.advancedText, "Advanced");
        b.copyText = g(b.copyText, "Copy");
        b.pasteText = g(b.pasteText, "Paste");
        b.duplicateText = g(b.duplicateText, "Duplicate");
        b.showAlertsText = g(b.showAlertsText, "Show Alerts");
        b.selectDatePlaceholderText = g(b.selectDatePlaceholderText, "Select date...");
        b.hideDayText = g(b.hideDayText, "Hide Day");
        b.notSearchText = g(b.notSearchText, "Not (opposite)");
        b.showHolidaysInTheDisplaysText = g(
            b.showHolidaysInTheDisplaysText,
            "Show holidays in the main display and title bars"
        );
        b.newEventDefaultTitle = g(b.newEventDefaultTitle, "* New Event");
        b.urlErrorMessage = g(b.urlErrorMessage, "Please enter a valid Url in the 'Url' field (or leave blank).");
        b.searchTextBoxPlaceholder = g(b.searchTextBoxPlaceholder, "Search title, description, etc...");
        b.currentMonthTooltipText = g(b.currentMonthTooltipText, "Current Month");
        b.cutText = g(b.cutText, "Cut");
        b.showMenuTooltipText = g(b.showMenuTooltipText, "Show Menu");
        b.eventTypesText = g(b.eventTypesText, "Event Types");
        b.lockedText = g(b.lockedText, "Locked:");
        b.typeText = g(b.typeText, "Type:");
        b.sideMenuHeaderText = g(b.sideMenuHeaderText, "Calendar.js");
        b.sideMenuDaysText = g(b.sideMenuDaysText, "Days");
        b.visibleDaysText = g(b.visibleDaysText, "Visible Days");
        b.previousYearTooltipText = g(b.previousYearTooltipText, "Previous Year");
        b.nextYearTooltipText = g(b.nextYearTooltipText, "Next Year");
        b.showOnlyWorkingDaysText = g(b.showOnlyWorkingDaysText, "Show Only Working Days");
        b.exportFilenamePlaceholderText = g(b.exportFilenamePlaceholderText, "Name (optional)");
        b.errorText = g(b.errorText, "Error");
        b.exportText = g(b.exportText, "Export");
        b.configurationUpdatedText = g(b.configurationUpdatedText, "Configuration updated.");
        b.eventAddedText = g(b.eventAddedText, "{0} event added.");
        b.eventUpdatedText = g(b.eventUpdatedText, "{0} event updated.");
        b.eventRemovedText = g(b.eventRemovedText, "{0} event removed.");
        b.eventsRemovedText = g(b.eventsRemovedText, "{0} events removed.");
        b.eventsExportedToText = g(b.eventsExportedToText, "Events exported to {0}.");
        b.eventsPastedText = g(b.eventsPastedText, "{0} events pasted.");
        b.eventsExportedText = g(b.eventsExportedText, "Events exported.");
        b.copyToClipboardOnlyText = g(b.copyToClipboardOnlyText, "Copy to clipboard only");
        b.workingDaysText = g(b.workingDaysText, "Working Days");
        b.weekendDaysText = g(b.weekendDaysText, "Weekend Days");
        b.showAsBusyText = g(b.showAsBusyText, "Show As Busy");
        b.selectAllText = g(b.selectAllText, "Select All");
        b.selectNoneText = g(b.selectNoneText, "Select None");
        b.importEventsTooltipText = g(b.importEventsTooltipText, "Import Events");
        b.eventsImportedText = g(b.eventsImportedText, "{0} events imported.");
        b.viewFullYearTooltipText = g(b.viewFullYearTooltipText, "View Full Year");
        b.currentYearTooltipText = g(b.currentYearTooltipText, "Current Year");
        b.alertOffsetText = g(b.alertOffsetText, "Alert Offset (minutes):");
        b.viewFullDayTooltipText = g(b.viewFullDayTooltipText, "View Full Day");
        b.confirmEventUpdateTitle = g(b.confirmEventUpdateTitle, "Confirm Event Update");
        b.confirmEventUpdateMessage = g(
            b.confirmEventUpdateMessage,
            "Would you like to update the event from this point forward, or the entire series?"
        );
        b.forwardText = g(b.forwardText, "Forward");
        b.seriesText = g(b.seriesText, "Series");
        b.viewTimelineTooltipText = g(b.viewTimelineTooltipText, "View Timeline");
        b.nextPropertyTooltipText = g(b.nextPropertyTooltipText, "Next Property");
        b.noneText = g(b.noneText, "(none)");
        b.shareText = g(b.shareText, "Share");
        b.shareStartFilename = g(b.shareStartFilename, "shared_events_");
        b.previousPropertyTooltipText = g(b.previousPropertyTooltipText, "Previous Property");
        b.jumpToDateTitle = g(b.jumpToDateTitle, "Jump To Date");
        b.goText = g(b.goText, "Go");
        lg(b.eventTypeNormalText, "Normal", 0);
        lg(b.eventTypeMeetingText, "Meeting", 1);
        lg(b.eventTypeBirthdayText, "Birthday", 2);
        lg(b.eventTypeHolidayText, "Holiday", 3);
        lg(b.eventTypeTaskText, "Task", 4);
        Li();
    }
    function lg(a, b, d) {
        N.hasOwnProperty(d) && (R(a) ? (N[d].text = a) : (N[d].text = b));
    }
    function $c(a, b) {
        b = Ba(b) ? b : 1;
        return !pa(a) || a.length < b;
    }
    function kb(a, b) {
        Pa(a) || (a = Pa(b) ? b : {});
        return a;
    }
    var q = this,
        E = null,
        Z = null,
        Jf = null,
        za = null,
        la = null,
        cc = null,
        n = { empty: "", space: " ", newLine: "\n", newLineCharacterReturn: "\r\n" },
        B = { notFound: -1 },
        va = { monday: 0, saturday: 5, sunday: 6 },
        Q = {
            enter: 13,
            escape: 27,
            left: 37,
            right: 39,
            down: 40,
            a: 65,
            c: 67,
            e: 69,
            f: 70,
            g: 71,
            j: 74,
            m: 77,
            o: 79,
            v: 86,
            x: 88,
            f5: 116,
            f11: 122,
        },
        y = { never: 0, everyDay: 1, everyWeek: 2, every2Weeks: 3, everyMonth: 4, everyYear: 5, custom: 6 },
        M = { daily: 0, weekly: 1, monthly: 2, yearly: 3 },
        Re = { day: 0, previousMonthDay: 1, nextMonthDay: 2 },
        b = {},
        u = {},
        N = {
            0: { text: "Normal Label", eventEditorInput: null },
            1: { text: "Meeting Label", eventEditorInput: null },
            2: { text: "Birthday Label", eventEditorInput: null },
            3: { text: "Holiday Label", eventEditorInput: null },
            4: { text: "Task Label", eventEditorInput: null },
        },
        O = { visibleGroups: null, visibleEventTypes: null, visibleAllEventsMonths: {} },
        lb = !1,
        Zd = !1,
        Oe = !1,
        qb = {},
        Cd = {},
        Ea = [],
        ja = [],
        Pb = !1,
        Vd = null,
        ca = null,
        gl = {},
        v = null,
        mg = !1,
        Mc = null,
        pe = !1,
        Yj = !1,
        Ke = {},
        ya = [],
        Si = {},
        Gb = {},
        bg = !0,
        Na = {
            windowResize: "WindowResize",
            searchOptionsChanged: "SearchOptionsChanged",
            searchEventsHistoryDropDown: "SearchEventsHistoryDropDown",
            showToolTip: "ShowToolTip",
            autoRefresh: "AutoRefresh",
            hideNotification: "HideNotification",
            sideMenuEvents: "SideMenuEvents",
        },
        ub = null,
        Kb = null,
        pg = !1,
        cd = null,
        Cc = null,
        Gc = null,
        gd = null,
        Hc = null,
        fd = null,
        jd = null,
        Dc = null,
        id = null,
        Ec = null,
        hd = null,
        Fc = null,
        $d = null,
        Lc = null,
        Ye = null,
        r = !1,
        db = !1,
        lj = null,
        tb = {
            fullMonth: "full-month",
            fullDay: "full-day",
            fullWeek: "full-week",
            fullYear: "full-year",
            timeline: "timeline",
            allEvents: "all-events",
        },
        ob = [],
        Ie = 0,
        yg = null,
        zg = null,
        Qb = null,
        Ag = null,
        Bg = null,
        z = null,
        Ka = null,
        sd = !1,
        Xk = null,
        od = [],
        W = null,
        df = null,
        wb = null,
        Nc = null,
        wa = null,
        he = null,
        L = null,
        gc = [],
        $h = null,
        Hj = null,
        ff = null,
        Ij = null,
        Dg = [],
        da = null,
        Qa = null,
        bi = null,
        Tj = null,
        zd = null,
        yd = null,
        Ad = null,
        me = null,
        le = null,
        lf = null,
        hc = [],
        mf = {},
        Sb = null,
        Sj = null,
        ne = null,
        ei = !1,
        Hg = null,
        of = 0,
        fi = [],
        Ib = null,
        pf = [],
        S = null,
        oe = null,
        Oh = null,
        Lg = null,
        Tb = null,
        qf = null,
        Rc = {},
        Jg = null,
        Ig = null,
        mb = null,
        Qc = 0,
        gi = null,
        yc = null,
        ed = [],
        Nh = null,
        Da = null,
        mi = null,
        li = null,
        qe = null,
        sa = null,
        Og = 0,
        ra = null,
        oi = null,
        Zj = null,
        Ed = null,
        Lb = [],
        vg = [],
        pi = [],
        ia = null,
        qi = null,
        ck = null,
        bk = null,
        Ja = null,
        Fd = null,
        sf = null,
        tf = null,
        Qg = {},
        uf = [],
        Bc = [],
        ba = null,
        Pg = null,
        Za = null,
        re = "location organizerName group organizerEmailAddress url title description".split(" "),
        eb = [],
        Fb = null,
        Eh = 0,
        Fh = 0,
        Wd = !1,
        cl = 0,
        dl = 0,
        bb = null,
        Vb = null,
        Yg = null,
        Zg = null,
        Uc = null,
        Xg = null,
        Sc = null,
        Wb = null,
        Xb = null,
        hb = null,
        Yb = null,
        ye = null,
        Kf = null,
        Lf = null,
        Ab = null,
        wi = null,
        Ld = null,
        Md = null,
        Kd = null,
        ze = null,
        qc = null,
        Mf = null,
        Nf = null,
        Of = null,
        Pf = null,
        Qf = null,
        Zb = null,
        $g = null,
        Id = null,
        Rf = null,
        Sf = null,
        Tf = null,
        Wc = null,
        ea = {},
        Gf = null,
        Ug = null,
        Jd = null,
        yi = null,
        Uf = null,
        rc = null,
        Be = null,
        Ce = null,
        De = null,
        sc = null,
        ah = null,
        bh = null,
        ch = null,
        dh = null,
        eh = null,
        fh = null,
        gh = null,
        Nd = null,
        Xc = null,
        zi = null,
        Ai = null,
        Vg = null,
        Bi = null,
        Xf = null,
        tc = null,
        Ta = null,
        Ci = null,
        xk = null,
        yk = null,
        zk = null,
        Ak = null,
        Bk = null,
        Ck = null,
        Dk = null,
        uc = null,
        Cb = null,
        lh = null,
        ka = null,
        Qd = null,
        $b = null,
        na = null,
        nh = null,
        mh = null,
        Ge = null,
        Zf = null,
        $f = null,
        oh = null,
        ph = null,
        qh = null,
        rh = null,
        sh = null,
        th = null,
        uh = null,
        vh = null,
        wh = null,
        Di = !1,
        Db = [],
        Zc = 0,
        Fi = null,
        zb = null,
        pb = null,
        Eb = null,
        Rd = null,
        He = null,
        Gi = null,
        Hi = null,
        Ii = null,
        Ji = null,
        Ki = null,
        xh = null,
        yh = null,
        wc = null,
        bc = null,
        Ia = null,
        ri = null,
        Rg = null,
        Gd = null,
        Y = null,
        ab = null,
        fk = null,
        Hf = null,
        Ff = null,
        si = null,
        Ef = null,
        Df = null,
        yf = null,
        Cf = null,
        Bf = null,
        Af = null,
        zf = null,
        xf = null,
        wf = null,
        Tg = null,
        Sg = null,
        Oa = null,
        vi = null,
        ui = null,
        ti = null,
        Wg = null,
        ef = null,
        ue = null,
        nb = null,
        jk = null,
        lk = null,
        mk = null,
        nk = null,
        kk = null,
        T = null,
        Bh = null,
        Ni = null,
        Ah = null,
        Sd = null,
        cg = null,
        Td = null,
        dg = null,
        eg = null,
        fg = null,
        Ud = null,
        Dd = null,
        fc = null;
    q.turnOnFullScreen = function () {
        r || Vk();
        return q;
    };
    q.turnOffFullScreen = function () {
        r || Uk();
        return q;
    };
    q.isFullScreenActivated = function () {
        return sd;
    };
    q.startTheAutoRefreshTimer = function () {
        r || ((bg = !0), Sh());
        return q;
    };
    q.stopTheAutoRefreshTimer = function () {
        r || (Rh(), (bg = !1));
        return q;
    };
    q.destroy = function () {
        if (lb) {
            Oe && Kh(!1);
            for (var a in Gb) Gb.hasOwnProperty(a) && null !== Gb[a] && (clearTimeout(Gb[a]), delete Gb[a]);
            a = ya.length;
            for (var c = 0; c < a; c++) E.body.removeChild(ya[c]);
            ya = [];
            r && E.removeEventListener("click", qd);
            b.tooltipsEnabled && document.body.removeEventListener("mousemove", ic);
            p(z) && ((z.className = n.empty), (z.innerHTML = n.empty));
            x(b.events.onDestroy, za);
        }
        return q;
    };
    q.moveToPreviousMonth = function () {
        bf();
        return q;
    };
    q.moveCurrentViewToPreviousDate = function () {
        qj();
        return q;
    };
    q.moveToNextMonth = function () {
        cf();
        return q;
    };
    q.moveCurrentViewToNextDate = function () {
        rj();
        return q;
    };
    q.moveToPreviousYear = function () {
        tg();
        return q;
    };
    q.moveToNextYear = function () {
        ug();
        return q;
    };
    q.moveToToday = function () {
        wg();
        return q;
    };
    q.moveCurrentViewToToday = function () {
        sj();
        return q;
    };
    q.getCurrentDisplayDate = function () {
        return new Date(v);
    };
    q.setCurrentDisplayDate = function (a) {
        !xc(a) ||
            (r && !db) ||
            ((a = new Date(a)),
            !U(v, a) &&
                a.getFullYear() >= b.minimumYear &&
                a.getFullYear() <= b.maximumYear &&
                (F(a), x(b.events.onSetDate, a)));
        return q;
    };
    q.getSelectedDatePickerDate = function () {
        return r ? new Date(Mc) : null;
    };
    q.setSelectedDatePickerDate = function (a) {
        xc(a) &&
            r &&
            ((a = new Date(a)),
            nj(a) &&
                !U(a, Mc) &&
                a.getFullYear() >= b.minimumYear &&
                a.getFullYear() <= b.maximumYear &&
                (a.setHours(0, 0, 0, 0), qd(), Uh(a), x(b.events.onDatePickerDateChanged, a), (Mc = a)));
        return q;
    };
    q.refresh = function () {
        r || La(!0, !0);
        return q;
    };
    q.export = function (a) {
        b.exportEventsEnabled && !r && ((a = cb(a, "csv")), vc(null, a));
        return q;
    };
    q.import = function (a) {
        b.importEventsEnabled && !r && Ri(a);
        return q;
    };
    q.importICalData = function (a) {
        if (b.importEventsEnabled && !r) {
            var c = [];
            kl(a, c);
            jl(c);
        }
        return q;
    };
    q.setEvents = function (a, c, d) {
        r || ((d = l(d, !0)), (qb = {}), q.addEvents(a, c, !1), d && x(b.events.onEventsSet, a));
        return q;
    };
    q.setEventsFromJson = function (a, c, d) {
        if (!r) {
            d = l(d, !0);
            var e = Se(a);
            pa(e) ? q.setEvents(e, c, !1) : Pa(e) && e.hasOwnProperty("events") && q.setEvents(e.events, c, !1);
            d && x(b.events.onEventsSetFromJSON, a);
        }
        return q;
    };
    q.addEvents = function (a, c, d) {
        if (!r) {
            c = l(c, !0);
            d = l(d, !0);
            for (var e = a.length, f = 0; f < e; f++) q.addEvent(a[f], !1, !1, !1);
            jb();
            d && x(b.events.onEventsAdded, a);
            c && (Mb(), Ha(), ma());
        }
        return q;
    };
    q.addEventsFromJson = function (a, c, d) {
        if (!r) {
            d = l(d, !0);
            var e = Se(a);
            pa(e) ? q.addEvents(e, c, !1) : Pa(e) && e.hasOwnProperty("events") && q.addEvents(e.events, c, !1);
            d && x(b.events.onEventsAddedFromJSON, a);
        }
        return q;
    };
    q.addEvent = function (a, c, d, e) {
        var f = !1;
        if (
            !r &&
            ((e = l(e, !0)),
            R(a.from) && (a.from = new Date(a.from)),
            R(a.to) && (a.to = new Date(a.to)),
            R(a.repeatEnds) && (a.repeatEnds = new Date(a.repeatEnds)),
            R(a.created) && (a.created = new Date(a.created)),
            R(a.lastUpdated) && (a.lastUpdated = new Date(a.lastUpdated)),
            a.color === b.defaultEventBackgroundColor && (a.color = null),
            a.colorText === b.defaultEventTextColor && (a.colorText = null),
            a.colorBorder === b.defaultEventBorderColor && (a.colorBorder = null),
            a.from <= a.to)
        ) {
            var g = a.from;
            g = g.getFullYear() + "-" + g.getMonth() + "-" + g.getDate();
            var h = ec();
            qb.hasOwnProperty(g) || (qb[g] = {});
            if (!qb[g].hasOwnProperty(h)) {
                c = l(c, !0);
                d = l(d, !0);
                f = G(a.title);
                var q = G(a.description),
                    t = G(a.location),
                    u = G(a.group),
                    v = G(a.url);
                if (p(O.visibleGroups) && !Yc(b.events.onEventsFetch)) {
                    var w = u.toLowerCase();
                    O.visibleGroups.indexOf(w) === B.notFound && O.visibleGroups.push(w);
                }
                p(a.id) ? (h = a.id) : (a.id = h);
                0 < b.maximumEventTitleLength &&
                    f !== n.empty &&
                    f.length > b.maximumEventTitleLength &&
                    (a.title = a.title.substring(0, b.maximumEventTitleLength));
                0 < b.maximumEventDescriptionLength &&
                    q !== n.empty &&
                    q.length > b.maximumEventDescriptionLength &&
                    (a.description = a.description.substring(0, b.maximumEventDescriptionLength));
                0 < b.maximumEventLocationLength &&
                    t !== n.empty &&
                    t.length > b.maximumEventLocationLength &&
                    (a.location = a.location.substring(0, b.maximumEventLocationLength));
                0 < b.maximumEventGroupLength &&
                    u !== n.empty &&
                    u.length > b.maximumEventGroupLength &&
                    (a.group = a.group.substring(0, b.maximumEventGroupLength));
                v === n.empty || tk(v) || (a.url = n.empty);
                xc(a.created) || (a.created = new Date());
                e && (a.lastUpdated = new Date());
                qb[g][h] = Zk(a);
                f = !0;
                d && x(b.events.onEventAdded, a);
                c && (jb(), Mb(), Ha(), ma());
            }
        }
        return f;
    };
    q.updateEvents = function (a, c, d) {
        if (!r) {
            c = l(c, !0);
            d = l(d, !0);
            for (var e = a.length, f = 0; f < e; f++) {
                var g = a[f];
                q.updateEvent(g.id, g, !1, !1);
            }
            d && x(b.events.onEventsUpdated, a);
            c && (jb(), Mb(), Ha(), ma());
        }
        return q;
    };
    q.updateEvent = function (a, c, d, e) {
        var f = !1;
        !r &&
            (f = q.removeEvent(a, !1, !1)) &&
            ((d = l(d, !0)), (e = l(e, !0)), (f = q.addEvent(c, d, !1)), jb(), f && e && x(b.events.onEventUpdated, c));
        return f;
    };
    q.updateEventDateTimes = function (a, c, d, e, f, g) {
        var h = !1;
        r ||
            ((f = l(f, !0)),
            (g = l(g, !0)),
            xb(function (k) {
                if (k.id === a)
                    return (
                        (k.from = c),
                        (k.to = d),
                        (k.repeatEnds = e),
                        (h = !0),
                        g && x(b.events.onEventUpdated, k),
                        f && (jb(), Mb(), Ha(), ma()),
                        !0
                    );
            }));
        return h;
    };
    q.removeEvent = function (a, c, d) {
        var e = !1;
        r ||
            ((c = l(c, !0)),
            (d = l(d, !0)),
            xb(function (f, g, h) {
                if (h === a)
                    return (
                        delete qb[g][h], (e = !0), d && x(b.events.onEventRemoved, f), c && (jb(), Mb(), Ha(), ma()), !0
                    );
            }));
        return e;
    };
    q.clearEvents = function (a, c) {
        r ||
            ((a = l(a, !0)),
            (c = l(c, !0)),
            (qb = {}),
            c && x(b.events.onEventsCleared),
            a && (jb(), Mb(), Ha(), ma()));
        return q;
    };
    q.getEvents = function () {
        var a = [];
        r || (a = vb(Bd()));
        return a;
    };
    q.getEvent = function (a) {
        var b = null;
        R(a) &&
            !r &&
            xb(function (c) {
                if (c.id === a) return (b = c), !0;
            });
        return b;
    };
    q.removeExpiredEvents = function (a, b) {
        r ||
            ((a = l(a, !0)),
            (b = l(b, !0)),
            xb(function (a) {
                H(a.repeatEvery) === y.never && a.to < new Date() && q.removeEvent(a.id, !1, b);
            }),
            a && (jb(), Mb(), Ha(), ma()));
        return q;
    };
    q.addEventType = function (a, b) {
        var c = !1;
        Ba(a) &&
            R(b) &&
            !r &&
            !N.hasOwnProperty(a) &&
            ((N[a] = { text: b, eventEditorInput: null }),
            p(O.visibleEventTypes) && O.visibleEventTypes.push(a),
            (c = !0));
        return c;
    };
    q.removeEventType = function (a) {
        var b = !1;
        Ba(a) && !r && N.hasOwnProperty(a) && (delete N[a], (b = !0));
        return b;
    };
    q.setVisibleEventTypes = function (a, c) {
        if (pa(a) && !r) {
            c = l(c, !0);
            O.visibleEventTypes = [];
            for (var d = a.length, e = 0; e < d; e++)
                O.visibleEventTypes.indexOf(a[e]) === B.notFound && O.visibleEventTypes.push(a[e]);
            La(!0, !1);
            c && x(b.events.onVisibleEventTypesChanged, O.visibleEventTypes);
        }
        return q;
    };
    q.getAllGroups = function () {
        return ij();
    };
    q.clearAllGroups = function (a, c) {
        r ||
            ((a = l(a, !0)),
            (c = l(c, !0)),
            xb(function (a) {
                a.group = null;
            }),
            c && x(b.events.onGroupsCleared),
            a && (Mb(), Ha(), ma()));
        return q;
    };
    q.removeGroup = function (a, c, d) {
        if (R(a) && !r) {
            c = l(c, !0);
            d = l(d, !0);
            var e = a.toLowerCase();
            xb(function (a) {
                null !== a.group && a.group.toLowerCase() === e && (a.group = null);
            });
            d && x(b.events.onGroupRemoved, a);
            c && (Mb(), Ha(), ma());
        }
        return q;
    };
    q.setVisibleGroups = function (a, c) {
        if (pa(a) && !r) {
            c = l(c, !0);
            O.visibleGroups = [];
            for (var d = a.length, e = 0; e < d; e++) {
                var f = a[e].toLowerCase();
                O.visibleGroups.indexOf(f) === B.notFound && O.visibleGroups.push(f);
            }
            La(!0, !1);
            c && x(b.events.onVisibleGroupsChanged, O.visibleGroups);
        }
        return q;
    };
    q.setClipboardEvent = function (a) {
        Pa(a) && !r && (ja = [te(a)]);
        return q;
    };
    q.setClipboardEvents = function (a) {
        if (pa(a) && !r) {
            ja = [];
            for (var b = a.length, d = 0; d < b; d++) ja.push(te(a[d]));
        }
        return q;
    };
    q.getClipboardEvents = function () {
        var a = null;
        r || (a = ja);
        return a;
    };
    q.clearClipboard = function () {
        r || (ja = []);
        return q;
    };
    q.getVersion = function () {
        return "2.12.6";
    };
    q.getId = function () {
        return za;
    };
    q.isBusy = function () {
        return pe;
    };
    q.getCurrentView = function () {
        return rf(!1);
    };
    q.setOptions = function (a, c) {
        for (var d in a) a.hasOwnProperty(d) && (b[d] = a[d]);
        pl(b);
        kj();
        Li();
        lb && ((c = l(c, !0)) && x(b.events.onOptionsUpdated, b), (lb = !1), (r && !db) || F(v, !0, !0));
        return q;
    };
    q.setSearchOptions = function (a, c) {
        if (!r) {
            a = kb(a);
            c = l(c, !0);
            kd();
            for (var d in a) a.hasOwnProperty(d) && (u[d] = a[d]);
            c && x(b.events.onSearchOptionsUpdated, u);
        }
        return q;
    };
    q.addHolidays = function (a, c, d) {
        pa(a) &&
            !r &&
            ((c = l(c, !0)),
            (d = l(d, !0)),
            (b.holidays = b.holidays.concat(a)),
            c && x(b.events.onOptionsUpdated, b),
            d && F(v, !0, !0));
        return q;
    };
    q.removeHolidays = function (a, c, d) {
        if (pa(a) && !r) {
            c = l(c, !0);
            d = l(d, !0);
            for (var e = b.holidays.length, f = [], g = 0; g < e; g++) {
                var h = b.holidays[g],
                    p = G(h.title, n.empty);
                a.indexOf(p) === B.notFound && f.push(h);
            }
            b.holidays = f;
            c && x(b.events.onOptionsUpdated, b);
            d && F(v, !0, !0);
        }
        return q;
    };
    q.getHolidays = function () {
        return b.holidays;
    };
    (function (a, c, d, e, f) {
        E = a;
        Z = c;
        Jf = d;
        la = e;
        cc = f;
        za = I;
        if (R(za) || fj(za))
            pl(ua),
                (u = kb(V, b.searchOptions)),
                (u.enabled = l(u.enabled, !0)),
                (u.lastSearchText = cb(u.lastSearchText, n.empty)),
                (u.not = l(u.not, !1)),
                (u.matchCase = l(u.matchCase, !1)),
                (u.showAdvanced = l(u.showAdvanced, !1)),
                (u.searchTitle = l(u.searchTitle, !0)),
                (u.searchLocation = l(u.searchLocation, !1)),
                (u.searchDescription = l(u.searchDescription, !1)),
                (u.searchGroup = l(u.searchGroup, !1)),
                (u.searchUrl = l(u.searchUrl, !1)),
                (u.startsWith = l(u.startsWith, !1)),
                (u.endsWith = l(u.endsWith, !1)),
                (u.contains = l(u.contains, !0)),
                (u.left = ta(u.left, null)),
                (u.top = ta(u.top, null)),
                (u.history = ig(u.history, [])),
                F(b.initialDateTime, !0),
                null !== z && ib(b.openInFullScreenMode) && b.openInFullScreenMode && !r && Wk();
    })(document, window, navigator, Math, JSON);
};