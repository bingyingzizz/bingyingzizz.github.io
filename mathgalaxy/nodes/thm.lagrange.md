# Lagrange 定理　`thm.lagrange`
定理（Lagrange）：$|H|$ 整除 $|G|$
layer 8 · 定理 · 群作用与置换 · 抽象代数
[在星图里打开](../#n=thm.lagrange)　·　[节点索引](../index.md)

设 $G$ 是有限群、$H \le G$。对 $g \in G$ 记**左陪集** $gH := \{\, gh : h \in H \,\}$。则左陪集构成 $G$ 的一个划分，每个左陪集与 $H$ 等势，于是

$$|G| = [G : H] \cdot |H|, \qquad \text{即} \qquad |H| \mid |G|$$

其中 $[G : H] := |G|/|H|$ 叫 $H$ 在 $G$ 中的**指数**。

## 为什么成立（入边，证明在 proofs/）
- [`def.subgroup`](../nodes/def.subgroup.md) 子群：陪集构成划分 + 平移是双射 $\implies$ Lagrange　[proofs/imp.lagrange.md](../proofs/imp.lagrange.md)

- …另有入边，续页见 [nodes/thm.lagrange.2.md](./thm.lagrange.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.lagrange.3.md](./thm.lagrange.3.md)

refs: Lang, Algebra, Ch. I §4；Dummit–Foote, Abstract Algebra, §3.2

> 说明见 `notes/thm.lagrange.md`

引用：`thm.lagrange`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
