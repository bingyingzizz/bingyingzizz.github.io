# 平坦模的结构定理　`thm.lazard`　·　说明
根 `../`

**$(\Longrightarrow)$ 主证明。** 考虑范畴 $\mathcal C$：对象是右线性映射 $\chi:R^n\to F$（$n\ge0$ 有限）；从 $(R^m,\chi)$ 到 $(R^n,\psi)$ 的态射是右线性 $u:R^m\to R^n$ 且 $\psi\circ u=\chi$。

先证 $\mathcal C$ 滤过。其一，任意两个对象 $(R^m,\chi)$、$(R^n,\psi)$ 经直和 $(R^{m+n},\chi\oplus\psi)$ 合并。其二，设 $u,v:(R^m,\chi)\to(R^n,\psi)$ 是平行态射，即 $\psi u=\psi v=\chi$。令 $w=u-v:R^m\to R^n$，$Q=R^n/\operatorname{im}w$。$Q$ 有限呈现：$R^n$ 有限自由，$\operatorname{im}w$ 由至多 $m$ 个元素生成。因 $\psi w=\psi u-\psi v=0$，$\psi$ 过 $Q$：$\psi=f\circ\pi$，$\pi:R^n\to Q$。对有限呈现的 $Q$ 与 $f:Q\to F$ 用引理 L，得 $Q\xrightarrow{\psi'}R^k\xrightarrow{\chi'}F$，$f=\chi'\psi'$。令 $h=\psi'\pi:R^n\to R^k$。则 $\chi'h=\chi'\psi'\pi=f\pi=\psi$，且 $hu=\psi'\pi u=\psi'\pi v=hv$（因 $\pi w=0$）。故 $h$ 是 $u,v$ 在 $\mathcal C$ 中的余等化。

> 续见 notes/thm.lazard.8.md
