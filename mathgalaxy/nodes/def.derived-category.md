# 导出范畴　`def.derived-category`
导出范畴 $D(\mathcal{A})$
layer 15 · 定义 · 复形与导出三角 · 同调代数

阿贝尔范畴 $\mathcal{A}$ 的**导出范畴** $D(\mathcal{A})$ 是**同伦范畴 $K(\mathcal{A})$ 关于拟同构的局部化**。

于是 $D(\mathcal{A})$ 的对象与 $K(\mathcal{A})$（等价地 $C(\mathcal{A})$）相同，而 $K^{\bullet} \to L^{\bullet}$ 的一个态射是一个「屋顶」：

$$K^{\bullet} \xleftarrow{\ \sim\ } K'^{\bullet} \longrightarrow L^{\bullet},$$

左边的箭头是**拟同构**（已变成同构）。

## 为什么成立（入边，证明在 proofs/）
- `def.localization` 局部化：用到了定义 局部化　proofs/def-dep.dercat-localization.md
- `def.quasi-iso` 拟同构：用到了定义 拟同构　proofs/def-dep.dercat-quasiiso.md
- `def.homotopy-category` 同伦范畴：用到了定义 同伦范畴　proofs/def-dep.dercat-kcat.md

## 它能推出什么 / 谁在用它
- 被 `prop.hom-k-eq-hom-d` Hom 在同伦范畴与导出范畴里一样 用

> 说明见 `notes/def.derived-category.md`

- …另有出边，续页见 `nodes/def.derived-category.2.md`
