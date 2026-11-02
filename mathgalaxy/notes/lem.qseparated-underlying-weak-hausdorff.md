# 拟分离 推出 底空间弱 Hausdorff　`lem.qseparated-underlying-weak-hausdorff`　·　说明
根 `../`

**证法**：把 $X$ 写成紧 Hausdorff 块沿含入的滤过余极限（上一条），再对底空间取 $k$-化。滤过余极限在 $\mathrm{CGWH}$ 里被保留，而每个紧 Hausdorff 块都弱 Hausdorff，于是余极限仍弱 Hausdorff。

**方向别弄反**：这条是「拟分离 $\implies$ 弱 Hausdorff」，反向要加**紧生成**才成立（见下一条）。

**证明。** 由拟分离的刻画，把 $X$ 写成紧 Hausdorff 块沿**含入**的滤过余极限 $X = \varinjlim_{i} S_{i}$（$S_{i} \hookrightarrow S_{j}$）。底空间沿滤过余极限是正合的：
$$X(\bullet) = \varinjlim_{i} S_{i}$$
（在 $\mathrm{CGWH}$ 里取 $k$-化后这个余极限仍被保留）。而**每个** $S_{i}$ 是紧 Hausdorff，当然弱 Hausdorff；$\mathrm{CGWH}$ 是**余完备且对滤过余极限封闭**的，于是余极限 $X(\bullet)$ 仍弱 Hausdorff。∎
