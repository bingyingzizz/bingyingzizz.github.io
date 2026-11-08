# 平坦模的结构定理　`thm.lazard`　·　说明
根 `../`

先证 $\mathcal C$ 滤过。其一，任意两个对象 $(R^m,\chi)$、$(R^n,\psi)$ 经直和 $(R^{m+n},\chi\oplus\psi)$ 合并。其二，设 $u,v:(R^m,\chi)\to(R^n,\psi)$ 是平行态射，即 $\psi u=\psi v=\chi$。令 $w=u-v:R^m\to R^n$，$Q=R^n/\operatorname{im}w$。$Q$ 有限呈现：$R^n$ 有限自由，$\operatorname{im}w$ 由至多 $m$ 个元素生成。因 $\psi w=\psi u-\psi v=0$，$\psi$ 过 $Q$：$\psi=f\circ\pi$，$\pi:R^n\to Q$。对有限呈现的 $Q$ 与 $f:Q\to F$ 用引理 L，得 $Q\xrightarrow{\psi'}R^k\xrightarrow{\chi'}F$，$f=\chi'\psi'$。令 $h=\psi'\pi:R^n\to R^k$。则 $\chi'h=\chi'\psi'\pi=f\pi=\psi$，且 $hu=\psi'\pi u=\psi'\pi v=hv$（因 $\pi w=0$）。故 $h$ 把 $u,v$ **弱余等化**（$hu=hv$；这里只要求「存在把平行对余等化的箭」，不要求 $h$ 本身是 $\mathcal C$ 中的余等化子）—— 这正是 $\mathcal C$ 滤过所需的「平行对可被余等化」。

> 续见 notes/thm.lazard.9.md
