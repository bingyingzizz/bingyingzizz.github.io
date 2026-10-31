# p-级数　`thm.p-series`
定理：$p$-级数的敛散性（$p$-Series）
layer 17 · 定理 · 数项级数的敛散性 · 数学分析
[在星图里打开](../#n=thm.p-series)　·　[节点索引](../index.md)

设 $p \in \mathbb{R}$。则级数

$$\sum_{n=1}^{\infty} \frac{1}{n^{p}}$$

收敛**当且仅当** $p > 1$。

## 为什么成立（入边，证明在 proofs/）
- [`thm.cauchy-condensation`](../nodes/thm.cauchy-condensation.md) Cauchy 凝聚判别法 + [`thm.geometric-series`](../nodes/thm.geometric-series.md) 几何级数：凝聚判别法 + 几何级数 $\implies$ p-级数　[proofs/imp.p-series.md](../proofs/imp.p-series.md)
- [`thm.nth-root`](../nodes/thm.nth-root.md) n 次方根：用到了定义 n 次方根　[proofs/def-link.nthroot-p-series.md](../proofs/def-link.nthroot-p-series.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 3

> 说明见 `notes/thm.p-series.md`

引用：`thm.p-series`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
