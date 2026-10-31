# 直和与补空间　`def.direct-sum`
直和 $V = U \oplus W$ 与补空间
layer 10 · 定义 · 线性映射与秩 · 抽象代数
[在星图里打开](../#n=def.direct-sum)　·　[节点索引](../index.md)

设 $U, W \subseteq V$ 是子空间。称 $V$ 是 $U$ 与 $W$ 的**（内部）直和**，记

$$V = U \oplus W$$

当且仅当

- $U + W = V$（每个向量都能写成 $u + w$），
- $U \cap W = \{0\}$（写法唯一）。

此时每个 $v \in V$ 都**唯一**地写成 $v = u + w$；映射 $(u, w) \mapsto u + w$ 是线性同构 $U \times W \cong V$。称 $W$ 是 $U$ 在 $V$ 中的**补空间**。

## 为什么成立（入边，证明在 proofs/）
- [`def.subspace`](../nodes/def.subspace.md) 子空间：用到了定义 子空间　[proofs/dep.vs-directsum.md](../proofs/dep.vs-directsum.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.direct-sum.2.md](./def.direct-sum.2.md)

refs: Lang, Linear Algebra；Hoffman–Kunze, Linear Algebra, Ch. 3

> 说明见 `notes/def.direct-sum.md`

引用：`def.direct-sum`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
