# 伴随函子都加法　`prop.adjoint-additive`
命题：加法范畴之间的伴随函子都是加法函子
layer 10 · 命题 · 加法与阿贝尔范畴 · 范畴论
[在星图里打开](../#n=prop.adjoint-additive)　·　[节点索引](../index.md)

设 $\mathcal{C}, \mathcal{D}$ 是加法范畴，$F : \mathcal{C} \to \mathcal{D}$ 左伴随 $G : \mathcal{D} \to \mathcal{C}$（记 $F \dashv G$）。则 $F$ 与 $G$ **都加法**，并且伴随的双射

$$\operatorname{Hom}_{\mathcal{D}}(FM, N) \;\cong\; \operatorname{Hom}_{\mathcal{C}}(M, GN)$$

是**阿贝尔群**的同构（对 $M$、$N$ 都自然）。

## 它能推出什么 / 谁在用它
- ⇒ [`prop.subcat-additive`](../nodes/prop.subcat-additive.md) 子范畴继承加法与阿贝尔性

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.adjoint-additive.2.md](./prop.adjoint-additive.2.md)

refs: Le Stum, An introduction to condensed mathematics, §5.1

> 说明见 `notes/prop.adjoint-additive.md`

引用：`prop.adjoint-additive`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
