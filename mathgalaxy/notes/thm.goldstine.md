# Goldstine 定理　`thm.goldstine`　·　说明
根 `../`

**准备：弱*连续线性泛函都是求值。** 设 $\ell$ 是 $(X^{**}, w^{*})$ 上的连续线性泛函。连续性给 $x_1,\ldots,x_n \in X$ 与 $c > 0$ 使 $|\ell(\xi)| \le c \max_j |\xi(x_j)|$。于是 $\ell$ 通过 $\xi \mapsto (\xi(x_1),\ldots,\xi(x_n))$ 分解，从而是这些坐标的线性组合：$\ell = \sum_j c_j\, \mathrm{ev}_{x_j} = \mathrm{ev}_{\,x}$，其中 $x = \sum_j c_j x_j \in X$。即 $(X^{**}, w^{*})^{*} = J_X(X)$。

**分离引理（Hahn–Banach 的几何形式，由 `thm.hahn-banach` 导出）。** 设 $K$ 是局部凸空间中的闭凸集、$\xi_0 \notin K$，则存在连续线性泛函 $\ell$ 与 $\alpha$ 使 $\ell(\xi_0) > \alpha \ge \sup_K \ell$。取 $K - \xi_0$ 的 Minkowski 泛函 $p$（次线性、在 $K - \xi_0$ 上 $\le 1$），在直线 $\mathbb{R}(\xi_0 - k_0)$ 上定义 $\ell_0(t(\xi_0 - k_0)) = t$（$k_0 \in K$ 任取），验证 $\ell_0 \le p$，用 `thm.hahn-banach` 延拓成 $\ell \le p$，再对 $\pm$ 取绝对值即可。

> 续见 notes/thm.goldstine.2.md
