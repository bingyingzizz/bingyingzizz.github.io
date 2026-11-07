# 有理标准形　`thm.rational-canonical-form`　·　续页（第 2 页）
[在星图里打开](../#n=thm.rational-canonical-form)　·　第 1 页 [nodes/thm.rational-canonical-form.md](./thm.rational-canonical-form.md)

## 陈述（续）
n 标准形要求「特
征多项式在域里分
裂」（特征值都在
域里）。有理标准
形**不需要这个条
件** —— 只要 $K$ 
是域，任何矩阵都
能化成它。
设 $K$ 是域，$A \in 
M_{n}(K)$。则 $A$ 在 
$M_{n}(K)$ 中相似于*
*唯一**的分块对角
矩阵
$$\operatorname{diag}\bi
gl(C_{d_{1}}, C_{d_{2}},
 \ldots, C_{d_{s}}\bigr)
 ,$$
其中每个 $C_{d}$ 是
**友矩阵**（companio
n matrix）：$d(x) = x^
{m} + a_{m-1}x^{m-1} + \
cdots + a_{0}$ 是首一
多项式，
$$C_{d} := \begin{pmatri
x} 0 & & & & -a_{0} \\ 1
 & 0 & & & -a_{1} \\ & \
ddots & \ddots & & \vdot
s \\ & & 1 & 0 & -a_{m-2
} \\ & & & 1 & -a_{m-1} 
\end{pmatrix} ,$$
且 $d_{1} \mid d_{2} \m
id \cdots \mid d_{s}$（
依次整除）。这些
 $d_{i}$ 叫**不变因
子**。
**与 Jordan 形的分
工**：$K$ 上特征多
项式分裂时，有理

> 续见 [nodes/thm.rational-canonical-form.3.md](./thm.rational-canonical-form.3.md)
