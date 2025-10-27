/*! Calendar.js v2.12.5 | (c) Bunoon 2025 | MIT License */
export function calendarJs(I, ua, V) {
    function F(a, c, d) {
        v = xc(a) ? a : new Date();
        c = p(c) ? c : !1;
        d = p(d) ? d : !1;
        a = c;
        if (b.isWidget)
            (kg = dc(v)),
                lb || (Yd(!0), null !== z && (Vi(), Wi(), Xi(), Yi(), Zi(), Ne || (Ih(), (Ne = !0)), $i(), Xd(), Me())),
                ol();
        else {
            v.setDate(1);
            v.setHours(0, 0, 0, 0);
            kg = lg(v);
            c = new Date(v.getFullYear(), v.getMonth(), 1);
            var e = Oe(0 === c.getDay() ? 7 : c.getDay());
            c = !Zd;
            Pe() && Hb();
            Ga();
            if (!lb && (Yd(), null !== z)) {
                r ||
                    (null === $d &&
                        (($d = h("div", "side-menu-disabled-background")), ($d.onclick = Hb), z.appendChild($d)),
                    pl());
                ql();
                rl();
                null === Ib && ((Ib = h("div", "full-month-view")), (Ib.id = ec()), z.appendChild(Ib));
                sl();
                if (!r) {
                    var f = null !== mb;
                    if (b.views.fullMonth.isPinUpViewEnabled) {
                        f || ((mb = h("div", "pin-up")), Ib.appendChild(mb));
                        f = b.views.fullMonth.pinUpViewImageUrls.length;
                        if (0 < f)
                            for (var k = 0; k < f; k++) new Image().src = b.views.fullMonth.pinUpViewImageUrls[k];
                        Zd || qb();
                    } else f && (Ib.removeChild(mb), (mb = null));
                }
                f = null !== yc;
                b.views.fullMonth.showDayNamesHeaders
                    ? (f && (yc.innerHTML = n.empty),
                      f || ((yc = h("div", "row-cells header-days")), Ib.appendChild(yc)),
                      r && (yc.onclick = C),
                      Jh(yc))
                    : f && (Ib.removeChild(yc), (yc = null));
                aj();
                tl();
                ul();
                vl();
                Ne || (Ih(), (Ne = !0));
                Xd();
                Me();
            }
            if (1 < e) {
                f = new Date(v);
                f.setMonth(f.getMonth() - 1);
                k = ad(f.getFullYear(), f.getMonth());
                for (var m = 1, A = k - e + 1; A < k; A++) {
                    var rb = A === k - 1;
                    Kh(A + 1, m, f.getMonth(), f.getFullYear(), !0, rb);
                    m++;
                }
            }
            f = 0;
            k = ad(v.getFullYear(), v.getMonth());
            for (m = 0; m < k; m++) (f = e + m), Kh(m + 1, f, v.getMonth(), v.getFullYear(), !1);
            k = f;
            if (42 > k) {
                f = 1;
                e = new Date(v);
                e.setMonth(e.getMonth() + 1);
                for (k += 1; 43 > k; k++) (m = 1 === f), Kh(f, k, e.getMonth(), e.getFullYear(), !0, m), f++;
                f = ad(e.getFullYear(), e.getMonth());
                f = la.round(f / 2);
                Lh = new Date(e.getFullYear(), e.getMonth(), f);
            } else Lh = null;
            Ha();
            a &&
                (Vi(),
                Wi(),
                Xi(),
                Yi(),
                Zi(),
                wl(),
                xl(),
                yl(),
                zl(),
                $i(),
                r || (Al(), Bl(), Cl(), Dl()),
                null !== fc || r || ((fc = h("div", "calendar-notification")), ya.push(fc), E.body.appendChild(fc)));
            d && La(!0, !1);
            null !== z &&
                ((Mh.innerText = Nh(b.views.fullMonth.titleBarDateFormat, v)),
                c &&
                    R(b.viewToOpenOnFirstLoad) &&
                    (b.viewToOpenOnFirstLoad.toLowerCase() === sb.fullDay && b.views.fullDay.enabled
                        ? Ua()
                        : b.viewToOpenOnFirstLoad.toLowerCase() === sb.fullWeek && b.views.fullWeek.enabled
                          ? zc()
                          : b.viewToOpenOnFirstLoad.toLowerCase() === sb.fullYear && b.views.fullYear.enabled
                            ? Ac()
                            : b.viewToOpenOnFirstLoad.toLowerCase() === sb.timeline && b.views.timeline.enabled
                              ? Jb()
                              : b.viewToOpenOnFirstLoad.toLowerCase() === sb.allEvents &&
                                b.views.allEvents.enabled &&
                                Oh()));
        }
    }
    function Xd() {
        pa(b.data) && q.addEvents(b.data, !1, !1, !1);
        if (b.useLocalStorageForEvents && Z.localStorage)
            for (var a = Z.localStorage.length, c = 0; c < a; c++) {
                var d = Z.localStorage.getItem(Z.localStorage.key(c));
                d = Qe(d);
                p(d) && q.addEvent(d, !1, !1, !1);
            }
        bj();
    }
    function Me() {
        lb = !0;
        Zd || (w(b.events.onRender, za), (Zd = !0));
    }
    function Yd(a) {
        a = p(a) ? a : !1;
        if (null === z) {
            if (cj(za)) {
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
                    : El(b));
        }
    }
    function pl() {
        Zd ||
            ((tb = h("div", "side-menu custom-scroll-bars dark-thumb-scroll")),
            (tb.onclick = C),
            z.appendChild(tb),
            (Kb = h("div", "main-header")),
            tb.appendChild(Kb));
        Kb.innerHTML = n.empty;
        qa(Kb, b.sideMenuHeaderText);
        t(Kb, "ib-close", b.closeTooltipText, Hb);
        (b.configurationDialogEnabled || b.exportEventsEnabled || (b.importEventsEnabled && b.manualEditingEnabled)) &&
            Kb.appendChild(h("div", "right-divider-line"));
        b.configurationDialogEnabled &&
            t(Kb, "ib-octagon-hollow", b.configurationTooltipText, function () {
                Hb();
                dj();
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
            t(Kb, "ib-arrow-up-full-line", b.importEventsTooltipText, Fl);
        Zd || ((Cc = h("div", "content")), tb.appendChild(Cc));
    }
    function ej(a) {
        var c = Re(Dc) || !0 === a,
            d = Re(fd, !0),
            e = Re(gd, !0),
            f = Re(Ec, !0);
        a = Re(Fc, !0);
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
                rb = [];
            Se(jd, Dc, b.sideMenuDaysText, m, rb);
            jd.appendChild(Dc);
            if (b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday) (c = b.startOfWeekDay), (A = !0);
            for (; c < k; c++)
                (m = b.visibleDays.indexOf(c) > B.notFound),
                    rb.push(K(Dc, b.dayNames[c], Ic, c.toString(), m, null, Jc)[0]);
            if (A)
                for (k = b.startOfWeekDay, c = 0; c < k; c++)
                    (A = b.visibleDays.indexOf(c) > B.notFound),
                        rb.push(K(Dc, b.dayNames[c], Ic, c.toString(), A, null, Jc)[0]);
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
                        Se(Hc, fd, b.eventTypesText, d, k),
                        Hc.appendChild(fd),
                        (c = !0)),
                    (rb = !0),
                    p(O.visibleEventTypes) && (rb = O.visibleEventTypes.indexOf(parseInt(g)) > B.notFound),
                    k.push(K(fd, N[g].text, Ic, g, rb, null, Jc)[0]));
        }
        if (
            b.sideMenu.showGroups &&
            ((c = e), (c = p(c) ? c : !0), (gd = Gc = null), (g = fj()), (e = g.length), 0 < e)
        )
            for (
                d = [],
                    Gc = h("div", "content-section content-section-opened"),
                    gd = h("div", "checkbox-container"),
                    Cc.appendChild(Gc),
                    Se(Gc, gd, b.groupsText, c, d),
                    Gc.appendChild(gd),
                    c = 0;
                c < e;
                c++
            )
                (k = g[c]),
                    (rb = k.toLowerCase()),
                    (A = !0),
                    p(O.visibleGroups) && (A = O.visibleGroups.indexOf(rb) > B.notFound),
                    d.push(K(gd, k, Ic, rb, A, null, Jc)[0]);
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
            Se(id, Ec, b.workingDaysText, c, e);
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
            Se(hd, Fc, b.weekendDaysText, d, g);
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
        Pe() && ej();
    }
    function Kc(a) {
        ej(p(a) ? a : !1);
        mg = !1;
        tb.className += " side-menu-open";
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
        if (null !== tb) {
            tb.className = "side-menu custom-scroll-bars";
            $d.style.display = "none";
            if (mg) {
                var a = !1,
                    c = !1;
                if (null !== Gc) {
                    var d = Te(Gc);
                    ae(O.visibleGroups, d) ||
                        ((O.visibleGroups = [].slice.call(d)),
                        (c = !0),
                        w(b.events.onVisibleGroupsChanged, O.visibleGroups));
                }
                null !== Hc &&
                    ((d = Te(Hc, !0)),
                    ae(O.visibleEventTypes, d) ||
                        ((O.visibleEventTypes = [].slice.call(d)),
                        (c = !0),
                        w(b.events.onVisibleEventTypesChanged, O.visibleEventTypes)));
                null !== jd &&
                    ((d = Te(jd, !0)),
                    1 <= d.length &&
                        !ae(b.visibleDays, d) &&
                        ((b.visibleDays = [].slice.call(d)), (od = []), (c = a = !0)));
                null !== id &&
                    ((d = Te(id, !0)), ae(b.workingDays, d) || ((b.workingDays = [].slice.call(d)), (c = a = !0)));
                null !== hd && ((d = Te(hd, !0)), ae(b.weekendDays, d) || ((b.weekendDays = d), (c = a = !0)));
                c && (a && w(b.events.onOptionsUpdated, b), (lb = !1), F(v, !0, !0));
            }
            ic();
            E.body.removeEventListener("click", Hb);
        }
    }
    function Pe() {
        return null !== tb && tb.className.indexOf("side-menu-open") > B.notFound;
    }
    function Te(a, b) {
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
    function Se(a, c, d, e, f) {
        var k = h("div", "text-header");
        a.appendChild(k);
        y(k, d + ":");
        var m = h("div", "ib-arrow-up-full");
        k.appendChild(m);
        if (b.sideMenu.showSelectAllNoneButtons) {
            var A = h("div", "right-divider-line");
            k.appendChild(A);
            var g = t(k, "ib-square", b.selectAllText, function (a) {
                    gj(a, f, !0);
                }),
                n = t(k, "ib-square-hollow", b.selectNoneText, function (a) {
                    gj(a, f, !1);
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
    function gj(a, b, d) {
        C(a);
        a = b.length;
        for (var c = !1, f = 0; f < a; f++) b[f].checked !== d && ((b[f].checked = d), (c = !0));
        mg = c;
    }
    function Re(a, b) {
        return b && null === a ? !1 : null === a || "none" !== a.style.display;
    }
    function Ic() {
        mg = !0;
    }
    function ol() {
        Ph();
        z.innerHTML = n.empty;
        var a = X(v),
            c = h("div", "day-name");
        y(c, b.dayNames[a]);
        z.appendChild(c);
        t(c, "ib-arrow-right-full", b.nextDayTooltipText, Gl);
        t(c, "ib-arrow-left-full", b.previousDayTooltipText, Hl);
        c.appendChild(h("div", "right-divider-line"));
        b.manualEditingEnabled &&
            t(c, "ib-plus", b.addEventTooltipText, function () {
                P(null, new Date(v));
            });
        t(c, "ib-pin", b.todayTooltipText, Il);
        a = h("div", "day-date");
        jc(a, v, !1, !0, !1);
        z.appendChild(a);
        Jl();
        Qh();
    }
    function Jl() {
        var a = h("div", "events custom-scroll-bars"),
            c = [];
        z.appendChild(a);
        Rh(v, c);
        c = ub(c);
        var d = c.length;
        if (0 < d)
            for (var e = 0; e < d; e++) {
                var f = a,
                    k = c[e],
                    m = h("div", "event");
                f.appendChild(m);
                be(m, k, Ue(k, v));
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
                        : (Ve(A, k.from, k.to), y(g, Ob(k.from, k.to)));
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
    function Il(a) {
        C(a);
        F();
    }
    function Gl(a) {
        C(a);
        a = new Date(v);
        a.setDate(a.getDate() + 1);
        a.getFullYear() <= b.maximumYear && F(a);
    }
    function Hl(a) {
        C(a);
        a = new Date(v);
        a.setDate(a.getDate() - 1);
        a.getFullYear() >= b.minimumYear && F(a);
    }
    function El(a) {
        We = a;
        lc(We, "hidden");
        Lc = h("input", "calendar-date-picker-input");
        Lc.readOnly = !0;
        Lc.placeholder = b.selectDatePlaceholderText;
        r = !0;
        var c = h("div", "calendar-date-picker");
        a.insertAdjacentElement("afterend", c);
        a.remove(a);
        c.appendChild(We);
        c.appendChild(Lc);
        z = h("div", "calendar calendar-hidden");
        z.id = za;
        c.appendChild(z);
        Lc.onclick = Kl;
        E.addEventListener("click", qd);
        hj();
        c = We.value.split("/");
        a = null;
        3 === c.length &&
            ((c = new Date(parseInt(c[2]), parseInt(c[1]) - 1, parseInt(c[0]))),
            c instanceof Date && !isNaN(c) && (a = c));
        null === a ? (a = new Date()) : Sh(a);
        a.setHours(0, 0, 0, 0);
        Mc = a;
    }
    function hj() {
        r &&
            ((b.exportEventsEnabled = !1),
            (b.manualEditingEnabled = !1),
            (b.fullScreenModeEnabled = !1),
            (b.eventNotificationsEnabled = !1),
            (b.views.fullMonth.showPreviousNextMonthNames = !1),
            (b.views.fullMonth.showExtraTitleBarButtons = !1),
            (b.holidays = []));
    }
    function Kl(a) {
        C(a);
        ng("calendar calendar-shown", "calendar calendar-hidden");
        if (cb) (z.className = "calendar calendar-hidden"), Ga(), w(b.events.onDatePickerClosed, za);
        else {
            z.className = "calendar calendar-shown";
            F(new Date(Mc), !lb);
            w(b.events.onDatePickerOpened, za);
            a = ij;
            null === a && (a = ij = z.offsetTop);
            z.style.top = a + "px";
            var c = Xe(z),
                d = jj();
            c.top - d.top + z.offsetHeight > Z.innerHeight
                ? ((c = bd(z, "border-width")),
                  (d = bd(Lc, "border-width")),
                  (a -= z.offsetHeight + Lc.clientHeight + 4 * c + 2 * d),
                  (z.className += " calendar-shadow-top"),
                  (z.style.top = a + "px"))
                : (z.className += " calendar-shadow-bottom");
        }
        cb = !cb;
    }
    function qd() {
        cb && ((z.className = "calendar calendar-hidden"), (cb = !1), Ga(), w(b.events.onDatePickerClosed, za));
    }
    function Sh(a) {
        Lc.value = Nh(b.views.datePicker.selectedDateFormat, a);
        We.value = a.getFullYear() + "-" + J(a.getMonth() + 1) + "-" + J(a.getDate());
    }
    function kj(a) {
        var c = !0;
        null !== b.views.datePicker.minimumDate && (c = Ye(b.views.datePicker.minimumDate, a));
        c && null !== b.views.datePicker.maximumDate && (c = Ye(a, b.views.datePicker.maximumDate));
        return c;
    }
    function Ih(a) {
        var c = (a = p(a) ? a : !0) ? E.body.addEventListener : E.body.removeEventListener,
            d = a ? E.addEventListener : E.removeEventListener;
        a = a ? Z.addEventListener : Z.removeEventListener;
        c("click", Ll);
        c("contextmenu", Th);
        c("mousemove", Ml);
        c("mouseup", Uh);
        c("mouseleave", Nl);
        d("scroll", Th);
        a("resize", Th);
        a("resize", Vh);
        a("resize", Ol);
        a("blur", Pl);
        b.shortcutKeysEnabled && d("keydown", Ql);
    }
    function Ll(a) {
        Ga();
        fa(a) || mc();
    }
    function Pl() {
        Ga();
        ic();
        r && qd();
    }
    function Ol() {
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
    function Th() {
        Ga();
    }
    function Ga(a) {
        var b = !1;
        a = p(a) ? a : !0;
        og(Ia) && (b = !0);
        og(Y) && (b = !0);
        og(Oa) && (b = !0);
        og(nb) && (b = !0);
        pg() && (b = !0);
        ic();
        ng("calendar-context-menu");
        ng("years-drop-down");
        ng("years-drop-down-no-months");
        a && Ze();
        return b;
    }
    function Ql(a) {
        if (r)
            cb &&
                (a.keyCode === Q.escape
                    ? (a.preventDefault(), qd())
                    : fa(a) && a.keyCode === Q.left
                      ? (a.preventDefault(), qg())
                      : fa(a) && a.keyCode === Q.right
                        ? (a.preventDefault(), rg())
                        : a.keyCode === Q.left
                          ? (a.preventDefault(), $e())
                          : a.keyCode === Q.right
                            ? (a.preventDefault(), af())
                            : a.keyCode === Q.down && (a.preventDefault(), tg()));
        else if (Pe()) a.keyCode === Q.escape && Pe() && (a.preventDefault(), Hb());
        else {
            if (sd) {
                var c = lj();
                fa(a) && a.keyCode === Q.left && c
                    ? (a.preventDefault(), qg())
                    : fa(a) && a.keyCode === Q.right && c
                      ? (a.preventDefault(), rg())
                      : a.keyCode === Q.escape
                        ? !mj() && c && b.useEscapeKeyToExitFullScreenMode && Wa()
                        : a.keyCode === Q.left && c
                          ? nj(a)
                          : a.keyCode === Q.right && c
                            ? oj(a)
                            : a.keyCode === Q.down && c
                              ? pj(a)
                              : a.keyCode === Q.f5 && c && La(!1, !0);
            } else a.keyCode === Q.escape && mj();
            if (fa(a) && a.shiftKey && a.keyCode === Q.a)
                a.preventDefault(), b.manualEditingEnabled && P(null, new Date());
            else if (fa(a) && a.shiftKey && a.keyCode === Q.c) a.preventDefault(), qj();
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
            else if (fa(a) && a.shiftKey && a.keyCode === Q.g) a.preventDefault(), b.configurationDialogEnabled && dj();
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
                if ((a.preventDefault(), db(ra))) for (a = sg.length, c = 0; c < a; c++) sg[c]();
            } else
                fa(a) && a.shiftKey && a.keyCode === Q.o
                    ? (a.preventDefault(), md() && Kc())
                    : fa(a) && a.shiftKey && a.keyCode === Q.v
                      ? (a.preventDefault(), (a = ja.length), db(W) && 0 < a && Wh(L, Pb))
                      : fa(a) && a.shiftKey && a.keyCode === Q.x
                        ? (a.preventDefault(), qj(!0))
                        : fa(a) && a.shiftKey && a.keyCode === Q.f11 && (a.preventDefault(), Wa());
        }
    }
    function nj(a) {
        p(a) && a.preventDefault();
        a = Ma();
        null === a ? $e() : a === W ? rj() : a === da ? sj() : a === Da ? tj() : a === ia && uj();
    }
    function oj(a) {
        p(a) && a.preventDefault();
        a = Ma();
        null === a ? af() : a === W ? vj() : a === da ? wj() : a === Da ? xj() : a === ia && yj();
    }
    function pj(a) {
        p(a) && a.preventDefault();
        a = Ma();
        null === a ? tg() : a === W ? zj() : a === da ? Aj() : a === Da ? Bj() : a === ia && Cj();
    }
    function fa(a) {
        return a.ctrlKey || a.metaKey;
    }
    function mj() {
        var a = Ga(!1);
        a || (a = Ze());
        !a && 0 < eb.length && ((a = eb[eb.length - 1]), Xh(a) && (eb.pop(), a(!1)), (a = !0));
        a || (a = kd());
        a || (a = mc());
        !a && 0 < ja.length && (ge(), (ja = []), (Pb = !1), (a = !0));
        !a && 0 < vb.length && (Dj(), (a = !0));
        return a;
    }
    function ql() {
        if (!r && b.views.fullDay.enabled) {
            var a = null !== W;
            a && (W.innerHTML = n.empty);
            a || ((W = h("div", "full-day-view")), (W.id = ec()), z.appendChild(W));
            a = h("div", "title-bar");
            W.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Wa);
            bf = h("div", "title");
            a.appendChild(bf);
            t(a, "ib-close", b.closeTooltipText, Rl);
            a.appendChild(h("div", "right-divider-line"));
            b.views.fullDay.showExtraTitleBarButtons &&
                b.fullScreenModeEnabled &&
                ((Yh = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Wa)),
                a.appendChild(h("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextDayTooltipText, vj);
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
            t(a, "ib-arrow-left-full", b.previousDayTooltipText, rj);
            b.views.fullDay.showExtraTitleBarButtons &&
                ((Ej = t(a, "ib-pin", b.todayTooltipText, zj)),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        ee();
                    }),
                a.appendChild(h("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    La(!0, !0);
                }),
                u.enabled && (Fj = t(a, "ib-search", b.searchTooltipText, fe)));
            wb = h("div", "contents custom-scroll-bars");
            W.appendChild(wb);
            wb.oncontextmenu = function (a) {
                var b = ug(a, wa);
                cf = J(b[0]) + ":" + J(b[1]);
                Gj(a, L, gc);
            };
            Nc = h("div", "content-events-all-day");
            wb.appendChild(Nc);
            a = h("div", "all-day-text");
            y(a, b.allDayText);
            Nc.appendChild(a);
            wa = h("div", "contents-events");
            wa.ondblclick = Sl;
            wb.appendChild(wa);
            he = h("div", "working-hours");
            wb.appendChild(he);
            b.manualEditingEnabled &&
                b.dragAndDropForEventsEnabled &&
                ((wa.ondragover = C),
                (wa.ondragenter = C),
                (wa.ondragleave = C),
                (wa.ondrop = function (a) {
                    Hj(a, L, wa);
                }));
            Ij(wa, b.views.fullDay.minutesBetweenSections);
            df = h("div", "time-arrow");
            wa.appendChild(df);
            df.appendChild(h("div", "arrow-left"));
            df.appendChild(h("div", "line"));
        }
    }
    function nc(a, b, d, e, f) {
        for (var c = new Date(a.from), m = Oc(a.repeatEveryExcludeDays); c < d; ) {
            e(c, f);
            var h = !(!p(a.repeatEnds) || Ye(c, a.repeatEnds));
            if (m.indexOf(c.getDay()) === B.notFound && !h && U(c, d)) {
                b.push(a);
                break;
            }
        }
    }
    function Tl(a, c) {
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
                Jj(a, m);
            };
            a.isAllDay
                ? Nc.appendChild(m)
                : (b.manualEditingEnabled &&
                      b.dragAndDropForEventsEnabled &&
                      (U(a.from, a.to) && (m.className += " resizable"),
                      (m.ondragstart = function (b) {
                          var d = Xe(m);
                          vg = m;
                          wg = m.offsetTop;
                          Qb = a;
                          xg = d.top - b.pageY;
                          yg = c;
                      }),
                      (m.ondragEnd = Uh),
                      m.setAttribute("draggable", !0)),
                  wa.appendChild(m));
            m.oncontextmenu = function (b) {
                ef(b, a, f);
            };
            ff(m, a);
            be(m, a, Ue(a, c));
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
                    : (Ve(e, a.from, a.to), y(k, Ob(a.from, a.to))),
                k.innerHTML === n.empty && m.removeChild(k),
                b.views.fullDay.showEventUrls &&
                    Ca(a.url) &&
                    ((e = h("div", "url-text")),
                    y(e, zg(a.url)),
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
                gf(b, a);
            });
            a.isAllDay || (d = Kj(wb, wa, c, m, a));
            gc.push(a);
            a.isAllDay || Ag.push({ eventDetails: a, eventElement: m, height: m.offsetHeight });
        }
        return d;
    }
    function Ua(a, c) {
        a = p(a) ? new Date(a) : new Date();
        c = p(c) ? c : !1;
        var d = new Date(),
            e = X(d);
        e = b.visibleDays.indexOf(e) > B.notFound;
        bf.innerHTML = n.empty;
        L = new Date(a);
        gc = [];
        Ag = [];
        Nc.style.display = "block";
        he.style.display = "none";
        U(a, d) && !e && Lj();
        Va(Ej, e);
        Zh(wb, "event");
        kd();
        w(b.events.onFullDayTitleRender, L) || jc(bf, L, !1, !0, !0);
        hf(W);
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
                    q = G(g.title, n.empty);
                Mj(g, d) && q !== n.empty && k.indexOf(q.toLowerCase()) && (f.push(q), k.push(q.toLowerCase()));
            }
            0 < f.length && (e = f.join(", "));
        }
        d = e;
        f = [];
        null !== d && aa(bf, " (" + d + ")", "light-title-bar-text");
        Rh(a, f);
        f = ub(f);
        k = f.length;
        e = null;
        d = Nj(L, W, df, wa, b.views.fullDay.showTimelineArrow);
        for (m = 0; m < k; m++) (h = Tl(f[m], a)), null === e && (e = h);
        c &&
            ((a = W),
            (c = b.views.fullDay.showTimelineArrow),
            dc(L) && db(a) && c
                ? ((a = Nc.offsetHeight), (a = 1 >= a ? 4 * b.spacing : a), (wb.scrollTop = d - a))
                : (wb.scrollTop = e - wb.offsetHeight / 2));
        1 >= Nc.offsetHeight && (Nc.style.display = "none");
        Va(Fj, 0 < gc.length);
        Oj(wa);
    }
    function Rh(a, b) {
        xb(function (c) {
            for (var d = Pc(c.from, c.to) + 1, f = new Date(c.from), k = 0; k < d; k++) {
                if (U(f, a)) {
                    b.push(c);
                    break;
                }
                Xa(f);
            }
            d = H(c.repeatEvery);
            d > x.never &&
                (d === x.everyDay
                    ? nc(c, b, a, Xa, 1)
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
                                      ? nc(c, b, a, Xa, f)
                                      : d === M.weekly
                                        ? nc(c, b, a, Rb, f)
                                        : d === M.monthly
                                          ? nc(c, b, a, ke, f)
                                          : d === M.yearly && nc(c, b, a, wd, f))));
        });
    }
    function Rl() {
        xd(W);
        L = null;
        gc = [];
        Ag = [];
    }
    function Sl(a) {
        b.manualEditingEnabled &&
            ((a = ug(a, wa)),
            b.useTemplateWhenAddingNewEvent
                ? ((a = J(a[0]) + ":" + J(a[1])), (a = td(L, L, a, a)), P(a), ud())
                : P(null, L, a));
    }
    function rj() {
        Bg(L);
        if (7 > b.visibleDays.length) for (var a = X(L); b.visibleDays.indexOf(a) === B.notFound; ) Bg(L), (a = X(L));
        Ua(L, !0);
    }
    function vj() {
        Lj(!0);
    }
    function zj() {
        L = new Date();
        Ua(L, !0);
    }
    function Lj(a) {
        a = p(a) ? a : !1;
        Xa(L);
        if (7 > b.visibleDays.length) for (var c = X(L); b.visibleDays.indexOf(c) === B.notFound; ) Xa(L), (c = X(L));
        a && Ua(L, !0);
    }
    function rl() {
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
                (($h = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Wa)),
                a.appendChild(h("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextWeekTooltipText, wj);
            b.manualEditingEnabled &&
                b.views.fullWeek.showExtraTitleBarButtons &&
                t(a, "ib-plus", b.addEventTooltipText, function () {
                    P(null, new Date(Pj));
                });
            !r &&
                md() &&
                (t(a, "ib-hamburger", b.showMenuTooltipText, Kc), a.appendChild(h("div", "left-divider-line")));
            t(a, "ib-arrow-left-full", b.previousWeekTooltipText, sj);
            b.views.fullWeek.showExtraTitleBarButtons &&
                (t(a, "ib-pin", b.thisWeekTooltipText, Aj),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        ee();
                    }),
                a.appendChild(h("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    La(!0, !0);
                }),
                u.enabled && (Qj = t(a, "ib-search", b.searchTooltipText, fe)));
            zd = h("div", "contents custom-scroll-bars");
            da.appendChild(zd);
            Ul();
        }
    }
    function Ul() {
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
        Ij(me, b.views.fullWeek.minutesBetweenSections);
        jf = h("div", "row-cells days");
        me.appendChild(jf);
    }
    function ai(a, c, d) {
        for (; a < c; a++) b.visibleDays.indexOf(a) > B.notFound && Vl(d, a);
    }
    function Vl(a, c) {
        var d = h("div", Cg()),
            e = h("div", Cg()),
            f = new Date(a[c]);
        d.id = "calendar-week-day-" + c;
        e.id = "calendar-week-all-day-" + c;
        jf.appendChild(d);
        le.appendChild(e);
        d.ondblclick = function (a) {
            b.manualEditingEnabled &&
                ((a = ug(a, d)),
                b.useTemplateWhenAddingNewEvent
                    ? ((a = J(a[0]) + ":" + J(a[1])), (a = td(f, f, a, a)), P(a), ud())
                    : P(null, f, a));
        };
        Dg(e, f.getFullYear(), f.getMonth(), f.getDate());
        Wl(d, c);
        dc(f) && Xl(d, f);
        b.manualEditingEnabled &&
            b.dragAndDropForEventsEnabled &&
            ((d.ondragover = C),
            (d.ondragenter = C),
            (d.ondragleave = C),
            (d.ondrop = function (a) {
                Hj(a, f, me);
            }));
        d.oncontextmenu = function (a) {
            var b = ug(a, d);
            cf = J(b[0]) + ":" + J(b[1]);
            Gj(a, f, kf[c]);
        };
    }
    function Xl(a, c) {
        ne = h("div", "time-arrow");
        a.appendChild(ne);
        ne.appendChild(h("div", "arrow-left"));
        ne.appendChild(h("div", "line"));
        Eg = Nj(c, da, ne, a, b.views.fullWeek.showTimelineArrow);
    }
    function Wl(a, c) {
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
    function Rj(a, c) {
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
            var g = !(!p(a.repeatEnds) || Ye(c, a.repeatEnds));
            if (m.indexOf(c.getDay()) === B.notFound && !g && c >= b && c <= d) {
                g = Aa("calendar-week-day-" + X(c));
                var n = Aa("calendar-week-all-day-" + X(c));
                null !== g && (Sj(g, n, a, c), (h = !0));
            }
        }
        return h;
    }
    function Sj(a, c, d, e) {
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
                Jj(a, g);
            };
            g.oncontextmenu = function (a) {
                ef(a, d, A);
            };
            d.isAllDay
                ? (c.appendChild(g), bi(g, d, m, c), (ci = !0))
                : b.manualEditingEnabled &&
                  b.dragAndDropForEventsEnabled &&
                  !lf(d) &&
                  (U(d.from, d.to) && !d.isAllDay && (g.className += " resizable"),
                  (g.ondragstart = function (a) {
                      var b = Xe(g);
                      vg = g;
                      wg = g.offsetTop;
                      Qb = d;
                      xg = b.top - a.pageY;
                      yg = m;
                  }),
                  (g.ondragEnd = Uh),
                  g.setAttribute("draggable", !0));
            ff(g, d);
            be(g, d, Ue(d, m));
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
                    : (Ve(c, d.from, d.to), y(k, Ob(d.from, d.to))),
                k.innerHTML === n.empty && g.removeChild(k),
                b.views.fullWeek.showEventUrls &&
                    Ca(d.url) &&
                    ((c = h("div", "url-text")),
                    y(c, zg(d.url)),
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
                gf(a, d);
            });
            d.isAllDay || Kj(a, a, m, g, d, !0);
            d.isAllDay || di.push({ eventDetails: d, eventElement: g, height: g.offsetHeight });
            kf.hasOwnProperty(f) || (kf[f] = []);
            mf = 0 === mf ? g.offsetTop : la.min(mf, g.offsetTop);
            kf[f].push(d);
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
        kf = {};
        ci = !1;
        Eg = null;
        mf = 0;
        Ad.style.display = "none";
        di = [];
        Pj = a;
        hf(da);
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
            b.reverseOrderDaysOfWeek ? Rj(e, a) : Rj(a, e);
        }
        Jh(yd, !1);
        d = b.dayHeaderNames.length;
        f = {};
        for (k = new Date(a); k < e; ) (f[X(k)] = new Date(k)), k.setDate(k.getDate() + 1);
        jf.innerHTML = n.empty;
        le.innerHTML = n.empty;
        b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday
            ? (ai(b.startOfWeekDay, d, f), ai(0, b.startOfWeekDay, f))
            : ai(0, d, f);
        b.reverseOrderDaysOfWeek && ld(jf);
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
        d = ub(Bd());
        f = d.length;
        for (k = 0; k < f; k++) {
            m = d[k];
            for (var h = Pc(m.from, m.to) + 1, g = new Date(m.from), q = !1, l = 0; l < h; l++) {
                if (g >= a && g <= e) {
                    var r = Aa("calendar-week-day-" + X(g)),
                        t = Aa("calendar-week-all-day-" + X(g));
                    null !== r && Sj(r, t, m, g) && (q = !0);
                }
                Xa(g);
            }
            q && hc.push(m);
            g = H(m.repeatEvery);
            h = !1;
            g > x.never &&
                (g === x.everyDay
                    ? (h = oc(m, a, e, Xa, 1))
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
                                      ? (h = oc(m, a, e, Xa, l))
                                      : g === M.weekly
                                        ? (h = oc(m, a, e, Rb, l))
                                        : g === M.monthly
                                          ? (h = oc(m, a, e, ke, l))
                                          : g === M.yearly && (h = oc(m, a, e, wd, l)))));
            h && !q && hc.push(m);
        }
        a = b.dayHeaderNames.length;
        for (e = 0; e < a; e++) (d = Aa("calendar-week-day-" + e)), null !== d && Oj(d);
        a = 0;
        if (ci) {
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
        c && (null !== Eg ? ((a = 0 >= a ? 4 * b.spacing : a), (zd.scrollTop = Eg - a)) : (zd.scrollTop = mf));
        Va(Qj, 0 < hc.length);
    }
    function sj() {
        Sb.setDate(Sb.getDate() - 7);
        zc(Sb, !0);
    }
    function wj() {
        Rb(Sb);
        zc(Sb, !0);
    }
    function Aj() {
        Sb = new Date();
        zc(Sb, !0);
    }
    function sl() {
        Fg = Gg = null;
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
        t(S, "ib-arrow-left-full", b.previousMonthTooltipText, $e);
        b.views.fullMonth.addYearButtons && t(S, "ib-rewind", b.previousYearTooltipText, qg);
        (r || b.views.fullMonth.showExtraTitleBarButtons) && t(S, "ib-pin", b.currentMonthTooltipText, tg);
        b.views.fullMonth.showExtraTitleBarButtons &&
            (b.jumpToDateEnabled &&
                t(S, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                    ee();
                }),
            S.appendChild(h("div", "left-divider-line-events")),
            t(S, "ib-refresh", b.refreshTooltipText, function () {
                La(!0, !0);
            }),
            u.enabled && (Fg = t(S, "ib-search", b.searchTooltipText, fe)));
        r && (t(S, "ib-close", b.closeTooltipText, qd), S.appendChild(h("div", "right-divider-line")));
        b.views.fullMonth.showExtraTitleBarButtons &&
            b.fullScreenModeEnabled &&
            ((Gg = t(S, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Wa)),
            S.appendChild(h("div", "right-divider-line-full-screen-mode")));
        t(S, "ib-arrow-right-full", b.nextMonthTooltipText, af);
        b.views.fullMonth.addYearButtons && t(S, "ib-forward", b.nextYearTooltipText, rg);
        b.views.fullMonth.showExtraTitleBarButtons &&
            b.manualEditingEnabled &&
            t(S, "ib-plus", b.addEventTooltipText, function () {
                Tj(v, new Date()) ? P(null) : P(null, new Date(v.getFullYear(), v.getMonth(), 1));
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
                    var a = lg(v) ? null : v;
                    Jb(a, !0);
                }),
            b.views.allEvents.enabled &&
                t(S, "ib-eye", b.viewAllEventsTooltipText, function () {
                    Oh(!0);
                }),
            b.views.fullYear.enabled &&
                t(S, "ib-expand", b.viewFullYearTooltipText, function () {
                    Ac(v.getFullYear(), !0);
                }),
            b.views.fullWeek.enabled &&
                t(S, "ib-hamburger-side", b.viewFullWeekTooltipText, function () {
                    var a = lg(v) ? null : v;
                    zc(a, !0);
                }),
            b.views.fullDay.enabled &&
                t(S, "ib-hourglass", b.viewFullDayTooltipText, function () {
                    var a = lg(v) ? null : v;
                    Ua(a, !0);
                }));
        a = h("div", "title-container");
        S.appendChild(a);
        Yl(a);
        Zl(a);
    }
    function qb() {
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
            Uj());
    }
    function Uj() {
        if (!r && null !== mb && !w(b.events.onFullMonthPinUpRender, mb, v)) {
            var a = new Date();
            if (null === ei || !U(ei, a)) {
                mb.innerHTML = n.empty;
                ei = a;
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
                if (b.showDayNumberOrdinals && ((c = Hg(a.getDate())), p(c))) {
                    var k = h("sup");
                    k.innerText = c;
                    d.appendChild(k);
                }
                y(e, b.monthNames[a.getMonth()]);
                y(f, a.getFullYear());
            }
        }
    }
    function aj(a, c) {
        var d = p(a);
        a = d ? a : Ib;
        c = p(c) ? c : "calendar-day-";
        if (!d && 0 < nf.length) {
            for (var e = nf.length, f = 0; f < e; f++) a.removeChild(nf[f]);
            nf = [];
        }
        for (e = 0; 6 > e; e++) {
            f = h("div", "row-cells days");
            a.appendChild(f);
            d || nf.push(f);
            for (var k = 0; 7 > k; k++) {
                var m = k;
                if (b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday)
                    (m = b.startOfWeekDay + k), 7 <= m && (m -= 7);
                if (b.visibleDays.indexOf(m) > B.notFound) {
                    m = 7 * e + (k + 1);
                    var g = h("div", Cg(b.views.fullMonth.allowEventScrolling));
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
    function Cg(a) {
        a = p(a) ? a : !1;
        var c = "cell cell-" + b.visibleDays.length;
        a && (c += " custom-scroll-bars");
        return c;
    }
    function Yl(a) {
        oe = h("span", "year-dropdown-button");
        oe.ondblclick = C;
        oe.onclick = $l;
        a.appendChild(oe);
        Mh = h("span");
        oe.appendChild(Mh);
        b.views.fullMonth.showYearDropDownButtonIcon &&
            ((Ig = h("span", "ib-arrow-down-full-medium")), oe.appendChild(Ig));
    }
    function Zl(a) {
        var c = new Date(b.minimumYear, 1, 1),
            d = null;
        Tb = h(
            "div",
            b.views.fullMonth.showMonthButtonsInYearDropDownMenu ? "years-drop-down" : "years-drop-down-no-months"
        );
        a.appendChild(Tb);
        if (b.views.fullMonth.showMonthButtonsInYearDropDownMenu)
            for (a = 0; 12 > a; a++) 0 === a % 3 && ((d = h("div", "months")), Tb.appendChild(d)), am(d, a);
        of = h("div", "contents custom-scroll-bars");
        for (Tb.appendChild(of); !(bm(c.getFullYear()), wd(c), c.getFullYear() > b.maximumYear); );
    }
    function am(a, c) {
        var d = h("div", "month-name"),
            e = b.monthNamesAbbreviated[c];
        d.onclick = function (a) {
            C(a);
            v.getMonth() !== c && (v.setMonth(c), w(b.events.onSetDate, v), F(v), pg(), qb());
        };
        y(d, e);
        a.appendChild(d);
        Rc[c.toString()] = d;
    }
    function bm(a) {
        var c = h("div");
        c.className = "year";
        c.innerText = a.toString();
        c.id = "year-selected-" + a.toString();
        of.appendChild(c);
        c.ondblclick = C;
        c.onclick = function (c) {
            C(c);
            v.getFullYear() !== a && (v.setFullYear(a), w(b.events.onSetDate, v), F(v), pg(), qb());
        };
    }
    function cm() {
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
    function $l(a) {
        C(a);
        if ("block" !== Tb.style.display) {
            Ga();
            Tb.style.display = "block";
            b.views.fullMonth.showYearDropDownButtonIcon && (Ig.className = "ib-arrow-up-full-medium");
            for (var c in Rc) Rc.hasOwnProperty(c.toString()) && (Rc[c.toString()].className = "month-name");
            a = v.getMonth().toString();
            c = new Date();
            v.getFullYear() === c.getFullYear() &&
                ((c = c.getMonth().toString()), Rc.hasOwnProperty(c) && (Rc[c].className = "month-name-current-month"));
            Rc.hasOwnProperty(a) && (Rc[a].className = "month-name-selected");
            a = cm();
            of.scrollTop = null !== a ? a.offsetTop - of.offsetTop - b.spacing : 0;
        } else pg();
    }
    function pg() {
        var a = !1;
        Jg() &&
            (b.views.fullMonth.showYearDropDownButtonIcon && (Ig.className = "ib-arrow-down-full-medium"),
            (Tb.style.display = "none"),
            (a = !0));
        return a;
    }
    function Jg() {
        return null !== Tb && "block" === Tb.style.display;
    }
    function Kh(a, c, d, e, f, k) {
        c = Aa("calendar-day-" + c);
        if (null !== c) {
            var m = new Date(),
                g = a === m.getDate() && e === m.getFullYear() && d === m.getMonth();
            m = h("span");
            var q = new Date(e, d, a);
            f = f ? " day-muted" : n.empty;
            var l = !0;
            k = p(k) ? k : !1;
            c.innerHTML = n.empty;
            c.className = c.className
                .replace(" cell-today", n.empty)
                .replace(" cell-selected", n.empty)
                .replace(" cell-no-click", n.empty);
            r && g && (c.className += " cell-today");
            r && !g && null !== Mc && U(q, Mc) && (c.className += " cell-selected");
            r
                ? ((l = kj(q)), l || ((c.className += " cell-no-click"), (m.className = "no-click")))
                : (m.className = n.empty);
            m.className += f;
            m.className += g && !r ? " today" : n.empty;
            m.innerText = b.views.fullMonth.padDayNumbers ? J(a) : a;
            1 !== a || r || (m.className += " first-day");
            0 <= b.weekendDays.indexOf(q.getDay()) &&
                c.className.indexOf("weekend-day") === B.notFound &&
                (c.className += " weekend-day");
            0 <= b.workingDays.indexOf(X(q)) &&
                c.className.indexOf("working-day") === B.notFound &&
                (c.className += " working-day");
            c.oncontextmenu = function (a) {
                Kg(a, q);
            };
            if (b.showDayNumberOrdinals && ((g = Hg(a)), p(g))) {
                var t = h("sup");
                t.innerText = g;
                m.appendChild(t);
            }
            c.appendChild(m);
            c.appendChild(h("span", "blank"));
            b.views.fullDay.enabled &&
                ((m = h("div", "ib-arrow-expand-left-right-icon")),
                c.appendChild(m),
                Ra(m, b.expandDayTooltipText),
                (m.onclick = function () {
                    Ua(q, !0);
                }));
            k &&
                b.views.fullMonth.showPreviousNextMonthNames &&
                aa(
                    c,
                    b.monthNames[d],
                    "month-name" + f,
                    function () {
                        1 === a ? af() : $e();
                    },
                    !0,
                    !0
                );
            dm(q, f, c);
            b.manualEditingEnabled &&
                ((c.ondblclick = function () {
                    if (b.useTemplateWhenAddingNewEvent) {
                        var a = td(q, q);
                        P(a);
                        ud();
                    } else P(null, q);
                }),
                Dg(c, e, d, a));
            r &&
                (c.onclick = l
                    ? function (a) {
                          C(a);
                          Jg()
                              ? Ga()
                              : ((a = new Date(q)),
                                a.setHours(0, 0, 0, 0),
                                qd(),
                                Sh(q),
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
                null !== d && (Zh(d, "event"), Zh(d, "plus-x-events"));
            }
        Ph();
        pe = !1;
        ed = [];
        Cd = {};
        a = ub(Bd());
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d],
                f = e;
            fi(f.from, f);
            if (
                f.from.getDate() !== f.to.getDate() ||
                f.from.getMonth() !== f.to.getMonth() ||
                f.from.getFullYear() !== f.to.getFullYear()
            ) {
                var k = Pc(f.from, f.to);
                if (0 < k)
                    for (var m = new Date(f.from), h = 0; h < k; h++)
                        Xa(m), gi(vd(m), f.id), null !== hi(m) && fi(m, f);
            }
            ie(e) && ed.push(e);
            f = H(e.repeatEvery);
            f > x.never &&
                (f === x.everyDay
                    ? pc(e, Xa, 1)
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
                                      ? pc(e, Xa, k)
                                      : f === M.weekly
                                        ? pc(e, Rb, k)
                                        : f === M.monthly
                                          ? pc(e, ke, k)
                                          : f === M.yearly && pc(e, wd, k))));
        }
        Vj !== pe && ((Vj = pe), w(b.events.onBusyStateChange, pe));
        null !== Fg && Va(Fg, 0 < ed.length);
        Qh();
    }
    function pc(a, c, d) {
        for (var e = new Date(a.from), f = Oc(a.repeatEveryExcludeDays), k = new Date(b.maximumYear, 11, 31); e < k; ) {
            c(e, d);
            var m = !(!p(a.repeatEnds) || Ye(e, a.repeatEnds));
            f.indexOf(e.getDay()) !== B.notFound || m || (gi(vd(e), a.id), e < Lh && null !== hi(e) && fi(e, a));
        }
    }
    function fi(a, c) {
        var d = hi(a),
            e = Oc(c.seriesIgnoreDates),
            f = vd(a),
            k = new Date(a);
        if (ie(c) && e.indexOf(f) === B.notFound && (gi(f, c.id), null !== d && (em(a, c), !r)))
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
                bi(e, c, a, d);
                ff(e, c);
                be(e, c, Ue(c, a), b.views.fullMonth.applyCssToEventsNotInCurrentMonth);
                ce(e, c, k);
                U(c.from, a) && (e.id = "day-" + c.id);
                e.onmousemove = function (a) {
                    null !== Dd && Dd.id === c.id ? C(a) : ii(a, c);
                };
                e.oncontextmenu = function (a) {
                    ef(a, c, f);
                };
                e.addEventListener("click", function (a) {
                    gf(a, c);
                });
            } else fm(d, a);
    }
    function fm(a, c) {
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
                      Ua(e, !0);
                  })
                : (d.className += n.space + "prevent-pointer-events");
        } else
            (a = parseInt(d.getAttribute("events")) + 1),
                d.setAttribute("events", a.toString()),
                y(d, "+" + a + n.space + b.moreText);
    }
    function hi(a) {
        var b = new Date(v.getFullYear(), v.getMonth(), 1);
        var d = new Date(v);
        var e = new Date(v),
            f = null,
            k = 0;
        b = X(b);
        d.setMonth(d.getMonth() + 1);
        e.setMonth(e.getMonth() - 1);
        a.getMonth() === d.getMonth() && a.getFullYear() === d.getFullYear()
            ? ((d = b + ad(v.getFullYear(), v.getMonth())), (k = Oe(a.getDate() + d)))
            : a.getMonth() === e.getMonth() && a.getFullYear() === e.getFullYear()
              ? (k = Oe(b - Pc(a, v) + 1))
              : a.getMonth() === v.getMonth() &&
                a.getFullYear() === v.getFullYear() &&
                ((d = b), (k = Oe(a.getDate() + d)));
        0 < k && (f = Aa("calendar-day-" + k));
        return f;
    }
    function gi(a, b) {
        Cd.hasOwnProperty(a) || (Cd[a] = []);
        Cd[a].indexOf(b) === B.notFound && Cd[a].push(b);
    }
    function tl() {
        if (!r && b.views.fullYear.enabled) {
            var a = null !== Da;
            a && (Da.innerHTML = n.empty);
            a || ((Da = h("div", "full-year-view")), (Da.id = ec()), z.appendChild(Da));
            a = h("div", "title-bar");
            Da.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Wa);
            ji = h("div", "title");
            a.appendChild(ji);
            !r &&
                md() &&
                (t(a, "ib-hamburger", b.showMenuTooltipText, Kc), a.appendChild(h("div", "left-divider-line")));
            t(a, "ib-arrow-left-full", b.previousYearTooltipText, tj);
            b.views.fullYear.showExtraTitleBarButtons &&
                (t(a, "ib-pin", b.currentYearTooltipText, Bj),
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
                ((ki = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Wa)),
                a.appendChild(h("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextYearTooltipText, xj);
            b.views.fullYear.showExtraTitleBarButtons &&
                b.manualEditingEnabled &&
                t(a, "ib-plus", b.addEventTooltipText, function () {
                    P(null, new Date(sa, 0, 1));
                });
            qe = h("div", "contents custom-scroll-bars");
            Da.appendChild(qe);
        }
    }
    function gm(a) {
        var c = new Date(sa, a, 1),
            d = function () {
                U(v, c) || (F(c), qb());
                for (; 0 < vb.length; ) Dj(!1);
                pf();
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
        Jh(d);
        d = a + 1 + "-month-";
        f = new Date(sa, a, 1);
        f = Oe(0 === f.getDay() ? 7 : f.getDay());
        aj(e, d);
        1 < f && hm(f, d, a);
        f = im(f, d, a);
        k = f[0];
        jm(f[1], d, a);
        k && (Lg = e.offsetTop);
    }
    function hm(a, b, d) {
        d = new Date(sa, d, 1);
        d.setMonth(d.getMonth() - 1);
        var c = ad(d.getFullYear(), d.getMonth());
        for (--a; 0 < a; ) km(b, a, d, c), a--, c--;
    }
    function km(a, c, d, e) {
        a = Aa(a + c);
        if (null !== a) {
            var f = new Date(d.getFullYear(), d.getMonth(), e);
            a.className += " cell-muted";
            b.views.fullDay.enabled &&
                (a.onclick = function () {
                    Ua(f, !0);
                });
            a.oncontextmenu = function (a) {
                Kg(a, f);
            };
            li(a, f);
            Nb(a, f, null, null, b.views.fullYear.padDayNumbers);
        }
    }
    function im(a, b, d) {
        for (var c = 0, f = ad(sa, d), k = !1, m = 0; m < f; m++) (c = a + m), lm(b, d, m, c) && (k = !0);
        return [k, c];
    }
    function lm(a, c, d, e) {
        a = Aa(a + e);
        e = !1;
        if (null !== a) {
            var f = new Date(sa, c, d + 1);
            b.views.fullDay.enabled &&
                (a.onclick = function () {
                    Ua(f, !0);
                });
            a.oncontextmenu = function (a) {
                Kg(a, f);
            };
            e = li(a, f, !0);
            Nb(a, f, null, null, b.views.fullYear.padDayNumbers);
        }
        return e;
    }
    function jm(a, b, d) {
        if (42 > a) {
            d = new Date(sa, d, 1);
            var c = 1;
            d.setMonth(d.getMonth() + 1);
            for (a += 1; 43 > a; a++) mm(b, d, a, c), c++;
        }
    }
    function mm(a, c, d, e) {
        a = Aa(a + d);
        if (null !== a) {
            var f = new Date(c.getFullYear(), c.getMonth(), e);
            a.className += " cell-muted";
            b.views.fullDay.enabled &&
                (a.onclick = function () {
                    Ua(f, !0);
                });
            a.oncontextmenu = function (a) {
                Kg(a, f);
            };
            li(a, f);
            Nb(a, f, null, null, b.views.fullYear.padDayNumbers);
        }
    }
    function li(a, c, d) {
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
        Lg = 0;
        ji.innerText = sa;
        c = (a = c) ? 0 : qe.scrollTop;
        qe.innerHTML = n.empty;
        for (var d = 0; 12 > d; d++) gm(d);
        qe.scrollTop = a ? (0 < Lg ? Lg - 4 * b.spacing : 0) : c;
        hf(Da);
    }
    function tj() {
        sa > b.minimumYear && (--sa, Ac(sa, !0));
    }
    function xj() {
        sa < b.maximumYear && ((sa += 1), Ac(sa, !0));
    }
    function Bj() {
        sa = new Date().getFullYear();
        Ac(sa, !0);
    }
    function ul() {
        if (!r && b.views.allEvents.enabled) {
            var a = null !== ra;
            a && (ra.innerHTML = n.empty);
            a || ((ra = h("div", "all-events-view")), (ra.id = ec()), z.appendChild(ra));
            a = h("div", "title-bar");
            ra.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Wa);
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
                    ((mi = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Wa)),
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
                u.enabled && (Wj = t(a, "ib-search", b.searchTooltipText, fe)));
            Ed = h("div", "contents custom-scroll-bars");
            ra.appendChild(Ed);
        }
    }
    function nm(a) {
        if (ie(a)) {
            var c = om(a.from),
                d = h("div", "event");
            c.appendChild(d);
            d.oncontextmenu = function (b) {
                ef(b, a);
            };
            bi(d, a, a.from, c);
            ff(d, a);
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
                    : (Ve(c, a.from, a.to), y(e, Ob(a.from, a.to)));
                e.innerHTML === n.empty && d.removeChild(e);
                b.views.allEvents.showEventUrls &&
                    Ca(a.url) &&
                    ((c = h("div", "url-text")),
                    y(c, zg(a.url)),
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
                gf(b, a);
            });
            Lb.push(a);
        }
    }
    function om(a) {
        var c = "month-" + a.getMonth() + "-" + a.getFullYear(),
            d = Aa(c);
        if (null === d) {
            var e = new Date(a),
                f = function () {
                    Lb = [];
                    xd(ra);
                    F(e);
                    qb();
                },
                k = pm(a);
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
                    Xj(e, Tj);
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
            sg.push(f);
            d = h("div", "events");
            d.id = c;
            k.appendChild(d);
            O.visibleAllEventsMonths.hasOwnProperty(c) &&
                !O.visibleAllEventsMonths[c] &&
                ((d.style.display = "none"), (p.className = "ib-square-hollow"), Ra(p, b.restoreTooltipText));
            Dg(d, a.getFullYear(), a.getMonth(), a.getDate());
        }
        return d;
    }
    function pm(a) {
        var c = null;
        if (ni.indexOf(a.getFullYear()) === B.notFound) {
            ni.push(a.getFullYear());
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
    function Oh(a) {
        a = p(a) ? a : !1;
        hf(ra);
        Ed.innerHTML = n.empty;
        Lb = [];
        sg = [];
        ni = [];
        a && (Ed.scrollTop = 0);
        a = ub(Bd());
        for (var b = a.length, d = 0; d < b; d++) nm(a[d]);
        Va(Wj, 0 < Lb.length);
        0 === Lb.length &&
            qm(Ed, function () {
                P(null);
            });
    }
    function vl() {
        if (!r && b.views.timeline.enabled) {
            var a = null !== ia;
            a && (ia.innerHTML = n.empty);
            null === Ya && (Ya = b.views.timeline.defaultAxis);
            a || ((ia = h("div", "timeline-view")), (ia.id = ec()), z.appendChild(ia));
            a = h("div", "title-bar");
            ia.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Wa);
            Mg = h("div", "title");
            a.appendChild(Mg);
            t(a, "ib-close", b.closeTooltipText, function () {
                Bc = [];
                xd(ia);
            });
            a.appendChild(h("div", "right-divider-line"));
            b.views.timeline.showExtraTitleBarButtons &&
                b.fullScreenModeEnabled &&
                ((oi = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Wa)),
                a.appendChild(h("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextYearTooltipText, yj);
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
            t(a, "ib-arrow-left-full", b.previousYearTooltipText, uj);
            b.views.timeline.showExtraTitleBarButtons &&
                ((Yj = t(a, "ib-pin", b.currentYearTooltipText, Cj)),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        ee();
                    }),
                a.appendChild(h("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    La(!0, !0);
                }),
                u.enabled && (Zj = t(a, "ib-search", b.searchTooltipText, fe)));
            Ja = h("div", "contents custom-scroll-bars");
            Ja.addEventListener("scroll", ic);
            ia.appendChild(Ja);
        }
    }
    function rm(a, c) {
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
            ef(a, c, e);
        };
        d.addEventListener("click", function (a) {
            gf(a, c);
        });
        d.onmousemove = function (a) {
            null !== Dd && Dd.id === c.id ? C(a) : ii(a, c);
        };
        ce(d, c, f);
        ff(d, c);
        be(d, c, Ue(c, ba));
        d = sm(a, ba, d, c);
        qf = null === qf ? d : la.min(qf, d);
        rf = null === rf ? a.offsetTop : la.min(rf, a.offsetTop);
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
        Mg.innerHTML = n.empty;
        Ja.innerHTML = n.empty;
        Bc = [];
        ba = a;
        Ng = {};
        rf = qf = null;
        sf = [];
        U(a, d) && !f && ak();
        Rh(ba, k);
        Va(Yj, f);
        Fd = h("div", "timeline-header");
        Ja.appendChild(Fd);
        a = h("div", "timeline-header-item");
        d = n.empty;
        "group" === Ya
            ? (d = b.groupText)
            : "organizerName" === Ya
              ? (d = b.organizerNameText)
              : "location" === Ya
                ? (d = b.locationText)
                : "organizerEmailAddress" === Ya
                  ? (d = b.organizerEmailAddressText)
                  : "url" === Ya
                    ? (d = b.urlText)
                    : "title" === Ya
                      ? (d = b.titleText)
                      : "description" === Ya && (d = b.descriptionText);
        a.innerHTML = d;
        Fd.appendChild(a);
        t(a, "ib-arrow-left-full", b.previousPropertyTooltipText, tm);
        t(a, "ib-arrow-right-full", b.nextPropertyTooltipText, um);
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
            sf.push(l);
            sf.push(r);
        }
        hf(ia);
        k = ub(k);
        a = k.length;
        d = 0;
        if (0 < a)
            for (f = 0; f < a; f++) {
                g = k[f];
                l = G(g[Ya], b.noneText);
                q = l.toLowerCase();
                g.isAllDay && ((l = b.allDayText + ": " + l), (q = q + "-" + g.id));
                if (Ng.hasOwnProperty(q)) l = Ng[q];
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
                        v = fb(v, r);
                        x = h("div", "timeline-row-item-spacing");
                        l.appendChild(x);
                        v = fb(v, r);
                    }
                    Ng[q] = l;
                    d++;
                }
                rm(l, g);
                Bc.push(g);
            }
        k = sf.length;
        a = Ja.getElementsByClassName("timeline-row");
        d = a.length;
        f = 0;
        0 < d &&
            ((f = bd(a[0], "border-bottom-width")),
            (g = bd(Fd, "border-bottom-width")),
            (f = d * (a[0].offsetHeight - f) + (Fd.offsetHeight - g)));
        for (a = 0; a < k; a++)
            (d = sf[a]), 0 === f && (f = Ja.scrollHeight - d.offsetTop), (d.style.height = f + "px");
        w(b.events.onTimelineTitleRender, L) || jc(Mg, ba, !1, !0, !0);
        c ? ((Ja.scrollLeft = qf), (Ja.scrollTop = rf)) : ((Ja.scrollLeft = e), (Ja.scrollTop = m));
        Va(Zj, 0 < Bc.length);
    }
    function uj() {
        Bg(ba);
        if (7 > b.visibleDays.length)
            for (var a = X(ba); b.visibleDays.indexOf(a) === B.notFound; ) Bg(ba), (a = X(ba));
        Jb(ba, !0);
    }
    function yj() {
        ak(!0);
    }
    function Cj() {
        ba = new Date();
        Jb(ba, !0);
    }
    function tm() {
        var a = re.indexOf(Ya);
        a--;
        0 > a && (a = re.length - 1);
        Ya = re[a];
        Jb(ba);
    }
    function um() {
        var a = re.indexOf(Ya);
        a++;
        a > re.length - 1 && (a = 0);
        Ya = re[a];
        Jb(ba);
    }
    function ak(a) {
        a = p(a) ? a : !1;
        Xa(ba);
        if (7 > b.visibleDays.length)
            for (var c = X(ba); b.visibleDays.indexOf(c) === B.notFound; ) Xa(ba), (c = X(ba));
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
    function Za(a) {
        var b = h("div", "separator");
        a.appendChild(b);
        return b;
    }
    function og(a) {
        var b = !1;
        se(a) && ((a.style.display = "none"), (b = !0));
        return b;
    }
    function se(a) {
        return null !== a && "block" === a.style.display;
    }
    function bk() {
        return se(Ia) || se(Y) || se(Oa) || se(nb) || se(zb);
    }
    function Al() {
        null !== Ia && (gb(E.body, Ia), (Og = pi = null));
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
            (Za(Ia),
            xa(Ia, "ib-arrow-expand-left-right-icon", b.expandDayTooltipText, function () {
                Ua(Gd, !0);
            }));
        b.views.fullWeek.enabled &&
            (Za(Ia),
            xa(Ia, "ib-hamburger-side-icon", b.viewFullWeekText, function () {
                zc(Gd, !0);
            }));
        b.manualEditingEnabled &&
            ((pi = Za(Ia)),
            (Og = xa(Ia, "ib-circle-icon", b.pasteText, function () {
                Wh(Gd, Pb);
            })));
    }
    function Kg(a, b) {
        r ||
            null === Ia ||
            (fa(a) || mc(),
            (Gd = new Date(b)),
            null !== Og && ((b = 0 < ja.length ? "block" : "none"), (pi.style.display = b), (Og.style.display = b)),
            Ga(),
            C(a),
            tf(a, Ia));
    }
    function Bl() {
        null !== Y && (gb(E.body, Y), (Pg = Qg = uf = vf = wf = xf = yf = zf = Af = Bf = Cf = Df = Y = null));
        Y = h("div", "calendar-context-menu");
        ya.push(Y);
        E.body.appendChild(Y);
        b.manualEditingEnabled &&
            ((wf = xa(
                Y,
                "ib-edit-icon",
                b.editEventTitle + "...",
                function () {
                    P($a, null, null, ck);
                },
                !0
            )),
            (Af = Za(Y)),
            (zf = xa(Y, "ib-pipe-icon", b.cutText, function () {
                ge();
                Pb = !0;
                dk($a);
                ge(!1);
            })),
            (yf = Za(Y)),
            (xf = xa(Y, "ib-circle-hollow-icon", b.copyText, function () {
                ge();
                Pb = !1;
                dk($a);
                ge(!1);
            })),
            (Cf = Za(Y)),
            (Bf = xa(Y, "ib-equals-icon", b.duplicateText + "...", function () {
                P($a);
                y(Sc, b.addEventTitle);
                Ef.value = b.addText;
                Rg.style.display = "none";
                ea = te(ea);
                t(Sc, "ib-close", b.closeTooltipText, Tc, !0);
            })),
            (vf = Za(Y)),
            (uf = xa(Y, "ib-close-icon", b.removeEventText, function () {
                Ub(E.body, Ka);
                var a = function () {
                        gb(E.body, Ka);
                    },
                    c = H($a.repeatEvery) > x.never && null !== Ff;
                Gf(
                    b.confirmEventRemoveTitle,
                    b.confirmEventRemoveMessage,
                    function () {
                        a();
                        p($a.id) &&
                            (Sg.checked || null === Ff
                                ? (q.removeEvent($a.id, !0), Sa(b.eventRemovedText.replace("{0}", $a.title)))
                                : (pa($a.seriesIgnoreDates)
                                      ? $a.seriesIgnoreDates.push(Ff)
                                      : ($a.seriesIgnoreDates = [Ff]),
                                  Ha()),
                            ma());
                    },
                    a,
                    c
                );
            })),
            (Df = Za(Y)));
        qi = xa(Y, "ib-arrow-top-right-icon", b.openUrlText, function () {
            je($a.url);
        });
        b.exportEventsEnabled &&
            ((Qg = Za(Y)),
            (Pg = xa(Y, "ib-arrow-down-full-line-icon", b.exportEventsTooltipText + "...", function () {
                dd(Ea);
            })));
        b.shareEventsEnabled &&
            Hf.share &&
            (Za(Y),
            xa(Y, "ib-arrow-up-full-line-share-icon", b.shareText + "...", function () {
                var a = ek(0 < Ea.length ? Ea : [$a]),
                    c = { type: "text/plain" };
                a = new Blob([a], c);
                c = { files: [new File([a], fk("txt", b.shareStartFilename), c)] };
                Hf.canShare(c) && Hf.share(c);
            }));
    }
    function ef(a, c, d) {
        if (null !== Y) {
            var e = G(c.url),
                f = lf(c);
            fa(a) || mc();
            $a = c;
            ck = new Date(d);
            Ff = p(d) ? d : null;
            1 < Ea.length
                ? (b.manualEditingEnabled &&
                      ((wf.style.display = "none"),
                      (Af.style.display = "none"),
                      (zf.style.display = "block"),
                      (yf.style.display = "block"),
                      (xf.style.display = "block"),
                      (Cf.style.display = "none"),
                      (Bf.style.display = "none"),
                      (vf.style.display = "none"),
                      (uf.style.display = "none")),
                  (Df.style.display = "none"),
                  (qi.style.display = "none"),
                  b.exportEventsEnabled && ((Qg.style.display = "block"), (Pg.style.display = "block")))
                : (f
                      ? b.manualEditingEnabled &&
                        ((wf.style.display = "block"),
                        (Af.style.display = "none"),
                        (zf.style.display = "none"),
                        (yf.style.display = "none"),
                        (xf.style.display = "none"),
                        (Cf.style.display = "none"),
                        (Bf.style.display = "none"),
                        (vf.style.display = "block"),
                        (uf.style.display = "block"),
                        (Df.style.display = e !== n.empty ? "block" : "none"))
                      : b.manualEditingEnabled &&
                        ((wf.style.display = "block"),
                        (Af.style.display = "block"),
                        (zf.style.display = "block"),
                        (yf.style.display = "block"),
                        (xf.style.display = "block"),
                        (Cf.style.display = "block"),
                        (Bf.style.display = "block"),
                        (vf.style.display = "block"),
                        (uf.style.display = "block"),
                        (Df.style.display = e !== n.empty ? "block" : "none")),
                  (qi.style.display = e !== n.empty ? "block" : "none"),
                  b.exportEventsEnabled && ((Qg.style.display = "none"), (Pg.style.display = "none")));
            if (e !== n.empty || 1 < Y.childElementCount) Ga(), C(a), tf(a, Y);
        }
    }
    function Cl() {
        null !== Oa && (gb(E.body, Oa), (Tg = ri = si = ti = Oa = null));
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
                        var a = td(ue, ue, cf, cf);
                        P(a);
                        ud();
                    } else P(null, ue, cf);
                },
                !0
            ),
            (ti = Za(Oa)),
            (si = xa(Oa, "ib-close-icon", b.removeEventsTooltipText, function () {
                Xj(ue, U);
            })),
            (ri = Za(Oa)),
            (Tg = xa(Oa, "ib-circle-icon", b.pasteText, function () {
                Wh(ue, Pb);
            })));
    }
    function Gj(a, b, d) {
        null !== Oa &&
            (fa(a) || mc(),
            (ue = b),
            null !== Tg && ((b = 0 < ja.length ? "block" : "none"), (ri.style.display = b), (Tg.style.display = b)),
            (d = pa(d) && 0 < d.length ? "block" : "none"),
            (ti.style.display = d),
            (si.style.display = d),
            Ga(),
            C(a),
            tf(a, Oa));
    }
    function Dl() {
        null === nb &&
            ((nb = h("div", "calendar-context-menu")),
            ya.push(nb),
            E.body.appendChild(nb),
            (gk = xa(
                nb,
                "ib-close-icon",
                b.hideDayText,
                function () {
                    b.visibleDays.splice(b.visibleDays.indexOf(hk), 1);
                    lb = !1;
                    w(b.events.onOptionsUpdated, b);
                    F(v, !0, !0);
                },
                !0
            )),
            (ik = Za(nb)),
            (jk = xa(nb, "ib-rhombus-hollow-icon", b.showOnlyWorkingDaysText, function () {
                1 <= b.workingDays.length &&
                    ((b.visibleDays = [].slice.call(b.workingDays)),
                    (lb = !1),
                    w(b.events.onOptionsUpdated, b),
                    F(v, !0, !0));
            })),
            (kk = Za(nb)),
            xa(nb, "ib-octagon-hollow-icon", b.visibleDaysText + "...", function () {
                Kc(!0);
            }));
    }
    function Vi() {
        null !== Ka || r || (Ka = h("div", "disabled-background"));
    }
    function Wi() {
        if (!r) {
            null === ab && ((ab = h("div", "calendar-dialog event-editor")), ya.push(ab), E.body.appendChild(ab));
            ab.innerHTML = n.empty;
            var a = h("div", "view");
            ab.appendChild(a);
            Ug = h("div", "disabled-area");
            a.appendChild(Ug);
            Sc = h("div", "title-bar");
            a.appendChild(Sc);
            Hd(Sc, ab, null);
            var c = h("div", "contents");
            a.appendChild(c);
            a = lk(c);
            ve(
                a,
                b.eventText,
                function (a) {
                    we(a, Vb, ab);
                },
                !0
            );
            ve(a, b.typeText.replace(":", n.empty), function (a) {
                we(a, Vg, ab);
            });
            ve(a, b.repeatsText.replace(":", n.empty), function (a) {
                we(a, Wg, ab);
            });
            ve(a, b.optionalText, function (a) {
                we(a, Uc, ab);
            });
            Vb = xe(c, !0, !1);
            Vg = xe(c, !1, !1);
            Wg = xe(c, !1, !1);
            Uc = xe(c, !1, !1);
            vm();
            wm();
            xm();
            a = h("div", "buttons-container");
            c.appendChild(a);
            Rg = Fa(a, b.removeEventText, "remove", ym);
            Ef = Fa(a, b.addText, "add-update", mk);
            Fa(a, b.cancelText, "cancel", Tc);
        }
    }
    function vm() {
        qa(Vb, b.titleText);
        var a = h("div", "input-title-container");
        Vb.appendChild(a);
        Ab = h("input", null, "text");
        a.appendChild(Ab);
        Ab.onkeydown = function (a) {
            a.keyCode === Q.enter && mk();
        };
        0 < b.maximumEventTitleLength && (Ab.maxLength = b.maximumEventTitleLength);
        var c = function () {
            nk(null);
        };
        b.eventColorsEditingEnabled && (ui = Fa(a, "...", "select-colors", zm, b.selectColorsText));
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
        If = K(Vb, b.showAlertsText)[0];
        Jf = K(Vb, b.showAsBusyText)[0];
    }
    function wm() {
        var a = h("div", "radio-buttons-container");
        Wg.appendChild(a);
        qc = ha(a, b.repeatsNever, "RepeatType", Vc);
        Kf = ha(a, b.repeatsEveryDayText, "RepeatType", Vc);
        Lf = ha(a, b.repeatsEveryWeekText, "RepeatType", Vc);
        Mf = ha(a, b.repeatsEvery2WeeksText, "RepeatType", Vc);
        Nf = ha(a, b.repeatsEveryMonthText, "RepeatType", Vc);
        Of = ha(a, b.repeatsEveryYearText, "RepeatType", Vc);
        Zb = ha(a, b.repeatsCustomText, "RepeatType", Vc);
        Xg = Fa(a, "...", "repeat-options", Am, b.repeatOptionsTitle);
        a = h("div", "split split-margin");
        Wg.appendChild(a);
        Wc = h("input", null, "number");
        Wc.setAttribute("min", "1");
        a.appendChild(Wc);
        var c = h("div", "radio-buttons-container split-contents");
        a.appendChild(c);
        Id = ha(c, b.dailyText, "RepeatCustomType");
        Pf = ha(c, b.weeklyText, "RepeatCustomType");
        Qf = ha(c, b.monthlyText, "RepeatCustomType");
        Rf = ha(c, b.yearlyText, "RepeatCustomType");
    }
    function xm() {
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
        Xg.disabled = qc.checked;
        Rf.disabled = !Zb.checked;
        Id.disabled = !Zb.checked;
        Pf.disabled = !Zb.checked;
        Qf.disabled = !Zb.checked;
        Wc.disabled = !Zb.checked;
    }
    function nk(a) {
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
        ok(hb, d);
        ok(Nd, e);
        d > e && Bb(d, hb);
        a || (e > d || e < d ? ((b = !0), (qc.checked = !0)) : (b = !1));
        qc.disabled = b;
        Kf.disabled = b;
        Lf.disabled = b;
        Mf.disabled = b;
        Nf.disabled = b;
        Of.disabled = b;
        Zb.disabled = b;
        Xg.disabled = b;
        Wc.disabled = b;
        Id.disabled = b;
        Pf.disabled = b;
        Qf.disabled = b;
        Rf.disabled = b;
        a || Vc();
    }
    function P(a, c, d, e) {
        if (Xh(b.events.onBeforeEventAddEdit)) w(b.events.onBeforeEventAddEdit, a);
        else {
            Ub(E.body, Ka);
            var f = ab,
                k = void 0;
            k = p(k) ? k : 0;
            f = f.getElementsByClassName("tab");
            0 < f.length && f[k].click();
            Vg.innerHTML = n.empty;
            k = h("div", "radio-buttons-container");
            Vg.appendChild(k);
            for (var m in N) N.hasOwnProperty(m) && (N[m].eventEditorInput = ha(k, N[m].text, "Type"));
            p(a)
                ? (y(Sc, b.editEventTitle),
                  pk(a.type),
                  (Ef.value = b.updateText),
                  (Rg.style.display = "inline-block"),
                  (ea = a),
                  (Xb.value = yb(a.from, !1)),
                  (Yb.value = yb(a.to, !1)),
                  (ye.checked = vi(a.isAllDay)),
                  (If.checked = vi(a.showAlerts, !0)),
                  (Jf.checked = vi(a.showAsBusy, !0)),
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
                  d === x.never
                      ? (qc.checked = !0)
                      : d === x.everyDay
                        ? (Kf.checked = !0)
                        : d === x.everyWeek
                          ? (Lf.checked = !0)
                          : d === x.every2Weeks
                            ? (Mf.checked = !0)
                            : d === x.everyMonth
                              ? (Nf.checked = !0)
                              : d === x.everyYear
                                ? (Of.checked = !0)
                                : d === x.custom && (Zb.checked = !0),
                  (c = H(a.repeatEveryCustomType)),
                  c === M.daily
                      ? (Id.checked = !0)
                      : c === M.weekly
                        ? (Pf.checked = !0)
                        : c === M.monthly
                          ? (Qf.checked = !0)
                          : c === M.yearly && (Rf.checked = !0),
                  (c = Oc(a.repeatEveryExcludeDays)),
                  (Yg.checked = c.indexOf(1) > B.notFound),
                  (Zg.checked = c.indexOf(2) > B.notFound),
                  ($g.checked = c.indexOf(3) > B.notFound),
                  (ah.checked = c.indexOf(4) > B.notFound),
                  (bh.checked = c.indexOf(5) > B.notFound),
                  (ch.checked = c.indexOf(6) > B.notFound),
                  (dh.checked = c.indexOf(0) > B.notFound),
                  Bb(a.repeatEnds, Nd),
                  (wi = d > x.never && p(e) && !U(a.from, e)),
                  (Sf = e))
                : ((e = new Date()),
                  (c = p(c) ? c : e),
                  dc(c) && (c.setHours(e.getHours()), c.setMinutes(e.getMinutes())),
                  (e = fb(c, b.defaultEventDuration)),
                  y(Sc, b.addEventTitle),
                  pk(),
                  (Ef.value = b.addText),
                  (Rg.style.display = "none"),
                  (ea = {}),
                  (ye.checked = !1),
                  (If.checked = !0),
                  (Jf.checked = !0),
                  (Ab.value = n.empty),
                  (Ld.value = n.empty),
                  (Md.value = n.empty),
                  (Kd.value = n.empty),
                  (ze.value = n.empty),
                  (Be.value = b.defaultEventBackgroundColor),
                  (Ce.value = b.defaultEventTextColor),
                  (De.value = b.defaultEventBorderColor),
                  (qc.checked = !0),
                  (Yg.checked = !1),
                  (Zg.checked = !1),
                  ($g.checked = !1),
                  (ah.checked = !1),
                  (bh.checked = !1),
                  (ch.checked = !1),
                  (dh.checked = !1),
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
                  (wi = !1),
                  (Sf = null));
            t(Sc, "ib-close", b.closeTooltipText, Tc, !0);
            a = lf(a);
            for (var g in N) N.hasOwnProperty(g) && p(N[g].eventEditorInput) && (N[g].eventEditorInput.disabled = a);
            Ef.disabled = a;
            Wb.disabled = a;
            hb.disabled = a;
            Xb.disabled = a;
            Yb.disabled = a;
            ye.disabled = a;
            If.disabled = a;
            Jf.disabled = a;
            Ab.disabled = a;
            Ld.disabled = a;
            Md.disabled = a;
            Kd.disabled = a;
            ze.disabled = a;
            qc.disabled = a;
            Kf.disabled = a;
            Lf.disabled = a;
            Mf.disabled = a;
            Nf.disabled = a;
            Of.disabled = a;
            Zb.disabled = a;
            Xg.disabled = a;
            Jd.disabled = a;
            null !== ui && (ui.disabled = a);
            nk();
            eb.push(Tc);
            ab.style.display = "block";
            Ab.focus();
        }
    }
    function ud() {
        Ab.focus();
        Ab.select();
    }
    function mk() {
        var a = Xb.value.split(":"),
            c = Yb.value.split(":"),
            d = Od(Ab.value),
            e = Od(ze.value);
        if (2 > a.length) Tf(b.fromTimeErrorMessage);
        else if (2 > c.length) Tf(b.toTimeErrorMessage);
        else if (d === n.empty) Tf(b.titleErrorMessage);
        else if (0 < e.length && !qk(e)) Tf(b.urlErrorMessage);
        else {
            var f = Ae(Wb),
                k = Ae(hb),
                m = Od(Ld.value),
                h = Od(Md.value),
                g = Od(Kd.value),
                l = Ae(Nd, null),
                r = parseInt(Wc.value),
                t = Bm(),
                u = parseInt(Jd.value);
            isNaN(r) && ((r = 0), (qc.checked = !0), (Id.checked = !0));
            isNaN(u) && (u = 0);
            if (k < f) Tf(b.toSmallerThanFromErrorMessage);
            else {
                var w = function (a, c, f, k, A) {
                    A = p(A) ? A : !1;
                    eh(c, Xb.value);
                    eh(f, Yb.value);
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
                              showAlerts: If.checked,
                              showAsBusy: Jf.checked,
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
                              : Kf.checked
                                ? (c.repeatEvery = x.everyDay)
                                : Lf.checked
                                  ? (c.repeatEvery = x.everyWeek)
                                  : Mf.checked
                                    ? (c.repeatEvery = x.every2Weeks)
                                    : Nf.checked
                                      ? (c.repeatEvery = x.everyMonth)
                                      : Of.checked
                                        ? (c.repeatEvery = x.everyYear)
                                        : Zb.checked && (c.repeatEvery = x.custom),
                          Id.checked
                              ? (c.repeatEveryCustomType = M.daily)
                              : Pf.checked
                                ? (c.repeatEveryCustomType = M.weekly)
                                : Qf.checked
                                  ? (c.repeatEveryCustomType = M.monthly)
                                  : Rf.checked && (c.repeatEveryCustomType = M.yearly),
                          A
                              ? (c.id = a)
                              : ((c.organizerName = b.organizerName),
                                (c.organizerEmailAddress = b.organizerEmailAddress)),
                          A
                              ? (q.updateEvent(a, c, !1), Sa(b.eventUpdatedText.replace("{0}", ea.title)))
                              : (q.addEvent(c, !1), Sa(b.eventAddedText.replace("{0}", c.title))),
                          b.isWidget ? F(v) : (Ha(), ma()));
                };
                wi
                    ? (Uf(),
                      Gf(
                          b.confirmEventUpdateTitle,
                          b.confirmEventUpdateMessage,
                          function () {
                              var a = new Date(Sf),
                                  b = new Date(Sf),
                                  c = new Date(Sf);
                              Pd();
                              Xa(c, -1);
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
        gb(E.body, Ka);
        ab.style.display = "none";
    }
    function ym() {
        Uf();
        Gf(
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
        db(W) && Ua(L);
        db(da) && zc(Sb);
        db(Da) && Ac(sa);
        db(ra) && Oh();
        db(ia) && Jb(ba);
    }
    function td(a, c, d, e) {
        d = p(d) ? d : "09:00";
        e = p(e) ? d : "09:00";
        eh(a, d);
        eh(c, e);
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
        jb();
        return a;
    }
    function lf(a) {
        return p(a) && ib(a.locked) ? a.locked : !1;
    }
    function Tf(a) {
        Gf(b.errorText, a, Pd, null, !1, !1);
        Uf();
    }
    function Uf() {
        Ug.style.display = "block";
    }
    function Pd() {
        Ug.style.display = "none";
    }
    function Xi() {
        if (!r && null === rc) {
            rc = h("div", "calendar-dialog event-editor-colors");
            ya.push(rc);
            E.body.appendChild(rc);
            var a = h("div", "title-bar");
            y(a, b.selectColorsText);
            rc.appendChild(a);
            Hd(a, rc, null);
            t(a, "ib-close", b.closeTooltipText, fh, !0);
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
            Fa(c, b.updateText, "update", Cm);
            Fa(c, b.cancelText, "cancel", fh);
        }
    }
    function Cm() {
        fh();
        ea.color = Be.value;
        ea.colorText = Ce.value;
        ea.colorBorder = De.value;
    }
    function fh(a) {
        Ee(a);
        Pd();
        rc.style.display = "none";
    }
    function zm() {
        eb.push(fh);
        rc.style.display = "block";
        Uf();
    }
    function Yi() {
        if (!r && null === sc) {
            sc = h("div", "calendar-dialog event-editor-repeat-options");
            ya.push(sc);
            E.body.appendChild(sc);
            var a = h("div", "title-bar");
            y(a, b.repeatOptionsTitle);
            sc.appendChild(a);
            Hd(a, sc, null);
            t(a, "ib-close", b.closeTooltipText, gh, !0);
            a = h("div", "contents");
            sc.appendChild(a);
            var c = h("div", "section");
            a.appendChild(c);
            qa(c, b.daysToExcludeText, "text-header");
            Yg = K(c, b.dayNames[0])[0];
            Zg = K(c, b.dayNames[1])[0];
            $g = K(c, b.dayNames[2])[0];
            ah = K(c, b.dayNames[3])[0];
            bh = K(c, b.dayNames[4])[0];
            ch = K(c, b.dayNames[5])[0];
            dh = K(c, b.dayNames[6])[0];
            c = h("div", "section");
            a.appendChild(c);
            qa(c, b.repeatEndsText, "text-header");
            Nd = h("input");
            c.appendChild(Nd);
            lc(Nd, "date");
            c = h("div", "buttons-container");
            a.appendChild(c);
            Fa(c, b.updateText, "update", Dm);
            Fa(c, b.cancelText, "cancel", gh);
        }
    }
    function Dm() {
        gh();
        var a = [];
        Yg.checked && a.push(1);
        Zg.checked && a.push(2);
        $g.checked && a.push(3);
        ah.checked && a.push(4);
        bh.checked && a.push(5);
        ch.checked && a.push(6);
        dh.checked && a.push(0);
        ea.repeatEveryExcludeDays = a;
    }
    function gh(a) {
        Ee(a);
        Pd();
        sc.style.display = "none";
    }
    function Am() {
        eb.push(gh);
        sc.style.display = "block";
        Uf();
    }
    function Zi() {
        if (!r && null === Xc) {
            Xc = h("div", "calendar-dialog message");
            ya.push(Xc);
            E.body.appendChild(Xc);
            xi = h("div", "title-bar");
            Xc.appendChild(xi);
            var a = h("div", "contents");
            Xc.appendChild(a);
            yi = h("div", "text");
            a.appendChild(yi);
            var c = K(a, b.removeAllEventsInSeriesText);
            Sg = c[0];
            zi = c[1];
            Vf = h("div", "buttons-container");
            a.appendChild(Vf);
        }
    }
    function Gf(a, c, d, e, f, k, m, g) {
        f = p(f) ? f : !1;
        k = p(k) ? k : !0;
        var A = p(m) ? m : b.yesText,
            q = p(g) ? g : b.noText;
        Vf.innerHTML = n.empty;
        var l = h("input", "yes-ok", "button");
        l.value = A;
        Vf.appendChild(l);
        A = h("input", "no", "button");
        A.value = q;
        Vf.appendChild(A);
        eb.push(!1);
        Xc.style.display = "block";
        y(xi, a);
        y(yi, c);
        l.onclick = rk;
        l.addEventListener("click", d);
        A.onclick = rk;
        Yc(e) && A.addEventListener("click", e);
        p(m) ||
            p(g) ||
            (k
                ? ((A.style.display = "inline-block"), (l.value = b.yesText))
                : ((A.style.display = "none"), (l.value = b.okText)));
        f ? ((zi.style.display = "block"), (Sg.checked = !1)) : ((zi.style.display = "none"), (Sg.checked = !0));
    }
    function rk() {
        eb.pop();
        Xc.style.display = "none";
    }
    function wl() {
        if (!r && null === tc) {
            tc = h("div", "calendar-dialog export-events");
            ya.push(tc);
            E.body.appendChild(tc);
            var a = h("div", "title-bar");
            y(a, b.exportEventsTitle);
            tc.appendChild(a);
            Hd(a, tc, null);
            t(a, "ib-close", b.closeTooltipText, hh, !0);
            a = h("div", "contents");
            tc.appendChild(a);
            Ta = h("input", null, "text");
            Ta.placeholder = b.exportFilenamePlaceholderText;
            a.appendChild(Ta);
            Ta.onkeydown = function (a) {
                a.keyCode === Q.enter && sk();
            };
            Cb = K(a, b.copyToClipboardOnlyText, tk)[0];
            ih = h("div", "split options");
            a.appendChild(ih);
            var c = h("div", "radio-buttons-container split-contents");
            ih.appendChild(c);
            var d = h("div", "radio-buttons-container split-contents");
            ih.appendChild(d);
            Ai = ha(c, "CSV", "ExportType");
            uk = ha(c, "XML", "ExportType");
            vk = ha(c, "JSON", "ExportType");
            wk = ha(c, "TXT", "ExportType");
            xk = ha(d, "iCAL", "ExportType");
            yk = ha(d, "MD", "ExportType");
            zk = ha(d, "HTML", "ExportType");
            Ak = ha(d, "TSV", "ExportType");
            c = h("div", "buttons-container");
            a.appendChild(c);
            Fa(c, b.exportText, "export", sk);
            Fa(c, b.cancelText, "cancel", hh);
        }
    }
    function tk() {
        Ta.disabled = Cb.checked;
    }
    function dd(a) {
        Ub(E.body, Ka);
        Hb();
        eb.push(hh);
        tc.style.display = "block";
        uc = a;
        Ai.checked = !0;
        Ta.value = n.empty;
        Cb.checked = !1;
        tk();
        Ta.focus();
    }
    function hh(a) {
        Ee(a);
        gb(E.body, Ka);
        tc.style.display = "none";
    }
    function sk() {
        hh();
        Ai.checked
            ? vc(uc, "csv", Ta.value, Cb.checked)
            : uk.checked
              ? vc(uc, "xml", Ta.value, Cb.checked)
              : vk.checked
                ? vc(uc, "json", Ta.value, Cb.checked)
                : wk.checked
                  ? vc(uc, "text", Ta.value, Cb.checked)
                  : xk.checked
                    ? vc(uc, "ical", Ta.value, Cb.checked)
                    : yk.checked
                      ? vc(uc, "md", Ta.value, Cb.checked)
                      : zk.checked
                        ? vc(uc, "html", Ta.value, Cb.checked)
                        : Ak.checked && vc(uc, "tsv", Ta.value, Cb.checked);
    }
    function xl() {
        if (!r && null === ka) {
            ka = h("div", "calendar-dialog search");
            ya.push(ka);
            E.body.appendChild(ka);
            var a = h("div", "title-bar");
            y(a, b.searchEventsTitle);
            ka.appendChild(a);
            Hd(a, ka, function () {
                Bi = !0;
                Wf();
            });
            a.ondblclick = Ci;
            var c = t(a, "ib-close", b.closeTooltipText, kd);
            c.onmousedown = C;
            c.onmouseup = C;
            Qd = t(a, "ib-minus", b.minimizedTooltipText, Ci);
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
            na.onkeypress = Em;
            a.appendChild(na);
            ob = h("div", "ib-arrow-down-full");
            ob.style.display = "none";
            ob.onclick = Fm;
            a.appendChild(ob);
            zb = h("div", "history-dropdown custom-scroll-bars");
            a.appendChild(zb);
            a = h("div", "checkbox-container");
            $b.appendChild(a);
            jh = K(a, b.notSearchText, ac)[0];
            kh = K(a, b.matchCaseText, ac)[0];
            Ge = K(a, b.advancedText + ":", Gm)[0];
            Ge.checked = !0;
            Xf = h("div", "advanced");
            $b.appendChild(Xf);
            var d = h("div", "split");
            Xf.appendChild(d);
            c = h("div", "split-contents");
            d.appendChild(c);
            a = h("div", "split-contents");
            d.appendChild(a);
            qa(c, b.includeText, "text-header");
            d = h("div", "checkbox-container");
            c.appendChild(d);
            Yf = K(d, b.titleText.replace(":", n.empty), ac)[0];
            lh = K(d, b.locationText.replace(":", n.empty), ac)[0];
            mh = K(d, b.descriptionText.replace(":", n.empty), ac)[0];
            nh = K(d, b.groupText.replace(":", n.empty), ac)[0];
            oh = K(d, b.urlText.replace(":", n.empty), ac)[0];
            Yf.checked = !0;
            qa(a, b.optionsText, "text-header");
            c = h("div", "radio-buttons-container");
            a.appendChild(c);
            ph = ha(c, b.startsWithText, "SearchOptionType", ac);
            qh = ha(c, b.endsWithText, "SearchOptionType", ac);
            rh = ha(c, b.containsText, "SearchOptionType", ac);
            rh.checked = !0;
            a = h("div", "buttons-container");
            $b.appendChild(a);
            sh = Fa(a, b.previousText, "previous", Bk);
            th = Fa(a, b.nextText, "next", Ck);
        }
    }
    function Gm() {
        Xf.style.display = Ge.checked ? "block" : "none";
        Vh();
        Wf();
    }
    function ac() {
        Wf();
        Fe(!1);
    }
    function Fe(a) {
        a = p(a) ? a : !0;
        0 < Db.length && Dk(z, " focused-event");
        sh.disabled = !0;
        th.disabled = na.value === n.empty;
        Db = [];
        Zc = 0;
        Di = null;
        a && Ek();
        Wf();
    }
    function fe() {
        "block" !== ka.style.display &&
            ((Db = []),
            (ka.style.display = "block"),
            Fe(!1),
            (na.value = u.lastSearchText),
            (jh.checked = u.not),
            (kh.checked = u.matchCase),
            (Ge.checked = u.showAdvanced),
            (Yf.checked = u.searchTitle),
            (lh.checked = u.searchLocation),
            (mh.checked = u.searchDescription),
            (nh.checked = u.searchGroup),
            (oh.checked = u.searchUrl),
            (ph.checked = u.startsWith),
            (qh.checked = u.endsWith),
            (rh.checked = u.contains),
            (Xf.style.display = Ge.checked ? "block" : "none"),
            Vh());
        "block" !== $b.style.display && Ci();
        na.focus();
        na.select();
        0 < u.history.length && (ob.style.display = "block");
    }
    function Vh() {
        null === ka ||
            Bi ||
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
    function Ci() {
        "block" === $b.style.display
            ? (($b.style.display = "none"), (Qd.className = "ib-square-hollow"), Ra(Qd, b.restoreTooltipText))
            : (($b.style.display = "block"), (Qd.className = "ib-minus"), Ra(Qd, b.minimizedTooltipText));
    }
    function Bk() {
        if (0 < Zc) {
            Zc--;
            var a = Db[Zc];
            Fk();
            F(a.from);
            Gk(a);
        }
    }
    function Em(a) {
        a.keyCode === Q.enter && fa(a) && !sh.disabled ? Bk() : a.keyCode !== Q.enter || th.disabled ? Ek() : Ck();
    }
    function Ck() {
        if (0 === Db.length) {
            var a = "day-",
                b = jh.checked,
                d = kh.checked,
                e = d ? na.value : na.value.toLowerCase(),
                f = {},
                k = ub(Bd()),
                m = k.length,
                h = Ma(),
                g = h === W,
                n = h === ra,
                p = h === da;
            h = h === ia;
            g ? (a = "full-day-") : n ? (a = "month-") : p ? (a = "week-day-") : h && (a = "timeline-day-");
            Wf(!0);
            for (var q = 0; q < m; q++) {
                var l = k[q];
                if (ie(l)) {
                    var r = G(l.title),
                        t = G(l.location),
                        u = G(l.description),
                        v = G(l.group),
                        x = G(l.url),
                        w = !1;
                    d ||
                        ((r = r.toLowerCase()),
                        (u = u.toLowerCase()),
                        (t = t.toLowerCase()),
                        (v = v.toLowerCase()),
                        (x = x.toLowerCase()));
                    Yf.checked && Zf(r, e)
                        ? (w = !0)
                        : lh.checked && Zf(t, e)
                          ? (w = !0)
                          : mh.checked && Zf(u, e)
                            ? (w = !0)
                            : nh.checked && Zf(v, e)
                              ? (w = !0)
                              : oh.checked && Zf(x, e) && (w = !0);
                    b && (w = !w);
                    !w ||
                        (null === Aa(a + l.id) && (g || n || p || h)) ||
                        (g || n || p || h
                            ? Db.push(te(l, !1))
                            : ((r = l.from.getMonth() + "-" + l.from.getFullYear()),
                              f.hasOwnProperty(r) || (Db.push(te(l, !1)), (f[r] = !0))));
                }
            }
        } else Zc++;
        Fk();
        0 < Db.length && ((a = Db[Zc]), F(new Date(a.from)), Gk(a));
    }
    function Gk(a) {
        var b = "day-",
            d = Ma(),
            e = d === W,
            f = d === ra,
            k = d === da;
        d = d === ia;
        Dk(z, " focused-event");
        e ? (b = "full-day-") : f ? (b = "month-") : k ? (b = "week-day-") : d && (b = "timeline-day-");
        b = Aa(b + a.id);
        if (null !== b && ((b.className += " focused-event"), (Di = a.id), e || f || k || d))
            for (a = b.parentNode; ; ) {
                if (0 < a.scrollHeight && a.scrollHeight > a.offsetHeight) {
                    a.scrollTop = b.offsetTop;
                    break;
                }
                a = a.parentNode;
            }
    }
    function Fk() {
        sh.disabled = 0 === Zc;
        th.disabled = Zc === Db.length - 1 || 0 === Db.length;
    }
    function Zf(a, b) {
        return ph.checked
            ? oa(a, b)
            : qh.checked
              ? a.substring(a.length - b.length, a.length) === b
              : a.indexOf(b) > B.notFound;
    }
    function Wf(a) {
        a = p(a) ? a : !1;
        rd(Na.searchOptionsChanged);
        var c = Od(na.value);
        a && (ob.style.display = "block");
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
                        (u.not = jh.checked),
                        (u.matchCase = kh.checked),
                        (u.showAdvanced = Ge.checked),
                        (u.searchTitle = Yf.checked),
                        (u.searchLocation = lh.checked),
                        (u.searchDescription = mh.checked),
                        (u.searchGroup = nh.checked),
                        (u.searchUrl = oh.checked),
                        (u.startsWith = ph.checked),
                        (u.endsWith = qh.checked),
                        (u.contains = rh.checked),
                        Bi && ((u.left = ka.offsetLeft), (u.top = ka.offsetTop)),
                        w(b.events.onSearchOptionsUpdated, u);
            },
            2e3,
            !1
        );
    }
    function Ek() {
        var a = u.history.length;
        0 < a
            ? ((ob.style.display = "block"),
              rd(Na.searchEventsHistoryDropDown),
              nd(
                  Na.searchEventsHistoryDropDown,
                  function () {
                      var b = na.value,
                          d = !1;
                      if (Od(b) !== n.empty) {
                          Hk();
                          zb.innerHTML = n.empty;
                          for (var e = 0; e < a; e++) {
                              var f = u.history[e],
                                  k = b;
                              f.substring(0, k.length).toLowerCase() === k.toLowerCase() &&
                                  f.toLowerCase() !== b.toLowerCase() &&
                                  (Ik(u.history[e], b.length), (d = !0));
                          }
                      }
                      d ? Jk() : Ze();
                  },
                  150,
                  !1
              ))
            : (ob.style.display = "none");
    }
    function Hk() {
        u.history.sort(function (a, b) {
            var c = 0;
            a = a.toLowerCase();
            b = b.toLowerCase();
            a < b ? (c = -1) : a > b && (c = 1);
            return c;
        });
    }
    function Fm(a) {
        C(a);
        if ("block" !== zb.style.display) {
            Hk();
            a = u.history.length;
            zb.innerHTML = n.empty;
            na.focus();
            for (var b = 0; b < a; b++) Ik(u.history[b], 0);
            Jk();
        } else Ze();
    }
    function Ik(a, b) {
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
            Ze();
            na.value = a;
            na.selectionStart = na.selectionEnd = na.value.length;
            na.focus();
            Fe(!1);
        };
    }
    function Ze() {
        var a = !1;
        null !== zb &&
            "ib-arrow-up-full" === ob.className &&
            ((zb.style.display = "none"), (ob.className = "ib-arrow-down-full"), (a = !0));
        return a;
    }
    function Jk() {
        null !== zb &&
            "ib-arrow-down-full" === ob.className &&
            ((zb.style.display = "block"), (ob.className = "ib-arrow-up-full"));
    }
    function yl() {
        if (!r && null === Eb) {
            Eb = h("div", "calendar-dialog configuration");
            ya.push(Eb);
            E.body.appendChild(Eb);
            var a = h("div", "title-bar");
            y(a, b.configurationTitleText);
            Eb.appendChild(a);
            Hd(a, Eb, null);
            t(a, "ib-close", b.closeTooltipText, Kk, !0);
            a = h("div", "contents");
            Eb.appendChild(a);
            var c = lk(a);
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
            Ei = K(Rd, b.enableAutoRefreshForEventsText)[0];
            Fi = K(Rd, b.enableBrowserNotificationsText, null, null, null, "checkbox-tabbed-in")[0];
            Gi = K(Rd, b.enableTooltipsText, null, null, null, "checkbox-tabbed-down")[0];
            Hi = K(Rd, b.enableDragAndDropForEventText)[0];
            Ii = K(Rd, b.showHolidaysInTheDisplaysText)[0];
            qa(He, b.organizerNameText);
            uh = h("input", null, "text");
            He.appendChild(uh);
            qa(He, b.organizerEmailAddressText);
            vh = h("input", null, "email");
            He.appendChild(vh);
            c = h("div", "buttons-container");
            a.appendChild(c);
            Fa(c, b.updateText, "update", Hm);
            Fa(c, b.cancelText, "cancel", Kk);
        }
    }
    function Hm() {
        Ei.checked ? q.startTheAutoRefreshTimer() : q.stopTheAutoRefreshTimer();
        b.eventNotificationsEnabled = Fi.checked;
        b.tooltipsEnabled = Gi.checked;
        b.dragAndDropForEventsEnabled = Hi.checked;
        b.showHolidays = Ii.checked;
        b.organizerName = uh.value;
        b.organizerEmailAddress = vh.value;
        lb = !1;
        w(b.events.onOptionsUpdated, b);
        Ji();
        Ki();
        F(v, !0, !0);
        Sa(b.configurationUpdatedText);
    }
    function Kk() {
        Ki();
    }
    function dj() {
        Ub(E.body, Ka);
        Ei.checked = $f;
        Fi.checked = b.eventNotificationsEnabled;
        Gi.checked = b.tooltipsEnabled;
        Hi.checked = b.dragAndDropForEventsEnabled;
        Ii.checked = b.showHolidays;
        uh.value = b.organizerName;
        vh.value = b.organizerEmailAddress;
        eb.push(Ki);
        Eb.style.display = "block";
    }
    function Ki(a) {
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
    function zl() {
        if (!r && null === wc && b.jumpToDateEnabled) {
            wc = h("div", "calendar-dialog jump-to-date");
            ya.push(wc);
            E.body.appendChild(wc);
            var a = h("div", "title-bar");
            y(a, b.jumpToDateTitle);
            wc.appendChild(a);
            Hd(a, wc, null);
            t(a, "ib-close", b.closeTooltipText, wh, !0);
            var c = h("div", "contents");
            wc.appendChild(c);
            bc = h("input", null, "date");
            c.appendChild(bc);
            a = h("div", "buttons-container");
            c.appendChild(a);
            c = Fa(a, b.goText, "go", Lk);
            Fa(a, b.cancelText, "cancel", wh);
            c.onkeydown = function (a) {
                a.keyCode === Q.enter && Lk();
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
            eb.push(wh);
            wc.style.display = "block";
            bc.focus();
        }
    }
    function wh(a) {
        Ee(a);
        gb(E.body, Ka);
        wc.style.display = "none";
    }
    function Lk() {
        var a = Ma(),
            c = Ae(bc);
        c.getFullYear() >= b.minimumYear &&
            c.getFullYear() <= b.maximumYear &&
            (null === a
                ? (F(c), qb())
                : a === W
                  ? Ua(c)
                  : a === da
                    ? zc(c)
                    : a === Da
                      ? Ac(c.getFullYear())
                      : a === ia && Jb(c),
            wh());
    }
    function $i() {
        null === T &&
            ((T = h("div", "calendar-tooltip")),
            ya.push(T),
            E.body.appendChild(T),
            (Li = h("div", "ib-close")),
            (xh = h("div", "ib-edit")),
            (yh = h("div", "title-buttons")),
            yh.appendChild(Li),
            yh.appendChild(xh),
            (Sd = h("div", "title")),
            (ag = h("div", "date")),
            (Td = h("div", "duration")),
            (bg = h("div", "repeats")),
            (cg = h("div", "description")),
            (dg = h("div", "location")),
            (Ud = h("div", "url")),
            (Li.onclick = ic),
            (xh.onclick = function () {
                P(Dd);
            }),
            document.body.addEventListener("mousemove", ic));
    }
    function ii(a, c, d, e) {
        C(a);
        rd(Na.showToolTip);
        ic();
        e = p(e) ? e : !1;
        if ("block" !== T.style.display && b.tooltipsEnabled) {
            var f = R(d) ? b.tooltipDelay : b.eventTooltipDelay;
            nd(
                Na.showToolTip,
                function () {
                    if (e || (!E.body.contains(Ka) && !Jg() && !bk() && null === ca)) {
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
                            T.appendChild(yh);
                            T.appendChild(Sd);
                            T.appendChild(ag);
                            T.appendChild(Td);
                            Va(xh, b.manualEditingEnabled);
                            if (Ca(c.url)) {
                                var f = aa(Ud, zg(c.url), "url-text");
                                Ub(T, Ud);
                                f.onclick = function (a) {
                                    C(a);
                                    je(c.url);
                                    ic();
                                };
                            } else (Ud.innerHTML = n.empty), (Ud.onclick = null), gb(T, Ud);
                            H(c.repeatEvery) > x.never &&
                                b.showReoccurringEventIcons &&
                                ((f = h("div", "ib-refresh-medium ib-no-hover ib-no-active")),
                                (f.style.borderColor = Sd.style.color),
                                Sd.appendChild(f));
                            Sd.innerHTML += kc(c.title);
                            Ba(c.repeatEvery) && c.repeatEvery > x.never
                                ? (y(bg, b.repeatsText.replace(":", n.empty) + n.space + pd(c.repeatEvery)), Ub(T, bg))
                                : ((bg.innerHTML = n.empty), gb(T, bg));
                            Ca(c.location) ? (y(dg, c.location), Ub(T, dg)) : ((dg.innerHTML = n.empty), gb(T, dg));
                            Ca(c.description)
                                ? (y(cg, c.description), Ub(T, cg))
                                : ((cg.innerHTML = n.empty), gb(T, cg));
                            c.from.getDate() === c.to.getDate()
                                ? c.isAllDay
                                    ? y(ag, b.allDayText)
                                    : (y(ag, de(c.from, c.to)), y(Td, Ob(c.from, c.to)))
                                : (Ve(ag, c.from, c.to), y(Td, Ob(c.from, c.to)));
                            Td.innerHTML === n.empty && T.removeChild(Td);
                        }
                        tf(a, T);
                    }
                },
                f,
                !1
            );
        }
    }
    function ic() {
        rd(Na.showToolTip);
        Mk() && ((T.style.display = "none"), (Dd = null), (T.onmousemove = null));
    }
    function Mk() {
        return Mi(Na.showToolTip) || (null !== T && "block" === T.style.display);
    }
    function Ra(a, b, d) {
        null !== a &&
            (a.onmousemove = function (a) {
                ii(a, null, b, d);
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
            t(c, "ib-close-icon", b.closeTooltipText, Nk),
            nd(
                Na.hideNotification,
                function () {
                    Nk();
                },
                5e3,
                !1
            ));
    }
    function Nk() {
        fc.style.display = "none";
    }
    function Jh(a, c) {
        if (null !== a) {
            c = p(c) ? c : !0;
            var d = b.dayHeaderNames.length;
            a.innerHTML = n.empty;
            b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday
                ? (Ni(a, b.startOfWeekDay, d), Ni(a, 0, b.startOfWeekDay))
                : Ni(a, 0, d);
            b.reverseOrderDaysOfWeek && c && ld(a);
        }
    }
    function Ni(a, c, d) {
        for (; c < d; c++) b.visibleDays.indexOf(c) > B.notFound && Im(a, c);
    }
    function Im(a, c) {
        var d = b.dayHeaderNames[c],
            e = h("div", Cg());
        y(e, d);
        a.appendChild(e);
        e.oncontextmenu = function (a) {
            if (!r && (fa(a) || mc(), Ga(), b.sideMenu.showDays)) {
                hk = c;
                var d = 1 < b.visibleDays.length ? "block" : "none",
                    e = 1 <= b.workingDays.length && !ae(b.workingDays, b.visibleDays) ? "block" : "none";
                gk.style.display = d;
                ik.style.display = d;
                jk.style.display = e;
                kk.style.display = e;
                C(a);
                tf(a, nb);
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
                d && ((lb = !1), w(b.events.onOptionsUpdated, b), F(v, !0, !0));
            }
        };
    }
    function hf(a) {
        Ma() !== a &&
            (Ok(a, !1), vb.push(a), zh++, db(a) || (a.className += " view-shown"), (a.style.zIndex = zh), kd(), pf());
    }
    function xd(a, b) {
        db(a) && ((a.className = a.className.replace(" view-shown", n.empty)), Ok(a, b), 0 === vb.length && (zh = 0));
    }
    function Ok(a, b) {
        b = p(b) ? b : !0;
        for (var c = [], e = vb.length, f = 0; f < e; f++) {
            var k = vb[f];
            p(k) && k.id !== a.id && c.push(k);
        }
        vb = [].slice.call(c);
        b && pf();
    }
    function db(a) {
        return p(a) && a.className && a.className.indexOf("view-shown") > B.notFound;
    }
    function Dj(a) {
        a = p(a) ? a : !0;
        var b = Ma();
        xd(b, !a);
        0 === vb.length && (zh = 0);
        a && pf();
    }
    function Ma() {
        return 0 < vb.length ? vb[vb.length - 1] : null;
    }
    function pf(a) {
        a = p(a) ? a : !0;
        var c = Ma(),
            d = null;
        null === c
            ? (d = sb.fullMonth)
            : c === W
              ? (d = sb.fullDay)
              : c === da
                ? (d = sb.fullWeek)
                : c === Da
                  ? (d = sb.fullYear)
                  : c === ia
                    ? (d = sb.timeline)
                    : c === ra && (d = sb.allEvents);
        a && R(d) && w(b.events.onViewChange, d);
        return d;
    }
    function Ij(a, b) {
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
    function ug(a, b) {
        var c = Xe(b);
        b = la.floor((a.pageY - c.top) / (b.offsetHeight / 1440)) / 60;
        a = la.floor(b);
        b = la.round(60 * (b - a));
        return [a, b];
    }
    function Kj(a, c, d, e, f) {
        var k = c.offsetHeight,
            m = c.offsetHeight / 1440;
        c = 0;
        var h = null;
        if (!f.isAllDay) {
            h = H(f.repeatEvery);
            if (U(f.from, d) || h > x.never) c = m * eg(f.from);
            h = U(f.to, d) || h > x.never ? m * eg(f.to) - c : k;
            h -= 2 * b.spacing;
        }
        c <= b.spacing && ((c += b.spacing), (h -= b.spacing));
        e.style.top = c + "px";
        null !== h && (e.style.height = h + "px");
        e.offsetTop + e.offsetHeight > k - b.spacing
            ? ((d = k - e.offsetTop - 3 * b.spacing + "px"), (e.style.height = d), (e.style.maxHeight = d))
            : (e.style.maxHeight = k - (e.offsetTop + 2 * b.spacing) - m + "px");
        e = c + a.offsetHeight / 2;
        e <= a.offsetHeight && (e = 0);
        return e;
    }
    function sm(a, c, d, e) {
        var f = a.scrollWidth;
        var k = a.offsetWidth / 1440;
        a = 0;
        var h = H(e.repeatEvery);
        if (U(e.from, c) || h > x.never) a = k * eg(e.from);
        c = U(e.to, c) || h > x.never ? k * eg(e.to) - a : f;
        c -= 2 * b.spacing;
        a <= b.spacing && ((a += b.spacing), (c -= b.spacing));
        d.style.left = a + "px";
        null !== c && (d.style.width = c + "px");
        d.offsetLeft + d.offsetWidth > f - b.spacing
            ? ((f = f - d.offsetLeft - 4 * b.spacing + "px"), (d.style.width = f), (d.style.maxWidth = f))
            : (d.style.maxWidth = f - (d.offsetLeft + 2 * b.spacing) - k + "px");
        return a - b.spacing;
    }
    function Nj(a, b, d, e, f) {
        var c = 0;
        null !== d &&
            (dc(a) && db(b) && f
                ? ((a = (e.offsetHeight / 1440) * eg(new Date())),
                  (d.style.display = "block"),
                  (d.style.top = a - d.offsetHeight / 2 + "px"),
                  (c = a))
                : (d.style.display = "none"));
        return c;
    }
    function Jj(a, b) {
        C(a);
        a = bd(b, "z-index", !1);
        a = null === a || "auto" === a ? 1 : parseInt(a) + 1;
        b.style.zIndex = a.toString();
    }
    function Oj(a) {
        a = a.getElementsByClassName("event");
        a = [].slice.call(a);
        var c = a.length;
        if (1 < c) {
            a.sort(Jm);
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
                                ? (Ah(e),
                                  Ah(k),
                                  (k.style.left = e.offsetLeft + e.offsetWidth + b.spacing + "px"),
                                  e.setAttribute("event-position", "left"),
                                  k.setAttribute("event-position", "right"))
                                : h === n.empty && "right" === g
                                  ? (Ah(e),
                                    e.setAttribute("event-position", "left"),
                                    k.setAttribute("event-position", "right"))
                                  : h === n.empty &&
                                    "left" === g &&
                                    ((e.style.left = k.offsetLeft + k.offsetWidth + b.spacing + "px"),
                                    Ah(e),
                                    e.setAttribute("event-position", "right"),
                                    k.setAttribute("event-position", "left")));
                    }
        }
    }
    function Ah(a) {
        a.style.width = a.offsetWidth / 2 - (3 * b.spacing + b.spacing / 4) + "px";
    }
    function Jm(a, b) {
        var c = 0;
        a.offsetTop < b.offsetTop ? (c = -1) : a.offsetTop > b.offsetTop && (c = 1);
        return c;
    }
    function Hj(a, c, d) {
        C(a);
        null === vg
            ? 0 === a.dataTransfer.files.length
                ? Pk(a, c.getFullYear(), c.getMonth(), c.getDate())
                : Qk(a)
            : (U(yg, c) || ((ca = Qb), (Vd = yg), Rk(a, c.getFullYear(), c.getMonth(), c.getDate())),
              (c = d.offsetHeight / 1440),
              (d = Xe(d)),
              (a = (la.abs(a.pageY) - d.top + xg - wg) / c),
              (Qb.from = fb(Qb.from, a)),
              (Qb.to = fb(Qb.to, a)),
              jb(),
              w(b.events.onEventUpdated, Qb),
              Sa(b.eventUpdatedText.replace("{0}", Qb.title)),
              ma(),
              (Qb = vg = null),
              (wg = xg = 0));
    }
    function Uh(a) {
        C(a);
        if (b.manualEditingEnabled) {
            var c = null;
            a = null;
            var d = 0;
            db(W) ? ((c = wa), (a = Ag), (d = a.length)) : db(da) && ((c = me), (a = di), (d = a.length));
            if (null !== c && 0 < d) {
                c = c.offsetHeight / 1440;
                for (var e = !1, f = 0; f < d; f++) {
                    var k = a[f];
                    k.height !== k.eventElement.offsetHeight &&
                        ((e = (k.eventElement.offsetHeight - k.height) / c),
                        (k.height = k.eventElement.offsetHeight),
                        (k.eventDetails.to = fb(k.eventDetails.to, e)),
                        (e = !0),
                        w(b.events.onEventUpdated, k.eventDetails),
                        Sa(b.eventUpdatedText.replace("{0}", k.eventDetails.title)));
                }
                e && (jb(), ma());
            }
        }
    }
    function Wa() {
        sd ? Sk() : Tk();
    }
    function Tk() {
        !sd && b.fullScreenModeEnabled && (Uk(), w(b.events.onFullScreenModeChanged, !0));
    }
    function Sk() {
        sd &&
            b.fullScreenModeEnabled &&
            ((sd = !1),
            (z.className = z.className.replace(" full-screen-view", n.empty)),
            (z.style.cssText = Vk),
            Wk("ib-arrow-expand-left-right", b.enableFullScreenTooltipText),
            ma(),
            w(b.events.onFullScreenModeChanged, !1));
    }
    function Uk() {
        Vk = z.style.cssText;
        sd = !0;
        z.className += " full-screen-view";
        z.removeAttribute("style");
        Wk("ib-arrow-contract-left-right", b.disableFullScreenTooltipText);
        ma();
    }
    function Wk(a, b) {
        Ie(Gg, a);
        Ie(Yh, a);
        Ie(mi, a);
        Ie($h, a);
        Ie(ki, a);
        Ie(oi, a);
        Ra(Gg, b);
        Ra(Yh, b);
        Ra(mi, b);
        Ra($h, b);
        Ra(ki, b);
        Ra(oi, b);
    }
    function dm(a, c, d) {
        if (b.showHolidays)
            for (var e = [], f = b.holidays.length, k = 0; k < f; k++) {
                var h = b.holidays[k],
                    g = G(h.title, n.empty),
                    p = G(h.backgroundColor, n.empty),
                    q = G(h.textColor, n.empty);
                Mj(h, a) && g !== n.empty && e.indexOf(g.toLowerCase())
                    ? (Km(h, d, g, c),
                      p !== n.empty && d.style.setProperty("background-color", p, "important"),
                      q !== n.empty && d.style.setProperty("color", q, "important"),
                      e.push(g.toLowerCase()))
                    : (d.style.removeProperty("background-color"), d.style.removeProperty("color"));
            }
    }
    function Km(a, c, d, e) {
        var f = Yc(a.onClick) || R(a.onClickUrl) ? "holiday-link" : "holiday",
            k = a.onClick;
        R(a.onClickUrl) &&
            (k = function () {
                Z.open(a.onClickUrl, b.urlWindowTarget);
            });
        aa(c, d, f + e, k, !0, !0);
    }
    function Mj(a, b) {
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
        for (var b in pb)
            if (pb.hasOwnProperty(b))
                for (var d in pb[b])
                    if (pb[b].hasOwnProperty(d)) {
                        var e = Xk(pb[b][d]);
                        if (a(e, b, d)) return;
                    }
    }
    function ub(a, b) {
        b = p(b) ? b : !0;
        a = a.sort(function (a, b) {
            return a.from - b.from;
        });
        b &&
            (a = a.sort(function (a, b) {
                return Yk(b.isAllDay) - Yk(a.isAllDay);
            }));
        return a;
    }
    function Xj(a, c) {
        Ub(E.body, Ka);
        var d = function () {
            gb(E.body, Ka);
        };
        Gf(
            b.confirmEventsRemoveTitle,
            b.confirmEventsRemoveMessage,
            function () {
                var e = 0;
                d();
                xb(function (b) {
                    H(b.repeatEvery) === x.never && c(b.from, a) && (q.removeEvent(b.id, !1), e++);
                });
                jb();
                Sa(b.eventsRemovedText.replace("{0}", e));
                La();
            },
            d
        );
    }
    function Xk(a) {
        a.isAllDay &&
            ((a.from = new Date(a.from.getFullYear(), a.from.getMonth(), a.from.getDate(), 0, 0)),
            (a.to = new Date(a.from.getFullYear(), a.from.getMonth(), a.from.getDate(), 23, 59)));
        return a;
    }
    function pk(a) {
        a = p(a) && N.hasOwnProperty(a) ? a : 0;
        for (var b in N) N.hasOwnProperty(b) && p(N[b].eventEditorInput) && (N[b].eventEditorInput.checked = !1);
        p(N[a].eventEditorInput) && (N[a].eventEditorInput.checked = !0);
    }
    function Bm() {
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
    function Tj(a, b) {
        return a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
    }
    function Ye(a, b) {
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
    function lg(a) {
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
    function Hg(a) {
        var c = b.thText;
        if (31 === a || 21 === a || 1 === a) c = b.stText;
        else if (22 === a || 2 === a) c = b.ndText;
        else if (23 === a || 3 === a) c = b.rdText;
        return c;
    }
    function eg(a) {
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
    function Bg(a) {
        a.setDate(a.getDate() - 1);
    }
    function Xa(a, b) {
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
    function ok(a, b) {
        if ("date" === a.type) {
            var c = ("0" + b.getDate()).slice(-2),
                e = ("0" + (b.getMonth() + 1)).slice(-2);
            a.setAttribute("min", b.getFullYear() + "-" + e + "-" + c);
        }
    }
    function eh(a, b) {
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
    function Nh(a, c) {
        var d = X(c);
        a = a.replace("{dddd}", b.dayNames[d]);
        a = a.replace("{ddd}", b.dayNamesAbbreviated[d]);
        a = a.replace("{dd}", J(c.getDate()));
        a = a.replace("{d}", c.getDate());
        a = a.replace("{o}", Hg(c.getDate()));
        a = a.replace("{mmmm}", b.monthNames[c.getMonth()]);
        a = a.replace("{mmm}", b.monthNamesAbbreviated[c.getMonth()]);
        a = a.replace("{mm}", J(c.getMonth() + 1));
        a = a.replace("{m}", c.getMonth() + 1);
        a = a.replace("{yyyy}", c.getFullYear());
        a = a.replace("{yyy}", c.getFullYear().toString().substring(1));
        a = a.replace("{yy}", c.getFullYear().toString().substring(2));
        return (a = a.replace("{y}", parseInt(c.getFullYear().toString().substring(2)).toString()));
    }
    function Oe(a) {
        if (b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday) a += 7 - b.startOfWeekDay;
        return a;
    }
    function Ue(a, b) {
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
    function Ve(a, c, d) {
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
            ((c = Hg(c.getDate())), p(c) && ((d = h("sup")), (d.innerText = c), a.appendChild(d)));
        p(e) && aa(a, e);
    }
    function bi(a, c, d, e) {
        if (!lf(c) && b.dragAndDropForEventsEnabled && b.manualEditingEnabled) {
            var f = new Date(d),
                k = 0 <= b.weekendDays.indexOf(f.getDay()) ? " drag-not-allowed-weekend-day" : " drag-not-allowed";
            a.setAttribute("draggable", !0);
            a.ondragstart = function (d) {
                w(b.events.onEventDragStart, c);
                d.dataTransfer.setData("event_details", cc.stringify(c));
                Vd = f;
                ca = c;
                p(e) && ((e.className += k), Lm(e));
                Bh(
                    "cell",
                    function (a) {
                        a.className += " prevent-pointer-events";
                    },
                    a
                );
                Bh(
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
                    Dg(e, f.getFullYear(), f.getMonth(), f.getDate()));
                Bh(
                    "cell",
                    function (a) {
                        a.className = a.className.replace(" prevent-pointer-events", n.empty);
                    },
                    a
                );
                Bh(
                    "events",
                    function (a) {
                        a.className = a.className.replace(" prevent-pointer-events", n.empty);
                    },
                    a
                );
            };
        }
    }
    function Dg(a, c, d, e) {
        if (b.dragAndDropForEventsEnabled && b.manualEditingEnabled) {
            var f = new Date(c, d, e);
            a.ondragover = function (b) {
                Zk(b, a, f);
            };
            a.ondragenter = function (b) {
                Zk(b, a, f);
            };
            a.ondragleave = function (b) {
                $k(b, a, f);
            };
            a.ondrop = function (b) {
                C(b);
                $k(b, a, f);
                0 === b.dataTransfer.files.length ? Rk(b, c, d, e) : Qk(b);
            };
        }
    }
    function Lm(a) {
        b.dragAndDropForEventsEnabled &&
            b.manualEditingEnabled &&
            ((a.ondragover = null), (a.ondragenter = null), (a.ondragleave = null), (a.ondrop = null));
    }
    function Zk(a, b, d) {
        C(a);
        null === ca || b.className.indexOf(" drag-over") !== B.notFound || U(Vd, d) || (b.className += " drag-over");
    }
    function $k(a, b, d) {
        C(a);
        null !== ca &&
            b.className.indexOf(" drag-over") > B.notFound &&
            !U(Vd, d) &&
            (b.className = b.className.replace(" drag-over", n.empty));
    }
    function Rk(a, c, d, e) {
        var f = new Date(c, d, e);
        if (null === ca || U(Vd, f)) null === ca && Pk(a, c, d, e);
        else {
            w(b.events.onEventDragDrop, ca, f);
            p(e) || ((a = ad(c, d)), (e = ca.from.getDate()), e > a && (e = a));
            var h = Pc(ca.from, Vd);
            a = Pc(ca.from, ca.to);
            f = new Date(c, d, e, ca.from.getHours(), ca.from.getMinutes());
            c = new Date(c, d, e, ca.to.getHours(), ca.to.getMinutes());
            d = ca.repeatEnds;
            0 < h && (f.setDate(f.getDate() - h), c.setDate(c.getDate() - h));
            p(d) && ((e = Pc(f, ca.from)), f > ca.from ? d.setDate(d.getDate() + e) : d.setDate(d.getDate() - e));
            0 < a && c.setDate(c.getDate() + a);
            q.updateEventDateTimes(ca.id, f, c, d);
            Sa(b.eventUpdatedText.replace("{0}", ca.title));
            La();
        }
    }
    function Pk(a, c, d, e) {
        a = Qe(a.dataTransfer.getData("event_details"));
        if (p(a) && null === ca) {
            var f = new Date(a.from),
                h = new Date(a.to);
            a.from = new Date(c, d, e, f.getHours(), f.getMinutes(), 0, 0);
            a.to = new Date(c, d, e, h.getHours(), h.getMinutes(), 0, 0);
            q.addEvent(a);
            Sa(b.eventAddedText.replace("{0}", a.title));
        }
    }
    function Qk(a) {
        p(Z.FileReader) && b.importEventsEnabled && Oi(a.dataTransfer.files);
    }
    function Qe(a) {
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
                    (al = a.pageX - Fb.offsetLeft),
                    (bl = a.pageY - Fb.offsetTop),
                    (Ch = Fb.offsetLeft),
                    (Dh = Fb.offsetTop));
            }),
            (a.onmouseup = function () {
                cl(d);
            }),
            (a.oncontextmenu = function () {
                cl(null);
            }));
    }
    function cl(a) {
        Wd && ((Wd = !1), (Fb = null), (Dh = Ch = 0), null !== a && a());
    }
    function Ml(a) {
        Wd && ((Fb.style.left = a.pageX - al + "px"), (Fb.style.top = a.pageY - bl + "px"));
    }
    function Nl() {
        Wd && ((Fb.style.left = Ch + "px"), (Fb.style.top = Dh + "px"), (Wd = !1), (Fb = null), (Dh = Ch = 0));
    }
    function lk(a) {
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
        for (var h = d.length, g = 0; g < f; g++) c[g].className = "tab tab-control";
        for (c = 0; c < h; c++) d[c].style.display = "none";
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
    function ff(a, b) {
        Di === b.id && (a.className += " focused-event");
        dl(b.id) && (a.className += " selected-event");
        for (var c = !1, e = ja.length, f = 0; f < e; f++)
            if (ja[f].id === b.id) {
                c = !0;
                break;
            }
        c && (a.className = Pb ? a.className + " cut-event" : a.className + " copy-event");
    }
    function fg(a, b, d) {
        d = p(d) ? d : !1;
        var c = E.getElementsByClassName("event");
        c = [].slice.call(c);
        for (var f = c.length, h = 0; h < f; h++) {
            var g = c[h],
                q = g.getAttribute("event-id");
            null !== q &&
                q === a.toString() &&
                (g.className = d ? g.className.replace(n.space + b, n.empty) : g.className + (n.space + b));
        }
    }
    function em(a, b) {
        if (dc(a) && !r) {
            a = new Date();
            var c = new Date(),
                e = new Date(),
                f = H(b.repeatEvery);
            a.setHours(b.from.getHours(), b.from.getMinutes(), 0, 0);
            c.setHours(b.to.getHours(), b.to.getMinutes(), 0, 0);
            f !== x.never || dc(b.from) || a.setHours(0, 0, 0, 0);
            f !== x.never || dc(b.to) || c.setHours(23, 59, 59, 99);
            Ba(b.alertOffset) && 0 < b.alertOffset && (a = fb(a, -b.alertOffset));
            if (e >= a && e <= c) {
                if (!ib(b.showAsBusy) || b.showAsBusy) pe = !0;
                ((!el.hasOwnProperty(b.id) && !ib(b.showAlerts)) || b.showAlerts) &&
                    fl(
                        function () {
                            Mm(b);
                        },
                        !1,
                        b
                    );
            }
        }
    }
    function Mm(a) {
        el[a.id] = !0;
        new Notification(b.eventNotificationTitle, { body: b.eventNotificationBody.replace("{0}", a.title) }).onclick =
            function () {
                var c = G(a.url);
                c === n.empty ? P(a) : je(c);
                w(b.events.onNotificationClicked, a);
            };
    }
    function Ji() {
        fl(function () {
            "granted" !== Notification.permission && Notification.requestPermission();
        });
    }
    function fl(a, c, d) {
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
            Pb ? fg(e.id, "cut-event", a) : fg(e.id, "copy-event", a);
        }
    }
    function dk(a) {
        ja = [];
        var b = Ea.length;
        if (0 < b) for (a = 0; a < b; a++) ja.push(Ea[a]);
        else ja.push(a);
    }
    function dl(a) {
        for (var b = !1, d = Ea.length, e = 0; e < d; e++)
            if (Ea[e].id === a) {
                b = !0;
                break;
            }
        return b;
    }
    function Wh(a, c) {
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
    function gf(a, b) {
        C(a);
        Ga();
        if (lf(b)) fa(a) || mc();
        else if (fa(a))
            if (dl(b.id)) {
                a = Ea.length;
                for (var c = 0; c < a; c++)
                    if (Ea[c].id === b.id) {
                        Ea.splice(c, 1);
                        break;
                    }
                fg(b.id, "selected-event", !0);
            } else Ea.push(b), fg(b.id, "selected-event", !1);
        else mc();
    }
    function mc() {
        var a = !1,
            b = Ea.length;
        if (0 < b) {
            for (a = 0; a < b; a++) fg(Ea[a].id, "selected-event", !0);
            a = !0;
            Ea = [];
        }
        return a;
    }
    function qj(a) {
        ja = [];
        Pb = p(a) ? a : !1;
        a = Ea.length;
        if (0 < a) {
            for (var b = 0; b < a; b++) ja.push(Ea[b]);
            ge(!1);
        }
    }
    function Qh() {
        0 < b.autoRefreshTimerDelay &&
            !r &&
            $f &&
            nd(
                Na.autoRefresh,
                function () {
                    bj();
                    La();
                },
                b.autoRefreshTimerDelay
            );
    }
    function bj() {
        var a = w(b.events.onEventsFetch);
        if (pa(a))
            for (var c = a.length, d = 0; d < c; d++) {
                var e = a[d];
                q.removeEvent(e.id, !1, !1);
                q.addEvent(e, !1, !1);
            }
    }
    function Ph() {
        0 < b.autoRefreshTimerDelay && !r && $f && rd(Na.autoRefresh);
    }
    function La(a, c) {
        if (b.isWidget) kg ? F() : F(v);
        else if (((a = p(a) ? a : !1), (c = p(c) ? c : !1), lj() || a))
            ma(), kg ? (F(), Uj()) : Ha(), c && w(b.events.onRefresh);
    }
    function lj() {
        return !Mk() && !E.body.contains(Ka) && !Jg() && !bk() && !Pe() && null === ca;
    }
    function nd(a, b, d, e) {
        e = p(e) ? e : !0;
        Mi(a) ||
            (Gb[a] = e
                ? setInterval(b, d)
                : setTimeout(function () {
                      b();
                      delete Gb[a];
                  }, d));
    }
    function rd(a) {
        Mi(a) && (clearTimeout(Gb[a]), delete Gb[a]);
    }
    function Mi(a) {
        return Gb.hasOwnProperty(a) && null !== Gb[a];
    }
    function fj() {
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
        Pi.hasOwnProperty(c) || (Pi[c] = h ? E.createTextNode(n.empty) : E.createElement(c));
        c = Pi[c].cloneNode(!1);
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
        (Je.hasOwnProperty(a) && null !== Je[a]) || (Je[a] = gl(a));
        E.body.contains(Je[a]) || (Je[a] = gl(a));
        return Je[a];
    }
    function gl(a) {
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
    function tf(a, b) {
        var c = a.pageX,
            e = a.pageY,
            f = jj();
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
    function Xe(a) {
        for (var b = 0, d = 0; a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop); )
            (b += a.offsetLeft - a.scrollLeft), (d += a.offsetTop - a.scrollTop), (a = a.offsetParent);
        return { left: b, top: d };
    }
    function jj() {
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
    function Ie(a, b) {
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
    function Va(a, b) {
        null !== a && (a.style.display = b ? "inline-block" : "none");
    }
    function Bh(a, b, d) {
        a = z.getElementsByClassName(a);
        for (var c = a.length, f = 0; f < c; f++)
            for (var h = a[f].children, g = h.length, n = 0; n < g; n++) h[n] !== d && b(h[n]);
    }
    function ld(a) {
        for (var b = a.children, d = b.length - 1; d--; ) a.appendChild(b[d]);
    }
    function ng(a, b) {
        a = E.getElementsByClassName(a);
        a = [].slice.call(a);
        for (var c = a.length, e = 0; e < c; e++) {
            var f = a[e];
            f.id !== za && (p(b) ? (f.className = b) : (f.style.display = "none"));
        }
    }
    function Zh(a, b) {
        for (a = a.getElementsByClassName(b); a[0]; ) a[0].parentNode.removeChild(a[0]);
    }
    function Dk(a, b) {
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
    function qm(a, c) {
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
    function zg(a, b) {
        var c = a;
        b = p(b) ? b : 30;
        a.length > b &&
            ((b = 0 === b % 2 ? b / 2 : (b - 1) / 2), (c = a.substring(0, b) + "..." + a.substring(a.length - b)));
        return c;
    }
    function p(a) {
        return void 0 !== a && null !== a && a !== n.empty;
    }
    function Xh(a) {
        return "function" === typeof a;
    }
    function Yc(a) {
        return p(a) && Xh(a);
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
    function cj(a) {
        return Pa(a) && void 0 !== a.tagName;
    }
    function qk(a) {
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
    function bb(a, b) {
        return R(a) ? a : b;
    }
    function l(a, b) {
        return ib(a) ? a : b;
    }
    function ta(a, b) {
        return Ba(a) ? a : b;
    }
    function gg(a, b) {
        return pa(a) ? a : b;
    }
    function Qi(a, b) {
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
            c = ub(Bd());
            a = c.length;
            for (d = 0; d < a; d++) {
                var e = cc.stringify(c[d]);
                Z.localStorage.setItem("CJS_" + d.toString(), e);
            }
        }
    }
    function Oi(a) {
        for (
            var b = a.length,
                d = [],
                e = [],
                f = function (a, c) {
                    d.push(a);
                    e = e.concat(c);
                    d.length === b && hl(e);
                },
                h = 0;
            h < b;
            h++
        ) {
            var g = a[h],
                n = g.name.split(".").pop().toLowerCase();
            "json" === n ? Nm(g, f) : ("ics" === n || "ical" === n) && Om(g, f);
        }
    }
    function Nm(a, b) {
        var c = new FileReader(),
            e = [];
        c.readAsText(a);
        c.onloadend = function () {
            b(a.name, e);
        };
        c.onload = function (a) {
            a = Qe(a.target.result);
            Pa(a) && a.hasOwnProperty("events") && (a = a.events);
            for (var b = a.length, c = 0; c < b; c++) {
                var d = a[c];
                q.removeEvent(d.id, !1, !1);
                q.addEvent(d, !1, !1) && e.push(d);
            }
        };
    }
    function Om(a, b) {
        var c = new FileReader(),
            e = [];
        c.readAsText(a);
        c.onloadend = function () {
            b(a.name, e);
        };
        c.onload = function (a) {
            il(a.target.result, e);
        };
    }
    function il(a, b) {
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
                        (f.from = Eh(g.split(":").pop())), (f.isAllDay = 8 === g.split(":").pop().length);
                    else if (oa(g, "DTEND:") || oa(g, "DTEND;")) f.to = Eh(g.split(":").pop(), !0);
                    else if (oa(g, "CREATED:")) f.created = Eh(g.split(":").pop());
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
                            p(v) && ((g = Eh(v)), g.setDate(g.getDate() - 1), (l.repeatEnds = g)));
                    }
            }
    }
    function Eh(a, b) {
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
    function Fl() {
        var a = h("input", null, "file");
        a.accept = ".ical, .ics, .json";
        a.multiple = "multiple";
        a.onchange = function () {
            Oi(a.files);
        };
        Hb();
        a.click();
    }
    function hl(a) {
        0 < a.length &&
            (jb(),
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
            g = ub,
            m = [];
        m = p(a) ? m.concat(a) : Bd();
        m = ub(m);
        a = g(m, !1);
        if ("csv" === c) {
            f = a.length;
            g = Ri();
            m = g[0];
            var l = g[1],
                r = [];
            g = [];
            for (var t = 0; t < l; t++) r.push(jl(m[t]));
            g.push(r.join(","));
            for (m = 0; m < f; m++) {
                l = g;
                r = Si(a[m]);
                t = r.length;
                for (var u = 0; u < t; u++) r[u] = jl(r[u]);
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
            f.push("<LastModified>" + Ti() + "</LastModified>");
            f.push("</Calendar>");
            f.push("<Events>");
            for (m = 0; m < g; m++) {
                l = a[m];
                r = Fh(l);
                t = r.length;
                f.push("<Event>");
                for (u = 0; u < t; u++) {
                    var v = r[u];
                    if ("customTags" !== v && l.hasOwnProperty(v) && null !== l[v]) {
                        var y = Ui(v);
                        f.push("<" + y + ">" + Gh(v, l[v]) + "</" + y + ">");
                    }
                }
                f.push("</Event>");
            }
            f.push("</Events>");
            f = f.join(n.newLine);
        } else if ("json" === c) f = ek(a);
        else if ("text" === c) {
            m = d;
            f = [];
            g = a.length;
            p(m) && f.push("Filename: " + m);
            f.push("Last Modified: " + Ti());
            f.push(n.empty);
            for (m = 0; m < g; m++) {
                l = a[m];
                r = Fh(l);
                t = r.length;
                for (u = 0; u < t; u++)
                    (v = r[u]),
                        "customTags" !== v &&
                            l.hasOwnProperty(v) &&
                            null !== l[v] &&
                            f.push(Ui(v) + ": " + Gh(v, l[v]));
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
                    ? (f.push("DTSTART:" + kl(l.from)), f.push("DTEND:" + kl(l.to)))
                    : (f.push("DTSTART:" + Ke(l.from)), f.push("DTEND:" + Ke(l.to)));
                xc(l.created) && ((v = Ke(l.created)), f.push("DTSTAMP:" + v), f.push("CREATED:" + v));
                xc(l.lastUpdated) && f.push("LAST-MODIFIED:" + Ke(l.lastUpdated));
                R(r) && R(t) && f.push("ORGANIZER;CN=" + r + ":MAILTO:" + t);
                u !== x.never && f.push("RRULE:" + Pm(l, u));
                R(l.title) && f.push("SUMMARY:" + hg(l.title));
                R(l.description) && f.push("DESCRIPTION:" + hg(l.description));
                R(l.location) && f.push("LOCATION:" + hg(l.location));
                R(l.url) && f.push("URL:" + hg(l.url));
                R(l.group) && f.push("CATEGORIES:" + hg(l.group));
                if (!ib(l.showAlerts) || l.showAlerts)
                    f.push("BEGIN:VALARM"),
                        f.push("TRIGGER;VALUE=DATE-TIME:" + Ke(l.from)),
                        f.push("ACTION:DISPLAY"),
                        f.push("END:VALARM");
                f.push("END:VEVENT");
            }
            f.push("END:VCALENDAR");
            f = f.join(n.newLineCharacterReturn);
        } else if ("md" === c) {
            f = a.length;
            g = Ri();
            m = g[1];
            g = ["| " + g[0].join(" | ") + " |"];
            l = [];
            for (r = 0; r < m; r++) l.push("---");
            g.push("| " + l.join(" | ") + " |");
            for (m = 0; m < f; m++) (l = Si(a[m])), g.push("| " + l.join(" | ") + " |");
            f = g.join(n.newLine);
        } else if ("html" === c) {
            m = d;
            f = [];
            g = a.length;
            f.push("<!DOCTYPE html>");
            f.push("<html>");
            f.push("<head>");
            f.push('<meta charset="utf-8" />');
            f.push('<meta http-equiv="Last-Modified" content="' + Ti() + ' GMT" />');
            p(m) && f.push("<title>" + m + "</title>");
            f.push("</head>");
            f.push("<body>");
            for (m = 0; m < g; m++) {
                l = a[m];
                r = Fh(l);
                t = r.length;
                f.push("<h3><b>" + l.id + ":</b></h3>");
                f.push("<ul>");
                for (u = 0; u < t; u++)
                    (v = r[u]),
                        "customTags" !== v &&
                            l.hasOwnProperty(v) &&
                            null !== l[v] &&
                            f.push("<li><b>" + Ui(v) + "</b>: " + Gh(v, l[v]) + "</li>");
                f.push("</ul>");
            }
            f.push("</body>");
            f.push("</html>");
            f = f.join(n.newLine);
        } else if ("tsv" === c) {
            f = a.length;
            g = Ri();
            m = g[0];
            l = g[1];
            r = [];
            g = [];
            for (t = 0; t < l; t++) r.push(ll(m[t]));
            g.push(r.join("\t"));
            for (m = 0; m < f; m++) {
                l = g;
                r = Si(a[m]);
                t = r.length;
                for (u = 0; u < t; u++) r[u] = ll(r[u]);
                l.push(r.join("\t"));
            }
            f = g.join(n.newLine);
        }
        f !== n.empty &&
            (e
                ? (Hf.clipboard.writeText(f), Sa(b.eventsExportedText))
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
                  (d = p(d) ? d : fk(m)),
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
    function fk(a, c) {
        c = p(c) ? c : b.exportStartFilename;
        var d = new Date(),
            e = J(d.getDate()) + "-" + J(d.getMonth() + 1) + "-" + d.getFullYear();
        d = J(d.getHours()) + "-" + J(d.getMinutes());
        return c + e + "_" + d + "." + a;
    }
    function ig(a) {
        return a ? b.yesText : b.noText;
    }
    function Le(a) {
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
    function Yk(a, b) {
        b = p(b) ? b : 0;
        return ib(a) ? (a ? 1 : 0) : b;
    }
    function vi(a, b) {
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
    function Hh(a, b) {
        b = p(b) ? b : !1;
        a = Oc(a);
        for (var c = a.length, e = 0; e < c; e++) a[e] = b ? '"' + a[e] + '"' : a[e];
        return a.join(",");
    }
    function Ui(a) {
        return a.charAt(0).toUpperCase() + a.slice(1);
    }
    function Gh(a, c, d) {
        var e = (d = p(d) ? d : !1) ? '"' + G(c) + '"' : G(c);
        "boolean" === typeof c
            ? (e = d ? c.toString() : ig(c))
            : "object" === typeof c && c instanceof Date
              ? (e = d ? '"' + c.toISOString() + '"' : Le(c))
              : "object" === typeof c && c instanceof Array
                ? (e = "repeatEveryExcludeDays" !== a || d ? (d ? "[" + Hh(c) + "]" : Hh(c)) : ml(c))
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
    function ml(a) {
        var c = [];
        if (pa(a))
            for (var d = a.length, e = 0; e < d; e++) {
                var f = a[e] - 1;
                -1 === f && (f = 6);
                c.push(b.dayNames[f]);
            }
        return Hh(c);
    }
    function Ri() {
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
    function Si(a) {
        var b = [];
        b.push(G(a.id));
        b.push(N[H(a.type)].text);
        b.push(Le(a.from));
        b.push(Le(a.to));
        b.push(ig(a.isAllDay));
        b.push(G(a.title));
        b.push(G(a.description));
        b.push(G(a.location));
        b.push(G(a.color));
        b.push(G(a.colorText));
        b.push(G(a.colorBorder));
        b.push(pd(a.repeatEvery));
        b.push(Le(a.repeatEnds));
        b.push(ml(a.repeatEveryExcludeDays));
        b.push(Hh(a.seriesIgnoreDates));
        b.push(Le(a.created));
        b.push(Le(a.lastUpdated));
        b.push(G(a.organizerName));
        b.push(G(a.organizerEmailAddress));
        b.push(G(a.url));
        b.push(ig(a.locked));
        b.push(ig(!ib(a.showAlerts) || a.showAlerts));
        b.push(ig(!ib(a.showAsBusy) || a.showAsBusy));
        b.push(H(a.alertOffset));
        return b;
    }
    function Fh(a) {
        var b = [],
            d;
        for (d in a) a.hasOwnProperty(d) && b.push(d);
        b.sort();
        return b;
    }
    function Ti() {
        var a = new Date(),
            b = Nh("{ddd}, {dd} {mmm} {yyyy}", a);
        return (b += " " + J(a.getHours()) + ":" + J(a.getMinutes()) + ":" + J(a.getSeconds()));
    }
    function jl(a) {
        a = a
            .toString()
            .replace(/(\r\n|\n|\r)/gm, n.empty)
            .replace(/(\s\s)/gm, n.space);
        a = a.replace(/"/g, '""');
        return '"' + a + '"';
    }
    function ek(a) {
        var b = [],
            d = a.length;
        b.push("{");
        b.push('"events": [');
        for (var e = 0; e < d; e++) {
            var f = a[e],
                g = Fh(f),
                h = g.length;
            b.push("{");
            for (var l = 0; l < h; l++) {
                var p = g[l];
                "customTags" !== p &&
                    f.hasOwnProperty(p) &&
                    null !== f[p] &&
                    b.push('"' + p + '":' + Gh(p, f[p], !0) + ",");
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
    function hg(a) {
        return kc(G(a)).replace(/\n|\r/g, n.empty);
    }
    function Ke(a) {
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
    function kl(a) {
        var b = [];
        p(a) && (b.push(a.getFullYear()), b.push(J(a.getMonth() + 1)), b.push(J(a.getDate())));
        return b.join(n.empty);
    }
    function Pm(a, b) {
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
        xc(a.repeatEnds) && ((a = new Date(a.repeatEnds)), a.setDate(a.getDate() + 1), c.push("UNTIL=" + Ke(a)));
        return c.join(";");
    }
    function ll(a) {
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
    function $e(a) {
        p(a) && C(a);
        if (!r || cb)
            (a = new Date(v)),
                a.setMonth(a.getMonth() - 1),
                a.getFullYear() >= b.minimumYear && (F(a), w(b.events.onPreviousMonth, a), qb());
    }
    function af(a) {
        p(a) && C(a);
        if (!r || cb)
            (a = new Date(v)),
                a.setMonth(a.getMonth() + 1),
                a.getFullYear() <= b.maximumYear && (F(a), w(b.events.onNextMonth, a), qb());
    }
    function qg() {
        if (!r || cb) {
            var a = new Date(v);
            a.setFullYear(a.getFullYear() - 1);
            a.getFullYear() >= b.minimumYear && (F(a), w(b.events.onPreviousYear, a), qb());
        }
    }
    function rg() {
        if (!r || cb) {
            var a = new Date(v);
            a.setFullYear(a.getFullYear() + 1);
            a.getFullYear() <= b.maximumYear && (F(a), w(b.events.onNextYear, a), qb());
        }
    }
    function tg() {
        if (!r || cb) {
            var a = new Date();
            if (v.getMonth() !== a.getMonth() || v.getFullYear() !== a.getFullYear()) F(), w(b.events.onToday), qb();
        }
    }
    function nl(a) {
        b = kb(a);
        b.views = kb(b.views);
        b.showDayNumberOrdinals = l(b.showDayNumberOrdinals, !0);
        b.dragAndDropForEventsEnabled = l(b.dragAndDropForEventsEnabled, !0);
        b.exportEventsEnabled = l(b.exportEventsEnabled, !0);
        b.manualEditingEnabled = l(b.manualEditingEnabled, !0);
        b.autoRefreshTimerDelay = ta(b.autoRefreshTimerDelay, 3e4);
        b.fullScreenModeEnabled = l(b.fullScreenModeEnabled, !0);
        b.tooltipDelay = ta(b.tooltipDelay, 1e3);
        b.holidays = gg(b.holidays, [
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
        b.organizerName = bb(b.organizerName, n.empty);
        b.organizerEmailAddress = bb(b.organizerEmailAddress, n.empty);
        b.spacing = ta(b.spacing, 10);
        b.maximumEventTitleLength = ta(b.maximumEventTitleLength, 0);
        b.maximumEventDescriptionLength = ta(b.maximumEventDescriptionLength, 0);
        b.maximumEventLocationLength = ta(b.maximumEventLocationLength, 0);
        b.maximumEventGroupLength = ta(b.maximumEventGroupLength, 0);
        b.eventNotificationsEnabled = l(b.eventNotificationsEnabled, !1);
        b.tooltipsEnabled = l(b.tooltipsEnabled, !0);
        b.urlWindowTarget = bb(b.urlWindowTarget, "_blank");
        b.defaultEventBackgroundColor = bb(b.defaultEventBackgroundColor, "#484848");
        b.defaultEventTextColor = bb(b.defaultEventTextColor, "#F5F5F5");
        b.defaultEventBorderColor = bb(b.defaultEventBorderColor, "#282828");
        b.hideEventsWithoutGroupAssigned = l(b.hideEventsWithoutGroupAssigned, !1);
        b.showHolidays = l(b.showHolidays, !0);
        b.useTemplateWhenAddingNewEvent = l(b.useTemplateWhenAddingNewEvent, !0);
        b.useEscapeKeyToExitFullScreenMode = l(b.useEscapeKeyToExitFullScreenMode, !0);
        b.allowHtmlInDisplay = l(b.allowHtmlInDisplay, !1);
        b.initialDateTime = Qi(b.initialDateTime, null);
        b.data = gg(b.data, null);
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
        b.viewToOpenOnFirstLoad = bb(b.viewToOpenOnFirstLoad, null);
        b.eventColorsEditingEnabled = l(b.eventColorsEditingEnabled, !0);
        b.eventTooltipDelay = ta(b.eventTooltipDelay, 1e3);
        b.jumpToDateEnabled = l(b.jumpToDateEnabled, !0);
        b.shareEventsEnabled = l(b.shareEventsEnabled, !0);
        b.showReoccurringEventIcons = l(b.showReoccurringEventIcons, !0);
        b.dialogMovingEnabled = l(b.dialogMovingEnabled, !0);
        $c(b.visibleDays) && ((b.visibleDays = [0, 1, 2, 3, 4, 5, 6]), (od = []));
        a = bb(b.workingHoursStart, null);
        var c = bb(b.workingHoursEnd, null);
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
        b.views.fullMonth.titleBarDateFormat = bb(b.views.fullMonth.titleBarDateFormat, "{mmmm} {yyyy}");
        b.views.fullMonth.showDayNamesHeaders = l(b.views.fullMonth.showDayNamesHeaders, !0);
        b.views.fullMonth.isPinUpViewEnabled = l(b.views.fullMonth.isPinUpViewEnabled, !1);
        b.views.fullMonth.pinUpViewImageUrls = gg(b.views.fullMonth.pinUpViewImageUrls, []);
        b.views.fullMonth.showMonthButtonsInYearDropDownMenu = l(
            b.views.fullMonth.showMonthButtonsInYearDropDownMenu,
            !0
        );
        b.views.fullMonth.showExtraTitleBarButtons = l(b.views.fullMonth.showExtraTitleBarButtons, !0);
        b.views.fullMonth.pinUpViewImageCssClasses = gg(b.views.fullMonth.pinUpViewImageCssClasses, []);
        b.views.fullMonth.showYearDropDownButtonIcon = l(b.views.fullMonth.showYearDropDownButtonIcon, !0);
        b.views.fullMonth.padDayNumbers = l(b.views.fullMonth.padDayNumbers, !1);
        ib(b.views.fullMonth.allowEventScrolling) ||
            ((b.views.fullMonth.allowEventScrolling = !1),
            b.views.fullMonth.allowEventScrolling && (b.views.fullMonth.maximumEventsPerDayDisplay = 0));
        b.views.fullYear = kb(b.views.fullYear);
        b.views.fullYear.enabled = l(b.views.fullYear.enabled, !0);
        b.views.fullYear.showExtraTitleBarButtons = l(b.views.fullYear.showExtraTitleBarButtons, !0);
        b.views.fullYear.padDayNumbers = l(b.views.fullYear.padDayNumbers, !1);
        b.views.timeline = kb(b.views.timeline);
        b.views.timeline.enabled = l(b.views.timeline.enabled, !0);
        b.views.timeline.defaultAxis = bb(b.views.timeline.defaultAxis, "group");
        b.views.timeline.minutesBetweenSections = ta(b.views.timeline.minutesBetweenSections, 30);
        b.views.timeline.showExtraTitleBarButtons = l(b.views.timeline.showExtraTitleBarButtons, !0);
        b.views.allEvents = kb(b.views.allEvents);
        b.views.allEvents.enabled = l(b.views.allEvents.enabled, !0);
        b.views.allEvents.showExtraTitleBarButtons = l(b.views.allEvents.showExtraTitleBarButtons, !0);
        b.views.allEvents.showEventUrls = l(b.views.allEvents.showEventUrls, !1);
        b.views.datePicker = kb(b.views.datePicker);
        b.views.datePicker.selectedDateFormat = bb(b.views.datePicker.selectedDateFormat, "{d}{o} {mmmm} {yyyy}");
        b.views.datePicker.minimumDate = Qi(b.views.datePicker.minimumDate, null);
        b.views.datePicker.maximumDate = Qi(b.views.datePicker.maximumDate, null);
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
        jg(b.eventTypeNormalText, "Normal", 0);
        jg(b.eventTypeMeetingText, "Meeting", 1);
        jg(b.eventTypeBirthdayText, "Birthday", 2);
        jg(b.eventTypeHolidayText, "Holiday", 3);
        jg(b.eventTypeTaskText, "Task", 4);
        Ji();
    }
    function jg(a, b, d) {
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
        Hf = null,
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
        lb = !1,
        Zd = !1,
        Ne = !1,
        pb = {},
        Cd = {},
        Ea = [],
        ja = [],
        Pb = !1,
        Vd = null,
        ca = null,
        el = {},
        v = null,
        kg = !1,
        Mc = null,
        pe = !1,
        Vj = !1,
        Je = {},
        ya = [],
        Pi = {},
        Gb = {},
        $f = !0,
        Na = {
            windowResize: "WindowResize",
            searchOptionsChanged: "SearchOptionsChanged",
            searchEventsHistoryDropDown: "SearchEventsHistoryDropDown",
            showToolTip: "ShowToolTip",
            autoRefresh: "AutoRefresh",
            hideNotification: "HideNotification",
            sideMenuEvents: "SideMenuEvents",
        },
        tb = null,
        Kb = null,
        mg = !1,
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
        We = null,
        r = !1,
        cb = !1,
        ij = null,
        sb = {
            fullMonth: "full-month",
            fullDay: "full-day",
            fullWeek: "full-week",
            fullYear: "full-year",
            timeline: "timeline",
            allEvents: "all-events",
        },
        vb = [],
        zh = 0,
        vg = null,
        wg = null,
        Qb = null,
        xg = null,
        yg = null,
        z = null,
        Ka = null,
        sd = !1,
        Vk = null,
        od = [],
        W = null,
        bf = null,
        wb = null,
        Nc = null,
        wa = null,
        he = null,
        L = null,
        gc = [],
        Yh = null,
        Ej = null,
        df = null,
        Fj = null,
        Ag = [],
        da = null,
        Qa = null,
        $h = null,
        Qj = null,
        zd = null,
        yd = null,
        Ad = null,
        me = null,
        le = null,
        jf = null,
        hc = [],
        kf = {},
        Sb = null,
        Pj = null,
        ne = null,
        ci = !1,
        Eg = null,
        mf = 0,
        di = [],
        Ib = null,
        nf = [],
        S = null,
        oe = null,
        Mh = null,
        Ig = null,
        Tb = null,
        of = null,
        Rc = {},
        Gg = null,
        Fg = null,
        mb = null,
        Qc = 0,
        ei = null,
        yc = null,
        ed = [],
        Lh = null,
        Da = null,
        ki = null,
        ji = null,
        qe = null,
        sa = null,
        Lg = 0,
        ra = null,
        mi = null,
        Wj = null,
        Ed = null,
        Lb = [],
        sg = [],
        ni = [],
        ia = null,
        oi = null,
        Zj = null,
        Yj = null,
        Ja = null,
        Fd = null,
        qf = null,
        rf = null,
        Ng = {},
        sf = [],
        Bc = [],
        ba = null,
        Mg = null,
        Ya = null,
        re = "location organizerName group organizerEmailAddress url title description".split(" "),
        eb = [],
        Fb = null,
        Ch = 0,
        Dh = 0,
        Wd = !1,
        al = 0,
        bl = 0,
        ab = null,
        Vb = null,
        Vg = null,
        Wg = null,
        Uc = null,
        Ug = null,
        Sc = null,
        Wb = null,
        Xb = null,
        hb = null,
        Yb = null,
        ye = null,
        If = null,
        Jf = null,
        Ab = null,
        ui = null,
        Ld = null,
        Md = null,
        Kd = null,
        ze = null,
        qc = null,
        Kf = null,
        Lf = null,
        Mf = null,
        Nf = null,
        Of = null,
        Zb = null,
        Xg = null,
        Id = null,
        Pf = null,
        Qf = null,
        Rf = null,
        Wc = null,
        ea = {},
        Ef = null,
        Rg = null,
        Jd = null,
        wi = null,
        Sf = null,
        rc = null,
        Be = null,
        Ce = null,
        De = null,
        sc = null,
        Yg = null,
        Zg = null,
        $g = null,
        ah = null,
        bh = null,
        ch = null,
        dh = null,
        Nd = null,
        Xc = null,
        xi = null,
        yi = null,
        Sg = null,
        zi = null,
        Vf = null,
        tc = null,
        Ta = null,
        Ai = null,
        uk = null,
        vk = null,
        wk = null,
        xk = null,
        yk = null,
        zk = null,
        Ak = null,
        uc = null,
        Cb = null,
        ih = null,
        ka = null,
        Qd = null,
        $b = null,
        na = null,
        kh = null,
        jh = null,
        Ge = null,
        Xf = null,
        Yf = null,
        lh = null,
        mh = null,
        nh = null,
        oh = null,
        ph = null,
        qh = null,
        rh = null,
        sh = null,
        th = null,
        Bi = !1,
        Db = [],
        Zc = 0,
        Di = null,
        zb = null,
        ob = null,
        Eb = null,
        Rd = null,
        He = null,
        Ei = null,
        Fi = null,
        Gi = null,
        Hi = null,
        Ii = null,
        uh = null,
        vh = null,
        wc = null,
        bc = null,
        Ia = null,
        pi = null,
        Og = null,
        Gd = null,
        Y = null,
        $a = null,
        ck = null,
        Ff = null,
        Df = null,
        qi = null,
        Cf = null,
        Bf = null,
        wf = null,
        Af = null,
        zf = null,
        yf = null,
        xf = null,
        vf = null,
        uf = null,
        Qg = null,
        Pg = null,
        Oa = null,
        ti = null,
        si = null,
        ri = null,
        Tg = null,
        cf = null,
        ue = null,
        nb = null,
        gk = null,
        ik = null,
        jk = null,
        kk = null,
        hk = null,
        T = null,
        yh = null,
        Li = null,
        xh = null,
        Sd = null,
        ag = null,
        Td = null,
        bg = null,
        cg = null,
        dg = null,
        Ud = null,
        Dd = null,
        fc = null;
    q.turnOnFullScreen = function () {
        r || Tk();
        return q;
    };
    q.turnOffFullScreen = function () {
        r || Sk();
        return q;
    };
    q.isFullScreenActivated = function () {
        return sd;
    };
    q.startTheAutoRefreshTimer = function () {
        r || (($f = !0), Qh());
        return q;
    };
    q.stopTheAutoRefreshTimer = function () {
        r || (Ph(), ($f = !1));
        return q;
    };
    q.destroy = function () {
        if (lb) {
            Ne && Ih(!1);
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
        $e();
        return q;
    };
    q.moveCurrentViewToPreviousDate = function () {
        nj();
        return q;
    };
    q.moveToNextMonth = function () {
        af();
        return q;
    };
    q.moveCurrentViewToNextDate = function () {
        oj();
        return q;
    };
    q.moveToPreviousYear = function () {
        qg();
        return q;
    };
    q.moveToNextYear = function () {
        rg();
        return q;
    };
    q.moveToToday = function () {
        tg();
        return q;
    };
    q.moveCurrentViewToToday = function () {
        pj();
        return q;
    };
    q.getCurrentDisplayDate = function () {
        return new Date(v);
    };
    q.setCurrentDisplayDate = function (a) {
        !xc(a) ||
            (r && !cb) ||
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
            kj(a) &&
                !U(a, Mc) &&
                a.getFullYear() >= b.minimumYear &&
                a.getFullYear() <= b.maximumYear &&
                (a.setHours(0, 0, 0, 0), qd(), Sh(a), w(b.events.onDatePickerDateChanged, a), (Mc = a)));
        return q;
    };
    q.refresh = function () {
        r || La(!0, !0);
        return q;
    };
    q.export = function (a) {
        b.exportEventsEnabled && !r && ((a = bb(a, "csv")), vc(null, a));
        return q;
    };
    q.import = function (a) {
        b.importEventsEnabled && !r && Oi(a);
        return q;
    };
    q.importICalData = function (a) {
        if (b.importEventsEnabled && !r) {
            var c = [];
            il(a, c);
            hl(c);
        }
        return q;
    };
    q.setEvents = function (a, c, d) {
        r || ((d = l(d, !0)), (pb = {}), q.addEvents(a, c, !1), d && w(b.events.onEventsSet, a));
        return q;
    };
    q.setEventsFromJson = function (a, c, d) {
        if (!r) {
            d = l(d, !0);
            var e = Qe(a);
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
            jb();
            d && w(b.events.onEventsAdded, a);
            c && (Mb(), Ha(), ma());
        }
        return q;
    };
    q.addEventsFromJson = function (a, c, d) {
        if (!r) {
            d = l(d, !0);
            var e = Qe(a);
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
            pb.hasOwnProperty(g) || (pb[g] = {});
            if (!pb[g].hasOwnProperty(h)) {
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
                v === n.empty || qk(v) || (a.url = n.empty);
                xc(a.created) || (a.created = new Date());
                e && (a.lastUpdated = new Date());
                pb[g][h] = Xk(a);
                f = !0;
                d && w(b.events.onEventAdded, a);
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
            d && w(b.events.onEventsUpdated, a);
            c && (jb(), Mb(), Ha(), ma());
        }
        return q;
    };
    q.updateEvent = function (a, c, d, e) {
        var f = !1;
        !r &&
            (f = q.removeEvent(a, !1, !1)) &&
            ((d = l(d, !0)), (e = l(e, !0)), (f = q.addEvent(c, d, !1)), jb(), f && e && w(b.events.onEventUpdated, c));
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
                        delete pb[g][h], (e = !0), d && w(b.events.onEventRemoved, f), c && (jb(), Mb(), Ha(), ma()), !0
                    );
            }));
        return e;
    };
    q.clearEvents = function (a, c) {
        r ||
            ((a = l(a, !0)),
            (c = l(c, !0)),
            (pb = {}),
            c && w(b.events.onEventsCleared),
            a && (jb(), Mb(), Ha(), ma()));
        return q;
    };
    q.getEvents = function () {
        var a = [];
        r || (a = ub(Bd()));
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
            c && w(b.events.onVisibleEventTypesChanged, O.visibleEventTypes);
        }
        return q;
    };
    q.getAllGroups = function () {
        return fj();
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
        return pf(!1);
    };
    q.setOptions = function (a, c) {
        for (var d in a) a.hasOwnProperty(d) && (b[d] = a[d]);
        nl(b);
        hj();
        Ji();
        lb && ((c = l(c, !0)) && w(b.events.onOptionsUpdated, b), (lb = !1), (r && !cb) || F(v, !0, !0));
        return q;
    };
    q.setSearchOptions = function (a, c) {
        if (!r) {
            a = kb(a);
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
        Hf = d;
        la = e;
        cc = f;
        za = I;
        if (R(za) || cj(za))
            nl(ua),
                (u = kb(V, b.searchOptions)),
                (u.enabled = l(u.enabled, !0)),
                (u.lastSearchText = bb(u.lastSearchText, n.empty)),
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
                (u.history = gg(u.history, [])),
                F(b.initialDateTime, !0),
                null !== z && ib(b.openInFullScreenMode) && b.openInFullScreenMode && !r && Uk();
    })(document, window, navigator, Math, JSON);
};