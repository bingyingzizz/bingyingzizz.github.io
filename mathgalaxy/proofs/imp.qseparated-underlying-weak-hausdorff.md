# imp.qseparated-underlying-weak-hausdorff
`imp.qseparated-underlying-weak-hausdorff` · 推出 · strong 边 · 根 `../`

`def.quasi-separated` 拟分离对象 + `def.weak-hausdorff` 弱 Hausdorff 空间 + `def.condensed-set` 凝聚态集 → `lem.qseparated-underlying-weak-hausdorff` 拟分离 推出 底空间弱 Hausdorff

**证法**：把 $X$ 写成紧 Hausdorff 块沿含入的滤过余极限（上一条），再对底空间取 $k$-化。滤过余极限在 $\mathrm{CGWH}$ 里被保留，而每个紧 Hausdorff 块都弱 Hausdorff，于是余极限仍弱 Hausdorff。

**方向别弄反**：这条是「拟分离 $\implies$ 弱 Hausdorff」，反向要加**紧生成**才成立（见下一条）。

> 续见 proofs/imp.qseparated-underlying-weak-hausdorff.2.md
