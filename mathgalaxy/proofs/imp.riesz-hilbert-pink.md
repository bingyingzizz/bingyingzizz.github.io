# 框架到实例：Hilbert 版 Riesz 表示
`imp.riesz-hilbert-pink` · 推出 · strong 边 · 根 `../`

`thm.riesz-perfect-pairing` Riesz 表示的配对版 → `thm.riesz-hilbert` Riesz 表示（Hilbert）

由 (c) 的 Hilbert 特例，内积配对 $(H, H, \langle\cdot,\cdot\rangle)$ 满射：对任意 $\varphi \in H^{*}$ 存在 $y \in H$ 使 $\varphi(x) = \langle x, y\rangle$。
再由完美配对定范条件，$\|y\| = \sup_{\|x\| \le 1}|\langle x, y\rangle| = \|\varphi\|$，故 $y \mapsto \langle\cdot, y\rangle$ 是等距同构 $H \to H^{*}$。$\blacksquare$

> 框架到实例的回头推论（打包，不提供独立证明），不参与分层：目标定理是 (c) 的 Hilbert 特例；(c) 的证明只用投影定理，不依赖本定理。
