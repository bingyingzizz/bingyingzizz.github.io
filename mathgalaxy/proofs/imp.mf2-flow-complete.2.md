# 局部存在 $+$ 紧性 $\implies$ 有限端点必逃逸，紧流形上处处完备
`imp.mf2-flow-complete` · 推出 · strong 边 · 根 `../`

`def.flow` 流 + `thm.flow-local` 局部流 + `def.compact` 紧 → `thm.flow-complete` 流完备性

**第 2 条（逃逸引理）。** 反设存在紧集 $K$ 与 $t_{1} < b_{q}$ 使 $\gamma([t_{1}, b_{q})) \subseteq K$。对每点 $y \in K$ 取一张卡 $V_{y}$ 与 `thm.flow-local` 给的时间 $\varepsilon_{y} > 0$；$K$ 紧，取有限个 $y_{1},\ldots,y_{m}$ 使 $K \subseteq \bigcup_{i}V_{y_{i}}$，令 $\varepsilon := \min_{i}\varepsilon_{y_{i}} > 0$。取 $t_{1}$ 使 $b_{q} - t_{1} < \varepsilon$，在 $\gamma(t_{1}) \in K$ 处用第 $i$ 个局部流把解延拓到 $b_{q} + (\varepsilon - (b_{q}-t_{1})) > b_{q}$ —— 与 $b_{q}$ 是极大右端点矛盾。$a_{q}$ 一端把 $t$ 换成 $-t$ 同证。

> 续见 proofs/imp.mf2-flow-complete.3.md
