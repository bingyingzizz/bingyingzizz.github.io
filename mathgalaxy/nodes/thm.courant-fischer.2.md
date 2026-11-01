# Courant–Fischer 极小极大原理　`thm.courant-fischer`　·　续页（第 2 页）
[在星图里打开](../#n=thm.courant-fischer)　·　第 1 页 [nodes/thm.courant-fischer.md](./thm.courant-fischer.md)

## 陈述（续）
设 $A$ 是 $n$ 阶 Hermite 矩阵，特征值按降序排列 $\lambda_{1} \ge \lambda_{2} \ge \cdots \ge \lambda_{n}$。则对每个 $k = 1, \ldots, n$，
$$\lambda_{k} = \max_{\dim S = k}\ \min_{0 \ne x \in S} R_{A}(x) = \min_{\dim T = n-k+1}\ \max_{0 \ne x \in T} R_{A}(x) ,$$
其中 $S, T$ 取遍相应维数的子空间，$R_A$ 是 Rayleigh 商（`def.rayleigh-quotient`）。
**推论（Weyl 单调性）**：若 $A \le B$（即 $B - A$ 半正定），则 $\lambda_{k}(A) \le \lambda_{k}(B)$ 对每个 $k$ 成立。

> 续见 [nodes/thm.courant-fischer.3.md](./thm.courant-fischer.3.md)
