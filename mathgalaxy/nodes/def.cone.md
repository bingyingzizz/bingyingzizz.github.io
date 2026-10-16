# 锥　`def.cone`
锥与余锥（Cone / Cocone）
layer 10 · 定义 · 图与极限 · 范畴论
[在星图里打开](../#n=def.cone)　·　[节点索引](../index.md)

设 $D : I \to \mathcal{C}$ 是一个图。$D$ 上的**锥**是一个对象 $X \in \mathcal{C}$ 连同一族态射

$$p_i : X \longrightarrow D(i) \qquad (i \in I)$$

使得对 $I$ 中每条 $\alpha : i \to j$ 都有

$$D(\alpha) \circ p_i = p_j$$

等价地说，锥就是从常图 $\Delta X$ 到 $D$ 的一个自然变换。把其中的箭头全部反向，得到**余锥**。

## 为什么成立（入边，证明在 proofs/）
- [`def.function`](../nodes/def.function.md) 映射：用到了定义 映射　[proofs/def-dep.function-cone.md](../proofs/def-dep.function-cone.md)

- …另有入边，续页见 [nodes/def.cone.2.md](./def.cone.2.md)

## 它能推出什么 / 谁在用它
- 被 [`def.limit`](../nodes/def.limit.md) 极限 用

- …另有出边，续页见 [nodes/def.cone.3.md](./def.cone.3.md)

refs: Le Stum, An introduction to condensed mathematics, §1.3

> 说明见 `notes/def.cone.md`

引用：`def.cone`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
