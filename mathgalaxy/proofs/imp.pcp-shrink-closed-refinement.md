# imp.pcp-shrink-closed-refinement
`imp.pcp-shrink-closed-refinement` · 推出 · strong 边 · 根 `../`

`thm.paracompact-hausdorff-normal` 仿紧豪斯多夫空间正规 + `lem.shrink` 收缩引理 → `prop.paracompact-closed-refinement` 闭加细

设 $\mathcal{U}$ 是仿紧 Hausdorff 空间 $X$ 的开覆盖。仿紧性给出局部有限开加细 $\mathcal{V} = \{ V_{i} \}$；由上一条定理 $X$ 正规，于是可以对 $\mathcal{V}$ 用收缩引理，得到开覆盖 $\{ W_{i} \}$ 使 $\operatorname{cl} W_{i} \subseteq V_{i}$。取 $F_{i} := \operatorname{cl} W_{i}$：
- 闭 ✓，且 $F_{i} \subseteq V_{i} \subseteq$ 某个 $\mathcal{U}$ 的成员（加细可传递）；
- 覆盖 $X$ ✓（$\{ W_{i} \}$ 已覆盖）；
- 局部有限 ✓：只碰有限多个 $V_{i}$ 的开邻域也只碰有限多个 $\operatorname{cl} W_{i}$，用的是 $\operatorname{cl} W_{i} \subseteq V_{i}$。∎
