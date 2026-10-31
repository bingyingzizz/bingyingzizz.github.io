# 取值一般的预层与层　`def.presheaf-valued`
取值在一般范畴里的层
layer 10 · 定义 · 阿贝尔层 · 同调代数
[在星图里打开](../#n=def.presheaf-valued)　·　[节点索引](../index.md)

设 $\mathcal{C}$、$\mathcal{D}$ 是范畴。

1. 取值在 $\mathcal{D}$ 的**预层**是反变函子 $T : \mathcal{C}^{\mathrm{op}} \to \mathcal{D}$；预层之间的**态射**是自然变换。
2. $\mathcal{C}$ 是景时，**层** $F : \mathcal{C}^{\mathrm{op}} \to \mathcal{D}$ 是这样的预层：对每个 $Y \in \mathcal{D}$，集合值预层

$$X \longmapsto \operatorname{Hom}_{\mathcal{D}}\bigl(Y,\ F(X)\bigr)$$

都是层。

## 它能推出什么 / 谁在用它
- 被 [`def.abelian-sheaf`](../nodes/def.abelian-sheaf.md) 阿贝尔层 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.presheaf-valued.2.md](./def.presheaf-valued.2.md)

refs: Le Stum, An introduction to condensed mathematics, §5.3

> 说明见 `notes/def.presheaf-valued.md`

引用：`def.presheaf-valued`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
