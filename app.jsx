/* Syfx Platform — landing hero + multi-view product dashboard (Astral/Ostium/Kuvi-inspired, mint-on-black) */
let Button, Badge;
const { useState, useRef, useEffect, useLayoutEffect } = React;

const MINT = '#00E5A0';
const DOWN = '#FF5C6C';
const MARK = 'assets/syfx-mark.png';

/* ---------- live-ticker hook: drives the "automated live dashboard" number/chart motion ---------- */
function prefersReducedMotion() {
  try { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; }
}
function useTicker(initial, { step, stepPct, intervalMs = 2200, min = -Infinity, max = Infinity } = {}) {
  const [value, setValue] = useState(initial);
  const [dir, setDir] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    let id;
    function schedule() {
      id = setTimeout(() => {
        setValue(v => {
          const magnitude = step != null ? step : stepPct * Math.max(Math.abs(v), 1);
          const delta = (Math.random() - 0.48) * magnitude;
          const next = Math.min(max, Math.max(min, v + delta));
          setDir(delta >= 0 ? 1 : -1);
          return next;
        });
        schedule();
      }, intervalMs + Math.random() * 700);
    }
    schedule();
    return () => clearTimeout(id);
  }, []);
  return [value, dir];
}

/* ---------- Lucide-style line icons ---------- */
function Icon({ d, size = 20, stroke = 2, children, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'block', ...style }}>
      {children || <path d={d} />}
    </svg>
  );
}
const IHome = (p) => <Icon {...p}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></Icon>;
const ICandle = (p) => <Icon {...p}><path d="M9 4v3M9 16v4"/><rect x="7" y="7" width="4" height="9" rx="1"/><path d="M17 3v4M17 15v6"/><rect x="15" y="7" width="4" height="8" rx="1"/></Icon>;
const ISentinel = (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M12 3a14 14 0 0 0 0 18M12 3a14 14 0 0 1 0 18M3 12h18"/></Icon>;
const IChat = (p) => <Icon {...p}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></Icon>;
const IProof = (p) => <Icon {...p}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></Icon>;
const IMarkets = (p) => <Icon {...p}><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9M13 17V5M8 17v-3"/></Icon>;
const ISettings = (p) => <Icon {...p}><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></Icon>;
const IBell = (p) => <Icon {...p}><path d="M10.27 21a2 2 0 0 0 3.46 0"/><path d="M3.26 15.33A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.67C19.41 13.96 18 12.5 18 8A6 6 0 0 0 6 8c0 4.5-1.41 5.96-2.74 7.33"/></Icon>;
const ISearch = (p) => <Icon {...p}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></Icon>;
const ITrend = (p) => <Icon {...p}><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></Icon>;
const IWallet = (p) => <Icon {...p}><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 1 1-1v-2"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></Icon>;
const IArrow = (p) => <Icon {...p}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></Icon>;
const IArrowLeft = (p) => <Icon {...p}><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></Icon>;
const IUp = (p) => <Icon {...p}><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></Icon>;
const IMenu = (p) => <Icon {...p}><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></Icon>;
const ICheck = (p) => <Icon {...p}><path d="M20 6 9 17l-5-5"/></Icon>;
const IChevron = (p) => <Icon {...p}><path d="m6 9 6 6 6-6"/></Icon>;
const IGlobe = (p) => <Icon {...p}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/></Icon>;
const ISpark = (p) => <Icon {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2 2M15.7 15.7l2 2M17.7 6.3l-2 2M8.3 15.7l-2 2"/></Icon>;
const IPlus = (p) => <Icon {...p}><path d="M12 5v14M5 12h14"/></Icon>;
const IMax = (p) => <Icon {...p}><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/></Icon>;
const ILock = (p) => <Icon {...p}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></Icon>;
const IBolt = (p) => <Icon {...p}><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></Icon>;
const IBrain = (p) => <Icon {...p}><path d="M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.142 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/></Icon>;
const IX = (p) => <Icon {...p}><path d="M4 4l16 16M20 4 4 20"/></Icon>;
const IGithub = (p) => <Icon {...p}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></Icon>;
const ISend = (p) => <Icon {...p}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></Icon>;
const IDiscord = (p) => <Icon {...p}><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M7.5 7.2A16 16 0 0 1 12 6.5a16 16 0 0 1 4.5.7c1.5 3 2 6 1.7 9.3a13 13 0 0 1-4 2 9 9 0 0 1-.8-1.3M9.6 17.2a13 13 0 0 1-4-2c-.3-3.3.2-6.3 1.7-9.3"/></Icon>;
const ILinkedIn = (p) => <Icon {...p}><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/><path d="M10 9h3.5v1.7A3.8 3.8 0 0 1 17 9c2.8 0 4 1.9 4 4.8V21h-4v-6.4c0-1.4-.5-2.3-1.7-2.3-1 0-1.6.7-1.8 1.4-.1.2-.1.6-.1.9V21h-4s.05-11.3 0-12z"/></Icon>;

/* ===================== CANDLE CHART ===================== */
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function genCandles(n, base) {
  const rnd = mulberry32(20260611);
  const out = []; let price = base * 0.972;
  for (let i = 0; i < n; i++) {
    const drift = (base - price) * 0.02;
    const vol = base * 0.0045;
    const open = price;
    const move = (rnd() - 0.5) * 2 * vol + drift + vol * 0.18;
    let close = open + move;
    const hi = Math.max(open, close) + rnd() * vol * 0.9;
    const lo = Math.min(open, close) - rnd() * vol * 0.9;
    out.push({ open, close, hi, lo });
    price = close;
  }
  return out;
}
function TradeChart({ base, onLastPrice }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const dataRef = useRef(null);
  if (!dataRef.current) dataRef.current = genCandles(70, base);
  useEffect(() => {
    const wrap = wrapRef.current, canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    function draw() {
      const w = wrap.clientWidth, h = wrap.clientHeight;
      if (!w || !h) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      const ctx = canvas.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const padR = 58, padB = 22, padT = 8;
      const plotW = w - padR, plotH = h - padB - padT;
      const count = Math.max(24, Math.min(70, Math.floor(plotW / 9)));
      const candles = dataRef.current.slice(-count);
      let min = Infinity, max = -Infinity;
      candles.forEach(c => { if (c.lo < min) min = c.lo; if (c.hi > max) max = c.hi; });
      const pad = (max - min) * 0.08; min -= pad; max += pad;
      const y = v => padT + plotH - ((v - min) / (max - min)) * plotH;
      // grid + price axis
      ctx.font = '10px JetBrains Mono, monospace';
      ctx.textBaseline = 'middle';
      for (let i = 0; i <= 4; i++) {
        const gy = padT + (plotH / 4) * i;
        ctx.strokeStyle = 'rgba(255,255,255,0.045)';
        ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(plotW, gy); ctx.stroke();
        const val = max - ((max - min) / 4) * i;
        ctx.fillStyle = '#6B7280';
        ctx.fillText(val.toFixed(base > 1000 ? 0 : 2), plotW + 8, gy);
      }
      // candles
      const cw = plotW / count;
      const bw = Math.max(2, cw * 0.62);
      candles.forEach((c, i) => {
        const cx = i * cw + cw / 2;
        const up = c.close >= c.open;
        const col = up ? MINT : DOWN;
        ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(cx, y(c.hi)); ctx.lineTo(cx, y(c.lo)); ctx.stroke();
        const yo = y(c.open), yc = y(c.close);
        const top = Math.min(yo, yc), bh = Math.max(1, Math.abs(yc - yo));
        ctx.globalAlpha = up ? 0.92 : 0.92;
        ctx.fillRect(cx - bw / 2, top, bw, bh);
        ctx.globalAlpha = 1;
      });
      // last price line
      const last = candles[candles.length - 1].close;
      const ly = y(last); const up = candles[candles.length - 1].close >= candles[candles.length - 1].open;
      ctx.strokeStyle = up ? MINT : DOWN; ctx.setLineDash([3, 3]); ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, ly); ctx.lineTo(plotW, ly); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = up ? MINT : DOWN;
      ctx.fillRect(plotW, ly - 9, padR, 18);
      ctx.fillStyle = '#09090B'; ctx.font = '10px JetBrains Mono, monospace';
      ctx.fillText(last.toFixed(base > 1000 ? 1 : 2), plotW + 6, ly);
      // time axis
      ctx.fillStyle = '#6B7280'; ctx.textBaseline = 'alphabetic';
      ['09:30', '11:00', '12:30', '14:00', '15:30'].forEach((t, i) => {
        ctx.fillText(t, (plotW / 5) * i + 4, h - 6);
      });
    }
    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(wrap);

    if (prefersReducedMotion()) return () => ro.disconnect();
    let tickCount = 0;
    function tick() {
      const data = dataRef.current;
      const lastIdx = data.length - 1;
      const cur = data[lastIdx];
      const vol = base * 0.0022;
      const step = (Math.random() - 0.48) * vol;
      const nextClose = cur.close + step;
      data[lastIdx] = {
        open: cur.open, close: nextClose,
        hi: Math.max(cur.hi, nextClose), lo: Math.min(cur.lo, nextClose),
      };
      tickCount++;
      if (tickCount % 5 === 0) {
        data.push({ open: nextClose, close: nextClose, hi: nextClose, lo: nextClose });
        if (data.length > 90) data.shift();
      }
      draw();
      if (onLastPrice) onLastPrice(nextClose, step >= 0 ? 1 : -1);
    }
    const id = setInterval(tick, 1300 + Math.random() * 500);
    return () => { ro.disconnect(); clearInterval(id); };
  }, [base]);
  return <div ref={wrapRef} className="chart-canvas-wrap"><canvas ref={canvasRef} /></div>;
}

/* ===================== SHARED BITS ===================== */
function ViewHead({ title, sub, tools }) {
  return (
    <div className="greet-row">
      <div className="greet">
        <h3>{title}</h3>
        <p>{sub}</p>
      </div>
      {tools || (
        <div className="greet-tools">
          <div className="search"><ISearch size={15} />Search markets…</div>
          <button className="icon-btn"><IBell size={18} /></button>
          <div className="avatar">M</div>
        </div>
      )}
    </div>
  );
}
const cardSty = { background: 'var(--k-card)', border: '1px solid var(--k-border)', borderRadius: 14 };
const mono = { fontFamily: 'var(--font-mono)' };

/* ===================== OVERVIEW ===================== */
const STATS = [
  [IWallet, 'Vault balance', '$48,920', '+3.2%'],
  [IProof, 'ZK proofs verified', '1,284', '+18%'],
  [ITrend, 'Win rate', '73.4%', '+2.7%'],
];
const RECENT = [
  ['XAU', 'XAU/USD', 'Long · Gold', '+5.5%', '2m'],
  ['ETH', 'ETH/USDC', 'Long · Spot', '+2.1%', '18m'],
  ['500', 'US500', 'Short · Index', '+1.8%', '1h'],
];
function Overview() {
  return (
    <React.Fragment>
      <div className="greet-row">
        <div className="greet">
          <h3>Good morning, Max 👋</h3>
          <p>Here's your verified trading activity today.</p>
          <span className="live-pill"><span className="live-dot" />The Sentinel · scanning 6 sources</span>
        </div>
        <div className="greet-tools">
          <div className="search"><ISearch size={15} />Search anything…</div>
          <button className="icon-btn"><IBell size={18} /></button>
          <div className="avatar">M</div>
        </div>
      </div>
      <div className="stats">
        {STATS.map(([I, label, val, delta]) => (
          <div className="stat" key={label}>
            <div className="stat-ico"><I size={18} /></div>
            <div className="stat-label">{label}</div>
            <div className="stat-val">{val}</div>
            <div className="stat-delta">↑ {delta}<span>vs last 7 days</span></div>
          </div>
        ))}
      </div>
      <div className="lower">
        <div className="panel">
          <div className="panel-head">
            <h4>Recent verified trades</h4>
            <a href="#">View all <IArrow size={13} /></a>
          </div>
          {RECENT.map(([tag, name, side, pnl, time]) => (
            <div className="trade" key={name}>
              <div className="trade-pair">
                <div className="trade-dot">{tag}</div>
                <div><div className="trade-name">{name}</div><div className="trade-side">{side}</div></div>
              </div>
              <span className="verified"><ICheck size={13} /><span className="txt">ZK-Verified</span></span>
              <div className="trade-pnl">{pnl}</div>
              <div className="trade-time">{time}</div>
            </div>
          ))}
        </div>
        <div className="promo">
          <div>
            <h4>Math before<br /><span className="mint">money moves.</span></h4>
            <p>Every trade runs a Triple-Layer ZK Proof. If one fails, the Vault refuses to execute.</p>
          </div>
          <span className="promo-cta">Read the proof <IArrow size={14} /></span>
        </div>
      </div>
    </React.Fragment>
  );
}

/* ===================== TRADE ===================== */
const POSITIONS = [
  ['XAU/USD', 'Long', '8.42', '200', '2,401.6', '2,418.5', 56.81],
  ['ETH/USDC', 'Long', '0.018', '500', '2,612.0', '2,668.1', 29.34],
  ['US500', 'Short', '2.14', '300', '7,340.0', '7,308.2', 30.59],
  ['NVDA/USD', 'Short', '3.60', '150', '912.5', '921.4', -32.04],
];
/* live 3-step ZK verification cycle — Syfx's signature "alive proof" moment */
const ZK_STEPS = ['Source', 'Inference', 'Adherence'];
function ZkLiveGate() {
  const [step, setStep] = useState(0); // 0..2 verifying that index, 3 = all passed (hold)
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = setInterval(() => setStep(s => (s + 1) % 5), 950);
    return () => clearInterval(id);
  }, []);
  const allPassed = step === 3 || step === 4;
  return (
    <div className="zk-live">
      <div className="zk-live-row">
        {ZK_STEPS.map((label, i) => {
          const done = allPassed || i < step;
          const active = !allPassed && i === step;
          return (
            <span className={'zk-dot' + (done ? ' done' : '') + (active ? ' active' : '')} key={label}>
              {done ? <ICheck size={11} /> : <span className="zk-dot-i" />}
              {label}
            </span>
          );
        })}
      </div>
      <span className="zk-live-msg">
        <IProof size={15} />
        {allPassed ? 'All 3 proofs passed — ready to execute.' : 'Verifying ' + ZK_STEPS[step] + '…'}
      </span>
    </div>
  );
}
function PositionRow({ row }) {
  const [m, s, sz, col, ent, mark] = row;
  const [pnl] = useTicker(row[6], { step: Math.max(0.6, Math.abs(row[6]) * 0.05), intervalMs: 2400 });
  const up = pnl >= 0;
  return (
    <tr>
      <td><span className="pm">{m}</span> <span className={'pside ' + (s === 'Long' ? 'l' : 's')}>{s}</span></td>
      <td style={mono}>{sz}</td>
      <td style={mono}>{col} <span className="u">USDC</span></td>
      <td style={mono}>{ent}</td>
      <td style={mono}>{mark}</td>
      <td style={{ ...mono, color: up ? MINT : DOWN, fontWeight: 700, transition: 'color .4s' }}>{(up ? '+$' : '-$') + Math.abs(pnl).toFixed(2)}</td>
      <td><span className="verified"><ICheck size={12} /><span className="txt">Verified</span></span></td>
    </tr>
  );
}

