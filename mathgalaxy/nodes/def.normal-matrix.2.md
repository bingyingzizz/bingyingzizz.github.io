# 正规矩阵　`def.normal-matrix`　·　续页（第 2 页）
[在星图里打开](../#n=def.normal-matrix)　·　第 1 页 [nodes/def.normal-matrix.md](./def.normal-matrix.md)

## 陈述（续）
$$A^{*}A = AA^{*} .$$

**包含关系**（都是真包含）：

$\{$ 酉 $\} \subset \{$ 正规 $\}$，$\{$ Hermite $\} \subset \{$ 正规 $\}$，$\{$ 实对称 $\} \subset \{$ 正规 $\}$。
**核心结论**（`thm.spectral-matrix`）：$A$ 正规 $\iff$ 存在酉矩阵 $U$ 使 $U^{*}AU$ 是对角阵。
实情形对应的是**实正规矩阵**（$A^{T}A = AA^{T}$）：它可正交对角化，但**分块**为 $1\times 1$ 与 $2\times 2$ 的块，不一定是纯对角 —— 因为非实特征值只能成共轭对出现。

> 续见 [nodes/def.normal-matrix.3.md](./def.normal-matrix.3.md)
