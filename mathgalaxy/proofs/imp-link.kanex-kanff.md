# 逐点公式 $\implies$ 全忠实时延拓回到自己
`imp-link.kanex-kanff` · 推出 · strong 边 · 根 `../`

`prop.kan-extension-exists` 有余极限时 Kan 延拓总存在 + `prop.kan-extension-adjoint` Kan 延拓与伴随的存在性 → `prop.kan-extension-fully-faithful` 全忠实沿自身的 Kan 延拓

逐点公式给出 $(p_{!}F)(X') = \varinjlim_{p(X) \to X'} F(X)$ ✓，而单位 $F \implies p_{!}F \circ p$ 就是那条自然变换 ✓。
取 $X' = p(X_{0})$：逗号范畴 $p \downarrow p(X_{0})$ 有终对象 $1_{p(X_{0})}$（$p$ 全忠实）✓，沿带终对象的范畴取余极限即取终对象处的值 ✓，故 $(p_{!}F)(p(X_{0})) \cong F(X_{0})$，单位是自然同构 ✓。∎
