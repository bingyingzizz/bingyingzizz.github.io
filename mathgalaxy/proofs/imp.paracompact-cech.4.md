# 足够多内射 + 软层无环 $\implies$ 仿紧上 Čech 等于层上同调
`imp.paracompact-cech` · 推出 · strong 边 · 根 `../`

`thm.pushforward-enough-injectives` 足够多内射层 + `prop.skyscraper-injective` 天际线层是内射层 → `thm.paracompact-cech-equals-sheaf` 仿紧空间上的 Čech 就是上同调

**第二步：每一项软。** 仿紧 Hausdorff 上每个开覆盖有局部有限的开细化，局部有限覆盖配**从属的单位分解**（`prop.paracompact-partition-unity`）：一族连续 $\varphi_{i} : X \to [0,1]$，支撑在 $U_{i}$ 里、局部有限、局部求和为 $1$。用 $\varphi_{i}$ 逐块切截面，就能把 $\check{\mathcal{C}}^{p}$ 的整体截面「拆成」各覆盖成员上的截面再拼回来 —— 这正是**软性**（soft：每个闭集上的截面都能延拓到全空间）。

> 续见 proofs/imp.paracompact-cech.5.md
