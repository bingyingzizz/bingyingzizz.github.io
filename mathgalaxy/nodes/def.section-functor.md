# 截面函子　`def.section-functor`
截面函子与全局截面（Sections Functor）
layer 16 · 定义 · 层与拓扑 · 范畴论

设 $\mathcal{C}$ 是 site，$X \in \mathcal{C}$，$\widetilde{\mathcal{C}}$ 是层范畴。**在 $X$ 处的截面函子**是

$$\Gamma(X, -) : \widetilde{\mathcal{C}} \longrightarrow \mathbf{Set}, \qquad F \longmapsto \Gamma(X, F) := F(X).$$

取 $X = \mathbf{1}$（终对象）时叫**全局截面函子**，记 $\Gamma(F) := F(\mathbf{1})$。

## 为什么成立（入边，证明在 proofs/）
- `def.sheaf` 层：用到了定义 层　proofs/def-dep.sectionfunctor-sheaf.md
- `def.representable` 表示函子：用到了定义 表示函子　proofs/def-dep.sectionfunctor-representable.md

## 它能推出什么 / 谁在用它
- 被 `def.sheaf-cohomology` 层上同调 用

> 说明见 `notes/def.section-functor.md`
