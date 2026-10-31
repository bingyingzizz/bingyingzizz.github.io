# 仿紧性与单位分解　`prop.paracompact-partition-unity`　·　说明
根 `../`

**证明（两个方向）。**
**$(\Longleftarrow)$ 单位分解给出局部有限的加细。** 设 $\{\rho_{i}\}$ 是从属于覆盖 $\{U_{i}\}$ 的单位分解。由单位分解的定义，$\operatorname{supp}\rho_{i} \subseteq U_{i}$ 且这族支撑是**局部有限**的 ✓；于是 $\{ \rho_{i}^{-1}\bigl((0,1]\bigr) \}$ 是 $\{U_{i}\}$ 的一个开加细，且仍然局部有限（每个点是有限多个支撑之外的点）✓ —— 这正是仿紧（在 Hausdorff 前提下）要求的「每个开覆盖都有局部有限开加细」。正规的情形同理（局部有限覆盖取局部有限的 $\{\operatorname{supp}\rho_{i}\}$）✓。
**$(\Longrightarrow)$ 用正规性逐步造 $\rho_{i}$。**
- 先取一个**局部有限**的开加细 $\{V_{i}\}$（仿紧的定义；正规的情形直接取自局部有限覆盖本身）✓；
- 正规性给出：存在开集 $W_{i}$ 使 $\overline{W_{i}} \subseteq V_{i}$ 且 $\{W_{i}\}$ 仍覆盖 $X$（这是正规空间的标准「收缩」引理，由 Urysohn 引理或它的变体得到）✓；
- 对每对 $(\overline{W_{i}}, 

> 续见 notes/prop.paracompact-partition-unity.2.md