/* live fills ticker — a thin, continuously-updating strip of just-verified trades */
const FILL_FEED = [
  ['XAU/USD', 'Long', 12.40], ['ETH/USDC', 'Long', 4.12], ['US500', 'Short', -6.30],
  ['NVDA/USD', 'Short', 9.85], ['SOL/USDC', 'Long', 2.77], ['BTC/USDC', 'Long', 18.02],
  ['GBP/USD', 'Short', -3.15], ['ARB/USDC', 'Long', 1.94],
];
function LiveFillsTicker() {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setI(v => (v + 1) % FILL_FEED.length); setVisible(true); }, 260);
    }, 2600);
    return () => clearInterval(id);
  }, []);
  const [pair, side, pnl] = FILL_FEED[i];
  const up = pnl >= 0;
  return (
    <div className="fills-ticker">
      <span className="live-dot" />
      <span className={'fills-row' + (visible ? ' in' : '')}>
        <ICheck size={12} style={{ color: MINT }} />
        <b>{pair}</b><span className="fills-side">{side}</span>
        <span style={{ color: up ? MINT : DOWN, ...mono }}>{(up ? '+$' : '-$') + Math.abs(pnl).toFixed(2)}</span>
        <span className="fills-verified">ZK-verified</span>
      </span>
    </div>
  );
}
function TradeView() {
  const [side, setSide] = useState('long');
  const [otab, setOtab] = useState('market');
  const [lev, setLev] = useState(10);
  const [livePrice, setLivePrice] = useState(7308.25);
  const [liveDir, setLiveDir] = useState(0);
  const [changePct] = useTicker(1.84, { step: 0.04, intervalMs: 2600, min: -6, max: 6 });
  const stats = [
    ['24h change', (changePct >= 0 ? '+' : '') + changePct.toFixed(2) + '%', changePct >= 0 ? MINT : DOWN],
    ['Open interest (L/S)', '$46.1M / $32.1M', null],
    ['Net rate (L/S)', '0.0059%', MINT],
    ['24h volume', '$8.00M', null],
  ];
  return (
    <React.Fragment>
      {/* market header */}
      <div className="mkt-head">
        <button className="mkt-sel">
          <div className="trade-dot" style={{ width: 30, height: 30 }}>500</div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#fff', fontWeight: 700, fontSize: 14 }}>
              US500/USD <IChevron size={14} style={{ color: 'var(--text-muted)' }} />
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>S&amp;P 500 Index · Perp</div>
          </div>
        </button>
        <div className="mkt-price">
          <div style={{ ...mono, fontSize: 22, fontWeight: 700, color: liveDir === -1 ? DOWN : liveDir === 1 ? MINT : '#fff', transition: 'color .4s' }}>
            {livePrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Mark price</div>
        </div>
        <div className="mkt-stats">
          {stats.map(([l, v, c]) => (
            <div key={l}><div className="ms-l">{l}</div><div className="ms-v" style={{ ...(c ? { color: c } : null), transition: 'color .4s' }}>{v}</div></div>
          ))}
        </div>
        <span className="mkt-zk"><IProof size={13} />ZK-Verified market</span>
      </div>

      <div className="tradewrap">
        {/* chart */}
        <div className="chart-panel">
          <div className="chart-toolbar">
            <div className="tf-row">
              {['1m', '15m', '1h', '4h', '1D'].map(t => (
                <span key={t} className={'tf' + (t === '15m' ? ' on' : '')}>{t}</span>
              ))}
            </div>
            <div className="tool-row">
              <ICandle size={15} /><ISettings size={15} /><IMax size={15} />
            </div>
          </div>
          <LiveFillsTicker />
          <TradeChart base={7308} onLastPrice={(p, d) => { setLivePrice(p); setLiveDir(d); }} />
        </div>
        {/* order ticket */}
        <div className="order">
          <div className="ls-toggle">
            <button className={'ls long' + (side === 'long' ? ' on' : '')} onClick={() => setSide('long')}>Long</button>
            <button className={'ls short' + (side === 'short' ? ' on' : '')} onClick={() => setSide('short')}>Short</button>
          </div>
          <div className="otabs">
            {['market', 'limit', 'stop'].map(t => (
              <button key={t} className={'otab' + (otab === t ? ' on' : '')} onClick={() => setOtab(t)}>
                {t[0].toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
          <label className="ofield">
            <span>Collateral</span>
            <div className="ofield-in"><b>100</b><span className="unit">USDC</span></div>
          </label>
          <div className="lev-row">
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 8 }}>
              <span style={{ color: 'var(--text-muted)' }}>Leverage</span>
              <span style={{ color: MINT, fontWeight: 700, ...mono }}>{lev}x</span>
            </div>
            <input type="range" min="1" max="50" value={lev} onChange={e => setLev(+e.target.value)}
              style={{ width: '100%', accentColor: MINT }} />
          </div>
          <ZkLiveGate />
          <button className={'order-btn' + (side === 'short' ? ' short' : '')}>
            Review &amp; Prove {side === 'long' ? 'Long' : 'Short'} <IArrow size={16} />
          </button>
        </div>
      </div>

      {/* positions */}
      <div className="panel" style={{ marginTop: 10 }}>
        <div className="panel-head" style={{ paddingBottom: 0 }}>
          <div className="ptabs">
            <span className="ptab on">Positions <em>4</em></span>
            <span className="ptab">Orders</span>
            <span className="ptab">History</span>
          </div>
          <a href="#">Close all</a>
        </div>
        <div className="tbl-scroll">
          <table className="ptable">
            <thead><tr>
              <th>Market &amp; Side</th><th>Size</th><th>Collateral</th><th>Entry</th><th>Mark</th><th>PnL</th><th>Proof</th>
            </tr></thead>
            <tbody>
              {POSITIONS.map((row) => <PositionRow row={row} key={row[0]} />)}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}

/* ===================== SYFX AI CHAT ===================== */
const THREADS = [
  ['BTC chop + gold setup', true],
  ['ETH momentum scan', false],
  ['Hedge my portfolio', false],
  ['Weekly macro brief', false],
  ['Funding flush watch', false],
];

// scripted human <-> AI conversation (casual, real-time) — full flow:
// chop talk -> build strategy -> trigger -> approve -> execute -> result -> why -> small loss
const SCRIPT = [
  { role: 'user', text: "yo what's btc doing rn? feels choppy af 😅" },
  { role: 'ai', text: "honestly it's a mess lol. stuck between 64k and 66k all week, no clean trend. Sentinel's flagging heavy funding on Hyperliquid too. longs are paying just to stay in rn." },
  { role: 'user', text: "so basically everyone's long. smells like a trap" },
  { role: 'ai', text: "yeah pretty much. when funding gets that lopsided it usually flushes. if we lose 65k i'd rather be short than try to catch the knife 🔪" },
  { role: 'user', text: "ok forget btc for now. i actually wanted to play gold this week" },
  { role: 'ai', chip: 'scanned 6 live sources', text: "gold's the cleaner trade tbh. CPI drops thursday so expect a wick, but ETF flows are net positive and the Fed's sounding dovish. RSI tapped 33 at the london open. that's literally your rulebook trigger 👀" },
  { role: 'user', text: "ok let's build it. small size though, i don't trust this market" },
  { role: 'ai', text: "smart. here's what i'm locking in: long gold, 5x, 2% stop, target +5.5%, hard cap $250 risk. compiling it into your ZK-Rulebook now:", card: 'rulebook' },
  { role: 'ai', text: "locked 🔒 the Sentinel watches for the exact trigger and pings you before anything fires. you're always the one who approves." },
  { role: 'user', text: "perfect. ping me when it hits" },
  { role: 'ai', chip: 'trigger detected · 1h', text: "ok we're live 🚨 RSI just printed 33 again at the london open. all three proofs are passing. want me to send it?", card: 'advisory' },
  { role: 'user', text: "send it 🚀" },
  { role: 'ai', text: "executing through your vault 🔐 ... filled at 2,401.0. sit tight, i'll watch it for you." },
  { role: 'ai', text: "boom 💚 just closed at target. here's the receipt:", card: 'win' },
  { role: 'user', text: "LETS GOOO 🔥 ok but why'd you pick gold over the btc short?" },
  { role: 'ai', text: "couple reasons. btc was a coin-flip: pure chop with trap-y funding, no real edge. gold actually had one: a clean RSI reset, macro tailwind from ETF inflows + a dovish fed, and a tight invalidation i could define. higher conviction, smaller risk. i only fire when Source, Inference and Adherence all prove out. btc never gave me that." },
  { role: 'user', text: "makes sense. didn't we take a small L earlier too?" },
  { role: 'ai', text: "yeah, the eth scalp tapped its stop. small by design though, that's the 2% cap doing its job:", card: 'loss' },
  { role: 'ai', text: "net we're still comfortably green for the week 📈 want me to scan for the next setup, or call it here?" },
];

function TypingDots() {
  return (
    <div className="msg ai">
      <div className="ai-ava"><img src={MARK} alt="" /></div>
      <div className="typing"><span></span><span></span><span></span></div>
    </div>
  );
}

function AdvCard() {
  return (
    <div className="adv-card">
      <div className="adv-top">
        <span className="adv-tag"><span className="live-dot" />ADVISORY MODE</span>
        <span style={{ ...mono, fontSize: 11, color: 'var(--text-muted)' }}>XAU/USD</span>
      </div>
      <div className="adv-grid">
        <div><span>Side</span><b style={{ color: MINT }}>Long</b></div>
        <div><span>Size</span><b>$250</b></div>
        <div><span>Entry</span><b style={mono}>2,401.0</b></div>
        <div><span>Stop</span><b style={mono}>−2.0%</b></div>
        <div><span>Target</span><b style={{ ...mono, color: MINT }}>+5.5%</b></div>
        <div><span>Leverage</span><b style={mono}>5×</b></div>
      </div>
      <div className="adv-proofs">
        {['Source', 'Inference', 'Adherence'].map(p => (
          <span key={p} className="pchk"><ICheck size={12} />{p}</span>
        ))}
      </div>
      <div className="adv-btns">
        <button className="adv-approve">Approve &amp; Execute</button>
        <button className="adv-decline">Decline</button>
      </div>
    </div>
  );
}

function RulebookCard() {
  const rules = [
    ['market', 'XAU/USD · Long'],
    ['entry', 'RSI < 35'],
    ['stop_loss', '2%'],
    ['target', '+5.5%'],
    ['risk_cap', '$250'],
    ['leverage', '5×'],
  ];
  return (
    <div className="rule-card">
      <div className="rule-head"><IProof size={13} />ZK-RULEBOOK · LOCKED</div>
      <div className="rule-lines">
        {rules.map(([k, v]) => (
          <div key={k}><span className="rk">{k}</span> = <span className="rv">{v}</span></div>
        ))}
      </div>
    </div>
  );
}

function ResultCard({ win }) {
  return (
    <div className={'result-card' + (win ? '' : ' loss')}>
      <div className="rc-glow" />
      <div className="rc-top">
        <span className="rc-badge">{win ? '✓ TARGET HIT' : '○ STOPPED OUT'}</span>
        <span style={{ ...mono, fontSize: 11, color: 'var(--text-muted)' }}>{win ? 'XAU/USD · Long' : 'ETH/USDC · Long'}</span>
      </div>
      <div className="rc-pnl">{win ? '+5.5%' : '−0.8%'}</div>
      <div className="rc-amt">{win ? '+$68.75' : '−$4.10'}<span>realized · to vault</span></div>
      <div className="rc-grid">
        <div><span>Entry</span><b>{win ? '2,401.0' : '2,612.0'}</b></div>
        <div><span>Exit</span><b>{win ? '2,533.1' : '2,591.1'}</b></div>
        <div><span>Held</span><b>{win ? '6h 12m' : '41m'}</b></div>
      </div>
      <div className="rc-receipt"><IProof size={13} />ZK Receipt <code>{win ? '0x9c4e…e2' : '0x71af…3b'}</code> · 0G Network</div>
    </div>
  );
}

function ChatView() {
  const [msgs, setMsgs] = useState([]);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState('');
  const [live, setLive] = useState(false);
  const convRef = useRef(null);
  const inputRef = useRef(null);
  const startedRef = useRef(false);
  const aliveRef = useRef(false);

  // auto-scroll to newest — but only if the user is already near the bottom,
  // so they can freely scroll up to re-read earlier messages
  useEffect(() => {
    const c = convRef.current;
    if (!c) return;
    const nearBottom = c.scrollHeight - c.scrollTop - c.clientHeight < 160;
    if (nearBottom) c.scrollTop = c.scrollHeight;
  }, [msgs, typing, draft]);

  // play the scripted conversation, then hand control to the user.
  // Resilient to React 18's dev double-invoke: the sequence starts exactly once
  // (startedRef) and survives the benign unmount/remount because aliveRef is
  // restored to true on the second mount before the loop's first check fires.
  useEffect(() => {
    aliveRef.current = true;
    if (startedRef.current) return () => { aliveRef.current = false; };
    startedRef.current = true;
    const wait = ms => new Promise(r => setTimeout(r, ms));
    async function typeInto(text) {
      for (let i = 1; i <= text.length; i++) {
        if (!aliveRef.current) return false;
        setDraft(text.slice(0, i));
        await wait(14 + Math.random() * 30);
      }
      await wait(240);
      return true;
    }
    async function run() {
      await wait(550);
      for (const step of SCRIPT) {
        if (!aliveRef.current) return;
        if (step.role === 'user') {
          await typeInto(step.text);
          if (!aliveRef.current) return;
          setDraft('');
          setMsgs(m => [...m, { role: 'user', text: step.text }]);
          await wait(420);
        } else {
          setTyping(true);
          await wait(850 + Math.random() * 600);
          if (!aliveRef.current) return;
          setTyping(false);
          setMsgs(m => [...m, { role: 'ai', text: step.text, chip: step.chip, card: step.card }]);
          await wait(step.card ? 850 : 600);
        }
      }
      if (aliveRef.current) setLive(true);
    }
    run();
    return () => { aliveRef.current = false; };
  }, []);

  function send() {
    const t = draft.trim();
    if (!t || !live) return;
    setMsgs(m => [...m, { role: 'user', text: t }]);
    setDraft('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs(m => [...m, { role: 'ai', text: "good call. let me pull that from the Sentinel and break it down for you 👇" }]);
    }, 1150);
  }

  function renderCard(c) {
    if (c === 'advisory') return <AdvCard />;
    if (c === 'rulebook') return <RulebookCard />;
    if (c === 'win') return <ResultCard win={true} />;
    if (c === 'loss') return <ResultCard win={false} />;
    return null;
  }

  return (
    <div className="chat">
      <div className="threads">
        <button className="new-thread"><IPlus size={15} />New thread</button>
        <div className="th-sec">Recent</div>
        {THREADS.map(([t, on]) => (
          <div key={t} className={'thread' + (on ? ' on' : '')}><IChat size={14} />{t}</div>
        ))}
      </div>
      <div className="conv-wrap">
        <div className="conv" ref={convRef}>
          {msgs.map((m, i) => (
            m.role === 'user'
              ? <div className="msg user" key={i}><div className="bubble">{m.text}</div><div className="u-ava">M</div></div>
              : <div className="msg ai" key={i}>
                  <div className="ai-ava"><img src={MARK} alt="" /></div>
                  <div className="bubble">
                    {m.chip && <span className="sent-chip"><span className="live-dot" />The Sentinel · {m.chip}</span>}
                    <p style={m.chip ? null : { marginTop: 0 }}>{m.text}</p>
                    {m.card && <div style={{ marginTop: 12 }}>{renderCard(m.card)}</div>}
                  </div>
                </div>
          ))}
          {typing && <TypingDots />}
        </div>
        <div className="composer">
          <div className="comp-top">
            <button className="model-sel"><img src={MARK} alt="" style={{ height: 14 }} />Syfx AI 1.0 <IChevron size={13} /></button>
            <button className="comp-globe"><IGlobe size={15} /></button>
          </div>
          <div className={'comp-bar' + (live ? ' on' : '')} onClick={() => live && inputRef.current && inputRef.current.focus()}>
            {live ? (
              <input
                ref={inputRef}
                value={draft}
                onChange={e => setDraft(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') send(); }}
                placeholder="Message Syfx AI…"
              />
            ) : (
              <div className="typed-line">{draft}<span className="caret" /></div>
            )}
            <button className="send-btn" onClick={send} disabled={!draft.trim()}><IUp size={16} /></button>
          </div>
          <div className="comp-chips">
            <span className="cchip"><ISpark size={12} />Sentinel scan</span>
            <span className="cchip">Build rulebook</span>
            <span className="cchip">Backtest</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===================== ZK PROOFS ===================== */
const PROOFS = [
  ['0xa3f9…2b1', 'XAU/USD', 'Long', '2m', '0x9c4e…e2'],
  ['0xb7c2…4d8', 'ETH/USDC', 'Long', '18m', '0x71af…3b'],
  ['0xc156…e6b', 'US500', 'Short', '1h', '0x5e90…a1'],
  ['0xd40e…f17', 'NVDA/USD', 'Short', '3h', '0x2dbe…77'],
];
function ProofsView() {
  return (
    <React.Fragment>
      <ViewHead title="ZK Proofs" sub="Every execution anchors an immutable receipt on the 0G Network." />
      <div className="proofs">
        {PROOFS.map(([id, mkt, side, time, tx]) => (
          <div className="proof-row" key={id}>
            <div className="proof-main">
              <div className="proof-id" style={mono}>{id}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                <span className="pm">{mkt}</span>
                <span className={'pside ' + (side === 'Long' ? 'l' : 's')}>{side}</span>
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>· {time} ago</span>
              </div>
            </div>
            <div className="proof-checks">
              {['Source', 'Inference', 'Adherence'].map(p => (
                <span key={p} className="pchk"><ICheck size={12} />{p}</span>
              ))}
            </div>
            <div className="proof-anchor">
              <span style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>0G anchor</span>
              <span style={{ ...mono, fontSize: 12, color: MINT }}>{tx}</span>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

/* ===================== MARKETS ===================== */
const MARKETS = [
  ['XAU', 'XAU/USD', 'Gold', '2,418.50', '+0.62%', '$120M'],
  ['ETH', 'ETH/USDC', 'Ethereum', '2,668.10', '+2.14%', '$340M'],
  ['500', 'US500', 'S&P 500', '7,308.25', '+1.84%', '$78M'],
  ['BTC', 'BTC/USD', 'Bitcoin', '64,212.0', '-0.80%', '$512M'],
  ['NVDA', 'NVDA/USD', 'NVIDIA', '921.40', '+3.27%', '$44M'],
  ['SOL', 'SOL/USDC', 'Solana', '168.20', '+5.10%', '$96M'],
  ['EUR', 'EUR/USD', 'Euro', '1.0832', '-0.12%', '$210M'],
  ['WTI', 'WTI/USD', 'Crude Oil', '78.41', '+0.94%', '$33M'],
];
function MarketsView() {
  return (
    <React.Fragment>
      <ViewHead title="Markets" sub="One intelligence across crypto, forex, indices, and commodities." />
      <div className="panel" style={{ marginTop: 16 }}>
        <div className="tbl-scroll">
          <table className="mtable">
            <thead><tr><th>Market</th><th>Price</th><th>24h</th><th>24h Volume</th><th></th></tr></thead>
            <tbody>
              {MARKETS.map(([tag, sym, name, px, chg, vol]) => {
                const up = chg[0] === '+';
                return (
                  <tr key={sym}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div className="trade-dot">{tag}</div>
                        <div><div className="trade-name">{sym}</div><div className="trade-side">{name}</div></div>
                      </div>
                    </td>
                    <td style={{ ...mono, color: '#fff', fontWeight: 600 }}>{px}</td>
                    <td style={{ ...mono, color: up ? MINT : DOWN, fontWeight: 700 }}>{chg}</td>
                    <td style={{ ...mono, color: 'var(--text-secondary)' }}>{vol}</td>
                    <td style={{ textAlign: 'right' }}><span className="trade-go">Trade <IArrow size={12} /></span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}

/* ===================== SHELL ===================== */
const NAV_MAIN = [
  ['Overview', 'overview', IHome],
  ['Trade', 'trade', ICandle],
  ['Syfx AI', 'chat', IChat],
  ['ZK Proofs', 'proofs', IProof],
  ['Markets', 'markets', IMarkets],
];
function Sidebar({ view, setView }) {
  return (
    <aside className="side">
      <div className="side-brand"><img src={MARK} alt="" /><b>Syfx</b></div>
      <div className="side-sec">Workspace</div>
      {NAV_MAIN.map(([label, key, I]) => (
        <div key={key} className={'nav-item' + (view === key ? ' active' : '')} onClick={() => setView(key)}>
          <I size={18} />{label}
        </div>
      ))}
      <div className="side-sec">Account</div>
      <div className="nav-item"><ISettings size={18} />Settings</div>
    </aside>
  );
}
function Dashboard() {
  const [view, setView] = useState('trade');
  const stageRef = useRef(null);
  const fitRef = useRef(null);
  const dashRef = useRef(null);
  const DESIGN_W = 1180;

  useEffect(() => {
    const stage = stageRef.current, fit = fitRef.current, dash = dashRef.current;
    if (!stage || !fit || !dash) return;
    let scale = 1, lastW = -1, lastH = -1;

    // WIDTH → scale (stable: known immediately from the container, set once per real width change)
    function applyScale() {
      const avail = stage.clientWidth - 48;
      if (avail <= 0 || Math.abs(avail - lastW) < 4) return;
      lastW = avail;
      scale = Math.min(1, avail / DESIGN_W);
      dash.style.transform = 'scale(' + scale + ')';
      fit.style.width = (DESIGN_W * scale) + 'px';
      applyHeight();
    }
    // HEIGHT → fit box (tracks content/font/view changes smoothly, never touches scale)
    function applyHeight() {
      const h = Math.round(dash.offsetHeight * scale);
      if (Math.abs(h - lastH) < 1) return;
      lastH = h;
      fit.style.height = h + 'px';
      try { parent.postMessage({ type: 'syfx-h', h: document.body.scrollHeight }, '*'); } catch (e) {}
    }

    applyScale();
    let hRaf = 0;
    function onResize() { applyScale(); }
    window.addEventListener('resize', onResize);
    let ro = null, sro = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => { cancelAnimationFrame(hRaf); hRaf = requestAnimationFrame(applyHeight); });
      ro.observe(dash);
      sro = new ResizeObserver(applyScale);
      sro.observe(stage);
    }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(applyHeight);
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(hRaf);
      if (ro) ro.disconnect(); if (sro) sro.disconnect();
    };
  }, [view]);

  const views = { overview: Overview, trade: TradeView, chat: ChatView, proofs: ProofsView, markets: MarketsView };
  const Active = views[view];
  return (
    <div className="dash-stage" ref={stageRef}>
      <div className="dash-fit" ref={fitRef}>
        <div className="dash" ref={dashRef}>
          <Sidebar view={view} setView={setView} />
          <div className={'main' + (view === 'chat' ? ' main-chat' : '')}><Active /></div>
        </div>
      </div>
    </div>
  );
}

/* ---------- NAV / HERO / STRIP ---------- */
function Nav({ backToSite }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; document.documentElement.style.overflow = ''; };
  }, [open]);
  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 24); }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
      <a className="nav-brand" href="index.html"><img src={MARK} alt="Syfx" /><b>Syfx</b></a>
      <div className="nav-links">
        <a href="index.html#how">How It Works</a><a href="index.html#features">Features</a><a href="index.html#markets">Markets</a><a href="contact.html">Contact</a>
      </div>
      <div className="nav-right">
        {backToSite ? (
          <Button variant="secondary" size="sm" iconLeft={<IArrowLeft size={15} />} onClick={() => { location.href = 'index.html'; }}>Back to site</Button>
        ) : (
          <React.Fragment>
            <a className="nav-getstarted" href="how-it-works.html">Get Started</a>
            <Button variant="primary" size="sm" onClick={() => { location.href = 'waitlist.html'; }}>Join Waitlist</Button>
          </React.Fragment>
        )}
        <button className="nav-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>
          {open ? <IX size={20} /> : <IMenu size={22} />}
        </button>
      </div>
      <div className={'nav-overlay' + (open ? ' open' : '')}>
        <div className="nav-overlay-links">
          <a href="index.html#how" onClick={() => setOpen(false)}>How It Works</a>
          <a href="index.html#features" onClick={() => setOpen(false)}>Features</a>
          <a href="index.html#markets" onClick={() => setOpen(false)}>Markets</a>
          <a href="contact.html" onClick={() => setOpen(false)}>Contact</a>
        </div>
        {backToSite ? (
          <Button variant="secondary" size="lg" fullWidth iconLeft={<IArrowLeft size={16} />} onClick={() => { location.href = 'index.html'; }}>Back to site</Button>
        ) : (
          <Button variant="primary" size="lg" fullWidth onClick={() => { location.href = 'waitlist.html'; }}>Join Waitlist</Button>
        )}
      </div>
    </nav>
  );
}
function Hero() {
  return (
    <header className="hero">
      <div className="arc-wrap" aria-hidden="true"><div className="arc-blob" /><div className="arc-glow" /></div>
      <div className="hero-inner">
        <Badge><IBolt size={13} />Early Access Now Open · Limited Spots</Badge>
        <h1>Trade without trust.<br /><span className="mint">Proven by math.</span></h1>
        <p className="sub">Syfx is the world's first verifiable AI operating system for traders. It mathematically proves every decision before a single dollar moves.</p>
        <div className="hero-cta">
          <Button variant="primary" size="lg" iconRight={<IArrow size={18} />} onClick={() => { location.href = 'waitlist.html'; }}>Join the Waitlist</Button>
          <Button variant="ghost" size="lg" iconRight={<IArrow size={18} />} onClick={() => { location.href = 'how-it-works.html'; }}>See how it works</Button>
        </div>
        <div className="hero-trust">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><ILock size={13} />Non-custodial</span><span className="sep">·</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><ICheck size={13} />ZK-Verified</span><span className="sep">·</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><IBolt size={13} />Built on 0G Network</span>
        </div>
      </div>
    </header>
  );
}
const CHIPS = ['Ethereum', 'Base', 'Arbitrum', 'Hyperliquid', 'Solana', 'Gold', 'Forex', '0G Network', 'RISC Zero'];
function Strip() {
  return (
    <section className="strip">
      <p>One intelligence · every market</p>
      <div className="strip-row">{CHIPS.map(c => <span className="chip" key={c}>{c}</span>)}</div>
    </section>
  );
}

/* ===== PROBLEM (PRD 6.3) ===== */
const PROBLEMS = [
  ['01', 'No explanation. No accountability.', 'Existing bots execute trades without ever telling you why. You trust an algorithm you did not write and cannot audit. And when it fails, the only answer you get is silence.'],
  ['02', 'Your money sits on their servers.', 'Most platforms hold your funds in centralized wallets they control. When they get hacked, go insolvent, or freeze withdrawals, your capital disappears with them.'],
  ['03', 'Parameters. Not intelligence.', 'Traditional bots force confusing technical settings, then never adapt. They do not learn, and they do not understand the nuance of your risk tolerance or psychology.'],
];
function ProblemSection() {
  return (
    <section className="sec" id="problem">
      <div className="sec-head">
        <span className="sec-label">THE PROBLEM</span>
        <h2 className="sec-h2">Most trading bots are black boxes<br />that hold your money <span className="mint">hostage.</span></h2>
        <p className="sec-sub">They can't explain themselves. They make you give up custody. And when they lose your money, there's no record of what they actually did.</p>
      </div>
      <div className="prob-grid">
        {PROBLEMS.map(([n, t, b]) => (
          <div className="prob-card" key={n}>
            <div className="prob-num">{n}.</div>
            <h4>{t}</h4>
            <p>{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* shared scripted-playback hook (React-18 double-invoke safe) */
function usePlayback(script) {
  const [shown, setShown] = useState([]);
  const [typing, setTyping] = useState(false);
  const aliveRef = useRef(false);
  const startedRef = useRef(false);
  useEffect(() => {
    aliveRef.current = true;
    if (startedRef.current) return () => { aliveRef.current = false; };
    startedRef.current = true;
    const wait = ms => new Promise(r => setTimeout(r, ms));
    (async () => {
      while (aliveRef.current) {
        setShown([]); setTyping(false);
        await wait(700);
        for (const s of script) {
          if (!aliveRef.current) return;
          const fromAI = s.role === 'ai' || s.who === 'bot';
          if (fromAI) { setTyping(true); await wait(1100 + Math.random() * 700); if (!aliveRef.current) return; setTyping(false); }
          else { await wait(650); }
          setShown(x => [...x, s]);
          // read pause scales with message length so longer messages stay up longer
          const len = (s.text ? s.text.length : 40) + (s.card ? 90 : 0);
          await wait(Math.min(4200, 1300 + len * 22));
        }
        await wait(11000);
      }
    })();
    return () => { aliveRef.current = false; };
  }, []);
  return { shown, typing };
}

/* phone status bar + notch */
function PhoneChrome({ title }) {
  return (
    <React.Fragment>
      <div className="phone-notch" />
      <div className="phone-status">
        <span>9:41</span>
        <span className="ps-ic">
          <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="1"/><rect x="4.5" y="5" width="3" height="6" rx="1"/><rect x="9" y="2.5" width="3" height="8.5" rx="1"/><rect x="13.5" y="0" width="3" height="11" rx="1"/></svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor"><path d="M7.5 2.2c2.1 0 4 .8 5.4 2.1l1.1-1.2A9.4 9.4 0 0 0 7.5.6 9.4 9.4 0 0 0 1 3.1l1.1 1.2A7.8 7.8 0 0 1 7.5 2.2Zm0 3.1c1.2 0 2.3.5 3.1 1.2l1.1-1.2a6.2 6.2 0 0 0-8.4 0l1.1 1.2A4.6 4.6 0 0 1 7.5 5.3Zm0 3 2-2a2.8 2.8 0 0 0-4 0l2 2Z"/></svg>
          <svg width="24" height="11" viewBox="0 0 24 11" fill="none"><rect x="0.5" y="0.5" width="20" height="10" rx="2.5" stroke="currentColor" opacity="0.5"/><rect x="2" y="2" width="16" height="7" rx="1" fill="currentColor"/><rect x="21.5" y="3.5" width="1.5" height="4" rx="0.75" fill="currentColor" opacity="0.5"/></svg>
        </span>
      </div>
    </React.Fragment>
  );
}

/* ===== SOLUTION (PRD 6.4) — points + execution flow inside a phone ===== */
const SOL_POINTS = [
  [IChat, 'Intelligence you can talk to', 'Consult Syfx like a senior analyst who has read every report, chart and headline before you opened your mouth. You build strategy together, in plain conversation.'],
  [IProof, 'Math before money moves', 'Before a single trade executes, Syfx runs a Triple-Layer Zero-Knowledge Proof that the data is real, the AI reasoned correctly, and your exact rules will be followed.'],
  [ILock, 'Your funds. Your vault. Always.', 'Syfx is 100% non-custodial. Your capital sits in your personal smart-contract vault. Syfx never holds your money, never touches your keys, and can never drain your funds.'],
];
const FLOW = [
  ['1', 'You describe your intent', 'Plain English → Syfx AI'],
  ['2', 'The Sentinel scans', 'Real-time global data'],
  ['3', 'ZK-Rulebook compiled', 'Your strategy in math'],
  ['4', 'Triple ZK Proof runs', 'Three verifications'],
  ['5', 'Vault executes', 'Receipt anchored on 0G'],
];
function SolutionSection() {
  return (
    <section className="sec" id="solution">
      <div className="sol">
        <div className="sol-left">
          <span className="sec-label">THE SOLUTION</span>
          <h2 className="sol-h2">Syfx is not a bot.<br />It is a trading <span className="mint">operating system.</span></h2>
          <div className="sol-points">
            {SOL_POINTS.map(([I, t, b]) => (
              <div className="sol-point" key={t}>
                <div className="sol-ico"><I size={20} /></div>
                <div><h4>{t}</h4><p>{b}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="phone-col">
          <div className="phone cut">
            <PhoneChrome />
            <div className="phone-screen">
              <div className="ps-head"><img src={MARK} alt="" /><div><b>Execution flow</b><span>XAU/USD · $300 long</span></div></div>
              {FLOW.map(([n, t, s]) => (
                <div className="ps-step" key={n}>
                  <span className="ps-num">{n}</span>
                  <div><div className="ps-t">{t}</div><div className="ps-s">{s}</div></div>
                </div>
              ))}
              <div className="ps-callout">
                <div className="pc-pass"><ICheck size={13} />All proofs pass → Vault unlocks</div>
                <div className="pc-fail">Any proof fails → execution refused by code</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== HOW IT WORKS (PRD 6.5) — animated Syfx-AI dashboard conversation ===== */
const HOW_SCRIPT = [
  { role: 'user', text: "yo what's gold looking like this week? been eyeing a long but the volatility's got me nervous 😅" },
  { role: 'ai', chip: 'scanned 6 live sources', text: "pulled the live read first. RSI tapped 33 at the london open, ETF flows are net-positive and the fed's sounding dovish. there's a clean setup here." },
  { role: 'user', text: "ok i'm in. keep it small tho, i don't trust this tape" },
  { role: 'ai', text: "smart. tight one: small size, 2% stop, +5.5% target. here's the play 👇", setup: true },
  { role: 'user', text: "why long and not just sit it out?" },
  { role: 'ai', text: "your rules only fire on a deep RSI reset and it printed 33. macro's a tailwind, not a headwind. higher conviction, capped risk. if it slips i'm out at −2%, no emotion." },
  { role: 'user', text: "perfect. send it 🚀" },
  { role: 'ai', text: "done: filled at 2,401.0 🎯 i'll babysit it and ping you the second anything changes." },
];
const HOW_THREADS = [
  ['Gold setup: this week', true],
  ['ETH momentum scan', false],
  ['Hedge my portfolio', false],
  ['BTC chop watch', false],
  ['Weekly macro brief', false],
];
function HowChat() {
  const { shown, typing } = usePlayback(HOW_SCRIPT);
  const convRef = useRef(null);
  const stageRef = useRef(null);
  const fitRef = useRef(null);
  const dashRef = useRef(null);
  const HOW_W = 920;
  useEffect(() => { const c = convRef.current; if (c) c.scrollTop = c.scrollHeight; }, [shown, typing]);
  useEffect(() => {
    let lastW = -1, raf = 0;
    function apply() {
      const stage = stageRef.current, fit = fitRef.current, dash = dashRef.current;
      if (!stage || !fit || !dash) return;
      const avail = stage.clientWidth;
      if (!avail || avail === lastW) return;
      lastW = avail;
      const scale = Math.max(0.2, Math.min(1.15, avail / HOW_W));
      dash.style.transformOrigin = 'top left';
      dash.style.transform = 'scale(' + scale + ')';
      const dh = dash.offsetHeight;
      fit.style.width = (HOW_W * scale) + 'px';
      fit.style.height = (dh * scale) + 'px';
      try { parent.postMessage({ type: 'syfx-h', h: document.body.scrollHeight }, '*'); } catch (e) {}
    }
    function schedule() { apply(); }
    apply();
    const timers = [60, 200, 500, 1000].map(ms => setTimeout(apply, ms));
    window.addEventListener('resize', apply);
    let ro = null;
    if (typeof ResizeObserver !== 'undefined' && stageRef.current) {
      ro = new ResizeObserver(apply); ro.observe(stageRef.current);
    }
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('resize', apply); if (ro) ro.disconnect();
    };
  }, []);
  return (
    <div className="how-stage" ref={stageRef}>
      <div className="how-fit" ref={fitRef}>
        <div className="how-dash" ref={dashRef}>
      <div className="how-shell">
        <aside className="threads">
          <button className="new-thread"><IPlus size={15} />New thread</button>
          <div className="th-sec">Recent</div>
          {HOW_THREADS.map(([t, on]) => (
            <div key={t} className={'thread' + (on ? ' on' : '')}><IChat size={14} />{t}</div>
          ))}
        </aside>
        <div className="how-main">
          <div className="how-bar">
            <img src={MARK} alt="" /><b>Syfx AI</b>
            <span className="live-pill" style={{ marginLeft: 'auto' }}><span className="live-dot" />The Sentinel · live</span>
          </div>
          <div className="how-conv" ref={convRef}>
            {shown.map((m, i) => (
              m.role === 'user'
                ? <div className="msg user" key={i}><div className="bubble">{m.text}</div><div className="u-ava">M</div></div>
                : <div className="msg ai" key={i}>
                    <div className="ai-ava"><img src={MARK} alt="" /></div>
                    <div className="bubble">
                      {m.chip && <span className="sent-chip"><span className="live-dot" />The Sentinel · {m.chip}</span>}
                      <p style={m.chip ? null : { marginTop: 0 }}>{m.text}</p>
                      {m.setup && (
                        <div className="adv-card" style={{ marginTop: 12 }}>
                          <div className="adv-top">
                            <span className="adv-tag"><span className="live-dot" />SETUP</span>
                            <span style={{ ...mono, fontSize: 11, color: 'var(--text-muted)' }}>XAU/USD</span>
                          </div>
                          <div className="adv-grid">
                            <div><span>Side</span><b style={{ color: MINT }}>Long</b></div>
                            <div><span>Size</span><b>$300</b></div>
                            <div><span>Entry</span><b style={mono}>2,401.0</b></div>
                            <div><span>Stop</span><b style={mono}>−2.0%</b></div>
                            <div><span>Target</span><b style={{ ...mono, color: MINT }}>+5.5%</b></div>
                            <div><span>Leverage</span><b style={mono}>5×</b></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
            ))}
            {typing && (
              <div className="msg ai"><div className="ai-ava"><img src={MARK} alt="" /></div>
                <div className="typing"><span></span><span></span><span></span></div></div>
            )}
          </div>
          <div className="how-composer">
            <div className="hc3d">
              <div className="hc3d-inner">
                <button className="hc-model"><img src={MARK} alt="" style={{ height: 13 }} />Syfx AI 1.0 <IChevron size={12} /></button>
                <span className="hc-input">Describe your next trade…</span>
                <button className="hc-send"><IUp size={15} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

const PING = [
  { who: 'bot', text: "🔔 Sentinel confirmed our Gold setup. All 3 ZK proofs passed. Execute the $300 long?", actions: true },
  { who: 'me', text: "WHY" },
  { who: 'bot', text: "RSI hit 33 (your trigger), ETF inflows positive, Fed dovish. Stop −2%, target +5.5%, risk capped at $250." },
  { who: 'me', text: "Approve ✅" },
  { who: 'bot', text: "Vault unlocked. Executing… ✅ Filled at 2,401.0. Receipt anchored on 0G." },
];
function AdvisoryPhone() {
  const { shown, typing } = usePlayback(PING);
  const bodyRef = useRef(null);
  useEffect(() => { const c = bodyRef.current; if (c) c.scrollTop = c.scrollHeight; }, [shown, typing]);
  return (
    <div className="phone cut">
      <PhoneChrome />
      <div className="tg-head">
        <div className="tg-ava"><img src={MARK} alt="" /></div>
        <div><div className="tg-name">Syfx Bot</div><div className="tg-on"><span className="live-dot" />online</div></div>
      </div>
      <div className="tg-body" ref={bodyRef}>
        {shown.map((m, i) => (
          <div className={'tg-msg ' + (m.who === 'me' ? 'me' : 'bot')} key={i}>
            {m.text}
            {m.actions && <div className="tg-actions"><span className="tg-btn">Approve</span><span className="tg-btn ghost">WHY</span></div>}
          </div>
        ))}
        {typing && <div className="tg-typing"><span></span><span></span><span></span></div>}
      </div>
    </div>
  );
}
function HowItWorks() {
  return (
    <section className="sec" id="how">
      <div className="sec-head">
        <span className="sec-label">HOW IT WORKS</span>
        <h2 className="sec-h2">From conversation to<br /><span className="mint">cryptographically verified execution.</span></h2>
        <p className="sec-sub">Watch a real Syfx session: you talk, the Sentinel scans, your rulebook compiles, three proofs run, and only then does the vault move.</p>
      </div>
      <HowChat />
      <div className="adv2">
        <div className="adv2-left">
          <div className="adv-row"><span className="live-dot" /><span className="adv-lbl">ADVISORY MODE</span></div>
          <h3>You stay in control. Always.</h3>
          <p>Before any trade fires, Syfx pings your Telegram with the full setup and its three passing proofs. Interrogate the AI right there. Ask <b>WHY</b> and get the complete breakdown.</p>
          <p>Only after your green light does the vault unlock and execute. No surprise trades. No black box. Just a conversation that ends in math.</p>
        </div>
        <div className="phone-col">
          <AdvisoryPhone />
        </div>
      </div>
    </section>
  );
}

/* ===== FEATURES (PRD 6.6) — six cards ===== */
const FEATURES = [
  [IBrain, 'Syfx AI 1.0', 'Conversational intelligence that explains its thesis, cites its sources, and learns your trading psychology permanently through Infinite Memory.'],
  [ISentinel, 'The Sentinel', 'A relentless global data engine scanning social media, macro news, central-bank speeches and on-chain liquidity pools simultaneously, 24/7.'],
  [IProof, 'Triple-Layer ZK Proof', 'Three independent cryptographic proofs verify every trade before execution. Math, not trust.'],
  [ILock, 'Non-Custodial Vault', 'Your funds never leave your personal smart contract. Syfx cannot hold, move, or access your capital without a verified execution proof.'],
  [IBolt, 'Sentinel Agents', 'Autonomous background agents deployed per strategy, hunting your exact setups across crypto and forex markets around the clock.'],
  [ITrend, 'ZK Performance Card', 'Every trade generates a publicly verifiable performance record on the 0G Network. No fabricated PnL. No cherry-picked results. Only math.'],
];
function FeaturesSection() {
  const railRef = useRef(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const mq = window.matchMedia('(max-width: 640px)');
    let timer = 0, idle = 0, paused = false, raf = 0;
    const cards = () => Array.from(rail.children);

    // gentle, smooth emphasis — centered card full, neighbors slightly smaller/dimmer.
    // NO perspective/rotateY (that caused the page-flip lag).
    function emphasize() {
      if (!mq.matches) { cards().forEach(c => { c.style.transform = ''; c.style.opacity = ''; }); return; }
      const mid = rail.scrollLeft + rail.clientWidth / 2;
      let nearest = 0, best = Infinity;
      cards().forEach((c, i) => {
        const cc = c.offsetLeft + c.offsetWidth / 2;
        const ad = Math.min(Math.abs(cc - mid) / rail.clientWidth, 1);
        c.style.transform = 'scale(' + (1 - ad * 0.10) + ')';
        c.style.opacity = String(1 - ad * 0.4);
        if (Math.abs(cc - mid) < best) { best = Math.abs(cc - mid); nearest = i; }
      });
      if (nearest !== activeRef.current) { activeRef.current = nearest; setActive(nearest); }
    }
    function onScroll() { cancelAnimationFrame(raf); raf = requestAnimationFrame(emphasize); }
    function bumpIdle() { paused = true; clearTimeout(idle); idle = setTimeout(() => { paused = false; }, 3500); }
    function slideTo(i) {
      const c = cards()[i]; if (!c) return;
      rail.scrollTo({ left: c.offsetLeft - (rail.clientWidth - c.offsetWidth) / 2, behavior: 'smooth' });
    }
    function tick() {
      if (!mq.matches || paused) return;
      const next = (activeRef.current + 1) % FEATURES.length;
      slideTo(next);
    }
    function startAuto() { clearInterval(timer); if (mq.matches) timer = setInterval(tick, 5000); }
    function onMq() { emphasize(); startAuto(); }
    rail.addEventListener('scroll', onScroll, { passive: true });
    rail.addEventListener('pointerdown', bumpIdle, { passive: true });
    rail.addEventListener('touchstart', bumpIdle, { passive: true });
    rail.addEventListener('wheel', bumpIdle, { passive: true });
    window.addEventListener('resize', emphasize);
    if (mq.addEventListener) mq.addEventListener('change', onMq); else if (mq.addListener) mq.addListener(onMq);
    emphasize(); startAuto();
    const t0 = setTimeout(() => { emphasize(); startAuto(); }, 300);
    rail._slideTo = slideTo;
    return () => {
      rail.removeEventListener('scroll', onScroll);
      rail.removeEventListener('pointerdown', bumpIdle);
      rail.removeEventListener('touchstart', bumpIdle);
      rail.removeEventListener('wheel', bumpIdle);
      window.removeEventListener('resize', emphasize);
      if (mq.removeEventListener) mq.removeEventListener('change', onMq); else if (mq.removeListener) mq.removeListener(onMq);
      clearInterval(timer); clearTimeout(idle); clearTimeout(t0); cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="sec" id="features">
      <div className="sec-head">
        <span className="sec-label">FEATURES</span>
        <h2 className="sec-h2">Every feature built for one<br />purpose: <span className="mint">verified execution.</span></h2>
      </div>
      <div className="feat-rail" ref={railRef}>
        {FEATURES.map(([I, t, b]) => (
          <div className="feat" key={t}>
            <div className="feat-ico"><I size={20} /></div>
            <h4>{t}</h4>
            <p>{b}</p>
          </div>
        ))}
      </div>
      <div className="feat-dots" aria-hidden="true">
        {FEATURES.map((_, i) => (
          <button key={i} className={'fd' + (i === active ? ' on' : '')}
            onClick={() => { const r = railRef.current; if (r && r._slideTo) r._slideTo(i); }} />
        ))}
      </div>
    </section>
  );
}

/* ===== AUTONOMY SPECTRUM (Execution Mode) ===== */
const MODES = [
  {
    key: 'advisory', tab: 'Advisory · Co-pilot', icon: IBrain,
    accent: '#F5A524', tint: 'rgba(245,165,36,0.12)', border: 'rgba(245,165,36,0.35)', glow: 'rgba(245,165,36,0.10)',
    title: 'Advisory Mode: The Elite Co-pilot',
    body: 'The AI acts as your senior research analyst. It scans the globe 24/7, finds a high-confidence setup, builds a reasoning summary, and pings you. It explains the "why" and waits for your Approve or Reject. You are the pilot; the AI is the radar.',
    chips: ['One-tap approve / reject', 'Reasoning summary', 'Telegram pings'],
    flow: [
      ['Sentinel finds a setup', 'Scans global data 24/7'],
      ['You get a ping', 'Reasoning summary on Telegram'],
      ['You approve or reject', 'Nothing executes without your call'],
    ],
  },
  {
    key: 'auto', tab: 'Autonomous · Full auto', icon: IBolt,
    accent: '#00E5A0', tint: 'rgba(0,229,160,0.12)', border: 'rgba(0,229,160,0.30)', glow: 'rgba(0,229,160,0.10)',
    title: 'Autonomous Mode: The Full-Auto Engine',
    body: 'You set the rulebook once; the AI runs it end-to-end. It hunts setups, runs the triple ZK proof, and executes the moment every proof passes. No ping, no wait. You stay in control through your rules and a live, verifiable receipt trail.',
    chips: ['Hands-free execution', 'Rulebook-bound', 'ZK receipt per trade'],
    flow: [
      ['Sentinel finds a setup', 'Matched against your rulebook'],
      ['Triple ZK proof runs', 'Source · Inference · Adherence'],
      ['Vault executes instantly', 'Permanent receipt anchored on 0G'],
    ],
  },
];
function AutonomySpectrum() {
  const [mode, setMode] = useState(0);
  const m = MODES[mode];
  const Ico = m.icon;
  const stageRef = useRef(null);
  const fitRef = useRef(null);
  const cardRef = useRef(null);
  const AUTO_W = 820;
  useLayoutEffect(() => {
    const stage = stageRef.current, fit = fitRef.current, card = cardRef.current;
    if (!stage || !fit || !card) return;
    let scale = 1, lastW = -1, lastH = -1;
    function applyScale() {
      const avail = stage.clientWidth;
      if (avail <= 0 || Math.abs(avail - lastW) < 2) { applyHeight(); return; }
      lastW = avail;
      scale = Math.min(1, avail / AUTO_W);
      card.style.transformOrigin = 'top left';
      card.style.transform = 'scale(' + scale + ')';
      fit.style.width = (AUTO_W * scale) + 'px';
      applyHeight();
    }
    function applyHeight() {
      const h = Math.round(card.offsetHeight * scale);
      if (Math.abs(h - lastH) < 1) return;
      lastH = h;
      fit.style.height = h + 'px';
    }
    applyScale();
    let hRaf = 0;
    function onResize() { applyScale(); }
    window.addEventListener('resize', onResize);
    let ro = null, sro = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => { cancelAnimationFrame(hRaf); hRaf = requestAnimationFrame(applyHeight); });
      ro.observe(card);
      sro = new ResizeObserver(applyScale); sro.observe(stage);
    }
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(hRaf);
      if (ro) ro.disconnect(); if (sro) sro.disconnect();
    };
  }, [mode]);
  return (
    <section className="sec" id="autonomy">
      <div className="sec-head">
        <span className="sec-label">THE AUTONOMY SPECTRUM</span>
        <h2 className="sec-h2">You're never forced to choose<br />between <span className="mint">ease and control.</span></h2>
        <p className="sec-sub">Meet <b style={{ color: 'var(--text-primary)' }}>Execution Mode</b>: one master toggle in your dashboard. Run Syfx as a co-pilot that asks before it acts, or a full-auto engine that executes on its own. Flip it whenever you like; the proofs run either way.</p>
      </div>
      <div className="auto-toggle" role="tablist" style={{ '--am': m.accent }}>
        {MODES.map((mm, i) => (
          <button key={mm.key} role="tab" aria-selected={mode === i}
            className={'auto-tab' + (mode === i ? ' on' : '')} onClick={() => setMode(i)}
            style={mode === i ? { background: mm.accent, color: '#09090B' } : undefined}>
            {mm.tab}
          </button>
        ))}
      </div>
      <div className="auto-stage" ref={stageRef}>
        <div className="auto-fit" ref={fitRef}>
          <div className="auto-card" ref={cardRef} style={{ '--am': m.accent, '--am-tint': m.tint, '--am-border': m.border, '--am-glow': m.glow }}>
            <div className="auto-inner" key={m.key}>
              <div className="auto-card-head">
                <div className="auto-ico"><Ico size={24} /></div>
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                  <div className="auto-chips">
                    {m.chips.map(c => <span className="auto-chip" key={c}><ICheck size={13} />{c}</span>)}
                  </div>
                </div>
              </div>
              <div className="auto-flow">
                {m.flow.map(([t, s], i) => (
                  <div className="auto-step" key={t}>
                    <span className="auto-step-n">{i + 1}</span>
                    <div><div className="auto-step-t">{t}</div><div className="auto-step-s">{s}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== MARKETS (PRD 6.7) ===== */
const MK_CRYPTO = [['ETH', 'Ethereum', 'eth.png'], ['BASE', 'Base', 'base.png'], ['ARB', 'Arbitrum', 'arb.png'], ['SOL', 'Solana', 'sol.png'], ['HL', 'Hyperliquid', 'hl.png'], ['TRX', 'Tron', 'trx.png'], ['SUI', 'Sui', 'sui.png'], ['BNB', 'BNB Chain', 'bnb.png'], ['OP', 'Optimism', 'op.png'], ['AVAX', 'Avalanche', 'avax.png'], ['APT', 'Aptos', 'apt.png'], ['BLST', 'Blast', 'blst.png']];
const MK_FOREX = [['XAU', 'Gold'], ['XAG', 'Silver'], ['OIL', 'Crude Oil'], ['EUR', 'EUR/USD'], ['GBP', 'GBP/USD'], ['JPY', 'USD/JPY'], ['SPX', 'S&P 500', 'spx.png'], ['NDX', 'Nasdaq 100', 'nasdaq.png'], ['OST', 'Ostium', 'ostium.png'], ['OAN', 'OANDA (V2)', 'oanda.png']];
const MK_INFRA = [['0G', '0G Network', 'og_network.png'], ['R0', 'RISC Zero', 'risc_zero.png'], ['PV', 'Privy', 'privy.png']];
function MarqueeRow({ label, items, infra, rev, dur }) {
  const row = (hidden) => (
    <div className="mk-track" aria-hidden={hidden ? 'true' : undefined}>
      {items.map(([t, n, logo]) => (
        <span className={'chain-tok' + (infra ? ' infra' : '')} key={n + (hidden ? '-b' : '')}>
          <span className={'cdot' + (logo ? ' has-logo' : '')}>{logo ? <img src={'assets/logos/' + logo} alt="" /> : t}</span>{n}
        </span>
      ))}
    </div>
  );
  return (
    <div className="mk-block">
      <div className="mk-label">{label}</div>
      <div className={'mk-marquee' + (rev ? ' rev' : '')}>
        <div className="chains-grid mk-marquee-inner" style={{ '--mk-dur': (dur || 26) + 's' }}>
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}
function MarketsSection() {
  return (
    <section className="sec" id="markets">
      <div className="sec-head">
        <span className="sec-label">MARKETS & INFRASTRUCTURE</span>
        <h2 className="sec-h2">One intelligence. <span className="mint">Every market.</span></h2>
      </div>
      <MarqueeRow label="Crypto spot & perps" items={MK_CRYPTO} dur={30} />
      <MarqueeRow label="Forex & RWAs" items={MK_FOREX} rev dur={26} />
      <MarqueeRow label="ZK & storage infrastructure" items={MK_INFRA} infra dur={20} />
      <p className="chains-note">Additional markets and chains added continuously.</p>
    </section>
  );
}

/* ===== CREDIBILITY — "don't trust, verify": technology trust signals ===== */
const CREDS = [
  [IGithub, 'Open-source & auditable', 'Every smart contract and ZK circuit is public. Read the code, replay the proofs, and confirm the math yourself. No blind trust required.'],
  [IGlobe, 'Anchored on 0G Network', 'Every trade leaves a permanent ZK receipt on 0G Network, so the record of what the AI did (and why) can never be edited or erased.'],
  [IProof, 'Built on RISC Zero zkVM', 'Proofs run on RISC Zero, the industry-leading zero-knowledge virtual machine trusted by serious ZK infrastructure worldwide.'],
  [ILock, 'Non-custodial by architecture', 'Your capital lives in your own smart-contract vault. Syfx can never hold, move, or freeze your funds. It is mathematically prevented from doing so.'],
];
function CredibilitySection() {
  return (
    <section className="sec" id="credibility">
      <div className="sec-head">
        <span className="sec-label">VERIFIABLE BY DESIGN</span>
        <h2 className="sec-h2">Don't trust.<br /><span className="mint">Verify.</span></h2>
        <p className="sec-sub">Syfx is engineered so you never have to take our word for anything. Every claim on this page is backed by code and cryptography you can inspect.</p>
      </div>
      <div className="cred-grid">
        {CREDS.map(([I, t, b]) => (
          <div className="cred-card" key={t}>
            <div className="feat-ico"><I size={20} /></div>
            <div><h4>{t}</h4><p>{b}</p></div>
          </div>
        ))}
      </div>
      <div className="cred-statement">
        <p>Every trade comes with mathematical proof that the data was real, the AI reasoned correctly, and your rules were followed. <span className="mint">Checkable by anyone, owned by you.</span></p>
      </div>
    </section>
  );
}

/* ===== OUR COMMUNITIES ===== */
const COMMS = [
  ['X / Twitter', <IX size={26} />],
  ['Telegram', <ISend size={26} />],
  ['Discord', <IDiscord size={26} />],
  ['LinkedIn', <ILinkedIn size={26} />],
];
function CommunitiesSection() {
  return (
    <section className="sec" id="community">
      <div className="sec-head">
        <span className="sec-label">OUR COMMUNITIES</span>
        <h2 className="sec-h2">Build with us.</h2>
        <p className="sec-sub">Syfx is built in the open. Follow the journey, ask questions, and shape what comes next. Pick your corner of the community below.</p>
      </div>
      <div className="comm-row">
        {COMMS.map(([name, icon]) => (
          <a className="comm" href="#" key={name} aria-label={name}>
            <span className="comm-ico">{icon}</span>
            <span className="comm-name">{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ===== FAQ ===== */
const FAQS = [
  ['What is Syfx?', "Syfx is a verifiable AI operating system for traders. You build strategy in plain conversation, and every trade is backed by a triple-layer zero-knowledge proof before a single dollar moves, so you can verify the AI's work instead of trusting it blindly."],
  ['Is Syfx custodial? Can it touch my funds?', 'No. Syfx is 100% non-custodial by architecture. Your capital lives in your own smart-contract vault. Syfx can never hold, move, or freeze your funds without a verified execution proof.'],
  ['What do early-access members get?', 'Founding members get a permanent badge on their profile, Elite tier free for 30 days, and a direct line to the team. Early access is limited. Joining the waitlist locks in your spot.'],
  ['Which markets and chains are supported?', 'Crypto spot and perps across Ethereum, Base, Arbitrum, Hyperliquid and Solana, plus forex and RWAs via Ostium and OANDA. Proofs are anchored on the 0G Network, with more markets added continuously.'],
  ['How do the ZK proofs actually work?', 'Before execution, Syfx runs three independent cryptographic proofs: that the market data was real, the AI reasoned correctly, and your exact rules were followed. If any one fails, the vault physically refuses to execute. Enforced by code, not policy.'],
];
function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="sec" id="faq">
      <div className="sec-head">
        <span className="sec-label">FAQ</span>
        <h2 className="sec-h2">Questions, <span className="mint">answered.</span></h2>
      </div>
      <div className="faq-list">
        {FAQS.map(([q, a], i) => (
          <div className={'faq-item' + (open === i ? ' open' : '')} key={q}>
            <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
              {q}<span className="chev"><IPlus size={18} /></span>
            </button>
            <div className="faq-a" style={{ maxHeight: open === i ? 240 : 0 }}>
              <p>{a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===== WAITLIST CTA ===== */
const IS_LOCAL = ['localhost', '127.0.0.1'].includes(location.hostname);
const WAITLIST_API_URL = IS_LOCAL ? 'http://localhost:8000/waitlist' : 'https://syfx-waitlist-production.up.railway.app/waitlist';

function WaitlistCTA() {
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(true);
  const [done, setDone] = useState(false);
  const [alreadyJoined, setAlreadyJoined] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function submit(e) {
    if (e) e.preventDefault();
    const value = email.trim();
    if (!value || loading) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(WAITLIST_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Failed to join waitlist');
      setAlreadyJoined(data.status === 'already_joined');
      setDone(true);
    } catch (err) {
      setError(err.message || 'Connection error. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="wl" id="waitlist">
      <div className="wl-glow" />
      <div className="wl-card">
        {!done ? (
          <React.Fragment>
            <div className="wl-left">
              <span className="wl-eyebrow"><span className="live-dot" />EARLY ACCESS · LIMITED SPOTS</span>
              <h2>Be first when<br /><span className="mint">Syfx goes live.</span></h2>
              <p className="wl-lead">Join the early-access list for the verifiable AI trading OS.</p>
              <p className="wl-note">Product updates, Syfx Points announcements, and rollout news, straight to your inbox. Founding members get Elite tier free for 30 days and a permanent profile badge.</p>
              <div className="wl-pills">
                <span className="wl-pill"><ICheck size={13} />Founding Member</span>
                <span className="wl-pill"><ICheck size={13} />Elite: free 30 days</span>
                <span className="wl-pill"><ICheck size={13} />Direct team line</span>
              </div>
            </div>
            <div className="wl-right">
              <form className="wl-form" onSubmit={submit}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required />
                <Button variant="primary" size="lg" type="submit" disabled={loading}>
                  {loading ? 'Joining…' : 'Join the Waitlist'}
                </Button>
              </form>
              {error && <p className="wl-fine" style={{ color: DOWN }}>{error}</p>}
              <button type="button" className={'wl-consent' + (agree ? ' on' : '')} onClick={() => setAgree(a => !a)}>
                <span className="cbox">{agree && <ICheck size={12} />}</span>
                I agree to receive product updates and early-access news from Syfx.
              </button>
              <p className="wl-fine">Join <b>4,200+</b> traders on the waitlist. No spam. Unsubscribe anytime.</p>
            </div>
          </React.Fragment>
        ) : (
          <div className="wl-success">
            <div className="tick"><ICheck size={28} /></div>
            <h3>{alreadyJoined ? "You're already on the list." : "You're on the list."}</h3>
            <p>{alreadyJoined ? "We'll be in touch." : "Welcome to Syfx. We'll email you the moment early access opens."}</p>
            <div className="wl-share">
              <button><IX size={14} />Share on X</button>
              <button>Copy link</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ===== FOOTER ===== */
function Footer() {
  return (
    <footer className="foot">
      <div className="foot-top">
        <div className="foot-brand">
          <div className="row"><img src={MARK} alt="" /><b>Syfx</b></div>
          <p>The verifiable AI operating system for traders. Trade without trust. Proven by math.</p>
          <div className="foot-social">
            <a href="#" aria-label="X"><IX size={16} /></a>
            <a href="#" aria-label="Telegram"><ISend size={16} /></a>
            <a href="#" aria-label="Discord"><IDiscord size={16} /></a>
            <a href="#" aria-label="LinkedIn"><ILinkedIn size={16} /></a>
            <a href="#" aria-label="GitHub"><IGithub size={16} /></a>
          </div>
        </div>
        <div className="foot-links">
          <div className="foot-col">
            <h5>Product</h5>
            <a href="#how">How It Works</a><a href="#features">Features</a><a href="#markets">Markets</a><a href="#waitlist">Join Waitlist</a>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <a href="contact.html">About</a><a href="contact.html">Contact</a><a href="contact.html">Careers</a>
          </div>
          <div className="foot-col">
            <h5>Connect</h5>
            <a href="#">X / Twitter</a><a href="#">Telegram</a><a href="#">Discord</a>
          </div>
        </div>
      </div>
      <div className="foot-bar">
        <span className="foot-disc">Early access is limited. Digital assets involve substantial risk of loss.</span>
        <div className="foot-bar-right">
          <a href="#">Privacy</a><a href="#">Terms</a>
          <span>© 2026 Syfx</span>
        </div>
      </div>
      <div className="foot-mark" aria-hidden="true">Syfx</div>
    </footer>
  );
}

function HowItWorksPage() {
  return (
    <React.Fragment>
      <Nav backToSite />
      <header className="hiw-hero">
        <Badge><IBolt size={13} />Live Product Demo</Badge>
        <h1 className="hiw-h1">See Syfx <span className="mint">in action.</span></h1>
        <p className="hiw-sub">A full walkthrough of the real workspace: trade execution, the Syfx AI conversation, ZK proofs, and markets, all in one interactive dashboard.</p>
      </header>
      <Dashboard />
      <section className="sec" id="conversation">
        <div className="sec-head">
          <span className="sec-label">THE CONVERSATION</span>
          <h2 className="sec-h2">From plain English to<br /><span className="mint">a cryptographically verified trade.</span></h2>
        </div>
        <HowChat />
      </section>
      <FAQSection />
      <Footer />
    </React.Fragment>
  );
}

function Page() {
  return (
    <React.Fragment>
      <Nav /><Hero /><Dashboard /><Strip />
      <ProblemSection /><SolutionSection /><HowItWorks /><FeaturesSection /><AutonomySpectrum /><MarketsSection /><CredibilitySection />
      <CommunitiesSection /><FAQSection /><WaitlistCTA /><Footer />
    </React.Fragment>
  );
}
function initReveal() {
  try {
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var els = document.querySelectorAll('.sec, .strip, .wl');
    if (reduce || !('IntersectionObserver' in window)) { els.forEach(function(e){ e.classList.add('in'); }); return; }
    // alternate entrance direction/axis per section for a varied, modern feel
    var variants = ['rv-up', 'rv-left', 'rv-zoom', 'rv-right', 'rv-tiltL', 'rv-up', 'rv-tiltR', 'rv-left'];
    els.forEach(function(e, i){ e.classList.add('reveal', variants[i % variants.length]); });
    var io = new IntersectionObserver(function(ents){
      ents.forEach(function(en){ if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function(e){ io.observe(e); });
  } catch (e) {}
}
function mount() {
  const NS = window.SyfxDesignSystem_5de6e8;
  if (!NS || !NS.Button) { return requestAnimationFrame(mount); }
  Button = NS.Button; Badge = NS.Badge;
  const el = document.getElementById('app');
  const page = document.body.dataset.page;
  if (!window.__syfxRoot) window.__syfxRoot = ReactDOM.createRoot(el);
  window.__syfxRoot.render(page === 'how-it-works' ? <HowItWorksPage /> : <Page />);
  setTimeout(initReveal, 450);
  // dismiss splash first, THEN reveal app — no crossfade/overlap window where both are visible
  setTimeout(() => {
    const sp = document.getElementById('splash');
    if (sp) {
      sp.classList.add('hide');
      setTimeout(() => {
        if (sp.parentNode) sp.parentNode.removeChild(sp);
        el.classList.add('ready');
      }, 650);
    } else {
      el.classList.add('ready');
    }
  }, 1100);
}
mount();
