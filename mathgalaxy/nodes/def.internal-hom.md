# 内 Hom　`def.internal-hom`
内 Hom（Internal Hom）
layer 17 · 定义 · 阿贝尔层 · 同调代数

设 $\mathcal{T}$ 是拓扑斯，$X \in \mathcal{T}$、$M \in \mathcal{T}(\mathbf{Ab})$。则

$$\operatorname{Hom}(X, M) : Y \longmapsto \operatorname{Hom}(X \times Y,\ M) \;\cong\; \operatorname{Hom}_{\mathbb{Z}}\bigl(\mathbb{Z}\cdot(X \times Y),\ M\bigr)$$

是 $\mathcal{T}$ 上的一个阿贝尔层，叫 $M$ 在 $X$ 处的**内 Hom**。
> 陈述续见 `nodes/def.internal-hom.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.product` 积 / 余积：用到了定义 积 / 余积　proofs/def-dep.internalhom-product.md
- `def.abelian-sheaf` 阿贝尔层：用到了定义 阿贝尔层　proofs/def-dep.internalhom-abelsheaf.md
- `def.topos` 拓扑斯：用到了定义 拓扑斯　proofs/def-dep.internalhom-topos.md

## 它能推出什么 / 谁在用它
- 被 `def.tensor-abelian-sheaf` 阿贝尔层的张量积 用

> 说明见 `notes/def.internal-hom.md`
