# 算子版谱定理 $\iff$ 矩阵版谱定理（实对称）
`dep.ln-spectral-old` · 等价 · strong 边 · 根 `../`

`thm.spectral-matrix` 谱定理（矩阵版） → `thm.spectral-theorem` 谱定理（实对称）

设 $V$ 有限维实内积空间、$T$ 自伴。取标准正交基把 $T$ 写成实对称矩阵 $A$；矩阵版给正交 $Q$ 使 $Q^{\mathsf{T}}AQ = \Lambda$。$Q$ 的列是 $V$ 的一组标准正交基，且 $AQ = Q\Lambda$ 说明第 $i$ 列是特征值 $\lambda_i$ 的特征向量 —— 这就是谱定理要的特征基，特征值全实由 $\Lambda$ 直接读出。

> 两条是同一件事的算子语言与矩阵语言；关键一步「在标准正交基下取矩阵」在两个方向上都可逆。原记 analogy，FIX-065 改 equivalence 并补双向推导。
