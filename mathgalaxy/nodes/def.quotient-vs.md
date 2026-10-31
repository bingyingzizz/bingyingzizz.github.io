# 商空间　`def.quotient-vs`
商空间 $V / U$
layer 6 · 定义 · 线性映射与秩 · 抽象代数
[在星图里打开](../#n=def.quotient-vs)　·　[节点索引](../index.md)

设 $U \subseteq V$ 是子空间。在 $V$ 上定义等价关系

$$v \sim v' \iff v - v' \in U$$

等价类 $v + U := \{\, v + u : u \in U \,\}$ 叫 $U$ 的**陪集**。全体陪集记 $V / U$，在上面定义

$$(v + U) + (v' + U) := (v + v') + U, \qquad c\,(v + U) := (cv) + U$$

这两条**与代表元的选取无关**（因为 $U$ 是子空间），于是 $V / U$ 成为一个 $K$-向量空间，叫**商空间**。

商映射 $\pi : V \to V/U$、$v \mapsto v + U$ 是满的线性映射，且 $\ker \pi = U$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.quotient-vs.2.md](./def.quotient-vs.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.quotient-vs.3.md](./def.quotient-vs.3.md)

refs: Lang, Linear Algebra；Hoffman–Kunze, Linear Algebra, Ch. 3

> 说明见 `notes/def.quotient-vs.md`

引用：`def.quotient-vs`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
