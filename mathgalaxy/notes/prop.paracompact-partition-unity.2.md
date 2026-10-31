# 仿紧性与单位分解　`prop.paracompact-partition-unity`　·　说明
根 `../`

X \setminus V_{i})$（不交闭集）用 **Urysohn 引理**取连续函数 $g_{i} : X \to [0,1]$ 使 $g_{i}|_{\overline{W_{i}}} = 1$、$g_{i}|_{X\setminus V_{i}} = 0$ ✓；
- 令 $g := \sum_{i} g_{i}$：局部有限性保证这是**局部有限和**，故 $g$ 连续 ✓，且因为 $\{W_{i}\}$ 覆盖 $X$，每点处 $g \ge 1$（至少一项为 1）✓；
- 取 $\rho_{i} := g_{i}/g$ ✓：非负、和恒为 1、$\operatorname{supp}\rho_{i} \subseteq V_{i} \subseteq U_{i}$，且支撑仍局部有限 ✓。
于是得到从属于原覆盖的单位分解 ✓。∎

> 续见 notes/prop.paracompact-partition-unity.3.md
