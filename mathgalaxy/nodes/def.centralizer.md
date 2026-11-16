# 中心化子　`def.centralizer`
中心化子：与给定集合逐元素交换的元素
layer 12 · 定义 · 群作用与置换 · 抽象代数
[在星图里打开](../#n=def.centralizer)　·　[节点索引](../index.md)

设 $G$ 是群，$S \subseteq G$。集合
$$C_G(S) := \{\, g \in G : g s = s g \ \text{for all}\ s \in S \,\} \le G$$
称为 $S$ 在 $G$ 中的**中心化子**；$C_G(x) := C_G(\{x\})$。约定 $C_G(\emptyset) = G$。

$C_G(S)$ 是子群。$C_G(G) = Z(G)$ 就是 $G$ 的**中心**。在共轭作用 $g \cdot x = gxg^{-1}$ 下，$C_G(x)$ 正是 $x$ 的稳定子。

## 它能推出什么 / 谁在用它
- 被 [`thm.class-equation`](../nodes/thm.class-equation.md) 类方程 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.centralizer.2.md](./def.centralizer.2.md)

refs: Lang, Algebra, Ch. I §6；Dummit–Foote, Abstract Algebra, §4.3

> 说明见 `notes/def.centralizer.md`

引用：`def.centralizer`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
