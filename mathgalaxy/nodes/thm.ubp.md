# 共鸣定理　`thm.ubp`
共鸣定理（一致有界原理 / Banach–Steinhaus）
layer 16 · 定理 · Baire 纲与三大定理 · 泛函分析
[在星图里打开](../#n=thm.ubp)　·　[节点索引](../index.md)

设 $E$ 是 Banach 空间，$F$ 赋范，$\{u_i\}_{i \in I} \subseteq B(E, F)$。若对每个 $x \in E$，

$$\sup_{i \in I} \|u_i(x)\| < \infty \qquad (\text{逐点有界}) ,$$

则 $\displaystyle \sup_{i \in I}\|u_i\| < \infty$（**一致**有界）。

## 为什么成立（入边，证明在 proofs/）
- [`lem.countable-closed-cover`](../nodes/lem.countable-closed-cover.md) 闭覆盖的内点：闭覆盖有内点 $\implies$ 一致有界原理　[proofs/imp.fa-closedcover-ubp.md](../proofs/imp.fa-closedcover-ubp.md)

- …另有入边，续页见 [nodes/thm.ubp.2.md](./thm.ubp.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.ubp.3.md](./thm.ubp.3.md)

refs: Rudin, Functional Analysis · 一致有界、开映射、逆算子与闭图像；Banach–Steinhaus 1927

> 说明见 `notes/thm.ubp.md`

引用：`thm.ubp`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
