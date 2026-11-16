# 换位子群　`def.commutator-subgroup`
换位子与换位子群（导群）
layer 9 · 定义 · 代数结构 · 抽象代数
[在星图里打开](../#n=def.commutator-subgroup)　·　[节点索引](../index.md)

设 $G$ 是群。对 $x, y \in G$，元素
$[x, y] := x y x^{-1} y^{-1}$
叫 $x$ 与 $y$ 的**交换子**。由全体交换子生成的子群
$[G, G] := \langle\, [x, y] : x, y \in G \,\rangle \le G$
叫 $G$ 的**换位子群**（也叫**导群**）。

**[G,G] 正规**，且商 $G/[G,G]$ 阿贝尔。更强地，若 $N \trianglelefteq G$ 使 $G/N$ 阿贝尔，则 $[G,G] \subseteq N$；所以 $G/[G,G]$ 是 $G$ 的**极大阿贝尔商**。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.commutator-subgroup.2.md](./def.commutator-subgroup.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.commutator-subgroup.3.md](./def.commutator-subgroup.3.md)

refs: Lang, Algebra, Ch. I §5；Dummit–Foote, Abstract Algebra, §5.4

> 说明见 `notes/def.commutator-subgroup.md`

引用：`def.commutator-subgroup`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
