# 拟分离即含入的滤过余极限　`lem.qseparated-ind-inclusions`　·　说明
根 `../`

**证明。** 只需证正向（反向是定义）。
- 任何凝聚态集 $X$ 都能写成 $X \cong \varinjlim_{i} T_{i}$（$T_{i}$ 紧 Hausdorff）—— 这是 $\mathrm{Cond}$ 里「用紧块拼出来」的一般事实。
- 记 $X_{i}$ 为 $T_{i}$ 在 $X$ 中的**像**，则 $X = \varinjlim_{i} X_{i}$。每个 $X_{i}$ 作为 $T_{i}$ 的像是**拟紧**的；而 $X$ 拟分离，故每个 $X_{i}$ 也拟分离（拟分离沿子对象遗传）。于是由「qcqs $\cong$ 紧 Hausdorff」得 $X_{i} \cong S_{i}$，$S_{i}$ 紧 Hausdorff。
- 把族 $(S_{i})$ 换成 $S_{J} := \bigcup_{i \in J} S_{i}$（$J$ 有限）—— 因为 $X$ 拟分离，两个紧 Hausdorff 块的交还是紧 Hausdorff（上一条），有限并仍紧 Hausdorff，于是得到一个**有向**的族 $S_{J}$，且 $X = \varinjlim_{J} S_{J}$，过渡映射都是含入。∎
