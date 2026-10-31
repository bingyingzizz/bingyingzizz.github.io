# 保向不变性 + 单位分解 $\implies$ 流形上的换元公式
`imp.spivak-change-variables` · 推出 · strong 边 · 根 `../`

`def.integral-form` 形式的积分 + `prop.paracompact-partition-unity` 仿紧性与单位分解 → `thm.change-of-variables-manifold` 流形上的换元公式

**（1）拆到卡里。** 设 $M,N$ 各有保向图册，取从属于它们的单位分解 $\{\rho_{\alpha}\}$（在 $M$ 上）与 $\{\sigma_{\beta}\}$（在 $N$ 上）。把 $\omega$ 写成 $\sum_{\beta}\sigma_{\beta}\omega$，每一项支在一张保向卡 $V_{\beta}\subseteq N$ 里；$f^{\ast}$ 保求和，故只需处理「$\omega$ 支在一张卡里」的情形。再用 $M$ 侧的 $\{\rho_{\alpha}\}$ 把 $f^{\ast}\omega$ 拆开。有限多项相加，逐项证完即可。

**（2）化到 $\mathbb{R}^{n}$。** 于是只需处理开集之间的微分同胚 $g : U\to V$（$U,V\subseteq\mathbb{R}^{n}$）与 $\omega = \beta\,\mathrm{d}y^{1}\wedge\cdots\wedge\mathrm{d}y^{n}$。拉回给出

> 续见 proofs/imp.spivak-change-variables.2.md
