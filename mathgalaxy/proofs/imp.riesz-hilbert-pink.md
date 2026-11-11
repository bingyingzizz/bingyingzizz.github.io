# 配对框架到 Hilbert 版 Riesz 表示（框架到实例）
`imp.riesz-hilbert-pink` · 推出 · strong 边 · 根 `../`

`thm.riesz-perfect-pairing` Riesz 表示的配对版 → `thm.riesz-hilbert` Riesz 表示（Hilbert）

由 `thm.riesz-perfect-pairing` (c)，Hilbert 内积配对满足满射性；结合 (a) 的等距性，$T:x\mapsto\langle x,\cdot\rangle$ 是等距同构 $H\to H^{*}$。
这正是 `thm.riesz-hilbert` 的内容（$H^{*}\cong H$）。(c) 的满射性由投影定理/正交分解提供，与 target 的证明一致。
因此这条边把定理 (c) 拆成具体入口（框架到实例），`layer: false` 表示它不参与分层。

> 这是把定理 (c) 拆成具体入口的回头边；满射性由 (c) 的证明（投影定理/正交分解）提供。
