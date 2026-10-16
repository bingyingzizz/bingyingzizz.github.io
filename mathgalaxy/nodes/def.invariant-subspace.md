# 不变子空间　`def.invariant-subspace`
不变子空间（Invariant Subspace）
layer 10 · 定义 · 特征值与 Jordan 型 · 抽象代数
[在星图里打开](../#n=def.invariant-subspace)　·　[节点索引](../index.md)

设 $T : V \to V$ 线性。子空间 $U \subseteq V$ 叫 $T$-**不变**的，当且仅当

$$T(U) \subseteq U$$

即 $u \in U \implies T(u) \in U$。此时 $T$ 限制在 $U$ 上给出一个线性映射 $T|_U : U \to U$。

$\{0\}$ 与 $V$ 永远是 $T$-不变的（**平凡**不变子空间）；$T$ 的核与像也都是 $T$-不变的。

## 它能推出什么 / 谁在用它
- 被 [`def.eigenvalue`](../nodes/def.eigenvalue.md) 特征值与特征向量 用

- …另有出边，续页见 [nodes/def.invariant-subspace.3.md](./def.invariant-subspace.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.invariant-subspace.2.md](./def.invariant-subspace.2.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 6；Lang, Linear Algebra

> 说明见 `notes/def.invariant-subspace.md`

引用：`def.invariant-subspace`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
