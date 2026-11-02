# 仿紧性与单位分解　`prop.paracompact-partition-unity`　·　说明
根 `../`

正规的情形同理（局部有限覆盖取局部有限的 $\{\operatorname{supp}\rho_{i}\}$）✓。
**$(\Longrightarrow)$ 用正规性逐步造 $\rho_{i}$。**
- 先取一个**局部有限**的开加细 $\{V_{i}\}$（仿紧的定义；正规的情形直接取自局部有限覆盖本身）✓；
- 正规性给出：存在开集 $W_{i}$ 使 $\overline{W_{i}} \subseteq V_{i}$ 且 $\{W_{i}\}$ 仍覆盖 $X$（这是正规空间的标准「收缩」引理，由 Urysohn 引理或它的变体得到）✓；
- 对每对 $(\overline{W_{i}}, X \setminus V_{i})$（不交闭集）用 **Urysohn 引理**取连续函数 $g_{i} : X \to [0,1]$ 使 $g_{i}|_{\overline{W_{i}}} = 1$、$g_{i}|_{X\setminus V_{i}} = 0$ ✓；
- 令 $g := \sum_{i} g_{i}$：局部有限性保证这是**局部有限和**，故 $g$ 连续 ✓，且因为 $\{W_{i}\}$ 覆盖 $X$，每点处 $g \ge 1$（至少一项为 1）✓；
- 取 $\rho_{i} := g_{i}/g$ ✓：非负、和恒为 1、$\operatorname{supp}\rho_{i} \subseteq V_{i} \subseteq U_{i}$，且支撑仍局部有限 ✓。
于是得到从属于原覆盖的单位

> 续见 notes/prop.paracompact-partition-unity.3.md
