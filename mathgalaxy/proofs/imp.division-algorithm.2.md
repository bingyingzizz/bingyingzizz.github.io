# 多项式的次数 + $K$ 是域 $\implies$ 带余除法
`imp.division-algorithm` · 推出 · strong 边 · 根 `../`

`def.polynomial` 一元多项式 + `def.field` 域 → `thm.division-algorithm` 带余除法

**唯一性**：设 $f = q g + r = q' g + r'$，两式相减得 $(q - q') g = r' - r$。若 $q \ne q'$，则左端次数 $\ge \deg g$（由 $\deg(fg) = \deg f + \deg g$），而右端次数 $< \deg g$，矛盾。故 $q = q'$，随之 $r = r'$。∎

> 「域」在存在性那一步被用了一次（$b_n^{-1}$），在唯一性那一步用了一次（整环的次数可加性）。两处都是本质的。
