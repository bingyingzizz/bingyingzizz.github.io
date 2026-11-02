# 可分 Hilbert 空间等距于 ℓ²　`thm.separable-hilbert-is-l2`　·　说明
根 `../`

映射 $U : H \to \ell^2(I)$，$U(x) := (\langle x, e_i\rangle)_{i \in I}$。

由 Bessel 它入 $\ell^2$、由 Parseval 它保范；

满射性：若 $(\lambda_i) \in \ell^2$，则部分和 $\sum_{i \in J}\lambda_i e_i$ 是 Cauchy（$\|\sum_{J \setminus J'}\lambda_i e_i\|^2 = \sum_{J \setminus J'}|\lambda_i|^2$），其极限的坐标就是 $\lambda_i$。

⭐ 结论：**可分无穷维 Hilbert 空间在等距意义下只有一个**。Banach 空间完全不是这样：$\ell^p$（不同 $p$）两两不同构，$C[0,1]$、$L^1$、$c_0$ 也各自不同。这就是「Hilbert 空间简单」的确切含义。

⚠️ 「可分」不能去掉：$\ell^2(I)$（不可数 $I$）与 $\ell^2(J)$ 同构 $\iff |I| = |J|$（用正交基的基数比）。
