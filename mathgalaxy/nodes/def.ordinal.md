# 序数　`def.ordinal`
序数（von Neumann Ordinal）
layer 7 · 定义 · 序数与超限 · 集合论
[在星图里打开](../#n=def.ordinal)　·　[节点索引](../index.md)

集合 $\alpha$ 称为**序数**（von Neumann 序数），当且仅当：

1. **$\alpha$ 是传递的**：$\forall x \in \alpha,\; x \subseteq \alpha$（元素的元素仍是元素）；
2. **$\in$ 在 $\alpha$ 上是良序**：把 $\in$ 限制到 $\alpha$ 上，$\alpha$ 成为**良序集** —— 即对任意 $x, y \in \alpha$，$x \in y$、$x = y$、$y \in x$ 恰有一个成立，且 $\alpha$ 的每个非空子集有 $\in$-最小元。
> 陈述续见 [nodes/def.ordinal.2.md](./def.ordinal.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`def.wellorder`](../nodes/def.wellorder.md) 良序集：用到了定义 良序集　[proofs/dep.wellorder-ordinal.md](../proofs/dep.wellorder-ordinal.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.ordinal.3.md](./def.ordinal.3.md)

refs: Kunen, Set Theory, I.11；Jech, Set Theory, 2.2

> 说明见 `notes/def.ordinal.md`

引用：`def.ordinal`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
