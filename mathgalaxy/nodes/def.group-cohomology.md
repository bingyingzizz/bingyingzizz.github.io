# 群上同调　`def.group-cohomology`
群上同调 $H^{n}(G, M)$
layer 11 · 定义 · 群上同调 · 同调代数+抽象代数
[在星图里打开](../#n=def.group-cohomology)　·　[节点索引](../index.md)

设 $M$ 是 $G$-模。群 $G$ 系数在 $M$ 里的**第 $n$ 个上同调群**是**不变量函子的右导出函子**：

$$H^{n}(G, M) := R^{n}(-)^{G}(M),$$

等价地

$$H^{n}(G, M) = \operatorname{Ext}^{n}_{R[G]}\bigl(R,\ M\bigr),$$
> 陈述续见 [nodes/def.group-cohomology.2.md](./def.group-cohomology.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`def.g-module`](../nodes/def.g-module.md) 群模：用到了定义 群模　[proofs/def-link.gmodule-groupcoh.md](../proofs/def-link.gmodule-groupcoh.md)

- …另有入边，续页见 [nodes/def.group-cohomology.3.md](./def.group-cohomology.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.group-cohomology.4.md](./def.group-cohomology.4.md)

refs: Weibel, An Introduction to Homological Algebra, Section 6.5；Rotman, An Introduction to Homological Algebra —— 群上同调一章

> 说明见 `notes/def.group-cohomology.md`

引用：`def.group-cohomology`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
