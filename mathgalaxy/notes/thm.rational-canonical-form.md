# 有理标准形　`thm.rational-canonical-form`　·　说明
根 `../`

⭐ **为什么叫「有理」**：历史上指 $K = \mathbb{Q}$ 的情形 —— 正是「特征多项式在 $\mathbb{Q}$ 上不分裂」的典型场合。名字沿用下来，现在指「对任意域都成立」。

**证明思路（完整证明见边 `imp.rational-canonical-form-proof`）**：把 $V=K^n$ 看成 $K[x]$-模（$x\cdot v=Av$）。Cayley–Hamilton 给 $\chi_A(A)=0$，故 $V$ 是有限生成挠模。由 PID 上有限生成模的结构定理（`thm.pid-fg-module-structure`），$V\cong\bigoplus_i K[x]/(d_i)$，$d_1\mid\cdots\mid d_s$ 非单位首一。每个循环模取基 $1,x,\ldots,x^{m-1}$，乘 $x$ 的矩阵正是友矩阵 $C_{d_i}$（`def.companion-matrix`；循环子空间见 `def.cyclic-subspace`）。唯一性由 $xI-A$ 的 Smith 不变因子给出（`def.invariant-factor`、`thm.smith-normal-form`）。

> 续见 notes/thm.rational-canonical-form.2.md
