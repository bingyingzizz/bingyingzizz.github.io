# 商群　`def.quotient-group`
商群
layer 8 · 定义 · 代数结构 · 抽象代数
[在星图里打开](../#n=def.quotient-group)　·　[节点索引](../index.md)

设 $N \trianglelefteq G$。全体左陪集 $\{\, gN : g \in G \,\}$ 记作 $G/N$，在上面定义

$$(g N) \cdot (g' N) := (g g') N.$$

正规性保证这个定义与代表元的选取无关，于是 $G/N$ 成为一个群，叫**商群**。

自然映射 $\pi : G \to G/N$，$g \mapsto gN$，是满同态。

## 为什么成立（入边，证明在 proofs/）
- [`def.normal-subgroup`](../nodes/def.normal-subgroup.md) 正规子群：用到了定义 正规子群　[proofs/def-dep.quotient-group-normal.md](../proofs/def-dep.quotient-group-normal.md)

- …另有入边，续页见 [nodes/def.quotient-group.2.md](./def.quotient-group.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.quotient-group.3.md](./def.quotient-group.3.md)

refs: Lang, Algebra

> 说明见 `notes/def.quotient-group.md`

引用：`def.quotient-group`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
