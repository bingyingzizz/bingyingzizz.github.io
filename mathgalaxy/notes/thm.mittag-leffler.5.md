# Mittag-Leffler 定理　`thm.mittag-leffler`　·　说明
根 `../`

**第 4 步：级数收敛。** 令 $f=\sum_{k=1}^{\infty}(P_k-T_k)$。在任一 $K_m$ 上：使 $n_k<m$ 的 $k$ 只有有限多个（$n_k\to\infty$）；对其余的 $k$ 有 $K_m\subset K_{n_k}$，故 $|P_k-T_k|<2\cdot2^{-k}$。由 Weierstrass 判别法，级数在 $K_m$ 上一致收敛。于是 $f$ 在 $\Omega\setminus\{a_k\}$ 上全纯。

**第 5 步：主部正确。** 固定 $k$。$T_k$ 及所有 $P_j$（$j\ne k$）在 $a_k$ 处全纯（$a_j\ne a_k$），故 $f-P_k$ 在 $a_k$ 的某邻域全纯；即 $f$ 在 $a_k$ 处的主部正是 $P_k$。

**第 6 步：唯一性。** 若 $f_1,f_2$ 都满足，则 $f_1-f_2$ 在 $\Omega$ 上处处全纯（所有极点与主部相消），是 $\Omega$ 上的整函数。$\blacksquare$

> 续见 notes/thm.mittag-leffler.6.md
