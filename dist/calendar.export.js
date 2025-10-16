/*! Calendar.js v2.12.3 | (c) Bunoon 2025 | MIT License */
export function calendarJs(J, va, X) {
    function F(a, c, d) {
        v = yc(a) ? a : new Date();
        c = p(c) ? c : !1;
        d = p(d) ? d : !1;
        a = c;
        if (b.isWidget)
            (kg = ec(v)),
                nb || (Xd(!0), null !== z && (Ui(), Vi(), Wi(), Xi(), Yi(), Le || (Gh(), (Le = !0)), Zi(), Wd(), Ke())),
                il();
        else {
            v.setDate(1);
            v.setHours(0, 0, 0, 0);
            c = v;
            var e = new Date();
            kg = c.getFullYear() === e.getFullYear() && c.getMonth() === e.getMonth();
            c = new Date(v.getFullYear(), v.getMonth(), 1);
            e = Me(0 === c.getDay() ? 7 : c.getDay());
            c = !Yd;
            Ne() && Ib();
            Ha();
            if (!nb && (Xd(), null !== z)) {
                m ||
                    (null === Zd &&
                        ((Zd = g("div", "side-menu-disabled-background")), (Zd.onclick = Ib), z.appendChild(Zd)),
                    jl());
                kl();
                ll();
                null === Jb && ((Jb = g("div", "full-month-view")), (Jb.id = fc()), z.appendChild(Jb));
                ml();
                if (!m) {
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
                      m && (zc.onclick = D),
                      Hh(zc))
                    : f && (Jb.removeChild(zc), (zc = null));
                $i();
                nl();
                ol();
                pl();
                Le || (Gh(), (Le = !0));
                Wd();
                Ke();
            }
            if (1 < e) {
                f = new Date(v);
                f.setMonth(f.getMonth() - 1);
                k = bd(f.getFullYear(), f.getMonth());
                for (var l = 1, E = k - e + 1; E < k; E++) {
                    var K = E === k - 1;
                    Ih(E + 1, l, f.getMonth(), f.getFullYear(), !0, K);
                    l++;
                }
            }
            f = 0;
            k = bd(v.getFullYear(), v.getMonth());
            for (l = 0; l < k; l++) (f = e + l), Ih(l + 1, f, v.getMonth(), v.getFullYear(), !1);
            k = f;
            if (42 > k) {
                f = 1;
                e = new Date(v);
                e.setMonth(e.getMonth() + 1);
                for (k += 1; 43 > k; k++) (l = 1 === f), Ih(f, k, e.getMonth(), e.getFullYear(), !0, l), f++;
                f = bd(e.getFullYear(), e.getMonth());
                f = na.round(f / 2);
                Jh = new Date(e.getFullYear(), e.getMonth(), f);
            } else Jh = null;
            Ia();
            a &&
                (Ui(),
                Vi(),
                Wi(),
                Xi(),
                Yi(),
                ql(),
                rl(),
                sl(),
                tl(),
                Zi(),
                m || (ul(), vl(), wl(), xl()),
                null !== gc || m || ((gc = g("div", "calendar-notification")), Aa.push(gc), C.body.appendChild(gc)));
            d && La(!0, !1);
            null !== z &&
                ((Kh.innerText = Lh(b.views.fullMonth.titleBarDateFormat, v)),
                c &&
                    T(b.viewToOpenOnFirstLoad) &&
                    (b.viewToOpenOnFirstLoad.toLowerCase() === tb.fullDay && b.views.fullDay.enabled
                        ? Va()
                        : b.viewToOpenOnFirstLoad.toLowerCase() === tb.fullWeek && b.views.fullWeek.enabled
                          ? Ac()
                          : b.viewToOpenOnFirstLoad.toLowerCase() === tb.fullYear && b.views.fullYear.enabled
                            ? Bc()
                            : b.viewToOpenOnFirstLoad.toLowerCase() === tb.timeline && b.views.timeline.enabled
                              ? Kb()
                              : b.viewToOpenOnFirstLoad.toLowerCase() === tb.allEvents &&
                                b.views.allEvents.enabled &&
                                Mh()));
        }
    }
    function Wd() {
        wa(b.data) && r.addEvents(b.data, !1, !1, !1);
        if (b.useLocalStorageForEvents && ba.localStorage)
            for (var a = ba.localStorage.length, c = 0; c < a; c++) {
                var d = ba.localStorage.getItem(ba.localStorage.key(c));
                d = Oe(d);
                p(d) && r.addEvent(d, !1, !1, !1);
            }
        aj();
    }
    function Ke() {
        nb = !0;
        Yd || (x(b.events.onRender, Ba), (Yd = !0));
    }
    function Xd(a) {
        a = p(a) ? a : !1;
        if (null === z) {
            if (bj(Ba)) {
                var c = Ba;
                Ba = c.id;
                T(Ba) || (Ba = fc());
            } else c = Ca(Ba);
            null !== c &&
                ("input" !== c.tagName.toLowerCase() || ("text" !== c.type && "date" !== c.type)
                    ? ((z = c),
                      (z.className = a ? "calendar-widget" : "calendar"),
                      (z.innerHTML = n.empty),
                      100 <= Pe(z, "height")
                          ? (z.className += n.space + "fixed-height")
                          : z.style.removeProperty("height"))
                    : ((Qe = a = c),
                      hc(Qe, "hidden"),
                      (Cc = g("input", "calendar-date-picker-input")),
                      (Cc.readOnly = !0),
                      (Cc.placeholder = b.selectDatePlaceholderText),
                      (m = !0),
                      (c = g("div", "calendar-date-picker")),
                      a.insertAdjacentElement("afterend", c),
                      a.remove(a),
                      c.appendChild(Qe),
                      c.appendChild(Cc),
                      (z = g("div", "calendar calendar-hidden")),
                      (z.id = Ba),
                      c.appendChild(z),
                      (Cc.onclick = yl),
                      C.addEventListener("click", cd),
                      cj(),
                      (c = Qe.value.split("/")),
                      (a = null),
                      3 === c.length &&
                          ((c = new Date(parseInt(c[2]), parseInt(c[1]) - 1, parseInt(c[0]))),
                          c instanceof Date && !isNaN(c) && (a = c)),
                      null === a ? (a = new Date()) : Nh(a),
                      a.setHours(0, 0, 0, 0),
                      (Dc = a)));
        }
    }
    function jl() {
        Yd ||
            ((ub = g("div", "side-menu custom-scroll-bars dark-thumb-scroll")),
            (ub.onclick = D),
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
                dj();
            });
        ((b.configurationDialogEnabled && b.exportEventsEnabled) ||
            (b.importEventsEnabled && b.manualEditingEnabled)) &&
            Lb.appendChild(g("div", "right-divider-line"));
        b.exportEventsEnabled &&
            (dd = t(Lb, "ib-arrow-down-full-line", b.exportEventsTooltipText, function () {
                var a = Ma();
                null === a ? ed(fd) : a === Y ? ed(ic) : a === ea ? ed(jc) : a === ka ? ed(Ec) : a === sa && ed(Mb);
            }));
        b.importEventsEnabled &&
            b.manualEditingEnabled &&
            t(Lb, "ib-arrow-up-full-line", b.importEventsTooltipText, zl);
        Yd || ((Fc = g("div", "content")), ub.appendChild(Fc));
    }
    function ej(a) {
        var c = Re(Gc) || !0 === a,
            d = Re(gd, !0),
            e = Re(hd, !0),
            f = Re(Hc, !0);
        a = Re(Ic, !0);
        Fc.innerHTML = n.empty;
        Ic = id = Hc = jd = hd = Jc = gd = Kc = Gc = kd = null;
        ld();
        var k = Ma();
        null === k
            ? Wa(dd, 0 < fd.length)
            : k === Y
              ? Wa(dd, 0 < ic.length)
              : k === sa
                ? Wa(dd, 0 < Mb.length)
                : k === ea
                  ? Wa(dd, 0 < jc.length)
                  : k === ka
                    ? Wa(dd, 0 < Ec.length)
                    : Wa(dd, !1);
        if (b.sideMenu.showDays) {
            var l = c;
            l = p(l) ? l : !0;
            kd = g("div", "content-section content-section-opened");
            Gc = g("div", "checkbox-container");
            Fc.appendChild(kd);
            c = 0;
            k = 7;
            var E = !1,
                K = [];
            Se(kd, Gc, b.sideMenuDaysText, l, K);
            kd.appendChild(Gc);
            if (b.startOfWeekDay === xa.saturday || b.startOfWeekDay === xa.sunday) (c = b.startOfWeekDay), (E = !0);
            for (; c < k; c++)
                (l = b.visibleDays.indexOf(c) > A.notFound),
                    K.push(L(Gc, b.dayNames[c], Lc, c.toString(), l, null, Mc)[0]);
            if (E)
                for (k = b.startOfWeekDay, c = 0; c < k; c++)
                    (E = b.visibleDays.indexOf(c) > A.notFound),
                        K.push(L(Gc, b.dayNames[c], Lc, c.toString(), E, null, Mc)[0]);
            b.reverseOrderDaysOfWeek && md(Gc);
        }
        if (b.sideMenu.showEventTypes) {
            d = p(d) ? d : !0;
            gd = Kc = null;
            c = !1;
            k = [];
            for (var h in O)
                O.hasOwnProperty(h) &&
                    (c ||
                        ((Kc = g("div", "content-section content-section-opened")),
                        Fc.appendChild(Kc),
                        (gd = g("div", "checkbox-container")),
                        Se(Kc, gd, b.eventTypesText, d, k),
                        Kc.appendChild(gd),
                        (c = !0)),
                    (K = !0),
                    p(Q.visibleEventTypes) && (K = Q.visibleEventTypes.indexOf(parseInt(h)) > A.notFound),
                    k.push(L(gd, O[h].text, Lc, h, K, null, Mc)[0]));
        }
        if (
            b.sideMenu.showGroups &&
            ((c = e), (c = p(c) ? c : !0), (hd = Jc = null), (h = fj()), (e = h.length), 0 < e)
        )
            for (
                d = [],
                    Jc = g("div", "content-section content-section-opened"),
                    hd = g("div", "checkbox-container"),
                    Fc.appendChild(Jc),
                    Se(Jc, hd, b.groupsText, c, d),
                    Jc.appendChild(hd),
                    c = 0;
                c < e;
                c++
            )
                (k = h[c]),
                    (K = k.toLowerCase()),
                    (E = !0),
                    p(Q.visibleGroups) && (E = Q.visibleGroups.indexOf(K) > A.notFound),
                    d.push(L(hd, k, Lc, K, E, null, Mc)[0]);
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
            Se(jd, Hc, b.workingDaysText, c, e);
            jd.appendChild(Hc);
            if (b.startOfWeekDay === xa.saturday || b.startOfWeekDay === xa.sunday) (f = b.startOfWeekDay), (d = !0);
            for (; f < h; f++)
                (c = b.workingDays.indexOf(f) > A.notFound),
                    e.push(L(Hc, b.dayNames[f], Lc, f.toString(), c, null, Mc)[0]);
            if (d)
                for (h = b.startOfWeekDay, f = 0; f < h; f++)
                    (d = b.workingDays.indexOf(f) > A.notFound),
                        e.push(L(Hc, b.dayNames[f], Lc, f.toString(), d, null, Mc)[0]);
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
            Se(id, Ic, b.weekendDaysText, d, h);
            id.appendChild(Ic);
            if (b.startOfWeekDay === xa.saturday || b.startOfWeekDay === xa.sunday)
                (a = b.startOfWeekDay + 1), (e = !0);
            for (; a < f; a++)
                (d = 6 < a ? 0 : a),
                    (c = b.weekendDays.indexOf(d) > A.notFound),
                    h.push(L(Ic, b.dayNames[a - 1], Lc, d.toString(), c, null, Mc)[0]);
            if (e)
                for (f = b.startOfWeekDay + 1, a = 1; a < f; a++)
                    (e = 6 < a ? 0 : a),
                        (d = b.weekendDays.indexOf(e) > A.notFound),
                        h.push(L(Ic, b.dayNames[a - 1], Lc, e.toString(), d, null, Mc)[0]);
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
        Ne() && ej();
    }
    function Nc(a) {
        ej(p(a) ? a : !1);
        lg = !1;
        ub.className += " side-menu-open";
        Zd.style.display = "block";
        od(
            Na.sideMenuEvents,
            function () {
                C.body.addEventListener("click", Ib);
            },
            500,
            !1
        );
    }
    function Ib() {
        if (null !== ub) {
            ub.className = "side-menu custom-scroll-bars";
            Zd.style.display = "none";
            if (lg) {
                var a = !1,
                    c = !1;
                if (null !== Jc) {
                    var d = Te(Jc);
                    $d(Q.visibleGroups, d) ||
                        ((Q.visibleGroups = [].slice.call(d)),
                        (c = !0),
                        x(b.events.onVisibleGroupsChanged, Q.visibleGroups));
                }
                null !== Kc &&
                    ((d = Te(Kc, !0)),
                    $d(Q.visibleEventTypes, d) ||
                        ((Q.visibleEventTypes = [].slice.call(d)),
                        (c = !0),
                        x(b.events.onVisibleEventTypesChanged, Q.visibleEventTypes)));
                null !== kd &&
                    ((d = Te(kd, !0)),
                    1 <= d.length &&
                        !$d(b.visibleDays, d) &&
                        ((b.visibleDays = [].slice.call(d)), (pd = []), (c = a = !0)));
                null !== jd &&
                    ((d = Te(jd, !0)), $d(b.workingDays, d) || ((b.workingDays = [].slice.call(d)), (c = a = !0)));
                null !== id && ((d = Te(id, !0)), $d(b.weekendDays, d) || ((b.weekendDays = d), (c = a = !0)));
                c && (a && x(b.events.onOptionsUpdated, b), (nb = !1), F(v, !0, !0));
            }
            kc();
            C.body.removeEventListener("click", Ib);
        }
    }
    function Ne() {
        return null !== ub && ub.className.indexOf("side-menu-open") > A.notFound;
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
        var k = g("div", "text-header");
        a.appendChild(k);
        y(k, d + ":");
        var l = g("div", "ib-arrow-up-full");
        k.appendChild(l);
        var E = g("div", "right-divider-line");
        k.appendChild(E);
        var K = t(k, "ib-square", b.selectAllText, function (a) {
                gj(a, f, !0);
            }),
            h = t(k, "ib-square-hollow", b.selectNoneText, function (a) {
                gj(a, f, !1);
            });
        k.onclick = function () {
            var b = "none" === c.style.display;
            k.className = b ? "text-header" : "text-header-closed";
            c.style.display = b ? "block" : "none";
            l.className = b ? "ib-arrow-up-full" : "ib-arrow-down-full";
            a.className = b ? "content-section content-section-opened" : "content-section";
            E.style.display = b ? "block" : "none";
            K.style.display = b ? "block" : "none";
            h.style.display = b ? "block" : "none";
        };
        e ||
            ((c.style.display = "none"),
            (k.className = "text-header-closed"),
            (l.className = "ib-arrow-down-full"),
            (a.className = "content-section"),
            (E.style.display = "none"),
            (K.style.display = "none"),
            (h.style.display = "none"));
        return [K, h];
    }
    function gj(a, b, d) {
        D(a);
        a = b.length;
        for (var c = !1, f = 0; f < a; f++) b[f].checked !== d && ((b[f].checked = d), (c = !0));
        lg = c;
    }
    function Re(a, b) {
        return b && null === a ? !1 : null === a || "none" !== a.style.display;
    }
    function Lc() {
        lg = !0;
    }
    function il() {
        Oh();
        z.innerHTML = n.empty;
        var a = Z(v),
            c = g("div", "day-name");
        y(c, b.dayNames[a]);
        z.appendChild(c);
        t(c, "ib-arrow-right-full", b.nextDayTooltipText, Al);
        t(c, "ib-arrow-left-full", b.previousDayTooltipText, Bl);
        c.appendChild(g("div", "right-divider-line"));
        b.manualEditingEnabled &&
            t(c, "ib-plus", b.addEventTooltipText, function () {
                R(null, new Date(v));
            });
        t(c, "ib-pin", b.todayTooltipText, Cl);
        a = g("div", "day-date");
        lc(a, v, !1, !0, !1);
        z.appendChild(a);
        Dl();
        Ph();
    }
    function Dl() {
        var a = g("div", "events custom-scroll-bars"),
            c = [];
        z.appendChild(a);
        Qh(v, c);
        c = vb(c);
        var d = c.length;
        if (0 < d)
            for (var e = 0; e < d; e++) {
                var f = a,
                    k = c[e],
                    l = g("div", "event");
                f.appendChild(l);
                ae(l, k, Ue(k, v));
                be(l, k);
                l.id = "widget-day-" + k.id;
                l.setAttribute("event-type", I(k.type));
                l.setAttribute("event-id", k.id);
                l.setAttribute("event-is-all-day", k.isAllDay);
                if (!x(b.events.onWidgetEventRender, l, k)) {
                    var E = g("div", "title");
                    if (I(k.repeatEvery) > w.never && b.showReoccurringEventIcons) {
                        var K = g("div", "ib-refresh-medium ib-no-hover ib-no-active");
                        K.style.borderColor = l.style.color;
                        E.appendChild(K);
                    }
                    E.innerHTML += mc(k.title);
                    l.appendChild(E);
                    E = g("div", "date");
                    l.appendChild(E);
                    K = g("div", "duration");
                    l.appendChild(K);
                    k.from.getDate() === k.to.getDate()
                        ? k.isAllDay
                            ? Ob(E, k.from, null, " - " + b.allDayText)
                            : (Ob(E, k.from, null, " - " + ce(k.from, k.to)), y(K, Pb(k.from, k.to)))
                        : (Ve(E, k.from, k.to), y(K, Pb(k.from, k.to)));
                    K.innerHTML === n.empty && l.removeChild(K);
                    Da(k.repeatEvery) &&
                        k.repeatEvery > w.never &&
                        ((E = g("div", "repeats")),
                        y(E, b.repeatsText.replace(":", n.empty) + n.space + qd(k.repeatEvery)),
                        l.appendChild(E));
                    Xa(k.location) && ((E = g("div", "location")), y(E, k.location), l.appendChild(E));
                    Xa(k.description) && ((E = g("div", "description")), y(E, k.description), l.appendChild(E));
                }
                f.scrollHeight > f.clientHeight &&
                    f.className.indexOf(" scroll-margin") === A.notFound &&
                    (f.className += " scroll-margin");
            }
        else ra(a, b.noEventsAvailableFullText);
    }
    function Cl(a) {
        D(a);
        F();
    }
    function Al(a) {
        D(a);
        a = new Date(v);
        a.setDate(a.getDate() + 1);
        a.getFullYear() <= b.maximumYear && F(a);
    }
    function Bl(a) {
        D(a);
        a = new Date(v);
        a.setDate(a.getDate() - 1);
        a.getFullYear() >= b.minimumYear && F(a);
    }
    function cj() {
        m &&
            ((b.exportEventsEnabled = !1),
            (b.manualEditingEnabled = !1),
            (b.fullScreenModeEnabled = !1),
            (b.eventNotificationsEnabled = !1),
            (b.views.fullMonth.showPreviousNextMonthNames = !1),
            (b.views.fullMonth.showExtraTitleBarButtons = !1),
            (b.holidays = []));
    }
    function yl(a) {
        D(a);
        mg("calendar calendar-shown", "calendar calendar-hidden");
        if (eb) (z.className = "calendar calendar-hidden"), Ha(), x(b.events.onDatePickerClosed, Ba);
        else {
            z.className = "calendar calendar-shown";
            F(new Date(Dc), !nb);
            x(b.events.onDatePickerOpened, Ba);
            a = hj;
            null === a && (a = hj = z.offsetTop);
            z.style.top = a + "px";
            var c = We(z),
                d = ij();
            c.top - d.top + z.offsetHeight > ba.innerHeight
                ? ((c = Pe(z, "border-width")),
                  (d = Pe(Cc, "border-width")),
                  (a -= z.offsetHeight + Cc.clientHeight + 4 * c + 2 * d),
                  (z.className += " calendar-shadow-top"),
                  (z.style.top = a + "px"))
                : (z.className += " calendar-shadow-bottom");
        }
        eb = !eb;
    }
    function cd() {
        eb && ((z.className = "calendar calendar-hidden"), (eb = !1), Ha(), x(b.events.onDatePickerClosed, Ba));
    }
    function Nh(a) {
        Cc.value = Lh(b.views.datePicker.selectedDateFormat, a);
        Qe.value = a.getFullYear() + "-" + P(a.getMonth() + 1) + "-" + P(a.getDate());
    }
    function jj(a) {
        var c = !0;
        null !== b.views.datePicker.minimumDate && (c = Xe(b.views.datePicker.minimumDate, a));
        c && null !== b.views.datePicker.maximumDate && (c = Xe(a, b.views.datePicker.maximumDate));
        return c;
    }
    function Gh(a) {
        var c = (a = p(a) ? a : !0) ? C.body.addEventListener : C.body.removeEventListener,
            d = a ? C.addEventListener : C.removeEventListener;
        a = a ? ba.addEventListener : ba.removeEventListener;
        c("click", El);
        c("contextmenu", Rh);
        c("mousemove", Fl);
        c("mouseup", Sh);
        c("mouseleave", Gl);
        d("scroll", Rh);
        a("resize", Rh);
        a("resize", Th);
        a("resize", Hl);
        a("blur", Il);
        b.shortcutKeysEnabled && d("keydown", Jl);
    }
    function El(a) {
        Ha();
        ia(a) || nc();
    }
    function Il() {
        Ha();
        kc();
        m && cd();
    }
    function Hl() {
        rd(Na.windowResize);
        od(
            Na.windowResize,
            function () {
                La(!0, !1);
            },
            50,
            !1
        );
    }
    function Rh() {
        Ha();
    }
    function Ha(a) {
        var b = !1;
        a = p(a) ? a : !0;
        ng(Ja) && (b = !0);
        ng(aa) && (b = !0);
        ng(Oa) && (b = !0);
        ng(pb) && (b = !0);
        og() && (b = !0);
        kc();
        mg("calendar-context-menu");
        mg("years-drop-down");
        mg("years-drop-down-no-months");
        a && Ye();
        return b;
    }
    function Jl(a) {
        if (m)
            eb &&
                (a.keyCode === S.escape
                    ? (a.preventDefault(), cd())
                    : ia(a) && a.keyCode === S.left
                      ? (a.preventDefault(), pg())
                      : ia(a) && a.keyCode === S.right
                        ? (a.preventDefault(), qg())
                        : a.keyCode === S.left
                          ? (a.preventDefault(), Ze())
                          : a.keyCode === S.right
                            ? (a.preventDefault(), $e())
                            : a.keyCode === S.down && (a.preventDefault(), rg()));
        else if (Ne()) a.keyCode === S.escape && Ne() && (a.preventDefault(), Ib());
        else {
            if (sd) {
                var c = kj();
                ia(a) && a.keyCode === S.left && c
                    ? (a.preventDefault(), pg())
                    : ia(a) && a.keyCode === S.right && c
                      ? (a.preventDefault(), qg())
                      : a.keyCode === S.escape
                        ? !lj() && c && b.useEscapeKeyToExitFullScreenMode && Ya()
                        : a.keyCode === S.left && c
                          ? (a.preventDefault(),
                            (c = Ma()),
                            null === c ? Ze() : c === Y ? mj() : c === ea ? nj() : c === Ea ? oj() : c === ka && pj())
                          : a.keyCode === S.right && c
                            ? (a.preventDefault(),
                              (c = Ma()),
                              null === c ? $e() : c === Y ? qj() : c === ea ? rj() : c === Ea ? sj() : c === ka && tj())
                            : a.keyCode === S.down && c
                              ? (a.preventDefault(),
                                (c = Ma()),
                                null === c
                                    ? rg()
                                    : c === Y
                                      ? uj()
                                      : c === ea
                                        ? vj()
                                        : c === Ea
                                          ? wj()
                                          : c === ka && xj())
                              : a.keyCode === S.f5 && c && La(!1, !0);
            } else a.keyCode === S.escape && lj();
            if (ia(a) && a.shiftKey && a.keyCode === S.a)
                a.preventDefault(), b.manualEditingEnabled && R(null, new Date());
            else if (ia(a) && a.shiftKey && a.keyCode === S.c) a.preventDefault(), yj();
            else if (ia(a) && a.shiftKey && a.keyCode === S.e)
                a.preventDefault(),
                    b.exportEventsEnabled &&
                        ((a = []),
                        (c = Ma()),
                        null === c
                            ? (a = fd)
                            : c === Y
                              ? (a = ic)
                              : c === ea
                                ? (a = jc)
                                : c === ka
                                  ? (a = Ec)
                                  : c === sa && (a = Mb),
                        0 < a.length && ed(a));
            else if (ia(a) && a.shiftKey && a.keyCode === S.g) a.preventDefault(), b.configurationDialogEnabled && dj();
            else if (ia(a) && a.shiftKey && a.keyCode === S.j) a.preventDefault(), de();
            else if (ia(a) && a.shiftKey && a.keyCode === S.f)
                a.preventDefault(),
                    (a = !1),
                    (c = Ma()),
                    null === c
                        ? (a = 0 < fd.length)
                        : c === Y
                          ? (a = 0 < ic.length)
                          : c === ea
                            ? (a = 0 < Mb.length)
                            : c === Ea
                              ? (a = 0 < jc.length)
                              : c === ka && (a = 0 < Ec.length),
                    a && ee();
            else if (ia(a) && a.shiftKey && a.keyCode === S.m) {
                if ((a.preventDefault(), fb(sa))) for (a = sg.length, c = 0; c < a; c++) sg[c]();
            } else
                ia(a) && a.shiftKey && a.keyCode === S.o
                    ? (a.preventDefault(), nd() && Nc())
                    : ia(a) && a.shiftKey && a.keyCode === S.v
                      ? (a.preventDefault(), (a = la.length), fb(Y) && 0 < a && Uh(M, Qb))
                      : ia(a) && a.shiftKey && a.keyCode === S.x
                        ? (a.preventDefault(), yj(!0))
                        : ia(a) && a.shiftKey && a.keyCode === S.f11 && (a.preventDefault(), Ya());
        }
    }
    function ia(a) {
        return a.ctrlKey || a.metaKey;
    }
    function lj() {
        var a = Ha(!1);
        a || (a = Ye());
        !a && 0 < gb.length && ((a = gb[gb.length - 1]), Vh(a) && (gb.pop(), a(!1)), (a = !0));
        a || (a = ld());
        a || (a = nc());
        !a && 0 < la.length && (fe(), (la = []), (Qb = !1), (a = !0));
        !a && 0 < wb.length && (zj(), (a = !0));
        return a;
    }
    function kl() {
        if (!m && b.views.fullDay.enabled) {
            var a = null !== Y;
            a && (Y.innerHTML = n.empty);
            a || ((Y = g("div", "full-day-view")), (Y.id = fc()), z.appendChild(Y));
            a = g("div", "title-bar");
            Y.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Ya);
            af = g("div", "title");
            a.appendChild(af);
            t(a, "ib-close", b.closeTooltipText, Kl);
            a.appendChild(g("div", "right-divider-line"));
            b.views.fullDay.showExtraTitleBarButtons &&
                b.fullScreenModeEnabled &&
                ((Wh = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Ya)),
                a.appendChild(g("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextDayTooltipText, qj);
            b.manualEditingEnabled &&
                b.views.fullDay.showExtraTitleBarButtons &&
                t(a, "ib-plus", b.addEventTooltipText, function () {
                    if (b.useTemplateWhenAddingNewEvent) {
                        var a = td(M, M);
                        R(a);
                        ud();
                    } else R(null, M);
                });
            b.views.timeline.enabled &&
                (a.appendChild(g("div", "right-divider-line-views")),
                t(a, "ib-bar-graph", b.viewTimelineTooltipText, function () {
                    Kb(M, !0);
                }));
            !m &&
                nd() &&
                (t(a, "ib-hamburger", b.showMenuTooltipText, Nc), a.appendChild(g("div", "left-divider-line")));
            t(a, "ib-arrow-left-full", b.previousDayTooltipText, mj);
            b.views.fullDay.showExtraTitleBarButtons &&
                ((Aj = t(a, "ib-pin", b.todayTooltipText, uj)),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        de();
                    }),
                a.appendChild(g("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    La(!0, !0);
                }),
                u.enabled && (Bj = t(a, "ib-search", b.searchTooltipText, ee)));
            xb = g("div", "contents custom-scroll-bars");
            Y.appendChild(xb);
            xb.oncontextmenu = function (a) {
                var b = tg(a, ya);
                bf = P(b[0]) + ":" + P(b[1]);
                Cj(a, M, ic);
            };
            Oc = g("div", "content-events-all-day");
            xb.appendChild(Oc);
            a = g("div", "all-day-text");
            y(a, b.allDayText);
            Oc.appendChild(a);
            ya = g("div", "contents-events");
            ya.ondblclick = Ll;
            xb.appendChild(ya);
            ge = g("div", "working-hours");
            xb.appendChild(ge);
            b.manualEditingEnabled &&
                b.dragAndDropForEventsEnabled &&
                ((ya.ondragover = D),
                (ya.ondragenter = D),
                (ya.ondragleave = D),
                (ya.ondrop = function (a) {
                    Dj(a, M, ya);
                }));
            Ej(ya, b.views.fullDay.minutesBetweenSections);
            cf = g("div", "time-arrow");
            ya.appendChild(cf);
            cf.appendChild(g("div", "arrow-left"));
            cf.appendChild(g("div", "line"));
        }
    }
    function oc(a, b, d, e, f) {
        for (var c = new Date(a.from), l = Pc(a.repeatEveryExcludeDays); c < d; ) {
            e(c, f);
            var g = !(!p(a.repeatEnds) || Xe(c, a.repeatEnds));
            if (l.indexOf(c.getDay()) === A.notFound && !g && W(c, d)) {
                b.push(a);
                break;
            }
        }
    }
    function Ml(a, c) {
        var d = 0,
            e = Pc(a.seriesIgnoreDates),
            f = vd(c),
            k = new Date(c);
        if (he(a) && e.indexOf(f) === A.notFound) {
            var l = g("div", "event");
            l.ondblclick = D;
            l.setAttribute("event-type", I(a.type));
            l.setAttribute("event-id", a.id);
            l.setAttribute("event-is-all-day", a.isAllDay);
            l.onclick = function (a) {
                Fj(a, l);
            };
            a.isAllDay
                ? Oc.appendChild(l)
                : (b.manualEditingEnabled &&
                      b.dragAndDropForEventsEnabled &&
                      (W(a.from, a.to) && (l.className += " resizable"),
                      (l.ondragstart = function (b) {
                          var d = We(l);
                          ug = l;
                          vg = l.offsetTop;
                          Rb = a;
                          wg = d.top - b.pageY;
                          xg = c;
                      }),
                      (l.ondragEnd = Sh),
                      l.setAttribute("draggable", !0)),
                  ya.appendChild(l));
            l.oncontextmenu = function (b) {
                df(b, a, f);
            };
            ef(l, a);
            ae(l, a, Ue(a, c));
            be(l, a, k);
            W(a.from, c) && (l.id = "full-day-" + a.id);
            x(b.events.onFullDayEventRender, l, a) ||
                ((e = g("div", "title")),
                I(a.repeatEvery) > w.never &&
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
                        ? y(e, b.allDayText)
                        : (y(e, ce(a.from, a.to)), y(k, Pb(a.from, a.to)))
                    : (Ve(e, a.from, a.to), y(k, Pb(a.from, a.to))),
                k.innerHTML === n.empty && l.removeChild(k),
                Da(a.repeatEvery) &&
                    a.repeatEvery > w.never &&
                    ((e = g("div", "repeats")),
                    y(e, b.repeatsText.replace(":", n.empty) + n.space + qd(a.repeatEvery)),
                    l.appendChild(e)),
                Xa(a.location) && ((e = g("div", "location")), y(e, a.location), l.appendChild(e)),
                Xa(a.description) && ((e = g("div", "description")), y(e, a.description), l.appendChild(e)));
            l.addEventListener("click", function (b) {
                ff(b, a);
            });
            a.isAllDay || (d = Gj(xb, ya, c, l, a));
            ic.push(a);
            a.isAllDay || yg.push({ eventDetails: a, eventElement: l, height: l.offsetHeight });
        }
        return d;
    }
    function Va(a, c) {
        a = p(a) ? new Date(a) : new Date();
        c = p(c) ? c : !1;
        var d = new Date(),
            e = Z(d);
        e = b.visibleDays.indexOf(e) > A.notFound;
        af.innerHTML = n.empty;
        M = new Date(a);
        ic = [];
        yg = [];
        Oc.style.display = "block";
        ge.style.display = "none";
        W(a, d) && !e && Hj();
        Wa(Aj, e);
        Xh(xb, "event");
        ld();
        x(b.events.onFullDayTitleRender, M) || lc(af, M, !1, !0, !0);
        gf(Y);
        if (0 <= b.workingDays.indexOf(Z(a)) && null !== b.workingHoursStart && null !== b.workingHoursEnd) {
            var f = null;
            d = null;
            Pa(b.workingHoursStart)
                ? ((e = Z(M)),
                  b.workingHoursStart.hasOwnProperty(e.toString()) && (f = b.workingHoursStart[e.toString()]))
                : (f = b.workingHoursStart);
            Pa(b.workingHoursEnd)
                ? ((e = Z(M)), b.workingHoursEnd.hasOwnProperty(e.toString()) && (d = b.workingHoursEnd[e.toString()]))
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
                var h = b.holidays[g],
                    H = G(h.title, n.empty);
                Ij(h, d) && H !== n.empty && k.indexOf(H.toLowerCase()) && (f.push(H), k.push(H.toLowerCase()));
            }
            0 < f.length && (e = f.join(", "));
        }
        d = e;
        f = [];
        null !== d && fa(af, " (" + d + ")", "light-title-bar-text");
        Qh(a, f);
        f = vb(f);
        k = f.length;
        e = null;
        d = Jj(M, Y, cf, ya, b.views.fullDay.showTimelineArrow);
        for (l = 0; l < k; l++) (g = Ml(f[l], a)), null === e && (e = g);
        c &&
            ((a = Y),
            (c = b.views.fullDay.showTimelineArrow),
            ec(M) && fb(a) && c
                ? ((a = Oc.offsetHeight), (a = 1 >= a ? 4 * b.spacing : a), (xb.scrollTop = d - a))
                : (xb.scrollTop = e - xb.offsetHeight / 2));
        1 >= Oc.offsetHeight && (Oc.style.display = "none");
        Wa(Bj, 0 < ic.length);
        Kj(ya);
    }
    function Qh(a, b) {
        yb(function (c) {
            for (var d = Qc(c.from, c.to) + 1, f = new Date(c.from), k = 0; k < d; k++) {
                if (W(f, a)) {
                    b.push(c);
                    break;
                }
                Za(f);
            }
            d = I(c.repeatEvery);
            d > w.never &&
                (d === w.everyDay
                    ? oc(c, b, a, Za, 1)
                    : d === w.everyWeek
                      ? oc(c, b, a, Sb, 1)
                      : d === w.every2Weeks
                        ? oc(c, b, a, Sb, 2)
                        : d === w.everyMonth
                          ? oc(c, b, a, ie, 1)
                          : d === w.everyYear
                            ? oc(c, b, a, wd, 1)
                            : d === w.custom &&
                              ((d = I(c.repeatEveryCustomType)),
                              (f = I(c.repeatEveryCustomValue)),
                              0 < f &&
                                  (d === N.daily
                                      ? oc(c, b, a, Za, f)
                                      : d === N.weekly
                                        ? oc(c, b, a, Sb, f)
                                        : d === N.monthly
                                          ? oc(c, b, a, ie, f)
                                          : d === N.yearly && oc(c, b, a, wd, f))));
        });
    }
    function Kl() {
        xd(Y);
        M = null;
        ic = [];
        yg = [];
    }
    function Ll(a) {
        b.manualEditingEnabled &&
            ((a = tg(a, ya)),
            b.useTemplateWhenAddingNewEvent
                ? ((a = P(a[0]) + ":" + P(a[1])), (a = td(M, M, a, a)), R(a), ud())
                : R(null, M, a));
    }
    function mj() {
        zg(M);
        if (7 > b.visibleDays.length) for (var a = Z(M); b.visibleDays.indexOf(a) === A.notFound; ) zg(M), (a = Z(M));
        Va(M, !0);
    }
    function qj() {
        Hj(!0);
    }
    function uj() {
        M = new Date();
        Va(M, !0);
    }
    function Hj(a) {
        a = p(a) ? a : !1;
        Za(M);
        if (7 > b.visibleDays.length) for (var c = Z(M); b.visibleDays.indexOf(c) === A.notFound; ) Za(M), (c = Z(M));
        a && Va(M, !0);
    }
    function ll() {
        if (!m && b.views.fullWeek.enabled) {
            var a = null !== ea;
            a && ((ea.innerHTML = n.empty), (yd = null));
            a || ((ea = g("div", "full-week-view")), (ea.id = fc()), z.appendChild(ea));
            a = g("div", "title-bar");
            ea.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Ya);
            Qa = g("div", "title");
            a.appendChild(Qa);
            t(a, "ib-close", b.closeTooltipText, function () {
                jc = [];
                xd(ea);
            });
            a.appendChild(g("div", "right-divider-line"));
            b.views.fullWeek.showExtraTitleBarButtons &&
                b.fullScreenModeEnabled &&
                ((Yh = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Ya)),
                a.appendChild(g("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextWeekTooltipText, rj);
            b.manualEditingEnabled &&
                b.views.fullWeek.showExtraTitleBarButtons &&
                t(a, "ib-plus", b.addEventTooltipText, function () {
                    R(null, new Date(Lj));
                });
            !m &&
                nd() &&
                (t(a, "ib-hamburger", b.showMenuTooltipText, Nc), a.appendChild(g("div", "left-divider-line")));
            t(a, "ib-arrow-left-full", b.previousWeekTooltipText, nj);
            b.views.fullWeek.showExtraTitleBarButtons &&
                (t(a, "ib-pin", b.thisWeekTooltipText, vj),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        de();
                    }),
                a.appendChild(g("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    La(!0, !0);
                }),
                u.enabled && (Mj = t(a, "ib-search", b.searchTooltipText, ee)));
            zd = g("div", "contents custom-scroll-bars");
            ea.appendChild(zd);
            Nl();
        }
    }
    function Nl() {
        var a = g("div", "header-days-container");
        zd.appendChild(a);
        b.views.fullWeek.showDayNamesHeaders && ((yd = g("div", "row-cells header-days")), a.appendChild(yd));
        Ad = g("div", "content-events-all-day");
        zd.appendChild(Ad);
        je = g("div", "row-cells days");
        Ad.appendChild(je);
        a = g("div", "all-day-text");
        y(a, b.allDayText);
        Ad.appendChild(a);
        ke = g("div", "hours");
        zd.appendChild(ke);
        Ej(ke, b.views.fullWeek.minutesBetweenSections);
        hf = g("div", "row-cells days");
        ke.appendChild(hf);
    }
    function Zh(a, c, d) {
        for (; a < c; a++) b.visibleDays.indexOf(a) > A.notFound && Ol(d, a);
    }
    function Ol(a, c) {
        var d = g("div", Ag()),
            e = g("div", Ag()),
            f = new Date(a[c]);
        d.id = "calendar-week-day-" + c;
        e.id = "calendar-week-all-day-" + c;
        hf.appendChild(d);
        je.appendChild(e);
        d.ondblclick = function (a) {
            b.manualEditingEnabled &&
                ((a = tg(a, d)),
                b.useTemplateWhenAddingNewEvent
                    ? ((a = P(a[0]) + ":" + P(a[1])), (a = td(f, f, a, a)), R(a), ud())
                    : R(null, f, a));
        };
        Bg(e, f.getFullYear(), f.getMonth(), f.getDate());
        Pl(d, c);
        ec(f) && Ql(d, f);
        b.manualEditingEnabled &&
            b.dragAndDropForEventsEnabled &&
            ((d.ondragover = D),
            (d.ondragenter = D),
            (d.ondragleave = D),
            (d.ondrop = function (a) {
                Dj(a, f, ke);
            }));
        d.oncontextmenu = function (a) {
            var b = tg(a, d);
            bf = P(b[0]) + ":" + P(b[1]);
            Cj(a, f, jf[c]);
        };
    }
    function Ql(a, c) {
        le = g("div", "time-arrow");
        a.appendChild(le);
        le.appendChild(g("div", "arrow-left"));
        le.appendChild(g("div", "line"));
        Cg = Jj(c, ea, le, a, b.views.fullWeek.showTimelineArrow);
    }
    function Pl(a, c) {
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
                (e = g("div", "working-hours")),
                a.appendChild(e),
                (e.style.display = "block"),
                (e.style.top = d + "px"),
                (e.style.height = c + "px"));
        }
    }
    function Nj(a, c) {
        a.getFullYear() === c.getFullYear()
            ? (a.getMonth() === c.getMonth()
                  ? (Ob(Qa, a), fa(Qa, " - "), Ob(Qa, c, null, n.space), fa(Qa, b.monthNames[a.getMonth()]))
                  : (lc(Qa, a, !1, !1), fa(Qa, " - "), lc(Qa, c, !1, !1)),
              fa(Qa, ", " + a.getFullYear()))
            : (lc(Qa, a, !1, !0), fa(Qa, " - "), lc(Qa, c, !1, !0));
    }
    function pc(a, b, d, e, f) {
        for (var c = new Date(a.from), l = Pc(a.repeatEveryExcludeDays), g = !1; c < d; ) {
            e(c, f);
            var h = !(!p(a.repeatEnds) || Xe(c, a.repeatEnds));
            if (l.indexOf(c.getDay()) === A.notFound && !h && c >= b && c <= d) {
                h = Ca("calendar-week-day-" + Z(c));
                var n = Ca("calendar-week-all-day-" + Z(c));
                null !== h && (Oj(h, n, a, c), (g = !0));
            }
        }
        return g;
    }
    function Oj(a, c, d, e) {
        var f = !1,
            k = Pc(d.seriesIgnoreDates),
            l = new Date(e),
            E = vd(l);
        e = new Date(e);
        if (he(d) && k.indexOf(E) === A.notFound) {
            var h = g("div", "event");
            f = Z(l);
            h.setAttribute("event-type", I(d.type));
            h.setAttribute("event-id", d.id);
            h.setAttribute("event-is-all-day", d.isAllDay);
            a.appendChild(h);
            h.onclick = function (a) {
                Fj(a, h);
            };
            h.oncontextmenu = function (a) {
                df(a, d, E);
            };
            d.isAllDay
                ? (c.appendChild(h), $h(h, d, l, c), (ai = !0))
                : b.manualEditingEnabled &&
                  b.dragAndDropForEventsEnabled &&
                  !kf(d) &&
                  (W(d.from, d.to) && !d.isAllDay && (h.className += " resizable"),
                  (h.ondragstart = function (a) {
                      var b = We(h);
                      ug = h;
                      vg = h.offsetTop;
                      Rb = d;
                      wg = b.top - a.pageY;
                      xg = l;
                  }),
                  (h.ondragEnd = Sh),
                  h.setAttribute("draggable", !0));
            ef(h, d);
            ae(h, d, Ue(d, l));
            be(h, d, e);
            W(d.from, l) && (h.id = "week-day-" + d.id);
            x(b.events.onFullWeekEventRender, h, d) ||
                ((c = g("div", "title")),
                I(d.repeatEvery) > w.never &&
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
                        ? y(c, b.allDayText)
                        : (y(c, ce(d.from, d.to)), y(k, Pb(d.from, d.to)))
                    : (Ve(c, d.from, d.to), y(k, Pb(d.from, d.to))),
                k.innerHTML === n.empty && h.removeChild(k),
                Da(d.repeatEvery) &&
                    d.repeatEvery > w.never &&
                    ((c = g("div", "repeats")),
                    y(c, b.repeatsText.replace(":", n.empty) + n.space + qd(d.repeatEvery)),
                    h.appendChild(c)),
                Xa(d.location) && ((c = g("div", "location")), y(c, d.location), h.appendChild(c)),
                Xa(d.description) && ((c = g("div", "description")), y(c, d.description), h.appendChild(c)));
            h.addEventListener("click", function (a) {
                ff(a, d);
            });
            d.isAllDay || Gj(a, a, l, h, d, !0);
            d.isAllDay || bi.push({ eventDetails: d, eventElement: h, height: h.offsetHeight });
            jf.hasOwnProperty(f) || (jf[f] = []);
            lf = 0 === lf ? h.offsetTop : na.min(lf, h.offsetTop);
            jf[f].push(d);
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
        le = null;
        jc = [];
        jf = {};
        ai = !1;
        Cg = null;
        lf = 0;
        Ad.style.display = "none";
        bi = [];
        Lj = a;
        gf(ea);
        ld();
        Qa.innerHTML = n.empty;
        if (!x(b.events.onFullWeekTitleRender, a, e)) {
            if (b.views.fullWeek.showWeekNumbersInTitles) {
                d = Qa;
                var f = b.weekText + n.space,
                    k = new Date(a.getFullYear(), 0, 1),
                    l = na.ceil(((a - k) / 864e5 + k.getDay() + 1) / 7);
                4 < k.getDay() && l--;
                fa(d, f + l + ": ");
            }
            b.reverseOrderDaysOfWeek ? Nj(e, a) : Nj(a, e);
        }
        Hh(yd, !1);
        d = b.dayHeaderNames.length;
        f = {};
        for (k = new Date(a); k < e; ) (f[Z(k)] = new Date(k)), k.setDate(k.getDate() + 1);
        hf.innerHTML = n.empty;
        je.innerHTML = n.empty;
        b.startOfWeekDay === xa.saturday || b.startOfWeekDay === xa.sunday
            ? (Zh(b.startOfWeekDay, d, f), Zh(0, b.startOfWeekDay, f))
            : Zh(0, d, f);
        b.reverseOrderDaysOfWeek && md(hf);
        if (null !== yd && b.views.fullWeek.showDatesInDayHeaders) {
            d = new Date(a);
            f = 0;
            for (k = yd.children; d < e; )
                (l = Z(d)),
                    b.visibleDays.indexOf(l) > A.notFound &&
                        ((k[f].innerHTML += n.space + d.getDate() + "/" + (d.getMonth() + 1)), f++),
                    d.setDate(d.getDate() + 1);
            b.reverseOrderDaysOfWeek && md(yd);
        }
        d = vb(Bd());
        f = d.length;
        for (k = 0; k < f; k++) {
            l = d[k];
            for (var g = Qc(l.from, l.to) + 1, h = new Date(l.from), H = !1, r = 0; r < g; r++) {
                if (h >= a && h <= e) {
                    var q = Ca("calendar-week-day-" + Z(h)),
                        m = Ca("calendar-week-all-day-" + Z(h));
                    null !== q && Oj(q, m, l, h) && (H = !0);
                }
                Za(h);
            }
            H && jc.push(l);
            h = I(l.repeatEvery);
            g = !1;
            h > w.never &&
                (h === w.everyDay
                    ? (g = pc(l, a, e, Za, 1))
                    : h === w.everyWeek
                      ? (g = pc(l, a, e, Sb, 1))
                      : h === w.every2Weeks
                        ? (g = pc(l, a, e, Sb, 2))
                        : h === w.everyMonth
                          ? (g = pc(l, a, e, ie, 1))
                          : h === w.everyYear
                            ? (g = pc(l, a, e, wd, 1))
                            : h === w.custom &&
                              ((h = I(l.repeatEveryCustomType)),
                              (r = I(l.repeatEveryCustomValue)),
                              0 < r &&
                                  (h === N.daily
                                      ? (g = pc(l, a, e, Za, r))
                                      : h === N.weekly
                                        ? (g = pc(l, a, e, Sb, r))
                                        : h === N.monthly
                                          ? (g = pc(l, a, e, ie, r))
                                          : h === N.yearly && (g = pc(l, a, e, wd, r)))));
            g && !H && jc.push(l);
        }
        a = b.dayHeaderNames.length;
        for (e = 0; e < a; e++) (d = Ca("calendar-week-day-" + e)), null !== d && Kj(d);
        a = 0;
        if (ai) {
            Ad.style.display = "block";
            e = je.children.length;
            for (d = 0; d < e; d++) {
                f = je.children[d].children;
                k = f.length;
                for (H = l = 0; H < k; H++) l += f[H].offsetHeight + b.spacing;
                a = na.max(a, l);
            }
            Ad.style.height = a + b.spacing + "px";
        }
        c && (null !== Cg ? ((a = 0 >= a ? 4 * b.spacing : a), (zd.scrollTop = Cg - a)) : (zd.scrollTop = lf));
        Wa(Mj, 0 < jc.length);
    }
    function nj() {
        Tb.setDate(Tb.getDate() - 7);
        Ac(Tb, !0);
    }
    function rj() {
        Sb(Tb);
        Ac(Tb, !0);
    }
    function vj() {
        Tb = new Date();
        Ac(Tb, !0);
    }
    function ml() {
        Dg = Eg = null;
        var a = null !== U;
        a && (U.innerHTML = n.empty);
        a || ((U = g("div", "title-bar")), Jb.appendChild(U));
        b.fullScreenModeEnabled && (U.ondblclick = Ya);
        m &&
            (U.onclick = function (a) {
                D(a);
                Ha();
            });
        !m && nd() && (t(U, "ib-hamburger", b.showMenuTooltipText, Nc), U.appendChild(g("div", "left-divider-line")));
        t(U, "ib-arrow-left-full", b.previousMonthTooltipText, Ze);
        b.views.fullMonth.addYearButtons && t(U, "ib-rewind", b.previousYearTooltipText, pg);
        (m || b.views.fullMonth.showExtraTitleBarButtons) && t(U, "ib-pin", b.currentMonthTooltipText, rg);
        b.views.fullMonth.showExtraTitleBarButtons &&
            (b.jumpToDateEnabled &&
                t(U, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                    de();
                }),
            U.appendChild(g("div", "left-divider-line-events")),
            t(U, "ib-refresh", b.refreshTooltipText, function () {
                La(!0, !0);
            }),
            u.enabled && (Dg = t(U, "ib-search", b.searchTooltipText, ee)));
        m && (t(U, "ib-close", b.closeTooltipText, cd), U.appendChild(g("div", "right-divider-line")));
        b.views.fullMonth.showExtraTitleBarButtons &&
            b.fullScreenModeEnabled &&
            ((Eg = t(U, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Ya)),
            U.appendChild(g("div", "right-divider-line-full-screen-mode")));
        t(U, "ib-arrow-right-full", b.nextMonthTooltipText, $e);
        b.views.fullMonth.addYearButtons && t(U, "ib-forward", b.nextYearTooltipText, qg);
        b.views.fullMonth.showExtraTitleBarButtons &&
            b.manualEditingEnabled &&
            t(U, "ib-plus", b.addEventTooltipText, function () {
                Pj(v, new Date()) ? R(null) : R(null, new Date(v.getFullYear(), v.getMonth(), 1));
            });
        m ||
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
                    Mh(!0);
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
                    Va(null, !0);
                }));
        a = g("div", "title-container");
        U.appendChild(a);
        Rl(a);
        Sl(a);
    }
    function sb() {
        m ||
            null === ob ||
            (0 < b.views.fullMonth.pinUpViewImageUrls.length
                ? ((ob.style.backgroundImage = "url('" + b.views.fullMonth.pinUpViewImageUrls[Rc] + "')"),
                  Rc++,
                  Rc === b.views.fullMonth.pinUpViewImageUrls.length && (Rc = 0))
                : 0 < b.views.fullMonth.pinUpViewImageCssClasses.length &&
                  ((ob.className = "pin-up" + n.space + b.views.fullMonth.pinUpViewImageCssClasses[Rc]),
                  Rc++,
                  Rc === b.views.fullMonth.pinUpViewImageCssClasses.length && (Rc = 0)),
            Qj());
    }
    function Qj() {
        if (!m && null !== ob && !x(b.events.onFullMonthPinUpRender, ob, v)) {
            var a = new Date();
            if (null === ci || !W(ci, a)) {
                ob.innerHTML = n.empty;
                ci = a;
                var c = g("div", "pin-up-text"),
                    d = g("div", "day"),
                    e = g("div", "month"),
                    f = g("div", "year");
                c.onclick = function () {
                    R(null, a);
                };
                Ra(c, b.addEventTooltipText);
                ob.appendChild(c);
                c.appendChild(d);
                c.appendChild(e);
                c.appendChild(f);
                fa(d, a.getDate());
                if (b.showDayNumberOrdinals && ((c = Fg(a.getDate())), p(c))) {
                    var k = g("sup");
                    k.innerText = c;
                    d.appendChild(k);
                }
                y(e, b.monthNames[a.getMonth()]);
                y(f, a.getFullYear());
            }
        }
    }
    function $i(a, c) {
        var d = p(a);
        a = d ? a : Jb;
        c = p(c) ? c : "calendar-day-";
        if (!d && 0 < mf.length) {
            for (var e = mf.length, f = 0; f < e; f++) a.removeChild(mf[f]);
            mf = [];
        }
        for (e = 0; 6 > e; e++) {
            f = g("div", "row-cells days");
            a.appendChild(f);
            d || mf.push(f);
            for (var k = 0; 7 > k; k++) {
                var l = k;
                if (b.startOfWeekDay === xa.saturday || b.startOfWeekDay === xa.sunday)
                    (l = b.startOfWeekDay + k), 7 <= l && (l -= 7);
                if (b.visibleDays.indexOf(l) > A.notFound) {
                    l = 7 * e + (k + 1);
                    var h = g("div", Ag(b.views.fullMonth.allowEventScrolling));
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
    function Ag(a) {
        a = p(a) ? a : !1;
        var c = "cell cell-" + b.visibleDays.length;
        a && (c += " custom-scroll-bars");
        return c;
    }
    function Rl(a) {
        me = g("span", "year-dropdown-button");
        me.ondblclick = D;
        me.onclick = Tl;
        a.appendChild(me);
        Kh = g("span");
        me.appendChild(Kh);
        b.views.fullMonth.showYearDropDownButtonIcon &&
            ((Gg = g("span", "ib-arrow-down-full-medium")), me.appendChild(Gg));
    }
    function Sl(a) {
        var c = new Date(b.minimumYear, 1, 1),
            d = null;
        Ub = g(
            "div",
            b.views.fullMonth.showMonthButtonsInYearDropDownMenu ? "years-drop-down" : "years-drop-down-no-months"
        );
        a.appendChild(Ub);
        if (b.views.fullMonth.showMonthButtonsInYearDropDownMenu)
            for (a = 0; 12 > a; a++) 0 === a % 3 && ((d = g("div", "months")), Ub.appendChild(d)), Ul(d, a);
        nf = g("div", "contents custom-scroll-bars");
        for (Ub.appendChild(nf); !(Vl(c.getFullYear()), wd(c), c.getFullYear() > b.maximumYear); );
    }
    function Ul(a, c) {
        var d = g("div", "month-name"),
            e = b.monthNamesAbbreviated[c];
        d.onclick = function (a) {
            D(a);
            v.getMonth() !== c && (v.setMonth(c), x(b.events.onSetDate, v), F(v), og(), sb());
        };
        y(d, e);
        a.appendChild(d);
        Sc[c.toString()] = d;
    }
    function Vl(a) {
        var c = g("div");
        c.className = "year";
        c.innerText = a.toString();
        c.id = "year-selected-" + a.toString();
        nf.appendChild(c);
        c.ondblclick = D;
        c.onclick = function (c) {
            D(c);
            v.getFullYear() !== a && (v.setFullYear(a), x(b.events.onSetDate, v), F(v), og(), sb());
        };
    }
    function Wl() {
        var a = Ub.getElementsByClassName("year"),
            b = a.length;
        if (1 <= b) for (var d = 0; d < b; d++) "year" !== a[d].className && (a[d].className = "year");
        a = Ca("year-selected-" + v.getFullYear());
        null !== a && (a.className += " year-selected");
        if (!m) {
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
    function Tl(a) {
        D(a);
        if ("block" !== Ub.style.display) {
            Ha();
            Ub.style.display = "block";
            b.views.fullMonth.showYearDropDownButtonIcon && (Gg.className = "ib-arrow-up-full-medium");
            for (var c in Sc) Sc.hasOwnProperty(c.toString()) && (Sc[c.toString()].className = "month-name");
            a = v.getMonth().toString();
            c = new Date();
            v.getFullYear() === c.getFullYear() &&
                ((c = c.getMonth().toString()), Sc.hasOwnProperty(c) && (Sc[c].className = "month-name-current-month"));
            Sc.hasOwnProperty(a) && (Sc[a].className = "month-name-selected");
            a = Wl();
            nf.scrollTop = null !== a ? a.offsetTop - nf.offsetTop - b.spacing : 0;
        } else og();
    }
    function og() {
        var a = !1;
        Hg() &&
            (b.views.fullMonth.showYearDropDownButtonIcon && (Gg.className = "ib-arrow-down-full-medium"),
            (Ub.style.display = "none"),
            (a = !0));
        return a;
    }
    function Hg() {
        return null !== Ub && "block" === Ub.style.display;
    }
    function Ih(a, c, d, e, f, k) {
        c = Ca("calendar-day-" + c);
        if (null !== c) {
            var l = new Date(),
                h = a === l.getDate() && e === l.getFullYear() && d === l.getMonth();
            l = g("span");
            var K = new Date(e, d, a);
            f = f ? " day-muted" : n.empty;
            var H = !0;
            k = p(k) ? k : !1;
            c.innerHTML = n.empty;
            c.className = c.className
                .replace(" cell-today", n.empty)
                .replace(" cell-selected", n.empty)
                .replace(" cell-no-click", n.empty);
            m && h && (c.className += " cell-today");
            m && !h && null !== Dc && W(K, Dc) && (c.className += " cell-selected");
            m
                ? ((H = jj(K)), H || ((c.className += " cell-no-click"), (l.className = "no-click")))
                : (l.className = n.empty);
            l.className += f;
            l.className += h && !m ? " today" : n.empty;
            l.innerText = a;
            1 !== a || m || (l.className += " first-day");
            0 <= b.weekendDays.indexOf(K.getDay()) &&
                c.className.indexOf("weekend-day") === A.notFound &&
                (c.className += " weekend-day");
            0 <= b.workingDays.indexOf(Z(K)) &&
                c.className.indexOf("working-day") === A.notFound &&
                (c.className += " working-day");
            c.oncontextmenu = function (a) {
                Ig(a, K);
            };
            if (b.showDayNumberOrdinals && ((h = Fg(a)), p(h))) {
                var r = g("sup");
                r.innerText = h;
                l.appendChild(r);
            }
            c.appendChild(l);
            c.appendChild(g("span", "blank"));
            b.views.fullDay.enabled &&
                ((l = g("div", "ib-arrow-expand-left-right-icon")),
                c.appendChild(l),
                Ra(l, b.expandDayTooltipText),
                (l.onclick = function () {
                    Va(K, !0);
                }));
            k &&
                b.views.fullMonth.showPreviousNextMonthNames &&
                fa(
                    c,
                    b.monthNames[d],
                    "month-name" + f,
                    function () {
                        1 === a ? $e() : Ze();
                    },
                    !0,
                    !0
                );
            Xl(K, f, c);
            b.manualEditingEnabled &&
                ((c.ondblclick = function () {
                    if (b.useTemplateWhenAddingNewEvent) {
                        var a = td(K, K);
                        R(a);
                        ud();
                    } else R(null, K);
                }),
                Bg(c, e, d, a));
            m &&
                (c.onclick = H
                    ? function (a) {
                          D(a);
                          Hg()
                              ? Ha()
                              : ((a = new Date(K)),
                                a.setHours(0, 0, 0, 0),
                                cd(),
                                Nh(K),
                                x(b.events.onDatePickerDateChanged, a),
                                (Dc = a));
                      }
                    : D);
            b.views.fullMonth.useOnlyDotEvents && c.appendChild(g("div", "dots-separator"));
        }
    }
    function Ia() {
        for (var a = 0; 6 > a; a++)
            for (var c = 0; 7 > c; c++) {
                var d = Ca("calendar-day-" + (7 * a + (c + 1)));
                null !== d && (Xh(d, "event"), Xh(d, "plus-x-events"));
            }
        Oh();
        ne = !1;
        fd = [];
        Cd = {};
        a = vb(Bd());
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d],
                f = e;
            di(f.from, f);
            if (
                f.from.getDate() !== f.to.getDate() ||
                f.from.getMonth() !== f.to.getMonth() ||
                f.from.getFullYear() !== f.to.getFullYear()
            ) {
                var k = Qc(f.from, f.to);
                if (0 < k)
                    for (var g = new Date(f.from), h = 0; h < k; h++)
                        Za(g), ei(vd(g), f.id), null !== fi(g) && di(g, f);
            }
            he(e) && fd.push(e);
            f = I(e.repeatEvery);
            f > w.never &&
                (f === w.everyDay
                    ? qc(e, Za, 1)
                    : f === w.everyWeek
                      ? qc(e, Sb, 1)
                      : f === w.every2Weeks
                        ? qc(e, Sb, 2)
                        : f === w.everyMonth
                          ? qc(e, ie, 1)
                          : f === w.everyYear
                            ? qc(e, wd, 1)
                            : f === w.custom &&
                              ((f = I(e.repeatEveryCustomType)),
                              (k = I(e.repeatEveryCustomValue)),
                              0 < k &&
                                  (f === N.daily
                                      ? qc(e, Za, k)
                                      : f === N.weekly
                                        ? qc(e, Sb, k)
                                        : f === N.monthly
                                          ? qc(e, ie, k)
                                          : f === N.yearly && qc(e, wd, k))));
        }
        Rj !== ne && ((Rj = ne), x(b.events.onBusyStateChange, ne));
        null !== Dg && Wa(Dg, 0 < fd.length);
        Ph();
    }
    function qc(a, c, d) {
        for (var e = new Date(a.from), f = Pc(a.repeatEveryExcludeDays), k = new Date(b.maximumYear, 11, 31); e < k; ) {
            c(e, d);
            var g = !(!p(a.repeatEnds) || Xe(e, a.repeatEnds));
            f.indexOf(e.getDay()) !== A.notFound || g || (ei(vd(e), a.id), e < Jh && null !== fi(e) && di(e, a));
        }
    }
    function di(a, c) {
        var d = fi(a),
            e = Pc(c.seriesIgnoreDates),
            f = vd(a),
            k = new Date(a);
        if (he(c) && e.indexOf(f) === A.notFound && (ei(f, c.id), null !== d && (Yl(a, c), !m)))
            if (
                d.getElementsByClassName("event").length < b.views.fullMonth.maximumEventsPerDayDisplay ||
                0 >= b.views.fullMonth.maximumEventsPerDayDisplay ||
                b.views.fullMonth.useOnlyDotEvents
            ) {
                e = g("div", "event");
                e.setAttribute("event-type", I(c.type));
                e.setAttribute("event-id", c.id);
                e.setAttribute("event-is-all-day", c.isAllDay);
                if (b.views.fullMonth.useOnlyDotEvents) e.className += " event-circle";
                else if (!x(b.events.onFullMonthEventRender, e, c)) {
                    var l = c.title,
                        h = I(c.repeatEvery);
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
                $h(e, c, a, d);
                ef(e, c);
                ae(e, c, Ue(c, a), b.views.fullMonth.applyCssToEventsNotInCurrentMonth);
                be(e, c, k);
                W(c.from, a) && (e.id = "day-" + c.id);
                e.onmousemove = function (a) {
                    null !== Dd && Dd.id === c.id ? D(a) : gi(a, c);
                };
                e.oncontextmenu = function (a) {
                    df(a, c, f);
                };
                e.addEventListener("click", function (a) {
                    ff(a, c);
                });
            } else Zl(d, a);
    }
    function Zl(a, c) {
        var d = a.getElementsByClassName("plus-x-events");
        d = 0 < d.length ? d[0] : null;
        if (null === d) {
            var e = new Date(c);
            d = g("div", "plus-x-events");
            d.setAttribute("events", "1");
            d.ondblclick = D;
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
    function fi(a) {
        var b = new Date(v.getFullYear(), v.getMonth(), 1);
        var d = new Date(v);
        var e = new Date(v),
            f = null,
            k = 0;
        b = Z(b);
        d.setMonth(d.getMonth() + 1);
        e.setMonth(e.getMonth() - 1);
        a.getMonth() === d.getMonth() && a.getFullYear() === d.getFullYear()
            ? ((d = b + bd(v.getFullYear(), v.getMonth())), (k = Me(a.getDate() + d)))
            : a.getMonth() === e.getMonth() && a.getFullYear() === e.getFullYear()
              ? (k = Me(b - Qc(a, v) + 1))
              : a.getMonth() === v.getMonth() &&
                a.getFullYear() === v.getFullYear() &&
                ((d = b), (k = Me(a.getDate() + d)));
        0 < k && (f = Ca("calendar-day-" + k));
        return f;
    }
    function ei(a, b) {
        Cd.hasOwnProperty(a) || (Cd[a] = []);
        Cd[a].indexOf(b) === A.notFound && Cd[a].push(b);
    }
    function nl() {
        if (!m && b.views.fullYear.enabled) {
            var a = null !== Ea;
            a && (Ea.innerHTML = n.empty);
            a || ((Ea = g("div", "full-year-view")), (Ea.id = fc()), z.appendChild(Ea));
            a = g("div", "title-bar");
            Ea.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Ya);
            hi = g("div", "title");
            a.appendChild(hi);
            !m &&
                nd() &&
                (t(a, "ib-hamburger", b.showMenuTooltipText, Nc), a.appendChild(g("div", "left-divider-line")));
            t(a, "ib-arrow-left-full", b.previousYearTooltipText, oj);
            b.views.fullYear.showExtraTitleBarButtons &&
                (t(a, "ib-pin", b.currentYearTooltipText, wj),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        de();
                    }),
                a.appendChild(g("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    La(!0, !0);
                }));
            t(a, "ib-close", b.closeTooltipText, function () {
                xd(Ea);
            });
            a.appendChild(g("div", "right-divider-line"));
            b.views.fullYear.showExtraTitleBarButtons &&
                b.fullScreenModeEnabled &&
                ((ii = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Ya)),
                a.appendChild(g("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextYearTooltipText, sj);
            b.views.fullYear.showExtraTitleBarButtons &&
                b.manualEditingEnabled &&
                t(a, "ib-plus", b.addEventTooltipText, function () {
                    R(null, new Date(ta, 0, 1));
                });
            oe = g("div", "contents custom-scroll-bars");
            Ea.appendChild(oe);
        }
    }
    function $l(a) {
        var c = new Date(ta, a, 1),
            d = function () {
                W(v, c) || (F(c), sb());
                for (; 0 < wb.length; ) zj(!1);
                of();
            },
            e = g("div", "year-month");
        oe.appendChild(e);
        var f = g("div", "title-bar-container");
        e.appendChild(f);
        var k = g("div", "title-bar");
        k.ondblclick = d;
        y(k, b.monthNames[a]);
        f.appendChild(k);
        t(k, "ib-arrow-expand-left-right", b.expandMonthTooltipText, d);
        b.manualEditingEnabled &&
            (k.appendChild(g("div", "right-divider-line")),
            t(k, "ib-plus", b.addEventTooltipText, function () {
                R(null, c);
            }));
        d = g("div", "row-cells header-days");
        e.appendChild(d);
        Hh(d);
        d = a + 1 + "-month-";
        f = new Date(ta, a, 1);
        f = Me(0 === f.getDay() ? 7 : f.getDay());
        $i(e, d);
        1 < f && am(f, d, a);
        f = bm(f, d, a);
        k = f[0];
        cm(f[1], d, a);
        k && (Jg = e.offsetTop);
    }
    function am(a, b, d) {
        d = new Date(ta, d, 1);
        d.setMonth(d.getMonth() - 1);
        var c = bd(d.getFullYear(), d.getMonth());
        for (--a; 0 < a; ) dm(b, a, d, c), a--, c--;
    }
    function dm(a, c, d, e) {
        a = Ca(a + c);
        if (null !== a) {
            var f = new Date(d.getFullYear(), d.getMonth(), e);
            a.className += " cell-muted";
            b.views.fullDay.enabled &&
                (a.onclick = function () {
                    Va(f, !0);
                });
            a.oncontextmenu = function (a) {
                Ig(a, f);
            };
            ji(a, f);
            Ob(a, f);
        }
    }
    function bm(a, b, d) {
        for (var c = 0, f = bd(ta, d), k = !1, g = 0; g < f; g++) (c = a + g), em(b, d, g, c) && (k = !0);
        return [k, c];
    }
    function em(a, c, d, e) {
        a = Ca(a + e);
        e = !1;
        if (null !== a) {
            var f = new Date(ta, c, d + 1);
            b.views.fullDay.enabled &&
                (a.onclick = function () {
                    Va(f, !0);
                });
            a.oncontextmenu = function (a) {
                Ig(a, f);
            };
            e = ji(a, f, !0);
            Ob(a, f);
        }
        return e;
    }
    function cm(a, b, d) {
        if (42 > a) {
            d = new Date(ta, d, 1);
            var c = 1;
            d.setMonth(d.getMonth() + 1);
            for (a += 1; 43 > a; a++) fm(b, d, a, c), c++;
        }
    }
    function fm(a, c, d, e) {
        a = Ca(a + d);
        if (null !== a) {
            var f = new Date(c.getFullYear(), c.getMonth(), e);
            a.className += " cell-muted";
            b.views.fullDay.enabled &&
                (a.onclick = function () {
                    Va(f, !0);
                });
            a.oncontextmenu = function (a) {
                Ig(a, f);
            };
            ji(a, f);
            Ob(a, f);
        }
    }
    function ji(a, c, d) {
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
        ta = p(a) ? a : v.getFullYear();
        Jg = 0;
        hi.innerText = ta;
        c = (a = c) ? 0 : oe.scrollTop;
        oe.innerHTML = n.empty;
        for (var d = 0; 12 > d; d++) $l(d);
        oe.scrollTop = a ? (0 < Jg ? Jg - 4 * b.spacing : 0) : c;
        gf(Ea);
    }
    function oj() {
        ta > b.minimumYear && (--ta, Bc(ta, !0));
    }
    function sj() {
        ta < b.maximumYear && ((ta += 1), Bc(ta, !0));
    }
    function wj() {
        ta = new Date().getFullYear();
        Bc(ta, !0);
    }
    function ol() {
        if (!m && b.views.allEvents.enabled) {
            var a = null !== sa;
            a && (sa.innerHTML = n.empty);
            a || ((sa = g("div", "all-events-view")), (sa.id = fc()), z.appendChild(sa));
            a = g("div", "title-bar");
            sa.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Ya);
            var c = g("div", "title");
            y(c, b.allEventsText);
            a.appendChild(c);
            t(a, "ib-close", b.closeTooltipText, function () {
                Mb = [];
                xd(sa);
            });
            b.views.allEvents.showExtraTitleBarButtons &&
                (a.appendChild(g("div", "right-divider-line")),
                b.fullScreenModeEnabled &&
                    ((ki = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Ya)),
                    a.appendChild(g("div", "right-divider-line-full-screen-mode"))),
                b.manualEditingEnabled &&
                    t(a, "ib-plus", b.addEventTooltipText, function () {
                        R(null);
                    }));
            !m && nd() && t(a, "ib-hamburger", b.showMenuTooltipText, Nc);
            b.views.allEvents.showExtraTitleBarButtons &&
                (a.appendChild(g("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    La(!0, !0);
                }),
                u.enabled && (Sj = t(a, "ib-search", b.searchTooltipText, ee)));
            Ed = g("div", "contents custom-scroll-bars");
            sa.appendChild(Ed);
        }
    }
    function gm(a) {
        if (he(a)) {
            var c = hm(a.from),
                d = g("div", "event");
            c.appendChild(d);
            d.oncontextmenu = function (b) {
                df(b, a);
            };
            $h(d, a, a.from, c);
            ef(d, a);
            ae(d, a);
            be(d, a);
            d.id = "month-" + a.id;
            d.setAttribute("event-type", I(a.type));
            d.setAttribute("event-id", a.id);
            d.setAttribute("event-is-all-day", a.isAllDay);
            if (!x(b.events.onAllEventsEventRender, d, a)) {
                c = g("div", "title");
                if (I(a.repeatEvery) > w.never && b.showReoccurringEventIcons) {
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
                        : (Ob(c, a.from, null, " - " + ce(a.from, a.to)), y(e, Pb(a.from, a.to)))
                    : (Ve(c, a.from, a.to), y(e, Pb(a.from, a.to)));
                e.innerHTML === n.empty && d.removeChild(e);
                Da(a.repeatEvery) &&
                    a.repeatEvery > w.never &&
                    ((c = g("div", "repeats")),
                    y(c, b.repeatsText.replace(":", n.empty) + n.space + qd(a.repeatEvery)),
                    d.appendChild(c));
                Xa(a.location) && ((c = g("div", "location")), y(c, a.location), d.appendChild(c));
                Xa(a.description) && ((c = g("div", "description")), y(c, a.description), d.appendChild(c));
            }
            d.addEventListener("click", function (b) {
                ff(b, a);
            });
            Mb.push(a);
        }
    }
    function hm(a) {
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
                k = im(a);
            null !== k && Ed.appendChild(k);
            k = g("div", "month");
            Ed.appendChild(k);
            var l = g("div", "header");
            y(l, b.monthNames[a.getMonth()] + n.space + a.getFullYear());
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
                    Tj(e, Pj);
                });
            f = function () {
                var a = p,
                    e = d;
                "none" !== e.style.display
                    ? ((e.style.display = "none"),
                      (a.className = "ib-square-hollow"),
                      (Q.visibleAllEventsMonths[c] = !1),
                      Ra(a, b.restoreTooltipText))
                    : ((e.style.display = "block"),
                      (a.className = "ib-minus"),
                      (Q.visibleAllEventsMonths[c] = !0),
                      Ra(a, b.minimizedTooltipText));
            };
            var p = t(l, "ib-minus", b.minimizedTooltipText, f);
            sg.push(f);
            d = g("div", "events");
            d.id = c;
            k.appendChild(d);
            Q.visibleAllEventsMonths.hasOwnProperty(c) &&
                !Q.visibleAllEventsMonths[c] &&
                ((d.style.display = "none"), (p.className = "ib-square-hollow"), Ra(p, b.restoreTooltipText));
            Bg(d, a.getFullYear(), a.getMonth(), a.getDate());
        }
        return d;
    }
    function im(a) {
        var c = null;
        if (li.indexOf(a.getFullYear()) === A.notFound) {
            li.push(a.getFullYear());
            c = g("div", "year-header");
            var d = g("span", "header-text");
            y(d, a.getFullYear() + ":");
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
    function Mh(a) {
        a = p(a) ? a : !1;
        gf(sa);
        Ed.innerHTML = n.empty;
        Mb = [];
        sg = [];
        li = [];
        a && (Ed.scrollTop = 0);
        a = vb(Bd());
        for (var b = a.length, d = 0; d < b; d++) gm(a[d]);
        Wa(Sj, 0 < Mb.length);
        0 === Mb.length &&
            jm(Ed, function () {
                R(null);
            });
    }
    function pl() {
        if (!m && b.views.timeline.enabled) {
            var a = null !== ka;
            a && (ka.innerHTML = n.empty);
            null === $a && ($a = b.views.timeline.defaultAxis);
            a || ((ka = g("div", "timeline-view")), (ka.id = fc()), z.appendChild(ka));
            a = g("div", "title-bar");
            ka.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Ya);
            Kg = g("div", "title");
            a.appendChild(Kg);
            t(a, "ib-close", b.closeTooltipText, function () {
                Ec = [];
                xd(ka);
            });
            a.appendChild(g("div", "right-divider-line"));
            b.views.timeline.showExtraTitleBarButtons &&
                b.fullScreenModeEnabled &&
                ((mi = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Ya)),
                a.appendChild(g("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextYearTooltipText, tj);
            b.views.timeline.showExtraTitleBarButtons &&
                b.manualEditingEnabled &&
                t(a, "ib-plus", b.addEventTooltipText, function () {
                    R(null, new Date(ca));
                });
            b.views.fullDay.enabled &&
                (a.appendChild(g("div", "right-divider-line-views")),
                t(a, "ib-hourglass", b.viewFullDayTooltipText, function () {
                    Va(ca, !0);
                }));
            !m &&
                nd() &&
                (t(a, "ib-hamburger", b.showMenuTooltipText, Nc), a.appendChild(g("div", "left-divider-line")));
            t(a, "ib-arrow-left-full", b.previousYearTooltipText, pj);
            b.views.timeline.showExtraTitleBarButtons &&
                ((Uj = t(a, "ib-pin", b.currentYearTooltipText, xj)),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        de();
                    }),
                a.appendChild(g("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    La(!0, !0);
                }),
                u.enabled && (Vj = t(a, "ib-search", b.searchTooltipText, ee)));
            Sa = g("div", "contents custom-scroll-bars");
            Sa.addEventListener("scroll", kc);
            ka.appendChild(Sa);
        }
    }
    function km(a, c) {
        var d = g("div", "event"),
            e = vd(ca),
            f = new Date(ca);
        d.id = "timeline-day-" + c.id;
        d.setAttribute("event-type", I(c.type));
        d.setAttribute("event-id", c.id);
        d.setAttribute("event-is-all-day", c.isAllDay);
        a.appendChild(d);
        if (!x(b.events.onTimelineEventRender, d, c)) {
            if (I(c.repeatEvery) > w.never && b.showReoccurringEventIcons) {
                var k = g("div", "ib-refresh-medium ib-no-hover ib-no-active");
                k.style.borderColor = d.style.color;
                d.appendChild(k);
            }
            d.innerHTML += mc(c.title);
        }
        d.oncontextmenu = function (a) {
            df(a, c, e);
        };
        d.addEventListener("click", function (a) {
            ff(a, c);
        });
        d.onmousemove = function (a) {
            null !== Dd && Dd.id === c.id ? D(a) : gi(a, c);
        };
        be(d, c, f);
        ef(d, c);
        ae(d, c, Ue(c, ca));
        d = lm(a, ca, d, c);
        pf = null === pf ? d : na.min(pf, d);
        qf = null === qf ? a.offsetTop : na.min(qf, a.offsetTop);
    }
    function Kb(a, c) {
        a = p(a) ? new Date(a) : new Date();
        c = p(c) ? c : !1;
        var d = new Date(),
            e = Z(d),
            f = b.visibleDays.indexOf(e) > A.notFound,
            k = [];
        e = Sa.scrollLeft;
        var l = Sa.scrollTop;
        Kg.innerHTML = n.empty;
        Sa.innerHTML = n.empty;
        Ec = [];
        ca = a;
        Lg = {};
        qf = pf = null;
        rf = [];
        W(a, d) && !f && Wj();
        Qh(ca, k);
        Wa(Uj, f);
        sf = g("div", "timeline-header");
        Sa.appendChild(sf);
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
        sf.appendChild(a);
        t(a, "ib-arrow-left-full", b.previousPropertyTooltipText, mm);
        t(a, "ib-arrow-right-full", b.nextPropertyTooltipText, nm);
        a = b.views.timeline.minutesBetweenSections;
        d = new Date();
        f = new Date();
        var h = 0,
            r = 0;
        f.setHours(0, 0, 0, 0);
        for (0 !== 60 % a && (a = 30); W(f, d); ) {
            var H = g("div", "timeline-header-item");
            H.innerText = zb(new Date(f));
            sf.appendChild(H);
            f = hb(f, a);
            H = g("div", "timeline-header-item");
            H.innerText = zb(new Date(f));
            sf.appendChild(H);
            f = hb(f, a);
            H = g("div", "timeline-column");
            H.style.left = h + "px";
            Sa.appendChild(H);
            0 === r && ((r = Pe(H, "border-right-width")), (r = H.clientWidth + r));
            h += r;
            var q = g("div", "timeline-column");
            q.style.left = h + "px";
            Sa.appendChild(q);
            h += r;
            rf.push(H);
            rf.push(q);
        }
        gf(ka);
        k = vb(k);
        a = k.length;
        d = 0;
        if (0 < a)
            for (f = 0; f < a; f++) {
                h = k[f];
                H = G(h[$a], b.noneText);
                r = H.toLowerCase();
                h.isAllDay && ((H = b.allDayText + ": " + H), (r = r + "-" + h.id));
                if (Lg.hasOwnProperty(r)) H = Lg[r];
                else {
                    q = g("div", "timeline-row");
                    Sa.appendChild(q);
                    var m = g("div", "timeline-row-item" + (0 !== d % 2 ? " timeline-row-item-odd" : n.empty));
                    y(m, H);
                    q.appendChild(m);
                    H = g("div", "timeline-row-items");
                    q.appendChild(H);
                    q = b.views.timeline.minutesBetweenSections;
                    m = new Date();
                    var u = new Date();
                    u.setHours(0, 0, 0, 0);
                    for (0 !== 60 % q && (q = 30); W(u, m); ) {
                        var w = g("div", "timeline-row-item-spacing");
                        H.appendChild(w);
                        u = hb(u, q);
                        w = g("div", "timeline-row-item-spacing");
                        H.appendChild(w);
                        u = hb(u, q);
                    }
                    Lg[r] = H;
                    d++;
                }
                km(H, h);
                Ec.push(h);
            }
        k = rf.length;
        for (d = a = 0; d < k; d++)
            (f = rf[d]), 0 === a && (a = Sa.scrollHeight - f.offsetTop), (f.style.height = a + "px");
        x(b.events.onTimelineTitleRender, M) || lc(Kg, ca, !1, !0, !0);
        c ? ((Sa.scrollLeft = pf), (Sa.scrollTop = qf)) : ((Sa.scrollLeft = e), (Sa.scrollTop = l));
        Wa(Vj, 0 < Ec.length);
    }
    function pj() {
        zg(ca);
        if (7 > b.visibleDays.length)
            for (var a = Z(ca); b.visibleDays.indexOf(a) === A.notFound; ) zg(ca), (a = Z(ca));
        Kb(ca, !0);
    }
    function tj() {
        Wj(!0);
    }
    function xj() {
        ca = new Date();
        Kb(ca, !0);
    }
    function mm() {
        var a = pe.indexOf($a);
        a--;
        0 > a && (a = pe.length - 1);
        $a = pe[a];
        Kb(ca);
    }
    function nm() {
        var a = pe.indexOf($a);
        a++;
        a > pe.length - 1 && (a = 0);
        $a = pe[a];
        Kb(ca);
    }
    function Wj(a) {
        a = p(a) ? a : !1;
        Za(ca);
        if (7 > b.visibleDays.length)
            for (var c = Z(ca); b.visibleDays.indexOf(c) === A.notFound; ) Za(ca), (c = Z(ca));
        a && Kb(ca, !0);
    }
    function za(a, b, d, e, f) {
        f = p(f) ? f : !1;
        var c = g("div", "item");
        a.appendChild(c);
        c.appendChild(g("div", b));
        a = g("div", "menu-text");
        y(a, d);
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
    function ng(a) {
        var b = !1;
        qe(a) && ((a.style.display = "none"), (b = !0));
        return b;
    }
    function qe(a) {
        return null !== a && "block" === a.style.display;
    }
    function Xj() {
        return qe(Ja) || qe(aa) || qe(Oa) || qe(pb) || qe(Ab);
    }
    function ul() {
        null !== Ja && (ib(C.body, Ja), (Mg = ni = null));
        Ja = g("div", "calendar-context-menu");
        Aa.push(Ja);
        C.body.appendChild(Ja);
        b.manualEditingEnabled &&
            za(
                Ja,
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
            (ab(Ja),
            za(Ja, "ib-arrow-expand-left-right-icon", b.expandDayTooltipText, function () {
                Va(Fd, !0);
            }));
        b.views.fullWeek.enabled &&
            (ab(Ja),
            za(Ja, "ib-hamburger-side-icon", b.viewFullWeekText, function () {
                Ac(Fd, !0);
            }));
        b.manualEditingEnabled &&
            ((ni = ab(Ja)),
            (Mg = za(Ja, "ib-circle-icon", b.pasteText, function () {
                Uh(Fd, Qb);
            })));
    }
    function Ig(a, b) {
        m ||
            null === Ja ||
            (ia(a) || nc(),
            (Fd = new Date(b)),
            null !== Mg && ((b = 0 < la.length ? "block" : "none"), (ni.style.display = b), (Mg.style.display = b)),
            Ha(),
            D(a),
            tf(a, Ja));
    }
    function vl() {
        null !== aa && (ib(C.body, aa), (Ng = Og = uf = vf = wf = xf = yf = zf = Af = Bf = Cf = Df = aa = null));
        aa = g("div", "calendar-context-menu");
        Aa.push(aa);
        C.body.appendChild(aa);
        b.manualEditingEnabled &&
            ((wf = za(
                aa,
                "ib-edit-icon",
                b.editEventTitle + "...",
                function () {
                    R(bb, null, null, Yj);
                },
                !0
            )),
            (Af = ab(aa)),
            (zf = za(aa, "ib-pipe-icon", b.cutText, function () {
                fe();
                Qb = !0;
                Zj(bb);
                fe(!1);
            })),
            (yf = ab(aa)),
            (xf = za(aa, "ib-circle-hollow-icon", b.copyText, function () {
                fe();
                Qb = !1;
                Zj(bb);
                fe(!1);
            })),
            (Cf = ab(aa)),
            (Bf = za(aa, "ib-equals-icon", b.duplicateText + "...", function () {
                R(bb);
                y(Tc, b.addEventTitle);
                Ef.value = b.addText;
                Pg.style.display = "none";
                ha = re(ha);
                t(Tc, "ib-close", b.closeTooltipText, Uc, !0);
            })),
            (vf = ab(aa)),
            (uf = za(aa, "ib-close-icon", b.removeEventText, function () {
                Vb(C.body, Ka);
                var a = function () {
                        ib(C.body, Ka);
                    },
                    c = I(bb.repeatEvery) > w.never && null !== Ff;
                Gf(
                    b.confirmEventRemoveTitle,
                    b.confirmEventRemoveMessage,
                    function () {
                        a();
                        p(bb.id) &&
                            (Qg.checked || null === Ff
                                ? (r.removeEvent(bb.id, !0), Ta(b.eventRemovedText.replace("{0}", bb.title)))
                                : (wa(bb.seriesIgnoreDates)
                                      ? bb.seriesIgnoreDates.push(Ff)
                                      : (bb.seriesIgnoreDates = [Ff]),
                                  Ia()),
                            oa());
                    },
                    a,
                    c
                );
            })),
            (Df = ab(aa)));
        oi = za(aa, "ib-arrow-top-right-icon", b.openUrlText, function () {
            pi(bb.url);
        });
        b.exportEventsEnabled &&
            ((Og = ab(aa)),
            (Ng = za(aa, "ib-arrow-down-full-line-icon", b.exportEventsTooltipText + "...", function () {
                ed(Fa);
            })));
        b.shareEventsEnabled &&
            Hf.share &&
            (ab(aa),
            za(aa, "ib-arrow-up-full-line-share-icon", b.shareText + "...", function () {
                var a = ak(0 < Fa.length ? Fa : [bb]),
                    c = { type: "text/plain" };
                a = new Blob([a], c);
                c = { files: [new File([a], bk("txt", b.shareStartFilename), c)] };
                Hf.canShare(c) && Hf.share(c);
            }));
    }
    function df(a, c, d) {
        if (null !== aa) {
            var e = G(c.url),
                f = kf(c);
            ia(a) || nc();
            bb = c;
            Yj = new Date(d);
            Ff = p(d) ? d : null;
            1 < Fa.length
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
                  (oi.style.display = "none"),
                  b.exportEventsEnabled && ((Og.style.display = "block"), (Ng.style.display = "block")))
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
                  (oi.style.display = e !== n.empty ? "block" : "none"),
                  b.exportEventsEnabled && ((Og.style.display = "none"), (Ng.style.display = "none")));
            if (e !== n.empty || 1 < aa.childElementCount) Ha(), D(a), tf(a, aa);
        }
    }
    function wl() {
        null !== Oa && (ib(C.body, Oa), (Rg = qi = ri = si = Oa = null));
        b.manualEditingEnabled &&
            ((Oa = g("div", "calendar-context-menu")),
            Aa.push(Oa),
            C.body.appendChild(Oa),
            za(
                Oa,
                "ib-plus-icon",
                b.addEventTitle + "...",
                function () {
                    if (b.useTemplateWhenAddingNewEvent) {
                        var a = td(se, se, bf, bf);
                        R(a);
                        ud();
                    } else R(null, se, bf);
                },
                !0
            ),
            (si = ab(Oa)),
            (ri = za(Oa, "ib-close-icon", b.removeEventsTooltipText, function () {
                Tj(se, W);
            })),
            (qi = ab(Oa)),
            (Rg = za(Oa, "ib-circle-icon", b.pasteText, function () {
                Uh(se, Qb);
            })));
    }
    function Cj(a, b, d) {
        null !== Oa &&
            (ia(a) || nc(),
            (se = b),
            null !== Rg && ((b = 0 < la.length ? "block" : "none"), (qi.style.display = b), (Rg.style.display = b)),
            (d = wa(d) && 0 < d.length ? "block" : "none"),
            (si.style.display = d),
            (ri.style.display = d),
            Ha(),
            D(a),
            tf(a, Oa));
    }
    function xl() {
        null === pb &&
            ((pb = g("div", "calendar-context-menu")),
            Aa.push(pb),
            C.body.appendChild(pb),
            (ck = za(
                pb,
                "ib-close-icon",
                b.hideDayText,
                function () {
                    b.visibleDays.splice(b.visibleDays.indexOf(dk), 1);
                    nb = !1;
                    x(b.events.onOptionsUpdated, b);
                    F(v, !0, !0);
                },
                !0
            )),
            (ek = ab(pb)),
            (fk = za(pb, "ib-rhombus-hollow-icon", b.showOnlyWorkingDaysText, function () {
                1 <= b.workingDays.length &&
                    ((b.visibleDays = [].slice.call(b.workingDays)),
                    (nb = !1),
                    x(b.events.onOptionsUpdated, b),
                    F(v, !0, !0));
            })),
            (gk = ab(pb)),
            za(pb, "ib-octagon-hollow-icon", b.visibleDaysText + "...", function () {
                Nc(!0);
            }));
    }
    function Ui() {
        null !== Ka || m || (Ka = g("div", "disabled-background"));
    }
    function Vi() {
        if (!m) {
            null === cb && ((cb = g("div", "calendar-dialog event-editor")), Aa.push(cb), C.body.appendChild(cb));
            cb.innerHTML = n.empty;
            var a = g("div", "view");
            cb.appendChild(a);
            Sg = g("div", "disabled-area");
            a.appendChild(Sg);
            Tc = g("div", "title-bar");
            a.appendChild(Tc);
            Gd(Tc, cb, null);
            var c = g("div", "contents");
            a.appendChild(c);
            a = hk(c);
            te(
                a,
                b.eventText,
                function (a) {
                    ue(a, Wb, cb);
                },
                !0
            );
            te(a, b.typeText.replace(":", n.empty), function (a) {
                ue(a, Tg, cb);
            });
            te(a, b.repeatsText.replace(":", n.empty), function (a) {
                ue(a, Ug, cb);
            });
            te(a, b.optionalText, function (a) {
                ue(a, Vc, cb);
            });
            Wb = ve(c, !0, !1);
            Tg = ve(c, !1, !1);
            Ug = ve(c, !1, !1);
            Vc = ve(c, !1, !1);
            om();
            pm();
            qm();
            a = g("div", "buttons-container");
            c.appendChild(a);
            Pg = Ga(a, b.removeEventText, "remove", rm);
            Ef = Ga(a, b.addText, "add-update", ik);
            Ga(a, b.cancelText, "cancel", Uc);
        }
    }
    function om() {
        ra(Wb, b.titleText);
        var a = g("div", "input-title-container");
        Wb.appendChild(a);
        Bb = g("input", null, "text");
        a.appendChild(Bb);
        Bb.onkeydown = function (a) {
            a.keyCode === S.enter && ik();
        };
        0 < b.maximumEventTitleLength && (Bb.maxLength = b.maximumEventTitleLength);
        var c = function () {
            jk(null);
        };
        b.eventColorsEditingEnabled && (ti = Ga(a, "...", "select-colors", sm, b.selectColorsText));
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
        we = L(Wb, b.isAllDayText, c)[0];
        If = L(Wb, b.showAlertsText)[0];
        Jf = L(Wb, b.showAsBusyText)[0];
    }
    function pm() {
        var a = g("div", "radio-buttons-container");
        Ug.appendChild(a);
        rc = ja(a, b.repeatsNever, "RepeatType", Wc);
        Kf = ja(a, b.repeatsEveryDayText, "RepeatType", Wc);
        Lf = ja(a, b.repeatsEveryWeekText, "RepeatType", Wc);
        Mf = ja(a, b.repeatsEvery2WeeksText, "RepeatType", Wc);
        Nf = ja(a, b.repeatsEveryMonthText, "RepeatType", Wc);
        Of = ja(a, b.repeatsEveryYearText, "RepeatType", Wc);
        $b = ja(a, b.repeatsCustomText, "RepeatType", Wc);
        Vg = Ga(a, "...", "repeat-options", tm, b.repeatOptionsTitle);
        a = g("div", "split split-margin");
        Ug.appendChild(a);
        Xc = g("input", null, "number");
        Xc.setAttribute("min", "1");
        a.appendChild(Xc);
        var c = g("div", "radio-buttons-container split-contents");
        a.appendChild(c);
        Hd = ja(c, b.dailyText, "RepeatCustomType");
        Pf = ja(c, b.weeklyText, "RepeatCustomType");
        Qf = ja(c, b.monthlyText, "RepeatCustomType");
        Rf = ja(c, b.yearlyText, "RepeatCustomType");
    }
    function qm() {
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
        xe = g("input", null, "url");
        a.appendChild(xe);
        Ld = g("input", null, "text");
        a.appendChild(Ld);
        0 < b.maximumEventLocationLength && (Ld.maxLength = b.maximumEventLocationLength);
    }
    function Wc() {
        Vg.disabled = rc.checked;
        Rf.disabled = !$b.checked;
        Hd.disabled = !$b.checked;
        Pf.disabled = !$b.checked;
        Qf.disabled = !$b.checked;
        Xc.disabled = !$b.checked;
    }
    function jk(a) {
        a = p(a) ? a : ha;
        var b = !1;
        (a = p(a) && kb(a.locked) ? a.locked : !1)
            ? (b = !0)
            : we.checked && ((jb.value = Xb.value), (Yb.value = "00:00"), (Zb.value = "23:59"), (b = !0));
        jb.disabled = b;
        Yb.disabled = b;
        Zb.disabled = b;
        var d = ye(Xb),
            e = ye(jb);
        kk(jb, d);
        kk(Md, e);
        d > e && Cb(d, jb);
        a || (e > d || e < d ? ((b = !0), (rc.checked = !0)) : (b = !1));
        rc.disabled = b;
        Kf.disabled = b;
        Lf.disabled = b;
        Mf.disabled = b;
        Nf.disabled = b;
        Of.disabled = b;
        $b.disabled = b;
        Vg.disabled = b;
        Xc.disabled = b;
        Hd.disabled = b;
        Pf.disabled = b;
        Qf.disabled = b;
        Rf.disabled = b;
        a || Wc();
    }
    function R(a, c, d, e) {
        if (Vh(b.events.onBeforeEventAddEdit)) x(b.events.onBeforeEventAddEdit, a);
        else {
            Vb(C.body, Ka);
            var f = cb,
                k = void 0;
            k = p(k) ? k : 0;
            f = f.getElementsByClassName("tab");
            0 < f.length && f[k].click();
            Tg.innerHTML = n.empty;
            k = g("div", "radio-buttons-container");
            Tg.appendChild(k);
            for (var l in O) O.hasOwnProperty(l) && (O[l].eventEditorInput = ja(k, O[l].text, "Type"));
            p(a)
                ? (y(Tc, b.editEventTitle),
                  lk(a.type),
                  (Ef.value = b.updateText),
                  (Pg.style.display = "inline-block"),
                  (ha = a),
                  (Yb.value = zb(a.from, !1)),
                  (Zb.value = zb(a.to, !1)),
                  (we.checked = ui(a.isAllDay)),
                  (If.checked = ui(a.showAlerts, !0)),
                  (Jf.checked = ui(a.showAsBusy, !0)),
                  (Bb.value = G(a.title)),
                  (Kd.value = G(a.description)),
                  (Ld.value = G(a.location)),
                  (Jd.value = G(a.group)),
                  (xe.value = G(a.url)),
                  (ze.value = G(a.color, b.defaultEventBackgroundColor)),
                  (Ae.value = G(a.colorText, b.defaultEventTextColor)),
                  (Be.value = G(a.colorBorder, b.defaultEventBorderColor)),
                  (Xc.value = I(a.repeatEveryCustomValue, 1)),
                  (Id.value = I(a.alertOffset, 0)),
                  Cb(a.from, Xb),
                  Cb(a.to, jb),
                  (d = I(a.repeatEvery)),
                  d === w.never
                      ? (rc.checked = !0)
                      : d === w.everyDay
                        ? (Kf.checked = !0)
                        : d === w.everyWeek
                          ? (Lf.checked = !0)
                          : d === w.every2Weeks
                            ? (Mf.checked = !0)
                            : d === w.everyMonth
                              ? (Nf.checked = !0)
                              : d === w.everyYear
                                ? (Of.checked = !0)
                                : d === w.custom && ($b.checked = !0),
                  (c = I(a.repeatEveryCustomType)),
                  c === N.daily
                      ? (Hd.checked = !0)
                      : c === N.weekly
                        ? (Pf.checked = !0)
                        : c === N.monthly
                          ? (Qf.checked = !0)
                          : c === N.yearly && (Rf.checked = !0),
                  (c = Pc(a.repeatEveryExcludeDays)),
                  (Wg.checked = c.indexOf(1) > A.notFound),
                  (Xg.checked = c.indexOf(2) > A.notFound),
                  (Yg.checked = c.indexOf(3) > A.notFound),
                  (Zg.checked = c.indexOf(4) > A.notFound),
                  ($g.checked = c.indexOf(5) > A.notFound),
                  (ah.checked = c.indexOf(6) > A.notFound),
                  (bh.checked = c.indexOf(0) > A.notFound),
                  Cb(a.repeatEnds, Md),
                  (vi = d > w.never && p(e) && !W(a.from, e)),
                  (Sf = e))
                : ((e = new Date()),
                  (c = p(c) ? c : e),
                  ec(c) && (c.setHours(e.getHours()), c.setMinutes(e.getMinutes())),
                  (e = hb(c, b.defaultEventDuration)),
                  y(Tc, b.addEventTitle),
                  lk(),
                  (Ef.value = b.addText),
                  (Pg.style.display = "none"),
                  (ha = {}),
                  (we.checked = !1),
                  (If.checked = !0),
                  (Jf.checked = !0),
                  (Bb.value = n.empty),
                  (Kd.value = n.empty),
                  (Ld.value = n.empty),
                  (Jd.value = n.empty),
                  (xe.value = n.empty),
                  (ze.value = b.defaultEventBackgroundColor),
                  (Ae.value = b.defaultEventTextColor),
                  (Be.value = b.defaultEventBorderColor),
                  (rc.checked = !0),
                  (Wg.checked = !1),
                  (Xg.checked = !1),
                  (Yg.checked = !1),
                  (Zg.checked = !1),
                  ($g.checked = !1),
                  (ah.checked = !1),
                  (bh.checked = !1),
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
                  (vi = !1),
                  (Sf = null));
            t(Tc, "ib-close", b.closeTooltipText, Uc, !0);
            a = kf(a);
            for (var h in O) O.hasOwnProperty(h) && p(O[h].eventEditorInput) && (O[h].eventEditorInput.disabled = a);
            Ef.disabled = a;
            Xb.disabled = a;
            jb.disabled = a;
            Yb.disabled = a;
            Zb.disabled = a;
            we.disabled = a;
            If.disabled = a;
            Jf.disabled = a;
            Bb.disabled = a;
            Kd.disabled = a;
            Ld.disabled = a;
            Jd.disabled = a;
            xe.disabled = a;
            rc.disabled = a;
            Kf.disabled = a;
            Lf.disabled = a;
            Mf.disabled = a;
            Nf.disabled = a;
            Of.disabled = a;
            $b.disabled = a;
            Vg.disabled = a;
            Id.disabled = a;
            null !== ti && (ti.disabled = a);
            jk();
            gb.push(Uc);
            cb.style.display = "block";
            Bb.focus();
        }
    }
    function ud() {
        Bb.focus();
        Bb.select();
    }
    function ik() {
        var a = Yb.value.split(":"),
            c = Zb.value.split(":"),
            d = Nd(Bb.value),
            e = Nd(xe.value);
        if (2 > a.length) Tf(b.fromTimeErrorMessage);
        else if (2 > c.length) Tf(b.toTimeErrorMessage);
        else if (d === n.empty) Tf(b.titleErrorMessage);
        else if (0 < e.length && !mk(e)) Tf(b.urlErrorMessage);
        else {
            var f = ye(Xb),
                k = ye(jb),
                g = Nd(Kd.value),
                h = Nd(Ld.value),
                q = Nd(Jd.value),
                H = ye(Md, null),
                m = parseInt(Xc.value),
                t = um(),
                u = parseInt(Id.value);
            isNaN(m) && ((m = 0), (rc.checked = !0), (Hd.checked = !0));
            isNaN(u) && (u = 0);
            if (k < f) Tf(b.toSmallerThanFromErrorMessage);
            else {
                var x = function (a, c, f, k, l) {
                    l = p(l) ? l : !1;
                    ch(c, Yb.value);
                    ch(f, Zb.value);
                    l
                        ? ((ha.from = c), (ha.to = f), (ha.repeatEnds = k))
                        : ((l = p(a)),
                          (c = {
                              from: c,
                              to: f,
                              title: d,
                              description: g,
                              location: h,
                              group: q,
                              isAllDay: we.checked,
                              showAlerts: If.checked,
                              showAsBusy: Jf.checked,
                              color: ha.color,
                              colorText: ha.colorText,
                              colorBorder: ha.colorBorder,
                              repeatEveryExcludeDays: ha.repeatEveryExcludeDays,
                              repeatEnds: k,
                              url: e,
                              repeatEveryCustomValue: m,
                              type: t,
                              customTags: ha.customTags,
                              alertOffset: u,
                          }),
                          rc.checked
                              ? (c.repeatEvery = w.never)
                              : Kf.checked
                                ? (c.repeatEvery = w.everyDay)
                                : Lf.checked
                                  ? (c.repeatEvery = w.everyWeek)
                                  : Mf.checked
                                    ? (c.repeatEvery = w.every2Weeks)
                                    : Nf.checked
                                      ? (c.repeatEvery = w.everyMonth)
                                      : Of.checked
                                        ? (c.repeatEvery = w.everyYear)
                                        : $b.checked && (c.repeatEvery = w.custom),
                          Hd.checked
                              ? (c.repeatEveryCustomType = N.daily)
                              : Pf.checked
                                ? (c.repeatEveryCustomType = N.weekly)
                                : Qf.checked
                                  ? (c.repeatEveryCustomType = N.monthly)
                                  : Rf.checked && (c.repeatEveryCustomType = N.yearly),
                          l
                              ? (c.id = a)
                              : ((c.organizerName = b.organizerName),
                                (c.organizerEmailAddress = b.organizerEmailAddress)),
                          l
                              ? (r.updateEvent(a, c, !1), Ta(b.eventUpdatedText.replace("{0}", ha.title)))
                              : (r.addEvent(c, !1), Ta(b.eventAddedText.replace("{0}", c.title))),
                          b.isWidget ? F(v) : (Ia(), oa()));
                };
                vi
                    ? (Uf(),
                      Gf(
                          b.confirmEventUpdateTitle,
                          b.confirmEventUpdateMessage,
                          function () {
                              var a = new Date(Sf),
                                  b = new Date(Sf),
                                  c = new Date(Sf);
                              Od();
                              Za(c, -1);
                              x(ha.id, f, k, c, !0);
                              x(null, a, b, H);
                              Uc();
                          },
                          function () {
                              Od();
                              x(ha.id, f, k, H);
                              Uc();
                          },
                          !1,
                          !0,
                          b.forwardText,
                          b.seriesText
                      ))
                    : (x(ha.id, f, k, H), Uc());
            }
        }
    }
    function Uc(a) {
        Ce(a);
        ib(C.body, Ka);
        cb.style.display = "none";
    }
    function rm() {
        Uf();
        Gf(
            b.confirmEventRemoveTitle,
            b.confirmEventRemoveMessage,
            function () {
                Od();
                Uc();
                p(ha.id) &&
                    (r.removeEvent(ha.id, !0),
                    b.isWidget ? F(v) : oa(),
                    Ta(b.eventRemovedText.replace("{0}", ha.title)));
            },
            function () {
                Od();
            }
        );
    }
    function oa() {
        fb(Y) && Va(M);
        fb(ea) && Ac(Tb);
        fb(Ea) && Bc(ta);
        fb(sa) && Mh();
        fb(ka) && Kb(ca);
    }
    function td(a, c, d, e) {
        d = p(d) ? d : "09:00";
        e = p(e) ? d : "09:00";
        ch(a, d);
        ch(c, e);
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
            repeatEveryCustomType: N.daily,
            organizerName: n.empty,
            organizerEmailAddress: n.empty,
            type: 0,
            locked: !1,
            customTags: null,
            alertOffset: 0,
        };
        r.addEvent(a, !1);
        Ta(b.eventAddedText.replace("{0}", a.title));
        Ia();
        oa();
        lb();
        return a;
    }
    function kf(a) {
        return p(a) && kb(a.locked) ? a.locked : !1;
    }
    function Tf(a) {
        Gf(b.errorText, a, Od, null, !1, !1);
        Uf();
    }
    function Uf() {
        Sg.style.display = "block";
    }
    function Od() {
        Sg.style.display = "none";
    }
    function Wi() {
        if (!m && null === sc) {
            sc = g("div", "calendar-dialog event-editor-colors");
            Aa.push(sc);
            C.body.appendChild(sc);
            var a = g("div", "title-bar");
            y(a, b.selectColorsText);
            sc.appendChild(a);
            Gd(a, sc, null);
            t(a, "ib-close", b.closeTooltipText, dh, !0);
            a = g("div", "contents");
            sc.appendChild(a);
            var c = g("div", "section");
            a.appendChild(c);
            ra(c, b.backgroundColorText, "text-header");
            ze = g("input");
            c.appendChild(ze);
            hc(ze, "color");
            c = g("div", "section");
            a.appendChild(c);
            ra(c, b.textColorText, "text-header");
            Ae = g("input");
            c.appendChild(Ae);
            hc(Ae, "color");
            c = g("div", "section");
            a.appendChild(c);
            ra(c, b.borderColorText, "text-header");
            Be = g("input");
            c.appendChild(Be);
            hc(Be, "color");
            c = g("div", "buttons-container");
            a.appendChild(c);
            Ga(c, b.updateText, "update", vm);
            Ga(c, b.cancelText, "cancel", dh);
        }
    }
    function vm() {
        dh();
        ha.color = ze.value;
        ha.colorText = Ae.value;
        ha.colorBorder = Be.value;
    }
    function dh(a) {
        Ce(a);
        Od();
        sc.style.display = "none";
    }
    function sm() {
        gb.push(dh);
        sc.style.display = "block";
        Uf();
    }
    function Xi() {
        if (!m && null === tc) {
            tc = g("div", "calendar-dialog event-editor-repeat-options");
            Aa.push(tc);
            C.body.appendChild(tc);
            var a = g("div", "title-bar");
            y(a, b.repeatOptionsTitle);
            tc.appendChild(a);
            Gd(a, tc, null);
            t(a, "ib-close", b.closeTooltipText, eh, !0);
            a = g("div", "contents");
            tc.appendChild(a);
            var c = g("div", "section");
            a.appendChild(c);
            ra(c, b.daysToExcludeText, "text-header");
            Wg = L(c, b.dayNames[0])[0];
            Xg = L(c, b.dayNames[1])[0];
            Yg = L(c, b.dayNames[2])[0];
            Zg = L(c, b.dayNames[3])[0];
            $g = L(c, b.dayNames[4])[0];
            ah = L(c, b.dayNames[5])[0];
            bh = L(c, b.dayNames[6])[0];
            c = g("div", "section");
            a.appendChild(c);
            ra(c, b.repeatEndsText, "text-header");
            Md = g("input");
            c.appendChild(Md);
            hc(Md, "date");
            c = g("div", "buttons-container");
            a.appendChild(c);
            Ga(c, b.updateText, "update", wm);
            Ga(c, b.cancelText, "cancel", eh);
        }
    }
    function wm() {
        eh();
        var a = [];
        Wg.checked && a.push(1);
        Xg.checked && a.push(2);
        Yg.checked && a.push(3);
        Zg.checked && a.push(4);
        $g.checked && a.push(5);
        ah.checked && a.push(6);
        bh.checked && a.push(0);
        ha.repeatEveryExcludeDays = a;
    }
    function eh(a) {
        Ce(a);
        Od();
        tc.style.display = "none";
    }
    function tm() {
        gb.push(eh);
        tc.style.display = "block";
        Uf();
    }
    function Yi() {
        if (!m && null === Yc) {
            Yc = g("div", "calendar-dialog message");
            Aa.push(Yc);
            C.body.appendChild(Yc);
            wi = g("div", "title-bar");
            Yc.appendChild(wi);
            var a = g("div", "contents");
            Yc.appendChild(a);
            xi = g("div", "text");
            a.appendChild(xi);
            var c = L(a, b.removeAllEventsInSeriesText);
            Qg = c[0];
            yi = c[1];
            Vf = g("div", "buttons-container");
            a.appendChild(Vf);
        }
    }
    function Gf(a, c, d, e, f, k, l, h) {
        f = p(f) ? f : !1;
        k = p(k) ? k : !0;
        var E = p(l) ? l : b.yesText,
            r = p(h) ? h : b.noText;
        Vf.innerHTML = n.empty;
        var q = g("input", "yes-ok", "button");
        q.value = E;
        Vf.appendChild(q);
        E = g("input", "no", "button");
        E.value = r;
        Vf.appendChild(E);
        gb.push(!1);
        Yc.style.display = "block";
        y(wi, a);
        y(xi, c);
        q.onclick = nk;
        q.addEventListener("click", d);
        E.onclick = nk;
        Zc(e) && E.addEventListener("click", e);
        p(l) ||
            p(h) ||
            (k
                ? ((E.style.display = "inline-block"), (q.value = b.yesText))
                : ((E.style.display = "none"), (q.value = b.okText)));
        f ? ((yi.style.display = "block"), (Qg.checked = !1)) : ((yi.style.display = "none"), (Qg.checked = !0));
    }
    function nk() {
        gb.pop();
        Yc.style.display = "none";
    }
    function ql() {
        if (!m && null === uc) {
            uc = g("div", "calendar-dialog export-events");
            Aa.push(uc);
            C.body.appendChild(uc);
            var a = g("div", "title-bar");
            y(a, b.exportEventsTitle);
            uc.appendChild(a);
            Gd(a, uc, null);
            t(a, "ib-close", b.closeTooltipText, fh, !0);
            a = g("div", "contents");
            uc.appendChild(a);
            Ua = g("input", null, "text");
            Ua.placeholder = b.exportFilenamePlaceholderText;
            a.appendChild(Ua);
            Ua.onkeydown = function (a) {
                a.keyCode === S.enter && ok();
            };
            Db = L(a, b.copyToClipboardOnlyText, pk)[0];
            gh = g("div", "split options");
            a.appendChild(gh);
            var c = g("div", "radio-buttons-container split-contents");
            gh.appendChild(c);
            var d = g("div", "radio-buttons-container split-contents");
            gh.appendChild(d);
            zi = ja(c, "CSV", "ExportType");
            qk = ja(c, "XML", "ExportType");
            rk = ja(c, "JSON", "ExportType");
            sk = ja(c, "TXT", "ExportType");
            tk = ja(d, "iCAL", "ExportType");
            uk = ja(d, "MD", "ExportType");
            vk = ja(d, "HTML", "ExportType");
            wk = ja(d, "TSV", "ExportType");
            c = g("div", "buttons-container");
            a.appendChild(c);
            Ga(c, b.exportText, "export", ok);
            Ga(c, b.cancelText, "cancel", fh);
        }
    }
    function pk() {
        Ua.disabled = Db.checked;
    }
    function ed(a) {
        Vb(C.body, Ka);
        Ib();
        gb.push(fh);
        uc.style.display = "block";
        vc = a;
        zi.checked = !0;
        Ua.value = n.empty;
        Db.checked = !1;
        pk();
        Ua.focus();
    }
    function fh(a) {
        Ce(a);
        ib(C.body, Ka);
        uc.style.display = "none";
    }
    function ok() {
        fh();
        zi.checked
            ? wc(vc, "csv", Ua.value, Db.checked)
            : qk.checked
              ? wc(vc, "xml", Ua.value, Db.checked)
              : rk.checked
                ? wc(vc, "json", Ua.value, Db.checked)
                : sk.checked
                  ? wc(vc, "text", Ua.value, Db.checked)
                  : tk.checked
                    ? wc(vc, "ical", Ua.value, Db.checked)
                    : uk.checked
                      ? wc(vc, "md", Ua.value, Db.checked)
                      : vk.checked
                        ? wc(vc, "html", Ua.value, Db.checked)
                        : wk.checked && wc(vc, "tsv", Ua.value, Db.checked);
    }
    function rl() {
        if (!m && null === ma) {
            ma = g("div", "calendar-dialog search");
            Aa.push(ma);
            C.body.appendChild(ma);
            var a = g("div", "title-bar");
            y(a, b.searchEventsTitle);
            ma.appendChild(a);
            Gd(a, ma, function () {
                Ai = !0;
                Wf();
            });
            a.ondblclick = Bi;
            var c = t(a, "ib-close", b.closeTooltipText, ld);
            c.onmousedown = D;
            c.onmouseup = D;
            Pd = t(a, "ib-minus", b.minimizedTooltipText, Bi);
            Pd.onmousedown = D;
            Pd.onmouseup = D;
            ac = g("div", "contents");
            ma.appendChild(ac);
            a = g("div", "history-container");
            ac.appendChild(a);
            pa = g("input", null, "text");
            pa.placeholder = b.searchTextBoxPlaceholder;
            pa.oninput = De;
            pa.onpropertychange = De;
            pa.onkeypress = xm;
            a.appendChild(pa);
            qb = g("div", "ib-arrow-down-full");
            qb.style.display = "none";
            qb.onclick = ym;
            a.appendChild(qb);
            Ab = g("div", "history-dropdown custom-scroll-bars");
            a.appendChild(Ab);
            a = g("div", "checkbox-container");
            ac.appendChild(a);
            hh = L(a, b.notSearchText, bc)[0];
            ih = L(a, b.matchCaseText, bc)[0];
            Ee = L(a, b.advancedText + ":", zm)[0];
            Ee.checked = !0;
            Xf = g("div", "advanced");
            ac.appendChild(Xf);
            var d = g("div", "split");
            Xf.appendChild(d);
            c = g("div", "split-contents");
            d.appendChild(c);
            a = g("div", "split-contents");
            d.appendChild(a);
            ra(c, b.includeText, "text-header");
            d = g("div", "checkbox-container");
            c.appendChild(d);
            Yf = L(d, b.titleText.replace(":", n.empty), bc)[0];
            jh = L(d, b.locationText.replace(":", n.empty), bc)[0];
            kh = L(d, b.descriptionText.replace(":", n.empty), bc)[0];
            lh = L(d, b.groupText.replace(":", n.empty), bc)[0];
            mh = L(d, b.urlText.replace(":", n.empty), bc)[0];
            Yf.checked = !0;
            ra(a, b.optionsText, "text-header");
            c = g("div", "radio-buttons-container");
            a.appendChild(c);
            nh = ja(c, b.startsWithText, "SearchOptionType", bc);
            oh = ja(c, b.endsWithText, "SearchOptionType", bc);
            ph = ja(c, b.containsText, "SearchOptionType", bc);
            ph.checked = !0;
            a = g("div", "buttons-container");
            ac.appendChild(a);
            qh = Ga(a, b.previousText, "previous", xk);
            rh = Ga(a, b.nextText, "next", yk);
        }
    }
    function zm() {
        Xf.style.display = Ee.checked ? "block" : "none";
        Th();
        Wf();
    }
    function bc() {
        Wf();
        De(!1);
    }
    function De(a) {
        a = p(a) ? a : !0;
        0 < Eb.length && zk(z, " focused-event");
        qh.disabled = !0;
        rh.disabled = pa.value === n.empty;
        Eb = [];
        $c = 0;
        Ci = null;
        a && Ak();
        Wf();
    }
    function ee() {
        "block" !== ma.style.display &&
            ((Eb = []),
            (ma.style.display = "block"),
            De(!1),
            (pa.value = u.lastSearchText),
            (hh.checked = u.not),
            (ih.checked = u.matchCase),
            (Ee.checked = u.showAdvanced),
            (Yf.checked = u.searchTitle),
            (jh.checked = u.searchLocation),
            (kh.checked = u.searchDescription),
            (lh.checked = u.searchGroup),
            (mh.checked = u.searchUrl),
            (nh.checked = u.startsWith),
            (oh.checked = u.endsWith),
            (ph.checked = u.contains),
            (Xf.style.display = Ee.checked ? "block" : "none"),
            Th());
        "block" !== ac.style.display && Bi();
        pa.focus();
        pa.select();
        0 < u.history.length && (qb.style.display = "block");
    }
    function Th() {
        null === ma ||
            Ai ||
            m ||
            (Da(u.left)
                ? (ma.style.left = u.left + "px")
                : (ma.style.left = ba.innerWidth / 2 - ma.offsetWidth / 2 + "px"),
            Da(u.top)
                ? (ma.style.top = u.top + "px")
                : (ma.style.top = ba.innerHeight / 2 - ma.offsetHeight / 2 + "px"));
    }
    function ld() {
        var a = !1;
        null !== ma && "block" === ma.style.display && ((ma.style.display = "none"), De(), (a = !0));
        return a;
    }
    function Bi() {
        "block" === ac.style.display
            ? ((ac.style.display = "none"), (Pd.className = "ib-square-hollow"), Ra(Pd, b.restoreTooltipText))
            : ((ac.style.display = "block"), (Pd.className = "ib-minus"), Ra(Pd, b.minimizedTooltipText));
    }
    function xk() {
        if (0 < $c) {
            $c--;
            var a = Eb[$c];
            Bk();
            F(a.from);
            Ck(a);
        }
    }
    function xm(a) {
        a.keyCode === S.enter && ia(a) && !qh.disabled ? xk() : a.keyCode !== S.enter || rh.disabled ? Ak() : yk();
    }
    function yk() {
        if (0 === Eb.length) {
            var a = "day-",
                b = hh.checked,
                d = ih.checked,
                e = d ? pa.value : pa.value.toLowerCase(),
                f = {},
                k = vb(Bd()),
                g = k.length,
                h = Ma(),
                n = h === Y,
                p = h === sa,
                r = h === ea;
            h = h === ka;
            n ? (a = "full-day-") : p ? (a = "month-") : r ? (a = "week-day-") : h && (a = "timeline-day-");
            Wf(!0);
            for (var q = 0; q < g; q++) {
                var m = k[q];
                if (he(m)) {
                    var t = G(m.title),
                        u = G(m.location),
                        w = G(m.description),
                        x = G(m.group),
                        v = G(m.url),
                        y = !1;
                    d ||
                        ((t = t.toLowerCase()),
                        (w = w.toLowerCase()),
                        (u = u.toLowerCase()),
                        (x = x.toLowerCase()),
                        (v = v.toLowerCase()));
                    Yf.checked && Zf(t, e)
                        ? (y = !0)
                        : jh.checked && Zf(u, e)
                          ? (y = !0)
                          : kh.checked && Zf(w, e)
                            ? (y = !0)
                            : lh.checked && Zf(x, e)
                              ? (y = !0)
                              : mh.checked && Zf(v, e) && (y = !0);
                    b && (y = !y);
                    !y ||
                        (null === Ca(a + m.id) && (n || p || r || h)) ||
                        (n || p || r || h
                            ? Eb.push(re(m, !1))
                            : ((t = m.from.getMonth() + "-" + m.from.getFullYear()),
                              f.hasOwnProperty(t) || (Eb.push(re(m, !1)), (f[t] = !0))));
                }
            }
        } else $c++;
        Bk();
        0 < Eb.length && ((a = Eb[$c]), F(new Date(a.from)), Ck(a));
    }
    function Ck(a) {
        var b = "day-",
            d = Ma(),
            e = d === Y,
            f = d === sa,
            k = d === ea;
        d = d === ka;
        zk(z, " focused-event");
        e ? (b = "full-day-") : f ? (b = "month-") : k ? (b = "week-day-") : d && (b = "timeline-day-");
        b = Ca(b + a.id);
        if (null !== b && ((b.className += " focused-event"), (Ci = a.id), e || f || k || d))
            for (a = b.parentNode; ; ) {
                if (0 < a.scrollHeight && a.scrollHeight > a.offsetHeight) {
                    a.scrollTop = b.offsetTop;
                    break;
                }
                a = a.parentNode;
            }
    }
    function Bk() {
        qh.disabled = 0 === $c;
        rh.disabled = $c === Eb.length - 1 || 0 === Eb.length;
    }
    function Zf(a, b) {
        return nh.checked
            ? qa(a, b)
            : oh.checked
              ? a.substring(a.length - b.length, a.length) === b
              : a.indexOf(b) > A.notFound;
    }
    function Wf(a) {
        a = p(a) ? a : !1;
        rd(Na.searchOptionsChanged);
        var c = Nd(pa.value);
        a && (qb.style.display = "block");
        od(
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
                        (u.not = hh.checked),
                        (u.matchCase = ih.checked),
                        (u.showAdvanced = Ee.checked),
                        (u.searchTitle = Yf.checked),
                        (u.searchLocation = jh.checked),
                        (u.searchDescription = kh.checked),
                        (u.searchGroup = lh.checked),
                        (u.searchUrl = mh.checked),
                        (u.startsWith = nh.checked),
                        (u.endsWith = oh.checked),
                        (u.contains = ph.checked),
                        Ai && ((u.left = ma.offsetLeft), (u.top = ma.offsetTop)),
                        x(b.events.onSearchOptionsUpdated, u);
            },
            2e3,
            !1
        );
    }
    function Ak() {
        var a = u.history.length;
        0 < a
            ? ((qb.style.display = "block"),
              rd(Na.searchEventsHistoryDropDown),
              od(
                  Na.searchEventsHistoryDropDown,
                  function () {
                      var b = pa.value,
                          d = !1;
                      if (Nd(b) !== n.empty) {
                          Dk();
                          Ab.innerHTML = n.empty;
                          for (var e = 0; e < a; e++) {
                              var f = u.history[e],
                                  k = b;
                              f.substring(0, k.length).toLowerCase() === k.toLowerCase() &&
                                  f.toLowerCase() !== b.toLowerCase() &&
                                  (Ek(u.history[e], b.length), (d = !0));
                          }
                      }
                      d ? Fk() : Ye();
                  },
                  150,
                  !1
              ))
            : (qb.style.display = "none");
    }
    function Dk() {
        u.history.sort(function (a, b) {
            var c = 0;
            a = a.toLowerCase();
            b = b.toLowerCase();
            a < b ? (c = -1) : a > b && (c = 1);
            return c;
        });
    }
    function ym(a) {
        D(a);
        if ("block" !== Ab.style.display) {
            Dk();
            a = u.history.length;
            Ab.innerHTML = n.empty;
            pa.focus();
            for (var b = 0; b < a; b++) Ek(u.history[b], 0);
            Fk();
        } else Ye();
    }
    function Ek(a, b) {
        var c = g("div", "history-dropdown-item");
        Ab.appendChild(c);
        var e = g("span", "search-search");
        y(e, a.substring(0, b));
        c.appendChild(e);
        e = g("span");
        y(e, a.substring(b));
        c.appendChild(e);
        c.onclick = function (b) {
            D(b);
            Ye();
            pa.value = a;
            pa.selectionStart = pa.selectionEnd = pa.value.length;
            pa.focus();
            De(!1);
        };
    }
    function Ye() {
        var a = !1;
        null !== Ab &&
            "ib-arrow-up-full" === qb.className &&
            ((Ab.style.display = "none"), (qb.className = "ib-arrow-down-full"), (a = !0));
        return a;
    }
    function Fk() {
        null !== Ab &&
            "ib-arrow-down-full" === qb.className &&
            ((Ab.style.display = "block"), (qb.className = "ib-arrow-up-full"));
    }
    function sl() {
        if (!m && null === Fb) {
            Fb = g("div", "calendar-dialog configuration");
            Aa.push(Fb);
            C.body.appendChild(Fb);
            var a = g("div", "title-bar");
            y(a, b.configurationTitleText);
            Fb.appendChild(a);
            Gd(a, Fb, null);
            t(a, "ib-close", b.closeTooltipText, Gk, !0);
            a = g("div", "contents");
            Fb.appendChild(a);
            var c = hk(a);
            te(
                c,
                b.displayTabText,
                function (a) {
                    ue(a, Qd, Fb);
                },
                !0
            );
            te(c, b.organizerTabText, function (a) {
                ue(a, Fe, Fb);
            });
            Qd = ve(a, !0, !1);
            Fe = ve(a, !1, !1);
            Di = L(Qd, b.enableAutoRefreshForEventsText)[0];
            Ei = L(Qd, b.enableBrowserNotificationsText, null, null, null, "checkbox-tabbed-in")[0];
            Fi = L(Qd, b.enableTooltipsText, null, null, null, "checkbox-tabbed-down")[0];
            Gi = L(Qd, b.enableDragAndDropForEventText)[0];
            Hi = L(Qd, b.showHolidaysInTheDisplaysText)[0];
            ra(Fe, b.organizerNameText);
            sh = g("input", null, "text");
            Fe.appendChild(sh);
            ra(Fe, b.organizerEmailAddressText);
            th = g("input", null, "email");
            Fe.appendChild(th);
            c = g("div", "buttons-container");
            a.appendChild(c);
            Ga(c, b.updateText, "update", Am);
            Ga(c, b.cancelText, "cancel", Gk);
        }
    }
    function Am() {
        Di.checked ? r.startTheAutoRefreshTimer() : r.stopTheAutoRefreshTimer();
        b.eventNotificationsEnabled = Ei.checked;
        b.tooltipsEnabled = Fi.checked;
        b.dragAndDropForEventsEnabled = Gi.checked;
        b.showHolidays = Hi.checked;
        b.organizerName = sh.value;
        b.organizerEmailAddress = th.value;
        nb = !1;
        x(b.events.onOptionsUpdated, b);
        Ii();
        Ji();
        F(v, !0, !0);
        Ta(b.configurationUpdatedText);
    }
    function Gk() {
        Ji();
    }
    function dj() {
        Vb(C.body, Ka);
        Di.checked = $f;
        Ei.checked = b.eventNotificationsEnabled;
        Fi.checked = b.tooltipsEnabled;
        Gi.checked = b.dragAndDropForEventsEnabled;
        Hi.checked = b.showHolidays;
        sh.value = b.organizerName;
        th.value = b.organizerEmailAddress;
        gb.push(Ji);
        Fb.style.display = "block";
    }
    function Ji(a) {
        Ce(a);
        ib(C.body, Ka);
        Fb.style.display = "none";
    }
    function he(a) {
        var c = G(a.group),
            d = c.toLowerCase();
        a = I(a.type);
        var e = !0;
        c !== n.empty
            ? p(Q.visibleGroups) && (e = Q.visibleGroups.indexOf(d) > A.notFound)
            : (e = !b.hideEventsWithoutGroupAssigned);
        e && p(Q.visibleEventTypes) && O.hasOwnProperty(a) && (e = Q.visibleEventTypes.indexOf(a) > A.notFound);
        return e;
    }
    function tl() {
        if (!m && null === xc && b.jumpToDateEnabled) {
            xc = g("div", "calendar-dialog jump-to-date");
            Aa.push(xc);
            C.body.appendChild(xc);
            var a = g("div", "title-bar");
            y(a, b.jumpToDateTitle);
            xc.appendChild(a);
            Gd(a, xc, null);
            t(a, "ib-close", b.closeTooltipText, uh, !0);
            var c = g("div", "contents");
            xc.appendChild(c);
            cc = g("input", null, "date");
            c.appendChild(cc);
            a = g("div", "buttons-container");
            c.appendChild(a);
            c = Ga(a, b.goText, "go", Hk);
            Ga(a, b.cancelText, "cancel", uh);
            c.onkeydown = function (a) {
                a.keyCode === S.enter && Hk();
            };
        }
    }
    function de() {
        if (Ma() !== sa && b.jumpToDateEnabled) {
            Vb(C.body, Ka);
            Ib();
            var a = Ma();
            null === a
                ? (x(b.events.onSetDate, cc), Cb(v, cc))
                : a === Y
                  ? Cb(M, cc)
                  : a === ea
                    ? Cb(Tb, cc)
                    : a === Ea
                      ? Cb(new Date(ta, 0, 1), cc)
                      : a === ka && Cb(ca, cc);
            gb.push(uh);
            xc.style.display = "block";
            cc.focus();
        }
    }
    function uh(a) {
        Ce(a);
        ib(C.body, Ka);
        xc.style.display = "none";
    }
    function Hk() {
        var a = Ma(),
            c = ye(cc);
        c.getFullYear() >= b.minimumYear &&
            c.getFullYear() <= b.maximumYear &&
            (null === a
                ? (F(c), sb())
                : a === Y
                  ? Va(c)
                  : a === ea
                    ? Ac(c)
                    : a === Ea
                      ? Bc(c.getFullYear())
                      : a === ka && Kb(c),
            uh());
    }
    function Zi() {
        null === V &&
            ((V = g("div", "calendar-tooltip")),
            Aa.push(V),
            C.body.appendChild(V),
            (Ki = g("div", "ib-close")),
            (vh = g("div", "ib-edit")),
            (wh = g("div", "title-buttons")),
            wh.appendChild(Ki),
            wh.appendChild(vh),
            (Rd = g("div", "title")),
            (ag = g("div", "date")),
            (Sd = g("div", "duration")),
            (bg = g("div", "repeats")),
            (cg = g("div", "description")),
            (dg = g("div", "location")),
            (Td = g("div", "url")),
            (Ki.onclick = kc),
            (vh.onclick = function () {
                R(Dd);
            }),
            document.body.addEventListener("mousemove", kc));
    }
    function gi(a, c, d, e) {
        D(a);
        rd(Na.showToolTip);
        kc();
        e = p(e) ? e : !1;
        if ("block" !== V.style.display && b.tooltipsEnabled) {
            var f = T(d) ? b.tooltipDelay : b.eventTooltipDelay;
            od(
                Na.showToolTip,
                function () {
                    if (e || (!C.body.contains(Ka) && !Hg() && !Xj() && null === da)) {
                        d = p(d) ? d : n.empty;
                        V.className = d === n.empty ? "calendar-tooltip-event" : "calendar-tooltip";
                        if (T(d)) y(V, d);
                        else if (
                            ((Dd = c),
                            (V.innerHTML = n.empty),
                            (Rd.innerHTML = n.empty),
                            (Sd.innerHTML = n.empty),
                            (Td.innerHTML = n.empty),
                            !x(b.events.onToolTipEventRender, V, c))
                        ) {
                            V.onmousemove = D;
                            V.appendChild(wh);
                            V.appendChild(Rd);
                            V.appendChild(ag);
                            V.appendChild(Sd);
                            Wa(vh, b.manualEditingEnabled);
                            if (Xa(c.url)) {
                                var f = fa(Td, Bm(c.url), "url-text");
                                Vb(V, Td);
                                f.onclick = function (a) {
                                    D(a);
                                    pi(c.url);
                                    kc();
                                };
                            } else (Td.innerHTML = n.empty), (Td.onclick = null), ib(V, Td);
                            I(c.repeatEvery) > w.never &&
                                b.showReoccurringEventIcons &&
                                ((f = g("div", "ib-refresh-medium ib-no-hover ib-no-active")),
                                (f.style.borderColor = Rd.style.color),
                                Rd.appendChild(f));
                            Rd.innerHTML += mc(c.title);
                            Da(c.repeatEvery) && c.repeatEvery > w.never
                                ? (y(bg, b.repeatsText.replace(":", n.empty) + n.space + qd(c.repeatEvery)), Vb(V, bg))
                                : ((bg.innerHTML = n.empty), ib(V, bg));
                            Xa(c.location) ? (y(dg, c.location), Vb(V, dg)) : ((dg.innerHTML = n.empty), ib(V, dg));
                            Xa(c.description)
                                ? (y(cg, c.description), Vb(V, cg))
                                : ((cg.innerHTML = n.empty), ib(V, cg));
                            c.from.getDate() === c.to.getDate()
                                ? c.isAllDay
                                    ? y(ag, b.allDayText)
                                    : (y(ag, ce(c.from, c.to)), y(Sd, Pb(c.from, c.to)))
                                : (Ve(ag, c.from, c.to), y(Sd, Pb(c.from, c.to)));
                            Sd.innerHTML === n.empty && V.removeChild(Sd);
                        }
                        tf(a, V);
                    }
                },
                f,
                !1
            );
        }
    }
    function kc() {
        rd(Na.showToolTip);
        Ik() && ((V.style.display = "none"), (Dd = null), (V.onmousemove = null));
    }
    function Ik() {
        return Li(Na.showToolTip) || (null !== V && "block" === V.style.display);
    }
    function Ra(a, b, d) {
        null !== a &&
            (a.onmousemove = function (a) {
                gi(a, null, b, d);
            });
    }
    function Ta(a, c) {
        null !== gc &&
            b.popUpNotificationsEnabled &&
            ((c = p(c) ? c : !0),
            rd(Na.hideNotification),
            (gc.innerHTML = n.empty),
            (c = g("div", c ? "success" : "error")),
            gc.appendChild(c),
            (gc.style.display = "block"),
            y(c, a),
            t(c, "ib-close-icon", b.closeTooltipText, Jk),
            od(
                Na.hideNotification,
                function () {
                    Jk();
                },
                5e3,
                !1
            ));
    }
    function Jk() {
        gc.style.display = "none";
    }
    function Hh(a, c) {
        if (null !== a) {
            c = p(c) ? c : !0;
            var d = b.dayHeaderNames.length;
            a.innerHTML = n.empty;
            b.startOfWeekDay === xa.saturday || b.startOfWeekDay === xa.sunday
                ? (Mi(a, b.startOfWeekDay, d), Mi(a, 0, b.startOfWeekDay))
                : Mi(a, 0, d);
            b.reverseOrderDaysOfWeek && c && md(a);
        }
    }
    function Mi(a, c, d) {
        for (; c < d; c++) b.visibleDays.indexOf(c) > A.notFound && Cm(a, c);
    }
    function Cm(a, c) {
        var d = b.dayHeaderNames[c],
            e = g("div", Ag());
        y(e, d);
        a.appendChild(e);
        e.oncontextmenu = function (a) {
            if (!m && (ia(a) || nc(), Ha(), b.sideMenu.showDays)) {
                dk = c;
                var d = 1 < b.visibleDays.length ? "block" : "none",
                    e = 1 <= b.workingDays.length && !$d(b.workingDays, b.visibleDays) ? "block" : "none";
                ck.style.display = d;
                ek.style.display = d;
                fk.style.display = e;
                gk.style.display = e;
                D(a);
                tf(a, pb);
            }
        };
        e.ondblclick = function (a) {
            if (!m) {
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
                d && ((nb = !1), x(b.events.onOptionsUpdated, b), F(v, !0, !0));
            }
        };
    }
    function gf(a) {
        Ma() !== a &&
            (Kk(a, !1), wb.push(a), xh++, fb(a) || (a.className += " view-shown"), (a.style.zIndex = xh), ld(), of());
    }
    function xd(a, b) {
        fb(a) && ((a.className = a.className.replace(" view-shown", n.empty)), Kk(a, b), 0 === wb.length && (xh = 0));
    }
    function Kk(a, b) {
        b = p(b) ? b : !0;
        for (var c = [], e = wb.length, f = 0; f < e; f++) {
            var k = wb[f];
            p(k) && k.id !== a.id && c.push(k);
        }
        wb = [].slice.call(c);
        b && of();
    }
    function fb(a) {
        return p(a) && a.className && a.className.indexOf("view-shown") > A.notFound;
    }
    function zj(a) {
        a = p(a) ? a : !0;
        var b = Ma();
        xd(b, !a);
        0 === wb.length && (xh = 0);
        a && of();
    }
    function Ma() {
        return 0 < wb.length ? wb[wb.length - 1] : null;
    }
    function of(a) {
        a = p(a) ? a : !0;
        var c = Ma(),
            d = null;
        null === c
            ? (d = tb.fullMonth)
            : c === Y
              ? (d = tb.fullDay)
              : c === ea
                ? (d = tb.fullWeek)
                : c === Ea
                  ? (d = tb.fullYear)
                  : c === ka
                    ? (d = tb.timeline)
                    : c === sa && (d = tb.allEvents);
        a && T(d) && x(b.events.onViewChange, d);
        return d;
    }
    function Ej(a, b) {
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
    function tg(a, b) {
        var c = We(b);
        b = na.floor((a.pageY - c.top) / (b.offsetHeight / 1440)) / 60;
        a = na.floor(b);
        b = na.round(60 * (b - a));
        return [a, b];
    }
    function Gj(a, c, d, e, f) {
        var k = c.offsetHeight,
            g = c.offsetHeight / 1440;
        c = 0;
        var h = null;
        if (!f.isAllDay) {
            h = I(f.repeatEvery);
            if (W(f.from, d) || h > w.never) c = g * eg(f.from);
            h = W(f.to, d) || h > w.never ? g * eg(f.to) - c : k;
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
    function lm(a, c, d, e) {
        var f = a.scrollWidth;
        var k = a.offsetWidth / 1440;
        a = 0;
        var g = I(e.repeatEvery);
        if (W(e.from, c) || g > w.never) a = k * eg(e.from);
        c = W(e.to, c) || g > w.never ? k * eg(e.to) - a : f;
        c -= 2 * b.spacing;
        a <= b.spacing && ((a += b.spacing), (c -= b.spacing));
        d.style.left = a + "px";
        null !== c && (d.style.width = c + "px");
        d.offsetLeft + d.offsetWidth > f - b.spacing
            ? ((f = f - d.offsetLeft - 4 * b.spacing + "px"), (d.style.width = f), (d.style.maxWidth = f))
            : (d.style.maxWidth = f - (d.offsetLeft + 2 * b.spacing) - k + "px");
        return a - b.spacing;
    }
    function Jj(a, b, d, e, f) {
        var c = 0;
        null !== d &&
            (ec(a) && fb(b) && f
                ? ((a = (e.offsetHeight / 1440) * eg(new Date())),
                  (d.style.display = "block"),
                  (d.style.top = a - d.offsetHeight / 2 + "px"),
                  (c = a))
                : (d.style.display = "none"));
        return c;
    }
    function Fj(a, b) {
        D(a);
        a = Pe(b, "z-index", !1);
        a = null === a || "auto" === a ? 1 : parseInt(a) + 1;
        b.style.zIndex = a.toString();
    }
    function Kj(a) {
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
                            q = k.offsetLeft,
                            m = k.offsetTop,
                            t = k.offsetHeight,
                            u = k.offsetWidth;
                        if (p + e.offsetHeight < m || p > m + t || h + r < q || h > q + u) g = !1;
                        g &&
                            ((g = G(e.getAttribute("event-position"))),
                            (h = G(k.getAttribute("event-position"))),
                            g === n.empty && h === n.empty
                                ? (yh(e),
                                  yh(k),
                                  (k.style.left = e.offsetLeft + e.offsetWidth + b.spacing + "px"),
                                  e.setAttribute("event-position", "left"),
                                  k.setAttribute("event-position", "right"))
                                : g === n.empty && "right" === h
                                  ? (yh(e),
                                    e.setAttribute("event-position", "left"),
                                    k.setAttribute("event-position", "right"))
                                  : g === n.empty &&
                                    "left" === h &&
                                    ((e.style.left = k.offsetLeft + k.offsetWidth + b.spacing + "px"),
                                    yh(e),
                                    e.setAttribute("event-position", "right"),
                                    k.setAttribute("event-position", "left")));
                    }
        }
    }
    function yh(a) {
        a.style.width = a.offsetWidth / 2 - (3 * b.spacing + b.spacing / 4) + "px";
    }
    function Dm(a, b) {
        var c = 0;
        a.offsetTop < b.offsetTop ? (c = -1) : a.offsetTop > b.offsetTop && (c = 1);
        return c;
    }
    function Dj(a, c, d) {
        D(a);
        null === ug
            ? 0 === a.dataTransfer.files.length
                ? Lk(a, c.getFullYear(), c.getMonth(), c.getDate())
                : Mk(a)
            : (W(xg, c) || ((da = Rb), (Ud = xg), Nk(a, c.getFullYear(), c.getMonth(), c.getDate())),
              (c = d.offsetHeight / 1440),
              (d = We(d)),
              (a = (na.abs(a.pageY) - d.top + wg - vg) / c),
              (Rb.from = hb(Rb.from, a)),
              (Rb.to = hb(Rb.to, a)),
              lb(),
              x(b.events.onEventUpdated, Rb),
              Ta(b.eventUpdatedText.replace("{0}", Rb.title)),
              oa(),
              (Rb = ug = null),
              (vg = wg = 0));
    }
    function Sh(a) {
        D(a);
        if (b.manualEditingEnabled) {
            var c = null;
            a = null;
            var d = 0;
            fb(Y) ? ((c = ya), (a = yg), (d = a.length)) : fb(ea) && ((c = ke), (a = bi), (d = a.length));
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
                        Ta(b.eventUpdatedText.replace("{0}", k.eventDetails.title)));
                }
                e && (lb(), oa());
            }
        }
    }
    function Ya() {
        sd ? Ok() : Pk();
    }
    function Pk() {
        !sd && b.fullScreenModeEnabled && (Qk(), x(b.events.onFullScreenModeChanged, !0));
    }
    function Ok() {
        sd &&
            b.fullScreenModeEnabled &&
            ((sd = !1),
            (z.className = z.className.replace(" full-screen-view", n.empty)),
            (z.style.cssText = Rk),
            Sk("ib-arrow-expand-left-right", b.enableFullScreenTooltipText),
            oa(),
            x(b.events.onFullScreenModeChanged, !1));
    }
    function Qk() {
        Rk = z.style.cssText;
        sd = !0;
        z.className += " full-screen-view";
        z.removeAttribute("style");
        Sk("ib-arrow-contract-left-right", b.disableFullScreenTooltipText);
        oa();
    }
    function Sk(a, b) {
        Ge(Eg, a);
        Ge(Wh, a);
        Ge(ki, a);
        Ge(Yh, a);
        Ge(ii, a);
        Ge(mi, a);
        Ra(Eg, b);
        Ra(Wh, b);
        Ra(ki, b);
        Ra(Yh, b);
        Ra(ii, b);
        Ra(mi, b);
    }
    function Xl(a, c, d) {
        if (b.showHolidays)
            for (var e = [], f = b.holidays.length, k = 0; k < f; k++) {
                var g = b.holidays[k],
                    h = G(g.title, n.empty),
                    p = G(g.backgroundColor, n.empty),
                    r = G(g.textColor, n.empty);
                Ij(g, a) && h !== n.empty && e.indexOf(h.toLowerCase())
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
        fa(c, d, f + e, k, !0, !0);
    }
    function Ij(a, b) {
        var c = I(a.day),
            e = I(a.month);
        a = I(a.year);
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
                        var e = Tk(rb[b][d]);
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
                return Uk(b.isAllDay) - Uk(a.isAllDay);
            }));
        return a;
    }
    function Tj(a, c) {
        Vb(C.body, Ka);
        var d = function () {
            ib(C.body, Ka);
        };
        Gf(
            b.confirmEventsRemoveTitle,
            b.confirmEventsRemoveMessage,
            function () {
                var e = 0;
                d();
                yb(function (b) {
                    I(b.repeatEvery) === w.never && c(b.from, a) && (r.removeEvent(b.id, !1), e++);
                });
                lb();
                Ta(b.eventsRemovedText.replace("{0}", e));
                La();
            },
            d
        );
    }
    function Tk(a) {
        a.isAllDay &&
            ((a.from = new Date(a.from.getFullYear(), a.from.getMonth(), a.from.getDate(), 0, 0)),
            (a.to = new Date(a.from.getFullYear(), a.from.getMonth(), a.from.getDate(), 23, 59)));
        return a;
    }
    function lk(a) {
        a = p(a) && O.hasOwnProperty(a) ? a : 0;
        for (var b in O) O.hasOwnProperty(b) && p(O[b].eventEditorInput) && (O[b].eventEditorInput.checked = !1);
        p(O[a].eventEditorInput) && (O[a].eventEditorInput.checked = !0);
    }
    function um() {
        var a = 0,
            b;
        for (b in O)
            if (O.hasOwnProperty(b) && p(O[b].eventEditorInput) && O[b].eventEditorInput.checked) {
                a = parseInt(b);
                break;
            }
        return a;
    }
    function W(a, b) {
        return a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
    }
    function Pj(a, b) {
        return a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
    }
    function Xe(a, b) {
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
    function Fg(a) {
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
    function Qc(a, b) {
        a = new Date(a.getFullYear(), a.getMonth(), a.getDate());
        b = new Date(b.getFullYear(), b.getMonth(), b.getDate());
        b = na.abs(b - a);
        return na.ceil(b / 864e5);
    }
    function zg(a) {
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
    function ie(a, b) {
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
    function ye(a, b) {
        b = void 0 !== b ? b : new Date();
        if (a.value !== n.empty)
            if ("date" === a.type) b = new Date(a.value + "T00:00:00Z");
            else if ((a = a.value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)))
                (a = new Date(a[3], a[2] - 1, a[1], 0, 0, 0, 0)), a instanceof Date && !isNaN(a) && (b = a);
        p(b) && (b = new Date(b.getTime() + na.abs(6e4 * b.getTimezoneOffset())));
        return b;
    }
    function kk(a, b) {
        if ("date" === a.type) {
            var c = ("0" + b.getDate()).slice(-2),
                e = ("0" + (b.getMonth() + 1)).slice(-2);
            a.setAttribute("min", b.getFullYear() + "-" + e + "-" + c);
        }
    }
    function ch(a, b) {
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
    function Lh(a, c) {
        var d = Z(c);
        a = a.replace("{dddd}", b.dayNames[d]);
        a = a.replace("{ddd}", b.dayNamesAbbreviated[d]);
        a = a.replace("{dd}", P(c.getDate()));
        a = a.replace("{d}", c.getDate());
        a = a.replace("{o}", Fg(c.getDate()));
        a = a.replace("{mmmm}", b.monthNames[c.getMonth()]);
        a = a.replace("{mmm}", b.monthNamesAbbreviated[c.getMonth()]);
        a = a.replace("{mm}", P(c.getMonth() + 1));
        a = a.replace("{m}", c.getMonth() + 1);
        a = a.replace("{yyyy}", c.getFullYear());
        a = a.replace("{yyy}", c.getFullYear().toString().substring(1));
        a = a.replace("{yy}", c.getFullYear().toString().substring(2));
        return (a = a.replace("{y}", parseInt(c.getFullYear().toString().substring(2)).toString()));
    }
    function Me(a) {
        if (b.startOfWeekDay === xa.saturday || b.startOfWeekDay === xa.sunday) a += 7 - b.startOfWeekDay;
        return a;
    }
    function Ue(a, b) {
        var c = I(a.repeatEvery);
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
            0 < c && (d += ":" + P(a.getMinutes()));
            d += e;
        } else d = P(a.getHours()) + ":" + P(a.getMinutes());
        return d;
    }
    function Ve(a, c, d) {
        a.innerHTML = n.empty;
        lc(a, c);
        fa(a, n.space + b.toTimeText + n.space);
        lc(a, d);
    }
    function lc(a, c, d, e, f) {
        d = p(d) ? d : !0;
        e = p(e) ? e : !0;
        (f = p(f) ? f : !1) && fa(a, b.dayNames[Z(c)] + ", ");
        Ob(a, c);
        fa(a, n.space + b.monthNames[c.getMonth()]);
        e && fa(a, n.space + c.getFullYear());
        d && fa(a, n.space + zb(c));
    }
    function Ob(a, c, d, e) {
        p(d) && fa(a, d);
        fa(a, c.getDate());
        b.showDayNumberOrdinals &&
            ((c = Fg(c.getDate())), p(c) && ((d = g("sup")), (d.innerText = c), a.appendChild(d)));
        p(e) && fa(a, e);
    }
    function $h(a, c, d, e) {
        if (!kf(c) && b.dragAndDropForEventsEnabled && b.manualEditingEnabled) {
            var f = new Date(d),
                k = 0 <= b.weekendDays.indexOf(f.getDay()) ? " drag-not-allowed-weekend-day" : " drag-not-allowed";
            a.setAttribute("draggable", !0);
            a.ondragstart = function (d) {
                x(b.events.onEventDragStart, c);
                d.dataTransfer.setData("event_details", dc.stringify(c));
                Ud = f;
                da = c;
                p(e) && ((e.className += k), Fm(e));
                zh(
                    "cell",
                    function (a) {
                        a.className += " prevent-pointer-events";
                    },
                    a
                );
                zh(
                    "events",
                    function (a) {
                        a.className += " prevent-pointer-events";
                    },
                    a
                );
            };
            a.ondragend = function () {
                x(b.events.onEventDragStop, da);
                da = Ud = null;
                p(e) &&
                    ((e.className = e.className.replace(k, n.empty)),
                    Bg(e, f.getFullYear(), f.getMonth(), f.getDate()));
                zh(
                    "cell",
                    function (a) {
                        a.className = a.className.replace(" prevent-pointer-events", n.empty);
                    },
                    a
                );
                zh(
                    "events",
                    function (a) {
                        a.className = a.className.replace(" prevent-pointer-events", n.empty);
                    },
                    a
                );
            };
        }
    }
    function Bg(a, c, d, e) {
        if (b.dragAndDropForEventsEnabled && b.manualEditingEnabled) {
            var f = new Date(c, d, e);
            a.ondragover = function (b) {
                Vk(b, a, f);
            };
            a.ondragenter = function (b) {
                Vk(b, a, f);
            };
            a.ondragleave = function (b) {
                Wk(b, a, f);
            };
            a.ondrop = function (b) {
                D(b);
                Wk(b, a, f);
                0 === b.dataTransfer.files.length ? Nk(b, c, d, e) : Mk(b);
            };
        }
    }
    function Fm(a) {
        b.dragAndDropForEventsEnabled &&
            b.manualEditingEnabled &&
            ((a.ondragover = null), (a.ondragenter = null), (a.ondragleave = null), (a.ondrop = null));
    }
    function Vk(a, b, d) {
        D(a);
        null === da || b.className.indexOf(" drag-over") !== A.notFound || W(Ud, d) || (b.className += " drag-over");
    }
    function Wk(a, b, d) {
        D(a);
        null !== da &&
            b.className.indexOf(" drag-over") > A.notFound &&
            !W(Ud, d) &&
            (b.className = b.className.replace(" drag-over", n.empty));
    }
    function Nk(a, c, d, e) {
        var f = new Date(c, d, e);
        if (null === da || W(Ud, f)) null === da && Lk(a, c, d, e);
        else {
            x(b.events.onEventDragDrop, da, f);
            p(e) || ((a = bd(c, d)), (e = da.from.getDate()), e > a && (e = a));
            var k = Qc(da.from, Ud);
            a = Qc(da.from, da.to);
            f = new Date(c, d, e, da.from.getHours(), da.from.getMinutes());
            c = new Date(c, d, e, da.to.getHours(), da.to.getMinutes());
            d = da.repeatEnds;
            0 < k && (f.setDate(f.getDate() - k), c.setDate(c.getDate() - k));
            p(d) && ((e = Qc(f, da.from)), f > da.from ? d.setDate(d.getDate() + e) : d.setDate(d.getDate() - e));
            0 < a && c.setDate(c.getDate() + a);
            r.updateEventDateTimes(da.id, f, c, d);
            Ta(b.eventUpdatedText.replace("{0}", da.title));
            La();
        }
    }
    function Lk(a, c, d, e) {
        a = Oe(a.dataTransfer.getData("event_details"));
        if (p(a) && null === da) {
            var f = new Date(a.from),
                k = new Date(a.to);
            a.from = new Date(c, d, e, f.getHours(), f.getMinutes(), 0, 0);
            a.to = new Date(c, d, e, k.getHours(), k.getMinutes(), 0, 0);
            r.addEvent(a);
            Ta(b.eventAddedText.replace("{0}", a.title));
        }
    }
    function Mk(a) {
        p(ba.FileReader) && b.importEventsEnabled && Ni(a.dataTransfer.files);
    }
    function Oe(a) {
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
    function Gd(a, b, d) {
        a.onmousedown = function (a) {
            Vd ||
                (Ha(),
                (Gb = b),
                (Vd = !0),
                (Xk = a.pageX - Gb.offsetLeft),
                (Yk = a.pageY - Gb.offsetTop),
                (Ah = Gb.offsetLeft),
                (Bh = Gb.offsetTop));
        };
        a.onmouseup = function () {
            Zk(d);
        };
        a.oncontextmenu = function () {
            Zk(null);
        };
    }
    function Zk(a) {
        Vd && ((Vd = !1), (Gb = null), (Bh = Ah = 0), null !== a && a());
    }
    function Fl(a) {
        Vd && ((Gb.style.left = a.pageX - Xk + "px"), (Gb.style.top = a.pageY - Yk + "px"));
    }
    function Gl() {
        Vd && ((Gb.style.left = Ah + "px"), (Gb.style.top = Bh + "px"), (Vd = !1), (Gb = null), (Bh = Ah = 0));
    }
    function hk(a) {
        var b = g("div");
        a.appendChild(b);
        return b;
    }
    function te(a, b, d, e) {
        e = p(e) ? e : !1;
        var c = g("div", "tab tab-control" + (e ? "-selected" : n.empty));
        y(c, b);
        a.appendChild(c);
        c.onclick = function () {
            d(c);
        };
    }
    function ve(a, b, d) {
        b = p(b) ? b : !1;
        d = p(d) ? d : !0;
        var c = g("div", "checkbox-container tab-content custom-scroll-bars");
        a.appendChild(c);
        d && (c.className += " custom-scroll-bars");
        b || (c.style.display = "none");
        return c;
    }
    function ue(a, b, d) {
        var c = d.getElementsByClassName("tab-control-selected"),
            f = c.length;
        d = d.getElementsByClassName("tab-content");
        for (var k = d.length, g = 0; g < f; g++) c[g].className = "tab tab-control";
        for (c = 0; c < k; c++) d[c].style.display = "none";
        a.className = "tab tab-control-selected";
        b.style.display = "block";
    }
    function ae(a, b, d, e) {
        e = p(e) ? e : !1;
        p(d) && d < new Date() && (a.className += " expired");
        e &&
            p(d) &&
            d < v &&
            (d.getFullYear() !== v.getFullYear() || d.getMonth() !== v.getMonth()) &&
            (a.className += " not-in-current-month");
        Xa(b.color)
            ? ((a.style.backgroundColor = b.color),
              Xa(b.colorText) && (a.style.color = b.colorText),
              Xa(b.colorBorder) && (a.style.borderColor = b.colorBorder))
            : b.isAllDay && (a.className += " all-day");
    }
    function ef(a, b) {
        Ci === b.id && (a.className += " focused-event");
        $k(b.id) && (a.className += " selected-event");
        for (var c = !1, e = la.length, f = 0; f < e; f++)
            if (la[f].id === b.id) {
                c = !0;
                break;
            }
        c && (a.className = Qb ? a.className + " cut-event" : a.className + " copy-event");
    }
    function fg(a, b, d) {
        d = p(d) ? d : !1;
        var c = C.getElementsByClassName("event");
        c = [].slice.call(c);
        for (var f = c.length, g = 0; g < f; g++) {
            var h = c[g],
                E = h.getAttribute("event-id");
            null !== E &&
                E === a.toString() &&
                (h.className = d ? h.className.replace(n.space + b, n.empty) : h.className + (n.space + b));
        }
    }
    function Yl(a, b) {
        if (ec(a) && !m) {
            a = new Date();
            var c = new Date(),
                e = new Date(),
                f = I(b.repeatEvery);
            a.setHours(b.from.getHours(), b.from.getMinutes(), 0, 0);
            c.setHours(b.to.getHours(), b.to.getMinutes(), 0, 0);
            f !== w.never || ec(b.from) || a.setHours(0, 0, 0, 0);
            f !== w.never || ec(b.to) || c.setHours(23, 59, 59, 99);
            Da(b.alertOffset) && 0 < b.alertOffset && (a = hb(a, -b.alertOffset));
            if (e >= a && e <= c) {
                if (!kb(b.showAsBusy) || b.showAsBusy) ne = !0;
                ((!al.hasOwnProperty(b.id) && !kb(b.showAlerts)) || b.showAlerts) &&
                    bl(
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
        al[a.id] = !0;
        new Notification(b.eventNotificationTitle, { body: b.eventNotificationBody.replace("{0}", a.title) }).onclick =
            function () {
                var c = G(a.url);
                c === n.empty ? R(a) : pi(c);
                x(b.events.onNotificationClicked, a);
            };
    }
    function Ii() {
        bl(function () {
            "granted" !== Notification.permission && Notification.requestPermission();
        });
    }
    function bl(a, c, d) {
        b.eventNotificationsEnabled &&
            !m &&
            ((c = p(c) ? c : !0),
            Notification ? a() : c && console.error("Browser notifications API unavailable."),
            p(d) && x(b.events.onNotification, d));
    }
    function pi(a) {
        ba.open(a, b.urlWindowTarget);
        x(b.events.onEventUrlClicked, a);
    }
    function fe(a) {
        a = p(a) ? a : !0;
        for (var b = la.length, d = 0; d < b; d++) {
            var e = la[d];
            Qb ? fg(e.id, "cut-event", a) : fg(e.id, "copy-event", a);
        }
    }
    function Zj(a) {
        la = [];
        var b = Fa.length;
        if (0 < b) for (a = 0; a < b; a++) la.push(Fa[a]);
        else la.push(a);
    }
    function $k(a) {
        for (var b = !1, d = Fa.length, e = 0; e < d; e++)
            if (Fa[e].id === a) {
                b = !0;
                break;
            }
        return b;
    }
    function Uh(a, c) {
        for (var d = la.length, e = 0; e < d; e++) {
            var f = la[e],
                g = Qc(f.from, f.to);
            f = c ? f : re(f);
            f.from.setDate(a.getDate());
            f.from.setMonth(a.getMonth());
            f.from.setFullYear(a.getFullYear());
            f.to.setDate(a.getDate());
            f.to.setMonth(a.getMonth());
            f.to.setFullYear(a.getFullYear());
            f.to.setDate(f.to.getDate() + g);
            c ? x(b.events.onEventUpdated, f) : ((f.id = null), r.addEvent(f, !1, !0));
        }
        Ta(b.eventsPastedText.replace("{0}", d));
        c && (nc(), (la = []), (Qb = !1));
        Ia();
        oa();
    }
    function ff(a, b) {
        D(a);
        Ha();
        if (kf(b)) ia(a) || nc();
        else if (ia(a))
            if ($k(b.id)) {
                a = Fa.length;
                for (var c = 0; c < a; c++)
                    if (Fa[c].id === b.id) {
                        Fa.splice(c, 1);
                        break;
                    }
                fg(b.id, "selected-event", !0);
            } else Fa.push(b), fg(b.id, "selected-event", !1);
        else nc();
    }
    function nc() {
        var a = !1,
            b = Fa.length;
        if (0 < b) {
            for (a = 0; a < b; a++) fg(Fa[a].id, "selected-event", !0);
            a = !0;
            Fa = [];
        }
        return a;
    }
    function yj(a) {
        la = [];
        Qb = p(a) ? a : !1;
        a = Fa.length;
        if (0 < a) {
            for (var b = 0; b < a; b++) la.push(Fa[b]);
            fe(!1);
        }
    }
    function Ph() {
        0 < b.autoRefreshTimerDelay &&
            !m &&
            $f &&
            od(
                Na.autoRefresh,
                function () {
                    aj();
                    La();
                },
                b.autoRefreshTimerDelay
            );
    }
    function aj() {
        var a = x(b.events.onEventsFetch);
        if (wa(a))
            for (var c = a.length, d = 0; d < c; d++) {
                var e = a[d];
                r.removeEvent(e.id, !1, !1);
                r.addEvent(e, !1, !1);
            }
    }
    function Oh() {
        0 < b.autoRefreshTimerDelay && !m && $f && rd(Na.autoRefresh);
    }
    function La(a, c) {
        if (b.isWidget) kg ? F() : F(v);
        else if (((a = p(a) ? a : !1), (c = p(c) ? c : !1), kj() || a))
            oa(), kg ? (F(), Qj()) : Ia(), c && x(b.events.onRefresh);
    }
    function kj() {
        return !Ik() && !C.body.contains(Ka) && !Hg() && !Xj() && !Ne() && null === da;
    }
    function od(a, b, d, e) {
        e = p(e) ? e : !0;
        Li(a) ||
            (Hb[a] = e
                ? setInterval(b, d)
                : setTimeout(function () {
                      b();
                      delete Hb[a];
                  }, d));
    }
    function rd(a) {
        Li(a) && (clearTimeout(Hb[a]), delete Hb[a]);
    }
    function Li(a) {
        return Hb.hasOwnProperty(a) && null !== Hb[a];
    }
    function fj() {
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
        Oi.hasOwnProperty(c) || (Oi[c] = g ? C.createTextNode(n.empty) : C.createElement(c));
        c = Oi[c].cloneNode(!1);
        if (("input" === a && "button" !== d) || "textarea" === a) p(e) ? (c.id = e) : (c.id = fc());
        p(b) && (c.className = b);
        p(d) && (c.type = d);
        return c;
    }
    function ra(a, b, d) {
        var c = g("p");
        y(c, b);
        a.appendChild(c);
        p(d) && (c.className = d);
        return c;
    }
    function fa(a, b, d, e, f, k) {
        f = p(f) ? f : !1;
        (k = p(k) ? k : !1) && a.appendChild(g("div", "separator"));
        d = g("span", d);
        k = Zc(e);
        y(d, b);
        a.appendChild(d);
        k && (d.onclick = e);
        f && k && (d.ondblclick = D);
        return d;
    }
    function Ga(a, b, d, e, f) {
        d = g("input", d, "button");
        d.value = b;
        d.onclick = e;
        a.appendChild(d);
        p(f) && Ra(d, f, !0);
        return d;
    }
    function Ca(a) {
        (He.hasOwnProperty(a) && null !== He[a]) || (He[a] = cl(a));
        C.body.contains(He[a]) || (He[a] = cl(a));
        return He[a];
    }
    function cl(a) {
        var b = null;
        if (null === z) b = C.getElementById(a);
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
    function D(a) {
        a.preventDefault();
        a.cancelBubble = !0;
    }
    function Mc(a) {
        a.cancelBubble = !0;
    }
    function tf(a, b) {
        var c = a.pageX,
            e = a.pageY,
            f = ij();
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
    function We(a) {
        for (var b = 0, d = 0; a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop); )
            (b += a.offsetLeft - a.scrollLeft), (d += a.offsetTop - a.scrollTop), (a = a.offsetParent);
        return { left: b, top: d };
    }
    function ij() {
        var a = C.documentElement;
        return {
            left: (ba.pageXOffset || a.scrollLeft) - (a.clientLeft || 0),
            top: (ba.pageYOffset || a.scrollTop) - (a.clientTop || 0),
        };
    }
    function Ce(a) {
        (a = p(a) ? a : !0) && gb.pop();
    }
    function re(a, b) {
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
    function Ge(a, b) {
        null !== a && (a.className = b);
    }
    function mc(a) {
        var c = a;
        b.allowHtmlInDisplay || ((c = g("div")), (c.innerHTML = a), (c = c.innerText));
        return c;
    }
    function Pe(a, b, d) {
        d = p(d) ? d : !0;
        var c = null;
        ba.getComputedStyle
            ? (c = C.defaultView.getComputedStyle(a, null).getPropertyValue(b))
            : a.currentStyle && (c = a.currentStyle[b]);
        d && (c = parseFloat(c, 10));
        return c;
    }
    function y(a, c) {
        b.allowHtmlInDisplay ? (a.innerHTML = c) : (a.innerText = mc(c));
    }
    function Wa(a, b) {
        null !== a && (a.style.display = b ? "inline-block" : "none");
    }
    function zh(a, b, d) {
        a = z.getElementsByClassName(a);
        for (var c = a.length, f = 0; f < c; f++)
            for (var g = a[f].children, h = g.length, n = 0; n < h; n++) g[n] !== d && b(g[n]);
    }
    function md(a) {
        for (var b = a.children, d = b.length - 1; d--; ) a.appendChild(b[d]);
    }
    function mg(a, b) {
        a = C.getElementsByClassName(a);
        a = [].slice.call(a);
        for (var c = a.length, e = 0; e < c; e++) {
            var f = a[e];
            f.id !== Ba && (p(b) ? (f.className = b) : (f.style.display = "none"));
        }
    }
    function Xh(a, b) {
        for (a = a.getElementsByClassName(b); a[0]; ) a[0].parentNode.removeChild(a[0]);
    }
    function zk(a, b) {
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
        fa(a, b, "text");
        return c;
    }
    function L(a, b, d, e, f, k, h) {
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
        fa(a, b, "text");
        return [h, a];
    }
    function t(a, b, d, e, f) {
        b = g("div", b);
        b.ondblclick = D;
        b.onclick = e;
        a.appendChild(b);
        Ra(b, d, f);
        return b;
    }
    function jm(a, c) {
        a.innerHTML = n.empty;
        var d = g("div", "no-events-available-text");
        a.appendChild(d);
        ra(d, b.noEventsAvailableFullText);
        b.manualEditingEnabled &&
            (d.appendChild(g("div")),
            fa(d, b.clickText + n.space),
            fa(d, b.hereText, "link", c),
            fa(d, n.space + b.toAddANewEventText));
    }
    function P(a) {
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
    function Bm(a, b) {
        var c = a;
        b = p(b) ? b : 30;
        a.length > b &&
            ((b = 0 === b % 2 ? b / 2 : (b - 1) / 2), (c = a.substring(0, b) + "..." + a.substring(a.length - b)));
        return c;
    }
    function p(a) {
        return void 0 !== a && null !== a && a !== n.empty;
    }
    function Vh(a) {
        return "function" === typeof a;
    }
    function Zc(a) {
        return p(a) && Vh(a);
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
    function Pa(a) {
        return p(a) && "object" === typeof a;
    }
    function wa(a) {
        return Pa(a) && a instanceof Array;
    }
    function Xa(a) {
        return T(a) && a !== n.empty;
    }
    function yc(a) {
        return Pa(a) && a instanceof Date;
    }
    function bj(a) {
        return Pa(a) && void 0 !== a.tagName;
    }
    function mk(a) {
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
    function q(a, b) {
        return kb(a) ? a : b;
    }
    function ua(a, b) {
        return Da(a) ? a : b;
    }
    function gg(a, b) {
        return wa(a) ? a : b;
    }
    function Pi(a, b) {
        return yc(a) ? a : b;
    }
    function B(a, b) {
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
    function Ni(a) {
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
                            Ia(),
                            oa(),
                            Ta(b.eventsImportedText.replace("{0}", a.length)),
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
            a = Oe(a.target.result);
            Pa(a) && a.hasOwnProperty("events") && (a = a.events);
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
                            (d.from = Ch(g.split(":").pop())), (d.isAllDay = 8 === g.split(":").pop().length);
                        else if (qa(g, "DTEND:") || qa(g, "DTEND;")) d.to = Ch(g.split(":").pop(), !0);
                        else if (qa(g, "CREATED:")) d.created = Ch(g.split(":").pop());
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
                            for (var q = g.length, m = null, t = null, u = null, x = 0; x < q; x++) {
                                var v = g[x];
                                qa(v, "FREQ=")
                                    ? (m = v.split("=")[1])
                                    : qa(v, "INTERVAL=")
                                      ? (t = v.split("=")[1])
                                      : qa(v, "UNTIL=") && (u = v.split("=")[1]);
                            }
                            p(m) &&
                                (p(t) &&
                                    ((t = parseInt(t)), 2 <= t && "WEEKLY" !== m && (h.repeatEveryCustomValue = t)),
                                p(h.repeatEveryCustomValue)
                                    ? "DAILY" === m
                                        ? (h.repeatEveryCustomType = N.daily)
                                        : "WEEKLY" === m
                                          ? (h.repeatEveryCustomType = N.weekly)
                                          : "MONTHLY" === m
                                            ? (h.repeatEveryCustomType = N.monthly)
                                            : "YEARLY" === m && (h.repeatEveryCustomType = N.yearly)
                                    : "DAILY" === m
                                      ? (h.repeatEvery = w.everyDay)
                                      : "WEEKLY" === m
                                        ? (h.repeatEvery = w.everyWeek)
                                        : "MONTHLY" === m
                                          ? (h.repeatEvery = w.everyMonth)
                                          : "MONTHLY" === m && 2 === t
                                            ? (h.repeatEvery = w.every2Weeks)
                                            : "YEARLY" === m && (h.repeatEvery = w.everyYear),
                                p(u) && ((g = Ch(u)), g.setDate(g.getDate() - 1), (h.repeatEnds = g)));
                        }
                }
        };
    }
    function Ch(a, b) {
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
    function zl() {
        var a = g("input", null, "file");
        a.accept = ".ical, .ics, .json";
        a.multiple = "multiple";
        a.onchange = function () {
            Ni(a.files);
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
            h = Qi();
            l = h[0];
            var m = h[1],
                q = [];
            h = [];
            for (var t = 0; t < m; t++) q.push(dl(l[t]));
            h.push(q.join(","));
            for (l = 0; l < f; l++) {
                m = h;
                q = Ri(a[l]);
                t = q.length;
                for (var u = 0; u < t; u++) q[u] = dl(q[u]);
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
            f.push("<LastModified>" + Si() + "</LastModified>");
            f.push("</Calendar>");
            f.push("<Events>");
            for (l = 0; l < h; l++) {
                m = a[l];
                q = Dh(m);
                t = q.length;
                f.push("<Event>");
                for (u = 0; u < t; u++) {
                    var v = q[u];
                    if ("customTags" !== v && m.hasOwnProperty(v) && null !== m[v]) {
                        var y = Ti(v);
                        f.push("<" + y + ">" + Eh(v, m[v]) + "</" + y + ">");
                    }
                }
                f.push("</Event>");
            }
            f.push("</Events>");
            f = f.join(n.newLine);
        } else if ("json" === c) f = ak(a);
        else if ("text" === c) {
            l = d;
            f = [];
            h = a.length;
            p(l) && f.push("Filename: " + l);
            f.push("Last Modified: " + Si());
            f.push(n.empty);
            for (l = 0; l < h; l++) {
                m = a[l];
                q = Dh(m);
                t = q.length;
                for (u = 0; u < t; u++)
                    (v = q[u]),
                        "customTags" !== v &&
                            m.hasOwnProperty(v) &&
                            null !== m[v] &&
                            f.push(Ti(v) + ": " + Eh(v, m[v]));
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
                u = I(m.repeatEvery);
                T(q) || (q = b.organizerName);
                T(t) || (t = b.organizerEmailAddress);
                f.push("BEGIN:VEVENT");
                f.push("UID:" + G(m.id));
                f.push("STATUS:CONFIRMED");
                f.push("SEQUENCE:0");
                !kb(m.showAsBusy) || m.showAsBusy ? f.push("TRANSP:OPAQUE") : f.push("TRANSP:TRANSPARENT");
                m.isAllDay
                    ? (f.push("DTSTART:" + el(m.from)), f.push("DTEND:" + el(m.to)))
                    : (f.push("DTSTART:" + Ie(m.from)), f.push("DTEND:" + Ie(m.to)));
                yc(m.created) && ((v = Ie(m.created)), f.push("DTSTAMP:" + v), f.push("CREATED:" + v));
                yc(m.lastUpdated) && f.push("LAST-MODIFIED:" + Ie(m.lastUpdated));
                T(q) && T(t) && f.push("ORGANIZER;CN=" + q + ":MAILTO:" + t);
                u !== w.never && f.push("RRULE:" + Jm(m, u));
                T(m.title) && f.push("SUMMARY:" + hg(m.title));
                T(m.description) && f.push("DESCRIPTION:" + hg(m.description));
                T(m.location) && f.push("LOCATION:" + hg(m.location));
                T(m.url) && f.push("URL:" + hg(m.url));
                T(m.group) && f.push("CATEGORIES:" + hg(m.group));
                if (!kb(m.showAlerts) || m.showAlerts)
                    f.push("BEGIN:VALARM"),
                        f.push("TRIGGER;VALUE=DATE-TIME:" + Ie(m.from)),
                        f.push("ACTION:DISPLAY"),
                        f.push("END:VALARM");
                f.push("END:VEVENT");
            }
            f.push("END:VCALENDAR");
            f = f.join(n.newLineCharacterReturn);
        } else if ("md" === c) {
            f = a.length;
            h = Qi();
            l = h[1];
            h = ["| " + h[0].join(" | ") + " |"];
            m = [];
            for (q = 0; q < l; q++) m.push("---");
            h.push("| " + m.join(" | ") + " |");
            for (l = 0; l < f; l++) (m = Ri(a[l])), h.push("| " + m.join(" | ") + " |");
            f = h.join(n.newLine);
        } else if ("html" === c) {
            l = d;
            f = [];
            h = a.length;
            f.push("<!DOCTYPE html>");
            f.push("<html>");
            f.push("<head>");
            f.push('<meta charset="utf-8" />');
            f.push('<meta http-equiv="Last-Modified" content="' + Si() + ' GMT" />');
            p(l) && f.push("<title>" + l + "</title>");
            f.push("</head>");
            f.push("<body>");
            for (l = 0; l < h; l++) {
                m = a[l];
                q = Dh(m);
                t = q.length;
                f.push("<h3><b>" + m.id + ":</b></h3>");
                f.push("<ul>");
                for (u = 0; u < t; u++)
                    (v = q[u]),
                        "customTags" !== v &&
                            m.hasOwnProperty(v) &&
                            null !== m[v] &&
                            f.push("<li><b>" + Ti(v) + "</b>: " + Eh(v, m[v]) + "</li>");
                f.push("</ul>");
            }
            f.push("</body>");
            f.push("</html>");
            f = f.join(n.newLine);
        } else if ("tsv" === c) {
            f = a.length;
            h = Qi();
            l = h[0];
            m = h[1];
            q = [];
            h = [];
            for (t = 0; t < m; t++) q.push(fl(l[t]));
            h.push(q.join("\t"));
            for (l = 0; l < f; l++) {
                m = h;
                q = Ri(a[l]);
                t = q.length;
                for (u = 0; u < t; u++) q[u] = fl(q[u]);
                m.push(q.join("\t"));
            }
            f = h.join(n.newLine);
        }
        f !== n.empty &&
            (e
                ? (Hf.clipboard.writeText(f), Ta(b.eventsExportedText))
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
                  (d = p(d) ? d : bk(l)),
                  (e.style.display = "none"),
                  e.setAttribute("target", "_blank"),
                  e.setAttribute("href", "data:" + c + "/" + h + ";charset=utf-8," + encodeURIComponent(f)),
                  e.setAttribute("download", d),
                  C.body.appendChild(e),
                  e.click(),
                  C.body.removeChild(e),
                  Ta(b.eventsExportedToText.replace("{0}", d))),
            x(b.events.onEventsExported, a));
    }
    function bk(a, c) {
        c = p(c) ? c : b.exportStartFilename;
        var d = new Date(),
            e = P(d.getDate()) + "-" + P(d.getMonth() + 1) + "-" + d.getFullYear();
        d = P(d.getHours()) + "-" + P(d.getMinutes());
        return c + e + "_" + d + "." + a;
    }
    function ig(a) {
        return a ? b.yesText : b.noText;
    }
    function Je(a) {
        var c = b.repeatsNever;
        p(a) &&
            ((c = P(a.getDate()) + "/" + P(a.getMonth() + 1) + "/" + a.getFullYear()),
            (a = P(a.getHours()) + ":" + P(a.getMinutes())),
            (c = c + n.space + a));
        return c;
    }
    function G(a, b) {
        b = p(b) ? b : n.empty;
        return T(a) ? a : b;
    }
    function I(a, b) {
        b = p(b) ? b : 0;
        return Da(a) ? a : b;
    }
    function Uk(a, b) {
        b = p(b) ? b : 0;
        return kb(a) ? (a ? 1 : 0) : b;
    }
    function ui(a, b) {
        b = p(b) ? b : !1;
        return kb(a) ? a : b;
    }
    function Pc(a, b) {
        b = p(b) ? b : [];
        return wa(a) ? a : b;
    }
    function qd(a) {
        var c = b.dailyText;
        a = I(a);
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
    function Fh(a, b) {
        b = p(b) ? b : !1;
        a = Pc(a);
        for (var c = a.length, e = 0; e < c; e++) a[e] = b ? '"' + a[e] + '"' : a[e];
        return a.join(",");
    }
    function Ti(a) {
        return a.charAt(0).toUpperCase() + a.slice(1);
    }
    function Eh(a, c, d) {
        var e = (d = p(d) ? d : !1) ? '"' + G(c) + '"' : G(c);
        "boolean" === typeof c
            ? (e = d ? c.toString() : ig(c))
            : "object" === typeof c && c instanceof Date
              ? (e = d ? '"' + c.toISOString() + '"' : Je(c))
              : "object" === typeof c && c instanceof Array
                ? (e = "repeatEveryExcludeDays" !== a || d ? (d ? "[" + Fh(c) + "]" : Fh(c)) : gl(c))
                : "number" === typeof c &&
                  ("repeatEvery" !== a || d
                      ? "repeatEveryCustomType" !== a || d
                          ? (e = "type" !== a || d ? c.toString() : O[parseInt(c)].text)
                          : ((a = b.dailyText),
                            (c = I(c)),
                            c === N.daily
                                ? (a = b.dailyText)
                                : c === N.weekly
                                  ? (a = b.weeklyText)
                                  : c === N.monthly
                                    ? (a = b.monthlyText)
                                    : c === N.yearly && (a = b.yearlyText),
                            (e = a))
                      : (e = qd(c)));
        return e;
    }
    function gl(a) {
        var c = [];
        if (wa(a))
            for (var d = a.length, e = 0; e < d; e++) {
                var f = a[e] - 1;
                -1 === f && (f = 6);
                c.push(b.dayNames[f]);
            }
        return Fh(c);
    }
    function Qi() {
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
    function Ri(a) {
        var b = [];
        b.push(G(a.id));
        b.push(O[I(a.type)].text);
        b.push(Je(a.from));
        b.push(Je(a.to));
        b.push(ig(a.isAllDay));
        b.push(G(a.title));
        b.push(G(a.description));
        b.push(G(a.location));
        b.push(G(a.color));
        b.push(G(a.colorText));
        b.push(G(a.colorBorder));
        b.push(qd(a.repeatEvery));
        b.push(Je(a.repeatEnds));
        b.push(gl(a.repeatEveryExcludeDays));
        b.push(Fh(a.seriesIgnoreDates));
        b.push(Je(a.created));
        b.push(Je(a.lastUpdated));
        b.push(G(a.organizerName));
        b.push(G(a.organizerEmailAddress));
        b.push(G(a.url));
        b.push(ig(a.locked));
        b.push(ig(!kb(a.showAlerts) || a.showAlerts));
        b.push(ig(!kb(a.showAsBusy) || a.showAsBusy));
        b.push(I(a.alertOffset));
        return b;
    }
    function Dh(a) {
        var b = [],
            d;
        for (d in a) a.hasOwnProperty(d) && b.push(d);
        b.sort();
        return b;
    }
    function Si() {
        var a = new Date(),
            b = Lh("{ddd}, {dd} {mmm} {yyyy}", a);
        return (b += " " + P(a.getHours()) + ":" + P(a.getMinutes()) + ":" + P(a.getSeconds()));
    }
    function dl(a) {
        a = a
            .toString()
            .replace(/(\r\n|\n|\r)/gm, n.empty)
            .replace(/(\s\s)/gm, n.space);
        a = a.replace(/"/g, '""');
        return '"' + a + '"';
    }
    function ak(a) {
        var b = [],
            d = a.length;
        b.push("{");
        b.push('"events": [');
        for (var e = 0; e < d; e++) {
            var f = a[e],
                g = Dh(f),
                h = g.length;
            b.push("{");
            for (var m = 0; m < h; m++) {
                var p = g[m];
                "customTags" !== p &&
                    f.hasOwnProperty(p) &&
                    null !== f[p] &&
                    b.push('"' + p + '":' + Eh(p, f[p], !0) + ",");
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
        return mc(G(a)).replace(/\n|\r/g, n.empty);
    }
    function Ie(a) {
        var b = [];
        p(a) &&
            (b.push(a.getFullYear()),
            b.push(P(a.getMonth() + 1)),
            b.push(P(a.getDate())),
            b.push("T"),
            b.push(P(a.getHours())),
            b.push(P(a.getMinutes())),
            b.push("00Z"));
        return b.join(n.empty);
    }
    function el(a) {
        var b = [];
        p(a) && (b.push(a.getFullYear()), b.push(P(a.getMonth() + 1)), b.push(P(a.getDate())));
        return b.join(n.empty);
    }
    function Jm(a, b) {
        var c = [];
        if (b === w.custom) {
            b = I(a.repeatEveryCustomType);
            var e = I(a.repeatEveryCustomValue);
            b === N.daily
                ? c.push("FREQ=DAILY")
                : b === N.weekly
                  ? c.push("FREQ=WEEKLY")
                  : b === N.monthly
                    ? c.push("FREQ=MONTHLY")
                    : b === N.yearly && c.push("FREQ=YEARLY");
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
        yc(a.repeatEnds) && ((a = new Date(a.repeatEnds)), a.setDate(a.getDate() + 1), c.push("UNTIL=" + Ie(a)));
        return c.join(";");
    }
    function fl(a) {
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
                  D(a);
                  p(d) ? R(c, null, null, d) : R(c);
              })
            : Zc(b.events.onEventDoubleClick) &&
              (a.ondblclick = function () {
                  x(b.events.onEventDoubleClick, c);
              });
    }
    function Ze(a) {
        p(a) && D(a);
        if (!m || eb)
            (a = new Date(v)),
                a.setMonth(a.getMonth() - 1),
                a.getFullYear() >= b.minimumYear && (F(a), x(b.events.onPreviousMonth, a), sb());
    }
    function $e(a) {
        p(a) && D(a);
        if (!m || eb)
            (a = new Date(v)),
                a.setMonth(a.getMonth() + 1),
                a.getFullYear() <= b.maximumYear && (F(a), x(b.events.onNextMonth, a), sb());
    }
    function pg() {
        if (!m || eb) {
            var a = new Date(v);
            a.setFullYear(a.getFullYear() - 1);
            a.getFullYear() >= b.minimumYear && (F(a), x(b.events.onPreviousYear, a), sb());
        }
    }
    function qg() {
        if (!m || eb) {
            var a = new Date(v);
            a.setFullYear(a.getFullYear() + 1);
            a.getFullYear() <= b.maximumYear && (F(a), x(b.events.onNextYear, a), sb());
        }
    }
    function rg() {
        if (!m || eb) {
            var a = new Date();
            if (v.getMonth() !== a.getMonth() || v.getFullYear() !== a.getFullYear()) F(), x(b.events.onToday), sb();
        }
    }
    function hl(a) {
        b = mb(a);
        b.views = mb(b.views);
        b.showDayNumberOrdinals = q(b.showDayNumberOrdinals, !0);
        b.dragAndDropForEventsEnabled = q(b.dragAndDropForEventsEnabled, !0);
        b.exportEventsEnabled = q(b.exportEventsEnabled, !0);
        b.manualEditingEnabled = q(b.manualEditingEnabled, !0);
        b.autoRefreshTimerDelay = ua(b.autoRefreshTimerDelay, 3e4);
        b.fullScreenModeEnabled = q(b.fullScreenModeEnabled, !0);
        b.tooltipDelay = ua(b.tooltipDelay, 1e3);
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
        b.organizerName = db(b.organizerName, n.empty);
        b.organizerEmailAddress = db(b.organizerEmailAddress, n.empty);
        b.spacing = ua(b.spacing, 10);
        b.maximumEventTitleLength = ua(b.maximumEventTitleLength, 0);
        b.maximumEventDescriptionLength = ua(b.maximumEventDescriptionLength, 0);
        b.maximumEventLocationLength = ua(b.maximumEventLocationLength, 0);
        b.maximumEventGroupLength = ua(b.maximumEventGroupLength, 0);
        b.eventNotificationsEnabled = q(b.eventNotificationsEnabled, !1);
        b.tooltipsEnabled = q(b.tooltipsEnabled, !0);
        b.urlWindowTarget = db(b.urlWindowTarget, "_blank");
        b.defaultEventBackgroundColor = db(b.defaultEventBackgroundColor, "#484848");
        b.defaultEventTextColor = db(b.defaultEventTextColor, "#F5F5F5");
        b.defaultEventBorderColor = db(b.defaultEventBorderColor, "#282828");
        b.hideEventsWithoutGroupAssigned = q(b.hideEventsWithoutGroupAssigned, !1);
        b.showHolidays = q(b.showHolidays, !0);
        b.useTemplateWhenAddingNewEvent = q(b.useTemplateWhenAddingNewEvent, !0);
        b.useEscapeKeyToExitFullScreenMode = q(b.useEscapeKeyToExitFullScreenMode, !0);
        b.allowHtmlInDisplay = q(b.allowHtmlInDisplay, !1);
        b.initialDateTime = Pi(b.initialDateTime, null);
        b.data = gg(b.data, null);
        b.weekendDays = ad(b.weekendDays, 0) ? [0, 6] : b.weekendDays;
        b.workingDays = ad(b.workingDays, 0) ? [] : b.workingDays;
        b.minimumYear = ua(b.minimumYear, 1900);
        b.maximumYear = ua(b.maximumYear, 2099);
        b.defaultEventDuration = ua(b.defaultEventDuration, 30);
        b.configurationDialogEnabled = q(b.configurationDialogEnabled, !0);
        b.popUpNotificationsEnabled = q(b.popUpNotificationsEnabled, !0);
        b.startOfWeekDay = ua(b.startOfWeekDay, xa.monday);
        b.useLocalStorageForEvents = q(b.useLocalStorageForEvents, !1);
        b.shortcutKeysEnabled = q(b.shortcutKeysEnabled, !0);
        b.reverseOrderDaysOfWeek = q(b.reverseOrderDaysOfWeek, !1);
        b.importEventsEnabled = q(b.importEventsEnabled, !0);
        b.useAmPmForTimeDisplays = q(b.useAmPmForTimeDisplays, !1);
        b.isWidget = q(b.isWidget, !1);
        b.viewToOpenOnFirstLoad = db(b.viewToOpenOnFirstLoad, null);
        b.eventColorsEditingEnabled = q(b.eventColorsEditingEnabled, !0);
        b.eventTooltipDelay = ua(b.eventTooltipDelay, 1e3);
        b.jumpToDateEnabled = q(b.jumpToDateEnabled, !0);
        b.shareEventsEnabled = q(b.shareEventsEnabled, !0);
        b.showReoccurringEventIcons = q(b.showReoccurringEventIcons, !0);
        ad(b.visibleDays) && ((b.visibleDays = [0, 1, 2, 3, 4, 5, 6]), (pd = []));
        a = db(b.workingHoursStart, null);
        var c = db(b.workingHoursEnd, null);
        p(a) || ((a = b.workingHoursStart), (a = Pa(a) ? a : null));
        p(c) || ((c = b.workingHoursEnd), (c = Pa(c) ? c : null));
        b.workingHoursStart = a;
        b.workingHoursEnd = c;
        b.sideMenu = mb(b.views.sideMenu);
        b.sideMenu.showDays = q(b.sideMenu.showDays, !0);
        b.sideMenu.showGroups = q(b.sideMenu.showGroups, !0);
        b.sideMenu.showEventTypes = q(b.sideMenu.showEventTypes, !0);
        b.sideMenu.showWorkingDays = q(b.sideMenu.showWorkingDays, !0);
        b.sideMenu.showWeekendDays = q(b.sideMenu.showWeekendDays, !0);
        b.views.fullDay = mb(b.views.fullDay);
        b.views.fullDay.enabled = q(b.views.fullDay.enabled, !0);
        b.views.fullDay.showAllDayEventDetails = q(b.views.fullDay.showAllDayEventDetails, !1);
        b.views.fullDay.minutesBetweenSections = ua(b.views.fullDay.minutesBetweenSections, 30);
        b.views.fullDay.showTimelineArrow = q(b.views.fullDay.showTimelineArrow, !0);
        b.views.fullDay.showExtraTitleBarButtons = q(b.views.fullDay.showExtraTitleBarButtons, !0);
        b.views.fullWeek = mb(b.views.fullWeek);
        b.views.fullWeek.enabled = q(b.views.fullWeek.enabled, !0);
        b.views.fullWeek.showAllDayEventDetails = q(b.views.fullWeek.showAllDayEventDetails, !1);
        b.views.fullWeek.showDayNamesHeaders = q(b.views.fullWeek.showDayNamesHeaders, !0);
        b.views.fullWeek.minutesBetweenSections = ua(b.views.fullWeek.minutesBetweenSections, 30);
        b.views.fullWeek.showTimelineArrow = q(b.views.fullWeek.showTimelineArrow, !0);
        b.views.fullWeek.showWeekNumbersInTitles = q(b.views.fullWeek.showWeekNumbersInTitles, !1);
        b.views.fullWeek.showExtraTitleBarButtons = q(b.views.fullWeek.showExtraTitleBarButtons, !0);
        b.views.fullWeek.showDatesInDayHeaders = q(b.views.fullWeek.showDatesInDayHeaders, !0);
        b.views.fullMonth = mb(b.views.fullMonth);
        b.views.fullMonth.maximumEventsPerDayDisplay = ua(b.views.fullMonth.maximumEventsPerDayDisplay, 3);
        b.views.fullMonth.showTimesInEvents = q(b.views.fullMonth.showTimesInEvents, !1);
        b.views.fullMonth.minimumDayHeight = ua(b.views.fullMonth.minimumDayHeight, 0);
        b.views.fullMonth.showPreviousNextMonthNames = q(b.views.fullMonth.showPreviousNextMonthNames, !0);
        b.views.fullMonth.useOnlyDotEvents = q(b.views.fullMonth.useOnlyDotEvents, !1);
        b.views.fullMonth.applyCssToEventsNotInCurrentMonth = q(
            b.views.fullMonth.applyCssToEventsNotInCurrentMonth,
            !0
        );
        b.views.fullMonth.addYearButtons = q(b.views.fullMonth.addYearButtons, !1);
        b.views.fullMonth.titleBarDateFormat = db(b.views.fullMonth.titleBarDateFormat, "{mmmm} {yyyy}");
        b.views.fullMonth.showDayNamesHeaders = q(b.views.fullMonth.showDayNamesHeaders, !0);
        b.views.fullMonth.isPinUpViewEnabled = q(b.views.fullMonth.isPinUpViewEnabled, !1);
        b.views.fullMonth.pinUpViewImageUrls = gg(b.views.fullMonth.pinUpViewImageUrls, []);
        b.views.fullMonth.showMonthButtonsInYearDropDownMenu = q(
            b.views.fullMonth.showMonthButtonsInYearDropDownMenu,
            !0
        );
        b.views.fullMonth.showExtraTitleBarButtons = q(b.views.fullMonth.showExtraTitleBarButtons, !0);
        b.views.fullMonth.pinUpViewImageCssClasses = gg(b.views.fullMonth.pinUpViewImageCssClasses, []);
        b.views.fullMonth.showYearDropDownButtonIcon = q(b.views.fullMonth.showYearDropDownButtonIcon, !0);
        kb(b.views.fullMonth.allowEventScrolling) ||
            ((b.views.fullMonth.allowEventScrolling = !1),
            b.views.fullMonth.allowEventScrolling && (b.views.fullMonth.maximumEventsPerDayDisplay = 0));
        b.views.fullYear = mb(b.views.fullYear);
        b.views.fullYear.enabled = q(b.views.fullYear.enabled, !0);
        b.views.fullYear.showExtraTitleBarButtons = q(b.views.fullYear.showExtraTitleBarButtons, !0);
        b.views.timeline = mb(b.views.timeline);
        b.views.timeline.enabled = q(b.views.timeline.enabled, !0);
        b.views.timeline.defaultAxis = db(b.views.timeline.defaultAxis, "group");
        b.views.timeline.minutesBetweenSections = ua(b.views.timeline.minutesBetweenSections, 30);
        b.views.timeline.showExtraTitleBarButtons = q(b.views.timeline.showExtraTitleBarButtons, !0);
        b.views.allEvents = mb(b.views.allEvents);
        b.views.allEvents.enabled = q(b.views.allEvents.enabled, !0);
        b.views.allEvents.showExtraTitleBarButtons = q(b.views.allEvents.showExtraTitleBarButtons, !0);
        b.views.datePicker = mb(b.views.datePicker);
        b.views.datePicker.selectedDateFormat = db(b.views.datePicker.selectedDateFormat, "{d}{o} {mmmm} {yyyy}");
        b.views.datePicker.minimumDate = Pi(b.views.datePicker.minimumDate, null);
        b.views.datePicker.maximumDate = Pi(b.views.datePicker.maximumDate, null);
        b.events = mb(b.events);
        b.events.onPreviousMonth = B(b.events.onPreviousMonth, null);
        b.events.onNextMonth = B(b.events.onNextMonth, null);
        b.events.onPreviousYear = B(b.events.onPreviousYear, null);
        b.events.onNextYear = B(b.events.onNextYear, null);
        b.events.onToday = B(b.events.onToday, null);
        b.events.onEventAdded = B(b.events.onEventAdded, null);
        b.events.onEventUpdated = B(b.events.onEventUpdated, null);
        b.events.onEventRemoved = B(b.events.onEventRemoved, null);
        b.events.onEventsAdded = B(b.events.onEventsAdded, null);
        b.events.onEventsCleared = B(b.events.onEventsCleared, null);
        b.events.onEventsExported = B(b.events.onEventsExported, null);
        b.events.onSetDate = B(b.events.onSetDate, null);
        b.events.onEventsSet = B(b.events.onEventsSet, null);
        b.events.onGroupsCleared = B(b.events.onGroupsCleared, null);
        b.events.onEventsUpdated = B(b.events.onEventsUpdated, null);
        b.events.onOptionsUpdated = B(b.events.onOptionsUpdated, null);
        b.events.onNotificationClicked = B(b.events.onNotificationClicked, null);
        b.events.onSearchOptionsUpdated = B(b.events.onSearchOptionsUpdated, null);
        b.events.onFullScreenModeChanged = B(b.events.onFullScreenModeChanged, null);
        b.events.onEventsSetFromJSON = B(b.events.onEventsSetFromJSON, null);
        b.events.onEventsAddedFromJSON = B(b.events.onEventsAddedFromJSON, null);
        b.events.onDatePickerDateChanged = B(b.events.onDatePickerDateChanged, null);
        b.events.onGroupRemoved = B(b.events.onGroupRemoved, null);
        b.events.onEventUrlClicked = B(b.events.onEventUrlClicked, null);
        b.events.onDestroy = B(b.events.onDestroy, null);
        b.events.onRefresh = B(b.events.onRefresh, null);
        b.events.onDatePickerOpened = B(b.events.onDatePickerOpened, null);
        b.events.onDatePickerClosed = B(b.events.onDatePickerClosed, null);
        b.events.onRender = B(b.events.onRender, null);
        b.events.onEventDragStart = B(b.events.onEventDragStart, null);
        b.events.onEventDragStop = B(b.events.onEventDragStop, null);
        b.events.onEventDragDrop = B(b.events.onEventDragDrop, null);
        b.events.onEventClick = B(b.events.onEventClick, null);
        b.events.onEventDoubleClick = B(b.events.onEventDoubleClick, null);
        b.events.onVisibleGroupsChanged = B(b.events.onVisibleGroupsChanged, null);
        b.events.onVisibleEventTypesChanged = B(b.events.onVisibleEventTypesChanged, null);
        b.events.onNotification = B(b.events.onNotification, null);
        b.events.onBeforeEventAddEdit = B(b.events.onBeforeEventAddEdit, null);
        b.events.onBusyStateChange = B(b.events.onBusyStateChange, null);
        b.events.onEventsFetch = B(b.events.onEventsFetch, null);
        b.events.onEventsImported = B(b.events.onEventsImported, null);
        b.events.onFullDayEventRender = B(b.events.onFullDayEventRender, null);
        b.events.onFullWeekEventRender = B(b.events.onFullWeekEventRender, null);
        b.events.onFullMonthEventRender = B(b.events.onFullMonthEventRender, null);
        b.events.onAllEventsEventRender = B(b.events.onAllEventsEventRender, null);
        b.events.onTimelineEventRender = B(b.events.onTimelineEventRender, null);
        b.events.onWidgetEventRender = B(b.events.onWidgetEventRender, null);
        b.events.onToolTipEventRender = B(b.events.onToolTipEventRender, null);
        b.events.onFullDayTitleRender = B(b.events.onFullDayTitleRender, null);
        b.events.onFullWeekTitleRender = B(b.events.onFullWeekTitleRender, null);
        b.events.onTimelineTitleRender = B(b.events.onTimelineTitleRender, null);
        b.events.onFullMonthPinUpRender = B(b.events.onFullMonthPinUpRender, null);
        b.events.onViewChange = B(b.events.onViewChange, null);
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
        jg(b.eventTypeNormalText, "Normal", 0);
        jg(b.eventTypeMeetingText, "Meeting", 1);
        jg(b.eventTypeBirthdayText, "Birthday", 2);
        jg(b.eventTypeHolidayText, "Holiday", 3);
        jg(b.eventTypeTaskText, "Task", 4);
        Ii();
    }
    function jg(a, b, d) {
        O.hasOwnProperty(d) && (T(a) ? (O[d].text = a) : (O[d].text = b));
    }
    function ad(a, b) {
        b = Da(b) ? b : 1;
        return !wa(a) || a.length < b;
    }
    function mb(a, b) {
        Pa(a) || (a = Pa(b) ? b : {});
        return a;
    }
    var r = this,
        C = null,
        ba = null,
        Hf = null,
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
        N = { daily: 0, weekly: 1, monthly: 2, yearly: 3 },
        b = {},
        u = {},
        O = {
            0: { text: "Normal Label", eventEditorInput: null },
            1: { text: "Meeting Label", eventEditorInput: null },
            2: { text: "Birthday Label", eventEditorInput: null },
            3: { text: "Holiday Label", eventEditorInput: null },
            4: { text: "Task Label", eventEditorInput: null },
        },
        Q = { visibleGroups: null, visibleEventTypes: null, visibleAllEventsMonths: {} },
        nb = !1,
        Yd = !1,
        Le = !1,
        rb = {},
        Cd = {},
        Fa = [],
        la = [],
        Qb = !1,
        Ud = null,
        da = null,
        al = {},
        v = null,
        kg = !1,
        Dc = null,
        ne = !1,
        Rj = !1,
        He = {},
        Aa = [],
        Oi = {},
        Hb = {},
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
        ub = null,
        Lb = null,
        lg = !1,
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
        Qe = null,
        m = !1,
        eb = !1,
        hj = null,
        tb = {
            fullMonth: "full-month",
            fullDay: "full-day",
            fullWeek: "full-week",
            fullYear: "full-year",
            timeline: "timeline",
            allEvents: "all-events",
        },
        wb = [],
        xh = 0,
        ug = null,
        vg = null,
        Rb = null,
        wg = null,
        xg = null,
        z = null,
        Ka = null,
        sd = !1,
        Rk = null,
        pd = [],
        Y = null,
        af = null,
        xb = null,
        Oc = null,
        ya = null,
        ge = null,
        M = null,
        ic = [],
        Wh = null,
        Aj = null,
        cf = null,
        Bj = null,
        yg = [],
        ea = null,
        Qa = null,
        Yh = null,
        Mj = null,
        zd = null,
        yd = null,
        Ad = null,
        ke = null,
        je = null,
        hf = null,
        jc = [],
        jf = {},
        Tb = null,
        Lj = null,
        le = null,
        ai = !1,
        Cg = null,
        lf = 0,
        bi = [],
        Jb = null,
        mf = [],
        U = null,
        me = null,
        Kh = null,
        Gg = null,
        Ub = null,
        nf = null,
        Sc = {},
        Eg = null,
        Dg = null,
        ob = null,
        Rc = 0,
        ci = null,
        zc = null,
        fd = [],
        Jh = null,
        Ea = null,
        ii = null,
        hi = null,
        oe = null,
        ta = null,
        Jg = 0,
        sa = null,
        ki = null,
        Sj = null,
        Ed = null,
        Mb = [],
        sg = [],
        li = [],
        ka = null,
        mi = null,
        Vj = null,
        Uj = null,
        Sa = null,
        sf = null,
        pf = null,
        qf = null,
        Lg = {},
        rf = [],
        Ec = [],
        ca = null,
        Kg = null,
        $a = null,
        pe = "location organizerName group organizerEmailAddress url title description".split(" "),
        gb = [],
        Gb = null,
        Ah = 0,
        Bh = 0,
        Vd = !1,
        Xk = 0,
        Yk = 0,
        cb = null,
        Wb = null,
        Tg = null,
        Ug = null,
        Vc = null,
        Sg = null,
        Tc = null,
        Xb = null,
        Yb = null,
        jb = null,
        Zb = null,
        we = null,
        If = null,
        Jf = null,
        Bb = null,
        ti = null,
        Kd = null,
        Ld = null,
        Jd = null,
        xe = null,
        rc = null,
        Kf = null,
        Lf = null,
        Mf = null,
        Nf = null,
        Of = null,
        $b = null,
        Vg = null,
        Hd = null,
        Pf = null,
        Qf = null,
        Rf = null,
        Xc = null,
        ha = {},
        Ef = null,
        Pg = null,
        Id = null,
        vi = null,
        Sf = null,
        sc = null,
        ze = null,
        Ae = null,
        Be = null,
        tc = null,
        Wg = null,
        Xg = null,
        Yg = null,
        Zg = null,
        $g = null,
        ah = null,
        bh = null,
        Md = null,
        Yc = null,
        wi = null,
        xi = null,
        Qg = null,
        yi = null,
        Vf = null,
        uc = null,
        Ua = null,
        zi = null,
        qk = null,
        rk = null,
        sk = null,
        tk = null,
        uk = null,
        vk = null,
        wk = null,
        vc = null,
        Db = null,
        gh = null,
        ma = null,
        Pd = null,
        ac = null,
        pa = null,
        ih = null,
        hh = null,
        Ee = null,
        Xf = null,
        Yf = null,
        jh = null,
        kh = null,
        lh = null,
        mh = null,
        nh = null,
        oh = null,
        ph = null,
        qh = null,
        rh = null,
        Ai = !1,
        Eb = [],
        $c = 0,
        Ci = null,
        Ab = null,
        qb = null,
        Fb = null,
        Qd = null,
        Fe = null,
        Di = null,
        Ei = null,
        Fi = null,
        Gi = null,
        Hi = null,
        sh = null,
        th = null,
        xc = null,
        cc = null,
        Ja = null,
        ni = null,
        Mg = null,
        Fd = null,
        aa = null,
        bb = null,
        Yj = null,
        Ff = null,
        Df = null,
        oi = null,
        Cf = null,
        Bf = null,
        wf = null,
        Af = null,
        zf = null,
        yf = null,
        xf = null,
        vf = null,
        uf = null,
        Og = null,
        Ng = null,
        Oa = null,
        si = null,
        ri = null,
        qi = null,
        Rg = null,
        bf = null,
        se = null,
        pb = null,
        ck = null,
        ek = null,
        fk = null,
        gk = null,
        dk = null,
        V = null,
        wh = null,
        Ki = null,
        vh = null,
        Rd = null,
        ag = null,
        Sd = null,
        bg = null,
        cg = null,
        dg = null,
        Td = null,
        Dd = null,
        gc = null;
    r.turnOnFullScreen = function () {
        m || Pk();
        return r;
    };
    r.turnOffFullScreen = function () {
        m || Ok();
        return r;
    };
    r.isFullScreenActivated = function () {
        return sd;
    };
    r.startTheAutoRefreshTimer = function () {
        m || (($f = !0), Ph());
        return r;
    };
    r.stopTheAutoRefreshTimer = function () {
        m || (Oh(), ($f = !1));
        return r;
    };
    r.destroy = function () {
        if (nb) {
            Le && Gh(!1);
            for (var a in Hb) Hb.hasOwnProperty(a) && null !== Hb[a] && (clearTimeout(Hb[a]), delete Hb[a]);
            a = Aa.length;
            for (var c = 0; c < a; c++) C.body.removeChild(Aa[c]);
            Aa = [];
            m && C.removeEventListener("click", cd);
            b.tooltipsEnabled && document.body.removeEventListener("mousemove", kc);
            p(z) && ((z.className = n.empty), (z.innerHTML = n.empty));
            x(b.events.onDestroy, Ba);
        }
        return r;
    };
    r.moveToPreviousMonth = function () {
        Ze();
        return r;
    };
    r.moveToNextMonth = function () {
        $e();
        return r;
    };
    r.moveToPreviousYear = function () {
        pg();
        return r;
    };
    r.moveToNextYear = function () {
        qg();
        return r;
    };
    r.moveToToday = function () {
        rg();
        return r;
    };
    r.getCurrentDisplayDate = function () {
        return new Date(v);
    };
    r.setCurrentDisplayDate = function (a) {
        !yc(a) ||
            (m && !eb) ||
            ((a = new Date(a)),
            !W(v, a) &&
                a.getFullYear() >= b.minimumYear &&
                a.getFullYear() <= b.maximumYear &&
                (F(a), x(b.events.onSetDate, a)));
        return r;
    };
    r.getSelectedDatePickerDate = function () {
        return m ? new Date(Dc) : null;
    };
    r.setSelectedDatePickerDate = function (a) {
        yc(a) &&
            m &&
            ((a = new Date(a)),
            jj(a) &&
                !W(a, Dc) &&
                a.getFullYear() >= b.minimumYear &&
                a.getFullYear() <= b.maximumYear &&
                (a.setHours(0, 0, 0, 0), cd(), Nh(a), x(b.events.onDatePickerDateChanged, a), (Dc = a)));
        return r;
    };
    r.refresh = function () {
        m || La(!0, !0);
        return r;
    };
    r.export = function (a) {
        b.exportEventsEnabled && !m && ((a = db(a, "csv")), wc(null, a));
        return r;
    };
    r.import = function (a) {
        b.importEventsEnabled && !m && Ni(a);
        return r;
    };
    r.setEvents = function (a, c, d) {
        m || ((d = q(d, !0)), (rb = {}), r.addEvents(a, c, !1), d && x(b.events.onEventsSet, a));
        return r;
    };
    r.setEventsFromJson = function (a, c, d) {
        if (!m) {
            d = q(d, !0);
            var e = Oe(a);
            wa(e) ? r.setEvents(e, c, !1) : Pa(e) && e.hasOwnProperty("events") && r.setEvents(e.events, c, !1);
            d && x(b.events.onEventsSetFromJSON, a);
        }
        return r;
    };
    r.addEvents = function (a, c, d) {
        if (!m) {
            c = q(c, !0);
            d = q(d, !0);
            for (var e = a.length, f = 0; f < e; f++) r.addEvent(a[f], !1, !1, !1);
            lb();
            d && x(b.events.onEventsAdded, a);
            c && (Nb(), Ia(), oa());
        }
        return r;
    };
    r.addEventsFromJson = function (a, c, d) {
        if (!m) {
            d = q(d, !0);
            var e = Oe(a);
            wa(e) ? r.addEvents(e, c, !1) : Pa(e) && e.hasOwnProperty("events") && r.addEvents(e.events, c, !1);
            d && x(b.events.onEventsAddedFromJSON, a);
        }
        return r;
    };
    r.addEvent = function (a, c, d, e) {
        var f = !1;
        if (
            !m &&
            ((e = q(e, !0)),
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
                c = q(c, !0);
                d = q(d, !0);
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
                v === n.empty || mk(v) || (a.url = n.empty);
                yc(a.created) || (a.created = new Date());
                e && (a.lastUpdated = new Date());
                rb[g][h] = Tk(a);
                f = !0;
                d && x(b.events.onEventAdded, a);
                c && (lb(), Nb(), Ia(), oa());
            }
        }
        return f;
    };
    r.updateEvents = function (a, c, d) {
        if (!m) {
            c = q(c, !0);
            d = q(d, !0);
            for (var e = a.length, f = 0; f < e; f++) {
                var g = a[f];
                r.updateEvent(g.id, g, !1, !1);
            }
            d && x(b.events.onEventsUpdated, a);
            c && (lb(), Nb(), Ia(), oa());
        }
        return r;
    };
    r.updateEvent = function (a, c, d, e) {
        var f = !1;
        !m &&
            (f = r.removeEvent(a, !1, !1)) &&
            ((d = q(d, !0)), (e = q(e, !0)), (f = r.addEvent(c, d, !1)), lb(), f && e && x(b.events.onEventUpdated, c));
        return f;
    };
    r.updateEventDateTimes = function (a, c, d, e, f, g) {
        var h = !1;
        m ||
            ((f = q(f, !0)),
            (g = q(g, !0)),
            yb(function (k) {
                if (k.id === a)
                    return (
                        (k.from = c),
                        (k.to = d),
                        (k.repeatEnds = e),
                        (h = !0),
                        g && x(b.events.onEventUpdated, k),
                        f && (lb(), Nb(), Ia(), oa()),
                        !0
                    );
            }));
        return h;
    };
    r.removeEvent = function (a, c, d) {
        var e = !1;
        m ||
            ((c = q(c, !0)),
            (d = q(d, !0)),
            yb(function (f, g, h) {
                if (h === a)
                    return (
                        delete rb[g][h], (e = !0), d && x(b.events.onEventRemoved, f), c && (lb(), Nb(), Ia(), oa()), !0
                    );
            }));
        return e;
    };
    r.clearEvents = function (a, c) {
        m ||
            ((a = q(a, !0)),
            (c = q(c, !0)),
            (rb = {}),
            c && x(b.events.onEventsCleared),
            a && (lb(), Nb(), Ia(), oa()));
        return r;
    };
    r.getEvents = function () {
        var a = [];
        m || (a = vb(Bd()));
        return a;
    };
    r.getEvent = function (a) {
        var b = null;
        T(a) &&
            !m &&
            yb(function (c) {
                if (c.id === a) return (b = c), !0;
            });
        return b;
    };
    r.removeExpiredEvents = function (a, b) {
        m ||
            ((a = q(a, !0)),
            (b = q(b, !0)),
            yb(function (a) {
                I(a.repeatEvery) === w.never && a.to < new Date() && r.removeEvent(a.id, !1, b);
            }),
            a && (lb(), Nb(), Ia(), oa()));
        return r;
    };
    r.addEventType = function (a, b) {
        var c = !1;
        Da(a) &&
            T(b) &&
            !m &&
            !O.hasOwnProperty(a) &&
            ((O[a] = { text: b, eventEditorInput: null }),
            p(Q.visibleEventTypes) && Q.visibleEventTypes.push(a),
            (c = !0));
        return c;
    };
    r.removeEventType = function (a) {
        var b = !1;
        Da(a) && !m && O.hasOwnProperty(a) && (delete O[a], (b = !0));
        return b;
    };
    r.setVisibleEventTypes = function (a, c) {
        if (wa(a) && !m) {
            c = q(c, !0);
            Q.visibleEventTypes = [];
            for (var d = a.length, e = 0; e < d; e++)
                Q.visibleEventTypes.indexOf(a[e]) === A.notFound && Q.visibleEventTypes.push(a[e]);
            La(!0, !1);
            c && x(b.events.onVisibleEventTypesChanged, Q.visibleEventTypes);
        }
        return r;
    };
    r.getAllGroups = function () {
        return fj();
    };
    r.clearAllGroups = function (a, c) {
        m ||
            ((a = q(a, !0)),
            (c = q(c, !0)),
            yb(function (a) {
                a.group = null;
            }),
            c && x(b.events.onGroupsCleared),
            a && (Nb(), Ia(), oa()));
        return r;
    };
    r.removeGroup = function (a, c, d) {
        if (T(a) && !m) {
            c = q(c, !0);
            d = q(d, !0);
            var e = a.toLowerCase();
            yb(function (a) {
                null !== a.group && a.group.toLowerCase() === e && (a.group = null);
            });
            d && x(b.events.onGroupRemoved, a);
            c && (Nb(), Ia(), oa());
        }
        return r;
    };
    r.setVisibleGroups = function (a, c) {
        if (wa(a) && !m) {
            c = q(c, !0);
            Q.visibleGroups = [];
            for (var d = a.length, e = 0; e < d; e++) {
                var f = a[e].toLowerCase();
                Q.visibleGroups.indexOf(f) === A.notFound && Q.visibleGroups.push(f);
            }
            La(!0, !1);
            c && x(b.events.onVisibleGroupsChanged, Q.visibleGroups);
        }
        return r;
    };
    r.setClipboardEvent = function (a) {
        Pa(a) && !m && (la = [re(a)]);
        return r;
    };
    r.setClipboardEvents = function (a) {
        if (wa(a) && !m) {
            la = [];
            for (var b = a.length, d = 0; d < b; d++) la.push(re(a[d]));
        }
        return r;
    };
    r.getClipboardEvents = function () {
        var a = null;
        m || (a = la);
        return a;
    };
    r.clearClipboard = function () {
        m || (la = []);
        return r;
    };
    r.getVersion = function () {
        return "2.12.3";
    };
    r.getId = function () {
        return Ba;
    };
    r.isBusy = function () {
        return ne;
    };
    r.getCurrentView = function () {
        return of(!1);
    };
    r.setOptions = function (a, c) {
        for (var d in a) a.hasOwnProperty(d) && (b[d] = a[d]);
        hl(b);
        cj();
        Ii();
        nb && ((c = q(c, !0)) && x(b.events.onOptionsUpdated, b), (nb = !1), (m && !eb) || F(v, !0, !0));
        return r;
    };
    r.setSearchOptions = function (a, c) {
        if (!m) {
            a = mb(a);
            c = q(c, !0);
            ld();
            for (var d in a) a.hasOwnProperty(d) && (u[d] = a[d]);
            c && x(b.events.onSearchOptionsUpdated, u);
        }
        return r;
    };
    r.addHolidays = function (a, c, d) {
        wa(a) &&
            !m &&
            ((c = q(c, !0)),
            (d = q(d, !0)),
            (b.holidays = b.holidays.concat(a)),
            c && x(b.events.onOptionsUpdated, b),
            d && F(v, !0, !0));
        return r;
    };
    r.removeHolidays = function (a, c, d) {
        if (wa(a) && !m) {
            c = q(c, !0);
            d = q(d, !0);
            for (var e = b.holidays.length, f = [], g = 0; g < e; g++) {
                var h = b.holidays[g],
                    p = G(h.title, n.empty);
                a.indexOf(p) === A.notFound && f.push(h);
            }
            b.holidays = f;
            c && x(b.events.onOptionsUpdated, b);
            d && F(v, !0, !0);
        }
        return r;
    };
    r.getHolidays = function () {
        return b.holidays;
    };
    (function (a, c, d, e, f) {
        C = a;
        ba = c;
        Hf = d;
        na = e;
        dc = f;
        Ba = J;
        if (T(Ba) || bj(Ba))
            hl(va),
                (u = mb(X, b.searchOptions)),
                (u.enabled = q(u.enabled, !0)),
                (u.lastSearchText = db(u.lastSearchText, n.empty)),
                (u.not = q(u.not, !1)),
                (u.matchCase = q(u.matchCase, !1)),
                (u.showAdvanced = q(u.showAdvanced, !1)),
                (u.searchTitle = q(u.searchTitle, !0)),
                (u.searchLocation = q(u.searchLocation, !1)),
                (u.searchDescription = q(u.searchDescription, !1)),
                (u.searchGroup = q(u.searchGroup, !1)),
                (u.searchUrl = q(u.searchUrl, !1)),
                (u.startsWith = q(u.startsWith, !1)),
                (u.endsWith = q(u.endsWith, !1)),
                (u.contains = q(u.contains, !0)),
                (u.left = ua(u.left, null)),
                (u.top = ua(u.top, null)),
                (u.history = gg(u.history, [])),
                F(b.initialDateTime, !0),
                null !== z && kb(b.openInFullScreenMode) && b.openInFullScreenMode && !m && Qk();
    })(document, window, navigator, Math, JSON);
};