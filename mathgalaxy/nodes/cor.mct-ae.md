# 单调收敛定理（几乎处处版本）　`cor.mct-ae`
推论：单调收敛定理的几乎处处版本
layer 20 · 推论 · 积分 · 实变函数+数学分析
[在星图里打开](../#n=cor.mct-ae)　·　[节点索引](../index.md)

设 $\{f_n\} \subseteq L^+$，$f \in L^+$。若对**几乎处处的** $x$ 有

$$f_n(x) \uparrow  f(x), $$

则

$$\int f = \lim_{n\to\infty} \int f_n$$

## 为什么成立（入边，证明在 proofs/）
- [`thm.mct`](../nodes/thm.mct.md) 单调收敛定理：逐点单调收敛 $\implies$ 几乎处处单调收敛　[proofs/imp.mct-ae.md](../proofs/imp.mct-ae.md)
- [`def.null-set`](../nodes/def.null-set.md) 零集与完备：用到了定义 零集与完备　[proofs/def-link.nullset-ae-mct.md](../proofs/def-link.nullset-ae-mct.md)

- …另有入边，续页见 [nodes/cor.mct-ae.2.md](./cor.mct-ae.2.md)

refs: Folland, Real Analysis, §2.2；Rudin, Real and Complex Analysis, Ch. 1

> 说明见 `notes/cor.mct-ae.md`

引用：`cor.mct-ae`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
