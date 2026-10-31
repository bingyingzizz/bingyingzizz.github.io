# 伴随 $\implies$ 右伴随存在的判据
`imp.adjoint-criterion` · 推出 · strong 边 · 根 `../`

`def.adjoint` 伴随函子 + `def.representable` 表示函子 → `thm.right-adjoint-criterion` 右伴随存在的判据

$$\begin{array}{ccc} \operatorname{Hom}(F(-), Y) & \xrightarrow{\ \alpha_{Y}\ } & \operatorname{Hom}(-, G(Y)) \\ \downarrow\scriptstyle{g \circ -} & & \downarrow\scriptstyle{- \circ G(g)} \\ \operatorname{Hom}(F(-), Z) & \xrightarrow{\ \alpha_{Z}\ } & \operatorname{Hom}(-, G(Z)) \end{array}$$

于是每个 $\alpha_{Y}$ 都是自然同构，$F \dashv G$。∎

> 这条把「造右伴随」化归成「对每个 $Y$ 找一个表示对象」。米田引理在这里做了关键一步：**态射层的 $G(g)$ 是从自然变换里读出来的**，不用自己拼。
