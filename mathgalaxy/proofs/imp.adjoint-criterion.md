# 伴随 $\implies$ 右伴随存在的判据
`imp.adjoint-criterion` · 推出 · strong 边 · 根 `../`

`def.adjoint` 伴随函子 + `def.representable` 表示函子 → `thm.right-adjoint-criterion` 右伴随存在的判据

**（$\Longrightarrow$）** 设 $F \dashv G$。则对每个 $Y \in \mathcal{D}$，

$$\operatorname{Hom}_{\mathcal{D}}(F(-), Y) \;\cong\; \operatorname{Hom}_{\mathcal{C}}(-, G(Y))$$

右边是可表示函子，所以左边可表示。∎

**（$\Longleftarrow$）** 设对每个 $Y$ 都能挑到一个 $G(Y) \in \mathcal{C}$ 与自然同构

$$\alpha_{Y} : \operatorname{Hom}_{\mathcal{D}}(F(-), Y) \longrightarrow \operatorname{Hom}_{\mathcal{C}}(-, G(Y))$$

只在对象层拼出 $G$ 还不够，还要在态射层给出 $G(g)$。给定 $g : Y \to Z$，考虑复合

> 续见 proofs/imp.adjoint-criterion.2.md
