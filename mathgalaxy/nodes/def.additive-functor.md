# 加法函子　`def.additive-functor`
加法函子（Additive Functor）
layer 9 · 定义 · 加法与阿贝尔范畴 · 同调代数

设 $\mathcal{C}, \mathcal{D}$ 是两个**预加性范畴**。函子 $F : \mathcal{C} \to \mathcal{D}$ 叫**加法函子**，如果对每对 $M, N \in \mathcal{C}$，映射

$$\operatorname{Hom}_{\mathcal{C}}(M, N) \longrightarrow \operatorname{Hom}_{\mathcal{D}}(F(M), F(N)), \qquad f \longmapsto F(f)$$

是**阿贝尔群同态**（即保加法、保 $0$）。

## 为什么成立（入边，证明在 proofs/）
- `def.functor` 函子：用到了定义 函子　proofs/def-dep.addfunctor-functor.md
- `def.group` 群：用到了定义 群　proofs/def-dep.addfunctor-group.md

> 说明见 `notes/def.additive-functor.md`
