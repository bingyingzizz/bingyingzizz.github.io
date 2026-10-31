# imp.pcp-shrink-unity
`imp.pcp-shrink-unity` · 推出 · strong 边 · 根 `../`

`thm.paracompact-hausdorff-normal` 仿紧豪斯多夫空间正规 + `lem.shrink` 收缩引理 → `prop.paracompact-partition-unity` 仿紧性与单位分解

这是已有命题里「仿紧 Hausdorff $\implies$ 任意开覆盖有从属单位分解」的那一半，逐步重复一遍以显示它不额外需要任何东西：
设 $\mathcal{U} = \{ U_{i} \}$ 是开覆盖。仿紧给局部有限开加细 $\mathcal{V} = \{ V_{i} \}$，正规性（上一条定理）加收缩引理给开覆盖 $\{ W_{i} \}$ 使 $\operatorname{cl} W_{i} \subseteq V_{i}$。
对不交闭集 $\operatorname{cl} W_{i}$ 与 $X \setminus V_{i}$ 用 Urysohn 引理，取连续 $g_{i} : X \to [0, 1]$，$g_{i} \equiv 1$ 在 $\operatorname{cl} W_{i}$ 上、$g_{i} \equiv 0$ 在 $X \setminus V_{i}$ 上。令 $g := \sum_{i} g_{i}$：局部有限性保证这是局部有限和，故 $g$ 连续；$\{ W_{i} \}$ 覆盖说明每点处 $g \ge 1$。于是
$$\rho_{i} := g_{i}/g$$
满足：$\rho_{i} \ge 0$、$\sum_{i} \rho_{i} \equiv 1$、$\operatorn

> 续见 proofs/imp.pcp-shrink-unity.2.md
