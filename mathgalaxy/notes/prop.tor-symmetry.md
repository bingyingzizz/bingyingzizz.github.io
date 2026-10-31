# 挠积的对称性　`prop.tor-symmetry`　·　说明
根 `../`

**证明（双复形的两种算法）。** 取 $M, N$ 各自的投射消解 $P_{\bullet} \twoheadrightarrow M$、$Q_{\bullet} \twoheadrightarrow N$，作双复形 $P \otimes Q$（$p$ 次行为 $P_{p}\otimes Q_{q}$），取全复形 $T_{\bullet}$。对它按**行**过滤：
$$E_{p,q}^{1} = H_{q}\bigl(P_{p}\otimes Q_{\bullet}\bigr) = \begin{cases} P_{p}\otimes N , & q = 0 \\ 0 , & q \ne 0 \end{cases}$$
（因为 $Q_{\bullet} \to N$ 是消解、$P_{p}$ 平坦，张量后仍正合）✓。于是谱序列在 $E^{1}$ 页就只剩一行，退化，得 $H_{n}(T_{\bullet}) \cong H_{n}(P_{\bullet}\otimes N) = \operatorname{Tor}_{n}^{R}(M, N)$ ✓。
再按**列**过滤（交换环上 $P\otimes Q \cong Q\otimes P$，双复形转置）：同一步计算给出 $H_{n}(T_{\bullet}) \cong H_{n}(Q_{\bullet}\otimes M) = \operatorname{Tor}_{n}^{R}(N, M)$ ✓。同一个 $H_{n}(T_{\bullet})$ 被算出两次，故两者同构 ✓。∎

> 续见 notes/prop.tor-symmetry.2.md
