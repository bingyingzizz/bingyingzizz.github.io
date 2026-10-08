# 右伴随存在的判据　`thm.right-adjoint-criterion`
右伴随存在 $\iff$ 可表示
layer 13 · 定理 · 伴随与反射 · 范畴论

函子 $F : \mathcal{C} \to \mathcal{D}$ 有右伴随 $\iff$ 对每个 $Y \in \mathcal{D}$，函子

$$\operatorname{Hom}_{\mathcal{D}}\bigl(F(-),\ Y\bigr) : \mathcal{C}^{\mathrm{op}} \to \mathbf{Set}$$

都可表示。

## 为什么成立（入边，证明在 proofs/）
- `def.adjoint` 伴随函子 + `def.representable` 表示函子：伴随 $\implies$ 右伴随存在的判据　proofs/imp.adjoint-criterion.md
- `def.representable` 表示函子：用到了定义 表示函子　proofs/def-link.representable-adjoint-criterion.md
- `def.adjoint` 伴随函子：用到了定义 伴随函子　proofs/def-dep.adjoint-criterion.md

## 说明
这是「造右伴随」的通用机器：先对每个 $Y$ 求出表示对象 $G(Y)$，再验证这样拼出来的 $G$ 是函子。证明见边上的推导。
