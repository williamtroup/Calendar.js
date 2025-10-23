/*! Calendar.js v2.12.4 | (c) Bunoon 2025 | MIT License */
function calendarJs(K, va, X) {
    function F(a, c, d) {
        y = yc(a) ? a : new Date();
        c = p(c) ? c : !1;
        d = p(d) ? d : !1;
        a = c;
        if (b.isWidget)
            (lg = ec(y)),
                nb || (Xd(!0), null !== z && (Vi(), Wi(), Xi(), Yi(), Zi(), Me || (Ih(), (Me = !0)), $i(), Wd(), Le())),
                jl();
        else {
            y.setDate(1);
            y.setHours(0, 0, 0, 0);
            c = y;
            var e = new Date();
            lg = c.getFullYear() === e.getFullYear() && c.getMonth() === e.getMonth();
            c = new Date(y.getFullYear(), y.getMonth(), 1);
            e = Ne(0 === c.getDay() ? 7 : c.getDay());
            c = !Yd;
            Oe() && Ib();
            Ia();
            if (!nb && (Xd(), null !== z)) {
                q ||
                    (null === Zd &&
                        ((Zd = g("div", "side-menu-disabled-background")), (Zd.onclick = Ib), z.appendChild(Zd)),
                    kl());
                ll();
                ml();
                null === Jb && ((Jb = g("div", "full-month-view")), (Jb.id = fc()), z.appendChild(Jb));
                nl();
                if (!q) {
                    var f = null !== ob;
                    if (b.views.fullMonth.isPinUpViewEnabled) {
                        f || ((ob = g("div", "pin-up")), Jb.appendChild(ob));
                        f = b.views.fullMonth.pinUpViewImageUrls.length;
                        if (0 < f)
                            for (var k = 0; k < f; k++) new Image().src = b.views.fullMonth.pinUpViewImageUrls[k];
                        Yd || sb();
                    } else f && (Jb.removeChild(ob), (ob = null));
                }
                f = null !== zc;
                b.views.fullMonth.showDayNamesHeaders
                    ? (f && (zc.innerHTML = n.empty),
                      f || ((zc = g("div", "row-cells header-days")), Jb.appendChild(zc)),
                      q && (zc.onclick = B),
                      Jh(zc))
                    : f && (Jb.removeChild(zc), (zc = null));
                aj();
                ol();
                pl();
                ql();
                Me || (Ih(), (Me = !0));
                Wd();
                Le();
            }
            if (1 < e) {
                f = new Date(y);
                f.setMonth(f.getMonth() - 1);
                k = bd(f.getFullYear(), f.getMonth());
                for (var l = 1, E = k - e + 1; E < k; E++) {
                    var I = E === k - 1;
                    Kh(E + 1, l, f.getMonth(), f.getFullYear(), !0, I);
                    l++;
                }
            }
            f = 0;
            k = bd(y.getFullYear(), y.getMonth());
            for (l = 0; l < k; l++) (f = e + l), Kh(l + 1, f, y.getMonth(), y.getFullYear(), !1);
            k = f;
            if (42 > k) {
                f = 1;
                e = new Date(y);
                e.setMonth(e.getMonth() + 1);
                for (k += 1; 43 > k; k++) (l = 1 === f), Kh(f, k, e.getMonth(), e.getFullYear(), !0, l), f++;
                f = bd(e.getFullYear(), e.getMonth());
                f = na.round(f / 2);
                Lh = new Date(e.getFullYear(), e.getMonth(), f);
            } else Lh = null;
            Ja();
            a &&
                (Vi(),
                Wi(),
                Xi(),
                Yi(),
                Zi(),
                rl(),
                sl(),
                tl(),
                ul(),
                $i(),
                q || (vl(), wl(), xl(), yl()),
                null !== gc || q || ((gc = g("div", "calendar-notification")), Aa.push(gc), D.body.appendChild(gc)));
            d && Ma(!0, !1);
            null !== z &&
                ((Mh.innerText = Nh(b.views.fullMonth.titleBarDateFormat, y)),
                c &&
                    T(b.viewToOpenOnFirstLoad) &&
                    (b.viewToOpenOnFirstLoad.toLowerCase() === tb.fullDay && b.views.fullDay.enabled
                        ? Wa()
                        : b.viewToOpenOnFirstLoad.toLowerCase() === tb.fullWeek && b.views.fullWeek.enabled
                          ? Ac()
                          : b.viewToOpenOnFirstLoad.toLowerCase() === tb.fullYear && b.views.fullYear.enabled
                            ? Bc()
                            : b.viewToOpenOnFirstLoad.toLowerCase() === tb.timeline && b.views.timeline.enabled
                              ? Kb()
                              : b.viewToOpenOnFirstLoad.toLowerCase() === tb.allEvents &&
                                b.views.allEvents.enabled &&
                                Oh()));
        }
    }
    function Wd() {
        wa(b.data) && r.addEvents(b.data, !1, !1, !1);
        if (b.useLocalStorageForEvents && ba.localStorage)
            for (var a = ba.localStorage.length, c = 0; c < a; c++) {
                var d = ba.localStorage.getItem(ba.localStorage.key(c));
                d = Pe(d);
                p(d) && r.addEvent(d, !1, !1, !1);
            }
        bj();
    }
    function Le() {
        nb = !0;
        Yd || (x(b.events.onRender, Ba), (Yd = !0));
    }
    function Xd(a) {
        a = p(a) ? a : !1;
        if (null === z) {
            if (cj(Ba)) {
                var c = Ba;
                Ba = c.id;
                T(Ba) || (Ba = fc());
            } else c = Ca(Ba);
            null !== c &&
                ("input" !== c.tagName.toLowerCase() || ("text" !== c.type && "date" !== c.type)
                    ? ((z = c),
                      (z.className = a ? "calendar-widget" : "calendar"),
                      (z.innerHTML = n.empty),
                      100 <= Qe(z, "height")
                          ? (z.className += n.space + "fixed-height")
                          : z.style.removeProperty("height"))
                    : ((Re = a = c),
                      hc(Re, "hidden"),
                      (Cc = g("input", "calendar-date-picker-input")),
                      (Cc.readOnly = !0),
                      (Cc.placeholder = b.selectDatePlaceholderText),
                      (q = !0),
                      (c = g("div", "calendar-date-picker")),
                      a.insertAdjacentElement("afterend", c),
                      a.remove(a),
                      c.appendChild(Re),
                      c.appendChild(Cc),
                      (z = g("div", "calendar calendar-hidden")),
                      (z.id = Ba),
                      c.appendChild(z),
                      (Cc.onclick = zl),
                      D.addEventListener("click", cd),
                      dj(),
                      (c = Re.value.split("/")),
                      (a = null),
                      3 === c.length &&
                          ((c = new Date(parseInt(c[2]), parseInt(c[1]) - 1, parseInt(c[0]))),
                          c instanceof Date && !isNaN(c) && (a = c)),
                      null === a ? (a = new Date()) : Ph(a),
                      a.setHours(0, 0, 0, 0),
                      (Dc = a)));
        }
    }
    function kl() {
        Yd ||
            ((ub = g("div", "side-menu custom-scroll-bars dark-thumb-scroll")),
            (ub.onclick = B),
            z.appendChild(ub),
            (Lb = g("div", "main-header")),
            ub.appendChild(Lb));
        Lb.innerHTML = n.empty;
        ra(Lb, b.sideMenuHeaderText);
        t(Lb, "ib-close", b.closeTooltipText, Ib);
        (b.configurationDialogEnabled || b.exportEventsEnabled || (b.importEventsEnabled && b.manualEditingEnabled)) &&
            Lb.appendChild(g("div", "right-divider-line"));
        b.configurationDialogEnabled &&
            t(Lb, "ib-octagon-hollow", b.configurationTooltipText, function () {
                Ib();
                ej();
            });
        ((b.configurationDialogEnabled && b.exportEventsEnabled) ||
            (b.importEventsEnabled && b.manualEditingEnabled)) &&
            Lb.appendChild(g("div", "right-divider-line"));
        b.exportEventsEnabled &&
            (dd = t(Lb, "ib-arrow-down-full-line", b.exportEventsTooltipText, function () {
                var a = Na();
                null === a ? ed(fd) : a === Y ? ed(ic) : a === fa ? ed(jc) : a === ka ? ed(Ec) : a === sa && ed(Mb);
            }));
        b.importEventsEnabled &&
            b.manualEditingEnabled &&
            t(Lb, "ib-arrow-up-full-line", b.importEventsTooltipText, Al);
        Yd || ((Fc = g("div", "content")), ub.appendChild(Fc));
    }
    function fj(a) {
        var c = Se(Gc) || !0 === a,
            d = Se(gd, !0),
            e = Se(hd, !0),
            f = Se(Hc, !0);
        a = Se(Ic, !0);
        Fc.innerHTML = n.empty;
        Ic = id = Hc = jd = hd = Jc = gd = Kc = Gc = kd = null;
        ld();
        var k = Na();
        null === k
            ? Xa(dd, 0 < fd.length)
            : k === Y
              ? Xa(dd, 0 < ic.length)
              : k === sa
                ? Xa(dd, 0 < Mb.length)
                : k === fa
                  ? Xa(dd, 0 < jc.length)
                  : k === ka
                    ? Xa(dd, 0 < Ec.length)
                    : Xa(dd, !1);
        if (b.sideMenu.showDays) {
            var l = c;
            l = p(l) ? l : !0;
            kd = g("div", "content-section content-section-opened");
            Gc = g("div", "checkbox-container");
            Fc.appendChild(kd);
            c = 0;
            k = 7;
            var E = !1,
                I = [];
            Te(kd, Gc, b.sideMenuDaysText, l, I);
            kd.appendChild(Gc);
            if (b.startOfWeekDay === xa.saturday || b.startOfWeekDay === xa.sunday) (c = b.startOfWeekDay), (E = !0);
            for (; c < k; c++)
                (l = b.visibleDays.indexOf(c) > A.notFound),
                    I.push(M(Gc, b.dayNames[c], Lc, c.toString(), l, null, Mc)[0]);
            if (E)
                for (k = b.startOfWeekDay, c = 0; c < k; c++)
                    (E = b.visibleDays.indexOf(c) > A.notFound),
                        I.push(M(Gc, b.dayNames[c], Lc, c.toString(), E, null, Mc)[0]);
            b.reverseOrderDaysOfWeek && md(Gc);
        }
        if (b.sideMenu.showEventTypes) {
            d = p(d) ? d : !0;
            gd = Kc = null;
            c = !1;
            k = [];
            for (var h in P)
                P.hasOwnProperty(h) &&
                    (c ||
                        ((Kc = g("div", "content-section content-section-opened")),
                        Fc.appendChild(Kc),
                        (gd = g("div", "checkbox-container")),
                        Te(Kc, gd, b.eventTypesText, d, k),
                        Kc.appendChild(gd),
                        (c = !0)),
                    (I = !0),
                    p(Q.visibleEventTypes) && (I = Q.visibleEventTypes.indexOf(parseInt(h)) > A.notFound),
                    k.push(M(gd, P[h].text, Lc, h, I, null, Mc)[0]));
        }
        if (
            b.sideMenu.showGroups &&
            ((c = e), (c = p(c) ? c : !0), (hd = Jc = null), (h = gj()), (e = h.length), 0 < e)
        )
            for (
                d = [],
                    Jc = g("div", "content-section content-section-opened"),
                    hd = g("div", "checkbox-container"),
                    Fc.appendChild(Jc),
                    Te(Jc, hd, b.groupsText, c, d),
                    Jc.appendChild(hd),
                    c = 0;
                c < e;
                c++
            )
                (k = h[c]),
                    (I = k.toLowerCase()),
                    (E = !0),
                    p(Q.visibleGroups) && (E = Q.visibleGroups.indexOf(I) > A.notFound),
                    d.push(M(hd, k, Lc, I, E, null, Mc)[0]);
        if (b.sideMenu.showWorkingDays) {
            c = f;
            c = p(c) ? c : !0;
            jd = g("div", "content-section content-section-opened");
            Hc = g("div", "checkbox-container");
            Fc.appendChild(jd);
            f = 0;
            h = 7;
            d = !1;
            e = [];
            Te(jd, Hc, b.workingDaysText, c, e);
            jd.appendChild(Hc);
            if (b.startOfWeekDay === xa.saturday || b.startOfWeekDay === xa.sunday) (f = b.startOfWeekDay), (d = !0);
            for (; f < h; f++)
                (c = b.workingDays.indexOf(f) > A.notFound),
                    e.push(M(Hc, b.dayNames[f], Lc, f.toString(), c, null, Mc)[0]);
            if (d)
                for (h = b.startOfWeekDay, f = 0; f < h; f++)
                    (d = b.workingDays.indexOf(f) > A.notFound),
                        e.push(M(Hc, b.dayNames[f], Lc, f.toString(), d, null, Mc)[0]);
            b.reverseOrderDaysOfWeek && md(Hc);
        }
        if (b.sideMenu.showWeekendDays) {
            d = a;
            d = p(d) ? d : !0;
            id = g("div", "content-section content-section-opened");
            Ic = g("div", "checkbox-container");
            Fc.appendChild(id);
            a = 1;
            f = 8;
            e = !1;
            h = [];
            Te(id, Ic, b.weekendDaysText, d, h);
            id.appendChild(Ic);
            if (b.startOfWeekDay === xa.saturday || b.startOfWeekDay === xa.sunday)
                (a = b.startOfWeekDay + 1), (e = !0);
            for (; a < f; a++)
                (d = 6 < a ? 0 : a),
                    (c = b.weekendDays.indexOf(d) > A.notFound),
                    h.push(M(Ic, b.dayNames[a - 1], Lc, d.toString(), c, null, Mc)[0]);
            if (e)
                for (f = b.startOfWeekDay + 1, a = 1; a < f; a++)
                    (e = 6 < a ? 0 : a),
                        (d = b.weekendDays.indexOf(e) > A.notFound),
                        h.push(M(Ic, b.dayNames[a - 1], Lc, e.toString(), d, null, Mc)[0]);
            b.reverseOrderDaysOfWeek && md(Ic);
        }
    }
    function nd() {
        return (
            b.sideMenu.showDays ||
            b.sideMenu.showEventTypes ||
            b.sideMenu.showGroups ||
            b.sideMenu.showWorkingDays ||
            b.sideMenu.showWeekendDays
        );
    }
    function Nb() {
        Oe() && fj();
    }
    function Nc(a) {
        fj(p(a) ? a : !1);
        mg = !1;
        ub.className += " side-menu-open";
        Zd.style.display = "block";
        od(
            Oa.sideMenuEvents,
            function () {
                D.body.addEventListener("click", Ib);
            },
            500,
            !1
        );
    }
    function Ib() {
        if (null !== ub) {
            ub.className = "side-menu custom-scroll-bars";
            Zd.style.display = "none";
            if (mg) {
                var a = !1,
                    c = !1;
                if (null !== Jc) {
                    var d = Ue(Jc);
                    $d(Q.visibleGroups, d) ||
                        ((Q.visibleGroups = [].slice.call(d)),
                        (c = !0),
                        x(b.events.onVisibleGroupsChanged, Q.visibleGroups));
                }
                null !== Kc &&
                    ((d = Ue(Kc, !0)),
                    $d(Q.visibleEventTypes, d) ||
                        ((Q.visibleEventTypes = [].slice.call(d)),
                        (c = !0),
                        x(b.events.onVisibleEventTypesChanged, Q.visibleEventTypes)));
                null !== kd &&
                    ((d = Ue(kd, !0)),
                    1 <= d.length &&
                        !$d(b.visibleDays, d) &&
                        ((b.visibleDays = [].slice.call(d)), (pd = []), (c = a = !0)));
                null !== jd &&
                    ((d = Ue(jd, !0)), $d(b.workingDays, d) || ((b.workingDays = [].slice.call(d)), (c = a = !0)));
                null !== id && ((d = Ue(id, !0)), $d(b.weekendDays, d) || ((b.weekendDays = d), (c = a = !0)));
                c && (a && x(b.events.onOptionsUpdated, b), (nb = !1), F(y, !0, !0));
            }
            kc();
            D.body.removeEventListener("click", Ib);
        }
    }
    function Oe() {
        return null !== ub && ub.className.indexOf("side-menu-open") > A.notFound;
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
        var k = g("div", "text-header");
        a.appendChild(k);
        v(k, d + ":");
        var l = g("div", "ib-arrow-up-full");
        k.appendChild(l);
        if (b.sideMenu.showSelectAllNoneButtons) {
            var E = g("div", "right-divider-line");
            k.appendChild(E);
            var I = t(k, "ib-square", b.selectAllText, function (a) {
                    hj(a, f, !0);
                }),
                h = t(k, "ib-square-hollow", b.selectNoneText, function (a) {
                    hj(a, f, !1);
                });
        }
        k.onclick = function () {
            var d = "none" === c.style.display;
            k.className = d ? "text-header" : "text-header-closed";
            c.style.display = d ? "block" : "none";
            l.className = d ? "ib-arrow-up-full" : "ib-arrow-down-full";
            a.className = d ? "content-section content-section-opened" : "content-section";
            b.sideMenu.showSelectAllNoneButtons &&
                ((E.style.display = d ? "block" : "none"),
                (I.style.display = d ? "block" : "none"),
                (h.style.display = d ? "block" : "none"));
        };
        e ||
            ((c.style.display = "none"),
            (k.className = "text-header-closed"),
            (l.className = "ib-arrow-down-full"),
            (a.className = "content-section"),
            b.sideMenu.showSelectAllNoneButtons &&
                ((E.style.display = "none"), (I.style.display = "none"), (h.style.display = "none")));
    }
    function hj(a, b, d) {
        B(a);
        a = b.length;
        for (var c = !1, f = 0; f < a; f++) b[f].checked !== d && ((b[f].checked = d), (c = !0));
        mg = c;
    }
    function Se(a, b) {
        return b && null === a ? !1 : null === a || "none" !== a.style.display;
    }
    function Lc() {
        mg = !0;
    }
    function jl() {
        Qh();
        z.innerHTML = n.empty;
        var a = Z(y),
            c = g("div", "day-name");
        v(c, b.dayNames[a]);
        z.appendChild(c);
        t(c, "ib-arrow-right-full", b.nextDayTooltipText, Bl);
        t(c, "ib-arrow-left-full", b.previousDayTooltipText, Cl);
        c.appendChild(g("div", "right-divider-line"));
        b.manualEditingEnabled &&
            t(c, "ib-plus", b.addEventTooltipText, function () {
                R(null, new Date(y));
            });
        t(c, "ib-pin", b.todayTooltipText, Dl);
        a = g("div", "day-date");
        lc(a, y, !1, !0, !1);
        z.appendChild(a);
        El();
        Rh();
    }
    function El() {
        var a = g("div", "events custom-scroll-bars"),
            c = [];
        z.appendChild(a);
        Sh(y, c);
        c = vb(c);
        var d = c.length;
        if (0 < d)
            for (var e = 0; e < d; e++) {
                var f = a,
                    k = c[e],
                    l = g("div", "event");
                f.appendChild(l);
                ae(l, k, Ve(k, y));
                be(l, k);
                l.id = "widget-day-" + k.id;
                l.setAttribute("event-type", H(k.type));
                l.setAttribute("event-id", k.id);
                l.setAttribute("event-is-all-day", k.isAllDay);
                if (!x(b.events.onWidgetEventRender, l, k)) {
                    var E = g("div", "title");
                    if (H(k.repeatEvery) > w.never && b.showReoccurringEventIcons) {
                        var I = g("div", "ib-refresh-medium ib-no-hover ib-no-active");
                        I.style.borderColor = l.style.color;
                        E.appendChild(I);
                    }
                    E.innerHTML += mc(k.title);
                    l.appendChild(E);
                    E = g("div", "date");
                    l.appendChild(E);
                    I = g("div", "duration");
                    l.appendChild(I);
                    k.from.getDate() === k.to.getDate()
                        ? k.isAllDay
                            ? Ob(E, k.from, null, " - " + b.allDayText)
                            : (Ob(E, k.from, null, " - " + ce(k.from, k.to)), v(I, Pb(k.from, k.to)))
                        : (We(E, k.from, k.to), v(I, Pb(k.from, k.to)));
                    I.innerHTML === n.empty && l.removeChild(I);
                    Da(k.repeatEvery) &&
                        k.repeatEvery > w.never &&
                        ((E = g("div", "repeats")),
                        v(E, b.repeatsText.replace(":", n.empty) + n.space + qd(k.repeatEvery)),
                        l.appendChild(E));
                    Ea(k.location) && ((E = g("div", "location")), v(E, k.location), l.appendChild(E));
                    Ea(k.description) && ((E = g("div", "description")), v(E, k.description), l.appendChild(E));
                }
                f.scrollHeight > f.clientHeight &&
                    f.className.indexOf(" scroll-margin") === A.notFound &&
                    (f.className += " scroll-margin");
            }
        else ra(a, b.noEventsAvailableFullText);
    }
    function Dl(a) {
        B(a);
        F();
    }
    function Bl(a) {
        B(a);
        a = new Date(y);
        a.setDate(a.getDate() + 1);
        a.getFullYear() <= b.maximumYear && F(a);
    }
    function Cl(a) {
        B(a);
        a = new Date(y);
        a.setDate(a.getDate() - 1);
        a.getFullYear() >= b.minimumYear && F(a);
    }
    function dj() {
        q &&
            ((b.exportEventsEnabled = !1),
            (b.manualEditingEnabled = !1),
            (b.fullScreenModeEnabled = !1),
            (b.eventNotificationsEnabled = !1),
            (b.views.fullMonth.showPreviousNextMonthNames = !1),
            (b.views.fullMonth.showExtraTitleBarButtons = !1),
            (b.holidays = []));
    }
    function zl(a) {
        B(a);
        ng("calendar calendar-shown", "calendar calendar-hidden");
        if (eb) (z.className = "calendar calendar-hidden"), Ia(), x(b.events.onDatePickerClosed, Ba);
        else {
            z.className = "calendar calendar-shown";
            F(new Date(Dc), !nb);
            x(b.events.onDatePickerOpened, Ba);
            a = ij;
            null === a && (a = ij = z.offsetTop);
            z.style.top = a + "px";
            var c = Xe(z),
                d = jj();
            c.top - d.top + z.offsetHeight > ba.innerHeight
                ? ((c = Qe(z, "border-width")),
                  (d = Qe(Cc, "border-width")),
                  (a -= z.offsetHeight + Cc.clientHeight + 4 * c + 2 * d),
                  (z.className += " calendar-shadow-top"),
                  (z.style.top = a + "px"))
                : (z.className += " calendar-shadow-bottom");
        }
        eb = !eb;
    }
    function cd() {
        eb && ((z.className = "calendar calendar-hidden"), (eb = !1), Ia(), x(b.events.onDatePickerClosed, Ba));
    }
    function Ph(a) {
        Cc.value = Nh(b.views.datePicker.selectedDateFormat, a);
        Re.value = a.getFullYear() + "-" + L(a.getMonth() + 1) + "-" + L(a.getDate());
    }
    function kj(a) {
        var c = !0;
        null !== b.views.datePicker.minimumDate && (c = Ye(b.views.datePicker.minimumDate, a));
        c && null !== b.views.datePicker.maximumDate && (c = Ye(a, b.views.datePicker.maximumDate));
        return c;
    }
    function Ih(a) {
        var c = (a = p(a) ? a : !0) ? D.body.addEventListener : D.body.removeEventListener,
            d = a ? D.addEventListener : D.removeEventListener;
        a = a ? ba.addEventListener : ba.removeEventListener;
        c("click", Fl);
        c("contextmenu", Th);
        c("mousemove", Gl);
        c("mouseup", Uh);
        c("mouseleave", Hl);
        d("scroll", Th);
        a("resize", Th);
        a("resize", Vh);
        a("resize", Il);
        a("blur", Jl);
        b.shortcutKeysEnabled && d("keydown", Kl);
    }
    function Fl(a) {
        Ia();
        ia(a) || nc();
    }
    function Jl() {
        Ia();
        kc();
        q && cd();
    }
    function Il() {
        rd(Oa.windowResize);
        od(
            Oa.windowResize,
            function () {
                Ma(!0, !1);
            },
            50,
            !1
        );
    }
    function Th() {
        Ia();
    }
    function Ia(a) {
        var b = !1;
        a = p(a) ? a : !0;
        og(Ka) && (b = !0);
        og(aa) && (b = !0);
        og(Pa) && (b = !0);
        og(pb) && (b = !0);
        pg() && (b = !0);
        kc();
        ng("calendar-context-menu");
        ng("years-drop-down");
        ng("years-drop-down-no-months");
        a && Ze();
        return b;
    }
    function Kl(a) {
        if (q)
            eb &&
                (a.keyCode === S.escape
                    ? (a.preventDefault(), cd())
                    : ia(a) && a.keyCode === S.left
                      ? (a.preventDefault(), qg())
                      : ia(a) && a.keyCode === S.right
                        ? (a.preventDefault(), rg())
                        : a.keyCode === S.left
                          ? (a.preventDefault(), $e())
                          : a.keyCode === S.right
                            ? (a.preventDefault(), af())
                            : a.keyCode === S.down && (a.preventDefault(), sg()));
        else if (Oe()) a.keyCode === S.escape && Oe() && (a.preventDefault(), Ib());
        else {
            if (sd) {
                var c = lj();
                ia(a) && a.keyCode === S.left && c
                    ? (a.preventDefault(), qg())
                    : ia(a) && a.keyCode === S.right && c
                      ? (a.preventDefault(), rg())
                      : a.keyCode === S.escape
                        ? !mj() && c && b.useEscapeKeyToExitFullScreenMode && Ya()
                        : a.keyCode === S.left && c
                          ? (a.preventDefault(),
                            (c = Na()),
                            null === c ? $e() : c === Y ? nj() : c === fa ? oj() : c === Fa ? pj() : c === ka && qj())
                          : a.keyCode === S.right && c
                            ? (a.preventDefault(),
                              (c = Na()),
                              null === c ? af() : c === Y ? rj() : c === fa ? sj() : c === Fa ? tj() : c === ka && uj())
                            : a.keyCode === S.down && c
                              ? (a.preventDefault(),
                                (c = Na()),
                                null === c
                                    ? sg()
                                    : c === Y
                                      ? vj()
                                      : c === fa
                                        ? wj()
                                        : c === Fa
                                          ? xj()
                                          : c === ka && yj())
                              : a.keyCode === S.f5 && c && Ma(!1, !0);
            } else a.keyCode === S.escape && mj();
            if (ia(a) && a.shiftKey && a.keyCode === S.a)
                a.preventDefault(), b.manualEditingEnabled && R(null, new Date());
            else if (ia(a) && a.shiftKey && a.keyCode === S.c) a.preventDefault(), zj();
            else if (ia(a) && a.shiftKey && a.keyCode === S.e)
                a.preventDefault(),
                    b.exportEventsEnabled &&
                        ((a = []),
                        (c = Na()),
                        null === c
                            ? (a = fd)
                            : c === Y
                              ? (a = ic)
                              : c === fa
                                ? (a = jc)
                                : c === ka
                                  ? (a = Ec)
                                  : c === sa && (a = Mb),
                        0 < a.length && ed(a));
            else if (ia(a) && a.shiftKey && a.keyCode === S.g) a.preventDefault(), b.configurationDialogEnabled && ej();
            else if (ia(a) && a.shiftKey && a.keyCode === S.j) a.preventDefault(), de();
            else if (ia(a) && a.shiftKey && a.keyCode === S.f)
                a.preventDefault(),
                    (a = !1),
                    (c = Na()),
                    null === c
                        ? (a = 0 < fd.length)
                        : c === Y
                          ? (a = 0 < ic.length)
                          : c === fa
                            ? (a = 0 < Mb.length)
                            : c === Fa
                              ? (a = 0 < jc.length)
                              : c === ka && (a = 0 < Ec.length),
                    a && ee();
            else if (ia(a) && a.shiftKey && a.keyCode === S.m) {
                if ((a.preventDefault(), fb(sa))) for (a = tg.length, c = 0; c < a; c++) tg[c]();
            } else
                ia(a) && a.shiftKey && a.keyCode === S.o
                    ? (a.preventDefault(), nd() && Nc())
                    : ia(a) && a.shiftKey && a.keyCode === S.v
                      ? (a.preventDefault(), (a = la.length), fb(Y) && 0 < a && Wh(N, Qb))
                      : ia(a) && a.shiftKey && a.keyCode === S.x
                        ? (a.preventDefault(), zj(!0))
                        : ia(a) && a.shiftKey && a.keyCode === S.f11 && (a.preventDefault(), Ya());
        }
    }
    function ia(a) {
        return a.ctrlKey || a.metaKey;
    }
    function mj() {
        var a = Ia(!1);
        a || (a = Ze());
        !a && 0 < gb.length && ((a = gb[gb.length - 1]), Xh(a) && (gb.pop(), a(!1)), (a = !0));
        a || (a = ld());
        a || (a = nc());
        !a && 0 < la.length && (fe(), (la = []), (Qb = !1), (a = !0));
        !a && 0 < wb.length && (Aj(), (a = !0));
        return a;
    }
    function ll() {
        if (!q && b.views.fullDay.enabled) {
            var a = null !== Y;
            a && (Y.innerHTML = n.empty);
            a || ((Y = g("div", "full-day-view")), (Y.id = fc()), z.appendChild(Y));
            a = g("div", "title-bar");
            Y.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Ya);
            bf = g("div", "title");
            a.appendChild(bf);
            t(a, "ib-close", b.closeTooltipText, Ll);
            a.appendChild(g("div", "right-divider-line"));
            b.views.fullDay.showExtraTitleBarButtons &&
                b.fullScreenModeEnabled &&
                ((Yh = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Ya)),
                a.appendChild(g("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextDayTooltipText, rj);
            b.manualEditingEnabled &&
                b.views.fullDay.showExtraTitleBarButtons &&
                t(a, "ib-plus", b.addEventTooltipText, function () {
                    if (b.useTemplateWhenAddingNewEvent) {
                        var a = td(N, N);
                        R(a);
                        ud();
                    } else R(null, N);
                });
            b.views.timeline.enabled &&
                (a.appendChild(g("div", "right-divider-line-views")),
                t(a, "ib-bar-graph", b.viewTimelineTooltipText, function () {
                    Kb(N, !0);
                }));
            !q &&
                nd() &&
                (t(a, "ib-hamburger", b.showMenuTooltipText, Nc), a.appendChild(g("div", "left-divider-line")));
            t(a, "ib-arrow-left-full", b.previousDayTooltipText, nj);
            b.views.fullDay.showExtraTitleBarButtons &&
                ((Bj = t(a, "ib-pin", b.todayTooltipText, vj)),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        de();
                    }),
                a.appendChild(g("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    Ma(!0, !0);
                }),
                u.enabled && (Cj = t(a, "ib-search", b.searchTooltipText, ee)));
            xb = g("div", "contents custom-scroll-bars");
            Y.appendChild(xb);
            xb.oncontextmenu = function (a) {
                var b = ug(a, ya);
                cf = L(b[0]) + ":" + L(b[1]);
                Dj(a, N, ic);
            };
            Oc = g("div", "content-events-all-day");
            xb.appendChild(Oc);
            a = g("div", "all-day-text");
            v(a, b.allDayText);
            Oc.appendChild(a);
            ya = g("div", "contents-events");
            ya.ondblclick = Ml;
            xb.appendChild(ya);
            ge = g("div", "working-hours");
            xb.appendChild(ge);
            b.manualEditingEnabled &&
                b.dragAndDropForEventsEnabled &&
                ((ya.ondragover = B),
                (ya.ondragenter = B),
                (ya.ondragleave = B),
                (ya.ondrop = function (a) {
                    Ej(a, N, ya);
                }));
            Fj(ya, b.views.fullDay.minutesBetweenSections);
            df = g("div", "time-arrow");
            ya.appendChild(df);
            df.appendChild(g("div", "arrow-left"));
            df.appendChild(g("div", "line"));
        }
    }
    function oc(a, b, d, e, f) {
        for (var c = new Date(a.from), l = Pc(a.repeatEveryExcludeDays); c < d; ) {
            e(c, f);
            var g = !(!p(a.repeatEnds) || Ye(c, a.repeatEnds));
            if (l.indexOf(c.getDay()) === A.notFound && !g && W(c, d)) {
                b.push(a);
                break;
            }
        }
    }
    function Nl(a, c) {
        var d = 0,
            e = Pc(a.seriesIgnoreDates),
            f = vd(c),
            k = new Date(c);
        if (he(a) && e.indexOf(f) === A.notFound) {
            var l = g("div", "event");
            l.ondblclick = B;
            l.setAttribute("event-type", H(a.type));
            l.setAttribute("event-id", a.id);
            l.setAttribute("event-is-all-day", a.isAllDay);
            l.onclick = function (a) {
                Gj(a, l);
            };
            a.isAllDay
                ? Oc.appendChild(l)
                : (b.manualEditingEnabled &&
                      b.dragAndDropForEventsEnabled &&
                      (W(a.from, a.to) && (l.className += " resizable"),
                      (l.ondragstart = function (b) {
                          var d = Xe(l);
                          vg = l;
                          wg = l.offsetTop;
                          Rb = a;
                          xg = d.top - b.pageY;
                          yg = c;
                      }),
                      (l.ondragEnd = Uh),
                      l.setAttribute("draggable", !0)),
                  ya.appendChild(l));
            l.oncontextmenu = function (b) {
                ef(b, a, f);
            };
            ff(l, a);
            ae(l, a, Ve(a, c));
            be(l, a, k);
            W(a.from, c) && (l.id = "full-day-" + a.id);
            x(b.events.onFullDayEventRender, l, a) ||
                ((e = g("div", "title")),
                H(a.repeatEvery) > w.never &&
                    b.showReoccurringEventIcons &&
                    ((k = g("div", "ib-refresh-medium ib-no-hover ib-no-active")),
                    (k.style.borderColor = l.style.color),
                    e.appendChild(k)),
                (e.innerHTML += mc(a.title)),
                l.appendChild(e),
                a.isAllDay && !b.views.fullDay.showAllDayEventDetails) ||
                ((e = g("div", "date")),
                l.appendChild(e),
                (k = g("div", "duration")),
                l.appendChild(k),
                a.from.getDate() === a.to.getDate()
                    ? a.isAllDay
                        ? v(e, b.allDayText)
                        : (v(e, ce(a.from, a.to)), v(k, Pb(a.from, a.to)))
                    : (We(e, a.from, a.to), v(k, Pb(a.from, a.to))),
                k.innerHTML === n.empty && l.removeChild(k),
                b.views.fullDay.showEventLinks &&
                    Ea(a.url) &&
                    ((e = g("div", "url-text")),
                    v(e, zg(a.url)),
                    l.appendChild(e),
                    (e.onclick = function (b) {
                        B(b);
                        ie(a.url);
                    })),
                Da(a.repeatEvery) &&
                    a.repeatEvery > w.never &&
                    ((e = g("div", "repeats")),
                    v(e, b.repeatsText.replace(":", n.empty) + n.space + qd(a.repeatEvery)),
                    l.appendChild(e)),
                Ea(a.location) && ((e = g("div", "location")), v(e, a.location), l.appendChild(e)),
                Ea(a.description) && ((e = g("div", "description")), v(e, a.description), l.appendChild(e)));
            l.addEventListener("click", function (b) {
                gf(b, a);
            });
            a.isAllDay || (d = Hj(xb, ya, c, l, a));
            ic.push(a);
            a.isAllDay || Ag.push({ eventDetails: a, eventElement: l, height: l.offsetHeight });
        }
        return d;
    }
    function Wa(a, c) {
        a = p(a) ? new Date(a) : new Date();
        c = p(c) ? c : !1;
        var d = new Date(),
            e = Z(d);
        e = b.visibleDays.indexOf(e) > A.notFound;
        bf.innerHTML = n.empty;
        N = new Date(a);
        ic = [];
        Ag = [];
        Oc.style.display = "block";
        ge.style.display = "none";
        W(a, d) && !e && Ij();
        Xa(Bj, e);
        Zh(xb, "event");
        ld();
        x(b.events.onFullDayTitleRender, N) || lc(bf, N, !1, !0, !0);
        hf(Y);
        if (0 <= b.workingDays.indexOf(Z(a)) && null !== b.workingHoursStart && null !== b.workingHoursEnd) {
            var f = null;
            d = null;
            Qa(b.workingHoursStart)
                ? ((e = Z(N)),
                  b.workingHoursStart.hasOwnProperty(e.toString()) && (f = b.workingHoursStart[e.toString()]))
                : (f = b.workingHoursStart);
            Qa(b.workingHoursEnd)
                ? ((e = Z(N)), b.workingHoursEnd.hasOwnProperty(e.toString()) && (d = b.workingHoursEnd[e.toString()]))
                : (d = b.workingHoursEnd);
            null !== f &&
                null !== d &&
                f !== d &&
                ((e = ya.offsetHeight / 1440),
                (f = f.split(":")),
                (d = d.split(":")),
                (f = (60 * parseInt(f[0]) + parseInt(f[1])) * e),
                (d = (60 * parseInt(d[0]) + parseInt(d[1])) * e - f),
                (ge.style.display = "block"),
                (ge.style.top = f + "px"),
                (ge.style.height = d + "px"));
        }
        d = a;
        e = null;
        if (b.showHolidays) {
            f = [];
            for (var k = [], l = b.holidays.length, g = 0; g < l; g++) {
                var I = b.holidays[g],
                    h = G(I.title, n.empty);
                Jj(I, d) && h !== n.empty && k.indexOf(h.toLowerCase()) && (f.push(h), k.push(h.toLowerCase()));
            }
            0 < f.length && (e = f.join(", "));
        }
        d = e;
        f = [];
        null !== d && ca(bf, " (" + d + ")", "light-title-bar-text");
        Sh(a, f);
        f = vb(f);
        k = f.length;
        e = null;
        d = Kj(N, Y, df, ya, b.views.fullDay.showTimelineArrow);
        for (l = 0; l < k; l++) (g = Nl(f[l], a)), null === e && (e = g);
        c &&
            ((a = Y),
            (c = b.views.fullDay.showTimelineArrow),
            ec(N) && fb(a) && c
                ? ((a = Oc.offsetHeight), (a = 1 >= a ? 4 * b.spacing : a), (xb.scrollTop = d - a))
                : (xb.scrollTop = e - xb.offsetHeight / 2));
        1 >= Oc.offsetHeight && (Oc.style.display = "none");
        Xa(Cj, 0 < ic.length);
        Lj(ya);
    }
    function Sh(a, b) {
        yb(function (c) {
            for (var d = Qc(c.from, c.to) + 1, f = new Date(c.from), k = 0; k < d; k++) {
                if (W(f, a)) {
                    b.push(c);
                    break;
                }
                Za(f);
            }
            d = H(c.repeatEvery);
            d > w.never &&
                (d === w.everyDay
                    ? oc(c, b, a, Za, 1)
                    : d === w.everyWeek
                      ? oc(c, b, a, Sb, 1)
                      : d === w.every2Weeks
                        ? oc(c, b, a, Sb, 2)
                        : d === w.everyMonth
                          ? oc(c, b, a, je, 1)
                          : d === w.everyYear
                            ? oc(c, b, a, wd, 1)
                            : d === w.custom &&
                              ((d = H(c.repeatEveryCustomType)),
                              (f = H(c.repeatEveryCustomValue)),
                              0 < f &&
                                  (d === O.daily
                                      ? oc(c, b, a, Za, f)
                                      : d === O.weekly
                                        ? oc(c, b, a, Sb, f)
                                        : d === O.monthly
                                          ? oc(c, b, a, je, f)
                                          : d === O.yearly && oc(c, b, a, wd, f))));
        });
    }
    function Ll() {
        xd(Y);
        N = null;
        ic = [];
        Ag = [];
    }
    function Ml(a) {
        b.manualEditingEnabled &&
            ((a = ug(a, ya)),
            b.useTemplateWhenAddingNewEvent
                ? ((a = L(a[0]) + ":" + L(a[1])), (a = td(N, N, a, a)), R(a), ud())
                : R(null, N, a));
    }
    function nj() {
        Bg(N);
        if (7 > b.visibleDays.length) for (var a = Z(N); b.visibleDays.indexOf(a) === A.notFound; ) Bg(N), (a = Z(N));
        Wa(N, !0);
    }
    function rj() {
        Ij(!0);
    }
    function vj() {
        N = new Date();
        Wa(N, !0);
    }
    function Ij(a) {
        a = p(a) ? a : !1;
        Za(N);
        if (7 > b.visibleDays.length) for (var c = Z(N); b.visibleDays.indexOf(c) === A.notFound; ) Za(N), (c = Z(N));
        a && Wa(N, !0);
    }
    function ml() {
        if (!q && b.views.fullWeek.enabled) {
            var a = null !== fa;
            a && ((fa.innerHTML = n.empty), (yd = null));
            a || ((fa = g("div", "full-week-view")), (fa.id = fc()), z.appendChild(fa));
            a = g("div", "title-bar");
            fa.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Ya);
            Ra = g("div", "title");
            a.appendChild(Ra);
            t(a, "ib-close", b.closeTooltipText, function () {
                jc = [];
                xd(fa);
            });
            a.appendChild(g("div", "right-divider-line"));
            b.views.fullWeek.showExtraTitleBarButtons &&
                b.fullScreenModeEnabled &&
                (($h = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Ya)),
                a.appendChild(g("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextWeekTooltipText, sj);
            b.manualEditingEnabled &&
                b.views.fullWeek.showExtraTitleBarButtons &&
                t(a, "ib-plus", b.addEventTooltipText, function () {
                    R(null, new Date(Mj));
                });
            !q &&
                nd() &&
                (t(a, "ib-hamburger", b.showMenuTooltipText, Nc), a.appendChild(g("div", "left-divider-line")));
            t(a, "ib-arrow-left-full", b.previousWeekTooltipText, oj);
            b.views.fullWeek.showExtraTitleBarButtons &&
                (t(a, "ib-pin", b.thisWeekTooltipText, wj),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        de();
                    }),
                a.appendChild(g("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    Ma(!0, !0);
                }),
                u.enabled && (Nj = t(a, "ib-search", b.searchTooltipText, ee)));
            zd = g("div", "contents custom-scroll-bars");
            fa.appendChild(zd);
            Ol();
        }
    }
    function Ol() {
        var a = g("div", "header-days-container");
        zd.appendChild(a);
        b.views.fullWeek.showDayNamesHeaders && ((yd = g("div", "row-cells header-days")), a.appendChild(yd));
        Ad = g("div", "content-events-all-day");
        zd.appendChild(Ad);
        ke = g("div", "row-cells days");
        Ad.appendChild(ke);
        a = g("div", "all-day-text");
        v(a, b.allDayText);
        Ad.appendChild(a);
        le = g("div", "hours");
        zd.appendChild(le);
        Fj(le, b.views.fullWeek.minutesBetweenSections);
        jf = g("div", "row-cells days");
        le.appendChild(jf);
    }
    function ai(a, c, d) {
        for (; a < c; a++) b.visibleDays.indexOf(a) > A.notFound && Pl(d, a);
    }
    function Pl(a, c) {
        var d = g("div", Cg()),
            e = g("div", Cg()),
            f = new Date(a[c]);
        d.id = "calendar-week-day-" + c;
        e.id = "calendar-week-all-day-" + c;
        jf.appendChild(d);
        ke.appendChild(e);
        d.ondblclick = function (a) {
            b.manualEditingEnabled &&
                ((a = ug(a, d)),
                b.useTemplateWhenAddingNewEvent
                    ? ((a = L(a[0]) + ":" + L(a[1])), (a = td(f, f, a, a)), R(a), ud())
                    : R(null, f, a));
        };
        Dg(e, f.getFullYear(), f.getMonth(), f.getDate());
        Ql(d, c);
        ec(f) && Rl(d, f);
        b.manualEditingEnabled &&
            b.dragAndDropForEventsEnabled &&
            ((d.ondragover = B),
            (d.ondragenter = B),
            (d.ondragleave = B),
            (d.ondrop = function (a) {
                Ej(a, f, le);
            }));
        d.oncontextmenu = function (a) {
            var b = ug(a, d);
            cf = L(b[0]) + ":" + L(b[1]);
            Dj(a, f, kf[c]);
        };
    }
    function Rl(a, c) {
        me = g("div", "time-arrow");
        a.appendChild(me);
        me.appendChild(g("div", "arrow-left"));
        me.appendChild(g("div", "line"));
        Eg = Kj(c, fa, me, a, b.views.fullWeek.showTimelineArrow);
    }
    function Ql(a, c) {
        if (null !== b.workingHoursStart && null !== b.workingHoursEnd && 0 <= b.workingDays.indexOf(c)) {
            var d =
                Qa(b.workingHoursStart) && b.workingHoursStart.hasOwnProperty(c.toString())
                    ? b.workingHoursStart[c.toString()]
                    : b.workingHoursStart;
            var e =
                Qa(b.workingHoursEnd) && b.workingHoursEnd.hasOwnProperty(c.toString())
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
                (e = g("div", "working-hours")),
                a.appendChild(e),
                (e.style.display = "block"),
                (e.style.top = d + "px"),
                (e.style.height = c + "px"));
        }
    }
    function Oj(a, c) {
        a.getFullYear() === c.getFullYear()
            ? (a.getMonth() === c.getMonth()
                  ? (Ob(Ra, a), ca(Ra, " - "), Ob(Ra, c, null, n.space), ca(Ra, b.monthNames[a.getMonth()]))
                  : (lc(Ra, a, !1, !1), ca(Ra, " - "), lc(Ra, c, !1, !1)),
              ca(Ra, ", " + a.getFullYear()))
            : (lc(Ra, a, !1, !0), ca(Ra, " - "), lc(Ra, c, !1, !0));
    }
    function pc(a, b, d, e, f) {
        for (var c = new Date(a.from), l = Pc(a.repeatEveryExcludeDays), g = !1; c < d; ) {
            e(c, f);
            var h = !(!p(a.repeatEnds) || Ye(c, a.repeatEnds));
            if (l.indexOf(c.getDay()) === A.notFound && !h && c >= b && c <= d) {
                h = Ca("calendar-week-day-" + Z(c));
                var n = Ca("calendar-week-all-day-" + Z(c));
                null !== h && (Pj(h, n, a, c), (g = !0));
            }
        }
        return g;
    }
    function Pj(a, c, d, e) {
        var f = !1,
            k = Pc(d.seriesIgnoreDates),
            l = new Date(e),
            E = vd(l);
        e = new Date(e);
        if (he(d) && k.indexOf(E) === A.notFound) {
            var h = g("div", "event");
            f = Z(l);
            h.setAttribute("event-type", H(d.type));
            h.setAttribute("event-id", d.id);
            h.setAttribute("event-is-all-day", d.isAllDay);
            a.appendChild(h);
            h.onclick = function (a) {
                Gj(a, h);
            };
            h.oncontextmenu = function (a) {
                ef(a, d, E);
            };
            d.isAllDay
                ? (c.appendChild(h), bi(h, d, l, c), (ci = !0))
                : b.manualEditingEnabled &&
                  b.dragAndDropForEventsEnabled &&
                  !lf(d) &&
                  (W(d.from, d.to) && !d.isAllDay && (h.className += " resizable"),
                  (h.ondragstart = function (a) {
                      var b = Xe(h);
                      vg = h;
                      wg = h.offsetTop;
                      Rb = d;
                      xg = b.top - a.pageY;
                      yg = l;
                  }),
                  (h.ondragEnd = Uh),
                  h.setAttribute("draggable", !0));
            ff(h, d);
            ae(h, d, Ve(d, l));
            be(h, d, e);
            W(d.from, l) && (h.id = "week-day-" + d.id);
            x(b.events.onFullWeekEventRender, h, d) ||
                ((c = g("div", "title")),
                H(d.repeatEvery) > w.never &&
                    b.showReoccurringEventIcons &&
                    ((k = g("div", "ib-refresh-medium ib-no-hover ib-no-active")),
                    (k.style.borderColor = h.style.color),
                    c.appendChild(k)),
                (c.innerHTML += mc(d.title)),
                h.appendChild(c),
                d.isAllDay && !b.views.fullWeek.showAllDayEventDetails) ||
                ((c = g("div", "date")),
                h.appendChild(c),
                (k = g("div", "duration")),
                h.appendChild(k),
                d.from.getDate() === d.to.getDate()
                    ? d.isAllDay
                        ? v(c, b.allDayText)
                        : (v(c, ce(d.from, d.to)), v(k, Pb(d.from, d.to)))
                    : (We(c, d.from, d.to), v(k, Pb(d.from, d.to))),
                k.innerHTML === n.empty && h.removeChild(k),
                b.views.fullWeek.showEventLinks &&
                    Ea(d.url) &&
                    ((c = g("div", "url-text")),
                    v(c, zg(d.url)),
                    h.appendChild(c),
                    (c.onclick = function (a) {
                        B(a);
                        ie(d.url);
                    })),
                Da(d.repeatEvery) &&
                    d.repeatEvery > w.never &&
                    ((c = g("div", "repeats")),
                    v(c, b.repeatsText.replace(":", n.empty) + n.space + qd(d.repeatEvery)),
                    h.appendChild(c)),
                Ea(d.location) && ((c = g("div", "location")), v(c, d.location), h.appendChild(c)),
                Ea(d.description) && ((c = g("div", "description")), v(c, d.description), h.appendChild(c)));
            h.addEventListener("click", function (a) {
                gf(a, d);
            });
            d.isAllDay || Hj(a, a, l, h, d, !0);
            d.isAllDay || di.push({ eventDetails: d, eventElement: h, height: h.offsetHeight });
            kf.hasOwnProperty(f) || (kf[f] = []);
            mf = 0 === mf ? h.offsetTop : na.min(mf, h.offsetTop);
            kf[f].push(d);
            f = !0;
        }
        return f;
    }
    function Ac(a, c) {
        c = p(c) ? c : !1;
        var d = p(a) ? new Date(a) : new Date();
        var e = d;
        e = p(e) ? new Date(e) : new Date();
        0 < e.getDay()
            ? e.setDate(e.getDate() - e.getDay())
            : b.startOfWeekDay === xa.monday && e.setDate(e.getDate() - 7);
        b.startOfWeekDay === xa.monday
            ? e.setDate(e.getDate() + 1)
            : b.startOfWeekDay === xa.saturday && e.setDate(e.getDate() - 1);
        a = new Date(e);
        e = new Date(e);
        a.setHours(0, 0, 0, 0);
        e.setDate(e.getDate() + 6);
        e.setHours(23, 59, 59, 99);
        e = [a, e];
        a = e[0];
        e = e[1];
        Tb = d;
        me = null;
        jc = [];
        kf = {};
        ci = !1;
        Eg = null;
        mf = 0;
        Ad.style.display = "none";
        di = [];
        Mj = a;
        hf(fa);
        ld();
        Ra.innerHTML = n.empty;
        if (!x(b.events.onFullWeekTitleRender, a, e)) {
            if (b.views.fullWeek.showWeekNumbersInTitles) {
                d = Ra;
                var f = b.weekText + n.space,
                    k = new Date(a.getFullYear(), 0, 1),
                    l = na.ceil(((a - k) / 864e5 + k.getDay() + 1) / 7);
                4 < k.getDay() && l--;
                ca(d, f + l + ": ");
            }
            b.reverseOrderDaysOfWeek ? Oj(e, a) : Oj(a, e);
        }
        Jh(yd, !1);
        d = b.dayHeaderNames.length;
        f = {};
        for (k = new Date(a); k < e; ) (f[Z(k)] = new Date(k)), k.setDate(k.getDate() + 1);
        jf.innerHTML = n.empty;
        ke.innerHTML = n.empty;
        b.startOfWeekDay === xa.saturday || b.startOfWeekDay === xa.sunday
            ? (ai(b.startOfWeekDay, d, f), ai(0, b.startOfWeekDay, f))
            : ai(0, d, f);
        b.reverseOrderDaysOfWeek && md(jf);
        if (null !== yd && b.views.fullWeek.showDatesInDayHeaders) {
            d = new Date(a);
            f = 0;
            for (k = yd.children; d < e; )
                (l = Z(d)),
                    b.visibleDays.indexOf(l) > A.notFound &&
                        ((k[f].innerHTML = b.views.fullWeek.padDayMonthNumbers
                            ? k[f].innerHTML + (n.space + L(d.getDate()) + "/" + L(d.getMonth() + 1))
                            : k[f].innerHTML + (n.space + d.getDate() + "/" + (d.getMonth() + 1))),
                        f++),
                    d.setDate(d.getDate() + 1);
            b.reverseOrderDaysOfWeek && md(yd);
        }
        d = vb(Bd());
        f = d.length;
        for (k = 0; k < f; k++) {
            l = d[k];
            for (var g = Qc(l.from, l.to) + 1, h = new Date(l.from), J = !1, r = 0; r < g; r++) {
                if (h >= a && h <= e) {
                    var m = Ca("calendar-week-day-" + Z(h)),
                        q = Ca("calendar-week-all-day-" + Z(h));
                    null !== m && Pj(m, q, l, h) && (J = !0);
                }
                Za(h);
            }
            J && jc.push(l);
            h = H(l.repeatEvery);
            g = !1;
            h > w.never &&
                (h === w.everyDay
                    ? (g = pc(l, a, e, Za, 1))
                    : h === w.everyWeek
                      ? (g = pc(l, a, e, Sb, 1))
                      : h === w.every2Weeks
                        ? (g = pc(l, a, e, Sb, 2))
                        : h === w.everyMonth
                          ? (g = pc(l, a, e, je, 1))
                          : h === w.everyYear
                            ? (g = pc(l, a, e, wd, 1))
                            : h === w.custom &&
                              ((h = H(l.repeatEveryCustomType)),
                              (r = H(l.repeatEveryCustomValue)),
                              0 < r &&
                                  (h === O.daily
                                      ? (g = pc(l, a, e, Za, r))
                                      : h === O.weekly
                                        ? (g = pc(l, a, e, Sb, r))
                                        : h === O.monthly
                                          ? (g = pc(l, a, e, je, r))
                                          : h === O.yearly && (g = pc(l, a, e, wd, r)))));
            g && !J && jc.push(l);
        }
        a = b.dayHeaderNames.length;
        for (e = 0; e < a; e++) (d = Ca("calendar-week-day-" + e)), null !== d && Lj(d);
        a = 0;
        if (ci) {
            Ad.style.display = "block";
            e = ke.children.length;
            for (d = 0; d < e; d++) {
                f = ke.children[d].children;
                k = f.length;
                for (J = l = 0; J < k; J++) l += f[J].offsetHeight + b.spacing;
                a = na.max(a, l);
            }
            Ad.style.height = a + b.spacing + "px";
        }
        c && (null !== Eg ? ((a = 0 >= a ? 4 * b.spacing : a), (zd.scrollTop = Eg - a)) : (zd.scrollTop = mf));
        Xa(Nj, 0 < jc.length);
    }
    function oj() {
        Tb.setDate(Tb.getDate() - 7);
        Ac(Tb, !0);
    }
    function sj() {
        Sb(Tb);
        Ac(Tb, !0);
    }
    function wj() {
        Tb = new Date();
        Ac(Tb, !0);
    }
    function nl() {
        Fg = Gg = null;
        var a = null !== U;
        a && (U.innerHTML = n.empty);
        a || ((U = g("div", "title-bar")), Jb.appendChild(U));
        b.fullScreenModeEnabled && (U.ondblclick = Ya);
        q &&
            (U.onclick = function (a) {
                B(a);
                Ia();
            });
        !q && nd() && (t(U, "ib-hamburger", b.showMenuTooltipText, Nc), U.appendChild(g("div", "left-divider-line")));
        t(U, "ib-arrow-left-full", b.previousMonthTooltipText, $e);
        b.views.fullMonth.addYearButtons && t(U, "ib-rewind", b.previousYearTooltipText, qg);
        (q || b.views.fullMonth.showExtraTitleBarButtons) && t(U, "ib-pin", b.currentMonthTooltipText, sg);
        b.views.fullMonth.showExtraTitleBarButtons &&
            (b.jumpToDateEnabled &&
                t(U, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                    de();
                }),
            U.appendChild(g("div", "left-divider-line-events")),
            t(U, "ib-refresh", b.refreshTooltipText, function () {
                Ma(!0, !0);
            }),
            u.enabled && (Fg = t(U, "ib-search", b.searchTooltipText, ee)));
        q && (t(U, "ib-close", b.closeTooltipText, cd), U.appendChild(g("div", "right-divider-line")));
        b.views.fullMonth.showExtraTitleBarButtons &&
            b.fullScreenModeEnabled &&
            ((Gg = t(U, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Ya)),
            U.appendChild(g("div", "right-divider-line-full-screen-mode")));
        t(U, "ib-arrow-right-full", b.nextMonthTooltipText, af);
        b.views.fullMonth.addYearButtons && t(U, "ib-forward", b.nextYearTooltipText, rg);
        b.views.fullMonth.showExtraTitleBarButtons &&
            b.manualEditingEnabled &&
            t(U, "ib-plus", b.addEventTooltipText, function () {
                Qj(y, new Date()) ? R(null) : R(null, new Date(y.getFullYear(), y.getMonth(), 1));
            });
        q ||
            ((b.views.timeline.enabled ||
                b.views.allEvents.enabled ||
                b.views.fullYear.enabled ||
                b.views.fullWeek.enabled ||
                b.views.fullDay.enabled) &&
                U.appendChild(g("div", "right-divider-line-views")),
            b.views.timeline.enabled &&
                t(U, "ib-bar-graph", b.viewTimelineTooltipText, function () {
                    Kb(null, !0);
                }),
            b.views.allEvents.enabled &&
                t(U, "ib-eye", b.viewAllEventsTooltipText, function () {
                    Oh(!0);
                }),
            b.views.fullYear.enabled &&
                t(U, "ib-expand", b.viewFullYearTooltipText, function () {
                    Bc(null, !0);
                }),
            b.views.fullWeek.enabled &&
                t(U, "ib-hamburger-side", b.viewFullWeekTooltipText, function () {
                    Ac(null, !0);
                }),
            b.views.fullDay.enabled &&
                t(U, "ib-hourglass", b.viewFullDayTooltipText, function () {
                    Wa(null, !0);
                }));
        a = g("div", "title-container");
        U.appendChild(a);
        Sl(a);
        Tl(a);
    }
    function sb() {
        q ||
            null === ob ||
            (0 < b.views.fullMonth.pinUpViewImageUrls.length
                ? ((ob.style.backgroundImage = "url('" + b.views.fullMonth.pinUpViewImageUrls[Rc] + "')"),
                  Rc++,
                  Rc === b.views.fullMonth.pinUpViewImageUrls.length && (Rc = 0))
                : 0 < b.views.fullMonth.pinUpViewImageCssClasses.length &&
                  ((ob.className = "pin-up" + n.space + b.views.fullMonth.pinUpViewImageCssClasses[Rc]),
                  Rc++,
                  Rc === b.views.fullMonth.pinUpViewImageCssClasses.length && (Rc = 0)),
            Rj());
    }
    function Rj() {
        if (!q && null !== ob && !x(b.events.onFullMonthPinUpRender, ob, y)) {
            var a = new Date();
            if (null === ei || !W(ei, a)) {
                ob.innerHTML = n.empty;
                ei = a;
                var c = g("div", "pin-up-text"),
                    d = g("div", "day"),
                    e = g("div", "month"),
                    f = g("div", "year");
                c.onclick = function () {
                    R(null, a);
                };
                Sa(c, b.addEventTooltipText);
                ob.appendChild(c);
                c.appendChild(d);
                c.appendChild(e);
                c.appendChild(f);
                ca(d, a.getDate());
                if (b.showDayNumberOrdinals && ((c = Hg(a.getDate())), p(c))) {
                    var k = g("sup");
                    k.innerText = c;
                    d.appendChild(k);
                }
                v(e, b.monthNames[a.getMonth()]);
                v(f, a.getFullYear());
            }
        }
    }
    function aj(a, c) {
        var d = p(a);
        a = d ? a : Jb;
        c = p(c) ? c : "calendar-day-";
        if (!d && 0 < nf.length) {
            for (var e = nf.length, f = 0; f < e; f++) a.removeChild(nf[f]);
            nf = [];
        }
        for (e = 0; 6 > e; e++) {
            f = g("div", "row-cells days");
            a.appendChild(f);
            d || nf.push(f);
            for (var k = 0; 7 > k; k++) {
                var l = k;
                if (b.startOfWeekDay === xa.saturday || b.startOfWeekDay === xa.sunday)
                    (l = b.startOfWeekDay + k), 7 <= l && (l -= 7);
                if (b.visibleDays.indexOf(l) > A.notFound) {
                    l = 7 * e + (k + 1);
                    var h = g("div", Cg(b.views.fullMonth.allowEventScrolling));
                    h.id = c + l;
                    f.appendChild(h);
                    b.views.fullMonth.allowEventScrolling && (h.className += " scrollY");
                    0 < b.views.fullMonth.minimumDayHeight &&
                        (h.style.height = b.views.fullMonth.minimumDayHeight + "px");
                }
            }
            b.reverseOrderDaysOfWeek && md(f);
        }
    }
    function Cg(a) {
        a = p(a) ? a : !1;
        var c = "cell cell-" + b.visibleDays.length;
        a && (c += " custom-scroll-bars");
        return c;
    }
    function Sl(a) {
        ne = g("span", "year-dropdown-button");
        ne.ondblclick = B;
        ne.onclick = Ul;
        a.appendChild(ne);
        Mh = g("span");
        ne.appendChild(Mh);
        b.views.fullMonth.showYearDropDownButtonIcon &&
            ((Ig = g("span", "ib-arrow-down-full-medium")), ne.appendChild(Ig));
    }
    function Tl(a) {
        var c = new Date(b.minimumYear, 1, 1),
            d = null;
        Ub = g(
            "div",
            b.views.fullMonth.showMonthButtonsInYearDropDownMenu ? "years-drop-down" : "years-drop-down-no-months"
        );
        a.appendChild(Ub);
        if (b.views.fullMonth.showMonthButtonsInYearDropDownMenu)
            for (a = 0; 12 > a; a++) 0 === a % 3 && ((d = g("div", "months")), Ub.appendChild(d)), Vl(d, a);
        of = g("div", "contents custom-scroll-bars");
        for (Ub.appendChild(of); !(Wl(c.getFullYear()), wd(c), c.getFullYear() > b.maximumYear); );
    }
    function Vl(a, c) {
        var d = g("div", "month-name"),
            e = b.monthNamesAbbreviated[c];
        d.onclick = function (a) {
            B(a);
            y.getMonth() !== c && (y.setMonth(c), x(b.events.onSetDate, y), F(y), pg(), sb());
        };
        v(d, e);
        a.appendChild(d);
        Sc[c.toString()] = d;
    }
    function Wl(a) {
        var c = g("div");
        c.className = "year";
        c.innerText = a.toString();
        c.id = "year-selected-" + a.toString();
        of.appendChild(c);
        c.ondblclick = B;
        c.onclick = function (c) {
            B(c);
            y.getFullYear() !== a && (y.setFullYear(a), x(b.events.onSetDate, y), F(y), pg(), sb());
        };
    }
    function Xl() {
        var a = Ub.getElementsByClassName("year"),
            b = a.length;
        if (1 <= b) for (var d = 0; d < b; d++) "year" !== a[d].className && (a[d].className = "year");
        a = Ca("year-selected-" + y.getFullYear());
        null !== a && (a.className += " year-selected");
        if (!q) {
            var e = [];
            yb(function (a) {
                a = a.from.getFullYear();
                if (e.indexOf(a) === A.notFound) {
                    var b = Ca("year-selected-" + a);
                    null !== b &&
                        b.className.indexOf(" year-selected") === A.notFound &&
                        (b.className += " year-has-events");
                    e.push(a);
                }
            });
        }
        return a;
    }
    function Ul(a) {
        B(a);
        if ("block" !== Ub.style.display) {
            Ia();
            Ub.style.display = "block";
            b.views.fullMonth.showYearDropDownButtonIcon && (Ig.className = "ib-arrow-up-full-medium");
            for (var c in Sc) Sc.hasOwnProperty(c.toString()) && (Sc[c.toString()].className = "month-name");
            a = y.getMonth().toString();
            c = new Date();
            y.getFullYear() === c.getFullYear() &&
                ((c = c.getMonth().toString()), Sc.hasOwnProperty(c) && (Sc[c].className = "month-name-current-month"));
            Sc.hasOwnProperty(a) && (Sc[a].className = "month-name-selected");
            a = Xl();
            of.scrollTop = null !== a ? a.offsetTop - of.offsetTop - b.spacing : 0;
        } else pg();
    }
    function pg() {
        var a = !1;
        Jg() &&
            (b.views.fullMonth.showYearDropDownButtonIcon && (Ig.className = "ib-arrow-down-full-medium"),
            (Ub.style.display = "none"),
            (a = !0));
        return a;
    }
    function Jg() {
        return null !== Ub && "block" === Ub.style.display;
    }
    function Kh(a, c, d, e, f, k) {
        c = Ca("calendar-day-" + c);
        if (null !== c) {
            var l = new Date(),
                h = a === l.getDate() && e === l.getFullYear() && d === l.getMonth();
            l = g("span");
            var I = new Date(e, d, a);
            f = f ? " day-muted" : n.empty;
            var J = !0;
            k = p(k) ? k : !1;
            c.innerHTML = n.empty;
            c.className = c.className
                .replace(" cell-today", n.empty)
                .replace(" cell-selected", n.empty)
                .replace(" cell-no-click", n.empty);
            q && h && (c.className += " cell-today");
            q && !h && null !== Dc && W(I, Dc) && (c.className += " cell-selected");
            q
                ? ((J = kj(I)), J || ((c.className += " cell-no-click"), (l.className = "no-click")))
                : (l.className = n.empty);
            l.className += f;
            l.className += h && !q ? " today" : n.empty;
            l.innerText = b.views.fullMonth.padDayNumbers ? L(a) : a;
            1 !== a || q || (l.className += " first-day");
            0 <= b.weekendDays.indexOf(I.getDay()) &&
                c.className.indexOf("weekend-day") === A.notFound &&
                (c.className += " weekend-day");
            0 <= b.workingDays.indexOf(Z(I)) &&
                c.className.indexOf("working-day") === A.notFound &&
                (c.className += " working-day");
            c.oncontextmenu = function (a) {
                Kg(a, I);
            };
            if (b.showDayNumberOrdinals && ((h = Hg(a)), p(h))) {
                var r = g("sup");
                r.innerText = h;
                l.appendChild(r);
            }
            c.appendChild(l);
            c.appendChild(g("span", "blank"));
            b.views.fullDay.enabled &&
                ((l = g("div", "ib-arrow-expand-left-right-icon")),
                c.appendChild(l),
                Sa(l, b.expandDayTooltipText),
                (l.onclick = function () {
                    Wa(I, !0);
                }));
            k &&
                b.views.fullMonth.showPreviousNextMonthNames &&
                ca(
                    c,
                    b.monthNames[d],
                    "month-name" + f,
                    function () {
                        1 === a ? af() : $e();
                    },
                    !0,
                    !0
                );
            Yl(I, f, c);
            b.manualEditingEnabled &&
                ((c.ondblclick = function () {
                    if (b.useTemplateWhenAddingNewEvent) {
                        var a = td(I, I);
                        R(a);
                        ud();
                    } else R(null, I);
                }),
                Dg(c, e, d, a));
            q &&
                (c.onclick = J
                    ? function (a) {
                          B(a);
                          Jg()
                              ? Ia()
                              : ((a = new Date(I)),
                                a.setHours(0, 0, 0, 0),
                                cd(),
                                Ph(I),
                                x(b.events.onDatePickerDateChanged, a),
                                (Dc = a));
                      }
                    : B);
            b.views.fullMonth.useOnlyDotEvents && c.appendChild(g("div", "dots-separator"));
        }
    }
    function Ja() {
        for (var a = 0; 6 > a; a++)
            for (var c = 0; 7 > c; c++) {
                var d = Ca("calendar-day-" + (7 * a + (c + 1)));
                null !== d && (Zh(d, "event"), Zh(d, "plus-x-events"));
            }
        Qh();
        oe = !1;
        fd = [];
        Cd = {};
        a = vb(Bd());
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
                var k = Qc(f.from, f.to);
                if (0 < k)
                    for (var g = new Date(f.from), h = 0; h < k; h++)
                        Za(g), gi(vd(g), f.id), null !== hi(g) && fi(g, f);
            }
            he(e) && fd.push(e);
            f = H(e.repeatEvery);
            f > w.never &&
                (f === w.everyDay
                    ? qc(e, Za, 1)
                    : f === w.everyWeek
                      ? qc(e, Sb, 1)
                      : f === w.every2Weeks
                        ? qc(e, Sb, 2)
                        : f === w.everyMonth
                          ? qc(e, je, 1)
                          : f === w.everyYear
                            ? qc(e, wd, 1)
                            : f === w.custom &&
                              ((f = H(e.repeatEveryCustomType)),
                              (k = H(e.repeatEveryCustomValue)),
                              0 < k &&
                                  (f === O.daily
                                      ? qc(e, Za, k)
                                      : f === O.weekly
                                        ? qc(e, Sb, k)
                                        : f === O.monthly
                                          ? qc(e, je, k)
                                          : f === O.yearly && qc(e, wd, k))));
        }
        Sj !== oe && ((Sj = oe), x(b.events.onBusyStateChange, oe));
        null !== Fg && Xa(Fg, 0 < fd.length);
        Rh();
    }
    function qc(a, c, d) {
        for (var e = new Date(a.from), f = Pc(a.repeatEveryExcludeDays), k = new Date(b.maximumYear, 11, 31); e < k; ) {
            c(e, d);
            var g = !(!p(a.repeatEnds) || Ye(e, a.repeatEnds));
            f.indexOf(e.getDay()) !== A.notFound || g || (gi(vd(e), a.id), e < Lh && null !== hi(e) && fi(e, a));
        }
    }
    function fi(a, c) {
        var d = hi(a),
            e = Pc(c.seriesIgnoreDates),
            f = vd(a),
            k = new Date(a);
        if (he(c) && e.indexOf(f) === A.notFound && (gi(f, c.id), null !== d && (Zl(a, c), !q)))
            if (
                d.getElementsByClassName("event").length < b.views.fullMonth.maximumEventsPerDayDisplay ||
                0 >= b.views.fullMonth.maximumEventsPerDayDisplay ||
                b.views.fullMonth.useOnlyDotEvents
            ) {
                e = g("div", "event");
                e.setAttribute("event-type", H(c.type));
                e.setAttribute("event-id", c.id);
                e.setAttribute("event-is-all-day", c.isAllDay);
                if (b.views.fullMonth.useOnlyDotEvents) e.className += " event-circle";
                else if (!x(b.events.onFullMonthEventRender, e, c)) {
                    var l = c.title,
                        h = H(c.repeatEvery);
                    b.views.fullMonth.showTimesInEvents &&
                        !c.isAllDay &&
                        c.from.getDate() === c.to.getDate() &&
                        (l = ce(c.from, c.to) + ": " + l);
                    h > w.never &&
                        b.showReoccurringEventIcons &&
                        ((h = g("div", "ib-refresh-small ib-no-hover ib-no-active")),
                        (h.style.borderColor = e.style.color),
                        e.appendChild(h));
                    e.innerHTML += mc(l);
                }
                d.appendChild(e);
                bi(e, c, a, d);
                ff(e, c);
                ae(e, c, Ve(c, a), b.views.fullMonth.applyCssToEventsNotInCurrentMonth);
                be(e, c, k);
                W(c.from, a) && (e.id = "day-" + c.id);
                e.onmousemove = function (a) {
                    null !== Dd && Dd.id === c.id ? B(a) : ii(a, c);
                };
                e.oncontextmenu = function (a) {
                    ef(a, c, f);
                };
                e.addEventListener("click", function (a) {
                    gf(a, c);
                });
            } else $l(d, a);
    }
    function $l(a, c) {
        var d = a.getElementsByClassName("plus-x-events");
        d = 0 < d.length ? d[0] : null;
        if (null === d) {
            var e = new Date(c);
            d = g("div", "plus-x-events");
            d.setAttribute("events", "1");
            d.ondblclick = B;
            a.appendChild(d);
            if (
                (b.views.fullMonth.applyCssToEventsNotInCurrentMonth && c.getMonth() !== y.getMonth()) ||
                c.getFullYear() !== y.getFullYear()
            )
                d.className += " day-muted";
            v(d, "+1 " + b.moreText);
            b.views.fullDay.enabled
                ? (d.onclick = function () {
                      Wa(e, !0);
                  })
                : (d.className += n.space + "prevent-pointer-events");
        } else
            (a = parseInt(d.getAttribute("events")) + 1),
                d.setAttribute("events", a.toString()),
                v(d, "+" + a + n.space + b.moreText);
    }
    function hi(a) {
        var b = new Date(y.getFullYear(), y.getMonth(), 1);
        var d = new Date(y);
        var e = new Date(y),
            f = null,
            k = 0;
        b = Z(b);
        d.setMonth(d.getMonth() + 1);
        e.setMonth(e.getMonth() - 1);
        a.getMonth() === d.getMonth() && a.getFullYear() === d.getFullYear()
            ? ((d = b + bd(y.getFullYear(), y.getMonth())), (k = Ne(a.getDate() + d)))
            : a.getMonth() === e.getMonth() && a.getFullYear() === e.getFullYear()
              ? (k = Ne(b - Qc(a, y) + 1))
              : a.getMonth() === y.getMonth() &&
                a.getFullYear() === y.getFullYear() &&
                ((d = b), (k = Ne(a.getDate() + d)));
        0 < k && (f = Ca("calendar-day-" + k));
        return f;
    }
    function gi(a, b) {
        Cd.hasOwnProperty(a) || (Cd[a] = []);
        Cd[a].indexOf(b) === A.notFound && Cd[a].push(b);
    }
    function ol() {
        if (!q && b.views.fullYear.enabled) {
            var a = null !== Fa;
            a && (Fa.innerHTML = n.empty);
            a || ((Fa = g("div", "full-year-view")), (Fa.id = fc()), z.appendChild(Fa));
            a = g("div", "title-bar");
            Fa.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Ya);
            ji = g("div", "title");
            a.appendChild(ji);
            !q &&
                nd() &&
                (t(a, "ib-hamburger", b.showMenuTooltipText, Nc), a.appendChild(g("div", "left-divider-line")));
            t(a, "ib-arrow-left-full", b.previousYearTooltipText, pj);
            b.views.fullYear.showExtraTitleBarButtons &&
                (t(a, "ib-pin", b.currentYearTooltipText, xj),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        de();
                    }),
                a.appendChild(g("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    Ma(!0, !0);
                }));
            t(a, "ib-close", b.closeTooltipText, function () {
                xd(Fa);
            });
            a.appendChild(g("div", "right-divider-line"));
            b.views.fullYear.showExtraTitleBarButtons &&
                b.fullScreenModeEnabled &&
                ((ki = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Ya)),
                a.appendChild(g("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextYearTooltipText, tj);
            b.views.fullYear.showExtraTitleBarButtons &&
                b.manualEditingEnabled &&
                t(a, "ib-plus", b.addEventTooltipText, function () {
                    R(null, new Date(ta, 0, 1));
                });
            pe = g("div", "contents custom-scroll-bars");
            Fa.appendChild(pe);
        }
    }
    function am(a) {
        var c = new Date(ta, a, 1),
            d = function () {
                W(y, c) || (F(c), sb());
                for (; 0 < wb.length; ) Aj(!1);
                pf();
            },
            e = g("div", "year-month");
        pe.appendChild(e);
        var f = g("div", "title-bar-container");
        e.appendChild(f);
        var k = g("div", "title-bar");
        k.ondblclick = d;
        v(k, b.monthNames[a]);
        f.appendChild(k);
        t(k, "ib-arrow-expand-left-right", b.expandMonthTooltipText, d);
        b.manualEditingEnabled &&
            (k.appendChild(g("div", "right-divider-line")),
            t(k, "ib-plus", b.addEventTooltipText, function () {
                R(null, c);
            }));
        d = g("div", "row-cells header-days");
        e.appendChild(d);
        Jh(d);
        d = a + 1 + "-month-";
        f = new Date(ta, a, 1);
        f = Ne(0 === f.getDay() ? 7 : f.getDay());
        aj(e, d);
        1 < f && bm(f, d, a);
        f = cm(f, d, a);
        k = f[0];
        dm(f[1], d, a);
        k && (Lg = e.offsetTop);
    }
    function bm(a, b, d) {
        d = new Date(ta, d, 1);
        d.setMonth(d.getMonth() - 1);
        var c = bd(d.getFullYear(), d.getMonth());
        for (--a; 0 < a; ) em(b, a, d, c), a--, c--;
    }
    function em(a, c, d, e) {
        a = Ca(a + c);
        if (null !== a) {
            var f = new Date(d.getFullYear(), d.getMonth(), e);
            a.className += " cell-muted";
            b.views.fullDay.enabled &&
                (a.onclick = function () {
                    Wa(f, !0);
                });
            a.oncontextmenu = function (a) {
                Kg(a, f);
            };
            li(a, f);
            Ob(a, f, null, null, b.views.fullYear.padDayNumbers);
        }
    }
    function cm(a, b, d) {
        for (var c = 0, f = bd(ta, d), k = !1, g = 0; g < f; g++) (c = a + g), fm(b, d, g, c) && (k = !0);
        return [k, c];
    }
    function fm(a, c, d, e) {
        a = Ca(a + e);
        e = !1;
        if (null !== a) {
            var f = new Date(ta, c, d + 1);
            b.views.fullDay.enabled &&
                (a.onclick = function () {
                    Wa(f, !0);
                });
            a.oncontextmenu = function (a) {
                Kg(a, f);
            };
            e = li(a, f, !0);
            Ob(a, f, null, null, b.views.fullYear.padDayNumbers);
        }
        return e;
    }
    function dm(a, b, d) {
        if (42 > a) {
            d = new Date(ta, d, 1);
            var c = 1;
            d.setMonth(d.getMonth() + 1);
            for (a += 1; 43 > a; a++) gm(b, d, a, c), c++;
        }
    }
    function gm(a, c, d, e) {
        a = Ca(a + d);
        if (null !== a) {
            var f = new Date(c.getFullYear(), c.getMonth(), e);
            a.className += " cell-muted";
            b.views.fullDay.enabled &&
                (a.onclick = function () {
                    Wa(f, !0);
                });
            a.oncontextmenu = function (a) {
                Kg(a, f);
            };
            li(a, f);
            Ob(a, f, null, null, b.views.fullYear.padDayNumbers);
        }
    }
    function li(a, c, d) {
        var e = vd(c),
            f = !1;
        d = p(d) ? d : !1;
        0 <= b.weekendDays.indexOf(c.getDay()) && (a.className += " weekend-day");
        0 <= b.workingDays.indexOf(Z(c)) && (a.className += " working-day");
        if (Cd.hasOwnProperty(e)) {
            a.className += " has-events";
            e = Cd[e].length;
            var k = g("div", "events-count");
            k.innerText = e.toString();
            a.appendChild(k);
        }
        d && ec(c) && ((a.className += " cell-today"), (f = !0));
        return f;
    }
    function Bc(a, c) {
        c = p(c) ? c : !1;
        ta = p(a) ? a : y.getFullYear();
        Lg = 0;
        ji.innerText = ta;
        c = (a = c) ? 0 : pe.scrollTop;
        pe.innerHTML = n.empty;
        for (var d = 0; 12 > d; d++) am(d);
        pe.scrollTop = a ? (0 < Lg ? Lg - 4 * b.spacing : 0) : c;
        hf(Fa);
    }
    function pj() {
        ta > b.minimumYear && (--ta, Bc(ta, !0));
    }
    function tj() {
        ta < b.maximumYear && ((ta += 1), Bc(ta, !0));
    }
    function xj() {
        ta = new Date().getFullYear();
        Bc(ta, !0);
    }
    function pl() {
        if (!q && b.views.allEvents.enabled) {
            var a = null !== sa;
            a && (sa.innerHTML = n.empty);
            a || ((sa = g("div", "all-events-view")), (sa.id = fc()), z.appendChild(sa));
            a = g("div", "title-bar");
            sa.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Ya);
            var c = g("div", "title");
            v(c, b.allEventsText);
            a.appendChild(c);
            t(a, "ib-close", b.closeTooltipText, function () {
                Mb = [];
                xd(sa);
            });
            b.views.allEvents.showExtraTitleBarButtons &&
                (a.appendChild(g("div", "right-divider-line")),
                b.fullScreenModeEnabled &&
                    ((mi = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Ya)),
                    a.appendChild(g("div", "right-divider-line-full-screen-mode"))),
                b.manualEditingEnabled &&
                    t(a, "ib-plus", b.addEventTooltipText, function () {
                        R(null);
                    }));
            !q && nd() && t(a, "ib-hamburger", b.showMenuTooltipText, Nc);
            b.views.allEvents.showExtraTitleBarButtons &&
                (a.appendChild(g("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    Ma(!0, !0);
                }),
                u.enabled && (Tj = t(a, "ib-search", b.searchTooltipText, ee)));
            Ed = g("div", "contents custom-scroll-bars");
            sa.appendChild(Ed);
        }
    }
    function hm(a) {
        if (he(a)) {
            var c = im(a.from),
                d = g("div", "event");
            c.appendChild(d);
            d.oncontextmenu = function (b) {
                ef(b, a);
            };
            bi(d, a, a.from, c);
            ff(d, a);
            ae(d, a);
            be(d, a);
            d.id = "month-" + a.id;
            d.setAttribute("event-type", H(a.type));
            d.setAttribute("event-id", a.id);
            d.setAttribute("event-is-all-day", a.isAllDay);
            if (!x(b.events.onAllEventsEventRender, d, a)) {
                c = g("div", "title");
                if (H(a.repeatEvery) > w.never && b.showReoccurringEventIcons) {
                    var e = g("div", "ib-refresh-medium ib-no-hover ib-no-active");
                    e.style.borderColor = d.style.color;
                    c.appendChild(e);
                }
                c.innerHTML += mc(a.title);
                d.appendChild(c);
                c = g("div", "date");
                d.appendChild(c);
                e = g("div", "duration");
                d.appendChild(e);
                a.from.getDate() === a.to.getDate()
                    ? a.isAllDay
                        ? Ob(c, a.from, null, " - " + b.allDayText)
                        : (Ob(c, a.from, null, " - " + ce(a.from, a.to)), v(e, Pb(a.from, a.to)))
                    : (We(c, a.from, a.to), v(e, Pb(a.from, a.to)));
                e.innerHTML === n.empty && d.removeChild(e);
                b.views.allEvents.showEventLinks &&
                    Ea(a.url) &&
                    ((c = g("div", "url-text")),
                    v(c, zg(a.url)),
                    d.appendChild(c),
                    (c.onclick = function (b) {
                        B(b);
                        ie(a.url);
                    }));
                Da(a.repeatEvery) &&
                    a.repeatEvery > w.never &&
                    ((c = g("div", "repeats")),
                    v(c, b.repeatsText.replace(":", n.empty) + n.space + qd(a.repeatEvery)),
                    d.appendChild(c));
                Ea(a.location) && ((c = g("div", "location")), v(c, a.location), d.appendChild(c));
                Ea(a.description) && ((c = g("div", "description")), v(c, a.description), d.appendChild(c));
            }
            d.addEventListener("click", function (b) {
                gf(b, a);
            });
            Mb.push(a);
        }
    }
    function im(a) {
        var c = "month-" + a.getMonth() + "-" + a.getFullYear(),
            d = Ca(c);
        if (null === d) {
            var e = new Date(a),
                f = function () {
                    Mb = [];
                    xd(sa);
                    F(e);
                    sb();
                },
                k = jm(a);
            null !== k && Ed.appendChild(k);
            k = g("div", "month");
            Ed.appendChild(k);
            var l = g("div", "header");
            v(l, b.monthNames[a.getMonth()] + n.space + a.getFullYear());
            l.ondblclick = f;
            k.appendChild(l);
            t(l, "ib-arrow-expand-left-right", b.expandMonthTooltipText, f);
            l.appendChild(g("div", "right-divider-line"));
            if (b.manualEditingEnabled) {
                var h = new Date(a.getFullYear(), a.getMonth(), 1);
                t(l, "ib-plus", b.addEventTooltipText, function () {
                    if (b.useTemplateWhenAddingNewEvent) {
                        var a = td(h, h);
                        R(a);
                        ud();
                    } else R(null, h);
                });
            }
            b.manualEditingEnabled &&
                t(l, "ib-close", b.removeEventsTooltipText, function () {
                    Uj(e, Qj);
                });
            f = function () {
                var a = p,
                    e = d;
                "none" !== e.style.display
                    ? ((e.style.display = "none"),
                      (a.className = "ib-square-hollow"),
                      (Q.visibleAllEventsMonths[c] = !1),
                      Sa(a, b.restoreTooltipText))
                    : ((e.style.display = "block"),
                      (a.className = "ib-minus"),
                      (Q.visibleAllEventsMonths[c] = !0),
                      Sa(a, b.minimizedTooltipText));
            };
            var p = t(l, "ib-minus", b.minimizedTooltipText, f);
            tg.push(f);
            d = g("div", "events");
            d.id = c;
            k.appendChild(d);
            Q.visibleAllEventsMonths.hasOwnProperty(c) &&
                !Q.visibleAllEventsMonths[c] &&
                ((d.style.display = "none"), (p.className = "ib-square-hollow"), Sa(p, b.restoreTooltipText));
            Dg(d, a.getFullYear(), a.getMonth(), a.getDate());
        }
        return d;
    }
    function jm(a) {
        var c = null;
        if (ni.indexOf(a.getFullYear()) === A.notFound) {
            ni.push(a.getFullYear());
            c = g("div", "year-header");
            var d = g("span", "header-text");
            v(d, a.getFullYear() + ":");
            c.appendChild(d);
            b.views.fullYear.enabled
                ? (d.onclick = function () {
                      Bc(a.getFullYear(), !0);
                  })
                : (d.className += n.space + "prevent-pointer-events");
            c.appendChild(g("div", "line"));
        }
        return c;
    }
    function Oh(a) {
        a = p(a) ? a : !1;
        hf(sa);
        Ed.innerHTML = n.empty;
        Mb = [];
        tg = [];
        ni = [];
        a && (Ed.scrollTop = 0);
        a = vb(Bd());
        for (var b = a.length, d = 0; d < b; d++) hm(a[d]);
        Xa(Tj, 0 < Mb.length);
        0 === Mb.length &&
            km(Ed, function () {
                R(null);
            });
    }
    function ql() {
        if (!q && b.views.timeline.enabled) {
            var a = null !== ka;
            a && (ka.innerHTML = n.empty);
            null === $a && ($a = b.views.timeline.defaultAxis);
            a || ((ka = g("div", "timeline-view")), (ka.id = fc()), z.appendChild(ka));
            a = g("div", "title-bar");
            ka.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Ya);
            Mg = g("div", "title");
            a.appendChild(Mg);
            t(a, "ib-close", b.closeTooltipText, function () {
                Ec = [];
                xd(ka);
            });
            a.appendChild(g("div", "right-divider-line"));
            b.views.timeline.showExtraTitleBarButtons &&
                b.fullScreenModeEnabled &&
                ((oi = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Ya)),
                a.appendChild(g("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextYearTooltipText, uj);
            b.views.timeline.showExtraTitleBarButtons &&
                b.manualEditingEnabled &&
                t(a, "ib-plus", b.addEventTooltipText, function () {
                    R(null, new Date(da));
                });
            b.views.fullDay.enabled &&
                (a.appendChild(g("div", "right-divider-line-views")),
                t(a, "ib-hourglass", b.viewFullDayTooltipText, function () {
                    Wa(da, !0);
                }));
            !q &&
                nd() &&
                (t(a, "ib-hamburger", b.showMenuTooltipText, Nc), a.appendChild(g("div", "left-divider-line")));
            t(a, "ib-arrow-left-full", b.previousYearTooltipText, qj);
            b.views.timeline.showExtraTitleBarButtons &&
                ((Vj = t(a, "ib-pin", b.currentYearTooltipText, yj)),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        de();
                    }),
                a.appendChild(g("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    Ma(!0, !0);
                }),
                u.enabled && (Wj = t(a, "ib-search", b.searchTooltipText, ee)));
            Ta = g("div", "contents custom-scroll-bars");
            Ta.addEventListener("scroll", kc);
            ka.appendChild(Ta);
        }
    }
    function lm(a, c) {
        var d = g("div", "event"),
            e = vd(da),
            f = new Date(da);
        d.id = "timeline-day-" + c.id;
        d.setAttribute("event-type", H(c.type));
        d.setAttribute("event-id", c.id);
        d.setAttribute("event-is-all-day", c.isAllDay);
        a.appendChild(d);
        if (!x(b.events.onTimelineEventRender, d, c)) {
            if (H(c.repeatEvery) > w.never && b.showReoccurringEventIcons) {
                var k = g("div", "ib-refresh-medium ib-no-hover ib-no-active");
                k.style.borderColor = d.style.color;
                d.appendChild(k);
            }
            d.innerHTML += mc(c.title);
        }
        d.oncontextmenu = function (a) {
            ef(a, c, e);
        };
        d.addEventListener("click", function (a) {
            gf(a, c);
        });
        d.onmousemove = function (a) {
            null !== Dd && Dd.id === c.id ? B(a) : ii(a, c);
        };
        be(d, c, f);
        ff(d, c);
        ae(d, c, Ve(c, da));
        d = mm(a, da, d, c);
        qf = null === qf ? d : na.min(qf, d);
        rf = null === rf ? a.offsetTop : na.min(rf, a.offsetTop);
    }
    function Kb(a, c) {
        a = p(a) ? new Date(a) : new Date();
        c = p(c) ? c : !1;
        var d = new Date(),
            e = Z(d),
            f = b.visibleDays.indexOf(e) > A.notFound,
            k = [];
        e = Ta.scrollLeft;
        var l = Ta.scrollTop;
        Mg.innerHTML = n.empty;
        Ta.innerHTML = n.empty;
        Ec = [];
        da = a;
        Ng = {};
        rf = qf = null;
        sf = [];
        W(a, d) && !f && Xj();
        Sh(da, k);
        Xa(Vj, f);
        tf = g("div", "timeline-header");
        Ta.appendChild(tf);
        a = g("div", "timeline-header-item");
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
        tf.appendChild(a);
        t(a, "ib-arrow-left-full", b.previousPropertyTooltipText, nm);
        t(a, "ib-arrow-right-full", b.nextPropertyTooltipText, om);
        a = b.views.timeline.minutesBetweenSections;
        d = new Date();
        f = new Date();
        var h = 0,
            r = 0;
        f.setHours(0, 0, 0, 0);
        for (0 !== 60 % a && (a = 30); W(f, d); ) {
            var J = g("div", "timeline-header-item");
            J.innerText = zb(new Date(f));
            tf.appendChild(J);
            f = hb(f, a);
            J = g("div", "timeline-header-item");
            J.innerText = zb(new Date(f));
            tf.appendChild(J);
            f = hb(f, a);
            J = g("div", "timeline-column");
            J.style.left = h + "px";
            Ta.appendChild(J);
            0 === r && ((r = Qe(J, "border-right-width")), (r = J.clientWidth + r));
            h += r;
            var m = g("div", "timeline-column");
            m.style.left = h + "px";
            Ta.appendChild(m);
            h += r;
            sf.push(J);
            sf.push(m);
        }
        hf(ka);
        k = vb(k);
        a = k.length;
        d = 0;
        if (0 < a)
            for (f = 0; f < a; f++) {
                h = k[f];
                J = G(h[$a], b.noneText);
                r = J.toLowerCase();
                h.isAllDay && ((J = b.allDayText + ": " + J), (r = r + "-" + h.id));
                if (Ng.hasOwnProperty(r)) J = Ng[r];
                else {
                    m = g("div", "timeline-row");
                    Ta.appendChild(m);
                    var q = g("div", "timeline-row-item" + (0 !== d % 2 ? " timeline-row-item-odd" : n.empty));
                    v(q, J);
                    m.appendChild(q);
                    J = g("div", "timeline-row-items");
                    m.appendChild(J);
                    m = b.views.timeline.minutesBetweenSections;
                    q = new Date();
                    var u = new Date();
                    u.setHours(0, 0, 0, 0);
                    for (0 !== 60 % m && (m = 30); W(u, q); ) {
                        var w = g("div", "timeline-row-item-spacing");
                        J.appendChild(w);
                        u = hb(u, m);
                        w = g("div", "timeline-row-item-spacing");
                        J.appendChild(w);
                        u = hb(u, m);
                    }
                    Ng[r] = J;
                    d++;
                }
                lm(J, h);
                Ec.push(h);
            }
        k = sf.length;
        for (d = a = 0; d < k; d++)
            (f = sf[d]), 0 === a && (a = Ta.scrollHeight - f.offsetTop), (f.style.height = a + "px");
        x(b.events.onTimelineTitleRender, N) || lc(Mg, da, !1, !0, !0);
        c ? ((Ta.scrollLeft = qf), (Ta.scrollTop = rf)) : ((Ta.scrollLeft = e), (Ta.scrollTop = l));
        Xa(Wj, 0 < Ec.length);
    }
    function qj() {
        Bg(da);
        if (7 > b.visibleDays.length)
            for (var a = Z(da); b.visibleDays.indexOf(a) === A.notFound; ) Bg(da), (a = Z(da));
        Kb(da, !0);
    }
    function uj() {
        Xj(!0);
    }
    function yj() {
        da = new Date();
        Kb(da, !0);
    }
    function nm() {
        var a = qe.indexOf($a);
        a--;
        0 > a && (a = qe.length - 1);
        $a = qe[a];
        Kb(da);
    }
    function om() {
        var a = qe.indexOf($a);
        a++;
        a > qe.length - 1 && (a = 0);
        $a = qe[a];
        Kb(da);
    }
    function Xj(a) {
        a = p(a) ? a : !1;
        Za(da);
        if (7 > b.visibleDays.length)
            for (var c = Z(da); b.visibleDays.indexOf(c) === A.notFound; ) Za(da), (c = Z(da));
        a && Kb(da, !0);
    }
    function za(a, b, d, e, f) {
        f = p(f) ? f : !1;
        var c = g("div", "item");
        a.appendChild(c);
        c.appendChild(g("div", b));
        a = g("div", "menu-text");
        v(a, d);
        c.appendChild(a);
        f && (a.className += " bold");
        c.onclick = function () {
            e();
        };
        return c;
    }
    function ab(a) {
        var b = g("div", "separator");
        a.appendChild(b);
        return b;
    }
    function og(a) {
        var b = !1;
        re(a) && ((a.style.display = "none"), (b = !0));
        return b;
    }
    function re(a) {
        return null !== a && "block" === a.style.display;
    }
    function Yj() {
        return re(Ka) || re(aa) || re(Pa) || re(pb) || re(Ab);
    }
    function vl() {
        null !== Ka && (ib(D.body, Ka), (Og = pi = null));
        Ka = g("div", "calendar-context-menu");
        Aa.push(Ka);
        D.body.appendChild(Ka);
        b.manualEditingEnabled &&
            za(
                Ka,
                "ib-plus-icon",
                b.addEventTitle + "...",
                function () {
                    if (b.useTemplateWhenAddingNewEvent) {
                        var a = td(Fd, Fd);
                        R(a);
                        ud();
                    } else R(null, Fd);
                },
                !0
            );
        b.views.fullDay.enabled &&
            (ab(Ka),
            za(Ka, "ib-arrow-expand-left-right-icon", b.expandDayTooltipText, function () {
                Wa(Fd, !0);
            }));
        b.views.fullWeek.enabled &&
            (ab(Ka),
            za(Ka, "ib-hamburger-side-icon", b.viewFullWeekText, function () {
                Ac(Fd, !0);
            }));
        b.manualEditingEnabled &&
            ((pi = ab(Ka)),
            (Og = za(Ka, "ib-circle-icon", b.pasteText, function () {
                Wh(Fd, Qb);
            })));
    }
    function Kg(a, b) {
        q ||
            null === Ka ||
            (ia(a) || nc(),
            (Fd = new Date(b)),
            null !== Og && ((b = 0 < la.length ? "block" : "none"), (pi.style.display = b), (Og.style.display = b)),
            Ia(),
            B(a),
            uf(a, Ka));
    }
    function wl() {
        null !== aa && (ib(D.body, aa), (Pg = Qg = vf = wf = xf = yf = zf = Af = Bf = Cf = Df = Ef = aa = null));
        aa = g("div", "calendar-context-menu");
        Aa.push(aa);
        D.body.appendChild(aa);
        b.manualEditingEnabled &&
            ((xf = za(
                aa,
                "ib-edit-icon",
                b.editEventTitle + "...",
                function () {
                    R(bb, null, null, Zj);
                },
                !0
            )),
            (Bf = ab(aa)),
            (Af = za(aa, "ib-pipe-icon", b.cutText, function () {
                fe();
                Qb = !0;
                ak(bb);
                fe(!1);
            })),
            (zf = ab(aa)),
            (yf = za(aa, "ib-circle-hollow-icon", b.copyText, function () {
                fe();
                Qb = !1;
                ak(bb);
                fe(!1);
            })),
            (Df = ab(aa)),
            (Cf = za(aa, "ib-equals-icon", b.duplicateText + "...", function () {
                R(bb);
                v(Tc, b.addEventTitle);
                Ff.value = b.addText;
                Rg.style.display = "none";
                ha = se(ha);
                t(Tc, "ib-close", b.closeTooltipText, Uc, !0);
            })),
            (wf = ab(aa)),
            (vf = za(aa, "ib-close-icon", b.removeEventText, function () {
                Vb(D.body, La);
                var a = function () {
                        ib(D.body, La);
                    },
                    c = H(bb.repeatEvery) > w.never && null !== Gf;
                Hf(
                    b.confirmEventRemoveTitle,
                    b.confirmEventRemoveMessage,
                    function () {
                        a();
                        p(bb.id) &&
                            (Sg.checked || null === Gf
                                ? (r.removeEvent(bb.id, !0), Ua(b.eventRemovedText.replace("{0}", bb.title)))
                                : (wa(bb.seriesIgnoreDates)
                                      ? bb.seriesIgnoreDates.push(Gf)
                                      : (bb.seriesIgnoreDates = [Gf]),
                                  Ja()),
                            oa());
                    },
                    a,
                    c
                );
            })),
            (Ef = ab(aa)));
        qi = za(aa, "ib-arrow-top-right-icon", b.openUrlText, function () {
            ie(bb.url);
        });
        b.exportEventsEnabled &&
            ((Qg = ab(aa)),
            (Pg = za(aa, "ib-arrow-down-full-line-icon", b.exportEventsTooltipText + "...", function () {
                ed(Ga);
            })));
        b.shareEventsEnabled &&
            If.share &&
            (ab(aa),
            za(aa, "ib-arrow-up-full-line-share-icon", b.shareText + "...", function () {
                var a = bk(0 < Ga.length ? Ga : [bb]),
                    c = { type: "text/plain" };
                a = new Blob([a], c);
                c = { files: [new File([a], ck("txt", b.shareStartFilename), c)] };
                If.canShare(c) && If.share(c);
            }));
    }
    function ef(a, c, d) {
        if (null !== aa) {
            var e = G(c.url),
                f = lf(c);
            ia(a) || nc();
            bb = c;
            Zj = new Date(d);
            Gf = p(d) ? d : null;
            1 < Ga.length
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
                  (qi.style.display = "none"),
                  b.exportEventsEnabled && ((Qg.style.display = "block"), (Pg.style.display = "block")))
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
                  (qi.style.display = e !== n.empty ? "block" : "none"),
                  b.exportEventsEnabled && ((Qg.style.display = "none"), (Pg.style.display = "none")));
            if (e !== n.empty || 1 < aa.childElementCount) Ia(), B(a), uf(a, aa);
        }
    }
    function xl() {
        null !== Pa && (ib(D.body, Pa), (Tg = ri = si = ti = Pa = null));
        b.manualEditingEnabled &&
            ((Pa = g("div", "calendar-context-menu")),
            Aa.push(Pa),
            D.body.appendChild(Pa),
            za(
                Pa,
                "ib-plus-icon",
                b.addEventTitle + "...",
                function () {
                    if (b.useTemplateWhenAddingNewEvent) {
                        var a = td(te, te, cf, cf);
                        R(a);
                        ud();
                    } else R(null, te, cf);
                },
                !0
            ),
            (ti = ab(Pa)),
            (si = za(Pa, "ib-close-icon", b.removeEventsTooltipText, function () {
                Uj(te, W);
            })),
            (ri = ab(Pa)),
            (Tg = za(Pa, "ib-circle-icon", b.pasteText, function () {
                Wh(te, Qb);
            })));
    }
    function Dj(a, b, d) {
        null !== Pa &&
            (ia(a) || nc(),
            (te = b),
            null !== Tg && ((b = 0 < la.length ? "block" : "none"), (ri.style.display = b), (Tg.style.display = b)),
            (d = wa(d) && 0 < d.length ? "block" : "none"),
            (ti.style.display = d),
            (si.style.display = d),
            Ia(),
            B(a),
            uf(a, Pa));
    }
    function yl() {
        null === pb &&
            ((pb = g("div", "calendar-context-menu")),
            Aa.push(pb),
            D.body.appendChild(pb),
            (dk = za(
                pb,
                "ib-close-icon",
                b.hideDayText,
                function () {
                    b.visibleDays.splice(b.visibleDays.indexOf(ek), 1);
                    nb = !1;
                    x(b.events.onOptionsUpdated, b);
                    F(y, !0, !0);
                },
                !0
            )),
            (fk = ab(pb)),
            (gk = za(pb, "ib-rhombus-hollow-icon", b.showOnlyWorkingDaysText, function () {
                1 <= b.workingDays.length &&
                    ((b.visibleDays = [].slice.call(b.workingDays)),
                    (nb = !1),
                    x(b.events.onOptionsUpdated, b),
                    F(y, !0, !0));
            })),
            (hk = ab(pb)),
            za(pb, "ib-octagon-hollow-icon", b.visibleDaysText + "...", function () {
                Nc(!0);
            }));
    }
    function Vi() {
        null !== La || q || (La = g("div", "disabled-background"));
    }
    function Wi() {
        if (!q) {
            null === cb && ((cb = g("div", "calendar-dialog event-editor")), Aa.push(cb), D.body.appendChild(cb));
            cb.innerHTML = n.empty;
            var a = g("div", "view");
            cb.appendChild(a);
            Ug = g("div", "disabled-area");
            a.appendChild(Ug);
            Tc = g("div", "title-bar");
            a.appendChild(Tc);
            Gd(Tc, cb, null);
            var c = g("div", "contents");
            a.appendChild(c);
            a = ik(c);
            ue(
                a,
                b.eventText,
                function (a) {
                    ve(a, Wb, cb);
                },
                !0
            );
            ue(a, b.typeText.replace(":", n.empty), function (a) {
                ve(a, Vg, cb);
            });
            ue(a, b.repeatsText.replace(":", n.empty), function (a) {
                ve(a, Wg, cb);
            });
            ue(a, b.optionalText, function (a) {
                ve(a, Vc, cb);
            });
            Wb = we(c, !0, !1);
            Vg = we(c, !1, !1);
            Wg = we(c, !1, !1);
            Vc = we(c, !1, !1);
            pm();
            qm();
            rm();
            a = g("div", "buttons-container");
            c.appendChild(a);
            Rg = Ha(a, b.removeEventText, "remove", sm);
            Ff = Ha(a, b.addText, "add-update", jk);
            Ha(a, b.cancelText, "cancel", Uc);
        }
    }
    function pm() {
        ra(Wb, b.titleText);
        var a = g("div", "input-title-container");
        Wb.appendChild(a);
        Bb = g("input", null, "text");
        a.appendChild(Bb);
        Bb.onkeydown = function (a) {
            a.keyCode === S.enter && jk();
        };
        0 < b.maximumEventTitleLength && (Bb.maxLength = b.maximumEventTitleLength);
        var c = function () {
            kk(null);
        };
        b.eventColorsEditingEnabled && (ui = Ha(a, "...", "select-colors", tm, b.selectColorsText));
        ra(Wb, b.fromText.replace(":", n.empty) + "/" + b.toText);
        a = g("div", "split");
        Wb.appendChild(a);
        Xb = g("input");
        Xb.onchange = c;
        a.appendChild(Xb);
        hc(Xb, "date");
        Yb = g("input");
        a.appendChild(Yb);
        hc(Yb, "time");
        a = g("div", "split");
        Wb.appendChild(a);
        jb = g("input");
        jb.onchange = c;
        a.appendChild(jb);
        hc(jb, "date");
        Zb = g("input");
        a.appendChild(Zb);
        hc(Zb, "time");
        xe = M(Wb, b.isAllDayText, c)[0];
        Jf = M(Wb, b.showAlertsText)[0];
        Kf = M(Wb, b.showAsBusyText)[0];
    }
    function qm() {
        var a = g("div", "radio-buttons-container");
        Wg.appendChild(a);
        rc = ja(a, b.repeatsNever, "RepeatType", Wc);
        Lf = ja(a, b.repeatsEveryDayText, "RepeatType", Wc);
        Mf = ja(a, b.repeatsEveryWeekText, "RepeatType", Wc);
        Nf = ja(a, b.repeatsEvery2WeeksText, "RepeatType", Wc);
        Of = ja(a, b.repeatsEveryMonthText, "RepeatType", Wc);
        Pf = ja(a, b.repeatsEveryYearText, "RepeatType", Wc);
        $b = ja(a, b.repeatsCustomText, "RepeatType", Wc);
        Xg = Ha(a, "...", "repeat-options", um, b.repeatOptionsTitle);
        a = g("div", "split split-margin");
        Wg.appendChild(a);
        Xc = g("input", null, "number");
        Xc.setAttribute("min", "1");
        a.appendChild(Xc);
        var c = g("div", "radio-buttons-container split-contents");
        a.appendChild(c);
        Hd = ja(c, b.dailyText, "RepeatCustomType");
        Qf = ja(c, b.weeklyText, "RepeatCustomType");
        Rf = ja(c, b.monthlyText, "RepeatCustomType");
        Sf = ja(c, b.yearlyText, "RepeatCustomType");
    }
    function rm() {
        var a = g("div", "split");
        Vc.appendChild(a);
        ra(a, b.alertOffsetText);
        ra(a, b.groupText);
        a = g("div", "split");
        Vc.appendChild(a);
        Id = g("input", null, "number");
        Id.setAttribute("min", "0");
        a.appendChild(Id);
        Jd = g("input", null, "text");
        a.appendChild(Jd);
        0 < b.maximumEventGroupLength && (Jd.maxLength = b.maximumEventGroupLength);
        ra(Vc, b.descriptionText);
        Kd = g("textarea", "custom-scroll-bars");
        Vc.appendChild(Kd);
        0 < b.maximumEventDescriptionLength && (Kd.maxLength = b.maximumEventDescriptionLength);
        a = g("div", "split");
        Vc.appendChild(a);
        ra(a, b.urlText);
        ra(a, b.locationText);
        a = g("div", "split");
        Vc.appendChild(a);
        ye = g("input", null, "url");
        a.appendChild(ye);
        Ld = g("input", null, "text");
        a.appendChild(Ld);
        0 < b.maximumEventLocationLength && (Ld.maxLength = b.maximumEventLocationLength);
    }
    function Wc() {
        Xg.disabled = rc.checked;
        Sf.disabled = !$b.checked;
        Hd.disabled = !$b.checked;
        Qf.disabled = !$b.checked;
        Rf.disabled = !$b.checked;
        Xc.disabled = !$b.checked;
    }
    function kk(a) {
        a = p(a) ? a : ha;
        var b = !1;
        (a = p(a) && kb(a.locked) ? a.locked : !1)
            ? (b = !0)
            : xe.checked && ((jb.value = Xb.value), (Yb.value = "00:00"), (Zb.value = "23:59"), (b = !0));
        jb.disabled = b;
        Yb.disabled = b;
        Zb.disabled = b;
        var d = ze(Xb),
            e = ze(jb);
        lk(jb, d);
        lk(Md, e);
        d > e && Cb(d, jb);
        a || (e > d || e < d ? ((b = !0), (rc.checked = !0)) : (b = !1));
        rc.disabled = b;
        Lf.disabled = b;
        Mf.disabled = b;
        Nf.disabled = b;
        Of.disabled = b;
        Pf.disabled = b;
        $b.disabled = b;
        Xg.disabled = b;
        Xc.disabled = b;
        Hd.disabled = b;
        Qf.disabled = b;
        Rf.disabled = b;
        Sf.disabled = b;
        a || Wc();
    }
    function R(a, c, d, e) {
        if (Xh(b.events.onBeforeEventAddEdit)) x(b.events.onBeforeEventAddEdit, a);
        else {
            Vb(D.body, La);
            var f = cb,
                k = void 0;
            k = p(k) ? k : 0;
            f = f.getElementsByClassName("tab");
            0 < f.length && f[k].click();
            Vg.innerHTML = n.empty;
            k = g("div", "radio-buttons-container");
            Vg.appendChild(k);
            for (var l in P) P.hasOwnProperty(l) && (P[l].eventEditorInput = ja(k, P[l].text, "Type"));
            p(a)
                ? (v(Tc, b.editEventTitle),
                  mk(a.type),
                  (Ff.value = b.updateText),
                  (Rg.style.display = "inline-block"),
                  (ha = a),
                  (Yb.value = zb(a.from, !1)),
                  (Zb.value = zb(a.to, !1)),
                  (xe.checked = vi(a.isAllDay)),
                  (Jf.checked = vi(a.showAlerts, !0)),
                  (Kf.checked = vi(a.showAsBusy, !0)),
                  (Bb.value = G(a.title)),
                  (Kd.value = G(a.description)),
                  (Ld.value = G(a.location)),
                  (Jd.value = G(a.group)),
                  (ye.value = G(a.url)),
                  (Ae.value = G(a.color, b.defaultEventBackgroundColor)),
                  (Be.value = G(a.colorText, b.defaultEventTextColor)),
                  (Ce.value = G(a.colorBorder, b.defaultEventBorderColor)),
                  (Xc.value = H(a.repeatEveryCustomValue, 1)),
                  (Id.value = H(a.alertOffset, 0)),
                  Cb(a.from, Xb),
                  Cb(a.to, jb),
                  (d = H(a.repeatEvery)),
                  d === w.never
                      ? (rc.checked = !0)
                      : d === w.everyDay
                        ? (Lf.checked = !0)
                        : d === w.everyWeek
                          ? (Mf.checked = !0)
                          : d === w.every2Weeks
                            ? (Nf.checked = !0)
                            : d === w.everyMonth
                              ? (Of.checked = !0)
                              : d === w.everyYear
                                ? (Pf.checked = !0)
                                : d === w.custom && ($b.checked = !0),
                  (c = H(a.repeatEveryCustomType)),
                  c === O.daily
                      ? (Hd.checked = !0)
                      : c === O.weekly
                        ? (Qf.checked = !0)
                        : c === O.monthly
                          ? (Rf.checked = !0)
                          : c === O.yearly && (Sf.checked = !0),
                  (c = Pc(a.repeatEveryExcludeDays)),
                  (Yg.checked = c.indexOf(1) > A.notFound),
                  (Zg.checked = c.indexOf(2) > A.notFound),
                  ($g.checked = c.indexOf(3) > A.notFound),
                  (ah.checked = c.indexOf(4) > A.notFound),
                  (bh.checked = c.indexOf(5) > A.notFound),
                  (ch.checked = c.indexOf(6) > A.notFound),
                  (dh.checked = c.indexOf(0) > A.notFound),
                  Cb(a.repeatEnds, Md),
                  (wi = d > w.never && p(e) && !W(a.from, e)),
                  (Tf = e))
                : ((e = new Date()),
                  (c = p(c) ? c : e),
                  ec(c) && (c.setHours(e.getHours()), c.setMinutes(e.getMinutes())),
                  (e = hb(c, b.defaultEventDuration)),
                  v(Tc, b.addEventTitle),
                  mk(),
                  (Ff.value = b.addText),
                  (Rg.style.display = "none"),
                  (ha = {}),
                  (xe.checked = !1),
                  (Jf.checked = !0),
                  (Kf.checked = !0),
                  (Bb.value = n.empty),
                  (Kd.value = n.empty),
                  (Ld.value = n.empty),
                  (Jd.value = n.empty),
                  (ye.value = n.empty),
                  (Ae.value = b.defaultEventBackgroundColor),
                  (Be.value = b.defaultEventTextColor),
                  (Ce.value = b.defaultEventBorderColor),
                  (rc.checked = !0),
                  (Yg.checked = !1),
                  (Zg.checked = !1),
                  ($g.checked = !1),
                  (ah.checked = !1),
                  (bh.checked = !1),
                  (ch.checked = !1),
                  (dh.checked = !1),
                  (Md.value = null),
                  (Xc.value = "1"),
                  (Hd.checked = !0),
                  (Id.value = 0),
                  wa(d) &&
                      (c.setHours(d[0]),
                      c.setMinutes(d[1]),
                      e.setHours(d[0]),
                      e.setMinutes(d[1]),
                      (e = hb(e, b.defaultEventDuration))),
                  (Yb.value = zb(c, !1)),
                  (Zb.value = zb(e, !1)),
                  Cb(c, Xb),
                  Cb(e, jb),
                  (wi = !1),
                  (Tf = null));
            t(Tc, "ib-close", b.closeTooltipText, Uc, !0);
            a = lf(a);
            for (var h in P) P.hasOwnProperty(h) && p(P[h].eventEditorInput) && (P[h].eventEditorInput.disabled = a);
            Ff.disabled = a;
            Xb.disabled = a;
            jb.disabled = a;
            Yb.disabled = a;
            Zb.disabled = a;
            xe.disabled = a;
            Jf.disabled = a;
            Kf.disabled = a;
            Bb.disabled = a;
            Kd.disabled = a;
            Ld.disabled = a;
            Jd.disabled = a;
            ye.disabled = a;
            rc.disabled = a;
            Lf.disabled = a;
            Mf.disabled = a;
            Nf.disabled = a;
            Of.disabled = a;
            Pf.disabled = a;
            $b.disabled = a;
            Xg.disabled = a;
            Id.disabled = a;
            null !== ui && (ui.disabled = a);
            kk();
            gb.push(Uc);
            cb.style.display = "block";
            Bb.focus();
        }
    }
    function ud() {
        Bb.focus();
        Bb.select();
    }
    function jk() {
        var a = Yb.value.split(":"),
            c = Zb.value.split(":"),
            d = Nd(Bb.value),
            e = Nd(ye.value);
        if (2 > a.length) Uf(b.fromTimeErrorMessage);
        else if (2 > c.length) Uf(b.toTimeErrorMessage);
        else if (d === n.empty) Uf(b.titleErrorMessage);
        else if (0 < e.length && !nk(e)) Uf(b.urlErrorMessage);
        else {
            var f = ze(Xb),
                k = ze(jb),
                g = Nd(Kd.value),
                h = Nd(Ld.value),
                m = Nd(Jd.value),
                J = ze(Md, null),
                q = parseInt(Xc.value),
                t = vm(),
                u = parseInt(Id.value);
            isNaN(q) && ((q = 0), (rc.checked = !0), (Hd.checked = !0));
            isNaN(u) && (u = 0);
            if (k < f) Uf(b.toSmallerThanFromErrorMessage);
            else {
                var x = function (a, c, f, k, l) {
                    l = p(l) ? l : !1;
                    eh(c, Yb.value);
                    eh(f, Zb.value);
                    l
                        ? ((ha.from = c), (ha.to = f), (ha.repeatEnds = k))
                        : ((l = p(a)),
                          (c = {
                              from: c,
                              to: f,
                              title: d,
                              description: g,
                              location: h,
                              group: m,
                              isAllDay: xe.checked,
                              showAlerts: Jf.checked,
                              showAsBusy: Kf.checked,
                              color: ha.color,
                              colorText: ha.colorText,
                              colorBorder: ha.colorBorder,
                              repeatEveryExcludeDays: ha.repeatEveryExcludeDays,
                              repeatEnds: k,
                              url: e,
                              repeatEveryCustomValue: q,
                              type: t,
                              customTags: ha.customTags,
                              alertOffset: u,
                          }),
                          rc.checked
                              ? (c.repeatEvery = w.never)
                              : Lf.checked
                                ? (c.repeatEvery = w.everyDay)
                                : Mf.checked
                                  ? (c.repeatEvery = w.everyWeek)
                                  : Nf.checked
                                    ? (c.repeatEvery = w.every2Weeks)
                                    : Of.checked
                                      ? (c.repeatEvery = w.everyMonth)
                                      : Pf.checked
                                        ? (c.repeatEvery = w.everyYear)
                                        : $b.checked && (c.repeatEvery = w.custom),
                          Hd.checked
                              ? (c.repeatEveryCustomType = O.daily)
                              : Qf.checked
                                ? (c.repeatEveryCustomType = O.weekly)
                                : Rf.checked
                                  ? (c.repeatEveryCustomType = O.monthly)
                                  : Sf.checked && (c.repeatEveryCustomType = O.yearly),
                          l
                              ? (c.id = a)
                              : ((c.organizerName = b.organizerName),
                                (c.organizerEmailAddress = b.organizerEmailAddress)),
                          l
                              ? (r.updateEvent(a, c, !1), Ua(b.eventUpdatedText.replace("{0}", ha.title)))
                              : (r.addEvent(c, !1), Ua(b.eventAddedText.replace("{0}", c.title))),
                          b.isWidget ? F(y) : (Ja(), oa()));
                };
                wi
                    ? (Vf(),
                      Hf(
                          b.confirmEventUpdateTitle,
                          b.confirmEventUpdateMessage,
                          function () {
                              var a = new Date(Tf),
                                  b = new Date(Tf),
                                  c = new Date(Tf);
                              Od();
                              Za(c, -1);
                              x(ha.id, f, k, c, !0);
                              x(null, a, b, J);
                              Uc();
                          },
                          function () {
                              Od();
                              x(ha.id, f, k, J);
                              Uc();
                          },
                          !1,
                          !0,
                          b.forwardText,
                          b.seriesText
                      ))
                    : (x(ha.id, f, k, J), Uc());
            }
        }
    }
    function Uc(a) {
        De(a);
        ib(D.body, La);
        cb.style.display = "none";
    }
    function sm() {
        Vf();
        Hf(
            b.confirmEventRemoveTitle,
            b.confirmEventRemoveMessage,
            function () {
                Od();
                Uc();
                p(ha.id) &&
                    (r.removeEvent(ha.id, !0),
                    b.isWidget ? F(y) : oa(),
                    Ua(b.eventRemovedText.replace("{0}", ha.title)));
            },
            function () {
                Od();
            }
        );
    }
    function oa() {
        fb(Y) && Wa(N);
        fb(fa) && Ac(Tb);
        fb(Fa) && Bc(ta);
        fb(sa) && Oh();
        fb(ka) && Kb(da);
    }
    function td(a, c, d, e) {
        d = p(d) ? d : "09:00";
        e = p(e) ? d : "09:00";
        eh(a, d);
        eh(c, e);
        c = hb(c, b.defaultEventDuration);
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
            repeatEvery: w.never,
            repeatEveryCustomType: O.daily,
            organizerName: n.empty,
            organizerEmailAddress: n.empty,
            type: 0,
            locked: !1,
            customTags: null,
            alertOffset: 0,
        };
        r.addEvent(a, !1);
        Ua(b.eventAddedText.replace("{0}", a.title));
        Ja();
        oa();
        lb();
        return a;
    }
    function lf(a) {
        return p(a) && kb(a.locked) ? a.locked : !1;
    }
    function Uf(a) {
        Hf(b.errorText, a, Od, null, !1, !1);
        Vf();
    }
    function Vf() {
        Ug.style.display = "block";
    }
    function Od() {
        Ug.style.display = "none";
    }
    function Xi() {
        if (!q && null === sc) {
            sc = g("div", "calendar-dialog event-editor-colors");
            Aa.push(sc);
            D.body.appendChild(sc);
            var a = g("div", "title-bar");
            v(a, b.selectColorsText);
            sc.appendChild(a);
            Gd(a, sc, null);
            t(a, "ib-close", b.closeTooltipText, fh, !0);
            a = g("div", "contents");
            sc.appendChild(a);
            var c = g("div", "section");
            a.appendChild(c);
            ra(c, b.backgroundColorText, "text-header");
            Ae = g("input");
            c.appendChild(Ae);
            hc(Ae, "color");
            c = g("div", "section");
            a.appendChild(c);
            ra(c, b.textColorText, "text-header");
            Be = g("input");
            c.appendChild(Be);
            hc(Be, "color");
            c = g("div", "section");
            a.appendChild(c);
            ra(c, b.borderColorText, "text-header");
            Ce = g("input");
            c.appendChild(Ce);
            hc(Ce, "color");
            c = g("div", "buttons-container");
            a.appendChild(c);
            Ha(c, b.updateText, "update", wm);
            Ha(c, b.cancelText, "cancel", fh);
        }
    }
    function wm() {
        fh();
        ha.color = Ae.value;
        ha.colorText = Be.value;
        ha.colorBorder = Ce.value;
    }
    function fh(a) {
        De(a);
        Od();
        sc.style.display = "none";
    }
    function tm() {
        gb.push(fh);
        sc.style.display = "block";
        Vf();
    }
    function Yi() {
        if (!q && null === tc) {
            tc = g("div", "calendar-dialog event-editor-repeat-options");
            Aa.push(tc);
            D.body.appendChild(tc);
            var a = g("div", "title-bar");
            v(a, b.repeatOptionsTitle);
            tc.appendChild(a);
            Gd(a, tc, null);
            t(a, "ib-close", b.closeTooltipText, gh, !0);
            a = g("div", "contents");
            tc.appendChild(a);
            var c = g("div", "section");
            a.appendChild(c);
            ra(c, b.daysToExcludeText, "text-header");
            Yg = M(c, b.dayNames[0])[0];
            Zg = M(c, b.dayNames[1])[0];
            $g = M(c, b.dayNames[2])[0];
            ah = M(c, b.dayNames[3])[0];
            bh = M(c, b.dayNames[4])[0];
            ch = M(c, b.dayNames[5])[0];
            dh = M(c, b.dayNames[6])[0];
            c = g("div", "section");
            a.appendChild(c);
            ra(c, b.repeatEndsText, "text-header");
            Md = g("input");
            c.appendChild(Md);
            hc(Md, "date");
            c = g("div", "buttons-container");
            a.appendChild(c);
            Ha(c, b.updateText, "update", xm);
            Ha(c, b.cancelText, "cancel", gh);
        }
    }
    function xm() {
        gh();
        var a = [];
        Yg.checked && a.push(1);
        Zg.checked && a.push(2);
        $g.checked && a.push(3);
        ah.checked && a.push(4);
        bh.checked && a.push(5);
        ch.checked && a.push(6);
        dh.checked && a.push(0);
        ha.repeatEveryExcludeDays = a;
    }
    function gh(a) {
        De(a);
        Od();
        tc.style.display = "none";
    }
    function um() {
        gb.push(gh);
        tc.style.display = "block";
        Vf();
    }
    function Zi() {
        if (!q && null === Yc) {
            Yc = g("div", "calendar-dialog message");
            Aa.push(Yc);
            D.body.appendChild(Yc);
            xi = g("div", "title-bar");
            Yc.appendChild(xi);
            var a = g("div", "contents");
            Yc.appendChild(a);
            yi = g("div", "text");
            a.appendChild(yi);
            var c = M(a, b.removeAllEventsInSeriesText);
            Sg = c[0];
            zi = c[1];
            Wf = g("div", "buttons-container");
            a.appendChild(Wf);
        }
    }
    function Hf(a, c, d, e, f, k, l, h) {
        f = p(f) ? f : !1;
        k = p(k) ? k : !0;
        var E = p(l) ? l : b.yesText,
            r = p(h) ? h : b.noText;
        Wf.innerHTML = n.empty;
        var m = g("input", "yes-ok", "button");
        m.value = E;
        Wf.appendChild(m);
        E = g("input", "no", "button");
        E.value = r;
        Wf.appendChild(E);
        gb.push(!1);
        Yc.style.display = "block";
        v(xi, a);
        v(yi, c);
        m.onclick = ok;
        m.addEventListener("click", d);
        E.onclick = ok;
        Zc(e) && E.addEventListener("click", e);
        p(l) ||
            p(h) ||
            (k
                ? ((E.style.display = "inline-block"), (m.value = b.yesText))
                : ((E.style.display = "none"), (m.value = b.okText)));
        f ? ((zi.style.display = "block"), (Sg.checked = !1)) : ((zi.style.display = "none"), (Sg.checked = !0));
    }
    function ok() {
        gb.pop();
        Yc.style.display = "none";
    }
    function rl() {
        if (!q && null === uc) {
            uc = g("div", "calendar-dialog export-events");
            Aa.push(uc);
            D.body.appendChild(uc);
            var a = g("div", "title-bar");
            v(a, b.exportEventsTitle);
            uc.appendChild(a);
            Gd(a, uc, null);
            t(a, "ib-close", b.closeTooltipText, hh, !0);
            a = g("div", "contents");
            uc.appendChild(a);
            Va = g("input", null, "text");
            Va.placeholder = b.exportFilenamePlaceholderText;
            a.appendChild(Va);
            Va.onkeydown = function (a) {
                a.keyCode === S.enter && pk();
            };
            Db = M(a, b.copyToClipboardOnlyText, qk)[0];
            ih = g("div", "split options");
            a.appendChild(ih);
            var c = g("div", "radio-buttons-container split-contents");
            ih.appendChild(c);
            var d = g("div", "radio-buttons-container split-contents");
            ih.appendChild(d);
            Ai = ja(c, "CSV", "ExportType");
            rk = ja(c, "XML", "ExportType");
            sk = ja(c, "JSON", "ExportType");
            tk = ja(c, "TXT", "ExportType");
            uk = ja(d, "iCAL", "ExportType");
            vk = ja(d, "MD", "ExportType");
            wk = ja(d, "HTML", "ExportType");
            xk = ja(d, "TSV", "ExportType");
            c = g("div", "buttons-container");
            a.appendChild(c);
            Ha(c, b.exportText, "export", pk);
            Ha(c, b.cancelText, "cancel", hh);
        }
    }
    function qk() {
        Va.disabled = Db.checked;
    }
    function ed(a) {
        Vb(D.body, La);
        Ib();
        gb.push(hh);
        uc.style.display = "block";
        vc = a;
        Ai.checked = !0;
        Va.value = n.empty;
        Db.checked = !1;
        qk();
        Va.focus();
    }
    function hh(a) {
        De(a);
        ib(D.body, La);
        uc.style.display = "none";
    }
    function pk() {
        hh();
        Ai.checked
            ? wc(vc, "csv", Va.value, Db.checked)
            : rk.checked
              ? wc(vc, "xml", Va.value, Db.checked)
              : sk.checked
                ? wc(vc, "json", Va.value, Db.checked)
                : tk.checked
                  ? wc(vc, "text", Va.value, Db.checked)
                  : uk.checked
                    ? wc(vc, "ical", Va.value, Db.checked)
                    : vk.checked
                      ? wc(vc, "md", Va.value, Db.checked)
                      : wk.checked
                        ? wc(vc, "html", Va.value, Db.checked)
                        : xk.checked && wc(vc, "tsv", Va.value, Db.checked);
    }
    function sl() {
        if (!q && null === ma) {
            ma = g("div", "calendar-dialog search");
            Aa.push(ma);
            D.body.appendChild(ma);
            var a = g("div", "title-bar");
            v(a, b.searchEventsTitle);
            ma.appendChild(a);
            Gd(a, ma, function () {
                Bi = !0;
                Xf();
            });
            a.ondblclick = Ci;
            var c = t(a, "ib-close", b.closeTooltipText, ld);
            c.onmousedown = B;
            c.onmouseup = B;
            Pd = t(a, "ib-minus", b.minimizedTooltipText, Ci);
            Pd.onmousedown = B;
            Pd.onmouseup = B;
            ac = g("div", "contents");
            ma.appendChild(ac);
            a = g("div", "history-container");
            ac.appendChild(a);
            pa = g("input", null, "text");
            pa.placeholder = b.searchTextBoxPlaceholder;
            pa.oninput = Ee;
            pa.onpropertychange = Ee;
            pa.onkeypress = ym;
            a.appendChild(pa);
            qb = g("div", "ib-arrow-down-full");
            qb.style.display = "none";
            qb.onclick = zm;
            a.appendChild(qb);
            Ab = g("div", "history-dropdown custom-scroll-bars");
            a.appendChild(Ab);
            a = g("div", "checkbox-container");
            ac.appendChild(a);
            jh = M(a, b.notSearchText, bc)[0];
            kh = M(a, b.matchCaseText, bc)[0];
            Fe = M(a, b.advancedText + ":", Am)[0];
            Fe.checked = !0;
            Yf = g("div", "advanced");
            ac.appendChild(Yf);
            var d = g("div", "split");
            Yf.appendChild(d);
            c = g("div", "split-contents");
            d.appendChild(c);
            a = g("div", "split-contents");
            d.appendChild(a);
            ra(c, b.includeText, "text-header");
            d = g("div", "checkbox-container");
            c.appendChild(d);
            Zf = M(d, b.titleText.replace(":", n.empty), bc)[0];
            lh = M(d, b.locationText.replace(":", n.empty), bc)[0];
            mh = M(d, b.descriptionText.replace(":", n.empty), bc)[0];
            nh = M(d, b.groupText.replace(":", n.empty), bc)[0];
            oh = M(d, b.urlText.replace(":", n.empty), bc)[0];
            Zf.checked = !0;
            ra(a, b.optionsText, "text-header");
            c = g("div", "radio-buttons-container");
            a.appendChild(c);
            ph = ja(c, b.startsWithText, "SearchOptionType", bc);
            qh = ja(c, b.endsWithText, "SearchOptionType", bc);
            rh = ja(c, b.containsText, "SearchOptionType", bc);
            rh.checked = !0;
            a = g("div", "buttons-container");
            ac.appendChild(a);
            sh = Ha(a, b.previousText, "previous", yk);
            th = Ha(a, b.nextText, "next", zk);
        }
    }
    function Am() {
        Yf.style.display = Fe.checked ? "block" : "none";
        Vh();
        Xf();
    }
    function bc() {
        Xf();
        Ee(!1);
    }
    function Ee(a) {
        a = p(a) ? a : !0;
        0 < Eb.length && Ak(z, " focused-event");
        sh.disabled = !0;
        th.disabled = pa.value === n.empty;
        Eb = [];
        $c = 0;
        Di = null;
        a && Bk();
        Xf();
    }
    function ee() {
        "block" !== ma.style.display &&
            ((Eb = []),
            (ma.style.display = "block"),
            Ee(!1),
            (pa.value = u.lastSearchText),
            (jh.checked = u.not),
            (kh.checked = u.matchCase),
            (Fe.checked = u.showAdvanced),
            (Zf.checked = u.searchTitle),
            (lh.checked = u.searchLocation),
            (mh.checked = u.searchDescription),
            (nh.checked = u.searchGroup),
            (oh.checked = u.searchUrl),
            (ph.checked = u.startsWith),
            (qh.checked = u.endsWith),
            (rh.checked = u.contains),
            (Yf.style.display = Fe.checked ? "block" : "none"),
            Vh());
        "block" !== ac.style.display && Ci();
        pa.focus();
        pa.select();
        0 < u.history.length && (qb.style.display = "block");
    }
    function Vh() {
        null === ma ||
            Bi ||
            q ||
            (Da(u.left)
                ? (ma.style.left = u.left + "px")
                : (ma.style.left = ba.innerWidth / 2 - ma.offsetWidth / 2 + "px"),
            Da(u.top)
                ? (ma.style.top = u.top + "px")
                : (ma.style.top = ba.innerHeight / 2 - ma.offsetHeight / 2 + "px"));
    }
    function ld() {
        var a = !1;
        null !== ma && "block" === ma.style.display && ((ma.style.display = "none"), Ee(), (a = !0));
        return a;
    }
    function Ci() {
        "block" === ac.style.display
            ? ((ac.style.display = "none"), (Pd.className = "ib-square-hollow"), Sa(Pd, b.restoreTooltipText))
            : ((ac.style.display = "block"), (Pd.className = "ib-minus"), Sa(Pd, b.minimizedTooltipText));
    }
    function yk() {
        if (0 < $c) {
            $c--;
            var a = Eb[$c];
            Ck();
            F(a.from);
            Dk(a);
        }
    }
    function ym(a) {
        a.keyCode === S.enter && ia(a) && !sh.disabled ? yk() : a.keyCode !== S.enter || th.disabled ? Bk() : zk();
    }
    function zk() {
        if (0 === Eb.length) {
            var a = "day-",
                b = jh.checked,
                d = kh.checked,
                e = d ? pa.value : pa.value.toLowerCase(),
                f = {},
                k = vb(Bd()),
                g = k.length,
                h = Na(),
                n = h === Y,
                p = h === sa,
                r = h === fa;
            h = h === ka;
            n ? (a = "full-day-") : p ? (a = "month-") : r ? (a = "week-day-") : h && (a = "timeline-day-");
            Xf(!0);
            for (var m = 0; m < g; m++) {
                var q = k[m];
                if (he(q)) {
                    var t = G(q.title),
                        u = G(q.location),
                        w = G(q.description),
                        x = G(q.group),
                        y = G(q.url),
                        v = !1;
                    d ||
                        ((t = t.toLowerCase()),
                        (w = w.toLowerCase()),
                        (u = u.toLowerCase()),
                        (x = x.toLowerCase()),
                        (y = y.toLowerCase()));
                    Zf.checked && $f(t, e)
                        ? (v = !0)
                        : lh.checked && $f(u, e)
                          ? (v = !0)
                          : mh.checked && $f(w, e)
                            ? (v = !0)
                            : nh.checked && $f(x, e)
                              ? (v = !0)
                              : oh.checked && $f(y, e) && (v = !0);
                    b && (v = !v);
                    !v ||
                        (null === Ca(a + q.id) && (n || p || r || h)) ||
                        (n || p || r || h
                            ? Eb.push(se(q, !1))
                            : ((t = q.from.getMonth() + "-" + q.from.getFullYear()),
                              f.hasOwnProperty(t) || (Eb.push(se(q, !1)), (f[t] = !0))));
                }
            }
        } else $c++;
        Ck();
        0 < Eb.length && ((a = Eb[$c]), F(new Date(a.from)), Dk(a));
    }
    function Dk(a) {
        var b = "day-",
            d = Na(),
            e = d === Y,
            f = d === sa,
            k = d === fa;
        d = d === ka;
        Ak(z, " focused-event");
        e ? (b = "full-day-") : f ? (b = "month-") : k ? (b = "week-day-") : d && (b = "timeline-day-");
        b = Ca(b + a.id);
        if (null !== b && ((b.className += " focused-event"), (Di = a.id), e || f || k || d))
            for (a = b.parentNode; ; ) {
                if (0 < a.scrollHeight && a.scrollHeight > a.offsetHeight) {
                    a.scrollTop = b.offsetTop;
                    break;
                }
                a = a.parentNode;
            }
    }
    function Ck() {
        sh.disabled = 0 === $c;
        th.disabled = $c === Eb.length - 1 || 0 === Eb.length;
    }
    function $f(a, b) {
        return ph.checked
            ? qa(a, b)
            : qh.checked
              ? a.substring(a.length - b.length, a.length) === b
              : a.indexOf(b) > A.notFound;
    }
    function Xf(a) {
        a = p(a) ? a : !1;
        rd(Oa.searchOptionsChanged);
        var c = Nd(pa.value);
        a && (qb.style.display = "block");
        od(
            Oa.searchOptionsChanged,
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
                        (u.showAdvanced = Fe.checked),
                        (u.searchTitle = Zf.checked),
                        (u.searchLocation = lh.checked),
                        (u.searchDescription = mh.checked),
                        (u.searchGroup = nh.checked),
                        (u.searchUrl = oh.checked),
                        (u.startsWith = ph.checked),
                        (u.endsWith = qh.checked),
                        (u.contains = rh.checked),
                        Bi && ((u.left = ma.offsetLeft), (u.top = ma.offsetTop)),
                        x(b.events.onSearchOptionsUpdated, u);
            },
            2e3,
            !1
        );
    }
    function Bk() {
        var a = u.history.length;
        0 < a
            ? ((qb.style.display = "block"),
              rd(Oa.searchEventsHistoryDropDown),
              od(
                  Oa.searchEventsHistoryDropDown,
                  function () {
                      var b = pa.value,
                          d = !1;
                      if (Nd(b) !== n.empty) {
                          Ek();
                          Ab.innerHTML = n.empty;
                          for (var e = 0; e < a; e++) {
                              var f = u.history[e],
                                  k = b;
                              f.substring(0, k.length).toLowerCase() === k.toLowerCase() &&
                                  f.toLowerCase() !== b.toLowerCase() &&
                                  (Fk(u.history[e], b.length), (d = !0));
                          }
                      }
                      d ? Gk() : Ze();
                  },
                  150,
                  !1
              ))
            : (qb.style.display = "none");
    }
    function Ek() {
        u.history.sort(function (a, b) {
            var c = 0;
            a = a.toLowerCase();
            b = b.toLowerCase();
            a < b ? (c = -1) : a > b && (c = 1);
            return c;
        });
    }
    function zm(a) {
        B(a);
        if ("block" !== Ab.style.display) {
            Ek();
            a = u.history.length;
            Ab.innerHTML = n.empty;
            pa.focus();
            for (var b = 0; b < a; b++) Fk(u.history[b], 0);
            Gk();
        } else Ze();
    }
    function Fk(a, b) {
        var c = g("div", "history-dropdown-item");
        Ab.appendChild(c);
        var e = g("span", "search-search");
        v(e, a.substring(0, b));
        c.appendChild(e);
        e = g("span");
        v(e, a.substring(b));
        c.appendChild(e);
        c.onclick = function (b) {
            B(b);
            Ze();
            pa.value = a;
            pa.selectionStart = pa.selectionEnd = pa.value.length;
            pa.focus();
            Ee(!1);
        };
    }
    function Ze() {
        var a = !1;
        null !== Ab &&
            "ib-arrow-up-full" === qb.className &&
            ((Ab.style.display = "none"), (qb.className = "ib-arrow-down-full"), (a = !0));
        return a;
    }
    function Gk() {
        null !== Ab &&
            "ib-arrow-down-full" === qb.className &&
            ((Ab.style.display = "block"), (qb.className = "ib-arrow-up-full"));
    }
    function tl() {
        if (!q && null === Fb) {
            Fb = g("div", "calendar-dialog configuration");
            Aa.push(Fb);
            D.body.appendChild(Fb);
            var a = g("div", "title-bar");
            v(a, b.configurationTitleText);
            Fb.appendChild(a);
            Gd(a, Fb, null);
            t(a, "ib-close", b.closeTooltipText, Hk, !0);
            a = g("div", "contents");
            Fb.appendChild(a);
            var c = ik(a);
            ue(
                c,
                b.displayTabText,
                function (a) {
                    ve(a, Qd, Fb);
                },
                !0
            );
            ue(c, b.organizerTabText, function (a) {
                ve(a, Ge, Fb);
            });
            Qd = we(a, !0, !1);
            Ge = we(a, !1, !1);
            Ei = M(Qd, b.enableAutoRefreshForEventsText)[0];
            Fi = M(Qd, b.enableBrowserNotificationsText, null, null, null, "checkbox-tabbed-in")[0];
            Gi = M(Qd, b.enableTooltipsText, null, null, null, "checkbox-tabbed-down")[0];
            Hi = M(Qd, b.enableDragAndDropForEventText)[0];
            Ii = M(Qd, b.showHolidaysInTheDisplaysText)[0];
            ra(Ge, b.organizerNameText);
            uh = g("input", null, "text");
            Ge.appendChild(uh);
            ra(Ge, b.organizerEmailAddressText);
            vh = g("input", null, "email");
            Ge.appendChild(vh);
            c = g("div", "buttons-container");
            a.appendChild(c);
            Ha(c, b.updateText, "update", Bm);
            Ha(c, b.cancelText, "cancel", Hk);
        }
    }
    function Bm() {
        Ei.checked ? r.startTheAutoRefreshTimer() : r.stopTheAutoRefreshTimer();
        b.eventNotificationsEnabled = Fi.checked;
        b.tooltipsEnabled = Gi.checked;
        b.dragAndDropForEventsEnabled = Hi.checked;
        b.showHolidays = Ii.checked;
        b.organizerName = uh.value;
        b.organizerEmailAddress = vh.value;
        nb = !1;
        x(b.events.onOptionsUpdated, b);
        Ji();
        Ki();
        F(y, !0, !0);
        Ua(b.configurationUpdatedText);
    }
    function Hk() {
        Ki();
    }
    function ej() {
        Vb(D.body, La);
        Ei.checked = ag;
        Fi.checked = b.eventNotificationsEnabled;
        Gi.checked = b.tooltipsEnabled;
        Hi.checked = b.dragAndDropForEventsEnabled;
        Ii.checked = b.showHolidays;
        uh.value = b.organizerName;
        vh.value = b.organizerEmailAddress;
        gb.push(Ki);
        Fb.style.display = "block";
    }
    function Ki(a) {
        De(a);
        ib(D.body, La);
        Fb.style.display = "none";
    }
    function he(a) {
        var c = G(a.group),
            d = c.toLowerCase();
        a = H(a.type);
        var e = !0;
        c !== n.empty
            ? p(Q.visibleGroups) && (e = Q.visibleGroups.indexOf(d) > A.notFound)
            : (e = !b.hideEventsWithoutGroupAssigned);
        e && p(Q.visibleEventTypes) && P.hasOwnProperty(a) && (e = Q.visibleEventTypes.indexOf(a) > A.notFound);
        return e;
    }
    function ul() {
        if (!q && null === xc && b.jumpToDateEnabled) {
            xc = g("div", "calendar-dialog jump-to-date");
            Aa.push(xc);
            D.body.appendChild(xc);
            var a = g("div", "title-bar");
            v(a, b.jumpToDateTitle);
            xc.appendChild(a);
            Gd(a, xc, null);
            t(a, "ib-close", b.closeTooltipText, wh, !0);
            var c = g("div", "contents");
            xc.appendChild(c);
            cc = g("input", null, "date");
            c.appendChild(cc);
            a = g("div", "buttons-container");
            c.appendChild(a);
            c = Ha(a, b.goText, "go", Ik);
            Ha(a, b.cancelText, "cancel", wh);
            c.onkeydown = function (a) {
                a.keyCode === S.enter && Ik();
            };
        }
    }
    function de() {
        if (Na() !== sa && b.jumpToDateEnabled) {
            Vb(D.body, La);
            Ib();
            var a = Na();
            null === a
                ? (x(b.events.onSetDate, cc), Cb(y, cc))
                : a === Y
                  ? Cb(N, cc)
                  : a === fa
                    ? Cb(Tb, cc)
                    : a === Fa
                      ? Cb(new Date(ta, 0, 1), cc)
                      : a === ka && Cb(da, cc);
            gb.push(wh);
            xc.style.display = "block";
            cc.focus();
        }
    }
    function wh(a) {
        De(a);
        ib(D.body, La);
        xc.style.display = "none";
    }
    function Ik() {
        var a = Na(),
            c = ze(cc);
        c.getFullYear() >= b.minimumYear &&
            c.getFullYear() <= b.maximumYear &&
            (null === a
                ? (F(c), sb())
                : a === Y
                  ? Wa(c)
                  : a === fa
                    ? Ac(c)
                    : a === Fa
                      ? Bc(c.getFullYear())
                      : a === ka && Kb(c),
            wh());
    }
    function $i() {
        null === V &&
            ((V = g("div", "calendar-tooltip")),
            Aa.push(V),
            D.body.appendChild(V),
            (Li = g("div", "ib-close")),
            (xh = g("div", "ib-edit")),
            (yh = g("div", "title-buttons")),
            yh.appendChild(Li),
            yh.appendChild(xh),
            (Rd = g("div", "title")),
            (bg = g("div", "date")),
            (Sd = g("div", "duration")),
            (cg = g("div", "repeats")),
            (dg = g("div", "description")),
            (eg = g("div", "location")),
            (Td = g("div", "url")),
            (Li.onclick = kc),
            (xh.onclick = function () {
                R(Dd);
            }),
            document.body.addEventListener("mousemove", kc));
    }
    function ii(a, c, d, e) {
        B(a);
        rd(Oa.showToolTip);
        kc();
        e = p(e) ? e : !1;
        if ("block" !== V.style.display && b.tooltipsEnabled) {
            var f = T(d) ? b.tooltipDelay : b.eventTooltipDelay;
            od(
                Oa.showToolTip,
                function () {
                    if (e || (!D.body.contains(La) && !Jg() && !Yj() && null === ea)) {
                        d = p(d) ? d : n.empty;
                        V.className = d === n.empty ? "calendar-tooltip-event" : "calendar-tooltip";
                        if (T(d)) v(V, d);
                        else if (
                            ((Dd = c),
                            (V.innerHTML = n.empty),
                            (Rd.innerHTML = n.empty),
                            (Sd.innerHTML = n.empty),
                            (Td.innerHTML = n.empty),
                            !x(b.events.onToolTipEventRender, V, c))
                        ) {
                            V.onmousemove = B;
                            V.appendChild(yh);
                            V.appendChild(Rd);
                            V.appendChild(bg);
                            V.appendChild(Sd);
                            Xa(xh, b.manualEditingEnabled);
                            if (Ea(c.url)) {
                                var f = ca(Td, zg(c.url), "url-text");
                                Vb(V, Td);
                                f.onclick = function (a) {
                                    B(a);
                                    ie(c.url);
                                    kc();
                                };
                            } else (Td.innerHTML = n.empty), (Td.onclick = null), ib(V, Td);
                            H(c.repeatEvery) > w.never &&
                                b.showReoccurringEventIcons &&
                                ((f = g("div", "ib-refresh-medium ib-no-hover ib-no-active")),
                                (f.style.borderColor = Rd.style.color),
                                Rd.appendChild(f));
                            Rd.innerHTML += mc(c.title);
                            Da(c.repeatEvery) && c.repeatEvery > w.never
                                ? (v(cg, b.repeatsText.replace(":", n.empty) + n.space + qd(c.repeatEvery)), Vb(V, cg))
                                : ((cg.innerHTML = n.empty), ib(V, cg));
                            Ea(c.location) ? (v(eg, c.location), Vb(V, eg)) : ((eg.innerHTML = n.empty), ib(V, eg));
                            Ea(c.description)
                                ? (v(dg, c.description), Vb(V, dg))
                                : ((dg.innerHTML = n.empty), ib(V, dg));
                            c.from.getDate() === c.to.getDate()
                                ? c.isAllDay
                                    ? v(bg, b.allDayText)
                                    : (v(bg, ce(c.from, c.to)), v(Sd, Pb(c.from, c.to)))
                                : (We(bg, c.from, c.to), v(Sd, Pb(c.from, c.to)));
                            Sd.innerHTML === n.empty && V.removeChild(Sd);
                        }
                        uf(a, V);
                    }
                },
                f,
                !1
            );
        }
    }
    function kc() {
        rd(Oa.showToolTip);
        Jk() && ((V.style.display = "none"), (Dd = null), (V.onmousemove = null));
    }
    function Jk() {
        return Mi(Oa.showToolTip) || (null !== V && "block" === V.style.display);
    }
    function Sa(a, b, d) {
        null !== a &&
            (a.onmousemove = function (a) {
                ii(a, null, b, d);
            });
    }
    function Ua(a, c) {
        null !== gc &&
            b.popUpNotificationsEnabled &&
            ((c = p(c) ? c : !0),
            rd(Oa.hideNotification),
            (gc.innerHTML = n.empty),
            (c = g("div", c ? "success" : "error")),
            gc.appendChild(c),
            (gc.style.display = "block"),
            v(c, a),
            t(c, "ib-close-icon", b.closeTooltipText, Kk),
            od(
                Oa.hideNotification,
                function () {
                    Kk();
                },
                5e3,
                !1
            ));
    }
    function Kk() {
        gc.style.display = "none";
    }
    function Jh(a, c) {
        if (null !== a) {
            c = p(c) ? c : !0;
            var d = b.dayHeaderNames.length;
            a.innerHTML = n.empty;
            b.startOfWeekDay === xa.saturday || b.startOfWeekDay === xa.sunday
                ? (Ni(a, b.startOfWeekDay, d), Ni(a, 0, b.startOfWeekDay))
                : Ni(a, 0, d);
            b.reverseOrderDaysOfWeek && c && md(a);
        }
    }
    function Ni(a, c, d) {
        for (; c < d; c++) b.visibleDays.indexOf(c) > A.notFound && Cm(a, c);
    }
    function Cm(a, c) {
        var d = b.dayHeaderNames[c],
            e = g("div", Cg());
        v(e, d);
        a.appendChild(e);
        e.oncontextmenu = function (a) {
            if (!q && (ia(a) || nc(), Ia(), b.sideMenu.showDays)) {
                ek = c;
                var d = 1 < b.visibleDays.length ? "block" : "none",
                    e = 1 <= b.workingDays.length && !$d(b.workingDays, b.visibleDays) ? "block" : "none";
                dk.style.display = d;
                fk.style.display = d;
                gk.style.display = e;
                hk.style.display = e;
                B(a);
                uf(a, pb);
            }
        };
        e.ondblclick = function (a) {
            if (!q) {
                var d = !1;
                if (0 === pd.length) {
                    if (((a = b.visibleDays.length), 1 < a)) {
                        for (d = 0; d < a; d++) pd.push(b.visibleDays[d]);
                        b.visibleDays = [];
                        b.visibleDays.push(c);
                        d = !0;
                    }
                } else {
                    b.visibleDays = [];
                    a = pd.length;
                    for (d = 0; d < a; d++) b.visibleDays.push(pd[d]);
                    pd = [];
                    d = !0;
                }
                d && ((nb = !1), x(b.events.onOptionsUpdated, b), F(y, !0, !0));
            }
        };
    }
    function hf(a) {
        Na() !== a &&
            (Lk(a, !1), wb.push(a), zh++, fb(a) || (a.className += " view-shown"), (a.style.zIndex = zh), ld(), pf());
    }
    function xd(a, b) {
        fb(a) && ((a.className = a.className.replace(" view-shown", n.empty)), Lk(a, b), 0 === wb.length && (zh = 0));
    }
    function Lk(a, b) {
        b = p(b) ? b : !0;
        for (var c = [], e = wb.length, f = 0; f < e; f++) {
            var k = wb[f];
            p(k) && k.id !== a.id && c.push(k);
        }
        wb = [].slice.call(c);
        b && pf();
    }
    function fb(a) {
        return p(a) && a.className && a.className.indexOf("view-shown") > A.notFound;
    }
    function Aj(a) {
        a = p(a) ? a : !0;
        var b = Na();
        xd(b, !a);
        0 === wb.length && (zh = 0);
        a && pf();
    }
    function Na() {
        return 0 < wb.length ? wb[wb.length - 1] : null;
    }
    function pf(a) {
        a = p(a) ? a : !0;
        var c = Na(),
            d = null;
        null === c
            ? (d = tb.fullMonth)
            : c === Y
              ? (d = tb.fullDay)
              : c === fa
                ? (d = tb.fullWeek)
                : c === Fa
                  ? (d = tb.fullYear)
                  : c === ka
                    ? (d = tb.timeline)
                    : c === sa && (d = tb.allEvents);
        a && T(d) && x(b.events.onViewChange, d);
        return d;
    }
    function Fj(a, b) {
        var c = new Date(),
            e = new Date();
        e.setHours(0, 0, 0, 0);
        for (0 !== 60 % b && (b = 30); W(e, c); ) {
            var f = g("div", "hour");
            a.appendChild(f);
            var k = g("div", "hour-text");
            k.innerText = zb(new Date(e));
            f.appendChild(k);
            e = hb(e, b);
            k = g("div", "hour-text");
            k.innerText = zb(new Date(e));
            f.appendChild(k);
            e = hb(e, b);
        }
    }
    function ug(a, b) {
        var c = Xe(b);
        b = na.floor((a.pageY - c.top) / (b.offsetHeight / 1440)) / 60;
        a = na.floor(b);
        b = na.round(60 * (b - a));
        return [a, b];
    }
    function Hj(a, c, d, e, f) {
        var k = c.offsetHeight,
            g = c.offsetHeight / 1440;
        c = 0;
        var h = null;
        if (!f.isAllDay) {
            h = H(f.repeatEvery);
            if (W(f.from, d) || h > w.never) c = g * fg(f.from);
            h = W(f.to, d) || h > w.never ? g * fg(f.to) - c : k;
            h -= 2 * b.spacing;
        }
        c <= b.spacing && ((c += b.spacing), (h -= b.spacing));
        e.style.top = c + "px";
        null !== h && (e.style.height = h + "px");
        e.offsetTop + e.offsetHeight > k - b.spacing
            ? ((d = k - e.offsetTop - 3 * b.spacing + "px"), (e.style.height = d), (e.style.maxHeight = d))
            : (e.style.maxHeight = k - (e.offsetTop + 2 * b.spacing) - g + "px");
        e = c + a.offsetHeight / 2;
        e <= a.offsetHeight && (e = 0);
        return e;
    }
    function mm(a, c, d, e) {
        var f = a.scrollWidth;
        var k = a.offsetWidth / 1440;
        a = 0;
        var g = H(e.repeatEvery);
        if (W(e.from, c) || g > w.never) a = k * fg(e.from);
        c = W(e.to, c) || g > w.never ? k * fg(e.to) - a : f;
        c -= 2 * b.spacing;
        a <= b.spacing && ((a += b.spacing), (c -= b.spacing));
        d.style.left = a + "px";
        null !== c && (d.style.width = c + "px");
        d.offsetLeft + d.offsetWidth > f - b.spacing
            ? ((f = f - d.offsetLeft - 4 * b.spacing + "px"), (d.style.width = f), (d.style.maxWidth = f))
            : (d.style.maxWidth = f - (d.offsetLeft + 2 * b.spacing) - k + "px");
        return a - b.spacing;
    }
    function Kj(a, b, d, e, f) {
        var c = 0;
        null !== d &&
            (ec(a) && fb(b) && f
                ? ((a = (e.offsetHeight / 1440) * fg(new Date())),
                  (d.style.display = "block"),
                  (d.style.top = a - d.offsetHeight / 2 + "px"),
                  (c = a))
                : (d.style.display = "none"));
        return c;
    }
    function Gj(a, b) {
        B(a);
        a = Qe(b, "z-index", !1);
        a = null === a || "auto" === a ? 1 : parseInt(a) + 1;
        b.style.zIndex = a.toString();
    }
    function Lj(a) {
        a = a.getElementsByClassName("event");
        a = [].slice.call(a);
        var c = a.length;
        if (1 < c) {
            a.sort(Dm);
            for (var d = 0; d < c; d++)
                for (var e = a[d], f = 0; f < c; f++)
                    if (f !== d) {
                        var k = a[f],
                            g = !0,
                            h = e.offsetLeft,
                            p = e.offsetTop,
                            r = e.offsetWidth,
                            m = k.offsetLeft,
                            q = k.offsetTop,
                            t = k.offsetHeight,
                            u = k.offsetWidth;
                        if (p + e.offsetHeight < q || p > q + t || h + r < m || h > m + u) g = !1;
                        g &&
                            ((g = G(e.getAttribute("event-position"))),
                            (h = G(k.getAttribute("event-position"))),
                            g === n.empty && h === n.empty
                                ? (Ah(e),
                                  Ah(k),
                                  (k.style.left = e.offsetLeft + e.offsetWidth + b.spacing + "px"),
                                  e.setAttribute("event-position", "left"),
                                  k.setAttribute("event-position", "right"))
                                : g === n.empty && "right" === h
                                  ? (Ah(e),
                                    e.setAttribute("event-position", "left"),
                                    k.setAttribute("event-position", "right"))
                                  : g === n.empty &&
                                    "left" === h &&
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
    function Dm(a, b) {
        var c = 0;
        a.offsetTop < b.offsetTop ? (c = -1) : a.offsetTop > b.offsetTop && (c = 1);
        return c;
    }
    function Ej(a, c, d) {
        B(a);
        null === vg
            ? 0 === a.dataTransfer.files.length
                ? Mk(a, c.getFullYear(), c.getMonth(), c.getDate())
                : Nk(a)
            : (W(yg, c) || ((ea = Rb), (Ud = yg), Ok(a, c.getFullYear(), c.getMonth(), c.getDate())),
              (c = d.offsetHeight / 1440),
              (d = Xe(d)),
              (a = (na.abs(a.pageY) - d.top + xg - wg) / c),
              (Rb.from = hb(Rb.from, a)),
              (Rb.to = hb(Rb.to, a)),
              lb(),
              x(b.events.onEventUpdated, Rb),
              Ua(b.eventUpdatedText.replace("{0}", Rb.title)),
              oa(),
              (Rb = vg = null),
              (wg = xg = 0));
    }
    function Uh(a) {
        B(a);
        if (b.manualEditingEnabled) {
            var c = null;
            a = null;
            var d = 0;
            fb(Y) ? ((c = ya), (a = Ag), (d = a.length)) : fb(fa) && ((c = le), (a = di), (d = a.length));
            if (null !== c && 0 < d) {
                c = c.offsetHeight / 1440;
                for (var e = !1, f = 0; f < d; f++) {
                    var k = a[f];
                    k.height !== k.eventElement.offsetHeight &&
                        ((e = (k.eventElement.offsetHeight - k.height) / c),
                        (k.height = k.eventElement.offsetHeight),
                        (k.eventDetails.to = hb(k.eventDetails.to, e)),
                        (e = !0),
                        x(b.events.onEventUpdated, k.eventDetails),
                        Ua(b.eventUpdatedText.replace("{0}", k.eventDetails.title)));
                }
                e && (lb(), oa());
            }
        }
    }
    function Ya() {
        sd ? Pk() : Qk();
    }
    function Qk() {
        !sd && b.fullScreenModeEnabled && (Rk(), x(b.events.onFullScreenModeChanged, !0));
    }
    function Pk() {
        sd &&
            b.fullScreenModeEnabled &&
            ((sd = !1),
            (z.className = z.className.replace(" full-screen-view", n.empty)),
            (z.style.cssText = Sk),
            Tk("ib-arrow-expand-left-right", b.enableFullScreenTooltipText),
            oa(),
            x(b.events.onFullScreenModeChanged, !1));
    }
    function Rk() {
        Sk = z.style.cssText;
        sd = !0;
        z.className += " full-screen-view";
        z.removeAttribute("style");
        Tk("ib-arrow-contract-left-right", b.disableFullScreenTooltipText);
        oa();
    }
    function Tk(a, b) {
        He(Gg, a);
        He(Yh, a);
        He(mi, a);
        He($h, a);
        He(ki, a);
        He(oi, a);
        Sa(Gg, b);
        Sa(Yh, b);
        Sa(mi, b);
        Sa($h, b);
        Sa(ki, b);
        Sa(oi, b);
    }
    function Yl(a, c, d) {
        if (b.showHolidays)
            for (var e = [], f = b.holidays.length, k = 0; k < f; k++) {
                var g = b.holidays[k],
                    h = G(g.title, n.empty),
                    p = G(g.backgroundColor, n.empty),
                    r = G(g.textColor, n.empty);
                Jj(g, a) && h !== n.empty && e.indexOf(h.toLowerCase())
                    ? (Em(g, d, h, c),
                      p !== n.empty && d.style.setProperty("background-color", p, "important"),
                      r !== n.empty && d.style.setProperty("color", r, "important"),
                      e.push(h.toLowerCase()))
                    : (d.style.removeProperty("background-color"), d.style.removeProperty("color"));
            }
    }
    function Em(a, c, d, e) {
        var f = Zc(a.onClick) || T(a.onClickUrl) ? "holiday-link" : "holiday",
            k = a.onClick;
        T(a.onClickUrl) &&
            (k = function () {
                ba.open(a.onClickUrl, b.urlWindowTarget);
            });
        ca(c, d, f + e, k, !0, !0);
    }
    function Jj(a, b) {
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
        yb(function (b) {
            a.push(b);
        });
        return a;
    }
    function yb(a) {
        for (var b in rb)
            if (rb.hasOwnProperty(b))
                for (var d in rb[b])
                    if (rb[b].hasOwnProperty(d)) {
                        var e = Uk(rb[b][d]);
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
                return Vk(b.isAllDay) - Vk(a.isAllDay);
            }));
        return a;
    }
    function Uj(a, c) {
        Vb(D.body, La);
        var d = function () {
            ib(D.body, La);
        };
        Hf(
            b.confirmEventsRemoveTitle,
            b.confirmEventsRemoveMessage,
            function () {
                var e = 0;
                d();
                yb(function (b) {
                    H(b.repeatEvery) === w.never && c(b.from, a) && (r.removeEvent(b.id, !1), e++);
                });
                lb();
                Ua(b.eventsRemovedText.replace("{0}", e));
                Ma();
            },
            d
        );
    }
    function Uk(a) {
        a.isAllDay &&
            ((a.from = new Date(a.from.getFullYear(), a.from.getMonth(), a.from.getDate(), 0, 0)),
            (a.to = new Date(a.from.getFullYear(), a.from.getMonth(), a.from.getDate(), 23, 59)));
        return a;
    }
    function mk(a) {
        a = p(a) && P.hasOwnProperty(a) ? a : 0;
        for (var b in P) P.hasOwnProperty(b) && p(P[b].eventEditorInput) && (P[b].eventEditorInput.checked = !1);
        p(P[a].eventEditorInput) && (P[a].eventEditorInput.checked = !0);
    }
    function vm() {
        var a = 0,
            b;
        for (b in P)
            if (P.hasOwnProperty(b) && p(P[b].eventEditorInput) && P[b].eventEditorInput.checked) {
                a = parseInt(b);
                break;
            }
        return a;
    }
    function W(a, b) {
        return a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
    }
    function Qj(a, b) {
        return a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
    }
    function Ye(a, b) {
        a = new Date(a.getFullYear(), a.getMonth(), a.getDate());
        a.setHours(0, 0, 0, 0);
        b = new Date(b.getFullYear(), b.getMonth(), b.getDate());
        b.setHours(0, 0, 0, 0);
        return a <= b;
    }
    function ec(a) {
        var b = new Date();
        return (
            null !== a &&
            a.getDate() === b.getDate() &&
            a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth()
        );
    }
    function vd(a) {
        var b = ("0" + a.getDate()).slice(-2),
            d = ("0" + a.getMonth()).slice(-2);
        return b + "/" + d + "/" + a.getFullYear();
    }
    function Z(a) {
        return 0 > a.getDay() - 1 ? 6 : a.getDay() - 1;
    }
    function bd(a, b) {
        return new Date(a, b + 1, 0).getDate();
    }
    function Hg(a) {
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
    function Qc(a, b) {
        a = new Date(a.getFullYear(), a.getMonth(), a.getDate());
        b = new Date(b.getFullYear(), b.getMonth(), b.getDate());
        b = na.abs(b - a);
        return na.ceil(b / 864e5);
    }
    function Bg(a) {
        a.setDate(a.getDate() - 1);
    }
    function Za(a, b) {
        b = Da(b) ? b : 1;
        a.setDate(a.getDate() + b);
    }
    function Sb(a, b) {
        b = Da(b) ? b : 1;
        a.setDate(a.getDate() + 7 * b);
    }
    function je(a, b) {
        b = Da(b) ? b : 1;
        a.setMonth(a.getMonth() + b);
    }
    function wd(a, b) {
        b = Da(b) ? b : 1;
        a.setFullYear(a.getFullYear() + b);
    }
    function Pb(a, c) {
        var d = [];
        a = na.abs(c - a) / 1e3;
        c = na.floor(a / 86400);
        a -= 86400 * c;
        0 < c && d.push(c.toString() + n.space + (1 === c ? b.dayText : b.daysText));
        c = na.floor(a / 3600) % 24;
        a -= 3600 * c;
        0 < c && d.push(c.toString() + n.space + (1 === c ? b.hourText : b.hoursText));
        a = na.floor(a / 60) % 60;
        0 < a && d.push(a.toString() + n.space + (1 === a ? b.minuteText : b.minutesText));
        return d.join(", ");
    }
    function Cb(a, b) {
        if (p(a)) {
            var c = ("0" + a.getDate()).slice(-2),
                e = ("0" + (a.getMonth() + 1)).slice(-2);
            b.value = "date" === b.type ? a.getFullYear() + "-" + e + "-" + c : c + "/" + e + "/" + a.getFullYear();
        }
    }
    function ze(a, b) {
        b = void 0 !== b ? b : new Date();
        if (a.value !== n.empty)
            if ("date" === a.type) b = new Date(a.value + "T00:00:00Z");
            else if ((a = a.value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)))
                (a = new Date(a[3], a[2] - 1, a[1], 0, 0, 0, 0)), a instanceof Date && !isNaN(a) && (b = a);
        p(b) && (b = new Date(b.getTime() + na.abs(6e4 * b.getTimezoneOffset())));
        return b;
    }
    function lk(a, b) {
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
    function hb(a, b) {
        return new Date(a.getTime() + 6e4 * b);
    }
    function Nh(a, c) {
        var d = Z(c);
        a = a.replace("{dddd}", b.dayNames[d]);
        a = a.replace("{ddd}", b.dayNamesAbbreviated[d]);
        a = a.replace("{dd}", L(c.getDate()));
        a = a.replace("{d}", c.getDate());
        a = a.replace("{o}", Hg(c.getDate()));
        a = a.replace("{mmmm}", b.monthNames[c.getMonth()]);
        a = a.replace("{mmm}", b.monthNamesAbbreviated[c.getMonth()]);
        a = a.replace("{mm}", L(c.getMonth() + 1));
        a = a.replace("{m}", c.getMonth() + 1);
        a = a.replace("{yyyy}", c.getFullYear());
        a = a.replace("{yyy}", c.getFullYear().toString().substring(1));
        a = a.replace("{yy}", c.getFullYear().toString().substring(2));
        return (a = a.replace("{y}", parseInt(c.getFullYear().toString().substring(2)).toString()));
    }
    function Ne(a) {
        if (b.startOfWeekDay === xa.saturday || b.startOfWeekDay === xa.sunday) a += 7 - b.startOfWeekDay;
        return a;
    }
    function Ve(a, b) {
        var c = H(a.repeatEvery);
        a = new Date(a.to);
        c > w.never && ((b = new Date(b)), b.setHours(a.getHours(), a.getMinutes()), (a = b));
        return a;
    }
    function ce(a, c) {
        return zb(a) + n.space + b.toTimeText + n.space + zb(c);
    }
    function zb(a, c) {
        c = p(c) ? c : b.useAmPmForTimeDisplays;
        if (b.useAmPmForTimeDisplays && c) {
            var d = a.getHours();
            c = a.getMinutes();
            var e = "am";
            12 < d ? ((d -= 12), (e = "pm")) : 12 === d ? (e = "pm") : 0 === d && (d = 12);
            0 < c && (d += ":" + L(a.getMinutes()));
            d += e;
        } else d = L(a.getHours()) + ":" + L(a.getMinutes());
        return d;
    }
    function We(a, c, d) {
        a.innerHTML = n.empty;
        lc(a, c);
        ca(a, n.space + b.toTimeText + n.space);
        lc(a, d);
    }
    function lc(a, c, d, e, f) {
        d = p(d) ? d : !0;
        e = p(e) ? e : !0;
        (f = p(f) ? f : !1) && ca(a, b.dayNames[Z(c)] + ", ");
        Ob(a, c);
        ca(a, n.space + b.monthNames[c.getMonth()]);
        e && ca(a, n.space + c.getFullYear());
        d && ca(a, n.space + zb(c));
    }
    function Ob(a, c, d, e, f) {
        f = p(f) ? f : !1;
        p(d) && ca(a, d);
        f ? ca(a, L(c.getDate())) : ca(a, c.getDate());
        b.showDayNumberOrdinals &&
            ((c = Hg(c.getDate())), p(c) && ((d = g("sup")), (d.innerText = c), a.appendChild(d)));
        p(e) && ca(a, e);
    }
    function bi(a, c, d, e) {
        if (!lf(c) && b.dragAndDropForEventsEnabled && b.manualEditingEnabled) {
            var f = new Date(d),
                k = 0 <= b.weekendDays.indexOf(f.getDay()) ? " drag-not-allowed-weekend-day" : " drag-not-allowed";
            a.setAttribute("draggable", !0);
            a.ondragstart = function (d) {
                x(b.events.onEventDragStart, c);
                d.dataTransfer.setData("event_details", dc.stringify(c));
                Ud = f;
                ea = c;
                p(e) && ((e.className += k), Fm(e));
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
                x(b.events.onEventDragStop, ea);
                ea = Ud = null;
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
                Wk(b, a, f);
            };
            a.ondragenter = function (b) {
                Wk(b, a, f);
            };
            a.ondragleave = function (b) {
                Xk(b, a, f);
            };
            a.ondrop = function (b) {
                B(b);
                Xk(b, a, f);
                0 === b.dataTransfer.files.length ? Ok(b, c, d, e) : Nk(b);
            };
        }
    }
    function Fm(a) {
        b.dragAndDropForEventsEnabled &&
            b.manualEditingEnabled &&
            ((a.ondragover = null), (a.ondragenter = null), (a.ondragleave = null), (a.ondrop = null));
    }
    function Wk(a, b, d) {
        B(a);
        null === ea || b.className.indexOf(" drag-over") !== A.notFound || W(Ud, d) || (b.className += " drag-over");
    }
    function Xk(a, b, d) {
        B(a);
        null !== ea &&
            b.className.indexOf(" drag-over") > A.notFound &&
            !W(Ud, d) &&
            (b.className = b.className.replace(" drag-over", n.empty));
    }
    function Ok(a, c, d, e) {
        var f = new Date(c, d, e);
        if (null === ea || W(Ud, f)) null === ea && Mk(a, c, d, e);
        else {
            x(b.events.onEventDragDrop, ea, f);
            p(e) || ((a = bd(c, d)), (e = ea.from.getDate()), e > a && (e = a));
            var g = Qc(ea.from, Ud);
            a = Qc(ea.from, ea.to);
            f = new Date(c, d, e, ea.from.getHours(), ea.from.getMinutes());
            c = new Date(c, d, e, ea.to.getHours(), ea.to.getMinutes());
            d = ea.repeatEnds;
            0 < g && (f.setDate(f.getDate() - g), c.setDate(c.getDate() - g));
            p(d) && ((e = Qc(f, ea.from)), f > ea.from ? d.setDate(d.getDate() + e) : d.setDate(d.getDate() - e));
            0 < a && c.setDate(c.getDate() + a);
            r.updateEventDateTimes(ea.id, f, c, d);
            Ua(b.eventUpdatedText.replace("{0}", ea.title));
            Ma();
        }
    }
    function Mk(a, c, d, e) {
        a = Pe(a.dataTransfer.getData("event_details"));
        if (p(a) && null === ea) {
            var f = new Date(a.from),
                g = new Date(a.to);
            a.from = new Date(c, d, e, f.getHours(), f.getMinutes(), 0, 0);
            a.to = new Date(c, d, e, g.getHours(), g.getMinutes(), 0, 0);
            r.addEvent(a);
            Ua(b.eventAddedText.replace("{0}", a.title));
        }
    }
    function Nk(a) {
        p(ba.FileReader) && b.importEventsEnabled && Oi(a.dataTransfer.files);
    }
    function Pe(a) {
        try {
            var b = dc.parse(a);
        } catch (d) {
            try {
                b = eval("(" + a + ")");
            } catch (e) {
                console.error("Errors in object: " + d.message + ", " + e.message), (b = null);
            }
        }
        return b;
    }
    function Gd(a, c, d) {
        b.dialogMovingEnabled &&
            ((a.onmousedown = function (a) {
                Vd ||
                    (Ia(),
                    (Gb = c),
                    (Vd = !0),
                    (Yk = a.pageX - Gb.offsetLeft),
                    (Zk = a.pageY - Gb.offsetTop),
                    (Ch = Gb.offsetLeft),
                    (Dh = Gb.offsetTop));
            }),
            (a.onmouseup = function () {
                $k(d);
            }),
            (a.oncontextmenu = function () {
                $k(null);
            }));
    }
    function $k(a) {
        Vd && ((Vd = !1), (Gb = null), (Dh = Ch = 0), null !== a && a());
    }
    function Gl(a) {
        Vd && ((Gb.style.left = a.pageX - Yk + "px"), (Gb.style.top = a.pageY - Zk + "px"));
    }
    function Hl() {
        Vd && ((Gb.style.left = Ch + "px"), (Gb.style.top = Dh + "px"), (Vd = !1), (Gb = null), (Dh = Ch = 0));
    }
    function ik(a) {
        var b = g("div");
        a.appendChild(b);
        return b;
    }
    function ue(a, b, d, e) {
        e = p(e) ? e : !1;
        var c = g("div", "tab tab-control" + (e ? "-selected" : n.empty));
        v(c, b);
        a.appendChild(c);
        c.onclick = function () {
            d(c);
        };
    }
    function we(a, b, d) {
        b = p(b) ? b : !1;
        d = p(d) ? d : !0;
        var c = g("div", "checkbox-container tab-content custom-scroll-bars");
        a.appendChild(c);
        d && (c.className += " custom-scroll-bars");
        b || (c.style.display = "none");
        return c;
    }
    function ve(a, b, d) {
        var c = d.getElementsByClassName("tab-control-selected"),
            f = c.length;
        d = d.getElementsByClassName("tab-content");
        for (var g = d.length, h = 0; h < f; h++) c[h].className = "tab tab-control";
        for (c = 0; c < g; c++) d[c].style.display = "none";
        a.className = "tab tab-control-selected";
        b.style.display = "block";
    }
    function ae(a, b, d, e) {
        e = p(e) ? e : !1;
        p(d) && d < new Date() && (a.className += " expired");
        e &&
            p(d) &&
            d < y &&
            (d.getFullYear() !== y.getFullYear() || d.getMonth() !== y.getMonth()) &&
            (a.className += " not-in-current-month");
        Ea(b.color)
            ? ((a.style.backgroundColor = b.color),
              Ea(b.colorText) && (a.style.color = b.colorText),
              Ea(b.colorBorder) && (a.style.borderColor = b.colorBorder))
            : b.isAllDay && (a.className += " all-day");
    }
    function ff(a, b) {
        Di === b.id && (a.className += " focused-event");
        al(b.id) && (a.className += " selected-event");
        for (var c = !1, e = la.length, f = 0; f < e; f++)
            if (la[f].id === b.id) {
                c = !0;
                break;
            }
        c && (a.className = Qb ? a.className + " cut-event" : a.className + " copy-event");
    }
    function gg(a, b, d) {
        d = p(d) ? d : !1;
        var c = D.getElementsByClassName("event");
        c = [].slice.call(c);
        for (var f = c.length, g = 0; g < f; g++) {
            var h = c[g],
                E = h.getAttribute("event-id");
            null !== E &&
                E === a.toString() &&
                (h.className = d ? h.className.replace(n.space + b, n.empty) : h.className + (n.space + b));
        }
    }
    function Zl(a, b) {
        if (ec(a) && !q) {
            a = new Date();
            var c = new Date(),
                e = new Date(),
                f = H(b.repeatEvery);
            a.setHours(b.from.getHours(), b.from.getMinutes(), 0, 0);
            c.setHours(b.to.getHours(), b.to.getMinutes(), 0, 0);
            f !== w.never || ec(b.from) || a.setHours(0, 0, 0, 0);
            f !== w.never || ec(b.to) || c.setHours(23, 59, 59, 99);
            Da(b.alertOffset) && 0 < b.alertOffset && (a = hb(a, -b.alertOffset));
            if (e >= a && e <= c) {
                if (!kb(b.showAsBusy) || b.showAsBusy) oe = !0;
                ((!bl.hasOwnProperty(b.id) && !kb(b.showAlerts)) || b.showAlerts) &&
                    cl(
                        function () {
                            Gm(b);
                        },
                        !1,
                        b
                    );
            }
        }
    }
    function Gm(a) {
        bl[a.id] = !0;
        new Notification(b.eventNotificationTitle, { body: b.eventNotificationBody.replace("{0}", a.title) }).onclick =
            function () {
                var c = G(a.url);
                c === n.empty ? R(a) : ie(c);
                x(b.events.onNotificationClicked, a);
            };
    }
    function Ji() {
        cl(function () {
            "granted" !== Notification.permission && Notification.requestPermission();
        });
    }
    function cl(a, c, d) {
        b.eventNotificationsEnabled &&
            !q &&
            ((c = p(c) ? c : !0),
            Notification ? a() : c && console.error("Browser notifications API unavailable."),
            p(d) && x(b.events.onNotification, d));
    }
    function ie(a) {
        ba.open(a, b.urlWindowTarget);
        x(b.events.onEventUrlClicked, a);
    }
    function fe(a) {
        a = p(a) ? a : !0;
        for (var b = la.length, d = 0; d < b; d++) {
            var e = la[d];
            Qb ? gg(e.id, "cut-event", a) : gg(e.id, "copy-event", a);
        }
    }
    function ak(a) {
        la = [];
        var b = Ga.length;
        if (0 < b) for (a = 0; a < b; a++) la.push(Ga[a]);
        else la.push(a);
    }
    function al(a) {
        for (var b = !1, d = Ga.length, e = 0; e < d; e++)
            if (Ga[e].id === a) {
                b = !0;
                break;
            }
        return b;
    }
    function Wh(a, c) {
        for (var d = la.length, e = 0; e < d; e++) {
            var f = la[e],
                g = Qc(f.from, f.to);
            f = c ? f : se(f);
            f.from.setDate(a.getDate());
            f.from.setMonth(a.getMonth());
            f.from.setFullYear(a.getFullYear());
            f.to.setDate(a.getDate());
            f.to.setMonth(a.getMonth());
            f.to.setFullYear(a.getFullYear());
            f.to.setDate(f.to.getDate() + g);
            c ? x(b.events.onEventUpdated, f) : ((f.id = null), r.addEvent(f, !1, !0));
        }
        Ua(b.eventsPastedText.replace("{0}", d));
        c && (nc(), (la = []), (Qb = !1));
        Ja();
        oa();
    }
    function gf(a, b) {
        B(a);
        Ia();
        if (lf(b)) ia(a) || nc();
        else if (ia(a))
            if (al(b.id)) {
                a = Ga.length;
                for (var c = 0; c < a; c++)
                    if (Ga[c].id === b.id) {
                        Ga.splice(c, 1);
                        break;
                    }
                gg(b.id, "selected-event", !0);
            } else Ga.push(b), gg(b.id, "selected-event", !1);
        else nc();
    }
    function nc() {
        var a = !1,
            b = Ga.length;
        if (0 < b) {
            for (a = 0; a < b; a++) gg(Ga[a].id, "selected-event", !0);
            a = !0;
            Ga = [];
        }
        return a;
    }
    function zj(a) {
        la = [];
        Qb = p(a) ? a : !1;
        a = Ga.length;
        if (0 < a) {
            for (var b = 0; b < a; b++) la.push(Ga[b]);
            fe(!1);
        }
    }
    function Rh() {
        0 < b.autoRefreshTimerDelay &&
            !q &&
            ag &&
            od(
                Oa.autoRefresh,
                function () {
                    bj();
                    Ma();
                },
                b.autoRefreshTimerDelay
            );
    }
    function bj() {
        var a = x(b.events.onEventsFetch);
        if (wa(a))
            for (var c = a.length, d = 0; d < c; d++) {
                var e = a[d];
                r.removeEvent(e.id, !1, !1);
                r.addEvent(e, !1, !1);
            }
    }
    function Qh() {
        0 < b.autoRefreshTimerDelay && !q && ag && rd(Oa.autoRefresh);
    }
    function Ma(a, c) {
        if (b.isWidget) lg ? F() : F(y);
        else if (((a = p(a) ? a : !1), (c = p(c) ? c : !1), lj() || a))
            oa(), lg ? (F(), Rj()) : Ja(), c && x(b.events.onRefresh);
    }
    function lj() {
        return !Jk() && !D.body.contains(La) && !Jg() && !Yj() && !Oe() && null === ea;
    }
    function od(a, b, d, e) {
        e = p(e) ? e : !0;
        Mi(a) ||
            (Hb[a] = e
                ? setInterval(b, d)
                : setTimeout(function () {
                      b();
                      delete Hb[a];
                  }, d));
    }
    function rd(a) {
        Mi(a) && (clearTimeout(Hb[a]), delete Hb[a]);
    }
    function Mi(a) {
        return Hb.hasOwnProperty(a) && null !== Hb[a];
    }
    function gj() {
        var a = [],
            b = [];
        yb(function (c) {
            c = G(c.group);
            c !== n.empty && b.indexOf(c.toLowerCase()) === A.notFound && (a.push(c), b.push(c.toLowerCase()));
        });
        a.sort();
        return a;
    }
    function g(a, b, d, e) {
        var c = a.toLowerCase();
        var g = "text" === c;
        Pi.hasOwnProperty(c) || (Pi[c] = g ? D.createTextNode(n.empty) : D.createElement(c));
        c = Pi[c].cloneNode(!1);
        if (("input" === a && "button" !== d) || "textarea" === a) p(e) ? (c.id = e) : (c.id = fc());
        p(b) && (c.className = b);
        p(d) && (c.type = d);
        return c;
    }
    function ra(a, b, d) {
        var c = g("p");
        v(c, b);
        a.appendChild(c);
        p(d) && (c.className = d);
        return c;
    }
    function ca(a, b, d, e, f, k) {
        f = p(f) ? f : !1;
        (k = p(k) ? k : !1) && a.appendChild(g("div", "separator"));
        d = g("span", d);
        k = Zc(e);
        v(d, b);
        a.appendChild(d);
        k && (d.onclick = e);
        f && k && (d.ondblclick = B);
        return d;
    }
    function Ha(a, b, d, e, f) {
        d = g("input", d, "button");
        d.value = b;
        d.onclick = e;
        a.appendChild(d);
        p(f) && Sa(d, f, !0);
        return d;
    }
    function Ca(a) {
        (Ie.hasOwnProperty(a) && null !== Ie[a]) || (Ie[a] = dl(a));
        D.body.contains(Ie[a]) || (Ie[a] = dl(a));
        return Ie[a];
    }
    function dl(a) {
        var b = null;
        if (null === z) b = D.getElementById(a);
        else
            for (var d = z.getElementsByTagName("*"), e = d.length, f = 0; f < e; f++)
                if (d[f].id === a) {
                    b = d[f];
                    break;
                }
        return b;
    }
    function Vb(a, b) {
        try {
            a.contains(b) || a.appendChild(b);
        } catch (d) {
            console.warn(d.message);
        }
    }
    function ib(a, b) {
        try {
            a.contains(b) && a.removeChild(b);
        } catch (d) {
            console.warn(d.message);
        }
    }
    function B(a) {
        a.preventDefault();
        a.cancelBubble = !0;
    }
    function Mc(a) {
        a.cancelBubble = !0;
    }
    function uf(a, b) {
        var c = a.pageX,
            e = a.pageY,
            f = jj();
        b.style.display = "block";
        c + b.offsetWidth > ba.innerWidth ? (c -= b.offsetWidth) : c++;
        e + b.offsetHeight > ba.innerHeight ? (e -= b.offsetHeight) : e++;
        c < f.left && (c = a.pageX + 1);
        e < f.top && (e = a.pageY + 1);
        b.style.left = c + "px";
        b.style.top = e + "px";
    }
    function hc(a, b) {
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
        var a = D.documentElement;
        return {
            left: (ba.pageXOffset || a.scrollLeft) - (a.clientLeft || 0),
            top: (ba.pageYOffset || a.scrollTop) - (a.clientTop || 0),
        };
    }
    function De(a) {
        (a = p(a) ? a : !0) && gb.pop();
    }
    function se(a, b) {
        b = p(b) ? b : !0;
        a = dc.parse(dc.stringify(a));
        a.from = new Date(a.from);
        a.to = new Date(a.to);
        p(a.repeatEnds) && (a.repeatEnds = new Date(a.repeatEnds));
        delete a.created;
        delete a.lastUpdated;
        b && delete a.id;
        return a;
    }
    function He(a, b) {
        null !== a && (a.className = b);
    }
    function mc(a) {
        var c = a;
        b.allowHtmlInDisplay || ((c = g("div")), (c.innerHTML = a), (c = c.innerText));
        return c;
    }
    function Qe(a, b, d) {
        d = p(d) ? d : !0;
        var c = null;
        ba.getComputedStyle
            ? (c = D.defaultView.getComputedStyle(a, null).getPropertyValue(b))
            : a.currentStyle && (c = a.currentStyle[b]);
        d && (c = parseFloat(c, 10));
        return c;
    }
    function v(a, c) {
        b.allowHtmlInDisplay ? (a.innerHTML = c) : (a.innerText = mc(c));
    }
    function Xa(a, b) {
        null !== a && (a.style.display = b ? "inline-block" : "none");
    }
    function Bh(a, b, d) {
        a = z.getElementsByClassName(a);
        for (var c = a.length, f = 0; f < c; f++)
            for (var g = a[f].children, h = g.length, n = 0; n < h; n++) g[n] !== d && b(g[n]);
    }
    function md(a) {
        for (var b = a.children, d = b.length - 1; d--; ) a.appendChild(b[d]);
    }
    function ng(a, b) {
        a = D.getElementsByClassName(a);
        a = [].slice.call(a);
        for (var c = a.length, e = 0; e < c; e++) {
            var f = a[e];
            f.id !== Ba && (p(b) ? (f.className = b) : (f.style.display = "none"));
        }
    }
    function Zh(a, b) {
        for (a = a.getElementsByClassName(b); a[0]; ) a[0].parentNode.removeChild(a[0]);
    }
    function Ak(a, b) {
        for (a = a.getElementsByClassName(b); a[0]; ) a[0].className = a[0].className.replace(b, n.empty);
    }
    function ja(a, b, d, e) {
        var c = g("div", "radio-button-container");
        a.appendChild(c);
        a = g("label", "radio-button");
        c.appendChild(a);
        c = g("input", null, "radio");
        c.name = d;
        a.appendChild(c);
        p(e) && (c.onchange = e);
        a.appendChild(g("span", "check-mark"));
        ca(a, b, "text");
        return c;
    }
    function M(a, b, d, e, f, k, h) {
        k = p(k) ? n.space + k : n.empty;
        var c = g("div");
        a.appendChild(c);
        a = g("label", "checkbox" + k);
        c.appendChild(a);
        p(h) && (a.onclick = h);
        h = g("input", null, "checkbox");
        a.appendChild(h);
        p(e) && (h.name = e);
        p(d) && (h.onchange = d);
        p(f) && (h.checked = f);
        a.appendChild(g("span", "check-mark"));
        ca(a, b, "text");
        return [h, a];
    }
    function t(a, b, d, e, f) {
        b = g("div", b);
        b.ondblclick = B;
        b.onclick = e;
        a.appendChild(b);
        Sa(b, d, f);
        return b;
    }
    function km(a, c) {
        a.innerHTML = n.empty;
        var d = g("div", "no-events-available-text");
        a.appendChild(d);
        ra(d, b.noEventsAvailableFullText);
        b.manualEditingEnabled &&
            (d.appendChild(g("div")),
            ca(d, b.clickText + n.space),
            ca(d, b.hereText, "link", c),
            ca(d, n.space + b.toAddANewEventText));
    }
    function L(a) {
        a = a.toString();
        return 1 === a.length ? "0" + a : a;
    }
    function Nd(a) {
        return a.replace(/^\s+|\s+$/g, n.empty);
    }
    function fc() {
        for (var a = [], b = 0; 32 > b; b++) {
            (8 !== b && 12 !== b && 16 !== b && 20 !== b) || a.push("-");
            var d = na.floor(16 * na.random()).toString(16);
            a.push(d);
        }
        return a.join(n.empty);
    }
    function qa(a, b) {
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
    function Zc(a) {
        return p(a) && Xh(a);
    }
    function T(a) {
        return p(a) && "string" === typeof a;
    }
    function Da(a) {
        return p(a) && "number" === typeof a;
    }
    function kb(a) {
        return p(a) && "boolean" === typeof a;
    }
    function Qa(a) {
        return p(a) && "object" === typeof a;
    }
    function wa(a) {
        return Qa(a) && a instanceof Array;
    }
    function Ea(a) {
        return T(a) && a !== n.empty;
    }
    function yc(a) {
        return Qa(a) && a instanceof Date;
    }
    function cj(a) {
        return Qa(a) && void 0 !== a.tagName;
    }
    function nk(a) {
        return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
            a
        );
    }
    function $d(a, b) {
        var c = wa(a) && wa(b);
        c && (a.sort(), b.sort(), (c = dc.stringify(a) === dc.stringify(b)));
        return c;
    }
    function h(a, b) {
        return "string" === typeof a ? a : b;
    }
    function db(a, b) {
        return T(a) ? a : b;
    }
    function m(a, b) {
        return kb(a) ? a : b;
    }
    function ua(a, b) {
        return Da(a) ? a : b;
    }
    function hg(a, b) {
        return wa(a) ? a : b;
    }
    function Qi(a, b) {
        return yc(a) ? a : b;
    }
    function C(a, b) {
        return Zc(a) ? a : b;
    }
    function lb() {
        if (b.useLocalStorageForEvents && ba.localStorage) {
            if (b.useLocalStorageForEvents && ba.localStorage) {
                for (var a = ba.localStorage.length, c = [], d = 0; d < a; d++)
                    qa(ba.localStorage.key(d), "CJS_") && c.push(ba.localStorage.key(d));
                a = c.length;
                for (d = 0; d < a; d++) ba.localStorage.removeItem(c[d]);
            }
            c = vb(Bd());
            a = c.length;
            for (d = 0; d < a; d++) {
                var e = dc.stringify(c[d]);
                ba.localStorage.setItem("CJS_" + d.toString(), e);
            }
        }
    }
    function Oi(a) {
        for (
            var c = a.length,
                d = [],
                e = [],
                f = function (a, f) {
                    d.push(a);
                    e = e.concat(f);
                    d.length === c &&
                        ((a = e),
                        0 < a.length &&
                            (lb(),
                            Nb(),
                            Ja(),
                            oa(),
                            Ua(b.eventsImportedText.replace("{0}", a.length)),
                            x(b.events.onEventsImported, a)));
                },
                g = 0;
            g < c;
            g++
        ) {
            var h = a[g],
                n = h.name.split(".").pop().toLowerCase();
            "json" === n ? Hm(h, f) : ("ics" === n || "ical" === n) && Im(h, f);
        }
    }
    function Hm(a, b) {
        var c = new FileReader(),
            e = [];
        c.readAsText(a);
        c.onloadend = function () {
            b(a.name, e);
        };
        c.onload = function (a) {
            a = Pe(a.target.result);
            Qa(a) && a.hasOwnProperty("events") && (a = a.events);
            for (var b = a.length, c = 0; c < b; c++) {
                var d = a[c];
                r.removeEvent(d.id, !1, !1);
                r.addEvent(d, !1, !1) && e.push(d);
            }
        };
    }
    function Im(a, b) {
        var c = new FileReader(),
            e = [];
        c.readAsText(a);
        c.onloadend = function () {
            b(a.name, e);
        };
        c.onload = function (a) {
            a = a.target.result.split(n.newLineCharacterReturn);
            var b = a.length;
            if (a[0].indexOf("BEGIN:VCALENDAR") > A.notFound && a[b - 1].indexOf("END:VCALENDAR") > A.notFound)
                for (var c = !1, d = {}, f = 0; f < b; f++) {
                    var g = a[f];
                    if (g.indexOf("BEGIN:VEVENT") > A.notFound) c = !0;
                    else if (g.indexOf("END:VEVENT") > A.notFound) {
                        var h = dc.parse(dc.stringify(d));
                        c = !1;
                        d = {};
                        r.removeEvent(h.id, !1, !1);
                        r.addEvent(h, !1, !1) && e.push(h);
                    }
                    if (c)
                        if (qa(g, "UID:")) d.id = g.split(":").pop();
                        else if (qa(g, "SUMMARY:")) d.title = g.split(":").pop();
                        else if (qa(g, "DESCRIPTION:")) d.description = g.split(":").pop();
                        else if (qa(g, "DTSTART:") || qa(g, "DTSTART;"))
                            (d.from = Eh(g.split(":").pop())), (d.isAllDay = 8 === g.split(":").pop().length);
                        else if (qa(g, "DTEND:") || qa(g, "DTEND;")) d.to = Eh(g.split(":").pop(), !0);
                        else if (qa(g, "CREATED:")) d.created = Eh(g.split(":").pop());
                        else if (qa(g, "LOCATION:")) d.location = g.split(":").pop();
                        else if (qa(g, "URL:")) d.url = g.split(":").pop();
                        else if (qa(g, "TRANSP:")) d.showAsBusy = "OPAQUE" === g.split(":").pop();
                        else if (qa(g, "BEGIN:VALARM")) d.showAlerts = !0;
                        else if (qa(g, "CATEGORIES:")) d.group = g.split(":").pop();
                        else if (qa(g, "ORGANIZER;"))
                            (h = d),
                                (g = g.split(";").pop().split(":")),
                                (h.organizerName = g[0].replace("CN=", n.empty)),
                                (h.organizerEmailAddress = g[2]);
                        else if (qa(g, "RRULE:")) {
                            h = d;
                            g = g.split(":").pop().split(";");
                            for (var m = g.length, q = null, t = null, u = null, x = 0; x < m; x++) {
                                var v = g[x];
                                qa(v, "FREQ=")
                                    ? (q = v.split("=")[1])
                                    : qa(v, "INTERVAL=")
                                      ? (t = v.split("=")[1])
                                      : qa(v, "UNTIL=") && (u = v.split("=")[1]);
                            }
                            p(q) &&
                                (p(t) &&
                                    ((t = parseInt(t)), 2 <= t && "WEEKLY" !== q && (h.repeatEveryCustomValue = t)),
                                p(h.repeatEveryCustomValue)
                                    ? "DAILY" === q
                                        ? (h.repeatEveryCustomType = O.daily)
                                        : "WEEKLY" === q
                                          ? (h.repeatEveryCustomType = O.weekly)
                                          : "MONTHLY" === q
                                            ? (h.repeatEveryCustomType = O.monthly)
                                            : "YEARLY" === q && (h.repeatEveryCustomType = O.yearly)
                                    : "DAILY" === q
                                      ? (h.repeatEvery = w.everyDay)
                                      : "WEEKLY" === q
                                        ? (h.repeatEvery = w.everyWeek)
                                        : "MONTHLY" === q
                                          ? (h.repeatEvery = w.everyMonth)
                                          : "MONTHLY" === q && 2 === t
                                            ? (h.repeatEvery = w.every2Weeks)
                                            : "YEARLY" === q && (h.repeatEvery = w.everyYear),
                                p(u) && ((g = Eh(u)), g.setDate(g.getDate() - 1), (h.repeatEnds = g)));
                        }
                }
        };
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
    function Al() {
        var a = g("input", null, "file");
        a.accept = ".ical, .ics, .json";
        a.multiple = "multiple";
        a.onchange = function () {
            Oi(a.files);
        };
        Ib();
        a.click();
    }
    function wc(a, c, d, e) {
        c = p(c) ? c.toLowerCase() : "csv";
        e = p(e) ? e : !1;
        var f = n.empty,
            h = vb,
            l = [];
        l = p(a) ? l.concat(a) : Bd();
        l = vb(l);
        a = h(l, !1);
        if ("csv" === c) {
            f = a.length;
            h = Ri();
            l = h[0];
            var m = h[1],
                q = [];
            h = [];
            for (var t = 0; t < m; t++) q.push(el(l[t]));
            h.push(q.join(","));
            for (l = 0; l < f; l++) {
                m = h;
                q = Si(a[l]);
                t = q.length;
                for (var u = 0; u < t; u++) q[u] = el(q[u]);
                m.push(q.join(","));
            }
            f = h.join(n.newLine);
        } else if ("xml" === c) {
            l = d;
            f = [];
            h = a.length;
            f.push('<?xml version="1.0" ?>');
            f.push("<Calendar>");
            p(l) && f.push("<Filename>" + l + "</Filename>");
            f.push("<LastModified>" + Ti() + "</LastModified>");
            f.push("</Calendar>");
            f.push("<Events>");
            for (l = 0; l < h; l++) {
                m = a[l];
                q = Fh(m);
                t = q.length;
                f.push("<Event>");
                for (u = 0; u < t; u++) {
                    var v = q[u];
                    if ("customTags" !== v && m.hasOwnProperty(v) && null !== m[v]) {
                        var y = Ui(v);
                        f.push("<" + y + ">" + Gh(v, m[v]) + "</" + y + ">");
                    }
                }
                f.push("</Event>");
            }
            f.push("</Events>");
            f = f.join(n.newLine);
        } else if ("json" === c) f = bk(a);
        else if ("text" === c) {
            l = d;
            f = [];
            h = a.length;
            p(l) && f.push("Filename: " + l);
            f.push("Last Modified: " + Ti());
            f.push(n.empty);
            for (l = 0; l < h; l++) {
                m = a[l];
                q = Fh(m);
                t = q.length;
                for (u = 0; u < t; u++)
                    (v = q[u]),
                        "customTags" !== v &&
                            m.hasOwnProperty(v) &&
                            null !== m[v] &&
                            f.push(Ui(v) + ": " + Gh(v, m[v]));
                f.push(n.empty);
            }
            f.pop();
            f = f.join(n.newLine);
        } else if ("ical" === c) {
            f = [];
            h = a.length;
            f.push("BEGIN:VCALENDAR");
            f.push("VERSION:2.0");
            f.push("PRODID:-//Bunoon//Calendar.js v" + r.getVersion() + "//EN");
            f.push("CALSCALE:GREGORIAN");
            for (l = 0; l < h; l++) {
                m = a[l];
                q = G(m.organizerName);
                t = G(m.organizerEmailAddress);
                u = H(m.repeatEvery);
                T(q) || (q = b.organizerName);
                T(t) || (t = b.organizerEmailAddress);
                f.push("BEGIN:VEVENT");
                f.push("UID:" + G(m.id));
                f.push("STATUS:CONFIRMED");
                f.push("SEQUENCE:0");
                !kb(m.showAsBusy) || m.showAsBusy ? f.push("TRANSP:OPAQUE") : f.push("TRANSP:TRANSPARENT");
                m.isAllDay
                    ? (f.push("DTSTART:" + fl(m.from)), f.push("DTEND:" + fl(m.to)))
                    : (f.push("DTSTART:" + Je(m.from)), f.push("DTEND:" + Je(m.to)));
                yc(m.created) && ((v = Je(m.created)), f.push("DTSTAMP:" + v), f.push("CREATED:" + v));
                yc(m.lastUpdated) && f.push("LAST-MODIFIED:" + Je(m.lastUpdated));
                T(q) && T(t) && f.push("ORGANIZER;CN=" + q + ":MAILTO:" + t);
                u !== w.never && f.push("RRULE:" + Jm(m, u));
                T(m.title) && f.push("SUMMARY:" + ig(m.title));
                T(m.description) && f.push("DESCRIPTION:" + ig(m.description));
                T(m.location) && f.push("LOCATION:" + ig(m.location));
                T(m.url) && f.push("URL:" + ig(m.url));
                T(m.group) && f.push("CATEGORIES:" + ig(m.group));
                if (!kb(m.showAlerts) || m.showAlerts)
                    f.push("BEGIN:VALARM"),
                        f.push("TRIGGER;VALUE=DATE-TIME:" + Je(m.from)),
                        f.push("ACTION:DISPLAY"),
                        f.push("END:VALARM");
                f.push("END:VEVENT");
            }
            f.push("END:VCALENDAR");
            f = f.join(n.newLineCharacterReturn);
        } else if ("md" === c) {
            f = a.length;
            h = Ri();
            l = h[1];
            h = ["| " + h[0].join(" | ") + " |"];
            m = [];
            for (q = 0; q < l; q++) m.push("---");
            h.push("| " + m.join(" | ") + " |");
            for (l = 0; l < f; l++) (m = Si(a[l])), h.push("| " + m.join(" | ") + " |");
            f = h.join(n.newLine);
        } else if ("html" === c) {
            l = d;
            f = [];
            h = a.length;
            f.push("<!DOCTYPE html>");
            f.push("<html>");
            f.push("<head>");
            f.push('<meta charset="utf-8" />');
            f.push('<meta http-equiv="Last-Modified" content="' + Ti() + ' GMT" />');
            p(l) && f.push("<title>" + l + "</title>");
            f.push("</head>");
            f.push("<body>");
            for (l = 0; l < h; l++) {
                m = a[l];
                q = Fh(m);
                t = q.length;
                f.push("<h3><b>" + m.id + ":</b></h3>");
                f.push("<ul>");
                for (u = 0; u < t; u++)
                    (v = q[u]),
                        "customTags" !== v &&
                            m.hasOwnProperty(v) &&
                            null !== m[v] &&
                            f.push("<li><b>" + Ui(v) + "</b>: " + Gh(v, m[v]) + "</li>");
                f.push("</ul>");
            }
            f.push("</body>");
            f.push("</html>");
            f = f.join(n.newLine);
        } else if ("tsv" === c) {
            f = a.length;
            h = Ri();
            l = h[0];
            m = h[1];
            q = [];
            h = [];
            for (t = 0; t < m; t++) q.push(gl(l[t]));
            h.push(q.join("\t"));
            for (l = 0; l < f; l++) {
                m = h;
                q = Si(a[l]);
                t = q.length;
                for (u = 0; u < t; u++) q[u] = gl(q[u]);
                m.push(q.join("\t"));
            }
            f = h.join(n.newLine);
        }
        f !== n.empty &&
            (e
                ? (If.clipboard.writeText(f), Ua(b.eventsExportedText))
                : ((e = g("a")),
                  (h = "text"),
                  (m = l = c),
                  "text" === c
                      ? ((l = "plain"), (m = "txt"))
                      : "ical" === c
                        ? ((l = "calendar"), (m = "ics"))
                        : "json" === c
                          ? (h = "application")
                          : "md" === c
                            ? (l = "x-markdown")
                            : "html" === c
                              ? (l = "html")
                              : "tsv" === c && (l = "tab-separated-values"),
                  (l = [h, l, m]),
                  (c = l[0]),
                  (h = l[1]),
                  (l = l[2]),
                  (d = p(d) ? d : ck(l)),
                  (e.style.display = "none"),
                  e.setAttribute("target", "_blank"),
                  e.setAttribute("href", "data:" + c + "/" + h + ";charset=utf-8," + encodeURIComponent(f)),
                  e.setAttribute("download", d),
                  D.body.appendChild(e),
                  e.click(),
                  D.body.removeChild(e),
                  Ua(b.eventsExportedToText.replace("{0}", d))),
            x(b.events.onEventsExported, a));
    }
    function ck(a, c) {
        c = p(c) ? c : b.exportStartFilename;
        var d = new Date(),
            e = L(d.getDate()) + "-" + L(d.getMonth() + 1) + "-" + d.getFullYear();
        d = L(d.getHours()) + "-" + L(d.getMinutes());
        return c + e + "_" + d + "." + a;
    }
    function jg(a) {
        return a ? b.yesText : b.noText;
    }
    function Ke(a) {
        var c = b.repeatsNever;
        p(a) &&
            ((c = L(a.getDate()) + "/" + L(a.getMonth() + 1) + "/" + a.getFullYear()),
            (a = L(a.getHours()) + ":" + L(a.getMinutes())),
            (c = c + n.space + a));
        return c;
    }
    function G(a, b) {
        b = p(b) ? b : n.empty;
        return T(a) ? a : b;
    }
    function H(a, b) {
        b = p(b) ? b : 0;
        return Da(a) ? a : b;
    }
    function Vk(a, b) {
        b = p(b) ? b : 0;
        return kb(a) ? (a ? 1 : 0) : b;
    }
    function vi(a, b) {
        b = p(b) ? b : !1;
        return kb(a) ? a : b;
    }
    function Pc(a, b) {
        b = p(b) ? b : [];
        return wa(a) ? a : b;
    }
    function qd(a) {
        var c = b.dailyText;
        a = H(a);
        a === w.everyDay
            ? (c = b.repeatsEveryDayText)
            : a === w.everyWeek
              ? (c = b.repeatsEveryWeekText)
              : a === w.every2Weeks
                ? (c = b.repeatsEvery2WeeksText)
                : a === w.everyMonth
                  ? (c = b.repeatsEveryMonthText)
                  : a === w.everyYear
                    ? (c = b.repeatsEveryYearText)
                    : a === w.custom && (c = b.repeatsByCustomSettingsText);
        return c;
    }
    function Hh(a, b) {
        b = p(b) ? b : !1;
        a = Pc(a);
        for (var c = a.length, e = 0; e < c; e++) a[e] = b ? '"' + a[e] + '"' : a[e];
        return a.join(",");
    }
    function Ui(a) {
        return a.charAt(0).toUpperCase() + a.slice(1);
    }
    function Gh(a, c, d) {
        var e = (d = p(d) ? d : !1) ? '"' + G(c) + '"' : G(c);
        "boolean" === typeof c
            ? (e = d ? c.toString() : jg(c))
            : "object" === typeof c && c instanceof Date
              ? (e = d ? '"' + c.toISOString() + '"' : Ke(c))
              : "object" === typeof c && c instanceof Array
                ? (e = "repeatEveryExcludeDays" !== a || d ? (d ? "[" + Hh(c) + "]" : Hh(c)) : hl(c))
                : "number" === typeof c &&
                  ("repeatEvery" !== a || d
                      ? "repeatEveryCustomType" !== a || d
                          ? (e = "type" !== a || d ? c.toString() : P[parseInt(c)].text)
                          : ((a = b.dailyText),
                            (c = H(c)),
                            c === O.daily
                                ? (a = b.dailyText)
                                : c === O.weekly
                                  ? (a = b.weeklyText)
                                  : c === O.monthly
                                    ? (a = b.monthlyText)
                                    : c === O.yearly && (a = b.yearlyText),
                            (e = a))
                      : (e = qd(c)));
        return e;
    }
    function hl(a) {
        var c = [];
        if (wa(a))
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
        b.push(P[H(a.type)].text);
        b.push(Ke(a.from));
        b.push(Ke(a.to));
        b.push(jg(a.isAllDay));
        b.push(G(a.title));
        b.push(G(a.description));
        b.push(G(a.location));
        b.push(G(a.color));
        b.push(G(a.colorText));
        b.push(G(a.colorBorder));
        b.push(qd(a.repeatEvery));
        b.push(Ke(a.repeatEnds));
        b.push(hl(a.repeatEveryExcludeDays));
        b.push(Hh(a.seriesIgnoreDates));
        b.push(Ke(a.created));
        b.push(Ke(a.lastUpdated));
        b.push(G(a.organizerName));
        b.push(G(a.organizerEmailAddress));
        b.push(G(a.url));
        b.push(jg(a.locked));
        b.push(jg(!kb(a.showAlerts) || a.showAlerts));
        b.push(jg(!kb(a.showAsBusy) || a.showAsBusy));
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
        return (b += " " + L(a.getHours()) + ":" + L(a.getMinutes()) + ":" + L(a.getSeconds()));
    }
    function el(a) {
        a = a
            .toString()
            .replace(/(\r\n|\n|\r)/gm, n.empty)
            .replace(/(\s\s)/gm, n.space);
        a = a.replace(/"/g, '""');
        return '"' + a + '"';
    }
    function bk(a) {
        var b = [],
            d = a.length;
        b.push("{");
        b.push('"events": [');
        for (var e = 0; e < d; e++) {
            var f = a[e],
                g = Fh(f),
                h = g.length;
            b.push("{");
            for (var m = 0; m < h; m++) {
                var p = g[m];
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
    function ig(a) {
        return mc(G(a)).replace(/\n|\r/g, n.empty);
    }
    function Je(a) {
        var b = [];
        p(a) &&
            (b.push(a.getFullYear()),
            b.push(L(a.getMonth() + 1)),
            b.push(L(a.getDate())),
            b.push("T"),
            b.push(L(a.getHours())),
            b.push(L(a.getMinutes())),
            b.push("00Z"));
        return b.join(n.empty);
    }
    function fl(a) {
        var b = [];
        p(a) && (b.push(a.getFullYear()), b.push(L(a.getMonth() + 1)), b.push(L(a.getDate())));
        return b.join(n.empty);
    }
    function Jm(a, b) {
        var c = [];
        if (b === w.custom) {
            b = H(a.repeatEveryCustomType);
            var e = H(a.repeatEveryCustomValue);
            b === O.daily
                ? c.push("FREQ=DAILY")
                : b === O.weekly
                  ? c.push("FREQ=WEEKLY")
                  : b === O.monthly
                    ? c.push("FREQ=MONTHLY")
                    : b === O.yearly && c.push("FREQ=YEARLY");
            c.push("INTERVAL=" + e.toString());
        } else
            b === w.everyDay
                ? c.push("FREQ=DAILY")
                : b === w.everyWeek || b === w.every2Weeks
                  ? c.push("FREQ=WEEKLY")
                  : b === w.everyMonth
                    ? c.push("FREQ=MONTHLY")
                    : b === w.everyYear && c.push("FREQ=YEARLY"),
                b === w.every2Weeks ? c.push("INTERVAL=2") : c.push("INTERVAL=1");
        yc(a.repeatEnds) && ((a = new Date(a.repeatEnds)), a.setDate(a.getDate() + 1), c.push("UNTIL=" + Je(a)));
        return c.join(";");
    }
    function gl(a) {
        return (a = a.replace(/\\/g, "\\\\"));
    }
    function x(a) {
        var b = null,
            d = [].slice.call(arguments, 1);
        0 < d.length && (b = !1);
        Zc(a) && (b = a.apply(null, d));
        return b;
    }
    function be(a, c, d) {
        Zc(b.events.onEventClick) &&
            a.addEventListener("click", function () {
                x(b.events.onEventClick, c);
            });
        b.manualEditingEnabled
            ? (a.ondblclick = function (a) {
                  B(a);
                  p(d) ? R(c, null, null, d) : R(c);
              })
            : Zc(b.events.onEventDoubleClick) &&
              (a.ondblclick = function () {
                  x(b.events.onEventDoubleClick, c);
              });
    }
    function $e(a) {
        p(a) && B(a);
        if (!q || eb)
            (a = new Date(y)),
                a.setMonth(a.getMonth() - 1),
                a.getFullYear() >= b.minimumYear && (F(a), x(b.events.onPreviousMonth, a), sb());
    }
    function af(a) {
        p(a) && B(a);
        if (!q || eb)
            (a = new Date(y)),
                a.setMonth(a.getMonth() + 1),
                a.getFullYear() <= b.maximumYear && (F(a), x(b.events.onNextMonth, a), sb());
    }
    function qg() {
        if (!q || eb) {
            var a = new Date(y);
            a.setFullYear(a.getFullYear() - 1);
            a.getFullYear() >= b.minimumYear && (F(a), x(b.events.onPreviousYear, a), sb());
        }
    }
    function rg() {
        if (!q || eb) {
            var a = new Date(y);
            a.setFullYear(a.getFullYear() + 1);
            a.getFullYear() <= b.maximumYear && (F(a), x(b.events.onNextYear, a), sb());
        }
    }
    function sg() {
        if (!q || eb) {
            var a = new Date();
            if (y.getMonth() !== a.getMonth() || y.getFullYear() !== a.getFullYear()) F(), x(b.events.onToday), sb();
        }
    }
    function il(a) {
        b = mb(a);
        b.views = mb(b.views);
        b.showDayNumberOrdinals = m(b.showDayNumberOrdinals, !0);
        b.dragAndDropForEventsEnabled = m(b.dragAndDropForEventsEnabled, !0);
        b.exportEventsEnabled = m(b.exportEventsEnabled, !0);
        b.manualEditingEnabled = m(b.manualEditingEnabled, !0);
        b.autoRefreshTimerDelay = ua(b.autoRefreshTimerDelay, 3e4);
        b.fullScreenModeEnabled = m(b.fullScreenModeEnabled, !0);
        b.tooltipDelay = ua(b.tooltipDelay, 1e3);
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
        b.spacing = ua(b.spacing, 10);
        b.maximumEventTitleLength = ua(b.maximumEventTitleLength, 0);
        b.maximumEventDescriptionLength = ua(b.maximumEventDescriptionLength, 0);
        b.maximumEventLocationLength = ua(b.maximumEventLocationLength, 0);
        b.maximumEventGroupLength = ua(b.maximumEventGroupLength, 0);
        b.eventNotificationsEnabled = m(b.eventNotificationsEnabled, !1);
        b.tooltipsEnabled = m(b.tooltipsEnabled, !0);
        b.urlWindowTarget = db(b.urlWindowTarget, "_blank");
        b.defaultEventBackgroundColor = db(b.defaultEventBackgroundColor, "#484848");
        b.defaultEventTextColor = db(b.defaultEventTextColor, "#F5F5F5");
        b.defaultEventBorderColor = db(b.defaultEventBorderColor, "#282828");
        b.hideEventsWithoutGroupAssigned = m(b.hideEventsWithoutGroupAssigned, !1);
        b.showHolidays = m(b.showHolidays, !0);
        b.useTemplateWhenAddingNewEvent = m(b.useTemplateWhenAddingNewEvent, !0);
        b.useEscapeKeyToExitFullScreenMode = m(b.useEscapeKeyToExitFullScreenMode, !0);
        b.allowHtmlInDisplay = m(b.allowHtmlInDisplay, !1);
        b.initialDateTime = Qi(b.initialDateTime, null);
        b.data = hg(b.data, null);
        b.weekendDays = ad(b.weekendDays, 0) ? [0, 6] : b.weekendDays;
        b.workingDays = ad(b.workingDays, 0) ? [] : b.workingDays;
        b.minimumYear = ua(b.minimumYear, 1900);
        b.maximumYear = ua(b.maximumYear, 2099);
        b.defaultEventDuration = ua(b.defaultEventDuration, 30);
        b.configurationDialogEnabled = m(b.configurationDialogEnabled, !0);
        b.popUpNotificationsEnabled = m(b.popUpNotificationsEnabled, !0);
        b.startOfWeekDay = ua(b.startOfWeekDay, xa.monday);
        b.useLocalStorageForEvents = m(b.useLocalStorageForEvents, !1);
        b.shortcutKeysEnabled = m(b.shortcutKeysEnabled, !0);
        b.reverseOrderDaysOfWeek = m(b.reverseOrderDaysOfWeek, !1);
        b.importEventsEnabled = m(b.importEventsEnabled, !0);
        b.useAmPmForTimeDisplays = m(b.useAmPmForTimeDisplays, !1);
        b.isWidget = m(b.isWidget, !1);
        b.viewToOpenOnFirstLoad = db(b.viewToOpenOnFirstLoad, null);
        b.eventColorsEditingEnabled = m(b.eventColorsEditingEnabled, !0);
        b.eventTooltipDelay = ua(b.eventTooltipDelay, 1e3);
        b.jumpToDateEnabled = m(b.jumpToDateEnabled, !0);
        b.shareEventsEnabled = m(b.shareEventsEnabled, !0);
        b.showReoccurringEventIcons = m(b.showReoccurringEventIcons, !0);
        b.dialogMovingEnabled = m(b.dialogMovingEnabled, !0);
        ad(b.visibleDays) && ((b.visibleDays = [0, 1, 2, 3, 4, 5, 6]), (pd = []));
        a = db(b.workingHoursStart, null);
        var c = db(b.workingHoursEnd, null);
        p(a) || ((a = b.workingHoursStart), (a = Qa(a) ? a : null));
        p(c) || ((c = b.workingHoursEnd), (c = Qa(c) ? c : null));
        b.workingHoursStart = a;
        b.workingHoursEnd = c;
        b.sideMenu = mb(b.sideMenu);
        b.sideMenu.showDays = m(b.sideMenu.showDays, !0);
        b.sideMenu.showGroups = m(b.sideMenu.showGroups, !0);
        b.sideMenu.showEventTypes = m(b.sideMenu.showEventTypes, !0);
        b.sideMenu.showWorkingDays = m(b.sideMenu.showWorkingDays, !0);
        b.sideMenu.showWeekendDays = m(b.sideMenu.showWeekendDays, !0);
        b.sideMenu.showSelectAllNoneButtons = m(b.sideMenu.showSelectAllNoneButtons, !0);
        b.views.fullDay = mb(b.views.fullDay);
        b.views.fullDay.enabled = m(b.views.fullDay.enabled, !0);
        b.views.fullDay.showAllDayEventDetails = m(b.views.fullDay.showAllDayEventDetails, !1);
        b.views.fullDay.minutesBetweenSections = ua(b.views.fullDay.minutesBetweenSections, 30);
        b.views.fullDay.showTimelineArrow = m(b.views.fullDay.showTimelineArrow, !0);
        b.views.fullDay.showExtraTitleBarButtons = m(b.views.fullDay.showExtraTitleBarButtons, !0);
        b.views.fullDay.showEventLinks = m(b.views.fullDay.showEventLinks, !1);
        b.views.fullWeek = mb(b.views.fullWeek);
        b.views.fullWeek.enabled = m(b.views.fullWeek.enabled, !0);
        b.views.fullWeek.showAllDayEventDetails = m(b.views.fullWeek.showAllDayEventDetails, !1);
        b.views.fullWeek.showDayNamesHeaders = m(b.views.fullWeek.showDayNamesHeaders, !0);
        b.views.fullWeek.minutesBetweenSections = ua(b.views.fullWeek.minutesBetweenSections, 30);
        b.views.fullWeek.showTimelineArrow = m(b.views.fullWeek.showTimelineArrow, !0);
        b.views.fullWeek.showWeekNumbersInTitles = m(b.views.fullWeek.showWeekNumbersInTitles, !1);
        b.views.fullWeek.showExtraTitleBarButtons = m(b.views.fullWeek.showExtraTitleBarButtons, !0);
        b.views.fullWeek.showDatesInDayHeaders = m(b.views.fullWeek.showDatesInDayHeaders, !0);
        b.views.fullWeek.padDayMonthNumbers = m(b.views.fullWeek.padDayMonthNumbers, !1);
        b.views.fullWeek.showEventLinks = m(b.views.fullWeek.showEventLinks, !1);
        b.views.fullMonth = mb(b.views.fullMonth);
        b.views.fullMonth.maximumEventsPerDayDisplay = ua(b.views.fullMonth.maximumEventsPerDayDisplay, 3);
        b.views.fullMonth.showTimesInEvents = m(b.views.fullMonth.showTimesInEvents, !1);
        b.views.fullMonth.minimumDayHeight = ua(b.views.fullMonth.minimumDayHeight, 0);
        b.views.fullMonth.showPreviousNextMonthNames = m(b.views.fullMonth.showPreviousNextMonthNames, !0);
        b.views.fullMonth.useOnlyDotEvents = m(b.views.fullMonth.useOnlyDotEvents, !1);
        b.views.fullMonth.applyCssToEventsNotInCurrentMonth = m(
            b.views.fullMonth.applyCssToEventsNotInCurrentMonth,
            !0
        );
        b.views.fullMonth.addYearButtons = m(b.views.fullMonth.addYearButtons, !1);
        b.views.fullMonth.titleBarDateFormat = db(b.views.fullMonth.titleBarDateFormat, "{mmmm} {yyyy}");
        b.views.fullMonth.showDayNamesHeaders = m(b.views.fullMonth.showDayNamesHeaders, !0);
        b.views.fullMonth.isPinUpViewEnabled = m(b.views.fullMonth.isPinUpViewEnabled, !1);
        b.views.fullMonth.pinUpViewImageUrls = hg(b.views.fullMonth.pinUpViewImageUrls, []);
        b.views.fullMonth.showMonthButtonsInYearDropDownMenu = m(
            b.views.fullMonth.showMonthButtonsInYearDropDownMenu,
            !0
        );
        b.views.fullMonth.showExtraTitleBarButtons = m(b.views.fullMonth.showExtraTitleBarButtons, !0);
        b.views.fullMonth.pinUpViewImageCssClasses = hg(b.views.fullMonth.pinUpViewImageCssClasses, []);
        b.views.fullMonth.showYearDropDownButtonIcon = m(b.views.fullMonth.showYearDropDownButtonIcon, !0);
        b.views.fullMonth.padDayNumbers = m(b.views.fullMonth.padDayNumbers, !1);
        kb(b.views.fullMonth.allowEventScrolling) ||
            ((b.views.fullMonth.allowEventScrolling = !1),
            b.views.fullMonth.allowEventScrolling && (b.views.fullMonth.maximumEventsPerDayDisplay = 0));
        b.views.fullYear = mb(b.views.fullYear);
        b.views.fullYear.enabled = m(b.views.fullYear.enabled, !0);
        b.views.fullYear.showExtraTitleBarButtons = m(b.views.fullYear.showExtraTitleBarButtons, !0);
        b.views.fullYear.padDayNumbers = m(b.views.fullYear.padDayNumbers, !1);
        b.views.timeline = mb(b.views.timeline);
        b.views.timeline.enabled = m(b.views.timeline.enabled, !0);
        b.views.timeline.defaultAxis = db(b.views.timeline.defaultAxis, "group");
        b.views.timeline.minutesBetweenSections = ua(b.views.timeline.minutesBetweenSections, 30);
        b.views.timeline.showExtraTitleBarButtons = m(b.views.timeline.showExtraTitleBarButtons, !0);
        b.views.allEvents = mb(b.views.allEvents);
        b.views.allEvents.enabled = m(b.views.allEvents.enabled, !0);
        b.views.allEvents.showExtraTitleBarButtons = m(b.views.allEvents.showExtraTitleBarButtons, !0);
        b.views.allEvents.showEventLinks = m(b.views.allEvents.showEventLinks, !1);
        b.views.datePicker = mb(b.views.datePicker);
        b.views.datePicker.selectedDateFormat = db(b.views.datePicker.selectedDateFormat, "{d}{o} {mmmm} {yyyy}");
        b.views.datePicker.minimumDate = Qi(b.views.datePicker.minimumDate, null);
        b.views.datePicker.maximumDate = Qi(b.views.datePicker.maximumDate, null);
        b.events = mb(b.events);
        b.events.onPreviousMonth = C(b.events.onPreviousMonth, null);
        b.events.onNextMonth = C(b.events.onNextMonth, null);
        b.events.onPreviousYear = C(b.events.onPreviousYear, null);
        b.events.onNextYear = C(b.events.onNextYear, null);
        b.events.onToday = C(b.events.onToday, null);
        b.events.onEventAdded = C(b.events.onEventAdded, null);
        b.events.onEventUpdated = C(b.events.onEventUpdated, null);
        b.events.onEventRemoved = C(b.events.onEventRemoved, null);
        b.events.onEventsAdded = C(b.events.onEventsAdded, null);
        b.events.onEventsCleared = C(b.events.onEventsCleared, null);
        b.events.onEventsExported = C(b.events.onEventsExported, null);
        b.events.onSetDate = C(b.events.onSetDate, null);
        b.events.onEventsSet = C(b.events.onEventsSet, null);
        b.events.onGroupsCleared = C(b.events.onGroupsCleared, null);
        b.events.onEventsUpdated = C(b.events.onEventsUpdated, null);
        b.events.onOptionsUpdated = C(b.events.onOptionsUpdated, null);
        b.events.onNotificationClicked = C(b.events.onNotificationClicked, null);
        b.events.onSearchOptionsUpdated = C(b.events.onSearchOptionsUpdated, null);
        b.events.onFullScreenModeChanged = C(b.events.onFullScreenModeChanged, null);
        b.events.onEventsSetFromJSON = C(b.events.onEventsSetFromJSON, null);
        b.events.onEventsAddedFromJSON = C(b.events.onEventsAddedFromJSON, null);
        b.events.onDatePickerDateChanged = C(b.events.onDatePickerDateChanged, null);
        b.events.onGroupRemoved = C(b.events.onGroupRemoved, null);
        b.events.onEventUrlClicked = C(b.events.onEventUrlClicked, null);
        b.events.onDestroy = C(b.events.onDestroy, null);
        b.events.onRefresh = C(b.events.onRefresh, null);
        b.events.onDatePickerOpened = C(b.events.onDatePickerOpened, null);
        b.events.onDatePickerClosed = C(b.events.onDatePickerClosed, null);
        b.events.onRender = C(b.events.onRender, null);
        b.events.onEventDragStart = C(b.events.onEventDragStart, null);
        b.events.onEventDragStop = C(b.events.onEventDragStop, null);
        b.events.onEventDragDrop = C(b.events.onEventDragDrop, null);
        b.events.onEventClick = C(b.events.onEventClick, null);
        b.events.onEventDoubleClick = C(b.events.onEventDoubleClick, null);
        b.events.onVisibleGroupsChanged = C(b.events.onVisibleGroupsChanged, null);
        b.events.onVisibleEventTypesChanged = C(b.events.onVisibleEventTypesChanged, null);
        b.events.onNotification = C(b.events.onNotification, null);
        b.events.onBeforeEventAddEdit = C(b.events.onBeforeEventAddEdit, null);
        b.events.onBusyStateChange = C(b.events.onBusyStateChange, null);
        b.events.onEventsFetch = C(b.events.onEventsFetch, null);
        b.events.onEventsImported = C(b.events.onEventsImported, null);
        b.events.onFullDayEventRender = C(b.events.onFullDayEventRender, null);
        b.events.onFullWeekEventRender = C(b.events.onFullWeekEventRender, null);
        b.events.onFullMonthEventRender = C(b.events.onFullMonthEventRender, null);
        b.events.onAllEventsEventRender = C(b.events.onAllEventsEventRender, null);
        b.events.onTimelineEventRender = C(b.events.onTimelineEventRender, null);
        b.events.onWidgetEventRender = C(b.events.onWidgetEventRender, null);
        b.events.onToolTipEventRender = C(b.events.onToolTipEventRender, null);
        b.events.onFullDayTitleRender = C(b.events.onFullDayTitleRender, null);
        b.events.onFullWeekTitleRender = C(b.events.onFullWeekTitleRender, null);
        b.events.onTimelineTitleRender = C(b.events.onTimelineTitleRender, null);
        b.events.onFullMonthPinUpRender = C(b.events.onFullMonthPinUpRender, null);
        b.events.onViewChange = C(b.events.onViewChange, null);
        ad(b.dayHeaderNames, 7) && (b.dayHeaderNames = "Mon Tue Wed Thu Fri Sat Sun".split(" "));
        ad(b.dayNames, 7) && (b.dayNames = "Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "));
        ad(b.dayNamesAbbreviated, 7) && (b.dayNamesAbbreviated = "Mon Tue Wed Thu Fri Sat Sun".split(" "));
        ad(b.monthNames, 12) &&
            (b.monthNames =
                "January February March April May June July August September October November December".split(" "));
        ad(b.monthNamesAbbreviated, 12) &&
            (b.monthNamesAbbreviated = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "));
        b.previousMonthTooltipText = h(b.previousMonthTooltipText, "Previous Month");
        b.nextMonthTooltipText = h(b.nextMonthTooltipText, "Next Month");
        b.previousDayTooltipText = h(b.previousDayTooltipText, "Previous Day");
        b.nextDayTooltipText = h(b.nextDayTooltipText, "Next Day");
        b.previousWeekTooltipText = h(b.previousWeekTooltipText, "Previous Week");
        b.nextWeekTooltipText = h(b.nextWeekTooltipText, "Next Week");
        b.addEventTooltipText = h(b.addEventTooltipText, "Add Event");
        b.closeTooltipText = h(b.closeTooltipText, "Close");
        b.exportEventsTooltipText = h(b.exportEventsTooltipText, "Export Events");
        b.todayTooltipText = h(b.todayTooltipText, "Today");
        b.refreshTooltipText = h(b.refreshTooltipText, "Refresh");
        b.searchTooltipText = h(b.searchTooltipText, "Search");
        b.expandDayTooltipText = h(b.expandDayTooltipText, "Expand Day");
        b.viewAllEventsTooltipText = h(b.viewAllEventsTooltipText, "View All Events");
        b.viewFullWeekTooltipText = h(b.viewFullWeekTooltipText, "View Full Week");
        b.fromText = h(b.fromText, "From:");
        b.toText = h(b.toText, "To:");
        b.isAllDayText = h(b.isAllDayText, "Is All-Day");
        b.titleText = h(b.titleText, "Title:");
        b.descriptionText = h(b.descriptionText, "Description:");
        b.locationText = h(b.locationText, "Location:");
        b.addText = h(b.addText, "Add");
        b.updateText = h(b.updateText, "Update");
        b.cancelText = h(b.cancelText, "Cancel");
        b.removeEventText = h(b.removeEventText, "Remove");
        b.addEventTitle = h(b.addEventTitle, "Add Event");
        b.editEventTitle = h(b.editEventTitle, "Edit Event");
        b.exportStartFilename = h(b.exportStartFilename, "exported_events_");
        b.fromTimeErrorMessage = h(b.fromTimeErrorMessage, "Please select a valid 'From' time.");
        b.toTimeErrorMessage = h(b.toTimeErrorMessage, "Please select a valid 'To' time.");
        b.toSmallerThanFromErrorMessage = h(
            b.toSmallerThanFromErrorMessage,
            "Please select a 'To' date that is larger than the 'From' date."
        );
        b.titleErrorMessage = h(b.titleErrorMessage, "Please enter a value in the 'Title' field (no empty space).");
        b.stText = h(b.stText, "st");
        b.ndText = h(b.ndText, "nd");
        b.rdText = h(b.rdText, "rd");
        b.thText = h(b.thText, "th");
        b.yesText = h(b.yesText, "Yes");
        b.noText = h(b.noText, "No");
        b.allDayText = h(b.allDayText, "All-Day");
        b.allEventsText = h(b.allEventsText, "All Events");
        b.toTimeText = h(b.toTimeText, "to");
        b.confirmEventRemoveTitle = h(b.confirmEventRemoveTitle, "Confirm Event Removal");
        b.confirmEventRemoveMessage = h(
            b.confirmEventRemoveMessage,
            "Removing this event cannot be undone.  Do you want to continue?"
        );
        b.okText = h(b.okText, "OK");
        b.exportEventsTitle = h(b.exportEventsTitle, "Export Events");
        b.selectColorsText = h(b.selectColorsText, "Select Colors");
        b.backgroundColorText = h(b.backgroundColorText, "Background Color:");
        b.textColorText = h(b.textColorText, "Text Color:");
        b.borderColorText = h(b.borderColorText, "Border Color:");
        b.searchEventsTitle = h(b.searchEventsTitle, "Search Events");
        b.previousText = h(b.previousText, "Previous");
        b.nextText = h(b.nextText, "Next");
        b.matchCaseText = h(b.matchCaseText, "Match Case");
        b.repeatsText = h(b.repeatsText, "Repeats:");
        b.repeatDaysToExcludeText = h(b.repeatDaysToExcludeText, "Repeat Days To Exclude:");
        b.daysToExcludeText = h(b.daysToExcludeText, "Days To Exclude:");
        b.seriesIgnoreDatesText = h(b.seriesIgnoreDatesText, "Series Ignore Dates:");
        b.repeatsNever = h(b.repeatsNever, "Never");
        b.repeatsEveryDayText = h(b.repeatsEveryDayText, "Every Day");
        b.repeatsEveryWeekText = h(b.repeatsEveryWeekText, "Every Week");
        b.repeatsEvery2WeeksText = h(b.repeatsEvery2WeeksText, "Every 2 Weeks");
        b.repeatsEveryMonthText = h(b.repeatsEveryMonthText, "Every Month");
        b.repeatsEveryYearText = h(b.repeatsEveryYearText, "Every Year");
        b.repeatsCustomText = h(b.repeatsCustomText, "Custom:");
        b.repeatOptionsTitle = h(b.repeatOptionsTitle, "Repeat Options");
        b.moreText = h(b.moreText, "More");
        b.includeText = h(b.includeText, "Include:");
        b.minimizedTooltipText = h(b.minimizedTooltipText, "Minimize");
        b.restoreTooltipText = h(b.restoreTooltipText, "Restore");
        b.removeAllEventsInSeriesText = h(b.removeAllEventsInSeriesText, "Remove All Events In Series");
        b.createdText = h(b.createdText, "Created:");
        b.organizerNameText = h(b.organizerNameText, "Organizer:");
        b.organizerEmailAddressText = h(b.organizerEmailAddressText, "Organizer Email:");
        b.enableFullScreenTooltipText = h(b.enableFullScreenTooltipText, "Turn On Full-Screen Mode");
        b.disableFullScreenTooltipText = h(b.disableFullScreenTooltipText, "Turn Off Full-Screen Mode");
        b.idText = h(b.idText, "ID:");
        b.expandMonthTooltipText = h(b.expandMonthTooltipText, "Expand Month");
        b.repeatEndsText = h(b.repeatEndsText, "Repeat Ends:");
        b.noEventsAvailableText = h(b.noEventsAvailableText, "No events available.");
        b.viewFullWeekText = h(b.viewFullWeekText, "View Full Week");
        b.noEventsAvailableFullText = h(b.noEventsAvailableFullText, "There are no events available to view.");
        b.clickText = h(b.clickText, "Click");
        b.hereText = h(b.hereText, "here");
        b.toAddANewEventText = h(b.toAddANewEventText, "to add a new event.");
        b.weekText = h(b.weekText, "Week");
        b.groupText = h(b.groupText, "Group:");
        b.configurationTooltipText = h(b.configurationTooltipText, "Configuration");
        b.configurationTitleText = h(b.configurationTitleText, "Configuration");
        b.groupsText = h(b.groupsText, "Groups");
        b.eventNotificationTitle = h(b.eventNotificationTitle, "Calendar.js");
        b.eventNotificationBody = h(b.eventNotificationBody, "The event '{0}' has started.");
        b.optionsText = h(b.optionsText, "Options:");
        b.startsWithText = h(b.startsWithText, "Starts With");
        b.endsWithText = h(b.endsWithText, "Ends With");
        b.containsText = h(b.containsText, "Contains");
        b.displayTabText = h(b.displayTabText, "Display");
        b.enableAutoRefreshForEventsText = h(b.enableAutoRefreshForEventsText, "Enable auto-refresh for events");
        b.enableBrowserNotificationsText = h(b.enableBrowserNotificationsText, "Enable browser notifications");
        b.enableTooltipsText = h(b.enableTooltipsText, "Enable tooltips");
        b.dayText = h(b.dayText, "day");
        b.daysText = h(b.daysText, "days");
        b.hourText = h(b.hourText, "hour");
        b.hoursText = h(b.hoursText, "hours");
        b.minuteText = h(b.minuteText, "minute");
        b.minutesText = h(b.minutesText, "minutes");
        b.enableDragAndDropForEventText = h(b.enableDragAndDropForEventText, "Enable drag & drop for events");
        b.organizerTabText = h(b.organizerTabText, "Organizer");
        b.removeEventsTooltipText = h(b.removeEventsTooltipText, "Remove Events");
        b.confirmEventsRemoveTitle = h(b.confirmEventsRemoveTitle, "Confirm Events Removal");
        b.confirmEventsRemoveMessage = h(
            b.confirmEventsRemoveMessage,
            "Removing these non-repeating events cannot be undone.  Do you want to continue?"
        );
        b.eventText = h(b.eventText, "Event");
        b.optionalText = h(b.optionalText, "Optional");
        b.urlText = h(b.urlText, "Url:");
        b.openUrlText = h(b.openUrlText, "Open Url");
        b.thisWeekTooltipText = h(b.thisWeekTooltipText, "This Week");
        b.dailyText = h(b.dailyText, "Daily");
        b.weeklyText = h(b.weeklyText, "Weekly");
        b.monthlyText = h(b.monthlyText, "Monthly");
        b.yearlyText = h(b.yearlyText, "Yearly");
        b.repeatsByCustomSettingsText = h(b.repeatsByCustomSettingsText, "By Custom Settings");
        b.lastUpdatedText = h(b.lastUpdatedText, "Last Updated:");
        b.advancedText = h(b.advancedText, "Advanced");
        b.copyText = h(b.copyText, "Copy");
        b.pasteText = h(b.pasteText, "Paste");
        b.duplicateText = h(b.duplicateText, "Duplicate");
        b.showAlertsText = h(b.showAlertsText, "Show Alerts");
        b.selectDatePlaceholderText = h(b.selectDatePlaceholderText, "Select date...");
        b.hideDayText = h(b.hideDayText, "Hide Day");
        b.notSearchText = h(b.notSearchText, "Not (opposite)");
        b.showHolidaysInTheDisplaysText = h(
            b.showHolidaysInTheDisplaysText,
            "Show holidays in the main display and title bars"
        );
        b.newEventDefaultTitle = h(b.newEventDefaultTitle, "* New Event");
        b.urlErrorMessage = h(b.urlErrorMessage, "Please enter a valid Url in the 'Url' field (or leave blank).");
        b.searchTextBoxPlaceholder = h(b.searchTextBoxPlaceholder, "Search title, description, etc...");
        b.currentMonthTooltipText = h(b.currentMonthTooltipText, "Current Month");
        b.cutText = h(b.cutText, "Cut");
        b.showMenuTooltipText = h(b.showMenuTooltipText, "Show Menu");
        b.eventTypesText = h(b.eventTypesText, "Event Types");
        b.lockedText = h(b.lockedText, "Locked:");
        b.typeText = h(b.typeText, "Type:");
        b.sideMenuHeaderText = h(b.sideMenuHeaderText, "Calendar.js");
        b.sideMenuDaysText = h(b.sideMenuDaysText, "Days");
        b.visibleDaysText = h(b.visibleDaysText, "Visible Days");
        b.previousYearTooltipText = h(b.previousYearTooltipText, "Previous Year");
        b.nextYearTooltipText = h(b.nextYearTooltipText, "Next Year");
        b.showOnlyWorkingDaysText = h(b.showOnlyWorkingDaysText, "Show Only Working Days");
        b.exportFilenamePlaceholderText = h(b.exportFilenamePlaceholderText, "Name (optional)");
        b.errorText = h(b.errorText, "Error");
        b.exportText = h(b.exportText, "Export");
        b.configurationUpdatedText = h(b.configurationUpdatedText, "Configuration updated.");
        b.eventAddedText = h(b.eventAddedText, "{0} event added.");
        b.eventUpdatedText = h(b.eventUpdatedText, "{0} event updated.");
        b.eventRemovedText = h(b.eventRemovedText, "{0} event removed.");
        b.eventsRemovedText = h(b.eventsRemovedText, "{0} events removed.");
        b.eventsExportedToText = h(b.eventsExportedToText, "Events exported to {0}.");
        b.eventsPastedText = h(b.eventsPastedText, "{0} events pasted.");
        b.eventsExportedText = h(b.eventsExportedText, "Events exported.");
        b.copyToClipboardOnlyText = h(b.copyToClipboardOnlyText, "Copy to clipboard only");
        b.workingDaysText = h(b.workingDaysText, "Working Days");
        b.weekendDaysText = h(b.weekendDaysText, "Weekend Days");
        b.showAsBusyText = h(b.showAsBusyText, "Show As Busy");
        b.selectAllText = h(b.selectAllText, "Select All");
        b.selectNoneText = h(b.selectNoneText, "Select None");
        b.importEventsTooltipText = h(b.importEventsTooltipText, "Import Events");
        b.eventsImportedText = h(b.eventsImportedText, "{0} events imported.");
        b.viewFullYearTooltipText = h(b.viewFullYearTooltipText, "View Full Year");
        b.currentYearTooltipText = h(b.currentYearTooltipText, "Current Year");
        b.alertOffsetText = h(b.alertOffsetText, "Alert Offset (minutes):");
        b.viewFullDayTooltipText = h(b.viewFullDayTooltipText, "View Full Day");
        b.confirmEventUpdateTitle = h(b.confirmEventUpdateTitle, "Confirm Event Update");
        b.confirmEventUpdateMessage = h(
            b.confirmEventUpdateMessage,
            "Would you like to update the event from this point forward, or the entire series?"
        );
        b.forwardText = h(b.forwardText, "Forward");
        b.seriesText = h(b.seriesText, "Series");
        b.viewTimelineTooltipText = h(b.viewTimelineTooltipText, "View Timeline");
        b.nextPropertyTooltipText = h(b.nextPropertyTooltipText, "Next Property");
        b.noneText = h(b.noneText, "(none)");
        b.shareText = h(b.shareText, "Share");
        b.shareStartFilename = h(b.shareStartFilename, "shared_events_");
        b.previousPropertyTooltipText = h(b.previousPropertyTooltipText, "Previous Property");
        b.jumpToDateTitle = h(b.jumpToDateTitle, "Jump To Date");
        b.goText = h(b.goText, "Go");
        kg(b.eventTypeNormalText, "Normal", 0);
        kg(b.eventTypeMeetingText, "Meeting", 1);
        kg(b.eventTypeBirthdayText, "Birthday", 2);
        kg(b.eventTypeHolidayText, "Holiday", 3);
        kg(b.eventTypeTaskText, "Task", 4);
        Ji();
    }
    function kg(a, b, d) {
        P.hasOwnProperty(d) && (T(a) ? (P[d].text = a) : (P[d].text = b));
    }
    function ad(a, b) {
        b = Da(b) ? b : 1;
        return !wa(a) || a.length < b;
    }
    function mb(a, b) {
        Qa(a) || (a = Qa(b) ? b : {});
        return a;
    }
    var r = this,
        D = null,
        ba = null,
        If = null,
        Ba = null,
        na = null,
        dc = null,
        n = { empty: "", space: " ", newLine: "\n", newLineCharacterReturn: "\r\n" },
        A = { notFound: -1 },
        xa = { monday: 0, saturday: 5, sunday: 6 },
        S = {
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
        w = { never: 0, everyDay: 1, everyWeek: 2, every2Weeks: 3, everyMonth: 4, everyYear: 5, custom: 6 },
        O = { daily: 0, weekly: 1, monthly: 2, yearly: 3 },
        b = {},
        u = {},
        P = {
            0: { text: "Normal Label", eventEditorInput: null },
            1: { text: "Meeting Label", eventEditorInput: null },
            2: { text: "Birthday Label", eventEditorInput: null },
            3: { text: "Holiday Label", eventEditorInput: null },
            4: { text: "Task Label", eventEditorInput: null },
        },
        Q = { visibleGroups: null, visibleEventTypes: null, visibleAllEventsMonths: {} },
        nb = !1,
        Yd = !1,
        Me = !1,
        rb = {},
        Cd = {},
        Ga = [],
        la = [],
        Qb = !1,
        Ud = null,
        ea = null,
        bl = {},
        y = null,
        lg = !1,
        Dc = null,
        oe = !1,
        Sj = !1,
        Ie = {},
        Aa = [],
        Pi = {},
        Hb = {},
        ag = !0,
        Oa = {
            windowResize: "WindowResize",
            searchOptionsChanged: "SearchOptionsChanged",
            searchEventsHistoryDropDown: "SearchEventsHistoryDropDown",
            showToolTip: "ShowToolTip",
            autoRefresh: "AutoRefresh",
            hideNotification: "HideNotification",
            sideMenuEvents: "SideMenuEvents",
        },
        ub = null,
        Lb = null,
        mg = !1,
        dd = null,
        Fc = null,
        Jc = null,
        hd = null,
        Kc = null,
        gd = null,
        kd = null,
        Gc = null,
        jd = null,
        Hc = null,
        id = null,
        Ic = null,
        Zd = null,
        Cc = null,
        Re = null,
        q = !1,
        eb = !1,
        ij = null,
        tb = {
            fullMonth: "full-month",
            fullDay: "full-day",
            fullWeek: "full-week",
            fullYear: "full-year",
            timeline: "timeline",
            allEvents: "all-events",
        },
        wb = [],
        zh = 0,
        vg = null,
        wg = null,
        Rb = null,
        xg = null,
        yg = null,
        z = null,
        La = null,
        sd = !1,
        Sk = null,
        pd = [],
        Y = null,
        bf = null,
        xb = null,
        Oc = null,
        ya = null,
        ge = null,
        N = null,
        ic = [],
        Yh = null,
        Bj = null,
        df = null,
        Cj = null,
        Ag = [],
        fa = null,
        Ra = null,
        $h = null,
        Nj = null,
        zd = null,
        yd = null,
        Ad = null,
        le = null,
        ke = null,
        jf = null,
        jc = [],
        kf = {},
        Tb = null,
        Mj = null,
        me = null,
        ci = !1,
        Eg = null,
        mf = 0,
        di = [],
        Jb = null,
        nf = [],
        U = null,
        ne = null,
        Mh = null,
        Ig = null,
        Ub = null,
        of = null,
        Sc = {},
        Gg = null,
        Fg = null,
        ob = null,
        Rc = 0,
        ei = null,
        zc = null,
        fd = [],
        Lh = null,
        Fa = null,
        ki = null,
        ji = null,
        pe = null,
        ta = null,
        Lg = 0,
        sa = null,
        mi = null,
        Tj = null,
        Ed = null,
        Mb = [],
        tg = [],
        ni = [],
        ka = null,
        oi = null,
        Wj = null,
        Vj = null,
        Ta = null,
        tf = null,
        qf = null,
        rf = null,
        Ng = {},
        sf = [],
        Ec = [],
        da = null,
        Mg = null,
        $a = null,
        qe = "location organizerName group organizerEmailAddress url title description".split(" "),
        gb = [],
        Gb = null,
        Ch = 0,
        Dh = 0,
        Vd = !1,
        Yk = 0,
        Zk = 0,
        cb = null,
        Wb = null,
        Vg = null,
        Wg = null,
        Vc = null,
        Ug = null,
        Tc = null,
        Xb = null,
        Yb = null,
        jb = null,
        Zb = null,
        xe = null,
        Jf = null,
        Kf = null,
        Bb = null,
        ui = null,
        Kd = null,
        Ld = null,
        Jd = null,
        ye = null,
        rc = null,
        Lf = null,
        Mf = null,
        Nf = null,
        Of = null,
        Pf = null,
        $b = null,
        Xg = null,
        Hd = null,
        Qf = null,
        Rf = null,
        Sf = null,
        Xc = null,
        ha = {},
        Ff = null,
        Rg = null,
        Id = null,
        wi = null,
        Tf = null,
        sc = null,
        Ae = null,
        Be = null,
        Ce = null,
        tc = null,
        Yg = null,
        Zg = null,
        $g = null,
        ah = null,
        bh = null,
        ch = null,
        dh = null,
        Md = null,
        Yc = null,
        xi = null,
        yi = null,
        Sg = null,
        zi = null,
        Wf = null,
        uc = null,
        Va = null,
        Ai = null,
        rk = null,
        sk = null,
        tk = null,
        uk = null,
        vk = null,
        wk = null,
        xk = null,
        vc = null,
        Db = null,
        ih = null,
        ma = null,
        Pd = null,
        ac = null,
        pa = null,
        kh = null,
        jh = null,
        Fe = null,
        Yf = null,
        Zf = null,
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
        Eb = [],
        $c = 0,
        Di = null,
        Ab = null,
        qb = null,
        Fb = null,
        Qd = null,
        Ge = null,
        Ei = null,
        Fi = null,
        Gi = null,
        Hi = null,
        Ii = null,
        uh = null,
        vh = null,
        xc = null,
        cc = null,
        Ka = null,
        pi = null,
        Og = null,
        Fd = null,
        aa = null,
        bb = null,
        Zj = null,
        Gf = null,
        Ef = null,
        qi = null,
        Df = null,
        Cf = null,
        xf = null,
        Bf = null,
        Af = null,
        zf = null,
        yf = null,
        wf = null,
        vf = null,
        Qg = null,
        Pg = null,
        Pa = null,
        ti = null,
        si = null,
        ri = null,
        Tg = null,
        cf = null,
        te = null,
        pb = null,
        dk = null,
        fk = null,
        gk = null,
        hk = null,
        ek = null,
        V = null,
        yh = null,
        Li = null,
        xh = null,
        Rd = null,
        bg = null,
        Sd = null,
        cg = null,
        dg = null,
        eg = null,
        Td = null,
        Dd = null,
        gc = null;
    r.turnOnFullScreen = function () {
        q || Qk();
        return r;
    };
    r.turnOffFullScreen = function () {
        q || Pk();
        return r;
    };
    r.isFullScreenActivated = function () {
        return sd;
    };
    r.startTheAutoRefreshTimer = function () {
        q || ((ag = !0), Rh());
        return r;
    };
    r.stopTheAutoRefreshTimer = function () {
        q || (Qh(), (ag = !1));
        return r;
    };
    r.destroy = function () {
        if (nb) {
            Me && Ih(!1);
            for (var a in Hb) Hb.hasOwnProperty(a) && null !== Hb[a] && (clearTimeout(Hb[a]), delete Hb[a]);
            a = Aa.length;
            for (var c = 0; c < a; c++) D.body.removeChild(Aa[c]);
            Aa = [];
            q && D.removeEventListener("click", cd);
            b.tooltipsEnabled && document.body.removeEventListener("mousemove", kc);
            p(z) && ((z.className = n.empty), (z.innerHTML = n.empty));
            x(b.events.onDestroy, Ba);
        }
        return r;
    };
    r.moveToPreviousMonth = function () {
        $e();
        return r;
    };
    r.moveToNextMonth = function () {
        af();
        return r;
    };
    r.moveToPreviousYear = function () {
        qg();
        return r;
    };
    r.moveToNextYear = function () {
        rg();
        return r;
    };
    r.moveToToday = function () {
        sg();
        return r;
    };
    r.getCurrentDisplayDate = function () {
        return new Date(y);
    };
    r.setCurrentDisplayDate = function (a) {
        !yc(a) ||
            (q && !eb) ||
            ((a = new Date(a)),
            !W(y, a) &&
                a.getFullYear() >= b.minimumYear &&
                a.getFullYear() <= b.maximumYear &&
                (F(a), x(b.events.onSetDate, a)));
        return r;
    };
    r.getSelectedDatePickerDate = function () {
        return q ? new Date(Dc) : null;
    };
    r.setSelectedDatePickerDate = function (a) {
        yc(a) &&
            q &&
            ((a = new Date(a)),
            kj(a) &&
                !W(a, Dc) &&
                a.getFullYear() >= b.minimumYear &&
                a.getFullYear() <= b.maximumYear &&
                (a.setHours(0, 0, 0, 0), cd(), Ph(a), x(b.events.onDatePickerDateChanged, a), (Dc = a)));
        return r;
    };
    r.refresh = function () {
        q || Ma(!0, !0);
        return r;
    };
    r.export = function (a) {
        b.exportEventsEnabled && !q && ((a = db(a, "csv")), wc(null, a));
        return r;
    };
    r.import = function (a) {
        b.importEventsEnabled && !q && Oi(a);
        return r;
    };
    r.setEvents = function (a, c, d) {
        q || ((d = m(d, !0)), (rb = {}), r.addEvents(a, c, !1), d && x(b.events.onEventsSet, a));
        return r;
    };
    r.setEventsFromJson = function (a, c, d) {
        if (!q) {
            d = m(d, !0);
            var e = Pe(a);
            wa(e) ? r.setEvents(e, c, !1) : Qa(e) && e.hasOwnProperty("events") && r.setEvents(e.events, c, !1);
            d && x(b.events.onEventsSetFromJSON, a);
        }
        return r;
    };
    r.addEvents = function (a, c, d) {
        if (!q) {
            c = m(c, !0);
            d = m(d, !0);
            for (var e = a.length, f = 0; f < e; f++) r.addEvent(a[f], !1, !1, !1);
            lb();
            d && x(b.events.onEventsAdded, a);
            c && (Nb(), Ja(), oa());
        }
        return r;
    };
    r.addEventsFromJson = function (a, c, d) {
        if (!q) {
            d = m(d, !0);
            var e = Pe(a);
            wa(e) ? r.addEvents(e, c, !1) : Qa(e) && e.hasOwnProperty("events") && r.addEvents(e.events, c, !1);
            d && x(b.events.onEventsAddedFromJSON, a);
        }
        return r;
    };
    r.addEvent = function (a, c, d, e) {
        var f = !1;
        if (
            !q &&
            ((e = m(e, !0)),
            T(a.from) && (a.from = new Date(a.from)),
            T(a.to) && (a.to = new Date(a.to)),
            T(a.repeatEnds) && (a.repeatEnds = new Date(a.repeatEnds)),
            T(a.created) && (a.created = new Date(a.created)),
            T(a.lastUpdated) && (a.lastUpdated = new Date(a.lastUpdated)),
            a.color === b.defaultEventBackgroundColor && (a.color = null),
            a.colorText === b.defaultEventTextColor && (a.colorText = null),
            a.colorBorder === b.defaultEventBorderColor && (a.colorBorder = null),
            a.from <= a.to)
        ) {
            var g = a.from;
            g = g.getFullYear() + "-" + g.getMonth() + "-" + g.getDate();
            var h = fc();
            rb.hasOwnProperty(g) || (rb[g] = {});
            if (!rb[g].hasOwnProperty(h)) {
                c = m(c, !0);
                d = m(d, !0);
                f = G(a.title);
                var r = G(a.description),
                    t = G(a.location),
                    u = G(a.group),
                    v = G(a.url);
                if (p(Q.visibleGroups) && !Zc(b.events.onEventsFetch)) {
                    var w = u.toLowerCase();
                    Q.visibleGroups.indexOf(w) === A.notFound && Q.visibleGroups.push(w);
                }
                p(a.id) ? (h = a.id) : (a.id = h);
                0 < b.maximumEventTitleLength &&
                    f !== n.empty &&
                    f.length > b.maximumEventTitleLength &&
                    (a.title = a.title.substring(0, b.maximumEventTitleLength));
                0 < b.maximumEventDescriptionLength &&
                    r !== n.empty &&
                    r.length > b.maximumEventDescriptionLength &&
                    (a.description = a.description.substring(0, b.maximumEventDescriptionLength));
                0 < b.maximumEventLocationLength &&
                    t !== n.empty &&
                    t.length > b.maximumEventLocationLength &&
                    (a.location = a.location.substring(0, b.maximumEventLocationLength));
                0 < b.maximumEventGroupLength &&
                    u !== n.empty &&
                    u.length > b.maximumEventGroupLength &&
                    (a.group = a.group.substring(0, b.maximumEventGroupLength));
                v === n.empty || nk(v) || (a.url = n.empty);
                yc(a.created) || (a.created = new Date());
                e && (a.lastUpdated = new Date());
                rb[g][h] = Uk(a);
                f = !0;
                d && x(b.events.onEventAdded, a);
                c && (lb(), Nb(), Ja(), oa());
            }
        }
        return f;
    };
    r.updateEvents = function (a, c, d) {
        if (!q) {
            c = m(c, !0);
            d = m(d, !0);
            for (var e = a.length, f = 0; f < e; f++) {
                var g = a[f];
                r.updateEvent(g.id, g, !1, !1);
            }
            d && x(b.events.onEventsUpdated, a);
            c && (lb(), Nb(), Ja(), oa());
        }
        return r;
    };
    r.updateEvent = function (a, c, d, e) {
        var f = !1;
        !q &&
            (f = r.removeEvent(a, !1, !1)) &&
            ((d = m(d, !0)), (e = m(e, !0)), (f = r.addEvent(c, d, !1)), lb(), f && e && x(b.events.onEventUpdated, c));
        return f;
    };
    r.updateEventDateTimes = function (a, c, d, e, f, g) {
        var h = !1;
        q ||
            ((f = m(f, !0)),
            (g = m(g, !0)),
            yb(function (k) {
                if (k.id === a)
                    return (
                        (k.from = c),
                        (k.to = d),
                        (k.repeatEnds = e),
                        (h = !0),
                        g && x(b.events.onEventUpdated, k),
                        f && (lb(), Nb(), Ja(), oa()),
                        !0
                    );
            }));
        return h;
    };
    r.removeEvent = function (a, c, d) {
        var e = !1;
        q ||
            ((c = m(c, !0)),
            (d = m(d, !0)),
            yb(function (f, g, h) {
                if (h === a)
                    return (
                        delete rb[g][h], (e = !0), d && x(b.events.onEventRemoved, f), c && (lb(), Nb(), Ja(), oa()), !0
                    );
            }));
        return e;
    };
    r.clearEvents = function (a, c) {
        q ||
            ((a = m(a, !0)),
            (c = m(c, !0)),
            (rb = {}),
            c && x(b.events.onEventsCleared),
            a && (lb(), Nb(), Ja(), oa()));
        return r;
    };
    r.getEvents = function () {
        var a = [];
        q || (a = vb(Bd()));
        return a;
    };
    r.getEvent = function (a) {
        var b = null;
        T(a) &&
            !q &&
            yb(function (c) {
                if (c.id === a) return (b = c), !0;
            });
        return b;
    };
    r.removeExpiredEvents = function (a, b) {
        q ||
            ((a = m(a, !0)),
            (b = m(b, !0)),
            yb(function (a) {
                H(a.repeatEvery) === w.never && a.to < new Date() && r.removeEvent(a.id, !1, b);
            }),
            a && (lb(), Nb(), Ja(), oa()));
        return r;
    };
    r.addEventType = function (a, b) {
        var c = !1;
        Da(a) &&
            T(b) &&
            !q &&
            !P.hasOwnProperty(a) &&
            ((P[a] = { text: b, eventEditorInput: null }),
            p(Q.visibleEventTypes) && Q.visibleEventTypes.push(a),
            (c = !0));
        return c;
    };
    r.removeEventType = function (a) {
        var b = !1;
        Da(a) && !q && P.hasOwnProperty(a) && (delete P[a], (b = !0));
        return b;
    };
    r.setVisibleEventTypes = function (a, c) {
        if (wa(a) && !q) {
            c = m(c, !0);
            Q.visibleEventTypes = [];
            for (var d = a.length, e = 0; e < d; e++)
                Q.visibleEventTypes.indexOf(a[e]) === A.notFound && Q.visibleEventTypes.push(a[e]);
            Ma(!0, !1);
            c && x(b.events.onVisibleEventTypesChanged, Q.visibleEventTypes);
        }
        return r;
    };
    r.getAllGroups = function () {
        return gj();
    };
    r.clearAllGroups = function (a, c) {
        q ||
            ((a = m(a, !0)),
            (c = m(c, !0)),
            yb(function (a) {
                a.group = null;
            }),
            c && x(b.events.onGroupsCleared),
            a && (Nb(), Ja(), oa()));
        return r;
    };
    r.removeGroup = function (a, c, d) {
        if (T(a) && !q) {
            c = m(c, !0);
            d = m(d, !0);
            var e = a.toLowerCase();
            yb(function (a) {
                null !== a.group && a.group.toLowerCase() === e && (a.group = null);
            });
            d && x(b.events.onGroupRemoved, a);
            c && (Nb(), Ja(), oa());
        }
        return r;
    };
    r.setVisibleGroups = function (a, c) {
        if (wa(a) && !q) {
            c = m(c, !0);
            Q.visibleGroups = [];
            for (var d = a.length, e = 0; e < d; e++) {
                var f = a[e].toLowerCase();
                Q.visibleGroups.indexOf(f) === A.notFound && Q.visibleGroups.push(f);
            }
            Ma(!0, !1);
            c && x(b.events.onVisibleGroupsChanged, Q.visibleGroups);
        }
        return r;
    };
    r.setClipboardEvent = function (a) {
        Qa(a) && !q && (la = [se(a)]);
        return r;
    };
    r.setClipboardEvents = function (a) {
        if (wa(a) && !q) {
            la = [];
            for (var b = a.length, d = 0; d < b; d++) la.push(se(a[d]));
        }
        return r;
    };
    r.getClipboardEvents = function () {
        var a = null;
        q || (a = la);
        return a;
    };
    r.clearClipboard = function () {
        q || (la = []);
        return r;
    };
    r.getVersion = function () {
        return "2.12.4";
    };
    r.getId = function () {
        return Ba;
    };
    r.isBusy = function () {
        return oe;
    };
    r.getCurrentView = function () {
        return pf(!1);
    };
    r.setOptions = function (a, c) {
        for (var d in a) a.hasOwnProperty(d) && (b[d] = a[d]);
        il(b);
        dj();
        Ji();
        nb && ((c = m(c, !0)) && x(b.events.onOptionsUpdated, b), (nb = !1), (q && !eb) || F(y, !0, !0));
        return r;
    };
    r.setSearchOptions = function (a, c) {
        if (!q) {
            a = mb(a);
            c = m(c, !0);
            ld();
            for (var d in a) a.hasOwnProperty(d) && (u[d] = a[d]);
            c && x(b.events.onSearchOptionsUpdated, u);
        }
        return r;
    };
    r.addHolidays = function (a, c, d) {
        wa(a) &&
            !q &&
            ((c = m(c, !0)),
            (d = m(d, !0)),
            (b.holidays = b.holidays.concat(a)),
            c && x(b.events.onOptionsUpdated, b),
            d && F(y, !0, !0));
        return r;
    };
    r.removeHolidays = function (a, c, d) {
        if (wa(a) && !q) {
            c = m(c, !0);
            d = m(d, !0);
            for (var e = b.holidays.length, f = [], g = 0; g < e; g++) {
                var h = b.holidays[g],
                    p = G(h.title, n.empty);
                a.indexOf(p) === A.notFound && f.push(h);
            }
            b.holidays = f;
            c && x(b.events.onOptionsUpdated, b);
            d && F(y, !0, !0);
        }
        return r;
    };
    r.getHolidays = function () {
        return b.holidays;
    };
    (function (a, c, d, e, f) {
        D = a;
        ba = c;
        If = d;
        na = e;
        dc = f;
        Ba = K;
        if (T(Ba) || cj(Ba))
            il(va),
                (u = mb(X, b.searchOptions)),
                (u.enabled = m(u.enabled, !0)),
                (u.lastSearchText = db(u.lastSearchText, n.empty)),
                (u.not = m(u.not, !1)),
                (u.matchCase = m(u.matchCase, !1)),
                (u.showAdvanced = m(u.showAdvanced, !1)),
                (u.searchTitle = m(u.searchTitle, !0)),
                (u.searchLocation = m(u.searchLocation, !1)),
                (u.searchDescription = m(u.searchDescription, !1)),
                (u.searchGroup = m(u.searchGroup, !1)),
                (u.searchUrl = m(u.searchUrl, !1)),
                (u.startsWith = m(u.startsWith, !1)),
                (u.endsWith = m(u.endsWith, !1)),
                (u.contains = m(u.contains, !0)),
                (u.left = ua(u.left, null)),
                (u.top = ua(u.top, null)),
                (u.history = hg(u.history, [])),
                F(b.initialDateTime, !0),
                null !== z && kb(b.openInFullScreenMode) && b.openInFullScreenMode && !q && Rk();
    })(document, window, navigator, Math, JSON);
};