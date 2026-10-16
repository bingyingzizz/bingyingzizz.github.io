# 拟分离即含入过渡的滤过余极限 $\implies$ 嵌入底空间是单的
`imp-link.ccolim-qsepmono` · 推出 · strong 边 · 根 `../`

`prop.countable-colimit-qseparated` 可数递增余极限是拟分离的 → `prop.qseparated-mono` 拟分离嵌入底空间

若 $X = \varinjlim_i S_{i}$（含入过渡），则 $X(S) = \varinjlim_i \operatorname{Hom}(S, S_{i})$ ✓；两个元素映到底空间里同一个连续映射时，它们来自某个 $S_{i}$，而 $S_{i} \hookrightarrow X(\cdot)$ 是含入、特别地单射，故两个元素相等 ✓。于是 $X(S) \to C(S, X(\cdot))$ 单射，对每个紧 Hausdorff $S$ 成立即得单态射 ✓。∎
