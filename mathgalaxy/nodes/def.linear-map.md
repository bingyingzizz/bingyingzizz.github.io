# 线性映射　`def.linear-map`
线性映射
layer 9 · 定义 · 线性映射与秩 · 抽象代数
[在星图里打开](../#n=def.linear-map)　·　[节点索引](../index.md)

设 $V, W$ 是域 $K$ 上的向量空间。映射 $T : V \to W$ 叫 **$K$-线性的**（或线性映射），当且仅当

$$T(u + v) = T(u) + T(v), \qquad T(cu) = c\,T(u)$$

对一切 $u, v \in V$、$c \in K$ 成立。等价地：$T(cu + v) = c\,T(u) + T(v)$。

两个线性映射的**和**与**数乘**仍是线性映射，于是全体线性映射构成一个 $K$-向量空间，记

$$\operatorname{Hom}_K(V, W) := \{\, T : V \to W \ \text{linear} \,\}$$

复合 $S \circ T$ 仍是线性的。

## 它能推出什么 / 谁在用它
- 被 [`def.linear-isomorphism`](../nodes/def.linear-isomorphism.md) 线性同构 用

- …另有出边，续页见 [nodes/def.linear-map.3.md](./def.linear-map.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.linear-map.2.md](./def.linear-map.2.md)

refs: Lang, Linear Algebra；Hoffman–Kunze, Linear Algebra, Ch. 3

> 说明见 `notes/def.linear-map.md`

引用：`def.linear-map`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
