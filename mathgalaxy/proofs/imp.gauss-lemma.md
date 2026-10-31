# imp.gauss-lemma
`imp.gauss-lemma` · 推出 · strong 边 · 根 `../`

`def.exponential-map` 指数映射 + `def.geodesic` 测地线 → `lem.gauss-lemma` 高斯引理

**先证 $\langle \partial_{\rho},\partial_{\theta}\rangle = 0$。** 在测地极坐标下 $\gamma(\rho,\theta) = \exp_{p}(\rho\cos\theta\,e_{1}+\rho\sin\theta\,e_{2})$。对固定的 $\theta$，$\rho\mapsto\gamma(\rho,\theta)$ 是测地线且按弧长参数化，所以 $|\partial_{\rho}| = 1$ 且 $\nabla_{\partial_{\rho}}\partial_{\rho} = 0$；又 $\partial_{\rho},\partial_{\theta}$ 是坐标向量场，$[\partial_{\rho},\partial_{\theta}] = 0$。于是
$$\partial_{\rho}\langle \partial_{\rho},\partial_{\theta}\rangle = \langle \nabla_{\partial_{\rho}}\partial_{\rho},\partial_{\theta}\rangle+\langle \partial_{\rho},\nabla_{\partial_{\rho}}\partial_{\theta}\rangle = 0+\langle \parti

> 续见 proofs/imp.gauss-lemma.2.md
