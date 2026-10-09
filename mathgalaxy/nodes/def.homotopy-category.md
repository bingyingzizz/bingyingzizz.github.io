# 同伦范畴　`def.homotopy-category`
同伦范畴（Homotopy Category）
layer 12 · 定义 · 复形与导出三角 · 同调代数

**同伦范畴** $\mathbf{K}(\mathcal{C})$ 的对象与 $\mathcal{C}(\mathcal{C})$ 相同，态射取

$$\operatorname{Hom}_{\mathbf{K}(\mathcal{C})}(K, L) \;:=\; \operatorname{Hom}_{\mathcal{C}(\mathcal{C})}(K, L) \big/ \{\text{零伦态射}\}$$

其中的同构叫**同伦等价**；在 $\mathbf{K}(\mathcal{C})$ 中变成 $0$ 的复形叫**同伦平凡的**。

## 为什么成立（入边，证明在 proofs/）
- `def.homotopy` 同伦：用到了定义 同伦　proofs/def-dep.homotopy-homotopy-category.md
- `def.category` 范畴：用到了定义 范畴　proofs/def-dep.category-homotopy-category.md

## 它能推出什么 / 谁在用它
- 被 `prop.k-calculus-fractions` K(A) 允许分式演算 用
- 被 `def.derived-category` 导出范畴 用
- 被 `prop.hom-k-eq-hom-d` Hom 在同伦范畴与导出范畴里一样 用

> 说明见 `notes/def.homotopy-category.md`
