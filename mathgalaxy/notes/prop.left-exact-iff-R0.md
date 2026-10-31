# 左正合性与 R⁰　`prop.left-exact-iff-R0`　·　说明
根 `../`

**证明。**
**$(\Longrightarrow)$** 取 $M$ 的一条内射消解 $0 \to M \xrightarrow{\ \varepsilon\ } I^{0} \xrightarrow{\ d^{0}\ } I^{1} \to \cdots$ ✓。$F$ **左正合**，所以它把上半段正合列送到正合列
$$0 \longrightarrow FM \xrightarrow{\ F\varepsilon\ } FI^{0} \xrightarrow{\ Fd^{0}\ } FI^{1} ✓$$
于是由 $R^{0}F(M) = H^{0}(FI^{\bullet})$ 的定义
$$R^{0}F(M) = \ker(Fd^{0}) = \operatorname{im}(F\varepsilon) \cong FM ✓$$
**$(\Longleftarrow)$** 设 $R^{0}F \cong F$。短正合列 $0 \to M' \to M \to M'' \to 0$ 的长正合列开头是
$$0 \to R^{0}F(M') \to R^{0}F(M) \to R^{0}F(M'') \to R^{1}F(M') \to \cdots$$
用 $R^{0}F \cong F$ 换掉前三项，得到 $0 \to FM' \to FM \to FM''$ **正合** ✓，即 $F$ 左正合 ✓。∎

⭐ 一句话：**左正合性可以只用 $0$ 次导出函子来检验**。反过来，这也解释了为什么「$R^{0}F = F$」在导出函子的记号里被当成左正合的默认性质。

> 续见 notes/prop.left-exact-iff-R0.2.md
