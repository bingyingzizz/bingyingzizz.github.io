# 群模　`def.g-module`
$G$-模（$R[G]$-模）
layer 9 · 定义 · 群上同调 · 同调代数+抽象代数
[在星图里打开](../#n=def.g-module)　·　[节点索引](../index.md)

设 $R$ 是有 $1$ 的交换环、$G$ 是群。一个**左 $G$-模**是一个 $R$-模 $M$ 配上一个作用映射 $G \times M \to M$，$(g, m) \mapsto g \cdot m$，满足

- 对每个 $g \in G$，$m \mapsto g \cdot m$ 是 $R$-线性的，即 $g \cdot (m + n) = g \cdot m + g \cdot n$、$g \cdot (r m) = r\, (g \cdot m)$；
- $(g h) \cdot m = g \cdot (h \cdot m)$ 且 $1 \cdot m = m$（对一切 $g, h \in G$、$m, n \in M$、$r \in R$）。
> 陈述续见 [nodes/def.g-module.2.md](./def.g-module.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.group-cohomology`](../nodes/def.group-cohomology.md) 群上同调 用

- …另有出边，续页见 [nodes/def.g-module.4.md](./def.g-module.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.g-module.3.md](./def.g-module.3.md)

refs: Weibel, An Introduction to Homological Algebra, Chapter 6（群模与群环的模）

> 说明见 `notes/def.g-module.md`

引用：`def.g-module`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
