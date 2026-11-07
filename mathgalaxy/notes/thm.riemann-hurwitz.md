# Riemann–Hurwitz 公式　`thm.riemann-hurwitz`　·　说明
根 `../`

**证明**：核心是「把 $X$ 的一个三角剖分沿 $p$ 拉成 $Y$ 的一个有限 CW 剖分，再数 $0,1,2$ 维胞腔」。

**记号**：$B \subset X$ 是分支点集（有限），$p^{-1}(B)$ 是分歧点集；对 $r \in X$ 记 $p^{-1}(r) = \{q_{1}, \ldots, q_{m_{r}}\}$，则 `def.ramification-index` 的求和恒等式给出

$$\sum_{i=1}^{m_{r}} e_{q_{i}} = d,\qquad\text{即}\qquad m_{r} = d - \sum_{i}(e_{q_{i}} - 1).$$

特别地 $r \notin B$ 时 $m_{r} = d$。

**引理（适配三角剖分）**：存在 $X$ 的有限三角剖分 $K$，使 (i) $B$ 中每个点都是 $K$ 的顶点；(ii) 对 $K$ 的每个开单纯形 $\sigma$，$p^{-1}(\sigma) \to \sigma$ 是 $d$ 重覆叠，且每个连通分支同胚地映到 $\sigma$。

> 续见 notes/thm.riemann-hurwitz.2.md
