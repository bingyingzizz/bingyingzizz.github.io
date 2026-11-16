# 子群　`def.subgroup`
子群
layer 8 · 定义 · 代数结构 · 抽象代数
[在星图里打开](../#n=def.subgroup)　·　[节点索引](../index.md)

设 $(G, \cdot)$ 是群，$H \subseteq G$。称 $H$ 是 $G$ 的**子群**（记 $H \le G$），如果 $H$ 在**限制过来的运算**下自己构成一个群 —— 也就是：

- $e \in H$；
- $a, b \in H \implies ab \in H$（对运算封闭）；
- $a \in H \implies a^{-1} \in H$（对逆封闭）。

（结合律是从 $G$ 里继承的，不必重查。）

## 为什么成立（入边，证明在 proofs/）
- [`def.group`](../nodes/def.group.md) 群：用到了定义 群　[proofs/def-dep.subgroup-group.md](../proofs/def-dep.subgroup-group.md)

## 它能推出什么 / 谁在用它
- 被 [`def.commutator-subgroup`](../nodes/def.commutator-subgroup.md) 换位子群 用

- …另有出边，续页见 [nodes/def.subgroup.2.md](./def.subgroup.2.md)

refs: Lang, Algebra

> 说明见 `notes/def.subgroup.md`

引用：`def.subgroup`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
