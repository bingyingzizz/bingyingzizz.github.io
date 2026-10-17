# 循环群　`def.cyclic-group`
循环群（Cyclic Group）
layer 7 · 定义 · 群作用与置换 · 抽象代数
[在星图里打开](../#n=def.cyclic-group)　·　[节点索引](../index.md)

设 $G$ 是群、$g \in G$。集合

$$\langle g \rangle := \{\, g^{k} : k \in \mathbb{Z} \,\} \quad \subseteq\; G$$
（约定 $g^{0} = e$、$g^{-k} = (g^{-1})^{k}$）是 $G$ 的最小子群，叫 $g$ **生成**的循环群。若 $G = \langle g\rangle$ 对某个 $g$ 成立，称 $G$ 为**循环群**，$g$ 叫**生成元**。

同构意义下只有两种：

- 有限循环群 $\cong \mathbb{Z}/n\mathbb{Z}$（加法），阶 $n$；
- 无限循环群 $\cong \mathbb{Z}$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.cyclic-group.2.md](./def.cyclic-group.2.md)

refs: Lang, Algebra, Ch. I §4；Dummit–Foote, Abstract Algebra, §2.3

> 说明见 `notes/def.cyclic-group.md`

引用：`def.cyclic-group`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
