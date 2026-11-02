# imp.geodesic-existence
`imp.geodesic-existence` · 推出 · strong 边 · 根 `../`

`def.geodesic` 测地线 + `def.christoffel-symbol` 克里斯托费尔记号 → `prop.geodesic-existence` 测地线的局部存在唯一性

定义 $\sigma(t) = \gamma_{v}(ct)$：由链式法则 $\dot\sigma(t) = c\dot\gamma_{v}(ct)$、$\ddot\sigma(t) = c^{2}\ddot\gamma_{v}(ct)$，代入方程得
$$\ddot\sigma^{k}+\Gamma^{k}_{ij}(\sigma)\dot\sigma^{i}\dot\sigma^{j} = c^{2}\left(\ddot\gamma_{v}^{k}+\Gamma^{k}_{ij}(\gamma_{v})\dot\gamma_{v}^{i}\dot\gamma_{v}^{j}\right) = 0,$$
且 $\sigma(0) = p$、$\dot\sigma(0) = cv$。由唯一性 $\sigma = \gamma_{cv}$，即 $\gamma_{cv}(t) = \gamma_{v}(ct)$。
**是测地线且按弧长参数化。** 解出来的曲线满足 $\nabla_{\dot\gamma}\dot\gamma = 0$，正是测地线；又 $\frac{\mathrm{d}}{\mathrm{d}s}\langle \dot\gamma,\dot\gamma\rangle = 2\langle \nabla_{\dot\gamma}\dot\gamma,\d

> 续见 proofs/imp.geodesic-existence.3.md
