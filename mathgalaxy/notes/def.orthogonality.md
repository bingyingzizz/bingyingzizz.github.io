# 正交　`def.orthogonality`　·　说明
根 `../`

⭐ 标准正交基的最大好处是**坐标就是内积**：若 $(e_1, \ldots, e_n)$ 标准正交，则

$$v = \sum_{i=1}^{n} \langle e_i, v \rangle\, e_i, \qquad \|v\|^{2} = \sum_{i=1}^{n} |\langle e_i, v \rangle|^{2}$$

（第二条是 **Parseval 等式**。）一般基要解线性方程组才能求坐标，标准正交基只要算 $n$ 个内积 —— 这就是 Gram–Schmidt 值得做的理由。

⚠ 标准正交组与标准正交「基」不同：前者只要求正交归一，不要求张成整个空间。
