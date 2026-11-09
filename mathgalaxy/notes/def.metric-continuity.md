# 度量空间的连续　`def.metric-continuity`　·　说明
根 `../`

**等价性的证明**（全局版本）：



（$\varepsilon$-$\delta$ $\implies$ 开集原像开）设 $V \subseteq Y$ 开、$x_0 \in f^{-1}(V)$。取 $\varepsilon > 0$ 使 $B_Y(f(x_0), \varepsilon) \subseteq V$；$\varepsilon$-$\delta$ 给 $\delta > 0$，使 $B_X(x_0, \delta)$ 的像落在 $B_Y(f(x_0), \varepsilon)$ 中，故 $B_X(x_0, \delta) \subseteq f^{-1}(V)$，即 $f^{-1}(V)$ 开。



（开集原像开 $\implies$ $\varepsilon$-$\delta$）给定 $x_0$ 与 $\varepsilon > 0$，$B_Y(f(x_0), \varepsilon)$ 开，故 $f^{-1}(B_Y(f(x_0), \varepsilon))$ 开且含 $x_0$；取 $\delta > 0$ 使 $B_X(x_0, \delta)$ 落在其中，即得 $\varepsilon$-$\delta$ 式。$\blacksquare$



📌 这就是 `def.continuous-map`（拓扑空间版本）在度量空间上的具体写法：度量空间的开集由开球生成，故「原像开」与 $\varepsilon$-$\delta$ 等价。



⭐ $\mathbb{R}$ 的情形见 `def.continuous`（$\varepsilon$-$\delta$ 判据）与 `def.real-metric-space`（$d(x,y) = |x-y|$）。
