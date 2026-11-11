# 向量空间　`def.vector-space`
向量空间 / 线性空间（$K$ 上的）
layer 10 · 定义 · 向量空间与基 · 抽象代数
[在星图里打开](../#n=def.vector-space)　·　[节点索引](../index.md)

设 $K$ 是**域**。$K$ 上的**向量空间**（也叫**线性空间**）是一个集合 $V$，配两种运算

$$\text{加法}: V \times V \to V,\qquad \text{标量乘法}: K \times V \to V,$$

使得 $(V, +)$ 是**阿贝尔群**，并且对一切 $a, b \in K$、$u, v \in V$：

- $a(u + v) = au + av$（标量对向量和的分配律）；
- $(a + b)v = av + bv$（向量对标量和的分配律）；
- $(ab)v = a(bv)$（标量乘法的结合）；
- $1 \cdot v = v$（单位律）。
> 陈述续见 [nodes/def.vector-space.2.md](./def.vector-space.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.convex-set`](../nodes/def.convex-set.md) 凸集 用

- …另有出边，续页见 [nodes/def.vector-space.4.md](./def.vector-space.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.vector-space.3.md](./def.vector-space.3.md)

refs: Lang, Algebra；Hoffman–Kunze, Ch. 2

> 说明见 `notes/def.vector-space.md`

引用：`def.vector-space`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
