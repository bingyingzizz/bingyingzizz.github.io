# 右伴随存在的判据　`thm.right-adjoint-criterion`
右伴随存在 $\iff$ 可表示
layer 13 · 定理 · 伴随与反射 · 范畴论
[在星图里打开](../#n=thm.right-adjoint-criterion)　·　[节点索引](../index.md)

函子 $F : \mathcal{C} \to \mathcal{D}$ 有右伴随 $\iff$ 对每个 $Y \in \mathcal{D}$，函子

$$\operatorname{Hom}_{\mathcal{D}}\bigl(F(-),\ Y\bigr) : \mathcal{C}^{\mathrm{op}} \to \mathbf{Set}$$

都可表示。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.right-adjoint-criterion.2.md](./thm.right-adjoint-criterion.2.md)

refs: Mac Lane, Categories for the Working Mathematician, V.6

## 说明
这是「造右伴随」的通用机器：先对每个 $Y$ 求出表示对象 $G(Y)$，再验证这样拼出来的 $G$ 是函子。证明见边上的推导。

引用：`thm.right-adjoint-criterion`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
