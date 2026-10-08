# 可数积的 Borel 代数　`cor.borel-product`
推论：可数积距离空间的 Borel σ-代数（可分时相等）
layer 13 · 推论 · 乘积测度与 Fubini · 分析学+拓扑学

设 $X_{1}, X_{2}$ … 是距离空间，$X = \prod_{j=1}^{\infty} X_j$ 配以积度量。则

$$\otimes _{j=1}^{\infty} \mathfrak{B}_{X_j} \subseteq \mathfrak{B}_X$$

且当每个 $X_{j}$ **可分**时，等号成立：

$$X_j\text{ 都可分} \implies \otimes _{j=1}^{\infty} \mathfrak{B}_{X_j} = \mathfrak{B}_X$$

## 为什么成立（入边，证明在 proofs/）
- `def.product-sigma` 积 σ-代数：用到了定义 积 σ-代数　proofs/def-link.product-borel.md
- `def.borel` Borel σ-代数：用到了定义 Borel σ-代数　proofs/def-link.borel-borelproduct.md
- `def.metric-space` 距离空间：用到了定义 距离空间　proofs/def-link.metric-borel-product.md

refs: Folland, Real Analysis, §2.1

> 说明见 `notes/cor.borel-product.md`
