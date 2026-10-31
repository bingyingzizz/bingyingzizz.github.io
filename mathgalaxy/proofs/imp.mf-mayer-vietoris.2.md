# 形式的短正合列取上同调 $\implies$ 长正合列
`imp.mf-mayer-vietoris` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 → `thm.mayer-vietoris` Mayer–Vietoris 序列

**满射（这是唯一要动手的一步）。** 给定 $\omega \in \Omega^{k}(U \cap V)$，取从属于 $\{U, V\}$ 的光滑单位分解 $\rho_{U} + \rho_{V} = 1$（`thm.smooth-partition-unity`）。把 $\rho_{U}\omega$ 在 $U\setminus\operatorname{supp}\rho_{V}$ 外延拓为 $0$、并在 $U$ 上整体定义为 $\rho_{U}\omega$（它在 $U \cap V$ 外本来就该是 $\omega$ 的 $\rho_{U}$ 倍），同理得 $\rho_{V}\omega$ 在 $V$ 上的形式。于是 $s(\rho_{U}\omega, -\rho_{V}\omega) = (\rho_{U} + \rho_{V})\omega = \omega$。

**核等于像。** $s(\omega_{U},\omega_{V}) = 0$ 说明两块在重叠处相等，于是它们拼成一个整体形式 $\omega \in \Omega^{k}(M)$，即 $(\omega_{U},\omega_{V}) = r(\omega)$。

> 续见 proofs/imp.mf-mayer-vietoris.3.md
