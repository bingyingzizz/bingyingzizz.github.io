# 子空间　`def.subspace`
线性子空间（Linear Subspace）
layer 9 · 定义 · 向量空间的基 · 抽象代数
[在星图里打开](../#n=def.subspace)　·　[节点索引](../index.md)

设 $V$ 是域 $K$ 上的向量空间。$U \subseteq V$ 叫 $V$ 的**（线性）子空间**，当且仅当

- $0 \in U$；
- $U$ 对加法封闭：$u, v \in U \implies u + v \in U$；
- $U$ 对标量乘法封闭：$u \in U$、$c \in K \implies cu \in U$。

等价地：$U$ 配上 $V$ 限制过来的运算，自己就是一个 $K$-向量空间。

子空间之间的**包含关系**按集合包含定义，任意多个子空间的**交**仍是子空间（加法与数乘逐条验证即可）。

## 它能推出什么 / 谁在用它
- 被 [`prop.subspace-criterion`](../nodes/prop.subspace-criterion.md) 子空间判据 用

- …另有出边，续页见 [nodes/def.subspace.3.md](./def.subspace.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.subspace.2.md](./def.subspace.2.md)

refs: Lang, Linear Algebra；Hoffman–Kunze, Linear Algebra, Ch. 2

> 说明见 `notes/def.subspace.md`

引用：`def.subspace`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
