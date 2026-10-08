# 阿贝尔层　`def.abelian-sheaf`
阿贝尔层（Abelian Sheaf）
layer 16 · 定义 · 阿贝尔层 · 同调代数

固定 site $\mathcal{C}$。记

$$\widehat{\mathcal{C}}(\mathbf{Ab}) := \operatorname{Hom}(\mathcal{C}^{\mathrm{op}}, \mathbf{Ab})$$

为**阿贝尔群预层**的范畴，$\widetilde{\mathcal{C}}(\mathbf{Ab})$ 为它里面**层**的满子范畴。后者叫 $\mathcal{C}$ 上的**阿贝尔层**，也叫 $\mathcal{C}$ 上的**阿贝尔群**。
> 陈述续见 `nodes/def.abelian-sheaf.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.presheaf-valued` 取值一般的预层与层：用到了定义 取值一般的预层与层　proofs/def-dep.abelsheaf-valued.md
- `def.presheaf` 预层：用到了定义 预层　proofs/def-dep.abelsheaf-presheaf.md
- `def.sheaf` 层：用到了定义 层　proofs/def-dep.abelsheaf-sheaf.md
- `def.presheaf-cat` 预层范畴：用到了定义 预层范畴　proofs/def-dep.abelsheaf-presheafcat.md

## 它能推出什么 / 谁在用它
- 被 `thm.topos-abelian-grothendieck` 拓扑斯上的阿贝尔群是 Grothendieck 范畴 用

> 说明见 `notes/def.abelian-sheaf.md`

- …另有出边，续页见 `nodes/def.abelian-sheaf.3.md`
