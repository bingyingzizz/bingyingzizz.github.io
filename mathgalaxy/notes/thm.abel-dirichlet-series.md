# Abel–Dirichlet 判别法　`thm.abel-dirichlet-series`　·　说明
根 `../`

⭐ 这两个判别法处理的是**一般来说不绝对收敛**的级数 —— 正项那一族的判据（比较、Kummer、根值、积分）在这里全都用不上。

⭐ **Leibniz 交错级数判别法是 Dirichlet 的特例**：取 $a_n = (-1)^{n}$（部分和只取 $0, 1$ 两个值，有界），$b_n$ 单调趋于 $0$，就得到「交错级数收敛」。所以图上**不单独建 Leibniz 节点**。

⭐ 证明的核心是 **Abel 求和（分部求和）**：把 $\sum_{k \le n} a_k b_k$ 改写成 $A_n b_n - A_m b_{m+1} - \sum_{k} A_k (b_{k+1} - b_k)$，于是「$A$ 有界」与「$b$ 单调」各发挥一次作用，再用 Cauchy 准则收尾。
