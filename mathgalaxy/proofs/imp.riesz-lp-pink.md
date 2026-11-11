# 配对框架到 $L^p$ 版 Riesz 表示（框架到实例）
`imp.riesz-lp-pink` · 推出 · strong 边 · 根 `../`

`thm.riesz-perfect-pairing` Riesz 表示的配对版 → `thm.riesz-representation-lp` Riesz 表示定理

由 `thm.riesz-perfect-pairing` (c)，$(L^{p},L^{q})$ 配对满足满射性；结合 (a) 的等距性，$g\mapsto\int(\cdot)g$ 是等距同构 $L^{q}\to(L^{p})^{*}$。
这正是 `thm.riesz-representation-lp` 的内容（$(L^{p})^{*}\cong L^{q}$）。(c) 的满射性由 Radon–Nikodym 提供，与 target 的证明一致。
因此这条边把定理 (c) 拆成具体入口（框架到实例），`layer: false` 表示它不参与分层。

> 这是把定理 (c) 拆成具体入口的回头边；满射性由 (c) 的证明（Radon–Nikodym）提供。
