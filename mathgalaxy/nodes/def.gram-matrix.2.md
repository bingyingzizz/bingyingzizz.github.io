# Gram 矩阵　`def.gram-matrix`　·　续页（第 2 页）
[在星图里打开](../#n=def.gram-matrix)　·　第 1 页 [nodes/def.gram-matrix.md](./def.gram-matrix.md)

## 陈述（续）
设 $V$ 是实内积空间，$v_{1}, \ldots, v_{k} \in V$。它们的 **Gram 矩阵**是

$$G := \bigl(\langle v_{i}, v_{j}\rangle\bigr)_{1 \le i,j \le k} ,$$

其行列式 $\det G$ 叫 **Gram 行列式**。

**核心性质**：
1. $G$ 对称、**半正定**；$G$ 正定 $\iff$ $v_{1}, \ldots, v_{k}$ 线性无关；
2. $\det G \ge 0$，且 $\det G = 0 \iff$ 这些向量线性相关；
3. 若 $V = \mathbb{R}^{n}$ 上取**标准**内积、向量是矩阵 $A$ 的列，则 $G = A^{T}A$（复情形 $A^{*}A$；一般内积 $H$ 下是 $A^{T}HA$）。

> 续见 [nodes/def.gram-matrix.3.md](./def.gram-matrix.3.md)
