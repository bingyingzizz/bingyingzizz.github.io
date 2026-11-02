# imp.gauss-lemma
`imp.gauss-lemma` · 推出 · strong 边 · 根 `../`

`def.exponential-map` 指数映射 + `def.geodesic` 测地线 → `lem.gauss-lemma` Gauss 引理

于是
$$\partial_{\rho}\langle \partial_{\rho},\partial_{\theta}\rangle = \langle \nabla_{\partial_{\rho}}\partial_{\rho},\partial_{\theta}\rangle+\langle \partial_{\rho},\nabla_{\partial_{\rho}}\partial_{\theta}\rangle = 0+\langle \partial_{\rho},\nabla_{\partial_{\theta}}\partial_{\rho}\rangle = \frac{1}{2}\partial_{\theta}\langle \partial_{\rho},\partial_{\rho}\rangle = 0 .$$
第一步用了测地线方程，第二步用了无挠（$[\partial_{\rho},\partial_{\theta}] = 0$），第三步用了 $|\partial_{\rho}| = 1$。所以这个内积沿 $\rho$ 是常数。
**定常数。** $\rho\to0$ 时所有射线汇到同一点 $p$，$\partial_{\theta}\to0$（其长度 $O(\rho)$），故内积的极限为 $0$，常数只能是 $0$：$F\equiv0$，即 $I = \mathr

> 续见 proofs/imp.gauss-lemma.3.md
