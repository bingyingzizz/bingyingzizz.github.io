# 标准复形的低次项 $\implies$ 低次正合列
`imp.low-degree` · 推出 · strong 边 · 根 `../`

`def.bar-resolution` 标准消解 + `def.invariant-functor` 不变量函子 → `prop.low-degree-exact` 低次正合列

**第一行。** 由上链复形的显式公式，$\delta^{0} : M \to C^{1}(G, M)$ 是 $m \mapsto (g \mapsto g m - m)$，故 $\ker\delta^{0} = M^{G}$（$\delta^{0}m = 0$ $\iff$ 每个 $g$ 都固定 $m$）。

而 $Z^{1} = \ker\delta^{1}$、$B^{1} = \operatorname{im}\delta^{0}$，于是

$$0 \to \ker\delta^{0} \to M \xrightarrow{\ \delta^{0}\ } \ker\delta^{1} \to \ker\delta^{1}\big/\operatorname{im}\delta^{0} \to 0$$

正合：第一段是 $\ker$ 的定义；第二段的核恰是 $\operatorname{im}\delta^{0}$（把 $\delta^{0}$ 的靶从 $C^{1}$ 缩到 $\ker\delta^{1}$，像不变，因为 $\delta^{1}\delta^{0} = 0$）；

第三段是商映射。

> 续见 proofs/imp.low-degree.2.md
