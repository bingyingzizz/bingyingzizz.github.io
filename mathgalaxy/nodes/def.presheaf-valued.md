# 取值一般的预层与层　`def.presheaf-valued`
取值在一般范畴里的层（Sheaf with Values in a Category）
layer 10 · 定义 · 阿贝尔层 · 同调代数

设 $\mathcal{C}$、$\mathcal{D}$ 是范畴。

1. 取值在 $\mathcal{D}$ 的**预层**是反变函子 $T : \mathcal{C}^{\mathrm{op}} \to \mathcal{D}$；预层之间的**态射**是自然变换。
2. $\mathcal{C}$ 是 site 时，**层** $F : \mathcal{C}^{\mathrm{op}} \to \mathcal{D}$ 是这样的预层：对每个 $Y \in \mathcal{D}$，集合值预层

$$X \longmapsto \operatorname{Hom}_{\mathcal{D}}\bigl(Y,\ F(X)\bigr)$$

都是层。

## 为什么成立（入边，证明在 proofs/）
- `def.natural-transformation` 自然变换：用到了定义 自然变换　proofs/def-dep.valued-presh-nattrans.md

## 它能推出什么 / 谁在用它
- 被 `def.abelian-sheaf` 阿贝尔层 用

> 说明见 `notes/def.presheaf-valued.md`
