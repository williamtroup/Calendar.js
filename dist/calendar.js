/*! Calendar.js v2.12.3 | (c) Bunoon 2024 | MIT License */
function calendarJs(ol, pl, ql) {
  function R(a, c, d) {
    B = Dc(a) ? a : new Date();
    c = r(c) ? c : !1;
    d = r(d) ? d : !1;
    a = c;
    if (b.isWidget) {
      ng = jc(B), sb || (Xi(!0), E !== null && (Yi(), Zi(), $i(), aj(), bj(), Oe || (Jh(), Oe = !0), cj(), dj(), ej())), rl();
    } else {
      B.setDate(1);
      B.setHours(0, 0, 0, 0);
      c = B;
      var e = new Date();
      ng = c.getFullYear() === e.getFullYear() && c.getMonth() === e.getMonth();
      c = new Date(B.getFullYear(), B.getMonth(), 1);
      e = Pe(c.getDay() === 0 ? 7 : c.getDay());
      c = !ae;
      Qe() && Nb();
      Ka();
      if (!sb && (Xi(), E !== null)) {
        w || (be === null && (be = k("div", "side-menu-disabled-background"), be.onclick = Nb, E.appendChild(be)), sl());
        tl();
        ul();
        Ob === null && (Ob = k("div", "full-month-view"), Ob.id = kc(), E.appendChild(Ob));
        vl();
        if (!w) {
          var f = tb !== null;
          if (b.views.fullMonth.isPinUpViewEnabled) {
            f || (tb = k("div", "pin-up"), Ob.appendChild(tb));
            f = b.views.fullMonth.pinUpViewImageUrls.length;
            if (f > 0) {
              for (var g = 0; g < f; g++) {
                (new Image()).src = b.views.fullMonth.pinUpViewImageUrls[g];
              }
            }
            ae || xb();
          } else {
            f && (Ob.removeChild(tb), tb = null);
          }
        }
        f = Ec !== null;
        b.views.fullMonth.showDayNamesHeaders ? (f && (Ec.innerHTML = n.empty), f || (Ec = k("div", "row-cells header-days"), Ob.appendChild(Ec)), w && (Ec.onclick = J), Kh(Ec)) : f && (Ob.removeChild(Ec), Ec = null);
        fj();
        wl();
        xl();
        yl();
        Oe || (Jh(), Oe = !0);
        dj();
        ej();
      }
      if (e > 1) {
        f = new Date(B);
        f.setMonth(f.getMonth() - 1);
        g = gd(f.getFullYear(), f.getMonth());
        for (var h = 1, l = g - e + 1; l < g; l++) {
          var m = l === g - 1;
          Lh(l + 1, h, f.getMonth(), f.getFullYear(), !0, m);
          h++;
        }
      }
      f = 0;
      g = gd(B.getFullYear(), B.getMonth());
      for (h = 0; h < g; h++) {
        f = e + h, Lh(h + 1, f, B.getMonth(), B.getFullYear(), !1);
      }
      g = f;
      if (g < 42) {
        f = 1;
        e = new Date(B);
        e.setMonth(e.getMonth() + 1);
        for (g += 1; g < 43; g++) {
          h = f === 1, Lh(f, g, e.getMonth(), e.getFullYear(), !0, h), f++;
        }
        f = gd(e.getFullYear(), e.getMonth());
        f = qa.round(f / 2);
        Mh = new Date(e.getFullYear(), e.getMonth(), f);
      } else {
        Mh = null;
      }
      La();
      a && (Yi(), Zi(), $i(), aj(), bj(), zl(), Al(), Bl(), Cl(), cj(), w || (Dl(), El(), Fl(), Gl()), lc !== null || w || (lc = k("div", "calendar-notification"), Ca.push(lc), I.body.appendChild(lc)));
      d && Pa(!0, !1);
      E !== null && (Nh.innerText = Oh(b.views.fullMonth.titleBarDateFormat, B), c && W(b.viewToOpenOnFirstLoad) && (b.viewToOpenOnFirstLoad.toLowerCase() === yb.fullDay && b.views.fullDay.enabled ? Za() : b.viewToOpenOnFirstLoad.toLowerCase() === yb.fullWeek && b.views.fullWeek.enabled ? Fc() : b.viewToOpenOnFirstLoad.toLowerCase() === yb.fullYear && b.views.fullYear.enabled ? Gc() : b.viewToOpenOnFirstLoad.toLowerCase() === yb.timeline && b.views.timeline.enabled ? Pb() : b.viewToOpenOnFirstLoad.toLowerCase() === 
      yb.allEvents && b.views.allEvents.enabled && Ph()));
    }
  }
  function dj() {
    ya(b.data) && u.addEvents(b.data, !1, !1, !1);
    if (b.useLocalStorageForEvents && ea.localStorage) {
      for (var a = ea.localStorage.length, c = 0; c < a; c++) {
        var d = ea.localStorage.getItem(ea.localStorage.key(c));
        d = Re(d);
        r(d) && u.addEvent(d, !1, !1, !1);
      }
    }
    gj();
  }
  function ej() {
    sb = !0;
    ae || (A(b.events.onRender, Da), ae = !0);
  }
  function Xi(a) {
    a = r(a) ? a : !1;
    if (E === null) {
      if (hj(Da)) {
        var c = Da;
        Da = c.id;
        W(Da) || (Da = kc());
      } else {
        c = Ea(Da);
      }
      c !== null && (c.tagName.toLowerCase() !== "input" || c.type !== "text" && c.type !== "date" ? (E = c, E.className = a ? "calendar-widget" : "calendar", E.innerHTML = n.empty, Se(E, "height") >= 100 ? E.className += n.space + "fixed-height" : E.style.removeProperty("height")) : (Te = a = c, mc(Te, "hidden"), Hc = k("input", "calendar-date-picker-input"), Hc.readOnly = !0, Hc.placeholder = b.selectDatePlaceholderText, w = !0, c = k("div", "calendar-date-picker"), a.insertAdjacentElement("afterend", 
      c), a.remove(a), c.appendChild(Te), c.appendChild(Hc), E = k("div", "calendar calendar-hidden"), E.id = Da, c.appendChild(E), Hc.onclick = Hl, I.addEventListener("click", hd), ij(), c = Te.value.split("/"), a = null, c.length === 3 && (c = new Date(parseInt(c[2]), parseInt(c[1]) - 1, parseInt(c[0])), c instanceof Date && !isNaN(c) && (a = c)), a === null ? a = new Date() : Qh(a), a.setHours(0, 0, 0, 0), Ic = a));
    }
  }
  function sl() {
    ae || (zb = k("div", "side-menu custom-scroll-bars dark-thumb-scroll"), zb.onclick = J, E.appendChild(zb), Qb = k("div", "main-header"), zb.appendChild(Qb));
    Qb.innerHTML = n.empty;
    ua(Qb, b.sideMenuHeaderText);
    x(Qb, "ib-close", b.closeTooltipText, Nb);
    (b.configurationDialogEnabled || b.exportEventsEnabled || b.importEventsEnabled && b.manualEditingEnabled) && Qb.appendChild(k("div", "right-divider-line"));
    b.configurationDialogEnabled && x(Qb, "ib-octagon-hollow", b.configurationTooltipText, function() {
      Nb();
      jj();
    });
    (b.configurationDialogEnabled && b.exportEventsEnabled || b.importEventsEnabled && b.manualEditingEnabled) && Qb.appendChild(k("div", "right-divider-line"));
    b.exportEventsEnabled && (id = x(Qb, "ib-arrow-down-full-line", b.exportEventsTooltipText, function() {
      var a = Qa();
      a === null ? jd(kd) : a === ba ? jd(nc) : a === ia ? jd(oc) : a === na ? jd(Jc) : a === va && jd(Rb);
    }));
    b.importEventsEnabled && b.manualEditingEnabled && x(Qb, "ib-arrow-up-full-line", b.importEventsTooltipText, Il);
    ae || (Kc = k("div", "content"), zb.appendChild(Kc));
  }
  function kj(a) {
    var c = Ue(Lc) || a === !0, d = Ue(ld, !0), e = Ue(md, !0), f = Ue(Mc, !0);
    a = Ue(Nc, !0);
    Kc.innerHTML = n.empty;
    Nc = nd = Mc = od = md = Oc = ld = Pc = Lc = pd = null;
    qd();
    var g = Qa();
    g === null ? $a(id, kd.length > 0) : g === ba ? $a(id, nc.length > 0) : g === va ? $a(id, Rb.length > 0) : g === ia ? $a(id, oc.length > 0) : g === na ? $a(id, Jc.length > 0) : $a(id, !1);
    if (b.sideMenu.showDays) {
      var h = c;
      h = r(h) ? h : !0;
      pd = k("div", "content-section content-section-opened");
      Lc = k("div", "checkbox-container");
      Kc.appendChild(pd);
      c = 0;
      g = 7;
      var l = !1, m = [];
      Ve(pd, Lc, b.sideMenuDaysText, h, m);
      pd.appendChild(Lc);
      if (b.startOfWeekDay === za.saturday || b.startOfWeekDay === za.sunday) {
        c = b.startOfWeekDay, l = !0;
      }
      for (; c < g; c++) {
        h = b.visibleDays.indexOf(c) > G.notFound, m.push(M(Lc, b.dayNames[c], Qc, c.toString(), h, null, Rc)[0]);
      }
      if (l) {
        for (g = b.startOfWeekDay, c = 0; c < g; c++) {
          l = b.visibleDays.indexOf(c) > G.notFound, m.push(M(Lc, b.dayNames[c], Qc, c.toString(), l, null, Rc)[0]);
        }
      }
      b.reverseOrderDaysOfWeek && rd(Lc);
    }
    if (b.sideMenu.showEventTypes) {
      d = r(d) ? d : !0;
      ld = Pc = null;
      c = !1;
      g = [];
      for (var q in P) {
        P.hasOwnProperty(q) && (c || (Pc = k("div", "content-section content-section-opened"), Kc.appendChild(Pc), ld = k("div", "checkbox-container"), Ve(Pc, ld, b.eventTypesText, d, g), Pc.appendChild(ld), c = !0), m = !0, r(S.visibleEventTypes) && (m = S.visibleEventTypes.indexOf(parseInt(q)) > G.notFound), g.push(M(ld, P[q].text, Qc, q, m, null, Rc)[0]));
      }
    }
    if (b.sideMenu.showGroups && (c = e, c = r(c) ? c : !0, md = Oc = null, q = lj(), e = q.length, e > 0)) {
      for (d = [], Oc = k("div", "content-section content-section-opened"), md = k("div", "checkbox-container"), Kc.appendChild(Oc), Ve(Oc, md, b.groupsText, c, d), Oc.appendChild(md), c = 0; c < e; c++) {
        g = q[c], m = g.toLowerCase(), l = !0, r(S.visibleGroups) && (l = S.visibleGroups.indexOf(m) > G.notFound), d.push(M(md, g, Qc, m, l, null, Rc)[0]);
      }
    }
    if (b.sideMenu.showWorkingDays) {
      c = f;
      c = r(c) ? c : !0;
      od = k("div", "content-section content-section-opened");
      Mc = k("div", "checkbox-container");
      Kc.appendChild(od);
      f = 0;
      q = 7;
      d = !1;
      e = [];
      Ve(od, Mc, b.workingDaysText, c, e);
      od.appendChild(Mc);
      if (b.startOfWeekDay === za.saturday || b.startOfWeekDay === za.sunday) {
        f = b.startOfWeekDay, d = !0;
      }
      for (; f < q; f++) {
        c = b.workingDays.indexOf(f) > G.notFound, e.push(M(Mc, b.dayNames[f], Qc, f.toString(), c, null, Rc)[0]);
      }
      if (d) {
        for (q = b.startOfWeekDay, f = 0; f < q; f++) {
          d = b.workingDays.indexOf(f) > G.notFound, e.push(M(Mc, b.dayNames[f], Qc, f.toString(), d, null, Rc)[0]);
        }
      }
      b.reverseOrderDaysOfWeek && rd(Mc);
    }
    if (b.sideMenu.showWeekendDays) {
      d = a;
      d = r(d) ? d : !0;
      nd = k("div", "content-section content-section-opened");
      Nc = k("div", "checkbox-container");
      Kc.appendChild(nd);
      a = 1;
      f = 8;
      e = !1;
      q = [];
      Ve(nd, Nc, b.weekendDaysText, d, q);
      nd.appendChild(Nc);
      if (b.startOfWeekDay === za.saturday || b.startOfWeekDay === za.sunday) {
        a = b.startOfWeekDay + 1, e = !0;
      }
      for (; a < f; a++) {
        d = a > 6 ? 0 : a, c = b.weekendDays.indexOf(d) > G.notFound, q.push(M(Nc, b.dayNames[a - 1], Qc, d.toString(), c, null, Rc)[0]);
      }
      if (e) {
        for (f = b.startOfWeekDay + 1, a = 1; a < f; a++) {
          e = a > 6 ? 0 : a, d = b.weekendDays.indexOf(e) > G.notFound, q.push(M(Nc, b.dayNames[a - 1], Qc, e.toString(), d, null, Rc)[0]);
        }
      }
      b.reverseOrderDaysOfWeek && rd(Nc);
    }
  }
  function sd() {
    return b.sideMenu.showDays || b.sideMenu.showEventTypes || b.sideMenu.showGroups || b.sideMenu.showWorkingDays || b.sideMenu.showWeekendDays;
  }
  function Sb() {
    Qe() && kj();
  }
  function Sc(a) {
    kj(r(a) ? a : !1);
    og = !1;
    zb.className += " side-menu-open";
    be.style.display = "block";
    td(Ra.sideMenuEvents, function() {
      I.body.addEventListener("click", Nb);
    }, 500, !1);
  }
  function Nb() {
    if (zb !== null) {
      zb.className = "side-menu custom-scroll-bars";
      be.style.display = "none";
      if (og) {
        var a = !1, c = !1;
        if (Oc !== null) {
          var d = We(Oc);
          ce(S.visibleGroups, d) || (S.visibleGroups = [].slice.call(d), c = !0, A(b.events.onVisibleGroupsChanged, S.visibleGroups));
        }
        Pc !== null && (d = We(Pc, !0), ce(S.visibleEventTypes, d) || (S.visibleEventTypes = [].slice.call(d), c = !0, A(b.events.onVisibleEventTypesChanged, S.visibleEventTypes)));
        pd !== null && (d = We(pd, !0), d.length >= 1 && !ce(b.visibleDays, d) && (b.visibleDays = [].slice.call(d), ud = [], c = a = !0));
        od !== null && (d = We(od, !0), ce(b.workingDays, d) || (b.workingDays = [].slice.call(d), c = a = !0));
        nd !== null && (d = We(nd, !0), ce(b.weekendDays, d) || (b.weekendDays = d, c = a = !0));
        c && (a && A(b.events.onOptionsUpdated, b), sb = !1, R(B, !0, !0));
      }
      pc();
      I.body.removeEventListener("click", Nb);
    }
  }
  function Qe() {
    return zb !== null && zb.className.indexOf("side-menu-open") > G.notFound;
  }
  function We(a, c) {
    c = r(c) ? c : !1;
    a = a.getElementsByTagName("input");
    var d = a.length, e = [];
    if (d > 0) {
      for (var f = 0; f < d; f++) {
        var g = a[f];
        g.checked && (c ? e.push(parseInt(g.name)) : e.push(g.name));
      }
    }
    return e;
  }
  function Ve(a, c, d, e, f) {
    var g = k("div", "text-header");
    a.appendChild(g);
    D(g, d + ":");
    var h = k("div", "ib-arrow-up-full");
    g.appendChild(h);
    var l = k("div", "right-divider-line");
    g.appendChild(l);
    var m = x(g, "ib-square", b.selectAllText, function(t) {
      mj(t, f, !0);
    }), q = x(g, "ib-square-hollow", b.selectNoneText, function(t) {
      mj(t, f, !1);
    });
    g.onclick = function() {
      var t = c.style.display === "none";
      g.className = t ? "text-header" : "text-header-closed";
      c.style.display = t ? "block" : "none";
      h.className = t ? "ib-arrow-up-full" : "ib-arrow-down-full";
      a.className = t ? "content-section content-section-opened" : "content-section";
      l.style.display = t ? "block" : "none";
      m.style.display = t ? "block" : "none";
      q.style.display = t ? "block" : "none";
    };
    e || (c.style.display = "none", g.className = "text-header-closed", h.className = "ib-arrow-down-full", a.className = "content-section", l.style.display = "none", m.style.display = "none", q.style.display = "none");
    return [m, q];
  }
  function mj(a, c, d) {
    J(a);
    a = c.length;
    for (var e = !1, f = 0; f < a; f++) {
      c[f].checked !== d && (c[f].checked = d, e = !0);
    }
    og = e;
  }
  function Ue(a, c) {
    return c && a === null ? !1 : a === null || a.style.display !== "none";
  }
  function Qc() {
    og = !0;
  }
  function rl() {
    Rh();
    E.innerHTML = n.empty;
    var a = ca(B), c = k("div", "day-name");
    D(c, b.dayNames[a]);
    E.appendChild(c);
    x(c, "ib-arrow-right-full", b.nextDayTooltipText, Jl);
    x(c, "ib-arrow-left-full", b.previousDayTooltipText, Kl);
    c.appendChild(k("div", "right-divider-line"));
    b.manualEditingEnabled && x(c, "ib-plus", b.addEventTooltipText, function() {
      T(null, new Date(B));
    });
    x(c, "ib-pin", b.todayTooltipText, Ll);
    a = k("div", "day-date");
    qc(a, B, !1, !0, !1);
    E.appendChild(a);
    Ml();
    Sh();
  }
  function Ml() {
    var a = k("div", "events custom-scroll-bars"), c = [];
    E.appendChild(a);
    Th(B, c);
    c = Ab(c);
    var d = c.length;
    if (d > 0) {
      for (var e = 0; e < d; e++) {
        var f = a, g = c[e], h = k("div", "event");
        f.appendChild(h);
        de(h, g, Xe(g, B));
        ee(h, g);
        h.id = "widget-day-" + g.id;
        h.setAttribute("event-type", L(g.type));
        h.setAttribute("event-id", g.id);
        h.setAttribute("event-is-all-day", g.isAllDay);
        if (!A(b.events.onWidgetEventRender, h, g)) {
          var l = k("div", "title");
          if (L(g.repeatEvery) > z.never) {
            var m = k("div", "ib-refresh-medium ib-no-hover ib-no-active");
            m.style.borderColor = h.style.color;
            l.appendChild(m);
          }
          l.innerHTML += rc(g.title);
          h.appendChild(l);
          l = k("div", "date");
          h.appendChild(l);
          m = k("div", "duration");
          h.appendChild(m);
          g.from.getDate() === g.to.getDate() ? g.isAllDay ? Tb(l, g.from, null, " - " + b.allDayText) : (Tb(l, g.from, null, " - " + fe(g.from, g.to)), D(m, Ub(g.from, g.to))) : (Ye(l, g.from, g.to), D(m, Ub(g.from, g.to)));
          m.innerHTML === n.empty && h.removeChild(m);
          Fa(g.repeatEvery) && g.repeatEvery > z.never && (l = k("div", "repeats"), D(l, b.repeatsText.replace(":", n.empty) + n.space + vd(g.repeatEvery)), h.appendChild(l));
          ab(g.location) && (l = k("div", "location"), D(l, g.location), h.appendChild(l));
          ab(g.description) && (l = k("div", "description"), D(l, g.description), h.appendChild(l));
        }
        f.scrollHeight > f.clientHeight && f.className.indexOf(" scroll-margin") === G.notFound && (f.className += " scroll-margin");
      }
    } else {
      ua(a, b.noEventsAvailableFullText);
    }
  }
  function Ll(a) {
    J(a);
    R();
  }
  function Jl(a) {
    J(a);
    a = new Date(B);
    a.setDate(a.getDate() + 1);
    a.getFullYear() <= b.maximumYear && R(a);
  }
  function Kl(a) {
    J(a);
    a = new Date(B);
    a.setDate(a.getDate() - 1);
    a.getFullYear() >= b.minimumYear && R(a);
  }
  function ij() {
    w && (b.exportEventsEnabled = !1, b.manualEditingEnabled = !1, b.fullScreenModeEnabled = !1, b.eventNotificationsEnabled = !1, b.views.fullMonth.showPreviousNextMonthNames = !1, b.views.fullMonth.showExtraTitleBarButtons = !1, b.holidays = []);
  }
  function Hl(a) {
    J(a);
    pg("calendar calendar-shown", "calendar calendar-hidden");
    if (ib) {
      E.className = "calendar calendar-hidden", Ka(), A(b.events.onDatePickerClosed, Da);
    } else {
      E.className = "calendar calendar-shown";
      R(new Date(Ic), !sb);
      A(b.events.onDatePickerOpened, Da);
      a = nj;
      a === null && (a = nj = E.offsetTop);
      E.style.top = a + "px";
      var c = Ze(E), d = oj();
      c.top - d.top + E.offsetHeight > ea.innerHeight ? (c = Se(E, "border-width"), d = Se(Hc, "border-width"), a -= E.offsetHeight + Hc.clientHeight + c * 4 + d * 2, E.className += " calendar-shadow-top", E.style.top = a + "px") : E.className += " calendar-shadow-bottom";
    }
    ib = !ib;
  }
  function hd() {
    ib && (E.className = "calendar calendar-hidden", ib = !1, Ka(), A(b.events.onDatePickerClosed, Da));
  }
  function Qh(a) {
    Hc.value = Oh(b.views.datePicker.selectedDateFormat, a);
    Te.value = a.getFullYear() + "-" + Q(a.getMonth() + 1) + "-" + Q(a.getDate());
  }
  function pj(a) {
    var c = !0;
    b.views.datePicker.minimumDate !== null && (c = $e(b.views.datePicker.minimumDate, a));
    c && b.views.datePicker.maximumDate !== null && (c = $e(a, b.views.datePicker.maximumDate));
    return c;
  }
  function Jh(a) {
    var c = (a = r(a) ? a : !0) ? I.body.addEventListener : I.body.removeEventListener, d = a ? I.addEventListener : I.removeEventListener;
    a = a ? ea.addEventListener : ea.removeEventListener;
    c("click", Nl);
    c("contextmenu", Uh);
    c("mousemove", Ol);
    c("mouseup", Vh);
    c("mouseleave", Pl);
    d("scroll", Uh);
    a("resize", Uh);
    a("resize", Wh);
    a("resize", Ql);
    a("blur", Rl);
    b.shortcutKeysEnabled && d("keydown", Sl);
  }
  function Nl(a) {
    Ka();
    la(a) || sc();
  }
  function Rl() {
    Ka();
    pc();
    w && hd();
  }
  function Ql() {
    wd(Ra.windowResize);
    td(Ra.windowResize, function() {
      Pa(!0, !1);
    }, 50, !1);
  }
  function Uh() {
    Ka();
  }
  function Ka(a) {
    var c = !1;
    a = r(a) ? a : !0;
    qg(Ma) && (c = !0);
    qg(da) && (c = !0);
    qg(Sa) && (c = !0);
    qg(ub) && (c = !0);
    rg() && (c = !0);
    pc();
    pg("calendar-context-menu");
    pg("years-drop-down");
    pg("years-drop-down-no-months");
    a && af();
    return c;
  }
  function Sl(a) {
    if (w) {
      ib && (a.keyCode === U.escape ? (a.preventDefault(), hd()) : la(a) && a.keyCode === U.left ? (a.preventDefault(), sg()) : la(a) && a.keyCode === U.right ? (a.preventDefault(), tg()) : a.keyCode === U.left ? (a.preventDefault(), bf()) : a.keyCode === U.right ? (a.preventDefault(), cf()) : a.keyCode === U.down && (a.preventDefault(), ug()));
    } else {
      if (Qe()) {
        a.keyCode === U.escape && Qe() && (a.preventDefault(), Nb());
      } else {
        if (xd) {
          var c = qj();
          la(a) && a.keyCode === U.left && c ? (a.preventDefault(), sg()) : la(a) && a.keyCode === U.right && c ? (a.preventDefault(), tg()) : a.keyCode === U.escape ? !rj() && c && b.useEscapeKeyToExitFullScreenMode && bb() : a.keyCode === U.left && c ? (a.preventDefault(), c = Qa(), c === null ? bf() : c === ba ? sj() : c === ia ? tj() : c === Ga ? uj() : c === na && vj()) : a.keyCode === U.right && c ? (a.preventDefault(), c = Qa(), c === null ? cf() : c === ba ? wj() : c === ia ? xj() : c === 
          Ga ? yj() : c === na && zj()) : a.keyCode === U.down && c ? (a.preventDefault(), c = Qa(), c === null ? ug() : c === ba ? Aj() : c === ia ? Bj() : c === Ga ? Cj() : c === na && Dj()) : a.keyCode === U.f5 && c && Pa(!1, !0);
        } else {
          a.keyCode === U.escape && rj();
        }
        if (la(a) && a.shiftKey && a.keyCode === U.a) {
          a.preventDefault(), b.manualEditingEnabled && T(null, new Date());
        } else if (la(a) && a.shiftKey && a.keyCode === U.c) {
          a.preventDefault(), Ej();
        } else if (la(a) && a.shiftKey && a.keyCode === U.e) {
          a.preventDefault(), b.exportEventsEnabled && (a = [], c = Qa(), c === null ? a = kd : c === ba ? a = nc : c === ia ? a = oc : c === na ? a = Jc : c === va && (a = Rb), a.length > 0 && jd(a));
        } else if (la(a) && a.shiftKey && a.keyCode === U.g) {
          a.preventDefault(), b.configurationDialogEnabled && jj();
        } else if (la(a) && a.shiftKey && a.keyCode === U.j) {
          a.preventDefault(), ge();
        } else if (la(a) && a.shiftKey && a.keyCode === U.f) {
          a.preventDefault(), a = !1, c = Qa(), c === null ? a = kd.length > 0 : c === ba ? a = nc.length > 0 : c === ia ? a = Rb.length > 0 : c === Ga ? a = oc.length > 0 : c === na && (a = Jc.length > 0), a && he();
        } else if (la(a) && a.shiftKey && a.keyCode === U.m) {
          if (a.preventDefault(), jb(va)) {
            for (a = vg.length, c = 0; c < a; c++) {
              vg[c]();
            }
          }
        } else {
          la(a) && a.shiftKey && a.keyCode === U.o ? (a.preventDefault(), sd() && Sc()) : la(a) && a.shiftKey && a.keyCode === U.v ? (a.preventDefault(), a = oa.length, jb(ba) && a > 0 && Xh(N, Vb)) : la(a) && a.shiftKey && a.keyCode === U.x ? (a.preventDefault(), Ej(!0)) : la(a) && a.shiftKey && a.keyCode === U.f11 && (a.preventDefault(), bb());
        }
      }
    }
  }
  function la(a) {
    return a.ctrlKey || a.metaKey;
  }
  function rj() {
    var a = Ka(!1);
    a ||= af();
    !a && kb.length > 0 && (a = kb[kb.length - 1], Yh(a) && (kb.pop(), a(!1)), a = !0);
    a ||= qd();
    a ||= sc();
    !a && oa.length > 0 && (ie(), oa = [], Vb = !1, a = !0);
    !a && Bb.length > 0 && (Fj(), a = !0);
    return a;
  }
  function tl() {
    if (!w && b.views.fullDay.enabled) {
      var a = ba !== null;
      a && (ba.innerHTML = n.empty);
      a || (ba = k("div", "full-day-view"), ba.id = kc(), E.appendChild(ba));
      a = k("div", "title-bar");
      ba.appendChild(a);
      b.fullScreenModeEnabled && (a.ondblclick = bb);
      df = k("div", "title");
      a.appendChild(df);
      x(a, "ib-close", b.closeTooltipText, Tl);
      a.appendChild(k("div", "right-divider-line"));
      b.views.fullDay.showExtraTitleBarButtons && b.fullScreenModeEnabled && (Zh = x(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, bb), a.appendChild(k("div", "right-divider-line-full-screen-mode")));
      x(a, "ib-arrow-right-full", b.nextDayTooltipText, wj);
      b.manualEditingEnabled && b.views.fullDay.showExtraTitleBarButtons && x(a, "ib-plus", b.addEventTooltipText, function() {
        if (b.useTemplateWhenAddingNewEvent) {
          var c = yd(N, N);
          T(c);
          zd();
        } else {
          T(null, N);
        }
      });
      b.views.timeline.enabled && (a.appendChild(k("div", "right-divider-line-views")), x(a, "ib-bar-graph", b.viewTimelineTooltipText, function() {
        Pb(N, !0);
      }));
      !w && sd() && (x(a, "ib-hamburger", b.showMenuTooltipText, Sc), a.appendChild(k("div", "left-divider-line")));
      x(a, "ib-arrow-left-full", b.previousDayTooltipText, sj);
      b.views.fullDay.showExtraTitleBarButtons && (Gj = x(a, "ib-pin", b.todayTooltipText, Aj), b.jumpToDateEnabled && x(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function() {
        ge();
      }), a.appendChild(k("div", "left-divider-line-events")), x(a, "ib-refresh", b.refreshTooltipText, function() {
        Pa(!0, !0);
      }), y.enabled && (Hj = x(a, "ib-search", b.searchTooltipText, he)));
      Cb = k("div", "contents custom-scroll-bars");
      ba.appendChild(Cb);
      Cb.oncontextmenu = function(c) {
        var d = wg(c, Aa);
        ef = Q(d[0]) + ":" + Q(d[1]);
        Ij(c, N, nc);
      };
      Tc = k("div", "content-events-all-day");
      Cb.appendChild(Tc);
      a = k("div", "all-day-text");
      D(a, b.allDayText);
      Tc.appendChild(a);
      Aa = k("div", "contents-events");
      Aa.ondblclick = Ul;
      Cb.appendChild(Aa);
      je = k("div", "working-hours");
      Cb.appendChild(je);
      b.manualEditingEnabled && b.dragAndDropForEventsEnabled && (Aa.ondragover = J, Aa.ondragenter = J, Aa.ondragleave = J, Aa.ondrop = function(c) {
        Jj(c, N, Aa);
      });
      Kj(Aa, b.views.fullDay.minutesBetweenSections);
      ff = k("div", "time-arrow");
      Aa.appendChild(ff);
      ff.appendChild(k("div", "arrow-left"));
      ff.appendChild(k("div", "line"));
    }
  }
  function tc(a, c, d, e, f) {
    for (var g = new Date(a.from), h = Uc(a.repeatEveryExcludeDays); g < d;) {
      e(g, f);
      var l = !(!r(a.repeatEnds) || $e(g, a.repeatEnds));
      if (h.indexOf(g.getDay()) === G.notFound && !l && Z(g, d)) {
        c.push(a);
        break;
      }
    }
  }
  function Vl(a, c) {
    var d = 0, e = Uc(a.seriesIgnoreDates), f = Ad(c), g = new Date(c);
    if (ke(a) && e.indexOf(f) === G.notFound) {
      var h = k("div", "event");
      h.ondblclick = J;
      h.setAttribute("event-type", L(a.type));
      h.setAttribute("event-id", a.id);
      h.setAttribute("event-is-all-day", a.isAllDay);
      h.onclick = function(l) {
        Lj(l, h);
      };
      a.isAllDay ? Tc.appendChild(h) : (b.manualEditingEnabled && b.dragAndDropForEventsEnabled && (Z(a.from, a.to) && (h.className += " resizable"), h.ondragstart = function(l) {
        var m = Ze(h);
        xg = h;
        yg = h.offsetTop;
        Wb = a;
        zg = m.top - l.pageY;
        Ag = c;
      }, h.ondragEnd = Vh, h.setAttribute("draggable", !0)), Aa.appendChild(h));
      h.oncontextmenu = function(l) {
        gf(l, a, f);
      };
      hf(h, a);
      de(h, a, Xe(a, c));
      ee(h, a, g);
      Z(a.from, c) && (h.id = "full-day-" + a.id);
      A(b.events.onFullDayEventRender, h, a) || (e = k("div", "title"), L(a.repeatEvery) > z.never && (g = k("div", "ib-refresh-medium ib-no-hover ib-no-active"), g.style.borderColor = h.style.color, e.appendChild(g)), e.innerHTML += rc(a.title), h.appendChild(e), a.isAllDay && !b.views.fullDay.showAllDayEventDetails) || (e = k("div", "date"), h.appendChild(e), g = k("div", "duration"), h.appendChild(g), a.from.getDate() === a.to.getDate() ? a.isAllDay ? D(e, b.allDayText) : (D(e, fe(a.from, a.to)), 
      D(g, Ub(a.from, a.to))) : (Ye(e, a.from, a.to), D(g, Ub(a.from, a.to))), g.innerHTML === n.empty && h.removeChild(g), Fa(a.repeatEvery) && a.repeatEvery > z.never && (e = k("div", "repeats"), D(e, b.repeatsText.replace(":", n.empty) + n.space + vd(a.repeatEvery)), h.appendChild(e)), ab(a.location) && (e = k("div", "location"), D(e, a.location), h.appendChild(e)), ab(a.description) && (e = k("div", "description"), D(e, a.description), h.appendChild(e)));
      h.addEventListener("click", function(l) {
        jf(l, a);
      });
      a.isAllDay || (d = Mj(Cb, Aa, c, h, a));
      nc.push(a);
      a.isAllDay || Bg.push({eventDetails:a, eventElement:h, height:h.offsetHeight});
    }
    return d;
  }
  function Za(a, c) {
    a = r(a) ? new Date(a) : new Date();
    c = r(c) ? c : !1;
    var d = new Date(), e = ca(d);
    e = b.visibleDays.indexOf(e) > G.notFound;
    df.innerHTML = n.empty;
    N = new Date(a);
    nc = [];
    Bg = [];
    Tc.style.display = "block";
    je.style.display = "none";
    Z(a, d) && !e && Nj();
    $a(Gj, e);
    $h(Cb, "event");
    qd();
    A(b.events.onFullDayTitleRender, N) || qc(df, N, !1, !0, !0);
    kf(ba);
    if (b.workingDays.indexOf(ca(a)) >= 0 && b.workingHoursStart !== null && b.workingHoursEnd !== null) {
      var f = null;
      d = null;
      Ta(b.workingHoursStart) ? (e = ca(N), b.workingHoursStart.hasOwnProperty(e.toString()) && (f = b.workingHoursStart[e.toString()])) : f = b.workingHoursStart;
      Ta(b.workingHoursEnd) ? (e = ca(N), b.workingHoursEnd.hasOwnProperty(e.toString()) && (d = b.workingHoursEnd[e.toString()])) : d = b.workingHoursEnd;
      f !== null && d !== null && f !== d && (e = Aa.offsetHeight / 1440, f = f.split(":"), d = d.split(":"), f = (parseInt(f[0]) * 60 + parseInt(f[1])) * e, d = (parseInt(d[0]) * 60 + parseInt(d[1])) * e - f, je.style.display = "block", je.style.top = f + "px", je.style.height = d + "px");
    }
    d = a;
    e = null;
    if (b.showHolidays) {
      f = [];
      for (var g = [], h = b.holidays.length, l = 0; l < h; l++) {
        var m = b.holidays[l], q = K(m.title, n.empty);
        Oj(m, d) && q !== n.empty && g.indexOf(q.toLowerCase()) && (f.push(q), g.push(q.toLowerCase()));
      }
      f.length > 0 && (e = f.join(", "));
    }
    d = e;
    f = [];
    d !== null && ja(df, " (" + d + ")", "light-title-bar-text");
    Th(a, f);
    f = Ab(f);
    g = f.length;
    e = null;
    d = Pj(N, ba, ff, Aa, b.views.fullDay.showTimelineArrow);
    for (h = 0; h < g; h++) {
      l = Vl(f[h], a), e === null && (e = l);
    }
    c && (a = ba, c = b.views.fullDay.showTimelineArrow, jc(N) && jb(a) && c ? (a = Tc.offsetHeight, a = a <= 1 ? b.spacing * 4 : a, Cb.scrollTop = d - a) : Cb.scrollTop = e - Cb.offsetHeight / 2);
    Tc.offsetHeight <= 1 && (Tc.style.display = "none");
    $a(Hj, nc.length > 0);
    Qj(Aa);
  }
  function Th(a, c) {
    Db(function(d) {
      for (var e = Vc(d.from, d.to) + 1, f = new Date(d.from), g = 0; g < e; g++) {
        if (Z(f, a)) {
          c.push(d);
          break;
        }
        cb(f);
      }
      e = L(d.repeatEvery);
      e > z.never && (e === z.everyDay ? tc(d, c, a, cb, 1) : e === z.everyWeek ? tc(d, c, a, Xb, 1) : e === z.every2Weeks ? tc(d, c, a, Xb, 2) : e === z.everyMonth ? tc(d, c, a, le, 1) : e === z.everyYear ? tc(d, c, a, Bd, 1) : e === z.custom && (e = L(d.repeatEveryCustomType), f = L(d.repeatEveryCustomValue), f > 0 && (e === O.daily ? tc(d, c, a, cb, f) : e === O.weekly ? tc(d, c, a, Xb, f) : e === O.monthly ? tc(d, c, a, le, f) : e === O.yearly && tc(d, c, a, Bd, f))));
    });
  }
  function Tl() {
    Cd(ba);
    N = null;
    nc = [];
    Bg = [];
  }
  function Ul(a) {
    b.manualEditingEnabled && (a = wg(a, Aa), b.useTemplateWhenAddingNewEvent ? (a = Q(a[0]) + ":" + Q(a[1]), a = yd(N, N, a, a), T(a), zd()) : T(null, N, a));
  }
  function sj() {
    Cg(N);
    if (b.visibleDays.length < 7) {
      for (var a = ca(N); b.visibleDays.indexOf(a) === G.notFound;) {
        Cg(N), a = ca(N);
      }
    }
    Za(N, !0);
  }
  function wj() {
    Nj(!0);
  }
  function Aj() {
    N = new Date();
    Za(N, !0);
  }
  function Nj(a) {
    a = r(a) ? a : !1;
    cb(N);
    if (b.visibleDays.length < 7) {
      for (var c = ca(N); b.visibleDays.indexOf(c) === G.notFound;) {
        cb(N), c = ca(N);
      }
    }
    a && Za(N, !0);
  }
  function ul() {
    if (!w && b.views.fullWeek.enabled) {
      var a = ia !== null;
      a && (ia.innerHTML = n.empty, Dd = null);
      a || (ia = k("div", "full-week-view"), ia.id = kc(), E.appendChild(ia));
      a = k("div", "title-bar");
      ia.appendChild(a);
      b.fullScreenModeEnabled && (a.ondblclick = bb);
      Ua = k("div", "title");
      a.appendChild(Ua);
      x(a, "ib-close", b.closeTooltipText, function() {
        oc = [];
        Cd(ia);
      });
      a.appendChild(k("div", "right-divider-line"));
      b.views.fullWeek.showExtraTitleBarButtons && b.fullScreenModeEnabled && (ai = x(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, bb), a.appendChild(k("div", "right-divider-line-full-screen-mode")));
      x(a, "ib-arrow-right-full", b.nextWeekTooltipText, xj);
      b.manualEditingEnabled && b.views.fullWeek.showExtraTitleBarButtons && x(a, "ib-plus", b.addEventTooltipText, function() {
        T(null, new Date(Rj));
      });
      !w && sd() && (x(a, "ib-hamburger", b.showMenuTooltipText, Sc), a.appendChild(k("div", "left-divider-line")));
      x(a, "ib-arrow-left-full", b.previousWeekTooltipText, tj);
      b.views.fullWeek.showExtraTitleBarButtons && (x(a, "ib-pin", b.thisWeekTooltipText, Bj), b.jumpToDateEnabled && x(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function() {
        ge();
      }), a.appendChild(k("div", "left-divider-line-events")), x(a, "ib-refresh", b.refreshTooltipText, function() {
        Pa(!0, !0);
      }), y.enabled && (Sj = x(a, "ib-search", b.searchTooltipText, he)));
      Ed = k("div", "contents custom-scroll-bars");
      ia.appendChild(Ed);
      Wl();
    }
  }
  function Wl() {
    var a = k("div", "header-days-container");
    Ed.appendChild(a);
    b.views.fullWeek.showDayNamesHeaders && (Dd = k("div", "row-cells header-days"), a.appendChild(Dd));
    Fd = k("div", "content-events-all-day");
    Ed.appendChild(Fd);
    me = k("div", "row-cells days");
    Fd.appendChild(me);
    a = k("div", "all-day-text");
    D(a, b.allDayText);
    Fd.appendChild(a);
    ne = k("div", "hours");
    Ed.appendChild(ne);
    Kj(ne, b.views.fullWeek.minutesBetweenSections);
    lf = k("div", "row-cells days");
    ne.appendChild(lf);
  }
  function bi(a, c, d) {
    for (; a < c; a++) {
      b.visibleDays.indexOf(a) > G.notFound && Xl(d, a);
    }
  }
  function Xl(a, c) {
    var d = k("div", Dg()), e = k("div", Dg()), f = new Date(a[c]);
    d.id = "calendar-week-day-" + c;
    e.id = "calendar-week-all-day-" + c;
    lf.appendChild(d);
    me.appendChild(e);
    d.ondblclick = function(g) {
      b.manualEditingEnabled && (g = wg(g, d), b.useTemplateWhenAddingNewEvent ? (g = Q(g[0]) + ":" + Q(g[1]), g = yd(f, f, g, g), T(g), zd()) : T(null, f, g));
    };
    Eg(e, f.getFullYear(), f.getMonth(), f.getDate());
    Yl(d, c);
    jc(f) && Zl(d, f);
    b.manualEditingEnabled && b.dragAndDropForEventsEnabled && (d.ondragover = J, d.ondragenter = J, d.ondragleave = J, d.ondrop = function(g) {
      Jj(g, f, ne);
    });
    d.oncontextmenu = function(g) {
      var h = wg(g, d);
      ef = Q(h[0]) + ":" + Q(h[1]);
      Ij(g, f, mf[c]);
    };
  }
  function Zl(a, c) {
    oe = k("div", "time-arrow");
    a.appendChild(oe);
    oe.appendChild(k("div", "arrow-left"));
    oe.appendChild(k("div", "line"));
    Fg = Pj(c, ia, oe, a, b.views.fullWeek.showTimelineArrow);
  }
  function Yl(a, c) {
    if (b.workingHoursStart !== null && b.workingHoursEnd !== null && b.workingDays.indexOf(c) >= 0) {
      var d = Ta(b.workingHoursStart) && b.workingHoursStart.hasOwnProperty(c.toString()) ? b.workingHoursStart[c.toString()] : b.workingHoursStart;
      var e = Ta(b.workingHoursEnd) && b.workingHoursEnd.hasOwnProperty(c.toString()) ? b.workingHoursEnd[c.toString()] : b.workingHoursEnd;
      d !== null && e !== null && d !== e && (c = a.offsetHeight / 1440, d = d.split(":"), e = e.split(":"), d = (parseInt(d[0]) * 60 + parseInt(d[1])) * c, c = (parseInt(e[0]) * 60 + parseInt(e[1])) * c - d, e = k("div", "working-hours"), a.appendChild(e), e.style.display = "block", e.style.top = d + "px", e.style.height = c + "px");
    }
  }
  function Tj(a, c) {
    a.getFullYear() === c.getFullYear() ? (a.getMonth() === c.getMonth() ? (Tb(Ua, a), ja(Ua, " - "), Tb(Ua, c, null, n.space), ja(Ua, b.monthNames[a.getMonth()])) : (qc(Ua, a, !1, !1), ja(Ua, " - "), qc(Ua, c, !1, !1)), ja(Ua, ", " + a.getFullYear())) : (qc(Ua, a, !1, !0), ja(Ua, " - "), qc(Ua, c, !1, !0));
  }
  function uc(a, c, d, e, f) {
    for (var g = new Date(a.from), h = Uc(a.repeatEveryExcludeDays), l = !1; g < d;) {
      e(g, f);
      var m = !(!r(a.repeatEnds) || $e(g, a.repeatEnds));
      if (h.indexOf(g.getDay()) === G.notFound && !m && g >= c && g <= d) {
        m = Ea("calendar-week-day-" + ca(g));
        var q = Ea("calendar-week-all-day-" + ca(g));
        m !== null && (Uj(m, q, a, g), l = !0);
      }
    }
    return l;
  }
  function Uj(a, c, d, e) {
    var f = !1, g = Uc(d.seriesIgnoreDates), h = new Date(e), l = Ad(h);
    e = new Date(e);
    if (ke(d) && g.indexOf(l) === G.notFound) {
      var m = k("div", "event");
      f = ca(h);
      m.setAttribute("event-type", L(d.type));
      m.setAttribute("event-id", d.id);
      m.setAttribute("event-is-all-day", d.isAllDay);
      a.appendChild(m);
      m.onclick = function(q) {
        Lj(q, m);
      };
      m.oncontextmenu = function(q) {
        gf(q, d, l);
      };
      d.isAllDay ? (c.appendChild(m), ci(m, d, h, c), di = !0) : b.manualEditingEnabled && b.dragAndDropForEventsEnabled && !nf(d) && (Z(d.from, d.to) && !d.isAllDay && (m.className += " resizable"), m.ondragstart = function(q) {
        var t = Ze(m);
        xg = m;
        yg = m.offsetTop;
        Wb = d;
        zg = t.top - q.pageY;
        Ag = h;
      }, m.ondragEnd = Vh, m.setAttribute("draggable", !0));
      hf(m, d);
      de(m, d, Xe(d, h));
      ee(m, d, e);
      Z(d.from, h) && (m.id = "week-day-" + d.id);
      A(b.events.onFullWeekEventRender, m, d) || (c = k("div", "title"), L(d.repeatEvery) > z.never && (g = k("div", "ib-refresh-medium ib-no-hover ib-no-active"), g.style.borderColor = m.style.color, c.appendChild(g)), c.innerHTML += rc(d.title), m.appendChild(c), d.isAllDay && !b.views.fullWeek.showAllDayEventDetails) || (c = k("div", "date"), m.appendChild(c), g = k("div", "duration"), m.appendChild(g), d.from.getDate() === d.to.getDate() ? d.isAllDay ? D(c, b.allDayText) : (D(c, fe(d.from, d.to)), 
      D(g, Ub(d.from, d.to))) : (Ye(c, d.from, d.to), D(g, Ub(d.from, d.to))), g.innerHTML === n.empty && m.removeChild(g), Fa(d.repeatEvery) && d.repeatEvery > z.never && (c = k("div", "repeats"), D(c, b.repeatsText.replace(":", n.empty) + n.space + vd(d.repeatEvery)), m.appendChild(c)), ab(d.location) && (c = k("div", "location"), D(c, d.location), m.appendChild(c)), ab(d.description) && (c = k("div", "description"), D(c, d.description), m.appendChild(c)));
      m.addEventListener("click", function(q) {
        jf(q, d);
      });
      d.isAllDay || Mj(a, a, h, m, d, !0);
      d.isAllDay || ei.push({eventDetails:d, eventElement:m, height:m.offsetHeight});
      mf.hasOwnProperty(f) || (mf[f] = []);
      of = of === 0 ? m.offsetTop : qa.min(of, m.offsetTop);
      mf[f].push(d);
      f = !0;
    }
    return f;
  }
  function Fc(a, c) {
    c = r(c) ? c : !1;
    var d = r(a) ? new Date(a) : new Date();
    var e = d;
    e = r(e) ? new Date(e) : new Date();
    e.getDay() > 0 ? e.setDate(e.getDate() - e.getDay()) : b.startOfWeekDay === za.monday && e.setDate(e.getDate() - 7);
    b.startOfWeekDay === za.monday ? e.setDate(e.getDate() + 1) : b.startOfWeekDay === za.saturday && e.setDate(e.getDate() - 1);
    a = new Date(e);
    e = new Date(e);
    a.setHours(0, 0, 0, 0);
    e.setDate(e.getDate() + 6);
    e.setHours(23, 59, 59, 99);
    e = [a, e];
    a = e[0];
    e = e[1];
    Yb = d;
    oe = null;
    oc = [];
    mf = {};
    di = !1;
    Fg = null;
    of = 0;
    Fd.style.display = "none";
    ei = [];
    Rj = a;
    kf(ia);
    qd();
    Ua.innerHTML = n.empty;
    if (!A(b.events.onFullWeekTitleRender, a, e)) {
      if (b.views.fullWeek.showWeekNumbersInTitles) {
        d = Ua;
        var f = b.weekText + n.space, g = new Date(a.getFullYear(), 0, 1), h = qa.ceil(((a - g) / 86400000 + g.getDay() + 1) / 7);
        g.getDay() > 4 && h--;
        ja(d, f + h + ": ");
      }
      b.reverseOrderDaysOfWeek ? Tj(e, a) : Tj(a, e);
    }
    Kh(Dd, !1);
    d = b.dayHeaderNames.length;
    f = {};
    for (g = new Date(a); g < e;) {
      f[ca(g)] = new Date(g), g.setDate(g.getDate() + 1);
    }
    lf.innerHTML = n.empty;
    me.innerHTML = n.empty;
    b.startOfWeekDay === za.saturday || b.startOfWeekDay === za.sunday ? (bi(b.startOfWeekDay, d, f), bi(0, b.startOfWeekDay, f)) : bi(0, d, f);
    b.reverseOrderDaysOfWeek && rd(lf);
    if (Dd !== null && b.views.fullWeek.showDatesInDayHeaders) {
      d = new Date(a);
      f = 0;
      for (g = Dd.children; d < e;) {
        h = ca(d), b.visibleDays.indexOf(h) > G.notFound && (g[f].innerHTML += n.space + d.getDate() + "/" + (d.getMonth() + 1), f++), d.setDate(d.getDate() + 1);
      }
      b.reverseOrderDaysOfWeek && rd(Dd);
    }
    d = Ab(Gd());
    f = d.length;
    for (g = 0; g < f; g++) {
      h = d[g];
      for (var l = Vc(h.from, h.to) + 1, m = new Date(h.from), q = !1, t = 0; t < l; t++) {
        if (m >= a && m <= e) {
          var C = Ea("calendar-week-day-" + ca(m)), F = Ea("calendar-week-all-day-" + ca(m));
          C !== null && Uj(C, F, h, m) && (q = !0);
        }
        cb(m);
      }
      q && oc.push(h);
      m = L(h.repeatEvery);
      l = !1;
      m > z.never && (m === z.everyDay ? l = uc(h, a, e, cb, 1) : m === z.everyWeek ? l = uc(h, a, e, Xb, 1) : m === z.every2Weeks ? l = uc(h, a, e, Xb, 2) : m === z.everyMonth ? l = uc(h, a, e, le, 1) : m === z.everyYear ? l = uc(h, a, e, Bd, 1) : m === z.custom && (m = L(h.repeatEveryCustomType), t = L(h.repeatEveryCustomValue), t > 0 && (m === O.daily ? l = uc(h, a, e, cb, t) : m === O.weekly ? l = uc(h, a, e, Xb, t) : m === O.monthly ? l = uc(h, a, e, le, t) : m === O.yearly && (l = uc(h, a, 
      e, Bd, t)))));
      l && !q && oc.push(h);
    }
    a = b.dayHeaderNames.length;
    for (e = 0; e < a; e++) {
      d = Ea("calendar-week-day-" + e), d !== null && Qj(d);
    }
    a = 0;
    if (di) {
      Fd.style.display = "block";
      e = me.children.length;
      for (d = 0; d < e; d++) {
        f = me.children[d].children;
        g = f.length;
        for (q = h = 0; q < g; q++) {
          h += f[q].offsetHeight + b.spacing;
        }
        a = qa.max(a, h);
      }
      Fd.style.height = a + b.spacing + "px";
    }
    c && (Fg !== null ? (a = a <= 0 ? b.spacing * 4 : a, Ed.scrollTop = Fg - a) : Ed.scrollTop = of);
    $a(Sj, oc.length > 0);
  }
  function tj() {
    Yb.setDate(Yb.getDate() - 7);
    Fc(Yb, !0);
  }
  function xj() {
    Xb(Yb);
    Fc(Yb, !0);
  }
  function Bj() {
    Yb = new Date();
    Fc(Yb, !0);
  }
  function vl() {
    Gg = Hg = null;
    var a = X !== null;
    a && (X.innerHTML = n.empty);
    a || (X = k("div", "title-bar"), Ob.appendChild(X));
    b.fullScreenModeEnabled && (X.ondblclick = bb);
    w && (X.onclick = function(c) {
      J(c);
      Ka();
    });
    !w && sd() && (x(X, "ib-hamburger", b.showMenuTooltipText, Sc), X.appendChild(k("div", "left-divider-line")));
    x(X, "ib-arrow-left-full", b.previousMonthTooltipText, bf);
    b.views.fullMonth.addYearButtons && x(X, "ib-rewind", b.previousYearTooltipText, sg);
    (w || b.views.fullMonth.showExtraTitleBarButtons) && x(X, "ib-pin", b.currentMonthTooltipText, ug);
    b.views.fullMonth.showExtraTitleBarButtons && (b.jumpToDateEnabled && x(X, "ib-arrow-right-full-line", b.jumpToDateTitle, function() {
      ge();
    }), X.appendChild(k("div", "left-divider-line-events")), x(X, "ib-refresh", b.refreshTooltipText, function() {
      Pa(!0, !0);
    }), y.enabled && (Gg = x(X, "ib-search", b.searchTooltipText, he)));
    w && (x(X, "ib-close", b.closeTooltipText, hd), X.appendChild(k("div", "right-divider-line")));
    b.views.fullMonth.showExtraTitleBarButtons && b.fullScreenModeEnabled && (Hg = x(X, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, bb), X.appendChild(k("div", "right-divider-line-full-screen-mode")));
    x(X, "ib-arrow-right-full", b.nextMonthTooltipText, cf);
    b.views.fullMonth.addYearButtons && x(X, "ib-forward", b.nextYearTooltipText, tg);
    b.views.fullMonth.showExtraTitleBarButtons && b.manualEditingEnabled && x(X, "ib-plus", b.addEventTooltipText, function() {
      Vj(B, new Date()) ? T(null) : T(null, new Date(B.getFullYear(), B.getMonth(), 1));
    });
    w || ((b.views.timeline.enabled || b.views.allEvents.enabled || b.views.fullYear.enabled || b.views.fullWeek.enabled || b.views.fullDay.enabled) && X.appendChild(k("div", "right-divider-line-views")), b.views.timeline.enabled && x(X, "ib-bar-graph", b.viewTimelineTooltipText, function() {
      Pb(null, !0);
    }), b.views.allEvents.enabled && x(X, "ib-eye", b.viewAllEventsTooltipText, function() {
      Ph(!0);
    }), b.views.fullYear.enabled && x(X, "ib-expand", b.viewFullYearTooltipText, function() {
      Gc(null, !0);
    }), b.views.fullWeek.enabled && x(X, "ib-hamburger-side", b.viewFullWeekTooltipText, function() {
      Fc(null, !0);
    }), b.views.fullDay.enabled && x(X, "ib-hourglass", b.viewFullDayTooltipText, function() {
      Za(null, !0);
    }));
    a = k("div", "title-container");
    X.appendChild(a);
    $l(a);
    am(a);
  }
  function xb() {
    w || tb === null || (b.views.fullMonth.pinUpViewImageUrls.length > 0 ? (tb.style.backgroundImage = "url('" + b.views.fullMonth.pinUpViewImageUrls[Wc] + "')", Wc++, Wc === b.views.fullMonth.pinUpViewImageUrls.length && (Wc = 0)) : b.views.fullMonth.pinUpViewImageCssClasses.length > 0 && (tb.className = "pin-up" + n.space + b.views.fullMonth.pinUpViewImageCssClasses[Wc], Wc++, Wc === b.views.fullMonth.pinUpViewImageCssClasses.length && (Wc = 0)), Wj());
  }
  function Wj() {
    if (!w && tb !== null && !A(b.events.onFullMonthPinUpRender, tb, B)) {
      var a = new Date();
      if (fi === null || !Z(fi, a)) {
        tb.innerHTML = n.empty;
        fi = a;
        var c = k("div", "pin-up-text"), d = k("div", "day"), e = k("div", "month"), f = k("div", "year");
        c.onclick = function() {
          T(null, a);
        };
        Va(c, b.addEventTooltipText);
        tb.appendChild(c);
        c.appendChild(d);
        c.appendChild(e);
        c.appendChild(f);
        ja(d, a.getDate());
        if (b.showDayNumberOrdinals && (c = Ig(a.getDate()), r(c))) {
          var g = k("sup");
          g.innerText = c;
          d.appendChild(g);
        }
        D(e, b.monthNames[a.getMonth()]);
        D(f, a.getFullYear());
      }
    }
  }
  function fj(a, c) {
    var d = r(a);
    a = d ? a : Ob;
    c = r(c) ? c : "calendar-day-";
    if (!d && pf.length > 0) {
      for (var e = pf.length, f = 0; f < e; f++) {
        a.removeChild(pf[f]);
      }
      pf = [];
    }
    for (e = 0; e < 6; e++) {
      f = k("div", "row-cells days");
      a.appendChild(f);
      d || pf.push(f);
      for (var g = 0; g < 7; g++) {
        var h = g;
        if (b.startOfWeekDay === za.saturday || b.startOfWeekDay === za.sunday) {
          h = b.startOfWeekDay + g, h >= 7 && (h -= 7);
        }
        if (b.visibleDays.indexOf(h) > G.notFound) {
          h = e * 7 + (g + 1);
          var l = k("div", Dg(b.views.fullMonth.allowEventScrolling));
          l.id = c + h;
          f.appendChild(l);
          b.views.fullMonth.allowEventScrolling && (l.className += " scrollY");
          b.views.fullMonth.minimumDayHeight > 0 && (l.style.height = b.views.fullMonth.minimumDayHeight + "px");
        }
      }
      b.reverseOrderDaysOfWeek && rd(f);
    }
  }
  function Dg(a) {
    a = r(a) ? a : !1;
    var c = "cell cell-" + b.visibleDays.length;
    a && (c += " custom-scroll-bars");
    return c;
  }
  function $l(a) {
    pe = k("span", "year-dropdown-button");
    pe.ondblclick = J;
    pe.onclick = bm;
    a.appendChild(pe);
    Nh = k("span");
    pe.appendChild(Nh);
    Jg = k("span", "ib-arrow-down-full-medium");
    pe.appendChild(Jg);
  }
  function am(a) {
    var c = new Date(b.minimumYear, 1, 1), d = null;
    Zb = k("div", b.views.fullMonth.showMonthButtonsInYearDropDownMenu ? "years-drop-down" : "years-drop-down-no-months");
    a.appendChild(Zb);
    if (b.views.fullMonth.showMonthButtonsInYearDropDownMenu) {
      for (a = 0; a < 12; a++) {
        a % 3 === 0 && (d = k("div", "months"), Zb.appendChild(d)), cm(d, a);
      }
    }
    qf = k("div", "contents custom-scroll-bars");
    for (Zb.appendChild(qf); !(dm(c.getFullYear()), Bd(c), c.getFullYear() > b.maximumYear);) {
    }
  }
  function cm(a, c) {
    var d = k("div", "month-name"), e = b.monthNamesAbbreviated[c];
    d.onclick = function(f) {
      J(f);
      B.getMonth() !== c && (B.setMonth(c), A(b.events.onSetDate, B), R(B), rg(), xb());
    };
    D(d, e);
    a.appendChild(d);
    Xc[c.toString()] = d;
  }
  function dm(a) {
    var c = k("div");
    c.className = "year";
    c.innerText = a.toString();
    c.id = "year-selected-" + a.toString();
    qf.appendChild(c);
    c.ondblclick = J;
    c.onclick = function(d) {
      J(d);
      B.getFullYear() !== a && (B.setFullYear(a), A(b.events.onSetDate, B), R(B), rg(), xb());
    };
  }
  function em() {
    var a = Zb.getElementsByClassName("year"), c = a.length;
    if (c >= 1) {
      for (var d = 0; d < c; d++) {
        a[d].className !== "year" && (a[d].className = "year");
      }
    }
    a = Ea("year-selected-" + B.getFullYear());
    a !== null && (a.className += " year-selected");
    if (!w) {
      var e = [];
      Db(function(f) {
        f = f.from.getFullYear();
        if (e.indexOf(f) === G.notFound) {
          var g = Ea("year-selected-" + f);
          g !== null && g.className.indexOf(" year-selected") === G.notFound && (g.className += " year-has-events");
          e.push(f);
        }
      });
    }
    return a;
  }
  function bm(a) {
    J(a);
    if (Zb.style.display !== "block") {
      Ka();
      Zb.style.display = "block";
      Jg.className = "ib-arrow-up-full-medium";
      for (var c in Xc) {
        Xc.hasOwnProperty(c.toString()) && (Xc[c.toString()].className = "month-name");
      }
      a = B.getMonth().toString();
      c = new Date();
      B.getFullYear() === c.getFullYear() && (c = c.getMonth().toString(), Xc.hasOwnProperty(c) && (Xc[c].className = "month-name-current-month"));
      Xc.hasOwnProperty(a) && (Xc[a].className = "month-name-selected");
      a = em();
      qf.scrollTop = a !== null ? a.offsetTop - qf.offsetTop - b.spacing : 0;
    } else {
      rg();
    }
  }
  function rg() {
    var a = !1;
    Kg() && (Jg.className = "ib-arrow-down-full-medium", Zb.style.display = "none", a = !0);
    return a;
  }
  function Kg() {
    return Zb !== null && Zb.style.display === "block";
  }
  function Lh(a, c, d, e, f, g) {
    c = Ea("calendar-day-" + c);
    if (c !== null) {
      var h = new Date(), l = a === h.getDate() && e === h.getFullYear() && d === h.getMonth();
      h = k("span");
      var m = new Date(e, d, a);
      f = f ? " day-muted" : n.empty;
      var q = !0;
      g = r(g) ? g : !1;
      c.innerHTML = n.empty;
      c.className = c.className.replace(" cell-today", n.empty).replace(" cell-selected", n.empty).replace(" cell-no-click", n.empty);
      w && l && (c.className += " cell-today");
      w && !l && Ic !== null && Z(m, Ic) && (c.className += " cell-selected");
      w ? (q = pj(m), q || (c.className += " cell-no-click", h.className = "no-click")) : h.className = n.empty;
      h.className += f;
      h.className += l && !w ? " today" : n.empty;
      h.innerText = a;
      a !== 1 || w || (h.className += " first-day");
      b.weekendDays.indexOf(m.getDay()) >= 0 && c.className.indexOf("weekend-day") === G.notFound && (c.className += " weekend-day");
      b.workingDays.indexOf(ca(m)) >= 0 && c.className.indexOf("working-day") === G.notFound && (c.className += " working-day");
      c.oncontextmenu = function(C) {
        Lg(C, m);
      };
      if (b.showDayNumberOrdinals && (l = Ig(a), r(l))) {
        var t = k("sup");
        t.innerText = l;
        h.appendChild(t);
      }
      c.appendChild(h);
      c.appendChild(k("span", "blank"));
      b.views.fullDay.enabled && (h = k("div", "ib-arrow-expand-left-right-icon"), c.appendChild(h), Va(h, b.expandDayTooltipText), h.onclick = function() {
        Za(m, !0);
      });
      g && b.views.fullMonth.showPreviousNextMonthNames && ja(c, b.monthNames[d], "month-name" + f, function() {
        a === 1 ? cf() : bf();
      }, !0, !0);
      fm(m, f, c);
      b.manualEditingEnabled && (c.ondblclick = function() {
        if (b.useTemplateWhenAddingNewEvent) {
          var C = yd(m, m);
          T(C);
          zd();
        } else {
          T(null, m);
        }
      }, Eg(c, e, d, a));
      w && (c.onclick = q ? function(C) {
        J(C);
        Kg() ? Ka() : (C = new Date(m), C.setHours(0, 0, 0, 0), hd(), Qh(m), A(b.events.onDatePickerDateChanged, C), Ic = C);
      } : J);
      b.views.fullMonth.useOnlyDotEvents && c.appendChild(k("div", "dots-separator"));
    }
  }
  function La() {
    for (var a = 0; a < 6; a++) {
      for (var c = 0; c < 7; c++) {
        var d = Ea("calendar-day-" + (a * 7 + (c + 1)));
        d !== null && ($h(d, "event"), $h(d, "plus-x-events"));
      }
    }
    Rh();
    qe = !1;
    kd = [];
    Hd = {};
    a = Ab(Gd());
    c = a.length;
    for (d = 0; d < c; d++) {
      var e = a[d], f = e;
      gi(f.from, f);
      if (f.from.getDate() !== f.to.getDate() || f.from.getMonth() !== f.to.getMonth() || f.from.getFullYear() !== f.to.getFullYear()) {
        var g = Vc(f.from, f.to);
        if (g > 0) {
          for (var h = new Date(f.from), l = 0; l < g; l++) {
            cb(h), hi(Ad(h), f.id), ii(h) !== null && gi(h, f);
          }
        }
      }
      ke(e) && kd.push(e);
      f = L(e.repeatEvery);
      f > z.never && (f === z.everyDay ? vc(e, cb, 1) : f === z.everyWeek ? vc(e, Xb, 1) : f === z.every2Weeks ? vc(e, Xb, 2) : f === z.everyMonth ? vc(e, le, 1) : f === z.everyYear ? vc(e, Bd, 1) : f === z.custom && (f = L(e.repeatEveryCustomType), g = L(e.repeatEveryCustomValue), g > 0 && (f === O.daily ? vc(e, cb, g) : f === O.weekly ? vc(e, Xb, g) : f === O.monthly ? vc(e, le, g) : f === O.yearly && vc(e, Bd, g))));
    }
    Xj !== qe && (Xj = qe, A(b.events.onBusyStateChange, qe));
    Gg !== null && $a(Gg, kd.length > 0);
    Sh();
  }
  function vc(a, c, d) {
    for (var e = new Date(a.from), f = Uc(a.repeatEveryExcludeDays), g = new Date(b.maximumYear, 11, 31); e < g;) {
      c(e, d);
      var h = !(!r(a.repeatEnds) || $e(e, a.repeatEnds));
      f.indexOf(e.getDay()) !== G.notFound || h || (hi(Ad(e), a.id), e < Mh && ii(e) !== null && gi(e, a));
    }
  }
  function gi(a, c) {
    var d = ii(a), e = Uc(c.seriesIgnoreDates), f = Ad(a), g = new Date(a);
    if (ke(c) && e.indexOf(f) === G.notFound && (hi(f, c.id), d !== null && (gm(a, c), !w))) {
      if (d.getElementsByClassName("event").length < b.views.fullMonth.maximumEventsPerDayDisplay || b.views.fullMonth.maximumEventsPerDayDisplay <= 0 || b.views.fullMonth.useOnlyDotEvents) {
        e = k("div", "event");
        e.setAttribute("event-type", L(c.type));
        e.setAttribute("event-id", c.id);
        e.setAttribute("event-is-all-day", c.isAllDay);
        if (b.views.fullMonth.useOnlyDotEvents) {
          e.className += " event-circle";
        } else {
          if (!A(b.events.onFullMonthEventRender, e, c)) {
            var h = c.title, l = L(c.repeatEvery);
            b.views.fullMonth.showTimesInEvents && !c.isAllDay && c.from.getDate() === c.to.getDate() && (h = fe(c.from, c.to) + ": " + h);
            l > z.never && (l = k("div", "ib-refresh-small ib-no-hover ib-no-active"), l.style.borderColor = e.style.color, e.appendChild(l));
            e.innerHTML += rc(h);
          }
        }
        d.appendChild(e);
        ci(e, c, a, d);
        hf(e, c);
        de(e, c, Xe(c, a), b.views.fullMonth.applyCssToEventsNotInCurrentMonth);
        ee(e, c, g);
        Z(c.from, a) && (e.id = "day-" + c.id);
        e.onmousemove = function(m) {
          Id !== null && Id.id === c.id ? J(m) : ji(m, c);
        };
        e.oncontextmenu = function(m) {
          gf(m, c, f);
        };
        e.addEventListener("click", function(m) {
          jf(m, c);
        });
      } else {
        hm(d, a);
      }
    }
  }
  function hm(a, c) {
    var d = a.getElementsByClassName("plus-x-events");
    d = d.length > 0 ? d[0] : null;
    if (d === null) {
      var e = new Date(c);
      d = k("div", "plus-x-events");
      d.setAttribute("events", "1");
      d.ondblclick = J;
      a.appendChild(d);
      if (b.views.fullMonth.applyCssToEventsNotInCurrentMonth && c.getMonth() !== B.getMonth() || c.getFullYear() !== B.getFullYear()) {
        d.className += " day-muted";
      }
      D(d, "+1 " + b.moreText);
      b.views.fullDay.enabled ? d.onclick = function() {
        Za(e, !0);
      } : d.className += n.space + "prevent-pointer-events";
    } else {
      a = parseInt(d.getAttribute("events")) + 1, d.setAttribute("events", a.toString()), D(d, "+" + a + n.space + b.moreText);
    }
  }
  function ii(a) {
    var c = new Date(B.getFullYear(), B.getMonth(), 1);
    var d = new Date(B);
    var e = new Date(B), f = null, g = 0;
    c = ca(c);
    d.setMonth(d.getMonth() + 1);
    e.setMonth(e.getMonth() - 1);
    a.getMonth() === d.getMonth() && a.getFullYear() === d.getFullYear() ? (d = c + gd(B.getFullYear(), B.getMonth()), g = Pe(a.getDate() + d)) : a.getMonth() === e.getMonth() && a.getFullYear() === e.getFullYear() ? g = Pe(c - Vc(a, B) + 1) : a.getMonth() === B.getMonth() && a.getFullYear() === B.getFullYear() && (d = c, g = Pe(a.getDate() + d));
    g > 0 && (f = Ea("calendar-day-" + g));
    return f;
  }
  function hi(a, c) {
    Hd.hasOwnProperty(a) || (Hd[a] = []);
    Hd[a].indexOf(c) === G.notFound && Hd[a].push(c);
  }
  function wl() {
    if (!w && b.views.fullYear.enabled) {
      var a = Ga !== null;
      a && (Ga.innerHTML = n.empty);
      a || (Ga = k("div", "full-year-view"), Ga.id = kc(), E.appendChild(Ga));
      a = k("div", "title-bar");
      Ga.appendChild(a);
      b.fullScreenModeEnabled && (a.ondblclick = bb);
      ki = k("div", "title");
      a.appendChild(ki);
      !w && sd() && (x(a, "ib-hamburger", b.showMenuTooltipText, Sc), a.appendChild(k("div", "left-divider-line")));
      x(a, "ib-arrow-left-full", b.previousYearTooltipText, uj);
      b.views.fullYear.showExtraTitleBarButtons && (x(a, "ib-pin", b.currentYearTooltipText, Cj), b.jumpToDateEnabled && x(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function() {
        ge();
      }), a.appendChild(k("div", "left-divider-line-events")), x(a, "ib-refresh", b.refreshTooltipText, function() {
        Pa(!0, !0);
      }));
      x(a, "ib-close", b.closeTooltipText, function() {
        Cd(Ga);
      });
      a.appendChild(k("div", "right-divider-line"));
      b.views.fullYear.showExtraTitleBarButtons && b.fullScreenModeEnabled && (li = x(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, bb), a.appendChild(k("div", "right-divider-line-full-screen-mode")));
      x(a, "ib-arrow-right-full", b.nextYearTooltipText, yj);
      b.views.fullYear.showExtraTitleBarButtons && b.manualEditingEnabled && x(a, "ib-plus", b.addEventTooltipText, function() {
        T(null, new Date(wa, 0, 1));
      });
      re = k("div", "contents custom-scroll-bars");
      Ga.appendChild(re);
    }
  }
  function im(a) {
    var c = new Date(wa, a, 1), d = function() {
      Z(B, c) || (R(c), xb());
      for (; Bb.length > 0;) {
        Fj(!1);
      }
      rf();
    }, e = k("div", "year-month");
    re.appendChild(e);
    var f = k("div", "title-bar-container");
    e.appendChild(f);
    var g = k("div", "title-bar");
    g.ondblclick = d;
    D(g, b.monthNames[a]);
    f.appendChild(g);
    x(g, "ib-arrow-expand-left-right", b.expandMonthTooltipText, d);
    b.manualEditingEnabled && (g.appendChild(k("div", "right-divider-line")), x(g, "ib-plus", b.addEventTooltipText, function() {
      T(null, c);
    }));
    d = k("div", "row-cells header-days");
    e.appendChild(d);
    Kh(d);
    d = a + 1 + "-month-";
    f = new Date(wa, a, 1);
    f = Pe(f.getDay() === 0 ? 7 : f.getDay());
    fj(e, d);
    f > 1 && jm(f, d, a);
    f = km(f, d, a);
    g = f[0];
    lm(f[1], d, a);
    g && (Mg = e.offsetTop);
  }
  function jm(a, c, d) {
    d = new Date(wa, d, 1);
    d.setMonth(d.getMonth() - 1);
    var e = gd(d.getFullYear(), d.getMonth());
    for (--a; a > 0;) {
      mm(c, a, d, e), a--, e--;
    }
  }
  function mm(a, c, d, e) {
    a = Ea(a + c);
    if (a !== null) {
      var f = new Date(d.getFullYear(), d.getMonth(), e);
      a.className += " cell-muted";
      b.views.fullDay.enabled && (a.onclick = function() {
        Za(f, !0);
      });
      a.oncontextmenu = function(g) {
        Lg(g, f);
      };
      mi(a, f);
      Tb(a, f);
    }
  }
  function km(a, c, d) {
    for (var e = 0, f = gd(wa, d), g = !1, h = 0; h < f; h++) {
      e = a + h, nm(c, d, h, e) && (g = !0);
    }
    return [g, e];
  }
  function nm(a, c, d, e) {
    a = Ea(a + e);
    e = !1;
    if (a !== null) {
      var f = new Date(wa, c, d + 1);
      b.views.fullDay.enabled && (a.onclick = function() {
        Za(f, !0);
      });
      a.oncontextmenu = function(g) {
        Lg(g, f);
      };
      e = mi(a, f, !0);
      Tb(a, f);
    }
    return e;
  }
  function lm(a, c, d) {
    if (a < 42) {
      d = new Date(wa, d, 1);
      var e = 1;
      d.setMonth(d.getMonth() + 1);
      for (a += 1; a < 43; a++) {
        om(c, d, a, e), e++;
      }
    }
  }
  function om(a, c, d, e) {
    a = Ea(a + d);
    if (a !== null) {
      var f = new Date(c.getFullYear(), c.getMonth(), e);
      a.className += " cell-muted";
      b.views.fullDay.enabled && (a.onclick = function() {
        Za(f, !0);
      });
      a.oncontextmenu = function(g) {
        Lg(g, f);
      };
      mi(a, f);
      Tb(a, f);
    }
  }
  function mi(a, c, d) {
    var e = Ad(c), f = !1;
    d = r(d) ? d : !1;
    b.weekendDays.indexOf(c.getDay()) >= 0 && (a.className += " weekend-day");
    b.workingDays.indexOf(ca(c)) >= 0 && (a.className += " working-day");
    if (Hd.hasOwnProperty(e)) {
      a.className += " has-events";
      e = Hd[e].length;
      var g = k("div", "events-count");
      g.innerText = e.toString();
      a.appendChild(g);
    }
    d && jc(c) && (a.className += " cell-today", f = !0);
    return f;
  }
  function Gc(a, c) {
    c = r(c) ? c : !1;
    wa = r(a) ? a : B.getFullYear();
    Mg = 0;
    ki.innerText = wa;
    c = (a = c) ? 0 : re.scrollTop;
    re.innerHTML = n.empty;
    for (var d = 0; d < 12; d++) {
      im(d);
    }
    re.scrollTop = a ? Mg > 0 ? Mg - b.spacing * 4 : 0 : c;
    kf(Ga);
  }
  function uj() {
    wa > b.minimumYear && (--wa, Gc(wa, !0));
  }
  function yj() {
    wa < b.maximumYear && (wa += 1, Gc(wa, !0));
  }
  function Cj() {
    wa = (new Date()).getFullYear();
    Gc(wa, !0);
  }
  function xl() {
    if (!w && b.views.allEvents.enabled) {
      var a = va !== null;
      a && (va.innerHTML = n.empty);
      a || (va = k("div", "all-events-view"), va.id = kc(), E.appendChild(va));
      a = k("div", "title-bar");
      va.appendChild(a);
      b.fullScreenModeEnabled && (a.ondblclick = bb);
      var c = k("div", "title");
      D(c, b.allEventsText);
      a.appendChild(c);
      x(a, "ib-close", b.closeTooltipText, function() {
        Rb = [];
        Cd(va);
      });
      b.views.allEvents.showExtraTitleBarButtons && (a.appendChild(k("div", "right-divider-line")), b.fullScreenModeEnabled && (ni = x(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, bb), a.appendChild(k("div", "right-divider-line-full-screen-mode"))), b.manualEditingEnabled && x(a, "ib-plus", b.addEventTooltipText, function() {
        T(null);
      }));
      !w && sd() && x(a, "ib-hamburger", b.showMenuTooltipText, Sc);
      b.views.allEvents.showExtraTitleBarButtons && (a.appendChild(k("div", "left-divider-line-events")), x(a, "ib-refresh", b.refreshTooltipText, function() {
        Pa(!0, !0);
      }), y.enabled && (Yj = x(a, "ib-search", b.searchTooltipText, he)));
      Jd = k("div", "contents custom-scroll-bars");
      va.appendChild(Jd);
    }
  }
  function pm(a) {
    if (ke(a)) {
      var c = qm(a.from), d = k("div", "event");
      c.appendChild(d);
      d.oncontextmenu = function(f) {
        gf(f, a);
      };
      ci(d, a, a.from, c);
      hf(d, a);
      de(d, a);
      ee(d, a);
      d.id = "month-" + a.id;
      d.setAttribute("event-type", L(a.type));
      d.setAttribute("event-id", a.id);
      d.setAttribute("event-is-all-day", a.isAllDay);
      if (!A(b.events.onAllEventsEventRender, d, a)) {
        c = k("div", "title");
        if (L(a.repeatEvery) > z.never) {
          var e = k("div", "ib-refresh-medium ib-no-hover ib-no-active");
          e.style.borderColor = d.style.color;
          c.appendChild(e);
        }
        c.innerHTML += rc(a.title);
        d.appendChild(c);
        c = k("div", "date");
        d.appendChild(c);
        e = k("div", "duration");
        d.appendChild(e);
        a.from.getDate() === a.to.getDate() ? a.isAllDay ? Tb(c, a.from, null, " - " + b.allDayText) : (Tb(c, a.from, null, " - " + fe(a.from, a.to)), D(e, Ub(a.from, a.to))) : (Ye(c, a.from, a.to), D(e, Ub(a.from, a.to)));
        e.innerHTML === n.empty && d.removeChild(e);
        Fa(a.repeatEvery) && a.repeatEvery > z.never && (c = k("div", "repeats"), D(c, b.repeatsText.replace(":", n.empty) + n.space + vd(a.repeatEvery)), d.appendChild(c));
        ab(a.location) && (c = k("div", "location"), D(c, a.location), d.appendChild(c));
        ab(a.description) && (c = k("div", "description"), D(c, a.description), d.appendChild(c));
      }
      d.addEventListener("click", function(f) {
        jf(f, a);
      });
      Rb.push(a);
    }
  }
  function qm(a) {
    var c = "month-" + a.getMonth() + "-" + a.getFullYear(), d = Ea(c);
    if (d === null) {
      var e = new Date(a), f = function() {
        Rb = [];
        Cd(va);
        R(e);
        xb();
      }, g = rm(a);
      g !== null && Jd.appendChild(g);
      g = k("div", "month");
      Jd.appendChild(g);
      var h = k("div", "header");
      D(h, b.monthNames[a.getMonth()] + n.space + a.getFullYear());
      h.ondblclick = f;
      g.appendChild(h);
      x(h, "ib-arrow-expand-left-right", b.expandMonthTooltipText, f);
      h.appendChild(k("div", "right-divider-line"));
      if (b.manualEditingEnabled) {
        var l = new Date(a.getFullYear(), a.getMonth(), 1);
        x(h, "ib-plus", b.addEventTooltipText, function() {
          if (b.useTemplateWhenAddingNewEvent) {
            var q = yd(l, l);
            T(q);
            zd();
          } else {
            T(null, l);
          }
        });
      }
      b.manualEditingEnabled && x(h, "ib-close", b.removeEventsTooltipText, function() {
        Zj(e, Vj);
      });
      f = function() {
        var q = m, t = d;
        t.style.display !== "none" ? (t.style.display = "none", q.className = "ib-square-hollow", S.visibleAllEventsMonths[c] = !1, Va(q, b.restoreTooltipText)) : (t.style.display = "block", q.className = "ib-minus", S.visibleAllEventsMonths[c] = !0, Va(q, b.minimizedTooltipText));
      };
      var m = x(h, "ib-minus", b.minimizedTooltipText, f);
      vg.push(f);
      d = k("div", "events");
      d.id = c;
      g.appendChild(d);
      S.visibleAllEventsMonths.hasOwnProperty(c) && !S.visibleAllEventsMonths[c] && (d.style.display = "none", m.className = "ib-square-hollow", Va(m, b.restoreTooltipText));
      Eg(d, a.getFullYear(), a.getMonth(), a.getDate());
    }
    return d;
  }
  function rm(a) {
    var c = null;
    if (oi.indexOf(a.getFullYear()) === G.notFound) {
      oi.push(a.getFullYear());
      c = k("div", "year-header");
      var d = k("span", "header-text");
      D(d, a.getFullYear() + ":");
      c.appendChild(d);
      b.views.fullYear.enabled ? d.onclick = function() {
        Gc(a.getFullYear(), !0);
      } : d.className += n.space + "prevent-pointer-events";
      c.appendChild(k("div", "line"));
    }
    return c;
  }
  function Ph(a) {
    a = r(a) ? a : !1;
    kf(va);
    Jd.innerHTML = n.empty;
    Rb = [];
    vg = [];
    oi = [];
    a && (Jd.scrollTop = 0);
    a = Ab(Gd());
    for (var c = a.length, d = 0; d < c; d++) {
      pm(a[d]);
    }
    $a(Yj, Rb.length > 0);
    Rb.length === 0 && sm(Jd, function() {
      T(null);
    });
  }
  function yl() {
    if (!w && b.views.timeline.enabled) {
      var a = na !== null;
      a && (na.innerHTML = n.empty);
      db === null && (db = b.views.timeline.defaultAxis);
      a || (na = k("div", "timeline-view"), na.id = kc(), E.appendChild(na));
      a = k("div", "title-bar");
      na.appendChild(a);
      b.fullScreenModeEnabled && (a.ondblclick = bb);
      Ng = k("div", "title");
      a.appendChild(Ng);
      x(a, "ib-close", b.closeTooltipText, function() {
        Jc = [];
        Cd(na);
      });
      a.appendChild(k("div", "right-divider-line"));
      b.views.timeline.showExtraTitleBarButtons && b.fullScreenModeEnabled && (pi = x(a, "ib-arrow-expand-left-right", b.enableFullScreenTooltipText, bb), a.appendChild(k("div", "right-divider-line-full-screen-mode")));
      x(a, "ib-arrow-right-full", b.nextYearTooltipText, zj);
      b.views.timeline.showExtraTitleBarButtons && b.manualEditingEnabled && x(a, "ib-plus", b.addEventTooltipText, function() {
        T(null, new Date(fa));
      });
      b.views.fullDay.enabled && (a.appendChild(k("div", "right-divider-line-views")), x(a, "ib-hourglass", b.viewFullDayTooltipText, function() {
        Za(fa, !0);
      }));
      !w && sd() && (x(a, "ib-hamburger", b.showMenuTooltipText, Sc), a.appendChild(k("div", "left-divider-line")));
      x(a, "ib-arrow-left-full", b.previousYearTooltipText, vj);
      b.views.timeline.showExtraTitleBarButtons && (ak = x(a, "ib-pin", b.currentYearTooltipText, Dj), b.jumpToDateEnabled && x(a, "ib-arrow-right-full-line", b.jumpToDateTitle, function() {
        ge();
      }), a.appendChild(k("div", "left-divider-line-events")), x(a, "ib-refresh", b.refreshTooltipText, function() {
        Pa(!0, !0);
      }), y.enabled && (bk = x(a, "ib-search", b.searchTooltipText, he)));
      Wa = k("div", "contents custom-scroll-bars");
      Wa.addEventListener("scroll", pc);
      na.appendChild(Wa);
    }
  }
  function tm(a, c) {
    var d = k("div", "event"), e = Ad(fa), f = new Date(fa);
    d.id = "timeline-day-" + c.id;
    d.setAttribute("event-type", L(c.type));
    d.setAttribute("event-id", c.id);
    d.setAttribute("event-is-all-day", c.isAllDay);
    a.appendChild(d);
    if (!A(b.events.onTimelineEventRender, d, c)) {
      if (L(c.repeatEvery) > z.never) {
        var g = k("div", "ib-refresh-medium ib-no-hover ib-no-active");
        g.style.borderColor = d.style.color;
        d.appendChild(g);
      }
      d.innerHTML += rc(c.title);
    }
    d.oncontextmenu = function(h) {
      gf(h, c, e);
    };
    d.addEventListener("click", function(h) {
      jf(h, c);
    });
    d.onmousemove = function(h) {
      Id !== null && Id.id === c.id ? J(h) : ji(h, c);
    };
    ee(d, c, f);
    hf(d, c);
    de(d, c, Xe(c, fa));
    d = um(a, fa, d, c);
    sf = sf === null ? d : qa.min(sf, d);
    tf = tf === null ? a.offsetTop : qa.min(tf, a.offsetTop);
  }
  function Pb(a, c) {
    a = r(a) ? new Date(a) : new Date();
    c = r(c) ? c : !1;
    var d = new Date(), e = ca(d), f = b.visibleDays.indexOf(e) > G.notFound, g = [];
    e = Wa.scrollLeft;
    var h = Wa.scrollTop;
    Ng.innerHTML = n.empty;
    Wa.innerHTML = n.empty;
    Jc = [];
    fa = a;
    Og = {};
    tf = sf = null;
    uf = [];
    Z(a, d) && !f && ck();
    Th(fa, g);
    $a(ak, f);
    vf = k("div", "timeline-header");
    Wa.appendChild(vf);
    a = k("div", "timeline-header-item");
    d = n.empty;
    db === "group" ? d = b.groupText : db === "organizerName" ? d = b.organizerNameText : db === "location" ? d = b.locationText : db === "organizerEmailAddress" ? d = b.organizerEmailAddressText : db === "url" ? d = b.urlText : db === "title" ? d = b.titleText : db === "description" && (d = b.descriptionText);
    a.innerHTML = d;
    vf.appendChild(a);
    x(a, "ib-arrow-left-full", b.previousPropertyTooltipText, vm);
    x(a, "ib-arrow-right-full", b.nextPropertyTooltipText, wm);
    a = b.views.timeline.minutesBetweenSections;
    d = new Date();
    f = new Date();
    var l = 0, m = 0;
    f.setHours(0, 0, 0, 0);
    for (60 % a !== 0 && (a = 30); Z(f, d);) {
      var q = k("div", "timeline-header-item");
      q.innerText = Eb(new Date(f));
      vf.appendChild(q);
      f = lb(f, a);
      q = k("div", "timeline-header-item");
      q.innerText = Eb(new Date(f));
      vf.appendChild(q);
      f = lb(f, a);
      q = k("div", "timeline-column");
      q.style.left = l + "px";
      Wa.appendChild(q);
      m === 0 && (m = Se(q, "border-right-width"), m = q.clientWidth + m);
      l += m;
      var t = k("div", "timeline-column");
      t.style.left = l + "px";
      Wa.appendChild(t);
      l += m;
      uf.push(q);
      uf.push(t);
    }
    kf(na);
    g = Ab(g);
    a = g.length;
    d = 0;
    if (a > 0) {
      for (f = 0; f < a; f++) {
        l = g[f];
        q = K(l[db], b.noneText);
        m = q.toLowerCase();
        l.isAllDay && (q = b.allDayText + ": " + q, m = m + "-" + l.id);
        if (Og.hasOwnProperty(m)) {
          q = Og[m];
        } else {
          t = k("div", "timeline-row");
          Wa.appendChild(t);
          var C = k("div", "timeline-row-item" + (d % 2 !== 0 ? " timeline-row-item-odd" : n.empty));
          D(C, q);
          t.appendChild(C);
          q = k("div", "timeline-row-items");
          t.appendChild(q);
          t = b.views.timeline.minutesBetweenSections;
          C = new Date();
          var F = new Date();
          F.setHours(0, 0, 0, 0);
          for (60 % t !== 0 && (t = 30); Z(F, C);) {
            var aa = k("div", "timeline-row-item-spacing");
            q.appendChild(aa);
            F = lb(F, t);
            aa = k("div", "timeline-row-item-spacing");
            q.appendChild(aa);
            F = lb(F, t);
          }
          Og[m] = q;
          d++;
        }
        tm(q, l);
        Jc.push(l);
      }
    }
    g = uf.length;
    for (d = a = 0; d < g; d++) {
      f = uf[d], a === 0 && (a = Wa.scrollHeight - f.offsetTop), f.style.height = a + "px";
    }
    A(b.events.onTimelineTitleRender, N) || qc(Ng, fa, !1, !0, !0);
    c ? (Wa.scrollLeft = sf, Wa.scrollTop = tf) : (Wa.scrollLeft = e, Wa.scrollTop = h);
    $a(bk, Jc.length > 0);
  }
  function vj() {
    Cg(fa);
    if (b.visibleDays.length < 7) {
      for (var a = ca(fa); b.visibleDays.indexOf(a) === G.notFound;) {
        Cg(fa), a = ca(fa);
      }
    }
    Pb(fa, !0);
  }
  function zj() {
    ck(!0);
  }
  function Dj() {
    fa = new Date();
    Pb(fa, !0);
  }
  function vm() {
    var a = se.indexOf(db);
    a--;
    a < 0 && (a = se.length - 1);
    db = se[a];
    Pb(fa);
  }
  function wm() {
    var a = se.indexOf(db);
    a++;
    a > se.length - 1 && (a = 0);
    db = se[a];
    Pb(fa);
  }
  function ck(a) {
    a = r(a) ? a : !1;
    cb(fa);
    if (b.visibleDays.length < 7) {
      for (var c = ca(fa); b.visibleDays.indexOf(c) === G.notFound;) {
        cb(fa), c = ca(fa);
      }
    }
    a && Pb(fa, !0);
  }
  function Ba(a, c, d, e, f) {
    f = r(f) ? f : !1;
    var g = k("div", "item");
    a.appendChild(g);
    g.appendChild(k("div", c));
    a = k("div", "menu-text");
    D(a, d);
    g.appendChild(a);
    f && (a.className += " bold");
    g.onclick = function() {
      e();
    };
    return g;
  }
  function eb(a) {
    var c = k("div", "separator");
    a.appendChild(c);
    return c;
  }
  function qg(a) {
    var c = !1;
    te(a) && (a.style.display = "none", c = !0);
    return c;
  }
  function te(a) {
    return a !== null && a.style.display === "block";
  }
  function dk() {
    return te(Ma) || te(da) || te(Sa) || te(ub) || te(Fb);
  }
  function Dl() {
    Ma !== null && (mb(I.body, Ma), Pg = qi = null);
    Ma = k("div", "calendar-context-menu");
    Ca.push(Ma);
    I.body.appendChild(Ma);
    b.manualEditingEnabled && Ba(Ma, "ib-plus-icon", b.addEventTitle + "...", function() {
      if (b.useTemplateWhenAddingNewEvent) {
        var a = yd(Kd, Kd);
        T(a);
        zd();
      } else {
        T(null, Kd);
      }
    }, !0);
    b.views.fullDay.enabled && (eb(Ma), Ba(Ma, "ib-arrow-expand-left-right-icon", b.expandDayTooltipText, function() {
      Za(Kd, !0);
    }));
    b.views.fullWeek.enabled && (eb(Ma), Ba(Ma, "ib-hamburger-side-icon", b.viewFullWeekText, function() {
      Fc(Kd, !0);
    }));
    b.manualEditingEnabled && (qi = eb(Ma), Pg = Ba(Ma, "ib-circle-icon", b.pasteText, function() {
      Xh(Kd, Vb);
    }));
  }
  function Lg(a, c) {
    w || Ma === null || (la(a) || sc(), Kd = new Date(c), Pg !== null && (c = oa.length > 0 ? "block" : "none", qi.style.display = c, Pg.style.display = c), Ka(), J(a), wf(a, Ma));
  }
  function El() {
    da !== null && (mb(I.body, da), Qg = Rg = xf = yf = zf = Af = Bf = Cf = Df = Ef = Ff = Gf = da = null);
    da = k("div", "calendar-context-menu");
    Ca.push(da);
    I.body.appendChild(da);
    b.manualEditingEnabled && (zf = Ba(da, "ib-edit-icon", b.editEventTitle + "...", function() {
      T(fb, null, null, ek);
    }, !0), Df = eb(da), Cf = Ba(da, "ib-pipe-icon", b.cutText, function() {
      ie();
      Vb = !0;
      fk(fb);
      ie(!1);
    }), Bf = eb(da), Af = Ba(da, "ib-circle-hollow-icon", b.copyText, function() {
      ie();
      Vb = !1;
      fk(fb);
      ie(!1);
    }), Ff = eb(da), Ef = Ba(da, "ib-equals-icon", b.duplicateText + "...", function() {
      T(fb);
      D(Yc, b.addEventTitle);
      Hf.value = b.addText;
      Sg.style.display = "none";
      ka = ue(ka);
      x(Yc, "ib-close", b.closeTooltipText, Zc, !0);
    }), yf = eb(da), xf = Ba(da, "ib-close-icon", b.removeEventText, function() {
      $b(I.body, Na);
      var a = function() {
        mb(I.body, Na);
      }, c = L(fb.repeatEvery) > z.never && If !== null;
      Jf(b.confirmEventRemoveTitle, b.confirmEventRemoveMessage, function() {
        a();
        r(fb.id) && (Tg.checked || If === null ? (u.removeEvent(fb.id, !0), Xa(b.eventRemovedText.replace("{0}", fb.title))) : (ya(fb.seriesIgnoreDates) ? fb.seriesIgnoreDates.push(If) : fb.seriesIgnoreDates = [If], La()), ra());
      }, a, c);
    }), Gf = eb(da));
    ri = Ba(da, "ib-arrow-top-right-icon", b.openUrlText, function() {
      si(fb.url);
    });
    b.exportEventsEnabled && (Rg = eb(da), Qg = Ba(da, "ib-arrow-down-full-line-icon", b.exportEventsTooltipText + "...", function() {
      jd(Ha);
    }));
    b.exportEventsEnabled && Kf.share && (eb(da), Ba(da, "ib-arrow-up-full-line-share-icon", b.shareText + "...", function() {
      var a = gk(Ha.length > 0 ? Ha : [fb]), c = {type:"text/plain"};
      a = new Blob([a], c);
      c = {files:[new File([a], hk("txt", b.shareStartFilename), c)]};
      Kf.canShare(c) && Kf.share(c);
    }));
  }
  function gf(a, c, d) {
    if (da !== null) {
      var e = K(c.url), f = nf(c);
      la(a) || sc();
      fb = c;
      ek = new Date(d);
      If = r(d) ? d : null;
      Ha.length > 1 ? (b.manualEditingEnabled && (zf.style.display = "none", Df.style.display = "none", Cf.style.display = "block", Bf.style.display = "block", Af.style.display = "block", Ff.style.display = "none", Ef.style.display = "none", yf.style.display = "none", xf.style.display = "none"), Gf.style.display = "none", ri.style.display = "none", b.exportEventsEnabled && (Rg.style.display = "block", Qg.style.display = "block")) : (f ? b.manualEditingEnabled && (zf.style.display = "block", Df.style.display = 
      "none", Cf.style.display = "none", Bf.style.display = "none", Af.style.display = "none", Ff.style.display = "none", Ef.style.display = "none", yf.style.display = "block", xf.style.display = "block", Gf.style.display = e !== n.empty ? "block" : "none") : b.manualEditingEnabled && (zf.style.display = "block", Df.style.display = "block", Cf.style.display = "block", Bf.style.display = "block", Af.style.display = "block", Ff.style.display = "block", Ef.style.display = "block", yf.style.display = 
      "block", xf.style.display = "block", Gf.style.display = e !== n.empty ? "block" : "none"), ri.style.display = e !== n.empty ? "block" : "none", b.exportEventsEnabled && (Rg.style.display = "none", Qg.style.display = "none"));
      if (e !== n.empty || da.childElementCount > 1) {
        Ka(), J(a), wf(a, da);
      }
    }
  }
  function Fl() {
    Sa !== null && (mb(I.body, Sa), Ug = ti = ui = vi = Sa = null);
    b.manualEditingEnabled && (Sa = k("div", "calendar-context-menu"), Ca.push(Sa), I.body.appendChild(Sa), Ba(Sa, "ib-plus-icon", b.addEventTitle + "...", function() {
      if (b.useTemplateWhenAddingNewEvent) {
        var a = yd(ve, ve, ef, ef);
        T(a);
        zd();
      } else {
        T(null, ve, ef);
      }
    }, !0), vi = eb(Sa), ui = Ba(Sa, "ib-close-icon", b.removeEventsTooltipText, function() {
      Zj(ve, Z);
    }), ti = eb(Sa), Ug = Ba(Sa, "ib-circle-icon", b.pasteText, function() {
      Xh(ve, Vb);
    }));
  }
  function Ij(a, c, d) {
    Sa !== null && (la(a) || sc(), ve = c, Ug !== null && (c = oa.length > 0 ? "block" : "none", ti.style.display = c, Ug.style.display = c), d = ya(d) && d.length > 0 ? "block" : "none", vi.style.display = d, ui.style.display = d, Ka(), J(a), wf(a, Sa));
  }
  function Gl() {
    ub === null && (ub = k("div", "calendar-context-menu"), Ca.push(ub), I.body.appendChild(ub), ik = Ba(ub, "ib-close-icon", b.hideDayText, function() {
      b.visibleDays.splice(b.visibleDays.indexOf(jk), 1);
      sb = !1;
      A(b.events.onOptionsUpdated, b);
      R(B, !0, !0);
    }, !0), kk = eb(ub), lk = Ba(ub, "ib-rhombus-hollow-icon", b.showOnlyWorkingDaysText, function() {
      b.workingDays.length >= 1 && (b.visibleDays = [].slice.call(b.workingDays), sb = !1, A(b.events.onOptionsUpdated, b), R(B, !0, !0));
    }), mk = eb(ub), Ba(ub, "ib-octagon-hollow-icon", b.visibleDaysText + "...", function() {
      Sc(!0);
    }));
  }
  function Yi() {
    Na !== null || w || (Na = k("div", "disabled-background"));
  }
  function Zi() {
    if (!w) {
      gb === null && (gb = k("div", "calendar-dialog event-editor"), Ca.push(gb), I.body.appendChild(gb));
      gb.innerHTML = n.empty;
      var a = k("div", "view");
      gb.appendChild(a);
      Vg = k("div", "disabled-area");
      a.appendChild(Vg);
      Yc = k("div", "title-bar");
      a.appendChild(Yc);
      Ld(Yc, gb, null);
      var c = k("div", "contents");
      a.appendChild(c);
      a = nk(c);
      we(a, b.eventText, function(d) {
        xe(d, ac, gb);
      }, !0);
      we(a, b.typeText.replace(":", n.empty), function(d) {
        xe(d, Wg, gb);
      });
      we(a, b.repeatsText.replace(":", n.empty), function(d) {
        xe(d, Xg, gb);
      });
      we(a, b.optionalText, function(d) {
        xe(d, $c, gb);
      });
      ac = ye(c, !0, !1);
      Wg = ye(c, !1, !1);
      Xg = ye(c, !1, !1);
      $c = ye(c, !1, !1);
      xm();
      ym();
      zm();
      a = k("div", "buttons-container");
      c.appendChild(a);
      Sg = Ia(a, b.removeEventText, "remove", Am);
      Hf = Ia(a, b.addText, "add-update", ok);
      Ia(a, b.cancelText, "cancel", Zc);
    }
  }
  function xm() {
    ua(ac, b.titleText);
    var a = k("div", "input-title-container");
    ac.appendChild(a);
    Gb = k("input", null, "text");
    a.appendChild(Gb);
    Gb.onkeydown = function(d) {
      d.keyCode === U.enter && ok();
    };
    b.maximumEventTitleLength > 0 && (Gb.maxLength = b.maximumEventTitleLength);
    var c = function() {
      pk(null);
    };
    b.eventColorsEditingEnabled && (wi = Ia(a, "...", "select-colors", Bm, b.selectColorsText));
    ua(ac, b.fromText.replace(":", n.empty) + "/" + b.toText);
    a = k("div", "split");
    ac.appendChild(a);
    bc = k("input");
    bc.onchange = c;
    a.appendChild(bc);
    mc(bc, "date");
    cc = k("input");
    a.appendChild(cc);
    mc(cc, "time");
    a = k("div", "split");
    ac.appendChild(a);
    nb = k("input");
    nb.onchange = c;
    a.appendChild(nb);
    mc(nb, "date");
    dc = k("input");
    a.appendChild(dc);
    mc(dc, "time");
    ze = M(ac, b.isAllDayText, c)[0];
    Lf = M(ac, b.showAlertsText)[0];
    Mf = M(ac, b.showAsBusyText)[0];
  }
  function ym() {
    var a = k("div", "radio-buttons-container");
    Xg.appendChild(a);
    wc = ma(a, b.repeatsNever, "RepeatType", ad);
    Nf = ma(a, b.repeatsEveryDayText, "RepeatType", ad);
    Of = ma(a, b.repeatsEveryWeekText, "RepeatType", ad);
    Pf = ma(a, b.repeatsEvery2WeeksText, "RepeatType", ad);
    Qf = ma(a, b.repeatsEveryMonthText, "RepeatType", ad);
    Rf = ma(a, b.repeatsEveryYearText, "RepeatType", ad);
    ec = ma(a, b.repeatsCustomText, "RepeatType", ad);
    Yg = Ia(a, "...", "repeat-options", Cm, b.repeatOptionsTitle);
    a = k("div", "split split-margin");
    Xg.appendChild(a);
    bd = k("input", null, "number");
    bd.setAttribute("min", "1");
    a.appendChild(bd);
    var c = k("div", "radio-buttons-container split-contents");
    a.appendChild(c);
    Md = ma(c, b.dailyText, "RepeatCustomType");
    Sf = ma(c, b.weeklyText, "RepeatCustomType");
    Tf = ma(c, b.monthlyText, "RepeatCustomType");
    Uf = ma(c, b.yearlyText, "RepeatCustomType");
  }
  function zm() {
    var a = k("div", "split");
    $c.appendChild(a);
    ua(a, b.alertOffsetText);
    ua(a, b.groupText);
    a = k("div", "split");
    $c.appendChild(a);
    Nd = k("input", null, "number");
    Nd.setAttribute("min", "0");
    a.appendChild(Nd);
    Od = k("input", null, "text");
    a.appendChild(Od);
    b.maximumEventGroupLength > 0 && (Od.maxLength = b.maximumEventGroupLength);
    ua($c, b.descriptionText);
    Pd = k("textarea", "custom-scroll-bars");
    $c.appendChild(Pd);
    b.maximumEventDescriptionLength > 0 && (Pd.maxLength = b.maximumEventDescriptionLength);
    a = k("div", "split");
    $c.appendChild(a);
    ua(a, b.urlText);
    ua(a, b.locationText);
    a = k("div", "split");
    $c.appendChild(a);
    Ae = k("input", null, "url");
    a.appendChild(Ae);
    Qd = k("input", null, "text");
    a.appendChild(Qd);
    b.maximumEventLocationLength > 0 && (Qd.maxLength = b.maximumEventLocationLength);
  }
  function ad() {
    Yg.disabled = wc.checked;
    Uf.disabled = !ec.checked;
    Md.disabled = !ec.checked;
    Sf.disabled = !ec.checked;
    Tf.disabled = !ec.checked;
    bd.disabled = !ec.checked;
  }
  function pk(a) {
    a = r(a) ? a : ka;
    var c = !1;
    (a = r(a) && ob(a.locked) ? a.locked : !1) ? c = !0 : ze.checked && (nb.value = bc.value, cc.value = "00:00", dc.value = "23:59", c = !0);
    nb.disabled = c;
    cc.disabled = c;
    dc.disabled = c;
    var d = Be(bc), e = Be(nb);
    qk(nb, d);
    qk(Rd, e);
    d > e && Hb(d, nb);
    a || (e > d || e < d ? (c = !0, wc.checked = !0) : c = !1);
    wc.disabled = c;
    Nf.disabled = c;
    Of.disabled = c;
    Pf.disabled = c;
    Qf.disabled = c;
    Rf.disabled = c;
    ec.disabled = c;
    Yg.disabled = c;
    bd.disabled = c;
    Md.disabled = c;
    Sf.disabled = c;
    Tf.disabled = c;
    Uf.disabled = c;
    a || ad();
  }
  function T(a, c, d, e) {
    if (Yh(b.events.onBeforeEventAddEdit)) {
      A(b.events.onBeforeEventAddEdit, a);
    } else {
      $b(I.body, Na);
      var f = gb, g = void 0;
      g = r(g) ? g : 0;
      f = f.getElementsByClassName("tab");
      f.length > 0 && f[g].click();
      Wg.innerHTML = n.empty;
      g = k("div", "radio-buttons-container");
      Wg.appendChild(g);
      for (var h in P) {
        P.hasOwnProperty(h) && (P[h].eventEditorInput = ma(g, P[h].text, "Type"));
      }
      r(a) ? (D(Yc, b.editEventTitle), rk(a.type), Hf.value = b.updateText, Sg.style.display = "inline-block", ka = a, cc.value = Eb(a.from, !1), dc.value = Eb(a.to, !1), ze.checked = xi(a.isAllDay), Lf.checked = xi(a.showAlerts, !0), Mf.checked = xi(a.showAsBusy, !0), Gb.value = K(a.title), Pd.value = K(a.description), Qd.value = K(a.location), Od.value = K(a.group), Ae.value = K(a.url), Ce.value = K(a.color, b.defaultEventBackgroundColor), De.value = K(a.colorText, b.defaultEventTextColor), Ee.value = 
      K(a.colorBorder, b.defaultEventBorderColor), bd.value = L(a.repeatEveryCustomValue, 1), Nd.value = L(a.alertOffset, 0), Hb(a.from, bc), Hb(a.to, nb), d = L(a.repeatEvery), d === z.never ? wc.checked = !0 : d === z.everyDay ? Nf.checked = !0 : d === z.everyWeek ? Of.checked = !0 : d === z.every2Weeks ? Pf.checked = !0 : d === z.everyMonth ? Qf.checked = !0 : d === z.everyYear ? Rf.checked = !0 : d === z.custom && (ec.checked = !0), c = L(a.repeatEveryCustomType), c === O.daily ? Md.checked = 
      !0 : c === O.weekly ? Sf.checked = !0 : c === O.monthly ? Tf.checked = !0 : c === O.yearly && (Uf.checked = !0), c = Uc(a.repeatEveryExcludeDays), Zg.checked = c.indexOf(1) > G.notFound, $g.checked = c.indexOf(2) > G.notFound, ah.checked = c.indexOf(3) > G.notFound, bh.checked = c.indexOf(4) > G.notFound, ch.checked = c.indexOf(5) > G.notFound, dh.checked = c.indexOf(6) > G.notFound, eh.checked = c.indexOf(0) > G.notFound, Hb(a.repeatEnds, Rd), yi = d > z.never && r(e) && !Z(a.from, e), Vf = 
      e) : (e = new Date(), c = r(c) ? c : e, jc(c) && (c.setHours(e.getHours()), c.setMinutes(e.getMinutes())), e = lb(c, b.defaultEventDuration), D(Yc, b.addEventTitle), rk(), Hf.value = b.addText, Sg.style.display = "none", ka = {}, ze.checked = !1, Lf.checked = !0, Mf.checked = !0, Gb.value = n.empty, Pd.value = n.empty, Qd.value = n.empty, Od.value = n.empty, Ae.value = n.empty, Ce.value = b.defaultEventBackgroundColor, De.value = b.defaultEventTextColor, Ee.value = b.defaultEventBorderColor, 
      wc.checked = !0, Zg.checked = !1, $g.checked = !1, ah.checked = !1, bh.checked = !1, ch.checked = !1, dh.checked = !1, eh.checked = !1, Rd.value = null, bd.value = "1", Md.checked = !0, Nd.value = 0, ya(d) && (c.setHours(d[0]), c.setMinutes(d[1]), e.setHours(d[0]), e.setMinutes(d[1]), e = lb(e, b.defaultEventDuration)), cc.value = Eb(c, !1), dc.value = Eb(e, !1), Hb(c, bc), Hb(e, nb), yi = !1, Vf = null);
      x(Yc, "ib-close", b.closeTooltipText, Zc, !0);
      a = nf(a);
      for (var l in P) {
        P.hasOwnProperty(l) && r(P[l].eventEditorInput) && (P[l].eventEditorInput.disabled = a);
      }
      Hf.disabled = a;
      bc.disabled = a;
      nb.disabled = a;
      cc.disabled = a;
      dc.disabled = a;
      ze.disabled = a;
      Lf.disabled = a;
      Mf.disabled = a;
      Gb.disabled = a;
      Pd.disabled = a;
      Qd.disabled = a;
      Od.disabled = a;
      Ae.disabled = a;
      wc.disabled = a;
      Nf.disabled = a;
      Of.disabled = a;
      Pf.disabled = a;
      Qf.disabled = a;
      Rf.disabled = a;
      ec.disabled = a;
      Yg.disabled = a;
      Nd.disabled = a;
      wi !== null && (wi.disabled = a);
      pk();
      kb.push(Zc);
      gb.style.display = "block";
      Gb.focus();
    }
  }
  function zd() {
    Gb.focus();
    Gb.select();
  }
  function ok() {
    var a = cc.value.split(":"), c = dc.value.split(":"), d = Sd(Gb.value), e = Sd(Ae.value);
    if (a.length < 2) {
      Wf(b.fromTimeErrorMessage);
    } else if (c.length < 2) {
      Wf(b.toTimeErrorMessage);
    } else if (d === n.empty) {
      Wf(b.titleErrorMessage);
    } else if (e.length > 0 && !sk(e)) {
      Wf(b.urlErrorMessage);
    } else {
      var f = Be(bc), g = Be(nb), h = Sd(Pd.value), l = Sd(Qd.value), m = Sd(Od.value), q = Be(Rd, null), t = parseInt(bd.value), C = Dm(), F = parseInt(Nd.value);
      isNaN(t) && (t = 0, wc.checked = !0, Md.checked = !0);
      isNaN(F) && (F = 0);
      if (g < f) {
        Wf(b.toSmallerThanFromErrorMessage);
      } else {
        var aa = function(pb, V, Ja, Fe, Oa) {
          Oa = r(Oa) ? Oa : !1;
          fh(V, cc.value);
          fh(Ja, dc.value);
          Oa ? (ka.from = V, ka.to = Ja, ka.repeatEnds = Fe) : (Oa = r(pb), V = {from:V, to:Ja, title:d, description:h, location:l, group:m, isAllDay:ze.checked, showAlerts:Lf.checked, showAsBusy:Mf.checked, color:ka.color, colorText:ka.colorText, colorBorder:ka.colorBorder, repeatEveryExcludeDays:ka.repeatEveryExcludeDays, repeatEnds:Fe, url:e, repeatEveryCustomValue:t, type:C, customTags:ka.customTags, alertOffset:F}, wc.checked ? V.repeatEvery = z.never : Nf.checked ? V.repeatEvery = z.everyDay : 
          Of.checked ? V.repeatEvery = z.everyWeek : Pf.checked ? V.repeatEvery = z.every2Weeks : Qf.checked ? V.repeatEvery = z.everyMonth : Rf.checked ? V.repeatEvery = z.everyYear : ec.checked && (V.repeatEvery = z.custom), Md.checked ? V.repeatEveryCustomType = O.daily : Sf.checked ? V.repeatEveryCustomType = O.weekly : Tf.checked ? V.repeatEveryCustomType = O.monthly : Uf.checked && (V.repeatEveryCustomType = O.yearly), Oa ? V.id = pb : (V.organizerName = b.organizerName, V.organizerEmailAddress = 
          b.organizerEmailAddress), Oa ? (u.updateEvent(pb, V, !1), Xa(b.eventUpdatedText.replace("{0}", ka.title))) : (u.addEvent(V, !1), Xa(b.eventAddedText.replace("{0}", V.title))), b.isWidget ? R(B) : (La(), ra()));
        };
        yi ? (Xf(), Jf(b.confirmEventUpdateTitle, b.confirmEventUpdateMessage, function() {
          var pb = new Date(Vf), V = new Date(Vf), Ja = new Date(Vf);
          Td();
          cb(Ja, -1);
          aa(ka.id, f, g, Ja, !0);
          aa(null, pb, V, q);
          Zc();
        }, function() {
          Td();
          aa(ka.id, f, g, q);
          Zc();
        }, !1, !0, b.forwardText, b.seriesText)) : (aa(ka.id, f, g, q), Zc());
      }
    }
  }
  function Zc(a) {
    Ge(a);
    mb(I.body, Na);
    gb.style.display = "none";
  }
  function Am() {
    Xf();
    Jf(b.confirmEventRemoveTitle, b.confirmEventRemoveMessage, function() {
      Td();
      Zc();
      r(ka.id) && (u.removeEvent(ka.id, !0), b.isWidget ? R(B) : ra(), Xa(b.eventRemovedText.replace("{0}", ka.title)));
    }, function() {
      Td();
    });
  }
  function ra() {
    jb(ba) && Za(N);
    jb(ia) && Fc(Yb);
    jb(Ga) && Gc(wa);
    jb(va) && Ph();
    jb(na) && Pb(fa);
  }
  function yd(a, c, d, e) {
    d = r(d) ? d : "09:00";
    e = r(e) ? d : "09:00";
    fh(a, d);
    fh(c, e);
    c = lb(c, b.defaultEventDuration);
    a = {from:a, to:c, title:b.newEventDefaultTitle, description:n.empty, location:n.empty, group:n.empty, isAllDay:!1, showAlerts:!0, showAsBusy:!0, color:b.defaultEventBackgroundColor, colorText:b.defaultEventTextColor, colorBorder:b.defaultEventBorderColor, repeatEveryExcludeDays:[], repeatEnds:null, url:n.empty, repeatEveryCustomValue:n.empty, repeatEvery:z.never, repeatEveryCustomType:O.daily, organizerName:n.empty, organizerEmailAddress:n.empty, type:0, locked:!1, customTags:null, alertOffset:0};
    u.addEvent(a, !1);
    Xa(b.eventAddedText.replace("{0}", a.title));
    La();
    ra();
    qb();
    return a;
  }
  function nf(a) {
    return r(a) && ob(a.locked) ? a.locked : !1;
  }
  function Wf(a) {
    Jf(b.errorText, a, Td, null, !1, !1);
    Xf();
  }
  function Xf() {
    Vg.style.display = "block";
  }
  function Td() {
    Vg.style.display = "none";
  }
  function $i() {
    if (!w && xc === null) {
      xc = k("div", "calendar-dialog event-editor-colors");
      Ca.push(xc);
      I.body.appendChild(xc);
      var a = k("div", "title-bar");
      D(a, b.selectColorsText);
      xc.appendChild(a);
      Ld(a, xc, null);
      x(a, "ib-close", b.closeTooltipText, gh, !0);
      a = k("div", "contents");
      xc.appendChild(a);
      var c = k("div", "section");
      a.appendChild(c);
      ua(c, b.backgroundColorText, "text-header");
      Ce = k("input");
      c.appendChild(Ce);
      mc(Ce, "color");
      c = k("div", "section");
      a.appendChild(c);
      ua(c, b.textColorText, "text-header");
      De = k("input");
      c.appendChild(De);
      mc(De, "color");
      c = k("div", "section");
      a.appendChild(c);
      ua(c, b.borderColorText, "text-header");
      Ee = k("input");
      c.appendChild(Ee);
      mc(Ee, "color");
      c = k("div", "buttons-container");
      a.appendChild(c);
      Ia(c, b.updateText, "update", Em);
      Ia(c, b.cancelText, "cancel", gh);
    }
  }
  function Em() {
    gh();
    ka.color = Ce.value;
    ka.colorText = De.value;
    ka.colorBorder = Ee.value;
  }
  function gh(a) {
    Ge(a);
    Td();
    xc.style.display = "none";
  }
  function Bm() {
    kb.push(gh);
    xc.style.display = "block";
    Xf();
  }
  function aj() {
    if (!w && yc === null) {
      yc = k("div", "calendar-dialog event-editor-repeat-options");
      Ca.push(yc);
      I.body.appendChild(yc);
      var a = k("div", "title-bar");
      D(a, b.repeatOptionsTitle);
      yc.appendChild(a);
      Ld(a, yc, null);
      x(a, "ib-close", b.closeTooltipText, hh, !0);
      a = k("div", "contents");
      yc.appendChild(a);
      var c = k("div", "section");
      a.appendChild(c);
      ua(c, b.daysToExcludeText, "text-header");
      Zg = M(c, b.dayNames[0])[0];
      $g = M(c, b.dayNames[1])[0];
      ah = M(c, b.dayNames[2])[0];
      bh = M(c, b.dayNames[3])[0];
      ch = M(c, b.dayNames[4])[0];
      dh = M(c, b.dayNames[5])[0];
      eh = M(c, b.dayNames[6])[0];
      c = k("div", "section");
      a.appendChild(c);
      ua(c, b.repeatEndsText, "text-header");
      Rd = k("input");
      c.appendChild(Rd);
      mc(Rd, "date");
      c = k("div", "buttons-container");
      a.appendChild(c);
      Ia(c, b.updateText, "update", Fm);
      Ia(c, b.cancelText, "cancel", hh);
    }
  }
  function Fm() {
    hh();
    var a = [];
    Zg.checked && a.push(1);
    $g.checked && a.push(2);
    ah.checked && a.push(3);
    bh.checked && a.push(4);
    ch.checked && a.push(5);
    dh.checked && a.push(6);
    eh.checked && a.push(0);
    ka.repeatEveryExcludeDays = a;
  }
  function hh(a) {
    Ge(a);
    Td();
    yc.style.display = "none";
  }
  function Cm() {
    kb.push(hh);
    yc.style.display = "block";
    Xf();
  }
  function bj() {
    if (!w && cd === null) {
      cd = k("div", "calendar-dialog message");
      Ca.push(cd);
      I.body.appendChild(cd);
      zi = k("div", "title-bar");
      cd.appendChild(zi);
      var a = k("div", "contents");
      cd.appendChild(a);
      Ai = k("div", "text");
      a.appendChild(Ai);
      var c = M(a, b.removeAllEventsInSeriesText);
      Tg = c[0];
      Bi = c[1];
      Yf = k("div", "buttons-container");
      a.appendChild(Yf);
    }
  }
  function Jf(a, c, d, e, f, g, h, l) {
    f = r(f) ? f : !1;
    g = r(g) ? g : !0;
    var m = r(h) ? h : b.yesText, q = r(l) ? l : b.noText;
    Yf.innerHTML = n.empty;
    var t = k("input", "yes-ok", "button");
    t.value = m;
    Yf.appendChild(t);
    m = k("input", "no", "button");
    m.value = q;
    Yf.appendChild(m);
    kb.push(!1);
    cd.style.display = "block";
    D(zi, a);
    D(Ai, c);
    t.onclick = tk;
    t.addEventListener("click", d);
    m.onclick = tk;
    dd(e) && m.addEventListener("click", e);
    r(h) || r(l) || (g ? (m.style.display = "inline-block", t.value = b.yesText) : (m.style.display = "none", t.value = b.okText));
    f ? (Bi.style.display = "block", Tg.checked = !1) : (Bi.style.display = "none", Tg.checked = !0);
  }
  function tk() {
    kb.pop();
    cd.style.display = "none";
  }
  function zl() {
    if (!w && zc === null) {
      zc = k("div", "calendar-dialog export-events");
      Ca.push(zc);
      I.body.appendChild(zc);
      var a = k("div", "title-bar");
      D(a, b.exportEventsTitle);
      zc.appendChild(a);
      Ld(a, zc, null);
      x(a, "ib-close", b.closeTooltipText, ih, !0);
      a = k("div", "contents");
      zc.appendChild(a);
      Ya = k("input", null, "text");
      Ya.placeholder = b.exportFilenamePlaceholderText;
      a.appendChild(Ya);
      Ya.onkeydown = function(e) {
        e.keyCode === U.enter && uk();
      };
      Ib = M(a, b.copyToClipboardOnlyText, vk)[0];
      jh = k("div", "split options");
      a.appendChild(jh);
      var c = k("div", "radio-buttons-container split-contents");
      jh.appendChild(c);
      var d = k("div", "radio-buttons-container split-contents");
      jh.appendChild(d);
      Ci = ma(c, "CSV", "ExportType");
      wk = ma(c, "XML", "ExportType");
      xk = ma(c, "JSON", "ExportType");
      yk = ma(c, "TXT", "ExportType");
      zk = ma(d, "iCAL", "ExportType");
      Ak = ma(d, "MD", "ExportType");
      Bk = ma(d, "HTML", "ExportType");
      Ck = ma(d, "TSV", "ExportType");
      c = k("div", "buttons-container");
      a.appendChild(c);
      Ia(c, b.exportText, "export", uk);
      Ia(c, b.cancelText, "cancel", ih);
    }
  }
  function vk() {
    Ya.disabled = Ib.checked;
  }
  function jd(a) {
    $b(I.body, Na);
    Nb();
    kb.push(ih);
    zc.style.display = "block";
    Ac = a;
    Ci.checked = !0;
    Ya.value = n.empty;
    Ib.checked = !1;
    vk();
    Ya.focus();
  }
  function ih(a) {
    Ge(a);
    mb(I.body, Na);
    zc.style.display = "none";
  }
  function uk() {
    ih();
    Ci.checked ? Bc(Ac, "csv", Ya.value, Ib.checked) : wk.checked ? Bc(Ac, "xml", Ya.value, Ib.checked) : xk.checked ? Bc(Ac, "json", Ya.value, Ib.checked) : yk.checked ? Bc(Ac, "text", Ya.value, Ib.checked) : zk.checked ? Bc(Ac, "ical", Ya.value, Ib.checked) : Ak.checked ? Bc(Ac, "md", Ya.value, Ib.checked) : Bk.checked ? Bc(Ac, "html", Ya.value, Ib.checked) : Ck.checked && Bc(Ac, "tsv", Ya.value, Ib.checked);
  }
  function Al() {
    if (!w && pa === null) {
      pa = k("div", "calendar-dialog search");
      Ca.push(pa);
      I.body.appendChild(pa);
      var a = k("div", "title-bar");
      D(a, b.searchEventsTitle);
      pa.appendChild(a);
      Ld(a, pa, function() {
        Di = !0;
        Zf();
      });
      a.ondblclick = Ei;
      var c = x(a, "ib-close", b.closeTooltipText, qd);
      c.onmousedown = J;
      c.onmouseup = J;
      Ud = x(a, "ib-minus", b.minimizedTooltipText, Ei);
      Ud.onmousedown = J;
      Ud.onmouseup = J;
      fc = k("div", "contents");
      pa.appendChild(fc);
      a = k("div", "history-container");
      fc.appendChild(a);
      sa = k("input", null, "text");
      sa.placeholder = b.searchTextBoxPlaceholder;
      sa.oninput = He;
      sa.onpropertychange = He;
      sa.onkeypress = Gm;
      a.appendChild(sa);
      vb = k("div", "ib-arrow-down-full");
      vb.style.display = "none";
      vb.onclick = Hm;
      a.appendChild(vb);
      Fb = k("div", "history-dropdown custom-scroll-bars");
      a.appendChild(Fb);
      a = k("div", "checkbox-container");
      fc.appendChild(a);
      kh = M(a, b.notSearchText, gc)[0];
      lh = M(a, b.matchCaseText, gc)[0];
      Ie = M(a, b.advancedText + ":", Im)[0];
      Ie.checked = !0;
      $f = k("div", "advanced");
      fc.appendChild($f);
      var d = k("div", "split");
      $f.appendChild(d);
      c = k("div", "split-contents");
      d.appendChild(c);
      a = k("div", "split-contents");
      d.appendChild(a);
      ua(c, b.includeText, "text-header");
      d = k("div", "checkbox-container");
      c.appendChild(d);
      ag = M(d, b.titleText.replace(":", n.empty), gc)[0];
      mh = M(d, b.locationText.replace(":", n.empty), gc)[0];
      nh = M(d, b.descriptionText.replace(":", n.empty), gc)[0];
      oh = M(d, b.groupText.replace(":", n.empty), gc)[0];
      ph = M(d, b.urlText.replace(":", n.empty), gc)[0];
      ag.checked = !0;
      ua(a, b.optionsText, "text-header");
      c = k("div", "radio-buttons-container");
      a.appendChild(c);
      qh = ma(c, b.startsWithText, "SearchOptionType", gc);
      rh = ma(c, b.endsWithText, "SearchOptionType", gc);
      sh = ma(c, b.containsText, "SearchOptionType", gc);
      sh.checked = !0;
      a = k("div", "buttons-container");
      fc.appendChild(a);
      th = Ia(a, b.previousText, "previous", Dk);
      uh = Ia(a, b.nextText, "next", Ek);
    }
  }
  function Im() {
    $f.style.display = Ie.checked ? "block" : "none";
    Wh();
    Zf();
  }
  function gc() {
    Zf();
    He(!1);
  }
  function He(a) {
    a = r(a) ? a : !0;
    Jb.length > 0 && Fk(E, " focused-event");
    th.disabled = !0;
    uh.disabled = sa.value === n.empty;
    Jb = [];
    ed = 0;
    Fi = null;
    a && Gk();
    Zf();
  }
  function he() {
    pa.style.display !== "block" && (Jb = [], pa.style.display = "block", He(!1), sa.value = y.lastSearchText, kh.checked = y.not, lh.checked = y.matchCase, Ie.checked = y.showAdvanced, ag.checked = y.searchTitle, mh.checked = y.searchLocation, nh.checked = y.searchDescription, oh.checked = y.searchGroup, ph.checked = y.searchUrl, qh.checked = y.startsWith, rh.checked = y.endsWith, sh.checked = y.contains, $f.style.display = Ie.checked ? "block" : "none", Wh());
    fc.style.display !== "block" && Ei();
    sa.focus();
    sa.select();
    y.history.length > 0 && (vb.style.display = "block");
  }
  function Wh() {
    pa === null || Di || w || (Fa(y.left) ? pa.style.left = y.left + "px" : pa.style.left = ea.innerWidth / 2 - pa.offsetWidth / 2 + "px", Fa(y.top) ? pa.style.top = y.top + "px" : pa.style.top = ea.innerHeight / 2 - pa.offsetHeight / 2 + "px");
  }
  function qd() {
    var a = !1;
    pa !== null && pa.style.display === "block" && (pa.style.display = "none", He(), a = !0);
    return a;
  }
  function Ei() {
    fc.style.display === "block" ? (fc.style.display = "none", Ud.className = "ib-square-hollow", Va(Ud, b.restoreTooltipText)) : (fc.style.display = "block", Ud.className = "ib-minus", Va(Ud, b.minimizedTooltipText));
  }
  function Dk() {
    if (ed > 0) {
      ed--;
      var a = Jb[ed];
      Hk();
      R(a.from);
      Ik(a);
    }
  }
  function Gm(a) {
    a.keyCode === U.enter && la(a) && !th.disabled ? Dk() : a.keyCode !== U.enter || uh.disabled ? Gk() : Ek();
  }
  function Ek() {
    if (Jb.length === 0) {
      var a = "day-", c = kh.checked, d = lh.checked, e = d ? sa.value : sa.value.toLowerCase(), f = {}, g = Ab(Gd()), h = g.length, l = Qa(), m = l === ba, q = l === va, t = l === ia;
      l = l === na;
      m ? a = "full-day-" : q ? a = "month-" : t ? a = "week-day-" : l && (a = "timeline-day-");
      Zf(!0);
      for (var C = 0; C < h; C++) {
        var F = g[C];
        if (ke(F)) {
          var aa = K(F.title), pb = K(F.location), V = K(F.description), Ja = K(F.group), Fe = K(F.url), Oa = !1;
          d || (aa = aa.toLowerCase(), V = V.toLowerCase(), pb = pb.toLowerCase(), Ja = Ja.toLowerCase(), Fe = Fe.toLowerCase());
          ag.checked && bg(aa, e) ? Oa = !0 : mh.checked && bg(pb, e) ? Oa = !0 : nh.checked && bg(V, e) ? Oa = !0 : oh.checked && bg(Ja, e) ? Oa = !0 : ph.checked && bg(Fe, e) && (Oa = !0);
          c && (Oa = !Oa);
          !Oa || Ea(a + F.id) === null && (m || q || t || l) || (m || q || t || l ? Jb.push(ue(F, !1)) : (aa = F.from.getMonth() + "-" + F.from.getFullYear(), f.hasOwnProperty(aa) || (Jb.push(ue(F, !1)), f[aa] = !0)));
        }
      }
    } else {
      ed++;
    }
    Hk();
    Jb.length > 0 && (a = Jb[ed], R(new Date(a.from)), Ik(a));
  }
  function Ik(a) {
    var c = "day-", d = Qa(), e = d === ba, f = d === va, g = d === ia;
    d = d === na;
    Fk(E, " focused-event");
    e ? c = "full-day-" : f ? c = "month-" : g ? c = "week-day-" : d && (c = "timeline-day-");
    c = Ea(c + a.id);
    if (c !== null && (c.className += " focused-event", Fi = a.id, e || f || g || d)) {
      for (a = c.parentNode;;) {
        if (a.scrollHeight > 0 && a.scrollHeight > a.offsetHeight) {
          a.scrollTop = c.offsetTop;
          break;
        }
        a = a.parentNode;
      }
    }
  }
  function Hk() {
    th.disabled = ed === 0;
    uh.disabled = ed === Jb.length - 1 || Jb.length === 0;
  }
  function bg(a, c) {
    return qh.checked ? ta(a, c) : rh.checked ? a.substring(a.length - c.length, a.length) === c : a.indexOf(c) > G.notFound;
  }
  function Zf(a) {
    a = r(a) ? a : !1;
    wd(Ra.searchOptionsChanged);
    var c = Sd(sa.value);
    a && (vb.style.display = "block");
    td(Ra.searchOptionsChanged, function() {
      var d = !0, e = y.history.length;
      if (a) {
        d = !1;
        for (var f = 0; f < e; f++) {
          if (y.history[f] === c) {
            d = !0;
            break;
          }
        }
        d || y.history.push(c);
      }
      if (!a || d) {
        y.lastSearchText = c, y.not = kh.checked, y.matchCase = lh.checked, y.showAdvanced = Ie.checked, y.searchTitle = ag.checked, y.searchLocation = mh.checked, y.searchDescription = nh.checked, y.searchGroup = oh.checked, y.searchUrl = ph.checked, y.startsWith = qh.checked, y.endsWith = rh.checked, y.contains = sh.checked, Di && (y.left = pa.offsetLeft, y.top = pa.offsetTop), A(b.events.onSearchOptionsUpdated, y);
      }
    }, 2000, !1);
  }
  function Gk() {
    var a = y.history.length;
    a > 0 ? (vb.style.display = "block", wd(Ra.searchEventsHistoryDropDown), td(Ra.searchEventsHistoryDropDown, function() {
      var c = sa.value, d = !1;
      if (Sd(c) !== n.empty) {
        Jk();
        Fb.innerHTML = n.empty;
        for (var e = 0; e < a; e++) {
          var f = y.history[e], g = c;
          f.substring(0, g.length).toLowerCase() === g.toLowerCase() && f.toLowerCase() !== c.toLowerCase() && (Kk(y.history[e], c.length), d = !0);
        }
      }
      d ? Lk() : af();
    }, 150, !1)) : vb.style.display = "none";
  }
  function Jk() {
    y.history.sort(function(a, c) {
      var d = 0;
      a = a.toLowerCase();
      c = c.toLowerCase();
      a < c ? d = -1 : a > c && (d = 1);
      return d;
    });
  }
  function Hm(a) {
    J(a);
    if (Fb.style.display !== "block") {
      Jk();
      a = y.history.length;
      Fb.innerHTML = n.empty;
      sa.focus();
      for (var c = 0; c < a; c++) {
        Kk(y.history[c], 0);
      }
      Lk();
    } else {
      af();
    }
  }
  function Kk(a, c) {
    var d = k("div", "history-dropdown-item");
    Fb.appendChild(d);
    var e = k("span", "search-search");
    D(e, a.substring(0, c));
    d.appendChild(e);
    e = k("span");
    D(e, a.substring(c));
    d.appendChild(e);
    d.onclick = function(f) {
      J(f);
      af();
      sa.value = a;
      sa.selectionStart = sa.selectionEnd = sa.value.length;
      sa.focus();
      He(!1);
    };
  }
  function af() {
    var a = !1;
    Fb !== null && vb.className === "ib-arrow-up-full" && (Fb.style.display = "none", vb.className = "ib-arrow-down-full", a = !0);
    return a;
  }
  function Lk() {
    Fb !== null && vb.className === "ib-arrow-down-full" && (Fb.style.display = "block", vb.className = "ib-arrow-up-full");
  }
  function Bl() {
    if (!w && Kb === null) {
      Kb = k("div", "calendar-dialog configuration");
      Ca.push(Kb);
      I.body.appendChild(Kb);
      var a = k("div", "title-bar");
      D(a, b.configurationTitleText);
      Kb.appendChild(a);
      Ld(a, Kb, null);
      x(a, "ib-close", b.closeTooltipText, Mk, !0);
      a = k("div", "contents");
      Kb.appendChild(a);
      var c = nk(a);
      we(c, b.displayTabText, function(d) {
        xe(d, Vd, Kb);
      }, !0);
      we(c, b.organizerTabText, function(d) {
        xe(d, Je, Kb);
      });
      Vd = ye(a, !0, !1);
      Je = ye(a, !1, !1);
      Gi = M(Vd, b.enableAutoRefreshForEventsText)[0];
      Hi = M(Vd, b.enableBrowserNotificationsText, null, null, null, "checkbox-tabbed-in")[0];
      Ii = M(Vd, b.enableTooltipsText, null, null, null, "checkbox-tabbed-down")[0];
      Ji = M(Vd, b.enableDragAndDropForEventText)[0];
      Ki = M(Vd, b.showHolidaysInTheDisplaysText)[0];
      ua(Je, b.organizerNameText);
      vh = k("input", null, "text");
      Je.appendChild(vh);
      ua(Je, b.organizerEmailAddressText);
      wh = k("input", null, "email");
      Je.appendChild(wh);
      c = k("div", "buttons-container");
      a.appendChild(c);
      Ia(c, b.updateText, "update", Jm);
      Ia(c, b.cancelText, "cancel", Mk);
    }
  }
  function Jm() {
    Gi.checked ? u.startTheAutoRefreshTimer() : u.stopTheAutoRefreshTimer();
    b.eventNotificationsEnabled = Hi.checked;
    b.tooltipsEnabled = Ii.checked;
    b.dragAndDropForEventsEnabled = Ji.checked;
    b.showHolidays = Ki.checked;
    b.organizerName = vh.value;
    b.organizerEmailAddress = wh.value;
    sb = !1;
    A(b.events.onOptionsUpdated, b);
    Li();
    Mi();
    R(B, !0, !0);
    Xa(b.configurationUpdatedText);
  }
  function Mk() {
    Mi();
  }
  function jj() {
    $b(I.body, Na);
    Gi.checked = cg;
    Hi.checked = b.eventNotificationsEnabled;
    Ii.checked = b.tooltipsEnabled;
    Ji.checked = b.dragAndDropForEventsEnabled;
    Ki.checked = b.showHolidays;
    vh.value = b.organizerName;
    wh.value = b.organizerEmailAddress;
    kb.push(Mi);
    Kb.style.display = "block";
  }
  function Mi(a) {
    Ge(a);
    mb(I.body, Na);
    Kb.style.display = "none";
  }
  function ke(a) {
    var c = K(a.group), d = c.toLowerCase();
    a = L(a.type);
    var e = !0;
    c !== n.empty ? r(S.visibleGroups) && (e = S.visibleGroups.indexOf(d) > G.notFound) : e = !b.hideEventsWithoutGroupAssigned;
    e && r(S.visibleEventTypes) && P.hasOwnProperty(a) && (e = S.visibleEventTypes.indexOf(a) > G.notFound);
    return e;
  }
  function Cl() {
    if (!w && Cc === null && b.jumpToDateEnabled) {
      Cc = k("div", "calendar-dialog jump-to-date");
      Ca.push(Cc);
      I.body.appendChild(Cc);
      var a = k("div", "title-bar");
      D(a, b.jumpToDateTitle);
      Cc.appendChild(a);
      Ld(a, Cc, null);
      x(a, "ib-close", b.closeTooltipText, xh, !0);
      var c = k("div", "contents");
      Cc.appendChild(c);
      hc = k("input", null, "date");
      c.appendChild(hc);
      a = k("div", "buttons-container");
      c.appendChild(a);
      c = Ia(a, b.goText, "go", Nk);
      Ia(a, b.cancelText, "cancel", xh);
      c.onkeydown = function(d) {
        d.keyCode === U.enter && Nk();
      };
    }
  }
  function ge() {
    if (Qa() !== va && b.jumpToDateEnabled) {
      $b(I.body, Na);
      Nb();
      var a = Qa();
      a === null ? (A(b.events.onSetDate, hc), Hb(B, hc)) : a === ba ? Hb(N, hc) : a === ia ? Hb(Yb, hc) : a === Ga ? Hb(new Date(wa, 0, 1), hc) : a === na && Hb(fa, hc);
      kb.push(xh);
      Cc.style.display = "block";
      hc.focus();
    }
  }
  function xh(a) {
    Ge(a);
    mb(I.body, Na);
    Cc.style.display = "none";
  }
  function Nk() {
    var a = Qa(), c = Be(hc);
    c.getFullYear() >= b.minimumYear && c.getFullYear() <= b.maximumYear && (a === null ? (R(c), xb()) : a === ba ? Za(c) : a === ia ? Fc(c) : a === Ga ? Gc(c.getFullYear()) : a === na && Pb(c), xh());
  }
  function cj() {
    Y === null && (Y = k("div", "calendar-tooltip"), Ca.push(Y), I.body.appendChild(Y), Ni = k("div", "ib-close"), yh = k("div", "ib-edit"), zh = k("div", "title-buttons"), zh.appendChild(Ni), zh.appendChild(yh), Wd = k("div", "title"), dg = k("div", "date"), Xd = k("div", "duration"), eg = k("div", "repeats"), fg = k("div", "description"), gg = k("div", "location"), Yd = k("div", "url"), Ni.onclick = pc, yh.onclick = function() {
      T(Id);
    }, document.body.addEventListener("mousemove", pc));
  }
  function ji(a, c, d, e) {
    J(a);
    wd(Ra.showToolTip);
    pc();
    e = r(e) ? e : !1;
    if (Y.style.display !== "block" && b.tooltipsEnabled) {
      var f = W(d) ? b.tooltipDelay : b.eventTooltipDelay;
      td(Ra.showToolTip, function() {
        if (e || !I.body.contains(Na) && !Kg() && !dk() && ha === null) {
          d = r(d) ? d : n.empty;
          Y.className = d === n.empty ? "calendar-tooltip-event" : "calendar-tooltip";
          if (W(d)) {
            D(Y, d);
          } else {
            if (Id = c, Y.innerHTML = n.empty, Wd.innerHTML = n.empty, Xd.innerHTML = n.empty, Yd.innerHTML = n.empty, !A(b.events.onToolTipEventRender, Y, c)) {
              Y.onmousemove = J;
              Y.appendChild(zh);
              Y.appendChild(Wd);
              Y.appendChild(dg);
              Y.appendChild(Xd);
              $a(yh, b.manualEditingEnabled);
              if (ab(c.url)) {
                var g = ja(Yd, Km(c.url), "url-text");
                $b(Y, Yd);
                g.onclick = function(h) {
                  J(h);
                  si(c.url);
                  pc();
                };
              } else {
                Yd.innerHTML = n.empty, Yd.onclick = null, mb(Y, Yd);
              }
              L(c.repeatEvery) > z.never && (g = k("div", "ib-refresh-medium ib-no-hover ib-no-active"), g.style.borderColor = Wd.style.color, Wd.appendChild(g));
              Wd.innerHTML += rc(c.title);
              Fa(c.repeatEvery) && c.repeatEvery > z.never ? (D(eg, b.repeatsText.replace(":", n.empty) + n.space + vd(c.repeatEvery)), $b(Y, eg)) : (eg.innerHTML = n.empty, mb(Y, eg));
              ab(c.location) ? (D(gg, c.location), $b(Y, gg)) : (gg.innerHTML = n.empty, mb(Y, gg));
              ab(c.description) ? (D(fg, c.description), $b(Y, fg)) : (fg.innerHTML = n.empty, mb(Y, fg));
              c.from.getDate() === c.to.getDate() ? c.isAllDay ? D(dg, b.allDayText) : (D(dg, fe(c.from, c.to)), D(Xd, Ub(c.from, c.to))) : (Ye(dg, c.from, c.to), D(Xd, Ub(c.from, c.to)));
              Xd.innerHTML === n.empty && Y.removeChild(Xd);
            }
          }
          wf(a, Y);
        }
      }, f, !1);
    }
  }
  function pc() {
    wd(Ra.showToolTip);
    Ok() && (Y.style.display = "none", Id = null, Y.onmousemove = null);
  }
  function Ok() {
    return Oi(Ra.showToolTip) || Y !== null && Y.style.display === "block";
  }
  function Va(a, c, d) {
    a !== null && (a.onmousemove = function(e) {
      ji(e, null, c, d);
    });
  }
  function Xa(a, c) {
    lc !== null && b.popUpNotificationsEnabled && (c = r(c) ? c : !0, wd(Ra.hideNotification), lc.innerHTML = n.empty, c = k("div", c ? "success" : "error"), lc.appendChild(c), lc.style.display = "block", D(c, a), x(c, "ib-close-icon", b.closeTooltipText, Pk), td(Ra.hideNotification, function() {
      Pk();
    }, 5000, !1));
  }
  function Pk() {
    lc.style.display = "none";
  }
  function Kh(a, c) {
    if (a !== null) {
      c = r(c) ? c : !0;
      var d = b.dayHeaderNames.length;
      a.innerHTML = n.empty;
      b.startOfWeekDay === za.saturday || b.startOfWeekDay === za.sunday ? (Pi(a, b.startOfWeekDay, d), Pi(a, 0, b.startOfWeekDay)) : Pi(a, 0, d);
      b.reverseOrderDaysOfWeek && c && rd(a);
    }
  }
  function Pi(a, c, d) {
    for (; c < d; c++) {
      b.visibleDays.indexOf(c) > G.notFound && Lm(a, c);
    }
  }
  function Lm(a, c) {
    var d = b.dayHeaderNames[c], e = k("div", Dg());
    D(e, d);
    a.appendChild(e);
    e.oncontextmenu = function(f) {
      if (!w && (la(f) || sc(), Ka(), b.sideMenu.showDays)) {
        jk = c;
        var g = b.visibleDays.length > 1 ? "block" : "none", h = b.workingDays.length >= 1 && !ce(b.workingDays, b.visibleDays) ? "block" : "none";
        ik.style.display = g;
        kk.style.display = g;
        lk.style.display = h;
        mk.style.display = h;
        J(f);
        wf(f, ub);
      }
    };
    e.ondblclick = function(f) {
      if (!w) {
        var g = !1;
        if (ud.length === 0) {
          if (f = b.visibleDays.length, f > 1) {
            for (g = 0; g < f; g++) {
              ud.push(b.visibleDays[g]);
            }
            b.visibleDays = [];
            b.visibleDays.push(c);
            g = !0;
          }
        } else {
          b.visibleDays = [];
          f = ud.length;
          for (g = 0; g < f; g++) {
            b.visibleDays.push(ud[g]);
          }
          ud = [];
          g = !0;
        }
        g && (sb = !1, A(b.events.onOptionsUpdated, b), R(B, !0, !0));
      }
    };
  }
  function kf(a) {
    Qa() !== a && (Qk(a, !1), Bb.push(a), Ah++, jb(a) || (a.className += " view-shown"), a.style.zIndex = Ah, qd(), rf());
  }
  function Cd(a, c) {
    jb(a) && (a.className = a.className.replace(" view-shown", n.empty), Qk(a, c), Bb.length === 0 && (Ah = 0));
  }
  function Qk(a, c) {
    c = r(c) ? c : !0;
    for (var d = [], e = Bb.length, f = 0; f < e; f++) {
      var g = Bb[f];
      r(g) && g.id !== a.id && d.push(g);
    }
    Bb = [].slice.call(d);
    c && rf();
  }
  function jb(a) {
    return r(a) && a.className && a.className.indexOf("view-shown") > G.notFound;
  }
  function Fj(a) {
    a = r(a) ? a : !0;
    var c = Qa();
    Cd(c, !a);
    Bb.length === 0 && (Ah = 0);
    a && rf();
  }
  function Qa() {
    return Bb.length > 0 ? Bb[Bb.length - 1] : null;
  }
  function rf(a) {
    a = r(a) ? a : !0;
    var c = Qa(), d = null;
    c === null ? d = yb.fullMonth : c === ba ? d = yb.fullDay : c === ia ? d = yb.fullWeek : c === Ga ? d = yb.fullYear : c === na ? d = yb.timeline : c === va && (d = yb.allEvents);
    a && W(d) && A(b.events.onViewChange, d);
    return d;
  }
  function Kj(a, c) {
    var d = new Date(), e = new Date();
    e.setHours(0, 0, 0, 0);
    for (60 % c !== 0 && (c = 30); Z(e, d);) {
      var f = k("div", "hour");
      a.appendChild(f);
      var g = k("div", "hour-text");
      g.innerText = Eb(new Date(e));
      f.appendChild(g);
      e = lb(e, c);
      g = k("div", "hour-text");
      g.innerText = Eb(new Date(e));
      f.appendChild(g);
      e = lb(e, c);
    }
  }
  function wg(a, c) {
    var d = Ze(c);
    c = qa.floor((a.pageY - d.top) / (c.offsetHeight / 1440)) / 60;
    a = qa.floor(c);
    c = qa.round((c - a) * 60);
    return [a, c];
  }
  function Mj(a, c, d, e, f) {
    var g = c.offsetHeight, h = c.offsetHeight / 1440;
    c = 0;
    var l = null;
    if (!f.isAllDay) {
      l = L(f.repeatEvery);
      if (Z(f.from, d) || l > z.never) {
        c = h * hg(f.from);
      }
      l = Z(f.to, d) || l > z.never ? h * hg(f.to) - c : g;
      l -= b.spacing * 2;
    }
    c <= b.spacing && (c += b.spacing, l -= b.spacing);
    e.style.top = c + "px";
    l !== null && (e.style.height = l + "px");
    e.offsetTop + e.offsetHeight > g - b.spacing ? (d = g - e.offsetTop - b.spacing * 3 + "px", e.style.height = d, e.style.maxHeight = d) : e.style.maxHeight = g - (e.offsetTop + b.spacing * 2) - h + "px";
    e = c + a.offsetHeight / 2;
    e <= a.offsetHeight && (e = 0);
    return e;
  }
  function um(a, c, d, e) {
    var f = a.scrollWidth;
    var g = a.offsetWidth / 1440;
    a = 0;
    var h = L(e.repeatEvery);
    if (Z(e.from, c) || h > z.never) {
      a = g * hg(e.from);
    }
    c = Z(e.to, c) || h > z.never ? g * hg(e.to) - a : f;
    c -= b.spacing * 2;
    a <= b.spacing && (a += b.spacing, c -= b.spacing);
    d.style.left = a + "px";
    c !== null && (d.style.width = c + "px");
    d.offsetLeft + d.offsetWidth > f - b.spacing ? (f = f - d.offsetLeft - b.spacing * 4 + "px", d.style.width = f, d.style.maxWidth = f) : d.style.maxWidth = f - (d.offsetLeft + b.spacing * 2) - g + "px";
    return a - b.spacing;
  }
  function Pj(a, c, d, e, f) {
    var g = 0;
    d !== null && (jc(a) && jb(c) && f ? (a = e.offsetHeight / 1440 * hg(new Date()), d.style.display = "block", d.style.top = a - d.offsetHeight / 2 + "px", g = a) : d.style.display = "none");
    return g;
  }
  function Lj(a, c) {
    J(a);
    a = Se(c, "z-index", !1);
    a = a === null || a === "auto" ? 1 : parseInt(a) + 1;
    c.style.zIndex = a.toString();
  }
  function Qj(a) {
    a = a.getElementsByClassName("event");
    a = [].slice.call(a);
    var c = a.length;
    if (c > 1) {
      a.sort(Mm);
      for (var d = 0; d < c; d++) {
        for (var e = a[d], f = 0; f < c; f++) {
          if (f !== d) {
            var g = a[f], h = !0, l = e.offsetLeft, m = e.offsetTop, q = e.offsetWidth, t = g.offsetLeft, C = g.offsetTop, F = g.offsetHeight, aa = g.offsetWidth;
            if (m + e.offsetHeight < C || m > C + F || l + q < t || l > t + aa) {
              h = !1;
            }
            h && (h = K(e.getAttribute("event-position")), l = K(g.getAttribute("event-position")), h === n.empty && l === n.empty ? (Bh(e), Bh(g), g.style.left = e.offsetLeft + e.offsetWidth + b.spacing + "px", e.setAttribute("event-position", "left"), g.setAttribute("event-position", "right")) : h === n.empty && l === "right" ? (Bh(e), e.setAttribute("event-position", "left"), g.setAttribute("event-position", "right")) : h === n.empty && l === "left" && (e.style.left = g.offsetLeft + g.offsetWidth + 
            b.spacing + "px", Bh(e), e.setAttribute("event-position", "right"), g.setAttribute("event-position", "left")));
          }
        }
      }
    }
  }
  function Bh(a) {
    a.style.width = a.offsetWidth / 2 - (b.spacing * 3 + b.spacing / 4) + "px";
  }
  function Mm(a, c) {
    var d = 0;
    a.offsetTop < c.offsetTop ? d = -1 : a.offsetTop > c.offsetTop && (d = 1);
    return d;
  }
  function Jj(a, c, d) {
    J(a);
    xg === null ? a.dataTransfer.files.length === 0 ? Rk(a, c.getFullYear(), c.getMonth(), c.getDate()) : Sk(a) : (Z(Ag, c) || (ha = Wb, Zd = Ag, Tk(a, c.getFullYear(), c.getMonth(), c.getDate())), c = d.offsetHeight / 1440, d = Ze(d), a = (qa.abs(a.pageY) - d.top + zg - yg) / c, Wb.from = lb(Wb.from, a), Wb.to = lb(Wb.to, a), qb(), A(b.events.onEventUpdated, Wb), Xa(b.eventUpdatedText.replace("{0}", Wb.title)), ra(), Wb = xg = null, yg = zg = 0);
  }
  function Vh(a) {
    J(a);
    if (b.manualEditingEnabled) {
      var c = null;
      a = null;
      var d = 0;
      jb(ba) ? (c = Aa, a = Bg, d = a.length) : jb(ia) && (c = ne, a = ei, d = a.length);
      if (c !== null && d > 0) {
        c = c.offsetHeight / 1440;
        for (var e = !1, f = 0; f < d; f++) {
          var g = a[f];
          g.height !== g.eventElement.offsetHeight && (e = (g.eventElement.offsetHeight - g.height) / c, g.height = g.eventElement.offsetHeight, g.eventDetails.to = lb(g.eventDetails.to, e), e = !0, A(b.events.onEventUpdated, g.eventDetails), Xa(b.eventUpdatedText.replace("{0}", g.eventDetails.title)));
        }
        e && (qb(), ra());
      }
    }
  }
  function bb() {
    xd ? Uk() : Vk();
  }
  function Vk() {
    !xd && b.fullScreenModeEnabled && (Wk(), A(b.events.onFullScreenModeChanged, !0));
  }
  function Uk() {
    xd && b.fullScreenModeEnabled && (xd = !1, E.className = E.className.replace(" full-screen-view", n.empty), E.style.cssText = Xk, Yk("ib-arrow-expand-left-right", b.enableFullScreenTooltipText), ra(), A(b.events.onFullScreenModeChanged, !1));
  }
  function Wk() {
    Xk = E.style.cssText;
    xd = !0;
    E.className += " full-screen-view";
    E.removeAttribute("style");
    Yk("ib-arrow-contract-left-right", b.disableFullScreenTooltipText);
    ra();
  }
  function Yk(a, c) {
    Ke(Hg, a);
    Ke(Zh, a);
    Ke(ni, a);
    Ke(ai, a);
    Ke(li, a);
    Ke(pi, a);
    Va(Hg, c);
    Va(Zh, c);
    Va(ni, c);
    Va(ai, c);
    Va(li, c);
    Va(pi, c);
  }
  function fm(a, c, d) {
    if (b.showHolidays) {
      for (var e = [], f = b.holidays.length, g = 0; g < f; g++) {
        var h = b.holidays[g], l = K(h.title, n.empty), m = K(h.backgroundColor, n.empty), q = K(h.textColor, n.empty);
        Oj(h, a) && l !== n.empty && e.indexOf(l.toLowerCase()) ? (Nm(h, d, l, c), m !== n.empty && d.style.setProperty("background-color", m, "important"), q !== n.empty && d.style.setProperty("color", q, "important"), e.push(l.toLowerCase())) : (d.style.removeProperty("background-color"), d.style.removeProperty("color"));
      }
    }
  }
  function Nm(a, c, d, e) {
    var f = dd(a.onClick) || W(a.onClickUrl) ? "holiday-link" : "holiday", g = a.onClick;
    W(a.onClickUrl) && (g = function() {
      ea.open(a.onClickUrl, b.urlWindowTarget);
    });
    ja(c, d, f + e, g, !0, !0);
  }
  function Oj(a, c) {
    var d = L(a.day), e = L(a.month);
    a = L(a.year);
    var f = !1;
    a === 0 && d === c.getDate() && e === c.getMonth() + 1 ? f = !0 : a > 0 && d === c.getDate() && e === c.getMonth() + 1 && a === c.getFullYear() && (f = !0);
    return f;
  }
  function Gd() {
    var a = [];
    Db(function(c) {
      a.push(c);
    });
    return a;
  }
  function Db(a) {
    for (var c in wb) {
      if (wb.hasOwnProperty(c)) {
        for (var d in wb[c]) {
          if (wb[c].hasOwnProperty(d)) {
            var e = Zk(wb[c][d]);
            if (a(e, c, d)) {
              return;
            }
          }
        }
      }
    }
  }
  function Ab(a, c) {
    c = r(c) ? c : !0;
    a = a.sort(function(d, e) {
      return d.from - e.from;
    });
    c && (a = a.sort(function(d, e) {
      return $k(e.isAllDay) - $k(d.isAllDay);
    }));
    return a;
  }
  function Zj(a, c) {
    $b(I.body, Na);
    var d = function() {
      mb(I.body, Na);
    };
    Jf(b.confirmEventsRemoveTitle, b.confirmEventsRemoveMessage, function() {
      var e = 0;
      d();
      Db(function(f) {
        L(f.repeatEvery) === z.never && c(f.from, a) && (u.removeEvent(f.id, !1), e++);
      });
      qb();
      Xa(b.eventsRemovedText.replace("{0}", e));
      Pa();
    }, d);
  }
  function Zk(a) {
    a.isAllDay && (a.from = new Date(a.from.getFullYear(), a.from.getMonth(), a.from.getDate(), 0, 0), a.to = new Date(a.from.getFullYear(), a.from.getMonth(), a.from.getDate(), 23, 59));
    return a;
  }
  function rk(a) {
    a = r(a) && P.hasOwnProperty(a) ? a : 0;
    for (var c in P) {
      P.hasOwnProperty(c) && r(P[c].eventEditorInput) && (P[c].eventEditorInput.checked = !1);
    }
    r(P[a].eventEditorInput) && (P[a].eventEditorInput.checked = !0);
  }
  function Dm() {
    var a = 0, c;
    for (c in P) {
      if (P.hasOwnProperty(c) && r(P[c].eventEditorInput) && P[c].eventEditorInput.checked) {
        a = parseInt(c);
        break;
      }
    }
    return a;
  }
  function Z(a, c) {
    return a.getDate() === c.getDate() && a.getMonth() === c.getMonth() && a.getFullYear() === c.getFullYear();
  }
  function Vj(a, c) {
    return a.getMonth() === c.getMonth() && a.getFullYear() === c.getFullYear();
  }
  function $e(a, c) {
    a = new Date(a.getFullYear(), a.getMonth(), a.getDate());
    a.setHours(0, 0, 0, 0);
    c = new Date(c.getFullYear(), c.getMonth(), c.getDate());
    c.setHours(0, 0, 0, 0);
    return a <= c;
  }
  function jc(a) {
    var c = new Date();
    return a !== null && a.getDate() === c.getDate() && a.getFullYear() === c.getFullYear() && a.getMonth() === c.getMonth();
  }
  function Ad(a) {
    var c = ("0" + a.getDate()).slice(-2), d = ("0" + a.getMonth()).slice(-2);
    return c + "/" + d + "/" + a.getFullYear();
  }
  function ca(a) {
    return a.getDay() - 1 < 0 ? 6 : a.getDay() - 1;
  }
  function gd(a, c) {
    return (new Date(a, c + 1, 0)).getDate();
  }
  function Ig(a) {
    var c = b.thText;
    if (a === 31 || a === 21 || a === 1) {
      c = b.stText;
    } else if (a === 22 || a === 2) {
      c = b.ndText;
    } else if (a === 23 || a === 3) {
      c = b.rdText;
    }
    return c;
  }
  function hg(a) {
    var c = a.getHours();
    a = a.getMinutes();
    return c * 60 + a;
  }
  function Vc(a, c) {
    a = new Date(a.getFullYear(), a.getMonth(), a.getDate());
    c = new Date(c.getFullYear(), c.getMonth(), c.getDate());
    c = qa.abs(c - a);
    return qa.ceil(c / 864E5);
  }
  function Cg(a) {
    a.setDate(a.getDate() - 1);
  }
  function cb(a, c) {
    c = Fa(c) ? c : 1;
    a.setDate(a.getDate() + c);
  }
  function Xb(a, c) {
    c = Fa(c) ? c : 1;
    a.setDate(a.getDate() + c * 7);
  }
  function le(a, c) {
    c = Fa(c) ? c : 1;
    a.setMonth(a.getMonth() + c);
  }
  function Bd(a, c) {
    c = Fa(c) ? c : 1;
    a.setFullYear(a.getFullYear() + c);
  }
  function Ub(a, c) {
    var d = [];
    a = qa.abs(c - a) / 1000;
    c = qa.floor(a / 86400);
    a -= c * 86400;
    c > 0 && d.push(c.toString() + n.space + (c === 1 ? b.dayText : b.daysText));
    c = qa.floor(a / 3600) % 24;
    a -= c * 3600;
    c > 0 && d.push(c.toString() + n.space + (c === 1 ? b.hourText : b.hoursText));
    a = qa.floor(a / 60) % 60;
    a > 0 && d.push(a.toString() + n.space + (a === 1 ? b.minuteText : b.minutesText));
    return d.join(", ");
  }
  function Hb(a, c) {
    if (r(a)) {
      var d = ("0" + a.getDate()).slice(-2), e = ("0" + (a.getMonth() + 1)).slice(-2);
      c.value = c.type === "date" ? a.getFullYear() + "-" + e + "-" + d : d + "/" + e + "/" + a.getFullYear();
    }
  }
  function Be(a, c) {
    c = c !== void 0 ? c : new Date();
    if (a.value !== n.empty) {
      if (a.type === "date") {
        c = new Date(a.value + "T00:00:00Z");
      } else {
        if (a = a.value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)) {
          a = new Date(a[3], a[2] - 1, a[1], 0, 0, 0, 0), a instanceof Date && !isNaN(a) && (c = a);
        }
      }
    }
    r(c) && (c = new Date(c.getTime() + qa.abs(c.getTimezoneOffset() * 60000)));
    return c;
  }
  function qk(a, c) {
    if (a.type === "date") {
      var d = ("0" + c.getDate()).slice(-2), e = ("0" + (c.getMonth() + 1)).slice(-2);
      a.setAttribute("min", c.getFullYear() + "-" + e + "-" + d);
    }
  }
  function fh(a, c) {
    var d = 0, e = 0, f = c.split(":");
    f.length === 2 && (c = parseInt(f[0]), f = parseInt(f[1]), !isNaN(c) && c.toString().length <= 2 && (d = c), !isNaN(f) && f.toString().length <= 2 && (e = f));
    a.setHours(d);
    a.setMinutes(e);
  }
  function lb(a, c) {
    return new Date(a.getTime() + c * 60000);
  }
  function Oh(a, c) {
    var d = ca(c);
    a = a.replace("{dddd}", b.dayNames[d]);
    a = a.replace("{ddd}", b.dayNamesAbbreviated[d]);
    a = a.replace("{dd}", Q(c.getDate()));
    a = a.replace("{d}", c.getDate());
    a = a.replace("{o}", Ig(c.getDate()));
    a = a.replace("{mmmm}", b.monthNames[c.getMonth()]);
    a = a.replace("{mmm}", b.monthNamesAbbreviated[c.getMonth()]);
    a = a.replace("{mm}", Q(c.getMonth() + 1));
    a = a.replace("{m}", c.getMonth() + 1);
    a = a.replace("{yyyy}", c.getFullYear());
    a = a.replace("{yyy}", c.getFullYear().toString().substring(1));
    a = a.replace("{yy}", c.getFullYear().toString().substring(2));
    return a = a.replace("{y}", parseInt(c.getFullYear().toString().substring(2)).toString());
  }
  function Pe(a) {
    if (b.startOfWeekDay === za.saturday || b.startOfWeekDay === za.sunday) {
      a += 7 - b.startOfWeekDay;
    }
    return a;
  }
  function Xe(a, c) {
    var d = L(a.repeatEvery);
    a = new Date(a.to);
    d > z.never && (c = new Date(c), c.setHours(a.getHours(), a.getMinutes()), a = c);
    return a;
  }
  function fe(a, c) {
    return Eb(a) + n.space + b.toTimeText + n.space + Eb(c);
  }
  function Eb(a, c) {
    c = r(c) ? c : b.useAmPmForTimeDisplays;
    if (b.useAmPmForTimeDisplays && c) {
      var d = a.getHours();
      c = a.getMinutes();
      var e = "am";
      d > 12 ? (d -= 12, e = "pm") : d === 12 ? e = "pm" : d === 0 && (d = 12);
      c > 0 && (d += ":" + Q(a.getMinutes()));
      d += e;
    } else {
      d = Q(a.getHours()) + ":" + Q(a.getMinutes());
    }
    return d;
  }
  function Ye(a, c, d) {
    a.innerHTML = n.empty;
    qc(a, c);
    ja(a, n.space + b.toTimeText + n.space);
    qc(a, d);
  }
  function qc(a, c, d, e, f) {
    d = r(d) ? d : !0;
    e = r(e) ? e : !0;
    (f = r(f) ? f : !1) && ja(a, b.dayNames[ca(c)] + ", ");
    Tb(a, c);
    ja(a, n.space + b.monthNames[c.getMonth()]);
    e && ja(a, n.space + c.getFullYear());
    d && ja(a, n.space + Eb(c));
  }
  function Tb(a, c, d, e) {
    r(d) && ja(a, d);
    ja(a, c.getDate());
    b.showDayNumberOrdinals && (c = Ig(c.getDate()), r(c) && (d = k("sup"), d.innerText = c, a.appendChild(d)));
    r(e) && ja(a, e);
  }
  function ci(a, c, d, e) {
    if (!nf(c) && b.dragAndDropForEventsEnabled && b.manualEditingEnabled) {
      var f = new Date(d), g = b.weekendDays.indexOf(f.getDay()) >= 0 ? " drag-not-allowed-weekend-day" : " drag-not-allowed";
      a.setAttribute("draggable", !0);
      a.ondragstart = function(h) {
        A(b.events.onEventDragStart, c);
        h.dataTransfer.setData("event_details", ic.stringify(c));
        Zd = f;
        ha = c;
        r(e) && (e.className += g, Om(e));
        Ch("cell", function(l) {
          l.className += " prevent-pointer-events";
        }, a);
        Ch("events", function(l) {
          l.className += " prevent-pointer-events";
        }, a);
      };
      a.ondragend = function() {
        A(b.events.onEventDragStop, ha);
        ha = Zd = null;
        r(e) && (e.className = e.className.replace(g, n.empty), Eg(e, f.getFullYear(), f.getMonth(), f.getDate()));
        Ch("cell", function(h) {
          h.className = h.className.replace(" prevent-pointer-events", n.empty);
        }, a);
        Ch("events", function(h) {
          h.className = h.className.replace(" prevent-pointer-events", n.empty);
        }, a);
      };
    }
  }
  function Eg(a, c, d, e) {
    if (b.dragAndDropForEventsEnabled && b.manualEditingEnabled) {
      var f = new Date(c, d, e);
      a.ondragover = function(g) {
        al(g, a, f);
      };
      a.ondragenter = function(g) {
        al(g, a, f);
      };
      a.ondragleave = function(g) {
        bl(g, a, f);
      };
      a.ondrop = function(g) {
        J(g);
        bl(g, a, f);
        g.dataTransfer.files.length === 0 ? Tk(g, c, d, e) : Sk(g);
      };
    }
  }
  function Om(a) {
    b.dragAndDropForEventsEnabled && b.manualEditingEnabled && (a.ondragover = null, a.ondragenter = null, a.ondragleave = null, a.ondrop = null);
  }
  function al(a, c, d) {
    J(a);
    ha === null || c.className.indexOf(" drag-over") !== G.notFound || Z(Zd, d) || (c.className += " drag-over");
  }
  function bl(a, c, d) {
    J(a);
    ha !== null && c.className.indexOf(" drag-over") > G.notFound && !Z(Zd, d) && (c.className = c.className.replace(" drag-over", n.empty));
  }
  function Tk(a, c, d, e) {
    var f = new Date(c, d, e);
    if (ha === null || Z(Zd, f)) {
      ha === null && Rk(a, c, d, e);
    } else {
      A(b.events.onEventDragDrop, ha, f);
      r(e) || (a = gd(c, d), e = ha.from.getDate(), e > a && (e = a));
      var g = Vc(ha.from, Zd);
      a = Vc(ha.from, ha.to);
      f = new Date(c, d, e, ha.from.getHours(), ha.from.getMinutes());
      c = new Date(c, d, e, ha.to.getHours(), ha.to.getMinutes());
      d = ha.repeatEnds;
      g > 0 && (f.setDate(f.getDate() - g), c.setDate(c.getDate() - g));
      r(d) && (e = Vc(f, ha.from), f > ha.from ? d.setDate(d.getDate() + e) : d.setDate(d.getDate() - e));
      a > 0 && c.setDate(c.getDate() + a);
      u.updateEventDateTimes(ha.id, f, c, d);
      Xa(b.eventUpdatedText.replace("{0}", ha.title));
      Pa();
    }
  }
  function Rk(a, c, d, e) {
    a = Re(a.dataTransfer.getData("event_details"));
    if (r(a) && ha === null) {
      var f = new Date(a.from), g = new Date(a.to);
      a.from = new Date(c, d, e, f.getHours(), f.getMinutes(), 0, 0);
      a.to = new Date(c, d, e, g.getHours(), g.getMinutes(), 0, 0);
      u.addEvent(a);
      Xa(b.eventAddedText.replace("{0}", a.title));
    }
  }
  function Sk(a) {
    r(ea.FileReader) && b.importEventsEnabled && Qi(a.dataTransfer.files);
  }
  function Re(a) {
    try {
      var c = ic.parse(a);
    } catch (d) {
      try {
        c = eval("(" + a + ")");
      } catch (e) {
        console.error("Errors in object: " + d.message + ", " + e.message), c = null;
      }
    }
    return c;
  }
  function Ld(a, c, d) {
    a.onmousedown = function(e) {
      $d || (Ka(), Lb = c, $d = !0, cl = e.pageX - Lb.offsetLeft, dl = e.pageY - Lb.offsetTop, Dh = Lb.offsetLeft, Eh = Lb.offsetTop);
    };
    a.onmouseup = function() {
      el(d);
    };
    a.oncontextmenu = function() {
      el(null);
    };
  }
  function el(a) {
    $d && ($d = !1, Lb = null, Eh = Dh = 0, a !== null && a());
  }
  function Ol(a) {
    $d && (Lb.style.left = a.pageX - cl + "px", Lb.style.top = a.pageY - dl + "px");
  }
  function Pl() {
    $d && (Lb.style.left = Dh + "px", Lb.style.top = Eh + "px", $d = !1, Lb = null, Eh = Dh = 0);
  }
  function nk(a) {
    var c = k("div");
    a.appendChild(c);
    return c;
  }
  function we(a, c, d, e) {
    e = r(e) ? e : !1;
    var f = k("div", "tab tab-control" + (e ? "-selected" : n.empty));
    D(f, c);
    a.appendChild(f);
    f.onclick = function() {
      d(f);
    };
  }
  function ye(a, c, d) {
    c = r(c) ? c : !1;
    d = r(d) ? d : !0;
    var e = k("div", "checkbox-container tab-content custom-scroll-bars");
    a.appendChild(e);
    d && (e.className += " custom-scroll-bars");
    c || (e.style.display = "none");
    return e;
  }
  function xe(a, c, d) {
    var e = d.getElementsByClassName("tab-control-selected"), f = e.length;
    d = d.getElementsByClassName("tab-content");
    for (var g = d.length, h = 0; h < f; h++) {
      e[h].className = "tab tab-control";
    }
    for (e = 0; e < g; e++) {
      d[e].style.display = "none";
    }
    a.className = "tab tab-control-selected";
    c.style.display = "block";
  }
  function de(a, c, d, e) {
    e = r(e) ? e : !1;
    r(d) && d < new Date() && (a.className += " expired");
    e && r(d) && d < B && (d.getFullYear() !== B.getFullYear() || d.getMonth() !== B.getMonth()) && (a.className += " not-in-current-month");
    ab(c.color) ? (a.style.backgroundColor = c.color, ab(c.colorText) && (a.style.color = c.colorText), ab(c.colorBorder) && (a.style.borderColor = c.colorBorder)) : c.isAllDay && (a.className += " all-day");
  }
  function hf(a, c) {
    Fi === c.id && (a.className += " focused-event");
    fl(c.id) && (a.className += " selected-event");
    for (var d = !1, e = oa.length, f = 0; f < e; f++) {
      if (oa[f].id === c.id) {
        d = !0;
        break;
      }
    }
    d && (a.className = Vb ? a.className + " cut-event" : a.className + " copy-event");
  }
  function ig(a, c, d) {
    d = r(d) ? d : !1;
    var e = I.getElementsByClassName("event");
    e = [].slice.call(e);
    for (var f = e.length, g = 0; g < f; g++) {
      var h = e[g], l = h.getAttribute("event-id");
      l !== null && l === a.toString() && (h.className = d ? h.className.replace(n.space + c, n.empty) : h.className + (n.space + c));
    }
  }
  function gm(a, c) {
    if (jc(a) && !w) {
      a = new Date();
      var d = new Date(), e = new Date(), f = L(c.repeatEvery);
      a.setHours(c.from.getHours(), c.from.getMinutes(), 0, 0);
      d.setHours(c.to.getHours(), c.to.getMinutes(), 0, 0);
      f !== z.never || jc(c.from) || a.setHours(0, 0, 0, 0);
      f !== z.never || jc(c.to) || d.setHours(23, 59, 59, 99);
      Fa(c.alertOffset) && c.alertOffset > 0 && (a = lb(a, -c.alertOffset));
      if (e >= a && e <= d) {
        if (!ob(c.showAsBusy) || c.showAsBusy) {
          qe = !0;
        }
        (!gl.hasOwnProperty(c.id) && !ob(c.showAlerts) || c.showAlerts) && hl(function() {
          Pm(c);
        }, !1, c);
      }
    }
  }
  function Pm(a) {
    gl[a.id] = !0;
    (new Notification(b.eventNotificationTitle, {body:b.eventNotificationBody.replace("{0}", a.title)})).onclick = function() {
      var c = K(a.url);
      c === n.empty ? T(a) : si(c);
      A(b.events.onNotificationClicked, a);
    };
  }
  function Li() {
    hl(function() {
      Notification.permission !== "granted" && Notification.requestPermission();
    });
  }
  function hl(a, c, d) {
    b.eventNotificationsEnabled && !w && (c = r(c) ? c : !0, Notification ? a() : c && console.error("Browser notifications API unavailable."), r(d) && A(b.events.onNotification, d));
  }
  function si(a) {
    ea.open(a, b.urlWindowTarget);
    A(b.events.onEventUrlClicked, a);
  }
  function ie(a) {
    a = r(a) ? a : !0;
    for (var c = oa.length, d = 0; d < c; d++) {
      var e = oa[d];
      Vb ? ig(e.id, "cut-event", a) : ig(e.id, "copy-event", a);
    }
  }
  function fk(a) {
    oa = [];
    var c = Ha.length;
    if (c > 0) {
      for (a = 0; a < c; a++) {
        oa.push(Ha[a]);
      }
    } else {
      oa.push(a);
    }
  }
  function fl(a) {
    for (var c = !1, d = Ha.length, e = 0; e < d; e++) {
      if (Ha[e].id === a) {
        c = !0;
        break;
      }
    }
    return c;
  }
  function Xh(a, c) {
    for (var d = oa.length, e = 0; e < d; e++) {
      var f = oa[e], g = Vc(f.from, f.to);
      f = c ? f : ue(f);
      f.from.setDate(a.getDate());
      f.from.setMonth(a.getMonth());
      f.from.setFullYear(a.getFullYear());
      f.to.setDate(a.getDate());
      f.to.setMonth(a.getMonth());
      f.to.setFullYear(a.getFullYear());
      f.to.setDate(f.to.getDate() + g);
      c ? A(b.events.onEventUpdated, f) : (f.id = null, u.addEvent(f, !1, !0));
    }
    Xa(b.eventsPastedText.replace("{0}", d));
    c && (sc(), oa = [], Vb = !1);
    La();
    ra();
  }
  function jf(a, c) {
    J(a);
    Ka();
    if (nf(c)) {
      la(a) || sc();
    } else {
      if (la(a)) {
        if (fl(c.id)) {
          a = Ha.length;
          for (var d = 0; d < a; d++) {
            if (Ha[d].id === c.id) {
              Ha.splice(d, 1);
              break;
            }
          }
          ig(c.id, "selected-event", !0);
        } else {
          Ha.push(c), ig(c.id, "selected-event", !1);
        }
      } else {
        sc();
      }
    }
  }
  function sc() {
    var a = !1, c = Ha.length;
    if (c > 0) {
      for (a = 0; a < c; a++) {
        ig(Ha[a].id, "selected-event", !0);
      }
      a = !0;
      Ha = [];
    }
    return a;
  }
  function Ej(a) {
    oa = [];
    Vb = r(a) ? a : !1;
    a = Ha.length;
    if (a > 0) {
      for (var c = 0; c < a; c++) {
        oa.push(Ha[c]);
      }
      ie(!1);
    }
  }
  function Sh() {
    b.autoRefreshTimerDelay > 0 && !w && cg && td(Ra.autoRefresh, function() {
      gj();
      Pa();
    }, b.autoRefreshTimerDelay);
  }
  function gj() {
    var a = A(b.events.onEventsFetch);
    if (ya(a)) {
      for (var c = a.length, d = 0; d < c; d++) {
        var e = a[d];
        u.removeEvent(e.id, !1, !1);
        u.addEvent(e, !1, !1);
      }
    }
  }
  function Rh() {
    b.autoRefreshTimerDelay > 0 && !w && cg && wd(Ra.autoRefresh);
  }
  function Pa(a, c) {
    if (b.isWidget) {
      ng ? R() : R(B);
    } else {
      if (a = r(a) ? a : !1, c = r(c) ? c : !1, qj() || a) {
        ra(), ng ? (R(), Wj()) : La(), c && A(b.events.onRefresh);
      }
    }
  }
  function qj() {
    return !Ok() && !I.body.contains(Na) && !Kg() && !dk() && !Qe() && ha === null;
  }
  function td(a, c, d, e) {
    e = r(e) ? e : !0;
    Oi(a) || (Mb[a] = e ? setInterval(c, d) : setTimeout(function() {
      c();
      delete Mb[a];
    }, d));
  }
  function wd(a) {
    Oi(a) && (clearTimeout(Mb[a]), delete Mb[a]);
  }
  function Oi(a) {
    return Mb.hasOwnProperty(a) && Mb[a] !== null;
  }
  function lj() {
    var a = [], c = [];
    Db(function(d) {
      d = K(d.group);
      d !== n.empty && c.indexOf(d.toLowerCase()) === G.notFound && (a.push(d), c.push(d.toLowerCase()));
    });
    a.sort();
    return a;
  }
  function k(a, c, d, e) {
    var f = a.toLowerCase();
    var g = f === "text";
    Ri.hasOwnProperty(f) || (Ri[f] = g ? I.createTextNode(n.empty) : I.createElement(f));
    f = Ri[f].cloneNode(!1);
    if (a === "input" && d !== "button" || a === "textarea") {
      r(e) ? f.id = e : f.id = kc();
    }
    r(c) && (f.className = c);
    r(d) && (f.type = d);
    return f;
  }
  function ua(a, c, d) {
    var e = k("p");
    D(e, c);
    a.appendChild(e);
    r(d) && (e.className = d);
    return e;
  }
  function ja(a, c, d, e, f, g) {
    f = r(f) ? f : !1;
    (g = r(g) ? g : !1) && a.appendChild(k("div", "separator"));
    d = k("span", d);
    g = dd(e);
    D(d, c);
    a.appendChild(d);
    g && (d.onclick = e);
    f && g && (d.ondblclick = J);
    return d;
  }
  function Ia(a, c, d, e, f) {
    d = k("input", d, "button");
    d.value = c;
    d.onclick = e;
    a.appendChild(d);
    r(f) && Va(d, f, !0);
    return d;
  }
  function Ea(a) {
    Le.hasOwnProperty(a) && Le[a] !== null || (Le[a] = il(a));
    I.body.contains(Le[a]) || (Le[a] = il(a));
    return Le[a];
  }
  function il(a) {
    var c = null;
    if (E === null) {
      c = I.getElementById(a);
    } else {
      for (var d = E.getElementsByTagName("*"), e = d.length, f = 0; f < e; f++) {
        if (d[f].id === a) {
          c = d[f];
          break;
        }
      }
    }
    return c;
  }
  function $b(a, c) {
    try {
      a.contains(c) || a.appendChild(c);
    } catch (d) {
      console.warn(d.message);
    }
  }
  function mb(a, c) {
    try {
      a.contains(c) && a.removeChild(c);
    } catch (d) {
      console.warn(d.message);
    }
  }
  function J(a) {
    a.preventDefault();
    a.cancelBubble = !0;
  }
  function Rc(a) {
    a.cancelBubble = !0;
  }
  function wf(a, c) {
    var d = a.pageX, e = a.pageY, f = oj();
    c.style.display = "block";
    d + c.offsetWidth > ea.innerWidth ? d -= c.offsetWidth : d++;
    e + c.offsetHeight > ea.innerHeight ? e -= c.offsetHeight : e++;
    d < f.left && (d = a.pageX + 1);
    e < f.top && (e = a.pageY + 1);
    c.style.left = d + "px";
    c.style.top = e + "px";
  }
  function mc(a, c) {
    try {
      a.type = c;
    } catch (d) {
      console.error(d.message), a.type = "text";
    }
  }
  function Ze(a) {
    for (var c = 0, d = 0; a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop);) {
      c += a.offsetLeft - a.scrollLeft, d += a.offsetTop - a.scrollTop, a = a.offsetParent;
    }
    return {left:c, top:d};
  }
  function oj() {
    var a = I.documentElement;
    return {left:(ea.pageXOffset || a.scrollLeft) - (a.clientLeft || 0), top:(ea.pageYOffset || a.scrollTop) - (a.clientTop || 0)};
  }
  function Ge(a) {
    (a = r(a) ? a : !0) && kb.pop();
  }
  function ue(a, c) {
    c = r(c) ? c : !0;
    a = ic.parse(ic.stringify(a));
    a.from = new Date(a.from);
    a.to = new Date(a.to);
    r(a.repeatEnds) && (a.repeatEnds = new Date(a.repeatEnds));
    delete a.created;
    delete a.lastUpdated;
    c && delete a.id;
    return a;
  }
  function Ke(a, c) {
    a !== null && (a.className = c);
  }
  function rc(a) {
    var c = a;
    b.allowHtmlInDisplay || (c = k("div"), c.innerHTML = a, c = c.innerText);
    return c;
  }
  function Se(a, c, d) {
    d = r(d) ? d : !0;
    var e = null;
    ea.getComputedStyle ? e = I.defaultView.getComputedStyle(a, null).getPropertyValue(c) : a.currentStyle && (e = a.currentStyle[c]);
    d && (e = parseFloat(e, 10));
    return e;
  }
  function D(a, c) {
    b.allowHtmlInDisplay ? a.innerHTML = c : a.innerText = rc(c);
  }
  function $a(a, c) {
    a !== null && (a.style.display = c ? "inline-block" : "none");
  }
  function Ch(a, c, d) {
    a = E.getElementsByClassName(a);
    for (var e = a.length, f = 0; f < e; f++) {
      for (var g = a[f].children, h = g.length, l = 0; l < h; l++) {
        g[l] !== d && c(g[l]);
      }
    }
  }
  function rd(a) {
    for (var c = a.children, d = c.length - 1; d--;) {
      a.appendChild(c[d]);
    }
  }
  function pg(a, c) {
    a = I.getElementsByClassName(a);
    a = [].slice.call(a);
    for (var d = a.length, e = 0; e < d; e++) {
      var f = a[e];
      f.id !== Da && (r(c) ? f.className = c : f.style.display = "none");
    }
  }
  function $h(a, c) {
    for (a = a.getElementsByClassName(c); a[0];) {
      a[0].parentNode.removeChild(a[0]);
    }
  }
  function Fk(a, c) {
    for (a = a.getElementsByClassName(c); a[0];) {
      a[0].className = a[0].className.replace(c, n.empty);
    }
  }
  function ma(a, c, d, e) {
    var f = k("div", "radio-button-container");
    a.appendChild(f);
    a = k("label", "radio-button");
    f.appendChild(a);
    f = k("input", null, "radio");
    f.name = d;
    a.appendChild(f);
    r(e) && (f.onchange = e);
    a.appendChild(k("span", "check-mark"));
    ja(a, c, "text");
    return f;
  }
  function M(a, c, d, e, f, g, h) {
    g = r(g) ? n.space + g : n.empty;
    var l = k("div");
    a.appendChild(l);
    a = k("label", "checkbox" + g);
    l.appendChild(a);
    r(h) && (a.onclick = h);
    h = k("input", null, "checkbox");
    a.appendChild(h);
    r(e) && (h.name = e);
    r(d) && (h.onchange = d);
    r(f) && (h.checked = f);
    a.appendChild(k("span", "check-mark"));
    ja(a, c, "text");
    return [h, a];
  }
  function x(a, c, d, e, f) {
    c = k("div", c);
    c.ondblclick = J;
    c.onclick = e;
    a.appendChild(c);
    Va(c, d, f);
    return c;
  }
  function sm(a, c) {
    a.innerHTML = n.empty;
    var d = k("div", "no-events-available-text");
    a.appendChild(d);
    ua(d, b.noEventsAvailableFullText);
    b.manualEditingEnabled && (d.appendChild(k("div")), ja(d, b.clickText + n.space), ja(d, b.hereText, "link", c), ja(d, n.space + b.toAddANewEventText));
  }
  function Q(a) {
    a = a.toString();
    return a.length === 1 ? "0" + a : a;
  }
  function Sd(a) {
    return a.replace(/^\s+|\s+$/g, n.empty);
  }
  function kc() {
    for (var a = [], c = 0; c < 32; c++) {
      c !== 8 && c !== 12 && c !== 16 && c !== 20 || a.push("-");
      var d = qa.floor(qa.random() * 16).toString(16);
      a.push(d);
    }
    return a.join(n.empty);
  }
  function ta(a, c) {
    return a.substring(0, c.length) === c;
  }
  function Km(a, c) {
    var d = a;
    c = r(c) ? c : 30;
    a.length > c && (c = c % 2 === 0 ? c / 2 : (c - 1) / 2, d = a.substring(0, c) + "..." + a.substring(a.length - c));
    return d;
  }
  function r(a) {
    return a !== void 0 && a !== null && a !== n.empty;
  }
  function Yh(a) {
    return typeof a === "function";
  }
  function dd(a) {
    return r(a) && Yh(a);
  }
  function W(a) {
    return r(a) && typeof a === "string";
  }
  function Fa(a) {
    return r(a) && typeof a === "number";
  }
  function ob(a) {
    return r(a) && typeof a === "boolean";
  }
  function Ta(a) {
    return r(a) && typeof a === "object";
  }
  function ya(a) {
    return Ta(a) && a instanceof Array;
  }
  function ab(a) {
    return W(a) && a !== n.empty;
  }
  function Dc(a) {
    return Ta(a) && a instanceof Date;
  }
  function hj(a) {
    return Ta(a) && a.tagName !== void 0;
  }
  function sk(a) {
    return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(a);
  }
  function ce(a, c) {
    var d = ya(a) && ya(c);
    d && (a.sort(), c.sort(), d = ic.stringify(a) === ic.stringify(c));
    return d;
  }
  function p(a, c) {
    return typeof a === "string" ? a : c;
  }
  function hb(a, c) {
    return W(a) ? a : c;
  }
  function v(a, c) {
    return ob(a) ? a : c;
  }
  function xa(a, c) {
    return Fa(a) ? a : c;
  }
  function jg(a, c) {
    return ya(a) ? a : c;
  }
  function Si(a, c) {
    return Dc(a) ? a : c;
  }
  function H(a, c) {
    return dd(a) ? a : c;
  }
  function qb() {
    if (b.useLocalStorageForEvents && ea.localStorage) {
      if (b.useLocalStorageForEvents && ea.localStorage) {
        for (var a = ea.localStorage.length, c = [], d = 0; d < a; d++) {
          ta(ea.localStorage.key(d), "CJS_") && c.push(ea.localStorage.key(d));
        }
        a = c.length;
        for (d = 0; d < a; d++) {
          ea.localStorage.removeItem(c[d]);
        }
      }
      c = Ab(Gd());
      a = c.length;
      for (d = 0; d < a; d++) {
        var e = ic.stringify(c[d]);
        ea.localStorage.setItem("CJS_" + d.toString(), e);
      }
    }
  }
  function Qi(a) {
    for (var c = a.length, d = [], e = [], f = function(m, q) {
      d.push(m);
      e = e.concat(q);
      d.length === c && (m = e, m.length > 0 && (qb(), Sb(), La(), ra(), Xa(b.eventsImportedText.replace("{0}", m.length)), A(b.events.onEventsImported, m)));
    }, g = 0; g < c; g++) {
      var h = a[g], l = h.name.split(".").pop().toLowerCase();
      l === "json" ? Qm(h, f) : (l === "ics" || l === "ical") && Rm(h, f);
    }
  }
  function Qm(a, c) {
    var d = new FileReader(), e = [];
    d.readAsText(a);
    d.onloadend = function() {
      c(a.name, e);
    };
    d.onload = function(f) {
      f = Re(f.target.result);
      Ta(f) && f.hasOwnProperty("events") && (f = f.events);
      for (var g = f.length, h = 0; h < g; h++) {
        var l = f[h];
        u.removeEvent(l.id, !1, !1);
        u.addEvent(l, !1, !1) && e.push(l);
      }
    };
  }
  function Rm(a, c) {
    var d = new FileReader(), e = [];
    d.readAsText(a);
    d.onloadend = function() {
      c(a.name, e);
    };
    d.onload = function(f) {
      f = f.target.result.split(n.newLineCharacterReturn);
      var g = f.length;
      if (f[0].indexOf("BEGIN:VCALENDAR") > G.notFound && f[g - 1].indexOf("END:VCALENDAR") > G.notFound) {
        for (var h = !1, l = {}, m = 0; m < g; m++) {
          var q = f[m];
          if (q.indexOf("BEGIN:VEVENT") > G.notFound) {
            h = !0;
          } else if (q.indexOf("END:VEVENT") > G.notFound) {
            var t = ic.parse(ic.stringify(l));
            h = !1;
            l = {};
            u.removeEvent(t.id, !1, !1);
            u.addEvent(t, !1, !1) && e.push(t);
          }
          if (h) {
            if (ta(q, "UID:")) {
              l.id = q.split(":").pop();
            } else if (ta(q, "SUMMARY:")) {
              l.title = q.split(":").pop();
            } else if (ta(q, "DESCRIPTION:")) {
              l.description = q.split(":").pop();
            } else if (ta(q, "DTSTART:") || ta(q, "DTSTART;")) {
              l.from = Fh(q.split(":").pop()), l.isAllDay = q.split(":").pop().length === 8;
            } else if (ta(q, "DTEND:") || ta(q, "DTEND;")) {
              l.to = Fh(q.split(":").pop(), !0);
            } else if (ta(q, "CREATED:")) {
              l.created = Fh(q.split(":").pop());
            } else if (ta(q, "LOCATION:")) {
              l.location = q.split(":").pop();
            } else if (ta(q, "URL:")) {
              l.url = q.split(":").pop();
            } else if (ta(q, "TRANSP:")) {
              l.showAsBusy = q.split(":").pop() === "OPAQUE";
            } else if (ta(q, "BEGIN:VALARM")) {
              l.showAlerts = !0;
            } else if (ta(q, "CATEGORIES:")) {
              l.group = q.split(":").pop();
            } else if (ta(q, "ORGANIZER;")) {
              t = l, q = q.split(";").pop().split(":"), t.organizerName = q[0].replace("CN=", n.empty), t.organizerEmailAddress = q[2];
            } else if (ta(q, "RRULE:")) {
              t = l;
              q = q.split(":").pop().split(";");
              for (var C = q.length, F = null, aa = null, pb = null, V = 0; V < C; V++) {
                var Ja = q[V];
                ta(Ja, "FREQ=") ? F = Ja.split("=")[1] : ta(Ja, "INTERVAL=") ? aa = Ja.split("=")[1] : ta(Ja, "UNTIL=") && (pb = Ja.split("=")[1]);
              }
              r(F) && (r(aa) && (aa = parseInt(aa), aa >= 2 && F !== "WEEKLY" && (t.repeatEveryCustomValue = aa)), r(t.repeatEveryCustomValue) ? F === "DAILY" ? t.repeatEveryCustomType = O.daily : F === "WEEKLY" ? t.repeatEveryCustomType = O.weekly : F === "MONTHLY" ? t.repeatEveryCustomType = O.monthly : F === "YEARLY" && (t.repeatEveryCustomType = O.yearly) : F === "DAILY" ? t.repeatEvery = z.everyDay : F === "WEEKLY" ? t.repeatEvery = z.everyWeek : F === "MONTHLY" ? t.repeatEvery = z.everyMonth : 
              F === "MONTHLY" && aa === 2 ? t.repeatEvery = z.every2Weeks : F === "YEARLY" && (t.repeatEvery = z.everyYear), r(pb) && (q = Fh(pb), q.setDate(q.getDate() - 1), t.repeatEnds = q));
            }
          }
        }
      }
    };
  }
  function Fh(a, c) {
    var d = n.empty, e = a.length === 8;
    d += a.substring(0, 4);
    a = a.slice(4);
    d += "-" + a.substring(0, 2);
    a = a.slice(2);
    d += "-" + a.substring(0, 2);
    a = a.slice(2);
    d += "T";
    e ? (c = r(c) ? c : !1, d += c ? "23:59:00" : "00:00:00") : (a = a.slice(1), d += a.substring(0, 2), a = a.slice(2), d += ":" + a.substring(0, 2), a = a.slice(2), d += ":" + a.substring(0, 2), a.slice(2));
    return new Date(d + "Z");
  }
  function Il() {
    var a = k("input", null, "file");
    a.accept = ".ical, .ics, .json";
    a.multiple = "multiple";
    a.onchange = function() {
      Qi(a.files);
    };
    Nb();
    a.click();
  }
  function Bc(a, c, d, e) {
    c = r(c) ? c.toLowerCase() : "csv";
    e = r(e) ? e : !1;
    var f = n.empty, g = Ab, h = [];
    h = r(a) ? h.concat(a) : Gd();
    h = Ab(h);
    a = g(h, !1);
    if (c === "csv") {
      f = a.length;
      g = Ti();
      h = g[0];
      var l = g[1], m = [];
      g = [];
      for (var q = 0; q < l; q++) {
        m.push(jl(h[q]));
      }
      g.push(m.join(","));
      for (h = 0; h < f; h++) {
        l = g;
        m = Ui(a[h]);
        q = m.length;
        for (var t = 0; t < q; t++) {
          m[t] = jl(m[t]);
        }
        l.push(m.join(","));
      }
      f = g.join(n.newLine);
    } else if (c === "xml") {
      h = d;
      f = [];
      g = a.length;
      f.push('<?xml version="1.0" ?>');
      f.push("<Calendar>");
      r(h) && f.push("<Filename>" + h + "</Filename>");
      f.push("<LastModified>" + Vi() + "</LastModified>");
      f.push("</Calendar>");
      f.push("<Events>");
      for (h = 0; h < g; h++) {
        l = a[h];
        m = Gh(l);
        q = m.length;
        f.push("<Event>");
        for (t = 0; t < q; t++) {
          var C = m[t];
          if (C !== "customTags" && l.hasOwnProperty(C) && l[C] !== null) {
            var F = Wi(C);
            f.push("<" + F + ">" + Hh(C, l[C]) + "</" + F + ">");
          }
        }
        f.push("</Event>");
      }
      f.push("</Events>");
      f = f.join(n.newLine);
    } else if (c === "json") {
      f = gk(a);
    } else if (c === "text") {
      h = d;
      f = [];
      g = a.length;
      r(h) && f.push("Filename: " + h);
      f.push("Last Modified: " + Vi());
      f.push(n.empty);
      for (h = 0; h < g; h++) {
        l = a[h];
        m = Gh(l);
        q = m.length;
        for (t = 0; t < q; t++) {
          C = m[t], C !== "customTags" && l.hasOwnProperty(C) && l[C] !== null && f.push(Wi(C) + ": " + Hh(C, l[C]));
        }
        f.push(n.empty);
      }
      f.pop();
      f = f.join(n.newLine);
    } else if (c === "ical") {
      f = [];
      g = a.length;
      f.push("BEGIN:VCALENDAR");
      f.push("VERSION:2.0");
      f.push("PRODID:-//Bunoon//Calendar.js v" + u.getVersion() + "//EN");
      f.push("CALSCALE:GREGORIAN");
      for (h = 0; h < g; h++) {
        l = a[h];
        m = K(l.organizerName);
        q = K(l.organizerEmailAddress);
        C = L(l.repeatEvery);
        W(m) || (m = b.organizerName);
        W(q) || (q = b.organizerEmailAddress);
        f.push("BEGIN:VEVENT");
        f.push("UID:" + K(l.id));
        f.push("STATUS:CONFIRMED");
        f.push("SEQUENCE:0");
        !ob(l.showAsBusy) || l.showAsBusy ? f.push("TRANSP:OPAQUE") : f.push("TRANSP:TRANSPARENT");
        l.isAllDay ? (f.push("DTSTART:" + kl(l.from)), f.push("DTEND:" + kl(l.to))) : (f.push("DTSTART:" + Me(l.from)), f.push("DTEND:" + Me(l.to)));
        Dc(l.created) && (t = Me(l.created), f.push("DTSTAMP:" + t), f.push("CREATED:" + t));
        Dc(l.lastUpdated) && f.push("LAST-MODIFIED:" + Me(l.lastUpdated));
        W(m) && W(q) && f.push("ORGANIZER;CN=" + m + ":MAILTO:" + q);
        if (C !== z.never) {
          m = f;
          q = m.push;
          t = l;
          F = C;
          C = [];
          if (F === z.custom) {
            F = L(t.repeatEveryCustomType);
            var aa = L(t.repeatEveryCustomValue);
            F === O.daily ? C.push("FREQ=DAILY") : F === O.weekly ? C.push("FREQ=WEEKLY") : F === O.monthly ? C.push("FREQ=MONTHLY") : F === O.yearly && C.push("FREQ=YEARLY");
            C.push("INTERVAL=" + aa.toString());
          } else {
            F === z.everyDay ? C.push("FREQ=DAILY") : F === z.everyWeek || F === z.every2Weeks ? C.push("FREQ=WEEKLY") : F === z.everyMonth ? C.push("FREQ=MONTHLY") : F === z.everyYear && C.push("FREQ=YEARLY"), F === z.every2Weeks ? C.push("INTERVAL=2") : C.push("INTERVAL=1");
          }
          Dc(t.repeatEnds) && (t = new Date(t.repeatEnds), t.setDate(t.getDate() + 1), C.push("UNTIL=" + Me(t)));
          t = C.join(";");
          q.call(m, "RRULE:" + t);
        }
        W(l.title) && f.push("SUMMARY:" + kg(l.title));
        W(l.description) && f.push("DESCRIPTION:" + kg(l.description));
        W(l.location) && f.push("LOCATION:" + kg(l.location));
        W(l.url) && f.push("URL:" + kg(l.url));
        W(l.group) && f.push("CATEGORIES:" + kg(l.group));
        if (!ob(l.showAlerts) || l.showAlerts) {
          f.push("BEGIN:VALARM"), f.push("TRIGGER;VALUE=DATE-TIME:" + Me(l.from)), f.push("ACTION:DISPLAY"), f.push("END:VALARM");
        }
        f.push("END:VEVENT");
      }
      f.push("END:VCALENDAR");
      f = f.join(n.newLineCharacterReturn);
    } else if (c === "md") {
      f = a.length;
      g = Ti();
      h = g[1];
      g = ["| " + g[0].join(" | ") + " |"];
      l = [];
      for (m = 0; m < h; m++) {
        l.push("---");
      }
      g.push("| " + l.join(" | ") + " |");
      for (h = 0; h < f; h++) {
        l = Ui(a[h]), g.push("| " + l.join(" | ") + " |");
      }
      f = g.join(n.newLine);
    } else if (c === "html") {
      h = d;
      f = [];
      g = a.length;
      f.push("<!DOCTYPE html>");
      f.push("<html>");
      f.push("<head>");
      f.push('<meta charset="utf-8" />');
      f.push('<meta http-equiv="Last-Modified" content="' + Vi() + ' GMT" />');
      r(h) && f.push("<title>" + h + "</title>");
      f.push("</head>");
      f.push("<body>");
      for (h = 0; h < g; h++) {
        l = a[h];
        m = Gh(l);
        q = m.length;
        f.push("<h3><b>" + l.id + ":</b></h3>");
        f.push("<ul>");
        for (t = 0; t < q; t++) {
          C = m[t], C !== "customTags" && l.hasOwnProperty(C) && l[C] !== null && f.push("<li><b>" + Wi(C) + "</b>: " + Hh(C, l[C]) + "</li>");
        }
        f.push("</ul>");
      }
      f.push("</body>");
      f.push("</html>");
      f = f.join(n.newLine);
    } else if (c === "tsv") {
      f = a.length;
      g = Ti();
      h = g[0];
      l = g[1];
      m = [];
      g = [];
      for (q = 0; q < l; q++) {
        m.push(ll(h[q]));
      }
      g.push(m.join("\t"));
      for (h = 0; h < f; h++) {
        l = g;
        m = Ui(a[h]);
        q = m.length;
        for (t = 0; t < q; t++) {
          m[t] = ll(m[t]);
        }
        l.push(m.join("\t"));
      }
      f = g.join(n.newLine);
    }
    f !== n.empty && (e ? (Kf.clipboard.writeText(f), Xa(b.eventsExportedText)) : (e = k("a"), g = "text", l = h = c, c === "text" ? (h = "plain", l = "txt") : c === "ical" ? (h = "calendar", l = "ics") : c === "json" ? g = "application" : c === "md" ? h = "x-markdown" : c === "html" ? h = "html" : c === "tsv" && (h = "tab-separated-values"), h = [g, h, l], c = h[0], g = h[1], h = h[2], d = r(d) ? d : hk(h), e.style.display = "none", e.setAttribute("target", "_blank"), e.setAttribute("href", "data:" + 
    c + "/" + g + ";charset=utf-8," + encodeURIComponent(f)), e.setAttribute("download", d), I.body.appendChild(e), e.click(), I.body.removeChild(e), Xa(b.eventsExportedToText.replace("{0}", d))), A(b.events.onEventsExported, a));
  }
  function hk(a, c) {
    c = r(c) ? c : b.exportStartFilename;
    var d = new Date(), e = Q(d.getDate()) + "-" + Q(d.getMonth() + 1) + "-" + d.getFullYear();
    d = Q(d.getHours()) + "-" + Q(d.getMinutes());
    return c + e + "_" + d + "." + a;
  }
  function lg(a) {
    return a ? b.yesText : b.noText;
  }
  function Ne(a) {
    var c = b.repeatsNever;
    r(a) && (c = Q(a.getDate()) + "/" + Q(a.getMonth() + 1) + "/" + a.getFullYear(), a = Q(a.getHours()) + ":" + Q(a.getMinutes()), c = c + n.space + a);
    return c;
  }
  function K(a, c) {
    c = r(c) ? c : n.empty;
    return W(a) ? a : c;
  }
  function L(a, c) {
    c = r(c) ? c : 0;
    return Fa(a) ? a : c;
  }
  function $k(a, c) {
    c = r(c) ? c : 0;
    return ob(a) ? a ? 1 : 0 : c;
  }
  function xi(a, c) {
    c = r(c) ? c : !1;
    return ob(a) ? a : c;
  }
  function Uc(a, c) {
    c = r(c) ? c : [];
    return ya(a) ? a : c;
  }
  function vd(a) {
    var c = b.dailyText;
    a = L(a);
    a === z.everyDay ? c = b.repeatsEveryDayText : a === z.everyWeek ? c = b.repeatsEveryWeekText : a === z.every2Weeks ? c = b.repeatsEvery2WeeksText : a === z.everyMonth ? c = b.repeatsEveryMonthText : a === z.everyYear ? c = b.repeatsEveryYearText : a === z.custom && (c = b.repeatsByCustomSettingsText);
    return c;
  }
  function Ih(a, c) {
    c = r(c) ? c : !1;
    a = Uc(a);
    for (var d = a.length, e = 0; e < d; e++) {
      a[e] = c ? '"' + a[e] + '"' : a[e];
    }
    return a.join(",");
  }
  function Wi(a) {
    return a.charAt(0).toUpperCase() + a.slice(1);
  }
  function Hh(a, c, d) {
    var e = (d = r(d) ? d : !1) ? '"' + K(c) + '"' : K(c);
    typeof c === "boolean" ? e = d ? c.toString() : lg(c) : typeof c === "object" && c instanceof Date ? e = d ? '"' + c.toISOString() + '"' : Ne(c) : typeof c === "object" && c instanceof Array ? e = a !== "repeatEveryExcludeDays" || d ? d ? "[" + Ih(c) + "]" : Ih(c) : ml(c) : typeof c === "number" && (a !== "repeatEvery" || d ? a !== "repeatEveryCustomType" || d ? e = a !== "type" || d ? c.toString() : P[parseInt(c)].text : (a = b.dailyText, c = L(c), c === O.daily ? a = b.dailyText : c === O.weekly ? 
    a = b.weeklyText : c === O.monthly ? a = b.monthlyText : c === O.yearly && (a = b.yearlyText), e = a) : e = vd(c));
    return e;
  }
  function ml(a) {
    var c = [];
    if (ya(a)) {
      for (var d = a.length, e = 0; e < d; e++) {
        var f = a[e] - 1;
        f === -1 && (f = 6);
        c.push(b.dayNames[f]);
      }
    }
    return Ih(c);
  }
  function Ti() {
    var a = [b.idText, b.typeText, b.fromText, b.toText, b.isAllDayText, b.titleText, b.descriptionText, b.locationText, b.backgroundColorText, b.textColorText, b.borderColorText, b.repeatsText, b.repeatEndsText, b.repeatDaysToExcludeText, b.seriesIgnoreDatesText, b.createdText, b.lastUpdatedText, b.organizerNameText, b.organizerEmailAddressText, b.urlText, b.lockedText, b.showAlertsText, b.showAsBusyText, b.alertOffsetText];
    return [a, a.length];
  }
  function Ui(a) {
    var c = [];
    c.push(K(a.id));
    c.push(P[L(a.type)].text);
    c.push(Ne(a.from));
    c.push(Ne(a.to));
    c.push(lg(a.isAllDay));
    c.push(K(a.title));
    c.push(K(a.description));
    c.push(K(a.location));
    c.push(K(a.color));
    c.push(K(a.colorText));
    c.push(K(a.colorBorder));
    c.push(vd(a.repeatEvery));
    c.push(Ne(a.repeatEnds));
    c.push(ml(a.repeatEveryExcludeDays));
    c.push(Ih(a.seriesIgnoreDates));
    c.push(Ne(a.created));
    c.push(Ne(a.lastUpdated));
    c.push(K(a.organizerName));
    c.push(K(a.organizerEmailAddress));
    c.push(K(a.url));
    c.push(lg(a.locked));
    c.push(lg(!ob(a.showAlerts) || a.showAlerts));
    c.push(lg(!ob(a.showAsBusy) || a.showAsBusy));
    c.push(L(a.alertOffset));
    return c;
  }
  function Gh(a) {
    var c = [], d;
    for (d in a) {
      a.hasOwnProperty(d) && c.push(d);
    }
    c.sort();
    return c;
  }
  function Vi() {
    var a = new Date(), c = Oh("{ddd}, {dd} {mmm} {yyyy}", a);
    return c += " " + Q(a.getHours()) + ":" + Q(a.getMinutes()) + ":" + Q(a.getSeconds());
  }
  function jl(a) {
    a = a.toString().replace(/(\r\n|\n|\r)/gm, n.empty).replace(/(\s\s)/gm, n.space);
    a = a.replace(/"/g, '""');
    return '"' + a + '"';
  }
  function gk(a) {
    var c = [], d = a.length;
    c.push("{");
    c.push('"events": [');
    for (var e = 0; e < d; e++) {
      var f = a[e], g = Gh(f), h = g.length;
      c.push("{");
      for (var l = 0; l < h; l++) {
        var m = g[l];
        m !== "customTags" && f.hasOwnProperty(m) && f[m] !== null && c.push('"' + m + '":' + Hh(m, f[m], !0) + ",");
      }
      f = c[c.length - 1];
      c[c.length - 1] = f.substring(0, f.length - 1);
      c.push("},");
    }
    c[c.length - 1] = "}";
    c.push("]");
    c.push("}");
    return c.join(n.newLine);
  }
  function kg(a) {
    return rc(K(a)).replace(/\n|\r/g, n.empty);
  }
  function Me(a) {
    var c = [];
    r(a) && (c.push(a.getFullYear()), c.push(Q(a.getMonth() + 1)), c.push(Q(a.getDate())), c.push("T"), c.push(Q(a.getHours())), c.push(Q(a.getMinutes())), c.push("00Z"));
    return c.join(n.empty);
  }
  function kl(a) {
    var c = [];
    r(a) && (c.push(a.getFullYear()), c.push(Q(a.getMonth() + 1)), c.push(Q(a.getDate())));
    return c.join(n.empty);
  }
  function ll(a) {
    return a = a.replace(/\\/g, "\\\\");
  }
  function A(a) {
    var c = null, d = [].slice.call(arguments, 1);
    d.length > 0 && (c = !1);
    dd(a) && (c = a.apply(null, d));
    return c;
  }
  function ee(a, c, d) {
    dd(b.events.onEventClick) && a.addEventListener("click", function() {
      A(b.events.onEventClick, c);
    });
    b.manualEditingEnabled ? a.ondblclick = function(e) {
      J(e);
      r(d) ? T(c, null, null, d) : T(c);
    } : dd(b.events.onEventDoubleClick) && (a.ondblclick = function() {
      A(b.events.onEventDoubleClick, c);
    });
  }
  function bf(a) {
    r(a) && J(a);
    if (!w || ib) {
      a = new Date(B), a.setMonth(a.getMonth() - 1), a.getFullYear() >= b.minimumYear && (R(a), A(b.events.onPreviousMonth, a), xb());
    }
  }
  function cf(a) {
    r(a) && J(a);
    if (!w || ib) {
      a = new Date(B), a.setMonth(a.getMonth() + 1), a.getFullYear() <= b.maximumYear && (R(a), A(b.events.onNextMonth, a), xb());
    }
  }
  function sg() {
    if (!w || ib) {
      var a = new Date(B);
      a.setFullYear(a.getFullYear() - 1);
      a.getFullYear() >= b.minimumYear && (R(a), A(b.events.onPreviousYear, a), xb());
    }
  }
  function tg() {
    if (!w || ib) {
      var a = new Date(B);
      a.setFullYear(a.getFullYear() + 1);
      a.getFullYear() <= b.maximumYear && (R(a), A(b.events.onNextYear, a), xb());
    }
  }
  function ug() {
    if (!w || ib) {
      var a = new Date();
      if (B.getMonth() !== a.getMonth() || B.getFullYear() !== a.getFullYear()) {
        R(), A(b.events.onToday), xb();
      }
    }
  }
  function nl(a) {
    b = rb(a);
    b.views = rb(b.views);
    b.showDayNumberOrdinals = v(b.showDayNumberOrdinals, !0);
    b.dragAndDropForEventsEnabled = v(b.dragAndDropForEventsEnabled, !0);
    b.exportEventsEnabled = v(b.exportEventsEnabled, !0);
    b.manualEditingEnabled = v(b.manualEditingEnabled, !0);
    b.autoRefreshTimerDelay = xa(b.autoRefreshTimerDelay, 30000);
    b.fullScreenModeEnabled = v(b.fullScreenModeEnabled, !0);
    b.tooltipDelay = xa(b.tooltipDelay, 1000);
    b.holidays = jg(b.holidays, [{day:1, month:1, title:"New Year's Day", onClickUrl:"https://en.wikipedia.org/wiki/New_Year%27s_Day"}, {day:14, month:2, title:"Valentine's Day", onClickUrl:"https://en.wikipedia.org/wiki/Valentine%27s_Day"}, {day:1, month:4, title:"April Fools' Day", onClickUrl:"https://en.wikipedia.org/wiki/April_Fools%27_Day"}, {day:22, month:4, title:"Earth Day", onClickUrl:"https://en.wikipedia.org/wiki/Earth_Day"}, {day:31, month:10, title:"Halloween", onClickUrl:"https://en.wikipedia.org/wiki/Halloween"}, 
    {day:11, month:11, title:"Remembrance Day", onClickUrl:"https://en.wikipedia.org/wiki/Remembrance_Day"}, {day:24, month:12, title:"Christmas Eve", onClickUrl:"https://en.wikipedia.org/wiki/Christmas_Eve"}, {day:25, month:12, title:"Christmas Day", onClickUrl:"https://en.wikipedia.org/wiki/Christmas"}, {day:26, month:12, title:"Boxing Day", onClickUrl:"https://en.wikipedia.org/wiki/Boxing_Day"}, {day:31, month:12, title:"New Year's Eve", onClickUrl:"https://en.wikipedia.org/wiki/New_Year%27s_Eve"}]);
    b.organizerName = hb(b.organizerName, n.empty);
    b.organizerEmailAddress = hb(b.organizerEmailAddress, n.empty);
    b.spacing = xa(b.spacing, 10);
    b.maximumEventTitleLength = xa(b.maximumEventTitleLength, 0);
    b.maximumEventDescriptionLength = xa(b.maximumEventDescriptionLength, 0);
    b.maximumEventLocationLength = xa(b.maximumEventLocationLength, 0);
    b.maximumEventGroupLength = xa(b.maximumEventGroupLength, 0);
    b.eventNotificationsEnabled = v(b.eventNotificationsEnabled, !1);
    b.tooltipsEnabled = v(b.tooltipsEnabled, !0);
    b.urlWindowTarget = hb(b.urlWindowTarget, "_blank");
    b.defaultEventBackgroundColor = hb(b.defaultEventBackgroundColor, "#484848");
    b.defaultEventTextColor = hb(b.defaultEventTextColor, "#F5F5F5");
    b.defaultEventBorderColor = hb(b.defaultEventBorderColor, "#282828");
    b.hideEventsWithoutGroupAssigned = v(b.hideEventsWithoutGroupAssigned, !1);
    b.showHolidays = v(b.showHolidays, !0);
    b.useTemplateWhenAddingNewEvent = v(b.useTemplateWhenAddingNewEvent, !0);
    b.useEscapeKeyToExitFullScreenMode = v(b.useEscapeKeyToExitFullScreenMode, !0);
    b.allowHtmlInDisplay = v(b.allowHtmlInDisplay, !1);
    b.initialDateTime = Si(b.initialDateTime, null);
    b.data = jg(b.data, null);
    b.weekendDays = fd(b.weekendDays, 0) ? [0, 6] : b.weekendDays;
    b.workingDays = fd(b.workingDays, 0) ? [] : b.workingDays;
    b.minimumYear = xa(b.minimumYear, 1900);
    b.maximumYear = xa(b.maximumYear, 2099);
    b.defaultEventDuration = xa(b.defaultEventDuration, 30);
    b.configurationDialogEnabled = v(b.configurationDialogEnabled, !0);
    b.popUpNotificationsEnabled = v(b.popUpNotificationsEnabled, !0);
    b.startOfWeekDay = xa(b.startOfWeekDay, za.monday);
    b.useLocalStorageForEvents = v(b.useLocalStorageForEvents, !1);
    b.shortcutKeysEnabled = v(b.shortcutKeysEnabled, !0);
    b.reverseOrderDaysOfWeek = v(b.reverseOrderDaysOfWeek, !1);
    b.importEventsEnabled = v(b.importEventsEnabled, !0);
    b.useAmPmForTimeDisplays = v(b.useAmPmForTimeDisplays, !1);
    b.isWidget = v(b.isWidget, !1);
    b.viewToOpenOnFirstLoad = hb(b.viewToOpenOnFirstLoad, null);
    b.eventColorsEditingEnabled = v(b.eventColorsEditingEnabled, !0);
    b.eventTooltipDelay = xa(b.eventTooltipDelay, 1000);
    b.jumpToDateEnabled = v(b.jumpToDateEnabled, !0);
    fd(b.visibleDays) && (b.visibleDays = [0, 1, 2, 3, 4, 5, 6], ud = []);
    a = hb(b.workingHoursStart, null);
    var c = hb(b.workingHoursEnd, null);
    r(a) || (a = b.workingHoursStart, a = Ta(a) ? a : null);
    r(c) || (c = b.workingHoursEnd, c = Ta(c) ? c : null);
    b.workingHoursStart = a;
    b.workingHoursEnd = c;
    b.sideMenu = rb(b.views.sideMenu);
    b.sideMenu.showDays = v(b.sideMenu.showDays, !0);
    b.sideMenu.showGroups = v(b.sideMenu.showGroups, !0);
    b.sideMenu.showEventTypes = v(b.sideMenu.showEventTypes, !0);
    b.sideMenu.showWorkingDays = v(b.sideMenu.showWorkingDays, !0);
    b.sideMenu.showWeekendDays = v(b.sideMenu.showWeekendDays, !0);
    b.views.fullDay = rb(b.views.fullDay);
    b.views.fullDay.enabled = v(b.views.fullDay.enabled, !0);
    b.views.fullDay.showAllDayEventDetails = v(b.views.fullDay.showAllDayEventDetails, !1);
    b.views.fullDay.minutesBetweenSections = xa(b.views.fullDay.minutesBetweenSections, 30);
    b.views.fullDay.showTimelineArrow = v(b.views.fullDay.showTimelineArrow, !0);
    b.views.fullDay.showExtraTitleBarButtons = v(b.views.fullDay.showExtraTitleBarButtons, !0);
    b.views.fullWeek = rb(b.views.fullWeek);
    b.views.fullWeek.enabled = v(b.views.fullWeek.enabled, !0);
    b.views.fullWeek.showAllDayEventDetails = v(b.views.fullWeek.showAllDayEventDetails, !1);
    b.views.fullWeek.showDayNamesHeaders = v(b.views.fullWeek.showDayNamesHeaders, !0);
    b.views.fullWeek.minutesBetweenSections = xa(b.views.fullWeek.minutesBetweenSections, 30);
    b.views.fullWeek.showTimelineArrow = v(b.views.fullWeek.showTimelineArrow, !0);
    b.views.fullWeek.showWeekNumbersInTitles = v(b.views.fullWeek.showWeekNumbersInTitles, !1);
    b.views.fullWeek.showExtraTitleBarButtons = v(b.views.fullWeek.showExtraTitleBarButtons, !0);
    b.views.fullWeek.showDatesInDayHeaders = v(b.views.fullWeek.showDatesInDayHeaders, !0);
    b.views.fullMonth = rb(b.views.fullMonth);
    b.views.fullMonth.maximumEventsPerDayDisplay = xa(b.views.fullMonth.maximumEventsPerDayDisplay, 3);
    b.views.fullMonth.showTimesInEvents = v(b.views.fullMonth.showTimesInEvents, !1);
    b.views.fullMonth.minimumDayHeight = xa(b.views.fullMonth.minimumDayHeight, 0);
    b.views.fullMonth.showPreviousNextMonthNames = v(b.views.fullMonth.showPreviousNextMonthNames, !0);
    b.views.fullMonth.useOnlyDotEvents = v(b.views.fullMonth.useOnlyDotEvents, !1);
    b.views.fullMonth.applyCssToEventsNotInCurrentMonth = v(b.views.fullMonth.applyCssToEventsNotInCurrentMonth, !0);
    b.views.fullMonth.addYearButtons = v(b.views.fullMonth.addYearButtons, !1);
    b.views.fullMonth.titleBarDateFormat = hb(b.views.fullMonth.titleBarDateFormat, "{mmmm} {yyyy}");
    b.views.fullMonth.showDayNamesHeaders = v(b.views.fullMonth.showDayNamesHeaders, !0);
    b.views.fullMonth.isPinUpViewEnabled = v(b.views.fullMonth.isPinUpViewEnabled, !1);
    b.views.fullMonth.pinUpViewImageUrls = jg(b.views.fullMonth.pinUpViewImageUrls, []);
    b.views.fullMonth.showMonthButtonsInYearDropDownMenu = v(b.views.fullMonth.showMonthButtonsInYearDropDownMenu, !0);
    b.views.fullMonth.showExtraTitleBarButtons = v(b.views.fullMonth.showExtraTitleBarButtons, !0);
    b.views.fullMonth.pinUpViewImageCssClasses = jg(b.views.fullMonth.pinUpViewImageCssClasses, []);
    ob(b.views.fullMonth.allowEventScrolling) || (b.views.fullMonth.allowEventScrolling = !1, b.views.fullMonth.allowEventScrolling && (b.views.fullMonth.maximumEventsPerDayDisplay = 0));
    b.views.fullYear = rb(b.views.fullYear);
    b.views.fullYear.enabled = v(b.views.fullYear.enabled, !0);
    b.views.fullYear.showExtraTitleBarButtons = v(b.views.fullYear.showExtraTitleBarButtons, !0);
    b.views.timeline = rb(b.views.timeline);
    b.views.timeline.enabled = v(b.views.timeline.enabled, !0);
    b.views.timeline.defaultAxis = hb(b.views.timeline.defaultAxis, "group");
    b.views.timeline.minutesBetweenSections = xa(b.views.timeline.minutesBetweenSections, 30);
    b.views.timeline.showExtraTitleBarButtons = v(b.views.timeline.showExtraTitleBarButtons, !0);
    b.views.allEvents = rb(b.views.allEvents);
    b.views.allEvents.enabled = v(b.views.allEvents.enabled, !0);
    b.views.allEvents.showExtraTitleBarButtons = v(b.views.allEvents.showExtraTitleBarButtons, !0);
    b.views.datePicker = rb(b.views.datePicker);
    b.views.datePicker.selectedDateFormat = hb(b.views.datePicker.selectedDateFormat, "{d}{o} {mmmm} {yyyy}");
    b.views.datePicker.minimumDate = Si(b.views.datePicker.minimumDate, null);
    b.views.datePicker.maximumDate = Si(b.views.datePicker.maximumDate, null);
    b.events = rb(b.events);
    b.events.onPreviousMonth = H(b.events.onPreviousMonth, null);
    b.events.onNextMonth = H(b.events.onNextMonth, null);
    b.events.onPreviousYear = H(b.events.onPreviousYear, null);
    b.events.onNextYear = H(b.events.onNextYear, null);
    b.events.onToday = H(b.events.onToday, null);
    b.events.onEventAdded = H(b.events.onEventAdded, null);
    b.events.onEventUpdated = H(b.events.onEventUpdated, null);
    b.events.onEventRemoved = H(b.events.onEventRemoved, null);
    b.events.onEventsAdded = H(b.events.onEventsAdded, null);
    b.events.onEventsCleared = H(b.events.onEventsCleared, null);
    b.events.onEventsExported = H(b.events.onEventsExported, null);
    b.events.onSetDate = H(b.events.onSetDate, null);
    b.events.onEventsSet = H(b.events.onEventsSet, null);
    b.events.onGroupsCleared = H(b.events.onGroupsCleared, null);
    b.events.onEventsUpdated = H(b.events.onEventsUpdated, null);
    b.events.onOptionsUpdated = H(b.events.onOptionsUpdated, null);
    b.events.onNotificationClicked = H(b.events.onNotificationClicked, null);
    b.events.onSearchOptionsUpdated = H(b.events.onSearchOptionsUpdated, null);
    b.events.onFullScreenModeChanged = H(b.events.onFullScreenModeChanged, null);
    b.events.onEventsSetFromJSON = H(b.events.onEventsSetFromJSON, null);
    b.events.onEventsAddedFromJSON = H(b.events.onEventsAddedFromJSON, null);
    b.events.onDatePickerDateChanged = H(b.events.onDatePickerDateChanged, null);
    b.events.onGroupRemoved = H(b.events.onGroupRemoved, null);
    b.events.onEventUrlClicked = H(b.events.onEventUrlClicked, null);
    b.events.onDestroy = H(b.events.onDestroy, null);
    b.events.onRefresh = H(b.events.onRefresh, null);
    b.events.onDatePickerOpened = H(b.events.onDatePickerOpened, null);
    b.events.onDatePickerClosed = H(b.events.onDatePickerClosed, null);
    b.events.onRender = H(b.events.onRender, null);
    b.events.onEventDragStart = H(b.events.onEventDragStart, null);
    b.events.onEventDragStop = H(b.events.onEventDragStop, null);
    b.events.onEventDragDrop = H(b.events.onEventDragDrop, null);
    b.events.onEventClick = H(b.events.onEventClick, null);
    b.events.onEventDoubleClick = H(b.events.onEventDoubleClick, null);
    b.events.onVisibleGroupsChanged = H(b.events.onVisibleGroupsChanged, null);
    b.events.onVisibleEventTypesChanged = H(b.events.onVisibleEventTypesChanged, null);
    b.events.onNotification = H(b.events.onNotification, null);
    b.events.onBeforeEventAddEdit = H(b.events.onBeforeEventAddEdit, null);
    b.events.onBusyStateChange = H(b.events.onBusyStateChange, null);
    b.events.onEventsFetch = H(b.events.onEventsFetch, null);
    b.events.onEventsImported = H(b.events.onEventsImported, null);
    b.events.onFullDayEventRender = H(b.events.onFullDayEventRender, null);
    b.events.onFullWeekEventRender = H(b.events.onFullWeekEventRender, null);
    b.events.onFullMonthEventRender = H(b.events.onFullMonthEventRender, null);
    b.events.onAllEventsEventRender = H(b.events.onAllEventsEventRender, null);
    b.events.onTimelineEventRender = H(b.events.onTimelineEventRender, null);
    b.events.onWidgetEventRender = H(b.events.onWidgetEventRender, null);
    b.events.onToolTipEventRender = H(b.events.onToolTipEventRender, null);
    b.events.onFullDayTitleRender = H(b.events.onFullDayTitleRender, null);
    b.events.onFullWeekTitleRender = H(b.events.onFullWeekTitleRender, null);
    b.events.onTimelineTitleRender = H(b.events.onTimelineTitleRender, null);
    b.events.onFullMonthPinUpRender = H(b.events.onFullMonthPinUpRender, null);
    b.events.onViewChange = H(b.events.onViewChange, null);
    fd(b.dayHeaderNames, 7) && (b.dayHeaderNames = "Mon Tue Wed Thu Fri Sat Sun".split(" "));
    fd(b.dayNames, 7) && (b.dayNames = "Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "));
    fd(b.dayNamesAbbreviated, 7) && (b.dayNamesAbbreviated = "Mon Tue Wed Thu Fri Sat Sun".split(" "));
    fd(b.monthNames, 12) && (b.monthNames = "January February March April May June July August September October November December".split(" "));
    fd(b.monthNamesAbbreviated, 12) && (b.monthNamesAbbreviated = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "));
    b.previousMonthTooltipText = p(b.previousMonthTooltipText, "Previous Month");
    b.nextMonthTooltipText = p(b.nextMonthTooltipText, "Next Month");
    b.previousDayTooltipText = p(b.previousDayTooltipText, "Previous Day");
    b.nextDayTooltipText = p(b.nextDayTooltipText, "Next Day");
    b.previousWeekTooltipText = p(b.previousWeekTooltipText, "Previous Week");
    b.nextWeekTooltipText = p(b.nextWeekTooltipText, "Next Week");
    b.addEventTooltipText = p(b.addEventTooltipText, "Add Event");
    b.closeTooltipText = p(b.closeTooltipText, "Close");
    b.exportEventsTooltipText = p(b.exportEventsTooltipText, "Export Events");
    b.todayTooltipText = p(b.todayTooltipText, "Today");
    b.refreshTooltipText = p(b.refreshTooltipText, "Refresh");
    b.searchTooltipText = p(b.searchTooltipText, "Search");
    b.expandDayTooltipText = p(b.expandDayTooltipText, "Expand Day");
    b.viewAllEventsTooltipText = p(b.viewAllEventsTooltipText, "View All Events");
    b.viewFullWeekTooltipText = p(b.viewFullWeekTooltipText, "View Full Week");
    b.fromText = p(b.fromText, "From:");
    b.toText = p(b.toText, "To:");
    b.isAllDayText = p(b.isAllDayText, "Is All-Day");
    b.titleText = p(b.titleText, "Title:");
    b.descriptionText = p(b.descriptionText, "Description:");
    b.locationText = p(b.locationText, "Location:");
    b.addText = p(b.addText, "Add");
    b.updateText = p(b.updateText, "Update");
    b.cancelText = p(b.cancelText, "Cancel");
    b.removeEventText = p(b.removeEventText, "Remove");
    b.addEventTitle = p(b.addEventTitle, "Add Event");
    b.editEventTitle = p(b.editEventTitle, "Edit Event");
    b.exportStartFilename = p(b.exportStartFilename, "exported_events_");
    b.fromTimeErrorMessage = p(b.fromTimeErrorMessage, "Please select a valid 'From' time.");
    b.toTimeErrorMessage = p(b.toTimeErrorMessage, "Please select a valid 'To' time.");
    b.toSmallerThanFromErrorMessage = p(b.toSmallerThanFromErrorMessage, "Please select a 'To' date that is larger than the 'From' date.");
    b.titleErrorMessage = p(b.titleErrorMessage, "Please enter a value in the 'Title' field (no empty space).");
    b.stText = p(b.stText, "st");
    b.ndText = p(b.ndText, "nd");
    b.rdText = p(b.rdText, "rd");
    b.thText = p(b.thText, "th");
    b.yesText = p(b.yesText, "Yes");
    b.noText = p(b.noText, "No");
    b.allDayText = p(b.allDayText, "All-Day");
    b.allEventsText = p(b.allEventsText, "All Events");
    b.toTimeText = p(b.toTimeText, "to");
    b.confirmEventRemoveTitle = p(b.confirmEventRemoveTitle, "Confirm Event Removal");
    b.confirmEventRemoveMessage = p(b.confirmEventRemoveMessage, "Removing this event cannot be undone.  Do you want to continue?");
    b.okText = p(b.okText, "OK");
    b.exportEventsTitle = p(b.exportEventsTitle, "Export Events");
    b.selectColorsText = p(b.selectColorsText, "Select Colors");
    b.backgroundColorText = p(b.backgroundColorText, "Background Color:");
    b.textColorText = p(b.textColorText, "Text Color:");
    b.borderColorText = p(b.borderColorText, "Border Color:");
    b.searchEventsTitle = p(b.searchEventsTitle, "Search Events");
    b.previousText = p(b.previousText, "Previous");
    b.nextText = p(b.nextText, "Next");
    b.matchCaseText = p(b.matchCaseText, "Match Case");
    b.repeatsText = p(b.repeatsText, "Repeats:");
    b.repeatDaysToExcludeText = p(b.repeatDaysToExcludeText, "Repeat Days To Exclude:");
    b.daysToExcludeText = p(b.daysToExcludeText, "Days To Exclude:");
    b.seriesIgnoreDatesText = p(b.seriesIgnoreDatesText, "Series Ignore Dates:");
    b.repeatsNever = p(b.repeatsNever, "Never");
    b.repeatsEveryDayText = p(b.repeatsEveryDayText, "Every Day");
    b.repeatsEveryWeekText = p(b.repeatsEveryWeekText, "Every Week");
    b.repeatsEvery2WeeksText = p(b.repeatsEvery2WeeksText, "Every 2 Weeks");
    b.repeatsEveryMonthText = p(b.repeatsEveryMonthText, "Every Month");
    b.repeatsEveryYearText = p(b.repeatsEveryYearText, "Every Year");
    b.repeatsCustomText = p(b.repeatsCustomText, "Custom:");
    b.repeatOptionsTitle = p(b.repeatOptionsTitle, "Repeat Options");
    b.moreText = p(b.moreText, "More");
    b.includeText = p(b.includeText, "Include:");
    b.minimizedTooltipText = p(b.minimizedTooltipText, "Minimize");
    b.restoreTooltipText = p(b.restoreTooltipText, "Restore");
    b.removeAllEventsInSeriesText = p(b.removeAllEventsInSeriesText, "Remove All Events In Series");
    b.createdText = p(b.createdText, "Created:");
    b.organizerNameText = p(b.organizerNameText, "Organizer:");
    b.organizerEmailAddressText = p(b.organizerEmailAddressText, "Organizer Email:");
    b.enableFullScreenTooltipText = p(b.enableFullScreenTooltipText, "Turn On Full-Screen Mode");
    b.disableFullScreenTooltipText = p(b.disableFullScreenTooltipText, "Turn Off Full-Screen Mode");
    b.idText = p(b.idText, "ID:");
    b.expandMonthTooltipText = p(b.expandMonthTooltipText, "Expand Month");
    b.repeatEndsText = p(b.repeatEndsText, "Repeat Ends:");
    b.noEventsAvailableText = p(b.noEventsAvailableText, "No events available.");
    b.viewFullWeekText = p(b.viewFullWeekText, "View Full Week");
    b.noEventsAvailableFullText = p(b.noEventsAvailableFullText, "There are no events available to view.");
    b.clickText = p(b.clickText, "Click");
    b.hereText = p(b.hereText, "here");
    b.toAddANewEventText = p(b.toAddANewEventText, "to add a new event.");
    b.weekText = p(b.weekText, "Week");
    b.groupText = p(b.groupText, "Group:");
    b.configurationTooltipText = p(b.configurationTooltipText, "Configuration");
    b.configurationTitleText = p(b.configurationTitleText, "Configuration");
    b.groupsText = p(b.groupsText, "Groups");
    b.eventNotificationTitle = p(b.eventNotificationTitle, "Calendar.js");
    b.eventNotificationBody = p(b.eventNotificationBody, "The event '{0}' has started.");
    b.optionsText = p(b.optionsText, "Options:");
    b.startsWithText = p(b.startsWithText, "Starts With");
    b.endsWithText = p(b.endsWithText, "Ends With");
    b.containsText = p(b.containsText, "Contains");
    b.displayTabText = p(b.displayTabText, "Display");
    b.enableAutoRefreshForEventsText = p(b.enableAutoRefreshForEventsText, "Enable auto-refresh for events");
    b.enableBrowserNotificationsText = p(b.enableBrowserNotificationsText, "Enable browser notifications");
    b.enableTooltipsText = p(b.enableTooltipsText, "Enable tooltips");
    b.dayText = p(b.dayText, "day");
    b.daysText = p(b.daysText, "days");
    b.hourText = p(b.hourText, "hour");
    b.hoursText = p(b.hoursText, "hours");
    b.minuteText = p(b.minuteText, "minute");
    b.minutesText = p(b.minutesText, "minutes");
    b.enableDragAndDropForEventText = p(b.enableDragAndDropForEventText, "Enable drag & drop for events");
    b.organizerTabText = p(b.organizerTabText, "Organizer");
    b.removeEventsTooltipText = p(b.removeEventsTooltipText, "Remove Events");
    b.confirmEventsRemoveTitle = p(b.confirmEventsRemoveTitle, "Confirm Events Removal");
    b.confirmEventsRemoveMessage = p(b.confirmEventsRemoveMessage, "Removing these non-repeating events cannot be undone.  Do you want to continue?");
    b.eventText = p(b.eventText, "Event");
    b.optionalText = p(b.optionalText, "Optional");
    b.urlText = p(b.urlText, "Url:");
    b.openUrlText = p(b.openUrlText, "Open Url");
    b.thisWeekTooltipText = p(b.thisWeekTooltipText, "This Week");
    b.dailyText = p(b.dailyText, "Daily");
    b.weeklyText = p(b.weeklyText, "Weekly");
    b.monthlyText = p(b.monthlyText, "Monthly");
    b.yearlyText = p(b.yearlyText, "Yearly");
    b.repeatsByCustomSettingsText = p(b.repeatsByCustomSettingsText, "By Custom Settings");
    b.lastUpdatedText = p(b.lastUpdatedText, "Last Updated:");
    b.advancedText = p(b.advancedText, "Advanced");
    b.copyText = p(b.copyText, "Copy");
    b.pasteText = p(b.pasteText, "Paste");
    b.duplicateText = p(b.duplicateText, "Duplicate");
    b.showAlertsText = p(b.showAlertsText, "Show Alerts");
    b.selectDatePlaceholderText = p(b.selectDatePlaceholderText, "Select date...");
    b.hideDayText = p(b.hideDayText, "Hide Day");
    b.notSearchText = p(b.notSearchText, "Not (opposite)");
    b.showHolidaysInTheDisplaysText = p(b.showHolidaysInTheDisplaysText, "Show holidays in the main display and title bars");
    b.newEventDefaultTitle = p(b.newEventDefaultTitle, "* New Event");
    b.urlErrorMessage = p(b.urlErrorMessage, "Please enter a valid Url in the 'Url' field (or leave blank).");
    b.searchTextBoxPlaceholder = p(b.searchTextBoxPlaceholder, "Search title, description, etc...");
    b.currentMonthTooltipText = p(b.currentMonthTooltipText, "Current Month");
    b.cutText = p(b.cutText, "Cut");
    b.showMenuTooltipText = p(b.showMenuTooltipText, "Show Menu");
    b.eventTypesText = p(b.eventTypesText, "Event Types");
    b.lockedText = p(b.lockedText, "Locked:");
    b.typeText = p(b.typeText, "Type:");
    b.sideMenuHeaderText = p(b.sideMenuHeaderText, "Calendar.js");
    b.sideMenuDaysText = p(b.sideMenuDaysText, "Days");
    b.visibleDaysText = p(b.visibleDaysText, "Visible Days");
    b.previousYearTooltipText = p(b.previousYearTooltipText, "Previous Year");
    b.nextYearTooltipText = p(b.nextYearTooltipText, "Next Year");
    b.showOnlyWorkingDaysText = p(b.showOnlyWorkingDaysText, "Show Only Working Days");
    b.exportFilenamePlaceholderText = p(b.exportFilenamePlaceholderText, "Name (optional)");
    b.errorText = p(b.errorText, "Error");
    b.exportText = p(b.exportText, "Export");
    b.configurationUpdatedText = p(b.configurationUpdatedText, "Configuration updated.");
    b.eventAddedText = p(b.eventAddedText, "{0} event added.");
    b.eventUpdatedText = p(b.eventUpdatedText, "{0} event updated.");
    b.eventRemovedText = p(b.eventRemovedText, "{0} event removed.");
    b.eventsRemovedText = p(b.eventsRemovedText, "{0} events removed.");
    b.eventsExportedToText = p(b.eventsExportedToText, "Events exported to {0}.");
    b.eventsPastedText = p(b.eventsPastedText, "{0} events pasted.");
    b.eventsExportedText = p(b.eventsExportedText, "Events exported.");
    b.copyToClipboardOnlyText = p(b.copyToClipboardOnlyText, "Copy to clipboard only");
    b.workingDaysText = p(b.workingDaysText, "Working Days");
    b.weekendDaysText = p(b.weekendDaysText, "Weekend Days");
    b.showAsBusyText = p(b.showAsBusyText, "Show As Busy");
    b.selectAllText = p(b.selectAllText, "Select All");
    b.selectNoneText = p(b.selectNoneText, "Select None");
    b.importEventsTooltipText = p(b.importEventsTooltipText, "Import Events");
    b.eventsImportedText = p(b.eventsImportedText, "{0} events imported.");
    b.viewFullYearTooltipText = p(b.viewFullYearTooltipText, "View Full Year");
    b.currentYearTooltipText = p(b.currentYearTooltipText, "Current Year");
    b.alertOffsetText = p(b.alertOffsetText, "Alert Offset (minutes):");
    b.viewFullDayTooltipText = p(b.viewFullDayTooltipText, "View Full Day");
    b.confirmEventUpdateTitle = p(b.confirmEventUpdateTitle, "Confirm Event Update");
    b.confirmEventUpdateMessage = p(b.confirmEventUpdateMessage, "Would you like to update the event from this point forward, or the entire series?");
    b.forwardText = p(b.forwardText, "Forward");
    b.seriesText = p(b.seriesText, "Series");
    b.viewTimelineTooltipText = p(b.viewTimelineTooltipText, "View Timeline");
    b.nextPropertyTooltipText = p(b.nextPropertyTooltipText, "Next Property");
    b.noneText = p(b.noneText, "(none)");
    b.shareText = p(b.shareText, "Share");
    b.shareStartFilename = p(b.shareStartFilename, "shared_events_");
    b.previousPropertyTooltipText = p(b.previousPropertyTooltipText, "Previous Property");
    b.jumpToDateTitle = p(b.jumpToDateTitle, "Jump To Date");
    b.goText = p(b.goText, "Go");
    mg(b.eventTypeNormalText, "Normal", 0);
    mg(b.eventTypeMeetingText, "Meeting", 1);
    mg(b.eventTypeBirthdayText, "Birthday", 2);
    mg(b.eventTypeHolidayText, "Holiday", 3);
    mg(b.eventTypeTaskText, "Task", 4);
    Li();
  }
  function mg(a, c, d) {
    P.hasOwnProperty(d) && (W(a) ? P[d].text = a : P[d].text = c);
  }
  function fd(a, c) {
    c = Fa(c) ? c : 1;
    return !ya(a) || a.length < c;
  }
  function rb(a, c) {
    Ta(a) || (a = Ta(c) ? c : {});
    return a;
  }
  var u = this, I = null, ea = null, Kf = null, Da = null, qa = null, ic = null, n = {empty:"", space:" ", newLine:"\n", newLineCharacterReturn:"\r\n"}, G = {notFound:-1}, za = {monday:0, saturday:5, sunday:6}, U = {enter:13, escape:27, left:37, right:39, down:40, a:65, c:67, e:69, f:70, g:71, j:74, m:77, o:79, v:86, x:88, f5:116, f11:122}, z = {never:0, everyDay:1, everyWeek:2, every2Weeks:3, everyMonth:4, everyYear:5, custom:6}, O = {daily:0, weekly:1, monthly:2, yearly:3}, b = {}, y = {}, P = 
  {0:{text:"Normal Label", eventEditorInput:null}, 1:{text:"Meeting Label", eventEditorInput:null}, 2:{text:"Birthday Label", eventEditorInput:null}, 3:{text:"Holiday Label", eventEditorInput:null}, 4:{text:"Task Label", eventEditorInput:null}}, S = {visibleGroups:null, visibleEventTypes:null, visibleAllEventsMonths:{}}, sb = !1, ae = !1, Oe = !1, wb = {}, Hd = {}, Ha = [], oa = [], Vb = !1, Zd = null, ha = null, gl = {}, B = null, ng = !1, Ic = null, qe = !1, Xj = !1, Le = {}, Ca = [], Ri = {}, 
  Mb = {}, cg = !0, Ra = {windowResize:"WindowResize", searchOptionsChanged:"SearchOptionsChanged", searchEventsHistoryDropDown:"SearchEventsHistoryDropDown", showToolTip:"ShowToolTip", autoRefresh:"AutoRefresh", hideNotification:"HideNotification", sideMenuEvents:"SideMenuEvents"}, zb = null, Qb = null, og = !1, id = null, Kc = null, Oc = null, md = null, Pc = null, ld = null, pd = null, Lc = null, od = null, Mc = null, nd = null, Nc = null, be = null, Hc = null, Te = null, w = !1, ib = !1, nj = 
  null, yb = {fullMonth:"full-month", fullDay:"full-day", fullWeek:"full-week", fullYear:"full-year", timeline:"timeline", allEvents:"all-events"}, Bb = [], Ah = 0, xg = null, yg = null, Wb = null, zg = null, Ag = null, E = null, Na = null, xd = !1, Xk = null, ud = [], ba = null, df = null, Cb = null, Tc = null, Aa = null, je = null, N = null, nc = [], Zh = null, Gj = null, ff = null, Hj = null, Bg = [], ia = null, Ua = null, ai = null, Sj = null, Ed = null, Dd = null, Fd = null, ne = null, me = 
  null, lf = null, oc = [], mf = {}, Yb = null, Rj = null, oe = null, di = !1, Fg = null, of = 0, ei = [], Ob = null, pf = [], X = null, pe = null, Nh = null, Jg = null, Zb = null, qf = null, Xc = {}, Hg = null, Gg = null, tb = null, Wc = 0, fi = null, Ec = null, kd = [], Mh = null, Ga = null, li = null, ki = null, re = null, wa = null, Mg = 0, va = null, ni = null, Yj = null, Jd = null, Rb = [], vg = [], oi = [], na = null, pi = null, bk = null, ak = null, Wa = null, vf = null, sf = null, tf = null, 
  Og = {}, uf = [], Jc = [], fa = null, Ng = null, db = null, se = "location organizerName group organizerEmailAddress url title description".split(" "), kb = [], Lb = null, Dh = 0, Eh = 0, $d = !1, cl = 0, dl = 0, gb = null, ac = null, Wg = null, Xg = null, $c = null, Vg = null, Yc = null, bc = null, cc = null, nb = null, dc = null, ze = null, Lf = null, Mf = null, Gb = null, wi = null, Pd = null, Qd = null, Od = null, Ae = null, wc = null, Nf = null, Of = null, Pf = null, Qf = null, Rf = null, 
  ec = null, Yg = null, Md = null, Sf = null, Tf = null, Uf = null, bd = null, ka = {}, Hf = null, Sg = null, Nd = null, yi = null, Vf = null, xc = null, Ce = null, De = null, Ee = null, yc = null, Zg = null, $g = null, ah = null, bh = null, ch = null, dh = null, eh = null, Rd = null, cd = null, zi = null, Ai = null, Tg = null, Bi = null, Yf = null, zc = null, Ya = null, Ci = null, wk = null, xk = null, yk = null, zk = null, Ak = null, Bk = null, Ck = null, Ac = null, Ib = null, jh = null, pa = null, 
  Ud = null, fc = null, sa = null, lh = null, kh = null, Ie = null, $f = null, ag = null, mh = null, nh = null, oh = null, ph = null, qh = null, rh = null, sh = null, th = null, uh = null, Di = !1, Jb = [], ed = 0, Fi = null, Fb = null, vb = null, Kb = null, Vd = null, Je = null, Gi = null, Hi = null, Ii = null, Ji = null, Ki = null, vh = null, wh = null, Cc = null, hc = null, Ma = null, qi = null, Pg = null, Kd = null, da = null, fb = null, ek = null, If = null, Gf = null, ri = null, Ff = null, 
  Ef = null, zf = null, Df = null, Cf = null, Bf = null, Af = null, yf = null, xf = null, Rg = null, Qg = null, Sa = null, vi = null, ui = null, ti = null, Ug = null, ef = null, ve = null, ub = null, ik = null, kk = null, lk = null, mk = null, jk = null, Y = null, zh = null, Ni = null, yh = null, Wd = null, dg = null, Xd = null, eg = null, fg = null, gg = null, Yd = null, Id = null, lc = null;
  u.turnOnFullScreen = function() {
    w || Vk();
    return u;
  };
  u.turnOffFullScreen = function() {
    w || Uk();
    return u;
  };
  u.isFullScreenActivated = function() {
    return xd;
  };
  u.startTheAutoRefreshTimer = function() {
    w || (cg = !0, Sh());
    return u;
  };
  u.stopTheAutoRefreshTimer = function() {
    w || (Rh(), cg = !1);
    return u;
  };
  u.destroy = function() {
    if (sb) {
      Oe && Jh(!1);
      for (var a in Mb) {
        Mb.hasOwnProperty(a) && Mb[a] !== null && (clearTimeout(Mb[a]), delete Mb[a]);
      }
      a = Ca.length;
      for (var c = 0; c < a; c++) {
        I.body.removeChild(Ca[c]);
      }
      Ca = [];
      w && I.removeEventListener("click", hd);
      b.tooltipsEnabled && document.body.removeEventListener("mousemove", pc);
      r(E) && (E.className = n.empty, E.innerHTML = n.empty);
      A(b.events.onDestroy, Da);
    }
    return u;
  };
  u.moveToPreviousMonth = function() {
    bf();
    return u;
  };
  u.moveToNextMonth = function() {
    cf();
    return u;
  };
  u.moveToPreviousYear = function() {
    sg();
    return u;
  };
  u.moveToNextYear = function() {
    tg();
    return u;
  };
  u.moveToToday = function() {
    ug();
    return u;
  };
  u.getCurrentDisplayDate = function() {
    return new Date(B);
  };
  u.setCurrentDisplayDate = function(a) {
    !Dc(a) || w && !ib || (a = new Date(a), !Z(B, a) && a.getFullYear() >= b.minimumYear && a.getFullYear() <= b.maximumYear && (R(a), A(b.events.onSetDate, a)));
    return u;
  };
  u.getSelectedDatePickerDate = function() {
    return w ? new Date(Ic) : null;
  };
  u.setSelectedDatePickerDate = function(a) {
    Dc(a) && w && (a = new Date(a), pj(a) && !Z(a, Ic) && a.getFullYear() >= b.minimumYear && a.getFullYear() <= b.maximumYear && (a.setHours(0, 0, 0, 0), hd(), Qh(a), A(b.events.onDatePickerDateChanged, a), Ic = a));
    return u;
  };
  u.refresh = function() {
    w || Pa(!0, !0);
    return u;
  };
  u.export = function(a) {
    b.exportEventsEnabled && !w && (a = hb(a, "csv"), Bc(null, a));
    return u;
  };
  u.import = function(a) {
    b.importEventsEnabled && !w && Qi(a);
    return u;
  };
  u.setEvents = function(a, c, d) {
    w || (d = v(d, !0), wb = {}, u.addEvents(a, c, !1), d && A(b.events.onEventsSet, a));
    return u;
  };
  u.setEventsFromJson = function(a, c, d) {
    if (!w) {
      d = v(d, !0);
      var e = Re(a);
      ya(e) ? u.setEvents(e, c, !1) : Ta(e) && e.hasOwnProperty("events") && u.setEvents(e.events, c, !1);
      d && A(b.events.onEventsSetFromJSON, a);
    }
    return u;
  };
  u.addEvents = function(a, c, d) {
    if (!w) {
      c = v(c, !0);
      d = v(d, !0);
      for (var e = a.length, f = 0; f < e; f++) {
        u.addEvent(a[f], !1, !1, !1);
      }
      qb();
      d && A(b.events.onEventsAdded, a);
      c && (Sb(), La(), ra());
    }
    return u;
  };
  u.addEventsFromJson = function(a, c, d) {
    if (!w) {
      d = v(d, !0);
      var e = Re(a);
      ya(e) ? u.addEvents(e, c, !1) : Ta(e) && e.hasOwnProperty("events") && u.addEvents(e.events, c, !1);
      d && A(b.events.onEventsAddedFromJSON, a);
    }
    return u;
  };
  u.addEvent = function(a, c, d, e) {
    var f = !1;
    if (!w && (e = v(e, !0), W(a.from) && (a.from = new Date(a.from)), W(a.to) && (a.to = new Date(a.to)), W(a.repeatEnds) && (a.repeatEnds = new Date(a.repeatEnds)), W(a.created) && (a.created = new Date(a.created)), W(a.lastUpdated) && (a.lastUpdated = new Date(a.lastUpdated)), a.color === b.defaultEventBackgroundColor && (a.color = null), a.colorText === b.defaultEventTextColor && (a.colorText = null), a.colorBorder === b.defaultEventBorderColor && (a.colorBorder = null), a.from <= a.to)) {
      var g = a.from;
      g = g.getFullYear() + "-" + g.getMonth() + "-" + g.getDate();
      var h = kc();
      wb.hasOwnProperty(g) || (wb[g] = {});
      if (!wb[g].hasOwnProperty(h)) {
        c = v(c, !0);
        d = v(d, !0);
        f = K(a.title);
        var l = K(a.description), m = K(a.location), q = K(a.group), t = K(a.url);
        if (r(S.visibleGroups) && !dd(b.events.onEventsFetch)) {
          var C = q.toLowerCase();
          S.visibleGroups.indexOf(C) === G.notFound && S.visibleGroups.push(C);
        }
        r(a.id) ? h = a.id : a.id = h;
        b.maximumEventTitleLength > 0 && f !== n.empty && f.length > b.maximumEventTitleLength && (a.title = a.title.substring(0, b.maximumEventTitleLength));
        b.maximumEventDescriptionLength > 0 && l !== n.empty && l.length > b.maximumEventDescriptionLength && (a.description = a.description.substring(0, b.maximumEventDescriptionLength));
        b.maximumEventLocationLength > 0 && m !== n.empty && m.length > b.maximumEventLocationLength && (a.location = a.location.substring(0, b.maximumEventLocationLength));
        b.maximumEventGroupLength > 0 && q !== n.empty && q.length > b.maximumEventGroupLength && (a.group = a.group.substring(0, b.maximumEventGroupLength));
        t === n.empty || sk(t) || (a.url = n.empty);
        Dc(a.created) || (a.created = new Date());
        e && (a.lastUpdated = new Date());
        wb[g][h] = Zk(a);
        f = !0;
        d && A(b.events.onEventAdded, a);
        c && (qb(), Sb(), La(), ra());
      }
    }
    return f;
  };
  u.updateEvents = function(a, c, d) {
    if (!w) {
      c = v(c, !0);
      d = v(d, !0);
      for (var e = a.length, f = 0; f < e; f++) {
        var g = a[f];
        u.updateEvent(g.id, g, !1, !1);
      }
      d && A(b.events.onEventsUpdated, a);
      c && (qb(), Sb(), La(), ra());
    }
    return u;
  };
  u.updateEvent = function(a, c, d, e) {
    var f = !1;
    !w && (f = u.removeEvent(a, !1, !1)) && (d = v(d, !0), e = v(e, !0), f = u.addEvent(c, d, !1), qb(), f && e && A(b.events.onEventUpdated, c));
    return f;
  };
  u.updateEventDateTimes = function(a, c, d, e, f, g) {
    var h = !1;
    w || (f = v(f, !0), g = v(g, !0), Db(function(l) {
      if (l.id === a) {
        return l.from = c, l.to = d, l.repeatEnds = e, h = !0, g && A(b.events.onEventUpdated, l), f && (qb(), Sb(), La(), ra()), !0;
      }
    }));
    return h;
  };
  u.removeEvent = function(a, c, d) {
    var e = !1;
    w || (c = v(c, !0), d = v(d, !0), Db(function(f, g, h) {
      if (h === a) {
        return delete wb[g][h], e = !0, d && A(b.events.onEventRemoved, f), c && (qb(), Sb(), La(), ra()), !0;
      }
    }));
    return e;
  };
  u.clearEvents = function(a, c) {
    w || (a = v(a, !0), c = v(c, !0), wb = {}, c && A(b.events.onEventsCleared), a && (qb(), Sb(), La(), ra()));
    return u;
  };
  u.getEvents = function() {
    var a = [];
    w || (a = Ab(Gd()));
    return a;
  };
  u.getEvent = function(a) {
    var c = null;
    W(a) && !w && Db(function(d) {
      if (d.id === a) {
        return c = d, !0;
      }
    });
    return c;
  };
  u.removeExpiredEvents = function(a, c) {
    w || (a = v(a, !0), c = v(c, !0), Db(function(d) {
      L(d.repeatEvery) === z.never && d.to < new Date() && u.removeEvent(d.id, !1, c);
    }), a && (qb(), Sb(), La(), ra()));
    return u;
  };
  u.addEventType = function(a, c) {
    var d = !1;
    Fa(a) && W(c) && !w && !P.hasOwnProperty(a) && (P[a] = {text:c, eventEditorInput:null}, r(S.visibleEventTypes) && S.visibleEventTypes.push(a), d = !0);
    return d;
  };
  u.removeEventType = function(a) {
    var c = !1;
    Fa(a) && !w && P.hasOwnProperty(a) && (delete P[a], c = !0);
    return c;
  };
  u.setVisibleEventTypes = function(a, c) {
    if (ya(a) && !w) {
      c = v(c, !0);
      S.visibleEventTypes = [];
      for (var d = a.length, e = 0; e < d; e++) {
        S.visibleEventTypes.indexOf(a[e]) === G.notFound && S.visibleEventTypes.push(a[e]);
      }
      Pa(!0, !1);
      c && A(b.events.onVisibleEventTypesChanged, S.visibleEventTypes);
    }
    return u;
  };
  u.getAllGroups = function() {
    return lj();
  };
  u.clearAllGroups = function(a, c) {
    w || (a = v(a, !0), c = v(c, !0), Db(function(d) {
      d.group = null;
    }), c && A(b.events.onGroupsCleared), a && (Sb(), La(), ra()));
    return u;
  };
  u.removeGroup = function(a, c, d) {
    if (W(a) && !w) {
      c = v(c, !0);
      d = v(d, !0);
      var e = a.toLowerCase();
      Db(function(f) {
        f.group !== null && f.group.toLowerCase() === e && (f.group = null);
      });
      d && A(b.events.onGroupRemoved, a);
      c && (Sb(), La(), ra());
    }
    return u;
  };
  u.setVisibleGroups = function(a, c) {
    if (ya(a) && !w) {
      c = v(c, !0);
      S.visibleGroups = [];
      for (var d = a.length, e = 0; e < d; e++) {
        var f = a[e].toLowerCase();
        S.visibleGroups.indexOf(f) === G.notFound && S.visibleGroups.push(f);
      }
      Pa(!0, !1);
      c && A(b.events.onVisibleGroupsChanged, S.visibleGroups);
    }
    return u;
  };
  u.setClipboardEvent = function(a) {
    Ta(a) && !w && (oa = [ue(a)]);
    return u;
  };
  u.setClipboardEvents = function(a) {
    if (ya(a) && !w) {
      oa = [];
      for (var c = a.length, d = 0; d < c; d++) {
        oa.push(ue(a[d]));
      }
    }
    return u;
  };
  u.getClipboardEvents = function() {
    var a = null;
    w || (a = oa);
    return a;
  };
  u.clearClipboard = function() {
    w || (oa = []);
    return u;
  };
  u.getVersion = function() {
    return "2.12.3";
  };
  u.getId = function() {
    return Da;
  };
  u.isBusy = function() {
    return qe;
  };
  u.getCurrentView = function() {
    return rf(!1);
  };
  u.setOptions = function(a, c) {
    for (var d in a) {
      a.hasOwnProperty(d) && (b[d] = a[d]);
    }
    nl(b);
    ij();
    Li();
    sb && ((c = v(c, !0)) && A(b.events.onOptionsUpdated, b), sb = !1, w && !ib || R(B, !0, !0));
    return u;
  };
  u.setSearchOptions = function(a, c) {
    if (!w) {
      a = rb(a);
      c = v(c, !0);
      qd();
      for (var d in a) {
        a.hasOwnProperty(d) && (y[d] = a[d]);
      }
      c && A(b.events.onSearchOptionsUpdated, y);
    }
    return u;
  };
  u.addHolidays = function(a, c, d) {
    ya(a) && !w && (c = v(c, !0), d = v(d, !0), b.holidays = b.holidays.concat(a), c && A(b.events.onOptionsUpdated, b), d && R(B, !0, !0));
    return u;
  };
  u.removeHolidays = function(a, c, d) {
    if (ya(a) && !w) {
      c = v(c, !0);
      d = v(d, !0);
      for (var e = b.holidays.length, f = [], g = 0; g < e; g++) {
        var h = b.holidays[g], l = K(h.title, n.empty);
        a.indexOf(l) === G.notFound && f.push(h);
      }
      b.holidays = f;
      c && A(b.events.onOptionsUpdated, b);
      d && R(B, !0, !0);
    }
    return u;
  };
  u.getHolidays = function() {
    return b.holidays;
  };
  (function(a, c, d, e, f) {
    I = a;
    ea = c;
    Kf = d;
    qa = e;
    ic = f;
    Da = ol;
    if (W(Da) || hj(Da)) {
      nl(pl), y = rb(ql, b.searchOptions), y.enabled = v(y.enabled, !0), y.lastSearchText = hb(y.lastSearchText, n.empty), y.not = v(y.not, !1), y.matchCase = v(y.matchCase, !1), y.showAdvanced = v(y.showAdvanced, !1), y.searchTitle = v(y.searchTitle, !0), y.searchLocation = v(y.searchLocation, !1), y.searchDescription = v(y.searchDescription, !1), y.searchGroup = v(y.searchGroup, !1), y.searchUrl = v(y.searchUrl, !1), y.startsWith = v(y.startsWith, !1), y.endsWith = v(y.endsWith, !1), y.contains = 
      v(y.contains, !0), y.left = xa(y.left, null), y.top = xa(y.top, null), y.history = jg(y.history, []), R(b.initialDateTime, !0), E !== null && ob(b.openInFullScreenMode) && b.openInFullScreenMode && !w && Wk();
    }
  })(document, window, navigator, Math, JSON);
};