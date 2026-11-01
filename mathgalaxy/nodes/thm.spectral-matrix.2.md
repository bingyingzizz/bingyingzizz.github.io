# 谱定理（矩阵版）　`thm.spectral-matrix`　·　续页（第 2 页）
[在星图里打开](../#n=thm.spectral-matrix)　·　第 1 页 [nodes/thm.spectral-matrix.md](./thm.spectral-matrix.md)

## 陈述（续）
$$A\ \text{正规} \iff \exists\, U\ \text{酉},\ U^{*}AU = \operatorname{diag}(\lambda_{1}, \ldots, \lambda_{n}) .$$

即：**正规 $\iff$ 有一组标准正交的特征向量基**。此时
$$A = U \Lambda U^{*}, \qquad \Lambda = \operatorname{diag}(\lambda_{1}, \ldots, \lambda_{n}) ,$$

这叫 $A$ 的**谱分解**（正交投影之和：$A = \sum_i \lambda_i u_i u_i^{*}$）。
**实情形**：实对称矩阵 $\iff$ 存在**正交**矩阵 $Q$ 使 $Q^{T}AQ$ 为实对角阵。

> 续见 [nodes/thm.spectral-matrix.3.md](./thm.spectral-matrix.3.md)
