# 形式的短正合列取上同调 $\implies$ 长正合列
`imp.mf-mayer-vietoris` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 → `thm.mayer-vietoris` Mayer–Vietoris 序列

把 $\rho_{U}\omega$ 在 $U\setminus\operatorname{supp}\rho_{V}$ 外延拓为 $0$、并在 $U$ 上整体定义为 $\rho_{U}\omega$（它在 $U \cap V$ 外本来就该是 $\omega$ 的 $\rho_{U}$ 倍），同理得 $\rho_{V}\omega$ 在 $V$ 上的形式。

于是 $s(\rho_{U}\omega, -\rho_{V}\omega) = (\rho_{U} + \rho_{V})\omega = \omega$。

**核等于像。** $s(\omega_{U},\omega_{V}) = 0$ 说明两块在重叠处相等，于是它们拼成一个整体形式 $\omega \in \Omega^{k}(M)$，即 $(\omega_{U},\omega_{V}) = r(\omega)$。

**取上同调。** 每个 $\Omega^{k}$ 上都有 $\mathrm{d}$，且 $r, s$ 与 $\mathrm{d}$ 交换（限制与差都逐点作用，$\mathrm{d}$ 是逐点公式），故这是链映射构成的短正合列。

链复形的短正合列取上同调得到长正合列（蛇引理 + 连接同态 $\delta$ 的构造），这就是所要的。

> 续见 proofs/imp.mf-mayer-vietoris.3.md
