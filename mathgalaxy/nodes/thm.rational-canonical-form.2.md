# 有理标准形　`thm.rational-canonical-form`　·　续页（第 2 页）
[在星图里打开](../#n=thm.rational-canonical-form)　·　第 1 页 [nodes/thm.rational-canonical-form.md](./thm.rational-canonical-form.md)

## 陈述（续）
设 $K$ 是域，$A \in M_{n}(K)$。则 $A$ 在 $M_{n}(K)$ 中相似于**唯一**的分块对角矩阵

$$\operatorname{diag}\bigl(C_{d_{1}}, C_{d_{2}}, \ldots, C_{d_{s}}\bigr) ,$$
其中每个 $C_{d}$ 是**友矩阵**（companion matrix）：$d(x) = x^{m} + a_{m-1}x^{m-1} + \cdots + a_{0}$ 是首一多项式，
$$C_{d} := \begin{pmatrix} 0 & & & & -a_{0} \\ 1 & 0 & & & -a_{1} \\ & \ddots & \ddots & & \vdots \\ & & 1 & 0 & -a_{m-2} \\ & & & 1 & -a_{m-1} \end{pmatrix} ,$$
且 $d_{1} \mid d_{2} \mid \cdots \mid d_{s}$（依次整除）。这些 $d_{i}$ 叫**不变因子**。
**与 Jordan 形的分工**：$K$ 上特征多项式分裂时，有理标准形与 Jordan 形都是完整不变量；不分裂时**只有**有理标准形（在 $K$ 上）可用 —— Jordan 形要到扩域上才存在。

> 续见 [nodes/thm.rational-canonical-form.3.md](./thm.rational-canonical-form.3.md)
