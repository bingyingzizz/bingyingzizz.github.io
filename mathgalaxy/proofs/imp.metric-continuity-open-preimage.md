# 度量连续 $\implies$ 拓扑连续（开集原像开）
`imp.metric-continuity-open-preimage` · 推出 · strong 边 · 根 `../`

`def.metric-continuity` 度量空间的连续 → `def.continuous-map` 连续映射

设 $f : (X,d) \to (Y,\rho)$ 在每点 $\varepsilon$-$\delta$ 连续，$V \subseteq Y$ 开，$x_0 \in f^{-1}(V)$。
取 $\varepsilon > 0$ 使 $B_Y(f(x_0), \varepsilon) \subseteq V$；$\varepsilon$-$\delta$ 给 $\delta > 0$ 使 $f(B_X(x_0, \delta)) \subseteq B_Y(f(x_0), \varepsilon)$。
于是 $B_X(x_0, \delta) \subseteq f^{-1}(V)$，即 $f^{-1}(V)$ 在 $X$ 中开；按 `def.continuous-map` 的定义 $f$ 连续。$\blacksquare$

> 源头是特例或更强的条件、目标是独立的一般定义，这条只作逻辑包含、不分层。反向（拓扑连续 $\implies$ $\varepsilon$-$\delta$）同样直接：$B_Y(f(x_0), \varepsilon)$ 开，原像开给 $\delta$。
