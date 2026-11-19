# imp.left-exact-iff-R0
`imp.left-exact-iff-R0` · 推出 · strong 边 · 根 `../`

`def.right-derived-functor` 右导出函子 + `def.exact-functor` 正合函子 + `def.abelian-category` 阿贝尔范畴 → `prop.left-exact-iff-R0` 左正合性与 R⁰

**证明。**
**$(\Longrightarrow)$** 取 $M$ 的一条内射消解 $0 \to M \xrightarrow{\ \varepsilon\ } I^{0} \xrightarrow{\ d^{0}\ } I^{1} \to \cdots$ ✓。$F$ **左正合**，所以它把上半段正合列送到正合列
$$0 \longrightarrow FM \xrightarrow{\ F\varepsilon\ } FI^{0} \xrightarrow{\ Fd^{0}\ } FI^{1} ✓$$
于是由 $R^{0}F(M) = H^{0}(FI^{\bullet})$ 的定义
$$R^{0}F(M) = \ker(Fd^{0}) = \operatorname{im}(F\varepsilon) \cong FM ✓$$
**$(\Longleftarrow)$** 设 $R^{0}F \cong F$。短正合列 $0 \to M' \to M \to M'' \to 0$ 的长正合列开头是
$$0 \to R^{0}F(M') \to R^{0}F(M) \to R^{0}F(M'') \to R^{1}F(M') \to \cdots$$
用 $R^{0}F \cong F$ 换掉前三项，得到 $0 \to FM' 

> 续见 proofs/imp.left-exact-iff-R0.2.md
