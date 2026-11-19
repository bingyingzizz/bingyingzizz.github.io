# imp.qseparated-underlying-weak-hausdorff
`imp.qseparated-underlying-weak-hausdorff` · 推出 · strong 边 · 根 `../`

`def.quasi-separated` 拟分离对象 + `def.weak-hausdorff` 弱 Hausdorff 空间 + `def.condensed-set` 凝聚态集 → `lem.qseparated-underlying-weak-hausdorff` 拟分离 推出 底空间弱 Hausdorff

**证明。** 由拟分离的刻画，把 $X$ 写成紧 Hausdorff 块沿**含入**的滤过余极限 $X = \varinjlim_{i} S_{i}$（$S_{i} \hookrightarrow S_{j}$）。底空间沿滤过余极限是正合的：
$$X(\bullet) = \varinjlim_{i} S_{i}$$
（在 $\mathrm{CGWH}$ 里取 $k$-化后这个余极限仍被保留）。而**每个** $S_{i}$ 是紧 Hausdorff，当然弱 Hausdorff；$\mathrm{CGWH}$ 是**余完备且对滤过余极限封闭**的，于是余极限 $X(\bullet)$ 仍弱 Hausdorff。

∎
