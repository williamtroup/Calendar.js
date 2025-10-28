/*! Calendar.js v2.12.5 | (c) Bunoon 2025 | MIT License */
export function calendarJs(I, ua, V) {
    function F(a, c, d) {
        v = xc(a) ? a : new Date();
        c = p(c) ? c : !1;
        d = p(d) ? d : !1;
        a = c;
        if (b.isWidget)
            (lg = dc(v)),
                mb || (Yd(!0), null !== z && (Xi(), Yi(), Zi(), $i(), aj(), Oe || (Jh(), (Oe = !0)), bj(), Xd(), Ne())),
                pl();
        else {
            v.setDate(1);
            v.setHours(0, 0, 0, 0);
            lg = mg(v);
            c = new Date(v.getFullYear(), v.getMonth(), 1);
            var e = Pe(0 === c.getDay() ? 7 : c.getDay());
            c = !Zd;
            Qe() && Hb();
            Ga();
            if (!mb && (Yd(), null !== z)) {
                r ||
                    (null === $d &&
                        (($d = h("div", "side-menu-disabled-background")), ($d.onclick = Hb), z.appendChild($d)),
                    ql());
                rl();
                sl();
                null === Ib && ((Ib = h("div", "full-month-view")), (Ib.id = ec()), z.appendChild(Ib));
                tl();
                if (!r) {
                    var f = null !== nb;
                    if (b.views.fullMonth.isPinUpViewEnabled) {
                        f || ((nb = h("div", "pin-up")), Ib.appendChild(nb));
                        f = b.views.fullMonth.pinUpViewImageUrls.length;
                        if (0 < f)
                            for (var k = 0; k < f; k++) new Image().src = b.views.fullMonth.pinUpViewImageUrls[k];
                        Zd || sb();
                    } else f && (Ib.removeChild(nb), (nb = null));
                }
                f = null !== yc;
                b.views.fullMonth.showDayNamesHeaders
                    ? (f && (yc.innerHTML = n.empty),
                      f || ((yc = h("div", "row-cells header-days")), Ib.appendChild(yc)),
                      r && (yc.onclick = C),
                      Kh(yc))
                    : f && (Ib.removeChild(yc), (yc = null));
                cj();
                ul();
                vl();
                wl();
                Oe || (Jh(), (Oe = !0));
                Xd();
                Ne();
            }
            if (1 < e) {
                f = new Date(v);
                f.setMonth(f.getMonth() - 1);
                k = ad(f.getFullYear(), f.getMonth());
                for (var m = 1, A = k - e + 1; A < k; A++) {
                    var Ua = A === k - 1;
                    Lh(A + 1, m, f.getMonth(), f.getFullYear(), !0, Ua);
                    m++;
                }
            }
            f = 0;
            k = ad(v.getFullYear(), v.getMonth());
            for (m = 0; m < k; m++) (f = e + m), Lh(m + 1, f, v.getMonth(), v.getFullYear(), !1);
            k = f;
            if (42 > k) {
                f = 1;
                e = new Date(v);
                e.setMonth(e.getMonth() + 1);
                for (k += 1; 43 > k; k++) (m = 1 === f), Lh(f, k, e.getMonth(), e.getFullYear(), !0, m), f++;
                f = ad(e.getFullYear(), e.getMonth());
                f = la.round(f / 2);
                Mh = new Date(e.getFullYear(), e.getMonth(), f);
            } else Mh = null;
            Ha();
            a &&
                (Xi(),
                Yi(),
                Zi(),
                $i(),
                aj(),
                xl(),
                yl(),
                zl(),
                Al(),
                bj(),
                r || (Bl(), Cl(), Dl(), El()),
                null !== fc || r || ((fc = h("div", "calendar-notification")), ya.push(fc), E.body.appendChild(fc)));
            d && La(!0, !1);
            null !== z &&
                ((Nh.innerText = Oh(b.views.fullMonth.titleBarDateFormat, v)),
                c &&
                    R(b.viewToOpenOnFirstLoad) &&
                    (b.viewToOpenOnFirstLoad.toLowerCase() === tb.fullDay && b.views.fullDay.enabled
                        ? Va()
                        : b.viewToOpenOnFirstLoad.toLowerCase() === tb.fullWeek && b.views.fullWeek.enabled
                          ? zc()
                          : b.viewToOpenOnFirstLoad.toLowerCase() === tb.fullYear && b.views.fullYear.enabled
                            ? Ac()
                            : b.viewToOpenOnFirstLoad.toLowerCase() === tb.timeline && b.views.timeline.enabled
                              ? Jb()
                              : b.viewToOpenOnFirstLoad.toLowerCase() === tb.allEvents &&
                                b.views.allEvents.enabled &&
                                Ph()));
        }
    }
    function Xd() {
        pa(b.data) && q.addEvents(b.data, !1, !1, !1);
        if (b.useLocalStorageForEvents && Z.localStorage)
            for (var a = Z.localStorage.length, c = 0; c < a; c++) {
                var d = Z.localStorage.getItem(Z.localStorage.key(c));
                d = Re(d);
                p(d) && q.addEvent(d, !1, !1, !1);
            }
        dj();
    }
    function Ne() {
        mb = !0;
        Zd || (w(b.events.onRender, za), (Zd = !0));
    }
    function Yd(a) {
        a = p(a) ? a : !1;
        if (null === z) {
            if (ej(za)) {
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
                    : Fl(b));
        }
    }
    function ql() {
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
                fj();
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
            t(Kb, "ib-arrow-up-full-line", b.importEventsTooltipText, Gl);
        Zd || ((Cc = h("div", "content")), ub.appendChild(Cc));
    }
    function gj(a) {
        var c = Se(Dc) || !0 === a,
            d = Se(fd, !0),
            e = Se(gd, !0),
            f = Se(Ec, !0);
        a = Se(Fc, !0);
        Cc.innerHTML = n.empty;
        Fc = hd = Ec = id = gd = Gc = fd = Hc = Dc = jd = null;
        kd();
        var k = Ma();
        null === k
            ? Wa(cd, 0 < ed.length)
            : k === W
              ? Wa(cd, 0 < gc.length)
              : k === ra
                ? Wa(cd, 0 < Lb.length)
                : k === da
                  ? Wa(cd, 0 < hc.length)
                  : k === ia
                    ? Wa(cd, 0 < Bc.length)
                    : Wa(cd, !1);
        if (b.sideMenu.showDays) {
            var m = c;
            m = p(m) ? m : !0;
            jd = h("div", "content-section content-section-opened");
            Dc = h("div", "checkbox-container");
            Cc.appendChild(jd);
            c = 0;
            k = 7;
            var A = !1,
                Ua = [];
            Te(jd, Dc, b.sideMenuDaysText, m, Ua);
            jd.appendChild(Dc);
            if (b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday) (c = b.startOfWeekDay), (A = !0);
            for (; c < k; c++)
                (m = b.visibleDays.indexOf(c) > B.notFound),
                    Ua.push(K(Dc, b.dayNames[c], Ic, c.toString(), m, null, Jc)[0]);
            if (A)
                for (k = b.startOfWeekDay, c = 0; c < k; c++)
                    (A = b.visibleDays.indexOf(c) > B.notFound),
                        Ua.push(K(Dc, b.dayNames[c], Ic, c.toString(), A, null, Jc)[0]);
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
                        Te(Hc, fd, b.eventTypesText, d, k),
                        Hc.appendChild(fd),
                        (c = !0)),
                    (Ua = !0),
                    p(O.visibleEventTypes) && (Ua = O.visibleEventTypes.indexOf(parseInt(g)) > B.notFound),
                    k.push(K(fd, N[g].text, Ic, g, Ua, null, Jc)[0]));
        }
        if (
            b.sideMenu.showGroups &&
            ((c = e), (c = p(c) ? c : !0), (gd = Gc = null), (g = hj()), (e = g.length), 0 < e)
        )
            for (
                d = [],
                    Gc = h("div", "content-section content-section-opened"),
                    gd = h("div", "checkbox-container"),
                    Cc.appendChild(Gc),
                    Te(Gc, gd, b.groupsText, c, d),
                    Gc.appendChild(gd),
                    c = 0;
                c < e;
                c++
            )
                (k = g[c]),
                    (Ua = k.toLowerCase()),
                    (A = !0),
                    p(O.visibleGroups) && (A = O.visibleGroups.indexOf(Ua) > B.notFound),
                    d.push(K(gd, k, Ic, Ua, A, null, Jc)[0]);
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
            Te(id, Ec, b.workingDaysText, c, e);
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
            Te(hd, Fc, b.weekendDaysText, d, g);
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
        Qe() && gj();
    }
    function Kc(a) {
        gj(p(a) ? a : !1);
        og = !1;
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
            if (og) {
                var a = !1,
                    c = !1;
                if (null !== Gc) {
                    var d = Ue(Gc);
                    ae(O.visibleGroups, d) ||
                        ((O.visibleGroups = [].slice.call(d)),
                        (c = !0),
                        w(b.events.onVisibleGroupsChanged, O.visibleGroups));
                }
                null !== Hc &&
                    ((d = Ue(Hc, !0)),
                    ae(O.visibleEventTypes, d) ||
                        ((O.visibleEventTypes = [].slice.call(d)),
                        (c = !0),
                        w(b.events.onVisibleEventTypesChanged, O.visibleEventTypes)));
                null !== jd &&
                    ((d = Ue(jd, !0)),
                    1 <= d.length &&
                        !ae(b.visibleDays, d) &&
                        ((b.visibleDays = [].slice.call(d)), (od = []), (c = a = !0)));
                null !== id &&
                    ((d = Ue(id, !0)), ae(b.workingDays, d) || ((b.workingDays = [].slice.call(d)), (c = a = !0)));
                null !== hd && ((d = Ue(hd, !0)), ae(b.weekendDays, d) || ((b.weekendDays = d), (c = a = !0)));
                c && (a && w(b.events.onOptionsUpdated, b), (mb = !1), F(v, !0, !0));
            }
            ic();
            E.body.removeEventListener("click", Hb);
        }
    }
    function Qe() {
        return null !== ub && ub.className.indexOf("side-menu-open") > B.notFound;
    }
    function Ue(a, b) {
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
    function Te(a, c, d, e, f) {
        var k = h("div", "text-header");
        a.appendChild(k);
        y(k, d + ":");
        var m = h("div", "ib-arrow-up-full");
        k.appendChild(m);
        if (b.sideMenu.showSelectAllNoneButtons) {
            var A = h("div", "right-divider-line");
            k.appendChild(A);
            var Ua = t(k, "ib-square", b.selectAllText, function (a) {
                    ij(a, f, !0);
                }),
                g = t(k, "ib-square-hollow", b.selectNoneText, function (a) {
                    ij(a, f, !1);
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
                (Ua.style.display = d ? "block" : "none"),
                (g.style.display = d ? "block" : "none"));
        };
        e ||
            ((c.style.display = "none"),
            (k.className = "text-header-closed"),
            (m.className = "ib-arrow-down-full"),
            (a.className = "content-section"),
            b.sideMenu.showSelectAllNoneButtons &&
                ((A.style.display = "none"), (Ua.style.display = "none"), (g.style.display = "none")));
    }
    function ij(a, b, d) {
        C(a);
        a = b.length;
        for (var c = !1, f = 0; f < a; f++) b[f].checked !== d && ((b[f].checked = d), (c = !0));
        og = c;
    }
    function Se(a, b) {
        return b && null === a ? !1 : null === a || "none" !== a.style.display;
    }
    function Ic() {
        og = !0;
    }
    function pl() {
        Qh();
        z.innerHTML = n.empty;
        var a = X(v),
            c = h("div", "day-name");
        y(c, b.dayNames[a]);
        z.appendChild(c);
        t(c, "ib-arrow-right-full", b.nextDayTooltipText, Hl);
        t(c, "ib-arrow-left-full", b.previousDayTooltipText, Il);
        c.appendChild(h("div", "right-divider-line"));
        b.manualEditingEnabled &&
            t(c, "ib-plus", b.addEventTooltipText, function () {
                P(null, new Date(v));
            });
        t(c, "ib-pin", b.todayTooltipText, Jl);
        a = h("div", "day-date");
        jc(a, v, !1, !0, !1);
        z.appendChild(a);
        Kl();
        Rh();
    }
    function Kl() {
        var a = h("div", "events custom-scroll-bars"),
            c = [];
        z.appendChild(a);
        Sh(v, c);
        c = vb(c);
        var d = c.length;
        if (0 < d)
            for (var e = 0; e < d; e++) {
                var f = a,
                    k = c[e],
                    m = h("div", "event");
                f.appendChild(m);
                be(m, k, Ve(k, v));
                ce(m, k);
                m.id = "widget-day-" + k.id;
                m.setAttribute("event-type", H(k.type));
                m.setAttribute("event-id", k.id);
                m.setAttribute("event-is-all-day", k.isAllDay);
                if (!w(b.events.onWidgetEventRender, m, k)) {
                    var A = h("div", "title");
                    if (H(k.repeatEvery) > x.never && b.showReoccurringEventIcons) {
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
                            : (Nb(A, k.from, null, " - " + de(k.from, k.to)), y(g, Ob(k.from, k.to)))
                        : (We(A, k.from, k.to), y(g, Ob(k.from, k.to)));
                    g.innerHTML === n.empty && m.removeChild(g);
                    Ba(k.repeatEvery) &&
                        k.repeatEvery > x.never &&
                        ((A = h("div", "repeats")),
                        y(A, b.repeatsText.replace(":", n.empty) + n.space + pd(k.repeatEvery)),
                        m.appendChild(A));
                    Ca(k.location) && ((A = h("div", "location")), y(A, k.location), m.appendChild(A));
                    Ca(k.description) && ((A = h("div", "description")), y(A, k.description), m.appendChild(A));
                }
                f.scrollHeight > f.clientHeight &&
                    f.className.indexOf(" scroll-margin") === B.notFound &&
                    (f.className += " scroll-margin");
            }
        else qa(a, b.noEventsAvailableFullText);
    }
    function Jl(a) {
        C(a);
        F();
    }
    function Hl(a) {
        C(a);
        a = new Date(v);
        a.setDate(a.getDate() + 1);
        a.getFullYear() <= b.maximumYear && F(a);
    }
    function Il(a) {
        C(a);
        a = new Date(v);
        a.setDate(a.getDate() - 1);
        a.getFullYear() >= b.minimumYear && F(a);
    }
    function Fl(a) {
        Xe = a;
        lc(Xe, "hidden");
        Lc = h("input", "calendar-date-picker-input");
        Lc.readOnly = !0;
        Lc.placeholder = b.selectDatePlaceholderText;
        r = !0;
        var c = h("div", "calendar-date-picker");
        a.insertAdjacentElement("afterend", c);
        a.remove(a);
        c.appendChild(Xe);
        c.appendChild(Lc);
        z = h("div", "calendar calendar-hidden");
        z.id = za;
        c.appendChild(z);
        Lc.onclick = Ll;
        E.addEventListener("click", qd);
        jj();
        c = Xe.value.split("/");
        a = null;
        3 === c.length &&
            ((c = new Date(parseInt(c[2]), parseInt(c[1]) - 1, parseInt(c[0]))),
            c instanceof Date && !isNaN(c) && (a = c));
        null === a ? (a = new Date()) : Th(a);
        a.setHours(0, 0, 0, 0);
        Mc = a;
    }
    function jj() {
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
    function Ll(a) {
        C(a);
        pg("calendar calendar-shown", "calendar calendar-hidden");
        if (eb) (z.className = "calendar calendar-hidden"), Ga(), w(b.events.onDatePickerClosed, za);
        else {
            z.className = "calendar calendar-shown";
            F(new Date(Mc), !mb);
            w(b.events.onDatePickerOpened, za);
            a = kj;
            null === a && (a = kj = z.offsetTop);
            z.style.top = a + "px";
            var c = Ye(z),
                d = lj();
            c.top - d.top + z.offsetHeight > Z.innerHeight
                ? ((c = bd(z, "border-width")),
                  (d = bd(Lc, "border-width")),
                  (a -= z.offsetHeight + Lc.clientHeight + 4 * c + 2 * d),
                  (z.className += " calendar-shadow-top"),
                  (z.style.top = a + "px"))
                : (z.className += " calendar-shadow-bottom");
        }
        eb = !eb;
    }
    function qd() {
        eb && ((z.className = "calendar calendar-hidden"), (eb = !1), Ga(), w(b.events.onDatePickerClosed, za));
    }
    function Th(a) {
        Lc.value = Oh(b.views.datePicker.selectedDateFormat, a);
        Xe.value = a.getFullYear() + "-" + J(a.getMonth() + 1) + "-" + J(a.getDate());
    }
    function mj(a) {
        var c = !0;
        null !== b.views.datePicker.minimumDate && (c = Ze(b.views.datePicker.minimumDate, a));
        c && null !== b.views.datePicker.maximumDate && (c = Ze(a, b.views.datePicker.maximumDate));
        return c;
    }
    function Jh(a) {
        var c = (a = p(a) ? a : !0) ? E.body.addEventListener : E.body.removeEventListener,
            d = a ? E.addEventListener : E.removeEventListener;
        a = a ? Z.addEventListener : Z.removeEventListener;
        c("click", Ml);
        c("contextmenu", Uh);
        c("mousemove", Nl);
        c("mouseup", Vh);
        c("mouseleave", Ol);
        d("scroll", Uh);
        a("resize", Uh);
        a("resize", Wh);
        a("resize", Pl);
        a("blur", Ql);
        b.shortcutKeysEnabled && d("keydown", Rl);
    }
    function Ml(a) {
        Ga();
        fa(a) || mc();
    }
    function Ql() {
        Ga();
        ic();
        r && qd();
    }
    function Pl() {
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
    function Uh() {
        Ga();
    }
    function Ga(a) {
        var b = !1;
        a = p(a) ? a : !0;
        qg(Ia) && (b = !0);
        qg(Y) && (b = !0);
        qg(Oa) && (b = !0);
        qg(ob) && (b = !0);
        rg() && (b = !0);
        ic();
        pg("calendar-context-menu");
        pg("years-drop-down");
        pg("years-drop-down-no-months");
        a && $e();
        return b;
    }
    function Rl(a) {
        if (r)
            eb &&
                (a.keyCode === Q.escape
                    ? (a.preventDefault(), qd())
                    : fa(a) && a.keyCode === Q.left
                      ? (a.preventDefault(), sg())
                      : fa(a) && a.keyCode === Q.right
                        ? (a.preventDefault(), tg())
                        : a.keyCode === Q.left
                          ? (a.preventDefault(), af())
                          : a.keyCode === Q.right
                            ? (a.preventDefault(), bf())
                            : a.keyCode === Q.down && (a.preventDefault(), vg()));
        else if (Qe()) a.keyCode === Q.escape && Qe() && (a.preventDefault(), Hb());
        else {
            if (sd) {
                var c = nj();
                fa(a) && a.keyCode === Q.left && c
                    ? (a.preventDefault(), sg())
                    : fa(a) && a.keyCode === Q.right && c
                      ? (a.preventDefault(), tg())
                      : a.keyCode === Q.escape
                        ? !oj() && c && b.useEscapeKeyToExitFullScreenMode && Xa()
                        : a.keyCode === Q.left && c
                          ? pj(a)
                          : a.keyCode === Q.right && c
                            ? qj(a)
                            : a.keyCode === Q.down && c
                              ? rj(a)
                              : a.keyCode === Q.f5 && c && La(!1, !0);
            } else a.keyCode === Q.escape && oj();
            if (fa(a) && a.shiftKey && a.keyCode === Q.a)
                a.preventDefault(), b.manualEditingEnabled && P(null, new Date());
            else if (fa(a) && a.shiftKey && a.keyCode === Q.c) a.preventDefault(), sj();
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
            else if (fa(a) && a.shiftKey && a.keyCode === Q.g) a.preventDefault(), b.configurationDialogEnabled && fj();
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
                if ((a.preventDefault(), Ya(ra))) for (a = ug.length, c = 0; c < a; c++) ug[c]();
            } else
                fa(a) && a.shiftKey && a.keyCode === Q.o
                    ? (a.preventDefault(), md() && Kc())
                    : fa(a) && a.shiftKey && a.keyCode === Q.v
                      ? (a.preventDefault(), (a = ja.length), Ya(W) && 0 < a && Xh(L, Pb))
                      : fa(a) && a.shiftKey && a.keyCode === Q.x
                        ? (a.preventDefault(), sj(!0))
                        : fa(a) && a.shiftKey && a.keyCode === Q.f11 && (a.preventDefault(), Xa());
        }
    }
    function pj(a) {
        p(a) && a.preventDefault();
        a = Ma();
        null === a ? af() : a === W ? tj() : a === da ? uj() : a === Da ? vj() : a === ia && wj();
    }
    function qj(a) {
        p(a) && a.preventDefault();
        a = Ma();
        null === a ? bf() : a === W ? xj() : a === da ? yj() : a === Da ? zj() : a === ia && Aj();
    }
    function rj(a) {
        p(a) && a.preventDefault();
        a = Ma();
        null === a ? vg() : a === W ? Bj() : a === da ? Cj() : a === Da ? Dj() : a === ia && Ej();
    }
    function fa(a) {
        return a.ctrlKey || a.metaKey;
    }
    function oj() {
        var a = Ga(!1);
        a || (a = $e());
        !a && 0 < fb.length && ((a = fb[fb.length - 1]), Yh(a) && (fb.pop(), a(!1)), (a = !0));
        a || (a = kd());
        a || (a = mc());
        !a && 0 < ja.length && (ge(), (ja = []), (Pb = !1), (a = !0));
        !a && 0 < pb.length && (Fj(), (a = !0));
        return a;
    }
    function rl() {
        if (!r && b.views.fullDay.enabled) {
            var a = null !== W;
            a && (W.innerHTML = n.empty);
            a || ((W = h("div", "full-day-view")), (W.id = ec()), z.appendChild(W));
            a = h("div", "title-bar");
            W.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Xa);
            cf = h("div", "title");
            a.appendChild(cf);
            t(a, "ib-close", b.closeTooltipText, Sl);
            a.appendChild(h("div", "right-divider-line"));
            b.views.fullDay.showExtraTitleBarButtons &&
                b.fullScreenModeEnabled &&
                ((Zh = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Xa)),
                a.appendChild(h("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextDayTooltipText, xj);
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
            t(a, "ib-arrow-left-full", b.previousDayTooltipText, tj);
            b.views.fullDay.showExtraTitleBarButtons &&
                ((Gj = t(a, "ib-pin", b.todayTooltipText, Bj)),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        ee();
                    }),
                a.appendChild(h("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    La(!0, !0);
                }),
                u.enabled && (Hj = t(a, "ib-search", b.searchTooltipText, fe)));
            wb = h("div", "contents custom-scroll-bars");
            W.appendChild(wb);
            wb.oncontextmenu = function (a) {
                var b = wg(a, wa);
                df = J(b[0]) + ":" + J(b[1]);
                Ij(a, L, gc);
            };
            Nc = h("div", "content-events-all-day");
            wb.appendChild(Nc);
            a = h("div", "all-day-text");
            y(a, b.allDayText);
            Nc.appendChild(a);
            wa = h("div", "contents-events");
            wa.ondblclick = Tl;
            wb.appendChild(wa);
            he = h("div", "working-hours");
            wb.appendChild(he);
            b.manualEditingEnabled &&
                b.dragAndDropForEventsEnabled &&
                ((wa.ondragover = C),
                (wa.ondragenter = C),
                (wa.ondragleave = C),
                (wa.ondrop = function (a) {
                    Jj(a, L, wa);
                }));
            Kj(wa, b.views.fullDay.minutesBetweenSections);
            ef = h("div", "time-arrow");
            wa.appendChild(ef);
            ef.appendChild(h("div", "arrow-left"));
            ef.appendChild(h("div", "line"));
        }
    }
    function nc(a, b, d, e, f) {
        for (var c = new Date(a.from), m = Oc(a.repeatEveryExcludeDays); c < d; ) {
            e(c, f);
            var h = !(!p(a.repeatEnds) || Ze(c, a.repeatEnds));
            if (m.indexOf(c.getDay()) === B.notFound && !h && U(c, d)) {
                b.push(a);
                break;
            }
        }
    }
    function Ul(a, c) {
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
                Lj(a, m);
            };
            a.isAllDay
                ? Nc.appendChild(m)
                : (b.manualEditingEnabled &&
                      b.dragAndDropForEventsEnabled &&
                      (U(a.from, a.to) && (m.className += " resizable"),
                      (m.ondragstart = function (b) {
                          var d = Ye(m);
                          xg = m;
                          yg = m.offsetTop;
                          Qb = a;
                          zg = d.top - b.pageY;
                          Ag = c;
                      }),
                      (m.ondragEnd = Vh),
                      m.setAttribute("draggable", !0)),
                  wa.appendChild(m));
            m.oncontextmenu = function (b) {
                ff(b, a, f);
            };
            gf(m, a);
            be(m, a, Ve(a, c));
            ce(m, a, k);
            U(a.from, c) && (m.id = "full-day-" + a.id);
            w(b.events.onFullDayEventRender, m, a) ||
                ((e = h("div", "title")),
                H(a.repeatEvery) > x.never &&
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
                        ? y(e, b.allDayText)
                        : (y(e, de(a.from, a.to)), y(k, Ob(a.from, a.to)))
                    : (We(e, a.from, a.to), y(k, Ob(a.from, a.to))),
                k.innerHTML === n.empty && m.removeChild(k),
                b.views.fullDay.showEventUrls &&
                    Ca(a.url) &&
                    ((e = h("div", "url-text")),
                    y(e, Bg(a.url)),
                    m.appendChild(e),
                    (e.onclick = function (b) {
                        C(b);
                        je(a.url);
                    })),
                Ba(a.repeatEvery) &&
                    a.repeatEvery > x.never &&
                    ((e = h("div", "repeats")),
                    y(e, b.repeatsText.replace(":", n.empty) + n.space + pd(a.repeatEvery)),
                    m.appendChild(e)),
                Ca(a.location) && ((e = h("div", "location")), y(e, a.location), m.appendChild(e)),
                Ca(a.description) && ((e = h("div", "description")), y(e, a.description), m.appendChild(e)));
            m.addEventListener("click", function (b) {
                hf(b, a);
            });
            a.isAllDay || (d = Mj(wb, wa, c, m, a));
            gc.push(a);
            a.isAllDay || Cg.push({ eventDetails: a, eventElement: m, height: m.offsetHeight });
        }
        return d;
    }
    function Va(a, c) {
        a = p(a) ? new Date(a) : new Date();
        c = p(c) ? c : !1;
        var d = new Date(),
            e = X(d);
        e = b.visibleDays.indexOf(e) > B.notFound;
        cf.innerHTML = n.empty;
        L = new Date(a);
        gc = [];
        Cg = [];
        Nc.style.display = "block";
        he.style.display = "none";
        U(a, d) && !e && Nj();
        Wa(Gj, e);
        $h(wb, "event");
        kd();
        w(b.events.onFullDayTitleRender, L) || jc(cf, L, !1, !0, !0);
        jf(W, c);
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
                    ng = G(g.title, n.empty);
                Oj(g, d) && ng !== n.empty && k.indexOf(ng.toLowerCase()) && (f.push(ng), k.push(ng.toLowerCase()));
            }
            0 < f.length && (e = f.join(", "));
        }
        d = e;
        f = [];
        null !== d && aa(cf, " (" + d + ")", "light-title-bar-text");
        Sh(a, f);
        f = vb(f);
        k = f.length;
        e = null;
        d = Pj(L, W, ef, wa, b.views.fullDay.showTimelineArrow);
        for (m = 0; m < k; m++) (h = Ul(f[m], a)), null === e && (e = h);
        c &&
            ((a = W),
            (c = b.views.fullDay.showTimelineArrow),
            dc(L) && Ya(a) && c
                ? ((a = Nc.offsetHeight), (a = 1 >= a ? 4 * b.spacing : a), (wb.scrollTop = d - a))
                : (wb.scrollTop = e - wb.offsetHeight / 2));
        1 >= Nc.offsetHeight && (Nc.style.display = "none");
        Wa(Hj, 0 < gc.length);
        Qj(wa);
    }
    function Sh(a, b) {
        xb(function (c) {
            for (var d = Pc(c.from, c.to) + 1, f = new Date(c.from), k = 0; k < d; k++) {
                if (U(f, a)) {
                    b.push(c);
                    break;
                }
                Za(f);
            }
            d = H(c.repeatEvery);
            d > x.never &&
                (d === x.everyDay
                    ? nc(c, b, a, Za, 1)
                    : d === x.everyWeek
                      ? nc(c, b, a, Rb, 1)
                      : d === x.every2Weeks
                        ? nc(c, b, a, Rb, 2)
                        : d === x.everyMonth
                          ? nc(c, b, a, ke, 1)
                          : d === x.everyYear
                            ? nc(c, b, a, wd, 1)
                            : d === x.custom &&
                              ((d = H(c.repeatEveryCustomType)),
                              (f = H(c.repeatEveryCustomValue)),
                              0 < f &&
                                  (d === M.daily
                                      ? nc(c, b, a, Za, f)
                                      : d === M.weekly
                                        ? nc(c, b, a, Rb, f)
                                        : d === M.monthly
                                          ? nc(c, b, a, ke, f)
                                          : d === M.yearly && nc(c, b, a, wd, f))));
        });
    }
    function Sl() {
        xd(W);
        L = null;
        gc = [];
        Cg = [];
    }
    function Tl(a) {
        b.manualEditingEnabled &&
            ((a = wg(a, wa)),
            b.useTemplateWhenAddingNewEvent
                ? ((a = J(a[0]) + ":" + J(a[1])), (a = td(L, L, a, a)), P(a), ud())
                : P(null, L, a));
    }
    function tj() {
        Dg(L);
        if (7 > b.visibleDays.length) for (var a = X(L); b.visibleDays.indexOf(a) === B.notFound; ) Dg(L), (a = X(L));
        Va(L, !0);
    }
    function xj() {
        Nj(!0);
    }
    function Bj() {
        L = new Date();
        Va(L, !0);
    }
    function Nj(a) {
        a = p(a) ? a : !1;
        Za(L);
        if (7 > b.visibleDays.length) for (var c = X(L); b.visibleDays.indexOf(c) === B.notFound; ) Za(L), (c = X(L));
        a && Va(L, !0);
    }
    function sl() {
        if (!r && b.views.fullWeek.enabled) {
            var a = null !== da;
            a && ((da.innerHTML = n.empty), (yd = null));
            a || ((da = h("div", "full-week-view")), (da.id = ec()), z.appendChild(da));
            a = h("div", "title-bar");
            da.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Xa);
            Qa = h("div", "title");
            a.appendChild(Qa);
            t(a, "ib-close", b.closeTooltipText, function () {
                hc = [];
                xd(da);
            });
            a.appendChild(h("div", "right-divider-line"));
            b.views.fullWeek.showExtraTitleBarButtons &&
                b.fullScreenModeEnabled &&
                ((ai = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Xa)),
                a.appendChild(h("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextWeekTooltipText, yj);
            b.manualEditingEnabled &&
                b.views.fullWeek.showExtraTitleBarButtons &&
                t(a, "ib-plus", b.addEventTooltipText, function () {
                    P(null, new Date(Rj));
                });
            !r &&
                md() &&
                (t(a, "ib-hamburger", b.showMenuTooltipText, Kc), a.appendChild(h("div", "left-divider-line")));
            t(a, "ib-arrow-left-full", b.previousWeekTooltipText, uj);
            b.views.fullWeek.showExtraTitleBarButtons &&
                (t(a, "ib-pin", b.thisWeekTooltipText, Cj),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        ee();
                    }),
                a.appendChild(h("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    La(!0, !0);
                }),
                u.enabled && (Sj = t(a, "ib-search", b.searchTooltipText, fe)));
            zd = h("div", "contents custom-scroll-bars");
            da.appendChild(zd);
            Vl();
        }
    }
    function Vl() {
        var a = h("div", "header-days-container");
        zd.appendChild(a);
        b.views.fullWeek.showDayNamesHeaders && ((yd = h("div", "row-cells header-days")), a.appendChild(yd));
        Ad = h("div", "content-events-all-day");
        zd.appendChild(Ad);
        le = h("div", "row-cells days");
        Ad.appendChild(le);
        a = h("div", "all-day-text");
        y(a, b.allDayText);
        Ad.appendChild(a);
        me = h("div", "hours");
        zd.appendChild(me);
        Kj(me, b.views.fullWeek.minutesBetweenSections);
        kf = h("div", "row-cells days");
        me.appendChild(kf);
    }
    function bi(a, c, d) {
        for (; a < c; a++) b.visibleDays.indexOf(a) > B.notFound && Wl(d, a);
    }
    function Wl(a, c) {
        var d = h("div", Eg()),
            e = h("div", Eg()),
            f = new Date(a[c]);
        d.id = "calendar-week-day-" + c;
        e.id = "calendar-week-all-day-" + c;
        kf.appendChild(d);
        le.appendChild(e);
        d.ondblclick = function (a) {
            b.manualEditingEnabled &&
                ((a = wg(a, d)),
                b.useTemplateWhenAddingNewEvent
                    ? ((a = J(a[0]) + ":" + J(a[1])), (a = td(f, f, a, a)), P(a), ud())
                    : P(null, f, a));
        };
        Fg(e, f.getFullYear(), f.getMonth(), f.getDate());
        Xl(d, c);
        dc(f) && Yl(d, f);
        b.manualEditingEnabled &&
            b.dragAndDropForEventsEnabled &&
            ((d.ondragover = C),
            (d.ondragenter = C),
            (d.ondragleave = C),
            (d.ondrop = function (a) {
                Jj(a, f, me);
            }));
        d.oncontextmenu = function (a) {
            var b = wg(a, d);
            df = J(b[0]) + ":" + J(b[1]);
            Ij(a, f, lf[c]);
        };
    }
    function Yl(a, c) {
        ne = h("div", "time-arrow");
        a.appendChild(ne);
        ne.appendChild(h("div", "arrow-left"));
        ne.appendChild(h("div", "line"));
        Gg = Pj(c, da, ne, a, b.views.fullWeek.showTimelineArrow);
    }
    function Xl(a, c) {
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
    function Tj(a, c) {
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
            var g = !(!p(a.repeatEnds) || Ze(c, a.repeatEnds));
            if (m.indexOf(c.getDay()) === B.notFound && !g && c >= b && c <= d) {
                g = Aa("calendar-week-day-" + X(c));
                var n = Aa("calendar-week-all-day-" + X(c));
                null !== g && (Uj(g, n, a, c), (h = !0));
            }
        }
        return h;
    }
    function Uj(a, c, d, e) {
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
                Lj(a, g);
            };
            g.oncontextmenu = function (a) {
                ff(a, d, A);
            };
            d.isAllDay
                ? (c.appendChild(g), ci(g, d, m, c), (di = !0))
                : b.manualEditingEnabled &&
                  b.dragAndDropForEventsEnabled &&
                  !mf(d) &&
                  (U(d.from, d.to) && !d.isAllDay && (g.className += " resizable"),
                  (g.ondragstart = function (a) {
                      var b = Ye(g);
                      xg = g;
                      yg = g.offsetTop;
                      Qb = d;
                      zg = b.top - a.pageY;
                      Ag = m;
                  }),
                  (g.ondragEnd = Vh),
                  g.setAttribute("draggable", !0));
            gf(g, d);
            be(g, d, Ve(d, m));
            ce(g, d, e);
            U(d.from, m) && (g.id = "week-day-" + d.id);
            w(b.events.onFullWeekEventRender, g, d) ||
                ((c = h("div", "title")),
                H(d.repeatEvery) > x.never &&
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
                        ? y(c, b.allDayText)
                        : (y(c, de(d.from, d.to)), y(k, Ob(d.from, d.to)))
                    : (We(c, d.from, d.to), y(k, Ob(d.from, d.to))),
                k.innerHTML === n.empty && g.removeChild(k),
                b.views.fullWeek.showEventUrls &&
                    Ca(d.url) &&
                    ((c = h("div", "url-text")),
                    y(c, Bg(d.url)),
                    g.appendChild(c),
                    (c.onclick = function (a) {
                        C(a);
                        je(d.url);
                    })),
                Ba(d.repeatEvery) &&
                    d.repeatEvery > x.never &&
                    ((c = h("div", "repeats")),
                    y(c, b.repeatsText.replace(":", n.empty) + n.space + pd(d.repeatEvery)),
                    g.appendChild(c)),
                Ca(d.location) && ((c = h("div", "location")), y(c, d.location), g.appendChild(c)),
                Ca(d.description) && ((c = h("div", "description")), y(c, d.description), g.appendChild(c)));
            g.addEventListener("click", function (a) {
                hf(a, d);
            });
            d.isAllDay || Mj(a, a, m, g, d, !0);
            d.isAllDay || ei.push({ eventDetails: d, eventElement: g, height: g.offsetHeight });
            lf.hasOwnProperty(f) || (lf[f] = []);
            nf = 0 === nf ? g.offsetTop : la.min(nf, g.offsetTop);
            lf[f].push(d);
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
        lf = {};
        di = !1;
        Gg = null;
        nf = 0;
        Ad.style.display = "none";
        ei = [];
        Rj = a;
        jf(da, c);
        kd();
        Qa.innerHTML = n.empty;
        if (!w(b.events.onFullWeekTitleRender, a, e)) {
            if (b.views.fullWeek.showWeekNumbersInTitles) {
                d = Qa;
                var f = b.weekText + n.space,
                    k = new Date(a.getFullYear(), 0, 1),
                    m = la.ceil(((a - k) / 864e5 + k.getDay() + 1) / 7);
                4 < k.getDay() && m--;
                aa(d, f + m + ": ");
            }
            b.reverseOrderDaysOfWeek ? Tj(e, a) : Tj(a, e);
        }
        Kh(yd, !1);
        d = b.dayHeaderNames.length;
        f = {};
        for (k = new Date(a); k < e; ) (f[X(k)] = new Date(k)), k.setDate(k.getDate() + 1);
        kf.innerHTML = n.empty;
        le.innerHTML = n.empty;
        b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday
            ? (bi(b.startOfWeekDay, d, f), bi(0, b.startOfWeekDay, f))
            : bi(0, d, f);
        b.reverseOrderDaysOfWeek && ld(kf);
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
                    null !== r && Uj(r, t, m, g) && (q = !0);
                }
                Za(g);
            }
            q && hc.push(m);
            g = H(m.repeatEvery);
            h = !1;
            g > x.never &&
                (g === x.everyDay
                    ? (h = oc(m, a, e, Za, 1))
                    : g === x.everyWeek
                      ? (h = oc(m, a, e, Rb, 1))
                      : g === x.every2Weeks
                        ? (h = oc(m, a, e, Rb, 2))
                        : g === x.everyMonth
                          ? (h = oc(m, a, e, ke, 1))
                          : g === x.everyYear
                            ? (h = oc(m, a, e, wd, 1))
                            : g === x.custom &&
                              ((g = H(m.repeatEveryCustomType)),
                              (l = H(m.repeatEveryCustomValue)),
                              0 < l &&
                                  (g === M.daily
                                      ? (h = oc(m, a, e, Za, l))
                                      : g === M.weekly
                                        ? (h = oc(m, a, e, Rb, l))
                                        : g === M.monthly
                                          ? (h = oc(m, a, e, ke, l))
                                          : g === M.yearly && (h = oc(m, a, e, wd, l)))));
            h && !q && hc.push(m);
        }
        a = b.dayHeaderNames.length;
        for (e = 0; e < a; e++) (d = Aa("calendar-week-day-" + e)), null !== d && Qj(d);
        a = 0;
        if (di) {
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
        c && (null !== Gg ? ((a = 0 >= a ? 4 * b.spacing : a), (zd.scrollTop = Gg - a)) : (zd.scrollTop = nf));
        Wa(Sj, 0 < hc.length);
    }
    function uj() {
        Sb.setDate(Sb.getDate() - 7);
        zc(Sb, !0);
    }
    function yj() {
        Rb(Sb);
        zc(Sb, !0);
    }
    function Cj() {
        Sb = new Date();
        zc(Sb, !0);
    }
    function tl() {
        Hg = Ig = null;
        var a = null !== S;
        a && (S.innerHTML = n.empty);
        a || ((S = h("div", "title-bar")), Ib.appendChild(S));
        b.fullScreenModeEnabled && (S.ondblclick = Xa);
        r &&
            (S.onclick = function (a) {
                C(a);
                Ga();
            });
        !r && md() && (t(S, "ib-hamburger", b.showMenuTooltipText, Kc), S.appendChild(h("div", "left-divider-line")));
        t(S, "ib-arrow-left-full", b.previousMonthTooltipText, af);
        b.views.fullMonth.addYearButtons && t(S, "ib-rewind", b.previousYearTooltipText, sg);
        (r || b.views.fullMonth.showExtraTitleBarButtons) && t(S, "ib-pin", b.currentMonthTooltipText, vg);
        b.views.fullMonth.showExtraTitleBarButtons &&
            (b.jumpToDateEnabled &&
                t(S, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                    ee();
                }),
            S.appendChild(h("div", "left-divider-line-events")),
            t(S, "ib-refresh", b.refreshTooltipText, function () {
                La(!0, !0);
            }),
            u.enabled && (Hg = t(S, "ib-search", b.searchTooltipText, fe)));
        r && (t(S, "ib-close", b.closeTooltipText, qd), S.appendChild(h("div", "right-divider-line")));
        b.views.fullMonth.showExtraTitleBarButtons &&
            b.fullScreenModeEnabled &&
            ((Ig = t(S, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Xa)),
            S.appendChild(h("div", "right-divider-line-full-screen-mode")));
        t(S, "ib-arrow-right-full", b.nextMonthTooltipText, bf);
        b.views.fullMonth.addYearButtons && t(S, "ib-forward", b.nextYearTooltipText, tg);
        b.views.fullMonth.showExtraTitleBarButtons &&
            b.manualEditingEnabled &&
            t(S, "ib-plus", b.addEventTooltipText, function () {
                Vj(v, new Date()) ? P(null) : P(null, new Date(v.getFullYear(), v.getMonth(), 1));
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
                    var a = mg(v) ? null : v;
                    Jb(a, !0);
                }),
            b.views.allEvents.enabled &&
                t(S, "ib-eye", b.viewAllEventsTooltipText, function () {
                    Ph(!0);
                }),
            b.views.fullYear.enabled &&
                t(S, "ib-expand", b.viewFullYearTooltipText, function () {
                    Ac(v.getFullYear(), !0);
                }),
            b.views.fullWeek.enabled &&
                t(S, "ib-hamburger-side", b.viewFullWeekTooltipText, function () {
                    var a = mg(v) ? null : v;
                    zc(a, !0);
                }),
            b.views.fullDay.enabled &&
                t(S, "ib-hourglass", b.viewFullDayTooltipText, function () {
                    var a = mg(v) ? null : v;
                    Va(a, !0);
                }));
        a = h("div", "title-container");
        S.appendChild(a);
        Zl(a);
        $l(a);
    }
    function sb() {
        r ||
            null === nb ||
            (0 < b.views.fullMonth.pinUpViewImageUrls.length
                ? ((nb.style.backgroundImage = "url('" + b.views.fullMonth.pinUpViewImageUrls[Qc] + "')"),
                  Qc++,
                  Qc === b.views.fullMonth.pinUpViewImageUrls.length && (Qc = 0))
                : 0 < b.views.fullMonth.pinUpViewImageCssClasses.length &&
                  ((nb.className = "pin-up" + n.space + b.views.fullMonth.pinUpViewImageCssClasses[Qc]),
                  Qc++,
                  Qc === b.views.fullMonth.pinUpViewImageCssClasses.length && (Qc = 0)),
            Wj());
    }
    function Wj() {
        if (!r && null !== nb && !w(b.events.onFullMonthPinUpRender, nb, v)) {
            var a = new Date();
            if (null === fi || !U(fi, a)) {
                nb.innerHTML = n.empty;
                fi = a;
                var c = h("div", "pin-up-text"),
                    d = h("div", "day"),
                    e = h("div", "month"),
                    f = h("div", "year");
                c.onclick = function () {
                    P(null, a);
                };
                Ra(c, b.addEventTooltipText);
                nb.appendChild(c);
                c.appendChild(d);
                c.appendChild(e);
                c.appendChild(f);
                aa(d, a.getDate());
                if (b.showDayNumberOrdinals && ((c = Jg(a.getDate())), p(c))) {
                    var k = h("sup");
                    k.innerText = c;
                    d.appendChild(k);
                }
                y(e, b.monthNames[a.getMonth()]);
                y(f, a.getFullYear());
            }
        }
    }
    function cj(a, c) {
        var d = p(a);
        a = d ? a : Ib;
        c = p(c) ? c : "calendar-day-";
        if (!d && 0 < of.length) {
            for (var e = of.length, f = 0; f < e; f++) a.removeChild(of[f]);
            of = [];
        }
        for (e = 0; 6 > e; e++) {
            f = h("div", "row-cells days");
            a.appendChild(f);
            d || of.push(f);
            for (var k = 0; 7 > k; k++) {
                var m = k;
                if (b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday)
                    (m = b.startOfWeekDay + k), 7 <= m && (m -= 7);
                if (b.visibleDays.indexOf(m) > B.notFound) {
                    m = 7 * e + (k + 1);
                    var g = h("div", Eg(b.views.fullMonth.allowEventScrolling));
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
    function Eg(a) {
        a = p(a) ? a : !1;
        var c = "cell cell-" + b.visibleDays.length;
        a && (c += " custom-scroll-bars");
        return c;
    }
    function Zl(a) {
        oe = h("span", "year-dropdown-button");
        oe.ondblclick = C;
        oe.onclick = am;
        a.appendChild(oe);
        Nh = h("span");
        oe.appendChild(Nh);
        b.views.fullMonth.showYearDropDownButtonIcon &&
            ((Kg = h("span", "ib-arrow-down-full-medium")), oe.appendChild(Kg));
    }
    function $l(a) {
        var c = new Date(b.minimumYear, 1, 1),
            d = null;
        Tb = h(
            "div",
            b.views.fullMonth.showMonthButtonsInYearDropDownMenu ? "years-drop-down" : "years-drop-down-no-months"
        );
        a.appendChild(Tb);
        if (b.views.fullMonth.showMonthButtonsInYearDropDownMenu)
            for (a = 0; 12 > a; a++) 0 === a % 3 && ((d = h("div", "months")), Tb.appendChild(d)), bm(d, a);
        pf = h("div", "contents custom-scroll-bars");
        for (Tb.appendChild(pf); !(cm(c.getFullYear()), wd(c), c.getFullYear() > b.maximumYear); );
    }
    function bm(a, c) {
        var d = h("div", "month-name"),
            e = b.monthNamesAbbreviated[c];
        d.onclick = function (a) {
            C(a);
            v.getMonth() !== c && (v.setMonth(c), w(b.events.onSetDate, v), F(v), rg(), sb());
        };
        y(d, e);
        a.appendChild(d);
        Rc[c.toString()] = d;
    }
    function cm(a) {
        var c = h("div");
        c.className = "year";
        c.innerText = a.toString();
        c.id = "year-selected-" + a.toString();
        pf.appendChild(c);
        c.ondblclick = C;
        c.onclick = function (c) {
            C(c);
            v.getFullYear() !== a && (v.setFullYear(a), w(b.events.onSetDate, v), F(v), rg(), sb());
        };
    }
    function dm() {
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
    function am(a) {
        C(a);
        if ("block" !== Tb.style.display) {
            Ga();
            Tb.style.display = "block";
            b.views.fullMonth.showYearDropDownButtonIcon && (Kg.className = "ib-arrow-up-full-medium");
            for (var c in Rc) Rc.hasOwnProperty(c.toString()) && (Rc[c.toString()].className = "month-name");
            a = v.getMonth().toString();
            c = new Date();
            v.getFullYear() === c.getFullYear() &&
                ((c = c.getMonth().toString()), Rc.hasOwnProperty(c) && (Rc[c].className = "month-name-current-month"));
            Rc.hasOwnProperty(a) && (Rc[a].className = "month-name-selected");
            a = dm();
            pf.scrollTop = null !== a ? a.offsetTop - pf.offsetTop - b.spacing : 0;
        } else rg();
    }
    function rg() {
        var a = !1;
        Lg() &&
            (b.views.fullMonth.showYearDropDownButtonIcon && (Kg.className = "ib-arrow-down-full-medium"),
            (Tb.style.display = "none"),
            (a = !0));
        return a;
    }
    function Lg() {
        return null !== Tb && "block" === Tb.style.display;
    }
    function Lh(a, c, d, e, f, k) {
        c = Aa("calendar-day-" + c);
        if (null !== c) {
            var m = new Date(),
                g = a === m.getDate() && e === m.getFullYear() && d === m.getMonth(),
                q = h("span"),
                l = new Date(e, d, a);
            f = f ? " day-muted" : n.empty;
            m = !0;
            k = p(k) ? k : !1;
            c.innerHTML = n.empty;
            c.className = c.className
                .replace(" cell-today", n.empty)
                .replace(" cell-selected", n.empty)
                .replace(" cell-no-click", n.empty);
            r && g && (c.className += " cell-today");
            r && !g && null !== Mc && U(l, Mc) && (c.className += " cell-selected");
            r
                ? ((m = mj(l)), m || ((c.className += " cell-no-click"), (q.className = "no-click")))
                : (q.className = n.empty);
            q.className += f;
            q.className += g && !r ? " today" : n.empty;
            q.innerText = b.views.fullMonth.padDayNumbers ? J(a) : a;
            1 !== a || r || (q.className += " first-day");
            0 <= b.weekendDays.indexOf(l.getDay()) &&
                c.className.indexOf("weekend-day") === B.notFound &&
                (c.className += " weekend-day");
            0 <= b.workingDays.indexOf(X(l)) &&
                c.className.indexOf("working-day") === B.notFound &&
                (c.className += " working-day");
            c.oncontextmenu = function (a) {
                Mg(a, l);
            };
            if (b.showDayNumberOrdinals && ((g = Jg(a)), p(g))) {
                var t = h("sup");
                t.innerText = g;
                q.appendChild(t);
            }
            c.appendChild(q);
            c.appendChild(h("span", "blank"));
            b.views.fullDay.enabled &&
                ((q = h("div", "ib-arrow-expand-left-right-icon")),
                c.appendChild(q),
                Ra(q, b.expandDayTooltipText),
                (q.onclick = function () {
                    Va(l, !0);
                }));
            k &&
                b.views.fullMonth.showPreviousNextMonthNames &&
                ((k = b.monthNames[d]),
                !b.views.fullMonth.showPreviousNextYears || (0 !== d && 11 !== d) || (k += n.space + e.toString()),
                aa(
                    c,
                    k,
                    "month-name" + f,
                    function () {
                        1 === a ? bf() : af();
                    },
                    !0,
                    !0
                ));
            em(l, f, c);
            b.manualEditingEnabled &&
                ((c.ondblclick = function () {
                    if (b.useTemplateWhenAddingNewEvent) {
                        var a = td(l, l);
                        P(a);
                        ud();
                    } else P(null, l);
                }),
                Fg(c, e, d, a));
            r &&
                (c.onclick = m
                    ? function (a) {
                          C(a);
                          Lg()
                              ? Ga()
                              : ((a = new Date(l)),
                                a.setHours(0, 0, 0, 0),
                                qd(),
                                Th(l),
                                w(b.events.onDatePickerDateChanged, a),
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
                null !== d && ($h(d, "event"), $h(d, "plus-x-events"));
            }
        Qh();
        pe = !1;
        ed = [];
        Cd = {};
        a = vb(Bd());
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d],
                f = e;
            gi(f.from, f);
            if (
                f.from.getDate() !== f.to.getDate() ||
                f.from.getMonth() !== f.to.getMonth() ||
                f.from.getFullYear() !== f.to.getFullYear()
            ) {
                var k = Pc(f.from, f.to);
                if (0 < k)
                    for (var m = new Date(f.from), h = 0; h < k; h++)
                        Za(m), hi(vd(m), f.id), null !== ii(m) && gi(m, f);
            }
            ie(e) && ed.push(e);
            f = H(e.repeatEvery);
            f > x.never &&
                (f === x.everyDay
                    ? pc(e, Za, 1)
                    : f === x.everyWeek
                      ? pc(e, Rb, 1)
                      : f === x.every2Weeks
                        ? pc(e, Rb, 2)
                        : f === x.everyMonth
                          ? pc(e, ke, 1)
                          : f === x.everyYear
                            ? pc(e, wd, 1)
                            : f === x.custom &&
                              ((f = H(e.repeatEveryCustomType)),
                              (k = H(e.repeatEveryCustomValue)),
                              0 < k &&
                                  (f === M.daily
                                      ? pc(e, Za, k)
                                      : f === M.weekly
                                        ? pc(e, Rb, k)
                                        : f === M.monthly
                                          ? pc(e, ke, k)
                                          : f === M.yearly && pc(e, wd, k))));
        }
        Xj !== pe && ((Xj = pe), w(b.events.onBusyStateChange, pe));
        null !== Hg && Wa(Hg, 0 < ed.length);
        Rh();
    }
    function pc(a, c, d) {
        for (var e = new Date(a.from), f = Oc(a.repeatEveryExcludeDays), k = new Date(b.maximumYear, 11, 31); e < k; ) {
            c(e, d);
            var m = !(!p(a.repeatEnds) || Ze(e, a.repeatEnds));
            f.indexOf(e.getDay()) !== B.notFound || m || (hi(vd(e), a.id), e < Mh && null !== ii(e) && gi(e, a));
        }
    }
    function gi(a, c) {
        var d = ii(a),
            e = Oc(c.seriesIgnoreDates),
            f = vd(a),
            k = new Date(a);
        if (ie(c) && e.indexOf(f) === B.notFound && (hi(f, c.id), null !== d && (fm(a, c), !r)))
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
                else if (!w(b.events.onFullMonthEventRender, e, c)) {
                    var m = c.title,
                        g = H(c.repeatEvery);
                    b.views.fullMonth.showTimesInEvents &&
                        !c.isAllDay &&
                        c.from.getDate() === c.to.getDate() &&
                        (m = de(c.from, c.to) + ": " + m);
                    g > x.never &&
                        b.showReoccurringEventIcons &&
                        ((g = h("div", "ib-refresh-small ib-no-hover ib-no-active")),
                        (g.style.borderColor = e.style.color),
                        e.appendChild(g));
                    e.innerHTML += kc(m);
                }
                d.appendChild(e);
                ci(e, c, a, d);
                gf(e, c);
                be(e, c, Ve(c, a), b.views.fullMonth.applyCssToEventsNotInCurrentMonth);
                ce(e, c, k);
                U(c.from, a) && (e.id = "day-" + c.id);
                e.onmousemove = function (a) {
                    null !== Dd && Dd.id === c.id ? C(a) : ji(a, c);
                };
                e.oncontextmenu = function (a) {
                    ff(a, c, f);
                };
                e.addEventListener("click", function (a) {
                    hf(a, c);
                });
            } else gm(d, a);
    }
    function gm(a, c) {
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
            y(d, "+1 " + b.moreText);
            b.views.fullDay.enabled
                ? (d.onclick = function () {
                      Va(e, !0);
                  })
                : (d.className += n.space + "prevent-pointer-events");
        } else
            (a = parseInt(d.getAttribute("events")) + 1),
                d.setAttribute("events", a.toString()),
                y(d, "+" + a + n.space + b.moreText);
    }
    function ii(a) {
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
    function hi(a, b) {
        Cd.hasOwnProperty(a) || (Cd[a] = []);
        Cd[a].indexOf(b) === B.notFound && Cd[a].push(b);
    }
    function ul() {
        if (!r && b.views.fullYear.enabled) {
            var a = null !== Da;
            a && (Da.innerHTML = n.empty);
            a || ((Da = h("div", "full-year-view")), (Da.id = ec()), z.appendChild(Da));
            a = h("div", "title-bar");
            Da.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Xa);
            ki = h("div", "title");
            a.appendChild(ki);
            !r &&
                md() &&
                (t(a, "ib-hamburger", b.showMenuTooltipText, Kc), a.appendChild(h("div", "left-divider-line")));
            t(a, "ib-arrow-left-full", b.previousYearTooltipText, vj);
            b.views.fullYear.showExtraTitleBarButtons &&
                (t(a, "ib-pin", b.currentYearTooltipText, Dj),
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
                ((li = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Xa)),
                a.appendChild(h("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextYearTooltipText, zj);
            b.views.fullYear.showExtraTitleBarButtons &&
                b.manualEditingEnabled &&
                t(a, "ib-plus", b.addEventTooltipText, function () {
                    P(null, new Date(sa, 0, 1));
                });
            qe = h("div", "contents custom-scroll-bars");
            Da.appendChild(qe);
        }
    }
    function hm(a) {
        var c = new Date(sa, a, 1),
            d = function () {
                U(v, c) || (F(c), sb());
                for (; 0 < pb.length; ) Fj(!1);
                qf();
            },
            e = h("div", "year-month");
        qe.appendChild(e);
        var f = h("div", "title-bar-container");
        e.appendChild(f);
        var k = h("div", "title-bar");
        k.ondblclick = d;
        y(k, b.monthNames[a]);
        f.appendChild(k);
        t(k, "ib-arrow-expand-left-right", b.expandMonthTooltipText, d);
        b.manualEditingEnabled &&
            (k.appendChild(h("div", "right-divider-line")),
            t(k, "ib-plus", b.addEventTooltipText, function () {
                P(null, c);
            }));
        d = h("div", "row-cells header-days");
        e.appendChild(d);
        Kh(d);
        d = a + 1 + "-month-";
        f = new Date(sa, a, 1);
        f = Pe(0 === f.getDay() ? 7 : f.getDay());
        cj(e, d);
        1 < f && im(f, d, a);
        f = jm(f, d, a);
        k = f[0];
        km(f[1], d, a);
        k && (Ng = e.offsetTop);
    }
    function im(a, b, d) {
        d = new Date(sa, d, 1);
        d.setMonth(d.getMonth() - 1);
        var c = ad(d.getFullYear(), d.getMonth());
        for (--a; 0 < a; ) lm(b, a, d, c), a--, c--;
    }
    function lm(a, c, d, e) {
        a = Aa(a + c);
        if (null !== a) {
            var f = new Date(d.getFullYear(), d.getMonth(), e);
            a.className += " cell-muted";
            b.views.fullDay.enabled &&
                (a.onclick = function () {
                    Va(f, !0);
                });
            a.oncontextmenu = function (a) {
                Mg(a, f);
            };
            mi(a, f);
            Nb(a, f, null, null, b.views.fullYear.padDayNumbers);
        }
    }
    function jm(a, b, d) {
        for (var c = 0, f = ad(sa, d), k = !1, m = 0; m < f; m++) (c = a + m), mm(b, d, m, c) && (k = !0);
        return [k, c];
    }
    function mm(a, c, d, e) {
        a = Aa(a + e);
        e = !1;
        if (null !== a) {
            var f = new Date(sa, c, d + 1);
            b.views.fullDay.enabled &&
                (a.onclick = function () {
                    Va(f, !0);
                });
            a.oncontextmenu = function (a) {
                Mg(a, f);
            };
            e = mi(a, f, !0);
            Nb(a, f, null, null, b.views.fullYear.padDayNumbers);
        }
        return e;
    }
    function km(a, b, d) {
        if (42 > a) {
            d = new Date(sa, d, 1);
            var c = 1;
            d.setMonth(d.getMonth() + 1);
            for (a += 1; 43 > a; a++) nm(b, d, a, c), c++;
        }
    }
    function nm(a, c, d, e) {
        a = Aa(a + d);
        if (null !== a) {
            var f = new Date(c.getFullYear(), c.getMonth(), e);
            a.className += " cell-muted";
            b.views.fullDay.enabled &&
                (a.onclick = function () {
                    Va(f, !0);
                });
            a.oncontextmenu = function (a) {
                Mg(a, f);
            };
            mi(a, f);
            Nb(a, f, null, null, b.views.fullYear.padDayNumbers);
        }
    }
    function mi(a, c, d) {
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
        Ng = 0;
        ki.innerText = sa;
        var d = (a = c) ? 0 : qe.scrollTop;
        qe.innerHTML = n.empty;
        for (var e = 0; 12 > e; e++) hm(e);
        qe.scrollTop = a ? (0 < Ng ? Ng - 4 * b.spacing : 0) : d;
        jf(Da, c);
    }
    function vj() {
        sa > b.minimumYear && (--sa, Ac(sa, !0));
    }
    function zj() {
        sa < b.maximumYear && ((sa += 1), Ac(sa, !0));
    }
    function Dj() {
        sa = new Date().getFullYear();
        Ac(sa, !0);
    }
    function vl() {
        if (!r && b.views.allEvents.enabled) {
            var a = null !== ra;
            a && (ra.innerHTML = n.empty);
            a || ((ra = h("div", "all-events-view")), (ra.id = ec()), z.appendChild(ra));
            a = h("div", "title-bar");
            ra.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Xa);
            var c = h("div", "title");
            y(c, b.allEventsText);
            a.appendChild(c);
            t(a, "ib-close", b.closeTooltipText, function () {
                Lb = [];
                xd(ra);
            });
            b.views.allEvents.showExtraTitleBarButtons &&
                (a.appendChild(h("div", "right-divider-line")),
                b.fullScreenModeEnabled &&
                    ((ni = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Xa)),
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
                u.enabled && (Yj = t(a, "ib-search", b.searchTooltipText, fe)));
            Ed = h("div", "contents custom-scroll-bars");
            ra.appendChild(Ed);
        }
    }
    function om(a) {
        if (ie(a)) {
            var c = pm(a.from),
                d = h("div", "event");
            c.appendChild(d);
            d.oncontextmenu = function (b) {
                ff(b, a);
            };
            ci(d, a, a.from, c);
            gf(d, a);
            be(d, a);
            ce(d, a);
            d.id = "month-" + a.id;
            d.setAttribute("event-type", H(a.type));
            d.setAttribute("event-id", a.id);
            d.setAttribute("event-is-all-day", a.isAllDay);
            if (!w(b.events.onAllEventsEventRender, d, a)) {
                c = h("div", "title");
                if (H(a.repeatEvery) > x.never && b.showReoccurringEventIcons) {
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
                        : (Nb(c, a.from, null, " - " + de(a.from, a.to)), y(e, Ob(a.from, a.to)))
                    : (We(c, a.from, a.to), y(e, Ob(a.from, a.to)));
                e.innerHTML === n.empty && d.removeChild(e);
                b.views.allEvents.showEventUrls &&
                    Ca(a.url) &&
                    ((c = h("div", "url-text")),
                    y(c, Bg(a.url)),
                    d.appendChild(c),
                    (c.onclick = function (b) {
                        C(b);
                        je(a.url);
                    }));
                Ba(a.repeatEvery) &&
                    a.repeatEvery > x.never &&
                    ((c = h("div", "repeats")),
                    y(c, b.repeatsText.replace(":", n.empty) + n.space + pd(a.repeatEvery)),
                    d.appendChild(c));
                Ca(a.location) && ((c = h("div", "location")), y(c, a.location), d.appendChild(c));
                Ca(a.description) && ((c = h("div", "description")), y(c, a.description), d.appendChild(c));
            }
            d.addEventListener("click", function (b) {
                hf(b, a);
            });
            Lb.push(a);
        }
    }
    function pm(a) {
        var c = "month-" + a.getMonth() + "-" + a.getFullYear(),
            d = Aa(c);
        if (null === d) {
            var e = new Date(a),
                f = function () {
                    Lb = [];
                    xd(ra);
                    F(e);
                    sb();
                },
                k = qm(a);
            null !== k && Ed.appendChild(k);
            k = h("div", "month");
            Ed.appendChild(k);
            var m = h("div", "header");
            y(m, b.monthNames[a.getMonth()] + n.space + a.getFullYear());
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
                    Zj(e, Vj);
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
            ug.push(f);
            d = h("div", "events");
            d.id = c;
            k.appendChild(d);
            O.visibleAllEventsMonths.hasOwnProperty(c) &&
                !O.visibleAllEventsMonths[c] &&
                ((d.style.display = "none"), (p.className = "ib-square-hollow"), Ra(p, b.restoreTooltipText));
            Fg(d, a.getFullYear(), a.getMonth(), a.getDate());
        }
        return d;
    }
    function qm(a) {
        var c = null;
        if (oi.indexOf(a.getFullYear()) === B.notFound) {
            oi.push(a.getFullYear());
            c = h("div", "year-header");
            var d = h("span", "header-text");
            y(d, a.getFullYear() + ":");
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
    function Ph(a) {
        a = p(a) ? a : !1;
        jf(ra, a);
        Ed.innerHTML = n.empty;
        Lb = [];
        ug = [];
        oi = [];
        a && (Ed.scrollTop = 0);
        a = vb(Bd());
        for (var b = a.length, d = 0; d < b; d++) om(a[d]);
        Wa(Yj, 0 < Lb.length);
        0 === Lb.length &&
            rm(Ed, function () {
                P(null);
            });
    }
    function wl() {
        if (!r && b.views.timeline.enabled) {
            var a = null !== ia;
            a && (ia.innerHTML = n.empty);
            null === $a && ($a = b.views.timeline.defaultAxis);
            a || ((ia = h("div", "timeline-view")), (ia.id = ec()), z.appendChild(ia));
            a = h("div", "title-bar");
            ia.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Xa);
            Og = h("div", "title");
            a.appendChild(Og);
            t(a, "ib-close", b.closeTooltipText, function () {
                Bc = [];
                xd(ia);
            });
            a.appendChild(h("div", "right-divider-line"));
            b.views.timeline.showExtraTitleBarButtons &&
                b.fullScreenModeEnabled &&
                ((pi = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Xa)),
                a.appendChild(h("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextYearTooltipText, Aj);
            b.views.timeline.showExtraTitleBarButtons &&
                b.manualEditingEnabled &&
                t(a, "ib-plus", b.addEventTooltipText, function () {
                    P(null, new Date(ba));
                });
            b.views.fullDay.enabled &&
                (a.appendChild(h("div", "right-divider-line-views")),
                t(a, "ib-hourglass", b.viewFullDayTooltipText, function () {
                    Va(ba, !0);
                }));
            !r &&
                md() &&
                (t(a, "ib-hamburger", b.showMenuTooltipText, Kc), a.appendChild(h("div", "left-divider-line")));
            t(a, "ib-arrow-left-full", b.previousYearTooltipText, wj);
            b.views.timeline.showExtraTitleBarButtons &&
                ((ak = t(a, "ib-pin", b.currentYearTooltipText, Ej)),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        ee();
                    }),
                a.appendChild(h("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    La(!0, !0);
                }),
                u.enabled && (bk = t(a, "ib-search", b.searchTooltipText, fe)));
            Ja = h("div", "contents custom-scroll-bars");
            Ja.addEventListener("scroll", ic);
            ia.appendChild(Ja);
        }
    }
    function sm(a, c) {
        var d = h("div", "event"),
            e = vd(ba),
            f = new Date(ba);
        d.id = "timeline-day-" + c.id;
        d.setAttribute("event-type", H(c.type));
        d.setAttribute("event-id", c.id);
        d.setAttribute("event-is-all-day", c.isAllDay);
        a.appendChild(d);
        if (!w(b.events.onTimelineEventRender, d, c)) {
            if (H(c.repeatEvery) > x.never && b.showReoccurringEventIcons) {
                var k = h("div", "ib-refresh-medium ib-no-hover ib-no-active");
                k.style.borderColor = d.style.color;
                d.appendChild(k);
            }
            d.innerHTML += kc(c.title);
        }
        d.oncontextmenu = function (a) {
            ff(a, c, e);
        };
        d.addEventListener("click", function (a) {
            hf(a, c);
        });
        d.onmousemove = function (a) {
            null !== Dd && Dd.id === c.id ? C(a) : ji(a, c);
        };
        ce(d, c, f);
        gf(d, c);
        be(d, c, Ve(c, ba));
        d = tm(a, ba, d, c);
        rf = null === rf ? d : la.min(rf, d);
        sf = null === sf ? a.offsetTop : la.min(sf, a.offsetTop);
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
        Og.innerHTML = n.empty;
        Ja.innerHTML = n.empty;
        Bc = [];
        ba = a;
        Pg = {};
        sf = rf = null;
        tf = [];
        U(a, d) && !f && ck();
        Sh(ba, k);
        Wa(ak, f);
        Fd = h("div", "timeline-header");
        Ja.appendChild(Fd);
        a = h("div", "timeline-header-item");
        d = n.empty;
        "group" === $a
            ? (d = b.groupText)
            : "organizerName" === $a
              ? (d = b.organizerNameText)
              : "location" === $a
                ? (d = b.locationText)
                : "organizerEmailAddress" === $a
                  ? (d = b.organizerEmailAddressText)
                  : "url" === $a
                    ? (d = b.urlText)
                    : "title" === $a
                      ? (d = b.titleText)
                      : "description" === $a && (d = b.descriptionText);
        a.innerHTML = d;
        Fd.appendChild(a);
        t(a, "ib-arrow-left-full", b.previousPropertyTooltipText, um);
        t(a, "ib-arrow-right-full", b.nextPropertyTooltipText, vm);
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
            f = gb(f, a);
            l = h("div", "timeline-header-item");
            l.innerText = yb(new Date(f));
            Fd.appendChild(l);
            f = gb(f, a);
            l = h("div", "timeline-column");
            l.style.left = g + "px";
            Ja.appendChild(l);
            0 === q && ((q = bd(l, "border-right-width")), (q = l.clientWidth + q));
            g += q;
            var r = h("div", "timeline-column");
            r.style.left = g + "px";
            Ja.appendChild(r);
            g += q;
            tf.push(l);
            tf.push(r);
        }
        jf(ia, c);
        k = vb(k);
        a = k.length;
        d = 0;
        if (0 < a)
            for (f = 0; f < a; f++) {
                g = k[f];
                l = G(g[$a], b.noneText);
                q = l.toLowerCase();
                g.isAllDay && ((l = b.allDayText + ": " + l), (q = q + "-" + g.id));
                if (Pg.hasOwnProperty(q)) l = Pg[q];
                else {
                    r = h("div", "timeline-row");
                    Ja.appendChild(r);
                    var u = h("div", "timeline-row-item" + (0 !== d % 2 ? " timeline-row-item-odd" : n.empty));
                    y(u, l);
                    r.appendChild(u);
                    l = h("div", "timeline-row-items");
                    r.appendChild(l);
                    r = b.views.timeline.minutesBetweenSections;
                    u = new Date();
                    var v = new Date();
                    v.setHours(0, 0, 0, 0);
                    for (0 !== 60 % r && (r = 30); U(v, u); ) {
                        var x = h("div", "timeline-row-item-spacing");
                        l.appendChild(x);
                        v = gb(v, r);
                        x = h("div", "timeline-row-item-spacing");
                        l.appendChild(x);
                        v = gb(v, r);
                    }
                    Pg[q] = l;
                    d++;
                }
                sm(l, g);
                Bc.push(g);
            }
        k = tf.length;
        a = Ja.getElementsByClassName("timeline-row");
        d = a.length;
        f = 0;
        0 < d &&
            ((f = bd(a[0], "border-bottom-width")),
            (g = bd(Fd, "border-bottom-width")),
            (f = d * (a[0].offsetHeight - f) + (Fd.offsetHeight - g)));
        for (a = 0; a < k; a++)
            (d = tf[a]), 0 === f && (f = Ja.scrollHeight - d.offsetTop), (d.style.height = f + "px");
        w(b.events.onTimelineTitleRender, L) || jc(Og, ba, !1, !0, !0);
        c ? ((Ja.scrollLeft = rf), (Ja.scrollTop = sf)) : ((Ja.scrollLeft = e), (Ja.scrollTop = m));
        Wa(bk, 0 < Bc.length);
    }
    function wj() {
        Dg(ba);
        if (7 > b.visibleDays.length)
            for (var a = X(ba); b.visibleDays.indexOf(a) === B.notFound; ) Dg(ba), (a = X(ba));
        Jb(ba, !0);
    }
    function Aj() {
        ck(!0);
    }
    function Ej() {
        ba = new Date();
        Jb(ba, !0);
    }
    function um() {
        var a = re.indexOf($a);
        a--;
        0 > a && (a = re.length - 1);
        $a = re[a];
        Jb(ba);
    }
    function vm() {
        var a = re.indexOf($a);
        a++;
        a > re.length - 1 && (a = 0);
        $a = re[a];
        Jb(ba);
    }
    function ck(a) {
        a = p(a) ? a : !1;
        Za(ba);
        if (7 > b.visibleDays.length)
            for (var c = X(ba); b.visibleDays.indexOf(c) === B.notFound; ) Za(ba), (c = X(ba));
        a && Jb(ba, !0);
    }
    function xa(a, b, d, e, f) {
        f = p(f) ? f : !1;
        var c = h("div", "item");
        a.appendChild(c);
        c.appendChild(h("div", b));
        a = h("div", "menu-text");
        y(a, d);
        c.appendChild(a);
        f && (a.className += " bold");
        c.onclick = function () {
            e();
        };
        return c;
    }
    function ab(a) {
        var b = h("div", "separator");
        a.appendChild(b);
        return b;
    }
    function qg(a) {
        var b = !1;
        se(a) && ((a.style.display = "none"), (b = !0));
        return b;
    }
    function se(a) {
        return null !== a && "block" === a.style.display;
    }
    function dk() {
        return se(Ia) || se(Y) || se(Oa) || se(ob) || se(zb);
    }
    function Bl() {
        null !== Ia && (hb(E.body, Ia), (Qg = qi = null));
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
            (ab(Ia),
            xa(Ia, "ib-arrow-expand-left-right-icon", b.expandDayTooltipText, function () {
                Va(Gd, !0);
            }));
        b.views.fullWeek.enabled &&
            (ab(Ia),
            xa(Ia, "ib-hamburger-side-icon", b.viewFullWeekText, function () {
                zc(Gd, !0);
            }));
        b.manualEditingEnabled &&
            ((qi = ab(Ia)),
            (Qg = xa(Ia, "ib-circle-icon", b.pasteText, function () {
                Xh(Gd, Pb);
            })));
    }
    function Mg(a, b) {
        r ||
            null === Ia ||
            (fa(a) || mc(),
            (Gd = new Date(b)),
            null !== Qg && ((b = 0 < ja.length ? "block" : "none"), (qi.style.display = b), (Qg.style.display = b)),
            Ga(),
            C(a),
            uf(a, Ia));
    }
    function Cl() {
        null !== Y && (hb(E.body, Y), (Rg = Sg = vf = wf = xf = yf = zf = Af = Bf = Cf = Df = Ef = Y = null));
        Y = h("div", "calendar-context-menu");
        ya.push(Y);
        E.body.appendChild(Y);
        b.manualEditingEnabled &&
            ((xf = xa(
                Y,
                "ib-edit-icon",
                b.editEventTitle + "...",
                function () {
                    P(bb, null, null, ek);
                },
                !0
            )),
            (Bf = ab(Y)),
            (Af = xa(Y, "ib-pipe-icon", b.cutText, function () {
                ge();
                Pb = !0;
                fk(bb);
                ge(!1);
            })),
            (zf = ab(Y)),
            (yf = xa(Y, "ib-circle-hollow-icon", b.copyText, function () {
                ge();
                Pb = !1;
                fk(bb);
                ge(!1);
            })),
            (Df = ab(Y)),
            (Cf = xa(Y, "ib-equals-icon", b.duplicateText + "...", function () {
                P(bb);
                y(Sc, b.addEventTitle);
                Ff.value = b.addText;
                Tg.style.display = "none";
                ea = te(ea);
                t(Sc, "ib-close", b.closeTooltipText, Tc, !0);
            })),
            (wf = ab(Y)),
            (vf = xa(Y, "ib-close-icon", b.removeEventText, function () {
                Ub(E.body, Ka);
                var a = function () {
                        hb(E.body, Ka);
                    },
                    c = H(bb.repeatEvery) > x.never && null !== Gf;
                Hf(
                    b.confirmEventRemoveTitle,
                    b.confirmEventRemoveMessage,
                    function () {
                        a();
                        p(bb.id) &&
                            (Ug.checked || null === Gf
                                ? (q.removeEvent(bb.id, !0), Sa(b.eventRemovedText.replace("{0}", bb.title)))
                                : (pa(bb.seriesIgnoreDates)
                                      ? bb.seriesIgnoreDates.push(Gf)
                                      : (bb.seriesIgnoreDates = [Gf]),
                                  Ha()),
                            ma());
                    },
                    a,
                    c
                );
            })),
            (Ef = ab(Y)));
        ri = xa(Y, "ib-arrow-top-right-icon", b.openUrlText, function () {
            je(bb.url);
        });
        b.exportEventsEnabled &&
            ((Sg = ab(Y)),
            (Rg = xa(Y, "ib-arrow-down-full-line-icon", b.exportEventsTooltipText + "...", function () {
                dd(Ea);
            })));
        b.shareEventsEnabled &&
            If.share &&
            (ab(Y),
            xa(Y, "ib-arrow-up-full-line-share-icon", b.shareText + "...", function () {
                var a = gk(0 < Ea.length ? Ea : [bb]),
                    c = { type: "text/plain" };
                a = new Blob([a], c);
                c = { files: [new File([a], hk("txt", b.shareStartFilename), c)] };
                If.canShare(c) && If.share(c);
            }));
    }
    function ff(a, c, d) {
        if (null !== Y) {
            var e = G(c.url),
                f = mf(c);
            fa(a) || mc();
            bb = c;
            ek = new Date(d);
            Gf = p(d) ? d : null;
            1 < Ea.length
                ? (b.manualEditingEnabled &&
                      ((xf.style.display = "none"),
                      (Bf.style.display = "none"),
                      (Af.style.display = "block"),
                      (zf.style.display = "block"),
                      (yf.style.display = "block"),
                      (Df.style.display = "none"),
                      (Cf.style.display = "none"),
                      (wf.style.display = "none"),
                      (vf.style.display = "none")),
                  (Ef.style.display = "none"),
                  (ri.style.display = "none"),
                  b.exportEventsEnabled && ((Sg.style.display = "block"), (Rg.style.display = "block")))
                : (f
                      ? b.manualEditingEnabled &&
                        ((xf.style.display = "block"),
                        (Bf.style.display = "none"),
                        (Af.style.display = "none"),
                        (zf.style.display = "none"),
                        (yf.style.display = "none"),
                        (Df.style.display = "none"),
                        (Cf.style.display = "none"),
                        (wf.style.display = "block"),
                        (vf.style.display = "block"),
                        (Ef.style.display = e !== n.empty ? "block" : "none"))
                      : b.manualEditingEnabled &&
                        ((xf.style.display = "block"),
                        (Bf.style.display = "block"),
                        (Af.style.display = "block"),
                        (zf.style.display = "block"),
                        (yf.style.display = "block"),
                        (Df.style.display = "block"),
                        (Cf.style.display = "block"),
                        (wf.style.display = "block"),
                        (vf.style.display = "block"),
                        (Ef.style.display = e !== n.empty ? "block" : "none")),
                  (ri.style.display = e !== n.empty ? "block" : "none"),
                  b.exportEventsEnabled && ((Sg.style.display = "none"), (Rg.style.display = "none")));
            if (e !== n.empty || 1 < Y.childElementCount) Ga(), C(a), uf(a, Y);
        }
    }
    function Dl() {
        null !== Oa && (hb(E.body, Oa), (Vg = si = ti = ui = Oa = null));
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
                        var a = td(ue, ue, df, df);
                        P(a);
                        ud();
                    } else P(null, ue, df);
                },
                !0
            ),
            (ui = ab(Oa)),
            (ti = xa(Oa, "ib-close-icon", b.removeEventsTooltipText, function () {
                Zj(ue, U);
            })),
            (si = ab(Oa)),
            (Vg = xa(Oa, "ib-circle-icon", b.pasteText, function () {
                Xh(ue, Pb);
            })));
    }
    function Ij(a, b, d) {
        null !== Oa &&
            (fa(a) || mc(),
            (ue = b),
            null !== Vg && ((b = 0 < ja.length ? "block" : "none"), (si.style.display = b), (Vg.style.display = b)),
            (d = pa(d) && 0 < d.length ? "block" : "none"),
            (ui.style.display = d),
            (ti.style.display = d),
            Ga(),
            C(a),
            uf(a, Oa));
    }
    function El() {
        null === ob &&
            ((ob = h("div", "calendar-context-menu")),
            ya.push(ob),
            E.body.appendChild(ob),
            (ik = xa(
                ob,
                "ib-close-icon",
                b.hideDayText,
                function () {
                    b.visibleDays.splice(b.visibleDays.indexOf(jk), 1);
                    mb = !1;
                    w(b.events.onOptionsUpdated, b);
                    F(v, !0, !0);
                },
                !0
            )),
            (kk = ab(ob)),
            (lk = xa(ob, "ib-rhombus-hollow-icon", b.showOnlyWorkingDaysText, function () {
                1 <= b.workingDays.length &&
                    ((b.visibleDays = [].slice.call(b.workingDays)),
                    (mb = !1),
                    w(b.events.onOptionsUpdated, b),
                    F(v, !0, !0));
            })),
            (mk = ab(ob)),
            xa(ob, "ib-octagon-hollow-icon", b.visibleDaysText + "...", function () {
                Kc(!0);
            }));
    }
    function Xi() {
        null !== Ka || r || (Ka = h("div", "disabled-background"));
    }
    function Yi() {
        if (!r) {
            null === cb && ((cb = h("div", "calendar-dialog event-editor")), ya.push(cb), E.body.appendChild(cb));
            cb.innerHTML = n.empty;
            var a = h("div", "view");
            cb.appendChild(a);
            Wg = h("div", "disabled-area");
            a.appendChild(Wg);
            Sc = h("div", "title-bar");
            a.appendChild(Sc);
            Hd(Sc, cb, null);
            var c = h("div", "contents");
            a.appendChild(c);
            a = nk(c);
            ve(
                a,
                b.eventText,
                function (a) {
                    we(a, Vb, cb);
                },
                !0
            );
            ve(a, b.typeText.replace(":", n.empty), function (a) {
                we(a, Xg, cb);
            });
            ve(a, b.repeatsText.replace(":", n.empty), function (a) {
                we(a, Yg, cb);
            });
            ve(a, b.optionalText, function (a) {
                we(a, Uc, cb);
            });
            Vb = xe(c, !0, !1);
            Xg = xe(c, !1, !1);
            Yg = xe(c, !1, !1);
            Uc = xe(c, !1, !1);
            wm();
            xm();
            ym();
            a = h("div", "buttons-container");
            c.appendChild(a);
            Tg = Fa(a, b.removeEventText, "remove", zm);
            Ff = Fa(a, b.addText, "add-update", ok);
            Fa(a, b.cancelText, "cancel", Tc);
        }
    }
    function wm() {
        qa(Vb, b.titleText);
        var a = h("div", "input-title-container");
        Vb.appendChild(a);
        Ab = h("input", null, "text");
        a.appendChild(Ab);
        Ab.onkeydown = function (a) {
            a.keyCode === Q.enter && ok();
        };
        0 < b.maximumEventTitleLength && (Ab.maxLength = b.maximumEventTitleLength);
        var c = function () {
            pk(null);
        };
        b.eventColorsEditingEnabled && (vi = Fa(a, "...", "select-colors", Am, b.selectColorsText));
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
        ib = h("input");
        ib.onchange = c;
        a.appendChild(ib);
        lc(ib, "date");
        Yb = h("input");
        a.appendChild(Yb);
        lc(Yb, "time");
        ye = K(Vb, b.isAllDayText, c)[0];
        Jf = K(Vb, b.showAlertsText)[0];
        Kf = K(Vb, b.showAsBusyText)[0];
    }
    function xm() {
        var a = h("div", "radio-buttons-container");
        Yg.appendChild(a);
        qc = ha(a, b.repeatsNever, "RepeatType", Vc);
        Lf = ha(a, b.repeatsEveryDayText, "RepeatType", Vc);
        Mf = ha(a, b.repeatsEveryWeekText, "RepeatType", Vc);
        Nf = ha(a, b.repeatsEvery2WeeksText, "RepeatType", Vc);
        Of = ha(a, b.repeatsEveryMonthText, "RepeatType", Vc);
        Pf = ha(a, b.repeatsEveryYearText, "RepeatType", Vc);
        Zb = ha(a, b.repeatsCustomText, "RepeatType", Vc);
        Zg = Fa(a, "...", "repeat-options", Bm, b.repeatOptionsTitle);
        a = h("div", "split split-margin");
        Yg.appendChild(a);
        Wc = h("input", null, "number");
        Wc.setAttribute("min", "1");
        a.appendChild(Wc);
        var c = h("div", "radio-buttons-container split-contents");
        a.appendChild(c);
        Id = ha(c, b.dailyText, "RepeatCustomType");
        Qf = ha(c, b.weeklyText, "RepeatCustomType");
        Rf = ha(c, b.monthlyText, "RepeatCustomType");
        Sf = ha(c, b.yearlyText, "RepeatCustomType");
    }
    function ym() {
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
        Zg.disabled = qc.checked;
        Sf.disabled = !Zb.checked;
        Id.disabled = !Zb.checked;
        Qf.disabled = !Zb.checked;
        Rf.disabled = !Zb.checked;
        Wc.disabled = !Zb.checked;
    }
    function pk(a) {
        a = p(a) ? a : ea;
        var b = !1;
        (a = p(a) && jb(a.locked) ? a.locked : !1)
            ? (b = !0)
            : ye.checked && ((ib.value = Wb.value), (Xb.value = "00:00"), (Yb.value = "23:59"), (b = !0));
        ib.disabled = b;
        Xb.disabled = b;
        Yb.disabled = b;
        var d = Ae(Wb),
            e = Ae(ib);
        qk(ib, d);
        qk(Nd, e);
        d > e && Bb(d, ib);
        a || (e > d || e < d ? ((b = !0), (qc.checked = !0)) : (b = !1));
        qc.disabled = b;
        Lf.disabled = b;
        Mf.disabled = b;
        Nf.disabled = b;
        Of.disabled = b;
        Pf.disabled = b;
        Zb.disabled = b;
        Zg.disabled = b;
        Wc.disabled = b;
        Id.disabled = b;
        Qf.disabled = b;
        Rf.disabled = b;
        Sf.disabled = b;
        a || Vc();
    }
    function P(a, c, d, e) {
        if (Yh(b.events.onBeforeEventAddEdit)) w(b.events.onBeforeEventAddEdit, a);
        else {
            Ub(E.body, Ka);
            var f = cb,
                k = void 0;
            k = p(k) ? k : 0;
            f = f.getElementsByClassName("tab");
            0 < f.length && f[k].click();
            Xg.innerHTML = n.empty;
            k = h("div", "radio-buttons-container");
            Xg.appendChild(k);
            for (var m in N) N.hasOwnProperty(m) && (N[m].eventEditorInput = ha(k, N[m].text, "Type"));
            p(a)
                ? (y(Sc, b.editEventTitle),
                  rk(a.type),
                  (Ff.value = b.updateText),
                  (Tg.style.display = "inline-block"),
                  (ea = a),
                  (Xb.value = yb(a.from, !1)),
                  (Yb.value = yb(a.to, !1)),
                  (ye.checked = wi(a.isAllDay)),
                  (Jf.checked = wi(a.showAlerts, !0)),
                  (Kf.checked = wi(a.showAsBusy, !0)),
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
                  Bb(a.to, ib),
                  (d = H(a.repeatEvery)),
                  d === x.never
                      ? (qc.checked = !0)
                      : d === x.everyDay
                        ? (Lf.checked = !0)
                        : d === x.everyWeek
                          ? (Mf.checked = !0)
                          : d === x.every2Weeks
                            ? (Nf.checked = !0)
                            : d === x.everyMonth
                              ? (Of.checked = !0)
                              : d === x.everyYear
                                ? (Pf.checked = !0)
                                : d === x.custom && (Zb.checked = !0),
                  (c = H(a.repeatEveryCustomType)),
                  c === M.daily
                      ? (Id.checked = !0)
                      : c === M.weekly
                        ? (Qf.checked = !0)
                        : c === M.monthly
                          ? (Rf.checked = !0)
                          : c === M.yearly && (Sf.checked = !0),
                  (c = Oc(a.repeatEveryExcludeDays)),
                  ($g.checked = c.indexOf(1) > B.notFound),
                  (ah.checked = c.indexOf(2) > B.notFound),
                  (bh.checked = c.indexOf(3) > B.notFound),
                  (ch.checked = c.indexOf(4) > B.notFound),
                  (dh.checked = c.indexOf(5) > B.notFound),
                  (eh.checked = c.indexOf(6) > B.notFound),
                  (fh.checked = c.indexOf(0) > B.notFound),
                  Bb(a.repeatEnds, Nd),
                  (xi = d > x.never && p(e) && !U(a.from, e)),
                  (Tf = e))
                : ((e = new Date()),
                  (c = p(c) ? c : e),
                  dc(c) && (c.setHours(e.getHours()), c.setMinutes(e.getMinutes())),
                  (e = gb(c, b.defaultEventDuration)),
                  y(Sc, b.addEventTitle),
                  rk(),
                  (Ff.value = b.addText),
                  (Tg.style.display = "none"),
                  (ea = {}),
                  (ye.checked = !1),
                  (Jf.checked = !0),
                  (Kf.checked = !0),
                  (Ab.value = n.empty),
                  (Ld.value = n.empty),
                  (Md.value = n.empty),
                  (Kd.value = n.empty),
                  (ze.value = n.empty),
                  (Be.value = b.defaultEventBackgroundColor),
                  (Ce.value = b.defaultEventTextColor),
                  (De.value = b.defaultEventBorderColor),
                  (qc.checked = !0),
                  ($g.checked = !1),
                  (ah.checked = !1),
                  (bh.checked = !1),
                  (ch.checked = !1),
                  (dh.checked = !1),
                  (eh.checked = !1),
                  (fh.checked = !1),
                  (Nd.value = null),
                  (Wc.value = "1"),
                  (Id.checked = !0),
                  (Jd.value = 0),
                  pa(d) &&
                      (c.setHours(d[0]),
                      c.setMinutes(d[1]),
                      e.setHours(d[0]),
                      e.setMinutes(d[1]),
                      (e = gb(e, b.defaultEventDuration))),
                  (Xb.value = yb(c, !1)),
                  (Yb.value = yb(e, !1)),
                  Bb(c, Wb),
                  Bb(e, ib),
                  (xi = !1),
                  (Tf = null));
            t(Sc, "ib-close", b.closeTooltipText, Tc, !0);
            a = mf(a);
            for (var g in N) N.hasOwnProperty(g) && p(N[g].eventEditorInput) && (N[g].eventEditorInput.disabled = a);
            Ff.disabled = a;
            Wb.disabled = a;
            ib.disabled = a;
            Xb.disabled = a;
            Yb.disabled = a;
            ye.disabled = a;
            Jf.disabled = a;
            Kf.disabled = a;
            Ab.disabled = a;
            Ld.disabled = a;
            Md.disabled = a;
            Kd.disabled = a;
            ze.disabled = a;
            qc.disabled = a;
            Lf.disabled = a;
            Mf.disabled = a;
            Nf.disabled = a;
            Of.disabled = a;
            Pf.disabled = a;
            Zb.disabled = a;
            Zg.disabled = a;
            Jd.disabled = a;
            null !== vi && (vi.disabled = a);
            pk();
            fb.push(Tc);
            cb.style.display = "block";
            Ab.focus();
        }
    }
    function ud() {
        Ab.focus();
        Ab.select();
    }
    function ok() {
        var a = Xb.value.split(":"),
            c = Yb.value.split(":"),
            d = Od(Ab.value),
            e = Od(ze.value);
        if (2 > a.length) Uf(b.fromTimeErrorMessage);
        else if (2 > c.length) Uf(b.toTimeErrorMessage);
        else if (d === n.empty) Uf(b.titleErrorMessage);
        else if (0 < e.length && !sk(e)) Uf(b.urlErrorMessage);
        else {
            var f = Ae(Wb),
                k = Ae(ib),
                m = Od(Ld.value),
                h = Od(Md.value),
                g = Od(Kd.value),
                l = Ae(Nd, null),
                r = parseInt(Wc.value),
                t = Cm(),
                u = parseInt(Jd.value);
            isNaN(r) && ((r = 0), (qc.checked = !0), (Id.checked = !0));
            isNaN(u) && (u = 0);
            if (k < f) Uf(b.toSmallerThanFromErrorMessage);
            else {
                var w = function (a, c, f, k, A) {
                    A = p(A) ? A : !1;
                    gh(c, Xb.value);
                    gh(f, Yb.value);
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
                              showAlerts: Jf.checked,
                              showAsBusy: Kf.checked,
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
                              ? (c.repeatEvery = x.never)
                              : Lf.checked
                                ? (c.repeatEvery = x.everyDay)
                                : Mf.checked
                                  ? (c.repeatEvery = x.everyWeek)
                                  : Nf.checked
                                    ? (c.repeatEvery = x.every2Weeks)
                                    : Of.checked
                                      ? (c.repeatEvery = x.everyMonth)
                                      : Pf.checked
                                        ? (c.repeatEvery = x.everyYear)
                                        : Zb.checked && (c.repeatEvery = x.custom),
                          Id.checked
                              ? (c.repeatEveryCustomType = M.daily)
                              : Qf.checked
                                ? (c.repeatEveryCustomType = M.weekly)
                                : Rf.checked
                                  ? (c.repeatEveryCustomType = M.monthly)
                                  : Sf.checked && (c.repeatEveryCustomType = M.yearly),
                          A
                              ? (c.id = a)
                              : ((c.organizerName = b.organizerName),
                                (c.organizerEmailAddress = b.organizerEmailAddress)),
                          A
                              ? (q.updateEvent(a, c, !1), Sa(b.eventUpdatedText.replace("{0}", ea.title)))
                              : (q.addEvent(c, !1), Sa(b.eventAddedText.replace("{0}", c.title))),
                          b.isWidget ? F(v) : (Ha(), ma()));
                };
                xi
                    ? (Vf(),
                      Hf(
                          b.confirmEventUpdateTitle,
                          b.confirmEventUpdateMessage,
                          function () {
                              var a = new Date(Tf),
                                  b = new Date(Tf),
                                  c = new Date(Tf);
                              Pd();
                              Za(c, -1);
                              w(ea.id, f, k, c, !0);
                              w(null, a, b, l);
                              Tc();
                          },
                          function () {
                              Pd();
                              w(ea.id, f, k, l);
                              Tc();
                          },
                          !1,
                          !0,
                          b.forwardText,
                          b.seriesText
                      ))
                    : (w(ea.id, f, k, l), Tc());
            }
        }
    }
    function Tc(a) {
        Ee(a);
        hb(E.body, Ka);
        cb.style.display = "none";
    }
    function zm() {
        Vf();
        Hf(
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
        Ya(W) && Va(L);
        Ya(da) && zc(Sb);
        Ya(Da) && Ac(sa);
        Ya(ra) && Ph();
        Ya(ia) && Jb(ba);
    }
    function td(a, c, d, e) {
        d = p(d) ? d : "09:00";
        e = p(e) ? d : "09:00";
        gh(a, d);
        gh(c, e);
        c = gb(c, b.defaultEventDuration);
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
            repeatEvery: x.never,
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
        kb();
        return a;
    }
    function mf(a) {
        return p(a) && jb(a.locked) ? a.locked : !1;
    }
    function Uf(a) {
        Hf(b.errorText, a, Pd, null, !1, !1);
        Vf();
    }
    function Vf() {
        Wg.style.display = "block";
    }
    function Pd() {
        Wg.style.display = "none";
    }
    function Zi() {
        if (!r && null === rc) {
            rc = h("div", "calendar-dialog event-editor-colors");
            ya.push(rc);
            E.body.appendChild(rc);
            var a = h("div", "title-bar");
            y(a, b.selectColorsText);
            rc.appendChild(a);
            Hd(a, rc, null);
            t(a, "ib-close", b.closeTooltipText, hh, !0);
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
            Fa(c, b.updateText, "update", Dm);
            Fa(c, b.cancelText, "cancel", hh);
        }
    }
    function Dm() {
        hh();
        ea.color = Be.value;
        ea.colorText = Ce.value;
        ea.colorBorder = De.value;
    }
    function hh(a) {
        Ee(a);
        Pd();
        rc.style.display = "none";
    }
    function Am() {
        fb.push(hh);
        rc.style.display = "block";
        Vf();
    }
    function $i() {
        if (!r && null === sc) {
            sc = h("div", "calendar-dialog event-editor-repeat-options");
            ya.push(sc);
            E.body.appendChild(sc);
            var a = h("div", "title-bar");
            y(a, b.repeatOptionsTitle);
            sc.appendChild(a);
            Hd(a, sc, null);
            t(a, "ib-close", b.closeTooltipText, ih, !0);
            a = h("div", "contents");
            sc.appendChild(a);
            var c = h("div", "section");
            a.appendChild(c);
            qa(c, b.daysToExcludeText, "text-header");
            $g = K(c, b.dayNames[0])[0];
            ah = K(c, b.dayNames[1])[0];
            bh = K(c, b.dayNames[2])[0];
            ch = K(c, b.dayNames[3])[0];
            dh = K(c, b.dayNames[4])[0];
            eh = K(c, b.dayNames[5])[0];
            fh = K(c, b.dayNames[6])[0];
            c = h("div", "section");
            a.appendChild(c);
            qa(c, b.repeatEndsText, "text-header");
            Nd = h("input");
            c.appendChild(Nd);
            lc(Nd, "date");
            c = h("div", "buttons-container");
            a.appendChild(c);
            Fa(c, b.updateText, "update", Em);
            Fa(c, b.cancelText, "cancel", ih);
        }
    }
    function Em() {
        ih();
        var a = [];
        $g.checked && a.push(1);
        ah.checked && a.push(2);
        bh.checked && a.push(3);
        ch.checked && a.push(4);
        dh.checked && a.push(5);
        eh.checked && a.push(6);
        fh.checked && a.push(0);
        ea.repeatEveryExcludeDays = a;
    }
    function ih(a) {
        Ee(a);
        Pd();
        sc.style.display = "none";
    }
    function Bm() {
        fb.push(ih);
        sc.style.display = "block";
        Vf();
    }
    function aj() {
        if (!r && null === Xc) {
            Xc = h("div", "calendar-dialog message");
            ya.push(Xc);
            E.body.appendChild(Xc);
            yi = h("div", "title-bar");
            Xc.appendChild(yi);
            var a = h("div", "contents");
            Xc.appendChild(a);
            zi = h("div", "text");
            a.appendChild(zi);
            var c = K(a, b.removeAllEventsInSeriesText);
            Ug = c[0];
            Ai = c[1];
            Wf = h("div", "buttons-container");
            a.appendChild(Wf);
        }
    }
    function Hf(a, c, d, e, f, k, m, g) {
        f = p(f) ? f : !1;
        k = p(k) ? k : !0;
        var A = p(m) ? m : b.yesText,
            q = p(g) ? g : b.noText;
        Wf.innerHTML = n.empty;
        var l = h("input", "yes-ok", "button");
        l.value = A;
        Wf.appendChild(l);
        A = h("input", "no", "button");
        A.value = q;
        Wf.appendChild(A);
        fb.push(!1);
        Xc.style.display = "block";
        y(yi, a);
        y(zi, c);
        l.onclick = tk;
        l.addEventListener("click", d);
        A.onclick = tk;
        Yc(e) && A.addEventListener("click", e);
        p(m) ||
            p(g) ||
            (k
                ? ((A.style.display = "inline-block"), (l.value = b.yesText))
                : ((A.style.display = "none"), (l.value = b.okText)));
        f ? ((Ai.style.display = "block"), (Ug.checked = !1)) : ((Ai.style.display = "none"), (Ug.checked = !0));
    }
    function tk() {
        fb.pop();
        Xc.style.display = "none";
    }
    function xl() {
        if (!r && null === tc) {
            tc = h("div", "calendar-dialog export-events");
            ya.push(tc);
            E.body.appendChild(tc);
            var a = h("div", "title-bar");
            y(a, b.exportEventsTitle);
            tc.appendChild(a);
            Hd(a, tc, null);
            t(a, "ib-close", b.closeTooltipText, jh, !0);
            a = h("div", "contents");
            tc.appendChild(a);
            Ta = h("input", null, "text");
            Ta.placeholder = b.exportFilenamePlaceholderText;
            a.appendChild(Ta);
            Ta.onkeydown = function (a) {
                a.keyCode === Q.enter && uk();
            };
            Cb = K(a, b.copyToClipboardOnlyText, vk)[0];
            kh = h("div", "split options");
            a.appendChild(kh);
            var c = h("div", "radio-buttons-container split-contents");
            kh.appendChild(c);
            var d = h("div", "radio-buttons-container split-contents");
            kh.appendChild(d);
            Bi = ha(c, "CSV", "ExportType");
            wk = ha(c, "XML", "ExportType");
            xk = ha(c, "JSON", "ExportType");
            yk = ha(c, "TXT", "ExportType");
            zk = ha(d, "iCAL", "ExportType");
            Ak = ha(d, "MD", "ExportType");
            Bk = ha(d, "HTML", "ExportType");
            Ck = ha(d, "TSV", "ExportType");
            c = h("div", "buttons-container");
            a.appendChild(c);
            Fa(c, b.exportText, "export", uk);
            Fa(c, b.cancelText, "cancel", jh);
        }
    }
    function vk() {
        Ta.disabled = Cb.checked;
    }
    function dd(a) {
        Ub(E.body, Ka);
        Hb();
        fb.push(jh);
        tc.style.display = "block";
        uc = a;
        Bi.checked = !0;
        Ta.value = n.empty;
        Cb.checked = !1;
        vk();
        Ta.focus();
    }
    function jh(a) {
        Ee(a);
        hb(E.body, Ka);
        tc.style.display = "none";
    }
    function uk() {
        jh();
        Bi.checked
            ? vc(uc, "csv", Ta.value, Cb.checked)
            : wk.checked
              ? vc(uc, "xml", Ta.value, Cb.checked)
              : xk.checked
                ? vc(uc, "json", Ta.value, Cb.checked)
                : yk.checked
                  ? vc(uc, "text", Ta.value, Cb.checked)
                  : zk.checked
                    ? vc(uc, "ical", Ta.value, Cb.checked)
                    : Ak.checked
                      ? vc(uc, "md", Ta.value, Cb.checked)
                      : Bk.checked
                        ? vc(uc, "html", Ta.value, Cb.checked)
                        : Ck.checked && vc(uc, "tsv", Ta.value, Cb.checked);
    }
    function yl() {
        if (!r && null === ka) {
            ka = h("div", "calendar-dialog search");
            ya.push(ka);
            E.body.appendChild(ka);
            var a = h("div", "title-bar");
            y(a, b.searchEventsTitle);
            ka.appendChild(a);
            Hd(a, ka, function () {
                Ci = !0;
                Xf();
            });
            a.ondblclick = Di;
            var c = t(a, "ib-close", b.closeTooltipText, kd);
            c.onmousedown = C;
            c.onmouseup = C;
            Qd = t(a, "ib-minus", b.minimizedTooltipText, Di);
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
            na.onkeypress = Fm;
            a.appendChild(na);
            qb = h("div", "ib-arrow-down-full");
            qb.style.display = "none";
            qb.onclick = Gm;
            a.appendChild(qb);
            zb = h("div", "history-dropdown custom-scroll-bars");
            a.appendChild(zb);
            a = h("div", "checkbox-container");
            $b.appendChild(a);
            lh = K(a, b.notSearchText, ac)[0];
            mh = K(a, b.matchCaseText, ac)[0];
            Ge = K(a, b.advancedText + ":", Hm)[0];
            Ge.checked = !0;
            Yf = h("div", "advanced");
            $b.appendChild(Yf);
            var d = h("div", "split");
            Yf.appendChild(d);
            c = h("div", "split-contents");
            d.appendChild(c);
            a = h("div", "split-contents");
            d.appendChild(a);
            qa(c, b.includeText, "text-header");
            d = h("div", "checkbox-container");
            c.appendChild(d);
            Zf = K(d, b.titleText.replace(":", n.empty), ac)[0];
            nh = K(d, b.locationText.replace(":", n.empty), ac)[0];
            oh = K(d, b.descriptionText.replace(":", n.empty), ac)[0];
            ph = K(d, b.groupText.replace(":", n.empty), ac)[0];
            qh = K(d, b.urlText.replace(":", n.empty), ac)[0];
            Zf.checked = !0;
            qa(a, b.optionsText, "text-header");
            c = h("div", "radio-buttons-container");
            a.appendChild(c);
            rh = ha(c, b.startsWithText, "SearchOptionType", ac);
            sh = ha(c, b.endsWithText, "SearchOptionType", ac);
            th = ha(c, b.containsText, "SearchOptionType", ac);
            th.checked = !0;
            a = h("div", "buttons-container");
            $b.appendChild(a);
            uh = Fa(a, b.previousText, "previous", Dk);
            vh = Fa(a, b.nextText, "next", Ek);
        }
    }
    function Hm() {
        Yf.style.display = Ge.checked ? "block" : "none";
        Wh();
        Xf();
    }
    function ac() {
        Xf();
        Fe(!1);
    }
    function Fe(a) {
        a = p(a) ? a : !0;
        0 < Db.length && Fk(z, " focused-event");
        uh.disabled = !0;
        vh.disabled = na.value === n.empty;
        Db = [];
        Zc = 0;
        Ei = null;
        a && Gk();
        Xf();
    }
    function fe() {
        "block" !== ka.style.display &&
            ((Db = []),
            (ka.style.display = "block"),
            Fe(!1),
            (na.value = u.lastSearchText),
            (lh.checked = u.not),
            (mh.checked = u.matchCase),
            (Ge.checked = u.showAdvanced),
            (Zf.checked = u.searchTitle),
            (nh.checked = u.searchLocation),
            (oh.checked = u.searchDescription),
            (ph.checked = u.searchGroup),
            (qh.checked = u.searchUrl),
            (rh.checked = u.startsWith),
            (sh.checked = u.endsWith),
            (th.checked = u.contains),
            (Yf.style.display = Ge.checked ? "block" : "none"),
            Wh());
        "block" !== $b.style.display && Di();
        na.focus();
        na.select();
        0 < u.history.length && (qb.style.display = "block");
    }
    function Wh() {
        null === ka ||
            Ci ||
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
    function Di() {
        "block" === $b.style.display
            ? (($b.style.display = "none"), (Qd.className = "ib-square-hollow"), Ra(Qd, b.restoreTooltipText))
            : (($b.style.display = "block"), (Qd.className = "ib-minus"), Ra(Qd, b.minimizedTooltipText));
    }
    function Dk() {
        if (0 < Zc) {
            Zc--;
            var a = Db[Zc];
            Hk();
            F(a.from);
            Ik(a);
        }
    }
    function Fm(a) {
        a.keyCode === Q.enter && fa(a) && !uh.disabled ? Dk() : a.keyCode !== Q.enter || vh.disabled ? Gk() : Ek();
    }
    function Ek() {
        if (0 === Db.length) {
            var a = "day-",
                b = lh.checked,
                d = mh.checked,
                e = d ? na.value : na.value.toLowerCase(),
                f = {},
                k = vb(Bd()),
                m = k.length,
                h = Ma(),
                g = h === W,
                n = h === ra,
                p = h === da;
            h = h === ia;
            g ? (a = "full-day-") : n ? (a = "month-") : p ? (a = "week-day-") : h && (a = "timeline-day-");
            Xf(!0);
            for (var l = 0; l < m; l++) {
                var q = k[l];
                if (ie(q)) {
                    var r = G(q.title),
                        t = G(q.location),
                        u = G(q.description),
                        v = G(q.group),
                        x = G(q.url),
                        w = !1;
                    d ||
                        ((r = r.toLowerCase()),
                        (u = u.toLowerCase()),
                        (t = t.toLowerCase()),
                        (v = v.toLowerCase()),
                        (x = x.toLowerCase()));
                    Zf.checked && $f(r, e)
                        ? (w = !0)
                        : nh.checked && $f(t, e)
                          ? (w = !0)
                          : oh.checked && $f(u, e)
                            ? (w = !0)
                            : ph.checked && $f(v, e)
                              ? (w = !0)
                              : qh.checked && $f(x, e) && (w = !0);
                    b && (w = !w);
                    !w ||
                        (null === Aa(a + q.id) && (g || n || p || h)) ||
                        (g || n || p || h
                            ? Db.push(te(q, !1))
                            : ((r = q.from.getMonth() + "-" + q.from.getFullYear()),
                              f.hasOwnProperty(r) || (Db.push(te(q, !1)), (f[r] = !0))));
                }
            }
        } else Zc++;
        Hk();
        0 < Db.length && ((a = Db[Zc]), F(new Date(a.from)), Ik(a));
    }
    function Ik(a) {
        var b = "day-",
            d = Ma(),
            e = d === W,
            f = d === ra,
            k = d === da;
        d = d === ia;
        Fk(z, " focused-event");
        e ? (b = "full-day-") : f ? (b = "month-") : k ? (b = "week-day-") : d && (b = "timeline-day-");
        b = Aa(b + a.id);
        if (null !== b && ((b.className += " focused-event"), (Ei = a.id), e || f || k || d))
            for (a = b.parentNode; ; ) {
                if (0 < a.scrollHeight && a.scrollHeight > a.offsetHeight) {
                    a.scrollTop = b.offsetTop;
                    break;
                }
                a = a.parentNode;
            }
    }
    function Hk() {
        uh.disabled = 0 === Zc;
        vh.disabled = Zc === Db.length - 1 || 0 === Db.length;
    }
    function $f(a, b) {
        return rh.checked
            ? oa(a, b)
            : sh.checked
              ? a.substring(a.length - b.length, a.length) === b
              : a.indexOf(b) > B.notFound;
    }
    function Xf(a) {
        a = p(a) ? a : !1;
        rd(Na.searchOptionsChanged);
        var c = Od(na.value);
        a && (qb.style.display = "block");
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
                        (u.not = lh.checked),
                        (u.matchCase = mh.checked),
                        (u.showAdvanced = Ge.checked),
                        (u.searchTitle = Zf.checked),
                        (u.searchLocation = nh.checked),
                        (u.searchDescription = oh.checked),
                        (u.searchGroup = ph.checked),
                        (u.searchUrl = qh.checked),
                        (u.startsWith = rh.checked),
                        (u.endsWith = sh.checked),
                        (u.contains = th.checked),
                        Ci && ((u.left = ka.offsetLeft), (u.top = ka.offsetTop)),
                        w(b.events.onSearchOptionsUpdated, u);
            },
            2e3,
            !1
        );
    }
    function Gk() {
        var a = u.history.length;
        0 < a
            ? ((qb.style.display = "block"),
              rd(Na.searchEventsHistoryDropDown),
              nd(
                  Na.searchEventsHistoryDropDown,
                  function () {
                      var b = na.value,
                          d = !1;
                      if (Od(b) !== n.empty) {
                          Jk();
                          zb.innerHTML = n.empty;
                          for (var e = 0; e < a; e++) {
                              var f = u.history[e],
                                  k = b;
                              f.substring(0, k.length).toLowerCase() === k.toLowerCase() &&
                                  f.toLowerCase() !== b.toLowerCase() &&
                                  (Kk(u.history[e], b.length), (d = !0));
                          }
                      }
                      d ? Lk() : $e();
                  },
                  150,
                  !1
              ))
            : (qb.style.display = "none");
    }
    function Jk() {
        u.history.sort(function (a, b) {
            var c = 0;
            a = a.toLowerCase();
            b = b.toLowerCase();
            a < b ? (c = -1) : a > b && (c = 1);
            return c;
        });
    }
    function Gm(a) {
        C(a);
        if ("block" !== zb.style.display) {
            Jk();
            a = u.history.length;
            zb.innerHTML = n.empty;
            na.focus();
            for (var b = 0; b < a; b++) Kk(u.history[b], 0);
            Lk();
        } else $e();
    }
    function Kk(a, b) {
        var c = h("div", "history-dropdown-item");
        zb.appendChild(c);
        var e = h("span", "search-search");
        y(e, a.substring(0, b));
        c.appendChild(e);
        e = h("span");
        y(e, a.substring(b));
        c.appendChild(e);
        c.onclick = function (b) {
            C(b);
            $e();
            na.value = a;
            na.selectionStart = na.selectionEnd = na.value.length;
            na.focus();
            Fe(!1);
        };
    }
    function $e() {
        var a = !1;
        null !== zb &&
            "ib-arrow-up-full" === qb.className &&
            ((zb.style.display = "none"), (qb.className = "ib-arrow-down-full"), (a = !0));
        return a;
    }
    function Lk() {
        null !== zb &&
            "ib-arrow-down-full" === qb.className &&
            ((zb.style.display = "block"), (qb.className = "ib-arrow-up-full"));
    }
    function zl() {
        if (!r && null === Eb) {
            Eb = h("div", "calendar-dialog configuration");
            ya.push(Eb);
            E.body.appendChild(Eb);
            var a = h("div", "title-bar");
            y(a, b.configurationTitleText);
            Eb.appendChild(a);
            Hd(a, Eb, null);
            t(a, "ib-close", b.closeTooltipText, Mk, !0);
            a = h("div", "contents");
            Eb.appendChild(a);
            var c = nk(a);
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
            Fi = K(Rd, b.enableAutoRefreshForEventsText)[0];
            Gi = K(Rd, b.enableBrowserNotificationsText, null, null, null, "checkbox-tabbed-in")[0];
            Hi = K(Rd, b.enableTooltipsText, null, null, null, "checkbox-tabbed-down")[0];
            Ii = K(Rd, b.enableDragAndDropForEventText)[0];
            Ji = K(Rd, b.showHolidaysInTheDisplaysText)[0];
            qa(He, b.organizerNameText);
            wh = h("input", null, "text");
            He.appendChild(wh);
            qa(He, b.organizerEmailAddressText);
            xh = h("input", null, "email");
            He.appendChild(xh);
            c = h("div", "buttons-container");
            a.appendChild(c);
            Fa(c, b.updateText, "update", Im);
            Fa(c, b.cancelText, "cancel", Mk);
        }
    }
    function Im() {
        Fi.checked ? q.startTheAutoRefreshTimer() : q.stopTheAutoRefreshTimer();
        b.eventNotificationsEnabled = Gi.checked;
        b.tooltipsEnabled = Hi.checked;
        b.dragAndDropForEventsEnabled = Ii.checked;
        b.showHolidays = Ji.checked;
        b.organizerName = wh.value;
        b.organizerEmailAddress = xh.value;
        mb = !1;
        w(b.events.onOptionsUpdated, b);
        Ki();
        Li();
        F(v, !0, !0);
        Sa(b.configurationUpdatedText);
    }
    function Mk() {
        Li();
    }
    function fj() {
        Ub(E.body, Ka);
        Fi.checked = ag;
        Gi.checked = b.eventNotificationsEnabled;
        Hi.checked = b.tooltipsEnabled;
        Ii.checked = b.dragAndDropForEventsEnabled;
        Ji.checked = b.showHolidays;
        wh.value = b.organizerName;
        xh.value = b.organizerEmailAddress;
        fb.push(Li);
        Eb.style.display = "block";
    }
    function Li(a) {
        Ee(a);
        hb(E.body, Ka);
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
    function Al() {
        if (!r && null === wc && b.jumpToDateEnabled) {
            wc = h("div", "calendar-dialog jump-to-date");
            ya.push(wc);
            E.body.appendChild(wc);
            var a = h("div", "title-bar");
            y(a, b.jumpToDateTitle);
            wc.appendChild(a);
            Hd(a, wc, null);
            t(a, "ib-close", b.closeTooltipText, yh, !0);
            var c = h("div", "contents");
            wc.appendChild(c);
            bc = h("input", null, "date");
            c.appendChild(bc);
            a = h("div", "buttons-container");
            c.appendChild(a);
            c = Fa(a, b.goText, "go", Nk);
            Fa(a, b.cancelText, "cancel", yh);
            c.onkeydown = function (a) {
                a.keyCode === Q.enter && Nk();
            };
        }
    }
    function ee() {
        if (Ma() !== ra && b.jumpToDateEnabled) {
            Ub(E.body, Ka);
            Hb();
            var a = Ma();
            null === a
                ? (w(b.events.onSetDate, bc), Bb(v, bc))
                : a === W
                  ? Bb(L, bc)
                  : a === da
                    ? Bb(Sb, bc)
                    : a === Da
                      ? Bb(new Date(sa, 0, 1), bc)
                      : a === ia && Bb(ba, bc);
            fb.push(yh);
            wc.style.display = "block";
            bc.focus();
        }
    }
    function yh(a) {
        Ee(a);
        hb(E.body, Ka);
        wc.style.display = "none";
    }
    function Nk() {
        var a = Ma(),
            c = Ae(bc);
        c.getFullYear() >= b.minimumYear &&
            c.getFullYear() <= b.maximumYear &&
            (null === a
                ? (F(c), sb())
                : a === W
                  ? Va(c)
                  : a === da
                    ? zc(c)
                    : a === Da
                      ? Ac(c.getFullYear())
                      : a === ia && Jb(c),
            yh());
    }
    function bj() {
        null === T &&
            ((T = h("div", "calendar-tooltip")),
            ya.push(T),
            E.body.appendChild(T),
            (Mi = h("div", "ib-close")),
            (zh = h("div", "ib-edit")),
            (Ah = h("div", "title-buttons")),
            Ah.appendChild(Mi),
            Ah.appendChild(zh),
            (Sd = h("div", "title")),
            (bg = h("div", "date")),
            (Td = h("div", "duration")),
            (cg = h("div", "repeats")),
            (dg = h("div", "description")),
            (eg = h("div", "location")),
            (Ud = h("div", "url")),
            (Mi.onclick = ic),
            (zh.onclick = function () {
                P(Dd);
            }),
            document.body.addEventListener("mousemove", ic));
    }
    function ji(a, c, d, e) {
        C(a);
        rd(Na.showToolTip);
        ic();
        e = p(e) ? e : !1;
        if ("block" !== T.style.display && b.tooltipsEnabled) {
            var f = R(d) ? b.tooltipDelay : b.eventTooltipDelay;
            nd(
                Na.showToolTip,
                function () {
                    if (e || (!E.body.contains(Ka) && !Lg() && !dk() && null === ca)) {
                        d = p(d) ? d : n.empty;
                        T.className = d === n.empty ? "calendar-tooltip-event" : "calendar-tooltip";
                        if (R(d)) y(T, d);
                        else if (
                            ((Dd = c),
                            (T.innerHTML = n.empty),
                            (Sd.innerHTML = n.empty),
                            (Td.innerHTML = n.empty),
                            (Ud.innerHTML = n.empty),
                            !w(b.events.onToolTipEventRender, T, c))
                        ) {
                            T.onmousemove = C;
                            T.appendChild(Ah);
                            T.appendChild(Sd);
                            T.appendChild(bg);
                            T.appendChild(Td);
                            Wa(zh, b.manualEditingEnabled);
                            if (Ca(c.url)) {
                                var f = aa(Ud, Bg(c.url), "url-text");
                                Ub(T, Ud);
                                f.onclick = function (a) {
                                    C(a);
                                    je(c.url);
                                    ic();
                                };
                            } else (Ud.innerHTML = n.empty), (Ud.onclick = null), hb(T, Ud);
                            H(c.repeatEvery) > x.never &&
                                b.showReoccurringEventIcons &&
                                ((f = h("div", "ib-refresh-medium ib-no-hover ib-no-active")),
                                (f.style.borderColor = Sd.style.color),
                                Sd.appendChild(f));
                            Sd.innerHTML += kc(c.title);
                            Ba(c.repeatEvery) && c.repeatEvery > x.never
                                ? (y(cg, b.repeatsText.replace(":", n.empty) + n.space + pd(c.repeatEvery)), Ub(T, cg))
                                : ((cg.innerHTML = n.empty), hb(T, cg));
                            Ca(c.location) ? (y(eg, c.location), Ub(T, eg)) : ((eg.innerHTML = n.empty), hb(T, eg));
                            Ca(c.description)
                                ? (y(dg, c.description), Ub(T, dg))
                                : ((dg.innerHTML = n.empty), hb(T, dg));
                            c.from.getDate() === c.to.getDate()
                                ? c.isAllDay
                                    ? y(bg, b.allDayText)
                                    : (y(bg, de(c.from, c.to)), y(Td, Ob(c.from, c.to)))
                                : (We(bg, c.from, c.to), y(Td, Ob(c.from, c.to)));
                            Td.innerHTML === n.empty && T.removeChild(Td);
                        }
                        uf(a, T);
                    }
                },
                f,
                !1
            );
        }
    }
    function ic() {
        rd(Na.showToolTip);
        Ok() && ((T.style.display = "none"), (Dd = null), (T.onmousemove = null));
    }
    function Ok() {
        return Ni(Na.showToolTip) || (null !== T && "block" === T.style.display);
    }
    function Ra(a, b, d) {
        null !== a &&
            (a.onmousemove = function (a) {
                ji(a, null, b, d);
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
            y(c, a),
            t(c, "ib-close-icon", b.closeTooltipText, Pk),
            nd(
                Na.hideNotification,
                function () {
                    Pk();
                },
                5e3,
                !1
            ));
    }
    function Pk() {
        fc.style.display = "none";
    }
    function Kh(a, c) {
        if (null !== a) {
            c = p(c) ? c : !0;
            var d = b.dayHeaderNames.length;
            a.innerHTML = n.empty;
            b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday
                ? (Oi(a, b.startOfWeekDay, d), Oi(a, 0, b.startOfWeekDay))
                : Oi(a, 0, d);
            b.reverseOrderDaysOfWeek && c && ld(a);
        }
    }
    function Oi(a, c, d) {
        for (; c < d; c++) b.visibleDays.indexOf(c) > B.notFound && Jm(a, c);
    }
    function Jm(a, c) {
        var d = b.dayHeaderNames[c],
            e = h("div", Eg());
        y(e, d);
        a.appendChild(e);
        e.oncontextmenu = function (a) {
            if (!r && (fa(a) || mc(), Ga(), b.sideMenu.showDays)) {
                jk = c;
                var d = 1 < b.visibleDays.length ? "block" : "none",
                    e = 1 <= b.workingDays.length && !ae(b.workingDays, b.visibleDays) ? "block" : "none";
                ik.style.display = d;
                kk.style.display = d;
                lk.style.display = e;
                mk.style.display = e;
                C(a);
                uf(a, ob);
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
                d && ((mb = !1), w(b.events.onOptionsUpdated, b), F(v, !0, !0));
            }
        };
    }
    function jf(a, b) {
        Ya(a) && b
            ? (Pi(a, !1), pb.push(a), Ie++, (a.style.zIndex = Ie))
            : Ma() === a ||
              Ya(a) ||
              (Pi(a, !1), pb.push(a), Ie++, (a.className += " view-shown"), (a.style.zIndex = Ie), kd(), qf());
    }
    function xd(a, b) {
        Ya(a) && ((a.className = a.className.replace(" view-shown", n.empty)), Pi(a, b), 0 === pb.length && (Ie = 0));
    }
    function Pi(a, b) {
        b = p(b) ? b : !0;
        for (var c = [], e = pb.length, f = 0; f < e; f++) {
            var k = pb[f];
            p(k) && k.id !== a.id && c.push(k);
        }
        pb = [].slice.call(c);
        b && qf();
    }
    function Ya(a) {
        return p(a) && a.className && a.className.indexOf("view-shown") > B.notFound;
    }
    function Fj(a) {
        a = p(a) ? a : !0;
        var b = Ma();
        xd(b, !a);
        0 === pb.length && (Ie = 0);
        a && qf();
    }
    function Ma() {
        return 0 < pb.length ? pb[pb.length - 1] : null;
    }
    function qf(a) {
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
        a && R(d) && w(b.events.onViewChange, d);
        return d;
    }
    function Kj(a, b) {
        var c = new Date(),
            e = new Date();
        e.setHours(0, 0, 0, 0);
        for (0 !== 60 % b && (b = 30); U(e, c); ) {
            var f = h("div", "hour");
            a.appendChild(f);
            var k = h("div", "hour-text");
            k.innerText = yb(new Date(e));
            f.appendChild(k);
            e = gb(e, b);
            k = h("div", "hour-text");
            k.innerText = yb(new Date(e));
            f.appendChild(k);
            e = gb(e, b);
        }
    }
    function wg(a, b) {
        var c = Ye(b);
        b = la.floor((a.pageY - c.top) / (b.offsetHeight / 1440)) / 60;
        a = la.floor(b);
        b = la.round(60 * (b - a));
        return [a, b];
    }
    function Mj(a, c, d, e, f) {
        var k = c.offsetHeight,
            h = c.offsetHeight / 1440;
        c = 0;
        var g = null;
        if (!f.isAllDay) {
            g = H(f.repeatEvery);
            if (U(f.from, d) || g > x.never) c = h * fg(f.from);
            g = U(f.to, d) || g > x.never ? h * fg(f.to) - c : k;
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
    function tm(a, c, d, e) {
        var f = a.scrollWidth;
        var k = a.offsetWidth / 1440;
        a = 0;
        var h = H(e.repeatEvery);
        if (U(e.from, c) || h > x.never) a = k * fg(e.from);
        c = U(e.to, c) || h > x.never ? k * fg(e.to) - a : f;
        c -= 2 * b.spacing;
        a <= b.spacing && ((a += b.spacing), (c -= b.spacing));
        d.style.left = a + "px";
        null !== c && (d.style.width = c + "px");
        d.offsetLeft + d.offsetWidth > f - b.spacing
            ? ((f = f - d.offsetLeft - 4 * b.spacing + "px"), (d.style.width = f), (d.style.maxWidth = f))
            : (d.style.maxWidth = f - (d.offsetLeft + 2 * b.spacing) - k + "px");
        return a - b.spacing;
    }
    function Pj(a, b, d, e, f) {
        var c = 0;
        null !== d &&
            (dc(a) && Ya(b) && f
                ? ((a = (e.offsetHeight / 1440) * fg(new Date())),
                  (d.style.display = "block"),
                  (d.style.top = a - d.offsetHeight / 2 + "px"),
                  (c = a))
                : (d.style.display = "none"));
        return c;
    }
    function Lj(a, b) {
        C(a);
        a = bd(b, "z-index", !1);
        a = null === a || "auto" === a ? 1 : parseInt(a) + 1;
        b.style.zIndex = a.toString();
    }
    function Qj(a) {
        a = a.getElementsByClassName("event");
        a = [].slice.call(a);
        var c = a.length;
        if (1 < c) {
            a.sort(Km);
            for (var d = 0; d < c; d++)
                for (var e = a[d], f = 0; f < c; f++)
                    if (f !== d) {
                        var k = a[f],
                            h = !0,
                            g = e.offsetLeft,
                            p = e.offsetTop,
                            q = e.offsetWidth,
                            l = k.offsetLeft,
                            r = k.offsetTop,
                            t = k.offsetHeight,
                            u = k.offsetWidth;
                        if (p + e.offsetHeight < r || p > r + t || g + q < l || g > l + u) h = !1;
                        h &&
                            ((h = G(e.getAttribute("event-position"))),
                            (g = G(k.getAttribute("event-position"))),
                            h === n.empty && g === n.empty
                                ? (Bh(e),
                                  Bh(k),
                                  (k.style.left = e.offsetLeft + e.offsetWidth + b.spacing + "px"),
                                  e.setAttribute("event-position", "left"),
                                  k.setAttribute("event-position", "right"))
                                : h === n.empty && "right" === g
                                  ? (Bh(e),
                                    e.setAttribute("event-position", "left"),
                                    k.setAttribute("event-position", "right"))
                                  : h === n.empty &&
                                    "left" === g &&
                                    ((e.style.left = k.offsetLeft + k.offsetWidth + b.spacing + "px"),
                                    Bh(e),
                                    e.setAttribute("event-position", "right"),
                                    k.setAttribute("event-position", "left")));
                    }
        }
    }
    function Bh(a) {
        a.style.width = a.offsetWidth / 2 - (3 * b.spacing + b.spacing / 4) + "px";
    }
    function Km(a, b) {
        var c = 0;
        a.offsetTop < b.offsetTop ? (c = -1) : a.offsetTop > b.offsetTop && (c = 1);
        return c;
    }
    function Jj(a, c, d) {
        C(a);
        null === xg
            ? 0 === a.dataTransfer.files.length
                ? Qk(a, c.getFullYear(), c.getMonth(), c.getDate())
                : Rk(a)
            : (U(Ag, c) || ((ca = Qb), (Vd = Ag), Sk(a, c.getFullYear(), c.getMonth(), c.getDate())),
              (c = d.offsetHeight / 1440),
              (d = Ye(d)),
              (a = (la.abs(a.pageY) - d.top + zg - yg) / c),
              (Qb.from = gb(Qb.from, a)),
              (Qb.to = gb(Qb.to, a)),
              kb(),
              w(b.events.onEventUpdated, Qb),
              Sa(b.eventUpdatedText.replace("{0}", Qb.title)),
              ma(),
              (Qb = xg = null),
              (yg = zg = 0));
    }
    function Vh(a) {
        C(a);
        if (b.manualEditingEnabled) {
            var c = null;
            a = null;
            var d = 0;
            Ya(W) ? ((c = wa), (a = Cg), (d = a.length)) : Ya(da) && ((c = me), (a = ei), (d = a.length));
            if (null !== c && 0 < d) {
                c = c.offsetHeight / 1440;
                for (var e = !1, f = 0; f < d; f++) {
                    var k = a[f];
                    k.height !== k.eventElement.offsetHeight &&
                        ((e = (k.eventElement.offsetHeight - k.height) / c),
                        (k.height = k.eventElement.offsetHeight),
                        (k.eventDetails.to = gb(k.eventDetails.to, e)),
                        (e = !0),
                        w(b.events.onEventUpdated, k.eventDetails),
                        Sa(b.eventUpdatedText.replace("{0}", k.eventDetails.title)));
                }
                e && (kb(), ma());
            }
        }
    }
    function Xa() {
        sd ? Tk() : Uk();
    }
    function Uk() {
        !sd && b.fullScreenModeEnabled && (Vk(), w(b.events.onFullScreenModeChanged, !0));
    }
    function Tk() {
        sd &&
            b.fullScreenModeEnabled &&
            ((sd = !1),
            (z.className = z.className.replace(" full-screen-view", n.empty)),
            (z.style.cssText = Wk),
            Xk("ib-arrow-expand-left-right", b.enableFullScreenTooltipText),
            ma(),
            w(b.events.onFullScreenModeChanged, !1));
    }
    function Vk() {
        Wk = z.style.cssText;
        sd = !0;
        z.className += " full-screen-view";
        z.removeAttribute("style");
        Xk("ib-arrow-contract-left-right", b.disableFullScreenTooltipText);
        ma();
    }
    function Xk(a, b) {
        Je(Ig, a);
        Je(Zh, a);
        Je(ni, a);
        Je(ai, a);
        Je(li, a);
        Je(pi, a);
        Ra(Ig, b);
        Ra(Zh, b);
        Ra(ni, b);
        Ra(ai, b);
        Ra(li, b);
        Ra(pi, b);
    }
    function em(a, c, d) {
        if (b.showHolidays)
            for (var e = [], f = b.holidays.length, k = 0; k < f; k++) {
                var h = b.holidays[k],
                    g = G(h.title, n.empty),
                    p = G(h.backgroundColor, n.empty),
                    q = G(h.textColor, n.empty);
                Oj(h, a) && g !== n.empty && e.indexOf(g.toLowerCase())
                    ? (Lm(h, d, g, c),
                      p !== n.empty && d.style.setProperty("background-color", p, "important"),
                      q !== n.empty && d.style.setProperty("color", q, "important"),
                      e.push(g.toLowerCase()))
                    : (d.style.removeProperty("background-color"), d.style.removeProperty("color"));
            }
    }
    function Lm(a, c, d, e) {
        var f = Yc(a.onClick) || R(a.onClickUrl) ? "holiday-link" : "holiday",
            k = a.onClick;
        R(a.onClickUrl) &&
            (k = function () {
                Z.open(a.onClickUrl, b.urlWindowTarget);
            });
        aa(c, d, f + e, k, !0, !0);
    }
    function Oj(a, b) {
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
        for (var b in rb)
            if (rb.hasOwnProperty(b))
                for (var d in rb[b])
                    if (rb[b].hasOwnProperty(d)) {
                        var e = Yk(rb[b][d]);
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
                return Zk(b.isAllDay) - Zk(a.isAllDay);
            }));
        return a;
    }
    function Zj(a, c) {
        Ub(E.body, Ka);
        var d = function () {
            hb(E.body, Ka);
        };
        Hf(
            b.confirmEventsRemoveTitle,
            b.confirmEventsRemoveMessage,
            function () {
                var e = 0;
                d();
                xb(function (b) {
                    H(b.repeatEvery) === x.never && c(b.from, a) && (q.removeEvent(b.id, !1), e++);
                });
                kb();
                Sa(b.eventsRemovedText.replace("{0}", e));
                La();
            },
            d
        );
    }
    function Yk(a) {
        a.isAllDay &&
            ((a.from = new Date(a.from.getFullYear(), a.from.getMonth(), a.from.getDate(), 0, 0)),
            (a.to = new Date(a.from.getFullYear(), a.from.getMonth(), a.from.getDate(), 23, 59)));
        return a;
    }
    function rk(a) {
        a = p(a) && N.hasOwnProperty(a) ? a : 0;
        for (var b in N) N.hasOwnProperty(b) && p(N[b].eventEditorInput) && (N[b].eventEditorInput.checked = !1);
        p(N[a].eventEditorInput) && (N[a].eventEditorInput.checked = !0);
    }
    function Cm() {
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
    function Vj(a, b) {
        return a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
    }
    function Ze(a, b) {
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
    function mg(a) {
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
    function Jg(a) {
        var c = b.thText;
        if (31 === a || 21 === a || 1 === a) c = b.stText;
        else if (22 === a || 2 === a) c = b.ndText;
        else if (23 === a || 3 === a) c = b.rdText;
        return c;
    }
    function fg(a) {
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
    function Dg(a) {
        a.setDate(a.getDate() - 1);
    }
    function Za(a, b) {
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
    function qk(a, b) {
        if ("date" === a.type) {
            var c = ("0" + b.getDate()).slice(-2),
                e = ("0" + (b.getMonth() + 1)).slice(-2);
            a.setAttribute("min", b.getFullYear() + "-" + e + "-" + c);
        }
    }
    function gh(a, b) {
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
    function gb(a, b) {
        return new Date(a.getTime() + 6e4 * b);
    }
    function Oh(a, c) {
        var d = X(c);
        a = a.replace("{dddd}", b.dayNames[d]);
        a = a.replace("{ddd}", b.dayNamesAbbreviated[d]);
        a = a.replace("{dd}", J(c.getDate()));
        a = a.replace("{d}", c.getDate());
        a = a.replace("{o}", Jg(c.getDate()));
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
    function Ve(a, b) {
        var c = H(a.repeatEvery);
        a = new Date(a.to);
        c > x.never && ((b = new Date(b)), b.setHours(a.getHours(), a.getMinutes()), (a = b));
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
    function We(a, c, d) {
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
            ((c = Jg(c.getDate())), p(c) && ((d = h("sup")), (d.innerText = c), a.appendChild(d)));
        p(e) && aa(a, e);
    }
    function ci(a, c, d, e) {
        if (!mf(c) && b.dragAndDropForEventsEnabled && b.manualEditingEnabled) {
            var f = new Date(d),
                k = 0 <= b.weekendDays.indexOf(f.getDay()) ? " drag-not-allowed-weekend-day" : " drag-not-allowed";
            a.setAttribute("draggable", !0);
            a.ondragstart = function (d) {
                w(b.events.onEventDragStart, c);
                d.dataTransfer.setData("event_details", cc.stringify(c));
                Vd = f;
                ca = c;
                p(e) && ((e.className += k), Mm(e));
                Ch(
                    "cell",
                    function (a) {
                        a.className += " prevent-pointer-events";
                    },
                    a
                );
                Ch(
                    "events",
                    function (a) {
                        a.className += " prevent-pointer-events";
                    },
                    a
                );
            };
            a.ondragend = function () {
                w(b.events.onEventDragStop, ca);
                ca = Vd = null;
                p(e) &&
                    ((e.className = e.className.replace(k, n.empty)),
                    Fg(e, f.getFullYear(), f.getMonth(), f.getDate()));
                Ch(
                    "cell",
                    function (a) {
                        a.className = a.className.replace(" prevent-pointer-events", n.empty);
                    },
                    a
                );
                Ch(
                    "events",
                    function (a) {
                        a.className = a.className.replace(" prevent-pointer-events", n.empty);
                    },
                    a
                );
            };
        }
    }
    function Fg(a, c, d, e) {
        if (b.dragAndDropForEventsEnabled && b.manualEditingEnabled) {
            var f = new Date(c, d, e);
            a.ondragover = function (b) {
                $k(b, a, f);
            };
            a.ondragenter = function (b) {
                $k(b, a, f);
            };
            a.ondragleave = function (b) {
                al(b, a, f);
            };
            a.ondrop = function (b) {
                C(b);
                al(b, a, f);
                0 === b.dataTransfer.files.length ? Sk(b, c, d, e) : Rk(b);
            };
        }
    }
    function Mm(a) {
        b.dragAndDropForEventsEnabled &&
            b.manualEditingEnabled &&
            ((a.ondragover = null), (a.ondragenter = null), (a.ondragleave = null), (a.ondrop = null));
    }
    function $k(a, b, d) {
        C(a);
        null === ca || b.className.indexOf(" drag-over") !== B.notFound || U(Vd, d) || (b.className += " drag-over");
    }
    function al(a, b, d) {
        C(a);
        null !== ca &&
            b.className.indexOf(" drag-over") > B.notFound &&
            !U(Vd, d) &&
            (b.className = b.className.replace(" drag-over", n.empty));
    }
    function Sk(a, c, d, e) {
        var f = new Date(c, d, e);
        if (null === ca || U(Vd, f)) null === ca && Qk(a, c, d, e);
        else {
            w(b.events.onEventDragDrop, ca, f);
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
    function Qk(a, c, d, e) {
        a = Re(a.dataTransfer.getData("event_details"));
        if (p(a) && null === ca) {
            var f = new Date(a.from),
                k = new Date(a.to);
            a.from = new Date(c, d, e, f.getHours(), f.getMinutes(), 0, 0);
            a.to = new Date(c, d, e, k.getHours(), k.getMinutes(), 0, 0);
            q.addEvent(a);
            Sa(b.eventAddedText.replace("{0}", a.title));
        }
    }
    function Rk(a) {
        p(Z.FileReader) && b.importEventsEnabled && Qi(a.dataTransfer.files);
    }
    function Re(a) {
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
                    (bl = a.pageX - Fb.offsetLeft),
                    (cl = a.pageY - Fb.offsetTop),
                    (Dh = Fb.offsetLeft),
                    (Eh = Fb.offsetTop));
            }),
            (a.onmouseup = function () {
                dl(d);
            }),
            (a.oncontextmenu = function () {
                dl(null);
            }));
    }
    function dl(a) {
        Wd && ((Wd = !1), (Fb = null), (Eh = Dh = 0), null !== a && a());
    }
    function Nl(a) {
        Wd && ((Fb.style.left = a.pageX - bl + "px"), (Fb.style.top = a.pageY - cl + "px"));
    }
    function Ol() {
        Wd && ((Fb.style.left = Dh + "px"), (Fb.style.top = Eh + "px"), (Wd = !1), (Fb = null), (Eh = Dh = 0));
    }
    function nk(a) {
        var b = h("div");
        a.appendChild(b);
        return b;
    }
    function ve(a, b, d, e) {
        e = p(e) ? e : !1;
        var c = h("div", "tab tab-control" + (e ? "-selected" : n.empty));
        y(c, b);
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
    function gf(a, b) {
        Ei === b.id && (a.className += " focused-event");
        el(b.id) && (a.className += " selected-event");
        for (var c = !1, e = ja.length, f = 0; f < e; f++)
            if (ja[f].id === b.id) {
                c = !0;
                break;
            }
        c && (a.className = Pb ? a.className + " cut-event" : a.className + " copy-event");
    }
    function gg(a, b, d) {
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
    function fm(a, b) {
        if (dc(a) && !r) {
            a = new Date();
            var c = new Date(),
                e = new Date(),
                f = H(b.repeatEvery);
            a.setHours(b.from.getHours(), b.from.getMinutes(), 0, 0);
            c.setHours(b.to.getHours(), b.to.getMinutes(), 0, 0);
            f !== x.never || dc(b.from) || a.setHours(0, 0, 0, 0);
            f !== x.never || dc(b.to) || c.setHours(23, 59, 59, 99);
            Ba(b.alertOffset) && 0 < b.alertOffset && (a = gb(a, -b.alertOffset));
            if (e >= a && e <= c) {
                if (!jb(b.showAsBusy) || b.showAsBusy) pe = !0;
                ((!fl.hasOwnProperty(b.id) && !jb(b.showAlerts)) || b.showAlerts) &&
                    gl(
                        function () {
                            Nm(b);
                        },
                        !1,
                        b
                    );
            }
        }
    }
    function Nm(a) {
        fl[a.id] = !0;
        new Notification(b.eventNotificationTitle, { body: b.eventNotificationBody.replace("{0}", a.title) }).onclick =
            function () {
                var c = G(a.url);
                c === n.empty ? P(a) : je(c);
                w(b.events.onNotificationClicked, a);
            };
    }
    function Ki() {
        gl(function () {
            "granted" !== Notification.permission && Notification.requestPermission();
        });
    }
    function gl(a, c, d) {
        b.eventNotificationsEnabled &&
            !r &&
            ((c = p(c) ? c : !0),
            Notification ? a() : c && console.error("Browser notifications API unavailable."),
            p(d) && w(b.events.onNotification, d));
    }
    function je(a) {
        Z.open(a, b.urlWindowTarget);
        w(b.events.onEventUrlClicked, a);
    }
    function ge(a) {
        a = p(a) ? a : !0;
        for (var b = ja.length, d = 0; d < b; d++) {
            var e = ja[d];
            Pb ? gg(e.id, "cut-event", a) : gg(e.id, "copy-event", a);
        }
    }
    function fk(a) {
        ja = [];
        var b = Ea.length;
        if (0 < b) for (a = 0; a < b; a++) ja.push(Ea[a]);
        else ja.push(a);
    }
    function el(a) {
        for (var b = !1, d = Ea.length, e = 0; e < d; e++)
            if (Ea[e].id === a) {
                b = !0;
                break;
            }
        return b;
    }
    function Xh(a, c) {
        for (var d = ja.length, e = 0; e < d; e++) {
            var f = ja[e],
                h = Pc(f.from, f.to);
            f = c ? f : te(f);
            f.from.setDate(a.getDate());
            f.from.setMonth(a.getMonth());
            f.from.setFullYear(a.getFullYear());
            f.to.setDate(a.getDate());
            f.to.setMonth(a.getMonth());
            f.to.setFullYear(a.getFullYear());
            f.to.setDate(f.to.getDate() + h);
            c ? w(b.events.onEventUpdated, f) : ((f.id = null), q.addEvent(f, !1, !0));
        }
        Sa(b.eventsPastedText.replace("{0}", d));
        c && (mc(), (ja = []), (Pb = !1));
        Ha();
        ma();
    }
    function hf(a, b) {
        C(a);
        Ga();
        if (mf(b)) fa(a) || mc();
        else if (fa(a))
            if (el(b.id)) {
                a = Ea.length;
                for (var c = 0; c < a; c++)
                    if (Ea[c].id === b.id) {
                        Ea.splice(c, 1);
                        break;
                    }
                gg(b.id, "selected-event", !0);
            } else Ea.push(b), gg(b.id, "selected-event", !1);
        else mc();
    }
    function mc() {
        var a = !1,
            b = Ea.length;
        if (0 < b) {
            for (a = 0; a < b; a++) gg(Ea[a].id, "selected-event", !0);
            a = !0;
            Ea = [];
        }
        return a;
    }
    function sj(a) {
        ja = [];
        Pb = p(a) ? a : !1;
        a = Ea.length;
        if (0 < a) {
            for (var b = 0; b < a; b++) ja.push(Ea[b]);
            ge(!1);
        }
    }
    function Rh() {
        0 < b.autoRefreshTimerDelay &&
            !r &&
            ag &&
            nd(
                Na.autoRefresh,
                function () {
                    dj();
                    La();
                },
                b.autoRefreshTimerDelay
            );
    }
    function dj() {
        var a = w(b.events.onEventsFetch);
        if (pa(a))
            for (var c = a.length, d = 0; d < c; d++) {
                var e = a[d];
                q.removeEvent(e.id, !1, !1);
                q.addEvent(e, !1, !1);
            }
    }
    function Qh() {
        0 < b.autoRefreshTimerDelay && !r && ag && rd(Na.autoRefresh);
    }
    function La(a, c) {
        if (b.isWidget) lg ? F() : F(v);
        else if (((a = p(a) ? a : !1), (c = p(c) ? c : !1), nj() || a))
            ma(), lg ? (F(), Wj()) : Ha(), c && w(b.events.onRefresh);
    }
    function nj() {
        return !Ok() && !E.body.contains(Ka) && !Lg() && !dk() && !Qe() && null === ca;
    }
    function nd(a, b, d, e) {
        e = p(e) ? e : !0;
        Ni(a) ||
            (Gb[a] = e
                ? setInterval(b, d)
                : setTimeout(function () {
                      b();
                      delete Gb[a];
                  }, d));
    }
    function rd(a) {
        Ni(a) && (clearTimeout(Gb[a]), delete Gb[a]);
    }
    function Ni(a) {
        return Gb.hasOwnProperty(a) && null !== Gb[a];
    }
    function hj() {
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
        var h = "text" === c;
        Ri.hasOwnProperty(c) || (Ri[c] = h ? E.createTextNode(n.empty) : E.createElement(c));
        c = Ri[c].cloneNode(!1);
        if (("input" === a && "button" !== d) || "textarea" === a) p(e) ? (c.id = e) : (c.id = ec());
        p(b) && (c.className = b);
        p(d) && (c.type = d);
        return c;
    }
    function qa(a, b, d) {
        var c = h("p");
        y(c, b);
        a.appendChild(c);
        p(d) && (c.className = d);
        return c;
    }
    function aa(a, b, d, e, f, k) {
        f = p(f) ? f : !1;
        (k = p(k) ? k : !1) && a.appendChild(h("div", "separator"));
        d = h("span", d);
        k = Yc(e);
        y(d, b);
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
        (Ke.hasOwnProperty(a) && null !== Ke[a]) || (Ke[a] = hl(a));
        E.body.contains(Ke[a]) || (Ke[a] = hl(a));
        return Ke[a];
    }
    function hl(a) {
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
    function hb(a, b) {
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
    function uf(a, b) {
        var c = a.pageX,
            e = a.pageY,
            f = lj();
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
    function Ye(a) {
        for (var b = 0, d = 0; a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop); )
            (b += a.offsetLeft - a.scrollLeft), (d += a.offsetTop - a.scrollTop), (a = a.offsetParent);
        return { left: b, top: d };
    }
    function lj() {
        var a = E.documentElement;
        return {
            left: (Z.pageXOffset || a.scrollLeft) - (a.clientLeft || 0),
            top: (Z.pageYOffset || a.scrollTop) - (a.clientTop || 0),
        };
    }
    function Ee(a) {
        (a = p(a) ? a : !0) && fb.pop();
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
    function y(a, c) {
        b.allowHtmlInDisplay ? (a.innerHTML = c) : (a.innerText = kc(c));
    }
    function Wa(a, b) {
        null !== a && (a.style.display = b ? "inline-block" : "none");
    }
    function Ch(a, b, d) {
        a = z.getElementsByClassName(a);
        for (var c = a.length, f = 0; f < c; f++)
            for (var h = a[f].children, g = h.length, n = 0; n < g; n++) h[n] !== d && b(h[n]);
    }
    function ld(a) {
        for (var b = a.children, d = b.length - 1; d--; ) a.appendChild(b[d]);
    }
    function pg(a, b) {
        a = E.getElementsByClassName(a);
        a = [].slice.call(a);
        for (var c = a.length, e = 0; e < c; e++) {
            var f = a[e];
            f.id !== za && (p(b) ? (f.className = b) : (f.style.display = "none"));
        }
    }
    function $h(a, b) {
        for (a = a.getElementsByClassName(b); a[0]; ) a[0].parentNode.removeChild(a[0]);
    }
    function Fk(a, b) {
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
    function rm(a, c) {
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
    function Bg(a, b) {
        var c = a;
        b = p(b) ? b : 30;
        a.length > b &&
            ((b = 0 === b % 2 ? b / 2 : (b - 1) / 2), (c = a.substring(0, b) + "..." + a.substring(a.length - b)));
        return c;
    }
    function p(a) {
        return void 0 !== a && null !== a && a !== n.empty;
    }
    function Yh(a) {
        return "function" === typeof a;
    }
    function Yc(a) {
        return p(a) && Yh(a);
    }
    function R(a) {
        return p(a) && "string" === typeof a;
    }
    function Ba(a) {
        return p(a) && "number" === typeof a;
    }
    function jb(a) {
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
    function ej(a) {
        return Pa(a) && void 0 !== a.tagName;
    }
    function sk(a) {
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
    function db(a, b) {
        return R(a) ? a : b;
    }
    function l(a, b) {
        return jb(a) ? a : b;
    }
    function ta(a, b) {
        return Ba(a) ? a : b;
    }
    function hg(a, b) {
        return pa(a) ? a : b;
    }
    function Si(a, b) {
        return xc(a) ? a : b;
    }
    function D(a, b) {
        return Yc(a) ? a : b;
    }
    function kb() {
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
    function Qi(a) {
        for (
            var b = a.length,
                d = [],
                e = [],
                f = function (a, c) {
                    d.push(a);
                    e = e.concat(c);
                    d.length === b && il(e);
                },
                h = 0;
            h < b;
            h++
        ) {
            var g = a[h],
                n = g.name.split(".").pop().toLowerCase();
            "json" === n ? Om(g, f) : ("ics" === n || "ical" === n) && Pm(g, f);
        }
    }
    function Om(a, b) {
        var c = new FileReader(),
            e = [];
        c.readAsText(a);
        c.onloadend = function () {
            b(a.name, e);
        };
        c.onload = function (a) {
            a = Re(a.target.result);
            Pa(a) && a.hasOwnProperty("events") && (a = a.events);
            for (var b = a.length, c = 0; c < b; c++) {
                var d = a[c];
                q.removeEvent(d.id, !1, !1);
                q.addEvent(d, !1, !1) && e.push(d);
            }
        };
    }
    function Pm(a, b) {
        var c = new FileReader(),
            e = [];
        c.readAsText(a);
        c.onloadend = function () {
            b(a.name, e);
        };
        c.onload = function (a) {
            jl(a.target.result, e);
        };
    }
    function jl(a, b) {
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
                        (f.from = Fh(g.split(":").pop())), (f.isAllDay = 8 === g.split(":").pop().length);
                    else if (oa(g, "DTEND:") || oa(g, "DTEND;")) f.to = Fh(g.split(":").pop(), !0);
                    else if (oa(g, "CREATED:")) f.created = Fh(g.split(":").pop());
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
                        for (var r = g.length, t = null, u = null, v = null, w = 0; w < r; w++) {
                            var y = g[w];
                            oa(y, "FREQ=")
                                ? (t = y.split("=")[1])
                                : oa(y, "INTERVAL=")
                                  ? (u = y.split("=")[1])
                                  : oa(y, "UNTIL=") && (v = y.split("=")[1]);
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
                                  ? (l.repeatEvery = x.everyDay)
                                  : "WEEKLY" === t
                                    ? (l.repeatEvery = x.everyWeek)
                                    : "MONTHLY" === t
                                      ? (l.repeatEvery = x.everyMonth)
                                      : "MONTHLY" === t && 2 === u
                                        ? (l.repeatEvery = x.every2Weeks)
                                        : "YEARLY" === t && (l.repeatEvery = x.everyYear),
                            p(v) && ((g = Fh(v)), g.setDate(g.getDate() - 1), (l.repeatEnds = g)));
                    }
            }
    }
    function Fh(a, b) {
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
    function Gl() {
        var a = h("input", null, "file");
        a.accept = ".ical, .ics, .json";
        a.multiple = "multiple";
        a.onchange = function () {
            Qi(a.files);
        };
        Hb();
        a.click();
    }
    function il(a) {
        0 < a.length &&
            (kb(),
            Mb(),
            Ha(),
            ma(),
            Sa(b.eventsImportedText.replace("{0}", a.length)),
            w(b.events.onEventsImported, a));
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
            g = Ti();
            m = g[0];
            var l = g[1],
                r = [];
            g = [];
            for (var t = 0; t < l; t++) r.push(kl(m[t]));
            g.push(r.join(","));
            for (m = 0; m < f; m++) {
                l = g;
                r = Ui(a[m]);
                t = r.length;
                for (var u = 0; u < t; u++) r[u] = kl(r[u]);
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
            f.push("<LastModified>" + Vi() + "</LastModified>");
            f.push("</Calendar>");
            f.push("<Events>");
            for (m = 0; m < g; m++) {
                l = a[m];
                r = Gh(l);
                t = r.length;
                f.push("<Event>");
                for (u = 0; u < t; u++) {
                    var v = r[u];
                    if ("customTags" !== v && l.hasOwnProperty(v) && null !== l[v]) {
                        var y = Wi(v);
                        f.push("<" + y + ">" + Hh(v, l[v]) + "</" + y + ">");
                    }
                }
                f.push("</Event>");
            }
            f.push("</Events>");
            f = f.join(n.newLine);
        } else if ("json" === c) f = gk(a);
        else if ("text" === c) {
            m = d;
            f = [];
            g = a.length;
            p(m) && f.push("Filename: " + m);
            f.push("Last Modified: " + Vi());
            f.push(n.empty);
            for (m = 0; m < g; m++) {
                l = a[m];
                r = Gh(l);
                t = r.length;
                for (u = 0; u < t; u++)
                    (v = r[u]),
                        "customTags" !== v &&
                            l.hasOwnProperty(v) &&
                            null !== l[v] &&
                            f.push(Wi(v) + ": " + Hh(v, l[v]));
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
                !jb(l.showAsBusy) || l.showAsBusy ? f.push("TRANSP:OPAQUE") : f.push("TRANSP:TRANSPARENT");
                l.isAllDay
                    ? (f.push("DTSTART:" + ll(l.from)), f.push("DTEND:" + ll(l.to)))
                    : (f.push("DTSTART:" + Le(l.from)), f.push("DTEND:" + Le(l.to)));
                xc(l.created) && ((v = Le(l.created)), f.push("DTSTAMP:" + v), f.push("CREATED:" + v));
                xc(l.lastUpdated) && f.push("LAST-MODIFIED:" + Le(l.lastUpdated));
                R(r) && R(t) && f.push("ORGANIZER;CN=" + r + ":MAILTO:" + t);
                u !== x.never && f.push("RRULE:" + Qm(l, u));
                R(l.title) && f.push("SUMMARY:" + ig(l.title));
                R(l.description) && f.push("DESCRIPTION:" + ig(l.description));
                R(l.location) && f.push("LOCATION:" + ig(l.location));
                R(l.url) && f.push("URL:" + ig(l.url));
                R(l.group) && f.push("CATEGORIES:" + ig(l.group));
                if (!jb(l.showAlerts) || l.showAlerts)
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
            g = Ti();
            m = g[1];
            g = ["| " + g[0].join(" | ") + " |"];
            l = [];
            for (r = 0; r < m; r++) l.push("---");
            g.push("| " + l.join(" | ") + " |");
            for (m = 0; m < f; m++) (l = Ui(a[m])), g.push("| " + l.join(" | ") + " |");
            f = g.join(n.newLine);
        } else if ("html" === c) {
            m = d;
            f = [];
            g = a.length;
            f.push("<!DOCTYPE html>");
            f.push("<html>");
            f.push("<head>");
            f.push('<meta charset="utf-8" />');
            f.push('<meta http-equiv="Last-Modified" content="' + Vi() + ' GMT" />');
            p(m) && f.push("<title>" + m + "</title>");
            f.push("</head>");
            f.push("<body>");
            for (m = 0; m < g; m++) {
                l = a[m];
                r = Gh(l);
                t = r.length;
                f.push("<h3><b>" + l.id + ":</b></h3>");
                f.push("<ul>");
                for (u = 0; u < t; u++)
                    (v = r[u]),
                        "customTags" !== v &&
                            l.hasOwnProperty(v) &&
                            null !== l[v] &&
                            f.push("<li><b>" + Wi(v) + "</b>: " + Hh(v, l[v]) + "</li>");
                f.push("</ul>");
            }
            f.push("</body>");
            f.push("</html>");
            f = f.join(n.newLine);
        } else if ("tsv" === c) {
            f = a.length;
            g = Ti();
            m = g[0];
            l = g[1];
            r = [];
            g = [];
            for (t = 0; t < l; t++) r.push(ml(m[t]));
            g.push(r.join("\t"));
            for (m = 0; m < f; m++) {
                l = g;
                r = Ui(a[m]);
                t = r.length;
                for (u = 0; u < t; u++) r[u] = ml(r[u]);
                l.push(r.join("\t"));
            }
            f = g.join(n.newLine);
        }
        f !== n.empty &&
            (e
                ? (If.clipboard.writeText(f), Sa(b.eventsExportedText))
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
                  (d = p(d) ? d : hk(m)),
                  (e.style.display = "none"),
                  e.setAttribute("target", "_blank"),
                  e.setAttribute("href", "data:" + c + "/" + g + ";charset=utf-8," + encodeURIComponent(f)),
                  e.setAttribute("download", d),
                  E.body.appendChild(e),
                  e.click(),
                  E.body.removeChild(e),
                  Sa(b.eventsExportedToText.replace("{0}", d))),
            w(b.events.onEventsExported, a));
    }
    function hk(a, c) {
        c = p(c) ? c : b.exportStartFilename;
        var d = new Date(),
            e = J(d.getDate()) + "-" + J(d.getMonth() + 1) + "-" + d.getFullYear();
        d = J(d.getHours()) + "-" + J(d.getMinutes());
        return c + e + "_" + d + "." + a;
    }
    function jg(a) {
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
    function Zk(a, b) {
        b = p(b) ? b : 0;
        return jb(a) ? (a ? 1 : 0) : b;
    }
    function wi(a, b) {
        b = p(b) ? b : !1;
        return jb(a) ? a : b;
    }
    function Oc(a, b) {
        b = p(b) ? b : [];
        return pa(a) ? a : b;
    }
    function pd(a) {
        var c = b.dailyText;
        a = H(a);
        a === x.everyDay
            ? (c = b.repeatsEveryDayText)
            : a === x.everyWeek
              ? (c = b.repeatsEveryWeekText)
              : a === x.every2Weeks
                ? (c = b.repeatsEvery2WeeksText)
                : a === x.everyMonth
                  ? (c = b.repeatsEveryMonthText)
                  : a === x.everyYear
                    ? (c = b.repeatsEveryYearText)
                    : a === x.custom && (c = b.repeatsByCustomSettingsText);
        return c;
    }
    function Ih(a, b) {
        b = p(b) ? b : !1;
        a = Oc(a);
        for (var c = a.length, e = 0; e < c; e++) a[e] = b ? '"' + a[e] + '"' : a[e];
        return a.join(",");
    }
    function Wi(a) {
        return a.charAt(0).toUpperCase() + a.slice(1);
    }
    function Hh(a, c, d) {
        var e = (d = p(d) ? d : !1) ? '"' + G(c) + '"' : G(c);
        "boolean" === typeof c
            ? (e = d ? c.toString() : jg(c))
            : "object" === typeof c && c instanceof Date
              ? (e = d ? '"' + c.toISOString() + '"' : Me(c))
              : "object" === typeof c && c instanceof Array
                ? (e = "repeatEveryExcludeDays" !== a || d ? (d ? "[" + Ih(c) + "]" : Ih(c)) : nl(c))
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
    function nl(a) {
        var c = [];
        if (pa(a))
            for (var d = a.length, e = 0; e < d; e++) {
                var f = a[e] - 1;
                -1 === f && (f = 6);
                c.push(b.dayNames[f]);
            }
        return Ih(c);
    }
    function Ti() {
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
    function Ui(a) {
        var b = [];
        b.push(G(a.id));
        b.push(N[H(a.type)].text);
        b.push(Me(a.from));
        b.push(Me(a.to));
        b.push(jg(a.isAllDay));
        b.push(G(a.title));
        b.push(G(a.description));
        b.push(G(a.location));
        b.push(G(a.color));
        b.push(G(a.colorText));
        b.push(G(a.colorBorder));
        b.push(pd(a.repeatEvery));
        b.push(Me(a.repeatEnds));
        b.push(nl(a.repeatEveryExcludeDays));
        b.push(Ih(a.seriesIgnoreDates));
        b.push(Me(a.created));
        b.push(Me(a.lastUpdated));
        b.push(G(a.organizerName));
        b.push(G(a.organizerEmailAddress));
        b.push(G(a.url));
        b.push(jg(a.locked));
        b.push(jg(!jb(a.showAlerts) || a.showAlerts));
        b.push(jg(!jb(a.showAsBusy) || a.showAsBusy));
        b.push(H(a.alertOffset));
        return b;
    }
    function Gh(a) {
        var b = [],
            d;
        for (d in a) a.hasOwnProperty(d) && b.push(d);
        b.sort();
        return b;
    }
    function Vi() {
        var a = new Date(),
            b = Oh("{ddd}, {dd} {mmm} {yyyy}", a);
        return (b += " " + J(a.getHours()) + ":" + J(a.getMinutes()) + ":" + J(a.getSeconds()));
    }
    function kl(a) {
        a = a
            .toString()
            .replace(/(\r\n|\n|\r)/gm, n.empty)
            .replace(/(\s\s)/gm, n.space);
        a = a.replace(/"/g, '""');
        return '"' + a + '"';
    }
    function gk(a) {
        var b = [],
            d = a.length;
        b.push("{");
        b.push('"events": [');
        for (var e = 0; e < d; e++) {
            var f = a[e],
                g = Gh(f),
                h = g.length;
            b.push("{");
            for (var l = 0; l < h; l++) {
                var p = g[l];
                "customTags" !== p &&
                    f.hasOwnProperty(p) &&
                    null !== f[p] &&
                    b.push('"' + p + '":' + Hh(p, f[p], !0) + ",");
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
    function ig(a) {
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
    function ll(a) {
        var b = [];
        p(a) && (b.push(a.getFullYear()), b.push(J(a.getMonth() + 1)), b.push(J(a.getDate())));
        return b.join(n.empty);
    }
    function Qm(a, b) {
        var c = [];
        if (b === x.custom) {
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
            b === x.everyDay
                ? c.push("FREQ=DAILY")
                : b === x.everyWeek || b === x.every2Weeks
                  ? c.push("FREQ=WEEKLY")
                  : b === x.everyMonth
                    ? c.push("FREQ=MONTHLY")
                    : b === x.everyYear && c.push("FREQ=YEARLY"),
                b === x.every2Weeks ? c.push("INTERVAL=2") : c.push("INTERVAL=1");
        xc(a.repeatEnds) && ((a = new Date(a.repeatEnds)), a.setDate(a.getDate() + 1), c.push("UNTIL=" + Le(a)));
        return c.join(";");
    }
    function ml(a) {
        return (a = a.replace(/\\/g, "\\\\"));
    }
    function w(a) {
        var b = null,
            d = [].slice.call(arguments, 1);
        0 < d.length && (b = !1);
        Yc(a) && (b = a.apply(null, d));
        return b;
    }
    function ce(a, c, d) {
        Yc(b.events.onEventClick) &&
            a.addEventListener("click", function () {
                w(b.events.onEventClick, c);
            });
        b.manualEditingEnabled
            ? (a.ondblclick = function (a) {
                  C(a);
                  p(d) ? P(c, null, null, d) : P(c);
              })
            : Yc(b.events.onEventDoubleClick) &&
              (a.ondblclick = function () {
                  w(b.events.onEventDoubleClick, c);
              });
    }
    function af(a) {
        p(a) && C(a);
        if (!r || eb)
            (a = new Date(v)),
                a.setMonth(a.getMonth() - 1),
                a.getFullYear() >= b.minimumYear && (F(a), w(b.events.onPreviousMonth, a), sb());
    }
    function bf(a) {
        p(a) && C(a);
        if (!r || eb)
            (a = new Date(v)),
                a.setMonth(a.getMonth() + 1),
                a.getFullYear() <= b.maximumYear && (F(a), w(b.events.onNextMonth, a), sb());
    }
    function sg() {
        if (!r || eb) {
            var a = new Date(v);
            a.setFullYear(a.getFullYear() - 1);
            a.getFullYear() >= b.minimumYear && (F(a), w(b.events.onPreviousYear, a), sb());
        }
    }
    function tg() {
        if (!r || eb) {
            var a = new Date(v);
            a.setFullYear(a.getFullYear() + 1);
            a.getFullYear() <= b.maximumYear && (F(a), w(b.events.onNextYear, a), sb());
        }
    }
    function vg() {
        if (!r || eb) {
            var a = new Date();
            if (v.getMonth() !== a.getMonth() || v.getFullYear() !== a.getFullYear()) F(), w(b.events.onToday), sb();
        }
    }
    function ol(a) {
        b = lb(a);
        b.views = lb(b.views);
        b.showDayNumberOrdinals = l(b.showDayNumberOrdinals, !0);
        b.dragAndDropForEventsEnabled = l(b.dragAndDropForEventsEnabled, !0);
        b.exportEventsEnabled = l(b.exportEventsEnabled, !0);
        b.manualEditingEnabled = l(b.manualEditingEnabled, !0);
        b.autoRefreshTimerDelay = ta(b.autoRefreshTimerDelay, 3e4);
        b.fullScreenModeEnabled = l(b.fullScreenModeEnabled, !0);
        b.tooltipDelay = ta(b.tooltipDelay, 1e3);
        b.holidays = hg(b.holidays, [
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
        b.organizerName = db(b.organizerName, n.empty);
        b.organizerEmailAddress = db(b.organizerEmailAddress, n.empty);
        b.spacing = ta(b.spacing, 10);
        b.maximumEventTitleLength = ta(b.maximumEventTitleLength, 0);
        b.maximumEventDescriptionLength = ta(b.maximumEventDescriptionLength, 0);
        b.maximumEventLocationLength = ta(b.maximumEventLocationLength, 0);
        b.maximumEventGroupLength = ta(b.maximumEventGroupLength, 0);
        b.eventNotificationsEnabled = l(b.eventNotificationsEnabled, !1);
        b.tooltipsEnabled = l(b.tooltipsEnabled, !0);
        b.urlWindowTarget = db(b.urlWindowTarget, "_blank");
        b.defaultEventBackgroundColor = db(b.defaultEventBackgroundColor, "#484848");
        b.defaultEventTextColor = db(b.defaultEventTextColor, "#F5F5F5");
        b.defaultEventBorderColor = db(b.defaultEventBorderColor, "#282828");
        b.hideEventsWithoutGroupAssigned = l(b.hideEventsWithoutGroupAssigned, !1);
        b.showHolidays = l(b.showHolidays, !0);
        b.useTemplateWhenAddingNewEvent = l(b.useTemplateWhenAddingNewEvent, !0);
        b.useEscapeKeyToExitFullScreenMode = l(b.useEscapeKeyToExitFullScreenMode, !0);
        b.allowHtmlInDisplay = l(b.allowHtmlInDisplay, !1);
        b.initialDateTime = Si(b.initialDateTime, null);
        b.data = hg(b.data, null);
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
        b.viewToOpenOnFirstLoad = db(b.viewToOpenOnFirstLoad, null);
        b.eventColorsEditingEnabled = l(b.eventColorsEditingEnabled, !0);
        b.eventTooltipDelay = ta(b.eventTooltipDelay, 1e3);
        b.jumpToDateEnabled = l(b.jumpToDateEnabled, !0);
        b.shareEventsEnabled = l(b.shareEventsEnabled, !0);
        b.showReoccurringEventIcons = l(b.showReoccurringEventIcons, !0);
        b.dialogMovingEnabled = l(b.dialogMovingEnabled, !0);
        $c(b.visibleDays) && ((b.visibleDays = [0, 1, 2, 3, 4, 5, 6]), (od = []));
        a = db(b.workingHoursStart, null);
        var c = db(b.workingHoursEnd, null);
        p(a) || ((a = b.workingHoursStart), (a = Pa(a) ? a : null));
        p(c) || ((c = b.workingHoursEnd), (c = Pa(c) ? c : null));
        b.workingHoursStart = a;
        b.workingHoursEnd = c;
        b.sideMenu = lb(b.sideMenu);
        b.sideMenu.showDays = l(b.sideMenu.showDays, !0);
        b.sideMenu.showGroups = l(b.sideMenu.showGroups, !0);
        b.sideMenu.showEventTypes = l(b.sideMenu.showEventTypes, !0);
        b.sideMenu.showWorkingDays = l(b.sideMenu.showWorkingDays, !0);
        b.sideMenu.showWeekendDays = l(b.sideMenu.showWeekendDays, !0);
        b.sideMenu.showSelectAllNoneButtons = l(b.sideMenu.showSelectAllNoneButtons, !0);
        b.views.fullDay = lb(b.views.fullDay);
        b.views.fullDay.enabled = l(b.views.fullDay.enabled, !0);
        b.views.fullDay.showAllDayEventDetails = l(b.views.fullDay.showAllDayEventDetails, !1);
        b.views.fullDay.minutesBetweenSections = ta(b.views.fullDay.minutesBetweenSections, 30);
        b.views.fullDay.showTimelineArrow = l(b.views.fullDay.showTimelineArrow, !0);
        b.views.fullDay.showExtraTitleBarButtons = l(b.views.fullDay.showExtraTitleBarButtons, !0);
        b.views.fullDay.showEventUrls = l(b.views.fullDay.showEventUrls, !1);
        b.views.fullWeek = lb(b.views.fullWeek);
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
        b.views.fullMonth = lb(b.views.fullMonth);
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
        b.views.fullMonth.titleBarDateFormat = db(b.views.fullMonth.titleBarDateFormat, "{mmmm} {yyyy}");
        b.views.fullMonth.showDayNamesHeaders = l(b.views.fullMonth.showDayNamesHeaders, !0);
        b.views.fullMonth.isPinUpViewEnabled = l(b.views.fullMonth.isPinUpViewEnabled, !1);
        b.views.fullMonth.pinUpViewImageUrls = hg(b.views.fullMonth.pinUpViewImageUrls, []);
        b.views.fullMonth.showMonthButtonsInYearDropDownMenu = l(
            b.views.fullMonth.showMonthButtonsInYearDropDownMenu,
            !0
        );
        b.views.fullMonth.showExtraTitleBarButtons = l(b.views.fullMonth.showExtraTitleBarButtons, !0);
        b.views.fullMonth.pinUpViewImageCssClasses = hg(b.views.fullMonth.pinUpViewImageCssClasses, []);
        b.views.fullMonth.showYearDropDownButtonIcon = l(b.views.fullMonth.showYearDropDownButtonIcon, !0);
        b.views.fullMonth.padDayNumbers = l(b.views.fullMonth.padDayNumbers, !1);
        b.views.fullMonth.showPreviousNextYears = l(b.views.fullMonth.showPreviousNextYears, !0);
        jb(b.views.fullMonth.allowEventScrolling) ||
            ((b.views.fullMonth.allowEventScrolling = !1),
            b.views.fullMonth.allowEventScrolling && (b.views.fullMonth.maximumEventsPerDayDisplay = 0));
        b.views.fullYear = lb(b.views.fullYear);
        b.views.fullYear.enabled = l(b.views.fullYear.enabled, !0);
        b.views.fullYear.showExtraTitleBarButtons = l(b.views.fullYear.showExtraTitleBarButtons, !0);
        b.views.fullYear.padDayNumbers = l(b.views.fullYear.padDayNumbers, !1);
        b.views.timeline = lb(b.views.timeline);
        b.views.timeline.enabled = l(b.views.timeline.enabled, !0);
        b.views.timeline.defaultAxis = db(b.views.timeline.defaultAxis, "group");
        b.views.timeline.minutesBetweenSections = ta(b.views.timeline.minutesBetweenSections, 30);
        b.views.timeline.showExtraTitleBarButtons = l(b.views.timeline.showExtraTitleBarButtons, !0);
        b.views.allEvents = lb(b.views.allEvents);
        b.views.allEvents.enabled = l(b.views.allEvents.enabled, !0);
        b.views.allEvents.showExtraTitleBarButtons = l(b.views.allEvents.showExtraTitleBarButtons, !0);
        b.views.allEvents.showEventUrls = l(b.views.allEvents.showEventUrls, !1);
        b.views.datePicker = lb(b.views.datePicker);
        b.views.datePicker.selectedDateFormat = db(b.views.datePicker.selectedDateFormat, "{d}{o} {mmmm} {yyyy}");
        b.views.datePicker.minimumDate = Si(b.views.datePicker.minimumDate, null);
        b.views.datePicker.maximumDate = Si(b.views.datePicker.maximumDate, null);
        b.events = lb(b.events);
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
        kg(b.eventTypeNormalText, "Normal", 0);
        kg(b.eventTypeMeetingText, "Meeting", 1);
        kg(b.eventTypeBirthdayText, "Birthday", 2);
        kg(b.eventTypeHolidayText, "Holiday", 3);
        kg(b.eventTypeTaskText, "Task", 4);
        Ki();
    }
    function kg(a, b, d) {
        N.hasOwnProperty(d) && (R(a) ? (N[d].text = a) : (N[d].text = b));
    }
    function $c(a, b) {
        b = Ba(b) ? b : 1;
        return !pa(a) || a.length < b;
    }
    function lb(a, b) {
        Pa(a) || (a = Pa(b) ? b : {});
        return a;
    }
    var q = this,
        E = null,
        Z = null,
        If = null,
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
        x = { never: 0, everyDay: 1, everyWeek: 2, every2Weeks: 3, everyMonth: 4, everyYear: 5, custom: 6 },
        M = { daily: 0, weekly: 1, monthly: 2, yearly: 3 },
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
        mb = !1,
        Zd = !1,
        Oe = !1,
        rb = {},
        Cd = {},
        Ea = [],
        ja = [],
        Pb = !1,
        Vd = null,
        ca = null,
        fl = {},
        v = null,
        lg = !1,
        Mc = null,
        pe = !1,
        Xj = !1,
        Ke = {},
        ya = [],
        Ri = {},
        Gb = {},
        ag = !0,
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
        og = !1,
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
        Xe = null,
        r = !1,
        eb = !1,
        kj = null,
        tb = {
            fullMonth: "full-month",
            fullDay: "full-day",
            fullWeek: "full-week",
            fullYear: "full-year",
            timeline: "timeline",
            allEvents: "all-events",
        },
        pb = [],
        Ie = 0,
        xg = null,
        yg = null,
        Qb = null,
        zg = null,
        Ag = null,
        z = null,
        Ka = null,
        sd = !1,
        Wk = null,
        od = [],
        W = null,
        cf = null,
        wb = null,
        Nc = null,
        wa = null,
        he = null,
        L = null,
        gc = [],
        Zh = null,
        Gj = null,
        ef = null,
        Hj = null,
        Cg = [],
        da = null,
        Qa = null,
        ai = null,
        Sj = null,
        zd = null,
        yd = null,
        Ad = null,
        me = null,
        le = null,
        kf = null,
        hc = [],
        lf = {},
        Sb = null,
        Rj = null,
        ne = null,
        di = !1,
        Gg = null,
        nf = 0,
        ei = [],
        Ib = null,
        of = [],
        S = null,
        oe = null,
        Nh = null,
        Kg = null,
        Tb = null,
        pf = null,
        Rc = {},
        Ig = null,
        Hg = null,
        nb = null,
        Qc = 0,
        fi = null,
        yc = null,
        ed = [],
        Mh = null,
        Da = null,
        li = null,
        ki = null,
        qe = null,
        sa = null,
        Ng = 0,
        ra = null,
        ni = null,
        Yj = null,
        Ed = null,
        Lb = [],
        ug = [],
        oi = [],
        ia = null,
        pi = null,
        bk = null,
        ak = null,
        Ja = null,
        Fd = null,
        rf = null,
        sf = null,
        Pg = {},
        tf = [],
        Bc = [],
        ba = null,
        Og = null,
        $a = null,
        re = "location organizerName group organizerEmailAddress url title description".split(" "),
        fb = [],
        Fb = null,
        Dh = 0,
        Eh = 0,
        Wd = !1,
        bl = 0,
        cl = 0,
        cb = null,
        Vb = null,
        Xg = null,
        Yg = null,
        Uc = null,
        Wg = null,
        Sc = null,
        Wb = null,
        Xb = null,
        ib = null,
        Yb = null,
        ye = null,
        Jf = null,
        Kf = null,
        Ab = null,
        vi = null,
        Ld = null,
        Md = null,
        Kd = null,
        ze = null,
        qc = null,
        Lf = null,
        Mf = null,
        Nf = null,
        Of = null,
        Pf = null,
        Zb = null,
        Zg = null,
        Id = null,
        Qf = null,
        Rf = null,
        Sf = null,
        Wc = null,
        ea = {},
        Ff = null,
        Tg = null,
        Jd = null,
        xi = null,
        Tf = null,
        rc = null,
        Be = null,
        Ce = null,
        De = null,
        sc = null,
        $g = null,
        ah = null,
        bh = null,
        ch = null,
        dh = null,
        eh = null,
        fh = null,
        Nd = null,
        Xc = null,
        yi = null,
        zi = null,
        Ug = null,
        Ai = null,
        Wf = null,
        tc = null,
        Ta = null,
        Bi = null,
        wk = null,
        xk = null,
        yk = null,
        zk = null,
        Ak = null,
        Bk = null,
        Ck = null,
        uc = null,
        Cb = null,
        kh = null,
        ka = null,
        Qd = null,
        $b = null,
        na = null,
        mh = null,
        lh = null,
        Ge = null,
        Yf = null,
        Zf = null,
        nh = null,
        oh = null,
        ph = null,
        qh = null,
        rh = null,
        sh = null,
        th = null,
        uh = null,
        vh = null,
        Ci = !1,
        Db = [],
        Zc = 0,
        Ei = null,
        zb = null,
        qb = null,
        Eb = null,
        Rd = null,
        He = null,
        Fi = null,
        Gi = null,
        Hi = null,
        Ii = null,
        Ji = null,
        wh = null,
        xh = null,
        wc = null,
        bc = null,
        Ia = null,
        qi = null,
        Qg = null,
        Gd = null,
        Y = null,
        bb = null,
        ek = null,
        Gf = null,
        Ef = null,
        ri = null,
        Df = null,
        Cf = null,
        xf = null,
        Bf = null,
        Af = null,
        zf = null,
        yf = null,
        wf = null,
        vf = null,
        Sg = null,
        Rg = null,
        Oa = null,
        ui = null,
        ti = null,
        si = null,
        Vg = null,
        df = null,
        ue = null,
        ob = null,
        ik = null,
        kk = null,
        lk = null,
        mk = null,
        jk = null,
        T = null,
        Ah = null,
        Mi = null,
        zh = null,
        Sd = null,
        bg = null,
        Td = null,
        cg = null,
        dg = null,
        eg = null,
        Ud = null,
        Dd = null,
        fc = null;
    q.turnOnFullScreen = function () {
        r || Uk();
        return q;
    };
    q.turnOffFullScreen = function () {
        r || Tk();
        return q;
    };
    q.isFullScreenActivated = function () {
        return sd;
    };
    q.startTheAutoRefreshTimer = function () {
        r || ((ag = !0), Rh());
        return q;
    };
    q.stopTheAutoRefreshTimer = function () {
        r || (Qh(), (ag = !1));
        return q;
    };
    q.destroy = function () {
        if (mb) {
            Oe && Jh(!1);
            for (var a in Gb) Gb.hasOwnProperty(a) && null !== Gb[a] && (clearTimeout(Gb[a]), delete Gb[a]);
            a = ya.length;
            for (var c = 0; c < a; c++) E.body.removeChild(ya[c]);
            ya = [];
            r && E.removeEventListener("click", qd);
            b.tooltipsEnabled && document.body.removeEventListener("mousemove", ic);
            p(z) && ((z.className = n.empty), (z.innerHTML = n.empty));
            w(b.events.onDestroy, za);
        }
        return q;
    };
    q.moveToPreviousMonth = function () {
        af();
        return q;
    };
    q.moveCurrentViewToPreviousDate = function () {
        pj();
        return q;
    };
    q.moveToNextMonth = function () {
        bf();
        return q;
    };
    q.moveCurrentViewToNextDate = function () {
        qj();
        return q;
    };
    q.moveToPreviousYear = function () {
        sg();
        return q;
    };
    q.moveToNextYear = function () {
        tg();
        return q;
    };
    q.moveToToday = function () {
        vg();
        return q;
    };
    q.moveCurrentViewToToday = function () {
        rj();
        return q;
    };
    q.getCurrentDisplayDate = function () {
        return new Date(v);
    };
    q.setCurrentDisplayDate = function (a) {
        !xc(a) ||
            (r && !eb) ||
            ((a = new Date(a)),
            !U(v, a) &&
                a.getFullYear() >= b.minimumYear &&
                a.getFullYear() <= b.maximumYear &&
                (F(a), w(b.events.onSetDate, a)));
        return q;
    };
    q.getSelectedDatePickerDate = function () {
        return r ? new Date(Mc) : null;
    };
    q.setSelectedDatePickerDate = function (a) {
        xc(a) &&
            r &&
            ((a = new Date(a)),
            mj(a) &&
                !U(a, Mc) &&
                a.getFullYear() >= b.minimumYear &&
                a.getFullYear() <= b.maximumYear &&
                (a.setHours(0, 0, 0, 0), qd(), Th(a), w(b.events.onDatePickerDateChanged, a), (Mc = a)));
        return q;
    };
    q.refresh = function () {
        r || La(!0, !0);
        return q;
    };
    q.export = function (a) {
        b.exportEventsEnabled && !r && ((a = db(a, "csv")), vc(null, a));
        return q;
    };
    q.import = function (a) {
        b.importEventsEnabled && !r && Qi(a);
        return q;
    };
    q.importICalData = function (a) {
        if (b.importEventsEnabled && !r) {
            var c = [];
            jl(a, c);
            il(c);
        }
        return q;
    };
    q.setEvents = function (a, c, d) {
        r || ((d = l(d, !0)), (rb = {}), q.addEvents(a, c, !1), d && w(b.events.onEventsSet, a));
        return q;
    };
    q.setEventsFromJson = function (a, c, d) {
        if (!r) {
            d = l(d, !0);
            var e = Re(a);
            pa(e) ? q.setEvents(e, c, !1) : Pa(e) && e.hasOwnProperty("events") && q.setEvents(e.events, c, !1);
            d && w(b.events.onEventsSetFromJSON, a);
        }
        return q;
    };
    q.addEvents = function (a, c, d) {
        if (!r) {
            c = l(c, !0);
            d = l(d, !0);
            for (var e = a.length, f = 0; f < e; f++) q.addEvent(a[f], !1, !1, !1);
            kb();
            d && w(b.events.onEventsAdded, a);
            c && (Mb(), Ha(), ma());
        }
        return q;
    };
    q.addEventsFromJson = function (a, c, d) {
        if (!r) {
            d = l(d, !0);
            var e = Re(a);
            pa(e) ? q.addEvents(e, c, !1) : Pa(e) && e.hasOwnProperty("events") && q.addEvents(e.events, c, !1);
            d && w(b.events.onEventsAddedFromJSON, a);
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
            rb.hasOwnProperty(g) || (rb[g] = {});
            if (!rb[g].hasOwnProperty(h)) {
                c = l(c, !0);
                d = l(d, !0);
                f = G(a.title);
                var q = G(a.description),
                    t = G(a.location),
                    u = G(a.group),
                    v = G(a.url);
                if (p(O.visibleGroups) && !Yc(b.events.onEventsFetch)) {
                    var x = u.toLowerCase();
                    O.visibleGroups.indexOf(x) === B.notFound && O.visibleGroups.push(x);
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
                v === n.empty || sk(v) || (a.url = n.empty);
                xc(a.created) || (a.created = new Date());
                e && (a.lastUpdated = new Date());
                rb[g][h] = Yk(a);
                f = !0;
                d && w(b.events.onEventAdded, a);
                c && (kb(), Mb(), Ha(), ma());
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
            d && w(b.events.onEventsUpdated, a);
            c && (kb(), Mb(), Ha(), ma());
        }
        return q;
    };
    q.updateEvent = function (a, c, d, e) {
        var f = !1;
        !r &&
            (f = q.removeEvent(a, !1, !1)) &&
            ((d = l(d, !0)), (e = l(e, !0)), (f = q.addEvent(c, d, !1)), kb(), f && e && w(b.events.onEventUpdated, c));
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
                        g && w(b.events.onEventUpdated, k),
                        f && (kb(), Mb(), Ha(), ma()),
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
                        delete rb[g][h], (e = !0), d && w(b.events.onEventRemoved, f), c && (kb(), Mb(), Ha(), ma()), !0
                    );
            }));
        return e;
    };
    q.clearEvents = function (a, c) {
        r ||
            ((a = l(a, !0)),
            (c = l(c, !0)),
            (rb = {}),
            c && w(b.events.onEventsCleared),
            a && (kb(), Mb(), Ha(), ma()));
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
                H(a.repeatEvery) === x.never && a.to < new Date() && q.removeEvent(a.id, !1, b);
            }),
            a && (kb(), Mb(), Ha(), ma()));
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
            c && w(b.events.onVisibleEventTypesChanged, O.visibleEventTypes);
        }
        return q;
    };
    q.getAllGroups = function () {
        return hj();
    };
    q.clearAllGroups = function (a, c) {
        r ||
            ((a = l(a, !0)),
            (c = l(c, !0)),
            xb(function (a) {
                a.group = null;
            }),
            c && w(b.events.onGroupsCleared),
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
            d && w(b.events.onGroupRemoved, a);
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
            c && w(b.events.onVisibleGroupsChanged, O.visibleGroups);
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
        return "2.12.5";
    };
    q.getId = function () {
        return za;
    };
    q.isBusy = function () {
        return pe;
    };
    q.getCurrentView = function () {
        return qf(!1);
    };
    q.setOptions = function (a, c) {
        for (var d in a) a.hasOwnProperty(d) && (b[d] = a[d]);
        ol(b);
        jj();
        Ki();
        mb && ((c = l(c, !0)) && w(b.events.onOptionsUpdated, b), (mb = !1), (r && !eb) || F(v, !0, !0));
        return q;
    };
    q.setSearchOptions = function (a, c) {
        if (!r) {
            a = lb(a);
            c = l(c, !0);
            kd();
            for (var d in a) a.hasOwnProperty(d) && (u[d] = a[d]);
            c && w(b.events.onSearchOptionsUpdated, u);
        }
        return q;
    };
    q.addHolidays = function (a, c, d) {
        pa(a) &&
            !r &&
            ((c = l(c, !0)),
            (d = l(d, !0)),
            (b.holidays = b.holidays.concat(a)),
            c && w(b.events.onOptionsUpdated, b),
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
            c && w(b.events.onOptionsUpdated, b);
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
        If = d;
        la = e;
        cc = f;
        za = I;
        if (R(za) || ej(za))
            ol(ua),
                (u = lb(V, b.searchOptions)),
                (u.enabled = l(u.enabled, !0)),
                (u.lastSearchText = db(u.lastSearchText, n.empty)),
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
                (u.history = hg(u.history, [])),
                F(b.initialDateTime, !0),
                null !== z && jb(b.openInFullScreenMode) && b.openInFullScreenMode && !r && Vk();
    })(document, window, navigator, Math, JSON);
};