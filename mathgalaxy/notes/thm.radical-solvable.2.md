# 根式可解 与 伽罗瓦群可解　`thm.radical-solvable`　·　说明
根 `../`

**引理（Kummer 一步）**：设 $F$ 含本原 $m$ 次单位根 $\zeta$，$E/F$ 是 $m$ 次循环扩张，则 $E=F(\beta)$ 且 $\beta^{m}\in F$。证明：取生成元 $\sigma$，把 $\sigma$ 看成 $E$ 上的 $F$-线性变换。$\sigma^{m}=1$，而 $x^{m}-1$ 在 $F$ 上分裂且无重根，故 $\sigma$ 可对角化，其特征值全是 $m$ 次单位根。**这里关键是 $\sigma$ 的极小多项式恰为 $x^{m}-1$**：由 Dedekind 线性无关（「伽罗瓦对应」那条的引理 1：两两不同的自同构作为函数线性无关），$1,\sigma,\ldots,\sigma^{m-1}$ 在 $E$ 上线性无关，故任何次数 $<m$ 的非零多项式都不零化 $\sigma$，极小多项式次数 $\ge m$；又 $\sigma^{m}=1$ 使它整除 $x^{m}-1$（次数 $m$），故极小多项式 $=x^{m}-1$。又极小多项式整除特征多项式 $\chi_{\sigma}$（Cayley–Hamilton 定理的一般形式：$\chi_{\sigma}$ 零化 $\sigma$，故被极小多项式整除），而 $\deg\chi_{\sigma}=\dim_{F}E=m=\deg\mu_{\sigma}$，两者首一且次数相同，故 $\chi_{\sigma}=\mu_{\sigma}=x^{m}-1$。于

> 续见 notes/thm.radical-solvable.3.md
