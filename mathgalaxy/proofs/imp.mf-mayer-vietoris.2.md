# 形式的短正合列取上同调 $\implies$ 长正合列
`imp.mf-mayer-vietoris` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 + `thm.smooth-partition-unity` 光滑单位分解 → `thm.mayer-vietoris` Mayer–Vietoris 序列

**单射。** $r(\omega) = 0$ 说明 $\omega$ 在 $U$ 与 $V$ 上都为零，而 $M = U \cup V$，故 $\omega = 0$。
**满射。** 取从属于 $\{U, V\}$ 的光滑单位分解 $\rho_{U} + \rho_{V} = 1$（`thm.smooth-partition-unity`）。对 $\omega \in \Omega^{k}(W)$ 令 $a_{U} = \rho_{V}\omega$（在 $U$ 上，$U \setminus W$ 外延拓为 $0$）、$a_{V} = -\rho_{U}\omega$（在 $V$ 上，延拓为 $0$）。则 $a_{U}, a_{V}$ 光滑（$\rho_{V}$ 在 $U \setminus V$ 上为零、$\rho_{U}$ 在 $V \setminus U$ 上为零），且 $s(a_{U}, a_{V}) = (\rho_{U} + \rho_{V})\omega = \omega$。
**核等于像。** $s(\omega_{U},\omega_{V}) = 0$ 说明两块在 $W$ 上相等，于是拼成 $\Omega^{k}(M)$ 中的整体形式。所以这是链复形的短正合列。
**连接同态。** 蛇引理给出长正合列，其 $\delta$

> 续见 proofs/imp.mf-mayer-vietoris.3.md
