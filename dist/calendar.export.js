/*! Calendar.js v2.12.4 | (c) Bunoon 2025 | MIT License */
export function calendarJs(I, ua, V) {
    function F(a, c, d) {
        v = xc(a) ? a : new Date();
        c = p(c) ? c : !1;
        d = p(d) ? d : !1;
        a = c;
        if (b.isWidget)
            (kg = dc(v)),
                lb || (Wd(!0), null !== z && (Ui(), Vi(), Wi(), Xi(), Yi(), Le || (Hh(), (Le = !0)), Zi(), Vd(), Ke())),
                kl();
        else {
            v.setDate(1);
            v.setHours(0, 0, 0, 0);
            c = v;
            var e = new Date();
            kg = c.getFullYear() === e.getFullYear() && c.getMonth() === e.getMonth();
            c = new Date(v.getFullYear(), v.getMonth(), 1);
            e = Me(0 === c.getDay() ? 7 : c.getDay());
            c = !Xd;
            Ne() && Hb();
            Ga();
            if (!lb && (Wd(), null !== z)) {
                r ||
                    (null === Yd &&
                        ((Yd = h("div", "side-menu-disabled-background")), (Yd.onclick = Hb), z.appendChild(Yd)),
                    ll());
                ml();
                nl();
                null === Ib && ((Ib = h("div", "full-month-view")), (Ib.id = ec()), z.appendChild(Ib));
                ol();
                if (!r) {
                    var f = null !== mb;
                    if (b.views.fullMonth.isPinUpViewEnabled) {
                        f || ((mb = h("div", "pin-up")), Ib.appendChild(mb));
                        f = b.views.fullMonth.pinUpViewImageUrls.length;
                        if (0 < f)
                            for (var k = 0; k < f; k++) new Image().src = b.views.fullMonth.pinUpViewImageUrls[k];
                        Xd || qb();
                    } else f && (Ib.removeChild(mb), (mb = null));
                }
                f = null !== yc;
                b.views.fullMonth.showDayNamesHeaders
                    ? (f && (yc.innerHTML = n.empty),
                      f || ((yc = h("div", "row-cells header-days")), Ib.appendChild(yc)),
                      r && (yc.onclick = C),
                      Ih(yc))
                    : f && (Ib.removeChild(yc), (yc = null));
                $i();
                pl();
                ql();
                rl();
                Le || (Hh(), (Le = !0));
                Vd();
                Ke();
            }
            if (1 < e) {
                f = new Date(v);
                f.setMonth(f.getMonth() - 1);
                k = ad(f.getFullYear(), f.getMonth());
                for (var m = 1, A = k - e + 1; A < k; A++) {
                    var rb = A === k - 1;
                    Jh(A + 1, m, f.getMonth(), f.getFullYear(), !0, rb);
                    m++;
                }
            }
            f = 0;
            k = ad(v.getFullYear(), v.getMonth());
            for (m = 0; m < k; m++) (f = e + m), Jh(m + 1, f, v.getMonth(), v.getFullYear(), !1);
            k = f;
            if (42 > k) {
                f = 1;
                e = new Date(v);
                e.setMonth(e.getMonth() + 1);
                for (k += 1; 43 > k; k++) (m = 1 === f), Jh(f, k, e.getMonth(), e.getFullYear(), !0, m), f++;
                f = ad(e.getFullYear(), e.getMonth());
                f = la.round(f / 2);
                Kh = new Date(e.getFullYear(), e.getMonth(), f);
            } else Kh = null;
            Ha();
            a &&
                (Ui(),
                Vi(),
                Wi(),
                Xi(),
                Yi(),
                sl(),
                tl(),
                ul(),
                vl(),
                Zi(),
                r || (wl(), xl(), yl(), zl()),
                null !== fc || r || ((fc = h("div", "calendar-notification")), ya.push(fc), E.body.appendChild(fc)));
            d && Ka(!0, !1);
            null !== z &&
                ((Lh.innerText = Mh(b.views.fullMonth.titleBarDateFormat, v)),
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
                                Nh()));
        }
    }
    function Vd() {
        pa(b.data) && q.addEvents(b.data, !1, !1, !1);
        if (b.useLocalStorageForEvents && Z.localStorage)
            for (var a = Z.localStorage.length, c = 0; c < a; c++) {
                var d = Z.localStorage.getItem(Z.localStorage.key(c));
                d = Oe(d);
                p(d) && q.addEvent(d, !1, !1, !1);
            }
        aj();
    }
    function Ke() {
        lb = !0;
        Xd || (x(b.events.onRender, za), (Xd = !0));
    }
    function Wd(a) {
        a = p(a) ? a : !1;
        if (null === z) {
            if (bj(za)) {
                var c = za;
                za = c.id;
                R(za) || (za = ec());
            } else c = Aa(za);
            null !== c &&
                ("input" !== c.tagName.toLowerCase() || ("text" !== c.type && "date" !== c.type)
                    ? ((z = c),
                      (z.className = a ? "calendar-widget" : "calendar"),
                      (z.innerHTML = n.empty),
                      100 <= Pe(z, "height")
                          ? (z.className += n.space + "fixed-height")
                          : z.style.removeProperty("height"))
                    : ((Qe = a = c),
                      gc(Qe, "hidden"),
                      (Bc = h("input", "calendar-date-picker-input")),
                      (Bc.readOnly = !0),
                      (Bc.placeholder = b.selectDatePlaceholderText),
                      (r = !0),
                      (c = h("div", "calendar-date-picker")),
                      a.insertAdjacentElement("afterend", c),
                      a.remove(a),
                      c.appendChild(Qe),
                      c.appendChild(Bc),
                      (z = h("div", "calendar calendar-hidden")),
                      (z.id = za),
                      c.appendChild(z),
                      (Bc.onclick = Al),
                      E.addEventListener("click", bd),
                      cj(),
                      (c = Qe.value.split("/")),
                      (a = null),
                      3 === c.length &&
                          ((c = new Date(parseInt(c[2]), parseInt(c[1]) - 1, parseInt(c[0]))),
                          c instanceof Date && !isNaN(c) && (a = c)),
                      null === a ? (a = new Date()) : Oh(a),
                      a.setHours(0, 0, 0, 0),
                      (Cc = a)));
        }
    }
    function ll() {
        Xd ||
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
                var a = La();
                null === a ? dd(ed) : a === W ? dd(hc) : a === da ? dd(ic) : a === ia ? dd(Dc) : a === ra && dd(Lb);
            }));
        b.importEventsEnabled &&
            b.manualEditingEnabled &&
            t(Kb, "ib-arrow-up-full-line", b.importEventsTooltipText, Bl);
        Xd || ((Ec = h("div", "content")), tb.appendChild(Ec));
    }
    function ej(a) {
        var c = Re(Fc) || !0 === a,
            d = Re(fd, !0),
            e = Re(gd, !0),
            f = Re(Gc, !0);
        a = Re(Hc, !0);
        Ec.innerHTML = n.empty;
        Hc = hd = Gc = id = gd = Ic = fd = Jc = Fc = jd = null;
        kd();
        var k = La();
        null === k
            ? Va(cd, 0 < ed.length)
            : k === W
              ? Va(cd, 0 < hc.length)
              : k === ra
                ? Va(cd, 0 < Lb.length)
                : k === da
                  ? Va(cd, 0 < ic.length)
                  : k === ia
                    ? Va(cd, 0 < Dc.length)
                    : Va(cd, !1);
        if (b.sideMenu.showDays) {
            var m = c;
            m = p(m) ? m : !0;
            jd = h("div", "content-section content-section-opened");
            Fc = h("div", "checkbox-container");
            Ec.appendChild(jd);
            c = 0;
            k = 7;
            var A = !1,
                rb = [];
            Se(jd, Fc, b.sideMenuDaysText, m, rb);
            jd.appendChild(Fc);
            if (b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday) (c = b.startOfWeekDay), (A = !0);
            for (; c < k; c++)
                (m = b.visibleDays.indexOf(c) > B.notFound),
                    rb.push(K(Fc, b.dayNames[c], Kc, c.toString(), m, null, Lc)[0]);
            if (A)
                for (k = b.startOfWeekDay, c = 0; c < k; c++)
                    (A = b.visibleDays.indexOf(c) > B.notFound),
                        rb.push(K(Fc, b.dayNames[c], Kc, c.toString(), A, null, Lc)[0]);
            b.reverseOrderDaysOfWeek && ld(Fc);
        }
        if (b.sideMenu.showEventTypes) {
            d = p(d) ? d : !0;
            fd = Jc = null;
            c = !1;
            k = [];
            for (var g in N)
                N.hasOwnProperty(g) &&
                    (c ||
                        ((Jc = h("div", "content-section content-section-opened")),
                        Ec.appendChild(Jc),
                        (fd = h("div", "checkbox-container")),
                        Se(Jc, fd, b.eventTypesText, d, k),
                        Jc.appendChild(fd),
                        (c = !0)),
                    (rb = !0),
                    p(O.visibleEventTypes) && (rb = O.visibleEventTypes.indexOf(parseInt(g)) > B.notFound),
                    k.push(K(fd, N[g].text, Kc, g, rb, null, Lc)[0]));
        }
        if (
            b.sideMenu.showGroups &&
            ((c = e), (c = p(c) ? c : !0), (gd = Ic = null), (g = fj()), (e = g.length), 0 < e)
        )
            for (
                d = [],
                    Ic = h("div", "content-section content-section-opened"),
                    gd = h("div", "checkbox-container"),
                    Ec.appendChild(Ic),
                    Se(Ic, gd, b.groupsText, c, d),
                    Ic.appendChild(gd),
                    c = 0;
                c < e;
                c++
            )
                (k = g[c]),
                    (rb = k.toLowerCase()),
                    (A = !0),
                    p(O.visibleGroups) && (A = O.visibleGroups.indexOf(rb) > B.notFound),
                    d.push(K(gd, k, Kc, rb, A, null, Lc)[0]);
        if (b.sideMenu.showWorkingDays) {
            c = f;
            c = p(c) ? c : !0;
            id = h("div", "content-section content-section-opened");
            Gc = h("div", "checkbox-container");
            Ec.appendChild(id);
            f = 0;
            g = 7;
            d = !1;
            e = [];
            Se(id, Gc, b.workingDaysText, c, e);
            id.appendChild(Gc);
            if (b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday) (f = b.startOfWeekDay), (d = !0);
            for (; f < g; f++)
                (c = b.workingDays.indexOf(f) > B.notFound),
                    e.push(K(Gc, b.dayNames[f], Kc, f.toString(), c, null, Lc)[0]);
            if (d)
                for (g = b.startOfWeekDay, f = 0; f < g; f++)
                    (d = b.workingDays.indexOf(f) > B.notFound),
                        e.push(K(Gc, b.dayNames[f], Kc, f.toString(), d, null, Lc)[0]);
            b.reverseOrderDaysOfWeek && ld(Gc);
        }
        if (b.sideMenu.showWeekendDays) {
            d = a;
            d = p(d) ? d : !0;
            hd = h("div", "content-section content-section-opened");
            Hc = h("div", "checkbox-container");
            Ec.appendChild(hd);
            a = 1;
            f = 8;
            e = !1;
            g = [];
            Se(hd, Hc, b.weekendDaysText, d, g);
            hd.appendChild(Hc);
            if (b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday)
                (a = b.startOfWeekDay + 1), (e = !0);
            for (; a < f; a++)
                (d = 6 < a ? 0 : a),
                    (c = b.weekendDays.indexOf(d) > B.notFound),
                    g.push(K(Hc, b.dayNames[a - 1], Kc, d.toString(), c, null, Lc)[0]);
            if (e)
                for (f = b.startOfWeekDay + 1, a = 1; a < f; a++)
                    (e = 6 < a ? 0 : a),
                        (d = b.weekendDays.indexOf(e) > B.notFound),
                        g.push(K(Hc, b.dayNames[a - 1], Kc, e.toString(), d, null, Lc)[0]);
            b.reverseOrderDaysOfWeek && ld(Hc);
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
        Ne() && ej();
    }
    function Mc(a) {
        ej(p(a) ? a : !1);
        lg = !1;
        tb.className += " side-menu-open";
        Yd.style.display = "block";
        nd(
            Ma.sideMenuEvents,
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
            Yd.style.display = "none";
            if (lg) {
                var a = !1,
                    c = !1;
                if (null !== Ic) {
                    var d = Te(Ic);
                    Zd(O.visibleGroups, d) ||
                        ((O.visibleGroups = [].slice.call(d)),
                        (c = !0),
                        x(b.events.onVisibleGroupsChanged, O.visibleGroups));
                }
                null !== Jc &&
                    ((d = Te(Jc, !0)),
                    Zd(O.visibleEventTypes, d) ||
                        ((O.visibleEventTypes = [].slice.call(d)),
                        (c = !0),
                        x(b.events.onVisibleEventTypesChanged, O.visibleEventTypes)));
                null !== jd &&
                    ((d = Te(jd, !0)),
                    1 <= d.length &&
                        !Zd(b.visibleDays, d) &&
                        ((b.visibleDays = [].slice.call(d)), (od = []), (c = a = !0)));
                null !== id &&
                    ((d = Te(id, !0)), Zd(b.workingDays, d) || ((b.workingDays = [].slice.call(d)), (c = a = !0)));
                null !== hd && ((d = Te(hd, !0)), Zd(b.weekendDays, d) || ((b.weekendDays = d), (c = a = !0)));
                c && (a && x(b.events.onOptionsUpdated, b), (lb = !1), F(v, !0, !0));
            }
            jc();
            E.body.removeEventListener("click", Hb);
        }
    }
    function Ne() {
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
        lg = c;
    }
    function Re(a, b) {
        return b && null === a ? !1 : null === a || "none" !== a.style.display;
    }
    function Kc() {
        lg = !0;
    }
    function kl() {
        Ph();
        z.innerHTML = n.empty;
        var a = X(v),
            c = h("div", "day-name");
        y(c, b.dayNames[a]);
        z.appendChild(c);
        t(c, "ib-arrow-right-full", b.nextDayTooltipText, Cl);
        t(c, "ib-arrow-left-full", b.previousDayTooltipText, Dl);
        c.appendChild(h("div", "right-divider-line"));
        b.manualEditingEnabled &&
            t(c, "ib-plus", b.addEventTooltipText, function () {
                P(null, new Date(v));
            });
        t(c, "ib-pin", b.todayTooltipText, El);
        a = h("div", "day-date");
        kc(a, v, !1, !0, !1);
        z.appendChild(a);
        Fl();
        Qh();
    }
    function Fl() {
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
                $d(m, k, Ue(k, v));
                ae(m, k);
                m.id = "widget-day-" + k.id;
                m.setAttribute("event-type", H(k.type));
                m.setAttribute("event-id", k.id);
                m.setAttribute("event-is-all-day", k.isAllDay);
                if (!x(b.events.onWidgetEventRender, m, k)) {
                    var A = h("div", "title");
                    if (H(k.repeatEvery) > w.never && b.showReoccurringEventIcons) {
                        var g = h("div", "ib-refresh-medium ib-no-hover ib-no-active");
                        g.style.borderColor = m.style.color;
                        A.appendChild(g);
                    }
                    A.innerHTML += lc(k.title);
                    m.appendChild(A);
                    A = h("div", "date");
                    m.appendChild(A);
                    g = h("div", "duration");
                    m.appendChild(g);
                    k.from.getDate() === k.to.getDate()
                        ? k.isAllDay
                            ? Nb(A, k.from, null, " - " + b.allDayText)
                            : (Nb(A, k.from, null, " - " + be(k.from, k.to)), y(g, Ob(k.from, k.to)))
                        : (Ve(A, k.from, k.to), y(g, Ob(k.from, k.to)));
                    g.innerHTML === n.empty && m.removeChild(g);
                    Ba(k.repeatEvery) &&
                        k.repeatEvery > w.never &&
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
    function El(a) {
        C(a);
        F();
    }
    function Cl(a) {
        C(a);
        a = new Date(v);
        a.setDate(a.getDate() + 1);
        a.getFullYear() <= b.maximumYear && F(a);
    }
    function Dl(a) {
        C(a);
        a = new Date(v);
        a.setDate(a.getDate() - 1);
        a.getFullYear() >= b.minimumYear && F(a);
    }
    function cj() {
        r &&
            ((b.exportEventsEnabled = !1),
            (b.manualEditingEnabled = !1),
            (b.fullScreenModeEnabled = !1),
            (b.eventNotificationsEnabled = !1),
            (b.views.fullMonth.showPreviousNextMonthNames = !1),
            (b.views.fullMonth.showExtraTitleBarButtons = !1),
            (b.holidays = []));
    }
    function Al(a) {
        C(a);
        mg("calendar calendar-shown", "calendar calendar-hidden");
        if (cb) (z.className = "calendar calendar-hidden"), Ga(), x(b.events.onDatePickerClosed, za);
        else {
            z.className = "calendar calendar-shown";
            F(new Date(Cc), !lb);
            x(b.events.onDatePickerOpened, za);
            a = hj;
            null === a && (a = hj = z.offsetTop);
            z.style.top = a + "px";
            var c = We(z),
                d = ij();
            c.top - d.top + z.offsetHeight > Z.innerHeight
                ? ((c = Pe(z, "border-width")),
                  (d = Pe(Bc, "border-width")),
                  (a -= z.offsetHeight + Bc.clientHeight + 4 * c + 2 * d),
                  (z.className += " calendar-shadow-top"),
                  (z.style.top = a + "px"))
                : (z.className += " calendar-shadow-bottom");
        }
        cb = !cb;
    }
    function bd() {
        cb && ((z.className = "calendar calendar-hidden"), (cb = !1), Ga(), x(b.events.onDatePickerClosed, za));
    }
    function Oh(a) {
        Bc.value = Mh(b.views.datePicker.selectedDateFormat, a);
        Qe.value = a.getFullYear() + "-" + J(a.getMonth() + 1) + "-" + J(a.getDate());
    }
    function jj(a) {
        var c = !0;
        null !== b.views.datePicker.minimumDate && (c = Xe(b.views.datePicker.minimumDate, a));
        c && null !== b.views.datePicker.maximumDate && (c = Xe(a, b.views.datePicker.maximumDate));
        return c;
    }
    function Hh(a) {
        var c = (a = p(a) ? a : !0) ? E.body.addEventListener : E.body.removeEventListener,
            d = a ? E.addEventListener : E.removeEventListener;
        a = a ? Z.addEventListener : Z.removeEventListener;
        c("click", Gl);
        c("contextmenu", Sh);
        c("mousemove", Hl);
        c("mouseup", Th);
        c("mouseleave", Il);
        d("scroll", Sh);
        a("resize", Sh);
        a("resize", Uh);
        a("resize", Jl);
        a("blur", Kl);
        b.shortcutKeysEnabled && d("keydown", Ll);
    }
    function Gl(a) {
        Ga();
        fa(a) || mc();
    }
    function Kl() {
        Ga();
        jc();
        r && bd();
    }
    function Jl() {
        qd(Ma.windowResize);
        nd(
            Ma.windowResize,
            function () {
                Ka(!0, !1);
            },
            50,
            !1
        );
    }
    function Sh() {
        Ga();
    }
    function Ga(a) {
        var b = !1;
        a = p(a) ? a : !0;
        ng(Ia) && (b = !0);
        ng(Y) && (b = !0);
        ng(Na) && (b = !0);
        ng(nb) && (b = !0);
        og() && (b = !0);
        jc();
        mg("calendar-context-menu");
        mg("years-drop-down");
        mg("years-drop-down-no-months");
        a && Ye();
        return b;
    }
    function Ll(a) {
        if (r)
            cb &&
                (a.keyCode === Q.escape
                    ? (a.preventDefault(), bd())
                    : fa(a) && a.keyCode === Q.left
                      ? (a.preventDefault(), pg())
                      : fa(a) && a.keyCode === Q.right
                        ? (a.preventDefault(), qg())
                        : a.keyCode === Q.left
                          ? (a.preventDefault(), Ze())
                          : a.keyCode === Q.right
                            ? (a.preventDefault(), $e())
                            : a.keyCode === Q.down && (a.preventDefault(), rg()));
        else if (Ne()) a.keyCode === Q.escape && Ne() && (a.preventDefault(), Hb());
        else {
            if (rd) {
                var c = kj();
                fa(a) && a.keyCode === Q.left && c
                    ? (a.preventDefault(), pg())
                    : fa(a) && a.keyCode === Q.right && c
                      ? (a.preventDefault(), qg())
                      : a.keyCode === Q.escape
                        ? !lj() && c && b.useEscapeKeyToExitFullScreenMode && Wa()
                        : a.keyCode === Q.left && c
                          ? (a.preventDefault(),
                            (c = La()),
                            null === c ? Ze() : c === W ? mj() : c === da ? nj() : c === Da ? oj() : c === ia && pj())
                          : a.keyCode === Q.right && c
                            ? (a.preventDefault(),
                              (c = La()),
                              null === c ? $e() : c === W ? qj() : c === da ? rj() : c === Da ? sj() : c === ia && tj())
                            : a.keyCode === Q.down && c
                              ? (a.preventDefault(),
                                (c = La()),
                                null === c
                                    ? rg()
                                    : c === W
                                      ? uj()
                                      : c === da
                                        ? vj()
                                        : c === Da
                                          ? wj()
                                          : c === ia && xj())
                              : a.keyCode === Q.f5 && c && Ka(!1, !0);
            } else a.keyCode === Q.escape && lj();
            if (fa(a) && a.shiftKey && a.keyCode === Q.a)
                a.preventDefault(), b.manualEditingEnabled && P(null, new Date());
            else if (fa(a) && a.shiftKey && a.keyCode === Q.c) a.preventDefault(), yj();
            else if (fa(a) && a.shiftKey && a.keyCode === Q.e)
                a.preventDefault(),
                    b.exportEventsEnabled &&
                        ((a = []),
                        (c = La()),
                        null === c
                            ? (a = ed)
                            : c === W
                              ? (a = hc)
                              : c === da
                                ? (a = ic)
                                : c === ia
                                  ? (a = Dc)
                                  : c === ra && (a = Lb),
                        0 < a.length && dd(a));
            else if (fa(a) && a.shiftKey && a.keyCode === Q.g) a.preventDefault(), b.configurationDialogEnabled && dj();
            else if (fa(a) && a.shiftKey && a.keyCode === Q.j) a.preventDefault(), ce();
            else if (fa(a) && a.shiftKey && a.keyCode === Q.f)
                a.preventDefault(),
                    (a = !1),
                    (c = La()),
                    null === c
                        ? (a = 0 < ed.length)
                        : c === W
                          ? (a = 0 < hc.length)
                          : c === da
                            ? (a = 0 < Lb.length)
                            : c === Da
                              ? (a = 0 < ic.length)
                              : c === ia && (a = 0 < Dc.length),
                    a && de();
            else if (fa(a) && a.shiftKey && a.keyCode === Q.m) {
                if ((a.preventDefault(), db(ra))) for (a = sg.length, c = 0; c < a; c++) sg[c]();
            } else
                fa(a) && a.shiftKey && a.keyCode === Q.o
                    ? (a.preventDefault(), md() && Mc())
                    : fa(a) && a.shiftKey && a.keyCode === Q.v
                      ? (a.preventDefault(), (a = ja.length), db(W) && 0 < a && Vh(L, Pb))
                      : fa(a) && a.shiftKey && a.keyCode === Q.x
                        ? (a.preventDefault(), yj(!0))
                        : fa(a) && a.shiftKey && a.keyCode === Q.f11 && (a.preventDefault(), Wa());
        }
    }
    function fa(a) {
        return a.ctrlKey || a.metaKey;
    }
    function lj() {
        var a = Ga(!1);
        a || (a = Ye());
        !a && 0 < eb.length && ((a = eb[eb.length - 1]), Wh(a) && (eb.pop(), a(!1)), (a = !0));
        a || (a = kd());
        a || (a = mc());
        !a && 0 < ja.length && (ee(), (ja = []), (Pb = !1), (a = !0));
        !a && 0 < vb.length && (zj(), (a = !0));
        return a;
    }
    function ml() {
        if (!r && b.views.fullDay.enabled) {
            var a = null !== W;
            a && (W.innerHTML = n.empty);
            a || ((W = h("div", "full-day-view")), (W.id = ec()), z.appendChild(W));
            a = h("div", "title-bar");
            W.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Wa);
            af = h("div", "title");
            a.appendChild(af);
            t(a, "ib-close", b.closeTooltipText, Ml);
            a.appendChild(h("div", "right-divider-line"));
            b.views.fullDay.showExtraTitleBarButtons &&
                b.fullScreenModeEnabled &&
                ((Xh = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Wa)),
                a.appendChild(h("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextDayTooltipText, qj);
            b.manualEditingEnabled &&
                b.views.fullDay.showExtraTitleBarButtons &&
                t(a, "ib-plus", b.addEventTooltipText, function () {
                    if (b.useTemplateWhenAddingNewEvent) {
                        var a = sd(L, L);
                        P(a);
                        td();
                    } else P(null, L);
                });
            b.views.timeline.enabled &&
                (a.appendChild(h("div", "right-divider-line-views")),
                t(a, "ib-bar-graph", b.viewTimelineTooltipText, function () {
                    Jb(L, !0);
                }));
            !r &&
                md() &&
                (t(a, "ib-hamburger", b.showMenuTooltipText, Mc), a.appendChild(h("div", "left-divider-line")));
            t(a, "ib-arrow-left-full", b.previousDayTooltipText, mj);
            b.views.fullDay.showExtraTitleBarButtons &&
                ((Aj = t(a, "ib-pin", b.todayTooltipText, uj)),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        ce();
                    }),
                a.appendChild(h("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    Ka(!0, !0);
                }),
                u.enabled && (Bj = t(a, "ib-search", b.searchTooltipText, de)));
            wb = h("div", "contents custom-scroll-bars");
            W.appendChild(wb);
            wb.oncontextmenu = function (a) {
                var b = tg(a, wa);
                bf = J(b[0]) + ":" + J(b[1]);
                Cj(a, L, hc);
            };
            Nc = h("div", "content-events-all-day");
            wb.appendChild(Nc);
            a = h("div", "all-day-text");
            y(a, b.allDayText);
            Nc.appendChild(a);
            wa = h("div", "contents-events");
            wa.ondblclick = Nl;
            wb.appendChild(wa);
            fe = h("div", "working-hours");
            wb.appendChild(fe);
            b.manualEditingEnabled &&
                b.dragAndDropForEventsEnabled &&
                ((wa.ondragover = C),
                (wa.ondragenter = C),
                (wa.ondragleave = C),
                (wa.ondrop = function (a) {
                    Dj(a, L, wa);
                }));
            Ej(wa, b.views.fullDay.minutesBetweenSections);
            cf = h("div", "time-arrow");
            wa.appendChild(cf);
            cf.appendChild(h("div", "arrow-left"));
            cf.appendChild(h("div", "line"));
        }
    }
    function nc(a, b, d, e, f) {
        for (var c = new Date(a.from), m = Oc(a.repeatEveryExcludeDays); c < d; ) {
            e(c, f);
            var h = !(!p(a.repeatEnds) || Xe(c, a.repeatEnds));
            if (m.indexOf(c.getDay()) === B.notFound && !h && U(c, d)) {
                b.push(a);
                break;
            }
        }
    }
    function Ol(a, c) {
        var d = 0,
            e = Oc(a.seriesIgnoreDates),
            f = ud(c),
            k = new Date(c);
        if (ge(a) && e.indexOf(f) === B.notFound) {
            var m = h("div", "event");
            m.ondblclick = C;
            m.setAttribute("event-type", H(a.type));
            m.setAttribute("event-id", a.id);
            m.setAttribute("event-is-all-day", a.isAllDay);
            m.onclick = function (a) {
                Fj(a, m);
            };
            a.isAllDay
                ? Nc.appendChild(m)
                : (b.manualEditingEnabled &&
                      b.dragAndDropForEventsEnabled &&
                      (U(a.from, a.to) && (m.className += " resizable"),
                      (m.ondragstart = function (b) {
                          var d = We(m);
                          ug = m;
                          vg = m.offsetTop;
                          Qb = a;
                          wg = d.top - b.pageY;
                          xg = c;
                      }),
                      (m.ondragEnd = Th),
                      m.setAttribute("draggable", !0)),
                  wa.appendChild(m));
            m.oncontextmenu = function (b) {
                df(b, a, f);
            };
            ef(m, a);
            $d(m, a, Ue(a, c));
            ae(m, a, k);
            U(a.from, c) && (m.id = "full-day-" + a.id);
            x(b.events.onFullDayEventRender, m, a) ||
                ((e = h("div", "title")),
                H(a.repeatEvery) > w.never &&
                    b.showReoccurringEventIcons &&
                    ((k = h("div", "ib-refresh-medium ib-no-hover ib-no-active")),
                    (k.style.borderColor = m.style.color),
                    e.appendChild(k)),
                (e.innerHTML += lc(a.title)),
                m.appendChild(e),
                a.isAllDay && !b.views.fullDay.showAllDayEventDetails) ||
                ((e = h("div", "date")),
                m.appendChild(e),
                (k = h("div", "duration")),
                m.appendChild(k),
                a.from.getDate() === a.to.getDate()
                    ? a.isAllDay
                        ? y(e, b.allDayText)
                        : (y(e, be(a.from, a.to)), y(k, Ob(a.from, a.to)))
                    : (Ve(e, a.from, a.to), y(k, Ob(a.from, a.to))),
                k.innerHTML === n.empty && m.removeChild(k),
                b.views.fullDay.showEventUrls &&
                    Ca(a.url) &&
                    ((e = h("div", "url-text")),
                    y(e, yg(a.url)),
                    m.appendChild(e),
                    (e.onclick = function (b) {
                        C(b);
                        he(a.url);
                    })),
                Ba(a.repeatEvery) &&
                    a.repeatEvery > w.never &&
                    ((e = h("div", "repeats")),
                    y(e, b.repeatsText.replace(":", n.empty) + n.space + pd(a.repeatEvery)),
                    m.appendChild(e)),
                Ca(a.location) && ((e = h("div", "location")), y(e, a.location), m.appendChild(e)),
                Ca(a.description) && ((e = h("div", "description")), y(e, a.description), m.appendChild(e)));
            m.addEventListener("click", function (b) {
                ff(b, a);
            });
            a.isAllDay || (d = Gj(wb, wa, c, m, a));
            hc.push(a);
            a.isAllDay || zg.push({ eventDetails: a, eventElement: m, height: m.offsetHeight });
        }
        return d;
    }
    function Ua(a, c) {
        a = p(a) ? new Date(a) : new Date();
        c = p(c) ? c : !1;
        var d = new Date(),
            e = X(d);
        e = b.visibleDays.indexOf(e) > B.notFound;
        af.innerHTML = n.empty;
        L = new Date(a);
        hc = [];
        zg = [];
        Nc.style.display = "block";
        fe.style.display = "none";
        U(a, d) && !e && Hj();
        Va(Aj, e);
        Yh(wb, "event");
        kd();
        x(b.events.onFullDayTitleRender, L) || kc(af, L, !1, !0, !0);
        gf(W);
        if (0 <= b.workingDays.indexOf(X(a)) && null !== b.workingHoursStart && null !== b.workingHoursEnd) {
            var f = null;
            d = null;
            Oa(b.workingHoursStart)
                ? ((e = X(L)),
                  b.workingHoursStart.hasOwnProperty(e.toString()) && (f = b.workingHoursStart[e.toString()]))
                : (f = b.workingHoursStart);
            Oa(b.workingHoursEnd)
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
                (fe.style.display = "block"),
                (fe.style.top = f + "px"),
                (fe.style.height = d + "px"));
        }
        d = a;
        e = null;
        if (b.showHolidays) {
            f = [];
            for (var k = [], m = b.holidays.length, h = 0; h < m; h++) {
                var g = b.holidays[h],
                    q = G(g.title, n.empty);
                Ij(g, d) && q !== n.empty && k.indexOf(q.toLowerCase()) && (f.push(q), k.push(q.toLowerCase()));
            }
            0 < f.length && (e = f.join(", "));
        }
        d = e;
        f = [];
        null !== d && aa(af, " (" + d + ")", "light-title-bar-text");
        Rh(a, f);
        f = ub(f);
        k = f.length;
        e = null;
        d = Jj(L, W, cf, wa, b.views.fullDay.showTimelineArrow);
        for (m = 0; m < k; m++) (h = Ol(f[m], a)), null === e && (e = h);
        c &&
            ((a = W),
            (c = b.views.fullDay.showTimelineArrow),
            dc(L) && db(a) && c
                ? ((a = Nc.offsetHeight), (a = 1 >= a ? 4 * b.spacing : a), (wb.scrollTop = d - a))
                : (wb.scrollTop = e - wb.offsetHeight / 2));
        1 >= Nc.offsetHeight && (Nc.style.display = "none");
        Va(Bj, 0 < hc.length);
        Kj(wa);
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
            d > w.never &&
                (d === w.everyDay
                    ? nc(c, b, a, Xa, 1)
                    : d === w.everyWeek
                      ? nc(c, b, a, Rb, 1)
                      : d === w.every2Weeks
                        ? nc(c, b, a, Rb, 2)
                        : d === w.everyMonth
                          ? nc(c, b, a, ie, 1)
                          : d === w.everyYear
                            ? nc(c, b, a, vd, 1)
                            : d === w.custom &&
                              ((d = H(c.repeatEveryCustomType)),
                              (f = H(c.repeatEveryCustomValue)),
                              0 < f &&
                                  (d === M.daily
                                      ? nc(c, b, a, Xa, f)
                                      : d === M.weekly
                                        ? nc(c, b, a, Rb, f)
                                        : d === M.monthly
                                          ? nc(c, b, a, ie, f)
                                          : d === M.yearly && nc(c, b, a, vd, f))));
        });
    }
    function Ml() {
        wd(W);
        L = null;
        hc = [];
        zg = [];
    }
    function Nl(a) {
        b.manualEditingEnabled &&
            ((a = tg(a, wa)),
            b.useTemplateWhenAddingNewEvent
                ? ((a = J(a[0]) + ":" + J(a[1])), (a = sd(L, L, a, a)), P(a), td())
                : P(null, L, a));
    }
    function mj() {
        Ag(L);
        if (7 > b.visibleDays.length) for (var a = X(L); b.visibleDays.indexOf(a) === B.notFound; ) Ag(L), (a = X(L));
        Ua(L, !0);
    }
    function qj() {
        Hj(!0);
    }
    function uj() {
        L = new Date();
        Ua(L, !0);
    }
    function Hj(a) {
        a = p(a) ? a : !1;
        Xa(L);
        if (7 > b.visibleDays.length) for (var c = X(L); b.visibleDays.indexOf(c) === B.notFound; ) Xa(L), (c = X(L));
        a && Ua(L, !0);
    }
    function nl() {
        if (!r && b.views.fullWeek.enabled) {
            var a = null !== da;
            a && ((da.innerHTML = n.empty), (xd = null));
            a || ((da = h("div", "full-week-view")), (da.id = ec()), z.appendChild(da));
            a = h("div", "title-bar");
            da.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Wa);
            Pa = h("div", "title");
            a.appendChild(Pa);
            t(a, "ib-close", b.closeTooltipText, function () {
                ic = [];
                wd(da);
            });
            a.appendChild(h("div", "right-divider-line"));
            b.views.fullWeek.showExtraTitleBarButtons &&
                b.fullScreenModeEnabled &&
                ((Zh = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Wa)),
                a.appendChild(h("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextWeekTooltipText, rj);
            b.manualEditingEnabled &&
                b.views.fullWeek.showExtraTitleBarButtons &&
                t(a, "ib-plus", b.addEventTooltipText, function () {
                    P(null, new Date(Lj));
                });
            !r &&
                md() &&
                (t(a, "ib-hamburger", b.showMenuTooltipText, Mc), a.appendChild(h("div", "left-divider-line")));
            t(a, "ib-arrow-left-full", b.previousWeekTooltipText, nj);
            b.views.fullWeek.showExtraTitleBarButtons &&
                (t(a, "ib-pin", b.thisWeekTooltipText, vj),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        ce();
                    }),
                a.appendChild(h("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    Ka(!0, !0);
                }),
                u.enabled && (Mj = t(a, "ib-search", b.searchTooltipText, de)));
            yd = h("div", "contents custom-scroll-bars");
            da.appendChild(yd);
            Pl();
        }
    }
    function Pl() {
        var a = h("div", "header-days-container");
        yd.appendChild(a);
        b.views.fullWeek.showDayNamesHeaders && ((xd = h("div", "row-cells header-days")), a.appendChild(xd));
        zd = h("div", "content-events-all-day");
        yd.appendChild(zd);
        je = h("div", "row-cells days");
        zd.appendChild(je);
        a = h("div", "all-day-text");
        y(a, b.allDayText);
        zd.appendChild(a);
        ke = h("div", "hours");
        yd.appendChild(ke);
        Ej(ke, b.views.fullWeek.minutesBetweenSections);
        hf = h("div", "row-cells days");
        ke.appendChild(hf);
    }
    function $h(a, c, d) {
        for (; a < c; a++) b.visibleDays.indexOf(a) > B.notFound && Ql(d, a);
    }
    function Ql(a, c) {
        var d = h("div", Bg()),
            e = h("div", Bg()),
            f = new Date(a[c]);
        d.id = "calendar-week-day-" + c;
        e.id = "calendar-week-all-day-" + c;
        hf.appendChild(d);
        je.appendChild(e);
        d.ondblclick = function (a) {
            b.manualEditingEnabled &&
                ((a = tg(a, d)),
                b.useTemplateWhenAddingNewEvent
                    ? ((a = J(a[0]) + ":" + J(a[1])), (a = sd(f, f, a, a)), P(a), td())
                    : P(null, f, a));
        };
        Cg(e, f.getFullYear(), f.getMonth(), f.getDate());
        Rl(d, c);
        dc(f) && Sl(d, f);
        b.manualEditingEnabled &&
            b.dragAndDropForEventsEnabled &&
            ((d.ondragover = C),
            (d.ondragenter = C),
            (d.ondragleave = C),
            (d.ondrop = function (a) {
                Dj(a, f, ke);
            }));
        d.oncontextmenu = function (a) {
            var b = tg(a, d);
            bf = J(b[0]) + ":" + J(b[1]);
            Cj(a, f, jf[c]);
        };
    }
    function Sl(a, c) {
        le = h("div", "time-arrow");
        a.appendChild(le);
        le.appendChild(h("div", "arrow-left"));
        le.appendChild(h("div", "line"));
        Dg = Jj(c, da, le, a, b.views.fullWeek.showTimelineArrow);
    }
    function Rl(a, c) {
        if (null !== b.workingHoursStart && null !== b.workingHoursEnd && 0 <= b.workingDays.indexOf(c)) {
            var d =
                Oa(b.workingHoursStart) && b.workingHoursStart.hasOwnProperty(c.toString())
                    ? b.workingHoursStart[c.toString()]
                    : b.workingHoursStart;
            var e =
                Oa(b.workingHoursEnd) && b.workingHoursEnd.hasOwnProperty(c.toString())
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
    function Nj(a, c) {
        a.getFullYear() === c.getFullYear()
            ? (a.getMonth() === c.getMonth()
                  ? (Nb(Pa, a), aa(Pa, " - "), Nb(Pa, c, null, n.space), aa(Pa, b.monthNames[a.getMonth()]))
                  : (kc(Pa, a, !1, !1), aa(Pa, " - "), kc(Pa, c, !1, !1)),
              aa(Pa, ", " + a.getFullYear()))
            : (kc(Pa, a, !1, !0), aa(Pa, " - "), kc(Pa, c, !1, !0));
    }
    function oc(a, b, d, e, f) {
        for (var c = new Date(a.from), m = Oc(a.repeatEveryExcludeDays), h = !1; c < d; ) {
            e(c, f);
            var g = !(!p(a.repeatEnds) || Xe(c, a.repeatEnds));
            if (m.indexOf(c.getDay()) === B.notFound && !g && c >= b && c <= d) {
                g = Aa("calendar-week-day-" + X(c));
                var n = Aa("calendar-week-all-day-" + X(c));
                null !== g && (Oj(g, n, a, c), (h = !0));
            }
        }
        return h;
    }
    function Oj(a, c, d, e) {
        var f = !1,
            k = Oc(d.seriesIgnoreDates),
            m = new Date(e),
            A = ud(m);
        e = new Date(e);
        if (ge(d) && k.indexOf(A) === B.notFound) {
            var g = h("div", "event");
            f = X(m);
            g.setAttribute("event-type", H(d.type));
            g.setAttribute("event-id", d.id);
            g.setAttribute("event-is-all-day", d.isAllDay);
            a.appendChild(g);
            g.onclick = function (a) {
                Fj(a, g);
            };
            g.oncontextmenu = function (a) {
                df(a, d, A);
            };
            d.isAllDay
                ? (c.appendChild(g), ai(g, d, m, c), (bi = !0))
                : b.manualEditingEnabled &&
                  b.dragAndDropForEventsEnabled &&
                  !kf(d) &&
                  (U(d.from, d.to) && !d.isAllDay && (g.className += " resizable"),
                  (g.ondragstart = function (a) {
                      var b = We(g);
                      ug = g;
                      vg = g.offsetTop;
                      Qb = d;
                      wg = b.top - a.pageY;
                      xg = m;
                  }),
                  (g.ondragEnd = Th),
                  g.setAttribute("draggable", !0));
            ef(g, d);
            $d(g, d, Ue(d, m));
            ae(g, d, e);
            U(d.from, m) && (g.id = "week-day-" + d.id);
            x(b.events.onFullWeekEventRender, g, d) ||
                ((c = h("div", "title")),
                H(d.repeatEvery) > w.never &&
                    b.showReoccurringEventIcons &&
                    ((k = h("div", "ib-refresh-medium ib-no-hover ib-no-active")),
                    (k.style.borderColor = g.style.color),
                    c.appendChild(k)),
                (c.innerHTML += lc(d.title)),
                g.appendChild(c),
                d.isAllDay && !b.views.fullWeek.showAllDayEventDetails) ||
                ((c = h("div", "date")),
                g.appendChild(c),
                (k = h("div", "duration")),
                g.appendChild(k),
                d.from.getDate() === d.to.getDate()
                    ? d.isAllDay
                        ? y(c, b.allDayText)
                        : (y(c, be(d.from, d.to)), y(k, Ob(d.from, d.to)))
                    : (Ve(c, d.from, d.to), y(k, Ob(d.from, d.to))),
                k.innerHTML === n.empty && g.removeChild(k),
                b.views.fullWeek.showEventUrls &&
                    Ca(d.url) &&
                    ((c = h("div", "url-text")),
                    y(c, yg(d.url)),
                    g.appendChild(c),
                    (c.onclick = function (a) {
                        C(a);
                        he(d.url);
                    })),
                Ba(d.repeatEvery) &&
                    d.repeatEvery > w.never &&
                    ((c = h("div", "repeats")),
                    y(c, b.repeatsText.replace(":", n.empty) + n.space + pd(d.repeatEvery)),
                    g.appendChild(c)),
                Ca(d.location) && ((c = h("div", "location")), y(c, d.location), g.appendChild(c)),
                Ca(d.description) && ((c = h("div", "description")), y(c, d.description), g.appendChild(c)));
            g.addEventListener("click", function (a) {
                ff(a, d);
            });
            d.isAllDay || Gj(a, a, m, g, d, !0);
            d.isAllDay || ci.push({ eventDetails: d, eventElement: g, height: g.offsetHeight });
            jf.hasOwnProperty(f) || (jf[f] = []);
            lf = 0 === lf ? g.offsetTop : la.min(lf, g.offsetTop);
            jf[f].push(d);
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
        le = null;
        ic = [];
        jf = {};
        bi = !1;
        Dg = null;
        lf = 0;
        zd.style.display = "none";
        ci = [];
        Lj = a;
        gf(da);
        kd();
        Pa.innerHTML = n.empty;
        if (!x(b.events.onFullWeekTitleRender, a, e)) {
            if (b.views.fullWeek.showWeekNumbersInTitles) {
                d = Pa;
                var f = b.weekText + n.space,
                    k = new Date(a.getFullYear(), 0, 1),
                    m = la.ceil(((a - k) / 864e5 + k.getDay() + 1) / 7);
                4 < k.getDay() && m--;
                aa(d, f + m + ": ");
            }
            b.reverseOrderDaysOfWeek ? Nj(e, a) : Nj(a, e);
        }
        Ih(xd, !1);
        d = b.dayHeaderNames.length;
        f = {};
        for (k = new Date(a); k < e; ) (f[X(k)] = new Date(k)), k.setDate(k.getDate() + 1);
        hf.innerHTML = n.empty;
        je.innerHTML = n.empty;
        b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday
            ? ($h(b.startOfWeekDay, d, f), $h(0, b.startOfWeekDay, f))
            : $h(0, d, f);
        b.reverseOrderDaysOfWeek && ld(hf);
        if (null !== xd && b.views.fullWeek.showDatesInDayHeaders) {
            d = new Date(a);
            f = 0;
            for (k = xd.children; d < e; )
                (m = X(d)),
                    b.visibleDays.indexOf(m) > B.notFound &&
                        ((k[f].innerHTML = b.views.fullWeek.padDayMonthNumbers
                            ? k[f].innerHTML + (n.space + J(d.getDate()) + "/" + J(d.getMonth() + 1))
                            : k[f].innerHTML + (n.space + d.getDate() + "/" + (d.getMonth() + 1))),
                        f++),
                    d.setDate(d.getDate() + 1);
            b.reverseOrderDaysOfWeek && ld(xd);
        }
        d = ub(Ad());
        f = d.length;
        for (k = 0; k < f; k++) {
            m = d[k];
            for (var h = Pc(m.from, m.to) + 1, g = new Date(m.from), q = !1, l = 0; l < h; l++) {
                if (g >= a && g <= e) {
                    var r = Aa("calendar-week-day-" + X(g)),
                        t = Aa("calendar-week-all-day-" + X(g));
                    null !== r && Oj(r, t, m, g) && (q = !0);
                }
                Xa(g);
            }
            q && ic.push(m);
            g = H(m.repeatEvery);
            h = !1;
            g > w.never &&
                (g === w.everyDay
                    ? (h = oc(m, a, e, Xa, 1))
                    : g === w.everyWeek
                      ? (h = oc(m, a, e, Rb, 1))
                      : g === w.every2Weeks
                        ? (h = oc(m, a, e, Rb, 2))
                        : g === w.everyMonth
                          ? (h = oc(m, a, e, ie, 1))
                          : g === w.everyYear
                            ? (h = oc(m, a, e, vd, 1))
                            : g === w.custom &&
                              ((g = H(m.repeatEveryCustomType)),
                              (l = H(m.repeatEveryCustomValue)),
                              0 < l &&
                                  (g === M.daily
                                      ? (h = oc(m, a, e, Xa, l))
                                      : g === M.weekly
                                        ? (h = oc(m, a, e, Rb, l))
                                        : g === M.monthly
                                          ? (h = oc(m, a, e, ie, l))
                                          : g === M.yearly && (h = oc(m, a, e, vd, l)))));
            h && !q && ic.push(m);
        }
        a = b.dayHeaderNames.length;
        for (e = 0; e < a; e++) (d = Aa("calendar-week-day-" + e)), null !== d && Kj(d);
        a = 0;
        if (bi) {
            zd.style.display = "block";
            e = je.children.length;
            for (d = 0; d < e; d++) {
                f = je.children[d].children;
                k = f.length;
                for (q = m = 0; q < k; q++) m += f[q].offsetHeight + b.spacing;
                a = la.max(a, m);
            }
            zd.style.height = a + b.spacing + "px";
        }
        c && (null !== Dg ? ((a = 0 >= a ? 4 * b.spacing : a), (yd.scrollTop = Dg - a)) : (yd.scrollTop = lf));
        Va(Mj, 0 < ic.length);
    }
    function nj() {
        Sb.setDate(Sb.getDate() - 7);
        zc(Sb, !0);
    }
    function rj() {
        Rb(Sb);
        zc(Sb, !0);
    }
    function vj() {
        Sb = new Date();
        zc(Sb, !0);
    }
    function ol() {
        Eg = Fg = null;
        var a = null !== S;
        a && (S.innerHTML = n.empty);
        a || ((S = h("div", "title-bar")), Ib.appendChild(S));
        b.fullScreenModeEnabled && (S.ondblclick = Wa);
        r &&
            (S.onclick = function (a) {
                C(a);
                Ga();
            });
        !r && md() && (t(S, "ib-hamburger", b.showMenuTooltipText, Mc), S.appendChild(h("div", "left-divider-line")));
        t(S, "ib-arrow-left-full", b.previousMonthTooltipText, Ze);
        b.views.fullMonth.addYearButtons && t(S, "ib-rewind", b.previousYearTooltipText, pg);
        (r || b.views.fullMonth.showExtraTitleBarButtons) && t(S, "ib-pin", b.currentMonthTooltipText, rg);
        b.views.fullMonth.showExtraTitleBarButtons &&
            (b.jumpToDateEnabled &&
                t(S, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                    ce();
                }),
            S.appendChild(h("div", "left-divider-line-events")),
            t(S, "ib-refresh", b.refreshTooltipText, function () {
                Ka(!0, !0);
            }),
            u.enabled && (Eg = t(S, "ib-search", b.searchTooltipText, de)));
        r && (t(S, "ib-close", b.closeTooltipText, bd), S.appendChild(h("div", "right-divider-line")));
        b.views.fullMonth.showExtraTitleBarButtons &&
            b.fullScreenModeEnabled &&
            ((Fg = t(S, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Wa)),
            S.appendChild(h("div", "right-divider-line-full-screen-mode")));
        t(S, "ib-arrow-right-full", b.nextMonthTooltipText, $e);
        b.views.fullMonth.addYearButtons && t(S, "ib-forward", b.nextYearTooltipText, qg);
        b.views.fullMonth.showExtraTitleBarButtons &&
            b.manualEditingEnabled &&
            t(S, "ib-plus", b.addEventTooltipText, function () {
                Pj(v, new Date()) ? P(null) : P(null, new Date(v.getFullYear(), v.getMonth(), 1));
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
                    Jb(null, !0);
                }),
            b.views.allEvents.enabled &&
                t(S, "ib-eye", b.viewAllEventsTooltipText, function () {
                    Nh(!0);
                }),
            b.views.fullYear.enabled &&
                t(S, "ib-expand", b.viewFullYearTooltipText, function () {
                    Ac(null, !0);
                }),
            b.views.fullWeek.enabled &&
                t(S, "ib-hamburger-side", b.viewFullWeekTooltipText, function () {
                    zc(null, !0);
                }),
            b.views.fullDay.enabled &&
                t(S, "ib-hourglass", b.viewFullDayTooltipText, function () {
                    Ua(null, !0);
                }));
        a = h("div", "title-container");
        S.appendChild(a);
        Tl(a);
        Ul(a);
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
            Qj());
    }
    function Qj() {
        if (!r && null !== mb && !x(b.events.onFullMonthPinUpRender, mb, v)) {
            var a = new Date();
            if (null === di || !U(di, a)) {
                mb.innerHTML = n.empty;
                di = a;
                var c = h("div", "pin-up-text"),
                    d = h("div", "day"),
                    e = h("div", "month"),
                    f = h("div", "year");
                c.onclick = function () {
                    P(null, a);
                };
                Qa(c, b.addEventTooltipText);
                mb.appendChild(c);
                c.appendChild(d);
                c.appendChild(e);
                c.appendChild(f);
                aa(d, a.getDate());
                if (b.showDayNumberOrdinals && ((c = Gg(a.getDate())), p(c))) {
                    var k = h("sup");
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
        a = d ? a : Ib;
        c = p(c) ? c : "calendar-day-";
        if (!d && 0 < mf.length) {
            for (var e = mf.length, f = 0; f < e; f++) a.removeChild(mf[f]);
            mf = [];
        }
        for (e = 0; 6 > e; e++) {
            f = h("div", "row-cells days");
            a.appendChild(f);
            d || mf.push(f);
            for (var k = 0; 7 > k; k++) {
                var m = k;
                if (b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday)
                    (m = b.startOfWeekDay + k), 7 <= m && (m -= 7);
                if (b.visibleDays.indexOf(m) > B.notFound) {
                    m = 7 * e + (k + 1);
                    var g = h("div", Bg(b.views.fullMonth.allowEventScrolling));
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
    function Bg(a) {
        a = p(a) ? a : !1;
        var c = "cell cell-" + b.visibleDays.length;
        a && (c += " custom-scroll-bars");
        return c;
    }
    function Tl(a) {
        me = h("span", "year-dropdown-button");
        me.ondblclick = C;
        me.onclick = Vl;
        a.appendChild(me);
        Lh = h("span");
        me.appendChild(Lh);
        b.views.fullMonth.showYearDropDownButtonIcon &&
            ((Hg = h("span", "ib-arrow-down-full-medium")), me.appendChild(Hg));
    }
    function Ul(a) {
        var c = new Date(b.minimumYear, 1, 1),
            d = null;
        Tb = h(
            "div",
            b.views.fullMonth.showMonthButtonsInYearDropDownMenu ? "years-drop-down" : "years-drop-down-no-months"
        );
        a.appendChild(Tb);
        if (b.views.fullMonth.showMonthButtonsInYearDropDownMenu)
            for (a = 0; 12 > a; a++) 0 === a % 3 && ((d = h("div", "months")), Tb.appendChild(d)), Wl(d, a);
        nf = h("div", "contents custom-scroll-bars");
        for (Tb.appendChild(nf); !(Xl(c.getFullYear()), vd(c), c.getFullYear() > b.maximumYear); );
    }
    function Wl(a, c) {
        var d = h("div", "month-name"),
            e = b.monthNamesAbbreviated[c];
        d.onclick = function (a) {
            C(a);
            v.getMonth() !== c && (v.setMonth(c), x(b.events.onSetDate, v), F(v), og(), qb());
        };
        y(d, e);
        a.appendChild(d);
        Rc[c.toString()] = d;
    }
    function Xl(a) {
        var c = h("div");
        c.className = "year";
        c.innerText = a.toString();
        c.id = "year-selected-" + a.toString();
        nf.appendChild(c);
        c.ondblclick = C;
        c.onclick = function (c) {
            C(c);
            v.getFullYear() !== a && (v.setFullYear(a), x(b.events.onSetDate, v), F(v), og(), qb());
        };
    }
    function Yl() {
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
    function Vl(a) {
        C(a);
        if ("block" !== Tb.style.display) {
            Ga();
            Tb.style.display = "block";
            b.views.fullMonth.showYearDropDownButtonIcon && (Hg.className = "ib-arrow-up-full-medium");
            for (var c in Rc) Rc.hasOwnProperty(c.toString()) && (Rc[c.toString()].className = "month-name");
            a = v.getMonth().toString();
            c = new Date();
            v.getFullYear() === c.getFullYear() &&
                ((c = c.getMonth().toString()), Rc.hasOwnProperty(c) && (Rc[c].className = "month-name-current-month"));
            Rc.hasOwnProperty(a) && (Rc[a].className = "month-name-selected");
            a = Yl();
            nf.scrollTop = null !== a ? a.offsetTop - nf.offsetTop - b.spacing : 0;
        } else og();
    }
    function og() {
        var a = !1;
        Ig() &&
            (b.views.fullMonth.showYearDropDownButtonIcon && (Hg.className = "ib-arrow-down-full-medium"),
            (Tb.style.display = "none"),
            (a = !0));
        return a;
    }
    function Ig() {
        return null !== Tb && "block" === Tb.style.display;
    }
    function Jh(a, c, d, e, f, k) {
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
            r && !g && null !== Cc && U(q, Cc) && (c.className += " cell-selected");
            r
                ? ((l = jj(q)), l || ((c.className += " cell-no-click"), (m.className = "no-click")))
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
                Jg(a, q);
            };
            if (b.showDayNumberOrdinals && ((g = Gg(a)), p(g))) {
                var t = h("sup");
                t.innerText = g;
                m.appendChild(t);
            }
            c.appendChild(m);
            c.appendChild(h("span", "blank"));
            b.views.fullDay.enabled &&
                ((m = h("div", "ib-arrow-expand-left-right-icon")),
                c.appendChild(m),
                Qa(m, b.expandDayTooltipText),
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
                        1 === a ? $e() : Ze();
                    },
                    !0,
                    !0
                );
            Zl(q, f, c);
            b.manualEditingEnabled &&
                ((c.ondblclick = function () {
                    if (b.useTemplateWhenAddingNewEvent) {
                        var a = sd(q, q);
                        P(a);
                        td();
                    } else P(null, q);
                }),
                Cg(c, e, d, a));
            r &&
                (c.onclick = l
                    ? function (a) {
                          C(a);
                          Ig()
                              ? Ga()
                              : ((a = new Date(q)),
                                a.setHours(0, 0, 0, 0),
                                bd(),
                                Oh(q),
                                x(b.events.onDatePickerDateChanged, a),
                                (Cc = a));
                      }
                    : C);
            b.views.fullMonth.useOnlyDotEvents && c.appendChild(h("div", "dots-separator"));
        }
    }
    function Ha() {
        for (var a = 0; 6 > a; a++)
            for (var c = 0; 7 > c; c++) {
                var d = Aa("calendar-day-" + (7 * a + (c + 1)));
                null !== d && (Yh(d, "event"), Yh(d, "plus-x-events"));
            }
        Ph();
        ne = !1;
        ed = [];
        Bd = {};
        a = ub(Ad());
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d],
                f = e;
            ei(f.from, f);
            if (
                f.from.getDate() !== f.to.getDate() ||
                f.from.getMonth() !== f.to.getMonth() ||
                f.from.getFullYear() !== f.to.getFullYear()
            ) {
                var k = Pc(f.from, f.to);
                if (0 < k)
                    for (var m = new Date(f.from), h = 0; h < k; h++)
                        Xa(m), fi(ud(m), f.id), null !== gi(m) && ei(m, f);
            }
            ge(e) && ed.push(e);
            f = H(e.repeatEvery);
            f > w.never &&
                (f === w.everyDay
                    ? pc(e, Xa, 1)
                    : f === w.everyWeek
                      ? pc(e, Rb, 1)
                      : f === w.every2Weeks
                        ? pc(e, Rb, 2)
                        : f === w.everyMonth
                          ? pc(e, ie, 1)
                          : f === w.everyYear
                            ? pc(e, vd, 1)
                            : f === w.custom &&
                              ((f = H(e.repeatEveryCustomType)),
                              (k = H(e.repeatEveryCustomValue)),
                              0 < k &&
                                  (f === M.daily
                                      ? pc(e, Xa, k)
                                      : f === M.weekly
                                        ? pc(e, Rb, k)
                                        : f === M.monthly
                                          ? pc(e, ie, k)
                                          : f === M.yearly && pc(e, vd, k))));
        }
        Rj !== ne && ((Rj = ne), x(b.events.onBusyStateChange, ne));
        null !== Eg && Va(Eg, 0 < ed.length);
        Qh();
    }
    function pc(a, c, d) {
        for (var e = new Date(a.from), f = Oc(a.repeatEveryExcludeDays), k = new Date(b.maximumYear, 11, 31); e < k; ) {
            c(e, d);
            var m = !(!p(a.repeatEnds) || Xe(e, a.repeatEnds));
            f.indexOf(e.getDay()) !== B.notFound || m || (fi(ud(e), a.id), e < Kh && null !== gi(e) && ei(e, a));
        }
    }
    function ei(a, c) {
        var d = gi(a),
            e = Oc(c.seriesIgnoreDates),
            f = ud(a),
            k = new Date(a);
        if (ge(c) && e.indexOf(f) === B.notFound && (fi(f, c.id), null !== d && ($l(a, c), !r)))
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
                        (m = be(c.from, c.to) + ": " + m);
                    g > w.never &&
                        b.showReoccurringEventIcons &&
                        ((g = h("div", "ib-refresh-small ib-no-hover ib-no-active")),
                        (g.style.borderColor = e.style.color),
                        e.appendChild(g));
                    e.innerHTML += lc(m);
                }
                d.appendChild(e);
                ai(e, c, a, d);
                ef(e, c);
                $d(e, c, Ue(c, a), b.views.fullMonth.applyCssToEventsNotInCurrentMonth);
                ae(e, c, k);
                U(c.from, a) && (e.id = "day-" + c.id);
                e.onmousemove = function (a) {
                    null !== Cd && Cd.id === c.id ? C(a) : hi(a, c);
                };
                e.oncontextmenu = function (a) {
                    df(a, c, f);
                };
                e.addEventListener("click", function (a) {
                    ff(a, c);
                });
            } else am(d, a);
    }
    function am(a, c) {
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
    function gi(a) {
        var b = new Date(v.getFullYear(), v.getMonth(), 1);
        var d = new Date(v);
        var e = new Date(v),
            f = null,
            k = 0;
        b = X(b);
        d.setMonth(d.getMonth() + 1);
        e.setMonth(e.getMonth() - 1);
        a.getMonth() === d.getMonth() && a.getFullYear() === d.getFullYear()
            ? ((d = b + ad(v.getFullYear(), v.getMonth())), (k = Me(a.getDate() + d)))
            : a.getMonth() === e.getMonth() && a.getFullYear() === e.getFullYear()
              ? (k = Me(b - Pc(a, v) + 1))
              : a.getMonth() === v.getMonth() &&
                a.getFullYear() === v.getFullYear() &&
                ((d = b), (k = Me(a.getDate() + d)));
        0 < k && (f = Aa("calendar-day-" + k));
        return f;
    }
    function fi(a, b) {
        Bd.hasOwnProperty(a) || (Bd[a] = []);
        Bd[a].indexOf(b) === B.notFound && Bd[a].push(b);
    }
    function pl() {
        if (!r && b.views.fullYear.enabled) {
            var a = null !== Da;
            a && (Da.innerHTML = n.empty);
            a || ((Da = h("div", "full-year-view")), (Da.id = ec()), z.appendChild(Da));
            a = h("div", "title-bar");
            Da.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Wa);
            ii = h("div", "title");
            a.appendChild(ii);
            !r &&
                md() &&
                (t(a, "ib-hamburger", b.showMenuTooltipText, Mc), a.appendChild(h("div", "left-divider-line")));
            t(a, "ib-arrow-left-full", b.previousYearTooltipText, oj);
            b.views.fullYear.showExtraTitleBarButtons &&
                (t(a, "ib-pin", b.currentYearTooltipText, wj),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        ce();
                    }),
                a.appendChild(h("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    Ka(!0, !0);
                }));
            t(a, "ib-close", b.closeTooltipText, function () {
                wd(Da);
            });
            a.appendChild(h("div", "right-divider-line"));
            b.views.fullYear.showExtraTitleBarButtons &&
                b.fullScreenModeEnabled &&
                ((ji = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Wa)),
                a.appendChild(h("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextYearTooltipText, sj);
            b.views.fullYear.showExtraTitleBarButtons &&
                b.manualEditingEnabled &&
                t(a, "ib-plus", b.addEventTooltipText, function () {
                    P(null, new Date(sa, 0, 1));
                });
            oe = h("div", "contents custom-scroll-bars");
            Da.appendChild(oe);
        }
    }
    function bm(a) {
        var c = new Date(sa, a, 1),
            d = function () {
                U(v, c) || (F(c), qb());
                for (; 0 < vb.length; ) zj(!1);
                of();
            },
            e = h("div", "year-month");
        oe.appendChild(e);
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
        Ih(d);
        d = a + 1 + "-month-";
        f = new Date(sa, a, 1);
        f = Me(0 === f.getDay() ? 7 : f.getDay());
        $i(e, d);
        1 < f && cm(f, d, a);
        f = dm(f, d, a);
        k = f[0];
        em(f[1], d, a);
        k && (Kg = e.offsetTop);
    }
    function cm(a, b, d) {
        d = new Date(sa, d, 1);
        d.setMonth(d.getMonth() - 1);
        var c = ad(d.getFullYear(), d.getMonth());
        for (--a; 0 < a; ) fm(b, a, d, c), a--, c--;
    }
    function fm(a, c, d, e) {
        a = Aa(a + c);
        if (null !== a) {
            var f = new Date(d.getFullYear(), d.getMonth(), e);
            a.className += " cell-muted";
            b.views.fullDay.enabled &&
                (a.onclick = function () {
                    Ua(f, !0);
                });
            a.oncontextmenu = function (a) {
                Jg(a, f);
            };
            ki(a, f);
            Nb(a, f, null, null, b.views.fullYear.padDayNumbers);
        }
    }
    function dm(a, b, d) {
        for (var c = 0, f = ad(sa, d), k = !1, m = 0; m < f; m++) (c = a + m), gm(b, d, m, c) && (k = !0);
        return [k, c];
    }
    function gm(a, c, d, e) {
        a = Aa(a + e);
        e = !1;
        if (null !== a) {
            var f = new Date(sa, c, d + 1);
            b.views.fullDay.enabled &&
                (a.onclick = function () {
                    Ua(f, !0);
                });
            a.oncontextmenu = function (a) {
                Jg(a, f);
            };
            e = ki(a, f, !0);
            Nb(a, f, null, null, b.views.fullYear.padDayNumbers);
        }
        return e;
    }
    function em(a, b, d) {
        if (42 > a) {
            d = new Date(sa, d, 1);
            var c = 1;
            d.setMonth(d.getMonth() + 1);
            for (a += 1; 43 > a; a++) hm(b, d, a, c), c++;
        }
    }
    function hm(a, c, d, e) {
        a = Aa(a + d);
        if (null !== a) {
            var f = new Date(c.getFullYear(), c.getMonth(), e);
            a.className += " cell-muted";
            b.views.fullDay.enabled &&
                (a.onclick = function () {
                    Ua(f, !0);
                });
            a.oncontextmenu = function (a) {
                Jg(a, f);
            };
            ki(a, f);
            Nb(a, f, null, null, b.views.fullYear.padDayNumbers);
        }
    }
    function ki(a, c, d) {
        var e = ud(c),
            f = !1;
        d = p(d) ? d : !1;
        0 <= b.weekendDays.indexOf(c.getDay()) && (a.className += " weekend-day");
        0 <= b.workingDays.indexOf(X(c)) && (a.className += " working-day");
        if (Bd.hasOwnProperty(e)) {
            a.className += " has-events";
            e = Bd[e].length;
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
        Kg = 0;
        ii.innerText = sa;
        c = (a = c) ? 0 : oe.scrollTop;
        oe.innerHTML = n.empty;
        for (var d = 0; 12 > d; d++) bm(d);
        oe.scrollTop = a ? (0 < Kg ? Kg - 4 * b.spacing : 0) : c;
        gf(Da);
    }
    function oj() {
        sa > b.minimumYear && (--sa, Ac(sa, !0));
    }
    function sj() {
        sa < b.maximumYear && ((sa += 1), Ac(sa, !0));
    }
    function wj() {
        sa = new Date().getFullYear();
        Ac(sa, !0);
    }
    function ql() {
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
                wd(ra);
            });
            b.views.allEvents.showExtraTitleBarButtons &&
                (a.appendChild(h("div", "right-divider-line")),
                b.fullScreenModeEnabled &&
                    ((li = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Wa)),
                    a.appendChild(h("div", "right-divider-line-full-screen-mode"))),
                b.manualEditingEnabled &&
                    t(a, "ib-plus", b.addEventTooltipText, function () {
                        P(null);
                    }));
            !r && md() && t(a, "ib-hamburger", b.showMenuTooltipText, Mc);
            b.views.allEvents.showExtraTitleBarButtons &&
                (a.appendChild(h("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    Ka(!0, !0);
                }),
                u.enabled && (Sj = t(a, "ib-search", b.searchTooltipText, de)));
            Dd = h("div", "contents custom-scroll-bars");
            ra.appendChild(Dd);
        }
    }
    function im(a) {
        if (ge(a)) {
            var c = jm(a.from),
                d = h("div", "event");
            c.appendChild(d);
            d.oncontextmenu = function (b) {
                df(b, a);
            };
            ai(d, a, a.from, c);
            ef(d, a);
            $d(d, a);
            ae(d, a);
            d.id = "month-" + a.id;
            d.setAttribute("event-type", H(a.type));
            d.setAttribute("event-id", a.id);
            d.setAttribute("event-is-all-day", a.isAllDay);
            if (!x(b.events.onAllEventsEventRender, d, a)) {
                c = h("div", "title");
                if (H(a.repeatEvery) > w.never && b.showReoccurringEventIcons) {
                    var e = h("div", "ib-refresh-medium ib-no-hover ib-no-active");
                    e.style.borderColor = d.style.color;
                    c.appendChild(e);
                }
                c.innerHTML += lc(a.title);
                d.appendChild(c);
                c = h("div", "date");
                d.appendChild(c);
                e = h("div", "duration");
                d.appendChild(e);
                a.from.getDate() === a.to.getDate()
                    ? a.isAllDay
                        ? Nb(c, a.from, null, " - " + b.allDayText)
                        : (Nb(c, a.from, null, " - " + be(a.from, a.to)), y(e, Ob(a.from, a.to)))
                    : (Ve(c, a.from, a.to), y(e, Ob(a.from, a.to)));
                e.innerHTML === n.empty && d.removeChild(e);
                b.views.allEvents.showEventUrls &&
                    Ca(a.url) &&
                    ((c = h("div", "url-text")),
                    y(c, yg(a.url)),
                    d.appendChild(c),
                    (c.onclick = function (b) {
                        C(b);
                        he(a.url);
                    }));
                Ba(a.repeatEvery) &&
                    a.repeatEvery > w.never &&
                    ((c = h("div", "repeats")),
                    y(c, b.repeatsText.replace(":", n.empty) + n.space + pd(a.repeatEvery)),
                    d.appendChild(c));
                Ca(a.location) && ((c = h("div", "location")), y(c, a.location), d.appendChild(c));
                Ca(a.description) && ((c = h("div", "description")), y(c, a.description), d.appendChild(c));
            }
            d.addEventListener("click", function (b) {
                ff(b, a);
            });
            Lb.push(a);
        }
    }
    function jm(a) {
        var c = "month-" + a.getMonth() + "-" + a.getFullYear(),
            d = Aa(c);
        if (null === d) {
            var e = new Date(a),
                f = function () {
                    Lb = [];
                    wd(ra);
                    F(e);
                    qb();
                },
                k = km(a);
            null !== k && Dd.appendChild(k);
            k = h("div", "month");
            Dd.appendChild(k);
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
                        var a = sd(g, g);
                        P(a);
                        td();
                    } else P(null, g);
                });
            }
            b.manualEditingEnabled &&
                t(m, "ib-close", b.removeEventsTooltipText, function () {
                    Tj(e, Pj);
                });
            f = function () {
                var a = p,
                    e = d;
                "none" !== e.style.display
                    ? ((e.style.display = "none"),
                      (a.className = "ib-square-hollow"),
                      (O.visibleAllEventsMonths[c] = !1),
                      Qa(a, b.restoreTooltipText))
                    : ((e.style.display = "block"),
                      (a.className = "ib-minus"),
                      (O.visibleAllEventsMonths[c] = !0),
                      Qa(a, b.minimizedTooltipText));
            };
            var p = t(m, "ib-minus", b.minimizedTooltipText, f);
            sg.push(f);
            d = h("div", "events");
            d.id = c;
            k.appendChild(d);
            O.visibleAllEventsMonths.hasOwnProperty(c) &&
                !O.visibleAllEventsMonths[c] &&
                ((d.style.display = "none"), (p.className = "ib-square-hollow"), Qa(p, b.restoreTooltipText));
            Cg(d, a.getFullYear(), a.getMonth(), a.getDate());
        }
        return d;
    }
    function km(a) {
        var c = null;
        if (mi.indexOf(a.getFullYear()) === B.notFound) {
            mi.push(a.getFullYear());
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
    function Nh(a) {
        a = p(a) ? a : !1;
        gf(ra);
        Dd.innerHTML = n.empty;
        Lb = [];
        sg = [];
        mi = [];
        a && (Dd.scrollTop = 0);
        a = ub(Ad());
        for (var b = a.length, d = 0; d < b; d++) im(a[d]);
        Va(Sj, 0 < Lb.length);
        0 === Lb.length &&
            lm(Dd, function () {
                P(null);
            });
    }
    function rl() {
        if (!r && b.views.timeline.enabled) {
            var a = null !== ia;
            a && (ia.innerHTML = n.empty);
            null === Ya && (Ya = b.views.timeline.defaultAxis);
            a || ((ia = h("div", "timeline-view")), (ia.id = ec()), z.appendChild(ia));
            a = h("div", "title-bar");
            ia.appendChild(a);
            b.fullScreenModeEnabled && (a.ondblclick = Wa);
            Lg = h("div", "title");
            a.appendChild(Lg);
            t(a, "ib-close", b.closeTooltipText, function () {
                Dc = [];
                wd(ia);
            });
            a.appendChild(h("div", "right-divider-line"));
            b.views.timeline.showExtraTitleBarButtons &&
                b.fullScreenModeEnabled &&
                ((ni = t(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, Wa)),
                a.appendChild(h("div", "right-divider-line-full-screen-mode")));
            t(a, "ib-arrow-right-full", b.nextYearTooltipText, tj);
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
                (t(a, "ib-hamburger", b.showMenuTooltipText, Mc), a.appendChild(h("div", "left-divider-line")));
            t(a, "ib-arrow-left-full", b.previousYearTooltipText, pj);
            b.views.timeline.showExtraTitleBarButtons &&
                ((Uj = t(a, "ib-pin", b.currentYearTooltipText, xj)),
                b.jumpToDateEnabled &&
                    t(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function () {
                        ce();
                    }),
                a.appendChild(h("div", "left-divider-line-events")),
                t(a, "ib-refresh", b.refreshTooltipText, function () {
                    Ka(!0, !0);
                }),
                u.enabled && (Vj = t(a, "ib-search", b.searchTooltipText, de)));
            Ra = h("div", "contents custom-scroll-bars");
            Ra.addEventListener("scroll", jc);
            ia.appendChild(Ra);
        }
    }
    function mm(a, c) {
        var d = h("div", "event"),
            e = ud(ba),
            f = new Date(ba);
        d.id = "timeline-day-" + c.id;
        d.setAttribute("event-type", H(c.type));
        d.setAttribute("event-id", c.id);
        d.setAttribute("event-is-all-day", c.isAllDay);
        a.appendChild(d);
        if (!x(b.events.onTimelineEventRender, d, c)) {
            if (H(c.repeatEvery) > w.never && b.showReoccurringEventIcons) {
                var k = h("div", "ib-refresh-medium ib-no-hover ib-no-active");
                k.style.borderColor = d.style.color;
                d.appendChild(k);
            }
            d.innerHTML += lc(c.title);
        }
        d.oncontextmenu = function (a) {
            df(a, c, e);
        };
        d.addEventListener("click", function (a) {
            ff(a, c);
        });
        d.onmousemove = function (a) {
            null !== Cd && Cd.id === c.id ? C(a) : hi(a, c);
        };
        ae(d, c, f);
        ef(d, c);
        $d(d, c, Ue(c, ba));
        d = nm(a, ba, d, c);
        pf = null === pf ? d : la.min(pf, d);
        qf = null === qf ? a.offsetTop : la.min(qf, a.offsetTop);
    }
    function Jb(a, c) {
        a = p(a) ? new Date(a) : new Date();
        c = p(c) ? c : !1;
        var d = new Date(),
            e = X(d),
            f = b.visibleDays.indexOf(e) > B.notFound,
            k = [];
        e = Ra.scrollLeft;
        var m = Ra.scrollTop;
        Lg.innerHTML = n.empty;
        Ra.innerHTML = n.empty;
        Dc = [];
        ba = a;
        Mg = {};
        qf = pf = null;
        rf = [];
        U(a, d) && !f && Wj();
        Rh(ba, k);
        Va(Uj, f);
        sf = h("div", "timeline-header");
        Ra.appendChild(sf);
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
        sf.appendChild(a);
        t(a, "ib-arrow-left-full", b.previousPropertyTooltipText, om);
        t(a, "ib-arrow-right-full", b.nextPropertyTooltipText, pm);
        a = b.views.timeline.minutesBetweenSections;
        d = new Date();
        f = new Date();
        var g = 0,
            q = 0;
        f.setHours(0, 0, 0, 0);
        for (0 !== 60 % a && (a = 30); U(f, d); ) {
            var l = h("div", "timeline-header-item");
            l.innerText = yb(new Date(f));
            sf.appendChild(l);
            f = fb(f, a);
            l = h("div", "timeline-header-item");
            l.innerText = yb(new Date(f));
            sf.appendChild(l);
            f = fb(f, a);
            l = h("div", "timeline-column");
            l.style.left = g + "px";
            Ra.appendChild(l);
            0 === q && ((q = Pe(l, "border-right-width")), (q = l.clientWidth + q));
            g += q;
            var r = h("div", "timeline-column");
            r.style.left = g + "px";
            Ra.appendChild(r);
            g += q;
            rf.push(l);
            rf.push(r);
        }
        gf(ia);
        k = ub(k);
        a = k.length;
        d = 0;
        if (0 < a)
            for (f = 0; f < a; f++) {
                g = k[f];
                l = G(g[Ya], b.noneText);
                q = l.toLowerCase();
                g.isAllDay && ((l = b.allDayText + ": " + l), (q = q + "-" + g.id));
                if (Mg.hasOwnProperty(q)) l = Mg[q];
                else {
                    r = h("div", "timeline-row");
                    Ra.appendChild(r);
                    var u = h("div", "timeline-row-item" + (0 !== d % 2 ? " timeline-row-item-odd" : n.empty));
                    y(u, l);
                    r.appendChild(u);
                    l = h("div", "timeline-row-items");
                    r.appendChild(l);
                    r = b.views.timeline.minutesBetweenSections;
                    u = new Date();
                    var w = new Date();
                    w.setHours(0, 0, 0, 0);
                    for (0 !== 60 % r && (r = 30); U(w, u); ) {
                        var v = h("div", "timeline-row-item-spacing");
                        l.appendChild(v);
                        w = fb(w, r);
                        v = h("div", "timeline-row-item-spacing");
                        l.appendChild(v);
                        w = fb(w, r);
                    }
                    Mg[q] = l;
                    d++;
                }
                mm(l, g);
                Dc.push(g);
            }
        k = rf.length;
        for (d = a = 0; d < k; d++)
            (f = rf[d]), 0 === a && (a = Ra.scrollHeight - f.offsetTop), (f.style.height = a + "px");
        x(b.events.onTimelineTitleRender, L) || kc(Lg, ba, !1, !0, !0);
        c ? ((Ra.scrollLeft = pf), (Ra.scrollTop = qf)) : ((Ra.scrollLeft = e), (Ra.scrollTop = m));
        Va(Vj, 0 < Dc.length);
    }
    function pj() {
        Ag(ba);
        if (7 > b.visibleDays.length)
            for (var a = X(ba); b.visibleDays.indexOf(a) === B.notFound; ) Ag(ba), (a = X(ba));
        Jb(ba, !0);
    }
    function tj() {
        Wj(!0);
    }
    function xj() {
        ba = new Date();
        Jb(ba, !0);
    }
    function om() {
        var a = pe.indexOf(Ya);
        a--;
        0 > a && (a = pe.length - 1);
        Ya = pe[a];
        Jb(ba);
    }
    function pm() {
        var a = pe.indexOf(Ya);
        a++;
        a > pe.length - 1 && (a = 0);
        Ya = pe[a];
        Jb(ba);
    }
    function Wj(a) {
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
    function ng(a) {
        var b = !1;
        qe(a) && ((a.style.display = "none"), (b = !0));
        return b;
    }
    function qe(a) {
        return null !== a && "block" === a.style.display;
    }
    function Xj() {
        return qe(Ia) || qe(Y) || qe(Na) || qe(nb) || qe(zb);
    }
    function wl() {
        null !== Ia && (gb(E.body, Ia), (Ng = oi = null));
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
                        var a = sd(Ed, Ed);
                        P(a);
                        td();
                    } else P(null, Ed);
                },
                !0
            );
        b.views.fullDay.enabled &&
            (Za(Ia),
            xa(Ia, "ib-arrow-expand-left-right-icon", b.expandDayTooltipText, function () {
                Ua(Ed, !0);
            }));
        b.views.fullWeek.enabled &&
            (Za(Ia),
            xa(Ia, "ib-hamburger-side-icon", b.viewFullWeekText, function () {
                zc(Ed, !0);
            }));
        b.manualEditingEnabled &&
            ((oi = Za(Ia)),
            (Ng = xa(Ia, "ib-circle-icon", b.pasteText, function () {
                Vh(Ed, Pb);
            })));
    }
    function Jg(a, b) {
        r ||
            null === Ia ||
            (fa(a) || mc(),
            (Ed = new Date(b)),
            null !== Ng && ((b = 0 < ja.length ? "block" : "none"), (oi.style.display = b), (Ng.style.display = b)),
            Ga(),
            C(a),
            tf(a, Ia));
    }
    function xl() {
        null !== Y && (gb(E.body, Y), (Og = Pg = uf = vf = wf = xf = yf = zf = Af = Bf = Cf = Df = Y = null));
        Y = h("div", "calendar-context-menu");
        ya.push(Y);
        E.body.appendChild(Y);
        b.manualEditingEnabled &&
            ((wf = xa(
                Y,
                "ib-edit-icon",
                b.editEventTitle + "...",
                function () {
                    P($a, null, null, Yj);
                },
                !0
            )),
            (Af = Za(Y)),
            (zf = xa(Y, "ib-pipe-icon", b.cutText, function () {
                ee();
                Pb = !0;
                Zj($a);
                ee(!1);
            })),
            (yf = Za(Y)),
            (xf = xa(Y, "ib-circle-hollow-icon", b.copyText, function () {
                ee();
                Pb = !1;
                Zj($a);
                ee(!1);
            })),
            (Cf = Za(Y)),
            (Bf = xa(Y, "ib-equals-icon", b.duplicateText + "...", function () {
                P($a);
                y(Sc, b.addEventTitle);
                Ef.value = b.addText;
                Qg.style.display = "none";
                ea = re(ea);
                t(Sc, "ib-close", b.closeTooltipText, Tc, !0);
            })),
            (vf = Za(Y)),
            (uf = xa(Y, "ib-close-icon", b.removeEventText, function () {
                Ub(E.body, Ja);
                var a = function () {
                        gb(E.body, Ja);
                    },
                    c = H($a.repeatEvery) > w.never && null !== Ff;
                Gf(
                    b.confirmEventRemoveTitle,
                    b.confirmEventRemoveMessage,
                    function () {
                        a();
                        p($a.id) &&
                            (Rg.checked || null === Ff
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
        pi = xa(Y, "ib-arrow-top-right-icon", b.openUrlText, function () {
            he($a.url);
        });
        b.exportEventsEnabled &&
            ((Pg = Za(Y)),
            (Og = xa(Y, "ib-arrow-down-full-line-icon", b.exportEventsTooltipText + "...", function () {
                dd(Ea);
            })));
        b.shareEventsEnabled &&
            Hf.share &&
            (Za(Y),
            xa(Y, "ib-arrow-up-full-line-share-icon", b.shareText + "...", function () {
                var a = ak(0 < Ea.length ? Ea : [$a]),
                    c = { type: "text/plain" };
                a = new Blob([a], c);
                c = { files: [new File([a], bk("txt", b.shareStartFilename), c)] };
                Hf.canShare(c) && Hf.share(c);
            }));
    }
    function df(a, c, d) {
        if (null !== Y) {
            var e = G(c.url),
                f = kf(c);
            fa(a) || mc();
            $a = c;
            Yj = new Date(d);
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
                  (pi.style.display = "none"),
                  b.exportEventsEnabled && ((Pg.style.display = "block"), (Og.style.display = "block")))
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
                  (pi.style.display = e !== n.empty ? "block" : "none"),
                  b.exportEventsEnabled && ((Pg.style.display = "none"), (Og.style.display = "none")));
            if (e !== n.empty || 1 < Y.childElementCount) Ga(), C(a), tf(a, Y);
        }
    }
    function yl() {
        null !== Na && (gb(E.body, Na), (Sg = qi = ri = si = Na = null));
        b.manualEditingEnabled &&
            ((Na = h("div", "calendar-context-menu")),
            ya.push(Na),
            E.body.appendChild(Na),
            xa(
                Na,
                "ib-plus-icon",
                b.addEventTitle + "...",
                function () {
                    if (b.useTemplateWhenAddingNewEvent) {
                        var a = sd(se, se, bf, bf);
                        P(a);
                        td();
                    } else P(null, se, bf);
                },
                !0
            ),
            (si = Za(Na)),
            (ri = xa(Na, "ib-close-icon", b.removeEventsTooltipText, function () {
                Tj(se, U);
            })),
            (qi = Za(Na)),
            (Sg = xa(Na, "ib-circle-icon", b.pasteText, function () {
                Vh(se, Pb);
            })));
    }
    function Cj(a, b, d) {
        null !== Na &&
            (fa(a) || mc(),
            (se = b),
            null !== Sg && ((b = 0 < ja.length ? "block" : "none"), (qi.style.display = b), (Sg.style.display = b)),
            (d = pa(d) && 0 < d.length ? "block" : "none"),
            (si.style.display = d),
            (ri.style.display = d),
            Ga(),
            C(a),
            tf(a, Na));
    }
    function zl() {
        null === nb &&
            ((nb = h("div", "calendar-context-menu")),
            ya.push(nb),
            E.body.appendChild(nb),
            (ck = xa(
                nb,
                "ib-close-icon",
                b.hideDayText,
                function () {
                    b.visibleDays.splice(b.visibleDays.indexOf(dk), 1);
                    lb = !1;
                    x(b.events.onOptionsUpdated, b);
                    F(v, !0, !0);
                },
                !0
            )),
            (ek = Za(nb)),
            (fk = xa(nb, "ib-rhombus-hollow-icon", b.showOnlyWorkingDaysText, function () {
                1 <= b.workingDays.length &&
                    ((b.visibleDays = [].slice.call(b.workingDays)),
                    (lb = !1),
                    x(b.events.onOptionsUpdated, b),
                    F(v, !0, !0));
            })),
            (gk = Za(nb)),
            xa(nb, "ib-octagon-hollow-icon", b.visibleDaysText + "...", function () {
                Mc(!0);
            }));
    }
    function Ui() {
        null !== Ja || r || (Ja = h("div", "disabled-background"));
    }
    function Vi() {
        if (!r) {
            null === ab && ((ab = h("div", "calendar-dialog event-editor")), ya.push(ab), E.body.appendChild(ab));
            ab.innerHTML = n.empty;
            var a = h("div", "view");
            ab.appendChild(a);
            Tg = h("div", "disabled-area");
            a.appendChild(Tg);
            Sc = h("div", "title-bar");
            a.appendChild(Sc);
            Fd(Sc, ab, null);
            var c = h("div", "contents");
            a.appendChild(c);
            a = hk(c);
            te(
                a,
                b.eventText,
                function (a) {
                    ue(a, Vb, ab);
                },
                !0
            );
            te(a, b.typeText.replace(":", n.empty), function (a) {
                ue(a, Ug, ab);
            });
            te(a, b.repeatsText.replace(":", n.empty), function (a) {
                ue(a, Vg, ab);
            });
            te(a, b.optionalText, function (a) {
                ue(a, Uc, ab);
            });
            Vb = ve(c, !0, !1);
            Ug = ve(c, !1, !1);
            Vg = ve(c, !1, !1);
            Uc = ve(c, !1, !1);
            qm();
            rm();
            sm();
            a = h("div", "buttons-container");
            c.appendChild(a);
            Qg = Fa(a, b.removeEventText, "remove", tm);
            Ef = Fa(a, b.addText, "add-update", ik);
            Fa(a, b.cancelText, "cancel", Tc);
        }
    }
    function qm() {
        qa(Vb, b.titleText);
        var a = h("div", "input-title-container");
        Vb.appendChild(a);
        Ab = h("input", null, "text");
        a.appendChild(Ab);
        Ab.onkeydown = function (a) {
            a.keyCode === Q.enter && ik();
        };
        0 < b.maximumEventTitleLength && (Ab.maxLength = b.maximumEventTitleLength);
        var c = function () {
            jk(null);
        };
        b.eventColorsEditingEnabled && (ti = Fa(a, "...", "select-colors", um, b.selectColorsText));
        qa(Vb, b.fromText.replace(":", n.empty) + "/" + b.toText);
        a = h("div", "split");
        Vb.appendChild(a);
        Wb = h("input");
        Wb.onchange = c;
        a.appendChild(Wb);
        gc(Wb, "date");
        Xb = h("input");
        a.appendChild(Xb);
        gc(Xb, "time");
        a = h("div", "split");
        Vb.appendChild(a);
        hb = h("input");
        hb.onchange = c;
        a.appendChild(hb);
        gc(hb, "date");
        Yb = h("input");
        a.appendChild(Yb);
        gc(Yb, "time");
        we = K(Vb, b.isAllDayText, c)[0];
        If = K(Vb, b.showAlertsText)[0];
        Jf = K(Vb, b.showAsBusyText)[0];
    }
    function rm() {
        var a = h("div", "radio-buttons-container");
        Vg.appendChild(a);
        qc = ha(a, b.repeatsNever, "RepeatType", Vc);
        Kf = ha(a, b.repeatsEveryDayText, "RepeatType", Vc);
        Lf = ha(a, b.repeatsEveryWeekText, "RepeatType", Vc);
        Mf = ha(a, b.repeatsEvery2WeeksText, "RepeatType", Vc);
        Nf = ha(a, b.repeatsEveryMonthText, "RepeatType", Vc);
        Of = ha(a, b.repeatsEveryYearText, "RepeatType", Vc);
        Zb = ha(a, b.repeatsCustomText, "RepeatType", Vc);
        Wg = Fa(a, "...", "repeat-options", vm, b.repeatOptionsTitle);
        a = h("div", "split split-margin");
        Vg.appendChild(a);
        Wc = h("input", null, "number");
        Wc.setAttribute("min", "1");
        a.appendChild(Wc);
        var c = h("div", "radio-buttons-container split-contents");
        a.appendChild(c);
        Gd = ha(c, b.dailyText, "RepeatCustomType");
        Pf = ha(c, b.weeklyText, "RepeatCustomType");
        Qf = ha(c, b.monthlyText, "RepeatCustomType");
        Rf = ha(c, b.yearlyText, "RepeatCustomType");
    }
    function sm() {
        var a = h("div", "split");
        Uc.appendChild(a);
        qa(a, b.alertOffsetText);
        qa(a, b.groupText);
        a = h("div", "split");
        Uc.appendChild(a);
        Hd = h("input", null, "number");
        Hd.setAttribute("min", "0");
        a.appendChild(Hd);
        Id = h("input", null, "text");
        a.appendChild(Id);
        0 < b.maximumEventGroupLength && (Id.maxLength = b.maximumEventGroupLength);
        qa(Uc, b.descriptionText);
        Jd = h("textarea", "custom-scroll-bars");
        Uc.appendChild(Jd);
        0 < b.maximumEventDescriptionLength && (Jd.maxLength = b.maximumEventDescriptionLength);
        a = h("div", "split");
        Uc.appendChild(a);
        qa(a, b.urlText);
        qa(a, b.locationText);
        a = h("div", "split");
        Uc.appendChild(a);
        xe = h("input", null, "url");
        a.appendChild(xe);
        Kd = h("input", null, "text");
        a.appendChild(Kd);
        0 < b.maximumEventLocationLength && (Kd.maxLength = b.maximumEventLocationLength);
    }
    function Vc() {
        Wg.disabled = qc.checked;
        Rf.disabled = !Zb.checked;
        Gd.disabled = !Zb.checked;
        Pf.disabled = !Zb.checked;
        Qf.disabled = !Zb.checked;
        Wc.disabled = !Zb.checked;
    }
    function jk(a) {
        a = p(a) ? a : ea;
        var b = !1;
        (a = p(a) && ib(a.locked) ? a.locked : !1)
            ? (b = !0)
            : we.checked && ((hb.value = Wb.value), (Xb.value = "00:00"), (Yb.value = "23:59"), (b = !0));
        hb.disabled = b;
        Xb.disabled = b;
        Yb.disabled = b;
        var d = ye(Wb),
            e = ye(hb);
        kk(hb, d);
        kk(Ld, e);
        d > e && Bb(d, hb);
        a || (e > d || e < d ? ((b = !0), (qc.checked = !0)) : (b = !1));
        qc.disabled = b;
        Kf.disabled = b;
        Lf.disabled = b;
        Mf.disabled = b;
        Nf.disabled = b;
        Of.disabled = b;
        Zb.disabled = b;
        Wg.disabled = b;
        Wc.disabled = b;
        Gd.disabled = b;
        Pf.disabled = b;
        Qf.disabled = b;
        Rf.disabled = b;
        a || Vc();
    }
    function P(a, c, d, e) {
        if (Wh(b.events.onBeforeEventAddEdit)) x(b.events.onBeforeEventAddEdit, a);
        else {
            Ub(E.body, Ja);
            var f = ab,
                k = void 0;
            k = p(k) ? k : 0;
            f = f.getElementsByClassName("tab");
            0 < f.length && f[k].click();
            Ug.innerHTML = n.empty;
            k = h("div", "radio-buttons-container");
            Ug.appendChild(k);
            for (var m in N) N.hasOwnProperty(m) && (N[m].eventEditorInput = ha(k, N[m].text, "Type"));
            p(a)
                ? (y(Sc, b.editEventTitle),
                  lk(a.type),
                  (Ef.value = b.updateText),
                  (Qg.style.display = "inline-block"),
                  (ea = a),
                  (Xb.value = yb(a.from, !1)),
                  (Yb.value = yb(a.to, !1)),
                  (we.checked = ui(a.isAllDay)),
                  (If.checked = ui(a.showAlerts, !0)),
                  (Jf.checked = ui(a.showAsBusy, !0)),
                  (Ab.value = G(a.title)),
                  (Jd.value = G(a.description)),
                  (Kd.value = G(a.location)),
                  (Id.value = G(a.group)),
                  (xe.value = G(a.url)),
                  (ze.value = G(a.color, b.defaultEventBackgroundColor)),
                  (Ae.value = G(a.colorText, b.defaultEventTextColor)),
                  (Be.value = G(a.colorBorder, b.defaultEventBorderColor)),
                  (Wc.value = H(a.repeatEveryCustomValue, 1)),
                  (Hd.value = H(a.alertOffset, 0)),
                  Bb(a.from, Wb),
                  Bb(a.to, hb),
                  (d = H(a.repeatEvery)),
                  d === w.never
                      ? (qc.checked = !0)
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
                                : d === w.custom && (Zb.checked = !0),
                  (c = H(a.repeatEveryCustomType)),
                  c === M.daily
                      ? (Gd.checked = !0)
                      : c === M.weekly
                        ? (Pf.checked = !0)
                        : c === M.monthly
                          ? (Qf.checked = !0)
                          : c === M.yearly && (Rf.checked = !0),
                  (c = Oc(a.repeatEveryExcludeDays)),
                  (Xg.checked = c.indexOf(1) > B.notFound),
                  (Yg.checked = c.indexOf(2) > B.notFound),
                  (Zg.checked = c.indexOf(3) > B.notFound),
                  ($g.checked = c.indexOf(4) > B.notFound),
                  (ah.checked = c.indexOf(5) > B.notFound),
                  (bh.checked = c.indexOf(6) > B.notFound),
                  (ch.checked = c.indexOf(0) > B.notFound),
                  Bb(a.repeatEnds, Ld),
                  (vi = d > w.never && p(e) && !U(a.from, e)),
                  (Sf = e))
                : ((e = new Date()),
                  (c = p(c) ? c : e),
                  dc(c) && (c.setHours(e.getHours()), c.setMinutes(e.getMinutes())),
                  (e = fb(c, b.defaultEventDuration)),
                  y(Sc, b.addEventTitle),
                  lk(),
                  (Ef.value = b.addText),
                  (Qg.style.display = "none"),
                  (ea = {}),
                  (we.checked = !1),
                  (If.checked = !0),
                  (Jf.checked = !0),
                  (Ab.value = n.empty),
                  (Jd.value = n.empty),
                  (Kd.value = n.empty),
                  (Id.value = n.empty),
                  (xe.value = n.empty),
                  (ze.value = b.defaultEventBackgroundColor),
                  (Ae.value = b.defaultEventTextColor),
                  (Be.value = b.defaultEventBorderColor),
                  (qc.checked = !0),
                  (Xg.checked = !1),
                  (Yg.checked = !1),
                  (Zg.checked = !1),
                  ($g.checked = !1),
                  (ah.checked = !1),
                  (bh.checked = !1),
                  (ch.checked = !1),
                  (Ld.value = null),
                  (Wc.value = "1"),
                  (Gd.checked = !0),
                  (Hd.value = 0),
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
                  (vi = !1),
                  (Sf = null));
            t(Sc, "ib-close", b.closeTooltipText, Tc, !0);
            a = kf(a);
            for (var g in N) N.hasOwnProperty(g) && p(N[g].eventEditorInput) && (N[g].eventEditorInput.disabled = a);
            Ef.disabled = a;
            Wb.disabled = a;
            hb.disabled = a;
            Xb.disabled = a;
            Yb.disabled = a;
            we.disabled = a;
            If.disabled = a;
            Jf.disabled = a;
            Ab.disabled = a;
            Jd.disabled = a;
            Kd.disabled = a;
            Id.disabled = a;
            xe.disabled = a;
            qc.disabled = a;
            Kf.disabled = a;
            Lf.disabled = a;
            Mf.disabled = a;
            Nf.disabled = a;
            Of.disabled = a;
            Zb.disabled = a;
            Wg.disabled = a;
            Hd.disabled = a;
            null !== ti && (ti.disabled = a);
            jk();
            eb.push(Tc);
            ab.style.display = "block";
            Ab.focus();
        }
    }
    function td() {
        Ab.focus();
        Ab.select();
    }
    function ik() {
        var a = Xb.value.split(":"),
            c = Yb.value.split(":"),
            d = Md(Ab.value),
            e = Md(xe.value);
        if (2 > a.length) Tf(b.fromTimeErrorMessage);
        else if (2 > c.length) Tf(b.toTimeErrorMessage);
        else if (d === n.empty) Tf(b.titleErrorMessage);
        else if (0 < e.length && !mk(e)) Tf(b.urlErrorMessage);
        else {
            var f = ye(Wb),
                k = ye(hb),
                m = Md(Jd.value),
                h = Md(Kd.value),
                g = Md(Id.value),
                l = ye(Ld, null),
                r = parseInt(Wc.value),
                t = wm(),
                u = parseInt(Hd.value);
            isNaN(r) && ((r = 0), (qc.checked = !0), (Gd.checked = !0));
            isNaN(u) && (u = 0);
            if (k < f) Tf(b.toSmallerThanFromErrorMessage);
            else {
                var x = function (a, c, f, k, A) {
                    A = p(A) ? A : !1;
                    dh(c, Xb.value);
                    dh(f, Yb.value);
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
                              isAllDay: we.checked,
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
                                        : Zb.checked && (c.repeatEvery = w.custom),
                          Gd.checked
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
                vi
                    ? (Uf(),
                      Gf(
                          b.confirmEventUpdateTitle,
                          b.confirmEventUpdateMessage,
                          function () {
                              var a = new Date(Sf),
                                  b = new Date(Sf),
                                  c = new Date(Sf);
                              Nd();
                              Xa(c, -1);
                              x(ea.id, f, k, c, !0);
                              x(null, a, b, l);
                              Tc();
                          },
                          function () {
                              Nd();
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
        Ce(a);
        gb(E.body, Ja);
        ab.style.display = "none";
    }
    function tm() {
        Uf();
        Gf(
            b.confirmEventRemoveTitle,
            b.confirmEventRemoveMessage,
            function () {
                Nd();
                Tc();
                p(ea.id) &&
                    (q.removeEvent(ea.id, !0),
                    b.isWidget ? F(v) : ma(),
                    Sa(b.eventRemovedText.replace("{0}", ea.title)));
            },
            function () {
                Nd();
            }
        );
    }
    function ma() {
        db(W) && Ua(L);
        db(da) && zc(Sb);
        db(Da) && Ac(sa);
        db(ra) && Nh();
        db(ia) && Jb(ba);
    }
    function sd(a, c, d, e) {
        d = p(d) ? d : "09:00";
        e = p(e) ? d : "09:00";
        dh(a, d);
        dh(c, e);
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
            repeatEvery: w.never,
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
    function kf(a) {
        return p(a) && ib(a.locked) ? a.locked : !1;
    }
    function Tf(a) {
        Gf(b.errorText, a, Nd, null, !1, !1);
        Uf();
    }
    function Uf() {
        Tg.style.display = "block";
    }
    function Nd() {
        Tg.style.display = "none";
    }
    function Wi() {
        if (!r && null === rc) {
            rc = h("div", "calendar-dialog event-editor-colors");
            ya.push(rc);
            E.body.appendChild(rc);
            var a = h("div", "title-bar");
            y(a, b.selectColorsText);
            rc.appendChild(a);
            Fd(a, rc, null);
            t(a, "ib-close", b.closeTooltipText, eh, !0);
            a = h("div", "contents");
            rc.appendChild(a);
            var c = h("div", "section");
            a.appendChild(c);
            qa(c, b.backgroundColorText, "text-header");
            ze = h("input");
            c.appendChild(ze);
            gc(ze, "color");
            c = h("div", "section");
            a.appendChild(c);
            qa(c, b.textColorText, "text-header");
            Ae = h("input");
            c.appendChild(Ae);
            gc(Ae, "color");
            c = h("div", "section");
            a.appendChild(c);
            qa(c, b.borderColorText, "text-header");
            Be = h("input");
            c.appendChild(Be);
            gc(Be, "color");
            c = h("div", "buttons-container");
            a.appendChild(c);
            Fa(c, b.updateText, "update", xm);
            Fa(c, b.cancelText, "cancel", eh);
        }
    }
    function xm() {
        eh();
        ea.color = ze.value;
        ea.colorText = Ae.value;
        ea.colorBorder = Be.value;
    }
    function eh(a) {
        Ce(a);
        Nd();
        rc.style.display = "none";
    }
    function um() {
        eb.push(eh);
        rc.style.display = "block";
        Uf();
    }
    function Xi() {
        if (!r && null === sc) {
            sc = h("div", "calendar-dialog event-editor-repeat-options");
            ya.push(sc);
            E.body.appendChild(sc);
            var a = h("div", "title-bar");
            y(a, b.repeatOptionsTitle);
            sc.appendChild(a);
            Fd(a, sc, null);
            t(a, "ib-close", b.closeTooltipText, fh, !0);
            a = h("div", "contents");
            sc.appendChild(a);
            var c = h("div", "section");
            a.appendChild(c);
            qa(c, b.daysToExcludeText, "text-header");
            Xg = K(c, b.dayNames[0])[0];
            Yg = K(c, b.dayNames[1])[0];
            Zg = K(c, b.dayNames[2])[0];
            $g = K(c, b.dayNames[3])[0];
            ah = K(c, b.dayNames[4])[0];
            bh = K(c, b.dayNames[5])[0];
            ch = K(c, b.dayNames[6])[0];
            c = h("div", "section");
            a.appendChild(c);
            qa(c, b.repeatEndsText, "text-header");
            Ld = h("input");
            c.appendChild(Ld);
            gc(Ld, "date");
            c = h("div", "buttons-container");
            a.appendChild(c);
            Fa(c, b.updateText, "update", ym);
            Fa(c, b.cancelText, "cancel", fh);
        }
    }
    function ym() {
        fh();
        var a = [];
        Xg.checked && a.push(1);
        Yg.checked && a.push(2);
        Zg.checked && a.push(3);
        $g.checked && a.push(4);
        ah.checked && a.push(5);
        bh.checked && a.push(6);
        ch.checked && a.push(0);
        ea.repeatEveryExcludeDays = a;
    }
    function fh(a) {
        Ce(a);
        Nd();
        sc.style.display = "none";
    }
    function vm() {
        eb.push(fh);
        sc.style.display = "block";
        Uf();
    }
    function Yi() {
        if (!r && null === Xc) {
            Xc = h("div", "calendar-dialog message");
            ya.push(Xc);
            E.body.appendChild(Xc);
            wi = h("div", "title-bar");
            Xc.appendChild(wi);
            var a = h("div", "contents");
            Xc.appendChild(a);
            xi = h("div", "text");
            a.appendChild(xi);
            var c = K(a, b.removeAllEventsInSeriesText);
            Rg = c[0];
            yi = c[1];
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
        y(wi, a);
        y(xi, c);
        l.onclick = nk;
        l.addEventListener("click", d);
        A.onclick = nk;
        Yc(e) && A.addEventListener("click", e);
        p(m) ||
            p(g) ||
            (k
                ? ((A.style.display = "inline-block"), (l.value = b.yesText))
                : ((A.style.display = "none"), (l.value = b.okText)));
        f ? ((yi.style.display = "block"), (Rg.checked = !1)) : ((yi.style.display = "none"), (Rg.checked = !0));
    }
    function nk() {
        eb.pop();
        Xc.style.display = "none";
    }
    function sl() {
        if (!r && null === tc) {
            tc = h("div", "calendar-dialog export-events");
            ya.push(tc);
            E.body.appendChild(tc);
            var a = h("div", "title-bar");
            y(a, b.exportEventsTitle);
            tc.appendChild(a);
            Fd(a, tc, null);
            t(a, "ib-close", b.closeTooltipText, gh, !0);
            a = h("div", "contents");
            tc.appendChild(a);
            Ta = h("input", null, "text");
            Ta.placeholder = b.exportFilenamePlaceholderText;
            a.appendChild(Ta);
            Ta.onkeydown = function (a) {
                a.keyCode === Q.enter && ok();
            };
            Cb = K(a, b.copyToClipboardOnlyText, pk)[0];
            hh = h("div", "split options");
            a.appendChild(hh);
            var c = h("div", "radio-buttons-container split-contents");
            hh.appendChild(c);
            var d = h("div", "radio-buttons-container split-contents");
            hh.appendChild(d);
            zi = ha(c, "CSV", "ExportType");
            qk = ha(c, "XML", "ExportType");
            rk = ha(c, "JSON", "ExportType");
            sk = ha(c, "TXT", "ExportType");
            tk = ha(d, "iCAL", "ExportType");
            uk = ha(d, "MD", "ExportType");
            vk = ha(d, "HTML", "ExportType");
            wk = ha(d, "TSV", "ExportType");
            c = h("div", "buttons-container");
            a.appendChild(c);
            Fa(c, b.exportText, "export", ok);
            Fa(c, b.cancelText, "cancel", gh);
        }
    }
    function pk() {
        Ta.disabled = Cb.checked;
    }
    function dd(a) {
        Ub(E.body, Ja);
        Hb();
        eb.push(gh);
        tc.style.display = "block";
        uc = a;
        zi.checked = !0;
        Ta.value = n.empty;
        Cb.checked = !1;
        pk();
        Ta.focus();
    }
    function gh(a) {
        Ce(a);
        gb(E.body, Ja);
        tc.style.display = "none";
    }
    function ok() {
        gh();
        zi.checked
            ? vc(uc, "csv", Ta.value, Cb.checked)
            : qk.checked
              ? vc(uc, "xml", Ta.value, Cb.checked)
              : rk.checked
                ? vc(uc, "json", Ta.value, Cb.checked)
                : sk.checked
                  ? vc(uc, "text", Ta.value, Cb.checked)
                  : tk.checked
                    ? vc(uc, "ical", Ta.value, Cb.checked)
                    : uk.checked
                      ? vc(uc, "md", Ta.value, Cb.checked)
                      : vk.checked
                        ? vc(uc, "html", Ta.value, Cb.checked)
                        : wk.checked && vc(uc, "tsv", Ta.value, Cb.checked);
    }
    function tl() {
        if (!r && null === ka) {
            ka = h("div", "calendar-dialog search");
            ya.push(ka);
            E.body.appendChild(ka);
            var a = h("div", "title-bar");
            y(a, b.searchEventsTitle);
            ka.appendChild(a);
            Fd(a, ka, function () {
                Ai = !0;
                Wf();
            });
            a.ondblclick = Bi;
            var c = t(a, "ib-close", b.closeTooltipText, kd);
            c.onmousedown = C;
            c.onmouseup = C;
            Od = t(a, "ib-minus", b.minimizedTooltipText, Bi);
            Od.onmousedown = C;
            Od.onmouseup = C;
            $b = h("div", "contents");
            ka.appendChild($b);
            a = h("div", "history-container");
            $b.appendChild(a);
            na = h("input", null, "text");
            na.placeholder = b.searchTextBoxPlaceholder;
            na.oninput = De;
            na.onpropertychange = De;
            na.onkeypress = zm;
            a.appendChild(na);
            ob = h("div", "ib-arrow-down-full");
            ob.style.display = "none";
            ob.onclick = Am;
            a.appendChild(ob);
            zb = h("div", "history-dropdown custom-scroll-bars");
            a.appendChild(zb);
            a = h("div", "checkbox-container");
            $b.appendChild(a);
            ih = K(a, b.notSearchText, ac)[0];
            jh = K(a, b.matchCaseText, ac)[0];
            Ee = K(a, b.advancedText + ":", Bm)[0];
            Ee.checked = !0;
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
            kh = K(d, b.locationText.replace(":", n.empty), ac)[0];
            lh = K(d, b.descriptionText.replace(":", n.empty), ac)[0];
            mh = K(d, b.groupText.replace(":", n.empty), ac)[0];
            nh = K(d, b.urlText.replace(":", n.empty), ac)[0];
            Yf.checked = !0;
            qa(a, b.optionsText, "text-header");
            c = h("div", "radio-buttons-container");
            a.appendChild(c);
            oh = ha(c, b.startsWithText, "SearchOptionType", ac);
            ph = ha(c, b.endsWithText, "SearchOptionType", ac);
            qh = ha(c, b.containsText, "SearchOptionType", ac);
            qh.checked = !0;
            a = h("div", "buttons-container");
            $b.appendChild(a);
            rh = Fa(a, b.previousText, "previous", xk);
            sh = Fa(a, b.nextText, "next", yk);
        }
    }
    function Bm() {
        Xf.style.display = Ee.checked ? "block" : "none";
        Uh();
        Wf();
    }
    function ac() {
        Wf();
        De(!1);
    }
    function De(a) {
        a = p(a) ? a : !0;
        0 < Db.length && zk(z, " focused-event");
        rh.disabled = !0;
        sh.disabled = na.value === n.empty;
        Db = [];
        Zc = 0;
        Ci = null;
        a && Ak();
        Wf();
    }
    function de() {
        "block" !== ka.style.display &&
            ((Db = []),
            (ka.style.display = "block"),
            De(!1),
            (na.value = u.lastSearchText),
            (ih.checked = u.not),
            (jh.checked = u.matchCase),
            (Ee.checked = u.showAdvanced),
            (Yf.checked = u.searchTitle),
            (kh.checked = u.searchLocation),
            (lh.checked = u.searchDescription),
            (mh.checked = u.searchGroup),
            (nh.checked = u.searchUrl),
            (oh.checked = u.startsWith),
            (ph.checked = u.endsWith),
            (qh.checked = u.contains),
            (Xf.style.display = Ee.checked ? "block" : "none"),
            Uh());
        "block" !== $b.style.display && Bi();
        na.focus();
        na.select();
        0 < u.history.length && (ob.style.display = "block");
    }
    function Uh() {
        null === ka ||
            Ai ||
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
        null !== ka && "block" === ka.style.display && ((ka.style.display = "none"), De(), (a = !0));
        return a;
    }
    function Bi() {
        "block" === $b.style.display
            ? (($b.style.display = "none"), (Od.className = "ib-square-hollow"), Qa(Od, b.restoreTooltipText))
            : (($b.style.display = "block"), (Od.className = "ib-minus"), Qa(Od, b.minimizedTooltipText));
    }
    function xk() {
        if (0 < Zc) {
            Zc--;
            var a = Db[Zc];
            Bk();
            F(a.from);
            Ck(a);
        }
    }
    function zm(a) {
        a.keyCode === Q.enter && fa(a) && !rh.disabled ? xk() : a.keyCode !== Q.enter || sh.disabled ? Ak() : yk();
    }
    function yk() {
        if (0 === Db.length) {
            var a = "day-",
                b = ih.checked,
                d = jh.checked,
                e = d ? na.value : na.value.toLowerCase(),
                f = {},
                k = ub(Ad()),
                m = k.length,
                h = La(),
                g = h === W,
                n = h === ra,
                p = h === da;
            h = h === ia;
            g ? (a = "full-day-") : n ? (a = "month-") : p ? (a = "week-day-") : h && (a = "timeline-day-");
            Wf(!0);
            for (var q = 0; q < m; q++) {
                var l = k[q];
                if (ge(l)) {
                    var r = G(l.title),
                        t = G(l.location),
                        u = G(l.description),
                        w = G(l.group),
                        x = G(l.url),
                        v = !1;
                    d ||
                        ((r = r.toLowerCase()),
                        (u = u.toLowerCase()),
                        (t = t.toLowerCase()),
                        (w = w.toLowerCase()),
                        (x = x.toLowerCase()));
                    Yf.checked && Zf(r, e)
                        ? (v = !0)
                        : kh.checked && Zf(t, e)
                          ? (v = !0)
                          : lh.checked && Zf(u, e)
                            ? (v = !0)
                            : mh.checked && Zf(w, e)
                              ? (v = !0)
                              : nh.checked && Zf(x, e) && (v = !0);
                    b && (v = !v);
                    !v ||
                        (null === Aa(a + l.id) && (g || n || p || h)) ||
                        (g || n || p || h
                            ? Db.push(re(l, !1))
                            : ((r = l.from.getMonth() + "-" + l.from.getFullYear()),
                              f.hasOwnProperty(r) || (Db.push(re(l, !1)), (f[r] = !0))));
                }
            }
        } else Zc++;
        Bk();
        0 < Db.length && ((a = Db[Zc]), F(new Date(a.from)), Ck(a));
    }
    function Ck(a) {
        var b = "day-",
            d = La(),
            e = d === W,
            f = d === ra,
            k = d === da;
        d = d === ia;
        zk(z, " focused-event");
        e ? (b = "full-day-") : f ? (b = "month-") : k ? (b = "week-day-") : d && (b = "timeline-day-");
        b = Aa(b + a.id);
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
        rh.disabled = 0 === Zc;
        sh.disabled = Zc === Db.length - 1 || 0 === Db.length;
    }
    function Zf(a, b) {
        return oh.checked
            ? oa(a, b)
            : ph.checked
              ? a.substring(a.length - b.length, a.length) === b
              : a.indexOf(b) > B.notFound;
    }
    function Wf(a) {
        a = p(a) ? a : !1;
        qd(Ma.searchOptionsChanged);
        var c = Md(na.value);
        a && (ob.style.display = "block");
        nd(
            Ma.searchOptionsChanged,
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
                        (u.not = ih.checked),
                        (u.matchCase = jh.checked),
                        (u.showAdvanced = Ee.checked),
                        (u.searchTitle = Yf.checked),
                        (u.searchLocation = kh.checked),
                        (u.searchDescription = lh.checked),
                        (u.searchGroup = mh.checked),
                        (u.searchUrl = nh.checked),
                        (u.startsWith = oh.checked),
                        (u.endsWith = ph.checked),
                        (u.contains = qh.checked),
                        Ai && ((u.left = ka.offsetLeft), (u.top = ka.offsetTop)),
                        x(b.events.onSearchOptionsUpdated, u);
            },
            2e3,
            !1
        );
    }
    function Ak() {
        var a = u.history.length;
        0 < a
            ? ((ob.style.display = "block"),
              qd(Ma.searchEventsHistoryDropDown),
              nd(
                  Ma.searchEventsHistoryDropDown,
                  function () {
                      var b = na.value,
                          d = !1;
                      if (Md(b) !== n.empty) {
                          Dk();
                          zb.innerHTML = n.empty;
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
            : (ob.style.display = "none");
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
    function Am(a) {
        C(a);
        if ("block" !== zb.style.display) {
            Dk();
            a = u.history.length;
            zb.innerHTML = n.empty;
            na.focus();
            for (var b = 0; b < a; b++) Ek(u.history[b], 0);
            Fk();
        } else Ye();
    }
    function Ek(a, b) {
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
            Ye();
            na.value = a;
            na.selectionStart = na.selectionEnd = na.value.length;
            na.focus();
            De(!1);
        };
    }
    function Ye() {
        var a = !1;
        null !== zb &&
            "ib-arrow-up-full" === ob.className &&
            ((zb.style.display = "none"), (ob.className = "ib-arrow-down-full"), (a = !0));
        return a;
    }
    function Fk() {
        null !== zb &&
            "ib-arrow-down-full" === ob.className &&
            ((zb.style.display = "block"), (ob.className = "ib-arrow-up-full"));
    }
    function ul() {
        if (!r && null === Eb) {
            Eb = h("div", "calendar-dialog configuration");
            ya.push(Eb);
            E.body.appendChild(Eb);
            var a = h("div", "title-bar");
            y(a, b.configurationTitleText);
            Eb.appendChild(a);
            Fd(a, Eb, null);
            t(a, "ib-close", b.closeTooltipText, Gk, !0);
            a = h("div", "contents");
            Eb.appendChild(a);
            var c = hk(a);
            te(
                c,
                b.displayTabText,
                function (a) {
                    ue(a, Pd, Eb);
                },
                !0
            );
            te(c, b.organizerTabText, function (a) {
                ue(a, Fe, Eb);
            });
            Pd = ve(a, !0, !1);
            Fe = ve(a, !1, !1);
            Di = K(Pd, b.enableAutoRefreshForEventsText)[0];
            Ei = K(Pd, b.enableBrowserNotificationsText, null, null, null, "checkbox-tabbed-in")[0];
            Fi = K(Pd, b.enableTooltipsText, null, null, null, "checkbox-tabbed-down")[0];
            Gi = K(Pd, b.enableDragAndDropForEventText)[0];
            Hi = K(Pd, b.showHolidaysInTheDisplaysText)[0];
            qa(Fe, b.organizerNameText);
            th = h("input", null, "text");
            Fe.appendChild(th);
            qa(Fe, b.organizerEmailAddressText);
            uh = h("input", null, "email");
            Fe.appendChild(uh);
            c = h("div", "buttons-container");
            a.appendChild(c);
            Fa(c, b.updateText, "update", Cm);
            Fa(c, b.cancelText, "cancel", Gk);
        }
    }
    function Cm() {
        Di.checked ? q.startTheAutoRefreshTimer() : q.stopTheAutoRefreshTimer();
        b.eventNotificationsEnabled = Ei.checked;
        b.tooltipsEnabled = Fi.checked;
        b.dragAndDropForEventsEnabled = Gi.checked;
        b.showHolidays = Hi.checked;
        b.organizerName = th.value;
        b.organizerEmailAddress = uh.value;
        lb = !1;
        x(b.events.onOptionsUpdated, b);
        Ii();
        Ji();
        F(v, !0, !0);
        Sa(b.configurationUpdatedText);
    }
    function Gk() {
        Ji();
    }
    function dj() {
        Ub(E.body, Ja);
        Di.checked = $f;
        Ei.checked = b.eventNotificationsEnabled;
        Fi.checked = b.tooltipsEnabled;
        Gi.checked = b.dragAndDropForEventsEnabled;
        Hi.checked = b.showHolidays;
        th.value = b.organizerName;
        uh.value = b.organizerEmailAddress;
        eb.push(Ji);
        Eb.style.display = "block";
    }
    function Ji(a) {
        Ce(a);
        gb(E.body, Ja);
        Eb.style.display = "none";
    }
    function ge(a) {
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
    function vl() {
        if (!r && null === wc && b.jumpToDateEnabled) {
            wc = h("div", "calendar-dialog jump-to-date");
            ya.push(wc);
            E.body.appendChild(wc);
            var a = h("div", "title-bar");
            y(a, b.jumpToDateTitle);
            wc.appendChild(a);
            Fd(a, wc, null);
            t(a, "ib-close", b.closeTooltipText, vh, !0);
            var c = h("div", "contents");
            wc.appendChild(c);
            bc = h("input", null, "date");
            c.appendChild(bc);
            a = h("div", "buttons-container");
            c.appendChild(a);
            c = Fa(a, b.goText, "go", Hk);
            Fa(a, b.cancelText, "cancel", vh);
            c.onkeydown = function (a) {
                a.keyCode === Q.enter && Hk();
            };
        }
    }
    function ce() {
        if (La() !== ra && b.jumpToDateEnabled) {
            Ub(E.body, Ja);
            Hb();
            var a = La();
            null === a
                ? (x(b.events.onSetDate, bc), Bb(v, bc))
                : a === W
                  ? Bb(L, bc)
                  : a === da
                    ? Bb(Sb, bc)
                    : a === Da
                      ? Bb(new Date(sa, 0, 1), bc)
                      : a === ia && Bb(ba, bc);
            eb.push(vh);
            wc.style.display = "block";
            bc.focus();
        }
    }
    function vh(a) {
        Ce(a);
        gb(E.body, Ja);
        wc.style.display = "none";
    }
    function Hk() {
        var a = La(),
            c = ye(bc);
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
            vh());
    }
    function Zi() {
        null === T &&
            ((T = h("div", "calendar-tooltip")),
            ya.push(T),
            E.body.appendChild(T),
            (Ki = h("div", "ib-close")),
            (wh = h("div", "ib-edit")),
            (xh = h("div", "title-buttons")),
            xh.appendChild(Ki),
            xh.appendChild(wh),
            (Qd = h("div", "title")),
            (ag = h("div", "date")),
            (Rd = h("div", "duration")),
            (bg = h("div", "repeats")),
            (cg = h("div", "description")),
            (dg = h("div", "location")),
            (Sd = h("div", "url")),
            (Ki.onclick = jc),
            (wh.onclick = function () {
                P(Cd);
            }),
            document.body.addEventListener("mousemove", jc));
    }
    function hi(a, c, d, e) {
        C(a);
        qd(Ma.showToolTip);
        jc();
        e = p(e) ? e : !1;
        if ("block" !== T.style.display && b.tooltipsEnabled) {
            var f = R(d) ? b.tooltipDelay : b.eventTooltipDelay;
            nd(
                Ma.showToolTip,
                function () {
                    if (e || (!E.body.contains(Ja) && !Ig() && !Xj() && null === ca)) {
                        d = p(d) ? d : n.empty;
                        T.className = d === n.empty ? "calendar-tooltip-event" : "calendar-tooltip";
                        if (R(d)) y(T, d);
                        else if (
                            ((Cd = c),
                            (T.innerHTML = n.empty),
                            (Qd.innerHTML = n.empty),
                            (Rd.innerHTML = n.empty),
                            (Sd.innerHTML = n.empty),
                            !x(b.events.onToolTipEventRender, T, c))
                        ) {
                            T.onmousemove = C;
                            T.appendChild(xh);
                            T.appendChild(Qd);
                            T.appendChild(ag);
                            T.appendChild(Rd);
                            Va(wh, b.manualEditingEnabled);
                            if (Ca(c.url)) {
                                var f = aa(Sd, yg(c.url), "url-text");
                                Ub(T, Sd);
                                f.onclick = function (a) {
                                    C(a);
                                    he(c.url);
                                    jc();
                                };
                            } else (Sd.innerHTML = n.empty), (Sd.onclick = null), gb(T, Sd);
                            H(c.repeatEvery) > w.never &&
                                b.showReoccurringEventIcons &&
                                ((f = h("div", "ib-refresh-medium ib-no-hover ib-no-active")),
                                (f.style.borderColor = Qd.style.color),
                                Qd.appendChild(f));
                            Qd.innerHTML += lc(c.title);
                            Ba(c.repeatEvery) && c.repeatEvery > w.never
                                ? (y(bg, b.repeatsText.replace(":", n.empty) + n.space + pd(c.repeatEvery)), Ub(T, bg))
                                : ((bg.innerHTML = n.empty), gb(T, bg));
                            Ca(c.location) ? (y(dg, c.location), Ub(T, dg)) : ((dg.innerHTML = n.empty), gb(T, dg));
                            Ca(c.description)
                                ? (y(cg, c.description), Ub(T, cg))
                                : ((cg.innerHTML = n.empty), gb(T, cg));
                            c.from.getDate() === c.to.getDate()
                                ? c.isAllDay
                                    ? y(ag, b.allDayText)
                                    : (y(ag, be(c.from, c.to)), y(Rd, Ob(c.from, c.to)))
                                : (Ve(ag, c.from, c.to), y(Rd, Ob(c.from, c.to)));
                            Rd.innerHTML === n.empty && T.removeChild(Rd);
                        }
                        tf(a, T);
                    }
                },
                f,
                !1
            );
        }
    }
    function jc() {
        qd(Ma.showToolTip);
        Ik() && ((T.style.display = "none"), (Cd = null), (T.onmousemove = null));
    }
    function Ik() {
        return Li(Ma.showToolTip) || (null !== T && "block" === T.style.display);
    }
    function Qa(a, b, d) {
        null !== a &&
            (a.onmousemove = function (a) {
                hi(a, null, b, d);
            });
    }
    function Sa(a, c) {
        null !== fc &&
            b.popUpNotificationsEnabled &&
            ((c = p(c) ? c : !0),
            qd(Ma.hideNotification),
            (fc.innerHTML = n.empty),
            (c = h("div", c ? "success" : "error")),
            fc.appendChild(c),
            (fc.style.display = "block"),
            y(c, a),
            t(c, "ib-close-icon", b.closeTooltipText, Jk),
            nd(
                Ma.hideNotification,
                function () {
                    Jk();
                },
                5e3,
                !1
            ));
    }
    function Jk() {
        fc.style.display = "none";
    }
    function Ih(a, c) {
        if (null !== a) {
            c = p(c) ? c : !0;
            var d = b.dayHeaderNames.length;
            a.innerHTML = n.empty;
            b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday
                ? (Mi(a, b.startOfWeekDay, d), Mi(a, 0, b.startOfWeekDay))
                : Mi(a, 0, d);
            b.reverseOrderDaysOfWeek && c && ld(a);
        }
    }
    function Mi(a, c, d) {
        for (; c < d; c++) b.visibleDays.indexOf(c) > B.notFound && Dm(a, c);
    }
    function Dm(a, c) {
        var d = b.dayHeaderNames[c],
            e = h("div", Bg());
        y(e, d);
        a.appendChild(e);
        e.oncontextmenu = function (a) {
            if (!r && (fa(a) || mc(), Ga(), b.sideMenu.showDays)) {
                dk = c;
                var d = 1 < b.visibleDays.length ? "block" : "none",
                    e = 1 <= b.workingDays.length && !Zd(b.workingDays, b.visibleDays) ? "block" : "none";
                ck.style.display = d;
                ek.style.display = d;
                fk.style.display = e;
                gk.style.display = e;
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
                d && ((lb = !1), x(b.events.onOptionsUpdated, b), F(v, !0, !0));
            }
        };
    }
    function gf(a) {
        La() !== a &&
            (Kk(a, !1), vb.push(a), yh++, db(a) || (a.className += " view-shown"), (a.style.zIndex = yh), kd(), of());
    }
    function wd(a, b) {
        db(a) && ((a.className = a.className.replace(" view-shown", n.empty)), Kk(a, b), 0 === vb.length && (yh = 0));
    }
    function Kk(a, b) {
        b = p(b) ? b : !0;
        for (var c = [], e = vb.length, f = 0; f < e; f++) {
            var k = vb[f];
            p(k) && k.id !== a.id && c.push(k);
        }
        vb = [].slice.call(c);
        b && of();
    }
    function db(a) {
        return p(a) && a.className && a.className.indexOf("view-shown") > B.notFound;
    }
    function zj(a) {
        a = p(a) ? a : !0;
        var b = La();
        wd(b, !a);
        0 === vb.length && (yh = 0);
        a && of();
    }
    function La() {
        return 0 < vb.length ? vb[vb.length - 1] : null;
    }
    function of(a) {
        a = p(a) ? a : !0;
        var c = La(),
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
        a && R(d) && x(b.events.onViewChange, d);
        return d;
    }
    function Ej(a, b) {
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
    function tg(a, b) {
        var c = We(b);
        b = la.floor((a.pageY - c.top) / (b.offsetHeight / 1440)) / 60;
        a = la.floor(b);
        b = la.round(60 * (b - a));
        return [a, b];
    }
    function Gj(a, c, d, e, f) {
        var k = c.offsetHeight,
            m = c.offsetHeight / 1440;
        c = 0;
        var h = null;
        if (!f.isAllDay) {
            h = H(f.repeatEvery);
            if (U(f.from, d) || h > w.never) c = m * eg(f.from);
            h = U(f.to, d) || h > w.never ? m * eg(f.to) - c : k;
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
    function nm(a, c, d, e) {
        var f = a.scrollWidth;
        var k = a.offsetWidth / 1440;
        a = 0;
        var h = H(e.repeatEvery);
        if (U(e.from, c) || h > w.never) a = k * eg(e.from);
        c = U(e.to, c) || h > w.never ? k * eg(e.to) - a : f;
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
            (dc(a) && db(b) && f
                ? ((a = (e.offsetHeight / 1440) * eg(new Date())),
                  (d.style.display = "block"),
                  (d.style.top = a - d.offsetHeight / 2 + "px"),
                  (c = a))
                : (d.style.display = "none"));
        return c;
    }
    function Fj(a, b) {
        C(a);
        a = Pe(b, "z-index", !1);
        a = null === a || "auto" === a ? 1 : parseInt(a) + 1;
        b.style.zIndex = a.toString();
    }
    function Kj(a) {
        a = a.getElementsByClassName("event");
        a = [].slice.call(a);
        var c = a.length;
        if (1 < c) {
            a.sort(Em);
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
                                ? (zh(e),
                                  zh(k),
                                  (k.style.left = e.offsetLeft + e.offsetWidth + b.spacing + "px"),
                                  e.setAttribute("event-position", "left"),
                                  k.setAttribute("event-position", "right"))
                                : h === n.empty && "right" === g
                                  ? (zh(e),
                                    e.setAttribute("event-position", "left"),
                                    k.setAttribute("event-position", "right"))
                                  : h === n.empty &&
                                    "left" === g &&
                                    ((e.style.left = k.offsetLeft + k.offsetWidth + b.spacing + "px"),
                                    zh(e),
                                    e.setAttribute("event-position", "right"),
                                    k.setAttribute("event-position", "left")));
                    }
        }
    }
    function zh(a) {
        a.style.width = a.offsetWidth / 2 - (3 * b.spacing + b.spacing / 4) + "px";
    }
    function Em(a, b) {
        var c = 0;
        a.offsetTop < b.offsetTop ? (c = -1) : a.offsetTop > b.offsetTop && (c = 1);
        return c;
    }
    function Dj(a, c, d) {
        C(a);
        null === ug
            ? 0 === a.dataTransfer.files.length
                ? Lk(a, c.getFullYear(), c.getMonth(), c.getDate())
                : Mk(a)
            : (U(xg, c) || ((ca = Qb), (Td = xg), Nk(a, c.getFullYear(), c.getMonth(), c.getDate())),
              (c = d.offsetHeight / 1440),
              (d = We(d)),
              (a = (la.abs(a.pageY) - d.top + wg - vg) / c),
              (Qb.from = fb(Qb.from, a)),
              (Qb.to = fb(Qb.to, a)),
              jb(),
              x(b.events.onEventUpdated, Qb),
              Sa(b.eventUpdatedText.replace("{0}", Qb.title)),
              ma(),
              (Qb = ug = null),
              (vg = wg = 0));
    }
    function Th(a) {
        C(a);
        if (b.manualEditingEnabled) {
            var c = null;
            a = null;
            var d = 0;
            db(W) ? ((c = wa), (a = zg), (d = a.length)) : db(da) && ((c = ke), (a = ci), (d = a.length));
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
        rd ? Ok() : Pk();
    }
    function Pk() {
        !rd && b.fullScreenModeEnabled && (Qk(), x(b.events.onFullScreenModeChanged, !0));
    }
    function Ok() {
        rd &&
            b.fullScreenModeEnabled &&
            ((rd = !1),
            (z.className = z.className.replace(" full-screen-view", n.empty)),
            (z.style.cssText = Rk),
            Sk("ib-arrow-expand-left-right", b.enableFullScreenTooltipText),
            ma(),
            x(b.events.onFullScreenModeChanged, !1));
    }
    function Qk() {
        Rk = z.style.cssText;
        rd = !0;
        z.className += " full-screen-view";
        z.removeAttribute("style");
        Sk("ib-arrow-contract-left-right", b.disableFullScreenTooltipText);
        ma();
    }
    function Sk(a, b) {
        Ge(Fg, a);
        Ge(Xh, a);
        Ge(li, a);
        Ge(Zh, a);
        Ge(ji, a);
        Ge(ni, a);
        Qa(Fg, b);
        Qa(Xh, b);
        Qa(li, b);
        Qa(Zh, b);
        Qa(ji, b);
        Qa(ni, b);
    }
    function Zl(a, c, d) {
        if (b.showHolidays)
            for (var e = [], f = b.holidays.length, k = 0; k < f; k++) {
                var h = b.holidays[k],
                    g = G(h.title, n.empty),
                    p = G(h.backgroundColor, n.empty),
                    l = G(h.textColor, n.empty);
                Ij(h, a) && g !== n.empty && e.indexOf(g.toLowerCase())
                    ? (Fm(h, d, g, c),
                      p !== n.empty && d.style.setProperty("background-color", p, "important"),
                      l !== n.empty && d.style.setProperty("color", l, "important"),
                      e.push(g.toLowerCase()))
                    : (d.style.removeProperty("background-color"), d.style.removeProperty("color"));
            }
    }
    function Fm(a, c, d, e) {
        var f = Yc(a.onClick) || R(a.onClickUrl) ? "holiday-link" : "holiday",
            k = a.onClick;
        R(a.onClickUrl) &&
            (k = function () {
                Z.open(a.onClickUrl, b.urlWindowTarget);
            });
        aa(c, d, f + e, k, !0, !0);
    }
    function Ij(a, b) {
        var c = H(a.day),
            e = H(a.month);
        a = H(a.year);
        var f = !1;
        0 === a && c === b.getDate() && e === b.getMonth() + 1
            ? (f = !0)
            : 0 < a && c === b.getDate() && e === b.getMonth() + 1 && a === b.getFullYear() && (f = !0);
        return f;
    }
    function Ad() {
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
                        var e = Tk(pb[b][d]);
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
                return Uk(b.isAllDay) - Uk(a.isAllDay);
            }));
        return a;
    }
    function Tj(a, c) {
        Ub(E.body, Ja);
        var d = function () {
            gb(E.body, Ja);
        };
        Gf(
            b.confirmEventsRemoveTitle,
            b.confirmEventsRemoveMessage,
            function () {
                var e = 0;
                d();
                xb(function (b) {
                    H(b.repeatEvery) === w.never && c(b.from, a) && (q.removeEvent(b.id, !1), e++);
                });
                jb();
                Sa(b.eventsRemovedText.replace("{0}", e));
                Ka();
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
        a = p(a) && N.hasOwnProperty(a) ? a : 0;
        for (var b in N) N.hasOwnProperty(b) && p(N[b].eventEditorInput) && (N[b].eventEditorInput.checked = !1);
        p(N[a].eventEditorInput) && (N[a].eventEditorInput.checked = !0);
    }
    function wm() {
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
    function dc(a) {
        var b = new Date();
        return (
            null !== a &&
            a.getDate() === b.getDate() &&
            a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth()
        );
    }
    function ud(a) {
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
    function Gg(a) {
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
    function Ag(a) {
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
    function ie(a, b) {
        b = Ba(b) ? b : 1;
        a.setMonth(a.getMonth() + b);
    }
    function vd(a, b) {
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
    function ye(a, b) {
        b = void 0 !== b ? b : new Date();
        if (a.value !== n.empty)
            if ("date" === a.type) b = new Date(a.value + "T00:00:00Z");
            else if ((a = a.value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)))
                (a = new Date(a[3], a[2] - 1, a[1], 0, 0, 0, 0)), a instanceof Date && !isNaN(a) && (b = a);
        p(b) && (b = new Date(b.getTime() + la.abs(6e4 * b.getTimezoneOffset())));
        return b;
    }
    function kk(a, b) {
        if ("date" === a.type) {
            var c = ("0" + b.getDate()).slice(-2),
                e = ("0" + (b.getMonth() + 1)).slice(-2);
            a.setAttribute("min", b.getFullYear() + "-" + e + "-" + c);
        }
    }
    function dh(a, b) {
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
    function Mh(a, c) {
        var d = X(c);
        a = a.replace("{dddd}", b.dayNames[d]);
        a = a.replace("{ddd}", b.dayNamesAbbreviated[d]);
        a = a.replace("{dd}", J(c.getDate()));
        a = a.replace("{d}", c.getDate());
        a = a.replace("{o}", Gg(c.getDate()));
        a = a.replace("{mmmm}", b.monthNames[c.getMonth()]);
        a = a.replace("{mmm}", b.monthNamesAbbreviated[c.getMonth()]);
        a = a.replace("{mm}", J(c.getMonth() + 1));
        a = a.replace("{m}", c.getMonth() + 1);
        a = a.replace("{yyyy}", c.getFullYear());
        a = a.replace("{yyy}", c.getFullYear().toString().substring(1));
        a = a.replace("{yy}", c.getFullYear().toString().substring(2));
        return (a = a.replace("{y}", parseInt(c.getFullYear().toString().substring(2)).toString()));
    }
    function Me(a) {
        if (b.startOfWeekDay === va.saturday || b.startOfWeekDay === va.sunday) a += 7 - b.startOfWeekDay;
        return a;
    }
    function Ue(a, b) {
        var c = H(a.repeatEvery);
        a = new Date(a.to);
        c > w.never && ((b = new Date(b)), b.setHours(a.getHours(), a.getMinutes()), (a = b));
        return a;
    }
    function be(a, c) {
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
        kc(a, c);
        aa(a, n.space + b.toTimeText + n.space);
        kc(a, d);
    }
    function kc(a, c, d, e, f) {
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
            ((c = Gg(c.getDate())), p(c) && ((d = h("sup")), (d.innerText = c), a.appendChild(d)));
        p(e) && aa(a, e);
    }
    function ai(a, c, d, e) {
        if (!kf(c) && b.dragAndDropForEventsEnabled && b.manualEditingEnabled) {
            var f = new Date(d),
                k = 0 <= b.weekendDays.indexOf(f.getDay()) ? " drag-not-allowed-weekend-day" : " drag-not-allowed";
            a.setAttribute("draggable", !0);
            a.ondragstart = function (d) {
                x(b.events.onEventDragStart, c);
                d.dataTransfer.setData("event_details", cc.stringify(c));
                Td = f;
                ca = c;
                p(e) && ((e.className += k), Gm(e));
                Ah(
                    "cell",
                    function (a) {
                        a.className += " prevent-pointer-events";
                    },
                    a
                );
                Ah(
                    "events",
                    function (a) {
                        a.className += " prevent-pointer-events";
                    },
                    a
                );
            };
            a.ondragend = function () {
                x(b.events.onEventDragStop, ca);
                ca = Td = null;
                p(e) &&
                    ((e.className = e.className.replace(k, n.empty)),
                    Cg(e, f.getFullYear(), f.getMonth(), f.getDate()));
                Ah(
                    "cell",
                    function (a) {
                        a.className = a.className.replace(" prevent-pointer-events", n.empty);
                    },
                    a
                );
                Ah(
                    "events",
                    function (a) {
                        a.className = a.className.replace(" prevent-pointer-events", n.empty);
                    },
                    a
                );
            };
        }
    }
    function Cg(a, c, d, e) {
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
                C(b);
                Wk(b, a, f);
                0 === b.dataTransfer.files.length ? Nk(b, c, d, e) : Mk(b);
            };
        }
    }
    function Gm(a) {
        b.dragAndDropForEventsEnabled &&
            b.manualEditingEnabled &&
            ((a.ondragover = null), (a.ondragenter = null), (a.ondragleave = null), (a.ondrop = null));
    }
    function Vk(a, b, d) {
        C(a);
        null === ca || b.className.indexOf(" drag-over") !== B.notFound || U(Td, d) || (b.className += " drag-over");
    }
    function Wk(a, b, d) {
        C(a);
        null !== ca &&
            b.className.indexOf(" drag-over") > B.notFound &&
            !U(Td, d) &&
            (b.className = b.className.replace(" drag-over", n.empty));
    }
    function Nk(a, c, d, e) {
        var f = new Date(c, d, e);
        if (null === ca || U(Td, f)) null === ca && Lk(a, c, d, e);
        else {
            x(b.events.onEventDragDrop, ca, f);
            p(e) || ((a = ad(c, d)), (e = ca.from.getDate()), e > a && (e = a));
            var h = Pc(ca.from, Td);
            a = Pc(ca.from, ca.to);
            f = new Date(c, d, e, ca.from.getHours(), ca.from.getMinutes());
            c = new Date(c, d, e, ca.to.getHours(), ca.to.getMinutes());
            d = ca.repeatEnds;
            0 < h && (f.setDate(f.getDate() - h), c.setDate(c.getDate() - h));
            p(d) && ((e = Pc(f, ca.from)), f > ca.from ? d.setDate(d.getDate() + e) : d.setDate(d.getDate() - e));
            0 < a && c.setDate(c.getDate() + a);
            q.updateEventDateTimes(ca.id, f, c, d);
            Sa(b.eventUpdatedText.replace("{0}", ca.title));
            Ka();
        }
    }
    function Lk(a, c, d, e) {
        a = Oe(a.dataTransfer.getData("event_details"));
        if (p(a) && null === ca) {
            var f = new Date(a.from),
                h = new Date(a.to);
            a.from = new Date(c, d, e, f.getHours(), f.getMinutes(), 0, 0);
            a.to = new Date(c, d, e, h.getHours(), h.getMinutes(), 0, 0);
            q.addEvent(a);
            Sa(b.eventAddedText.replace("{0}", a.title));
        }
    }
    function Mk(a) {
        p(Z.FileReader) && b.importEventsEnabled && Ni(a.dataTransfer.files);
    }
    function Oe(a) {
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
    function Fd(a, c, d) {
        b.dialogMovingEnabled &&
            ((a.onmousedown = function (a) {
                Ud ||
                    (Ga(),
                    (Fb = c),
                    (Ud = !0),
                    (Xk = a.pageX - Fb.offsetLeft),
                    (Yk = a.pageY - Fb.offsetTop),
                    (Bh = Fb.offsetLeft),
                    (Ch = Fb.offsetTop));
            }),
            (a.onmouseup = function () {
                Zk(d);
            }),
            (a.oncontextmenu = function () {
                Zk(null);
            }));
    }
    function Zk(a) {
        Ud && ((Ud = !1), (Fb = null), (Ch = Bh = 0), null !== a && a());
    }
    function Hl(a) {
        Ud && ((Fb.style.left = a.pageX - Xk + "px"), (Fb.style.top = a.pageY - Yk + "px"));
    }
    function Il() {
        Ud && ((Fb.style.left = Bh + "px"), (Fb.style.top = Ch + "px"), (Ud = !1), (Fb = null), (Ch = Bh = 0));
    }
    function hk(a) {
        var b = h("div");
        a.appendChild(b);
        return b;
    }
    function te(a, b, d, e) {
        e = p(e) ? e : !1;
        var c = h("div", "tab tab-control" + (e ? "-selected" : n.empty));
        y(c, b);
        a.appendChild(c);
        c.onclick = function () {
            d(c);
        };
    }
    function ve(a, b, d) {
        b = p(b) ? b : !1;
        d = p(d) ? d : !0;
        var c = h("div", "checkbox-container tab-content custom-scroll-bars");
        a.appendChild(c);
        d && (c.className += " custom-scroll-bars");
        b || (c.style.display = "none");
        return c;
    }
    function ue(a, b, d) {
        var c = d.getElementsByClassName("tab-control-selected"),
            f = c.length;
        d = d.getElementsByClassName("tab-content");
        for (var h = d.length, m = 0; m < f; m++) c[m].className = "tab tab-control";
        for (c = 0; c < h; c++) d[c].style.display = "none";
        a.className = "tab tab-control-selected";
        b.style.display = "block";
    }
    function $d(a, b, d, e) {
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
    function ef(a, b) {
        Ci === b.id && (a.className += " focused-event");
        $k(b.id) && (a.className += " selected-event");
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
            var m = c[h],
                g = m.getAttribute("event-id");
            null !== g &&
                g === a.toString() &&
                (m.className = d ? m.className.replace(n.space + b, n.empty) : m.className + (n.space + b));
        }
    }
    function $l(a, b) {
        if (dc(a) && !r) {
            a = new Date();
            var c = new Date(),
                e = new Date(),
                f = H(b.repeatEvery);
            a.setHours(b.from.getHours(), b.from.getMinutes(), 0, 0);
            c.setHours(b.to.getHours(), b.to.getMinutes(), 0, 0);
            f !== w.never || dc(b.from) || a.setHours(0, 0, 0, 0);
            f !== w.never || dc(b.to) || c.setHours(23, 59, 59, 99);
            Ba(b.alertOffset) && 0 < b.alertOffset && (a = fb(a, -b.alertOffset));
            if (e >= a && e <= c) {
                if (!ib(b.showAsBusy) || b.showAsBusy) ne = !0;
                ((!al.hasOwnProperty(b.id) && !ib(b.showAlerts)) || b.showAlerts) &&
                    bl(
                        function () {
                            Hm(b);
                        },
                        !1,
                        b
                    );
            }
        }
    }
    function Hm(a) {
        al[a.id] = !0;
        new Notification(b.eventNotificationTitle, { body: b.eventNotificationBody.replace("{0}", a.title) }).onclick =
            function () {
                var c = G(a.url);
                c === n.empty ? P(a) : he(c);
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
            !r &&
            ((c = p(c) ? c : !0),
            Notification ? a() : c && console.error("Browser notifications API unavailable."),
            p(d) && x(b.events.onNotification, d));
    }
    function he(a) {
        Z.open(a, b.urlWindowTarget);
        x(b.events.onEventUrlClicked, a);
    }
    function ee(a) {
        a = p(a) ? a : !0;
        for (var b = ja.length, d = 0; d < b; d++) {
            var e = ja[d];
            Pb ? fg(e.id, "cut-event", a) : fg(e.id, "copy-event", a);
        }
    }
    function Zj(a) {
        ja = [];
        var b = Ea.length;
        if (0 < b) for (a = 0; a < b; a++) ja.push(Ea[a]);
        else ja.push(a);
    }
    function $k(a) {
        for (var b = !1, d = Ea.length, e = 0; e < d; e++)
            if (Ea[e].id === a) {
                b = !0;
                break;
            }
        return b;
    }
    function Vh(a, c) {
        for (var d = ja.length, e = 0; e < d; e++) {
            var f = ja[e],
                h = Pc(f.from, f.to);
            f = c ? f : re(f);
            f.from.setDate(a.getDate());
            f.from.setMonth(a.getMonth());
            f.from.setFullYear(a.getFullYear());
            f.to.setDate(a.getDate());
            f.to.setMonth(a.getMonth());
            f.to.setFullYear(a.getFullYear());
            f.to.setDate(f.to.getDate() + h);
            c ? x(b.events.onEventUpdated, f) : ((f.id = null), q.addEvent(f, !1, !0));
        }
        Sa(b.eventsPastedText.replace("{0}", d));
        c && (mc(), (ja = []), (Pb = !1));
        Ha();
        ma();
    }
    function ff(a, b) {
        C(a);
        Ga();
        if (kf(b)) fa(a) || mc();
        else if (fa(a))
            if ($k(b.id)) {
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
    function yj(a) {
        ja = [];
        Pb = p(a) ? a : !1;
        a = Ea.length;
        if (0 < a) {
            for (var b = 0; b < a; b++) ja.push(Ea[b]);
            ee(!1);
        }
    }
    function Qh() {
        0 < b.autoRefreshTimerDelay &&
            !r &&
            $f &&
            nd(
                Ma.autoRefresh,
                function () {
                    aj();
                    Ka();
                },
                b.autoRefreshTimerDelay
            );
    }
    function aj() {
        var a = x(b.events.onEventsFetch);
        if (pa(a))
            for (var c = a.length, d = 0; d < c; d++) {
                var e = a[d];
                q.removeEvent(e.id, !1, !1);
                q.addEvent(e, !1, !1);
            }
    }
    function Ph() {
        0 < b.autoRefreshTimerDelay && !r && $f && qd(Ma.autoRefresh);
    }
    function Ka(a, c) {
        if (b.isWidget) kg ? F() : F(v);
        else if (((a = p(a) ? a : !1), (c = p(c) ? c : !1), kj() || a))
            ma(), kg ? (F(), Qj()) : Ha(), c && x(b.events.onRefresh);
    }
    function kj() {
        return !Ik() && !E.body.contains(Ja) && !Ig() && !Xj() && !Ne() && null === ca;
    }
    function nd(a, b, d, e) {
        e = p(e) ? e : !0;
        Li(a) ||
            (Gb[a] = e
                ? setInterval(b, d)
                : setTimeout(function () {
                      b();
                      delete Gb[a];
                  }, d));
    }
    function qd(a) {
        Li(a) && (clearTimeout(Gb[a]), delete Gb[a]);
    }
    function Li(a) {
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
        Oi.hasOwnProperty(c) || (Oi[c] = h ? E.createTextNode(n.empty) : E.createElement(c));
        c = Oi[c].cloneNode(!1);
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
        p(f) && Qa(d, f, !0);
        return d;
    }
    function Aa(a) {
        (He.hasOwnProperty(a) && null !== He[a]) || (He[a] = cl(a));
        E.body.contains(He[a]) || (He[a] = cl(a));
        return He[a];
    }
    function cl(a) {
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
    function Lc(a) {
        a.cancelBubble = !0;
    }
    function tf(a, b) {
        var c = a.pageX,
            e = a.pageY,
            f = ij();
        b.style.display = "block";
        c + b.offsetWidth > Z.innerWidth ? (c -= b.offsetWidth) : c++;
        e + b.offsetHeight > Z.innerHeight ? (e -= b.offsetHeight) : e++;
        c < f.left && (c = a.pageX + 1);
        e < f.top && (e = a.pageY + 1);
        b.style.left = c + "px";
        b.style.top = e + "px";
    }
    function gc(a, b) {
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
        var a = E.documentElement;
        return {
            left: (Z.pageXOffset || a.scrollLeft) - (a.clientLeft || 0),
            top: (Z.pageYOffset || a.scrollTop) - (a.clientTop || 0),
        };
    }
    function Ce(a) {
        (a = p(a) ? a : !0) && eb.pop();
    }
    function re(a, b) {
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
    function Ge(a, b) {
        null !== a && (a.className = b);
    }
    function lc(a) {
        var c = a;
        b.allowHtmlInDisplay || ((c = h("div")), (c.innerHTML = a), (c = c.innerText));
        return c;
    }
    function Pe(a, b, d) {
        d = p(d) ? d : !0;
        var c = null;
        Z.getComputedStyle
            ? (c = E.defaultView.getComputedStyle(a, null).getPropertyValue(b))
            : a.currentStyle && (c = a.currentStyle[b]);
        d && (c = parseFloat(c, 10));
        return c;
    }
    function y(a, c) {
        b.allowHtmlInDisplay ? (a.innerHTML = c) : (a.innerText = lc(c));
    }
    function Va(a, b) {
        null !== a && (a.style.display = b ? "inline-block" : "none");
    }
    function Ah(a, b, d) {
        a = z.getElementsByClassName(a);
        for (var c = a.length, f = 0; f < c; f++)
            for (var h = a[f].children, g = h.length, n = 0; n < g; n++) h[n] !== d && b(h[n]);
    }
    function ld(a) {
        for (var b = a.children, d = b.length - 1; d--; ) a.appendChild(b[d]);
    }
    function mg(a, b) {
        a = E.getElementsByClassName(a);
        a = [].slice.call(a);
        for (var c = a.length, e = 0; e < c; e++) {
            var f = a[e];
            f.id !== za && (p(b) ? (f.className = b) : (f.style.display = "none"));
        }
    }
    function Yh(a, b) {
        for (a = a.getElementsByClassName(b); a[0]; ) a[0].parentNode.removeChild(a[0]);
    }
    function zk(a, b) {
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
        Qa(b, d, f);
        return b;
    }
    function lm(a, c) {
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
    function Md(a) {
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
    function yg(a, b) {
        var c = a;
        b = p(b) ? b : 30;
        a.length > b &&
            ((b = 0 === b % 2 ? b / 2 : (b - 1) / 2), (c = a.substring(0, b) + "..." + a.substring(a.length - b)));
        return c;
    }
    function p(a) {
        return void 0 !== a && null !== a && a !== n.empty;
    }
    function Wh(a) {
        return "function" === typeof a;
    }
    function Yc(a) {
        return p(a) && Wh(a);
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
    function Oa(a) {
        return p(a) && "object" === typeof a;
    }
    function pa(a) {
        return Oa(a) && a instanceof Array;
    }
    function Ca(a) {
        return R(a) && a !== n.empty;
    }
    function xc(a) {
        return Oa(a) && a instanceof Date;
    }
    function bj(a) {
        return Oa(a) && void 0 !== a.tagName;
    }
    function mk(a) {
        return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
            a
        );
    }
    function Zd(a, b) {
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
    function Pi(a, b) {
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
            c = ub(Ad());
            a = c.length;
            for (d = 0; d < a; d++) {
                var e = cc.stringify(c[d]);
                Z.localStorage.setItem("CJS_" + d.toString(), e);
            }
        }
    }
    function Ni(a) {
        for (
            var b = a.length,
                d = [],
                e = [],
                f = function (a, c) {
                    d.push(a);
                    e = e.concat(c);
                    d.length === b && dl(e);
                },
                h = 0;
            h < b;
            h++
        ) {
            var g = a[h],
                n = g.name.split(".").pop().toLowerCase();
            "json" === n ? Im(g, f) : ("ics" === n || "ical" === n) && Jm(g, f);
        }
    }
    function Im(a, b) {
        var c = new FileReader(),
            e = [];
        c.readAsText(a);
        c.onloadend = function () {
            b(a.name, e);
        };
        c.onload = function (a) {
            a = Oe(a.target.result);
            Oa(a) && a.hasOwnProperty("events") && (a = a.events);
            for (var b = a.length, c = 0; c < b; c++) {
                var d = a[c];
                q.removeEvent(d.id, !1, !1);
                q.addEvent(d, !1, !1) && e.push(d);
            }
        };
    }
    function Jm(a, b) {
        var c = new FileReader(),
            e = [];
        c.readAsText(a);
        c.onloadend = function () {
            b(a.name, e);
        };
        c.onload = function (a) {
            el(a.target.result, e);
        };
    }
    function el(a, b) {
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
                        (f.from = Dh(g.split(":").pop())), (f.isAllDay = 8 === g.split(":").pop().length);
                    else if (oa(g, "DTEND:") || oa(g, "DTEND;")) f.to = Dh(g.split(":").pop(), !0);
                    else if (oa(g, "CREATED:")) f.created = Dh(g.split(":").pop());
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
                            var y = g[x];
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
                                  ? (l.repeatEvery = w.everyDay)
                                  : "WEEKLY" === t
                                    ? (l.repeatEvery = w.everyWeek)
                                    : "MONTHLY" === t
                                      ? (l.repeatEvery = w.everyMonth)
                                      : "MONTHLY" === t && 2 === u
                                        ? (l.repeatEvery = w.every2Weeks)
                                        : "YEARLY" === t && (l.repeatEvery = w.everyYear),
                            p(v) && ((g = Dh(v)), g.setDate(g.getDate() - 1), (l.repeatEnds = g)));
                    }
            }
    }
    function Dh(a, b) {
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
    function Bl() {
        var a = h("input", null, "file");
        a.accept = ".ical, .ics, .json";
        a.multiple = "multiple";
        a.onchange = function () {
            Ni(a.files);
        };
        Hb();
        a.click();
    }
    function dl(a) {
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
            g = ub,
            m = [];
        m = p(a) ? m.concat(a) : Ad();
        m = ub(m);
        a = g(m, !1);
        if ("csv" === c) {
            f = a.length;
            g = Qi();
            m = g[0];
            var l = g[1],
                r = [];
            g = [];
            for (var t = 0; t < l; t++) r.push(fl(m[t]));
            g.push(r.join(","));
            for (m = 0; m < f; m++) {
                l = g;
                r = Ri(a[m]);
                t = r.length;
                for (var u = 0; u < t; u++) r[u] = fl(r[u]);
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
            f.push("<LastModified>" + Si() + "</LastModified>");
            f.push("</Calendar>");
            f.push("<Events>");
            for (m = 0; m < g; m++) {
                l = a[m];
                r = Eh(l);
                t = r.length;
                f.push("<Event>");
                for (u = 0; u < t; u++) {
                    var v = r[u];
                    if ("customTags" !== v && l.hasOwnProperty(v) && null !== l[v]) {
                        var y = Ti(v);
                        f.push("<" + y + ">" + Fh(v, l[v]) + "</" + y + ">");
                    }
                }
                f.push("</Event>");
            }
            f.push("</Events>");
            f = f.join(n.newLine);
        } else if ("json" === c) f = ak(a);
        else if ("text" === c) {
            m = d;
            f = [];
            g = a.length;
            p(m) && f.push("Filename: " + m);
            f.push("Last Modified: " + Si());
            f.push(n.empty);
            for (m = 0; m < g; m++) {
                l = a[m];
                r = Eh(l);
                t = r.length;
                for (u = 0; u < t; u++)
                    (v = r[u]),
                        "customTags" !== v &&
                            l.hasOwnProperty(v) &&
                            null !== l[v] &&
                            f.push(Ti(v) + ": " + Fh(v, l[v]));
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
                    ? (f.push("DTSTART:" + gl(l.from)), f.push("DTEND:" + gl(l.to)))
                    : (f.push("DTSTART:" + Ie(l.from)), f.push("DTEND:" + Ie(l.to)));
                xc(l.created) && ((v = Ie(l.created)), f.push("DTSTAMP:" + v), f.push("CREATED:" + v));
                xc(l.lastUpdated) && f.push("LAST-MODIFIED:" + Ie(l.lastUpdated));
                R(r) && R(t) && f.push("ORGANIZER;CN=" + r + ":MAILTO:" + t);
                u !== w.never && f.push("RRULE:" + Km(l, u));
                R(l.title) && f.push("SUMMARY:" + hg(l.title));
                R(l.description) && f.push("DESCRIPTION:" + hg(l.description));
                R(l.location) && f.push("LOCATION:" + hg(l.location));
                R(l.url) && f.push("URL:" + hg(l.url));
                R(l.group) && f.push("CATEGORIES:" + hg(l.group));
                if (!ib(l.showAlerts) || l.showAlerts)
                    f.push("BEGIN:VALARM"),
                        f.push("TRIGGER;VALUE=DATE-TIME:" + Ie(l.from)),
                        f.push("ACTION:DISPLAY"),
                        f.push("END:VALARM");
                f.push("END:VEVENT");
            }
            f.push("END:VCALENDAR");
            f = f.join(n.newLineCharacterReturn);
        } else if ("md" === c) {
            f = a.length;
            g = Qi();
            m = g[1];
            g = ["| " + g[0].join(" | ") + " |"];
            l = [];
            for (r = 0; r < m; r++) l.push("---");
            g.push("| " + l.join(" | ") + " |");
            for (m = 0; m < f; m++) (l = Ri(a[m])), g.push("| " + l.join(" | ") + " |");
            f = g.join(n.newLine);
        } else if ("html" === c) {
            m = d;
            f = [];
            g = a.length;
            f.push("<!DOCTYPE html>");
            f.push("<html>");
            f.push("<head>");
            f.push('<meta charset="utf-8" />');
            f.push('<meta http-equiv="Last-Modified" content="' + Si() + ' GMT" />');
            p(m) && f.push("<title>" + m + "</title>");
            f.push("</head>");
            f.push("<body>");
            for (m = 0; m < g; m++) {
                l = a[m];
                r = Eh(l);
                t = r.length;
                f.push("<h3><b>" + l.id + ":</b></h3>");
                f.push("<ul>");
                for (u = 0; u < t; u++)
                    (v = r[u]),
                        "customTags" !== v &&
                            l.hasOwnProperty(v) &&
                            null !== l[v] &&
                            f.push("<li><b>" + Ti(v) + "</b>: " + Fh(v, l[v]) + "</li>");
                f.push("</ul>");
            }
            f.push("</body>");
            f.push("</html>");
            f = f.join(n.newLine);
        } else if ("tsv" === c) {
            f = a.length;
            g = Qi();
            m = g[0];
            l = g[1];
            r = [];
            g = [];
            for (t = 0; t < l; t++) r.push(hl(m[t]));
            g.push(r.join("\t"));
            for (m = 0; m < f; m++) {
                l = g;
                r = Ri(a[m]);
                t = r.length;
                for (u = 0; u < t; u++) r[u] = hl(r[u]);
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
                  (d = p(d) ? d : bk(m)),
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
    function bk(a, c) {
        c = p(c) ? c : b.exportStartFilename;
        var d = new Date(),
            e = J(d.getDate()) + "-" + J(d.getMonth() + 1) + "-" + d.getFullYear();
        d = J(d.getHours()) + "-" + J(d.getMinutes());
        return c + e + "_" + d + "." + a;
    }
    function ig(a) {
        return a ? b.yesText : b.noText;
    }
    function Je(a) {
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
    function Uk(a, b) {
        b = p(b) ? b : 0;
        return ib(a) ? (a ? 1 : 0) : b;
    }
    function ui(a, b) {
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
    function Gh(a, b) {
        b = p(b) ? b : !1;
        a = Oc(a);
        for (var c = a.length, e = 0; e < c; e++) a[e] = b ? '"' + a[e] + '"' : a[e];
        return a.join(",");
    }
    function Ti(a) {
        return a.charAt(0).toUpperCase() + a.slice(1);
    }
    function Fh(a, c, d) {
        var e = (d = p(d) ? d : !1) ? '"' + G(c) + '"' : G(c);
        "boolean" === typeof c
            ? (e = d ? c.toString() : ig(c))
            : "object" === typeof c && c instanceof Date
              ? (e = d ? '"' + c.toISOString() + '"' : Je(c))
              : "object" === typeof c && c instanceof Array
                ? (e = "repeatEveryExcludeDays" !== a || d ? (d ? "[" + Gh(c) + "]" : Gh(c)) : il(c))
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
    function il(a) {
        var c = [];
        if (pa(a))
            for (var d = a.length, e = 0; e < d; e++) {
                var f = a[e] - 1;
                -1 === f && (f = 6);
                c.push(b.dayNames[f]);
            }
        return Gh(c);
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
        b.push(N[H(a.type)].text);
        b.push(Je(a.from));
        b.push(Je(a.to));
        b.push(ig(a.isAllDay));
        b.push(G(a.title));
        b.push(G(a.description));
        b.push(G(a.location));
        b.push(G(a.color));
        b.push(G(a.colorText));
        b.push(G(a.colorBorder));
        b.push(pd(a.repeatEvery));
        b.push(Je(a.repeatEnds));
        b.push(il(a.repeatEveryExcludeDays));
        b.push(Gh(a.seriesIgnoreDates));
        b.push(Je(a.created));
        b.push(Je(a.lastUpdated));
        b.push(G(a.organizerName));
        b.push(G(a.organizerEmailAddress));
        b.push(G(a.url));
        b.push(ig(a.locked));
        b.push(ig(!ib(a.showAlerts) || a.showAlerts));
        b.push(ig(!ib(a.showAsBusy) || a.showAsBusy));
        b.push(H(a.alertOffset));
        return b;
    }
    function Eh(a) {
        var b = [],
            d;
        for (d in a) a.hasOwnProperty(d) && b.push(d);
        b.sort();
        return b;
    }
    function Si() {
        var a = new Date(),
            b = Mh("{ddd}, {dd} {mmm} {yyyy}", a);
        return (b += " " + J(a.getHours()) + ":" + J(a.getMinutes()) + ":" + J(a.getSeconds()));
    }
    function fl(a) {
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
                g = Eh(f),
                h = g.length;
            b.push("{");
            for (var l = 0; l < h; l++) {
                var p = g[l];
                "customTags" !== p &&
                    f.hasOwnProperty(p) &&
                    null !== f[p] &&
                    b.push('"' + p + '":' + Fh(p, f[p], !0) + ",");
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
        return lc(G(a)).replace(/\n|\r/g, n.empty);
    }
    function Ie(a) {
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
    function gl(a) {
        var b = [];
        p(a) && (b.push(a.getFullYear()), b.push(J(a.getMonth() + 1)), b.push(J(a.getDate())));
        return b.join(n.empty);
    }
    function Km(a, b) {
        var c = [];
        if (b === w.custom) {
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
            b === w.everyDay
                ? c.push("FREQ=DAILY")
                : b === w.everyWeek || b === w.every2Weeks
                  ? c.push("FREQ=WEEKLY")
                  : b === w.everyMonth
                    ? c.push("FREQ=MONTHLY")
                    : b === w.everyYear && c.push("FREQ=YEARLY"),
                b === w.every2Weeks ? c.push("INTERVAL=2") : c.push("INTERVAL=1");
        xc(a.repeatEnds) && ((a = new Date(a.repeatEnds)), a.setDate(a.getDate() + 1), c.push("UNTIL=" + Ie(a)));
        return c.join(";");
    }
    function hl(a) {
        return (a = a.replace(/\\/g, "\\\\"));
    }
    function x(a) {
        var b = null,
            d = [].slice.call(arguments, 1);
        0 < d.length && (b = !1);
        Yc(a) && (b = a.apply(null, d));
        return b;
    }
    function ae(a, c, d) {
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
    function Ze(a) {
        p(a) && C(a);
        if (!r || cb)
            (a = new Date(v)),
                a.setMonth(a.getMonth() - 1),
                a.getFullYear() >= b.minimumYear && (F(a), x(b.events.onPreviousMonth, a), qb());
    }
    function $e(a) {
        p(a) && C(a);
        if (!r || cb)
            (a = new Date(v)),
                a.setMonth(a.getMonth() + 1),
                a.getFullYear() <= b.maximumYear && (F(a), x(b.events.onNextMonth, a), qb());
    }
    function pg() {
        if (!r || cb) {
            var a = new Date(v);
            a.setFullYear(a.getFullYear() - 1);
            a.getFullYear() >= b.minimumYear && (F(a), x(b.events.onPreviousYear, a), qb());
        }
    }
    function qg() {
        if (!r || cb) {
            var a = new Date(v);
            a.setFullYear(a.getFullYear() + 1);
            a.getFullYear() <= b.maximumYear && (F(a), x(b.events.onNextYear, a), qb());
        }
    }
    function rg() {
        if (!r || cb) {
            var a = new Date();
            if (v.getMonth() !== a.getMonth() || v.getFullYear() !== a.getFullYear()) F(), x(b.events.onToday), qb();
        }
    }
    function jl(a) {
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
        b.initialDateTime = Pi(b.initialDateTime, null);
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
        p(a) || ((a = b.workingHoursStart), (a = Oa(a) ? a : null));
        p(c) || ((c = b.workingHoursEnd), (c = Oa(c) ? c : null));
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
        b.views.datePicker.minimumDate = Pi(b.views.datePicker.minimumDate, null);
        b.views.datePicker.maximumDate = Pi(b.views.datePicker.maximumDate, null);
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
        Ii();
    }
    function jg(a, b, d) {
        N.hasOwnProperty(d) && (R(a) ? (N[d].text = a) : (N[d].text = b));
    }
    function $c(a, b) {
        b = Ba(b) ? b : 1;
        return !pa(a) || a.length < b;
    }
    function kb(a, b) {
        Oa(a) || (a = Oa(b) ? b : {});
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
        w = { never: 0, everyDay: 1, everyWeek: 2, every2Weeks: 3, everyMonth: 4, everyYear: 5, custom: 6 },
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
        Xd = !1,
        Le = !1,
        pb = {},
        Bd = {},
        Ea = [],
        ja = [],
        Pb = !1,
        Td = null,
        ca = null,
        al = {},
        v = null,
        kg = !1,
        Cc = null,
        ne = !1,
        Rj = !1,
        He = {},
        ya = [],
        Oi = {},
        Gb = {},
        $f = !0,
        Ma = {
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
        lg = !1,
        cd = null,
        Ec = null,
        Ic = null,
        gd = null,
        Jc = null,
        fd = null,
        jd = null,
        Fc = null,
        id = null,
        Gc = null,
        hd = null,
        Hc = null,
        Yd = null,
        Bc = null,
        Qe = null,
        r = !1,
        cb = !1,
        hj = null,
        sb = {
            fullMonth: "full-month",
            fullDay: "full-day",
            fullWeek: "full-week",
            fullYear: "full-year",
            timeline: "timeline",
            allEvents: "all-events",
        },
        vb = [],
        yh = 0,
        ug = null,
        vg = null,
        Qb = null,
        wg = null,
        xg = null,
        z = null,
        Ja = null,
        rd = !1,
        Rk = null,
        od = [],
        W = null,
        af = null,
        wb = null,
        Nc = null,
        wa = null,
        fe = null,
        L = null,
        hc = [],
        Xh = null,
        Aj = null,
        cf = null,
        Bj = null,
        zg = [],
        da = null,
        Pa = null,
        Zh = null,
        Mj = null,
        yd = null,
        xd = null,
        zd = null,
        ke = null,
        je = null,
        hf = null,
        ic = [],
        jf = {},
        Sb = null,
        Lj = null,
        le = null,
        bi = !1,
        Dg = null,
        lf = 0,
        ci = [],
        Ib = null,
        mf = [],
        S = null,
        me = null,
        Lh = null,
        Hg = null,
        Tb = null,
        nf = null,
        Rc = {},
        Fg = null,
        Eg = null,
        mb = null,
        Qc = 0,
        di = null,
        yc = null,
        ed = [],
        Kh = null,
        Da = null,
        ji = null,
        ii = null,
        oe = null,
        sa = null,
        Kg = 0,
        ra = null,
        li = null,
        Sj = null,
        Dd = null,
        Lb = [],
        sg = [],
        mi = [],
        ia = null,
        ni = null,
        Vj = null,
        Uj = null,
        Ra = null,
        sf = null,
        pf = null,
        qf = null,
        Mg = {},
        rf = [],
        Dc = [],
        ba = null,
        Lg = null,
        Ya = null,
        pe = "location organizerName group organizerEmailAddress url title description".split(" "),
        eb = [],
        Fb = null,
        Bh = 0,
        Ch = 0,
        Ud = !1,
        Xk = 0,
        Yk = 0,
        ab = null,
        Vb = null,
        Ug = null,
        Vg = null,
        Uc = null,
        Tg = null,
        Sc = null,
        Wb = null,
        Xb = null,
        hb = null,
        Yb = null,
        we = null,
        If = null,
        Jf = null,
        Ab = null,
        ti = null,
        Jd = null,
        Kd = null,
        Id = null,
        xe = null,
        qc = null,
        Kf = null,
        Lf = null,
        Mf = null,
        Nf = null,
        Of = null,
        Zb = null,
        Wg = null,
        Gd = null,
        Pf = null,
        Qf = null,
        Rf = null,
        Wc = null,
        ea = {},
        Ef = null,
        Qg = null,
        Hd = null,
        vi = null,
        Sf = null,
        rc = null,
        ze = null,
        Ae = null,
        Be = null,
        sc = null,
        Xg = null,
        Yg = null,
        Zg = null,
        $g = null,
        ah = null,
        bh = null,
        ch = null,
        Ld = null,
        Xc = null,
        wi = null,
        xi = null,
        Rg = null,
        yi = null,
        Vf = null,
        tc = null,
        Ta = null,
        zi = null,
        qk = null,
        rk = null,
        sk = null,
        tk = null,
        uk = null,
        vk = null,
        wk = null,
        uc = null,
        Cb = null,
        hh = null,
        ka = null,
        Od = null,
        $b = null,
        na = null,
        jh = null,
        ih = null,
        Ee = null,
        Xf = null,
        Yf = null,
        kh = null,
        lh = null,
        mh = null,
        nh = null,
        oh = null,
        ph = null,
        qh = null,
        rh = null,
        sh = null,
        Ai = !1,
        Db = [],
        Zc = 0,
        Ci = null,
        zb = null,
        ob = null,
        Eb = null,
        Pd = null,
        Fe = null,
        Di = null,
        Ei = null,
        Fi = null,
        Gi = null,
        Hi = null,
        th = null,
        uh = null,
        wc = null,
        bc = null,
        Ia = null,
        oi = null,
        Ng = null,
        Ed = null,
        Y = null,
        $a = null,
        Yj = null,
        Ff = null,
        Df = null,
        pi = null,
        Cf = null,
        Bf = null,
        wf = null,
        Af = null,
        zf = null,
        yf = null,
        xf = null,
        vf = null,
        uf = null,
        Pg = null,
        Og = null,
        Na = null,
        si = null,
        ri = null,
        qi = null,
        Sg = null,
        bf = null,
        se = null,
        nb = null,
        ck = null,
        ek = null,
        fk = null,
        gk = null,
        dk = null,
        T = null,
        xh = null,
        Ki = null,
        wh = null,
        Qd = null,
        ag = null,
        Rd = null,
        bg = null,
        cg = null,
        dg = null,
        Sd = null,
        Cd = null,
        fc = null;
    q.turnOnFullScreen = function () {
        r || Pk();
        return q;
    };
    q.turnOffFullScreen = function () {
        r || Ok();
        return q;
    };
    q.isFullScreenActivated = function () {
        return rd;
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
            Le && Hh(!1);
            for (var a in Gb) Gb.hasOwnProperty(a) && null !== Gb[a] && (clearTimeout(Gb[a]), delete Gb[a]);
            a = ya.length;
            for (var c = 0; c < a; c++) E.body.removeChild(ya[c]);
            ya = [];
            r && E.removeEventListener("click", bd);
            b.tooltipsEnabled && document.body.removeEventListener("mousemove", jc);
            p(z) && ((z.className = n.empty), (z.innerHTML = n.empty));
            x(b.events.onDestroy, za);
        }
        return q;
    };
    q.moveToPreviousMonth = function () {
        Ze();
        return q;
    };
    q.moveToNextMonth = function () {
        $e();
        return q;
    };
    q.moveToPreviousYear = function () {
        pg();
        return q;
    };
    q.moveToNextYear = function () {
        qg();
        return q;
    };
    q.moveToToday = function () {
        rg();
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
                (F(a), x(b.events.onSetDate, a)));
        return q;
    };
    q.getSelectedDatePickerDate = function () {
        return r ? new Date(Cc) : null;
    };
    q.setSelectedDatePickerDate = function (a) {
        xc(a) &&
            r &&
            ((a = new Date(a)),
            jj(a) &&
                !U(a, Cc) &&
                a.getFullYear() >= b.minimumYear &&
                a.getFullYear() <= b.maximumYear &&
                (a.setHours(0, 0, 0, 0), bd(), Oh(a), x(b.events.onDatePickerDateChanged, a), (Cc = a)));
        return q;
    };
    q.refresh = function () {
        r || Ka(!0, !0);
        return q;
    };
    q.export = function (a) {
        b.exportEventsEnabled && !r && ((a = bb(a, "csv")), vc(null, a));
        return q;
    };
    q.import = function (a) {
        b.importEventsEnabled && !r && Ni(a);
        return q;
    };
    q.importICalData = function (a) {
        if (b.importEventsEnabled && !r) {
            var c = [];
            el(a, c);
            dl(c);
        }
        return q;
    };
    q.setEvents = function (a, c, d) {
        r || ((d = l(d, !0)), (pb = {}), q.addEvents(a, c, !1), d && x(b.events.onEventsSet, a));
        return q;
    };
    q.setEventsFromJson = function (a, c, d) {
        if (!r) {
            d = l(d, !0);
            var e = Oe(a);
            pa(e) ? q.setEvents(e, c, !1) : Oa(e) && e.hasOwnProperty("events") && q.setEvents(e.events, c, !1);
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
            var e = Oe(a);
            pa(e) ? q.addEvents(e, c, !1) : Oa(e) && e.hasOwnProperty("events") && q.addEvents(e.events, c, !1);
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
                v === n.empty || mk(v) || (a.url = n.empty);
                xc(a.created) || (a.created = new Date());
                e && (a.lastUpdated = new Date());
                pb[g][h] = Tk(a);
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
                        delete pb[g][h], (e = !0), d && x(b.events.onEventRemoved, f), c && (jb(), Mb(), Ha(), ma()), !0
                    );
            }));
        return e;
    };
    q.clearEvents = function (a, c) {
        r ||
            ((a = l(a, !0)),
            (c = l(c, !0)),
            (pb = {}),
            c && x(b.events.onEventsCleared),
            a && (jb(), Mb(), Ha(), ma()));
        return q;
    };
    q.getEvents = function () {
        var a = [];
        r || (a = ub(Ad()));
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
                H(a.repeatEvery) === w.never && a.to < new Date() && q.removeEvent(a.id, !1, b);
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
            Ka(!0, !1);
            c && x(b.events.onVisibleEventTypesChanged, O.visibleEventTypes);
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
            Ka(!0, !1);
            c && x(b.events.onVisibleGroupsChanged, O.visibleGroups);
        }
        return q;
    };
    q.setClipboardEvent = function (a) {
        Oa(a) && !r && (ja = [re(a)]);
        return q;
    };
    q.setClipboardEvents = function (a) {
        if (pa(a) && !r) {
            ja = [];
            for (var b = a.length, d = 0; d < b; d++) ja.push(re(a[d]));
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
        return "2.12.4";
    };
    q.getId = function () {
        return za;
    };
    q.isBusy = function () {
        return ne;
    };
    q.getCurrentView = function () {
        return of(!1);
    };
    q.setOptions = function (a, c) {
        for (var d in a) a.hasOwnProperty(d) && (b[d] = a[d]);
        jl(b);
        cj();
        Ii();
        lb && ((c = l(c, !0)) && x(b.events.onOptionsUpdated, b), (lb = !1), (r && !cb) || F(v, !0, !0));
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
        Hf = d;
        la = e;
        cc = f;
        za = I;
        if (R(za) || bj(za))
            jl(ua),
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
                null !== z && ib(b.openInFullScreenMode) && b.openInFullScreenMode && !r && Qk();
    })(document, window, navigator, Math, JSON);
};