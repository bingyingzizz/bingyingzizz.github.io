# 群的整数幂　`def.group-power`
群的整数幂 $x^{n}$（$n \in \mathbb{Z}$）
layer 8 · 定义 · 代数结构 · 抽象代数
[在星图里打开](../#n=def.group-power)　·　[节点索引](../index.md)

设 $G$ 是群，$x \in G$，$e$ 是单位元。**整数幂** $x^{n}$（$n \in \mathbb{Z}$）由

$$x^{0} := e, \qquad x^{n+1} := x^{n} x \ (n \ge 0), \qquad x^{-n} := (x^{-1})^{n} \ (n \ge 1)$$

定义；等价地 $x^{-n} = (x^{n})^{-1}$。

## 为什么成立（入边，证明在 proofs/）
- [`def.group`](../nodes/def.group.md) 群：用到了定义 群　[proofs/dep.grouppower-group.md](../proofs/dep.grouppower-group.md)

- …另有入边，续页见 [nodes/def.group-power.2.md](./def.group-power.2.md)

## 它能推出什么 / 谁在用它
- 被 [`def.group-order`](../nodes/def.group-order.md) 群的阶与元素的阶 用

- …另有出边，续页见 [nodes/def.group-power.3.md](./def.group-power.3.md)

refs: Lang, Algebra, Ch. I §2；Hungerford, Algebra, Ch. I §4

> 说明见 `notes/def.group-power.md`

引用：`def.group-power`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
