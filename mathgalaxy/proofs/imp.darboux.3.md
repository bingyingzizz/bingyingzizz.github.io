# Poincaré 引理 + 局部流 $\implies$ Moser 同伦给出 Darboux 坐标
`imp.darboux` · 推出 · strong 边 · 根 `../`

`lem.poincare-lemma` Poincaré 引理 + `thm.flow-local` 局部流 → `thm.darboux` Darboux 定理

**③ 积分成流**。在 $M\times\mathbb{R}$ 上对 $(X_{t},\partial_{t})$ 用局部流的存在唯一性（`thm.flow-local`），得 $p$ 附近定义在 $[0,1]$ 上的 $\varphi_{t}$，$\varphi_{0}=\operatorname{id}$。由 Cartan 公式与 $d\omega_{t}=0$ 得 $\frac{d}{dt}(\varphi_{t}^{*}\omega_{t})=\varphi_{t}^{*}(\mathcal{L}_{X_{t}}\omega_{t}+\eta)=\varphi_{t}^{*}(d\iota_{X_{t}}\omega_{t}+\eta)=\varphi_{t}^{*}(-d\theta+d\theta)=0$，故 $\varphi_{1}^{*}\omega=\varphi_{0}^{*}\omega_{0}=\omega_{0}$；$(q_{i}\circ\varphi_{1}^{-1},\,p_{i}\circ\varph

> 续见 proofs/imp.darboux.4.md
