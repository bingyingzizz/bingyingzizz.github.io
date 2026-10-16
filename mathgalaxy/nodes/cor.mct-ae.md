# MCT（a.e. 版本）　`cor.mct-ae`
推论：单调收敛定理的几乎处处版本
layer 17 · 推论 · 积分 · 分析学
[在星图里打开](../#n=cor.mct-ae)　·　[节点索引](../index.md)

设 $\{f_n\} \subseteq L^+$，$f \in L^+$。若对**几乎处处的** $x$ 有

$$f_n(x) \uparrow  f(x), $$

则

$$\int f = \lim_{n\to\infty} \int f_n$$

## 为什么成立（入边，证明在 proofs/）
- [`def.null-set`](../nodes/def.null-set.md) 零集与完备：用到了定义 零集与完备　[proofs/def-link.nullset-ae-mct.md](../proofs/def-link.nullset-ae-mct.md)
- [`def.ae`](../nodes/def.ae.md) 几乎处处：用到了定义 几乎处处　[proofs/def-link.ae-mct-ae.md](../proofs/def-link.ae-mct-ae.md)

refs: Folland, Real Analysis, §2.2；Rudin, Real and Complex Analysis, Ch. 1

> 说明见 `notes/cor.mct-ae.md`

引用：`cor.mct-ae`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
