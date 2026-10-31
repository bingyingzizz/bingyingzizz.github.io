# 张量积的构造 $\implies$ 万有性质
`imp.tensor-universal-property` · 推出 · strong 边 · 根 `../`

`def.tensor-product-vs` 张量积 + `def.quotient-vs` 商空间 → `thm.tensor-universal-property` 张量积的万有性质

**存在性**：给定双线性 $B : V \times W \to U$。先在 $V \times W$ 生成的自由向量空间（形式上取全部 $(v, w)$ 的形式线性组合）上定义 $\widehat B\bigl( \sum c_{ij}(v_i, w_j) \bigr) := \sum c_{ij} B(v_i, w_j)$，这是线性的；再由 $B$ 的双线性，$\widehat B$ 在「双线性关系」张成的子空间上取零，于是由**商空间的万有性质**（`thm.quotient-universal-vs`）它唯一地下降为 $\widetilde B : V \otimes W \to U$。

> 续见 proofs/imp.tensor-universal-property.2.md
