# 框架到实例：$L^{p}$ 版 Riesz 表示
`imp.riesz-lp-pink` · 推出 · strong 边 · 根 `../`

`thm.riesz-perfect-pairing` Riesz 表示的配对版 → `thm.riesz-representation-lp` Riesz 表示定理

由 (c) 的 $L^{p}$ 特例，配对 $(L^{p}, L^{q}, \int f g\,d\mu)$ 满射：对任意 $\Phi \in (L^{p})^{*}$ 存在（a.e. 唯一的）$g \in L^{q}$ 使 $\Phi(f) = \int f g\,d\mu$。
再由 Hölder 与极值函数，$\|g\|_{q} = \|\Phi\|$，故 $g \mapsto \Phi_{g}$ 是等距同构 $L^{q} \to (L^{p})^{*}$。$\blacksquare$

> 框架到实例的回头推论（打包，不提供独立证明），不参与分层：目标定理是 (c) 的 $L^{p}$ 特例；(c) 的证明只用 Radon–Nikodym，不依赖本定理。
