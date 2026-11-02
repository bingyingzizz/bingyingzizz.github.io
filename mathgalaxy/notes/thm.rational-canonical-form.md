# 有理标准形　`thm.rational-canonical-form`　·　说明
根 `../`

⭐ **为什么叫「有理」**：历史上指 $K = \mathbb{Q}$ 的情形 —— 正是「特征多项式在 $\mathbb{Q}$ 上不分裂」的典型场合。名字沿用下来，现在指「对任意域都成立」。

**与极小多项式的关系**：不变因子 $d_{s}$ 就是矩阵的**极小多项式**，$d_{1} d_{2} \cdots d_{s}$ 是特征多项式。所以两个多项式链在有理标准形里被**同时**编码 —— 这是它比 Jordan 形更「代数」的地方。

⚠️ **实矩阵的坑**：$A \in M_{n}(\mathbb{R})$ 的特征值可能是复数，所以「实 Jordan 形」只能给到 $1\times1$ 与 $2\times2$ 块（复特征值成对出现）。

要对 $\mathbb{R}$ 上的矩阵讲唯一标准形，有两条路：实 Jordan 形（带 $2\times2$ 块）或有理标准形（纯 $\mathbb{R}$ 系数）。

本图 `thm.jordan-canonical-form` 讲的是复情形。

> 续见 notes/thm.rational-canonical-form.2.md
