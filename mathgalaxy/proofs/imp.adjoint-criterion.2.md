# 伴随 $\implies$ 右伴随存在的判据
`imp.adjoint-criterion` · 推出 · strong 边 · 根 `../`

`def.adjoint` 伴随函子 + `def.representable` 表示函子 → `thm.right-adjoint-criterion` 右伴随存在的判据

$$\operatorname{Hom}_{\mathcal{C}}(-, G(Y)) \xrightarrow{\ \alpha_{Y}^{-1}\ } \operatorname{Hom}_{\mathcal{D}}(F(-), Y) \xrightarrow{\ g \circ -\ } \operatorname{Hom}_{\mathcal{D}}(F(-), Z) \xrightarrow{\ \alpha_{Z}\ } \operatorname{Hom}_{\mathcal{C}}(-, G(Z))$$

这是一条从可表示函子 $\operatorname{Hom}_{\mathcal{C}}(-, G(Y))$ 到 $\operatorname{Hom}_{\mathcal{C}}(-, G(Z))$ 的自然变换。由米田引理，它由唯一的态射

$$G(g) : G(Y) \to G(Z)$$

给出。于是 $G$ 在态射层也定义好了。

> 续见 proofs/imp.adjoint-criterion.3.md
