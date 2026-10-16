# 伴随函子　`def.adjoint`
伴随函子（Adjoint Functors）
layer 9 · 定义 · 伴随与反射 · 范畴论
[在星图里打开](../#n=def.adjoint)　·　[节点索引](../index.md)

设 $F : \mathcal{C} \to \mathcal{D}$、$G : \mathcal{D} \to \mathcal{C}$ 是一对函子。$(F, G)$ 叫一对**伴随函子**，如果存在自然同构

$$\operatorname{Hom}_{\mathcal{D}}\bigl(F(X),\ Y\bigr) \;\cong\; \operatorname{Hom}_{\mathcal{C}}\bigl(X,\ G(Y)\bigr) \qquad (X \in \mathcal{C},\ Y \in \mathcal{D})$$
> 陈述续见 [nodes/def.adjoint.2.md](./def.adjoint.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.adjoint.3.md](./def.adjoint.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.adjoint.4.md](./def.adjoint.4.md)

refs: Le Stum, An introduction to condensed mathematics, §1.5

外部：Wikipedia https://en.wikipedia.org/wiki/Adjoint_functors · nLab https://ncatlab.org/nlab/show/adjoint+functor

> 说明见 `notes/def.adjoint.md`

引用：`def.adjoint`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
