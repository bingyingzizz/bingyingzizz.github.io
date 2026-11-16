# 子模　`def.submodule`
子模：对环作用封闭的加法子群
layer 14 · 定义 · 代数结构 · 抽象代数
[在星图里打开](../#n=def.submodule)　·　[节点索引](../index.md)

设 $A$ 是含幺环，$M$ 是 $A$-模。加法子群 $N \subseteq M$ 若满足
$a \cdot n \in N \qquad \text{for all } a \in A,\ n \in N,$
则称 $N$ 是 $M$ 的 **$A$-子模**。等价地，$N$ 在限制作用下本身是 $A$-模，且包含映射 $N \hookrightarrow M$ 是模同态。

模同态的核与像都是子模；$A$ 的左理想正是左 $A$-模 $A$ 的子模。

## 为什么成立（入边，证明在 proofs/）
- [`def.module-hom`](../nodes/def.module-hom.md) 模同态：模同态的核与像是子模　[proofs/dep.modulehom-submodule.md](../proofs/dep.modulehom-submodule.md)

- …另有入边，续页见 [nodes/def.submodule.2.md](./def.submodule.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.submodule.3.md](./def.submodule.3.md)

refs: Lang, Algebra, Ch. III；Atiyah–Macdonald, Introduction to Commutative Algebra, Ch. 2

> 说明见 `notes/def.submodule.md`

引用：`def.submodule`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
