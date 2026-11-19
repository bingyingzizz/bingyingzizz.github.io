# imp.kan-extension-exists
`imp.kan-extension-exists` · 推出 · strong 边 · 根 `../`

`def.kan-extension` Kan 延拓 + `def.comma-category` 逗号范畴 + `def.limit` 极限 + `def.universal-colimit` 万有关系 → `prop.kan-extension-exists` 有余极限时 Kan 延拓总存在

这一族 $\{F(X)\}$ 连同「$u$ 给出 $F(u) : F(X) \to F(X')$」构成一个余锥，取其余极限就得到 $(p_{!}F)(X')$ ✓。
**（二）在态射上的值。** 给定 $u' : X' \to Y'$，把 $X'$ 处的余锥沿 $u'$ 推前（$(X, f) \mapsto (X, u' \circ f)$）得 $Y'$ 处的余锥，泛性质给出 $(p_{!}F)(u')$ ✓，函子性由泛性质中的唯一性得到 ✓。
**（三）那条自然变换 $\alpha : F \implies p_{!}F \circ p$。** 在 $X$ 处取 $p(X) \xrightarrow{\ 1\ } p(X)$ 对应的那条腿 $F(X) \to (p_{!}F)\bigl(p(X)\bigr)$ ✓。
**（四）泛性质。** 设 $G : \mathcal{C}' \to \mathcal{D}$ 与 $\gamma : F \implies G \circ p$。

> 续见 proofs/imp.kan-extension-exists.3.md
