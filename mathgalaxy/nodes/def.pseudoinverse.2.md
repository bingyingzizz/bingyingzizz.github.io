# 伪逆　`def.pseudoinverse`　·　续页（第 2 页）
[在星图里打开](../#n=def.pseudoinverse)　·　第 1 页 [nodes/def.pseudoinverse.md](./def.pseudoinverse.md)

## 陈述（续）
设 $A \in M_{m\times n}(K)$。**Moore–Penrose 伪逆** $A^{+} \in M_{n\times m}(K)$ 是唯一满足下面四条的矩阵：

$$A A^{+} A = A, \qquad A^{+} A A^{+} = A^{+} ,$$

$$(AA^{+})^{*} = AA^{+}, \qquad (A^{+}A)^{*} = A^{+}A .$$
**由 SVD 构造**：若 $A = U\Sigma V^{*}$（`thm.svd`），则

$$A^{+} = V\Sigma^{+}U^{*} ,$$

其中 $\Sigma^{+}$ 是把 $\Sigma$ 的非零对角元取倒数、再转置。
**当 $A$ 可逆时** $A^{+} = A^{-1}$；若 $A$ 列满秩，则 $A^{+} = (A^{*}A)^{-1}A^{*}$（最小二乘解 $x = A^{+}b$）。

> 续见 [nodes/def.pseudoinverse.3.md](./def.pseudoinverse.3.md)
