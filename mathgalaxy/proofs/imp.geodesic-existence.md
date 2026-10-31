# imp.geodesic-existence
`imp.geodesic-existence` · 推出 · strong 边 · 根 `../`

`def.geodesic` 测地线 + `def.christoffel-symbol` 克里斯托费尔记号 → `prop.geodesic-existence` 测地线的局部存在唯一性

**一阶化。** 测地线方程是二阶组 $\ddot x^{k} = -\Gamma^{k}_{ij}(x)\dot x^{i}\dot x^{j}$。令 $u^{k} = \dot x^{k}$，把它写成一阶组
$$\dot x^{k} = u^{k},\qquad \dot u^{k} = -\Gamma^{k}_{ij}(x)u^{i}u^{j}.$$
右端关于 $(x,u)$ 光滑（$\Gamma$ 由光滑的 $g_{ij}$ 与 $g^{ij}$ 表出，因而光滑），于是 Picard–Lindelöf 定理给出：对每个初值 $(p,v)$ 存在 $\varepsilon > 0$ 与唯一的解 $(x,u):(-\varepsilon,\varepsilon)\to \mathbb{R}^{4}$。同一套定理的「对参数的光滑依赖」部分给出解对 $(p,v)$ 的光滑依赖。
**齐次性。** 设 $\gamma_{v}$ 是初值为 $(p,v)$ 的解。定义 $\sigma(t) = \gamma_{v}(ct)$：由链式法则 $\dot\sigma(t) = c\dot\gamma_{v}(ct)$、$\ddot\sigma(t) = c^{2}\ddot\gamma_{v}(ct)$，代入方程得
$$\ddot\sigma^{k}+\Gamma^{k}_{ij}(\sigma)\dot\sigma^{i}

> 续见 proofs/imp.geodesic-existence.2.md
