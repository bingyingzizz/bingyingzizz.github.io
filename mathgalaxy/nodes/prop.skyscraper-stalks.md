# 天际线层的茎　`prop.skyscraper-stalks`
天际线层在各点的茎
layer 17 · 命题 · 层上同调 · 同调代数+范畴论
[在星图里打开](../#n=prop.skyscraper-stalks)　·　[节点索引](../index.md)

设 $X$ 是拓扑空间、$x \in X$、$A$ 是阿贝尔群。则天际线层 $i_{x,*}A$ 在 $y \in X$ 处的茎是

$$(i_{x,*}A)_{y} \;=\; \begin{cases} A, & y \in \overline{\{x\}}, \\ 0, & y \notin \overline{\{x\}} . \end{cases}$$

特别地 $(i_{x,*}A)_{x} = A$；若 $X$ 是 $T_{1}$ 空间（Hausdorff 就够），则 $y \ne x$ 时 $(i_{x,*}A)_{y} = 0$。

## 它能推出什么 / 谁在用它
- ⇒ [`prop.skyscraper-injective`](../nodes/prop.skyscraper-injective.md) 天际线层是内射层

- …另有出边，续页见 [nodes/prop.skyscraper-stalks.3.md](./prop.skyscraper-stalks.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.skyscraper-stalks.2.md](./prop.skyscraper-stalks.2.md)

refs: Iversen, Cohomology of Sheaves —— 茎与 skyscraper sheaf 一章

> 说明见 `notes/prop.skyscraper-stalks.md`

引用：`prop.skyscraper-stalks`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
