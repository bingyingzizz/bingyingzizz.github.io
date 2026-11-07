# 有理标准形　`thm.rational-canonical-form`　·　说明
根 `../`

**存在性**：对 $V_{A}$ 用引理 2。因 $V$ 挠，自由部分必须为零：若 $R^{n-r} \ne 0$，取 $e_{1}$，则 $\chi_{A} e_{1} \ne 0$，与 $\chi_{A} \in \operatorname{Ann}(V)$ 矛盾。再删去单位 $d_{i}$（此时 $R/(d_{i}) = 0$），得 $V \cong \bigoplus_{i=1}^{s} R/(d_{i})$，其中 $d_{1} \mid \cdots \mid d_{s}$ 非单位首一多项式。

**从循环模到友矩阵**：在 $R/(d)$（$d = x^{m} + a_{m-1}x^{m-1} + \cdots + a_{0}$）中取 $K$-基 $1, x, \ldots, x^{m-1}$。乘 $x$ 把前 $m-1$ 个基向量送到下一个，把 $x^{m-1}$ 送到 $x^{m} \equiv -(a_{0} + a_{1}x + \cdots + a_{m-1}x^{m-1})$。该算子在这组基下的矩阵正是 $C_{d}$（次对角线全 $1$，最后一列 $(-a_{0}, \ldots, -a_{m-1})^{T}$）。把各循环块的基拼起来，$A$ 相似于 $\operatorname{diag}(C_{d_{1}}, \ldots, C_{d_{s}})$。

> 续见 notes/thm.rational-canonical-form.6.md
