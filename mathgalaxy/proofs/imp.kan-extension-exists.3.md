# imp.kan-extension-exists
`imp.kan-extension-exists` · 推出 · strong 边 · 根 `../`

`def.kan-extension` Kan 延拓 + `def.comma-category` 逗号范畴 + `def.limit` 极限 + `def.universal-colimit` 万有关系 → `prop.kan-extension-exists` 有余极限时 Kan 延拓总存在

在 $X'$ 处，$\{\gamma_{X} \text{ 后接 } G(f) : F(X) \to G(X')\}_{f : p(X) \to X'}$ 是 $G(X')$ 里的一个余锥，于是得唯一的 $\widetilde{\gamma}_{X'} : (p_{!}F)(X') \to G(X')$ ✓；

唯一性来自余极限的泛性质，自然性两边都是余锥的映射，逐点验证即可 ✓。
于是 $\operatorname{Hom}(p_{!}F, G) \cong \operatorname{Hom}(F, G \circ p)$ ✓，即 $p_{!} \dashv p^{-1}$ ✓。∎
