# 凸性的导数判据　`thm.convex-criterion`
定理：凸 $\iff$ 导数递增 $\iff f'' \ge 0$
layer 22 · 定理 · 微分中值定理与 Taylor · 分析学
[在星图里打开](../#n=thm.convex-criterion)　·　[节点索引](../index.md)

设 $f$ 在区间 $I$ 上可导。则 $f$ 是凸函数，当且仅当 $f'$ 在 $I$ 上递增。

若 $f$ 二阶可导，则 $f$ 凸 $\iff f''(x) \ge 0$ 对一切 $x \in I$ 成立。

## 为什么成立（入边，证明在 proofs/）
- [`thm.mvt`](../nodes/thm.mvt.md) Lagrange 中值定理：中值定理 $\implies$ 凸性的导数判据　[proofs/imp.convex-criterion.md](../proofs/imp.convex-criterion.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 5；Rockafellar, Convex Analysis

> 说明见 `notes/thm.convex-criterion.md`

引用：`thm.convex-criterion`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
