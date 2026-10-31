# imp.geodesic-existence
`imp.geodesic-existence` · 推出 · strong 边 · 根 `../`

`def.geodesic` 测地线 + `def.christoffel-symbol` 克里斯托费尔记号 → `prop.geodesic-existence` 测地线的局部存在唯一性

\dot\sigma^{j} = c^{2}\left(\ddot\gamma_{v}^{k}+\Gamma^{k}_{ij}(\gamma_{v})\dot\gamma_{v}^{i}\dot\gamma_{v}^{j}\right) = 0,$$
且 $\sigma(0) = p$、$\dot\sigma(0) = cv$。由唯一性 $\sigma = \gamma_{cv}$，即 $\gamma_{cv}(t) = \gamma_{v}(ct)$。
**是测地线且按弧长参数化。** 解出来的曲线满足 $\nabla_{\dot\gamma}\dot\gamma = 0$，正是测地线；又 $\frac{\mathrm{d}}{\mathrm{d}s}\langle \dot\gamma,\dot\gamma\rangle = 2\langle \nabla_{\dot\gamma}\dot\gamma,\dot\gamma\rangle = 0$，故速度恒定。$\blacksquare$
