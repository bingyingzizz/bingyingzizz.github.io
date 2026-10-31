# 比较判别法 + 一致 Cauchy $\implies$ Weierstrass 判别法
`imp.weierstrass-m-test` · 推出 · strong 边 · 根 `../`

`thm.comparison-test` 比较判别法 + `def.uniform-cauchy` 一致 Cauchy 列 → `prop.weierstrass-m-test` Weierstrass 判别法

设 $|f_n(x)| \le M_n$、$\sum M_n$ 收敛。记部分和 $S_N(x) := \sum_{n \le N} f_n(x)$。

对 $N' > N$，

$$|S_{N'}(x) - S_N(x)| \le \sum_{n = N+1}^{N'} |f_n(x)| \le \sum_{n = N+1}^{N'} M_n$$

右端与 $x$ 无关，而 $\sum M_n$ 收敛（由数项级数的 Cauchy 准则）使它可以任意小 —— 所以 $\{S_N\}$ 是**一致 Cauchy 列**，因而一致收敛。绝对收敛同理（$\sum |f_n(x)| \le \sum M_n$）。∎

> 证明的要害是「右端与 $x$ 无关」这一步：把 $x$ 从估计里彻底消掉，就得到了一致性。
